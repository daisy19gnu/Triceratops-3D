# トリケラトプスの頭骨と歩き方の資料(3D モデル作り直し用)

調査日: 2026-10-04(JST)。調査はウェブ上で本文を読めた資料に限る。
書き方の約束:

- 数値には **標本番号・測定の定義・出典の該当箇所** を付ける。定義が出典に無い場合は「定義の記載なし」と書く。
- 各資料について **書いてあること / 書いていないこと** を分ける(下の「0. 資料の一覧」と、各項目の「未確認」欄)。
- 本文を読めなかった資料は「要旨のみ」「未読」と明記する。要旨だけの資料から細部を補わない。
- Hatcher ほか 1907 の数値は archive.org の OCR テキストから採った。OCR が崩れて項目名が読めない行は **採らなかった**。
- 標本の分類(T. horridus / T. prorsus / 旧種名)は出典の表記のまま書く。旧種名の現在の帰属は、本調査で確かめたものだけを書く。

---

## 0. 資料の一覧(読めた範囲)

| 略号 | 資料 | 読めた範囲 | 書いてあること(主なもの) | 書いていないこと |
|---|---|---|---|---|
| HML1907 | Hatcher, Marsh & Lull 1907. *The Ceratopsia*. USGS Monograph 49. https://archive.org/details/ceratopsia00hatc (OCR 本文 https://archive.org/download/ceratopsia00hatc/ceratopsia00hatc_djvu.txt) | 全文(OCR) | 型標本の頭骨の実測表、歯の並びと咬み合わせ、YPM 1822 の形の記載 | 体の全長・体重、歩き方 |
| G1905 | Gilmore 1905. The mounted skeleton of Triceratops prorsus. Proc. USNM 29(1426):433 以降。 https://archive.org/details/biostor-79027 | 全文(OCR) | 最初の組み立て骨格(USNM 4842 ほかの合成)の全長・頭骨長・仙骨の高さ、前あしの組み方 | 頭骨の部品ごとの寸法 |
| HG2006 | Horner & Goodwin 2006. Major cranial changes during Triceratops ontogeny. Proc. R. Soc. B 273:2757–2761. https://pmc.ncbi.nlm.nih.gov/articles/PMC1635501/ | 本文(取得ツール経由) | 成長段階 10 頭骨の表(Table 1)、目の上の角の向きの変化、縁後頭骨の形の変化 | 頭骨長の測定の定義、縁後頭骨の鱗状骨/頭頂骨ごとの数 |
| S2014 | Scannella et al. 2014. Evolutionary trends in Triceratops from the Hell Creek Formation. PNAS 111:10245–10250. https://pmc.ncbi.nlm.nih.gov/articles/PMC4104892/ | 本文(取得ツール経由) | T. horridus と T. prorsus の違い、角芯長/基底頭骨長の比 | 「基底頭骨長」の定義(本文で確認できず)、個々の標本の実測表(補足資料にある旨) |
| LF2012 | Longrich & Field 2012. Torosaurus is not Triceratops. PLoS ONE 7:e32623. https://doi.org/10.1371/journal.pone.0032623 | 全文(Europe PMC) | 頭頂骨の縁の骨(epiparietal)が 5〜7 個、成体で縁の骨・上頬骨・吻骨が癒合、T. prorsus の特徴 3 つ | 頭骨各部の寸法表 |
| SK2020 | Sakagami & Kawabe 2020. Endocranial anatomy of the ceratopsid dinosaur Triceratops. PeerJ 8:e9888. https://doi.org/10.7717/peerj.9888 | 全文(Europe PMC) | 内耳の向きから推定した頭の構え(基底頭蓋軸が水平から約 45° 下向き)、後頭顆面積からの頭骨長の推定式 | 首の可動域 |
| E2015 | Erickson et al. 2015. Wear biomechanics in the slicing dentition of Triceratops. Sci. Adv. 1:e1500055. https://pmc.ncbi.nlm.nih.gov/articles/PMC4640618 | 本文(取得ツール経由) | 「高い角度の切断型の歯列」、使用で垂直な切断面ができる | あごの動き(上下・前後・左右)の具体的な記述 |
| MA2014 | Mallon & Anderson 2014. The functional and palaeoecological implications of tooth morphology and wear for the megaherbivorous dinosaurs from the Dinosaur Park Formation. PLoS ONE 9:e98605. https://doi.org/10.1371/journal.pone.0098605 | 全文(Europe PMC) | 角竜類の歯の電池の構造、咀嚼の向き(orthopalinal + ときどき前後) | Triceratops 自体の微細な傷の測定(対象は Campanian の角竜類) |
| V2016 | Varriale 2016. Dental microwear reveals mammal-like chewing in Leptoceratops. PeerJ 4:e2132. https://doi.org/10.7717/peerj.2132 | 全文(Europe PMC) | 角竜類の歯は 1 本に 1 つのほぼ垂直な咬合面、Triceratops の前後運動説の経緯 | Triceratops の測定(対象は Leptoceratops) |
| TH2007 | Thompson & Holmes 2007. Forelimb stance and step cycle in Chasmosaurus irvinensis. Palaeontologia Electronica 10(1). https://palaeo-electronica.org/2007_1/step/step.pdf | 全文(PDF) | 前あし 1 周期 8 姿勢の関節角度の表(Table 1)、足跡との照合の方法 | 後ろあし、四肢の運びの順序、速度 |
| SR2015 | Senter & Robins 2015. Resting orientations of dinosaur scapulae and forelimbs. PLoS ONE 10:e0144036. https://doi.org/10.1371/journal.pone.0144036 | 全文(Europe PMC) | 角竜類の肩甲骨の傾き 55°(仙骨の長軸に対して、n=4)、T. horridus BHI 126406 で 65° | 角竜類の肘・手首の角度(標本不足で空欄) |
| SM2023 | Senter & Mackey 2023. Forelimb motion and orientation in Styracosaurus and Thescelosaurus. Palaeontologia Electronica 26(3):a41. https://doi.org/10.26879/1289 | 要旨・要点(取得ツール経由) | 歩くときは肘を体側に寄せる、手のひらは内向き、肘を張ることもできた | 数値(要旨では未確認) |
| VB2013 | VanBuren & Bonnan 2013. Forearm posture and mobility in quadrupedal dinosaurs. PLoS ONE 8:e74842. https://doi.org/10.1371/journal.pone.0074842 | 全文(XML) | 角竜類は前腕の回内がほぼできない、橈骨と尺骨は平行 | 手の向きの角度 |
| F2009 | Fujiwara 2009. A reevaluation of the manus structure in Triceratops. JVP 29:1136–1147. https://doi.org/10.1671/039.029.0406 | **要旨のみ**(OpenAlex) | NSM PV 20379 で手は半回外、中手骨の並びは近位から見て L 字 | 本文の角度・寸法 |
| FH2012 | Fujiwara & Hutchinson 2012. Elbow joint adductor moment arm as an indicator of forelimb posture. Proc. R. Soc. B 279:2561–2570. https://doi.org/10.1098/rspb.2012.0190 | **要旨のみ**(Europe PMC) | Triceratops は「直立・矢状面で動く」群に分類 | 本文の数値 |
| D2023 | Dempsey et al. 2023. Convergent evolution of quadrupedality in ornithischian dinosaurs was achieved through disparate forelimb muscle mechanics. Proc. R. Soc. B 290:20222435. https://doi.org/10.1098/rspb.2022.2435 | 全文(Europe PMC) | Chasmosaurus と Triceratops で肘の内転モーメントアームが大きい(肘を張る姿勢を支持しうる) | 姿勢の角度の結論 |
| PC2000 | Paul & Christiansen 2000. Forelimb posture in neoceratopsian dinosaurs. Paleobiology 26:450–465. https://doi.org/10.1666/0094-8373(2000)026%3C0450:FPINDI%3E2.0.CO;2 | **要旨のみ**(Crossref) | 手は肩関節の真下、手の跡は外向き、肘は少しだけ外へ、最高速はゾウより速くサイ並み | 本文の数値 |
| LH1995 | Lockley & Hunt 1995. Ceratopsid tracks ... Laramie Formation. JVP 15:592–614. https://doi.org/10.1080/02724634.1995.10011251 | **要旨のみ**(OpenAlex) | 足跡化石 Ceratopsipes goldenensis。這う姿勢の説は誤り | 足跡の寸法・歩幅(本文未読) |
| M2012 | Maidment et al. 2012. Limb-bone scaling indicates diverse stance and gait in quadrupedal ornithischian dinosaurs. PLoS ONE 7:e36904. https://doi.org/10.1371/journal.pone.0036904 | 全文(Europe PMC) | 角竜類は足をハドロサウルス類より外側(腰の下)に置いた可能性 | 速度 |
| H2010 | Holliday et al. 2010. Cartilaginous epiphyses in extant archosaurs and their implications for reconstructing limb function in dinosaurs. PLoS ONE 5:e13120. https://doi.org/10.1371/journal.pone.0013120 | 全文(Europe PMC) | Triceratops の後肢長と、フルード数 1(遅い走り)での速度 4.22〜4.44 m/s(Table 4) | 歩きの速度 |
| H2021 | Hutchinson 2021. The evolutionary biomechanics of locomotor function in giant land animals. J. Exp. Biol. 224:jeb217463. https://doi.org/10.1242/jeb.217463 | 全文(Europe PMC) | 走れたかをめぐる説の経緯(Alexander、Paul & Christiansen、その後の疑問) | Triceratops の新しい速度推定 |
| T2026 | Theurer et al. 2026. Morphology and articular configuration of the ceratopsid lower hindlimb. PLoS ONE. https://doi.org/10.1371/journal.pone.0353362 | 全文(Europe PMC) | 角竜類(種不明、UALVP 42)の足の指の式 2-3-4-5-0、趾行の復元 | Triceratops の標本 |
| B2025 | Bell et al. 2025. A ceratopsid-dominated tracksite from the Dinosaur Park Formation. PLoS ONE. https://doi.org/10.1371/journal.pone.0324913 | 全文(Europe PMC) | 角竜類の後ろ足の跡の寸法(Table 1) | 手の跡(見つかっていない)、Triceratops(時代も産地も違う) |
| M2013 | Mallon et al. 2013. Feeding height stratification among the herbivorous dinosaurs from the Dinosaur Park Formation. BMC Ecol. 13:14. https://doi.org/10.1186/1472-6785-13-14 | 全文(Europe PMC) | 角竜類の最大採食高は 1 m をやや超える程度、口の高さは肩関節とほぼ同じ | Triceratops(対象外) |
| GO2006 | Goussard 2006. The skull of Triceratops in the palaeontology gallery, MNHN Paris. Geodiversitas 28(3):467–476. 図 3 の記録 https://zenodo.org/records/5375417 | **図の説明文のみ** | MNHN 1912.20 の左側面図の部位の略号(前眼窩窓 Antf、外鼻孔 ExN、下側頭窓 Ltf など) | 本文・寸法 |
| W | Wikipedia "Triceratops" https://en.wikipedia.org/wiki/Triceratops | 入口として使用 | 全長・体重、歯の位置数、最大頭骨長(出典つき) | (出典の論文の多くは本調査で未読) |

