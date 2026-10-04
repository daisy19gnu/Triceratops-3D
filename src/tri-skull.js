// 夜明 歩『Triceratops』の頭骨(2026-10-04 作り直し)。
// 輪郭は Houston Museum of Natural Science の頭骨の左側面の写真(Wikimedia Commons "Triceratops skull houston.JPG"、
// Public domain、Nekarius)から読み取った(px はその 1280 px 版の座標。ref/houston-left-1280.jpg)。
// 縮尺は下の S(802 px = 2.2 m)。照合は build.sh photo(模型を正射影で描いて写真に重ねる)。
// 幅(左右)は UCMP の成体の頭骨の正面の写真("Adult Triceratops horridus skull UCMP 2.JPG"、CC BY 3.0)を見て決めた推定。
// 咬み合わせ: 下あごは上あごの内側で閉じ、歯ははさみのように切る(Hatcher 1907 p.46、Varriale 2016)。
// 座標: x = 前、y = 上、z = 左右。単位はメートル。写真の px → モデルの座標は P()。
import * as THREE from "three";

// 頭骨の大きさ: 802 px を 2.2 m にする(1 px = 2.77 mm)。1.85 m では全長に対して約 24% で頭が小さく見えた。
// 古い組み立て骨格(Gilmore 1905)では頭骨 1.83 m・全長 5.99 m のほぼ 3 分の 1、大きな個体の頭骨は 2.5 m 近くになる
// (RESEARCH-skull-and-locomotion.md A)。このモデルの全長(約 7.8 m)に対して約 28%。
const S = 0.00277;
const PX0 = 750, PY0 = 520;              // 写真の後頭顆(首の付け根)あたり
const X0 = 3.05, Y0 = 1.8;               // それをモデルのこの点に置く(胴の管の首の先端と合わせる)
export function P(px, py) { return [X0 + (PX0 - px) * S, Y0 + (PY0 - py) * S]; }
const V2 = (pts) => pts.map(([px, py]) => new THREE.Vector2(...P(px, py)));

// ── 写真から読み取った輪郭(px)────────────────────────────────────
// 顔(角とフリルを除く上側の頭骨)の外形。くちばしの先 → 鼻の角の根元 → 背の線 → 角の根元 → 頭骨の後ろ → 頬 → 上の歯の列 → くちばし
// 2026-10-04 改: 頬の後半の下縁(頬骨)と上あごの歯の列の段差、その内側の鉤状突起の入る隙間を写真どおりに
//   (読み直した座標を写真に重ねて確かめた)
const FACE = [[258, 718], [262, 660], [280, 615], [305, 585], [330, 555], [345, 525], [380, 500], [430, 478], [480, 460],
  [520, 438], [548, 408], [575, 360], [610, 330], [660, 305], [690, 300], [720, 360], [745, 430], [760, 520],
  [748, 536], [721, 545], [682, 533], [643, 523], [618, 523], [603, 542], [596, 577], [556, 602], [510, 631], [465, 653],
  [400, 700], [340, 722], [290, 728]];
// 皮膚の顔の外形: 頬の下縁は骨のように鉤状突起の入る隙間を開けず、上の歯の列に沿って閉じる
//   (骨の輪郭をそのまま使うと、頬と下あごの間に黒い隙間が出た。生体では頬の筋肉と皮膚が覆う)
const SKIN_FACE = [...FACE.slice(0, FACE.findIndex(([x, y]) => x === 748 && y === 536)),
  [756, 548], [720, 566], [680, 578], [640, 588], [600, 600], [556, 615], [510, 636], [465, 656], [400, 700], [340, 722], [290, 728]];
