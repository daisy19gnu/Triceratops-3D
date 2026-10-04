# 資料調べ: トリケラトプスの骨盤・仙骨・後ろあし

調べた日: 2026-10-04(JST)
目的: three.js の模型で骨盤(仙骨・腸骨・坐骨・恥骨)と後ろあしを作り直すための根拠集め。
方法: Web の検索と取得だけで行った(手元のファイルは参照していない。前例 RESEARCH-ribcage-and-sternum.md は書式の参考として読んだだけ)。

## 0. この文書の約束

- 数値と形の記述は、読んだ資料に書いてあるものだけを載せた。
  自分で割り算・足し算・単位換算をした値は「(計算)」と書いて区別した。
- 各資料に、どこまで読んだかを書いた。
  - **本文** = 本文(該当する節)を読んだ
  - **要旨** = 要旨だけを読んだ
  - **図** = 図を見ただけ(本文に書いていない形を図から読み取ったもの。必ず「図からの観察」と書いた)
  - **未読** = 存在は分かったが読めていない(内容は書かない)
- 種名は資料の表記のまま書き、現在の扱いが資料内で示されている場合だけ併記した。
  例: Brown 1917 の "*Monoclonius nasicornus*" / "*M. cutleri*" は、Lull 1933 が *Centrosaurus nasicornus* / *C. cutleri* と書いている(以下「Centrosaurus(Brown の "Monoclonius")」と書く)。
- 1907〜1933 年の資料は archive.org の OCR テキストで読み、**数値表はすべて頁の画像で確かめた**(OCR は表の数字が崩れていたため)。
- **Triceratops 以外の種の値は、必ず種名と標本番号を添えた。** 模型に流用するときは種が違うことを忘れないこと。

---

## 1. 資料の一覧と読んだ範囲

| 記号 | 資料 | 対象の種・標本 | 読んだ範囲 |
|---|---|---|---|
| HML1907 | Hatcher, J.B., Marsh, O.C. & Lull, R.S. 1907. *The Ceratopsia*. U.S. Geological Survey Monograph 49. https://archive.org/details/ceratopsia00hatc | *Triceratops prorsus* USNM 4842(組み立て骨格)、*T. flabellatus* YPM 1821、*T. prorsus* YPM 1822、*Monoclonius crassus* AMNH 3998、*Agathaumas* | **本文**(仙骨 pp.51–53、骨盤 pp.56–58、後ろあし pp.62–64、属の比較 pp.162–165、Agathaumas の腸骨 p.109、Monoclonius の坐骨 pp.78–79)+ **図**(Fig. 55 仙骨と腸骨の背面、Fig. 60 骨盤の側面、Fig. 61 腸骨の腹面、Fig. 63 坐骨の後面、Fig. 71 大腿骨・脛骨) |
| G1905 | Gilmore, C.W. 1905. A mounted skeleton of *Triceratops*. Proc. U.S. Nat. Mus. 29: 433–435 | *T. prorsus*、USNM 4842 を基にした合成の組み立て骨格 | 原典は**未読**。HML1907 pp.189–192 に Gilmore 自身の加筆付きで引用されており、そちらを**本文**として読んだ。寸法表(pp.191–192)は**頁画像で確認** |
| G1919 | Gilmore, C.W. 1919. A new restoration of *Triceratops*, with notes on the osteology of the genus. Proc. U.S. Nat. Mus. 55: 97–112. https://archive.org/details/biostor-79527 | *Triceratops* | **本文**(骨盤・後ろあしの記載は無い。復元模型の後ろあしの扱いの一文だけ) |
| B1917 | Brown, B. 1917. A complete skeleton of the horned dinosaur *Monoclonius*, and description of a second skeleton showing skin impressions. Bull. Amer. Mus. Nat. Hist. 37: 281–306. https://archive.org/details/bulletin-american-museum-natural-history-37-281-306 | Centrosaurus(Brown の "*M. nasicornus*")AMNH 5351(ほぼ完全・関節したまま)、"*M. cutleri*" AMNH 5427(後半身) | **本文**(属の特徴、仙骨、骨盤、後ろあし、足、復元の節)+ 寸法表(pp.300–301, 305–306)を**頁画像で確認** |
| L1933 | Lull, R.S. 1933. A revision of the Ceratopsia or horned dinosaurs. Memoirs of the Peabody Museum of Natural History 3(3): 1–175. https://archive.org/details/revisionofcerato33lull | Centrosaurus(*C. flexus* YPM 2015 ほか)、Chasmosaurus、Brachyceratops(Gilmore の診断の引用) | **本文**(仙骨 pp.46–49、腸骨・恥骨・坐骨 pp.57–58、大腿骨・脛骨・腓骨・足 pp.59–63、組み立て骨格の姿勢 pp.64–65、Chasmosaurus pp.68–70、種の比較 p.97)+ 骨盤寸法表(p.48)と Chasmosaurus 寸法表(p.70)を**頁画像で確認** |
| H2014 | Holmes, R.B. 2014. The postcranial skeleton of *Vagaceratops irvinensis* (Dinosauria, Ceratopsidae). Vertebrate Anatomy Morphology Palaeontology 1: 1–21. DOI 10.18435/B5159V | *Vagaceratops*(= *Chasmosaurus*)*irvinensis* CMN 41357(関節したまま) | **本文**(仙骨、坐骨、恥骨、大腿骨、脛骨、足、表 1、考察の後肢の比率) |
| T2026 | Theurer, B., Tanke, D.H., Bastiaans, D., Nguyen, K., Currie, P. & Sullivan, C. 2026. Morphology and articular configuration of the ceratopsid (Dinosauria: Ornithischia) lower hindlimb as revealed by a specimen from the Upper Cretaceous Dinosaur Park Formation of southern Alberta, Canada. PLoS ONE 21: e0353362. DOI 10.1371/journal.pone.0353362(CC BY) | 種不明の Ceratopsidae UALVP 42(脛骨から先)。比較に *Triceratops* ROM 1434・ROM 52428 ほか | **本文**(要旨、序論、骨の記載、表 1・3・4・5、組み立ての節) |
| SR2015 | Senter, P. & Robins, J.H. 2015. Resting orientations of dinosaur scapulae and forelimbs: a numerical analysis, with implications for reconstructions and museum mounts. PLoS ONE 10: e0144036. DOI 10.1371/journal.pone.0144036 | 角竜類(Fig. 3 は Centrosaurus AMNH 5351 のキャスト、Styracosaurus AMNH 5372) | **本文**(仙骨を水平の基準に使う理由の段落と Fig. 3 の説明) |
| HO2010 | Holliday, C.M., Ridgely, R.C., Sedlmayr, J.C. & Witmer, L.M. 2010. Cartilaginous epiphyses in extant archosaurs and their implications for reconstructing limb function in dinosaurs. PLoS ONE 5: e13120. DOI 10.1371/journal.pone.0013120 | 現生のワニ・鳥と恐竜。Triceratops の後肢長は表 4 | **本文**(表 4 とその注、Triceratops の大腿骨の段落) |
| BM2017 | Barrett, P.M. & Maidment, S.C.R. 2017. The evolution of ornithischian quadrupedality. Journal of Iberian Geology 43: 363–377. DOI 10.1007/s41513-017-0036-0 | 鳥盤類の四足歩行の群(角竜類を含む) | **本文**(腸骨と後ろあしの節) |
| PC2000 | Paul, G.S. & Christiansen, P. 2000. Forelimb posture in neoceratopsian dinosaurs: implications for gait and locomotion. Paleobiology 26: 450–465. DOI 10.1666/0094-8373(2000)026<0450:FPINDI>2.0.CO;2 | 角竜類 | **要旨** |
| LH1995 | Lockley, M.G. & Hunt, A.P. 1995. Ceratopsid tracks and associated ichnofauna from the Laramie Formation (Upper Cretaceous: Maastrichtian) of Colorado. J. Vert. Paleontol. 15: 592–614. DOI 10.1080/02724634.1995.10011251 | 足跡 *Ceratopsipes goldenensis* | **要旨**(OpenAlex 経由)。本文は取得できず |
| B2025 | Bell, P.R., Pickles, B.J., Ashby, S.C., Walker, I.E., Hurst, S., Rampe, M., Durkin, P. & Brown, C.M. 2025. A ceratopsid-dominated tracksite from the Dinosaur Park Formation (Campanian) at Dinosaur Provincial Park, Alberta, Canada. PLoS ONE. DOI 10.1371/journal.pone.0324913(CC BY) | 足跡 *Ceratopsipes* isp.(足跡を付けた種の候補は Styracosaurus albertensis と Chasmosaurus の一種と本文に書かれている) | **本文**(足跡の記載、表 1、考察) |
| 二次 | Wikipedia "Ceratopsipes"(英語版、2026-10-04 取得)、Zenodo 4332683(Carpenter & Young 2002 の図版の再掲) | 足跡 | 二次資料 |
| 未読 | Garstka & Burnham 1997(Triceratops の姿勢、DinoFest)、Maidment & Barrett 2011(Zootaxa 2963, *Chasmosaurus belli*)、Maidment & Barrett 2012(Proc. R. Soc. B, DOI 10.1098/rspb.2012.1040。取得に失敗)、Dodson et al. 2004(*The Dinosauria* 2nd ed.)、Fujiwara 2009(J. Vert. Paleontol. 29: 1136–1147)、Penkalski & Dodson 1999、Holmes & Ryan 2013、Mallon & Holmes 2010、Gilmore 1917(Brachyceratops)、Sternberg 1927、McCrea et al.(足跡) | — | **未読**(他の資料が引用していることだけ確認) |

---

## 2. 仙骨

### 2.1 Triceratops の仙骨の椎骨の数と区分