未読(題名と所在だけ確認したもの): Ostrom 1964 "A functional analysis of jaw mechanics in the dinosaur Triceratops"(Postilla 88、BHL https://www.biodiversitylibrary.org/part/83238 。取得が Cloudflare に止められた)/ Ostrom 1966(Evolution 20:290–308)/ Forster 1996 "Species resolution in Triceratops"(JVP 16)/ Scannella & Horner 2010(JVP 30)/ Johnson & Ostrom 1995 / Dodson et al. 2004(The Dinosauria 2nd ed.)/ Nabavizadeh 2023(Anat. Rec.、要旨のみ)/ Nabavizadeh 2015(Anat. Rec.、要旨のみ)/ Bell, Snively & Shychoski 2009(Anat. Rec.、要旨のみ)。

---

## A. 頭骨の部品ごと

### A-0. 頭骨全体の長さと、体に対する比

| 値 | 標本 | 測定の定義 | 出典 |
|---|---|---|---|
| 1,934 mm | USNM 1201(T. elatus の型標本として記載) | 「Greatest length of skull」(頭骨の最大長) | HML1907 p.135–137 付近の実測表 |
| 1,710 mm | YPM 1823(T. serratus の型標本として記載。LF2012 では亜成体) | 「Greatest length of skull」 | HML1907 p.126–127 付近(T. serratus の実測表) |
| 1,383 mm | YPM 1822(T. prorsus の型標本) | 「鼻角芯の先端から頭頂骨の中央まで(復元を含む)」 | HML1907 p.131 |
| 1,025 mm | USNM 1201 | 吻骨の先端から方形骨の端まで | HML1907 同上 |
| 101 / 91 / 86 cm | YPM 1821(亜成体)/ YPM 1823(亜成体)/ YPM 1820(成熟) | 吻骨から方形骨の後ろまで(推定値を含む) | LF2012 Results(成長段階の節) |
| 38〜225 cm | 成長段階 10 頭骨(赤ちゃん UCMP 154452 〜 成体 UCMP 113697) | 表の「skull length」。**測定の定義は本文に無い** | HG2006 Table 1 |
| 159.4 cm / 151.1 cm(推定) | FPDM-V-9677 / FPDM-V-9775 | 後頭顆の断面積からの回帰(Anderson 1999 の式 Y = 0.464X + 1.416、Y = log 頭骨全長 mm、X = log 後頭顆面積 mm²) | SK2020 Methods |
| 約 2.5 m(完全なら) | 最大の頭骨 | — | W(出典 Scannella & Horner 2010 は未読) |

体との比:

- G1905: 組み立て骨格(USNM 4842 を主とする合成)で、くちばしの先から尾の先まで **19 ft 8 in(約 5.99 m)**、頭骨 **6 ft(約 1.83 m)** で「全長のほぼ 3 分の 1」、最も高い点(仙骨の上)は **8 ft 2 in(約 2.49 m)**。仙椎より前の椎骨は Hatcher の判定で 21 個。鼻角は欠けていて復元していない。前あしは Marsh の図に従っており「最も推測的な部分」と書く。
- W: 全長 8〜9 m、体重 6〜10 t(出典 Paul 2010、未読)。「Kelsey」は全長 6.7〜7.3 m・頭骨 2 m(出典は報道記事、未読)。
- 体重の文献値の例: SK2020 は BSP 1964 I 458(旧 YPM 1834)に Seebacher 2001 の 4,963.6 kg を当てる。Ames et al. 2026(PeerJ、https://doi.org/10.7717/peerj.21728 )は平均的な成体として 8,000 kg(Stein 2019)を使う。

未確認: 頭骨長の定義を揃えた複数標本の一覧(Forster 1996 の表がそれに当たると思われるが未読)。

### A-1. 吻骨(くちばしの上側)・前歯骨(下側)・くちばしの角質

- 吻骨: W は「上のくちばしの芯は特別な吻骨」とする(出典の明示なし)。LF2012 は、成体の最後の段階で **吻骨が前上顎骨に癒合し、続いて前上顎骨が鼻骨に癒合する** と書く(Results)。LF2012 Fig. 7B に未癒合の吻骨の写真があるが、標本は **Torosaurus latus YPM 1831**(Triceratops ではない)。
- 前歯骨: YPM 1822 で「Length of predentary 304 mm」、歯骨 505 mm、板状骨 508 mm(HML1907 p.132)。
- 咬み合わせの補足: MA2014 は、閉口時に前歯骨が吻骨の内側面に沿って上後方へ弧を描くという受け身の仕組み(Ostrom 1964、Sampson 1993 による)を紹介し、その仕組みなら出るはずの曲がった傷がほとんど見られないので可能性は低いとする(Discussion)。
- 形(W): 「深く幅の狭いくちばし。噛むより、つかんで引きちぎるのに向いていたと考えられる」(出典 Ostrom 1966、Erickson 2015)。
- 角質: くちばしの角質の厚さ・延長量を数値で示した資料は **見つからなかった**。Aguilar-Pedrayes et al. 2024(Proc. R. Soc. B、https://doi.org/10.1098/rspb.2023.1713 )は恐竜全体の吻の角質と歯の分布の関係を扱うが、Triceratops の角質の寸法は書いていない。

### A-2. 前上顎骨・外鼻孔

- S2014: 前上顎骨の **鼻突起(NPP)と鼻孔の支柱(narial strut)のなす角** が層位の上ほど大きく、上部の個体では NPP がより垂直(Results)。
- LF2012: T. prorsus の特徴の一つが「前上顎骨の鼻突起が垂直」(Methods)。
- HML1907(YPM 1822): 「眼窩から鼻孔の後縁まで 250 mm」(p.132)。外鼻孔そのものの縦横の寸法は表に無い。
- GO2006 の図 3(MNHN 1912.20、左側面)に外鼻孔 ExN と鼻の窪み Nf の略号がある(本文未読)。
- Tada et al. 2026(Anat. Rec.、https://doi.org/10.1002/ar.70150 、要旨のみ): 角竜類は鼻孔の部分が大きく、鼻の神経・血管の経路、鼻腺・鼻涙管の位置、呼吸用の鼻甲介があったという仮説を立てる(軟組織の復元)。
- 未確認: 外鼻孔の大きさの実測値。外鼻孔が上顎の歯の列に重なるところまで後方へ伸びるという記述を検索結果の要約で見たが、一次資料で確かめていない。

### A-3. 鼻骨・鼻の角(角芯・上鼻骨)

| 値 | 標本 | 定義 | 出典 |
|---|---|---|---|
| 210 mm | YPM 1822(T. prorsus) | 鼻角芯の長さ(下側に沿って測る) | HML1907 p.132 |
| 100 mm / 330 mm | 同上 | 鼻角芯の基部の横径 / 基部の周長 | 同上 |
| 660 mm | 同上 | 眼窩から鼻角芯の先端まで | HML1907 p.131 |
| 650 mm | 同上 | 目の上の角の先端から鼻角の先端まで | HML1907 p.132 |
| 130 mm / 125 mm | YPM 1820(T. horridus 型標本) | 鼻角芯の高さ / 横径 | HML1907 p.122 |
| 520 mm | USNM 1201 | 眼窩の前縁から鼻角芯の先端まで | HML1907 p.135–137 付近 |

- 種の違い(S2014、Forster の診断形質の引用): 鼻角は T. horridus で短く T. prorsus で長い。ただし T. horridus の型標本は短く鈍い鼻角、T. prorsus は伸びた鼻角。吻は T. horridus で長く T. prorsus で短い。上鼻骨(epinasal)の長さ/幅の比は層位の上ほど平均が大きい(例: UCMP 113697 で 2.12)。
- HML1907(YPM 1822 の診断): 「長く前向きの鼻角芯」(p.128)。
- HG2006: 上鼻骨が鼻骨に癒合するのは亜成体。左右の鼻骨の正中の縫合は幼体から亜成体の間に閉じる。
- 未確認: 鼻角の角質の鞘の大きさ。

### A-4. 上顎骨・歯の列(デンタルバッテリー)

- 歯の位置の数: W は「上顎骨に 36〜40 の歯の位置、1 位置に 3〜5 本が縦に積み重なる」「各あごの片側に 36〜40 列 × 3〜5 本、合計 432〜800 本」(出典 Dodson et al. 2004、未読)。MA2014 は「Triceratops では最大 40 の歯族が報告されている」として HML1907 を引く。
- HML1907 p.43–44(「Arrangement of the teeth in the jaw」の節): 縦の列(歯族)の本数は **あごの両端で 1 本、中央付近で 8 本ほど**。前後方向の列は **40 を超えることがある**(位置と年齢で変わる)。1 つの横断面には縦の列が 1 つしかない。
- HML1907 p.46: **下あごは上あごの内側で閉じる**。下の歯の外縁が上の歯の内縁に当たり、**摩耗は上下とも垂直な面で起きる**。開け閉めで「はさみの刃のように」働き、すりつぶしではなく切断。
- V2016 Introduction: 角竜類の歯は 1 本に **1 つの、比較的平らで、ほぼ垂直な咬合面**(上下の歯列のずれ合いで生じる)。
- E2015: 進んだ角竜類は「高い角度の切断型の歯列」、使用で「垂直な切断面」ができる。摩耗で切断面の中央が窪む(fuller)。
- MA2014 Results(角竜類一般、Campanian の標本): 歯族は下あごの長さの **約半分** にわたって繰り返す。歯の列は **わずかに内側へ弓なりで、前方で互いに近づく**(Godfrey & Holmes 1995 fig.7 を引用)。Dinosaur Park 層の標本では歯の列は 350 mm を超えない(Centrosaurus TMP 1997.085.0001)。各歯族に最大 4〜5 本の後継歯、歯の列の前端と後端ほど歯族が小さい。Discussion では「角竜類の歯の列は後方へ開く(diverge distally)」とも書く。
- 未確認: Triceratops の歯の列の長さの実測値、上顎の歯の列の傾き。

### A-5. 眼窩

| 値 | 標本 | 定義 | 出典 |
|---|---|---|---|
| 136 mm × 110 mm | YPM 1823(T. serratus として記載) | 眼窩の最大径 × 最小径 | HML1907(T. serratus の実測表) |
| 340 mm | YPM 1822 | 眼窩の下縁から頬骨の下端まで | HML1907 p.131 |
| 833 mm | USNM 1201 | 眼窩の前縁から吻骨の先端まで | HML1907 p.135–137 付近 |
| 963 mm | USNM 1201 | 眼窩の後縁から鱗状骨の後端まで | 同上 |
| 828 mm | YPM 1823 | 眼窩の後縁からフリルの後縁まで | HML1907(T. serratus) |

- 形: YPM 1822 は「ほぼ円形の眼窩」(HML1907 p.129、診断形質の 3 番目)。
- 向き: 眼窩の向きを角度で示した資料は **見つからなかった**。

### A-6. 後眼窩骨と目の上の角

成長による変化(HG2006 Table 1 と本文):

- 「赤ちゃんでは短い突起、幼体では後ろへ曲がり、亜成体でまっすぐになり、成体では前へ反り返る」。
- 表の値(眼窩上の角の長さ cm / 基部の値 cm / 頭骨長 cm、段階、向き):

| 標本 | 段階 | 角の向き | 眼窩上の長さ | 基部 | 頭骨長 |
|---|---|---|---|---|---|
| UCMP 154452 | 赤ちゃん | 曲がりなし | 3.5 | 6.5 | 38(推定) |
| MOR 1199 | 幼体 | 後ろ | 19 | 20 | 87 |
| UCMP 136306 | 幼体 | 後ろ | 40 | 29 | 110 |
| MOR 1110 | 幼体 | 後ろ | 50 | 39 | 135 |
| UCMP 137263 | 亜成体 | 先端が後ろ | 49 | 42 | 160(推定) |
| MOR 1120 | 亜成体 | 先端が後ろ | 53 | 52 | 165 |
| MOR 699 | 亜成体 | 前 | — | — | 165(推定) |
| MOR 1604 | 亜成体 | 前 | 60 | 54 | 200(推定) |
| MOR 004 | 成体 | 前 | 41 | 59 | 208 |
| UCMP 113697 | 成体 | 前 | 82 | 69 | 225 |

**注意(要確認)**: 取得ツールは「基部」の列の見出しを「po horn diameter at base (cm)」と読んだ。しかし HML1907 の実測では目の上の角芯の基部の **直径が 150〜310 mm、周長が 540〜840 mm**(下表)で、HG2006 の 59〜69 cm は周長の桁に近い。原表(PDF)で見出しを確かめるまで、この列を直径として使わないこと。

HML1907 の目の上の角芯:

| 値 | 標本 | 定義 |
|---|---|---|
| 940 mm / 690 mm | USNM 1201 | 角芯の長さ(後面に沿って / 前面に沿って) |
| 740 mm | 同上 | 角芯の先端から眼窩の上縁まで(直線) |
| 1,154 mm | 同上 | 角芯の先端の、上顎骨下縁からの高さ |
| 310 mm / 150 mm(押しつぶれで減) | 同上 | 基部の前後径 / 横径 |
| 840 mm / 380 mm | 同上 | 基部の最大周長 / 中ほどの周長 |
| 195 / 150 mm、540 mm | YPM 1822 | 基部の前後径 / 横径、基部の周長 |
| 500 mm | YPM 1822 | 眼窩から角芯の先端まで |
| 245 / 172 mm | YPM 1820 | 基部の前後径 / 横径 |
| 173 / 132 mm | YPM 1823 | 眼窩の直上の前後径 / 横径(200 mm 上で 115 / 95 mm) |

- 向き(YPM 1822): 「細い目の上の角芯は、長さの約半分までは上・前・外へ向き、そこから先端まで緩く内側へ曲がる」(HML1907 p.128)。
- S2014: 層位下部(L3)では角芯長が **基底頭骨長の約 0.45〜少なくとも 0.74**、上部(U3)では一貫して短い(**< 0.64**)。「基底頭骨長」の定義は本文で確認できなかった。
- HG2006: 幼体から角芯の基部の内部が中空になり始める。
- W: 目の上の角は約 1 m(出典 Scannella 2014 と表記)。
- 未確認: 角質の鞘を含めた角の長さ。

### A-7. 頬骨・上頬骨(頬の突起)

- YPM 1822: 頬骨は **下向きでわずかに後ろ向き**、上頬骨と固く癒合。頬骨と方形頬骨の縫合は上方の 3 分の 2 で開いたまま。方形頬骨の切れ込みは深く狭い(HML1907 p.129)。
- 左右の頬骨の幅(expanse of jugals): YPM 1823 で 630 mm、USNM 1201 で推定 500 mm(HML1907)。
- W: 頬骨は頭骨の後ろ側面で下を向き、別の骨の上頬骨がかぶさる(出典 Dodson et al. 2004、未読)。
- LF2012: 上頬骨が頬骨に癒合するのは成体の段階。Fig. 7A の未癒合の上頬骨の写真は **Torosaurus latus YPM 1831** のもの。
- 未確認: 上頬骨の大きさの数値。

### A-8. 側頭窓(下側頭窓)・前眼窩窓

- 下側頭窓: YPM 1823 で「lateral temporal fossa」の最大径 108 mm、最小径 45 mm(HML1907、T. serratus の実測表)。T. serratus の型標本の特徴として「細く長い側頭窓」が挙がる(同、診断形質 4 番目)。
- 前眼窩窓: GO2006 の図 3(MNHN 1912.20、左側面)の略号に「Antf, antorbital fenestra」がある。**大きさは未確認**(本文未読)。
- 未確認: 下側頭窓の位置を他の骨からの距離で示した数値。

### A-9. 鱗状骨・頭頂骨・フリル

- 穴: Triceratops の頭頂骨には **窓が無い**(LF2012 Methods の診断形質)。頭頂骨の裏面に左右一対の窪みがあるが、Torosaurus の窓とは形も位置も違う(LF2012、YPM 1823、Fig. 9A)。
- 縁の骨(epiparietal / episquamosal):
  - 頭頂骨: **5〜7 個**(LF2012 Methods、Discussion)。正中の縁の骨(P0)があり、図 9 の略号では P0、p1〜p5、鱗状骨と頭頂骨の縫合をまたぐ 1 個(eps)。
  - 鱗状骨: YPM 1822 で **7 個**。最も小さいものが前下角(HML1907 p.129)。
  - 全体: 幼体で **17〜19 個の三角形**(HG2006)。
  - 形の変化(HG2006 Figure 2): 幼体では正三角形に近く、成長とともに上下に押しつぶされる。高さ/底辺の比は 0.14(小型幼体 MOR 1199)、2.3(大型幼体 MOR 1110)、2.8(亜成体 MOR 1120)と取得ツールは報告した(比の向きは原図で要確認)。成体ではフリルの後縁に溶け込む。
  - フリルの後縁: 赤ちゃんで深い波形、亜成体で波打つ、成体で滑らか(HG2006)。
- 鱗状骨・頭頂骨の寸法: YPM 1823 で鱗状骨の最大長 785 mm・最大幅 400 mm、頭頂骨の長さ 652 mm、フリルの最大幅 1,150 mm、フリルの後縁での左右の鱗状骨の縫合の間 900 mm(HML1907)。USNM 1201 で鱗状骨の最大長 950 mm、左右の鱗状骨の幅(推定)1,000 mm(HML1907)。
- 形: Triceratops は「短いフリル、平らな鱗状骨、上へ反った後縁」(LF2012 Fig. 1 の説明)。T. prorsus は鱗状骨の外縁が強く凸(LF2012)。YPM 1822 は鱗状骨が「幅広く短い」、目の上の角の間からフリルの後縁までの上面は強く凹む(押しつぶれで強調されている可能性ありと著者)(HML1907 p.129)。
- フリルの角度: 頭骨の基準線に対するフリルの角度を数値で示した資料は **見つからなかった**。

### A-10. 下あご・顎関節

- YPM 1822: 歯骨 505 mm、前歯骨 304 mm、板状骨 508 mm(HML1907 p.132)。
- 左右の方形骨の幅(expanse of quadrates): YPM 1820 で 536 mm(HML1907 p.122)。YPM 1822 では方形骨の下内側の角どうしは 185 mm まで近づく(HML1907 p.131)。
- 顎関節の高さと鉤状突起: 角竜類について「歯の列より下がった顎関節」「長い鉤状突起」は、V2016 Introduction がハドロサウルス類の咀嚼の特徴として挙げ、「多くの新角竜類も似た適応を示す」と書く。Nabavizadeh 2015(要旨のみ)は、鉤状突起と下がった顎関節がてこの腕を長くし、角竜類では **あごの後方(奥歯側)で咬む力が強い** とする。Bell et al. 2009(要旨のみ、Centrosaurus の歯骨の有限要素解析)は、角竜類の歯骨の外側面に縦の稜があり、鉤状突起にシャーピー線維の跡があると書く。
- **Triceratops の鉤状突起の高さ・顎関節の位置の実測値は見つからなかった**(Ostrom 1964 にあると考えられるが未読)。

### A-11. 頭の構え(モデルの頭の角度を決める材料)

- SK2020 Discussion: FPDM-V-9775 の脳函を復元頭骨に当て、内耳の外側半規管を水平にすると、**基底頭蓋軸が水平から約 45° 下向き**、くちばしは下向き。この構えで角とフリルは正面を向く、と著者。
- 同じ箇所で Ostrom & Wellnhofer 1986 を引用: 上顎骨の下縁を水平にすると、後頭顆は約 30〜35° 下を向く。
- 注意: 外側半規管による頭の構えの推定は種内・種間でばらつくと SK2020 自身が書く。

---

## B. 動き(歩き方・姿勢・速度)

### B-1. 前あしの姿勢

研究ごとに結論が分かれている。モデルではどれを採ったかを本文で断る必要がある。

| 資料 | 方法 | 結論(書いてあること) |
|---|---|---|
| G1905 | 最初の組み立て骨格 | 前あしは「亀のように曲がる」。関節面から哺乳類型のまっすぐな脚は否定。まっすぐだと頭が地面に届かない |
| LH1995(要旨) | 足跡化石 | 這う姿勢を仮定した前あしの説は誤り |
| PC2000(要旨) | 骨格復元を足跡に合わせる | 手は肩関節の真下。手の跡は **外向き**(這う爬虫類のような内向きではない)。後ろ足の跡は手の跡の **内側**。前あしはほぼ矢状面で動き、肘は **少しだけ** 外へ。ゾウのような柱状の前あしは誤り |
| TH2007 | Chasmosaurus irvinensis(CMN 41357)の半分の大きさの模型を、Triceratops のものとされる足跡(LH1995)を縮小して合わせる | 直立でも這う姿勢でもない中間。肘は中程度に外へ、上腕骨の長軸は矢状面に対して平均 30° 弱。押し出しの間に上腕骨が矢状面内を動くことはない |
| SR2015 | 関節がつながった化石の統計 | 肩甲骨は仙骨の長軸に対して 55°(角竜類 4 標本の平均)。T. horridus BHI 126406 は 65°。上腕骨を水平に保つことは研究者の間でおおむね一致、肘の張り出し量は不一致 |
| VB2013 | 橈骨の形態測定 | 角竜類は前腕を回内できない群に入る。橈骨と尺骨は平行。Fujiwara 2009 を引いて、手は前向きでなく外向きだった可能性 |
| F2009(要旨) | NSM PV 20379(「Raymond」)の右前あしの関節 | 手は **半回外**。中手骨の並びは近位から見て L 字。第 2 指が肘の回転面と平行で、第 1〜3 指が橈骨の広い関節面に乗る |
| FH2012(要旨) | 現生 318 骨格の肘の筋のモーメントアーム | Triceratops は **直立・矢状面で動く** 群に分類 |
| D2023 | 3 次元の筋骨格模型 | Chasmosaurus と Triceratops で肘の内転モーメントアームが大きく(上腕骨内側上顆が大きい)、肘を張る姿勢の復元を **支持しうる** |
| SM2023(要旨) | Styracosaurus の関節の可動域 | 歩くときは肘を体側に寄せていた可能性が高い。上腕骨は垂直に近づけない。肘を寄せると手首の手のひら側は内向き。肘を強く張ることもでき、そのとき肘の曲げ伸ばしで胴と頭が左右・上下に動く |
| M2012 | 大腿骨の断面の偏り | 角竜類は足をハドロサウルス類より外側(腰の下)に置いた、より広い足幅の可能性 |

手の骨: W によると体重は第 1〜3 指が支え、第 4・5 指は退化的。指の式 2-3-4-3-1(W、出典は本調査で未確認)。

### B-2. 前あし 1 周期の関節角度(TH2007 Table 1、Chasmosaurus irvinensis の模型)

角度は度。A1 = 上腕骨の水平からの下がり(側面)、A2 = 上腕骨の矢状面からの外転(正面)、A3 = 同(上面)、B1 = 尺骨の水平からの角度(側面)、C1 = 橈骨の水平からの角度(側面)、E.E. = 尺骨と上腕骨の長軸のなす角、F.M.glen. = 前の姿勢からの肩関節の前進量(**半分の大きさの模型で mm**)。

| 姿勢 | A1 | A2 | A3 | B1 | B2 | C1 | C2 | E.E. | F.M.glen. |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 43 | 32 | 29 | 43 | 3 | 50 | 17 | 89 | 0 |
| 2 | 37 | 38 | 27 | 50 | 2 | 55 | 8 | 92 | 54 |
| 3 | 25 | 59 | 32 | 82 | 8 | 90 | 18 | 105 | 120 |
| 4 | 24 | 55 | 25 | 96 | 8 | 98 | 14 | 114 | 83 |
| 5 | 23 | 57 | 27 | 97 | 0 | 104 | 9 | 114 | — |
| 6 | 10 | 68 | 23 | 79 | 9 | 89 | 5 | 94 | — |
| 7 | 20 | 61 | 24 | 75 | 3 | 80 | 9 | 91 | — |
| 8 | 33 | 51 | 25 | 55 | 2 | 65 | 16 | 87 | — |

要旨の言葉: 押し出しの始めは上腕骨の遠位端が後下方へ前額面に対して約 45°、肘は強く曲がり前腕と上腕のなす角は約 90°。押し出しの終わりに上腕骨は前額面に対して約 25°、肘は最大に伸びて約 115°、前腕は垂直。
制約(TH2007 の方法): 胴は足跡の中心線から横へずらさない(横の動きは推定できないので一定にした、と著者が明記)。

### B-3. 後ろあし

- PC2000(要旨): 大腿骨の遠位の関節の左右非対称で、下腿はわずかに内側へ向く。
- T2026: 角竜類(種不明 UALVP 42)の足。指の式 2-3-4-5-0。中足骨は「生きていたときおそらく取った」趾行の姿勢で復元(中足指節関節を背屈)。腓骨は脛骨の前を斜めに横切る。著者は遠位足根骨の配置は不確かと書く。
- SR2015: 角竜類の仙骨は水平(関節のつながった標本で、四肢を立った姿勢にすると仙骨の長軸が水平になる)。
- 未確認: Triceratops の後ろあしの関節角度の数値。

### B-4. 足跡化石

- LH1995(要旨のみ): コロラド州 Laramie 層(Maastrichtian)の Ceratopsipes goldenensis。最初の角竜類の足跡。手と足の跡がある(Zenodo の分類群の記録では手の跡 CU-MWC 220.3 / 220.5、足の跡 220.1 / 220.2 / 220.6)。**寸法・歩幅・手の向きの数値は本文未読のため書けない**。
- B2025(Campanian の角竜類、Triceratops ではない): 後ろ足の跡の最大長 64〜75 cm・最大幅 57〜74 cm(Table 1、C1.1〜C5.1)。4 本の太く丸い指。**手の跡は確実なものが無い**。
- 未確認: Triceratops に帰属できる行跡の歩幅・行跡の幅。

### B-5. 足の運びの順序・歩容

- Triceratops の足の運びの順序(どの足が何番目に着くか)を示した資料は **見つからなかった**。TH2007 も前あし 1 本の周期だけを扱う。
- 走れたか:
  - PC2000(要旨): 最大の角竜類でも最高速はゾウより有意に速く、サイとおおむね同じ。
  - H2021: Alexander(1985 ほか)は、6 t を超える Triceratops はサイ並みに運動能力があったかもしれないと推定。Paul & Christiansen は大型角竜類も大型のサイのように駆け足(ギャロップ)ができたかもしれないと主張。「その後の研究がこれらの主張に疑問を呈した」と書く(骨の強度だけを制約とする方法の限界)。
  - M2012: 四足の鳥盤類のうち、走行向きの形態が最も強いのはハドロサウルス類で、角竜類・装盾類より運動能力が高い。
- 結論の出ていない点として扱うのが妥当。

### B-6. 速度の推定値

| 値 | 方法 | 出典 |
|---|---|---|
| 4.22〜4.44 m/s(平均 4.32) | 後肢長(大腿骨+脛骨+中足骨)1.81 m(軟骨の補正なし)〜2.01 m(ワニの補正 10.8%)を股関節の高さとし、フルード数 1(遅い走り)で計算。式 Fr = v² /(股関節の高さ × g) | H2010 Table 4 |
| 「サイ並み」(数値なし) | 骨の強度の指標 | H2021 が Alexander 1985 と PC2000 を紹介 |

- 足跡の歩幅からの Triceratops の速度推定は **見つからなかった**。
- 歩きの速度の文献値も **見つからなかった**。上の式は fr を変えれば計算できるが、どのフルード数を歩きとみなすかの出典を本調査では読んでいない。

### B-7. 首・頭の可動域

- 首の可動域を角度で示した研究は **見つからなかった**。
- 首の前方の椎骨が癒合している(syncervical)。VanBuren 2013(学位論文、要旨のみ)は、癒合が大きな頭や武器より先に進化しているので「大きな頭を支えるため」「闘争のため」という仮説は否定される、と書く。Campione & Holmes 2006(JVP 26(4):1014–1017、冒頭の文のみ)は、癒合は大きな頭を支えるための安定化だったろうという Hatcher 1907 の解釈を紹介する。
- 頭の構えは A-11(SK2020)を参照。

### B-8. あごの開き方・咀嚼の動き

- 上下(orthal): 古典的な解釈は単純な上下(はさみ型)の閉口(Ostrom 1964・1966、V2016 Introduction の要約)。HML1907 p.46 も「はさみの刃」と書く。
- 前後: Sampson 1993 と Barrett 1998 の予備的な研究が Triceratops に前後運動を提案した(V2016 Discussion の紹介)。MA2014 は Campanian の角竜類の微細な傷から、**咀嚼の力を出す閉口は上後方へ(orthopalinal)、ときどき前後の動きが加わる** と結論し、すべての角竜類に当てはまるようだと書く。前後の動きに要る顎関節のずれは数 mm で足りる(Varriale 2011 を引用)。
- 左右: 角竜類の歯の列は後方へ開くので、下あごを後ろへ引くと歯が離れる。そのため片側ずつ咬んだ(anisognathy)という Varriale の提案があるが、現生の主竜類に無いので推定としては無理がある(MA2014 Discussion)。
- Leptoceratops(角竜類ではあるが Triceratops ではない)は弧を描く後方への動き(circumpalinal)。V2016 は、この動きは進んだ角竜類(ceratopsid)には無かったとする先行研究(Varriale 2011、MA2014)を紹介。
- あごをどこまで開けたか(開口角)の数値は **見つからなかった**。

### B-9. 動画・アニメーション(出典が明らかなもの)

- **Smithsonian の 3D データ(CC0)**: Triceratops horridus Marsh, 1889(USNM PAL 500000、組み立て骨格「Hatcher」、採集 1890、J. B. Hatcher)。Smithsonian Open Access API のレコード nmnhpaleobiology_3572783、使用許諾 CC0。単位はメートルの OBJ / glTF / GLB(低解像度 15 万面、約 14 MB)と高解像度 OBJ(約 900 MB)。
  - GLB: https://3d-api.si.edu/content/document/3d_package:d8c623be-4ebc-11ea-b77f-2e728ce88125/resources/Triceratops_horridus_Marsh_1889-150k-4096.glb
  - 同じデータの STL が Commons にある: https://upload.wikimedia.org/wikipedia/commons/7/7c/Triceratops_horridus_Marsh_1889-150k_%28Smithsonian_Institute%29.stl
  - 注意 1: このホストからは 3d-api.si.edu の取得が拒否され、中身を確かめていない。Commons のサムネイルでは四肢を曲げた姿勢に見え、立った姿勢の骨格かどうかは未確認。
  - 注意 2: MODEL-NOTES.md の方針は「外部のモデルのデータは使わない」。使う場合も **寸法を測る参照に留める** のが方針と合う(取り込むかどうかは Lead の判断)。
- 研究の補足動画: Triceratops の歩行の研究動画(論文の補足資料)は **見つからなかった**。Bell et al. 2025 の足跡の 3 次元モデルが Macquarie University Pedestal 3D(https://mq.pedestal3d.com/r/bePfWqNGay/ )にある(Campanian の角竜類)。

---

## C. 観察に使える画像(Wikimedia Commons)

使用許諾・作者は Commons の API(extmetadata)の値。向きは当方が縮小画像を見て判断した(2026-10-04)。所蔵館・標本番号は Commons の説明文にあるものだけを書き、無いものは「記載なし」。原寸の URL と 1280px の URL を並べる。1280px の縮小は `.../thumb/<a>/<ab>/<名前>/1280px-<名前>` の形(このホストから取得できることを確認)。

| # | ファイル | 写っているもの・所蔵 | 向き | 許諾 | 作者 | 原寸 | 1280px |
|---|---|---|---|---|---|---|---|
| 1 | Triceratops horridus (TMP 1982.006.0001, skull), Royal Tyrrell Museum | T. horridus 頭骨(下あごあり)、Royal Tyrrell Museum、**cast** と説明 | 左側面 | CC BY-SA 4.0 | Chris Woodrich | https://upload.wikimedia.org/wikipedia/commons/9/9a/Triceratops_horridus_%28TMP_1982.006.0001%2C_skull%29%2C_Royal_Tyrrell_Museum%2C_Drumheller%2C_Alberta%2C_2025-07-13.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Triceratops_horridus_%28TMP_1982.006.0001%2C_skull%29%2C_Royal_Tyrrell_Museum%2C_Drumheller%2C_Alberta%2C_2025-07-13.jpg/1280px-Triceratops_horridus_%28TMP_1982.006.0001%2C_skull%29%2C_Royal_Tyrrell_Museum%2C_Drumheller%2C_Alberta%2C_2025-07-13.jpg |
| 2 | Triceratops-prorsus-YPM1822.jpg | T. prorsus 型標本 YPM 1822(下あご無し)、Yale Peabody | 左側面 | CC BY-SA 2.5 | Longrich & Field(LF2012 の図) | https://upload.wikimedia.org/wikipedia/commons/9/97/Triceratops-prorsus-YPM1822.jpg | (原寸 892px) |
| 3 | Yale-Peabody-Triceratops-004d.jpg | T. prorsus 頭骨、Yale Peabody | 左側面 | CC BY-SA 2.5 | Longrich & Field | https://upload.wikimedia.org/wikipedia/commons/8/8c/Yale-Peabody-Triceratops-004d.jpg | (原寸 1280px) |
| 4 | Adult Triceratops horridus skull UCMP 2.JPG | T. horridus 成体頭骨、UCMP(Berkeley)、標本番号は記載なし | 正面 | CC BY 3.0 | BrokenSphere | https://upload.wikimedia.org/wikipedia/commons/5/5b/Adult_Triceratops_horridus_skull_UCMP_2.JPG | https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Adult_Triceratops_horridus_skull_UCMP_2.JPG/1280px-Adult_Triceratops_horridus_skull_UCMP_2.JPG |
| 5 | Adult Triceratops horridus skull UCMP 1.JPG | 同上 | 左前斜め | CC BY 3.0 | BrokenSphere | https://upload.wikimedia.org/wikipedia/commons/2/26/Adult_Triceratops_horridus_skull_UCMP_1.JPG | https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Adult_Triceratops_horridus_skull_UCMP_1.JPG/1280px-Adult_Triceratops_horridus_skull_UCMP_1.JPG |
| 6 | UCMP Triceratops left.JPG | UCMP の頭骨 | 左側面 | CC BY-SA 3.0 | EncycloPetey | https://upload.wikimedia.org/wikipedia/commons/1/1b/UCMP_Triceratops_left.JPG | https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UCMP_Triceratops_left.JPG/1280px-UCMP_Triceratops_left.JPG |
| 7 | Triceratops horridus skull, Tellus Science Museum 1.jpg | T. horridus「Lane」の cast、Tellus Science Museum | 正面 | CC BY-SA 4.0 | JJonahJackalope | https://upload.wikimedia.org/wikipedia/commons/0/0f/Triceratops_horridus_skull%2C_Tellus_Science_Museum_1.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Triceratops_horridus_skull%2C_Tellus_Science_Museum_1.jpg/1280px-Triceratops_horridus_skull%2C_Tellus_Science_Museum_1.jpg |
| 8 | Triceratops horridus skull in the Gallery of Paleontology - Paris.jpg | T. horridus MNHN 1912.20(GO2006 の標本)、Paris | 左前斜め | CC BY 2.0 | Jim Linwood | https://upload.wikimedia.org/wikipedia/commons/c/c6/Triceratops_horridus_skull_in_the_Gallery_of_Paleontology_-_Paris.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Triceratops_horridus_skull_in_the_Gallery_of_Paleontology_-_Paris.jpg/1280px-Triceratops_horridus_skull_in_the_Gallery_of_Paleontology_-_Paris.jpg |
| 9 | Triceratops skull houston.JPG | 頭骨(説明文は original skull)、Houston Museum of Natural Science | 左側面(下あごあり) | Public domain | Nekarius | https://upload.wikimedia.org/wikipedia/commons/4/45/Triceratops_skull_houston.JPG | https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Triceratops_skull_houston.JPG/1280px-Triceratops_skull_houston.JPG |
| 10 | Teeth-triceratops-horridus-2.jpg | T. horridus の吻部と上下の歯の列(所蔵の記載なし) | 左側面の拡大 | CC BY-SA 3.0 | Chaoborus | https://upload.wikimedia.org/wikipedia/commons/9/92/Teeth-triceratops-horridus-2.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Teeth-triceratops-horridus-2.jpg/1280px-Teeth-triceratops-horridus-2.jpg |
| 11 | Back and below of Triceratops skull - Fergus County Montana - Museum of the Rockies | T. horridus 頭骨を右側を下に寝かせた状態、Museum of the Rockies | 後ろ・下(後頭顆が見える) | CC BY-SA 2.0 | Tim Evanson | https://upload.wikimedia.org/wikipedia/commons/4/44/Back_and_below_of_Triceratops_skull_-_Fergus_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Back_and_below_of_Triceratops_skull_-_Fergus_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg/1280px-Back_and_below_of_Triceratops_skull_-_Fergus_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg |
| 12 | Subadult Triceratops skull - Garfield County Montana - Museum of the Rockies | 亜成体の頭骨、Museum of the Rockies | 左側面 | CC BY-SA 2.0 | Tim Evanson | https://upload.wikimedia.org/wikipedia/commons/0/0e/Subadult_Triceratops_skull_-_Garfield_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Subadult_Triceratops_skull_-_Garfield_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg/1280px-Subadult_Triceratops_skull_-_Garfield_County_Montana_-_Museum_of_the_Rockies_-_2013-07-08.jpg |
| 13 | Juvenile and adult Triceratops skulls.jpg | 幼体と成体の頭骨(説明文は「Casts(?)」)、California Academy of Sciences | 右前斜め | Public domain | Leonard G. | https://upload.wikimedia.org/wikipedia/commons/5/5c/Juvenile_and_adult_Triceratops_skulls.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Juvenile_and_adult_Triceratops_skulls.jpg/1280px-Juvenile_and_adult_Triceratops_skulls.jpg |
| 14 | Triceratops beak UCMP.JPG | くちばしの骨の拡大(吻骨か前歯骨かは説明文に無い)、UCMP | 不明確 | CC BY-SA 3.0 | BrokenSphere | https://upload.wikimedia.org/wikipedia/commons/d/d5/Triceratops_beak_UCMP.JPG | https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Triceratops_beak_UCMP.JPG/1280px-Triceratops_beak_UCMP.JPG |
| 15 | Triceratops-four-skulls-04w.jpg | T. horridus(NMNH)と T. prorsus(NHM London、Yale)の 4 頭骨を並べた合成 | 左右の側面 | CC BY-SA 4.0 | Zachi Evenor | https://upload.wikimedia.org/wikipedia/commons/c/cb/Triceratops-four-skulls-04w.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Triceratops-four-skulls-04w.jpg/1280px-Triceratops-four-skulls-04w.jpg |
| 16 | Triceratops Raymond National Museum of Nature and Science.jpg | 「Raymond」NSM-PV 20379(F2009 の標本)、国立科学博物館。死後の姿勢で岩に埋まった状態 | 右側面 | CC BY-SA 3.0 | Momotarou2012 | https://upload.wikimedia.org/wikipedia/commons/3/32/Triceratops_Raymond_National_Museum_of_Nature_and_Science.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Triceratops_Raymond_National_Museum_of_Nature_and_Science.jpg/1280px-Triceratops_Raymond_National_Museum_of_Nature_and_Science.jpg |
| 17 | LA-Triceratops mount-1.jpg | 組み立て骨格、Natural History Museum of Los Angeles County(切り抜き) | 右側面 | CC BY-SA 3.0 | Allie_Caulfield、加工 MathKnight | https://upload.wikimedia.org/wikipedia/commons/1/12/LA-Triceratops_mount-1.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LA-Triceratops_mount-1.jpg/1280px-LA-Triceratops_mount-1.jpg |
| 18 | Triceratops AMNH 01.jpg | 組み立て骨格(AMNH 5116 の分類に入る)、American Museum of Natural History | 右前斜め | CC BY-SA 2.0 | Michael Gray | https://upload.wikimedia.org/wikipedia/commons/6/6b/Triceratops_AMNH_01.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Triceratops_AMNH_01.jpg/1280px-Triceratops_AMNH_01.jpg |
| 19 | Canadian Museum of Nature Triceratops.jpg | 組み立て骨格、Canadian Museum of Nature | 右前斜め | CC BY 2.0 | Robert Linsdell | https://upload.wikimedia.org/wikipedia/commons/f/f4/Canadian_Museum_of_Nature_Triceratops.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Canadian_Museum_of_Nature_Triceratops.jpg/1280px-Canadian_Museum_of_Nature_Triceratops.jpg |
| 20 | TriceratopsCMNLeg.jpg | 前あし(手を含む)、Canadian Museum of Nature | 前あしの前方斜め | CC BY-SA 4.0 | LittleLazyLass | https://upload.wikimedia.org/wikipedia/commons/b/b9/TriceratopsCMNLeg.jpg | https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TriceratopsCMNLeg.jpg/1280px-TriceratopsCMNLeg.jpg |

補足の候補(使用許諾は確認済み、向きは同じ方法で確認):

- Triceratops side view.jpg(Smithsonian の旧組み立て骨格の頭部、左側面、CC BY-SA 3.0、Quadell)https://upload.wikimedia.org/wikipedia/commons/4/4d/Triceratops_side_view.jpg
- Triceratops front view.jpg(同、正面、CC BY-SA 3.0、Quadell)https://upload.wikimedia.org/wikipedia/commons/5/5b/Triceratops_front_view.jpg
- Smithsonian-Triceratops-skull-cast-0002a.jpg(Smithsonian 入口の青銅の複製、左側面の切り抜き、CC BY-SA 4.0、MathKnight and Scott)https://upload.wikimedia.org/wikipedia/commons/8/80/Smithsonian-Triceratops-skull-cast-0002a.jpg
- Triceratops ROM Toronto.jpg(T. horridus 頭骨、Royal Ontario Museum、右前斜め、CC BY-SA 3.0、Mykola Swarnyk)https://upload.wikimedia.org/wikipedia/commons/7/75/Triceratops_ROM_Toronto.jpg
- Triceratops skull frills.jpg(正面、フリルの縁の骨が見える、CC BY-SA 2.0、Ed T。展示「Dinosaur Mummy: CSI」とあり、標本の詳細は記載なし)https://upload.wikimedia.org/wikipedia/commons/7/7d/Triceratops_skull_frills.jpg

見つからなかったもの: **上から(背側)見た頭骨の写真**。Commons の「Triceratops skulls by aspect」の分類は正面・左側面・右側面の 3 つだけだった。上からの形は HML1907 の図版(Commons に「The Ceratopsia (Plate …)」として多数あり、パブリックドメイン)から探すのが次の手。

---

## 作り直しへの申し送り(資料で裏づいた点だけ)

1. 頭骨長の基準を 1 つ決める。HML1907 の型標本の「最大長」は 1,710〜1,934 mm。全長に対する比は G1905 の組み立て骨格で約 3 分の 1(ただし古い合成骨格)。
2. 下あごは上あごの **内側** で閉じ、咬合面は **垂直**(HML1907 p.46、V2016)。歯の列はあごの長さの約半分、前方で互いに近づく(MA2014)。
3. 歯族は最大 40 前後、縦の列は中央で最大 8 本ほど、両端で 1 本(HML1907)。
4. 成体の目の上の角は **前へ反る**。幼体は後ろへ曲がる(HG2006)。YPM 1822 では途中から内側へ曲がる(HML1907)。
5. 頭頂骨の縁の骨は 5〜7 個で正中に 1 個(LF2012)、鱗状骨は 7 個(YPM 1822)。成体では低く平たくフリルの縁に溶け込む(HG2006)。頭頂骨に窓は無い。
6. 頬骨は下向きでわずかに後ろ向き、先に上頬骨(HML1907)。
7. 頭の構えは基底頭蓋軸が約 45° 下向き、くちばしが下を向く(SK2020)。
8. 前あしの姿勢は説が割れている。足跡に合わせた研究(PC2000、TH2007)はいずれも「手は肩の下近く、肘はわずか〜中程度に外」。TH2007 の Table 1 がそのまま歩行の前あしの角度の目安に使える(ただし Chasmosaurus の模型)。
9. 速度の文献値は、遅い走りで 4.2〜4.4 m/s(H2010、フルード数 1)。駆け足の可否は未決着。
