// 夜明 歩『Triceratops』の図版の 3D モデル(three.js の基本の形から組み立てる。外部のモデルのデータは使わない)。
// 座標: x = 前(頭が +x)、y = 上、z = 体の左右。単位はおおよそメートル(全長 約 8.5)。
// 部品は 2 系統: skin(皮膚)と skeleton(骨格)。皮膚を外すと骨格が見える。ワイヤーフレームは両方に掛かる。
import * as THREE from "three";
import * as TEX from "./tri-tex.js";                    // 肌の画像(make-tex.py で色と法線マップにしたもの。data URI)
import { buildSkull, buildFrill } from "./tri-skull.js"; // 頭骨とフリル(標本写真から輪郭を読み取った)
import { createRig } from "./tri-walk.js";              // 脚の関節と歩く動き
import { buildRibcage } from "./tri-ribs.js";           // 肋骨・胸骨
import { buildPelvis } from "./tri-pelvis.js";          // 骨盤・仙骨
import { longBone, vertebra, digit, organify } from "./tri-bones.js"; // 骨の形の部品(スキャンの観察から)

// 肌の画像を読み込む。部品ごとに繰り返しの回数(repeat)を変えるため、同じ画像から複製を作る。
// 読み終えたら onTexturesReady の呼び出し元へ知らせる(静止画の書き出しは、読み終えてから描く)。
const texManager = new THREE.LoadingManager();
const texLoader = new THREE.TextureLoader(texManager);
const texCache = {};
function skinTex(kind, rx, ry, normal = false) {
  const key = kind + (normal ? "_N" : "");
  if (!texCache[key]) {
    const t = texLoader.load(TEX[(normal ? "NORMAL_" : "SKIN_") + kind.toUpperCase()]);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    if (!normal) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    texCache[key] = t;
  }
  const c = texCache[key].clone(); c.repeat.set(rx, ry); c.needsUpdate = true;
  return c;
}
export function onTexturesReady(cb) { texManager.onLoad = cb; }
function skinMaterial(kind, rx, ry) {
  return new THREE.MeshStandardMaterial({ color: 0xffffff, map: skinTex(kind, rx, ry), normalMap: skinTex(kind, rx, ry, true),
    normalScale: new THREE.Vector2(1.4, 1.4), roughness: 0.82, metalness: 0.0 });
}

const BONE = 0xd6c7a6, BONE_DARK = 0xb3a283, HORN = 0xd9cfb3, BEAK = 0x5a4a3a;

// 皮膚の色と鱗の模様(手続きで描く。画像のファイルは使わない)
function scaleTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#6f7a52"; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 256; y += 16) {
    for (let x = (y / 16) % 2 ? 8 : 0; x < 256; x += 16) {
      const r = 6 + ((x * 7 + y * 13) % 5);
      const grd = g.createRadialGradient(x, y, 1, x, y, r);
      grd.addColorStop(0, "#8c976a"); grd.addColorStop(1, "#525c3a");
      g.fillStyle = grd; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    }
  }
  // 大きめの鱗(体の上面に点在。化石の皮膚の跡に大きな鱗が見つかっていることを、模様として表すだけ)
  for (let i = 0; i < 9; i++) {
    const x = (i * 83) % 256, y = (i * 47) % 256;
    g.fillStyle = "#4b5536"; g.beginPath(); g.arc(x, y, 13, 0, Math.PI * 2); g.fill();
    g.fillStyle = "#7f8a5e"; g.beginPath(); g.arc(x - 2, y - 2, 9, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 2);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 化石の骨の色むら(明るさの揺らぎを重ねた画像)。ページの外(node での確かめ)では画像を作らない
function fossilTexture(dark = 1) {
  if (typeof document === "undefined") return null;
  const N = 256, cv = document.createElement("canvas"); cv.width = cv.height = N;
  const cx = cv.getContext("2d"), img = cx.createImageData(N, N);
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const oct = [16, 32, 64].map((n) => Array.from({ length: n * n }, rnd));
  const val = (g, n, x, y) => { const xi = Math.floor(x * n) % n, yi = Math.floor(y * n) % n, fx = x * n % 1, fy = y * n % 1;
    const a = g[yi * n + xi], b = g[yi * n + (xi + 1) % n], c = g[((yi + 1) % n) * n + xi], d = g[((yi + 1) % n) * n + (xi + 1) % n];
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy; };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const v = 0.55 * val(oct[0], 16, x / N, y / N) + 0.3 * val(oct[1], 32, x / N, y / N) + 0.15 * val(oct[2], 64, x / N, y / N);
    const k = (0.78 + 0.32 * v) * dark, i = (y * N + x) * 4;
    img.data[i] = 255 * Math.min(1, k); img.data[i + 1] = 245 * Math.min(1, k * 0.97); img.data[i + 2] = 230 * Math.min(1, k * 0.9); img.data[i + 3] = 255;
  }
  cx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 2); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0.0, ...opts });
}

// 2 点を結ぶ円柱(骨・角・脚に使う)
function rod(a, b, r0, r1, material, seg = 12) {
  const d = new THREE.Vector3().subVectors(b, a); const len = d.length();
  const geo = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  const m = new THREE.Mesh(geo, material);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
  return m;
}

function blob(pos, scale, material, seg = 32) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, seg, Math.max(12, seg / 2)), material);
  m.position.copy(pos); m.scale.copy(scale); return m;
}

// 円錐の角(根元 a から先 b へ、少し反らせる)。1 本の円錐を曲線に沿って曲げ、継ぎ目の無い面にする
//   (以前は短い円錐台を 10 本つないでおり、節の継ぎ目が輪のように見えた。2026-10-04)。
function horn(a, b, r, material, bend = 0.15) {
  const mid = new THREE.Vector3().lerpVectors(a, b, 0.5).add(new THREE.Vector3(0, bend, 0));
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const geo = new THREE.ConeGeometry(1, 1, 24, 24, false);   // 高さ 1(y = -0.5 根元 … +0.5 先)、半径 1
  const pa = geo.attributes.position;
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < pa.count; i++) {
    const t = pa.getY(i) + 0.5;                         // 0 = 根元、1 = 先
    const rad = r * (1 - t) + 0.004;
    const p = curve.getPoint(t), tan = curve.getTangent(t);
    const n1 = new THREE.Vector3().crossVectors(tan, Math.abs(tan.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : up).normalize();
    const n2 = new THREE.Vector3().crossVectors(tan, n1).normalize();
    const ang = Math.atan2(pa.getZ(i), pa.getX(i)), d = Math.hypot(pa.getX(i), pa.getZ(i)) > 1e-6 ? 1 : 0;
    const q = p.clone().addScaledVector(n1, Math.cos(ang) * rad * d).addScaledVector(n2, Math.sin(ang) * rad * d);
    pa.setXYZ(i, q.x, q.y, q.z);
  }
  geo.computeVertexNormals();
  const g = new THREE.Group(); g.add(new THREE.Mesh(geo, material));
  return g;
}

