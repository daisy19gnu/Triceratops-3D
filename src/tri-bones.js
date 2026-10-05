// 夜明 歩『Triceratops』の骨の形の部品(2026-10-05)。
// Smithsonian の組み立て骨格「Hatcher」(USNM PAL 500000)の 3D スキャン(CC0。Wikimedia Commons
// "Triceratops horridus Marsh 1889-150k (Smithsonian Institute).stl")を観察して、骨ごとの形を寄せた。
// スキャンは倒れた姿勢で組まれ、骨格全体が 1 つの面につながっているので、姿勢の資料にも部品の切り出しにも使えない。
// ここでは骨の形を見る資料として使い、模型の骨は three.js の形から作る(外部のモデルのデータは取り込まない)。
//   観察したこと: 長い骨は両端が大きく広がり(関節の頭・顆)中ほどがくびれる / 上腕骨に大きな三角筋稜 / 大腿骨に大転子と
//   第四転子 / 椎骨は糸巻き形の椎体に前後に幅のある板状の棘突起 / 尾の椎骨の下に血道弓が並ぶ / 趾骨は短い糸巻き形、
//   末節骨は平たく丸い蹄。
import * as THREE from "three";

// a → b の向きに局所の +Y を合わせ、局所の +Z を hint(体の前など)へ向ける基底
function basis(a, b, hint = new THREE.Vector3(1, 0, 0)) {
  const Y = b.clone().sub(a).normalize();
  let Z = hint.clone().addScaledVector(Y, -hint.dot(Y));
  if (Z.lengthSq() < 1e-6) Z = new THREE.Vector3(0, 0, 1).addScaledVector(Y, -Y.z);
  Z.normalize();
  const X = new THREE.Vector3().crossVectors(Y, Z).normalize();
  return new THREE.Matrix4().makeBasis(X, Y, Z);
}
function placed(a, b, hint) {
  const g = new THREE.Group(); g.position.copy(a);
  g.quaternion.setFromRotationMatrix(basis(a, b, hint));
  return g;
}
const smooth = (x) => x * x * (3 - 2 * x);

// 長い骨: 両端が広がり、中ほどがくびれる回転体(断面は flat の比で前後に平たい楕円)。
//   opt = { r0: 近い端の半径, r1: 遠い端の半径, shaft: 中ほどの半径, flat: 断面の前後/左右の比, knobs: [{ u, at: [x, z], s: [sx, sy, sz] }] }
//   knobs は骨の上の突起(局所の座標: u = 長さの割合、at = 断面の向き(x = 外/内、z = 前/後ろ)、s = 半径)
export function longBone(a, b, mat, opt = {}) {
  const { r0 = 0.1, r1 = 0.08, shaft = 0.05, flat = 0.8, knobs = [], hint } = opt;
  const L = a.distanceTo(b), g = placed(a, b, hint);
  const pts = [];
  const N = 24;
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    // 端の広がり: 端から 22% の範囲で半径が shaft → r0 / r1 へふくらむ(関節の端は丸める)
    const e0 = u < 0.22 ? smooth(1 - u / 0.22) : 0, e1 = u > 0.78 ? smooth((u - 0.78) / 0.22) : 0;
    let r = shaft + (r0 - shaft) * e0 + (r1 - shaft) * e1;
    if (u < 0.04) r *= 0.55 + 0.45 * smooth(u / 0.04);          // 端の面を丸く閉じる
    if (u > 0.96) r *= 0.55 + 0.45 * smooth((1 - u) / 0.04);
    pts.push(new THREE.Vector2(Math.max(0.004, r), u * L));
  }
  pts.unshift(new THREE.Vector2(0.001, 0)); pts.push(new THREE.Vector2(0.001, L));
  const geo = new THREE.LatheGeometry(pts, 18);
  geo.scale(1, 1, flat);
  g.add(new THREE.Mesh(geo, mat));
  for (const k of knobs) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), mat);
    m.position.set(k.at[0], k.u * L, k.at[1]); m.scale.set(...k.s); g.add(m);
  }
  return g;
}

