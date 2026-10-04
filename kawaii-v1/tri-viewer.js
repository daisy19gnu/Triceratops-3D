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
  const camera = new THREE.PerspectiveCamera(38, w / h, 0.05, 200);
  camera.position.set(...v.pos);
  const target = new THREE.Vector3(...v.target);
  camera.lookAt(target);
  let controls = null;
  function render() { renderer.render(scene, camera); }
  if (interactive) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(target); controls.enableDamping = false; controls.update();
    controls.addEventListener("change", render);
  }
  apply();
  return { state, apply, render };
}
// 肌の画像を読み終えたら、すべての図版を描き直す(静止画の書き出しは、そのあとで「描き終えた」と知らせる)
const renders = []; let texReady = false;
onTexturesReady(() => { texReady = true; for (const r of renders) r(); if (window.__TRI_RENDER) window.__TRI_DONE = true; });
function track(t) { renders.push(t.render); if (texReady) t.render(); return t;
}

function ui(host, t) {
  const bar = document.createElement("div"); bar.className = "tri-ui";
  const mk = (label, key) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = label;
    const sync = () => b.setAttribute("aria-pressed", t.state[key] ? "true" : "false");
    b.addEventListener("click", (e) => { e.stopPropagation(); t.state[key] = !t.state[key]; sync(); t.apply(); });
    // 送りの操作(面のクリックでページをめくる)へ伝えない
    for (const ev of ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"]) b.addEventListener(ev, (e) => e.stopPropagation());
    sync(); return b;
  };
  for (const [label, key] of [["皮膚", "skin"], ["筋肉", "muscle"], ["内臓", "organs"], ["血管", "vessels"], ["脳", "brain"], ["骨格", "skeleton"], ["ワイヤーフレーム", "wire"]]) bar.appendChild(mk(label, key));
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
    // 図版の上のドラッグを、送りの操作へ伝えない(回すための操作なので)
    const cv = host.querySelector("canvas");
    for (const ev of ["pointerdown", "pointerup", "click", "mousedown", "mouseup", "touchstart", "touchend"]) cv.addEventListener(ev, (e) => e.stopPropagation());
    if (host.dataset.ui !== "0") ui(host, t);
  }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main); else main();