// 背骨の通り道(首から尾の先まで)。x が前。
// 頭(頭骨・フリル・脳)をまとめてずらす量。頭骨の座標は写真の px から作っており(tri-skull.js の P)、その座標系のまま
//   組ごと動かす。2026-10-04: 後ろへ 0.8 m。組み立て骨格の写真(LA の Natural History Museum、Commons
//   "LA-Triceratops mount-1.jpg")では首の骨はフリルの陰に入って見えず、フリルの後ろの縁が肩甲骨の前端あたりまで来る。
//   以前はフリルの後ろの縁(x = 2.19)と肩の関節(x = 1.05)の間に首が約 1.1 m 露出していた。斜めからの写真なので寸法は推定。
export const HEAD = new THREE.Vector3(-0.8, 0.05, 0);
// 首の部品(血管・筋肉)の点を、頭に近いほど HEAD の分だけずらす(肩の側は動かさない)
function neckWarp(v) {
  const w = Math.min(1, Math.max(0, (v.x - 1.2) / (2.9 - 1.2)));
  return new THREE.Vector3(v.x + HEAD.x * w, v.y + HEAD.y * w, v.z);
}
function spineCurve() {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(3.05 + HEAD.x, 1.82 + HEAD.y, 0),   // 胴の管の先端は頭の中(首の端の穴を頭の中に隠す)
    new THREE.Vector3(1.75, 1.95, 0),   // 首の付け根(頭の後ろ)。首は低く短い(フリルが首の上を覆う)
    new THREE.Vector3(0.6, 2.75, 0),    // 肩の上
    new THREE.Vector3(-0.6, 2.85, 0),   // 腰の上(いちばん高い)
    new THREE.Vector3(-1.8, 2.55, 0),
    new THREE.Vector3(-2.4, 1.9, 0),
    new THREE.Vector3(-3.0, 1.15, 0),
    new THREE.Vector3(-3.65, 0.75, 0),  // 尾の先。全長の初期目標 約 8.5(2026-10-04 尾を短縮)
  ]);
}