const NARIS = [[350, 528], [400, 516], [450, 522], [476, 546], [470, 580], [430, 600], [380, 604], [348, 590], [340, 556]];   // 外鼻孔
// 眼窩: 前下方へ広がる不整形(写真の黒い部分には奥の骨も重なるので、縁の位置は ±20 px ほどの読み取り)
const ORBIT = [[593, 357], [610, 351], [623, 365], [622, 395], [612, 424], [598, 436], [576, 434], [561, 423], [568, 404], [586, 393], [587, 374]];
const LTF = [[706, 446], [726, 450], [732, 476], [714, 482], [704, 466]];                                                    // 下側頭窓
// 下あご(歯骨 + 前歯骨)。写真では口が開いているので、あとで関節のまわりに回して閉じる
//   歯の列の上縁 → 鉤状突起(高く立つ。上端 y 530 前後)→ 関節 → 下縁
const JAW = [[320, 802], [370, 778], [420, 746], [450, 708], [478, 681], [522, 657], [570, 632], [608, 610], [631, 595],
  [635, 575], [626, 559], [607, 552], [606, 534], [625, 533], [653, 541], [678, 558], [704, 564], [731, 552], [747, 542],
  [751, 555], [743, 578], [706, 614], [645, 678], [565, 728], [475, 776], [395, 812], [335, 813]];
const JAW_JOINT = [747, 552];
// 上下の歯の列(線)
const UPPER_TEETH = [[465, 653], [602, 578]];
const LOWER_TEETH = [[478, 681], [623, 603]];
// 角(中心線)と根元の太さ
// 眼窩上角: 先頭の点は頭骨の中(根元を後眼窩骨の盛り上がりの中へ延ばす。以前は根元の中心が顔の面の外にあり、円錐の底が見えていた)
const BROW_HORN = [[690, 440], [650, 372], [612, 336], [520, 300], [400, 280], [290, 262], [182, 258]];
const NASAL_HORN = [[344, 543], [328, 525], [313, 510], [298, 509]];   // 幅広く短い(Houston)

// 顔の左右の半幅(x の関数)。くちばしの先は細く、眼窩のあたりから後ろが広い(UCMP の正面の写真を見た推定)
function halfWidth(x) {
  // 1.2 倍にした頭骨に合わせた半幅(x はくちばしの先 約 4.41 → 首の付け根 3.05)
  const k = [[4.41, 0.04], [4.2, 0.13], [3.96, 0.22], [3.66, 0.36], [3.36, 0.46], [3.1, 0.48], [2.95, 0.43]];
  if (x >= k[0][0]) return k[0][1];
  for (let i = 0; i < k.length - 1; i++) {
    const [xa, wa] = k[i], [xb, wb] = k[i + 1];
    if (x <= xa && x >= xb) return wa + (wb - wa) * (xa - x) / (xa - xb);
  }
  return k[k.length - 1][1];
}

function pointInPoly(p, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if (((a.y > p.y) !== (b.y > p.y)) && (p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x)) c = !c;
  }
  return c;
}
// 輪郭の上端・下端(ある x での y の最大・最小)
function spanAt(poly, x) {
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    if ((a.x - x) * (b.x - x) <= 0 && a.x !== b.x) {
      const y = a.y + (b.y - a.y) * (x - a.x) / (b.x - a.x);
      lo = Math.min(lo, y); hi = Math.max(hi, y);
    }
  }
  return [lo, hi];
}