**HML1907(本文 pp.51–53、Hatcher)— 標本 *T. prorsus* USNM 4842(組み立て骨格)**

- 「仙骨は**癒合した 10 個の椎骨**から成る」。
- ただし 10 個すべてが本来の仙椎ではない:
  - **最初の 1 個は sacro-lumbar または dorso-sacral** と見るべき。**Marsh は前の 2 個を dorso-sacral とみなした**。
  - **後ろの 4 個、あるいは 5 個は sacro-caudal**。
  - したがって本来の仙椎は **4 個または 5 個**(何個を dorso-sacral・sacro-caudal として除くかによる)。
- 第 1・第 2 仙椎は parapophysis(仙骨の肋骨)を出さないので、「Marsh の言うとおり両方を dorso-sacral とみなす方がよいかもしれない」。Hatcher 自身は、第 2・第 3 仙椎の境から出る強い parapophysis が第 2 仙椎からも同じだけ出ているので、第 2 仙椎を本来の仙椎とした。
- 「diapophysis と parapophysis の両方を持つのは **第 3・4・5・6 仙椎だけ**で、この 4 個だけを本来の仙椎とみなす方がよいかもしれない」。
- **割れている点**: HML1907 は第 1 と第 10 仙椎の横突起は腸骨に接しないとする。B1917(p.288、Centrosaurus AMNH 5351)は仙椎すべてが腸骨を支えると書く。L1933(Centrosaurus YPM 2015)は第 X 仙椎は腸骨に届かない(*C. cutleri* では届く)とする。
- L1933(本文 p.46)は Centrosaurus について「後期の角竜類はすべて 10 個の癒合した椎骨から成る仙骨に、**dorso-sacral が 1 個加わる(上で仙骨と癒合、下では離れている)**」と書いている(下の 2.3)。Triceratops でこの「11 個目」を数えた記述は HML1907 には無い。

**HML1907(本文 pp.164–165、Lull の属の比較)**: Triceratops の仙骨は 10 個の椎骨。そのうち **4 個が仙骨の肋骨を持ち、肋骨が癒合して腸骨と関節する縦の棒(longitudinal bar)を作る**。最初の 1 対の肋骨は第 2・第 3 椎骨の間の関節から出て両方に等しく乗る。続く肋骨は関節の後ろから出て、前の椎体にはほとんど乗らない。

**B1917(本文 p.289)**: 「知られるすべての角竜類の属で、仙椎は 10 個。すべて椎体で癒合し、横突起で腸骨と結合する」。AMNH 5351 と AMNH 5427 の仙骨は Triceratops で記載されたものと同じ形。
**B1917(本文 p.303、AMNH 5427)**: 「第 3・4・5・6 椎骨が diapophysis と parapophysis を持ち、本来の仙椎とみなせる。胴と尾の側から椎骨が加わった」。

### 2.2 仙骨の肋骨と腸骨のつながり方(Triceratops)

**HML1907(本文 pp.52–53、Fig. 53・54・55)— USNM 4842**

- 下から見ると、癒合した椎体が強い正中の棒を作り、各椎体の両側から横突起(仙骨の肋骨)が出る。**横突起の先端を結ぶと卵形になり、前後の径の方がずっと長い**。
- 第 1 仙椎(Hatcher の言う dorso-sacral)は**短く平たい diapophysis** を持ち、先端は後ろへ曲がって第 2 仙椎の少し長い突起と癒合し、その間に細長い孔を囲む。続く 3 個の diapophysis も先端で癒合し細長い孔を囲む。
- **第 2・第 3 仙椎の境からとても強い parapophysis が後外方へ出る**。先端は大きく広がり、後続 3 個の椎体の境から出る同様の突起と癒合して、**寛骨臼の上壁と内壁を作る強い「寛骨臼の棒(acetabular bar)」** になる。この棒は前方 4 本の parapophysis の先端の癒合でできており、その間に 3 つの大きな細長い孔がある。
- 寛骨臼より後ろの横突起は単純で、第 7 から第 10 へ向かって短くなり、**第 10 の横突起はとても短い**。第 8・第 9 の横突起は先端が接する(癒合はしない)。第 7 の横突起は先端が広がるが前後から大きく離れている。
- **横から見ると仙骨は強く上へ弓なりに曲がる**。本来の仙椎の神経棘は癒合して強い骨の板になる。
- **第 2 から第 9 仙椎まで diapophysis の先端が広がり、腸骨と接する粗面を持つ**。**第 1 と最後の仙椎以外の diapophysis はすべて腸骨に接して支える**(Fig. 55)。
- 前方の diapophysis は parapophysis より短く、後方の仙椎の diapophysis より幅広く薄い。

**HML1907(本文 p.109、Agathaumas の腸骨の記載の中)**: 「角竜類では**腸骨は仙骨と癒合しない**」。

**図(HML1907 Fig. 55、USNM 4842 の仙骨と腸骨の背面、組み立て骨格)**: 仙骨の横突起が梯子状に左右へ出て、両側の腸骨の内縁に届いている。前方の横突起の間に 3 つ、後方にも楕円の孔が並ぶ。**左右の腸骨は前端で外へ開き(前方ほど左右の間隔が広い)、後端は細くとがって内へ寄る。** 腸骨の前端部は実線ではなく輪郭線だけで描かれている(復元部分と思われるが、本文に記述は無い)。(以上すべて図からの観察)

### 2.3 他の角竜類の仙骨(代わりの資料)

| 種・標本 | 仙骨の構成 | 資料 |
|---|---|---|
| Centrosaurus *C. flexus* YPM 2015 | 10 個の癒合した仙椎 + **dorso-sacral 1 個**(上で癒合、下では第 1 仙椎と 16 mm 以上離れる)。dorso-sacral は横突起の先端が腸骨と癒合し、さらに**細くわずかに曲がった肋骨 1 対**を持ち、その先は前へ曲がって腸骨の前縁のやや後ろの下面と結合する。第 X 仙椎の横突起は腸骨に届かない(*C. cutleri* では届く) | L1933 本文 pp.46–49 |
| Centrosaurus *C. flexus* YPM 2015 | parapophysis は第 2 仙椎の側面から出て第 2・3 に等しく乗り、恥骨の柄(pubic peduncle)は第 III 仙椎の椎体の横に来る。III〜VI の dia-/parapophysis が寛骨臼の棒を作る(Triceratops と一致)。**Triceratops と違い、III〜IX では dia- と parapophysis が癒合する**。寛骨臼の棒は腸骨と縫合線を残して結合し、寛骨臼の一部を作る。恥骨の柄と坐骨の柄は仙骨側と腸骨側の両方でできている | L1933 本文 pp.47–49 |
| Centrosaurus AMNH 5351(Brown の "M. nasicornus") | 仙椎 10(Brown は椎体で癒合したものをすべて仙椎と数え、腰椎は無いとする)。「**これらすべてが腸骨を支える**。最前の仙椎も含め、最前の仙椎は腸骨の下に入る独立した短い肋骨を持つ」(肋骨は細く、比較的短く、前外方へ伸びる) | B1917 本文 pp.288, 291 |
| Centrosaurus AMNH 5427(Brown の "M. cutleri") | 第 1 仙椎は**よく発達した短い遊離肋骨**を持ち、腸骨の先の下に入る。その肋骨は**一頭で平たい** | B1917 本文 p.303 |
| Chasmosaurus | 仙骨は 10 個。**第 2〜5** の parapophysis(仙骨の肋骨)が先端で癒合して寛骨臼の棒を作る。その後ろの 4 個の癒合した椎体の横突起は腸骨に届かない。最前の癒合した仙椎は遊離した diapophysis を持つ。神経棘は I が孤立、II〜VI が連続した板、VII〜X が再び孤立 | L1933 本文 p.68 |
| *Vagaceratops irvinensis* CMN 41357 | **dorsosacral 2 + 仙椎 4 + caudosacral 2 と 3 個目の前半**(後端は欠ける)。第 1 dorsosacral の横突起はほぼ真横に出て肋骨と癒合。第 2 dorsosacral の横突起は刃状で真横に出る(腸骨の内縁の背側に関節したと考えられるが腸骨が無いので未確認)。**仙椎 1 対目の肋骨が最も太く、後外方へ出て先が広がり、寛骨臼の棒の内面を支える支柱の前部になる**。2 対目はほぼ真横(わずかに後ろ)へ出る。仙椎の椎体は長さ約 90 mm、dorsal・dorsosacral の椎体は 65〜70 mm | H2014 本文 pp.5–6 |

### 2.4 仙骨の寸法

| 標本 | 値 | 資料 |
|---|---|---|
| *T. prorsus* USNM 組み立て骨格 | 仙骨の長さ **1.10 m**、仙骨の幅 **0.64 m**、骨盤全体の幅 **1.24 m** | G1905(HML1907 p.191 寸法表、頁画像で確認) |
| Centrosaurus *C. flexus* YPM 2015 | 仙骨全長(dorso-sacral を含め前後関節突起の上で)840 mm。幅: 前方の diapophysis 252、IV 237、VII 276、X 226 mm。10 個の仙椎の椎体の長さ 703 mm。恥骨の柄の位置での寛骨臼の棒の幅 322 mm | L1933 p.48 寸法表(頁画像で確認) |
| Centrosaurus AMNH 5351 | 仙骨全長 800 mm | B1917 p.300 寸法表 / L1933 p.48 |
| Centrosaurus AMNH 5427 | 仙骨全長(下面)800 mm | B1917 p.305 寸法表(頁画像で確認) |
| Chasmosaurus CMN 2245 | 仙骨の長さ 724 mm | L1933 p.70 寸法表(Sternberg 1927 を mm に換算したもの。頁画像で確認) |

### 2.5 仙骨の長軸が水平になる姿勢

