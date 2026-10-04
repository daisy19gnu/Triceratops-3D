#!/bin/bash
# 『Triceratops』の 3D の模型を 1 ファイルにまとめ(three.js を同梱)、視点ごとの静止画を書き出す。
# 使い方: bash tools/build.sh [bundle|render|all|photo]
#   bundle: src/ と three.js を 1 ファイルへまとめ、dist/tri-viewer.js へ(IIFE。file:// でも EPUB の中でも、ブラウザの
#           ページ index.html からも、通常の script として動く)。three.js の使用許諾を dist/LICENSE-three.txt へ写す。
#   render: headless の Chrome で、視点ごとの静止画を build/stills/<view>.png へ(WebGL は SwiftShader)。
#           EPUB の「動かない読書アプリ向けの代わりの静止画」の元になる。取り込みは EPUB を作る側で行う。
#   photo:  頭骨を正射影で描き(視点 chk_photo)、参照写真(ref/houston-left-1280.jpg)に重ねた照合画像を build/photo-compare.png へ
# three.js と esbuild の版は package.json で決め、node_modules へ入れる(版管理には入れない)。
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"; ROOT="$(cd "$HERE/.." && pwd)"
STILLS="${TRI_STILLS:-$ROOT/build/stills}"
WORK="${TRI_WORK:-$ROOT/build/work}"
MODE="${1:-all}"
mkdir -p "$WORK" "$STILLS" "$ROOT/dist"

deps() {
  if [ ! -d "$ROOT/node_modules/three" ] || [ ! -d "$ROOT/node_modules/esbuild" ]; then
    (cd "$ROOT" && if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi)
  fi
}

bundle() {
  deps
  python3 "$HERE/make-tex.py"   # 肌の画像(textures/skin-*.png)→ 色と法線マップを src/tri-tex.js に埋め込む
  node -e '
    const [root, entry, out] = process.argv.slice(1);
    const esbuild = require(root + "/node_modules/esbuild"); const three = root + "/node_modules/three";
    esbuild.buildSync({ entryPoints: [entry], bundle: true, minify: true, format: "iife", target: "es2020", outfile: out,
      alias: { "three": three + "/build/three.module.js", "three/addons": three + "/examples/jsm" },
      banner: { js: "/* Triceratops viewer (c) 夜明 歩 / three.js " + require(three + "/package.json").version + " (c) 2010-2025 three.js authors, MIT License: see LICENSE-three.txt */" },
      legalComments: "none" });
  ' "$ROOT" "$ROOT/src/tri-viewer.js" "$ROOT/dist/tri-viewer.js"
  cp "$ROOT/node_modules/three/LICENSE" "$ROOT/dist/LICENSE-three.txt"
  ls -la "$ROOT/dist/tri-viewer.js" | awk '{print "bundle:", $5, "bytes"}'
}

render() {
  local views="${TRI_VIEWS:-cover side threequarter skull horns beak skeleton muscle organs vessels brain legs skinclose wire free}"
  local W="${TRI_W:-1040}" H="${TRI_H:-780}"
  local prof; prof="$(mktemp -d /tmp/tri-chrome-XXXX)"
  for v in $views; do
    local html="$WORK/render-$v.html"
    printf '<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:#f3efe4}canvas{display:block}</style></head><body><div id="tri-render"></div><script>window.__TRI_RENDER={view:"%s",w:%s,h:%s};</script><script src="%s"></script></body></html>' "$v" "$W" "$H" "$ROOT/dist/tri-viewer.js" > "$html"
    # --password-store=basic: ログインの鍵束がロックされていると headless の Chrome が止まる
    timeout 120 google-chrome --headless=new --no-first-run --password-store=basic --user-data-dir="$prof" \
      --use-angle=swiftshader --enable-unsafe-swiftshader --hide-scrollbars --force-device-scale-factor=1 \
      --window-size="$W,$H" --virtual-time-budget=4000 --screenshot="$STILLS/$v.png" "file://$html" >/dev/null 2>&1 || echo "render 失敗: $v" >&2
    [ -s "$STILLS/$v.png" ] && echo "render: $v" || echo "render 無し: $v" >&2
  done
  rm -rf "$prof"
}

photo() {
  TRI_VIEWS=chk_photo render
  python3 "$HERE/photo-compare.py" "$STILLS/chk_photo.png" "$ROOT/build/photo-compare.png"
}

case "$MODE" in
  bundle) bundle ;;
  render) render ;;
  photo) photo ;;
  all) bundle; render ;;
  *) echo "usage: $0 [bundle|render|all|photo]" >&2; exit 2 ;;
esac
