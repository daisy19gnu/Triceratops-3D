// 夜明 歩『Triceratops』の肋骨と胸骨(2026-10-04 作り直し)。資料は docs/RESEARCH-ribcage-and-sternum.md。
//
// ■ 採った値と根拠(資料が割れている点は、どちらを採ったかを書く)
//   - 胴の肋骨 12 対。関節したまま見つかった角竜類 3 体(Centrosaurus AMNH 5351・Styracosaurus CMN 344・Vagaceratops CMN 41357)が
//     すべて 12(Brown 1917 ほか)。Triceratops の一次資料(Hatcher, Marsh & Lull 1907)は胴椎 14 で、境目の決め方が違う。
//   - 首の肋骨 6 対(頸椎 3〜8。Hatcher ほか 1907)。後ろほど長く、最後の首の肋骨は第 1 胴肋に近い長さ(Centrosaurus、Brown 1917)。
//   - 最長は第 3 胴肋、第 2〜6 はほぼ同じ長さ(Centrosaurus、Brown 1917。Triceratops で番号を示した資料は見つからなかった)。
//   - 形: 前の数本は付け根で急に下へ折れ、あとはほぼまっすぐ(胸の前部は狭い)。第 4〜5 胴肋で曲がり始め、第 9 胴肋あたりで
//     広い樽形(Thompson & Holmes 2007、Chasmosaurus irvinensis)。後ろの肋骨は「細くまっすぐに近い」(Hatcher 1907)と
//     「短く強く曲がる」(Holmes 2014)で割れている → 短くし、曲がりは中ほどの肋骨と同じ程度にした(当方の選択)。
//   - 付け根は横突起(椎骨の横の突起)。断面は前後に幅のある平たい板(組み立て骨格の写真 LA-Triceratops mount-1.jpg の観察)。
//   - 後ろの肋骨ほど後ろへ傾ける(当方の造形。資料の数値は無い)。
//   - 胸骨の板: 左右 1 対で癒合しない。長さ 580 mm・中央の幅 220 mm・左右合わせた幅(烏口骨の付く所)660 mm(Triceratops AMNH 971、
//     Brown 1906)。とがった前端が烏口骨に付き、後端は厚く、軟骨の肋骨が付く。模型の頭骨(2.2 m)に合わせて 1.15 倍。
//   - 胸骨の肋骨は軟骨(骨として残らない)。前の数本だけが胸骨の後端へつながる(Vagaceratops で C9・D1・D2、Holmes 2014)。
//     模型では最後の首の肋骨と第 1・2 胴肋を、軟骨の色で薄く見せる(推定)。
//   - 腹肋は付けない(派生した鳥盤類には無い。Radermacher ほか 2021)。
import * as THREE from "three";

const DORSAL_N = 12, CERVICAL_N = 6;
const STERNUM_SCALE = 1.15;