- **SR2015(本文)**: 「角竜類で仙骨を水平の代わりに使うことには異論がある。過去に**仙骨を強く傾けて復元した著者がいる**(参照 65 = HML1907)。しかし**椎骨の解剖は角竜類の仙骨が水平だったことを示し**(参照 66 = Garstka & Burnham 1997)、**関節したまま保存された標本では、四肢を立った姿勢に向けると仙骨の長軸が水平と平行になる**(参照 22 = Senter 2007)(Fig. 3)」。「角竜類の仙骨はほぼ水平だったので……」。
  - Fig. 3 の説明: 「関節したまま保存された角竜類の骨格。**上腕骨を水平にしたとき仙骨が水平(地面と平行)になる**ことを示す。仙骨の長軸の線は、前肢の中手骨の先端と、立った姿勢へ回転させた後肢の中足骨の先端を結ぶ線(水平の代わり)とほぼ平行。A. Centrosaurus apertus AMNH 5351 の CMN にあるキャスト、B. Styracosaurus albertensis AMNH 5372」。
  - **注意**: これは Centrosaurus と Styracosaurus の標本での観察。Triceratops の標本での観察ではない。Garstka & Burnham 1997 と Senter 2007 は**未読**。
- **L1933(本文 p.64)**: Centrosaurus *C. flexus* YPM 2015 の組み立てでは「**仙骨をより水平に近い姿勢にした**ので、尾は付け根で垂れない。坐骨の位置と合わせて(排泄口の)十分な隙間が取れる。AMNH の標本(AMNH 5351 の死んだときの姿勢のままの組み立て)と比べて」。
- **HML1907(本文 p.53)**: 仙骨は「横から見ると強く上へ弓なり」。仙骨全体の傾きの角度を書いた記述は見つからなかった。
- **G1905(HML1907 p.190 所収)**: USNM の組み立て骨格で「**最も高い所(仙骨の頂)は台から 8 フィート 2 インチ**」。
- **Fujiwara の研究で「仙骨の長軸が水平」を主張・前提とした記述は、見つからなかった。** 読んだ Fujiwara の資料(前例の文書の F2022 など)は前肢を扱っている。仙骨水平の根拠として読めたのは SR2015 だけ。

---

## 3. 腸骨

### 3.1 Triceratops の腸骨の形

**HML1907(本文 pp.56–57)— *T. flabellatus* YPM 1821(Fig. 60, 61)ほか**

- 骨盤の 3 つの骨のうち**最も大きい**。「**幅広く細長い板で、前方で大きく広がり、後方はよりとがって、いくらか厚い**」。
- 「**本来の位置では、この腸骨の板は垂直や傾いた面ではなく水平な面を占める**。この点で他の恐竜とは大きく違う」。
- 外縁は全長にわたって薄く滑らか。内縁は前端付近を除いて厚く、仙骨の横突起と接する粗面がある。
- 「**腸骨の前の翼(前の突起)と後ろの翼(後ろの突起)は長さがほぼ等しい**」。
- 中ほどで内縁が大きく厚くなって下へ伸び、寛骨臼の上縁と坐骨の柄・恥骨の柄を作る。**坐骨の柄は恥骨の柄より幅広いが、腸骨の上縁の下へはそれほど突き出ない**。
- Fig. 61(腹面): 「**外縁と内縁がそれぞれ S 字の曲線を描く**。**前端は幅広く、後端は細い**。腸骨の幅は前端から坐骨の柄のすぐ後ろまで一様に続く」。
- **図(Fig. 61、YPM 1821 右腸骨の腹面、1/8)**: 前端は扇形に広がった弧で終わり、後端は細長くとがる。坐骨の柄と恥骨の柄は内縁寄りの中ほどにある(図からの観察)。

**HML1907(本文 p.165、Lull の属の比較)**: Triceratops の腸骨は幅広く細長く、**前で大きく広がり、後ろは厚くなった先へ細くなる**(Agathaumas では後端が薄い)。外縁は薄く滑らか。**上から見た輪郭は Agathaumas より不規則**で、それは**坐骨の柄の上で下へ折れ曲がる縁がより目立つ**ため。内縁は大きく厚くなり、寛骨臼の上縁を作り柄を補強する。

**HML1907(本文 p.109)— Agathaumas の腸骨(Triceratops ではない。HML1907 は Agathaumas を Monoclonius と Triceratops の中間と位置付ける)**: 「仙骨に合わせると、広がった腸骨の板は垂直よりも水平に近い」。「**上から見ると外縁は複合曲線を描き、前方でゆるく凹み、後ろの 3 分の 2 でよりはっきり凸**」。「前から見ると外縁は**坐骨の柄のすぐ上・やや後ろまで同じ水平面を保ち、そこで急に下へ折れる**」。上面は中ほどで左右に凸、両端で凹、前後にはゆるく凸。

**G1905(HML1907 p.191 所収)**: 「この骨格で最も目立つ特徴の一つは、**骨盤と後半身の幅の広さ**。後ろから見ると最も印象的……これは主に、**広がった腸骨の刃が他の恐竜のように垂直ではなく水平である**ことによる」(Fig. 124)。
**図(HML1907 Fig. 124、USNM 組み立て骨格の後面の写真)**: 左右の腸骨が水平に左右へ張り出し、仙骨の上で翼のように見える(図からの観察)。

### 3.2 前の突起は外へ張り出すか — 根拠

角竜類の腸骨の前の突起(preacetabular process)が外へ張り出すことを示す記述・数値として、読めたものは次のとおり。

- **Centrosaurus *C. flexus* YPM 2015(L1933 p.48 寸法表、頁画像で確認)**:
  - **左右の腸骨の幅: 前端 753 mm / 坐骨の柄の上 630 mm / 後端 190 mm**。
  - 腸骨の長さ(保存のまま): 右 960、左 968 mm。
  - → **前端の左右幅が、寛骨臼の付近(坐骨の柄の上)の幅より 123 mm 広い**(計算)。前端が外へ開いていることの数値の裏付けはこれだけ(Centrosaurus の 1 標本。この標本は組み立てて展示されている(L1933 p.64)が、測ったのが組み立て後かどうかは表に書かれていない)。
- **Brachyceratops(L1933 p.98 が Gilmore 1917 の診断を引用)**: 「**腸骨は前の刃が大きく広がり、強く外へ曲がる**」(原典 Gilmore 1917 は未読)。
- **Centrosaurus AMNH 5427(B1917 本文 p.303)**: 最後の胴の肋骨は「外・前へ、そして下へ曲がり、**腸骨の外向きの曲がりに沿う胴の輪郭**を描く」。
- **Centrosaurus AMNH 5351(B1917 本文 p.290)**: 右腸骨は上下に押しつぶされたため前の刃が下へ曲がって見えるが、本来は**まっすぐ**(AMNH 5427 と比べて)。
- **BM2017(本文)**: 「四足歩行の装盾類と角竜類では、**腸骨の背縁が外へ反り返って(laterally everted)supratrochanteric flange を作る**(Maidment & Barrett 2012)」。「この外への反り返りは、四足歩行の装盾類と角竜類で**胴の幅を広げる**」。「装盾類と角竜類では**前の突起が長くなり、下へ幅広くなる**」(大腿の M. puboischiofemoralis internus の付着面の増加)。
- **HML1907 Fig. 55(図)**: 左右の腸骨の前端が外へ開いている(2.2 の図からの観察)。
- **Triceratops で前端の左右幅を測った値は見つからなかった。** USNM の組み立て骨格の寸法表にあるのは「骨盤全体の幅 1.24 m」だけで、どの位置の幅かは書いていない。

### 3.3 腸骨の寸法

| 標本 | 長さ | その他 | 資料 |
|---|---|---|---|
| *T. prorsus* USNM 組み立て骨格(右) | **1.50 m** | 最大の深さ(坐骨の柄まで)0.32 m、**刃の幅 0.32 m** | G1905(HML1907 p.191、頁画像で確認) |
| Centrosaurus AMNH 5351 | 1060 mm | — | B1917 p.300 / L1933 p.48 |
| Centrosaurus AMNH 5427 | 1120 mm(L1933 は写真からの推定で 1124 mm) | 前の刃が AMNH 5351 よりずっと長い | B1917 p.305 / L1933 p.48 |
| Centrosaurus *C. flexus* YPM 2015 | 960 / 968 mm(保存のまま) | 左右の幅は 3.2 節 | L1933 p.48 |
| Chasmosaurus CMN 2245 / CMN 2280 | 965 / 965 mm | — | L1933 p.70 |
| Polyonax の型標本(HML1907 の扱い) | 保存部 1142 mm、完全なら推定 1392 mm | 坐骨の柄と恥骨の柄の前後の広がり 342 mm | HML1907 p.111(参考。属の扱いは資料内でも不確定) |

### 3.4 腸骨の前端は胴のどこまで来るか

- **L1933(本文 p.57)**: Centrosaurus では前の刃(恥骨の柄より前)が Triceratops より相対的に長く細い。*C. nasicornus* の組み立てでは**腸骨の前端が最後の仙骨前の椎骨をほぼ覆い**、YPM 2015 と *C. cutleri* でも同じ。*C. nasicornus* では腸骨が**後ろから 3 番目の肋骨**に届く。**Chasmosaurus では後ろから 2 番目の肋骨を覆うがその前の肋骨には届かない**。Anchiceratops では最後の肋骨にちょうど重なるが覆わない。「肋骨の曲がりの保存状態にある程度左右される」。
- **B1917(本文 p.291)**: Centrosaurus AMNH 5351 の腸骨は「Triceratops より長く、幅が狭い。坐骨の柄より後ろの部分は Triceratops と同じ」。
- Triceratops で腸骨の前端がどの肋骨まで来るかを書いた記述は見つからなかった。

