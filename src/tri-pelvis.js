// 夜明 歩『Triceratops』の骨盤と仙骨(2026-10-04 作り直し)。資料は docs/RESEARCH-pelvis-and-hindlimb.md。
//
// ■ 採った値と根拠(寸法は USNM の組み立て骨格、Gilmore 1905。後ろあしと同じく 1.0 倍)
//   - 腸骨: 水平な板。長さ 1.50 m・刃の幅 0.32 m。前と後ろの突起はほぼ同じ長さで、寛骨臼(股関節の受け口)は長さの中ほど。
//     前端は幅広く、後端は細くとがる(Hatcher, Marsh & Lull 1907)。前端の外への開きは、Triceratops の数値が無いので
//     Centrosaurus YPM 2015 の左右幅の比(前端 753 / 坐骨の柄の上 630 / 後端 190 mm、Lull 1933)を参考にした(種が違う)。
//   - 坐骨: 細い棒。長さ 1.50 m(外側の曲がりに沿って)。下へ、そして内へ一様な弧で曲がり、左右が正中で出会う
//     (Hatcher ほか 1907)。USNM の組み立て骨格の坐骨の位置は「きわめて推測的」(Lull、HML1907 p.192)。
//   - 恥骨: 前恥骨が発達し、下前方へ向かい、内へは向かわない。先は幅広い刃(長さ 0.85 m、先の幅 0.28 m)。
//     後恥骨は Triceratops では痕跡的なので作らない(Hatcher ほか 1907、Gilmore 1905)。
//   - 仙骨: 癒合した椎骨 10 個。第 2〜9 仙椎の横突起の先が腸骨に接し、第 1 と第 10 は届かない(Hatcher ほか 1907)。
//     長軸は水平に置く(Senter & Robins 2015。観察は Centrosaurus・Styracosaurus)。
import * as THREE from "three";