// 胴の皮膚: 背骨に沿って断面の楕円を変えながらつないだ管(LatheGeometry では作れない形なので自前で)
// 胴の皮膚の断面(t = 0 首 → 1 尾の先)。半径 [上下, 左右]。肋骨・胸骨を皮膚の内側に収めるのにも使う
function bodyProf(t) {
  const hump = Math.exp(-Math.pow((t - 0.32) / 0.26, 2));
  const neck = Math.exp(-Math.pow((t - 0.1) / 0.12, 2));
  const tail = Math.pow(Math.max(0, 1 - Math.max(0, t - 0.45) / 0.55), 1.5);   // 尾は先へ向けて細く絞る
  const ry = 0.20 + 0.95 * hump + 0.12 * neck;
  const rz = 0.18 + 0.80 * hump + 0.16 * neck;
  return [ry * (t > 0.45 ? tail : 1) + 0.03, rz * (t > 0.45 ? tail : 1) + 0.03];
}
// 背骨は胴の断面の中心より背側にある: 断面を腹側へ寄せる量(半径に対する比)
const bodyDown = (t) => 0.55 * Math.min(1, t / 0.2);
// 背骨の曲線の上で、前後の位置 x に当たる t(胴の皮膚と同じ getPoint の t)
function tAtX(curve, x) {
  let best = 0, bd = Infinity;
  for (let i = 0; i <= 2000; i++) { const t = i / 2000, d = Math.abs(curve.getPoint(t).x - x); if (d < bd) { bd = d; best = t; } }
  return best;
}
function bodyGeometry(curve) {
  const N = 96, R = 48;
  const prof = bodyProf;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const up = new THREE.Vector3(0, 1, 0), side = new THREE.Vector3().crossVectors(tan, up).normalize();
    const nup = new THREE.Vector3().crossVectors(side, tan).normalize();
    const [ry, rz] = prof(t);
    for (let j = 0; j <= R; j++) {
      const a = (j / R) * Math.PI * 2;
      // 腹側を少し平らに(下半分の半径を詰める)
      const flat = Math.sin(a) < 0 ? 0.82 : 1.0;
      // 背骨は胴の断面の中心より背側にある: 断面を腹側へ寄せる(0.78 ではカバのように見えたので 0.55)
      const down = bodyDown(t);   // 頭に近いほど下げる量を小さく(あごの下に出っ張らないように)
      const q = p.clone().addScaledVector(nup, Math.sin(a) * ry * flat - ry * down).addScaledVector(side, Math.cos(a) * rz);
      pos.push(q.x, q.y, q.z); uv.push(t * 4, j / R);
    }
  }
  for (let i = 0; i < N; i++) for (let j = 0; j < R; j++) {
    const a = i * (R + 1) + j, b = a + R + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// 脚 1 本(肩/腰 → 肘/膝 → 手首/足首 → 足)。side = +1 / -1(左右)。
function legPoints(front, side) {
  const z = side * (front ? 0.62 : 0.68);
  // 前あしは肘を少し外へ張る(外開きの角度は議論がある。Fujiwara 2009 ほか。推定の初期値)
  //   肩は 1.95 → 1.82 へ下げ、肘を曲げた姿勢にした(2026-10-04)。1.95 では脚がほぼ伸びきっていて(関節の長さの和 1.97)、
  //   歩くときに前へ振り出した足が地面に届かなかった。前あしの肘は押し出しの間も 90〜115 度に曲がっている(TH2007)
  //   2026-10-04 改: 前あしを半ば這う姿勢にした(Thompson & Holmes 2007 の 8 姿勢の表、RESEARCH B-2)。以前は上腕骨がほぼ縦に立つ
  //   柱の脚で、資料の角度と合わなかった(横から見た水平からの下がり 74.6 度 / 資料 10〜43 度、正面から見た外への開き 13.1 度 / 32〜68 度)。
  //   上腕骨: 横から見て水平から 35 度下がり、上から見て 25 度外へ開き、後ろへ向く(資料の範囲の中ほど。姿勢は議論が分かれる)。
  //   関節窩は低く(1.55)、手は肩の下へ寄せる(Paul & Christiansen 2000 の要旨「手は肩関節の真下」)。
  //   2026-10-05 改: 前あしの骨の長さを USNM の組み立て骨格の表に合わせた(上腕骨 0.71・橈骨 0.41・尺骨 0.65 m、Gilmore 1905 /
  //   Hatcher ほか 1907 p.191。資料 docs/RESEARCH-forelimb.md)。以前は上腕骨 0.85・肘から手首 0.91 m で、前腕が倍以上あった。
  //   肘から手首は橈骨 0.41 m に関節の分を足して 0.45 m とした(推定)。正しい長さにすると関節窩は 1.55 → 約 1.16 m に下がる
  //   (「肩は腰より低い」HML1907)。上腕骨は横から見て水平から 50 度下がる: TH2007 の 8 姿勢(10〜43 度)より立てた。
  //   43 度以下では関節窩が胸の床(胸骨)より低くなり、胴に収まらないため(当方の判断)。上から見た外への開き 25 度は TH2007 の範囲。
  const deg = Math.PI / 180;
  if (front) {
    const sh = new THREE.Vector3(1.05, 1.16, z);
    const dir = new THREE.Vector3(-1, -Math.tan(50 * deg), side * Math.tan(25 * deg)).normalize();
    const elbow = sh.clone().addScaledVector(dir, 0.71);
    const wrist = elbow.clone().add(new THREE.Vector3(0.45 * Math.sin(15 * deg), -0.45 * Math.cos(15 * deg), -side * 0.06));   // 前腕は前へ 15 度
    return [sh, elbow, wrist, new THREE.Vector3(wrist.x + 0.10, 0.05, wrist.z + side * 0.02)];
  }
  //   2026-10-04 改: 後ろあしの骨の長さを USNM の組み立て骨格に合わせた(大腿骨 1.15・脛骨 0.72・中足骨 III 0.355 m、Gilmore 1905。
  //   脛骨/大腿骨 = 0.63。資料により 0.59〜0.66)。以前は 1.00 : 0.76 : 0.49 で、脛骨と足が長すぎた。
  //   姿勢は「ほぼまっすぐ、膝はわずかに曲げる」(Lull 1933)、足は趾行で中足骨を立てる(Brown 1917)。股関節の高さ 2.10 に合わせると、
  //   大腿骨は前へ 15 度、脛骨は後ろへ 12 度、中足骨は水平から 55 度になる(角度は資料に数値が無く、長さと高さから決めた)。
  const hip = new THREE.Vector3(-1.05, 2.10, z);
  const knee = hip.clone().add(new THREE.Vector3(1.15 * Math.sin(15 * deg), -1.15 * Math.cos(15 * deg), 0));
  const ankle = knee.clone().add(new THREE.Vector3(-0.72 * Math.sin(12 * deg), -0.72 * Math.cos(12 * deg), 0));
  const mtp = ankle.clone().add(new THREE.Vector3(0.355 * Math.cos(55 * deg), -0.355 * Math.sin(55 * deg), 0));
  return [hip, knee, ankle, mtp];
}

// くちばし: 左右の幅と、鉤のある横の輪郭を持つ簡易形(円錐ではない。輪郭検討用の近似)
function beakWedge(material, width, inset = 0) {
  const shape = new THREE.Shape();
  shape.moveTo(4.34, 1.62); shape.lineTo(4.60, 1.57); shape.lineTo(4.82, 1.36);
  shape.lineTo(4.73, 1.18); shape.lineTo(4.58, 1.32); shape.lineTo(4.34, 1.35); shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: width, steps: 1, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 });
  geo.translate(-inset, 0, -width / 2);
  // 先へ行くほど左右の幅を狭める(幅が一定だと正面から箱に見えた)
  const pa = geo.attributes.position;
  for (let i = 0; i < pa.count; i++) {
    const k = Math.min(1, Math.max(0, (pa.getX(i) - 4.34) / 0.5));
    pa.setZ(i, pa.getZ(i) * (1 - 0.75 * k));
  }
  geo.computeVertexNormals();
  return new THREE.Mesh(geo, material);
}

