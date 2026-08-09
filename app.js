// ==========================================================================
// Okinawa Travel Assistant - Application Logic (Updated with 9/7 Kokusai-dori & yacchi&moon tableware shopping)
// ==========================================================================

const itineraryData = {
  day1: {
    title: "Day 1 (9/3 週四)：華航 CI 120 抵達 ➔ 領取 8人座油電 Alphard ➔ PARCO CITY (A&W) ➔ 港川外人住宅 ➔ BEB5 入住",
    theme: "✈️ 10:45 抵達沖繩 ➔ 領取 8人座油電 Alphard ➔ 浦添海景購物與美食",
    timeline: [
      { time: "08:15 - 10:45", title: "搭乘華航 CI 120 班機 (TPE ➔ OKA)", desc: "桃園機場第一航廈起飛，10:45 準時抵達沖繩那霸機場 (OKA)。", tags: [{text: "✈️ 華航 CI 120", type: "drive"}] },
      { time: "10:45 - 12:00", title: "辦理入境、提領行李 & 領取 8人座油電 Alphard", desc: "提領行李，搭乘接駁車至 Toyota Rent a Car 領取 8人座油電 Alphard（2+3+3 配置）。7 位成員坐滿 7 個位置，第3排可單邊折疊收收（50/50分折），擺放 3~4 個大行李箱與推車。", tags: [{text: "🚗 領取8人座油電Alphard", type: "drive"}, {text: "✨ 3排可單邊收折放置行李", type: "kid"}] },
      { time: "12:20 - 14:30", title: "SAN-A 浦添西海岸 PARCO CITY ＆ 【指定美食】A&W 漢堡", desc: "距機場僅 20 分鐘車程！於無敵海景美食街享用【A&W 美式漢堡】（必點：莫札瑞拉起司堡、捲捲薯條 Curly Fries、麥精根汁 Root Beer）。大人逛商場、小孩看海。", tags: [{text: "🍔 A&W美式漢堡", type: "food"}, {text: "🌊 無敵海景美食街", type: "kid"}] },
      { time: "14:35 - 15:30", title: "港川外人住宅街 (Minatogawa Stateside Town)", desc: "距離 PARCO CITY 僅 5 分鐘車程！美軍宿舍改建文青聚落，品嚐超人氣 oHacorté 手工水果塔甜點。", tags: [{text: "🍰 人氣水果塔", type: "food"}, {text: "👶 推車友善", type: "kid"}] },
      { time: "15:30 - 16:30", title: "駕駛 Alphard 油電休旅前往星野 BEB5 沖繩瀨良垣 Check-in", desc: "行經沖繩自動車道前往恩納村。油電混合動力安靜順暢，辦理 BEB5 入住手續，開箱極具質感家庭套房。", tags: [{text: "🚗 車程: 約45分", type: "drive"}, {text: "🏨 前4晚住宿據點", type: "drive"}] },
      { time: "16:30 - 18:30", title: "BEB5 飯店設施放鬆 & 戶外泳池", desc: "在 24h TAMARIBA 中庭 lounge 喝免費咖啡，帶小朋友至戶外溫水泳池戲水放電。", tags: [{text: "🏊 溫水泳池", type: "kid"}, {text: "☕ 免費咖啡", type: "food"}] },
      { time: "18:30 - 20:30", title: "晚餐：恩納村燒肉 (琉球之牛 / 燒肉海心)", desc: "品嚐頂級沖繩阿古豬 (Agu Pork) 與 A5 沖繩和牛燒肉，為沖繩之旅揭開美味序幕。（建議提早預約）", tags: [{text: "🥩 A5和牛燒肉", type: "food"}] }
    ]
  },
  day2: {
    title: "Day 2 (9/4 週五)：美麗海水族館 ➔ 古宇利島 ➔ 百年古家大家",
    theme: "🐋 沖繩海洋美景與跨海大橋",
    timeline: [
      { time: "08:30 - 09:30", title: "飯店早餐 & 前往北部", desc: "在 BEB5 享用精緻早餐盤，補足精神後駕駛 Alphard 出發前往海洋博公園。", tags: [{text: "🚗 車程: 約50分", type: "drive"}] },
      { time: "10:30 - 14:00", title: "沖繩美麗海水族館 (Churaumi)", desc: "觀賞「黑潮之海」巨大水槽內的鯨鯊與鬼蝠魟！11:30 免費觀賞【OKICHAN 海豚秀】。館內海景餐廳 Inoh 享用午餐。", tags: [{text: "🐋 鯨鯊與海豚秀", type: "kid"}, {text: "🍱 園內午餐", type: "food"}] },
      { time: "14:30 - 16:30", title: "古宇利島 & 心形岩 (Kouri Island)", desc: "駛過跨越藍綠色大海的古宇利大橋，造訪【心形岩】沙灘踩水。品嚐名物 Kouri Shrimp 蝦蝦飯。", tags: [{text: "🚗 車程: 約30分", type: "drive"}, {text: "🍤 Kouri Shrimp蝦飯", type: "food"}, {text: "🏖️ 沙灘踩水", type: "kid"}] },
      { time: "17:30 - 19:30", title: "晚餐：名護 百年古家 大家 (Ufuya)", desc: "置身於 100 年歷史琉球古民家與庭園瀑布造景中，享用極致鮮美的阿古豬涮涮鍋。（須預約）", tags: [{text: "🍲 阿古豬涮涮鍋", type: "food"}, {text: "🏯 百年古宅造景", type: "kid"}] }
    ]
  },
  day3: {
    title: "Day 3 (9/5 週六)：鳳梨園 ➔ 萬座毛 ➔ Banta Cafe ➔ 美國村 🎆 晚上8點精采海濱煙火！",
    theme: "🎆 美國村週六晚間 20:00 獨家海濱煙火秀 ＆ Blue Seal 冰淇淋",
    timeline: [
      { time: "10:00 - 12:30", title: "名護鳳梨園 (Pineapple Park)", desc: "乘坐自動駕駛「鳳梨遊覽車」穿梭熱帶植物區，小朋友超喜歡！逛恐龍園區、享用鳳梨泡芙與試飲新鮮鳳梨汁。", tags: [{text: "🍍 自動駕駛鳳梨車", type: "kid"}, {text: "🍦 鳳梨冰淇淋", type: "food"}] },
      { time: "12:30 - 13:30", title: "午餐：宮里麵 (Miyazato Soba) / 岸本食堂", desc: "名護在地人極力推薦的老字號沖繩麵，大塊滷五花肉與軟骨排骨，湯頭鮮美，價格平實。", tags: [{text: "🍜 傳統沖繩麵", type: "food"}] },
      { time: "14:00 - 15:00", title: "萬座毛觀景台 (Manzamo)", desc: "欣賞天然雕琢的象鼻形狀琉球石灰岩斷崖，走訪全新建成的無障礙景觀步道。", tags: [{text: "🚗 車程: 約30分", type: "drive"}, {text: "🐘 象鼻岩景致", type: "kid"}] },
      { time: "15:30 - 17:30", title: "星野集團 Banta Cafe (讀谷村)", desc: "日本最大規模海崖夕陽咖啡廳！設有無邊際海景榻榻米與海邊步道，大人喝咖啡放鬆、小孩看海踩沙。", tags: [{text: "☕ 日本最大海景咖啡", type: "food"}, {text: "🌅 絕美夕陽", type: "kid"}] },
      { time: "18:00 - 19:45", title: "美濱美國村散散步、晚餐 (Taco Rice) ＆ Blue Seal 冰淇淋", desc: "漫步美式異國風情街，晚餐享用塔可飯，點心享用【Blue Seal 冰淇淋】（推薦：鹽金楚餅、紅芋口味）。", tags: [{text: "🍦 Blue Seal冰淇淋", type: "food"}, {text: "🌮 沖繩塔可飯", type: "food"}] },
      { time: "19:50 - 20:10", title: "🎆【重點大推】美國村週六 20:00 海濱煙火秀 (Chatan Fireworks)", desc: "預先前往 Depot Island 沿海步道或日落沙灘海邊占位！20:00 準時施放約 3 分鐘璀璨浪漫的海上煙火，5大2小全家共度極致浪漫難忘的週六夜晚！", tags: [{text: "🎆 20:00 準時煙火", type: "kid"}, {text: "✨ Depot Island coastal boardwalk", type: "kid"}] }
    ]
  },
  day4: {
    title: "Day 4 (9/6 週日)：沖繩兒童王國 ➔ AEON Rycom 超市大採買 ➔ 🍲 BEB5 飯店自煮頂級和牛火鍋",
    theme: "🦁 兒童王國樂園放電 ＆ AEON 超市和牛採買自煮大餐",
    timeline: [
      { time: "09:30 - 10:15", title: "從 BEB5 飯店駛往沖繩市", desc: "行經國道出發前往位於沖繩市的兒童王國樂園。", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "10:15 - 13:00", title: "沖繩兒童王國 (Okinawa Zoo & Museum)", desc: "結合動物園與 Wonder Museum 互動兒童館！可近距離觀賞大象、長頸鹿、獅子與可愛動物體驗，適合 2 位小朋友放電玩耍。", tags: [{text: "🦁 動物園與兒童館", type: "kid"}, {text: "🐘 親子餵食體驗", type: "kid"}] },
      { time: "13:15 - 17:30", title: "AEON MALL 永旺夢樂城來客夢 ＆ 超市和牛大採購", desc: "距離兒童王國僅 10 分鐘！逛阿卡將本鋪母嬰用品、玩具反斗城。下午前往 1F 【AEON Style 超市】採購今晚火鍋食材：沖繩 A5 黑毛和牛/石垣牛火鍋肉片、阿古豬、高湯包、有機蔬菜與水果！", tags: [{text: "🛒 AEON超市採購和牛", type: "food"}, {text: "🥩 沖繩A5黑毛和牛", type: "food"}] },
      { time: "17:30 - 18:30", title: "載著滿滿食材駛回星野 BEB5 瀨良垣", desc: "將新鮮和牛、阿古豬與蔬菜裝入保冷袋載回飯店。（車程約 40 分鐘）", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "18:30 - 21:00", title: "🍲 晚餐：BEB5 飯店套房廚房【DIY 頂級和牛＆阿古豬火鍋大餐】", desc: "充分利用 BEB5 房間內完整的廚房設施與大冰箱！用 IH 電磁爐煮高湯，全家 5大2小 溫馨圍爐享用 A5 和牛與阿古豬火鍋，自在舒適又美味！", tags: [{text: "🍲 BEB5 溫馨和牛火鍋", type: "food"}, {text: "🥂 溫馨家庭時光", type: "kid"}] }
    ]
  },
  day5: {
    title: "Day 5 (9/7 週一)：壺屋陶器街 (yacchi&moon餐具) ➔ 國際通購物 ➔ DMM水族館/瀨長島 ➔ 🛫 17:30 送機CI 113 ➔ NEST NAHA",
    theme: "🍶 壺屋陶器街選購 yacchi&moon 質感餐具 ＆ 國際通商圈購物 ＆ 17:30 機場送機",
    timeline: [
      { time: "09:00 - 09:50", title: "BEB5 退房 & 行李載上 8人座 Alphard 往那霸市區出發", desc: "辦理 BEB5 退房，全家 7 人與所有行李載上 8人座 Alphard 駛往那霸壺屋。（車程約 50 分鐘）", tags: [{text: "🚗 車程: 約50分", type: "drive"}] },
      { time: "10:00 - 12:00", title: "🍶 壺屋陶器街 ＆ 【指定行程】yacchi&moon 質感餐具選購", desc: "漫步充滿沖繩歷史與綠意的【壺屋陶器街 (Tsuboya Yachimun Street)】。造訪知名選物店【yacchi&moon】（選購可愛手作陶器、盤子、小熊杯具等質感餐具）與周邊工坊！", tags: [{text: "🏺 yacchi&moon手作餐具", type: "food"}, {text: "🌿 壺屋陶器街漫步", type: "kid"}] },
      { time: "12:00 - 14:30", title: "🛍️ 那霸國際通商圈購物 ＆ 午餐 (豬肉蛋飯糰 / 暖暮拉麵)", desc: "步行或車程 5 分鐘即達國際通！全家逛街採購伴手禮（紅芋塔、雪鹽、黑糖），午餐享用超人氣【Potama 豬肉蛋飯糰 牧志本店】或暖暮拉麵。", tags: [{text: "🛍️ 國際通商圈購物", type: "food"}, {text: "🍙 Potama豬肉蛋飯糰", type: "food"}] },
      { time: "14:45 - 16:45", title: "DMM Kariyushi 水族館 / 瀨長島 (看飛機吃幸福鬆餅)", desc: "前往位在機場附近的【DMM 水族館】近距離看企鵝與樹懶，或前往【瀨長島】吃幸福鬆餅（距離機場僅 10 分鐘，送機前最佳預備站）！", tags: [{text: "🦥 DMM水族館/瀨長島", type: "kid"}, {text: "🥞 幸福鬆餅", type: "food"}] },
      { time: "17:00 - 17:30", title: "🛫 17:30 抵達那霸機場國際線航廈 (送機 3 位大人)", desc: "駕駛 Alphard 直達國際線航廈出入口。卸下 3 位大人的行李，目送 3 位大人辦理華航 CI 113 班機報到手續！", tags: [{text: "✈️ 華航 CI 113 (3大人返台)", type: "drive"}, {text: "👋 機場順利送機", type: "kid"}] },
      { time: "17:45 - 18:45", title: "2大2小入住 THE NEST NAHA & 頂樓無邊際泳池", desc: "剩下的 2大2小 駕駛 Alphard 前往市區 2025 新開幕【THE NEST NAHA】飯店辦理 Check-in，體驗 22 公尺頂樓無邊際泳池！", tags: [{text: "🏊 頂樓無邊際泳池", type: "kid"}, {text: "🏨 2025新開幕", type: "drive"}] },
      { time: "19:00 - 21:00", title: "波上宮參拜 ＆ 晚餐：傑克牛排 (Jack's Steak House)", desc: "參拜懸崖神社【波上宮】，晚餐享用老字號【傑克牛排】多汁菲力牛排！", tags: [{text: "🥩 美式菲力牛排", type: "food"}, {text: "⛩️ 波上宮參拜", type: "kid"}] }
    ]
  },
  day6: {
    title: "Day 6 (9/8 週二)：飯店早餐 ➔ 還車接駁 ➔ 那霸機場免稅 ➔ 搭乘華航 CI 121 返台 (2大2小)",
    theme: "✈️ 11:50 華航 CI 121 2大2小 返台圓滿行程",
    timeline: [
      { time: "07:30 - 08:15", title: "THE NEST NAHA 早餐 & 辦理退房", desc: "享用飯店早餐或晨間無邊際泳池景致，整理行李準備退房。", tags: [{text: "🏨 退房出發", type: "drive"}] },
      { time: "08:15 - 08:45", title: "加油站加滿油 & 歸還 8人座 Alphard", desc: "駕駛至那霸機場附近的租車營業所，將油箱加滿並辦理還車手續。", tags: [{text: "⛽ 加滿油還車", type: "drive"}] },
      { time: "08:45 - 09:15", title: "搭乘租車接駁車至那霸機場國際線航廈", desc: "抵達機場航廈，時間非常充裕，無縫銜接登機手續。", tags: [{text: "🚌 機場接駁", type: "drive"}] },
      { time: "09:15 - 11:50", title: "辦理報到、托運行李 & 機場採購", desc: "2大2小辦理華航 CI 121 報到托運。品嚐現做【豬肉蛋飯糰 (Potama)】，免稅店做最後伴手禮採購。", tags: [{text: "🍙 現做豬肉蛋飯糰", type: "food"}, {text: "🛍️ 免稅店採購", type: "food"}] },
      { time: "11:50 - 12:35", title: "搭乘華航 CI 121 班機返抵台灣 (OKA ➔ TPE)", desc: "11:50 那霸機場起飛，台灣時間 12:35 順利抵達桃園機場第一航廈，結束快樂充實的沖繩 6 天 5 夜之旅！", tags: [{text: "✈️ 華航 CI 121 返台", type: "drive"}] }
    ]
  }
};

