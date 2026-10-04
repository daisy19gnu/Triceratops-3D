# 資料調べ: トリケラトプスの胸郭・肋骨・胸骨

調べた日: 2026-10-04(JST)
目的: three.js の模型で胴の骨格(胸骨の板・肋骨・胸郭の形)を作り直すための根拠集め。
方法: Web の検索と取得だけで行った(手元のファイルは参照していない)。

## 0. この文書の約束

- 数値と形の記述は、読んだ資料に書いてあるものだけを載せた。
  自分で足し算・割り算をした値は「(計算)」と書いて区別した。
- 各資料に、どこまで読んだかを書いた。
  - **本文** = 本文(該当する節)を読んだ
  - **要旨** = 要旨だけを読んだ
  - **図** = 図を見ただけ(本文に書いていない形を図から読み取ったもの)
  - **未読** = 存在は分かったが読めていない(内容は書かない)
- 種名は資料の表記のまま書き、現在の扱いが資料内で示されている場合だけ併記した。
  例: Brown 1917 の "Monoclonius nasicornus" は、Holmes 2014 が "Centrosaurus (Brown 1917)" として引用している。
- 古い資料(1906〜1933 年)の本文は archive.org の OCR テキストで読み、数値表は頁の画像で確かめた。

---

## 1. 資料の一覧と読んだ範囲

| 記号 | 資料 | 対象の種・標本 | 読んだ範囲 |
|---|---|---|---|
| HML1907 | Hatcher, J.B., Marsh, O.C. & Lull, R.S. 1907. *The Ceratopsia*. U.S. Geological Survey Monograph 49. https://archive.org/details/ceratopsia00hatc | *Triceratops*(YPM 1834 *T. brevicornus* 型標本、USNM 4842 ほか) | **本文**(椎式 pp.46–52、肩帯・肋骨 pp.58–59、装架骨格の記述と寸法表 pp.189–191。寸法表は頁画像で確認) |
| G1905 | Gilmore, C.W. 1905. A mounted skeleton of *Triceratops*. Proc. U.S. Nat. Mus. 29: 433–435 | *Triceratops prorsus* USNM 4842 を基にした組み立て骨格 | 原典は**未読**。HML1907 pp.189–191 に Gilmore 自身の加筆付きで全文に近い引用があり、そちらを**本文**として読んだ |
| G1919 | Gilmore, C.W. 1919. A new restoration of *Triceratops*, with notes on the osteology of the genus. Proc. U.S. Nat. Mus. 55: 97–112. https://archive.org/details/biostor-79527 | *Triceratops* | **本文**(胸郭・肋骨の記述はほぼ無い。標本の部位の列挙だけ) |
| B1906 | Brown, B. 1906. New notes on the osteology of *Triceratops*. Bull. Amer. Mus. Nat. Hist. 22: 297–300. https://archive.org/details/bulletin-american-museum-natural-history-22-297-300 | *Triceratops* AMNH 971 | **本文**(全文)+ **図**(Fig. 1 胸骨の写真、Fig. 2 軟骨の肋骨の復元図、Pl. XL 組み立て骨格の正面) |
| B1917 | Brown, B. 1917. A complete skeleton of the horned dinosaur *Monoclonius*, and description of a second skeleton showing skin impressions. Bull. Amer. Mus. Nat. Hist. 37: 281–306. https://archive.org/details/bulletin-american-museum-natural-history-37-281-306 | "*Monoclonius nasicornus*" AMNH 5351(= Holmes 2014 の言う Centrosaurus)、"*M. cutleri*" AMNH 5427 | **本文**(脊柱・肩帯・胸骨・肋骨・寸法表) |
| L1933 | Lull, R.S. 1933. A revision of the Ceratopsia or horned dinosaurs. Memoirs of the Peabody Museum of Natural History 3(3): 1–175. https://archive.org/details/revisionofcerato33lull | Centrosaurus(YPM 2015 ほか)、Chasmosaurus、Anchiceratops、Pentaceratops、Triceratops | **本文**(椎式の表 p.39、胸骨 pp.51–53 と寸法表(頁画像で確認)、Chasmosaurus の肋骨の節) |
| H2014 | Holmes, R.B. 2014. The postcranial skeleton of *Vagaceratops irvinensis* (Dinosauria, Ceratopsidae). Vertebrate Anatomy Morphology Palaeontology 1: 1–21. DOI 10.18435/B5159V | *Vagaceratops*(= *Chasmosaurus*)*irvinensis* CMN 41357(関節したまま見つかった、ほぼ完全な骨格) | **本文**(全文) |
| HRM2005 | Holmes, R.B., Ryan, M.J. & Murray, A.M. 2005. *Photographic atlas of the postcranial skeleton of the type specimen of Styracosaurus albertensis…*. Canadian Museum of Nature. https://archive.org/details/photographicatla00holm | *Styracosaurus albertensis* CMN 344(型標本) | **本文**(脊柱・肋骨・肩帯の節)+ **図**(Plate 22 右の胸骨の板) |
| TH2007 | Thompson, S. & Holmes, R. 2007. Forelimb stance and step cycle in *Chasmosaurus irvinensis* (Dinosauria: Neoceratopsia). Palaeontologia Electronica 10(1): 5A. https://palaeo-electronica.org/2007_1/step/step.pdf | *C. irvinensis* CMN 41357(胸郭の復元に *Styracosaurus* CMN 344 を参照) | **本文**(序論・方法・胸郭の記述・考察) |
| PC2000 | Paul, G.S. & Christiansen, P. 2000. Forelimb posture in neoceratopsian dinosaurs: implications for gait and locomotion. Paleobiology 26: 450–465. DOI 10.1666/0094-8373(2000)026<0450:FPINDI>2.0.CO;2 | 角竜類(Ceratopsidae) | **要旨** |
| F2009a | Fujiwara, S., Kuwazuru, O., Inuzuka, N. & Yoshikawa, N. 2009. Relationship between scapular position and structural strength of rib cage in quadruped animals. J. Morphol. 270: 1084–1094. DOI 10.1002/jmor.10744 | 現生の四肢動物(恐竜を直接扱うかは要旨からは不明) | **要旨** |
| F2018 | Fujiwara, S. 2018. Fitting unanchored puzzle pieces in the skeleton: appropriate 3D scapular positions for the quadrupedal support in tetrapods. J. Anat. 232: 857–869. DOI 10.1111/joa.12778 | 現生(Felis, Rattus, Chamaeleo のモデル) | **要旨** |
| FH2012 | Fujiwara, S. & Hutchinson, J.R. 2012. Elbow joint adductor moment arm as an indicator of forelimb posture in extinct quadrupedal tetrapods. Proc. R. Soc. B 279: 2561–2570. DOI 10.1098/rspb.2012.0190 | *Triceratops* ほか | **要旨** |
| F2022 | Fujiwara, S. 2022. How can we tell the forelimb posture of *Triceratops*?(講演要旨、1 頁)https://cinet.jp/wp/wp-content/uploads/2022/08/Cinet_Abstract_FUJIWARA.pdf | *Triceratops*、*Protoceratops* | **本文**(1 頁の講演要旨の全文) |
| F2009b | Fujiwara, S. 2009. A reevaluation of the manus structure in *Triceratops*. J. Vert. Paleontol. 29: 1136–1147. DOI 10.1671/039.029.0406 | *Triceratops* | **未読**(要旨も取得できず) |
| R2021 | Radermacher, V.J. ほか 2021. A new *Heterodontosaurus* specimen elucidates the unique ventilatory macroevolution of ornithischian dinosaurs. eLife 10: e66036. DOI 10.7554/eLife.66036 | 鳥盤類全般(*Heterodontosaurus* AM 4766) | **本文**(腹肋・胸骨の肋骨・考察の節) |
| S2019 | Słowiak, J., Tereshchenko, V.S. & Fostowicz-Frelik, Ł. 2019. Appendicular skeleton of *Protoceratops andrewsi*… PeerJ 7: e7324. DOI 10.7717/peerj.7324 | *Protoceratops*(角竜類だが Ceratopsidae ではない) | **本文**(胸骨の板の節だけ) |
| 未読 | Maidment & Barrett 2011(Zootaxa 2963: 1–47, *Chasmosaurus belli*)、Mallon & Holmes 2006(Canadian Field-Naturalist 120: 403–412, *Chasmosaurus* の胸骨を含む)、Holmes & Ryan 2013(Kirtlandia 58: 5–37, *Styracosaurus*)、Mallon & Holmes 2010(cf. *Anchiceratops*)、Dodson et al. 2004(*The Dinosauria* 2nd ed., Ceratopsidae)、Campione & Holmes 2006(syncervical) | — | **未読**(H2014 などが引用していることだけ確認) |
| 二次 | Wikipedia "Triceratops"(英語版、2026-10-04 取得) | *Triceratops* | 二次資料。原典(Dodson et al. 2004 と思われる引用名 "Dino2")は未読 |