export function buildTriceratops() {
  const root = new THREE.Group(); root.name = "triceratops";
  const skin = new THREE.Group(); skin.name = "skin";
  const skel = new THREE.Group(); skel.name = "skeleton";
  root.add(skel); root.add(skin);

  // 皮膚: 胴(大きな多角形の鱗)・腹と四肢(小さな粒状の鱗)・頭とフリル(硬い角質)。repeat は 1 枚 = 約 30 cm になるように選ぶ。
  const skinMat = skinMaterial("body", 5, 8);        // 胴の管(uv の u は 0..4 で全長 約 12 m、v は周囲 約 5 m)
  const skinLimb = skinMaterial("belly", 3, 2);        // 脚の円柱・関節の球
  const skinHead = skinMaterial("head", 4, 2);         // 頭の楕円体
  const skinMatPlain = skinMaterial("head", 3, 2);     // フリル(uv は 0..1 の扇)
  // 骨: 一様な白ではなく、化石らしい色むら(組み立て骨格の写真の茶色の骨を参考に、明るめにした)。画像はページの中で作る
  const boneMat = mat(BONE, { roughness: 0.82, map: fossilTexture() }), boneDark = mat(BONE_DARK, { roughness: 0.85, map: fossilTexture(0.8) });
  const hornMat = mat(HORN, { roughness: 0.5 }), beakMat = mat(BEAK, { roughness: 0.5 });
  const eyeMat = mat(0x1a1410, { roughness: 0.2 });
  const toothMat = mat(0xe6dcc4, { roughness: 0.35 });

  const curve = spineCurve();
  const rig = createRig();
  const scapulae = [];        // 歩くとき上腕骨の振りに合わせて回す(tri-walk.js)

  // ── 皮膚 ───────────────────────────────────────────────
  skin.add(new THREE.Mesh(bodyGeometry(curve), skinMat));
  // 頭(頭骨の輪郭を少し膨らませた皮膚。目と鼻孔だけ開く)・角質の鞘・くちばしの角質・下あご(tri-skull.js)
  const SK = buildSkull({ bone: boneMat, boneDark, tooth: toothMat, horn: hornMat, beak: beakMat, skinHead, eye: eyeMat });
  const headSkin = new THREE.Group(); headSkin.name = "head-offset"; headSkin.position.copy(HEAD); skin.add(headSkin);
  headSkin.add(SK.skin);
  // フリル(皮膚に覆われた盾)。付け根と角度は標本写真から(付け根の中心 = 写真の (715, 415)、水平から約 53 度)
  headSkin.add(buildFrill(skinMatPlain, { grow: 0.04, thick: 0.1 }));   // 2026-10-04: 写真の輪郭から作る形に替えた(旧 frill() の扇は横から細い刃に見えた)
  // 脚(太い管)と足
  //   脚の部品は関節ごとの組(tri-walk.js)へ入れる: put(i, …) の i = 0 上腕/大腿、1 前腕/下腿、2 手/足
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s), c = rig.leg(front, s, P).chain(skin);
    const r = front ? [0.36, 0.26, 0.2] : [0.48, 0.32, 0.22];
    for (let i = 0; i < 3; i++) {
      c.put(i, rod(P[i], P[i + 1], r[i], (r[i + 1] || r[i] * 0.85), skinLimb, 24));
      c.put(i, blob(P[i], new THREE.Vector3(r[i], r[i], r[i]), skinLimb, 24));
    }
    c.put(2, blob(P[3].clone().add(new THREE.Vector3(0.08, 0.1 - P[3].y, 0)), new THREE.Vector3(0.3, 0.1, 0.24), skinLimb, 24));   // 足の底を地面(y = 0)に合わせる
  }

  // ── 骨格 ───────────────────────────────────────────────
  // 頭骨: 顔の骨(外鼻孔・眼窩・下側頭窓は穴)・角芯・頬の突起・下あご・上下の歯の列(tri-skull.js)+ 穴の無いフリル
  const headBone = new THREE.Group(); headBone.name = "head-offset"; headBone.position.copy(HEAD); skel.add(headBone);
  headBone.add(SK.bone);
  headBone.add(buildFrill(boneMat, { thick: 0.06 }));
  // 背骨(椎骨を並べる)と肋骨
  //   2026-10-05 改: 細い円柱と棒をやめ、糸巻き形の椎体 + 板状の棘突起 + 横突起 + 尾の血道弓にした(スキャンの観察。tri-bones.js)。
  //   区分は前後の位置で決める: 首(第 1 胴肋より前、棘突起は低い)・胴(横突起あり)・仙骨(腸骨の範囲)・尾(血道弓あり、先へ低く)
  const NV = 46, xD1 = 1.30, xS0 = -0.30, xS1 = -1.80;
  let caudal = 0;
  for (let i = 0; i < NV; i++) {
    const t = i / (NV - 1), p = curve.getPoint(t), tan = curve.getTangent(t);
    const size = 0.07 + 0.09 * Math.exp(-Math.pow((t - 0.35) / 0.3, 2)) - (t > 0.6 ? (t - 0.6) * 0.12 : 0);
    let o;
    if (p.x > xD1) o = { spine: size * 1.1, spineBack: 0.15 };                       // 首(フリルの下)
    else if (p.x > xS0) o = { spine: size * 1.9, spineBack: 0.25, trans: size * 1.6 };   // 胴(3 倍では柵のように高すぎた)
    else if (p.x > xS1) o = { spine: size * 1.7, spineBack: 0.05 };                  // 仙骨
    else {                                                                          // 尾: 棘突起と血道弓は先へ向けて短く
      const f = Math.min(1, caudal / 22); caudal++;
      o = { spine: size * (1.8 - 1.4 * f), spineBack: 0.35, chevron: caudal >= 2 ? size * (2.2 - 1.9 * f) : 0 };
    }
    // 椎骨は一つずつ少しずつ違う(大きさ ±4%・棘突起 ±8%。造形)
    const jit = (k) => Math.sin(i * 12.9898 + k * 78.233) * 43758.5453 % 1;
    if (o.spine) o.spine *= 1 + 0.08 * jit(1);
    const gap = i < NV - 1 ? p.distanceTo(curve.getPoint((i + 1) / (NV - 1))) : 0; if (gap > 0) o.len = 0.92 * gap;   // 隣の椎骨までの距離
    skel.add(vertebra(p, tan, size * (1 + 0.04 * jit(2)), boneMat, o));
  }
  // 骨盤・仙骨(tri-pelvis.js。資料は docs/RESEARCH-pelvis-and-hindlimb.md)
  skel.add(buildPelvis({ bone: boneMat, boneDark }, { hip: new THREE.Vector3(-1.05, 2.10, 0.68), curve, tAtX }));
  // 肋骨・胸骨(tri-ribs.js。資料は docs/RESEARCH-ribcage-and-sternum.md)
  const cartilageMat = mat(0xcfd8d4, { roughness: 0.4, transparent: true, opacity: 0.55 });
  skel.add(buildRibcage(curve, { bone: boneMat, cartilage: cartilageMat }, { bodyProf, bodyDown, tAtX, headX: 3.05 + HEAD.x, coracoid: [1.16, 1.06, 0.58] }));
  // 肩甲骨・骨盤
  // 肩甲骨(後ろ上へ延びる板)・烏口骨。腸骨・坐骨・恥骨は tri-pelvis.js
  for (const s of [1, -1]) {
    // 肩甲骨は 54 度ほどに立て、下の端を関節窩(1.05, 1.55)へ届かせる(角竜類の肩甲骨は仙骨の長軸に対して約 55 度。SR2015)
    // 肩甲骨: 平たい板。背側の端は幅広く、関節窩の側は厚く広がる(楕円の塊をやめた。スキャンの観察)
    // 2026-10-05 改: 長さ 0.97・上端の幅 0.26・最大の幅(関節窩の上)0.36 m(USNM、Gilmore 1905)。下の端を関節窩(1.05, 1.16)の上へ、
    //   約 56 度に立てる(角竜類の肩甲骨は仙骨の長軸に対して約 55 度、SR2015)。刃の最小の幅は Triceratops の値が無く、Vagaceratops の比で代用
    const scBot = new THREE.Vector3(1.02, 1.24, s * 0.66), scTop = scBot.clone().add(new THREE.Vector3(-0.97 * Math.cos(56 * Math.PI / 180), 0.97 * Math.sin(56 * Math.PI / 180), -s * 0.04));
    const scap = longBone(scTop, scBot, boneMat, { r0: 0.13, r1: 0.18, shaft: 0.072, flat: 0.22, hint: new THREE.Vector3(0, 0, s) });
    scap.name = "scapula-" + (s > 0 ? "R" : "L"); skel.add(scap); scapulae.push({ obj: scap, key: (s > 0 ? "R" : "L") + "F" });
    // 烏口骨: 長さ 0.38・幅 0.39 m、前縁と下縁で半円を描き内へ曲がる(USNM、Hatcher ほか 1907)。関節窩の前下
    const cor = blob(new THREE.Vector3(1.16, 1.06, s * 0.58), new THREE.Vector3(0.19, 0.195, 0.05), boneMat, 24); cor.rotation.y = s * 0.35; skel.add(cor);
  }
  // 四肢の骨と指(2026-10-05 改: 両端が広がる長い骨・突起・糸巻き形の趾骨と蹄。関節の暗い球は外した。tri-bones.js)
  const fwdHint = new THREE.Vector3(1, 0, 0);
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s), c = rig.leg(front, s, P).chain(skel);
    // 局所の +X は体の外(右 s=+1 で +z)になるように基底を取る(longBone の hint = 前)。内 = -s
    if (front) {
      // 寸法は USNM の表(Gilmore 1905 / Hatcher ほか 1907 p.191)。軸の半径は周囲を断面の楕円(0.8)に当てた値
      // 上腕骨: 長さ 0.71・近い端の幅 0.40・遠い端の幅 0.36・軸の周囲 0.43 m。三角筋稜は上端から前内側の縁に沿って長さの約 2/3(HML1907)
      c.put(0, longBone(P[0], P[1], boneMat, { r0: 0.17, r1: 0.18, shaft: 0.0755, flat: 0.75, hint: fwdHint, bow: 0.025,
        knobs: [{ u: 0.33, at: [-s * 0.03, 0.08], s: [0.045, 0.23, 0.07] }] }));
      // 尺骨: 長さ 0.65(肘頭を含む)・近い端の幅 0.38・遠い端の幅 0.19・軸の周囲 0.36 m。肘頭は橈骨の近い端よりずっと上へ突き出る(HML1907)
      //   肘頭の長さは表に無く、橈骨との差(0.65 - 0.45)から 0.2 m とした(推定)
      const fdir = P[2].clone().sub(P[1]).normalize(), back = new THREE.Vector3(-0.06, 0, 0);
      c.put(1, longBone(P[1].clone().addScaledVector(fdir, -0.2).add(back), P[2].clone().add(back), boneMat, { r0: 0.19, r1: 0.095, shaft: 0.063, flat: 0.75, hint: fwdHint }));
      // 橈骨: 長さ 0.41・近い端の幅 0.18・遠い端の幅 0.14・軸の周囲 0.205 m(軸は断面がほぼ円で全長ほぼ一様、HML1907)
      const fwd2 = new THREE.Vector3(0.06, 0, 0);
      c.put(1, longBone(P[1].clone().add(fwd2), P[2].clone().add(fwd2), boneMat, { r0: 0.09, r1: 0.07, shaft: 0.036, flat: 0.95, hint: fwdHint }));
    } else {
      // 太さは USNM の寸法表(Gilmore 1905 / Hatcher ほか 1907 pp.191–192)による(2026-10-05。以前は見た目で決めた値で、関節が資料の 6 割ほどしかなかった)。
      // 大腿骨: 近い端の幅 0.42(骨頭と大転子を含む)・遠い端の幅 0.43・軸の周囲 0.485 m。骨頭は内上へ(長軸に対して約 45 度、Hatcher ほか 1907)、
      //   外に大転子、中ほどの後ろ内に第四転子。軸の半径 0.085 は周囲 0.485 を断面の楕円(前後/左右 0.8)に当てた値
      c.put(0, longBone(P[0], P[1], boneMat, { r0: 0.16, r1: 0.215, shaft: 0.085, flat: 0.8, hint: fwdHint, bow: 0.03,
        knobs: [{ u: 0.03, at: [-s * 0.14, 0], s: [0.09, 0.085, 0.09] }, { u: 0.06, at: [s * 0.10, 0.02], s: [0.07, 0.1, 0.08] },
                { u: 0.42, at: [-s * 0.04, -0.08], s: [0.035, 0.13, 0.045] }] }));
      // 脛骨: 近い端の幅 0.395・遠い端の幅 0.39 m(同表)。軸の太さは表に無い(推定)。
      // 腓骨: USNM では復元で値が無い。細長く両端が平たく広がり、遠い端は脛骨の前面に密着(Hatcher ほか 1907 の Lull の脚注)。太さは推定
      const off = new THREE.Vector3(0, 0, s * 0.11);
      c.put(1, longBone(P[1].clone().sub(off.clone().multiplyScalar(0.25)), P[2], boneMat, { r0: 0.1975, r1: 0.195, shaft: 0.075, flat: 0.8, hint: fwdHint }));
      c.put(1, longBone(P[1].clone().add(off), P[2].clone().add(off.clone().multiplyScalar(0.5)), boneMat, { r0: 0.06, r1: 0.07, shaft: 0.03, flat: 0.75, hint: fwdHint }));
    }
    // 手・足: 中手骨/中足骨を横に並べ、先に趾。後ろは趾骨の式 2-3-4-5 で I〜IV(Brown 1917 ほか)。前は 2-3-4-3-2、蹄は第 1〜3 指だけ
    //   (Centrosaurus・Vagaceratops、Brown 1917・Lull 1933・Holmes 2014。Triceratops の手の寸法は資料に無く、中手骨の長さは
    //   Centrosaurus AMNH 5351 を上腕骨の比 0.71 / 0.60 で写した。種が違う)
    const n = front ? 5 : 4;
    const phal = front ? [[0.06, 0.07], [0.06, 0.05, 0.08], [0.05, 0.045, 0.04, 0.08], [0.04, 0.035, 0.03], [0.035, 0.03]]
                       : [[0.09, 0.12], [0.09, 0.07, 0.13], [0.08, 0.065, 0.055, 0.12], [0.06, 0.05, 0.045, 0.04, 0.11]];   // 第 III 趾 計 0.32、第 IV 趾の蹄 0.11(USNM: 0.325 / 0.11)
    for (let k = 0; k < n; k++) {
      const spread = (k - (n - 1) / 2) * (front ? 0.07 : 0.085);
      const mlen = front ? [0.098, 0.150, 0.153, 0.117, 0.094][k] / P[2].distanceTo(P[3]) : [0.70, 0.82, 1.0, 0.85][k];   // 後ろは III > II > IV > I(Brown 1917 ほか)。II/III = 0.29/0.355(USNM)、I と IV は推定
      const top = P[2].clone().add(new THREE.Vector3(0, 0, s * spread * 0.5));
      const bot = P[2].clone().lerp(P[3], mlen).add(new THREE.Vector3(0, 0, s * spread));
      c.put(2, longBone(top, bot, boneMat, { r0: front ? 0.045 : 0.06, r1: front ? 0.04 : 0.055, shaft: front ? 0.025 : 0.035, flat: 0.75, hint: fwdHint }));   // 太さは推定
      const ang = (front ? [-0.35, -0.1, 0.15, 0.45, 0.8] : [-0.35, -0.12, 0.1, 0.32])[k];
      const dir = new THREE.Vector3(Math.cos(ang), -0.25, s * Math.sin(ang));
      const width = front ? [0.05, 0.055, 0.05, 0.035, 0.03][k] : [0.06, 0.07, 0.065, 0.05][k];
      c.put(2, digit(bot, dir, phal[k], width, boneMat, !front || k < 3));   // 前の第 4・5 指は蹄の無い小さく丸い節
    }
  }
  // ── 筋肉(推定。骨に残る付着の跡と、現生の鳥・ワニの体から推定される配置を、形を単純にして表す)────
  const muscle = new THREE.Group(); muscle.name = "muscle";
  const muscleMat = mat(0xa8473d, { roughness: 0.55 }), tendonMat = mat(0xd9b8a0, { roughness: 0.5 });
  const mbody = new THREE.Mesh(bodyGeometry(curve), muscleMat); mbody.scale.set(1, 0.9, 0.88); mbody.position.y = 0.2;
  muscle.add(mbody);
  // あごを閉じる筋肉(フリルの付け根から下あごへ)と首の筋肉
  for (const s of [1, -1]) {
    muscle.add(blob(neckWarp(new THREE.Vector3(3.2, 1.8, s * 0.3)), new THREE.Vector3(0.28, 0.2, 0.1), muscleMat, 20));   // 鉤状突起とフリルの付け根の間
    muscle.add(rod(neckWarp(new THREE.Vector3(2.5, 2.05, s * 0.2)), neckWarp(new THREE.Vector3(1.4, 2.3, s * 0.35)), 0.28, 0.4, muscleMat, 16));
  }
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s), c = rig.leg(front, s, P).chain(muscle);
    const r = front ? [0.3, 0.2, 0.12] : [0.42, 0.26, 0.14];
    for (let i = 0; i < 3; i++) c.put(i, rod(P[i], P[i + 1], r[i], (r[i + 1] || r[i] * 0.7), i === 2 ? tendonMat : muscleMat, 16));
  }

  // ── 内臓(推定。現生の鳥・ワニの配置から推測し、大きさは目安)──────────────────
  const organs = new THREE.Group(); organs.name = "organs";
  const heartMat = mat(0x8e1f2b, { roughness: 0.4 }), lungMat = mat(0xd98c96, { roughness: 0.6 });
  const liverMat = mat(0x6b2a22, { roughness: 0.5 }), gutMat = mat(0xc9a07a, { roughness: 0.6 });
  organs.add(blob(new THREE.Vector3(1.05, 1.75, 0), new THREE.Vector3(0.28, 0.32, 0.26), heartMat, 24));          // 心臓
  for (const s of [1, -1]) organs.add(blob(new THREE.Vector3(0.6, 2.3, s * 0.38), new THREE.Vector3(0.75, 0.32, 0.28), lungMat, 24));   // 肺
  organs.add(blob(new THREE.Vector3(0.45, 1.6, 0), new THREE.Vector3(0.55, 0.3, 0.55), liverMat, 24));             // 肝臓
  organs.add(blob(new THREE.Vector3(-0.15, 1.55, 0.05), new THREE.Vector3(0.6, 0.45, 0.5), gutMat, 24));          // 胃
  // 腸(植物を長い時間かけて消化したと考えられる、長く巻いた管)
  const gutPts = [];
  for (let i = 0; i <= 120; i++) {
    const t = i / 120, a = t * Math.PI * 14;
    gutPts.push(new THREE.Vector3(-0.6 - t * 1.3 + 0.25 * Math.cos(a), 1.5 + 0.3 * Math.sin(a * 0.5), 0.35 * Math.sin(a)));
  }
  organs.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(gutPts), 400, 0.1, 10, false), gutMat));

  // ── 血管(推定。太い動脈 = 赤、太い静脈 = 青だけを、管として単純に表す)──────────────
  const vessels = new THREE.Group(); vessels.name = "vessels";
  const artMat = mat(0xc4161c, { roughness: 0.35 }), veinMat = mat(0x2a4fa8, { roughness: 0.35 });
  const tube = (pts, r, m) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((q) => q.isVector3 ? q : new THREE.Vector3(...q))), 80, r, 8, false), m);
  const neckTube = (pts, r, m) => tube(pts.map((q) => neckWarp(new THREE.Vector3(...q))), r, m);   // 頭へ向かう管(頭のずれに合わせる)
  // 大動脈・大静脈は背骨の曲線に沿わせる(座標を手で置くと、尾を短くしたときに皮膚の外へはみ出した。2026-10-04)
  const along = (dy, dz, t0, t1) => { const out = []; for (let i = 0; i <= 24; i++) { const p = curve.getPoint(t0 + (t1 - t0) * i / 24); out.push(new THREE.Vector3(p.x, p.y + dy, dz)); } return out; };
  vessels.add(tube([new THREE.Vector3(1.05, 1.95, 0.08), new THREE.Vector3(0.95, 2.35, 0.08), ...along(-0.22, 0.08, 0.32, 0.72)], 0.07, artMat));   // 尾の細くなる手前で止める
  vessels.add(tube([new THREE.Vector3(1.0, 1.55, -0.1), ...along(-0.4, -0.12, 0.3, 0.62)], 0.08, veinMat));
  // 頭へ向かう動脈と、頭から戻る静脈
  for (const s of [1, -1]) {
    vessels.add(neckTube([[1.1, 2.0, s * 0.1], [1.8, 2.15, s * 0.18], [2.5, 1.95, s * 0.22], [3.2, 1.72, s * 0.22], [3.6, 1.62, s * 0.14]], 0.045, artMat));
    vessels.add(neckTube([[3.5, 1.6, s * 0.2], [2.9, 1.78, s * 0.26], [2.0, 2.05, s * 0.26], [1.2, 1.7, s * 0.12]], 0.05, veinMat));
  }
  // 四肢の動脈
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s), c = rig.leg(front, s, P).chain(vessels);
    // 関節ごとに曲がるよう、区間ごとの管に分ける
    vessels.add(tube([P[0].clone().add(new THREE.Vector3(0, 0.25, 0)), P[0]], 0.035, artMat));
    c.put(0, tube([P[0], P[1]], 0.035, artMat)); c.put(1, tube([P[1], P[2]], 0.035, artMat));
    c.put(2, tube([P[2], P[3].clone().add(new THREE.Vector3(0, 0.08, 0))], 0.035, artMat));
  }

  // ── 脳(頭骨の中の空洞の型 = エンドキャスト から、形がある程度わかっている。体に比べて小さい)────────
  const brain = new THREE.Group(); brain.name = "brain";
  const brainMat = mat(0xe6a5a0, { roughness: 0.5 });
  brain.position.copy(HEAD);   // 脳は頭骨と一緒にずらす
  brain.add(blob(new THREE.Vector3(3.22, 1.98, 0), new THREE.Vector3(0.2, 0.08, 0.075), brainMat, 24));   // 大脳(眼窩の後ろ下の脳函の中)
  brain.add(blob(new THREE.Vector3(3.42, 2.02, 0), new THREE.Vector3(0.11, 0.045, 0.045), brainMat, 16));  // 嗅球の方へ伸びる部分
  brain.add(blob(new THREE.Vector3(3.05, 1.93, 0), new THREE.Vector3(0.09, 0.065, 0.065), brainMat, 16));    // 小脳

  for (const g of [muscle, organs, vessels, brain]) root.add(g);
  const layers = { skin, muscle, organs, vessels, brain, skeleton: skel };
  // 層ごとの材質(ワイヤーフレームは外側の層 = 皮膚と筋肉 に掛ける)。角・嘴・目は骨格の材質として扱う。
  const layerMats = {
    skin: [skinMat, skinMatPlain, skinLimb, skinHead], muscle: [muscleMat, tendonMat],
    organs: [heartMat, lungMat, liverMat, gutMat], vessels: [artMat, veinMat], brain: [brainMat],
    skeleton: [boneMat, boneDark, hornMat, beakMat, eyeMat, toothMat, cartilageMat],
  };
  // 骨の表面の凹凸(機械っぽさを減らす)。目・歯・軟骨は対象外
  organify(skel, { skip: (o) => o.material === eyeMat || o.material === toothMat || o.material === cartilageMat });
  rig.attachBody(layers, { scapulae });   // 歩くときの全身の連動(胴・首・頭・尾。tri-walk.js の BODY)
  return { root, layers, layerMats, skin, skeleton: skel, jaws: [SK.jawPivot, SK.skinJawPivot], rig };
}