const gourmetData = [
  { name: "Craft House yacchi&moon (壺屋陶器街)", category: "naha", location: "那霸/壺屋", desc: "超人氣手作陶器餐具專賣店！經典盤子、馬克杯、熊熊器皿與文青擺飾。" },
  { name: "AEON Style 超市 沖繩A5黑毛和牛", category: "yakiniku", location: "AEON Rycom", desc: "販售頂級沖繩A5黑毛和牛、石垣牛與阿古豬火鍋肉片，搭配日式火鍋高湯包於 BEB5 自煮。" },
  { name: "A&W 美式漢堡 (PARCO CITY / 牧港店)", category: "naha", location: "浦添/那霸", desc: "沖繩美式漢堡始祖！必吃莫札瑞拉起司堡、捲捲薯條 (Curly Fries) 與免費續杯 Root Beer。" },
  { name: "Blue Seal 冰淇淋 (美國村 / 恩納店)", category: "cafe", location: "全沖繩", desc: "沖繩標誌性美式冰淇淋，必吃鹽金楚餅 (Salt Cookies)、紅芋 (Beni-imo) 與香檸 (Shikuwasa) 口味。" },
  { name: "琉球之牛 (恩納店)", category: "yakiniku", location: "恩納村", desc: "沖繩最知名燒肉，A5 級黑毛和牛與極品牛舌，肉質入口即化。（需提前預約）" },
  { name: "百年古家 大家 (Ufuya)", category: "soba", location: "名護市", desc: "百年琉球古民家，景觀庭園瀑布造景，阿古豬涮涮鍋與古家沖繩麵。" },
  { name: "星野 Banta Cafe", category: "cafe", location: "讀谷村", desc: "日本最大規模海景崖邊咖啡廳，設有無邊際榻榻米與海風台階。" },
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
