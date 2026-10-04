#!/bin/bash
# 回す操作の切り替え(ボタン「回す」)の確かめ。headless の Chrome で押す操作を合成し、
# 回しているか・ページへクリックが伝わったか・ボタンの押された表示を、期待の並びと突き合わせる。合えば exit 0、違えば exit 1、測れなければ 77。
# 使い方: bash tools/check-grab.sh(先に tools/build.sh bundle)
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"; W="$ROOT/build/work"; mkdir -p "$W"
[ -f "$ROOT/dist/tri-viewer.js" ] || { echo "GRABCHECK 77 dist/tri-viewer.js が無い" >&2; exit 77; }
cat > "$W/grab-test.html" <<HTML
<!doctype html><meta charset="utf-8"><body style="margin:0">
<div class="tri" data-view="side" style="position:relative;width:600px;height:400px"></div>
<script src="file://$ROOT/dist/tri-viewer.js"></script>
<script>
let pageClicks = 0; document.body.addEventListener("click", () => pageClicks++);
const out = [], sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function tap(cv, moveTo, holdMs) {
  const o = { bubbles: true, cancelable: true, pointerId: 1, pointerType: "mouse", isPrimary: true, button: 0, buttons: 1 };
  cv.dispatchEvent(new PointerEvent("pointerdown", { ...o, clientX: 300, clientY: 200 }));
  if (moveTo) cv.dispatchEvent(new PointerEvent("pointermove", { ...o, clientX: moveTo[0], clientY: moveTo[1] }));
  await sleep(holdMs);
  const [x, y] = moveTo || [300, 200];
  cv.dispatchEvent(new PointerEvent("pointerup", { ...o, buttons: 0, clientX: x, clientY: y }));
  cv.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, clientX: x, clientY: y }));
}
setTimeout(async () => {
  const host = document.querySelector("div.tri"), cv = host && host.querySelector("canvas");
  const btn = host && [...host.querySelectorAll(".tri-ui button")].find((b) => b.textContent === "回す");
  if (!cv || !btn) { document.title = "GRAB NOCANVAS"; return; }
  const st = () => out.push((host.classList.contains("tri-grabbed") ? "G" : "R") + pageClicks + (btn.getAttribute("aria-pressed") === "true" ? "p" : "-"));
  st();                                  // 初期: 回していない・クリック 0・ボタンは押されていない
  await tap(cv, null, 10); st();         // 図版を短くクリック → 回していないのでページへ伝わる(ページ送り)
  btn.click(); st();                     // 「回す」を押す → 回す(ボタンのクリックはページへ伝えない)
  await tap(cv, [380, 220], 600); st();  // 回しながらドラッグ → 伝えない
  await tap(cv, null, 10); st();         // 回しながら短いクリック → 回したまま・伝えない
  btn.click(); st();                     // 「回す」をもう一度 → 終わる
  await tap(cv, [380, 220], 600); st();  // 回していないドラッグ → ページへ伝わる
  btn.click(); st();                     // 「回す」 → 回す
  document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })); st();   // Esc → 終わる
  document.title = "GRAB " + out.join(",");
}, 800);
</script></body>
HTML
prof="$(mktemp -d /tmp/tri-chrome-XXXX)"
got="$(timeout 60 google-chrome --headless=new --no-first-run --password-store=basic --user-data-dir="$prof" --use-angle=swiftshader \
  --enable-unsafe-swiftshader --virtual-time-budget=6000 --dump-dom "file://$W/grab-test.html" 2>/dev/null | grep -o '<title>GRAB [^<]*' | sed 's/^<title>//' || true)"   # タイトルだけを読む(スクリプトの本文にも同じ語がある)
rm -rf "$prof"
want="GRAB R0-,R1-,G1p,G1p,G1p,R1-,R2-,G2p,R2-"
[ -n "$got" ] || { echo "GRABCHECK 77 結果が読めない(Chrome が動かなかった)" >&2; exit 77; }
if [ "$got" = "$want" ]; then echo "GRABCHECK PASS $got"; else echo "GRABCHECK FAIL got=[$got] want=[$want]"; exit 1; fi
