// 夜明 歩『Triceratops』の図版の 3D モデル(three.js の基本の形から組み立てる。外部のモデルのデータは使わない)。
// 座標: x = 前(頭が +x)、y = 上、z = 体の左右。単位はおおよそメートル(全長 約 8.5)。
// 部品は 2 系統: skin(皮膚)と skeleton(骨格)。皮膚を外すと骨格が見える。ワイヤーフレームは両方に掛かる。
import * as THREE from "three";
import * as TEX from "./tri-tex.js";   // 肌の画像(make-tex.py で色と法線マップにしたもの。data URI)

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

// フリル(縁に小さな突起 = 縁後頭骨 を並べた盾)。頂点を 3D の座標で直接計算する。
//   c = 盾の付け根(頭骨の後ろ上)、radius = 大きさ、tilt = 水平からの角度(ラジアン)。
//   盾は、体の左右(z)と「後ろ上」(U = (-cos tilt, sin tilt, 0))の 2 つの向きで張る扇。少し反らせる(凹ませる)。
function frill(c, radius, material, withKnobs = true, tilt = 0.55) {
  const g = new THREE.Group();
  const U = new THREE.Vector3(-Math.cos(tilt), Math.sin(tilt), 0);
  const Z = new THREE.Vector3(0, 0, 1);
  const Nn = new THREE.Vector3().crossVectors(Z, U).normalize();   // 盾の表の向き(前上)
  const NT = 48, NS = 8, TH = 0.07;
  const pt = (t, sR) => {                 // t: 0..1(左端→右端の角度)、sR: 0..1(付け根→縁)
    const a = Math.PI * (0.06 + 0.88 * t);
    const knob = withKnobs ? 0.012 * Math.max(0, Math.sin(a * 9)) : 0;
    const r = radius * sR * (1 + knob * sR);
    const dish = -0.06 * radius * sR * sR;  // 縁ほど後ろへ反らせる
    // 付け根を一点に集めず、頭骨の後ろの幅を持たせる(フリルは頭骨の後部から続く骨の板)
    const width = 0.28 * (1 - sR) + r;
    return new THREE.Vector3().copy(c).addScaledVector(Z, Math.cos(a) * width).addScaledVector(U, Math.sin(a) * r * 0.95).addScaledVector(Nn, dish);
  };
  const pos = [], idx = [], uv = [];
  for (const side of [1, -1]) {           // 表と裏(厚み TH)
    for (let i = 0; i <= NT; i++) for (let k = 0; k <= NS; k++) {
      const p = pt(i / NT, k / NS).addScaledVector(Nn, side * TH / 2);
      pos.push(p.x, p.y, p.z); uv.push(i / NT, k / NS);
    }
  }
  const W = NS + 1, off = (NT + 1) * W;
  for (let i = 0; i < NT; i++) for (let k = 0; k < NS; k++) {
    const a = i * W + k, b = a + W;
    idx.push(a, b, a + 1, b, b + 1, a + 1);                       // 表
    idx.push(off + a, off + a + 1, off + b, off + b, off + a + 1, off + b + 1);   // 裏
  }
  for (let i = 0; i < NT; i++) {          // 縁の帯(表と裏をつなぐ)
    const a = i * W + NS, b = (i + 1) * W + NS;
    idx.push(a, off + a, b, b, off + a, off + b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx); geo.computeVertexNormals();
  g.add(new THREE.Mesh(geo, material));
  if (withKnobs) {
    for (let i = 0; i < 17; i++) {
      const t = 0.03 + 0.94 * i / 16;
      // 縁の骨の突起は成体では低く平たい(Horner & Goodwin 2006)
      const p0 = pt(t, 0.985), p1 = pt(t, 1.025);
      g.add(rod(p0, p1, 0.055, 0.025, material, 12));
    }
  }
  return g;
}

// 背骨の通り道(首から尾の先まで)。x が前。
function spineCurve() {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(3.05, 1.82, 0),   // 胴の管の先端は頭の中(首の端の穴を頭の中に隠す。2026-10-04)
    new THREE.Vector3(2.35, 1.72, 0),   // 首の付け根(頭の後ろ)。首は低く短い(フリルが首の上を覆う)
    new THREE.Vector3(1.6, 2.1, 0),
    new THREE.Vector3(0.6, 2.75, 0),    // 肩の上
    new THREE.Vector3(-0.6, 2.85, 0),   // 腰の上(いちばん高い)
    new THREE.Vector3(-1.8, 2.55, 0),
    new THREE.Vector3(-2.4, 1.9, 0),
    new THREE.Vector3(-3.0, 1.15, 0),
    new THREE.Vector3(-3.65, 0.75, 0),  // 尾の先。全長の初期目標 約 8.5(2026-10-04 尾を短縮)
  ]);
}

