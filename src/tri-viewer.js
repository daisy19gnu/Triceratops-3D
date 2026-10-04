// 夜明 歩『Triceratops』の図版の実行部(本に同梱する。three.js と一緒に 1 ファイルへまとめる)。
// 面の中の <div class="tri" data-view="..."> ごとに描く。WebGL が使えれば代わりの静止画(img.tri-fallback)を隠す。
// ドラッグで回す(OrbitControls)。ボタンで皮膚の着脱とワイヤーフレームを切り替える。外部へは一切通信しない。
// 代わりの静止画の書き出し(render.html)では window.__TRI_RENDER = { view, w, h } を先に置き、1 枚だけ描いて止める。
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { buildTriceratops, VIEWS, onTexturesReady } from "./tri-model.js";

function setup(host, view, w, h, interactive) {
  const v = VIEWS[view] || VIEWS.free;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.setPixelRatio(interactive ? Math.min(2, window.devicePixelRatio || 1) : 1);
  renderer.setSize(w, h, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  // 写真に近づける: トーンマッピングと、周りの景色からの映り込み(環境光)
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.85;
  renderer.domElement.className = "tri-canvas";
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf3efe4);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.45;    // 環境光が強いと骨が白く飛び、肌が褪せた(2026-10-04 実測)
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7f6a, 0.25));
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.8); sun.position.set(6, 10, 7); scene.add(sun);
  // 地面(1 m ごとの目盛り)
  const grid = new THREE.GridHelper(20, 20, 0xb8ad94, 0xd8cfba); scene.add(grid);

  const model = buildTriceratops();
  scene.add(model.root);
  const LAYERS = ["skin", "muscle", "organs", "vessels", "brain", "skeleton"];
  const init = new Set(String(v.layers || (v.skin ? "skin" : "skeleton")).split(/\s+/));
  const state = { wire: !!v.wire };
  for (const k of LAYERS) state[k] = init.has(k);
  const forcedWire = v.wireLayers ? new Set(String(v.wireLayers).split(/\s+/)) : null;
  // 見え方の決まり:
  //  - 皮膚を(網でなく)着けているときは、中の層を隠す(中の骨や管が皮膚の外へはみ出して見えるため)。
  //  - ワイヤーフレームは外側の層(皮膚・筋肉)に掛ける。どちらも外していれば骨格に掛ける。視点が wireLayers を
  //    決めていればそれに従う(脳の図版は頭骨を網にして中の脳を見せる)。内臓・血管・脳は網にしない。
  const apply = () => {
    const skinSolid = state.skin && !state.wire;
    for (const k of LAYERS) model.layers[k].visible = state[k] && (k === "skin" || !skinSolid);
    const outer = state.skin || state.muscle;
    for (const k of LAYERS) {
      const w = state.wire && (forcedWire ? forcedWire.has(k) : (outer ? (k === "skin" || k === "muscle") : k === "skeleton"));
      for (const m of model.layerMats[k]) m.wireframe = w;
    }
    render();
  };
  // v.ortho = 正射影の縦の半分の高さ(写真との照合用)。v.jaw = 下あごの回転(写真の開いた口は 0)
  const camera = v.ortho ? new THREE.OrthographicCamera(-v.ortho * w / h, v.ortho * w / h, v.ortho, -v.ortho, 0.05, 200)
    : new THREE.PerspectiveCamera(38, w / h, 0.05, 200);
  if (v.jaw !== undefined && model.jaws) for (const j of model.jaws) j.rotation.z = v.jaw;
  camera.position.set(...v.pos);
  const target = new THREE.Vector3(...v.target);
  camera.lookAt(target);
  let controls = null;
  function render() { renderer.render(scene, camera); }
  if (interactive) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(target); controls.enableDamping = false; controls.update();
    controls.enabled = false;            // 掴むまでは回さない(attachGrab。短いクリックで掴む・離す)
    controls.addEventListener("change", render);
  }
  apply();
  // 歩く: 胴はその場に置き、地面の目盛りを後ろへ流す(ベルトの上を歩く形。カメラが置いていかれないように)
  const rig = model.rig; let walkRaf = 0;
  const walk = (on) => {
    cancelAnimationFrame(walkRaf); walkRaf = 0;
    if (!on) { rig.pose(null); grid.position.x = 0; render(); return; }
    const t0 = performance.now();
    const step = (now) => {
      const t = (now - t0) / 1000;
      rig.pose(t); grid.position.x = -((rig.speed() * t) % 1); render();
      walkRaf = requestAnimationFrame(step);
    };
    walkRaf = requestAnimationFrame(step);
  };
  // 確かめる用: v.walk = 周期の中の位置(0..1)の姿勢で止めて描き、つま先の高さを window.__TRI_WALK へ出す
  if (v.walk !== undefined) {
    rig.pose(v.walk * rig.period());
    model.root.updateMatrixWorld(true);
    const wp = new THREE.Vector3();
    window.__TRI_WALK = { phase: v.walk, speed: +rig.speed().toFixed(3), period: +rig.period().toFixed(3), stride: +rig.stride().toFixed(3),
      legs: rig.legs.map((L) => ({ key: L.key, clamped: L.clamped, toeY: +L.chains[0].tip.getWorldPosition(wp).y.toFixed(3), toeX: +wp.x.toFixed(3) })) };
    document.title = "TRI_WALK " + JSON.stringify(window.__TRI_WALK);
  }
  // 確かめる用: v.walkScan = 周期を n 段階に分け、着いている足のつま先が地面(静止時の高さ)から離れた最大量と、
  //   届かなかった回数を出す。関節の組の回転の向き・静止の角度の取り違えは、ここで数字に出る
  if (v.walkScan) {
    const n = v.walkScan, wp = new THREE.Vector3(), out = {};
    for (const L of rig.legs) out[L.key] = { maxSlip: 0, maxDev: 0, clamped: 0, stanceN: 0 };
    let prev = null;
    for (let k = 0; k <= n; k++) {
      rig.pose((k / n) * rig.period()); model.root.updateMatrixWorld(true);
      const cur = {};
      for (const L of rig.legs) {
        const phi = ((k / n + { LH: 0, LF: 0.25, RH: 0.5, RF: 0.75 }[L.key]) % 1);
        const p = L.chains[0].tip.getWorldPosition(wp).clone(); cur[L.key] = p;
        if (L.clamped) out[L.key].clamped++;
        if (phi < 0.6) {           // 着いている間(duty 0.62 の内側)
          const o = out[L.key]; o.stanceN++;
          o.maxDev = Math.max(o.maxDev, Math.abs(p.y - L.P[3].y));
          // 胴に対するつま先の後ろへの動きが、目盛りの流れ(速さ × 時間)と同じなら、地面の上で滑っていない
          if (prev && ((k - 1) / n + { LH: 0, LF: 0.25, RH: 0.5, RF: 0.75 }[L.key]) % 1 < 0.6)
            o.maxSlip = Math.max(o.maxSlip, Math.abs((p.x - prev[L.key].x) + rig.speed() * rig.period() / n));
        }
      }
      prev = cur;
    }
    for (const k in out) for (const f of ["maxSlip", "maxDev"]) out[k][f] = +out[k][f].toFixed(4);
    window.__TRI_WALKSCAN = out; document.title = "TRI_WALKSCAN " + JSON.stringify(out);
    rig.pose(null);
  }
  // 確かめる用: 肋骨の点が皮膚の断面の外へ出た量(断面の楕円で正規化した半径の最大値。1 を超えたら皮膚の外)
  if (v.ribCheck) {
    const rc = model.root.getObjectByName("ribcage");
    window.__TRI_RIBS = rc ? { maxOut: +rc.userData.maxOut.toFixed(3), sternal: rc.userData.sternal } : null;
    document.title = "TRI_RIBS " + JSON.stringify(window.__TRI_RIBS);
  }
  return { state, apply, render, walk, controls };
}
// 肌の画像を読み終えたら、すべての図版を描き直す(静止画の書き出しは、そのあとで「描き終えた」と知らせる)
const renders = []; let texReady = false;
onTexturesReady(() => { texReady = true; for (const r of renders) r(); if (window.__TRI_RENDER) window.__TRI_DONE = true; });
function track(t) { renders.push(t.render); if (texReady) t.render(); return t;
}

