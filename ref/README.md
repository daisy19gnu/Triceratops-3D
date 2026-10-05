# 照合用の参照写真

模型の形を写真と重ねて確かめるためだけに置く(本には入れない)。

| ファイル | 元 | 権利 | 使いどころ |
|---|---|---|---|
| houston-left-1280.jpg | Wikimedia Commons "Triceratops skull houston.JPG"(Nekarius)の 1280 px 版 https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Triceratops_skull_houston.JPG/1280px-Triceratops_skull_houston.JPG | Public domain | 頭骨・下あご・フリルの側面の輪郭(src/tri-skull.js の px 座標はこの画像の座標) |

| (保存しない)Triceratops_horridus_Marsh_1889-150k_(Smithsonian_Institute).stl | Smithsonian Institution の組み立て骨格「Hatcher」(USNM PAL 500000)の 3D スキャン。https://upload.wikimedia.org/wikipedia/commons/7/7c/Triceratops_horridus_Marsh_1889-150k_%28Smithsonian_Institute%29.stl(元: https://3d.si.edu/object/3d/triceratops-horridus-marsh-1889:d8c623be-4ebc-11ea-b77f-2e728ce88125) | CC0 1.0 | 骨の形の観察(長い骨の両端・椎骨・血道弓・蹄)。倒れた姿勢で組まれ、骨格全体が 1 つの面につながっているので、姿勢の資料・部品の切り出しには使えない。7.5 MB のためリポジトリには置かない |

照合: `bash tools/build.sh photo` → `build/stills/chk_photo.png`(正射影の描画)と `build/photo-compare.png`(写真に重ねたもの。緑 = 模型の輪郭)を書き出す。