// 顔の断面の左右の幅の係数(v = 0 が下縁、1 が上縁)。上縁にも幅を残し、屋根の面で左右をつなぐ
//   (以前は上へ行くほど 0 へ絞った左右 2 枚の壁で、正面から見ると額が鋭い稜線、鼻先が二股に割れていた)
const SECTION = [[0, 0.78], [0.2, 1.0], [0.5, 1.0], [0.8, 0.88], [1, 0.55]];
function sectionK(v) {
  for (let i = 0; i < SECTION.length - 1; i++) {
    const [va, ka] = SECTION[i], [vb, kb] = SECTION[i + 1];
    if (v <= vb) { const t = (v - va) / (vb - va), u = t * t * (3 - 2 * t); return ka + (kb - ka) * u; }
  }
  return SECTION[SECTION.length - 1][1];
}
const WALL_TOP = 0.9;   // 壁は上縁の 9 割の高さまで。残りを屋根のアーチにする
// 断面の評価: ある (x, y) での壁の左右の位置。顔の面・目・鼻孔をすべて同じ式で置く
function makeSection(outline, opts = {}) {
  const { inflate = 0, widthAdd = 0, cheek = 0.15 } = opts;
  const span = (x) => { const [lo, hi] = spanAt(outline, x); return [lo - inflate, hi + inflate]; };
  const flare = (x, v) => 1 + cheek * Math.exp(-Math.pow((v - 0.18) / 0.2, 2)) * (x < 3.75 ? 1 : Math.max(0, 1 - (x - 3.75) / 0.25));
  const widthAt = (x, v) => (halfWidth(x) + widthAdd) * sectionK(v) * flare(x, v);
  const zAt = (x, y) => {
    const [lo, hi] = span(x); if (!isFinite(lo) || hi - lo < 1e-4) return widthAdd;
    const v = Math.min(1, Math.max(0, (y - lo) / ((hi - lo) * WALL_TOP)));
    return widthAt(x, v);
  };
  return { span, widthAt, zAt };
}
// 多角形の境界上の最も近い点
function nearestOnPoly(p, poly) {
  let best = null, bd = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], ab = b.clone().sub(a);
    const t = Math.min(1, Math.max(0, p.clone().sub(a).dot(ab) / ab.lengthSq()));
    const q = a.clone().addScaledVector(ab, t), d = q.distanceToSquared(p);
    if (d < bd) { bd = d; best = q; }
  }
  return best;
}
// 顔: 列(x)ごとに閉じた断面(左の壁 → 屋根のアーチ → 右の壁 → 口蓋のアーチ)。
//   穴は、穴の中に入った壁の頂点を穴の縁へ寄せ、4 頂点とも穴の中の面だけを抜く(縁が格子のぎざぎざにならない)。
function faceGeometry(outline, holes, opts) {
  const { nx = 110, ny = 32, nr = 8 } = opts;   // 200×60 ではワイヤーフレームが密すぎて中実に見えた
  const sec = makeSection(outline, opts);
  const xs = outline.map((p) => p.x), xmin = Math.min(...xs), xmax = Math.max(...xs);
  const ring = [];                         // 断面の 1 周の並び: { kind, side, v | phi }
  for (let j = 0; j <= ny; j++) ring.push({ kind: "wall", side: 1, v: j / ny });
  for (let k = 1; k < nr; k++) ring.push({ kind: "roof", phi: Math.PI * k / nr });
  for (let j = ny; j >= 0; j--) ring.push({ kind: "wall", side: -1, v: j / ny });
  for (let k = 1; k < nr; k++) ring.push({ kind: "palate", phi: Math.PI * k / nr });
  const R = ring.length, pos = [], uv = [], idx = [], inHole = [];
  for (let i = 0; i <= nx; i++) {
    const x = Math.min(xmax - 1e-6, Math.max(xmin + 1e-6, xmin + (xmax - xmin) * (i / nx)));
    const [lo, hi] = sec.span(x), ok = isFinite(lo) && hi - lo > 1e-4;
    const yTop = lo + (hi - lo) * WALL_TOP, wTop = sec.widthAt(x, 1), wBot = sec.widthAt(x, 0);
    for (let r = 0; r < R; r++) {
      const q = ring[r]; let px = x, py, pz, hole = false;
      if (!ok) { py = lo || 0; pz = 0; }
      else if (q.kind === "wall") {
        py = lo + (yTop - lo) * q.v;
        const p2 = new THREE.Vector2(px, py), h = holes.find((hh) => pointInPoly(p2, hh));
        if (h) { hole = true; const n = nearestOnPoly(p2, h); px = n.x; py = n.y; }
        pz = q.side * sec.zAt(px, py);
      } else if (q.kind === "roof") {     // 側から見た上縁(hi)を屋根の頂に合わせる
        py = yTop + (hi - yTop) * Math.sin(q.phi); pz = wTop * Math.cos(q.phi);
      } else {                             // 口蓋: 下縁から口の中へ少し持ち上がる天井
        py = lo + (hi - lo) * 0.12 * Math.sin(q.phi); pz = -wBot * Math.cos(q.phi);
      }
      pos.push(px, py, pz); uv.push(i / nx, r / R); inHole.push(hole);
    }
  }
  for (let i = 0; i < nx; i++) for (let r = 0; r < R; r++) {
    const a = i * R + r, b = (i + 1) * R + r, a1 = i * R + (r + 1) % R, b1 = (i + 1) * R + (r + 1) % R;
    if (inHole[a] && inHole[b] && inHole[a1] && inHole[b1]) continue;
    idx.push(a, b, a1, b, b1, a1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  return geo;
}

// 穴の縁の骨の厚み: 穴の境界を顔の面の上に置き、内側へ thick だけ入った帯でつなぐ
function holeRim(hole, sec, side, material, thick = 0.022) {
  const n = 64, pts = new THREE.CatmullRomCurve3(hole.map((p) => new THREE.Vector3(p.x, p.y, 0)), true).getSpacedPoints(n);
  const pos = [], idx = [];
  for (let i = 0; i <= n; i++) {
    const p = pts[i % n], z = sec.zAt(p.x, p.y);
    pos.push(p.x, p.y, side * z, p.x, p.y, side * Math.max(0, z - thick));
  }
  for (let i = 0; i < n; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

// 下あご: 左右の骨(輪郭を薄く押し出した板)を、前で寄せて後ろで開く
function jawGeometry(outline, thick = 0.06) {
  const shape = new THREE.Shape(outline);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.012, bevelSegments: 2, steps: 1, curveSegments: 8 });
  geo.userData.thick = thick;
  return geo;
}
// 上下の歯の列の左右の位置を 1 つの関数から作る(下の歯は上の歯の内側。厚さ 16 mm の歯が接する作図値)
const upperZ = (x) => halfWidth(x) * 0.75;
const lowerZ = (x) => upperZ(x) - 0.016;
const jawHalf = (x) => Math.max(0.03, lowerZ(x) - 0.020);
// 板を左右へ置く。板の厚みの中心を jawHalf に合わせる。
//   以前の式は左右とも厚みが +z 側へ付き、左右の下あごが非対称だった(コードで確かめた)
function bendJaw(geo, side) {
  const pa = geo.attributes.position, t = geo.userData.thick ?? 0.06;
  for (let i = 0; i < pa.count; i++) pa.setZ(i, side * (jawHalf(pa.getX(i)) + pa.getZ(i) - t / 2));
  if (side < 0) {                  // 鏡に映すと面の向きが裏返るので、三角形の頂点の順を戻す
    if (geo.index) {
      const ix = geo.index.array;
      for (let i = 0; i < ix.length; i += 3) { const k = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = k; }
      geo.index.needsUpdate = true;
    } else {                       // ExtrudeGeometry は index を持たない: 各三角形の 2 番目と 3 番目の頂点を属性ごとに入れ替える
      for (const name of Object.keys(geo.attributes)) {
        const at = geo.attributes[name], n = at.itemSize, arr = at.array;
        for (let v = 0; v + 2 < at.count; v += 3) for (let c = 0; c < n; c++) {
          const i1 = (v + 1) * n + c, i2 = (v + 2) * n + c, k = arr[i1]; arr[i1] = arr[i2]; arr[i2] = k;
        }
        at.needsUpdate = true;
      }
    }
  }
  geo.computeVertexNormals();
  return geo;
}

// 曲がった円錐(角)
function bentCone(pathPx, r0, material, zBase, zTip, lengthScale = 1) {
  const pts = pathPx.map(([px, py], i) => {
    const [x, y] = P(px, py); const t = i / (pathPx.length - 1);
    return new THREE.Vector3(x, y, zBase + (zTip - zBase) * t);
  });
  if (lengthScale !== 1) {           // 先を延ばす(角質の鞘は骨の角芯より長い)
    const a = pts[pts.length - 2], b = pts[pts.length - 1];
    pts[pts.length - 1] = b.clone().add(b.clone().sub(a).multiplyScalar(lengthScale - 1));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const geo = new THREE.ConeGeometry(1, 1, 24, 32, false);
  const pa = geo.attributes.position, up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < pa.count; i++) {
    const t = pa.getY(i) + 0.5, rad = r0 * Math.pow(1 - t, 0.9) + 0.004;
    const p = curve.getPoint(t), tan = curve.getTangent(t);
    const n1 = new THREE.Vector3().crossVectors(tan, Math.abs(tan.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : up).normalize();
    const n2 = new THREE.Vector3().crossVectors(tan, n1).normalize();
    const ang = Math.atan2(pa.getZ(i), pa.getX(i)), d = Math.hypot(pa.getX(i), pa.getZ(i)) > 1e-6 ? 1 : 0;
    const q = p.clone().addScaledVector(n1, Math.cos(ang) * rad * d).addScaledVector(n2, Math.sin(ang) * rad * d);
    pa.setXYZ(i, q.x, q.y, q.z);
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

// 歯の列: 歯の列の向きに沿わせた細い刃を密に並べる(写真でも孤立した杭ではなく、すき間の無い列)。
//   本数 36 は表現上の値で、標本の実測の本数ではない
function teethRow(linePx, zAt, n, material, down) {
  const g = new THREE.Group();
  const [a, b] = linePx.map(([px, py]) => new THREE.Vector3(...P(px, py), 0));
  const ang = Math.atan2(b.y - a.y, b.x - a.x), geo = new THREE.BoxGeometry(0.011, 0.045, 0.016);
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n, p = a.clone().lerp(b, t);
    for (const side of [1, -1]) {
      const tt = new THREE.Mesh(geo, material);
      tt.position.set(p.x, p.y + (down ? -0.018 : 0.018), side * zAt(p.x)); tt.rotation.z = ang; g.add(tt);
    }
  }
  return g;
}

// ── フリル(2026-10-04 作り直し)────────────────────────────────────
// 横から見た縁の形は Houston の写真の輪郭(読み取った座標を写真に重ねて確かめた)。正中の稜(頭頂骨の正中)は
// 付け根から上の先端へ、左右の縁は先端から後ろへ大きく丸く張り出し、鱗状骨の先で顎関節の近くへ下りる。
// 以前は円の扇で、横から見ると細い刃にしか見えず、写真の後ろへの張り出し(約 0.3 m)が無かった。
// 左右の幅(z)は写真から読めないので、UCMP の正面の写真を見た推定(最大の半幅 約 1.0 m)。
const FRILL_RIM = [[930, 108], [950, 110], [990, 118], [1027, 153], [1051, 200], [1060, 242], [1051, 285], [1020, 319],
  [986, 356], [961, 397], [937, 431], [893, 468], [848, 501], [786, 531]];        // 正中の先端 → 左右の縁 → 鱗状骨の先
const FRILL_BASE = [[680, 322], [694, 362], [708, 405], [722, 448], [736, 490], [746, 520]];   // 頭骨の後ろの付け根(正中 → 鱗状骨の付け根)。頭の中へ 15〜20 px 入れる(斜めから見て付け根に隙間が見えた)
const FRILL_MAX_HALF = 1.0;
// 最大幅は縁の上寄り(後ろへの張り出しのあたり)。下寄りに置くと、正面から見て耳のように見えた
function frillRimZ(s) {          // s: 0 = 正中、1 = 鱗状骨の先
  if (s <= 0.38) return FRILL_MAX_HALF * Math.sin((s / 0.38) * Math.PI / 2);
  if (s <= 0.5) return FRILL_MAX_HALF;
  return FRILL_MAX_HALF - (FRILL_MAX_HALF - 0.55) * Math.pow((s - 0.5) / 0.5, 1.3);
}
function frillBaseZ(s) { return 0.24 + 0.22 * s; }   // 頭骨の後部の上縁の幅 → 鱗状骨の付け根(頬の幅)
function resample(px, n) {       // px の折れ線を n + 1 点に等間隔で取り直す(モデルの座標で)
  const pts = px.map(([a, b]) => new THREE.Vector3(...P(a, b), 0));
  return new THREE.CatmullRomCurve3(pts, false, "centripetal").getSpacedPoints(n);
}
// opts: grow = 縁を外へ広げる量(皮膚)、thick = 板の厚み、knobs = 縁の骨を付けるか
export function buildFrill(material, opts = {}) {
  const { grow = 0, thick = 0.06, knobs = true, NS = 40, NK = 14 } = opts;
  const rim = resample(FRILL_RIM, NS), base = resample(FRILL_BASE, NS);
  const mat = material; mat.side = THREE.DoubleSide;   // 複製しない(層のワイヤーフレームの切り替えを届かせる)
  const g = new THREE.Group(); g.name = "frill";
  const surf = (side) => {       // 片側の面(付け根 → 縁)。厚みは面の法線の向きに ±thick/2
    const P3 = [];
    for (let i = 0; i <= NS; i++) {
      const s = i / NS, r = rim[i], b = base[i];
      const rz = frillRimZ(s) + grow, bz = frillBaseZ(s);
      const dir = new THREE.Vector2(r.x - b.x, r.y - b.y).normalize();
      for (let k = 0; k <= NK; k++) {
        const t = k / NK, cup = 0.06 * Math.sin(Math.PI * t);      // 板の中ほどを少し前へ膨らませる(皿の形)
        P3.push(new THREE.Vector3(b.x + (r.x - b.x) * t + dir.x * grow * t, b.y + (r.y - b.y) * t + dir.y * grow * t, side * (bz + (rz - bz) * t + cup)));
      }
    }
    return P3;
  };
  const W = NK + 1;
  for (const side of [1, -1]) {
    const mid = surf(side);
    // 法線を求めるための仮の面
    const tmp = new THREE.BufferGeometry().setFromPoints(mid), tix = [];
    for (let i = 0; i < NS; i++) for (let k = 0; k < NK; k++) { const a = i * W + k, b = a + W; tix.push(a, b, a + 1, b, b + 1, a + 1); }
    tmp.setIndex(tix); tmp.computeVertexNormals();
    const nrm = tmp.attributes.normal, pos = [], idx = [], uv = [];
    for (const f of [1, -1]) for (let v = 0; v < mid.length; v++) {
      const h = f * thick / 2 * (1 - 0.5 * (v % W) / NK);            // 縁へ向かって薄く
      pos.push(mid[v].x + nrm.getX(v) * h, mid[v].y + nrm.getY(v) * h, mid[v].z + nrm.getZ(v) * h);
      uv.push(Math.floor(v / W) / NS, (v % W) / NK);
    }
    const off = mid.length;
    for (let i = 0; i < NS; i++) for (let k = 0; k < NK; k++) {
      const a = i * W + k, b = a + W;
      idx.push(a, b, a + 1, b, b + 1, a + 1, off + a, off + a + 1, off + b, off + b, off + a + 1, off + b + 1);
    }
    for (let i = 0; i < NS; i++) {   // 縁の帯
      const a = i * W + NK, b = a + W; idx.push(a, off + a, b, b, off + a, off + b);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, mat));
    if (knobs) {
      // 縁の骨: 頭頂骨は正中に 1 個 + 片側 3 個(計 5〜7 個。Longrich & Field 2012)、鱗状骨は片側 7 個(YPM 1822)。
      //   成体では低く平たく縁に溶け込む(Horner & Goodwin 2006)ので、縁の面に沿った扁平な三角にする
      const at = [0.12, 0.22, 0.32, ...Array.from({ length: 7 }, (_, j) => 0.44 + j * 0.08)];
      if (side > 0) at.unshift(0);
      for (const s of at) {
        const i = Math.min(NS, Math.round(s * NS)), v = i * W + NK, p = mid[v];
        const inward = mid[v - 2].clone().sub(p).normalize();
        const tip = p.clone().addScaledVector(inward, -0.05);
        const kg = new THREE.ConeGeometry(0.045, 0.07, 10); kg.scale(1, 1, 0.35);
        const m = new THREE.Mesh(kg, mat);
        m.position.copy(p.clone().lerp(tip, 0.5));
        // 平たい向き(局所の z)をフリルの面の法線に合わせる
        const yv = tip.clone().sub(p).normalize(), zn = new THREE.Vector3(nrm.getX(v), nrm.getY(v), nrm.getZ(v));
        const xv = new THREE.Vector3().crossVectors(yv, zn).normalize(), zv = new THREE.Vector3().crossVectors(xv, yv);
        m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(xv, yv, zv));
        g.add(m);
      }
    }
  }
  return g;
}

export const SKULL = { P, FACE, NARIS, ORBIT, LTF, JAW, JAW_JOINT, BROW_HORN, NASAL_HORN };

// 頭骨・皮膚の頭・下あごを作る。mats = { bone, boneDark, tooth, horn, beak, skinHead, eye }
export function buildSkull(mats, opts = {}) {
  const jawClose = opts.jawClose ?? 0.09;                 // 写真の開いた口を閉じる回転(ラジアン)。写真と照合するときは 0
  const face = V2(FACE), naris = V2(NARIS), orbit = V2(ORBIT), ltf = V2(LTF);
  const bone = new THREE.Group(); bone.name = "skull";
  const skin = new THREE.Group(); skin.name = "head-skin";
  // 閉じた断面の内側が穴から見えるので、顔の面は両面を描く
  //   複製せず元の材質を両面にする(複製すると、層ごとのワイヤーフレームの切り替えが届かなかった)
  const two = (m) => { m.side = THREE.DoubleSide; return m; };
  const boneFace = two(mats.bone), boneRim = two(mats.boneDark), skinFace = two(mats.skinHead);

  // 骨: 顔(閉じた断面・穴あき)+穴の縁の骨の厚み
  const boneOpt = { cheek: 0.18 }, boneSec = makeSection(face, boneOpt);
  bone.add(new THREE.Mesh(faceGeometry(face, [naris, orbit, ltf], boneOpt), boneFace));
  for (const h of [naris, orbit, ltf]) for (const s of [1, -1]) bone.add(holeRim(h, boneSec, s, boneRim));
  // 角(骨の角芯)。根元は顔の面より内側(後眼窩骨の盛り上がりの中)から出す
  for (const s of [1, -1]) bone.add(bentCone(BROW_HORN, 0.13, mats.bone, s * 0.19, s * 0.53));
  bone.add(bentCone(NASAL_HORN, 0.07, mats.bone, 0, 0));
  // 頬の突起(上頬骨): 頬骨の下向きの張り出しの先。短く(外への突出量は写真から読みにくい推定)
  for (const s of [1, -1]) bone.add(bentCone([[681, 529], [695, 552], [704, 571]], 0.045, mats.boneDark, s * 0.47, s * 0.50));
  // 下あご(左右の骨)と歯の列
  const jaw = new THREE.Group(); jaw.name = "jaw";
  const jawOutline = V2(JAW);
  for (const s of [1, -1]) jaw.add(new THREE.Mesh(bendJaw(jawGeometry(jawOutline), s), mats.bone));
  jaw.add(teethRow(LOWER_TEETH, lowerZ, 36, mats.tooth, false));
  const [jx, jy] = P(...JAW_JOINT);
  const jawPivot = new THREE.Group(); jawPivot.position.set(jx, jy, 0);
  jaw.position.set(-jx, -jy, 0); jawPivot.add(jaw); jawPivot.rotation.z = jawClose;
  bone.add(jawPivot);
  // 上の歯の列(上あごの内側。下の歯はその内側に来る)
  bone.add(teethRow(UPPER_TEETH, upperZ, 36, mats.tooth, true));
  const oc = orbit.reduce((a, p) => a.add(p), new THREE.Vector2()).multiplyScalar(1 / orbit.length);

  // 皮膚: 骨と同じ輪郭を、面の外へ(上下へ inflate、左右へ widthAdd)膨らませる。
  //   以前は輪郭を中心から 1.03 倍しており、吻の皮膚がくちばしの角質より前へ出ていた
  const scaleAbout = (poly, c, k) => poly.map((p) => new THREE.Vector2(c.x + (p.x - c.x) * k, c.y + (p.y - c.y) * k));
  const skinFaceOutline = V2(SKIN_FACE);
  const skinOpt = { widthAdd: 0.03, inflate: 0.02, cheek: 0.2 }, skinSec = makeSection(skinFaceOutline, skinOpt);
  const narisC = naris.reduce((a, p) => a.add(p), new THREE.Vector2()).multiplyScalar(1 / naris.length);
  const nostril = scaleAbout(naris, new THREE.Vector2(narisC.x + 0.05, narisC.y), 0.35);   // 鼻孔は外鼻孔の前寄りの小さな穴(推定)
  const eyeHole = scaleAbout(orbit, oc, 0.4);
  const eyeR = Math.max(...eyeHole.map((p) => p.distanceTo(oc))) * 1.1;   // 穴をふさぐ大きさ
  skin.add(new THREE.Mesh(faceGeometry(skinFaceOutline, [nostril, eyeHole], skinOpt), skinFace));
  // 鼻孔の奥を暗くふさぐ(穴から向こうが透けて白く見えた)。面から奥へ引っ込めた扁平な形(黒い球の縁が「もう一つの目」に見えた)
  const dark = new THREE.MeshStandardMaterial({ color: 0x140e0a, roughness: 0.9 });
  const nostC = nostril.reduce((a, p) => a.add(p), new THREE.Vector2()).multiplyScalar(1 / nostril.length);
  const nostR = Math.max(...nostril.map((p) => p.distanceTo(nostC)));
  for (const s of [1, -1]) {
    const plug = new THREE.Mesh(new THREE.SphereGeometry(nostR * 1.1, 16, 10), dark);
    plug.position.set(nostC.x, nostC.y, s * (skinSec.zAt(nostC.x, nostC.y) - nostR * 0.35)); plug.scale.set(1, 0.65, 0.25); skin.add(plug);
  }
  // 目: 皮膚の面と同じ式で位置を出し、面から少しだけ沈める
  for (const s of [1, -1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(eyeR, 24, 16), mats.eye);
    eye.position.set(oc.x, oc.y, s * (skinSec.zAt(oc.x, oc.y) - eyeR * 0.5)); skin.add(eye);
  }
  // 角質の鞘(骨の角芯より太い。先の延長の率を裏付ける資料は無い = 推定)
  for (const s of [1, -1]) skin.add(bentCone(BROW_HORN, 0.15, mats.horn, s * 0.2, s * 0.55, 1.12));
  skin.add(bentCone(NASAL_HORN, 0.082, mats.horn, 0, 0, 1.3));
  // くちばしの角質(上: 吻骨と前上顎骨の前。下: 前歯骨)。皮膚の面の外へ重ねる殻
  const beakUp = V2([[244, 734], [248, 666], [271, 618], [305, 590], [325, 600], [322, 660], [300, 712]]);
  skin.add(new THREE.Mesh(faceGeometry(beakUp, [], { widthAdd: 0.045, inflate: 0.03, cheek: 0, nx: 60, ny: 24 }), two(mats.beak)));
  const skinJaw = new THREE.Group();
  for (const s of [1, -1]) skinJaw.add(new THREE.Mesh(bendJaw(jawGeometry(jawOutline, 0.075), s), mats.skinHead));
  const beakLow = V2([[318, 804], [345, 790], [372, 776], [380, 800], [338, 810]]);
  for (const s of [1, -1]) skinJaw.add(new THREE.Mesh(bendJaw(jawGeometry(beakLow, 0.08), s), mats.beak));
  const skinPivot = new THREE.Group(); skinPivot.position.set(jx, jy, 0);
  skinJaw.position.set(-jx, -jy, 0); skinPivot.add(skinJaw); skinPivot.rotation.z = jawClose;
  skin.add(skinPivot);

  return { bone, skin, jawPivot, skinJawPivot: skinPivot, orbitCenter: oc, narisCenter: narisC };
}