// 回す操作の切り替え(2026-10-04 Lead「キャンバスクリックで 3D 制御を掴むのはいいが、開放ができなくなる」
//   →「3D 制御用のボタンをつけるのが一番いい」)。
//   - ボタン「回す」を押すと回す操作が始まり、もう一度押すか Esc で終わる。
//   - 回している間: ドラッグで回す・ホイールで寄る。押す・離す・クリック・ホイールは送りの操作(ページめくり)へ伝えない。
//   - 回していない間: 図版は何も受け取らず、クリック・ドラッグ・ホイールはすべて送りの操作・スクロールへ渡す
//     (OrbitControls は enabled = false で素通しする)。図版の上でもページをめくれる。
//   - 以前の案(短いクリックで掴む・離す)は、回していない時に図版をクリックするとページ送りでなく「掴む」になる矛盾があり、やめた。
let grabStyleDone = false;
function attachGrab(host, cv, controls, startGrabbed) {
  if (!grabStyleDone) {
    const st = document.createElement("style");
    st.textContent = "div.tri.tri-grabbed{outline:4px solid #b5651d;outline-offset:-4px}" +
      "div.tri .tri-hint{position:absolute;right:12px;bottom:12px;font:bold min(22px,3.4vw)/1.2 'Noto Sans CJK JP',sans-serif;color:#3b2f1c;" +
      "background:rgba(255,252,244,.88);border-radius:8px;padding:6px 10px;pointer-events:none}";
    document.head.appendChild(st); grabStyleDone = true;
  }
  const hint = document.createElement("div"); hint.className = "tri-hint"; host.appendChild(hint);
  let grabbed = false;
  const listeners = [];
  const set = (on) => {
    grabbed = on; controls.enabled = on;
    cv.style.touchAction = on ? "none" : "auto";      // 回していない間はタッチでのスクロールも通す
    cv.style.cursor = on ? "grab" : "default";
    host.classList.toggle("tri-grabbed", on);
    hint.textContent = on ? "ドラッグで回せます。「回す」をもう一度押すか Esc で終わり" : "";
    hint.style.display = on ? "" : "none";
    for (const f of listeners) f(on);
  };
  // 回している間の操作は、送りの操作へ伝えない
  for (const ev of ["pointerdown", "pointerup", "click", "mousedown", "mouseup", "touchstart", "touchend", "wheel"]) {
    cv.addEventListener(ev, (e) => { if (grabbed) e.stopPropagation(); }, { passive: true });
  }
  document.addEventListener("keydown", (e) => { if (grabbed && e.key === "Escape") set(false); });
  set(!!startGrabbed);
  return { get: () => grabbed, set, onChange: (f) => { listeners.push(f); f(grabbed); } };
}