---

## 4. 坐骨

**HML1907(本文 pp.57–58、Fig. 60・63)— Triceratops**

- 「骨盤の骨のうち**最も細い**」。遠位は**細い棒状の軸**で、「**下へ、そして内へ曲がり**、反対側の坐骨と正中で**長い軟骨の結合**で出会う」(Fig. 63)。
- 近位は広がり、坐骨の柄と関節する粗面を持ち、**下前方へ突起を出してその先で恥骨と関節する**。**近位端が寛骨臼の下縁と後縁の大部分を作る**。
- **図(Fig. 63、*T. prorsus* YPM 1822 の左右の坐骨の後面)**: 上端で左右に開き、下へ向かって内へ寄り、遠位の部分は左右が平行に並んで接する(Y 字形)(図からの観察)。
- **図(Fig. 60、*T. flabellatus* YPM 1821 の骨盤の左側面、1/12)**: 坐骨は長く細い棒で大きく弧を描く。恥骨は短く、先が幅広い刃になる(図からの観察。図では腸骨が下に、坐骨と恥骨が上に向いて描かれており、生体の上下と逆に見える)。

**G1905(HML1907 p.192 寸法表)— USNM 組み立て骨格**: 坐骨の長さ(**外側の曲がりに沿って**)**1.50 m**、近位端の幅 0.40 m。
**HML1907(本文 p.192、Lull)**: この組み立てで疑問のある点は 2 つ、頭骨と**坐骨の位置**。「坐骨の関節端は、腸骨と恥骨への付き方が**きわめて推測的**であり、他の標本からの証拠でこの組み立てから**大きく変える必要が出るかもしれない**」。

**他の角竜類(代わりの資料)**

| 種・標本 | 坐骨の形 | 長さ | 資料 |
|---|---|---|---|
| *Monoclonius crassus* AMNH 3998(HML1907 の記載) | 「一見すると肋骨と見間違えうる」。軸は大部分で断面がほぼ円、遠位で三角に近い。**下後方へ向かい、遠位で内へ、わずかに前へ曲がり**、左右の内面が長い区間で接する。結合は軟骨だけ | — | HML1907 本文 pp.78–79 |
| Centrosaurus AMNH 5351 | 長く**中程度に曲がる**。Triceratops より相対的に長く、**遠位端の前への曲がりは Triceratops より小さい**。「前へ曲がった坐骨」 | 740 mm(腸骨の柄から先端まで曲がりに沿って) | B1917 本文 pp.285, 290, 291; p.300 |
| Centrosaurus AMNH 5427 | **長く比較的まっすぐで、後端が急に下へ曲がって広がり**、その曲がった部分で左右が出会う。Triceratops の骨盤から最も大きく違う点 | 800 mm | B1917 本文 p.304; p.305 |
| Centrosaurus 各種(L1933 の比較) | *C. nasicornus* は横から見て**ほぼ一様な曲がり**(遠位でやや強まる)で **Triceratops に近い**。*C. cutleri* はまっすぐで先端だけ強く曲がり端が広がる。Chasmosaurus(Ottawa の組み立て骨格)も後者の型 | YPM 2015 は推定 770 mm(近位の幅 250、軸の最小径 35、最大径 57.5 mm) | L1933 本文 p.58 |
| Chasmosaurus CMN 2245 | — | 699 mm | L1933 p.70 |
| *Vagaceratops* CMN 41357 | 腸骨への突起は短い扇形で、凸の関節面で終わる。恥骨への突起はずっと長く、前で広がる | (後腹側の突起の大部分が欠ける) | H2014 本文 p.13 |

---

## 5. 恥骨

**HML1907(本文 p.57、Fig. 62)— *T. prorsus* USNM 4842**

- 「Triceratops の恥骨は、**よく発達した前恥骨(prepubis)と、痕跡的な後恥骨(postpubis)**から成る」。
- 軸は中ほどでくびれ、かなり平たく、**縦の径の方が長い**。遠位で**かなり幅広い刃**に広がり、「**下前方へ向かうが、内へは向かわない。左右の恥骨の遠位端は接していなかった**」。
- 近位端の近くで外面が粗い隆起になり、骨を横切って寛骨臼の前縁を作る。上に腸骨の恥骨の柄との関節面、下に坐骨の近位端の前下突起との関節面がある。
- その隆起の後ろで恥骨は幅広い突起になり、外面が粗く、**寛骨臼の内壁を作る**。
- Fig. 62 の説明: 後恥骨(c)は A と C で欠けている。
- HML1907(本文、分類の節。Hatcher が Marsh の角竜類の定義に補った特徴): 「**post-pubis much reduced**(後恥骨は大きく退化)」「blade of ilium horizontal(腸骨の刃は水平)」。

**G1905(HML1907 p.191 寸法表)— USNM 組み立て骨格**: 恥骨の長さ **0.85 m**、前端の幅 **0.28 m**。

**他の角竜類(代わりの資料)**

| 種・標本 | 記述 | 長さ | 資料 |
|---|---|---|---|
| Centrosaurus AMNH 5351 | 形は Triceratops と同じだが**後恥骨が長く細い**。全体に Triceratops より華奢 | 450 mm(後恥骨を除く) | B1917 本文 pp.285, 291; p.300 |
| Centrosaurus AMNH 5427 | Triceratops と同じ形だが後恥骨が相対的に長い | 500 mm(後恥骨を除く) | B1917 本文 p.304; p.305 |
| Centrosaurus *C. flexus* YPM 2015 | 前恥骨の軸はまっすぐで、**前端へ向かってゆるい曲線で広がる**(Triceratops と *C. nasicornus* はより急に広がる)。前縁はやや曲がり粗い。**前恥骨は強く外へ開く**ので、後恥骨は近位ではっきり曲がり、前恥骨の軸と一直線にならない。後恥骨の縦の径は中ほどで最大 | 434 mm(後恥骨を除く)、617 mm(後恥骨を含む、弦で) | L1933 本文 p.57 |
| Chasmosaurus | 後ろから 2 番目の仙骨前の肋骨は中ほどで太くなり、後縁に**恥骨の前端と付くための平たい粗面**がある | — | L1933 本文 p.68 |
| *Vagaceratops* CMN 41357 | 前恥骨の軸の近位部は**水平面(frontal plane)**にあるが、長軸のまわりにねじれ、前の広がりは斜めを向く(内面が背外方を向く)。寛骨臼の部分は**寛骨臼のカップ状の前部**を作る(関節面のうち骨化しているのはここだけ)。**後恥骨**は寛骨臼部と前恥骨の境の腹側から太く出て、すぐ後ろへ向き、大きな閉鎖孔の腹側縁を作り、坐骨の腹面を受ける細い樋状の突起として伸び、坐骨の外面に回って腹縁と平行に**約 120 mm** 走ってとがって終わる | — | H2014 本文 p.13 |

- **後恥骨の有無と長さは資料で割れている**: Triceratops は「痕跡的」(HML1907)、Centrosaurus は「長く細い」(B1917, L1933)、Vagaceratops は坐骨の腹縁に沿って伸びる(H2014)。Triceratops の後恥骨の長さの値は見つからなかった(USNM の標本では欠けている、Fig. 62 説明)。

---

## 6. 寛骨臼と大腿骨の頭

### 6.1 寛骨臼の位置・構成

- **HML1907(本文 p.56)**: 骨盤の 3 つの骨すべてが寛骨臼の構成に加わり、寛骨臼は「**恐竜の他の群より内側がよく閉じている**」。p.57: 「角竜類では他の草食恐竜のどれよりも閉じており、この点で哺乳類の状態に近づく」。
- 構成(HML1907 本文 pp.52, 56–58):
  - **上縁** = 腸骨の内縁が中ほどで厚くなって下へ伸びた部分。
  - **上壁と内壁** = 仙骨の寛骨臼の棒(仙骨の肋骨の先端の癒合)。
  - **前縁** = 恥骨の近位の粗い隆起。**内壁** = 恥骨の隆起の後ろの幅広い突起。
  - **下縁と後縁の大部分** = 坐骨の近位端。
- **前後の位置**: 腸骨の前の翼と後ろの翼は長さがほぼ等しい(HML1907 p.56)ので、寛骨臼は腸骨の長さのほぼ中ほどに来る。仙骨では、寛骨臼の棒は**第 2・3 仙椎の境〜第 6 仙椎**の肋骨でできる(HML1907 p.52)。Centrosaurus YPM 2015 では**恥骨の柄が第 III 仙椎の椎体の横**(L1933 p.47)。
- **大きさ**: *Vagaceratops* CMN 41357 で「保存された寛骨臼の縁の曲がりから、**直径はおよそ 170 mm**」(H2014 本文 p.13)。Triceratops の寛骨臼の直径は見つからなかった。
- **左右の間隔**: USNM 組み立て骨格で「**左右の大腿骨の頭の間の幅 1.50 m**」(姿勢に依存する寸法として掲載。G1905、HML1907 p.192)。Centrosaurus YPM 2015 で恥骨の柄の位置の寛骨臼の棒の幅 322 mm(L1933 p.48。左右の外幅か片側かは表に書かれていない)。
- **寛骨臼の向き(外・下・前など)を角度で書いた記述は見つからなかった。**

### 6.2 大腿骨の頭の向き

