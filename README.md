# Triceratops 3D

夜明 歩『Triceratops』の図版に使う、トリケラトプスの 3D の模型です。図版はすべて [three.js](https://threejs.org/) で描きます。

- **ブラウザで見る**: `index.html`(GitHub Pages で公開)。ドラッグで回し、ホイールで寄れます。左上の「**回す**」で回す操作を止める・再開します(本の中では、回していない間は図版の上でもページをめくれます)。
- 左上のボタンで、**皮膚・筋肉・内臓・血管・脳・骨格**の層を着け外しでき、**ワイヤーフレーム**にもできます。「**歩く**」で歩かせられます。
- 視点は上の選択肢で切り替えます(本の図版と同じ視点)。`?view=skull` のように URL でも選べます。かわいい版は `?kawaii=1`。

骨格は化石の資料にもとづいていますが、**筋肉・内臓・血管・皮膚の色、歩き方は推定**です。何にもとづいたか、何を推定したかは
[docs/MODEL-NOTES.md](docs/MODEL-NOTES.md)、調べた資料は [docs/RESEARCH-skull-and-locomotion.md](docs/RESEARCH-skull-and-locomotion.md)(頭骨・歩き方)と
[docs/RESEARCH-ribcage-and-sternum.md](docs/RESEARCH-ribcage-and-sternum.md)(肋骨・胸骨)にあります。

## 置き場

| 場所 | 中身 |
|---|---|
| `src/` | 模型(`tri-model.js`)、頭骨とフリル(`tri-skull.js`、標本写真から輪郭を読み取った)、肋骨と胸骨(`tri-ribs.js`)、脚の関節と歩く動き(`tri-walk.js`)、実行部(`tri-viewer.js`) |
| `tools/` | まとめと静止画の書き出し(`build.sh`)、肌の画像の埋め込み(`make-tex.py`)、写真との照合(`photo-compare.py`)、「回す」の確かめ(`check-grab.sh`) |
| `textures/` | 肌の元画像 |
| `ref/` | 照合に使う参照写真(Public domain) |
| `dist/` | まとめ済みの実行部(three.js と肌の画像を同梱した 1 ファイル)。`index.html` はこれを読む |
| `docs/` | 模型の記録と資料調べ |
| `kawaii-v1/` | 写真の品質を目指して作り直す前の「かわいい版」 |

## ビルド

```sh
npm install                  # three.js と esbuild(版は package.json)
bash tools/build.sh bundle   # dist/tri-viewer.js を作る
bash tools/build.sh render   # 視点ごとの静止画を build/stills/ へ(headless の Chrome)
bash tools/build.sh photo    # 頭骨を参照写真に重ねた照合画像を build/photo-compare.png へ
bash tools/check-grab.sh     # 「回す」の切り替えとページへの伝わり方の確かめ(PASS / FAIL)
```

`dist/tri-viewer.js` は通常の script(IIFE)で、`file://` で開いたページでも、EPUB の中でも動きます。
本(EPUB)への組み込みはこのリポジトリでは行いません。

## 使用許諾

[LICENSE](LICENSE) を見てください。同梱の three.js は MIT License です([dist/LICENSE-three.txt](dist/LICENSE-three.txt))。