---

## 2. 椎骨の数と肋骨の対の数

### 2.1 Triceratops

**HML1907(本文、pp.46–48)** — 標本は *T. brevicornus* 型標本 YPM 1834(仙骨の前の椎骨が全部、関節したまま見つかった)。

- Hatcher の椎式: 頸椎 7、胴椎(dorsals)14、仙椎 10、尾椎 不明。腰椎(lumbar)は無い。
- Lull が角括弧で訂正を書き込んでいる: 頸椎を **[8]**、仙骨の前の椎骨の総数を「21 以下」から **[22]** に改めた。
  理由(p.47 脚注、Lull): YPM 1822(*T. prorsus* 型標本)で、Hatcher が環椎(atlas)としたものの前端から 3〜4 mm 後ろに縫合線があり、これが環椎+軸椎(axis)にあたる。
  したがって前方の癒合した頸椎は Hatcher の 3 個ではなく **4 個**(Lull の解釈)。
- 頸と胴の境目は、椎骨そのものより**肋骨の形**で決めている。
  「8 番目 [9 番目] の椎骨の肋骨は疑いなく胸の肋骨で、外へ強く曲がる。6 [7] 番目と 7 [8] 番目の頸の肋骨はまっすぐ」。
  椎骨だけを見ると 9 番目と 10 番目 [10 と 11] の間を境と誤るだろう、とも書いている(肋骨の頭(capitulum)の付く位置が最も大きく変わるのがそこだから)。
- 計算: Lull の訂正に従うと、頸椎 8 + 胴椎 14 = 22(Lull の書いた総数 22 と合う)。

**HML1907(本文、p.59)— 肋骨**

- 「仙骨の肋骨を除き、脊柱のすべての部分に肋骨がある。軸椎から始まり前方の尾椎まで続く」。
  ただし直後の頸の肋骨の節では「環椎 [と軸椎] 以外のすべての頸椎に二頭の頸肋がある」と Lull が角括弧で軸椎を足している。
  さらに p.47 脚注で Lull は、*Monoclonius crassus* の軸椎には第 1 頸肋の関節面があるが **Triceratops には明らかに無い**、と書いている。
  → 資料内で「軸椎に肋骨があるか」が食い違っている(Hatcher の本文=ある、Lull の書き込み=無い)。
- 計算(Lull の訂正に従った場合): 頸の肋骨は頸椎 3〜8 番の 6 対、胴の肋骨は 14 対。

**L1933(本文、p.39)**

- 「仙骨の前の椎骨は 21、仙椎は 10 で Triceratops と一致する」。
  「これまで仙骨の前の椎骨のうち 7 個を頸椎、14 個を胴椎と記載してきたが、Brown は 9 個を頸椎、12 個を胴椎とする」。
- 表では Triceratops の椎式を **頸椎 7–9 / 胴椎 14–12 / 仙椎 10 / 尾椎 45?** と幅で示している(Centrosaurus・Chasmosaurus・Anchiceratops・Pentaceratops も同じ 7–9 / 14–12)。

**B1917(本文)** — 標本は Centrosaurus(AMNH 5351)だが、Triceratops にも触れている。

- 「前方の癒合した頸椎は 3 個。AMNH にある Triceratops の癒合した頸椎も 3 個の区切りしか示さない。Lull が 4 個とした(Monograph p.47)のは誤り」。
  → **癒合した頸椎の数(3 か 4 か)が Lull と Brown で割れている。**

**G1905(HML1907 pp.189–191 所収、本文)— USNM の組み立て骨格(*T. prorsus*、USNM 4842 を基にした合成骨格)**

- 寸法表(頁画像で確認、単位 m): 癒合した 4 個の頸椎の長さ 0.415 / 頸椎全体 0.88 / 胴椎(dorso-lumbar)全体 1.725 / 仙骨 1.10 / 復元した尾 2.41。
- 寸法表の項目名は「4 個の癒合した頸椎」。

**HML1907(本文、p.142)— YPM 1834 *T. brevicornus* の寸法**

- 仙骨の前の椎骨全体の長さ 2,290 mm、胴椎全体 1,490 mm。

**二次資料(Wikipedia)**