// 肋骨の長さの前後の変化(第 1 胴肋 = 0 → 第 12 胴肋 = 1)。第 2〜6 がほぼ同じで最長、後ろは短い
function dorsalLength(f) {
  if (f < 2 / 11) return 0.86 + 0.14 * (f / (2 / 11));
  if (f <= 5 / 11) return 1.0;
  return 1.0 - 0.52 * Math.pow((f - 5 / 11) / (6 / 11), 1.3);
}
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// 平たい板の肋骨: 曲線に沿って楕円の断面を流す。幅は体の前後(背骨の向き)、厚みはそれと直交する向き
function bladeGeometry(curve, axis, hw0, hw1, ht) {
  const NS = 28, NR = 8, pos = [], idx = [];
  for (let i = 0; i <= NS; i++) {
    const u = i / NS, c = curve.getPoint(u), T = curve.getTangent(u);
    const W = axis.clone().addScaledVector(T, -axis.dot(T)).normalize(), N = new THREE.Vector3().crossVectors(T, W).normalize();
    const hw = hw0 + (hw1 - hw0) * u, h = ht * (1 - 0.4 * u);
    for (let j = 0; j < NR; j++) {
      const a = (j / NR) * Math.PI * 2;
      const q = c.clone().addScaledVector(W, Math.cos(a) * hw).addScaledVector(N, Math.sin(a) * h);
      pos.push(q.x, q.y, q.z);
    }
  }
  for (let i = 0; i < NS; i++) for (let j = 0; j < NR; j++) {
    const a = i * NR + j, b = (i + 1) * NR + j, a1 = i * NR + (j + 1) % NR, b1 = (i + 1) * NR + (j + 1) % NR;
    idx.push(a, b, a1, b, b1, a1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// 肋骨・胸骨を作る。curve = 背骨の曲線、mats = { bone, cartilage }、
// body = { bodyProf(t) → [ry, rz], bodyDown(t), tAtX(curve, x), headX(後頭部の x) }
export function buildRibcage(curve, mats, body) {
  const g = new THREE.Group(); g.name = "ribcage";
  const up = new THREE.Vector3(0, 1, 0);
  let maxOut = 0;                               // 肋骨の点が皮膚の断面のどこまで外へ出たか(1 を超えたら皮膚の外)
  const frame = (t) => {
    const p = curve.getPoint(t), tan = curve.getTangent(t);
    const lat = new THREE.Vector3(0, 0, 1), nup = new THREE.Vector3().crossVectors(new THREE.Vector3().crossVectors(tan, up).normalize(), tan).normalize();
    const [ry, rz] = body.bodyProf(t);
    return { p, tan, lat, nup: nup.y < 0 ? nup.negate() : nup, ry, rz, down: body.bodyDown(t) };
  };
  // 1 本の肋骨の通り道。shape = 0(前: 急に下へ折れてまっすぐ)→ 1(樽形)、len = 長さの比、sweep = 後ろへの傾き(m)
  const ribPath = (F, s, shape, len, sweep) => {
    const k = 0.88;                             // 皮膚の断面に対する肋骨の位置(内側へ)
    const vAt = (a) => -F.ry * F.down + k * F.ry * Math.sin(a) * (Math.sin(a) < 0 ? 0.82 : 1);
    // 最長の肋骨の下の端は、胸骨の板のある胸の床の近くまで(組み立て骨格の写真では、肋骨は肘と胸骨の高さまで下りる)
    const SPAN = 130;
    const aEnd = (55 - SPAN * len) * Math.PI / 180;
    const barrel = [0, 1, 2, 3].map((i) => { const a = (55 - SPAN * len * i / 3) * Math.PI / 180; return [k * F.rz * Math.cos(a), vAt(a)]; });
    const vEnd = vAt(aEnd);
    const front = [[0.35 * F.rz, -0.12], [0.45 * F.rz, 0.45 * vEnd], [0.52 * F.rz, 0.8 * vEnd], [0.55 * F.rz, vEnd]];
    const pts = [F.p.clone().addScaledVector(F.lat, s * 0.12).addScaledVector(F.nup, -0.03)];   // 横突起の先
    for (let i = 0; i < 4; i++) {
      let w = front[i][0] + (barrel[i][0] - front[i][0]) * shape, v = front[i][1] + (barrel[i][1] - front[i][1]) * shape;
      // 皮膚の断面(楕円)の 0.9 倍より外へ出る点は、断面の中心へ寄せる(前の肋骨のまっすぐな形の下の端が外へ出ていた)
      const vr = v + F.ry * F.down, r = Math.hypot(w / F.rz, vr / (F.ry * (vr < 0 ? 0.82 : 1)));
      if (r > 0.9) { w *= 0.9 / r; v = vr * 0.9 / r - F.ry * F.down; }
      const b = sweep * Math.pow((i + 1) / 4, 1.2);
      pts.push(F.p.clone().addScaledVector(F.lat, s * w).addScaledVector(F.nup, v).addScaledVector(F.tan, b));
    }
    // 皮膚の外へ出ていないかを測る(断面の楕円で正規化した半径)
    for (const q of pts.slice(1)) {
      const d = q.clone().sub(F.p), wv = Math.abs(d.dot(F.lat)), vv = d.dot(F.nup) + F.ry * F.down;
      const r = Math.hypot(wv / F.rz, vv / (F.ry * (vv < 0 ? 0.82 : 1)));
      maxOut = Math.max(maxOut, r);
    }
    return new THREE.CatmullRomCurve3(pts, false, "centripetal");
  };
  const ends = { C: [], D: [] };                // 胸骨へつなぐ肋骨の下の端
  // 胴の肋骨: 第 1 胴肋は関節窩の少し前、第 12 胴肋は腸骨の前端の少し前
  const xD1 = 1.30, xD12 = -0.20;
  for (let i = 0; i < DORSAL_N; i++) {
    const f = i / (DORSAL_N - 1), x = xD1 + (xD12 - xD1) * f, F = frame(body.tAtX(curve, x));
    const shape = smooth(3 / 11, 8 / 11, f), len = dorsalLength(f), sweep = 0.06 + 0.30 * f;
    for (const s of [1, -1]) {
      const c = ribPath(F, s, shape, len, sweep);
      g.add(new THREE.Mesh(bladeGeometry(c, F.tan.clone().negate(), 0.065, 0.04, 0.016), mats.bone));
      if (i < 2) ends.D.push({ s, q: c.getPoint(1) });
    }
  }
  // 首の肋骨(頸椎 3〜8): 後ろほど長い。最後の首の肋骨は第 1 胴肋に近い長さ
  const xC3 = body.headX - 0.30, xC8 = xD1 + 0.13;
  for (let i = 0; i < CERVICAL_N; i++) {
    const f = i / (CERVICAL_N - 1), x = xC3 + (xC8 - xC3) * f, F = frame(body.tAtX(curve, x));
    const len = 0.14 + (0.86 * 0.82 - 0.14) * Math.pow(f, 1.6);
    for (const s of [1, -1]) {
      const c = ribPath(F, s, 0, len, 0.10 + 0.05 * f);
      g.add(new THREE.Mesh(bladeGeometry(c, F.tan.clone().negate(), 0.03 + 0.015 * f, 0.018, 0.012), mats.bone));
      if (i === CERVICAL_N - 1) ends.C.push({ s, q: c.getPoint(1) });
    }
  }
  // 胸骨の板(左右 1 対): とがった前端は外前へ(左右の烏口骨へ)、厚い後端は正中の近くへ。胸の床に沿わせる
  const L = 0.58 * STERNUM_SCALE, W = 0.22 * STERNUM_SCALE, halfSpan = 0.66 * STERNUM_SCALE / 2;
  const xFront = 1.36, xBack = xFront - Math.sqrt(L * L - Math.pow(halfSpan - 0.06, 2));   // 斜めに置いても長さが L になるように
  const plateShape = new THREE.Shape();
  const NO = 24;
  for (let i = 0; i <= NO; i++) {                // 外縁(わずかに凹む)
    const u = i / NO, wdt = W * (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, u / 0.45) / 2)) * (u > 0.45 ? Math.pow(1 - (u - 0.45) / 0.55, 0.7) : 1);
    const px = u * L, py = wdt - 0.02 * Math.sin(Math.PI * u);
    if (i === 0) plateShape.moveTo(px, 0); plateShape.lineTo(px, py);
  }
  plateShape.lineTo(L, 0); plateShape.lineTo(0, 0);   // 内縁はまっすぐ(正中で左右が向き合う)
  const plateGeo = new THREE.ExtrudeGeometry(plateShape, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.008, bevelSegments: 1, curveSegments: 4 });
  const sternal = [];
  for (const s of [1, -1]) {
    const back = new THREE.Vector3(xBack, 0, s * 0.06), front = new THREE.Vector3(xFront, 0, s * halfSpan);
    const Fm = frame(body.tAtX(curve, (xFront + xBack) / 2));
    const floorY = Fm.p.y - Fm.ry * Fm.down - 0.86 * Fm.ry * 0.82 + 0.05;   // 胸の床(皮膚の少し内側)
    back.y = front.y = floorY;
    const m = new THREE.Mesh(plateGeo, mats.bone);
    // 局所の x = 後端 → 前端、局所の y = 外縁の向き、押し出しの z = 上下
    const ax = front.clone().sub(back).normalize(), ay = new THREE.Vector3(0, 0, s).addScaledVector(ax, -ax.z * s).normalize();
    const az = new THREE.Vector3().crossVectors(ax, ay).normalize();
    m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(ax, ay, az)); m.position.copy(back);
    g.add(m);
    sternal.push({ s, back, front, ax, ay });
  }
  // 烏口骨の突起: 烏口骨(関節窩の横)から胸骨の板の前端へ(前端が烏口骨の末端と関節する。Brown 1906、1917)
  if (body.coracoid) for (const st of sternal) {
    const c0 = new THREE.Vector3(body.coracoid[0], body.coracoid[1], st.s * body.coracoid[2]);
    const tip = st.front.clone().add(new THREE.Vector3(0, 0.03, 0));
    const len = c0.distanceTo(tip), geo = new THREE.CylinderGeometry(0.03, 0.06, len, 10);
    const m = new THREE.Mesh(geo, mats.bone); m.position.copy(c0).lerp(tip, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tip.clone().sub(c0).normalize()); g.add(m);
  }
  // 軟骨の肋骨(推定): 最後の首の肋骨と第 1・2 胴肋の下の端 → 胸骨の板の後端(外寄り)
  for (const st of sternal) {
    const tips = [...ends.C, ...ends.D].filter((e) => e.s === st.s);
    tips.forEach((e, j) => {
      const anchor = st.back.clone().addScaledVector(st.ay, W * (0.35 + 0.15 * j)).add(new THREE.Vector3(0, 0.02, 0));
      const mid = e.q.clone().lerp(anchor, 0.5).add(new THREE.Vector3(0, -0.06, 0));
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([e.q, mid, anchor]), 12, 0.022, 6, false), mats.cartilage));
    });
  }
  g.userData.maxOut = maxOut;
  g.userData.sternal = sternal.map((st) => ({ s: st.s, front: st.front.toArray(), back: st.back.toArray() }));
  return g;
}