- **HML1907(本文 p.62)— Triceratops**: 「近位では、**頭は首(くびれ)によって軸と大転子からはっきり区別される**。頭は**大腿骨の長軸に対しておよそ 45° で上内方へ向く**。頭の関節面は粗く、入り組んだ構造で、大転子の上面へ続く」。大転子は前後に広がり外側に深い digital fossa を囲む。
- **B1917(本文 p.296)— Centrosaurus AMNH 5351**: 「**頭は大転子よりわずかに高いだけ**(右側はつぶれて本来より高くなっている)」。軸は長くまっすぐで、遠位でわずかに内へ曲がる。
- **B1917(本文 p.304)— Centrosaurus AMNH 5427**: 大きな頭が大転子の高さよりわずかに上へ出る。小転子は大転子と細い裂け目で分かれ、その頂よりやや下で終わる。遠位端は軸の線から内へ曲がる。
- **HO2010(本文)**: Triceratops の大腿骨は「**頭ははっきり区別される**が、**遠位の顆はわずかに凸なだけで、脛骨の関節面と合う形とは見えない**。角竜類では典型的な形で、大量の関節軟骨があった可能性が高い」。

---

## 7. 後ろあしの骨の長さと比率

### 7.1 Triceratops

**G1905(HML1907 pp.191–192 寸法表、頁画像で確認、単位 m)— *T. prorsus* USNM 組み立て骨格(右後肢と骨盤)**

| 項目 | 値 |
|---|---|
| 腸骨の長さ | 1.50 |
| 最大の深さ(坐骨の柄まで) | 0.32 |
| 刃の幅 | 0.32 |
| 恥骨の長さ | 0.85 |
| 前端の幅 | 0.28 |
| 坐骨の長さ(外側の曲がりに沿って) | 1.50 |
| 近位端の幅 | 0.40 |
| **大腿骨の長さ** | **1.15** |
| 近位端の幅 / 遠位端の幅 / 軸の周囲 | 0.42 / 0.43 / 0.485 |
| **脛骨と距骨の長さ** | **0.72** |
| 脛骨の近位端の幅 / 遠位端の幅 | 0.395 / 0.39 |
| 腓骨 | **(復元)** — 値なし |
| 中足骨 II の長さ | 0.29 |
| 中足骨 III の長さ | 0.355 |
| 第 III 趾の長さ | 0.325 |
| 第 IV 趾の末節骨の長さ / 幅 | 0.11 / 0.12 |

姿勢に依存する寸法(同表、単位 m): 背の頂までの高さ **2.47** / 関節窩での肩の幅 1.25 / 肘の幅 2.16 / 外側の趾の間の幅 1.70 / **大腿骨の頭の間の幅 1.50** / **膝の間の幅 1.93** / 外側の趾の間の幅 2.04。
(「外側の趾の間の幅」は表に 2 回出る。1.70 は肘の次、2.04 は膝の次に並ぶ。前足・後ろ足の区別は表に書かれていない。)

計算(USNM 組み立て骨格の値から):
- 脛骨(距骨込み)/ 大腿骨 = 0.72 / 1.15 = **0.63**(計算)
- 腸骨 / 大腿骨 = 1.50 / 1.15 = 1.30(計算)、坐骨 / 大腿骨 = 1.30(計算)、恥骨 / 大腿骨 = 0.74(計算)
- 中足骨 III / 大腿骨 = 0.31(計算)、中足骨 III / 脛骨 = 0.49(計算)
- 大腿骨 + 脛骨 = 1.87 m(計算)
- 仙骨の頂の高さ 8 フィート 2 インチ = 2.49 m(換算、計算)。表の「背の頂までの高さ」は 2.47 m。

**注意(資料に書かれている限界)**:
- この組み立て骨格は**合成**(USNM 4842 を基に、欠けた部分を同じ大きさ・同じ種の他の個体で補い、無い所は石膏で復元)(G1905)。
- 腓骨は復元。足根は**距骨だけ**で組んだ(G1905 の加筆)。
- Brown は「Triceratops の足は Marsh が完全な趾を 3 本しか持たないと考え、Monograph もそう扱い、**USNM の組み立て骨格もそう復元した**。しかし 4 本趾であったことは疑いない」と書いている(B1917 本文 p.297)。
- 坐骨の位置は推測的(4 節)。

**HML1907(本文 p.62)**: 「**大腿骨は脛骨の 1.5 倍の大きさ**」。後肢と足は前肢より長く、やや細いが、頑丈と言える。
**HML1907(本文 p.62)**: 腓骨は Triceratops では Hatcher 自身は観察していない(Lull の脚注で AMNH 970 *T. serratus* の腓骨: 長くとても細く、軸はほぼ円柱で両端が平たく広がる。遠位端は脛骨の前面に密着していた)。
**HML1907(本文 p.62)**: 脛骨は短く、中ほどで大きくくびれ、両端で大きく広がる。遠位の広がりはほぼ左右方向だけ。内側の踝ははっきりしないが、**外側の縁がとても目立つ突起になり、遠位端の半分弱を占め、距骨の下縁より少し下まで下がって距骨の外面を抱く**(哺乳類の外踝の働きをしたと考えられる)。
**HML1907(本文 p.63)**: 距骨は早くから脛骨と癒合し、脛骨の遠位端の**内側 3 分の 2** を覆う。

**H2014 表 1(本文)— 脛骨/大腿骨の比**(大腿骨は大転子から外側顆まで、脛骨は距骨込み):
Triceratops(Gilmore 1917 と表記)**0.63** / Triceratops(Penkalski & Dodson 1999)**0.59** / Triceratops(Fujiwara 2009)**0.66**。
H2014 は「大きな Triceratops は範囲の下端」と書いている。原典(Fujiwara 2009、Penkalski & Dodson 1999)は**未読**。

**HO2010(本文、表 4)— Triceratops の後肢長**
- 後肢長(**足は含まない**)**1.81 m**(軟骨補正なし)/ 2.01 m(ワニの補正 10.8%)/ 1.94 m(ダチョウの補正 6.8%)/ 1.85 m(ウズラの補正 1.8%)。
- 補正は「大腿骨と脛骨の長さの平均変化(表 1 から)」。肢長の出典は Marsh、Brown & Schlaikjer、Lull & Wright、Mazzetta et al.、Royo-Torres et al. とまとめて書かれ、**Triceratops の値がどの文献のどの標本かは表からは特定できない**。
- 速さ(Froude 数 1)は 4.22〜4.44 m/s。表題は「柱状の肢の姿勢(columnar limb posture)の代表的な非獣脚類恐竜」。
- 計算での比較: USNM の大腿骨 + 脛骨 = 1.87 m(計算)と HO2010 の 1.81 m は一致しない(標本が違う可能性がある。資料からは確かめられない)。

### 7.2 他の角竜類(代わりの資料)

**全長の比較(単位 mm)**

| 種・標本 | 大腿骨 | 脛骨(距骨込み) | 腓骨 | 脛/大腿 | 資料 |
|---|---|---|---|---|---|
| Centrosaurus AMNH 5351(Brown の "M. nasicornus") | 740(大転子の頂から顆の下まで、外側で) | 600 | 560 | 0.81(計算。L1933 は大腿:脛 = 1.32:1、H2014 は 0.81) | B1917 p.301(頁画像で確認) |
| Centrosaurus AMNH 5427(Brown の "M. cutleri") | 800 | 500 | 460 | 0.625(計算。L1933 は 1.60:1) | B1917 pp.305–306(頁画像で確認) |
| Centrosaurus *C. flexus* YPM 2015 | 789 | 552 | 527 | L1933 は 1.43:1 | L1933 pp.60–61 |
| *Monoclonius crassus* | 713 | 538 | 505 | — | L1933 pp.60–61(脛骨・腓骨は Cope の図からの推定と注記) |
| Chasmosaurus CMN 2245 | 749 | 533 | 483 | 0.71(計算。H2014 表 1 も 0.71) | L1933 p.70(頁画像で確認) |
| *Vagaceratops* CMN 41357 | 760(最大長) | 520 | — | 0.68 | H2014 本文 p.13 |
| 種不明 Ceratopsidae UALVP 42 | — | 568.6 | 545.6 | — | T2026 表 1 |

- B1917(本文): 「**脛骨と腓骨は大腿骨の半分より長い**」(属の特徴)。AMNH 5351 では「**大腿骨は脛骨より 140 mm 長いだけ**、Triceratops prorsus では大腿骨は脛骨の 1.5 倍」。AMNH 5427 では「大腿骨は脛骨のほぼ 1.5 倍で、Triceratops prorsus と同じ比」。Brown は肢の骨の比が少なくとも種の違いを示すと考え、L1933 は Nopcsa がこれを性差と考えたと紹介している。
- H2014(考察): 脛/大腿の比は角竜類で大きくばらつき、Centrosaurus や Triceratops のように資料の多い属では**属の中でも大きくばらつく**。小さい(幼い)個体ほど比が大きい。

**足(中足骨と趾骨、単位 mm)**

| | Centrosaurus AMNH 5351 | Centrosaurus AMNH 5427 | 種不明 UALVP 42 |
|---|---|---|---|
| 中足骨 I | 123 | 103 | 124.5 |
| 中足骨 II | 180 | 200 | 200.2 |
| 中足骨 III | **215** | **230** | **215.1** |
| 中足骨 IV | 160 | 184 | 166.3 |
| 中足骨 V | 77 | 69 | 75.6 |
| 趾骨 I-1 / I-2 | 101 / 97 | 92 / — | 95.6 / 63.8(末節) |
| 趾骨 II-1 / II-2 / II-3 | 69 / 46 / 93 | 64 / — / 77 | 61.2 / 38.7 / 83.0(末節) |
| 趾骨 III-1 / III-2 / III-3 / III-4 | 60 / 37 / 35 / 80 | 40 / — / — / — | 45.3 / 34.7 / 32.1 / 83.9(末節) |
| 趾骨 IV-1 / IV-2 / IV-3 / IV-4 / IV-5 | 54 / 35 / 32 / 23 / 69 | — / — / — / 77 / — | 40.3 / 34.8 / 25.9 / 21.0 / 82.0(末節) |
| 資料 | B1917 p.301(頁画像で確認) | B1917 p.306(頁画像で確認。表の項目名は「IV⁴」で 77。L1933 p.63 の注 88 は「III-4 ではないか」と疑っている) | T2026 表 3・4・5(末節骨は表 5) |