// 胴の皮膚: 背骨に沿って断面の楕円を変えながらつないだ管(LatheGeometry では作れない形なので自前で)
function bodyGeometry(curve) {
  const N = 96, R = 48;
  const prof = (t) => {                 // t = 0(首)→ 1(尾の先)。半径 [上下, 左右]
    const hump = Math.exp(-Math.pow((t - 0.32) / 0.26, 2));
    const neck = Math.exp(-Math.pow((t - 0.1) / 0.12, 2));
    const tail = Math.pow(Math.max(0, 1 - Math.max(0, t - 0.45) / 0.55), 1.5);   // 尾は先へ向けて細く絞る
    const ry = 0.20 + 0.95 * hump + 0.12 * neck;
    const rz = 0.18 + 0.80 * hump + 0.16 * neck;
    return [ry * (t > 0.45 ? tail : 1) + 0.03, rz * (t > 0.45 ? tail : 1) + 0.03];
  };
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
      const down = 0.55 * Math.min(1, t / 0.2);   // 頭に近いほど下げる量を小さく(あごの下に出っ張らないように)
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
  if (front) return [new THREE.Vector3(1.05, 1.95, z), new THREE.Vector3(0.83, 1.08, z * 1.30), new THREE.Vector3(1.10, 0.28, z * 1.12), new THREE.Vector3(1.22, 0.08, z * 1.12)];
  return [new THREE.Vector3(-1.05, 2.1, z), new THREE.Vector3(-0.75, 1.15, z), new THREE.Vector3(-1.05, 0.45, z), new THREE.Vector3(-0.85, 0.0, z)];
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
  const boneMat = mat(BONE, { roughness: 0.6 }), boneDark = mat(BONE_DARK, { roughness: 0.6 });
  const hornMat = mat(HORN, { roughness: 0.5 }), beakMat = mat(BEAK, { roughness: 0.5 });
  const eyeMat = mat(0x1a1410, { roughness: 0.2 });

  const curve = spineCurve();

  // ── 皮膚 ───────────────────────────────────────────────
  skin.add(new THREE.Mesh(bodyGeometry(curve), skinMat));
  // 頭(頭骨を包む): 前へ細くなる楕円体 + 口先
  const HEAD = new THREE.Vector3(3.2, 1.8, 0);
  skin.add(blob(HEAD, new THREE.Vector3(1.0, 0.56, 0.45), skinHead));
  skin.add(blob(new THREE.Vector3(3.95, 1.52, 0), new THREE.Vector3(0.72, 0.36, 0.26), skinHead));
  // くちばし(角質。皮膚を外すと骨の嘴が残る)
  skin.add(beakWedge(beakMat, 0.30));
  // フリル(皮膚に覆われた盾)
  skin.add(frill(new THREE.Vector3(2.75, 2.25, 0), 1.35, skinMatPlain, true, 0.8));   // 頭骨の後ろ上から立ち上げる(0.55 では首と背の皮膚に埋もれた)
  // 角(皮膚の上の角質の鞘。骨の角芯より少し長い)
  for (const s of [1, -1]) skin.add(horn(new THREE.Vector3(3.15, 2.12, s * 0.29), new THREE.Vector3(4.10, 2.83, s * 0.44), 0.16, hornMat, 0.10));   // 成体の T. horridus 寄りの推定
  skin.add(horn(new THREE.Vector3(4.15, 1.8, 0), new THREE.Vector3(4.32, 2.18, 0), 0.08, hornMat, 0.02));
  // 目
  for (const s of [1, -1]) skin.add(blob(new THREE.Vector3(3.3, 1.92, s * 0.42), new THREE.Vector3(0.07, 0.07, 0.04), eyeMat, 12));
  // 脚(太い管)と足
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s);
    const r = front ? [0.36, 0.26, 0.2] : [0.48, 0.32, 0.22];
    for (let i = 0; i < 3; i++) {
      skin.add(rod(P[i], P[i + 1], r[i], (r[i + 1] || r[i] * 0.85), skinLimb, 24));
      skin.add(blob(P[i], new THREE.Vector3(r[i], r[i], r[i]), skinLimb, 24));
    }
    skin.add(blob(P[3].clone().add(new THREE.Vector3(0.08, 0.1 - P[3].y, 0)), new THREE.Vector3(0.3, 0.1, 0.24), skinLimb, 24));   // 足の底を地面(y = 0)に合わせる
  }

  // ── 骨格 ───────────────────────────────────────────────
  // 頭骨: 顔の骨 + 硬い(穴の無い)フリル + 角芯 + 嘴の骨(吻骨)
  skel.add(blob(HEAD, new THREE.Vector3(0.92, 0.5, 0.39), boneMat));
  skel.add(blob(new THREE.Vector3(3.95, 1.52, 0), new THREE.Vector3(0.66, 0.3, 0.21), boneMat));
  skel.add(beakWedge(boneDark, 0.23, 0.04));
  skel.add(frill(new THREE.Vector3(2.75, 2.25, 0), 1.3, boneMat, true, 0.8));
  for (const s of [1, -1]) skel.add(horn(new THREE.Vector3(3.15, 2.08, s * 0.27), new THREE.Vector3(3.94, 2.68, s * 0.40), 0.135, boneMat, 0.08));
  skel.add(horn(new THREE.Vector3(4.15, 1.78, 0), new THREE.Vector3(4.27, 2.05, 0), 0.06, boneMat, 0.02));
  // 目の穴(眼窩)
  for (const s of [1, -1]) skel.add(blob(new THREE.Vector3(3.3, 1.92, s * 0.365), new THREE.Vector3(0.12, 0.1, 0.025), eyeMat, 12));
  // 下あご(平たい楕円体)と、あごの内側に並ぶ歯の列(小さな柱。実物は数百本が束になって生え替わる)
  const jaw = new THREE.Group(); jaw.name = "jaw";
  // 下あごは左右の骨と、前端の骨(前歯骨)に分ける
  for (const s of [1, -1]) jaw.add(blob(new THREE.Vector3(3.58, 1.27, s * 0.22), new THREE.Vector3(0.78, 0.18, 0.09), boneMat, 32));
  jaw.add(blob(new THREE.Vector3(4.32, 1.28, 0), new THREE.Vector3(0.23, 0.11, 0.22), boneDark, 32));
  for (const s of [1, -1]) for (let i = 0; i < 14; i++) {
    const x = 3.0 + i * 0.065;
    jaw.add(rod(new THREE.Vector3(x, 1.4, s * (0.22 - i * 0.005)), new THREE.Vector3(x, 1.5, s * (0.22 - i * 0.005)), 0.022, 0.018, boneDark, 6));
  }
  skel.add(jaw);
  // 背骨(椎骨を並べる)と肋骨
  const NV = 46;
  for (let i = 0; i < NV; i++) {
    const t = i / (NV - 1), p = curve.getPoint(t), tan = curve.getTangent(t);
    const size = 0.07 + 0.09 * Math.exp(-Math.pow((t - 0.35) / 0.3, 2)) - (t > 0.6 ? (t - 0.6) * 0.12 : 0);
    const v = rod(p.clone().addScaledVector(tan, -0.05), p.clone().addScaledVector(tan, 0.05), size, size, boneMat, 10);
    skel.add(v);
    // 棘突起(背の上へ伸びる骨)
    skel.add(rod(p, p.clone().add(new THREE.Vector3(0, size * 2.2, 0)), size * 0.35, size * 0.2, boneMat, 6));
    if (t > 0.12 && t < 0.48) {         // 胴の肋骨
      for (const s of [1, -1]) {
        const ribDepth = 0.9 + 0.5 * Math.exp(-Math.pow((t - 0.32) / 0.12, 2));
        const c = new THREE.QuadraticBezierCurve3(p, p.clone().add(new THREE.Vector3(0, -0.15, s * 0.95)), p.clone().add(new THREE.Vector3(0.05, -ribDepth, s * 0.62)));
        skel.add(new THREE.Mesh(new THREE.TubeGeometry(c, 10, 0.03, 6, false), boneMat));
      }
    }
  }
  // 肩甲骨・骨盤
  // 肩甲骨(後ろ上へ延びる板)・烏口骨・腸骨・坐骨を分ける(模式的な途中案で、寛骨臼・恥骨は未)
  for (const s of [1, -1]) {
    const scapula = blob(new THREE.Vector3(0.72, 2.28, s * 0.66), new THREE.Vector3(0.62, 0.16, 0.055), boneMat, 32);
    scapula.rotation.z = -0.50; skel.add(scapula);
    skel.add(blob(new THREE.Vector3(1.16, 1.98, s * 0.64), new THREE.Vector3(0.23, 0.20, 0.07), boneMat, 24));
    skel.add(blob(new THREE.Vector3(-0.95, 2.47, s * 0.55), new THREE.Vector3(0.78, 0.22, 0.10), boneMat, 32));
    skel.add(rod(new THREE.Vector3(-1.05, 2.10, s * 0.62), new THREE.Vector3(-1.68, 1.55, s * 0.42), 0.10, 0.065, boneMat, 16));
  }
  // 四肢の骨と指
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s);
    const r = front ? [0.11, 0.08, 0.07] : [0.14, 0.1, 0.08];
    for (let i = 0; i < 3; i++) {
      if (i === 1) {   // 前腕(橈骨・尺骨)・下腿(脛骨・腓骨)は 2 本の骨
        const offset = new THREE.Vector3(-0.055, 0, s * 0.055);
        skel.add(rod(P[i].clone().sub(offset), P[i + 1].clone().sub(offset), r[i] * 0.72, r[i] * 0.58, boneMat, 16));
        skel.add(rod(P[i].clone().add(offset), P[i + 1].clone().add(offset), r[i] * (front ? 0.85 : 0.45), r[i] * (front ? 0.65 : 0.35), boneMat, 16));
      } else {
        skel.add(rod(P[i], P[i + 1], r[i], r[i] * 0.8, boneMat, 16));
      }
      skel.add(blob(P[i], new THREE.Vector3(r[i] * 1.4, r[i] * 1.4, r[i] * 1.4), boneDark, 12));
    }
    const toes = front ? 5 : 4;         // 前あし 5 本、後ろあし 4 本
    for (let k = 0; k < toes; k++) {
      // 指は基部を分散させ、前あしの外側の 2 本を短くする(初期案。手根・中手骨は未)
      const ang = front ? [-0.25, 0.0, 0.30, 0.80, 1.15][k] : [-0.30, -0.10, 0.12, 0.34][k];
      const len = front ? [0.22, 0.27, 0.25, 0.15, 0.10][k] : [0.22, 0.28, 0.28, 0.23][k];
      const base = new THREE.Vector3(P[3].x, 0.12, P[3].z + s * (k - (toes - 1) / 2) * 0.065);
      const tip = base.clone().add(new THREE.Vector3(Math.cos(ang) * len, -0.06, s * Math.sin(ang) * len));
      skel.add(rod(base, tip, 0.035, 0.025, boneMat, 12));
    }
  }
  // ── 筋肉(推定。骨に残る付着の跡と、現生の鳥・ワニの体から推定される配置を、形を単純にして表す)────
  const muscle = new THREE.Group(); muscle.name = "muscle";
  const muscleMat = mat(0xa8473d, { roughness: 0.55 }), tendonMat = mat(0xd9b8a0, { roughness: 0.5 });
  const mbody = new THREE.Mesh(bodyGeometry(curve), muscleMat); mbody.scale.set(1, 0.9, 0.88); mbody.position.y = 0.2;
  muscle.add(mbody);
  // あごを閉じる筋肉(フリルの付け根から下あごへ)と首の筋肉
  for (const s of [1, -1]) {
    muscle.add(blob(new THREE.Vector3(2.85, 1.75, s * 0.3), new THREE.Vector3(0.45, 0.32, 0.14), muscleMat, 20));
    muscle.add(rod(new THREE.Vector3(2.5, 2.05, s * 0.2), new THREE.Vector3(1.4, 2.3, s * 0.35), 0.28, 0.4, muscleMat, 16));
  }
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s);
    const r = front ? [0.3, 0.2, 0.12] : [0.42, 0.26, 0.14];
    for (let i = 0; i < 3; i++) muscle.add(rod(P[i], P[i + 1], r[i], (r[i + 1] || r[i] * 0.7), i === 2 ? tendonMat : muscleMat, 16));
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
  // 大動脈・大静脈は背骨の曲線に沿わせる(座標を手で置くと、尾を短くしたときに皮膚の外へはみ出した。2026-10-04)
  const along = (dy, dz, t0, t1) => { const out = []; for (let i = 0; i <= 24; i++) { const p = curve.getPoint(t0 + (t1 - t0) * i / 24); out.push(new THREE.Vector3(p.x, p.y + dy, dz)); } return out; };
  vessels.add(tube([new THREE.Vector3(1.05, 1.95, 0.08), new THREE.Vector3(0.95, 2.35, 0.08), ...along(-0.22, 0.08, 0.32, 0.72)], 0.07, artMat));   // 尾の細くなる手前で止める
  vessels.add(tube([new THREE.Vector3(1.0, 1.55, -0.1), ...along(-0.4, -0.12, 0.3, 0.62)], 0.08, veinMat));
  // 頭へ向かう動脈と、頭から戻る静脈
  for (const s of [1, -1]) {
    vessels.add(tube([[1.1, 2.0, s * 0.1], [1.8, 2.15, s * 0.18], [2.5, 1.95, s * 0.22], [3.1, 1.75, s * 0.25], [3.8, 1.55, s * 0.18]], 0.045, artMat));
    vessels.add(tube([[3.6, 1.5, s * 0.3], [2.8, 1.8, s * 0.3], [2.0, 2.05, s * 0.26], [1.2, 1.7, s * 0.12]], 0.05, veinMat));
  }
  // 四肢の動脈
  for (const front of [true, false]) for (const s of [1, -1]) {
    const P = legPoints(front, s);
    vessels.add(tube([[...P[0].toArray().map((v, k) => k === 1 ? v + 0.25 : v)], P[0].toArray(), P[1].toArray(), P[2].toArray(), P[3].clone().add(new THREE.Vector3(0, 0.08, 0)).toArray()], 0.035, artMat));
  }

  // ── 脳(頭骨の中の空洞の型 = エンドキャスト から、形がある程度わかっている。体に比べて小さい)────────
  const brain = new THREE.Group(); brain.name = "brain";
  const brainMat = mat(0xe6a5a0, { roughness: 0.5 });
  brain.add(blob(new THREE.Vector3(2.7, 1.95, 0), new THREE.Vector3(0.22, 0.09, 0.08), brainMat, 24));   // 大脳
  brain.add(blob(new THREE.Vector3(2.92, 1.98, 0), new THREE.Vector3(0.12, 0.05, 0.05), brainMat, 16));  // 嗅球の方へ伸びる部分
  brain.add(blob(new THREE.Vector3(2.5, 1.92, 0), new THREE.Vector3(0.1, 0.07, 0.07), brainMat, 16));    // 小脳

  for (const g of [muscle, organs, vessels, brain]) root.add(g);
  const layers = { skin, muscle, organs, vessels, brain, skeleton: skel };
  // 層ごとの材質(ワイヤーフレームは外側の層 = 皮膚と筋肉 に掛ける)。角・嘴・目は骨格の材質として扱う。
  const layerMats = {
    skin: [skinMat, skinMatPlain, skinLimb, skinHead], muscle: [muscleMat, tendonMat],
    organs: [heartMat, lungMat, liverMat, gutMat], vessels: [artMat, veinMat], brain: [brainMat],
    skeleton: [boneMat, boneDark, hornMat, beakMat, eyeMat],
  };
  return { root, layers, layerMats, skin, skeleton: skel };
}

