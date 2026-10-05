# 資料調べ: トリケラトプスの前あし(肩帯・上腕・前腕・手)

調べた日: 2026-10-05(JST)
目的: three.js の模型で前あしの骨の長さ・太さを資料の寸法で作り直すための根拠集め(後ろあしは RESEARCH-pelvis-and-hindlimb.md で済み)。
方法: Web の検索と取得だけで行った。手元で読んだのは同じディレクトリの RESEARCH-*.md(書式と既出の資料の確認のため。編集はしていない)だけ。

## 0. この文書の約束

- 数値と形の記述は、読んだ資料に書いてあるものだけを載せた。
  自分で割り算・足し算・引き算をした値は必ず「(計算)」と書いて区別した。
- 各資料に、どこまで読んだかを書いた。
  - **本文** = 本文(該当する節)を読んだ
  - **表** = 寸法の表だけを読んだ(本文は読めていない)
  - **要旨** = 要旨だけを読んだ
  - **図** = 図を見ただけ(図から読み取ったことは「図からの観察」と書いた。図から寸法を測ることはしていない)
  - **未読** = 存在は分かったが読めていない(内容は書かない)
- 1906〜1933 年の資料は archive.org の OCR テキストで読み、**数値表はすべて頁の画像(archive.org の頁画像)で確かめた**。OCR は表の数字がほぼ全部崩れていた(例: HML1907 p.191 の上腕骨の長さ ".71" が OCR では "5 fl")。
- **Triceratops 以外の種の値は、必ず種名と標本番号を添えた。** 種名は資料の表記のまま書き、現在の扱いを資料が書いている場合だけ併記した(Brown・Lull の "*Monoclonius nasicornus*" / "*M. flexus*" は Lull 1933 自身が Centrosaurus と書いているので「Centrosaurus」と書く)。
- 単位は資料のまま(USNM の表は m、ほかは mm)。

---

## 1. 資料の一覧と読んだ範囲