- L1933 p.63 の表に *C. flexus* YPM 2015 の値も並ぶが、OCR では列の対応が崩れており頁画像で確認していないので、ここには載せない。
- T2026 の末節骨(長さ×幅×深さ、mm): I 63.8×63.8×28.6 / II 83.0×77.4×36.6 / III 83.9×84.1×41.0 / IV 82.0×70.3×36.0。
- 計算(Centrosaurus AMNH 5351): 中足骨 III / 大腿骨 = 215 / 740 = 0.29(計算)。第 III 趾の趾骨の合計 = 212 mm(計算)。
- 計算(Triceratops USNM): 中足骨 III / 大腿骨 = 0.31(計算)、第 III 趾の長さ 0.325 m / 中足骨 III 0.355 m = 0.92(計算)。

---

## 8. 後ろあしの姿勢と足の形

### 8.1 膝・足首・肢全体

- **L1933(本文 p.65)— Centrosaurus YPM 2015 の組み立ての方針**: 「**後肢はほぼまっすぐで、歩幅の始めに体重が完全にかかる前に膝をわずかに曲げる**」。肘は曲げて外へ張り、上腕骨はほぼ水平(前肢)。「足の動きはいくらか引きずるようで、現代のゾウのように足を地面から高く上げなかった」と想像している。
- **PC2000(要旨)**: 「角竜類の**あらゆる大きさの肢がかなりの関節の曲がり(substantial joint flexure)を示し**、ゾウのような前肢の姿勢は誤り」。「**足跡では後ろ足の跡が前足の跡より内側**にある。これは肘がわずかに外へ開くことと、**大腿骨の遠位の顆が左右非対称で、下腿をわずかに内へ向けた**ことによる」。
- **HML1907(本文 p.62)**: Triceratops の大腿骨は「**外側の顆が内側の顆より大きい**」。顆間の切れ込みはとても深く狭い。
  - ただし Centrosaurus AMNH 5427 では「内側の顆が外側より大きく見え、本当なら Triceratops と逆」(B1917 p.304)。YPM 2015 では左右で食い違う(左は外側が大きい、右は修復で内側を大きくしてある)(L1933 p.60)。
- **HML1907(本文 p.193、Lull)**: 「肢はおそらくいくらかゾウに似ていた。ただし尺骨の大きな肘頭は(前肢が)より曲がっていたことを示す」。
- **G1919(本文)**: 新しい復元模型では「**大腿部を脇腹から離し**、それまでの哺乳類型ではなく爬虫類型の肢にした」。
- **BM2017(本文)**: 四足歩行の鳥盤類の大腿の外転のモーメントアームは二足のものより大きいとする研究(Maidment et al. 2014a ほか)を紹介。「大腿骨を垂直に保つと、大腿の内旋は趾を内へ向けるだけになる」と仮定の形で書いている(角竜類の大腿骨の角度の測定値ではない)。
- **膝の角度・足首の角度を数値で書いた資料は見つからなかった。**

### 8.2 趾行か蹠行か

- **B1917(本文 p.297)— Centrosaurus と Triceratops**: 「足はかなりの弓形(arch)を持ち、節の間の左右の動きはわずか」。「**趾骨の関節面は端にまっすぐあり、わずかにしか反り返らず、生きていたときは垂直に近い姿勢**で、**ゾウ類の重く肉厚な足**を思わせる」。
- **B1917(本文 p.300)**: Brown の復元は Marsh の Triceratops の復元や USNM の組み立て骨格と違い、「**足はより趾行(digitigrade)で趾が外を向く**。前足の軸は第 II 趾を、**後ろ足の軸は第 II・III 趾の間**を通る」。
- **L1933(本文 p.63)**: 「前足・後ろ足とも、**全体の姿勢は趾行**」。復元した足の周囲(足裏のふくらみを含む)は約 1360 mm、前足は 1090 mm で、**後ろ足の足裏の面積は前足のおよそ 2 倍**(Centrosaurus YPM 2015 の復元)。
- **T2026(本文)**: 復元図は「**中足骨を、生きていたときにとったと考えられる趾行の姿勢**で示し、中足趾節関節は背屈させてある」。「基節骨が短いので、地面に対してどの角度で保たれたかを正確に決めるのは難しい」。
- **半趾行(semi-digitigrade)という語で角竜類の後ろ足を書いた資料は、読んだ範囲には無かった。**

### 8.3 趾の数・趾骨の式

| 資料 | 対象 | 記述 |
|---|---|---|
| HML1907(本文 p.63–64) | Triceratops | 「**機能する中足骨は 3 本(II・III・IV)**。I と V の痕跡があった可能性はあるが、足が完全な標本はまだ無い」。趾骨は「第 III 趾がおそらく 4 個か 5 個、第 II・IV 趾はそれより 1 個少ない」(推測として書かれている) |
| B1917(本文 pp.286, 297) | Centrosaurus AMNH 5351、Triceratops | 「**機能する 4 本の趾に蹄があり、第 5 趾は退化した中足骨だけ**。趾骨の式 I=2、II=3、III=4、IV=5」。「Triceratops とまったく同じ構造で、大きさだけが違う。Monograph 刊行後に AMNH に入った**完全な Triceratops の足**で確認した」 |
| L1933(本文 p.62) | Centrosaurus YPM 2015 | 4 本の機能する趾すべてに末節骨(前足は 3 本)。第 5 趾は中足骨の近位部だけ。**趾骨の式 2, 3, 4, 5, 0**(鳥脚類などの前歯骨類の恐竜として普通) |
| H2014(本文 p.16) | *Vagaceratops* CMN 41357 | 第 1 趾の基節骨は他の趾のどれよりずっと大きい(ほぼ 2 倍の長さ)。**第 III 趾が最長**(第 IV 趾より趾骨が 1 個少ないのに)。足は第 III 趾のまわりにほぼ対称 |
| T2026(本文) | 種不明 UALVP 42 | 趾骨の式は「他の角竜類と同じく **2-3-4-5-0** だったと考えられる」 |

**資料が割れている点**: Hatcher(HML1907)は機能する趾を 3 本とし、USNM の組み立て骨格も 3 本で復元した。Brown(B1917)は Triceratops の完全な足をもとに 4 本と書いた。Triceratops の足を記載した論文そのもの(AMNH の標本番号など)は見つからなかった。

### 8.4 中足骨の並び方・向き

- **HML1907(本文 pp.63–64)— Triceratops**: 中足骨は中手骨よりずっと長く強い。「**近位端で互いにかみ合い、長さの大部分で密着して、足に剛性と強度を与える**」。第 III が最大。遠位端は左右に、近位端は前後に最も広がる。
- **B1917(本文 p.298)— Centrosaurus AMNH 5351**: 中足骨 I は短く太く、中足骨 II の軸に長さの 5 分の 4 まで密着し、そこで急に離れ、遠位端は反り返る(他の趾より左右に動ける)。**第 1 趾は短く強く、内側へよく向いていた**。第 II・III 趾は前を向き、足の軸はその間。第 III 趾の趾骨の関節面は斜めで、趾は前へ曲がり、その蹄は第 II 趾の蹄よりわずかに後ろに来る。第 IV 趾は内面が外面より短く、趾全体が前へ曲がる。中足骨 V は痕跡で趾骨を持たず、中足骨 I の約 3 分の 2 の長さ。
- **L1933(本文 pp.62–63)— Centrosaurus YPM 2015**: 中足骨 I の遠位の関節面はやや外を向き、「**趾が足の軸から離れて開いていた**かのよう」。第 1 趾は体重をほとんど支えられなかった。中足骨 III が軸。
- **T2026(本文)**: 「多くの復元とは違い、**中足骨 I〜IV は全長にわたって密着**し、中足骨 V は IV と平行で近位と遠位だけで接する。関節した標本(例: Centrosaurus AMNH FARB 5351)の状態を反映している」。「**関節した角竜類の標本から見て、中足骨を開いて(splayed)間を空ける根拠は無い**」。この並びは Hatcher 1907 の Triceratops の記述と一致する。中足骨の近位面は**前を頂点とする三角形に近い輪郭**になる。中足骨 II〜IV の遠位の関節面はほぼまっすぐ下を向き、I だけやや後外方を向く。

### 8.5 末節骨(蹄)

- **HML1907(本文 p.64)— Triceratops**: 末節骨は「**幅広く、粗い(海綿質)**。竜脚類や獣脚類のような側扁した爪ではなく、**平たい蹄**に包まれていた」。
- **G1905 寸法表**: 第 IV 趾の末節骨 長さ 0.11 m、幅 0.12 m(幅が長さより大きい)。
- **L1933(本文 p.63)**: 末節骨は「**扁平で、鋤(すき)形(spade-like)**」。第 1 趾の基節骨は幅のほぼ 2 倍の長さで、他の趾骨は(末節骨を除き)長さより幅が大きい。
- **B1917(本文 p.299)**: 第 I 趾の末節骨は第 II より少し長く、狭く、先がとがる。**第 II 趾の末節骨が最大**。第 III は II より狭い。第 IV が最小。
- **T2026(本文)**: 末節骨は蹄状。前後から見て**やや鋤形**で、短い近位の軸から左右へ急に広がって刃になり、刃には多数の血管の溝がある(生前は角質に覆われていた)。II と IV はわずかに長さが幅より大きく、I と III は長さと幅がほぼ等しい。一部の角竜類(Triceratops ROM 1434・ROM 52428 を含む)では、後面で刃と軸の間に段がある。