- 「頸椎 10、胴椎 12、仙椎 10、尾椎約 45」。癒合した頸椎を 4 個とする見方(Wikipedia は「Hatcher の旧説の復活」と書くが、HML1907 では 4 個説は Lull の脚注にある)に合わせた数だと書いている。原典は確認していない。
- 計算: 10 + 12 = 22 で、仙骨の前の総数は Lull 1907 の 22 と同じ。境目の位置だけが違う。

**まとめ(Triceratops)**: 仙骨の前の椎骨は 21 または 22。胴椎(=胴の肋骨の対の数)は、
境目を「肋骨の形」で決めると 14(HML1907)、「肋骨の頭の付く位置が椎体から神経弓へ上がる所」で決めると 12(Brown の基準。L1933 の表は 14–12 の幅)。
Triceratops で胴椎を 12 と数えた一次資料は、今回は読めていない(Wikipedia が二次資料として 12 と書くだけ)。

### 2.2 他の角竜類(代わりの資料)

| 種・標本 | 頸椎 | 胴椎 | 胴の後ろ〜仙骨 | 資料 |
|---|---|---|---|---|
| Centrosaurus(B1917 の "*M. nasicornus*" AMNH 5351) | 9(前 3 個が癒合) | 12 | 仙椎 10(最前の仙椎に独立した短い肋骨) | B1917 本文 |
| *Styracosaurus albertensis* CMN 344 | 9(癒合 3 + 自由 6) | 12 | 仙骨は残っていない | HRM2005 本文 |
| *Vagaceratops irvinensis* CMN 41357 | 9(癒合 3 + 自由 6) | 12 | dorsosacral 2、仙椎 4、caudosacral 2+ | H2014 本文 |
| *Chasmosaurus belli* ROM 843 | 9 | 12 | dorsosacral 2 | H2014 本文(図 12 の説明) |
| cf. *Anchiceratops* | 10 | 13(仙骨の前) | dorsosacral の数は判定不能 | H2014 が Mallon & Holmes 2010 を引用(原典未読) |
| Pentaceratops(Wiman の解釈) | 9 | 11 | 21 番目の椎骨が仙骨に癒合 | L1933 本文 |

- H2014: 「Centrosaurinae は知られる限り頸椎 9・胴椎 12・dorsosacral 1。これがおそらく角竜類の原始的な数」。Chasmosaurinae では余分な椎骨を持つ個体が少なくとも 3 例ある。
- B1917: 頸と胴の境は「肋骨の頭の関節面が椎体から神経弓へ上がる所」とし、Hatcher & Lull の「肋骨の長さと曲がりで決める」方法に異を唱えた。Centrosaurus で頭の関節面が椎体にある最後の椎骨は 9 番目。

### 2.3 首の肋骨

- **Triceratops(HML1907、本文)**: 後ろの頸の肋骨ほど長いが、まっすぐで曲がらない。薄く平たく先がとがる。付け根は二股に分かれて頭(capitulum)と結節(tuberculum)になり、その切れ込みは胴の肋骨より深い。
- **Centrosaurus AMNH 5351(B1917、本文)**: 肋骨は第 2 頸椎(軸椎)から始まる。第 1 頸肋(軸椎の肋骨)は比較的細い。第 2・3 は頭の合わさる所が広く、前向きの鋭い突起がある。第 4 が頸肋のうち中央部が最も広い。第 5 から先は長くなり、**第 6・7・8 頸肋は肩帯の内側に収まり急に長くなり、第 8 は直後の第 1 胴肋とほぼ同じ長さ**。第 9(第 1 胴肋)は先端が広がり、第 1 の「腹の軟骨の肋骨」(abdominal cartilaginous rib)とつながる。
- **Vagaceratops CMN 41357(H2014、本文)**: 環椎の肋骨の付く所は無い。C3 の肋骨(癒合した頸椎の最後の分節)は、頭と結節を広い骨の膜がつなぎ、前向きの鈍い突起があり、後ろへ短いとがった軸が出る。C4 は後ろ向きの鈍い軸。C7 の軸は C5 よりずっと長い。C7 はほぼまっすぐで先が鈍くとがる。C8 は外下方へゆるく曲がり C7 より明らかに長い。**C9 は太く先端が広がり、生きていたときは胸骨の軟骨へ続いていたと考えられる**。
- **Styracosaurus CMN 344(HRM2005)**: C3〜C9 の肋骨がある(C2 の肋骨はどちらの側も残っていない)。
- **Anchiceratops(L1933、本文、Lull のメモ)**: 8 番目の椎骨が最初の長い肋骨を持つ。8・9 番目の肋骨は頭が椎体に当たる(典型的な頸肋と同じ)。
- **Centrosaurus YPM(L1933、本文)**: 8 番目の椎骨にある最初の長い肋骨は「奇妙な逆向きの曲がり」を持つ。

### 2.4 仙骨のあたりの肋骨(dorsosacral)

- **Triceratops(HML1907、本文 p.51)**: 仙骨は 10 個の椎骨が癒合。最初の 1 個は dorso-sacral(sacro-lumbar)と見るべきで、Marsh は前の 2 個をそう見た。後ろの 4〜5 個は sacro-caudal。第 1 仙椎(dorso-sacral)は短く平たい横突起を持ち、先端が後ろへ曲がって第 2 仙椎の横突起と癒合する。第 1・第 2 仙椎は parapophysis(仙骨の肋骨)を出さない。
- **Centrosaurus AMNH 5351(B1917、本文)**: 最前の仙椎が独立した短い肋骨を持ち、腸骨の下に入る。この肋骨は細く比較的短く、前外方へ伸びる。
  最後の胴肋は先端で前・外・内へ曲がり、腸骨の前端のすぐ前に来る。「これまでの Triceratops の復元(Marsh, Hatcher, Lull)より、最後の 4 本の胴肋はずっと長い。これで胴のこの部分の胴回りは従来の復元より大きくなる」。
- **Vagaceratops(H2014、本文)**: 第 1 dorsosacral(22 番目の椎骨)の肋骨は、頭(capitulum)が無く、結節が横突起に癒合し、背腹に平たい、ほぼまっすぐな刃のような軸が**前外方**へ伸びる。第 2 dorsosacral には肋骨の付く跡が無い(横突起が腸骨の内縁に当たったと考えられるが腸骨が残っていないので未確認)。
  一般論として「角竜類の dorsosacral はふつう独立した肋骨を持たず、外向きのへら形の横突起で腸骨の背内側縁に直接つながる」。この部分の肋骨の形は種や個体で前後にずれうる、と結論している。
