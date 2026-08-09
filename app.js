// ==========================================================================
// Okinawa Travel Assistant - Application Logic (Updated with CAMEL SANDWICH & SMOOTHIE Day 2 Breakfast)
// ==========================================================================

const itineraryData = {
  day1: {
    title: "Day 1 (9/3 週四)：華航 CI 120 ➔ 領取 Alphard ➔ PARCO CITY (A&W) ➔ ☕ 港川 Cerrado Coffee ➔ 🥩 17:00 琉球之牛(北谷店) ➔ BEB5 Check-in",
    theme: "✈️ 10:45 抵達沖繩 ➔ ☕ 下午：Cerrado 港川外人住宅手沖 ➔ 🥩 17:00 琉球之牛(北谷店 #MR3Q6W) ➔ BEB5 入住",
    timeline: [
      { time: "08:15 - 10:45", title: "搭乘華航 CI 120 班機 (TPE ➔ OKA)", desc: "桃園機場第一航廈起飛，10:45 準時抵達沖繩那霸機場 (OKA)。", tags: [{text: "✈️ 華航 CI 120", type: "drive"}] },
      { time: "10:45 - 12:00", title: "辦理入境、提領行李 & 領取 8人座油電 Alphard", desc: "提領行李，搭乘接駁車至 Toyota Rent a Car 領取 8人座油電 Alphard（2+3+3 配置）。7 位成員坐滿 7 個位置，第3排可單邊折疊收收（50/50分折），擺放 3~4 個大行李箱與推車。", tags: [{text: "🚗 領取8人座油電Alphard", type: "drive"}, {text: "✨ 3排可單邊收折放置行李", type: "kid"}] },
      { time: "12:20 - 14:30", title: "☕ 上午咖啡＆美食：SAN-A PARCO CITY ＆ 【指定美食】A&W 漢堡", desc: "距機場僅 20 分鐘車程！於無敵海景美食街享用【A&W 美式漢堡】與特調晨間冰咖啡。大人逛商場、小孩看海。", tags: [{text: "🍔 A&W美式漢堡", type: "food"}, {text: "☕ 晨間咖啡", type: "food"}] },
      { time: "14:35 - 15:45", title: "☕ 下午咖啡＆買豆：【OKINAWA CERRADO COFFEE】@ 港川外人住宅街", desc: "距離 PARCO CITY 僅 5 分鐘！造訪 1986 年創立老字號烘豆廠【Cerrado Coffee】，品嚐精緻單品手沖並採購特製濾掛包與咖啡豆。順道品嚐 oHacorté 手工水果塔！", tags: [{text: "☕ Cerrado手沖咖啡", type: "food"}, {text: "🛍️ 買咖啡豆/濾掛", type: "food"}] },
      { time: "15:45 - 16:45", title: "駛往北谷美濱區域（美國村周邊）", desc: "沿國道 58 號海岸線駛往北谷，欣賞沖繩西海岸海景，預備前往晚餐地點。（車程約 25 分鐘）", tags: [{text: "🚗 車程: 約25分", type: "drive"}] },
      { time: "17:00 - 19:00", title: "🥩 晚餐：【琉球之牛 北谷店】已預約成功！(Confirmation # MR3Q6W)", desc: "【已訂位 17:00】品嚐頂級 A5 沖繩縣產黑毛和牛燒肉套餐與必點鎮店【炙燒和牛壽司】！全家 5大2小 享受極致美味和牛盛宴。", tags: [{text: "🥩 琉球之牛(北谷店)", type: "food"}, {text: "✅ 預約號#MR3Q6W", type: "food"}] },
      { time: "19:15 - 20:15", title: "晚餐後駛往恩納村【星野 BEB5 沖繩瀨良垣】辦理 Check-in", desc: "享用完極品燒肉大餐後，駕駛 Alphard 輕鬆行經國道出發前往恩納村。（車程約 40 分鐘）", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "20:15 - 21:30", title: "🏨 星野 BEB5 沖繩瀨良垣 Check-in 入住 ＆ 開箱家庭套房", desc: "辦理 BEB5 入住手續，卸下行李。在 24h TAMARIBA 中庭 Lounge 喝杯晚間咖啡/啤酒放鬆，早點休息迎接明日行程！", tags: [{text: "🏨 前4晚住宿據點", type: "drive"}, {text: "☕ TAMARIBA晚間咖啡", type: "food"}] }
    ]
  },
  day2: {
    title: "Day 2 (9/4 週五)：☕ CAMEL 早餐 ➔ 🐋 美麗海水族館 ➔ ☕ 古宇利島海景咖啡 ➔ 百年古家大家",
    theme: "🥪 ☕ 上午：CAMEL 現做三明治/果昔/晨咖啡 ＆ 🐋 美麗海水族館 ＆ ☕ 下午：古宇利海景咖啡",
    timeline: [
      { time: "08:15 - 09:00", title: "BEB5 出發 ➔ 駛往本部町 (車程約 45 分鐘)", desc: "全家從小搭乘 Alphard 出發，沿美麗海岸線駛往水族館前方的本部町。", tags: [{text: "🚗 車程: 約45分", type: "drive"}] },
      { time: "09:00 - 10:00", title: "🥪 ☕ 【指定早餐＆晨間咖啡】CAMEL SANDWICH & SMOOTHIE", desc: "【Day 2 專屬早餐】距離水族館僅 10 分鐘！品嚐現做熱壓三明治 (BLT/西西里羅勒雞肉)、現打黑糖香蕉/阿薩伊果昔與香醇晨間冰拿鐵！小孩愛喝果昔、大人享用美味三明治與咖啡。", tags: [{text: "🥪 CAMEL三明治", type: "food"}, {text: "🥤 現打果昔與晨咖啡", type: "food"}] },
      { time: "10:15 - 14:00", title: "沖繩美麗海水族館 (Churaumi)", desc: "距 CAMEL 僅 10 分鐘！觀賞「黑潮之海」巨大水槽內的鯨鯊與鬼蝠魟！11:30 免費觀賞【OKICHAN 海豚秀】。", tags: [{text: "🐋 鯨鯊與海豚秀", type: "kid"}, {text: "🐬 11:30海豚秀", type: "kid"}] },
      { time: "14:30 - 16:30", title: "☕ 下午咖啡：古宇利島海景咖啡 (Kouri Shrimp / L Lota)", desc: "駛過跨越藍綠色大海的古宇利大橋，造訪【心形岩】沙灘踩水。於海景咖啡廳品嚐冰美式/手沖與蝦蝦飯。", tags: [{text: "☕ 古宇利海景咖啡", type: "food"}, {text: "🏖️ 沙灘踩水", type: "kid"}] },
      { time: "17:30 - 19:30", title: "晚餐：名護 百年古家 大家 (Ufuya)", desc: "置身於 100 年歷史琉球古民家與庭園瀑布造景中，享用極致鮮美的阿古豬涮涮鍋。（須預約）", tags: [{text: "🍲 阿古豬涮涮鍋", type: "food"}, {text: "🏯 百年古宅造景", type: "kid"}] }
    ]
  },
  day3: {
    title: "Day 3 (9/5 週六)：鳳梨園 ➔ 萬座毛 ➔ ☕ RYUKYU BEACH CLUB ➔ 美國村 ☕ ZHYVAGO 🎆 晚上8點煙火！",
    theme: "☕ 上午：鳳梨冷萃 ＆ ☕ 下午：RYUKYU BEACH CLUB沙發海景 ＆ ☕ 晚上：ZHYVAGO 🎆 20:00煙火",
    timeline: [
      { time: "10:00 - 12:30", title: "☕ 上午咖啡：名護鳳梨園 (Pineapple Park) 特調冷萃咖啡", desc: "乘坐自動駕駛「鳳梨遊覽車」穿梭熱帶植物區，享用特調鳳梨冷萃咖啡或鳳梨冰霜咖啡！", tags: [{text: "🍍 自動駕駛鳳梨車", type: "kid"}, {text: "☕ 鳳梨冷萃咖啡", type: "food"}] },
      { time: "12:30 - 13:30", title: "午餐：宮里麵 (Miyazato Soba) / 岸本食堂", desc: "名護在地人極力推薦的老字號沖繩麵，大塊滷五花肉與軟骨排骨，湯頭鮮美，價格平實。", tags: [{text: "🍜 傳統沖繩麵", type: "food"}] },
      { time: "14:00 - 15:00", title: "萬座毛觀景台 (Manzamo)", desc: "欣賞天然雕琢的象鼻形狀琉球石灰岩斷崖，走訪全新建成的無障礙景觀步道。", tags: [{text: "🚗 車程: 約30分", type: "drive"}, {text: "🐘 象鼻岩景致", type: "kid"}] },
      { time: "15:30 - 17:30", title: "☕ 下午咖啡：【RYUKYU BEACH CLUB (琉球海灘俱樂部)】海景第一排沙發咖啡廳", desc: "【替換指定景點】位於恩納村瀨良垣海濱！全開放式海景第一排戶外沙發席，品嚐冰拿鐵、特調飲品與巴西莓碗，看海聽浪。（週六熱門時段建議提早線上預約）", tags: [{text: "☕ RYUKYU BEACH CLUB", type: "food"}, {text: "🏖️ 瀨良垣海景沙發", type: "kid"}] },
      { time: "18:00 - 19:45", title: "☕ 晚間咖啡＆買豆：【ZHYVAGO COFFEE ROASTERS】@ 美國村", desc: "美濱美國村 Depot Island 沿海步道！重工業美式海景烘豆廠，喝極品手沖/冰拿鐵，買美式復古包裝咖啡豆！晚餐享用塔可飯與 Blue Seal 冰淇淋。", tags: [{text: "☕ ZHYVAGO烘豆廠", type: "food"}, {text: "🛍️ 買美式復古豆", type: "food"}] },
      { time: "19:50 - 20:10", title: "🎆【重點大推】美國村週六 20:00 海濱煙火秀 (Chatan Fireworks)", desc: "預先前往 Depot Island 沿海步道占位！20:00 準時施放約 3 分鐘璀璨浪漫的海上煙火，5大2小全家共度浪漫週六夜晚！", tags: [{text: "🎆 20:00 準時煙火", type: "kid"}, {text: "✨ Depot Island coastal boardwalk", type: "kid"}] }
    ]
  },
  day4: {
    title: "Day 4 (9/6 週日)：兒童王國 ➔ ☕ 豆ポレポレ (Mame Pole Pole世界亞軍咖啡) ➔ AEON ➔ 🍲 BEB5和牛火鍋",
    theme: "🥇 ☕ 重頭戲：造訪 Mame Pole Pole (世界烘豆亞軍) 買極品咖啡豆 ＆ 🍲 BEB5 自煮和牛火鍋",
    timeline: [
      { time: "09:30 - 10:15", title: "☕ 上午咖啡：BEB5 瀨良垣 晨間咖啡 ➔ 駛往沖繩市", desc: "享用 BEB5 晨間咖啡，行經國道出發前往位於沖繩市的兒童王國樂園。", tags: [{text: "☕ BEB5晨間咖啡", type: "food"}, {text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "10:15 - 13:00", title: "沖繩兒童王國 (Okinawa Zoo & Museum)", desc: "結合動物園與 Wonder Museum 互動兒童館！可近距離觀賞大象、長頸鹿、獅子與可愛動物體驗，適合 2 位小朋友放電玩耍。", tags: [{text: "🦁 動物園與兒童館", type: "kid"}, {text: "🐘 親子餵食體驗", type: "kid"}] },
      { time: "13:30 - 14:45", title: "☕ 下午咖啡＆重頭戲：【Mame Pole Pole (豆ポレポレ)】世界烘豆亞軍咖啡！", desc: "【指定神級景點】造訪 2018 世界咖啡烘焙大賽亞軍、兩屆日本冠軍仲村良行先生的【Mame Pole Pole】！現場品嚐神級單品，採購招牌 Gajumaru 豆與沖繩在地 Ada Farm 極品咖啡豆！", tags: [{text: "🥇 Mame Pole Pole世界亞軍", type: "food"}, {text: "🛍️ 採購世界級咖啡豆", type: "food"}] },
      { time: "15:00 - 17:30", title: "AEON MALL 永旺夢樂城來客夢 ＆ 超市和牛大採購", desc: "距離 Mame Pole Pole 僅 5 分鐘！逛阿卡將本鋪母嬰用品、玩具反斗城。下午前往 1F 【AEON Style 超市】採購今晚火鍋食材：沖繩 A5 黑毛和牛/石垣牛火鍋肉片、阿古豬、高湯包與水果！", tags: [{text: "🛒 AEON超市採購和牛", type: "food"}, {text: "🥩 沖繩A5黑毛和牛", type: "food"}] },
      { time: "17:30 - 18:30", title: "載著滿滿食材駛回星野 BEB5 瀨良垣", desc: "將新鮮和牛、阿古豬與蔬菜裝入保冷袋載回飯店。（車程約 40 分鐘）", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "18:30 - 21:00", title: "🍲 晚餐：BEB5 飯店套房廚房【DIY 頂級和牛＆阿古豬火鍋大餐】", desc: "充分利用 BEB5 房間內完整的廚房設施與大冰箱！用 IH 電磁爐煮高湯，全家 5大2小 溫馨圍爐享用 A5 和牛與阿古豬火鍋，自在舒適又美味！", tags: [{text: "🍲 BEB5 溫馨和牛火鍋", type: "food"}, {text: "🥂 溫馨家庭時光", type: "kid"}] }
    ]
  },
  day5: {
    title: "Day 5 (9/7 週一)：壺屋陶器街 (yacchi&moon餐具/☕陶藝咖啡) ➔ 國際通 ➔ ☕ 瀨長島咖啡 ➔ 🛫 送機 ➔ NEST NAHA",
    theme: "☕ 上午：壺屋陶藝手沖 ＆ 🍶 yacchi&moon 質感餐具 ＆ ☕ 下午：瀨長島海景咖啡 ＆ 17:30 機場送機",
    timeline: [
      { time: "09:00 - 09:50", title: "BEB5 退房 & 行李載上 8人座 Alphard 往那霸市區出發", desc: "辦理 BEB5 退房，全家 7 人與所有行李載上 8人座 Alphard 駛往那霸壺屋。（車程約 50 分鐘）", tags: [{text: "🚗 車程: 約50分", type: "drive"}] },
      { time: "10:00 - 12:00", title: "☕ 上午咖啡＆選物：壺屋陶器街 ＆ yacchi&moon 質感餐具 ＆ 陶藝咖啡", desc: "漫步壺屋陶器街。造訪知名選物店【yacchi&moon】（選購可愛手作陶器餐具、盤子、小熊杯具）。於古民家陶藝咖啡館品嚐手沖咖啡！", tags: [{text: "🏺 yacchi&moon手作餐具", type: "food"}, {text: "☕ 壺屋陶藝咖啡", type: "food"}] },
      { time: "12:00 - 14:30", title: "🛍️ 那霸國際通商圈購物 ＆ 午餐 (豬肉蛋飯糰 / 暖暮拉麵)", desc: "步行/車程 5 分鐘即達國際通！全家逛街採購伴手禮（紅芋塔、雪鹽、黑糖），午餐享用【Potama 豬肉蛋飯糰 牧志本店】或暖暮拉麵。", tags: [{text: "🛍️ 國際通商圈購物", type: "food"}, {text: "🍙 Potama豬肉蛋飯糰", type: "food"}] },
      { time: "14:45 - 16:45", title: "☕ 下午咖啡：瀨長島 (Umikaji Terrace) 幸福鬆餅海景咖啡（距離機場僅 10 分鐘）", desc: "前往位在機場附近的【瀨長島】，享用幸福鬆餅配上一杯冰拿鐵/美式咖啡，看飛機起降（離機場僅 10 分鐘，送機前最佳預備站）！", tags: [{text: "☕ 瀨長島海景咖啡", type: "food"}, {text: "🥞 幸福鬆餅", type: "food"}] },
      { time: "17:00 - 17:30", title: "🛫 17:30 抵達那霸機場國際線航廈 (送機 3 位大人)", desc: "駕駛 Alphard 直達國際線航廈出入口。卸下 3 位大人的行李，目送 3 位大人辦理華航 CI 113 班機報到手續！", tags: [{text: "✈️ 華航 CI 113 (3大人返台)", type: "drive"}, {text: "👋 機場順利送機", type: "kid"}] },
      { time: "17:45 - 18:45", title: "2大2小入住 THE NEST NAHA & 頂樓無邊際泳池", desc: "剩下的 2大2小 駕駛 Alphard 前往市區 2025 新開幕【THE NEST NAHA】飯店辦理 Check-in，體驗 22 公尺頂樓無邊際泳池！", tags: [{text: "🏊 頂樓無邊際泳池", type: "kid"}, {text: "🏨 2025新開幕", type: "drive"}] },
      { time: "19:00 - 21:00", title: "波上宮參拜 ＆ 晚餐：傑克牛排 (Jack's Steak House)", desc: "參拜懸崖神社【波上宮】，晚餐享用老字號【傑克牛排】多汁菲力牛排！", tags: [{text: "🥩 美式菲力牛排", type: "food"}, {text: "⛩️ 波上宮參拜", type: "kid"}] }
    ]
  },
  day6: {
    title: "Day 6 (9/8 週二)：飯店退房 ➔ 還車接駁 ➔ ☕ 那霸機場 35 COFFEE ➔ 搭乘華航 CI 121 返台 (2大2小)",
    theme: "☕ 晨間咖啡：那霸機場 35 COFFEE (珊瑚咖啡) ＆ ✈️ 11:50 華航 CI 121 返台",
    timeline: [
      { time: "07:30 - 08:15", title: "☕ 上午咖啡：THE NEST NAHA 頂樓池畔晨間咖啡 & 退房", desc: "享用飯店早餐或頂樓池畔晨間咖啡，整理行李準備退房。", tags: [{text: "☕ 池畔晨間咖啡", type: "food"}, {text: "🏨 退房出發", type: "drive"}] },
      { time: "08:15 - 08:45", title: "加油站加滿油 & 歸還 8人座 Alphard", desc: "駕駛至那霸機場附近的租車營業所，將油箱加滿並辦理還車手續。", tags: [{text: "⛽ 加滿油還車", type: "drive"}] },
      { time: "08:45 - 09:15", title: "搭乘租車接駁車至那霸機場國際線航廈", desc: "抵達機場航廈，時間非常充裕，無縫銜接登機手續。", tags: [{text: "🚌 機場接駁", type: "drive"}] },
      { time: "09:15 - 11:50", title: "☕ 離境咖啡＆買豆：那霸機場【35 COFFEE】(珊瑚烘焙咖啡)", desc: "2大2小辦理華航 CI 121 報到托運。品嚐現做【豬肉蛋飯糰】，於【35 COFFEE】喝珊瑚烘焙咖啡並採購特產咖啡豆！", tags: [{text: "☕ 35 COFFEE珊瑚咖啡", type: "food"}, {text: "🛍️ 買珊瑚咖啡豆", type: "food"}] },
      { time: "11:50 - 12:35", title: "搭乘華航 CI 121 班機返抵台灣 (OKA ➔ TPE)", desc: "11:50 那霸機場起飛，台灣時間 12:35 順利抵達桃園機場第一航廈，結束快樂充實的沖繩 6 天 5 夜之旅！", tags: [{text: "✈️ 華航 CI 121 返台", type: "drive"}] }
    ]
  }
};

const gourmetData = [
  { name: "CAMEL SANDWICH & SMOOTHIE (Day 2 專屬早餐)", category: "cafe", location: "本部町 (距水族館10分)", desc: "🥪 沖繩超人氣現做熱壓三明治 (BLT/西西里羅勒雞肉)、現打黑糖香蕉/阿薩伊果昔與晨間香醇冰拿鐵！" },
  { name: "RYUKYU BEACH CLUB (琉球海灘俱樂部)", category: "cafe", location: "恩納村瀨良垣", desc: "☕ 瀨良垣海景第一排全開放式沙發座位，品嚐冰拿鐵、特調飲品與巴西莓碗，觀賞絕美夕陽風光。" },
  { name: "琉球之牛 (北谷店) - 已訂位 17:00", category: "yakiniku", location: "北谷町美濱", desc: "🥩 【預約號 #MR3Q6W】沖繩必吃 A5 沖繩縣產黑毛和牛燒肉與鎮店炙燒和牛壽司！" },
  { name: "Mame Pole Pole (豆ポレポレ)", category: "cafe", location: "沖繩市", desc: "🥇 2018 世界咖啡烘焙大賽亞軍、兩屆日本冠軍仲村良行先生的極品咖啡店！必買 Gajumaru 豆與安田農園沖繩豆。" },
  { name: "ZHYVAGO COFFEE ROASTERS", category: "cafe", location: "美濱美國村", desc: "☕ 美國村海景第一排重工業風美式烘豆廠，質感手沖與超酷復古包裝咖啡豆。" },
  { name: "OKINAWA CERRADO COFFEE", category: "cafe", location: "港川外人住宅街", desc: "☕ 創立於 1986 年老字號文青烘豆廠，白色小木屋風格，精緻單品手沖與特製濾掛包。" },
  { name: "Craft House yacchi&moon (壺屋陶器街)", category: "naha", location: "那霸/壺屋", desc: "超人氣手作陶器餐具專賣店！經典盤子、馬克杯、熊熊器皿與文青擺飾。" },
  { name: "AEON Style 超市 沖繩A5黑毛和牛", category: "yakiniku", location: "AEON Rycom", desc: "販售頂級沖繩A5黑毛和牛、石垣牛與阿古豬火鍋肉片，搭配日式火鍋高湯包於 BEB5 自煮。" },
  { name: "A&W 美式漢堡 (PARCO CITY / 牧港店)", category: "naha", location: "浦添/那霸", desc: "沖繩美式漢堡始祖！必吃莫札瑞拉起司堡、捲捲薯條 (Curly Fries) 與免費續杯 Root Beer。" },
  { name: "Blue Seal 冰淇淋 (美國村 / 恩納店)", category: "cafe", location: "全沖繩", desc: "沖繩標誌性美式冰淇淋，必吃鹽金楚餅 (Salt Cookies)、紅芋 (Beni-imo) 與香檸 (Shikuwasa) 口味。" },
  { name: "百年古家 大家 (Ufuya)", category: "soba", location: "名護市", desc: "百年琉球古民家，景觀庭園瀑布造景，阿古豬涮涮鍋與古家沖繩麵。" },
  { name: "傑克牛排 (Jack's Steak)", category: "naha", location: "那霸市區", desc: "昭和風味美式牛排館，菲力牛排嫩口多汁，那霸在地人強烈推薦。" },
  { name: "Kouri Shrimp 蝦蝦飯", category: "cafe", location: "古宇利島", desc: "蒜味奶油蝦飯，配上夏威夷風情特調飲品，打卡必吃。" },
  { name: "幸福鬆餅 (A Happy Pancake)", category: "cafe", location: "瀨長島", desc: "極致鬆軟的舒芙蕾鬆餅，配上夕陽海景與飛機起降。" },
  { name: "宮里麵 (Miyazato Soba)", category: "soba", location: "名護市", desc: "名護老字號沖繩麵，大塊爌肉軟嫩入味，CP值極高。" },
  { name: "Taco Rice Cafe Kijimuna", category: "naha", location: "美國村/瀨長島", desc: "沖繩經典料理塔可飯 (Taco Rice)，加入歐姆蛋滑嫩美味，小朋友愛吃。" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Tabs Logic
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      navBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(`tab-${targetTab}`).classList.add("active");
    });
  });

  // Day Selector Logic
  const dayBtns = document.querySelectorAll(".day-btn");
  const dayDetailsContent = document.getElementById("day-details-content");

  function renderDay(dayKey) {
    const data = itineraryData[dayKey];
    if (!data) return;

    let html = `
      <div class="timeline-card">
        <div class="day-header">
          <h3>${data.title}</h3>
          <span class="day-theme-badge">${data.theme}</span>
        </div>
        <div class="timeline">
    `;

    data.timeline.forEach(item => {
      let tagsHtml = item.tags.map(t => `<span class="tag ${t.type}">${t.text}</span>`).join(" ");
      html += `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
          <div class="tag-list">${tagsHtml}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    dayDetailsContent.innerHTML = html;
  }

  dayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const dayKey = btn.getAttribute("data-day");
      dayBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDay(dayKey);
    });
  });

  // Initial render of Day 1
  renderDay("day1");

  // Gourmet Filter Logic
  const gourmetContainer = document.getElementById("gourmet-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  function renderGourmet(filter = "all") {
    let filtered = gourmetData;
    if (filter !== "all") {
      filtered = gourmetData.filter(item => item.category === filter);
    }

    let html = "";
    filtered.forEach(item => {
      html += `
        <div class="gourmet-card">
          <div class="gourmet-category">${item.category.toUpperCase()}</div>
          <h4>${item.name}</h4>
          <div class="gourmet-location">📍 ${item.location}</div>
          <div class="gourmet-desc">${item.desc}</div>
        </div>
      `;
    });
    gourmetContainer.innerHTML = html;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGourmet(filter);
    });
  });

  renderGourmet("all");

  // Packing Checklist LocalStorage persistence
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  checkboxes.forEach((cb, idx) => {
    const saved = localStorage.getItem(`oki_check_${idx}`);
    if (saved === "true") cb.checked = true;

    cb.addEventListener("change", () => {
      localStorage.setItem(`oki_check_${idx}`, cb.checked);
    });
  });
});
