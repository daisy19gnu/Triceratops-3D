# 照合用の参照写真

模型の形を写真と重ねて確かめるためだけに置く(本には入れない)。

| ファイル | 元 | 権利 | 使いどころ |
|---|---|---|---|
| houston-left-1280.jpg | Wikimedia Commons "Triceratops skull houston.JPG"(Nekarius)の 1280 px 版 https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Triceratops_skull_houston.JPG/1280px-Triceratops_skull_houston.JPG | Public domain | 頭骨・下あご・フリルの側面の輪郭(src/tri-skull.js の px 座標はこの画像の座標) |

照合: `bash tools/build.sh photo` → `build/stills/chk_photo.png`(正射影の描画)と `build/photo-compare.png`(写真に重ねたもの。緑 = 模型の輪郭)を書き出す。