- **Chasmosaurus(L1933、本文)**: 最後の仙骨前の肋骨は外下方へ曲がり、腸骨の下を通る(癒合はしない)。その一つ前の肋骨は最後のものよりずっと長く太く、腸骨の前端を避けて前外方へ曲がり、そこから後ろやや内へ曲がる。中ほどで太くなり、後縁に恥骨の前端と付くための平たい粗面がある。Centrosaurus cutleri と YPM の C. flexus に見られる強い後ろ向きの反りは無い。
- **Centrosaurus(L1933、本文)**: 最後の胴肋の曲がりが cutleri と YPM 標本では 180° を超える弧を描き、nasicornus では全く曲がらない。

---

## 3. 肋骨の形

### 3.1 付け根(頭と結節が椎骨のどこに付くか)

**Triceratops(HML1907、本文 pp.50–51)**

- 第 1 胴椎: 横突起は最後の頸椎より長く、断面は三角に近く、より上向きで前後関節突起の高さを越える。結節の関節面はずっと大きく**下外方を向く**(頸椎では前やや外向き)。頭の関節面は横突起の付け根、**椎体の上縁**にある(最後の頸椎と同じ)。
- 第 2 胴椎: 頭の関節面は引き続き椎体の上縁。
- 第 3 胴椎: 頭の関節面が急に**神経弓の側面の高い位置**(前後関節突起の間)へ移る。
- 第 4〜14 胴椎: 頭の関節面はさらに上がり、第 5 で神経弓を離れて**横突起の下面**へ出る。後方の胴椎では横突起の付け根と先端の中ほどに来る。横突起は第 10 あたりまで長く強くなり、そこから後ろは少し細く短くなる。**すべての胴椎に頭と結節の 2 つの関節面があり、肋骨は全部二頭**。
- 肋骨側(p.59): 前方の肋骨は頭と結節が大きく離れる(関節面がそれぞれ横突起の先と椎体の側面にあるため)。後方の肋骨は頭と結節が近い(頭の関節面が横突起の下面の中ほどへ移っているため)。
- G1905 寸法表: **頭から結節までの長さ 0.24 m**(どの肋骨かは書いていない)。

**Vagaceratops(H2014、本文)**: 頸肋は付け根がはっきり二股に分かれるが、胴肋では結節の突起が小さくなり、結節の関節面は肋骨の角(rib angle)の背面にある。前方の胴椎の横突起は脊柱の軸からほぼ 90° に出てやや上向き。後ろへ行くほど後ろ向き・上向きに傾く。

**Chasmosaurus(L1933、本文)**: 最初の肋骨は付け根が独特で、結節の突起がまっすぐな軸と一直線に高く上がり、頭はその下から軸に直角に出る。そのため結節を横突起に合わせようとすると、軸を「とうていありえない角度」で外へ振り出すことになる、と Lull は書いている。後方の肋骨は細く、よく反り、頭の突起は軸と直角にならない。

### 3.2 長さの前後の変化・曲がり

| 種・標本 | 記述 | 資料 |
|---|---|---|
| Triceratops | 胴肋は外へ弓なりに曲がり下へ向かい、胸と腹の一部を囲む。**前方と中ほどの胴肋は太く強く反り、後方は細くまっすぐに近い** | HML1907 本文 p.59 |
| Triceratops(USNM 組み立て骨格) | **最長の肋骨(結節から先端まで、曲がりに沿って)1.45 m**。どの番号の肋骨かは書いていない | G1905(HML1907 p.191 寸法表) |
| Centrosaurus AMNH 5351 | **第 3 胴肋がおそらく最長。ただし第 2〜6 胴肋の長さの差は小さい**。最後の 4 本は前の肋骨より細く、本来の曲がりを保つ(他はつぶれて平たい) | B1917 本文 |
| Vagaceratops CMN 41357 | 頸と胴の肋骨は、**前方は長く比較的まっすぐ → 胸の中ほどで大きく曲がる → 胴の後方で比較的短く強く曲がる**。前の胸が狭く深く、後ろの胸と腹が広く浅いことを反映。「知られるすべての角竜類に共通」(Brown 1917; Lehman 1989; Holmes & Ryan 2013 を挙げる) | H2014 本文 |
| C. irvinensis CMN 41357(Styracosaurus CMN 344 と比較) | **後方の頸肋と最前の胸肋は首(neck)の所で急に下へ折れ、あとはほぼまっすぐ → 肩帯の間の胸は明らかに狭い**。**第 4〜5 胸肋でゆるい曲がりが出て、第 9 胸肋あたりで胸郭は広い樽(broad barrel)になる** | TH2007 本文 |

- **食い違い**: 後方の胴肋について、HML1907 は「細くまっすぐに近い」、H2014 は「短く強く曲がる」、B1917 は Centrosaurus で「最後の 4 本は従来の Triceratops の復元よりずっと長い」と書いている。種も標本も違い、保存の歪みも絡むので、どちらとも決められない。
- 断面: Triceratops の胴肋の断面の形を書いた一次資料は見つからなかった。頸肋は「薄く平たい」(HML1907)。Vagaceratops の dorsosacral 肋骨は「背腹に平たい刃のよう」(H2014)。

### 3.3 胸郭の幅と深さ(実測・寸法)

- **Triceratops USNM 組み立て骨格(G1905、HML1907 p.191 寸法表、頁画像で確認)**
  - 胸郭の幅(Breadth of thorax): **1.15 m**
  - 胸郭の深さ(肋骨の下端まで): **1.525 m**
  - 最長の肋骨: 1.45 m / 頭から結節まで: 0.24 m
  - 仙骨の幅: 0.64 m / 骨盤全体の幅: 1.24 m
  - 肩甲骨+烏口骨の長さ: 1.35 m / 烏口骨だけ: 0.38 m / 烏口骨の幅: 0.39 m
  - 全長(椎体の曲がりに沿って、約): 7.25 m
  - 注意: これは**組み立て骨格の寸法**であり、生体の胸郭の形の実測ではない。Gilmore 本人が「解剖学上の不正確さは組み立てた本人の責任」と断っている。肋骨の角度の誤りの議論は 3.4 節。
- G1905 本文: 「短い体腔、深い胸郭、太い四肢」は組み立てて初めて分かる特徴だと書いている。「最も目立つ特徴は骨盤と後半身の幅の広さ」。
- B1906: USNM 組み立て骨格では烏口骨の先端の間が **33 インチ**、最も近い所で **23 インチ**(Gilmore の提供値)。AMNH 971 の胸骨から推すと烏口骨の先端の間は **28 インチ** になり、「脚は Washington 標本の復元より正中線に近かったようだ」。