function ui(host, t) {
  const bar = document.createElement("div"); bar.className = "tri-ui";
  if (t.grab) {                          // 回す操作の切り替え(attachGrab)
    const gb = document.createElement("button"); gb.type = "button"; gb.textContent = "回す";
    gb.addEventListener("click", (e) => { e.stopPropagation(); t.grab.set(!t.grab.get()); });
    for (const ev of ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"]) gb.addEventListener(ev, (e) => e.stopPropagation());
    t.grab.onChange((on) => gb.setAttribute("aria-pressed", on ? "true" : "false"));
    bar.appendChild(gb);
  }
  const mk = (label, key) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = label;
    const sync = () => b.setAttribute("aria-pressed", t.state[key] ? "true" : "false");
    b.addEventListener("click", (e) => { e.stopPropagation(); t.state[key] = !t.state[key]; sync(); t.apply(); });
    // 送りの操作(面のクリックでページをめくる)へ伝えない
    for (const ev of ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"]) b.addEventListener(ev, (e) => e.stopPropagation());
    sync(); return b;
  };
  for (const [label, key] of [["皮膚", "skin"], ["筋肉", "muscle"], ["内臓", "organs"], ["血管", "vessels"], ["脳", "brain"], ["骨格", "skeleton"], ["ワイヤーフレーム", "wire"]]) bar.appendChild(mk(label, key));
  // 歩く(層の切り替えとは別の状態)
  const wb = document.createElement("button"); wb.type = "button"; wb.textContent = "歩く"; let walking = false;
  wb.setAttribute("aria-pressed", "false");
  wb.addEventListener("click", (e) => { e.stopPropagation(); walking = !walking; wb.setAttribute("aria-pressed", String(walking)); t.walk(walking); });
  for (const ev of ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"]) wb.addEventListener(ev, (e) => e.stopPropagation());
  bar.appendChild(wb);
  host.appendChild(bar);
}

function webglOK() {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
}

function main() {
  const R = window.__TRI_RENDER;
  if (R) {                                  // 代わりの静止画の書き出し
    const host = document.getElementById("tri-render");
    track(setup(host, R.view, R.w, R.h, false));
    return;
  }
  if (!webglOK()) return;                   // 代わりの静止画のまま
  for (const host of document.querySelectorAll("div.tri")) {
    const w = host.clientWidth, h = host.clientHeight;
    const t = track(setup(host, host.dataset.view || "free", w, h, true));
    const fb = host.querySelector("img.tri-fallback"); if (fb) fb.style.display = "none";
    t.grab = attachGrab(host, host.querySelector("canvas"), t.controls, host.dataset.grab === "1");
    if (host.dataset.ui !== "0") ui(host, t);
  }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main); else main();