---

## 9. 足跡化石

- **LH1995(要旨)**: Laramie 層(マーストリヒト期、Colorado)の角竜類の足跡を新しい足跡属種 ***Ceratopsipes goldenensis*** として記載。「この科に帰属できる最初の足跡」。「**角竜類の前肢を這う姿勢とした模型は誤り**であることを示す」。足跡の大きさ・趾の数・向きは要旨には書かれていない(本文は未読)。
- **二次資料(Wikipedia "Ceratopsipes")**: 後ろ足の跡は**幅 80 cm 近く**、ゆがんでいなければ 12 m 級の大きな角竜類の可能性(LH1995 を出典とするが、本文で確かめていない)。
- **B2025(本文)— *Ceratopsipes* isp.、Dinosaur Park 層(カンパニアン期、Alberta)**
  - 9 個の足跡、少なくとも 4 個体の連続した足跡を含む。**すべて後ろ足の跡で、確実な前足の跡は無い**。
  - 最も保存のよい C1.1(右の後ろ足): 「**全体はほぼ円形で、長さが幅よりわずかに大きく、4 本の幅広く先の鈍い趾**、目立つ堆積物の押し出しの縁があり、**丸いが左右非対称(外側へ偏った)『かかと』(= 中足趾節のふくらみ)**」。
  - 表 1(長さ × 幅、cm): C1.1 **71 × 60**、C2.1 75 × 64、C3.1 73 × 74、C4.1 64 × 57(*不完全)。自由な趾の長さ(I〜IV)は C1.1 で 4・8・12・11 cm、趾の開き角(I-II / II-III / III-IV)は 15・17・18°、第 III 趾が II と IV より先へ出る長さ 11 cm(いずれも ImageJ による推定値と注記)。
  - 「McCrea らは *Ceratopsipes* を**左右対称で、比較的短く幅広い趾**を持つと考えた」。ホロタイプの後ろ足の跡のかかとは本例より細いが、同じ個体の連続した跡の中でも丸いものから V 字形まで変わる。
  - 足跡を付けた種の候補として *Styracosaurus albertensis* と *Chasmosaurus* の一種を挙げる。
- **PC2000(要旨)**: 足跡では後ろ足の跡が前足の跡より内側にある(8.1)。
- **L1933(本文 pp.64–65)**: Centrosaurus YPM 2015 の足の置き方は Sternberg の *Tetrapodosaurus borealis*(Peace River)を参考にした。「趾行の動物が付けたもので、趾の数も正しい」。ただし **B2025 は *Tetrapodosaurus* を曲竜類の足跡として扱っている**。L1933 の参照は現在の扱いとは合わない。
- **後ろ足の跡の向き(外へ何度開くか)を数値で書いた資料は見つからなかった。** B2025 の方法の節には「相対的な足の回転」を測る項目があるが、表 1 にはその値が無い。

---

## 10. 観察に使える画像(使用許諾が明記されたもの)

Wikimedia Commons の API で許諾と作者を確かめた(2026-10-04)。

| ファイル名 | 写っているもの | 許諾 | 作者 | URL |
|---|---|---|---|---|
| The Ceratopsia (1907) (20402436269).jpg | HML1907 Fig. 124: USNM 組み立て骨格(*T. prorsus*)の**真後ろ**の写真。**水平に張り出した左右の腸骨**、仙骨、坐骨、後肢の並びが見える(画像を見て確認) | No restrictions(Internet Archive Book Images) | Hatcher ほか(1907) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(1907)_(20402436269).jpg |
| The Ceratopsia (Plate XLIX) BHL39876010.jpg | 同じ組み立て骨格の側面と斜め後ろ | Public domain | Hatcher, Lull, Marsh, Osborn(1907) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(Plate_XLIX)_BHL39876010.jpg |
| The Ceratopsia (1907) (20401075600).jpg | HML1907 Fig. 62: *T. prorsus* USNM 4842 の左恥骨(画像を見て確認) | No restrictions | Hatcher ほか(1907) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(1907)_(20401075600).jpg |
| Triceratops femur front.jpg | 説明文は "Triceratops prorsus Marsh."。画像は HML1907 の Plate XIV(大腿骨の前後面と両端)と見える(画像の上端の表題からの観察) | CC BY 2.0 | Biodiversity Heritage Library | https://commons.wikimedia.org/wiki/File:Triceratops_femur_front.jpg |
| The Ceratopsia (1907) (20595714461).jpg | HML1907 Fig. 125: Marsh の *T. prorsus* 復元図(旧説。Hatcher らが仙骨前の椎骨の数を誤りとしたもの) | No restrictions | Marsh(1907 年刊に再録) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(1907)_(20595714461).jpg |
| Triceratops pelvis NHM.JPG | 説明文は撮影者の名前だけ。画像は Natural History Museum(London)の Triceratops の骨盤と大腿骨の付近(ファイル名と画像からの観察)。**同館の Triceratops は張り子の模型**という説明が別のファイル(下の Zachi Evenor の写真)にある | CC BY-SA 3.0 | Ballista | https://commons.wikimedia.org/wiki/File:Triceratops_pelvis_NHM.JPG |
| Triceratops-Zachi-Evenor-003.jpg | London Natural History Museum の Triceratops の骨格。説明文「キャストではなく**張り子(papier mâché)の模型**」 | CC BY 2.0 | Zachi Evenor | https://commons.wikimedia.org/wiki/File:Triceratops-Zachi-Evenor-003.jpg |
| Triceratops horridus - Cleveland Museum of Natural History (34800619235).jpg | 説明文「Cleveland Museum of Natural History の *T. horridus* のキャスト」。側面 | CC BY-SA 2.0 | Tim Evanson | https://commons.wikimedia.org/wiki/File:Triceratops_horridus_-_Cleveland_Museum_of_Natural_History_(34800619235).jpg |
| Chasmosaurus belli ROM.jpg | Royal Ontario Museum の *Chasmosaurus belli* の骨格。後肢と足が見える(画像を見て確認) | CC BY 4.0 | IJReid | https://commons.wikimedia.org/wiki/File:Chasmosaurus_belli_ROM.jpg |
| Chasmosaurus belli RTM 01.jpg | Royal Tyrrell Museum で準備された *Chasmosaurus belli* の骨格(説明文による) | CC BY-SA 2.0 | ceasol | https://commons.wikimedia.org/wiki/File:Chasmosaurus_belli_RTM_01.jpg |
| Chasmosaurus skeleton.JPG | North American Museum of Ancient Life の Chasmosaurus のキャスト(説明文による) | CC BY-SA 3.0 | Ninjatacoshell | https://commons.wikimedia.org/wiki/File:Chasmosaurus_skeleton.JPG |
| Ceratopsipes goldenensis (dinosaur trackway) (Laramie Formation, Upper Cretaceous; Parfet Prehistoric Preserve, Golden, Colorado, USA) 12.jpg | *Ceratopsipes goldenensis* の足跡(傾いた砂岩層の凸の跡、説明文による) | CC BY 2.0 | James St. John | https://commons.wikimedia.org/wiki/File:Ceratopsipes_goldenensis_(dinosaur_trackway)_(Laramie_Formation,_Upper_Cretaceous;_Parfet_Prehistoric_Preserve,_Golden,_Colorado,_USA)_12.jpg |
| 同 5.jpg | 同じ足跡の別の写真 | CC BY 2.0 | James St. John | https://commons.wikimedia.org/wiki/File:Ceratopsipes_goldenensis_(dinosaur_trackway)_(Laramie_Formation,_Upper_Cretaceous;_Parfet_Prehistoric_Preserve,_Golden,_Colorado,_USA)_5.jpg |

Commons 以外で、許諾の扱いがはっきりしているもの:

| 資料 | 写っているもの | 扱い | URL |
|---|---|---|---|
| HML1907 Fig. 53・55・60・61・63・71 | Triceratops の仙骨の腹面・背面(腸骨付き)、骨盤の側面、腸骨の腹面、坐骨の後面、大腿骨・脛骨 | 1907 年刊(archive.org の当該資料) | https://archive.org/details/ceratopsia00hatc |
| B1917 Plates | Centrosaurus AMNH 5351 のパネルの組み立て、AMNH 5427 の骨盤 | 1917 年刊 | https://archive.org/details/bulletin-american-museum-natural-history-37-281-306 |
| L1933 Fig. 17・18・26・27・28・29 | Centrosaurus *C. flexus* YPM 2015 の仙骨と腸骨の背面・腹面、恥骨と坐骨、大腿骨、脛骨と腓骨、後ろ足の前面 | archive.org の表示: "No known copyright restrictions as determined by scanning institution"(前例の文書で確認) | https://archive.org/details/revisionofcerato33lull |
| T2026 Fig. 3・4・7 ほか | 種不明 Ceratopsidae UALVP 42 の下腿と足の 3D の組み立て、中足骨の 6 方向 | CC BY | DOI 10.1371/journal.pone.0353362 |
| B2025 Fig. 7 ほか | *Ceratopsipes* isp. の後ろ足の跡の写真と 3D モデル | CC BY | DOI 10.1371/journal.pone.0324913 |
| H2014 Fig. 19–22 | Vagaceratops の坐骨、恥骨、大腿骨・脛骨・腓骨、右後ろ足の背面・腹面 | CC BY-NC-ND 3.0(改変不可・非営利。前例の文書で確認) | DOI 10.18435/B5159V |
| SR2015 Fig. 3 | 仙骨を水平にした角竜類の骨格(Centrosaurus・Styracosaurus) | CC BY(PLoS ONE) | DOI 10.1371/journal.pone.0144036 |

上から見た(背側からの)Triceratops の骨盤の**写真**で許諾が明記されたものは、見つからなかった(図は HML1907 Fig. 55 がある)。