// hip = 右の股関節の位置(x, y, z>0)、curve = 背骨の曲線、tAtX(curve, x)
export function buildPelvis(mats, opt) {
  const { hip, curve, tAtX } = opt;
  const g = new THREE.Group(); g.name = "pelvis";
  const IL = 1.50, BLADE = 0.32, ilY = hip.y + 0.30;
  const xF = hip.x + IL / 2, xR = hip.x - IL / 2;
  // 腸骨の外縁の左右の位置(u = 0 前端 → 1 後端)。Centrosaurus の比 753 : 630 : 190 を、寛骨臼の上の外縁 0.52 m に合わせた
  const latZ = (u) => {
    const k = [[0, 0.62], [0.5, 0.52], [0.8, 0.36], [1, 0.16]];
    for (let i = 0; i < k.length - 1; i++) if (u <= k[i + 1][0]) {
      const t = (u - k[i][0]) / (k[i + 1][0] - k[i][0]), s = t * t * (3 - 2 * t); return k[i][1] + (k[i + 1][1] - k[i][1]) * s;
    }
    return k[k.length - 1][1];
  };
  const bladeW = (u) => BLADE * (1.1 - 0.75 * u);            // 前端は幅広く、後端は細い
  for (const s of [1, -1]) {
    // 腸骨の板(上から見た形を Shape にし、上下へ厚みを付ける)
    const shp = new THREE.Shape(), N = 24;
    // 形の 2 番目の座標は -z(rotateX(-90°) で z に戻る)。左右は鏡に映さず、それぞれの側の座標で作る
    //   (鏡に映すと面の向きが裏返り、片側が暗く塗られて見えなくなった)
    for (let i = 0; i <= N; i++) { const u = i / N, x = xF - IL * u; const z = s * latZ(u); i === 0 ? shp.moveTo(x, -z) : shp.lineTo(x, -z); }
    for (let i = N; i >= 0; i--) { const u = i / N, x = xF - IL * u; const z = s * Math.max(0.05, latZ(u) - bladeW(u)); shp.lineTo(x, -z); }
    const geo = new THREE.ExtrudeGeometry(shp, { depth: 0.04, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2, curveSegments: 4 });
    geo.rotateX(-Math.PI / 2);                               // 形の (x, -z) → 水平面の (x, z)、厚みは上向き
    const il = new THREE.Mesh(geo, mats.bone); il.position.y = ilY; g.add(il);
    // 寛骨臼の上の柄(腸骨の外縁から股関節の上へ)と、寛骨臼の縁
    const zA = s * (hip.z - 0.08);
    g.add(rodBetween(new THREE.Vector3(hip.x, ilY, s * 0.50), new THREE.Vector3(hip.x, hip.y + 0.10, zA), 0.10, 0.08, mats.bone));
    // 寛骨臼の縁の輪は外した(宙に浮いた輪に見えた。大腿骨頭を tri-bones.js で付けたので受け口はそれで見える)
    // 坐骨: 寛骨臼の後ろ下から、下・後ろ・内へ一様な弧(長さ 約 1.50)。先は正中の近くで左右が出会う
    const isc = new THREE.CatmullRomCurve3([
      new THREE.Vector3(hip.x - 0.14, hip.y - 0.08, s * (hip.z - 0.12)),
      new THREE.Vector3(hip.x - 0.55, hip.y - 0.30, s * 0.46),
      new THREE.Vector3(hip.x - 0.95, hip.y - 0.62, s * 0.24),
      new THREE.Vector3(hip.x - 1.18, hip.y - 0.95, s * 0.05)]);
    g.add(taperTube(isc, 0.075, 0.035, mats.bone));
    // 恥骨: 寛骨臼の前下から、下前方へ(内へは向かない)。先は幅広い刃
    const pubTip = new THREE.Vector3(hip.x + 0.76, hip.y - 0.36, s * 0.50);
    const pub = new THREE.CatmullRomCurve3([new THREE.Vector3(hip.x + 0.12, hip.y - 0.08, s * (hip.z - 0.12)),
      new THREE.Vector3(hip.x + 0.45, hip.y - 0.22, s * 0.52), pubTip]);
    g.add(taperTube(pub, 0.06, 0.04, mats.bone));
    const blade = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), mats.bone);
    blade.position.copy(pubTip); blade.scale.set(0.16, 0.10, 0.03);   // 先の刃(幅 0.28 m)
    blade.rotation.z = -0.4; g.add(blade);
  }
  // 仙骨の肋骨: 腸骨の前後の範囲に仙椎 10 個を置き、第 2〜9 の横突起を腸骨の内縁へ渡す
  for (let i = 0; i < 10; i++) {
    const u = 0.04 + 0.92 * i / 9, x = xF - IL * u;
    if (i === 0 || i === 9) continue;                         // 第 1 と第 10 は腸骨に届かない
    const p = curve.getPoint(tAtX(curve, x));
    for (const s of [1, -1]) {
      const to = new THREE.Vector3(x, ilY + 0.03, s * Math.max(0.06, latZ(u) - bladeW(u) + 0.02));
      g.add(rodBetween(new THREE.Vector3(p.x, p.y - 0.04, s * 0.05), to, 0.05, 0.04, mats.bone));
    }
  }
  return g;
}

function rodBetween(a, b, r0, r1, material) {
  const d = new THREE.Vector3().subVectors(b, a);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, d.length(), 10, 1), material);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  return m;
}
function taperTube(curve, r0, r1, material) {
  const geo = new THREE.TubeGeometry(curve, 32, 1, 10, false), pa = geo.attributes.position;
  // TubeGeometry の半径を、曲線に沿って r0 → r1 へ細くする(断面ごとに中心から縮める)
  const segs = 32, rad = 10;
  for (let i = 0; i <= segs; i++) {
    const c = curve.getPointAt(i / segs), r = r0 + (r1 - r0) * (i / segs);
    for (let j = 0; j <= rad; j++) {
      const k = i * (rad + 1) + j, v = new THREE.Vector3(pa.getX(k), pa.getY(k), pa.getZ(k)).sub(c).multiplyScalar(r).add(c);
      pa.setXYZ(k, v.x, v.y, v.z);
    }
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}