| 記号 | 資料 | 対象の種・標本 | 読んだ範囲 |
|---|---|---|---|
| HML1907 | Hatcher, J.B., Marsh, O.C. & Lull, R.S. 1907. *The Ceratopsia*. U.S. Geological Survey Monograph 49. https://archive.org/details/ceratopsia00hatc | *Triceratops prorsus* USNM 4842(組み立て骨格の基になった個体)、*T. serratus* AMNH 970、*Monoclonius crassus* AMNH 3998 | **本文**(肩帯 pp.58–59、前肢と手 pp.59–61、後肢の冒頭 p.62、Monoclonius の上腕骨 pp.79–80、組み立て骨格の節 pp.189–192)+ **図**(Fig. 64 肩甲骨・烏口骨、Fig. 65/66 上腕骨、Fig. 67 尺骨、Fig. 68 橈骨、Fig. 69 中手骨、Pl. XI〜XIII・XVII の図版説明)。p.58・p.61 は頁画像で確認 |
| G1905 | Gilmore, C.W. 1905. A mounted skeleton of *Triceratops*. Proc. U.S. Nat. Mus. 29: 433–435 | *T. prorsus*、USNM 4842 を基にした合成の組み立て骨格 | 原典は**未読**。HML1907 pp.189–192 に Gilmore 自身の加筆付きで引用されており、そちらを**本文**として読んだ。**寸法表(pp.191–192)は頁画像で確認** |
| B1906 | Brown, B. 1906. New notes on the osteology of *Triceratops*. Bull. Amer. Mus. Nat. Hist. 22: 297–300. https://archive.org/details/bulletin-american-museum-natural-history-22-297-300 | *Triceratops* AMNH 971、AMNH 5880 | **本文**(全文、4 頁) |
| B1917 | Brown, B. 1917. A complete skeleton of the horned dinosaur *Monoclonius*, and description of a second skeleton showing skin impressions. Bull. Amer. Mus. Nat. Hist. 37: 281–306. https://archive.org/details/bulletin-american-museum-natural-history-37-281-306 | Centrosaurus(Brown の "*M. nasicornus*")AMNH 5351、"*M. cutleri*" AMNH 5427 | **本文**(属の特徴 pp.285–286、肩帯、前肢、手 pp.294–296、復元 p.300)+ **寸法表(pp.300–301, 305)を頁画像で確認** |
| L1933 | Lull, R.S. 1933. A revision of the Ceratopsia or horned dinosaurs. Memoirs of the Peabody Museum of Natural History 3(3): 1–175. https://archive.org/details/revisionofcerato33lull | Centrosaurus *C. flexus* YPM 2015、Centrosaurus AMNH 5351、*M. crassus* AMNH 3998、**Triceratops USNM 4842**、Chasmosaurus CMN 2245・CMN 2280 | **本文**(烏口骨・肩甲骨 pp.50–51、上腕骨 pp.53–54、尺骨・橈骨 pp.55–56、手 pp.56–57、足の節の手の周囲 p.63、組み立ての姿勢 pp.64–65、Chasmosaurus pp.69–70)+ **寸法表(pp.51, 54, 55, 56, 57, 70)を頁画像で確認** |
| H2014 | Holmes, R.B. 2014. The postcranial skeleton of *Vagaceratops irvinensis* (Dinosauria, Ceratopsidae). Vertebrate Anatomy Morphology Palaeontology 1: 1–21. DOI 10.18435/B5159V | *Vagaceratops*(= *Chasmosaurus*)*irvinensis* CMN 41357(関節したまま) | **本文**(肩帯と前肢 pp.7–12、考察 pp.16–18、付録 1 の寸法表 pp.20–21。PDF のテキストで読んだ) |
| MB2011 | Maidment, S.C.R. & Barrett, P.M. 2011. A new specimen of *Chasmosaurus belli* … Zootaxa 2963: 1–47. DOI 10.5281/zenodo.278172 | *Chasmosaurus belli* NHMUK R4948 | **表**(Table 3 の後肢・前肢の寸法だけ。Plazi の表の抽出 http://table.plazi.org/id/DF35D58CF7547311FF66FF18EEB5519E で読んだ。本文は取得できず) |
| MH2006 | Mallon, J.C. & Holmes, R.B. 2006. A reevaluation of sexual dimorphism in the postcranium of the chasmosaurine ceratopsid *Chasmosaurus belli*. Canadian Field-Naturalist 120: 403–412. https://www.canadianfieldnaturalist.ca/index.php/cfn/article/view/347 | Chasmosaurus CMN 2245・CMN 2280 | **本文**(標本・方法・上腕骨・表 1) |
| TH2007 | Thompson, S. & Holmes, R. 2007. Forelimb stance and step cycle in *Chasmosaurus irvinensis*. Palaeontologia Electronica 10(1): 5A. https://palaeo-electronica.org/2007_1/step/step.pdf | CMN 41357 | **本文**(全文を寸法の有無の観点で検索。骨の寸法の表は無い) |
| DR2024 | de Rooij, J., Lucassen, S.A.N., Furer, C., Schulp, A.S. & Sander, P.M. 2024. Exploring the ceratopsid growth record: a comprehensive osteohistological analysis of *Triceratops* … Cretaceous Research 154: 105738. DOI 10.1016/j.cretres.2023.105738(CC BY 4.0)。PDF: https://repository.naturalis.nl/pub/800353 。補足資料 Table S1: https://ars.els-cdn.com/content/image/1-s2.0-S0195667123002665-mmc1.docx | *T. horridus*(Darnell Triceratops Bonebed の RGM.13941xx、関節していない骨の集まり)、**関連付けられた 1 個体 *T. horridus* RGM.1332500**、*T.* cf. *prorsus*(RSM・CMN) | **本文**(標本・方法 2.1〜2.5、表 1)+ **補足資料 Table S1(全文)** |
| CE2012 | Campione, N.E. & Evans, D.C. 2012. A universal scaling relationship between body mass and proximal limb bone dimensions in quadrupedal terrestrial tetrapods. BMC Biology 10: 60. DOI 10.1186/1741-7007-10-60(Europe PMC PMC3403949) | *Triceratops horridus* NSM PV 20379(Fujiwara 2009 の標本)、*Styracosaurus* AMNH 5372 | **本文**(方法の測り方の段落)+ **Additional file 1(寸法の表、全行)** |
| F2009 | Fujiwara, S. 2009. A reevaluation of the manus structure in *Triceratops* (Ceratopsia: Ceratopsidae). J. Vert. Paleontol. 29: 1136–1147. DOI 10.1671/039.029.0406 | *Triceratops* NSM PV 20379(右前肢が関節したまま) | **要旨**(BioOne の要旨。本文・表は有料で取得できず)。H2014 が引く比の値は「H2014 経由」と書いた |
| G1919 | Gilmore, C.W. 1919. A new restoration of *Triceratops*, with notes on the osteology of the genus. Proc. U.S. Nat. Mus. 55: 97–112. https://archive.org/details/biostor-79527 | *Triceratops* USNM 8013(病変のある右肩甲骨) | **本文**(前肢の寸法は無い。肩甲骨の病変の記述だけ) |
| OW1986 | Ostrom, J.H. & Wellnhofer, P. 1986. The Munich specimen of *Triceratops* with a revision of the genus. Zitteliana 14: 111–158. https://archive.org/details/biostor-127729 | — | OCR 全文を "humer / ulna / radius / scapula / coracoid / metacarp / manus / forelimb" で検索して 0 件。前肢の記述は無いと判断(読み込みは検索だけ) |
| HRM2005 | Holmes, R.B., Ryan, M.J. & Murray, A.M. 2005. Photographic atlas of the postcranial skeleton of the type specimen of *Styracosaurus albertensis*. https://archive.org/details/photographicatla00holm | *Styracosaurus* CMN 344 | 前肢の節の本文と図版説明を検索。**寸法は載っていない**(図版の縮尺棒だけ) |
| FH2012 | Fujiwara, S. & Hutchinson, J.R. 2012. Proc. R. Soc. B 279: 2561–2570. DOI 10.1098/rspb.2012.0190 | *Triceratops* | 本文の Triceratops の言及を取得ツール経由で確認。**Triceratops の寸法は本文に無い**(補足資料は未読) |
| 未読 | Paul & Christiansen 2000(Paleobiology 26)、Holmes & Ryan 2013(*Styracosaurus*、Kirtlandia 58)、Mallon & Holmes 2010(cf. *Anchiceratops*)、Johnson & Ostrom 1995(*Torosaurus*)、Chinnery 2001・2004、Wiman 1930(*Pentaceratops*)、Penkalski & Dodson 1999、Maidment & Barrett 2011 の本文 | — | **未読**(他の資料が引用していることだけ確認) |

---

## 2. 肩甲骨・烏口骨

### 2.1 Triceratops の形(HML1907 本文 pp.58–59、Hatcher)

- 肩帯で保存が知られているのは**肩甲骨と烏口骨だけ**(鎖骨は見つかっていない)。
- 肩甲骨は「**長く平たく**、特に上端は薄く、前後にいくらか広がる」。
- 外面の中ほど、上端のすぐ下から**稜**が始まり、**骨の長さの約 3 分の 2** にわたって下へ続く。だんだん刃の後縁に近づき、そこで急に高くなって後ろへ向き、刃の後縁を越えて突き出し、**関節窩を支える**。Hatcher はこれを哺乳類の肩甲棘に相同とみなし、刃を小さい前の部分と大きい後ろの部分に分けると書く。
- 「肩甲骨は**関節窩の上縁で最も幅広く最も厚い**」。関節窩は「かなり高く、深さは中程度」で、**肩甲骨と烏口骨の両方で作り、肩甲骨の方がやや多くを占める**。
- 烏口骨は肩甲骨と縫合でつながり、関節窩の下の部分を作る。**前縁と下縁は内へ曲がり、合わせてほぼ完全な半円**を描く。後下の角で縁が厚くなる。烏口骨の下縁と関節窩の間にかなり深い切れ込み。烏口孔は大きい。
- **図(Fig. 64、頁画像で確認)**: 説明文は「右の肩甲骨と烏口骨の外面、*Triceratops prorsus* **No. 4800**, U.S. National Museum, 組み立て骨格の中、1/8、Marsh による」。頁画像でも番号は "4800" と印刷されている(本文の他の図はみな No. 4842。4800 が別の標本か誤植かは資料からは分からない)。図からの観察: 刃は上へ向かってやや細くなりながら長く伸び、上端は丸く終わる。刃は全体にゆるく弓なり。下端に烏口骨が付き、烏口骨の中ほどに烏口孔。
- **L1933(本文 p.51)**: 関節窩の上から斜めに走る稜は、Centrosaurus では刃の遠位端の**前縁**へ向かうが、「**Triceratops では同じように始まり、長さの約 3 分の 1 で曲がって、刃の遠位端の中ほど**で終わる」。Chasmosaurus は Centrosaurus 型、Anchiceratops は Triceratops に近づく。
- **H2014(本文 p.7)**: 肩甲骨の稜(dorsalis scapulae の起始と推定)の走り方は Vagaceratops・Centrosaurus・Styracosaurus 型と「**Triceratops(Hatcher et al. 1907)・Torosaurus とは違う**」。

### 2.2 寸法

**G1905(HML1907 p.191 寸法表、頁画像で確認、単位 m)— *T. prorsus* USNM 組み立て骨格の右前肢**

| 項目(表の原語) | 値 |
|---|---|
| 肩甲骨と烏口骨の長さ(Length of scapula and coracoid) | **1.35** |
| 烏口骨だけの長さ(Length of coracoid only) | **0.38** |
| 烏口骨の幅(Breadth of coracoid) | **0.39** |
| 肩甲骨の刃の上端の幅(Breadth of blade of scapula at upper end) | **0.26** |
| 肩甲骨の最大の幅(Greatest breadth of scapula) | **0.36** |

- 肩甲骨だけの長さは表に無い。1.35 − 0.38 = 0.97 m(計算。ただし 2 つの長さが同じ線上で測られたかは表に書かれていないので、目安に留める)。
- **刃の最小の幅は表に無い。関節窩の大きさも表に無い。**
- HML1907 本文では最大の幅は「関節窩の上縁」の所(2.1 節)。

**他の角竜類(代わりの資料、単位 mm)**

| 種・標本 | 肩甲骨 | 肩甲骨+烏口骨 | 烏口骨 | 刃の幅 | 関節窩 | 資料 |
|---|---|---|---|---|---|---|
| Centrosaurus AMNH 5351 | 700 | 910 | — | 遠位端 220 / 近位端の最大 260 | — | B1917 p.300(頁画像で確認) |
| Centrosaurus *C. flexus* YPM 2015 | — | 810(全長) | 前後径 365 / 横径 217 | — | — | L1933 p.51(頁画像で確認) |
| *M. crassus* AMNH 3998 | — | 840(全長) | 前後径 336 / 横径 176 | — | — | L1933 p.51(頁画像で確認) |
| Chasmosaurus CMN 2245 | 679 | — | — | — | — | L1933 p.70(Sternberg 1927 を mm に換算したもの。頁画像で確認) |
| Chasmosaurus CMN 2280 | 737 | — | 最大長 330 | — | — | L1933 p.70(同上) |
| *Vagaceratops* CMN 41357(左) | 750(全長) | — | 右: 肩甲骨との縫合の長さ 135、前後の最大幅 242 | **最小の幅(shaft)111** / 関節窩での最大の幅 210 | **関節窩の長さ 121** | H2014 付録 1 |
| *Chasmosaurus belli* NHMUK R4948 | — | — | 背腹の高さ 左 320 / 右 335 | — | — | MB2011 Table 3(表だけ。cm を mm に書き直した) |

- B1917(本文 p.294): Centrosaurus の肩甲骨は「Triceratops と同じ形のようだが**関節窩がより深い**。刃は長く薄く、遠位端で中程度に広がる」。烏口骨は肩甲骨と**等しく**関節窩を作る(Hatcher の Triceratops は肩甲骨の方が多い)。
- L1933(本文 p.51): YPM 2015 では関節窩の大部分を肩甲骨、小部分を烏口骨が作る。

---

## 3. 上腕骨

### 3.1 Triceratops の形

**HML1907(本文 p.60)— *T. prorsus* USNM 4842(Fig. 65・66、Pl. XI・XII)**
- 「**両端で大きく広がり、radial crest(橈側の稜)のすぐ下で大きくくびれる**」。
- radial crest は「格別によく発達し、上端から前内側の縁に沿って**骨の長さの約 3 分の 2** にわたって伸びる」。
- 骨頭は**近位端のほぼ中ほど**にあり、軸の後縁を少しだけ後ろへ越える。
- 遠位では橈骨顆と尺骨顆がはっきり分かれ、広く深い滑車で隔てられる。肘頭窩は浅い。
- 「上腕骨は大腿骨と比べると、前腕の骨が脛骨・腓骨と比べるよりも、比較的長い」(比の数値は無い)。
- 図版 Pl. XI・XII の説明: 「Specimen No. 4842, U.S. National Museum」「One-fourth natural size」(右上腕骨、後・外・前・近位・遠位・内の各面と軸の断面)。

**L1933(本文 p.54)— Triceratops と Centrosaurus の違い**
- 「Triceratops では radial crest に**三角筋稜とははっきり別の粗面**がある。Centrosaurus を含む Monoclonius では両者がおおむね三角筋稜に合わさる」。
- Centrosaurus の骨頭は近位端の内側半分にあり、軸に直角に後ろを向く(上腕骨はほぼ水平だった)。「**Triceratops では骨頭が骨の頂に溶け込むようで、肩の普段の角度が直角より大きかった**ことを示す」。
- Centrosaurus の上腕骨は「Triceratops より**細く**、特に近位端の形が大きく違う」。
- **B1917(本文 p.294)**: Centrosaurus の前肢は Triceratops と同じ形だが全体に細い。「**上腕骨は比較的長く、尺骨・橈骨は比較的短い**」。Centrosaurus の三角筋稜は軸の中ほどより上で終わる(p.286)。

### 3.2 寸法(Triceratops)

**資料が割れている: USNM 4842 の上腕骨の長さは 0.71 m(G1905)と 776 mm(L1933)の 2 つがある。**

| 標本 | 長さ | 近位端の幅 | 遠位端の幅 | 軸の周囲 | 三角筋稜 | 資料 |
|---|---|---|---|---|---|---|
| *T. prorsus* USNM 組み立て骨格の右上腕骨 | **0.71 m** | **0.40 m** | **0.36 m** | **0.43 m**(Girth of shaft。どこで測ったかは書いていない) | — | G1905(HML1907 p.191、頁画像で確認) |
| *Triceratops* USNM 4842 | **776 mm** | radial crest をまたぐ幅 **312.4** | 滑車の端をまたぐ幅 **364** | 軸の最小の幅 —(空欄) | 三角筋稜と radial crest の長さ **412** | L1933 p.54(頁画像で確認)。**注 27「図から推定」**(Hatcher の Fig. 65 または図版から測った値で、実物の計測ではない) |
| *T. horridus* RGM.1332500(関連付けられた 1 個体) | **708**(L+R) | — | — | — | — | DR2024 補足 Table S1 |
| *T. horridus* NSM PV 20379 | — | — | — | **最小の周囲 345** | — | CE2012 Additional file 1(測り方は本文「軸の最も細い所の周囲」) |
| *T. horridus* RGM.1394102(左、骨の集まりの中の 1 本) | 761 | — | — | 採取した位置の周囲 382(最小とは限らない) | — | DR2024 表 1 |
| *T. horridus* RGM.1394103(右) | 651*(* = 欠けた骨から復元した長さ) | — | — | 313(同上) | — | DR2024 表 1 |
| *T.* cf. *prorsus* RSM P.1163.9(左) | 803 | — | — | 472(同上) | — | DR2024 表 1 |
| *T.* cf. *prorsus* RSM P.3324.6.1(左、幼体) | 550 | — | — | — | — | DR2024 表 1 |
| *T.* cf. *prorsus* RSM P.2691(左、幼体) | 205 | — | — | 89 | — | DR2024 表 1 |

- DR2024 Table S1 の注の原文: "Measurements of RGM.1332500 were either based only on left (R) limb bones or based on left and right (L+R) limb bones when available."("left" と "(R)" が食い違っているが原文のまま)。L+R が左右の平均かどうかは書かれていない。
- DR2024 の RGM.13941xx は Darnell Triceratops Bonebed(少なくとも 5 個体の骨の集まり)のばらばらの骨で、**同じ個体の上腕骨と大腿骨の組ではない**。比を取るなら RGM.1332500 を使う。
- 三角筋稜の「張り出し」の数値として読めたのは L1933 の「radial crest をまたぐ幅」312.4 mm(図からの推定)だけ。Triceratops の実物を測った三角筋稜の値は**見つからなかった**。
- 軸の最小の幅は Triceratops では**見つからなかった**(L1933 の表は空欄)。

### 3.3 寸法(他の角竜類、単位 mm)

| 種・標本 | 長さ | その他 | 資料 |
|---|---|---|---|
| Centrosaurus AMNH 5351 | 600 | 三角筋稜の端から内側顆の端まで 380 | B1917 p.300(頁画像で確認) |
| Centrosaurus *C. flexus* YPM 2015(左) | 585 | radial crest をまたぐ幅 180、軸の最小の幅 99、滑車の端の幅 195、三角筋稜と radial crest の長さ 275 | L1933 p.54(頁画像で確認) |
| *M. crassus* AMNH 3998 | 560 | radial crest をまたぐ幅 205、軸の最小の幅 85 | L1933 p.54(頁画像で確認) |
| Chasmosaurus CMN 2245 / CMN 2280 | 508 / 546 | 左上腕骨: 三角胸筋稜の幅 95 / 72、三角胸筋稜の長さ 225 / 272、骨頭の幅 55 / 86、**軸の中ほどの周囲 216 / 275** | 長さ: L1933 p.70(頁画像で確認)。その他: MH2006 表 1 |
| *Chasmosaurus belli* NHMUK R4948 | 左 590 / 右 595 | **軸の中ほどの周囲 左 255 / 右 250** | MB2011 Table 3(表だけ) |
| *Vagaceratops* CMN 41357(右) | 610(橈骨顆の遠位端まで) | — | H2014 本文 p.9 |
| *Styracosaurus* AMNH 5372 | — | 最小の周囲 280 | CE2012 Additional file 1 |

- H2014(考察 p.17): chasmosaurine では三角胸筋稜が**上腕骨の長さの中ほどまで**伸び、近位の広がりは大きく長方形。centrosaurine では稜がそこまで伸びず、近位の広がりは小さい。

---

## 4. 尺骨・橈骨

### 4.1 Triceratops の形

- **HML1907(本文 pp.60–61)**: 尺骨は「**上で極めて太く、下ではより細い**。遠位端の少し上で軸がわずかにくびれる」。「**肘頭は太く、橈骨の近位端よりずっと上まで突き出る**(多くの哺乳類と同じで、多くの恐竜と大きく違う)」。橈骨は「尺骨と比べると細いが、中程度の強さ。両端でいくらか広がる。軸は断面がほぼ円で、全長でほぼ一様」。
  - Fig. 67 は *T. prorsus* USNM 4842 の尺骨(組み立て骨格の中、1/8、Marsh による)。Pl. XIII は USNM 4842 の**左**尺骨(1/4)。Fig. 68 は *T. serratus* AMNH 970 の橈骨(1/8)。(説明文は頁画像で確認)
- **L1933(本文 p.55)**: Centrosaurus の肘頭は「骨の全長の 3 分の 1 強」を占めるが、「**Triceratops では同じ測り方で約 2 分の 1**」。
- **H2014(本文 p.8)**: 肘頭の長さの代わりに「上腕骨の関節面の遠位縁から肘頭の先まで」を尺骨の全長で割った比: **Triceratops(Hatcher et al. 1907 から)0.44**、Torosaurus 0.35、cf. Anchiceratops 0.40、Chasmosaurus 0.30、Pentaceratops 0.29、Centrosaurus 0.34、Styracosaurus 0.29、Vagaceratops 0.34。
- **B1917(本文 pp.294–295)**: Centrosaurus の尺骨は「Triceratops とは主に大きさで違うが、上腕骨と比べると短い」。橈骨は「大きさ以外は Triceratops と違わない。軸は長く細く、両端が広がり、**遠位端は軸に対してわずかに斜め**」。

### 4.2 寸法

**G1905(HML1907 p.191 寸法表、頁画像で確認、単位 m)— *T. prorsus* USNM 組み立て骨格の右前肢**

| 項目 | 尺骨 | 橈骨 |
|---|---|---|
| 長さ | **0.65** | **0.41** |
| 近位端の幅 | **0.38** | **0.18** |
| 遠位端の幅 | **0.19** | **0.14** |
| 軸の周囲(Girth of shaft) | **0.36** | **0.205** |

- 肘頭の大きさの数値(長さ・幅)は**見つからなかった**(上の比 0.44 と「約 2 分の 1」だけ)。

**ほかの Triceratops(単位 mm)**

| 標本 | 尺骨 | 橈骨 | 資料 |
|---|---|---|---|
| *T. horridus* RGM.1332500(関連付けられた 1 個体) | **628**(R) | **408**(L+R) | DR2024 補足 Table S1 |
| *T. horridus* RGM.1394106 / RGM.1394107(右、ばらばら) | 680 / 649* | — | DR2024 表 1(採取位置の周囲 288 / 265) |
| *Triceratops* sp. RSM P.2095(左) | 613 | — | DR2024 表 1(採取位置の周囲 290) |
| *T. horridus* RGM.1394104 / RGM.1394105(左 / 右、ばらばら) | — | 482 / 462 | DR2024 表 1(採取位置の周囲 219 / 212) |

- DR2024 の RGM.1394104 は表 1 で「% maximum length 110」、RGM.1394105 は 106。つまり RGM.1332500 の比から推した最大の橈骨 437 mm より長い(資料の表の値。食い違いの説明は本文に無い)。

**他の角竜類(単位 mm)**

| 種・標本 | 尺骨 | 橈骨 | 資料 |
|---|---|---|---|
| Centrosaurus AMNH 5351 | 450 | 350 | B1917 p.300(頁画像で確認。OCR は尺骨を "^50" と読んでいた) |
| Centrosaurus *C. flexus* YPM 2015 | 左 437(近位端の最大幅 156、遠位端 96.5)/ 右 457 | 345(近位の最大幅 83、遠位の最大幅 99) | L1933 pp.55–56(頁画像で確認) |
| Chasmosaurus CMN 2245 | 432 | 318 | L1933 p.70(頁画像で確認) |
| *Chasmosaurus belli* NHMUK R4948 | 左 445 / 右 460 | — | MB2011 Table 3(表だけ) |
| *Vagaceratops* CMN 41357 | — | 340 | H2014 本文 p.9 |

---

## 5. 手(手根骨・中手骨・指骨・末節骨)

### 5.1 Triceratops について分かっていること

- **Triceratops の手の骨の寸法は見つからなかった。**
  - USNM の組み立て骨格: 「**手は全部が復元なので測っていない**」(G1905、HML1907 p.191 の表の注、頁画像で確認)。手は Marsh の図に従い、AMNH から借りた手の材料も参考にした。手根骨は 2 個だけを作った(G1905、HML1907 p.190)。
  - Lull(HML1907 p.192、頁画像で確認): 「手の指は、**組み立て骨格の 5 本ではなく 4 本**が正しいと思われる」。
  - HML1907(本文 p.61、Hatcher): 手根骨は「何も分からない」。**中手骨は 4 本**(Fig. 69、*T. serratus* AMNH 970、1/4)。III が最大、II と IV がほぼ同じ大きさ、I が最小、4 本とも機能した。中手骨は中足骨よりずっと短い。指骨の数・配列は「確かなことは何も分からない」(「中指が II・IV より 1 個、I より 2 個多いかもしれないが推測にすぎない」)。「ほぼ完全な手すら見つかっていない」。近位の指骨は長さが幅より大きく、中間の指骨は短く幅が長さより大きい。**末節骨は幅広く平たく、遠位で横に広がり近位でくびれる。粗い海綿状で、生きていたときは蹄のような角質に覆われていた**(Fig. 70、*T. serratus* AMNH 970、1/2)。
  - B1906(本文 p.300): Hell Creek で**ほぼ完全な前肢 AMNH 5880** を見つけた。骨は関節したままだったが、肩甲骨・烏口骨・上腕骨は風化で保存できず、**尺骨・橈骨・中手骨 3 本・指骨 3 個**を回収。「手が 3 本指だったことを決定的には示さないが、後ろ足と同じような 3 本指の手を示す」。**寸法は書いていない。**
  - B1917(本文 p.295): 「Triceratops で知られている手の骨はすべてこの標本(Centrosaurus AMNH 5351)と形が完全に一致し、構造は両属で同じ、おそらく科全体で同じ」。
  - F2009(要旨): NSM PV 20379 の右前肢は関節したまま。**手は半ば回外**。中手骨の並びは近位から見て **L 字**。第 2 指は肘の回転面と平行で、第 1・3 指がそれを補強し、第 1〜3 指が橈骨の広い関節面に乗る。Cerapoda に共通する手として「長く太い中手骨 II と III、**第 1〜3 指に末節骨(蹄)**、退化した第 4・5 指、開いた中手骨 V」。**本文の寸法は読めていない。**
- 指骨の式は Triceratops の標本で書いた資料は**見つからなかった**(下の他の角竜類は 2-3-4-3-2 で一致)。

### 5.2 他の角竜類の手

**指骨の式と指の役割**
- Centrosaurus AMNH 5351: **I=2, II=3, III=4, IV=3, V=2**。第 1〜3 指が蹄で終わり、IV・V は小さく丸い末節で蹄の鞘は無い。内側 3 本が主に体重を支えた(B1917 本文 pp.286, 295–296)。手は「かなり弓なり」で、中手骨は標本より密に並んでいた(p.295)。
- Centrosaurus YPM 2015: **2, 3, 4, 3, 2**。平たい末節骨は I〜III。IV・V は小さな節だけだが、第 4 指は体重を支えたはずで第 5 指も少しは支えたかもしれない。手全体が体重を受けるクッションに包まれ、ゾウと違って**蹄のある 3 本が前へ突き出る**(L1933 本文 p.56)。
- *Vagaceratops* CMN 41357: 「他の角竜類と同じく **2, 3, 4, 3, 2**」。中手骨 III が最大で、手の主軸は第 3 指。第 1・2 の中手骨と指は第 4・5 よりはっきり太い。末節骨(蹄)は第 1〜3 指だけ。第 5 指の末節は他の角竜類より大きい(H2014 本文 pp.9–12)。
- 手の軸: B1917(p.300)と L1933(p.64)は Centrosaurus AMNH 5351 で「**手の軸は第 II 指を通る**、足の軸は第 II・III 指の間」。指は外を向き、第 II 指の軸は脊柱とほぼ平行(B1917 p.294)。H2014 は Vagaceratops で「主軸は第 3 指」と書いており、**資料が割れている**(種も違う)。
- 手根骨: Centrosaurus では骨化した手根骨は **2 個**(大きい方は小さい方の 2 倍、尺骨側)(B1917 p.295)。L1933(p.56)は大きい方を手根骨 IV、小さい方を III と見る。Vagaceratops でも 2 個(遠位手根骨 3・4 と推定、4 がやや大きい)(H2014)。Anchiceratops(Ottawa)でも数と位置が一致(L1933)。
- 手の大きさ: Centrosaurus YPM 2015 の復元で**手の周囲(足裏のクッション込み)約 1090 mm**、足は約 1360 mm(L1933 p.63)。

**中手骨・指骨の長さ(単位 mm)**

| | Centrosaurus AMNH 5351 | Centrosaurus *C. flexus* YPM 2015 | Centrosaurus AMNH 5427 | *Vagaceratops* CMN 41357(右) |
|---|---|---|---|---|
| 中手骨 I | 83 | 88 | 97 | 87(近位幅 65 / 遠位幅 60) |
| 中手骨 II | 127 | 127.7 | 140 | 135(61 / 64) |
| 中手骨 III | **130** | **131** | **143** | **145**(69 / 69) |
| 中手骨 IV | 99 | 101 | 105 | 107(75 / 60) |
| 中手骨 V | 80 | 76 | — | 86(59 / 47) |
| I-1 / I-2 | 56 / 64 | 54 / 66.4(人工) | 50 / 73 | 60 / 末節 59 |
| II-1 / II-2 / II-3 | 46 / 30 / 55 | 35 / 31.5(人工) / 56 | — / — / 61(表の項目名 II³) | 54 / 36 / 末節 59 |
| III-1 / III-2 / III-3 / III-4 | 38 / 27 / 20 / 41 | 40.5 / 29 / 欠如 / 56.5 | 42 / — / — / — | 47 / 30 / 23 / 末節 44 |
| IV-1 / IV-2 / IV-3 | 34 / 21 / 18 | 30 / 20 / 16 | 36 / — / — | 37 / 24 / 18 |
| V-1 / V-2 | 43 / 13 | 43(人工) / 13(人工) | — | 54 / 30 |
| 資料 | B1917 pp.300–301 / L1933 p.57(同じ値。頁画像で確認) | L1933 p.57(頁画像で確認。注 29「人工」= 復元) | B1917 p.305(頁画像で確認。中手骨 V と多くの指骨は無い) | H2014 付録 1 |

- Vagaceratops の末節骨(長さ、近位の顆の幅、高さ): 1 = 59, 45, —/ 2 = 59, 46, 22 / 3 = 44, 34, 18(H2014 付録 1)。
- Vagaceratops の中手骨 I は病変で変形している(H2014)。
- 中手骨の長さの順は III > II > IV > I・V(4 標本で共通。I と V の順は標本で入れ替わる)。

---

## 6. 前あしと後ろあしの比・前あしの全長

### 6.1 資料に書かれている比・記述

- **HML1907(本文 p.59)**: 前肢は「全体として後肢より比較的**短く**、個々の骨は後肢の対応する骨より**いくらか太い**。したがって**肩の高さは腰より低かった**」。この短さは首の短さと関連し、頭の先を足と同じ高さに下げられた、と Hatcher は書く。
- **HML1907(本文 p.62)**: 後肢と足は前肢より長く、いくらか細い。
- **B1917(本文 p.296)**: Centrosaurus の「後肢と前肢の大きさの比は Triceratops と同じ」。
- **DR2024 補足 Table S1**: *T. horridus* RGM.1332500 の肢の骨の大腿骨に対する比 — **上腕骨 0.68、尺骨 0.61、橈骨 0.39**、脛骨 0.69、腓骨 0.65(大腿骨 1038 mm)。
- **H2014 経由の F2009 の値**: 橈骨 / 上腕骨 = **0.62(Triceratops、Fujiwara 2009)**、脛骨 / 大腿骨 = 0.66(同)。原典は未読。H2014 は Vagaceratops 0.56、cf. Anchiceratops 0.57、Styracosaurus 0.58、Centrosaurus 0.58、Pentaceratops 0.67 を並べる。H2014 は「Vagaceratops の前腕は上腕骨の 54%」とも書く。

### 6.2 計算(資料の値から)

| 標本 | 上腕骨 / 大腿骨 | 橈骨 / 上腕骨 | 尺骨 / 上腕骨 | 上腕骨+橈骨 | (上腕骨+橈骨) / (大腿骨+脛骨) |
|---|---|---|---|---|---|
| *T. prorsus* USNM 組み立て骨格(G1905: 上腕骨 0.71、橈骨 0.41、尺骨 0.65、大腿骨 1.15、脛骨+距骨 0.72 m) | **0.62**(計算) | 0.58(計算) | 0.92(計算) | 1.12 m(計算) | 0.60(計算) |
| 同、上腕骨を L1933 の 776 mm にした場合 | 0.67(計算) | 0.53(計算) | 0.84(計算) | 1.19 m(計算) | — |
| *T. horridus* RGM.1332500(DR2024: 708 / 408 / 628 / 1038 / 720 mm) | **0.68**(資料記載) | 0.58(計算) | 0.89(計算) | 1.116 m(計算) | 0.63(計算) |
| Centrosaurus AMNH 5351(B1917: 600 / 350 / 450 / 740 / 600) | 0.81(計算) | 0.58(計算) | 0.75(計算) | 0.95 m(計算) | 0.71(計算) |
| Centrosaurus YPM 2015(L1933: 585 / 345 / 437 / 789 / 552) | 0.74(計算) | 0.59(計算) | 0.75(計算) | — | — |
| Chasmosaurus CMN 2245(L1933: 508 / 318 / 432 / 749 / 533) | 0.68(計算) | 0.63(計算) | 0.85(計算) | — | — |
| *Vagaceratops* CMN 41357(H2014: 610 / 340 / — / 760 / 520) | 0.80(計算) | 0.56(資料記載) | — | — | — |
| *C. belli* NHMUK R4948(MB2011: 590 / — / 445 / 780 / 585) | 0.76(計算) | — | 0.75(計算) | — | — |

- 上腕骨 / 大腿骨は Triceratops で 0.62(USNM 合成骨格)と 0.68(RGM.1332500)で**割れている**。USNM の上腕骨の長さ自体が 0.71 m と 776 mm で割れているのが一因。
- 前腕 / 上腕の比(橈骨 / 上腕骨)は 0.58(USNM・RGM.1332500、計算)と 0.62(F2009、H2014 経由)で**割れている**。
- **前あし全体の長さ(肩から手の先まで)を書いた資料は見つからなかった。** 上の「上腕骨+橈骨」は計算で、手(USNM は測っていない)と関節軟骨を含まない。

### 6.3 姿勢に依存する寸法(USNM 組み立て骨格、G1905、HML1907 p.192、頁画像で確認、単位 m)

- 関節窩での肩の幅 **1.25** / 肘の幅 **2.16** / 外側の指の間の幅(前足の次に並ぶ行)**1.70**。
- これは 1905 年の組み立て(前肢を「亀のように曲げた」組み方、G1905)の寸法で、骨の寸法ではない。B1906 は AMNH 971 の胸骨から「脚は Washington の標本の復元より正中線に近かった」と書く(RESEARCH-ribcage-and-sternum.md と同じ)。

---

## 7. 見つからなかった項目(まとめ)

- Triceratops の**肩甲骨の刃の最小の幅**、**関節窩の大きさ**(Vagaceratops CMN 41357 の値だけある)。
- Triceratops の**三角筋稜を実物で測った値**(L1933 の 412 mm と 312.4 mm は図からの推定)。上腕骨の**軸の最小の幅**。
- Triceratops の**肘頭の大きさ**(比 0.44・「約 2 分の 1」だけ)。
- Triceratops の**手の骨の寸法すべて**、**指骨の式**、**末節骨の寸法**。NSM PV 20379 の手を記載した F2009 の本文は有料で読めなかった。
- **前あし全体の長さ**を書いた資料。
- Paul & Christiansen 2000 の本文(角竜類の肢の寸法の表があるかは未確認)。

---

## 8. 模型への申し送り(資料で裏付いた点だけ)

骨ごとに、模型に入れてよい値と出典。**基準の個体を 1 つ決めて揃えること**(下の「基準の選び方」)。

### 8.1 基準の選び方

- 後ろあしは USNM 組み立て骨格(G1905)で作った(大腿骨 1.15 m)。前あしも同じ表(HML1907 p.191)から取れば同じ骨格の中で揃う。**ただし USNM は合成骨格で、手は全部が復元。**
- 実在の 1 個体の比が欲しいときは *T. horridus* RGM.1332500(DR2024)。こちらは上腕骨・尺骨・橈骨・大腿骨・脛骨・腓骨が同じ個体(資料の言う「関連付けられた骨格」)。大腿骨 1038 mm。
- 模型の大腿骨 1.15 m に RGM.1332500 の比を掛けると 上腕骨 0.78 m、尺骨 0.70 m、橈骨 0.45 m(計算。比 0.68 / 0.61 / 0.39 × 1.15)。USNM の表の値(0.71 / 0.65 / 0.41)とは上腕骨で 7 cm 違う。**どちらを採るかは資料では決まらない。**

### 8.2 骨ごとの値

| 骨 | 項目 | 値 | 出典(標本) | 備考 |
|---|---|---|---|---|
| 肩甲骨+烏口骨 | 長さ | 1.35 m | G1905(USNM 組み立て骨格) | 肩甲骨だけは 0.97 m(計算、目安) |
| 烏口骨 | 長さ / 幅 | 0.38 / 0.39 m | G1905(USNM) | 前縁と下縁で半円を描き内へ曲がる(HML1907) |
| 肩甲骨 | 刃の上端の幅 / 最大の幅 | 0.26 / 0.36 m | G1905(USNM) | 最大の幅は関節窩の上縁(HML1907)。最小の幅は Triceratops では無い(Vagaceratops は 111 mm / 全長 750 mm) |
| 肩甲骨 | 形 | 長く平たい刃、上端は薄く前後にやや広がる。外面の稜は関節窩の上から始まり、約 1/3 で曲がって刃の遠位端の中ほどで終わる | HML1907, L1933 | 関節窩は肩甲骨の方が多く作る |
| 関節窩 | 大きさ | **Triceratops の値なし** | — | Vagaceratops CMN 41357: 長さ 121 mm、関節窩での幅 210 mm(H2014) |
| 上腕骨 | 長さ | **0.71 m**(USNM 表)/ **776 mm**(USNM 4842、図からの推定)/ **708 mm**(RGM.1332500) | G1905 / L1933 / DR2024 | **割れている** |
| 上腕骨 | 近位端の幅 / 遠位端の幅 | 0.40 / 0.36 m | G1905(USNM) | L1933 の図からの推定は 312.4(radial crest をまたぐ)/ 364 mm |
| 上腕骨 | 軸の周囲 | 0.43 m(USNM、測る位置は不明)/ **最小の周囲 345 mm**(NSM PV 20379) | G1905 / CE2012 | 最小の周囲として確かなのは CE2012 |
| 上腕骨 | 三角筋稜(radial crest) | 上端から前内側の縁に沿って**長さの約 2/3**。長さ 412 mm(図からの推定) | HML1907 本文 / L1933 | radial crest には三角筋稜と別の粗面がある(L1933) |
| 上腕骨 | 骨頭 | 近位端のほぼ中ほど、軸の後縁を少し越える。骨の頂に溶け込む形 | HML1907, L1933 | — |
| 上腕骨 | 遠位 | 橈骨顆と尺骨顆がはっきり分かれ、広く深い滑車 | HML1907 | — |
| 尺骨 | 長さ | **0.65 m**(USNM)/ **628 mm**(RGM.1332500) | G1905 / DR2024 | — |
| 尺骨 | 近位端の幅 / 遠位端の幅 / 軸の周囲 | 0.38 / 0.19 / 0.36 m | G1905(USNM) | 上で極めて太く下で細い |
| 尺骨 | 肘頭 | 太く、橈骨の近位端よりずっと上へ突き出る。**尺骨の長さの約 1/2**(L1933)、比 0.44(H2014) | HML1907, L1933, H2014 | 寸法は無い |
| 橈骨 | 長さ | **0.41 m**(USNM)/ **408 mm**(RGM.1332500) | G1905 / DR2024 | 橈骨 / 上腕骨は 0.58(計算)と 0.62(F2009、H2014 経由)で割れている |
| 橈骨 | 近位端の幅 / 遠位端の幅 / 軸の周囲 | 0.18 / 0.14 / 0.205 m | G1905(USNM) | 軸は断面がほぼ円で全長ほぼ一様(HML1907) |
| 手根骨 | 数 | 骨化は 2 個(大きい方が小さい方の約 2 倍、尺骨側) | B1917, L1933(Centrosaurus)、H2014(Vagaceratops) | Triceratops の標本では無い。USNM の組み立ても 2 個で作った(G1905) |
| 中手骨 | 長さ | **Triceratops の値なし** | — | Centrosaurus AMNH 5351: I 83 / II 127 / III 130 / IV 99 / V 80 mm(上腕骨 600 mm)。Vagaceratops: 87 / 135 / 145 / 107 / 86 mm(上腕骨 610 mm) |
| 中手骨 | 並び | 近位から見て L 字、手は半ば回外、第 2 指は肘の回転面と平行 | F2009(要旨、NSM PV 20379) | 寸法は無い |
| 指骨 | 式 | **2-3-4-3-2** | Centrosaurus(B1917, L1933)、Vagaceratops(H2014) | Triceratops の標本では確かめられていない。Triceratops の指の数は資料で割れる(Hatcher は中手骨 4 本、USNM の組み立ては 5 本、Lull は 4 本、Brown 1906 は 3 本指の可能性、Brown 1917 は Centrosaurus と同じ構造) |
| 末節骨 | 形 | **第 1〜3 指だけが蹄**。幅広く平たく、遠位で横に広がり近位でくびれる。生前は角質の蹄。IV・V は小さく丸い節 | HML1907(Triceratops AMNH 970)、B1917, L1933, H2014, F2009 要旨 | Triceratops の末節骨の寸法は無い |
| 前あし全体 | 長さ | **資料なし** | — | 上腕骨+橈骨 = 1.12 m(USNM、計算)/ 1.116 m(RGM.1332500、計算)。手と軟骨を含まない |
| 前後の比 | 上腕骨 / 大腿骨 | 0.62(USNM、計算)/ 0.68(RGM.1332500、資料記載) | G1905 / DR2024 | **割れている**。肩は腰より低い(HML1907) |

### 8.3 Centrosaurus の手を Triceratops へ写すときの注意

- 手の寸法は Triceratops の値が無いので、Centrosaurus か Vagaceratops の表(5.2 節)を**種を明記して**縮尺で写すしかない。縮尺の基準に上腕骨を使うなら、Centrosaurus AMNH 5351(上腕骨 600 mm)→ 模型の上腕骨(0.71〜0.78 m)で約 1.2〜1.3 倍(計算)。ただし B1917 は「Centrosaurus は Triceratops より上腕骨が比較的長く、前腕が比較的短い」と書いており、手の比が同じとは限らない。
- 写したことは模型の側(MODEL-NOTES.md)に「種が違う」と必ず書くこと。

### 8.4 未解決

- USNM 4842 の上腕骨の長さ(0.71 m と 776 mm)の食い違い。L1933 の値は図からの推定なので実測の G1905 を優先する根拠にはなるが、組み立て骨格の上腕骨が 4842 の実物かどうかは表に書いていない(図版 Pl. XI・XII は「Specimen No. 4842」)。
- Fig. 64 の肩甲骨の標本番号 "No. 4800"(頁画像でもこの番号)。
- F2009(NSM PV 20379 の前肢の記載と寸法)の本文、Paul & Christiansen 2000 の本文、Holmes & Ryan 2013(Styracosaurus)、Johnson & Ostrom 1995(Torosaurus の前肢)。