---

## 11. 模型への申し送り(資料で裏付いた点だけ)

### 仙骨

- **癒合した仙骨の椎骨は 10 個**(Triceratops: HML1907。角竜類全般: B1917, L1933)。
  - そのうち前の 1〜2 個は dorso-sacral、後ろの 4〜5 個は sacro-caudal、本来の仙椎は 4〜5 個(HML1907)。**区分は資料内で割れている**(Hatcher は dorso-sacral 1、Marsh は 2)。
  - Centrosaurus YPM 2015 では 10 個に加えて**下で離れた dorso-sacral が 1 個**ある(L1933)。Triceratops でこれを数えた資料は見つからなかった。Vagaceratops CMN 41357 は dorsosacral 2(H2014)。
- 仙骨の肋骨: **第 2・3 仙椎の境〜第 6 仙椎の 4 対が先端で癒合して「寛骨臼の棒」**を作り、寛骨臼の上壁・内壁になる。第 2〜第 9 仙椎の横突起の先端が腸骨に接する。第 1 と第 10 は腸骨に届かない。横突起の先端を結ぶと前後に長い卵形(HML1907)。
- 仙骨は**横から見て上へ弓なり**(HML1907)。腸骨とは**癒合しない**(HML1907 p.109)。
- 寸法(USNM 組み立て骨格): 長さ 1.10 m、幅 0.64 m(G1905)。
- 仙骨の長軸は**水平**に置いてよい根拠: SR2015(Centrosaurus・Styracosaurus の関節した標本での観察と Garstka & Burnham 1997 の引用)、L1933(Centrosaurus の組み立て方針)。Triceratops の標本での観察ではないことに注意。Fujiwara の研究でこれを裏付ける記述は見つからなかった。

### 腸骨

- **水平な板**として置く(HML1907, G1905。角竜類で一致)。
- 前の突起と後ろの突起は**長さがほぼ等しい**。**前端は幅広く、後端は細くとがり厚い**。外縁・内縁は S 字(HML1907)。坐骨の柄の上で外縁が下へ折れる(HML1907 p.165)。
- 寸法(USNM 組み立て骨格): **長さ 1.50 m、刃の幅 0.32 m、深さ(坐骨の柄まで)0.32 m**(G1905)。腸骨 / 大腿骨 = 1.30(計算)。
- **前端が外へ開く**: 数値の裏付けは Centrosaurus YPM 2015 の左右幅(前端 753 / 坐骨の柄の上 630 / 後端 190 mm、L1933)だけ。Triceratops では HML1907 Fig. 55 の図で前端が外へ開いて見える(図からの観察)。Brachyceratops は「強く外へ曲がる」(Gilmore 1917 を L1933 が引用)。BM2017 は背縁の外への反り返りが胴の幅を広げると書く。**Triceratops の前端の左右幅の数値は無い。**模型では Centrosaurus の比(前端の左右幅 ≒ 腸骨の長さの 0.78 倍、計算: 753 / 964)を参考にできるが、種が違うことを模型の側に書いておくこと。
- 骨盤全体の幅 1.24 m(USNM、どの位置の幅かは不明)(G1905)。

### 坐骨

- **細い棒**。近位は広がり、下前方へ恥骨への突起を出す。遠位は**下へ、そして内へ曲がり**、左右が正中で長い軟骨結合で出会う(後ろから見て Y 字形)(HML1907)。
- 長さ(USNM、外側の曲がりに沿って): **1.50 m**(腸骨と同じ長さ)、近位端の幅 0.40 m(G1905)。
- **割れている点**: 曲がり方は種で違う。Triceratops と Centrosaurus "nasicornus" はほぼ一様な弧、Centrosaurus "cutleri" と Chasmosaurus はまっすぐで先端だけ急に下へ曲がる(L1933, B1917)。さらに **USNM の組み立て骨格の坐骨の位置は Lull が「きわめて推測的」と書いている**(HML1907 p.192)。

### 恥骨

- **前恥骨がよく発達し、後恥骨は痕跡的**(Triceratops: HML1907)。前恥骨の軸は中ほどでくびれ縦に長い断面、遠位で幅広い刃になり、**下前方へ向かい、内へは向かわない。左右の先端は接しない**(HML1907)。
- 寸法(USNM): **長さ 0.85 m、前端の幅 0.28 m**(G1905)。恥骨 / 大腿骨 = 0.74(計算)。
- 前恥骨は外へ開く(Centrosaurus YPM 2015、L1933)。前恥骨の近位は水平面にあり、先はねじれて斜めを向く(Vagaceratops、H2014)。
- **割れている点**: 後恥骨は Triceratops で「痕跡的」(長さの値なし)、Centrosaurus と Vagaceratops では長く坐骨の腹縁に沿う。

### 寛骨臼と大腿骨の頭

- 寛骨臼は**腸骨の長さのほぼ中ほど**(前後の突起がほぼ等長、HML1907)、仙骨では第 2〜6 仙椎の肋骨の寛骨臼の棒の外側。3 つの骨すべてで作り、**内側がよく閉じる**(上縁 = 腸骨、上壁・内壁 = 仙骨の棒、前縁と内壁 = 恥骨、下縁と後縁 = 坐骨)(HML1907)。
- 直径の値は Vagaceratops で約 170 mm(H2014)。Triceratops の値は無い。
- 左右の大腿骨の頭の間の幅 **1.50 m**(USNM、姿勢に依存する値、G1905)。
- 大腿骨の頭は**くびれで区別され、長軸に対して約 45° で上内方を向く**(HML1907)。
- 寛骨臼の向きの角度の資料は無い。

### 後ろあしの骨の比率

- Triceratops(USNM 組み立て骨格、G1905): **大腿骨 1.15 m、脛骨(距骨込み)0.72 m、中足骨 III 0.355 m、中足骨 II 0.29 m、第 III 趾 0.325 m、第 IV 趾の末節骨 0.11 × 0.12 m**。腓骨は復元。
  - 脛/大腿 = **0.63**(計算。H2014 表 1 も 0.63)。**資料で割れている**: Penkalski & Dodson 1999 は 0.59、Fujiwara 2009 は 0.66(どちらも H2014 表 1 経由、原典未読)。
  - HML1907 本文は「大腿骨は脛骨の 1.5 倍」。
- 後肢長(足を含まない): **1.81 m**(軟骨補正なし)、補正込みで 1.85〜2.01 m(HO2010 表 4。標本は特定できない)。
- 股関節の高さそのものを測った値は見つからなかった。近い値: USNM 組み立て骨格の**仙骨の頂の高さ 8 フィート 2 インチ(2.49 m、換算)/ 表の「背の頂までの高さ」2.47 m**(G1905)。Chasmosaurus CMN 2245 の「骨盤での骨格の高さ」1498 mm(L1933 p.70)。
- 腓骨: 細長く、両端が平たく広がり、遠位端は脛骨の前面に密着(Triceratops AMNH 970、HML1907 の Lull の脚注)。長さは脛骨よりやや短い(Centrosaurus: 560 / 600、B1917)。
- 足の細部の比率は Triceratops の値が足りないので、Centrosaurus AMNH 5351 の表(7.2)か UALVP 42 の表を種を明記して使う。中足骨は III > II > IV > I > V の順に長い(AMNH 5351、AMNH 5427、UALVP 42 で共通)。

### 後ろあしの姿勢

- 後肢は**ほぼまっすぐ、膝はわずかに曲げる**(L1933、Centrosaurus の組み立て方針)。PC2000 は角竜類の肢に「かなりの関節の曲がり」を認める。**膝の角度の数値は無い。**
- 下腿はわずかに内へ向き、**後ろ足の跡は前足の跡より内側**(PC2000 要旨)。
- 足は**趾行**(B1917, L1933, T2026)。足は弓形で、趾骨の関節面はまっすぐ端にあり、垂直に近い姿勢(B1917)。中足骨は開かず**密着**させる(HML1907, T2026)。
- 足の軸は**第 II・III 趾の間**、趾は外を向く(B1917)。第 1 趾は短く内側へ向き、体重をほとんど支えない(B1917, L1933)。
- **趾は 4 本が機能し、第 5 は中足骨の痕跡だけ。趾骨の式 2-3-4-5-0**(B1917, L1933, H2014, T2026)。**割れている点**: Hatcher(HML1907)と USNM の組み立て骨格は機能する趾を 3 本としていた。Brown は Triceratops の完全な足で 4 本と確認したと書いている。
- 末節骨は**平たい蹄**、幅広く鋤形(HML1907, L1933, T2026)。第 II 趾の末節骨が最大、第 IV が最小(B1917)。

### 足跡から

- 角竜類の後ろ足の跡は**ほぼ円形で長さがわずかに大きく、4 本の幅広く鈍い趾、外側へ偏った丸いかかと**(B2025)。大きさは長さ 64〜75 cm、幅 57〜74 cm(Dinosaur Park 層、候補は Styracosaurus・Chasmosaurus)。Laramie 層の *C. goldenensis* は幅 80 cm 近く(Wikipedia、原典未確認)。
- 足の外への開きの角度の数値は無い。

### 未解決(資料が見つからなかった・読めなかった)

- Triceratops の腸骨の前端の左右幅、寛骨臼の直径と向き、後恥骨の長さ。
- Triceratops の足を記載した論文(Brown の言う AMNH の完全な足)。
- 膝・足首の角度、後ろ足の外への開きの角度。
- 仙骨の水平を Fujiwara の研究で裏付ける記述。
- Garstka & Burnham 1997、Maidment & Barrett 2011・2012、Fujiwara 2009、Dodson et al. 2004、Penkalski & Dodson 1999、Lockley & Hunt 1995 の本文は未読。
