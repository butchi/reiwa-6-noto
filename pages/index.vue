<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false)

const linkArr = [
  {
    slug: "bousai",
    avatar: {
      icon: "mdi-castle",
      background: "grey",
      color: "white",
    },
    href: "https://www.bousai.go.jp/updates/r60101notojishin/index.html",
    title: "令和６年能登半島地震による被害状況等について : 防災情報のページ - 内閣府",
    subtitle: "災害情報: 令和６年能登半島地震による被害状況等について, 会議資料: 特定災害対策本部会議, 非常災害対策本部会議",
    children: [
      {
        avatar: {
          icon: "mdi-file-pdf-box",
          background: "white",
          color: "red",
        },
        href: "https://www.bousai.go.jp/updates/r60101notojishin/r60101notojishin/pdf/r60101notojishin_02.pdf",
        title: "令和６年能登半島地震による被害状況等について（令和６年１月３日08：00現在）",
        subtitle: "PDF形式：805.0KB",
      },
      {
        avatar: {
          icon: "mdi-file-pdf-box",
          background: "white",
          color: "red",
        },
        href: "https://www.bousai.go.jp/updates/r60101notojishin/r60101notojishin/pdf/r60101notojishin_01.pdf",
        title: "令和６年能登半島地震による被害状況等について（令和６年１月２日07：00現在）",
        subtitle: "PDF形式：802.4KB",
      },
      {
        avatar: {
          icon: "mdi-file-pdf-box",
          background: "white",
          color: "red",
        },
        href: "https://www.bousai.go.jp/updates/r60101notojishin/pdf/r60101notojishin_kaigi01.pdf",
        title: "特定災害対策本部会議 第1回（令和６年１月１日）　資料",
        subtitle: "PDF形式：3.9MB",
      },
      {
        avatar: {
          icon: "mdi-file-pdf-box",
          background: "white",
          color: "red",
        },
        href: "https://www.bousai.go.jp/updates/r60101notojishin/pdf/r60101notojishin_gijiroku01.pdf",
        title: "特定災害対策本部会議 第1回（令和６年１月１日）　議事録",
        subtitle: "PDF形式：218.8KB",
      },
    ],
  },
  {
    slug: "kantei-kaiken",
    avatar: {
      icon: "mdi-castle",
      background: "grey",
      color: "white",
    },
    href: "https://www.kantei.go.jp/jp/tyoukanpress/index.html",
    title: "内閣官房長官記者会見 | ニュース | 首相官邸ホームページ",
    subtitle: "官房長官の定例記者会見（原則月曜日から金曜日、午前と午後の二回）の様子などをご紹介します。",
    children: [
      {
        avatar: {
          icon: "mdi-file-video",
          background: "white",
          color: "red",
        },
        href: "https://www.kantei.go.jp/jp/tyoukanpress/202401/3_p.html",
        title: "令和6年1月3日（水）午後 令和６年能登半島地震について（４）",
        subtitle: "まず、私（官房長官）から、令和６年能登半島地震について、現在の状況を報告をいたします。人的被害については、本日１２時時点の石川県の発表によりますと、死者６２名、重傷者２６名、軽傷者１１０名となっていると承知しております。お亡くなりになられた方々の御冥福をお祈りするとともに、被害に遭われた方々に心よりお見舞いを申し上げます。...",
      },
      {
        avatar: {
          icon: "mdi-file-video",
          background: "white",
          color: "red",
        },
        href: "https://www.kantei.go.jp/jp/tyoukanpress/202401/2_p.html",
        title: "令和6年1月2日（火）午後 令和６年能登半島地震について（３）",
        subtitle: "それでは、私（官房長官）から、昨日来発生をしております地震に対する被害等について、現在の状況を報告をいたします。まず、人的被害につきましては、本日１３時時点で、死者６名、心肺停止者１８名、重傷者１７名、軽傷者６６名と報告を受けております。引き続き関係省庁において、被害情報の確認を行っているところでございます。お亡くなりになられた方々の御冥福をお祈りするとともに、被害に遭われた方々に心よりお見舞いを申し上げます。また、火災や多数の家屋倒壊等の被害が確認をされています。引き続き被害の全容把握に向けて、全力を挙げて情報収集に努めてまいります。...",
      },
      {
        avatar: {
          icon: "mdi-file-video",
          background: "white",
          color: "red",
        },
        href: "https://www.kantei.go.jp/jp/tyoukanpress/202401/01_p.html",
        title: "令和6年1月1日（月）午後 石川県を震源とする地震について",
        subtitle: "本日１６時６分頃、石川を震源とする地震が発生をし、本日１６時１０分頃、石川県能登において、最大震度７の強い揺れが発生をいたしました。この地震に伴い、石川県能登に大津波警報が発表されています。警報が発表されている地域には、高いところで５メートル程度の津波が予想されています。一刻を争いますので、直ちに高台や津波避難ビルなどの安全な場所に避難をしてください。また、志賀原子力発電所を始め、原子力発電所については現時点で異常がないことが確認をされております。あわせて、人的・物的被害については確認中です。...",
      },
      {
        avatar: {
          icon: "mdi-file-video",
          background: "white",
          color: "red",
        },
        href: "https://www.kantei.go.jp/jp/tyoukanpress/202401/1_pm_2.html",
        title: "令和6年1月1日（月）午後 石川県を震源とする地震について（２）",
        subtitle: "先ほども申し上げましたように、本日１６時６分頃、石川を震源とする地震が発生をし、本日１６時１０分頃、石川県能登において、最大震度７の強い揺れが発生をいたしました。全ての被災者の方に、まずはお見舞いを申し上げます。石川県能登に大津波警報が発表されております。警報が発表されている地域には、高いところで５メートル程度の津波が予想されています。一刻を争います。直ちに高台や津波避難ビルなどの安全な場所に避難をしてください。志賀原子力発電所を始め原子力施設については、現時点で異常ないことが確認をされております。先ほどの地震により、本日１８時までに、多数の１１０番通報や１１９番通報のほか、家屋の倒壊等の被害が確認をされています。引き続き被害の全容把握に向け、全力を挙げて情報収集に努めてまいります。...",
      },
    ],
  },
  {
    slug: "gov-online",
    avatar: {
      icon: "mdi-home-flood",
      background: "blue",
      color: "white",
    },
    href: "https://www.gov-online.go.jp/",
    title: "政府広報オンライン あしたの暮らしをわかりやすく",
    subtitle: "令和６年能登半島地震の地震活動と防災事項 防災情報 最近の地震活動 地震の概要や評価（気象庁、地震調査研究推進本部　地震調査委員会）（原則、翌月上旬開催）  気象情報 その他",
    children: [
    {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/202003/2.html",
        title: "住まいが被害を受けたとき　最初にすること",
        subtitle: "災害で住まいが被害を受けたときは、あまりのショックに、何から手を付けたらいいか分からなくなるかもしれません。被災者の方々が一日も早く日常の生活を取り戻せるように、行政や災害ボランティアなども様々な支援に動き出します。それらの支援も受けながら、一歩ずつ再建を進めていきましょう。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/tokusyu/cu_bosai/index.html",
        title: "特集-『防災・減災』お役立ち情報　自然災害から命を守るため、知っておいてほしいこと",
        subtitle: "毎年のように発生する、大雨、台風、地震等による被害。これら自然災害から命を守るためには、日ごろから防災知識を身につけ備えをしておく、そして、災害発生のおそれがある場合には防災情報をキャッチして迅速に避難することが大切です。このサイトでは、政府広報で制作した防災・減災に役立つコンテンツを、テーマ別・災害別にまとめました。ぜひご活用ください。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/202003/1.html",
        title: "災害に遭ったとき　生活での心がけ",
        subtitle: "災害に遭ったときは、だれしも大きなショックを受けます。動く元気も食べる気力もない状態かもしれませんが、体調を維持することが明日の希望につながります。様々な心配事については、相談先があります。また、家族や親族などあなたを心配している人たちがいます。連絡を取って状況を知らせましょう。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/202003/3.html",
        title: "被災したときの生計の維持",
        subtitle: "被災しても生活は続きます。災害から立ち直るためには生計を維持していかなければなりません。そんなときのために、生活費の貸付制度があります。また、見舞金・弔慰金も、今後の暮らしの礎になることでしょう。税と社会保険料にも被災者への特別措置が用意されており、子供に必要になるお金にも支援の措置があります。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/201909/4.html",
        title: "被災地を応援したい方へ　災害ボランティア活動の始め方",
        subtitle: "地震や台風、豪雨、火山の噴火など自然災害が発生した際に、被災地で様々な活動を担う「災害ボランティア」。平成28年の熊本地震、平成30年の7月豪雨、令和元年東日本台風などでも、多くの災害ボランティアが被災地の復旧・復興のために大きな役割を果たしました。「被災地の役に立ちたい」「復興を応援したい」と思ったとき、どのようにしてボランティア活動を始めればいいのかをご紹介します。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/201607/1.html",
        title: "大規模な自然災害でローンの返済が困難になったかたへ　「自然災害債務整理ガイドライン」をご利用ください。",
        subtitle: "日本では、しばしば大きな自然災害が起き、そのたびに貴重な人命が失われたり、住まいや仕事場などに大きな損害を受けたりしています。命は助かったとしても、自然災害のために財産を失ったり収入の道を一時的に断たれたりして、借りていた住宅ローンや事業性ローンなどの返済ができなくなるケースもあります。そうした被災者が一定の要件に該当する場合に、少しでも生活や事業を再建しやすいように、「破産」等によらない債務整理の途があります。そんな「自然災害による被災者の債務整理に関するガイドライン」のメリットや手続の流れを紹介します。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/201602/2.html",
        title: "被災地以外でも発生！自然災害に関連した消費者トラブル",
        subtitle: "地震や台風、大雨、大雪、洪水、土砂災害…。こうした自然災害が発生すると、住宅などの修理、交通機関や旅行等のキャンセル、さらには便乗商法や悪質商法など、自然災害に関連した消費者トラブルが起こる傾向があります。しかも被災地やその周辺だけでなく、被災地から遠く離れた地域でも発生しています。自然災害に関連した消費者トラブルの事例を知り、被害を未然に防ぎましょう。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.gov-online.go.jp/useful/article/201602/2.html",
        title: "被災地以外でも発生！自然災害に関連した消費者トラブル",
        subtitle: "地震や台風、大雨、大雪、洪水、土砂災害…。こうした自然災害が発生すると、住宅などの修理、交通機関や旅行等のキャンセル、さらには便乗商法や悪質商法など、自然災害に関連した消費者トラブルが起こる傾向があります。しかも被災地やその周辺だけでなく、被災地から遠く離れた地域でも発生しています。自然災害に関連した消費者トラブルの事例を知り、被害を未然に防ぎましょう。",
      },
    ],
  },
  {
    slug: "mof",
    avatar: {
      icon: "mdi-bank",
      background: "grey",
      color: "white",
    },
    href: "https://www.mof.go.jp/public_relations/disaster/202401_notohantou-jishin/20240102104555.html",
    title: "令和６年能登半島地震関連情報 : 財務省",
    subtitle: "税金 関係, 地震保険 関係, 財務局 関係, 政策金融 関係",
    children: [
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.nta.go.jp/taxes/shiraberu/saigai/index.htm",
        title: "国税局・税務署関係 令和６年能登半島地震に関するお知らせ【国税庁ホームページ】",
        subtitle: "災害により被害を受けられた皆様方に、心からお見舞い申し上げます。 このページは、災害に関する申告・納付等に係る手続や個別の災害関連情報を掲載しております。 ご覧になりたい項目をクリックすると、該当の箇所に移動します。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.sonpo.or.jp/news/notice/2023/2401_001.html",
        title: "地震保険 関係 令和6年能登半島地震により被災された皆様へ(地震保険の概要やお問い合わせ窓口等)【日本損害保険協会】",
        subtitle: "損害保険をご契約の皆様へ 地震保険のお取扱い 地震保険以外の保険（自動車保険、傷害保険など）のお取扱い 地震保険の概要 1． 保険金が支払われる損害 2． 火災保険では、地震による火災は補償されません 3． 支払われる保険金 4． 地震保険の解説 ",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://lfb.mof.go.jp/hokuriku/kinyuu/index.html",
        title: "財務局関係 令和6年度能登半島地震にかかる災害等に対する金融上の措置について（北陸財務局）",
        subtitle: "令和6年1月2日 令和6年能登半島地震にかかる災害等に対する金融上の措置について（石川県）（PDF形式：77KB） 令和6年1月2日 令和6年能登半島地震にかかる災害等に対する金融上の措置について（福井県）（PDF形式：76KB） 令和6年1月2日 令和6年能登半島地震にかかる災害等に対する金融上の措置について（富山県）（PDF形式：75KB） 令和5年10月30日 「北陸３県の金融機関による事業者支援ワークショップ『Banker Heat Up Vol.2』」の開催について（PDF形式：1.4MB） 令和5年8月9日 令和5年7月7日からの大雨にかかる災害等に対する金融上の措置について（石川県）（PDF形式：78KB）",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://lfb.mof.go.jp/kantou/kinyuu/pagekthp031000102.html",
        title: "財務局関係 令和6年度能登半島地震にかかる災害等に対する金融上の措置について（関東財務局）",
        subtitle: "今回の令和6年能登半島地震にかかる災害等（災害のおそれを含む。以下同じ。）により災害救助法が適用された新潟県内の被災者等に対し、状況に応じ以下の金融上の措置を適切に講ずるよう預貯金取扱金融機関、証券会社等、生命保険会社、損害保険会社、少額短期保険業者及び電子債権記録機関に要請しました。　また、今後、災害救助法の適用地域が追加された場合等も同様に金融上の措置を適切に講ずるよう要請しました。　併せて、本要請内容について営業店への周知徹底を図るとともに、被災者等の被災状況等に応じて、きめ細かく弾力的・迅速な対応に努めるよう要請しましたので、お知らせします。",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "https://www.mof.go.jp/public_relations/disaster/202401_notohantou-jishin/20230307.html",
        title: "政策金融 関係 令和6年能登半島地震に関して被災中小企業・小規模事業者等向けの当面の貸付業務について要請しました",
        subtitle: "財務省は、日本政策金融公庫、沖縄振興開発金融公庫、商工組合中央金庫に対して、 ▪ 窓口における親身な対応 ▪ 適時適切な貸出 ▪ 担保徴求の弾力化 ▪ コロナ融資をはじめとする既往債務に係る返済猶予等の条件変更 について、個別企業の実情に応じた柔軟な対応に努めるよう、要請しました。",
      },
    ],
  },
  {
    slug: "jma",
    avatar: {
      icon: "mdi-tsunami",
      background: "blue",
      color: "white",
    },
    href: "https://www.jma.go.jp/jma/press/index.html?t=1&y=06",
    title: "気象庁 | 報道発表資料",
    subtitle: "令和６年能登半島地震の地震活動と防災事項 防災情報 最近の地震活動 地震の概要や評価（気象庁、地震調査研究推進本部　地震調査委員会）（原則、翌月上旬開催）  気象情報 その他",
    children: [
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/03b/202401031300.html",
        title: "「令和６年能登半島地震」について（第８報）～令和６年１月３日10時54分頃の石川県能登地方の地震について～",
        subtitle: "令和6年1月3日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/03a/202401030420.html",
        title: "「令和６年能登半島地震」について（第７報）～令和６年１月３日02時21分頃の石川県能登地方の地震について～",
        subtitle: "令和6年1月3日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/02d/202401021915.html",
        title: "「令和６年能登半島地震」について（第６報）～令和６年１月２日17時13分頃の能登半島沖の地震について～",
        subtitle: "令和6年1月2日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/02c/202401021015.html",
        title: "「令和６年能登半島地震」について（第５報）",
        subtitle: "令和6年1月2日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/02b/202401020145.html",
        title: "「令和６年能登半島地震」について（第４報）",
        subtitle: "令和6年1月2日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/02a/202401020000.html",
        title: "令和６年1月1日23時05分に発表した震度速報の誤りについて",
        subtitle: "令和6年1月2日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/01e/20240101kyodo.html",
        title: "「令和６年能登半島地震」に伴う土砂災害警戒情報発表基準の暫定的な運用について",
        subtitle: "令和6年1月1日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/01d/20240101ooame.html",
        title: "「令和６年能登半島地震」に伴う大雨警報・注意報発表基準の暫定的な運用について",
        subtitle: "令和6年1月1日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/01c/202401012130.html",
        title: "「令和６年能登半島地震」について（第３報）",
        subtitle: "令和6年1月1日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/01b/202401011810_2.html",
        title: "令和６年１月１日16時10分頃の石川県能登地方の地震について（第２報）",
        subtitle: "令和6年1月1日",
      },
      {
        avatar: {
          icon: "mdi-web-box",
          background: "white",
          color: "grey",
        },
        href: "/jma/press/2401/01a/202401011810.html",
        title: "令和６年１月１日16時10分頃の石川県能登地方の地震について",
        subtitle: "令和6年1月1日",
      },
    ],
  },
  {
    slug: "jma-kanazawa",
    avatar: {
      icon: "mdi-tsunami",
      background: "blue",
      color: "white",
    },
    href: "https://www.data.jma.go.jp/kanazawa/shosai/notojishinportal.html",
    title: "令和６年能登半島地震のポータルサイト",
    subtitle: "令和６年能登半島地震の地震活動と防災事項 防災情報 最近の地震活動 地震の概要や評価（気象庁、地震調査研究推進本部　地震調査委員会）（原則、翌月上旬開催）  気象情報 その他",
    children: [
      {
        avatar: {
          icon: "mdi-file-pdf-box",
          background: "white",
          color: "red",
        },
        href: "https://www.jma.go.jp/bosai/jishin_kazan_kaisetsu/data/kinjishinkai/pdf/20231219040210_0_Z__J_JPNB_20231219040200_EQV_INF_Jkinjishinkai_NJ000n00_image.pdf",
        title: "石川県能登地方（珠洲市付近）の地震活動と防災事項",
        subtitle: "原則、第１、第３火曜日発行。祝祭日は翌官執日。なお、活動に変化が見られた場合は随時発行。",
      },
    ],
  },
  {
    slug: "volunteer",
    avatar: {
      icon: "mdi-hand-coin",
      background: "orange",
      color: "yellow",
    },
    title: "募金・ボランティア",
    subtitle: "現在のところ、災害ボランティアの募集、個人からの義援物資の受付は行っておりません。石川県では、日本赤十字社石川県支部及び石川県共同募金会と連携し、令和6年1月4日（木曜日）から令和6年12月27日（金曜日）の間、義援金を受け付けます。",
    children: [
      {
        avatar: {
          icon: "mdi-hand-coin",
          background: "white",
          color: "orange",
        },
        href: "https://donation.yahoo.co.jp/detail/1630064",
        title: "令和6年能登半島地震 緊急支援募金（Yahoo!基金） - Yahoo!ネット募金",
        subtitle: "石川県 能登地方で震度7を観測した地震被害に対する緊急支援金の受付を開始します。",
      },
      {
        avatar: {
          icon: "mdi-hand-coin",
          background: "white",
          color: "orange",
        },
        href: "[https://donation.yahoo.co.jp/detail/5335006",
        title: "令和6年能登半島地震への緊急支援 被災された方々に必要な支援を届ける （JVOAD） - Yahoo!ネット募金",
        subtitle: "石川県能登半島で震度7の地震が発生、皆さまのご支援をお願いいたします。",
      },
      {
        avatar: {
          icon: "mdi-information",
          background: "white",
          color: "blue",
        },
        href: "https://www.pref.ishikawa.lg.jp/suitou/gienkinr0601.html",
        title: "令和6年能登半島地震に係る災害義援金の受付について",
        subtitle: "令和6年1月に発生した能登地方を震源とする地震で被災された方々を支援するため、県では、日本赤十字社石川県支部及び石川県共同募金会と連携し、令和6年1月4日（木曜日）から令和6年12月27日（金曜日）の間、義援金を受け付けます。",
      },
      {
        avatar: {
          icon: "mdi-cloud-off-outline",
          background: "white",
          color: "grey",
        },
        href: "https://akaihane-ishikawa.or.jp/info/gienkin/",
        title: "現在受付中の義援金 | 赤い羽根いしかわ｜社会福祉法人 石川県共同募金会",
        subtitle: "※令和６年能登半島地震への義援金は、現在募集の準備を進めているところです。今しばらくお待ちください。",
      },
      {
        avatar: {
          icon: "mdi-cloud-off-outline",
          background: "white",
          color: "grey",
        },
        href: "https://www.jrc.or.jp/domestic_rescue/2024notoearthquake.html",
        title: "【第２報】令和６年能登半島地震にかかる日本赤十字社の対応等について｜災害救護速報（国内）｜おしらせ・最新情報｜日本赤十字社",
        subtitle: "令和６年能登半島地震に際し、日本赤十字社は現在被災地で救護活動の体制を整え、行政機関等と連携し、被災者の皆さまへの支援に努めております。具体的な活動内容については、災害救護速報を通じて情報発信をしてまいります。なお、義援金の受付開始についても現在調整中ですので、準備が整い次第ホームページ等でご案内させて頂きます。令和６年能登半島地震にかかる日本赤十字社の対応等は、以下のとおりです。令和６年能登半島地震にかかる日本赤十字社の対応等について（２）（981KB）.pdf",
      },
      {
        avatar: {
          icon: "mdi-pause-octagon",
          background: "white",
          color: "red",
        },
        href: "https://www.pref.ishikawa.lg.jp/kenmin/saigai/notojishin0101.html",
        title: "令和6年能登半島地震に係るボランティア情報 | 石川県",
        subtitle: "令和6年1月1日(月曜日)に能登地方で発生した最大震度7の地震に関して、現在のところ、災害ボランティアの募集は行っておりません。市役所・社会福祉協議会等に、電話でのお問い合せを控えていただきますようお願いいたします。災害ボランティアに関する情報があった場合、当ページでお知らせいたします。",
      },
      {
        avatar: {
          icon: "mdi-truck-delivery",
          background: "white",
          color: "red",
        },
        href: "https://www.pref.ishikawa.lg.jp/kousei/kanri/2024jishin.html",
        title: "令和6年能登半島地震に係る義援物資の受入について | 石川県",
        subtitle: "令和6年（2024年）能登半島地震に係る災害義援物資については、企業・団体からのまとまった規模の義援物資のご提供を下記のとおり受け付けております。ご提供いただける企業・団体におかれましては、まずは、石川県厚生政策課にご連絡ください。ご提供いただける義援物資の内容を確認し、被災地のニーズをふまえ、ご連絡させていただきます。現地への直接の搬入は、交通渋滞等により救命活動等の妨げとなる場合がありますので、くれぐれもご遠慮ください。搬入先については、県から連絡させていただきますので、その搬入先まで義援物資の搬入をお願いします。なお、仕分け等の手間を考慮し、個人からの提供は受け付けないことといたしましたので、義援金等についてご検討いただければ幸いです。",
      },
    ],
  },
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet
          elevation="12"
          max-width="600"
          rounded="lg"
          width="100%"
          class="pa-3 text-center mx-auto"
        >
          <h2 class="text-h5 mb-6">
            情報随時更新中
          </h2>

          <p class="mb-1 text-medium-emphasis text-body-2">
            令和6年能登半島地震に関する一次情報（主に政府発表資料）をまとめたサイトです。リアルタイム更新中なので今後大幅に内容が変わる可能性があります。
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="linkItem in linkArr"
              :key="linkItem.slug"
            >
              <v-expansion-panel-title>
                <v-list
                  class="bg-transparent"
                  lines="three"
                >
                  <v-list-item
                    :title="linkItem.title"
                    :subtitle="linkItem.subtitle"
                  >
                    <template #prepend>
                      <v-avatar :color="linkItem.avatar.background">
                        <v-icon :color="linkItem.avatar.color">{{ linkItem.avatar.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <a :href="linkItem.href" target="_blank">{{ linkItem.title }}</a>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list
                  lines="three"
                >
                  <v-list-item
                    v-for="(childItem, idx) in linkItem.children"
                    :key="idx"
                    :title="childItem.title"
                    :subtitle="childItem.subtitle"
                  >
                    <template #prepend>
                      <v-avatar :color="childItem.avatar.background">
                        <v-icon :color="childItem.avatar.color">
                          {{ childItem.avatar.icon }}
                        </v-icon>
                      </v-avatar>
                    </template>
                    <template #title>
                      <a :href="childItem.href" target="_blank">{{ childItem.title }}</a>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <client-only>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card title="あなたは…">
          <v-card-text>
            <v-row>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="error"
                >
                  被災者
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="accent"
                >
                  対策中
                </v-btn>
              </v-col>
              <v-col md="4">
                <v-btn
                  class="w-100"
                  size="x-large"
                  color="primary"
                >
                  支援者
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                状況に合わせて遷移します
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-spacer />

            <v-btn
              text="閉じる"
              color="primary"
              @click="dialog = false"
            />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </v-container>
</template>