// 椎骨: 糸巻き形の椎体 + 板状の棘突起(前後に幅がある)+ 横突起(左右)+ 血道弓(尾の下の V 字の骨)。
//   p = 椎体の中心、tan = 背骨の向き(尾へ向かう)、size = 椎体の半径
//   opt = { spine: 棘突起の高さ, spineBack: 棘突起の後ろへの傾き, trans: 横突起の長さ, chevron: 血道弓の長さ }
export function vertebra(p, tan, size, mat, opt = {}) {
  const { spine = size * 2.2, spineBack = 0.25, trans = 0, chevron = 0 } = opt;
  const len = size * 1.15;                                       // 椎体の前後の長さ
  const g = new THREE.Group(); g.position.copy(p);
  const fwd = tan.clone().normalize().negate();                  // 頭の向き
  // 右手系の基底(横 × 上 = 前)。以前は 横 = 前 × 上 で左手系になり、回転として扱えず尾の椎骨が横を向いた
  const up0 = new THREE.Vector3(0, 1, 0), side = new THREE.Vector3().crossVectors(up0, fwd).normalize();
  const up = new THREE.Vector3().crossVectors(fwd, side).normalize();
  g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(side, up, fwd));   // 局所: x = 横、y = 上、z = 前
  // 椎体(糸巻き形: 両端の関節面が広く、中ほどがくびれる)
  const prof = [];
  for (let i = 0; i <= 10; i++) { const u = i / 10, r = size * (0.78 + 0.22 * Math.pow(Math.abs(2 * u - 1), 2)); prof.push(new THREE.Vector2(r, (u - 0.5) * len)); }
  prof.unshift(new THREE.Vector2(0.001, -len / 2)); prof.push(new THREE.Vector2(0.001, len / 2));
  const c = new THREE.LatheGeometry(prof, 14); c.rotateX(Math.PI / 2);   // 回転軸を前後(z)へ
  g.add(new THREE.Mesh(c, mat));
  // 神経弓と棘突起: 前後に幅のある板(上ほど細く、後ろへ傾く)
  if (spine > 0) {
    const sg = new THREE.BoxGeometry(size * 0.35, spine, len * 0.95, 1, 4, 1), pa = sg.attributes.position;   // 前後に幅広く、隣とほぼ接する
    for (let i = 0; i < pa.count; i++) {
      const t = (pa.getY(i) + spine / 2) / spine;                // 0 = 根元、1 = 先
      pa.setZ(i, pa.getZ(i) * (1 - 0.45 * t) - spineBack * spine * t);
      pa.setX(i, pa.getX(i) * (1 - 0.3 * t));
    }
    sg.computeVertexNormals();
    const sm = new THREE.Mesh(sg, mat); sm.position.y = size * 0.75 + spine / 2; g.add(sm);
  }
  // 横突起(左右へ、やや上向き)
  if (trans > 0) for (const s of [1, -1]) {
    const tg = new THREE.ConeGeometry(size * 0.28, trans, 8); tg.scale(1, 1, 0.45);
    const tm = new THREE.Mesh(tg, mat);
    tm.position.set(s * (size * 0.5 + trans / 2), size * 0.75, 0); tm.rotation.z = -s * (Math.PI / 2 - 0.15); g.add(tm);
  }
  // 血道弓(尾の椎骨の下。後ろ下へ向く V 字の骨。先は 1 本の板)
  if (chevron > 0) {
    const cg = new THREE.BoxGeometry(size * 0.3, chevron, len * 0.4, 1, 3, 1), pa = cg.attributes.position;
    for (let i = 0; i < pa.count; i++) { const t = (chevron / 2 - pa.getY(i)) / chevron; pa.setZ(i, pa.getZ(i) * (1 - 0.3 * t) - 0.35 * chevron * t); }
    cg.computeVertexNormals();
    const cm = new THREE.Mesh(cg, mat); cm.position.set(0, -size * 0.9 - chevron / 2, -len * 0.3); g.add(cm);
  }
  return g;
}

// 趾: 短い糸巻き形の趾骨をつなぎ、先に平たく丸い蹄(末節骨)を付ける
export function digit(base, dir, lengths, width, mat) {
  const g = new THREE.Group(); let p = base.clone();
  const d = dir.clone().normalize();
  lengths.forEach((L, i) => {
    const q = p.clone().addScaledVector(d, L), last = i === lengths.length - 1;
    if (!last) g.add(longBone(p, q, mat, { r0: width * 0.62, r1: width * 0.55, shaft: width * 0.4, flat: 0.7, hint: new THREE.Vector3(0, 1, 0) }));
    else {
      // 平たく幅広い蹄(鋤の形。Hatcher ほか 1907、Lull 1933)。上が丸く下が平たい半球を、地面に平らに置き、趾の向きへ伸ばす
      const hoof = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), mat);
      const Zh = new THREE.Vector3(d.x, 0, d.z).normalize(), Yh = new THREE.Vector3(0, 1, 0), Xh = new THREE.Vector3().crossVectors(Yh, Zh);
      hoof.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(Xh, Yh, Zh));
      hoof.scale.set(width * 1.2, width * 0.55, L * 0.75);
      hoof.position.copy(p).addScaledVector(d, L * 0.4); hoof.position.y -= width * 0.25;
      g.add(hoof);
    }
    p = q;
  });
  return g;
}