// 視点の一覧(図版ごと)。target = 見る点、pos = カメラの位置、layers = 初期に見せる層、wire = ワイヤーフレームの初期の状態。
//   skin: 1 は layers "skin"、skin: 0 は layers "skeleton" の略記(古い書き方。layers があればそちらを使う)。
export const VIEWS = {
  cover:      { pos: [7.5, 3.6, 8.5],   target: [-0.3, 1.6, 0], skin: 1, wire: 0 },
  side:       { pos: [0.0, 2.0, 13.0],  target: [-0.4, 1.6, 0], skin: 1, wire: 0 },
  threequarter: { pos: [8.0, 4.0, 8.0], target: [-0.3, 1.5, 0], skin: 1, wire: 0 },
  skull:      { pos: [4.6, 2.6, 3.6],   target: [3.1, 1.9, 0],  skin: 0, wire: 0 },
  horns:      { pos: [8.2, 2.4, 0.0],   target: [3.3, 2.1, 0],  skin: 1, wire: 0 },
  beak:       { pos: [6.2, 1.8, 3.0],   target: [3.8, 1.45, 0], skin: 0, wire: 0 },
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
  muscle:     { pos: [6.5, 3.8, 8.5],   target: [-0.3, 1.5, 0], layers: "muscle skeleton", wire: 0 },
  organs:     { pos: [2.5, 2.8, 7.5],   target: [0.2, 1.8, 0],  layers: "skin organs vessels skeleton", wire: 1 },
  vessels:    { pos: [5.5, 3.2, 8.0],   target: [-0.3, 1.7, 0], layers: "vessels skeleton", wire: 0 },
  brain:      { pos: [4.2, 2.6, 2.4],   target: [2.75, 1.95, 0], layers: "skeleton brain", wire: 1, wireLayers: "skeleton" },
};