// 視点の一覧(図版ごと)。target = 見る点、pos = カメラの位置、layers = 初期に見せる層、wire = ワイヤーフレームの初期の状態。
//   skin: 1 は layers "skin"、skin: 0 は layers "skeleton" の略記(古い書き方。layers があればそちらを使う)。
export const VIEWS = {
  cover:      { pos: [7.5, 3.6, 8.5],   target: [-0.3, 1.6, 0], skin: 1, wire: 0 },
  side:       { pos: [0.0, 2.0, 13.0],  target: [-0.4, 1.6, 0], skin: 1, wire: 0 },
  threequarter: { pos: [8.0, 4.0, 8.0], target: [-0.3, 1.5, 0], skin: 1, wire: 0 },
  skull:      { pos: [4.4, 2.3, 3.2],   target: [3.55, 1.85, 0], skin: 0, wire: 0 },
  horns:      { pos: [7.5, 2.2, 0.0],   target: [3.6, 2.0, 0],  skin: 1, wire: 0 },
  beak:       { pos: [4.9, 1.5, 1.6],   target: [3.85, 1.45, 0], skin: 0, wire: 0 },
  skeleton:   { pos: [2.0, 3.0, 11.5],  target: [-0.5, 1.5, 0], skin: 0, wire: 0 },
  legs:       { pos: [1.5, 1.2, 8.5],   target: [0.3, 1.0, 0],  skin: 0, wire: 0 },
  skinclose:  { pos: [0.8, 3.6, 3.4],   target: [-0.3, 2.4, 0.4], skin: 1, wire: 0 },
  wire:       { pos: [6.5, 4.5, 9.0],   target: [-0.3, 1.5, 0], layers: "skin skeleton", wire: 1 },
  free:       { pos: [7.5, 3.6, 8.5],   target: [-0.3, 1.6, 0], skin: 1, wire: 0 },
  // 検査用の視点(本には使わない): 隙間を探す
  chk_neck:   { pos: [2.6, 2.6, 2.8],   target: [2.4, 1.9, 0],  skin: 1, wire: 0 },
  chk_low:    { pos: [5.0, 0.6, 5.5],   target: [0.3, 1.2, 0],  skin: 1, wire: 0 },
  chk_back:   { pos: [-6.0, 4.0, 5.0],  target: [0.3, 1.5, 0],  skin: 1, wire: 0 },
  chk_frill:  { pos: [0.5, 4.2, 2.5],   target: [2.6, 2.3, 0],  skin: 1, wire: 0 },
  chk_skull_side: { pos: [3.6, 1.85, 4.8], target: [3.6, 1.85, 0], skin: 0, wire: 0 },
  chk_skull_front: { pos: [8.0, 1.9, 0.0], target: [3.6, 1.9, 0], skin: 0, wire: 0 },
  chk_head_side: { pos: [3.6, 1.85, 4.8], target: [3.6, 1.85, 0], skin: 1, wire: 0 },
  // 写真との照合用(正射影・口は写真と同じ開き): Houston の頭骨の写真の px (150..1100, 118.75..831.25) と同じ範囲を写す。
  //   scratchpad の照合スクリプトが写真の同じ範囲と重ねる。左側面の写真なので -z から見る
  // 歩く姿勢の確かめ(周期の中の位置 walk で止める)。骨格を真横から
  chk_walk0: { pos: [-0.2, 1.4, -11], target: [-0.2, 1.1, 0], layers: "skeleton", wire: 0, walk: 0 },
  chk_walk1: { pos: [-0.2, 1.4, -11], target: [-0.2, 1.1, 0], layers: "skeleton", wire: 0, walk: 0.25 },
  chk_walk2: { pos: [-0.2, 1.4, -11], target: [-0.2, 1.1, 0], layers: "skeleton", wire: 0, walk: 0.5 },
  chk_walk3: { pos: [-0.2, 1.4, -11], target: [-0.2, 1.1, 0], layers: "skeleton", wire: 0, walk: 0.75 },
  chk_walkscan: { pos: [-0.2, 1.4, -11], target: [-0.2, 1.1, 0], layers: "skeleton", wire: 0, walkScan: 40 },
  chk_walktop0: { pos: [-0.5, 9.0, 0.01], target: [-0.5, 1.5, 0], layers: "skin", wire: 0, walk: 0.0 },
  chk_walktop1: { pos: [-0.5, 9.0, 0.01], target: [-0.5, 1.5, 0], layers: "skin", wire: 0, walk: 0.25 },
  chk_walktop2: { pos: [-0.5, 9.0, 0.01], target: [-0.5, 1.5, 0], layers: "skin", wire: 0, walk: 0.5 },
  chk_walktop3: { pos: [-0.5, 9.0, 0.01], target: [-0.5, 1.5, 0], layers: "skin", wire: 0, walk: 0.75 },
  chk_walk_skin: { pos: [6.5, 2.6, -8.5], target: [0, 1.3, 0], layers: "skin", wire: 0, walk: 0.4 },
  // 肋骨・胸骨・前あしの確かめ(骨格だけ)。chk_ribs_* は肋骨が皮膚の外へ出た量を document.title へ出す(ribCheck)
  chk_bones_hind:  { pos: [-0.9, 1.2, 3.2], target: [-0.9, 1.0, 0], layers: "skeleton", wire: 0 },
  chk_bones_front: { pos: [1.0, 1.0, 3.0], target: [0.9, 0.8, 0], layers: "skeleton", wire: 0 },
  chk_bones_tail:  { pos: [-2.6, 1.8, 3.2], target: [-2.6, 1.4, 0], layers: "skeleton", wire: 0 },
  chk_pelvis_side: { pos: [-1.0, 1.5, 6.0], target: [-1.0, 1.4, 0], layers: "skeleton", wire: 0 },
  chk_pelvis_back: { pos: [-6.0, 2.4, 2.5], target: [-1.0, 1.6, 0], layers: "skeleton", wire: 0 },
  chk_pelvis_top:  { pos: [-1.0, 7.5, 0.01], target: [-1.0, 1.8, 0], layers: "skeleton", wire: 0 },
  chk_ribs_side:  { pos: [0.5, 1.5, 7.5],  target: [0.5, 1.4, 0], layers: "skeleton", wire: 0, ribCheck: 1 },
  chk_ribs_front: { pos: [6.5, 1.6, 0.0],  target: [0.6, 1.3, 0], layers: "skeleton", wire: 0, ribCheck: 1 },
  chk_ribs_under: { pos: [1.0, -2.6, 0.9], target: [1.0, 1.1, 0], layers: "skeleton", wire: 0, ribCheck: 1 },
  chk_ribs_skin:  { pos: [0.5, 1.5, 7.5],  target: [0.5, 1.4, 0], layers: "skin skeleton", wire: 1, ribCheck: 1 },
  chk_photo:  { pos: [3.3962, 1.9246, -10], target: [3.3962, 1.9246, 0], layers: "skeleton", wire: 0, ortho: 0.98681, jaw: 0 },
  muscle:     { pos: [6.5, 3.8, 8.5],   target: [-0.3, 1.5, 0], layers: "muscle skeleton", wire: 0 },
  organs:     { pos: [2.5, 2.8, 7.5],   target: [0.2, 1.8, 0],  layers: "skin organs vessels skeleton", wire: 1 },
  vessels:    { pos: [5.5, 3.2, 8.0],   target: [-0.3, 1.7, 0], layers: "vessels skeleton", wire: 0 },
  brain:      { pos: [4.0, 2.4, 2.2],   target: [3.25, 1.98, 0], layers: "skeleton brain", wire: 1, wireLayers: "skeleton" },
};
// 頭を見る視点は、頭のずれ(HEAD)に合わせてカメラと注視点を動かす(視点の数値は頭骨の座標系で書いてある)
for (const k of ["skull", "horns", "beak", "brain", "chk_skull_side", "chk_skull_front", "chk_head_side", "chk_photo"]) {
  const v = VIEWS[k]; if (!v) continue;
  v.pos = [v.pos[0] + HEAD.x, v.pos[1] + HEAD.y, v.pos[2]]; v.target = [v.target[0] + HEAD.x, v.target[1] + HEAD.y, v.target[2]];
}