### 3.4 胸郭の復元(組み立て骨格)の議論

- **PC2000(要旨)**: ほぼ矢状面の前肢で角竜の骨格を組むときの解剖学上の困難は、前肢そのものではなく、**肋骨と椎骨の関節のさせ方の誤り**から来ている。
- **TH2007(本文、序論)**: Paul & Christiansen 2000 の主張として「肋骨と椎骨の付け方の向きの誤りが、肩甲烏口骨(したがって関節窩の向き)の位置を誤らせている」と紹介している。
- **L1933(本文、Chasmosaurus の節)**: 後方の肋骨を横突起に付けると外へ張り出し、背が平らで腹腔が広くなる。そのため**組み立て骨格は胸が狭く腹が広い**。しかし肋骨は死後の変形を受けやすく、化石の横突起は上や下に曲がっていることがあり、胴の形を生前と大きく変えてしまう。YPM の Centrosaurus の組み立ては平たい胴で腹が全く広くない。「肋骨の今の曲がりを信用しすぎてはいけない」。
- **B1917(本文)**: AMNH 5351 では肋骨が横からつぶれ、最後の 4 本以外は横突起に関節させていない。横突起はかなり持ち上がっている(異常に)。
- **HRM2005(本文)**: *Styracosaurus* CMN 344 の組み立てでは、**石膏の椎骨 1 個とガラス繊維の肋骨 1 対が、第 4 と第 5 胸椎の間に理由不明のまま挿入されていた**。「そのような追加の根拠は我々の知る限り無い」。→ 組み立て骨格の肋骨の本数を写すと誤る実例。
- **H2014**: CMN 41357 は背腹方向につぶれており、肋骨のほとんどが折れ、遠位端は本来の位置から少し外下方へずれている(ただし相互の位置関係は保たれている)。

---

## 4. 胸骨

### 4.1 Triceratops の胸骨の板(唯一読めた一次記載: AMNH 971)

**B1906(本文・図)** — Hell Creek(Montana)産、AMNH 971。下顎・腸骨・仙骨・椎骨 7・**肋骨 12**・肩甲骨・上腕骨・尺骨・橈骨・恥骨・**胸骨 2 枚**。他の個体の骨は混じっていない。「角竜類で骨化した胸骨が見つかった最初の標本」。

- **左右 1 対、細長く、左右対称**(つぶれによる歪みを除く)。
- 一端はとがって細まり、先が膨らみ粗面になり(粗面は内臓側に広い)、板の本体から離れて立つ。
- 反対の端は厚く、外角が粗面。内縁へ向かって急に薄くなる。
- **内縁はとても薄く、ほぼまっすぐ**(左右が正中で合わさる縁)。内縁の薄い海綿質の部分は腐っており、石膏で復元してある。
- **外縁は厚く、滑らかで、わずかに凹む**。
- 腹側(外側)の面は左右方向に**凸**、背側(内臓側)の面は**凹**。どちらも滑らか。
- 内臓側の広い端の近くに深い切れ込み(孔か靭帯の付着)。
- 向き(Brown の解釈): **とがった端を前にし、その先端が烏口骨の曲がった末端部に付く**。薄い内縁同士を正中で合わせると、そこで体腔の幅と烏口骨の位置がほぼ決まる。
- 左右の内縁は**癒合していない**(ジュラ紀の竜脚類の胸骨のような、軟骨で固く結ばれた長くまっすぐな粗い内縁ではない)。
- 外側 3 分の 1 が厚く主な強度を担う。外縁は一様に滑らかで、**横から軟骨の肋骨が付いた跡は無い**。肋骨の付着は**板の後端**にあり、厚い後端が肋骨の付着のために区切られて見える。剣状突起(xiphisternum)は介さず直接付いたと考えている。
- 前の深い切れ込み(anterior emargination)は鎖間骨(interclavicle)の存在を示す、と Brown は推測している(角竜類では鎖骨・鎖間骨は確かには見つかっていないと本人が断っている)。
- **寸法**: 長さ **580 mm**(23 in)/ 中央の横幅 **220 mm** / 薄い内縁の厚さ **8 mm** / 烏口骨の付く所での左右合わせた幅 **660 mm**(26 in)。
- **図**: Fig. 1(腹側の写真)では、各板は前端が細く後ろへ広がり、外縁が凹んで弓なりに反った形に見える(図からの観察。Brown は形の名前を付けていない)。Fig. 2 は板の後縁に軟骨の肋骨を線で描き足した復元図。

**H2014(本文)**: 胸骨の板が記載されている角竜類は少ない — Centrosaurus(Brown 1917; Lull 1933)、Styracosaurus(Holmes & Ryan 2013)、Chasmosaurus(Mallon & Holmes 2006)、**Triceratops(Brown 1906)**。
Vagaceratops の胸骨は Centrosaurus・Styracosaurus・**Triceratops(Brown 1906)** と比べてとても幅が広い。「胸骨の板の周縁はおそらく軟骨で延びていたので、骨化した部分からの全体の大きさと形の推定は近似にとどまる」。

**HML1907(本文 p.58)**: 「鎖骨も胸骨もまだ見つかっていない。だが胸骨があった可能性は高い」。烏口骨の後下角の厚みを胸骨があったしるしと見ている。B1917 は、B1906 の論文が Monograph の著者に見落とされていたと書いている。

Triceratops の胸骨の板の標本番号として今回確認できたのは **AMNH 971 だけ**。他の標本は見つからなかった。

### 4.2 他の角竜類の胸骨の板

**寸法(L1933 p.53 の表、頁画像で確認、単位 mm)**

| | C. flexus YPM 2015 左 | 同 右 | C. nasicornus AMNH 5351 | C. cutleri AMNH 5427 | Triceratops AMNH 971 |
|---|---|---|---|---|---|
| 長さ | 318 | 354 | 330 | 450 | 580 |
| 最大幅(前端 proximal) | 129 | 107 | 110 | 110 | — |
| 最大幅(後端 distal) | 159 | 140 | 160 | 180 | 220(中央) |

(C. = Centrosaurus、L1933 の表記。AMNH 5351 の値は B1917 の寸法表 330 / 後端 160 / 前端 110 と一致。)

- **Centrosaurus AMNH 5351(B1917、本文)**: 「Triceratops の胸骨とは大きさだけが違う」。広く平たい 2 枚の板。外縁が厚く、内縁は相手と合わさるため薄い。**前端は外縁で厚くなり、烏口骨の突起と関節する**。後端は厚く、腹側面に**軟骨の肋骨の付く刻み**がある。背側面は平ら、腹側面には外縁近くを前後に走る低い稜。中間の軟骨要素はおそらく無かった。烏口骨は「胸骨と関節する長くとがった突起で終わる」。
- **C. cutleri AMNH 5427(B1917・L1933)**: 胸骨の板は本来の位置より後ろへずれて見つかった。nasicornus より明らかに長く、前が細く後ろが広い。
- **C. flexus YPM 2015(L1933)**: 左右は形・色・見た目が大きく違い、対かどうか疑わしい。左は短く内縁が凹む(薄いので欠けた可能性)、右は長く細く凹みが無い。B1917 の言う刻みは見えない。
- **Vagaceratops CMN 41357(H2014、本文)**: 胸骨の板はほぼ本来の位置で保存。腹側面に、厚い外縁と平行する低く広い縦の稜(Centrosaurus と同様)。背側面はわずかに凹む。**前縁は曲がり、烏口骨の後縁と関節するための粗面がある**。外縁は後端に向かって強く外へ曲がり、とても幅の広い胸骨になる。**厚く曲がった後縁に、肋骨の軟骨が付いたと考えられる細かい刻み(crenulations)が並ぶが、個々の付着点は特定できない**。
- **Styracosaurus CMN 344(HRM2005)**: 右の胸骨の板は完全で歪みが無い(本文)。Plate 22 に腹・外・内・背の 4 方向の写真(縮尺棒 5 cm)。**図**: 細長く、一方の長い縁が凹んだ弓なりの板で、横から見ると薄い(図からの観察)。
- **Protoceratops andrewsi(S2019、本文)** — Ceratopsidae ではない: 外縁に広くはっきりした切れ込み、後縁は前縁よりとがる、内縁の前と後ろは凸。Protoceratops は内縁に凹みを持つ点で他の Ceratopsidae 以外の角竜類と違う。

**形の名前について**: 「腎臓形」「へら形」と形容した一次資料は今回読んだ範囲には無かった。書かれているのは「対・細長い・平たい・外縁厚く内縁薄い・前端が烏口骨と関節・後端が厚く軟骨の肋骨が付く」まで。

### 4.3 胸骨の肋骨(sternal ribs)は骨化していたか

- 角竜類(Ceratopsidae)で**骨化した胸骨の肋骨を記載した資料は見つからなかった**。読んだ資料はすべて「軟骨の肋骨」として扱っている。
  - B1906: Fig. 2 の題 "restoration of the cartilaginous ribs in outline"(軟骨の肋骨を線で復元)。
  - B1917: 胸骨の後端の刻みは「軟骨の肋骨の付着」、第 1 胴肋の先端は「第 1 の腹の軟骨の肋骨(abdominal cartilaginous rib)とつながる」。
  - H2014: C9・D1・D2 の肋骨は先端が広がり、「生きていたときは胸骨の軟骨(sternal cartilage)へ続いていた」と考えられる。**D3〜D12 は先が細るか広がらずに鈍く終わるので、胸骨の軟骨へ続いたものは無い**。
- R2021(本文、鳥盤類全般): Genasauria では胸骨の肋骨は「大きく単純化されるか失われる。ある場合は胸骨との間が可動の関節ではなく広い突き合わせの関節になる」。さらに派生した鳥盤類では「胸骨の板は、ある場合でも比較的小さく、胴の肋骨とのやりとりの跡を示さない」。骨化した胸骨の肋骨の例として Thescelosaurus・Nanosaurus を挙げる(角竜類の例は挙げていない)。

---

## 5. 腹肋(gastralia)

- **R2021(本文)**: *Heterodontosaurus* AM 4766 の腹肋の一揃いが「鳥盤類で最初に見つかったもの」。腹肋は早期に分岐した鳥盤類の間で失われたようで、Genasauria では cuirassal breathing の仕組みはもう無い。深く入れ子になった鳥盤類(図 8D、派生した角竜類を含む)でも腹肋は無いまま。
  → **角竜類に腹肋は無い**とする記述は R2021 の系統の一般論として書かれている。角竜類の個別標本で腹肋の有無を調べた記述は、R2021 の本文には無かった。
- HML1907 と L1933 の OCR 本文を "gastral" "abdominal rib" で検索したが該当は無かった(B1917 の "abdominal cartilaginous rib" は胸骨の軟骨の肋骨を指しており、腹肋ではない)。
- 角竜類の標本で腹肋を報告した資料は**見つからなかった**。

---

## 6. 肩帯と胸郭の関係

- **F2018(要旨)**: 現生のカメ以外の四足動物では、肩甲骨(上肩甲骨)の上端は**胸郭の前部、脊柱より上、正中面の近く**にある。この位置で、胴の左右の傾き(roll)とねじれ(yaw)のモーメントが無視できるほど小さくなり、持ち上げるための縦の回転(pitch)のモーメントが十分大きく、縦の圧縮に強い肋骨の上に来る。
- **F2009a(要旨)**: 四足動物では胴は前肢の間に前鋸筋で吊られ、前鋸筋は「胸の」肋骨の外側から起こり肩甲骨の肋骨面の近位部に付く。前鋸筋の付く肋骨は他の肋骨より圧縮に強い。二足動物ではこの対応が無い。→ 強い肋骨の位置が肩甲骨の位置の手がかりになる。Triceratops に当てはめた数値は要旨には無い。
- **F2022(本文、講演要旨)**: 肩甲骨は胸郭と直接つながらない。現生の四足動物はみな肩甲骨を正中近く・胸郭の前部の上に置く。肩甲骨の下の肋骨は縦の圧縮に比較的強い。「Triceratops は直立・矢状面の前肢、Protoceratops は這う姿勢だったらしい。Triceratops の肘の角度は立っているとき 130〜140° に保たれたらしい。ただし**両者とも肩甲骨の位置は現生の四足動物と同じだっただろう**」。
- **FH2012(要旨)**: 肘の筋のモーメントアームの指標で、Triceratops は直立・矢状面の前肢の動物に分類される。
- **TH2007(本文、C. irvinensis の半分の模型)**: 烏口骨の内縁を正中近くに置き、胸郭と肩甲骨が最もよく合う位置を試行錯誤して決めた。後方の頸肋と最初の数本の胸肋は首で急に曲がり軸がほぼまっすぐなので、**胸郭の前部はかなり狭い。そのため肩甲骨は矢状面から後ろへわずかに開くだけで、関節窩は主に後ろを向き、わずかに外を向く**。上腕骨の内側結節は第 9 頸肋のすぐ前に来る。胸郭の復元には第 9 頸肋、第 2・5・7・9 胸肋の形を銅線で写し、Styracosaurus CMN 344 の脊柱の曲がりに合わせて固定した。
- **B1906(本文)**: 胸骨のとがった前端の膨らみが烏口骨の曲がった末端部に付く。左右の胸骨の内縁を正中で合わせ、各側に軟骨の結合分として 1 インチずつ見込むと、烏口骨の先端の間は 28 インチ。
- **B1917(本文)**: 肩帯は肩甲骨・烏口骨・平たい胸骨の板 2 枚から成る。AMNH 5351 では左の肩甲骨と烏口骨を見つかったときの位置のまま残してある。本来より少し下にずれた可能性はあるが、**左右の水平方向の相対位置は保っており、胸の形を決めている**。
- **H2014(本文)**: Vagaceratops では両方の肩甲骨が本来の位置に残り、烏口骨は体がつぶれたとき体の下へ折れ込んだ。胸骨の板はほぼ本来の位置。
- HML1907(本文): 烏口骨の前縁と下縁は内側へ曲がり、ほぼ半円を描く。後下角が厚い。

---

## 7. 観察に使える画像(使用許諾が明記されたもの)

Wikimedia Commons の API で許諾と作者を確かめた(2026-10-04)。

| ファイル名 | 写っているもの | 許諾 | 作者 | URL |
|---|---|---|---|---|
| The Ceratopsia (Plate XLIX) BHL39876010.jpg | Triceratops、USNM の組み立て骨格(1905 年組み立て)の側面と斜め後ろ。肋骨と肩帯が見える | Public domain | Hatcher, Lull, Marsh, Osborn(1907 年刊) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(Plate_XLIX)_BHL39876010.jpg |
| The Ceratopsia (1907) (20562801176).jpg | HML1907 の椎骨列の図(縮尺 1/16 の表示がある)。胴椎の横突起と頭の関節面の位置の変化を見られる | No restrictions(Internet Archive Book Images) | Hatcher ほか(1907) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(1907)_(20562801176).jpg |
| The Ceratopsia (1907) (19966440684).jpg | 癒合した頸椎の側面図(区切り I〜IV の表示、縮尺 1/4、R.S.L. の署名)。Lull の「4 個説」の図 | No restrictions | Hatcher ほか(1907) | https://commons.wikimedia.org/wiki/File:The_Ceratopsia_(1907)_(19966440684).jpg |
| Triceratops front view.jpg | 組み立て骨格(説明文: Smithsonian)の正面、2005 年撮影。胸の下に板状の骨が左右 2 枚見える(写真からの観察。説明文に胸骨の記載は無い) | CC BY-SA 3.0 | Quadell | https://commons.wikimedia.org/wiki/File:Triceratops_front_view.jpg |
| Triceratops side view.jpg | 同じ組み立て骨格の側面 | CC BY-SA 3.0 | Quadell | https://commons.wikimedia.org/wiki/File:Triceratops_side_view.jpg |
| Triceratops side view left.jpg | 上の左右反転の派生物 | CC BY-SA 3.0 | Quadell(派生: Dewaere) | https://commons.wikimedia.org/wiki/File:Triceratops_side_view_left.jpg |
| Triceratops Struct.jpg | Triceratops の組み立て骨格の斜め前(撮影地は説明文に無い)。胸郭の側面が見える | CC BY-SA 3.0 | Yosemite | https://commons.wikimedia.org/wiki/File:Triceratops_Struct.jpg |
| Triceratops horridus - Cleveland Museum of Natural History (34800619235).jpg | T. horridus のキャスト(説明文による)の側面 | CC BY-SA 2.0 | Tim Evanson | https://commons.wikimedia.org/wiki/File:Triceratops_horridus_-_Cleveland_Museum_of_Natural_History_(34800619235).jpg |
| Triceratops sp. (Hell Creek Formation, Upper Cretaceous; Montana, USA).jpg | Triceratops sp. の肋骨 1 本の写真(説明文による) | CC BY 2.0 | James St. John | https://commons.wikimedia.org/wiki/File:Triceratops_sp._(Hell_Creek_Formation,_Upper_Cretaceous;_Montana,_USA).jpg |
| Sharp naturalhistory1920 monoclonius.jpg | "Monoclonius nasicornis" の骨格(説明文による。B1917 の AMNH のパネル標本と思われるが説明文には標本番号が無い) | Public domain | Barnum Brown | https://commons.wikimedia.org/wiki/File:Sharp_naturalhistory1920_monoclonius.jpg |
| Centrosaurus in Munich Palaeontology Museum.jpg | Centrosaurus の組み立て骨格(Munich) | CC0 | ArticCynda | https://commons.wikimedia.org/wiki/File:Centrosaurus_in_Munich_Palaeontology_Museum.jpg |
| Protoceratops sternal plates.png | Protoceratops の胸骨の板の写真と、基盤的な角竜類の胸骨の輪郭(S2019 Fig. 5) | CC BY 4.0 | Słowiak, Tereshchenko & Fostowicz-Frelik | https://commons.wikimedia.org/wiki/File:Protoceratops_sternal_plates.png |

Commons 以外で、許諾の扱いがはっきりしているもの:

| 資料 | 写っているもの | 扱い | URL |
|---|---|---|---|
| B1906 Fig. 1 / Fig. 2 / Pl. XL | Triceratops AMNH 971 の胸骨の板(腹側の写真)、軟骨の肋骨の復元図、USNM 組み立て骨格の正面 | 1906 年刊(archive.org の当該資料) | https://archive.org/details/bulletin-american-museum-natural-history-22-297-300 |
| B1917 Fig. 3 | Centrosaurus の胸骨の板と軟骨の付着(腹側) | 1917 年刊 | https://archive.org/details/bulletin-american-museum-natural-history-37-281-306 |
| L1933 Fig. 20 | Centrosaurus flexus YPM 2015 の胸骨の板(腹側、1/6) | archive.org の表示: "No known copyright restrictions as determined by scanning institution" | https://archive.org/details/revisionofcerato33lull |
| HRM2005 Plates 13–19, 22 | Styracosaurus CMN 344 の肋骨 C3〜T12 の 1 本ずつの前後面、右の胸骨の板の 4 方向 | archive.org の表示: "Permission to digitize granted by the rights holder"(再利用の許諾は書かれていない) | https://archive.org/details/photographicatla00holm |
| H2014 Fig. 2, 7, 10, 13, 15 | Vagaceratops の肋骨の配置図、肋骨 C7〜D12、胸骨の板の内外面 | CC BY-NC-ND 3.0(改変不可・非営利) | DOI 10.18435/B5159V |
| TH2007 | C. irvinensis の肩帯と胸郭の模型の写真 | Palaeontologia Electronica(許諾の表記は確認していない) | https://palaeo-electronica.org/2007_1/step/step.pdf |

上面(背側から見た)の胸郭の写真で許諾が明記されたものは、見つからなかった。

---

## 8. 模型への申し送り(資料で裏付いた点だけ)

### 肋骨の対の数

- **割れている。** Triceratops の一次資料(HML1907、Lull の書き込み込み)は頸椎 8・胴椎 14(仙骨の前 22)。境目を肋骨の頭の位置で決める Brown の基準だと頸椎 9・胴椎 12(Centrosaurus で実証、B1917)。L1933 は Triceratops を「頸 7–9 / 胴 14–12」と幅で示す。
  - 模型に入れてよい値: **胴の肋骨 12〜14 対**(Triceratops の一次資料の値は 14、他の角竜類の関節した標本 3 体(Centrosaurus AMNH 5351、Styracosaurus CMN 344、Vagaceratops CMN 41357)はすべて 12)。
  - どちらを採るかは資料では決まらない。採った方と根拠を模型の側に書いておくこと。
- 首の肋骨: Triceratops では頸椎 3〜8 の 6 対(HML1907、Lull の書き込みに従った計算)。他の角竜類では C3〜C9 の 7 対(H2014、HRM2005)、Centrosaurus は軸椎から 8 対(B1917)。軸椎の肋骨は Triceratops には無い(L1933 の書き込み、HML1907 p.47 脚注)。
- 仙骨の前の最後の椎骨の肋骨・dorsosacral の肋骨は個体差がある(H2014)。Centrosaurus は最前の仙椎に細く短い肋骨が 1 対(B1917)。

### 最も長い肋骨の位置

- Triceratops で番号を特定した資料は**見つからなかった**。USNM の組み立て骨格の最長の肋骨は 1.45 m(曲がりに沿って、G1905)。
- 代わりの資料: Centrosaurus AMNH 5351 で **第 3 胴肋がおそらく最長、第 2〜6 胴肋は長さの差が小さい**(B1917)。
- 頸肋は後ろほど長く、Centrosaurus では第 8 頸肋が第 1 胴肋とほぼ同じ長さ(B1917)。

### 肋骨の形

- 前方: 首で急に下へ折れ、軸はほぼまっすぐ(TH2007、C. irvinensis)。胸の前部は狭い。
- 第 4〜5 胸肋でゆるく曲がり始め、第 9 胸肋あたりで広い樽形(TH2007)。
- 前方と中ほどは太く強く反る(HML1907、Triceratops)。
- 後方: 「細くまっすぐに近い」(HML1907、Triceratops)と「短く強く曲がる」(H2014、Vagaceratops)で**割れている**。Centrosaurus の最後の胴肋は前・外・内へ曲がり、腸骨の前端のすぐ前に来る(B1917)。
- 付け根: すべて二頭。頭の関節面は胴椎 1〜2 で椎体の上縁、3 で神経弓、5 以降は横突起の下面、後方では横突起の中ほど(HML1907)。前方ほど頭と結節が離れる。頭〜結節 0.24 m(G1905、番号不明)。
- 横突起: 前方の胴椎ではほぼ 90° に出てやや上向き、後ろほど後ろ向き・上向き(H2014、Vagaceratops)。Triceratops では第 10 胴椎あたりまで長く強くなり、その後短くなる(HML1907)。
- 胸骨の軟骨へ続くのは前の数本だけ: Vagaceratops で C9・D1・D2(H2014)。Centrosaurus で D1 の先端が広がる(B1917)。
- 胸郭の寸法(USNM 組み立て骨格、生体の値ではない): 幅 1.15 m、深さ(肋骨の下端まで)1.525 m(G1905)。組み立て骨格の肋骨の角度は誤りうる(PC2000 要旨、L1933)。

### 胸骨の板の形と位置

- **左右 1 対、癒合しない**(B1906、B1917、H2014)。
- Triceratops AMNH 971: **長さ 580 mm、中央の幅 220 mm、内縁の厚さ 8 mm、左右合わせた幅(烏口骨の付く所)660 mm**(B1906)。
- 形: 細長く平たい。外縁は厚く滑らかでわずかに凹む。内縁は薄くほぼまっすぐ(左右が正中で向き合う)。腹側面は左右に凸、背側面は凹。前端はとがって細まる。後端は厚い(B1906)。腹側面に外縁と平行な低い縦の稜(B1917 Centrosaurus、H2014 Vagaceratops)。
- 位置: **前端が烏口骨の末端(Centrosaurus では烏口骨の「長くとがった突起」)と関節する**(B1906、B1917)。Vagaceratops では曲がった前縁が烏口骨の後縁と関節する(H2014)。**軟骨の肋骨は後端(後縁)に付く。外縁には付かない**(B1906、B1917、H2014)。
- 骨化した部分の周りは軟骨で延びていたと考えられ、骨の輪郭がそのまま生体の胸骨の輪郭とは限らない(H2014)。
- 胸骨の肋骨(sternal ribs)は骨化していない扱い(軟骨)。模型で骨として出すかどうかは模型の方針で決めること(資料は「軟骨」としか言っていない)。
- 腹肋は付けない(R2021 の系統の一般論。角竜類の標本で腹肋を報告した資料は見つからなかった)。

### 肩甲骨の置き方

- 肩甲骨の上端は胸郭の前部、脊柱より上、正中の近く(F2018 要旨の現生動物の一般則。F2022 は Triceratops もこれと同じだっただろうと書く)。
- 胸の前部が狭いので、肩甲骨は矢状面から後ろへわずかに開くだけ、関節窩は主に後ろを向く(TH2007、C. irvinensis)。
- 左右の烏口骨の先端の間: USNM 組み立て骨格で 33 in、AMNH 971 の胸骨から推した値は 28 in(B1906)。

### 未解決(資料が見つからなかった・読めなかった)

- Triceratops の胴肋の 1 本ずつの長さ・断面の形。
- Triceratops で最長の肋骨の番号。
- Triceratops の胸骨の板の他の標本(AMNH 971 以外)。
- Maidment & Barrett 2011(Chasmosaurus belli の胸骨・肋骨)、Mallon & Holmes 2006(Chasmosaurus の胸骨)、Holmes & Ryan 2013(Styracosaurus の本文の記載)、Fujiwara 2009 JVP は未読。
- 胸郭を上から見た写真で許諾が明記されたもの。
