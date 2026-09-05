// ==========================================================================
// Okinawa Travel Assistant - Application Logic (Updated with CERRADO COFFEE 1F Location)
// ==========================================================================

const itineraryData = {
  day1: {
    title: "Day 1 (9/3 週四)：華航 CI 120 ➔ 領取 Alphard ➔ PARCO CITY (A&W / ☕ CERRADO COFFEE 1F) ➔ 🏴‍☠️ 安良波海灘 ➔ 🥩 17:00 琉球之牛 ➔ BEB5",
    theme: "✈️ 10:45 抵達沖繩 ➔ 🚗 20分車程 PARCO CITY A&W ＆ CERRADO 1F ➔ 🚗 25分車程 🏴‍☠️ 安良波海灘 ➔ 🥩 17:00 琉球之牛 ➔ BEB5入住",
    timeline: [
      { time: "08:15 - 10:45", title: "搭乘華航 CI 120 班機 (TPE ➔ OKA)", desc: "桃園機場第一航廈起飛，10:45 準時抵達沖繩那霸機場 (OKA)。", tags: [{text: "✈️ 華航 CI 120", type: "drive"}] },
      { time: "10:45 - 12:00", title: "辦理入境、提領行李 & 領取 8人座油電 Alphard", desc: "提領行李，搭乘接駁車至 Toyota Rent a Car 領取 8人座油電 Alphard（2+3+3 配置）。7 位成員坐滿 7 個位置，第3排可單邊折疊收收（50/50分折），擺放 3~4 個大行李箱與推車。", tags: [{text: "🚗 領取8人座油電Alphard", type: "drive"}, {text: "✨ 3排可單邊收折放置行李", type: "kid"}] },
      { time: "12:00 - 12:20", title: "🚗 車程：取車完畢駛往 SAN-A PARCO CITY", desc: "自 Toyota 豐崎/機場門市出發，行經西海岸道路前往浦添 SAN-A PARCO CITY。（車程約 20 分鐘）", tags: [{text: "🚗 車程: 約20分", type: "drive"}] },
      { time: "12:20 - 14:00", title: "🍔 ☕ 上午午餐＆咖啡：SAN-A PARCO CITY ＆ A&W 漢堡 ＆ ☕ CERRADO COFFEE (1F 橘區)", desc: "距租車處僅 20 分鐘車程！於海景美食街享用【A&W 美式漢堡】！\n☕ **【CERRADO COFFEE BeansStore 分店】位在 PARCO CITY 1 樓（1F 橘區 Orange Zone）**！可順道購買老字號單品手沖咖啡、義式咖啡外帶與優質咖啡豆！", tags: [{text: "🍔 A&W美式漢堡", type: "food"}, {text: "☕ CERRADO COFFEE (1F 橘區)", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "14:00 - 14:30", title: "🚗 車程：PARCO CITY 出發駛往北谷安良波海灘", desc: "離開 PARCO CITY，沿國道 58 號海岸線北上駛往北谷町安良波海灘。（車程約 25~30 分鐘）", tags: [{text: "🚗 車程: 約25-30分", type: "drive"}] },
      { time: "14:30 - 16:40", title: "🏴‍☠️ 下午主要行程：【安良波海灘 (Araha Beach)】（或 ☕ 雨天/港川總店備案）", desc: "【主要行程】約 14:30 抵達北谷安良波海灘！擁有一比一巨大「印度洋號木製海盜船遊樂設施」、白沙灘踩水與海濱步道，讓 2 位小朋友暢玩 2 小時極致戶外放電！\n💡【雨天/港川總店備案】：OKINAWA CERRADO COFFEE 港川外人住宅總店（品嚐老字號手沖、買濾掛包與 oHacorté 水果塔，16:15 離開港川前往琉球之牛）。", tags: [{text: "🏴‍☠️ 主要行程: 安良波海灘海盜船公園", type: "kid"}, {text: "🏖️ 沙灘踩水/放電2小時", type: "kid"}, {text: "☕ 備案: 港川Cerrado總店手沖", type: "food"}, {text: "☔ 備案雨天OK", type: "rain-ok"}] },
      { time: "16:40 - 16:50", title: "🚗 車程：安良波海灘 ➔ 琉球之牛 北谷店", desc: "自安良波海灘出發前往琉球之牛北谷店。（僅 2 公里，車程約 5 分鐘！16:50 提早抵達輕鬆停車與預備入座）", tags: [{text: "🚗 超近車程: 僅5分鐘", type: "drive"}] },
      { time: "17:00 - 19:00", title: "🥩 晚餐：【琉球之牛 北谷店】已預約成功！(Confirmation # MR3Q6W)", desc: "【已訂位 17:00】距安良波海灘僅 5 分鐘車程！高級室內獨立燒肉包廂/桌席！品嚐頂級 A5 沖繩縣產黑毛和牛燒肉套餐與必點鎮店【炙燒和牛壽司】！", tags: [{text: "🥩 琉球之牛(北谷店)", type: "food"}, {text: "✅ 預約號#MR3Q6W", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "19:00 - 19:40", title: "🚗 車程：北谷美濱區域 ➔ 恩納村【星野 BEB5 沖繩瀨良垣】", desc: "享用完極品燒肉大餐後，駕駛 Alphard 北上前往恩納村。（行經國道 58 號 / 高速公路，車程約 40 分鐘）", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "19:40 - 21:00", title: "🏨 星野 BEB5 沖繩瀨良垣 Check-in 入住 ＆ 開箱家庭套房", desc: "約 19:40 抵達 BEB5 辦理入住手續，卸下行李。在室內 24h TAMARIBA Lounge 喝杯晚間咖啡/啤酒放鬆，早點休息迎接明日行程！", tags: [{text: "🏨 前4晚住宿據點", type: "drive"}, {text: "☕ TAMARIBA晚間咖啡", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] }
    ]
  },
  day2: {
    title: "Day 2 (9/4 週五)：☕ CAMEL 早餐 ➔ 🐋 美麗海水族館 ➔ 📸 大橋展望所 ➔ 🍤 蝦蝦飯&Benny's ➔ 🏖️ 海灘踩水 ➔ 🍲 大家 (或 🛍️ 順路外帶回BEB5)",
    theme: "🥪 CAMEL早餐 ➔ 🐋水族館 ➔ 📸大橋展望 ➔ 🍤蝦蝦飯＆Benny's ➔ 🏖️古宇利海灘 ➔ 🍲大家 (或 🍱 順路外帶回飯店)",
    timeline: [
      { time: "08:15 - 09:00", title: "BEB5 出發 ➔ 駛往本部町 (車程約 45 分鐘)", desc: "全家從小搭乘 Alphard 出發，沿美麗海岸線駛往水族館前方的本部町。", tags: [{text: "🚗 車程: 約45分", type: "drive"}] },
      { 
        time: "09:00 - 10:00", 
        title: "🥪 ☕ 【指定早餐＆晨間咖啡】CAMEL SANDWICH & SMOOTHIE（附中文菜單與圖片）", 
        desc: "【Day 2 專屬早餐】距離水族館僅 10 分鐘！室內溫馨空間品嚐現做熱壓三明治、現打黑糖香蕉/紅芋果昔與香醇晨間冰拿鐵！", 
        extraHtml: `
          <div class="menu-embed-box">
            <div class="menu-embed-header">
              <h4>🥪 CAMEL SANDWICH & SMOOTHIE 實體中文菜單</h4>
              <span class="tag food">現點現做・熱壓三明治</span>
            </div>
            <div class="menu-embed-layout">
              <div class="menu-photo-card">
                <a href="camel_menu.png" target="_blank" title="點擊查看完整菜單原圖">
                  <img src="camel_menu.png" alt="CAMEL 實體中文菜單圖片">
                </a>
                <div class="menu-photo-tag">🔍 點擊圖片可放大查看</div>
              </div>
              <div class="menu-items-table">
                <div class="menu-item-row">
                  <div class="menu-item-top">
                    <div class="menu-item-name">🥓 SPAM 午餐肉起司煎蛋三明治 <span class="menu-item-jp">スパムエッグ</span></div>
                    <div class="menu-item-price-main">¥900</div>
                  </div>
                  <div class="menu-item-desc">厚切香煎 SPAM 火腿 ＋ 滑嫩煎蛋 ＋ 起司 ＋ 脆生菜（沖繩靈魂美味，小孩最愛）</div>
                  <div class="menu-item-sets">
                    <span class="set-pill">🍟 附薯條+飲料 ¥1,200</span>
                    <span class="set-pill smoothie">🥤 附薯條+果昔 ¥1,450</span>
                  </div>
                </div>

                <div class="menu-item-row">
                  <div class="menu-item-top">
                    <div class="menu-item-name">🍗 日式照燒雞肉三明治 <span class="menu-item-jp">テリヤキチキン</span></div>
                    <div class="menu-item-price-main">¥850</div>
                  </div>
                  <div class="menu-item-desc">鮮嫩多汁照燒雞腿肉 ＋ 溏心荷包蛋 ＋ 鮮綠生菜（鹹甜適中開胃好入口）</div>
                  <div class="menu-item-sets">
                    <span class="set-pill">🍟 附薯條+飲料 ¥1,150</span>
                    <span class="set-pill smoothie">🥤 附薯條+果昔 ¥1,400</span>
                  </div>
                </div>

                <div class="menu-item-row">
                  <div class="menu-item-top">
                    <div class="menu-item-name">🐖 慢燉手撕豬肉三明治 <span class="menu-item-jp">プルドポーク</span></div>
                    <div class="menu-item-price-main">¥1,000</div>
                  </div>
                  <div class="menu-item-desc">低溫慢烤手撕豬肉 ＋ 特調美式 BBQ 醬 ＋ 熔岩起司（肉香濃郁）</div>
                  <div class="menu-item-sets">
                    <span class="set-pill">🍟 附薯條+飲料 ¥1,300</span>
                    <span class="set-pill smoothie">🥤 附薯條+果昔 ¥1,550</span>
                  </div>
                </div>

                <div class="menu-item-row">
                  <div class="menu-item-top">
                    <div class="menu-item-name">🥩 費城牛肉起司三明治 <span class="menu-item-jp">フィリーチーズ</span></div>
                    <div class="menu-item-price-main">¥950</div>
                  </div>
                  <div class="menu-item-desc">切片牛肉炒洋蔥 ＋ 爆漿融化起司（經典美式 Philly Cheese 口感扎實）</div>
                  <div class="menu-item-sets">
                    <span class="set-pill">🍟 附薯條+飲料 ¥1,250</span>
                    <span class="set-pill smoothie">🥤 附薯條+果昔 ¥1,500</span>
                  </div>
                </div>

                <div class="menu-item-row" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.08);">
                  <div class="menu-item-top">
                    <div class="menu-item-name">🎁 三明治綜合分享盒 <span class="menu-item-jp">サンドボックス (自選3款)</span></div>
                    <div class="menu-item-price-main">¥2,800</div>
                  </div>
                  <div class="menu-item-desc">任選 3 種不同口味三明治（不可重複），切塊漂亮盒裝，5大2小分食首選！</div>
                  <div class="menu-item-sets">
                    <span class="set-pill">🍟 附薯條+飲料 ¥3,700</span>
                    <span class="set-pill smoothie">🥤 附薯條+果昔 ¥4,500</span>
                  </div>
                </div>

                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 6px;">
                  💡 <strong>現打果昔推薦</strong>：黑糖香蕉果昔、紅芋香蕉果昔、Oreo 巧克力香蕉果昔！
                </div>
              </div>
            </div>
          </div>
        `,
        tags: [{text: "🥪 CAMEL三明治", type: "food"}, {text: "🥤 現打果昔與晨咖啡", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}, {text: "📋 附完整中文菜單", type: "food"}] 
      },
      { time: "10:15 - 14:00", title: "沖繩美麗海水族館 (Churaumi)", desc: "距 CAMEL 僅 10 分鐘！世界級室內水族館，觀賞「黑潮之海」巨大水槽內鯨鯊與鬼蝠魟！11:30 海豚秀設有遮陽遮雨看台。", tags: [{text: "🐋 鯨鯊與海豚秀", type: "kid"}, {text: "🐬 11:30海豚秀", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "14:00 - 14:35", title: "📸 橋頭展望拍照點＆車程：【古宇利大橋南詰展望所】（屋我地島側 / 本島側）", desc: "自水族館出發（車程約 35 分鐘），在過橋進入古宇利島前，停靠位於屋我地島側的【古宇利大橋南詰展望所】（Mapcode: 485 601 893*22）！設有免費停車場與沙灘步道，下車拍整條大橋延伸入果凍海的無敵全景全家合照！拍攝後駛過 1,960 公尺古宇利大橋。", tags: [{text: "📸 古宇利大橋南詰展望所", type: "kid"}, {text: "🚗 車程: 約35分", type: "drive"}, {text: "🌉 1960m 大橋延伸全景", type: "kid"}] },
      { time: "14:35 - 15:30", title: "🍤 🥣 下午點心與果昔碗：【Kouri Shrimp 蝦蝦飯 ＆ Benny's Bowl 鮮果巴西莓碗】", desc: "【同棟大樓一次享用！】Benny's 就位在 Kouri Shrimp 蝦蝦飯大樓的 1 樓（Kouri Shrimp 位於 2 樓）！全家可同時點 2 樓熱騰騰的【Kouri Shrimp 蒜味奶油夏威夷蝦蝦飯】與 1 樓 sister shop 的【Benny's Bowl 鮮果巴西莓碗 (Acai Bowl / 果昔碗)】，一同在二樓戶外海景陽台席或室內冷氣席享用，大人小孩讚不絕口！", tags: [{text: "🍤 Kouri Shrimp 蝦蝦飯", type: "food"}, {text: "🥣 Benny's Bowl 巴西莓碗(1F)", type: "food"}, {text: "🏖️ 海景陽台座位", type: "kid"}] },
      { time: "15:30 - 16:30", title: "🏖️ 🌊 超順路親子踩水玩沙：【古宇利海灘 (Kouri Beach)】（或 ☔ 雨天備案：古宇利海洋塔）", desc: "【超順路＆親子玩水首選！】自 Kouri Shrimp / Benny's 樓下步行 2 分鐘或開車即達跨海大橋下的【古宇利海灘 (Kouri Beach)】！海浪平緩、淺灘水質晶瑩澈透、細白沙灘，設有洗腳設施、沖洗室與無障礙步道，非常適合 2 位小朋友安全踩水玩沙、大人與長輩看海放鬆！\n💡【雨天/長輩備案】：【古宇利海洋塔】搭乘自動駕駛高爾夫球車登頂，360 度無死角展望台與貝殼博物館（☔ 雨天 OK / 全室內無障礙）。", tags: [{text: "🏖️ 超順路: 古宇利海灘踩水玩沙", type: "kid"}, {text: "🌊 浪平水淺/設施完善", type: "kid"}, {text: "🛺 古宇利海洋塔(備案)", type: "kid"}, {text: "☔ 海洋塔雨天OK", type: "rain-ok"}] },
      { time: "16:30 - 17:30", title: "🚗 車程與晚餐選擇：名護【百年古家 大家】內用 或 🍱 順路外帶美食回 BEB5 飯店", desc: "【選項 A】：前往名護【百年古家 大家】享用阿古豬涮涮鍋晚餐。（須預約，17:30 入座）\n【選項 B (外帶回飯店放鬆)】：沿 58 號國道順路外帶回 BEB5 客房廚房享用，極度輕鬆不受拘束！\n🍱 順路外帶 4 大絕佳選擇：\n1. 🌮 King Tacos 名護店：沖繩塔可飯元祖！大盒裝起司牛肉塔可飯，放上車依然香噴噴！\n2. 🥩 燒肉乃我那霸 (名護店)：現做 A5 和牛與阿古豬排豪華便當盒，料大美味！\n3. 🍕 Pizzeria da ENZO (恩納村)：恩納村順路現烤窯烤披薩與義大利麵！\n4. 🛒 AEON 名護店超市：新鮮壽司拼盤、炸雞、串燒、水果大採購！", tags: [{text: "🍲 選項A: 百年古家大家內用", type: "food"}, {text: "🍱 選項B: 順路外帶回BEB5自煮享用", type: "food"}, {text: "🚗 沿58號國道極順路", type: "drive"}] }
    ]
  },
  day3: {
    title: "Day 3 (9/5 週六)：☕ RYUKYU BEACH CLUB ➔ 🐘 萬座毛 ➔ 🦁 兒童王國 ➔ 🏴‍☠️ 海盜船公園 ➔ 🌮 美國村 🎆 20:00煙火",
    theme: "☕ 晨間：RYUKYU BEACH CLUB海景 ➔ 🐘 萬座毛 ➔ 🦁 沖繩兒童王國(Wonder Museum) ➔ 🏴‍☠️ 安良波海盜船 ➔ 🌮 美國村 🎆 20:00煙火",
    timeline: [
      { 
        time: "09:00 - 10:15", 
        title: "☕ 晨間海景咖啡：【RYUKYU BEACH CLUB (琉球海灘俱樂部)】", 
        desc: "【距離 BEB5 僅 3 分鐘車程！】9:00 準時開門，位於恩納村瀨良垣海濱！全開放式海景第一排沙發席，品嚐香醇冰拿鐵、特調飲品與熱帶巴西莓碗，坐擁碧海藍天！\n💡【颱風外圍海風提醒】：受颱風外圍影響海邊陣風可能較大，若戶外沙發受影響可於遮雨席位享用或短暫停留拍照打卡。", 
        tags: [{text: "☕ RYUKYU BEACH CLUB", type: "food"}, {text: "🏖️ 瀨良垣海景沙發", type: "kid"}, {text: "🚗 距BEB5僅3分鐘", type: "drive"}] 
      },
      { 
        time: "10:15 - 11:15", 
        title: "🐘 壯麗海岸地標：【萬座毛觀景台 (Manzamo)】", 
        desc: "自 Beach Club 出發（車程僅約 5~8 分鐘）！欣賞天然雕琢的象鼻形狀琉球石灰岩斷崖與蔚藍海景，漫步全新無障礙景觀步道。\n💡【防風與觀景建議】：高台海風較強，長輩小孩建議穿防風薄外套；若遇陣風較大，可至 2 樓全新室內全景落地窗展望商場內舒適眺望與拍照（全室內無障礙＆雨天OK）。", 
        tags: [{text: "🐘 象鼻岩絕景", type: "kid"}, {text: "🚗 車程: 約8分", type: "drive"}, {text: "🏛️ 2F室內觀景雨天OK", type: "rain-ok"}] 
      },
      { 
        time: "11:15 - 12:00", 
        title: "🚗 車程：恩納村 ➔ 沖繩市（車程約 35~40 分鐘）", 
        desc: "全家搭乘 8人座 Alphard，自萬座毛出發，行經沖繩自動車道（屋慶名/沖繩北 IC）前往沖繩市。", 
        tags: [{text: "🚗 車程: 約35-40分", type: "drive"}] 
      },
      { 
        time: "12:00 - 13:00", 
        title: "🍜 午餐：沖繩市人氣沖繩麵 或 園區家庭料理", 
        desc: "前往兒童王國周邊享用美味午餐！可選擇沖繩市老字號【泡瀨そば (Awase Soba)】品嚐軟嫩三枚肉與軟骨麵，或於兒童王國園內餐廳輕鬆用餐。", 
        tags: [{text: "🍜 沖繩市道地沖繩麵", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] 
      },
      { 
        time: "13:00 - 15:30", 
        title: "🦁 沖繩兒童王國 (Okinawa Zoo & Museum) ＆ 🏛️ Wonder Museum 互動館", 
        desc: "【晴雨皆宜・小孩極致放電！】園內擁有琉球弧動物園（近距離觀賞大象、長頸鹿、黑紫鳥與可愛動物）。\n🌟【雨天避風雨神級設施】：園內附設【Wonder Museum】為 3 層樓全室內冷氣科學與光影互動兒童館！若下雨或陣風大，可全時間在 Wonder Museum 盡情玩球道、光影感應與觸控科技，完全不怕颱風外圍風雨！", 
        tags: [{text: "🦁 動物園與大象", type: "kid"}, {text: "🏛️ Wonder Museum 3層室內館", type: "kid"}, {text: "☔ 雨天神級OK", type: "rain-ok"}] 
      },
      { 
        time: "15:30 - 16:00", 
        title: "🚗 車程：沖繩市 ➔ 北谷町（車程約 20 分鐘）", 
        desc: "離開兒童王國前往北谷安良波海灘。此時小朋友可在舒適的 Alphard 座椅上小睡補眠 20~30 分鐘，迅速回血！", 
        tags: [{text: "🚗 車程: 約20分", type: "drive"}, {text: "💤 小孩小睡補眠好時機", type: "kid"}] 
      },
      { 
        time: "16:00 - 17:15", 
        title: "🏴‍☠️ 戶外傍晚放電：【安良波公園・海盜船遊具 (Araha Beach)】", 
        desc: "【傍晚氣溫舒適！】一比一巨大「印度洋號」木製海盜船遊樂設施、各式溜滑梯、吊橋、攀爬網與細白沙灘踩水！傍晚太陽斜曬較不悶熱，海風徐徐。\n💡【機動彈性備案】：若抵達時陣雨或海邊風大，或小朋友在車上熟睡未醒，可直接駛往美國村（車程僅 5 分鐘），大人先到海景咖啡廳休息放空。", 
        tags: [{text: "🏴‍☠️ 印度洋號木造海盜船", type: "kid"}, {text: "🏖️ 白沙灘與滑梯放電", type: "kid"}, {text: "🎯 視風雨彈性調整", type: "kid"}] 
      },
      { 
        time: "17:15 - 17:30", 
        title: "🚗 超近車程：安良波海灘 ➔ 美濱美國村 (American Village)", 
        desc: "自安良波公園出發駛往美國村 Depot Island，車程僅約 5 分鐘！停靠於北谷町公有免費大型停車場。", 
        tags: [{text: "🚗 車程: 僅5分鐘", type: "drive"}] 
      },
      { 
        time: "17:30 - 19:50", 
        title: "☕ 晚間咖啡＆買豆：【ZHYVAGO COFFEE ROASTERS】＆ 🌮 美國村 7 人親子晚餐", 
        desc: "美濱美國村 Depot Island 漫步！造訪室內重工業美式海景烘豆廠喝極品手沖/冰拿鐵，採購招牌咖啡豆！\n🍴【7人親子晚餐精選推薦】：\n1. 🌮 Taco Rice Cafe Kijimuna (Depot Island 2F)：溫和歐姆蛋塔可飯，不辣滑蛋小朋友超愛，吃完直接下樓看煙火！\n2. 🍣 美濱迴轉壽司市場 (グルメ回転ずし市場)：大卡座適合 7 人，小朋友拿玉子燒與新鮮壽司超開心！\n3. 🍕 Chatan Harbor Brewery / Red Lobster：超寬敞室內大桌，大人喝精釀啤酒吃牛排海鮮，小朋友吃現烤披薩與義大利麵！", 
        tags: [{text: "☕ ZHYVAGO烘豆廠", type: "food"}, {text: "🌮 歐姆蛋塔可飯/美濱壽司", type: "food"}, {text: "👨‍👩‍👧‍👦 適合5大2小大桌席", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] 
      },
      { 
        time: "19:50 - 20:15", 
        title: "🎆【週六限定】美國村 20:00 海濱煙火秀 ＆ 🚗 返回 BEB5", 
        desc: "前往 Depot Island 沿海木棧道散步占位！20:00 準時施放約 3 分鐘浪漫海上煙火！\n💡【颱風風浪備註】：煙火可能因海邊強陣風或海象不佳臨時取消，建議抱持「若施放是驚喜、若取消也享受了美國村熱鬧氛圍」的輕鬆心態！\n🚗 煙火結束後啟程北返，車程約 40 分鐘返回恩納村星野 BEB5 休息。", 
        tags: [{text: "🎆 20:00 週六煙火", type: "kid"}, {text: "✨ Depot Island海濱步道", type: "kid"}, {text: "🚗 返程BEB5約40分", type: "drive"}] 
      }
    ]
  },
  day4: {
    title: "Day 4 (9/6 週日)：☕ 豆ポレポレ (世界亞軍) ➔ 🛍️ AEON來客夢 ➔ 🏖️ 納碧海灘 ➔ 🍲 BEB5和牛火鍋",
    theme: "☕ 09:00 出發 ➔ 第一站：世界亞軍咖啡買豆 ➔ 第二站：AEON午餐逛街採購 ➔ 第三站：飯店旁海灘踩水 ➔ 第四站：BEB5自煮和牛火鍋",
    timeline: [
      { 
        time: "09:00 - 09:50", 
        title: "🚗 BEB5 準時出發 ➔ 駛往沖繩市（車程約 40~45 分鐘）", 
        desc: "全家搭乘 8人座 Alphard，自星野 BEB5 瀨良垣出發，行經沖繩自動車道（屋嘉 IC ➔ 沖繩北 IC）前往沖繩市。", 
        tags: [{text: "🚗 車程: 約40-45分", type: "drive"}] 
      },
      { 
        time: "09:50 - 11:00", 
        title: "☕ 第一站：【Mame Pole Pole (豆ポレポレ)】世界烘豆亞軍咖啡＆買豆！", 
        desc: "【指定神級景點】造訪 2018 世界咖啡烘焙大賽亞軍、兩屆日本冠軍仲村良行先生的極品咖啡店！\n\n⭐【Breville Impress 拿鐵專用買豆必買清單】：\n1. 🥇【首推！專為牛奶調配】モーモーブレンド (Moo-Moo Blend / 牛牛配方)：中深焙，濃郁太妃糖、可可牛奶、極長甜感尾韻，做拿鐵天作之合！\n2. 🥈【招牌深焙・油脂爆發】がじゅまるブレンド (Gajumaru Blend / 榕樹配方)：深焙，雪松木與黑巧克力香，Crema 超厚實，重拿鐵愛好者必收！\n\n💡【買豆與現場提醒】：\n• 記得跟店員說買「豆 (Mame / Whole Bean)」，勿磨粉以保鮮。\n• 現場必喝：熱拿鐵 (Cafe Latte) 或 平白咖啡 (Flat White) 體驗冠軍拉花！\n• 餐點提醒：店內無熱食早餐，以咖啡外帶與少量常溫餅乾磅蛋糕為主。", 
        extraHtml: `
          <div class="menu-embed-box" style="border-color: rgba(245, 158, 11, 0.4); background: rgba(30, 41, 59, 0.85);">
            <div class="menu-embed-header">
              <h4 style="color: #fbbf24;">☕ Breville Impress 拿鐵專用・Mame Pole Pole 推薦買豆</h4>
              <span class="tag food">世界亞軍烘豆師・仲村良行</span>
            </div>
            <div class="menu-items-table">
              <div class="menu-item-row" style="background: rgba(15, 23, 42, 0.7); border-color: rgba(245, 158, 11, 0.3);">
                <div class="menu-item-top">
                  <div class="menu-item-name" style="color: #fbbf24;">🥇 推薦 1：モーモーブレンド (Moo-Moo Blend / 牛牛配方)</div>
                  <div class="menu-price-tag"><span class="tag food">中深焙</span></div>
                </div>
                <div class="menu-item-desc">✨ <strong>專為牛奶調配的冠軍配方！</strong> 濃郁太妃糖、可可牛奶與黑糖甜感。搭配 Breville Impress 的 54mm 把手與細緻奶泡，甜感爆棚，宛如喝黑糖巧克力牛奶！</div>
              </div>

              <div class="menu-item-row" style="background: rgba(15, 23, 42, 0.7); border-color: rgba(56, 189, 248, 0.3);">
                <div class="menu-item-top">
                  <div class="menu-item-name" style="color: #38bdf8;">🥈 推薦 2：がじゅまるブレンド (Gajumaru Blend / 榕樹配方)</div>
                  <div class="menu-price-tag"><span class="tag food">深焙</span></div>
                </div>
                <div class="menu-item-desc">✨ <strong>店內鎮店傳奇招牌！</strong> 雪松木香氣、深焙黑巧克力、厚實油脂感（Full Body）。Crema 超級飽滿，做大杯熱拿鐵或冰拿鐵咖啡香依然濃醇扎實！</div>
              </div>

              <div style="padding: 10px 14px; background: rgba(2, 132, 199, 0.15); border-radius: 6px; font-size: 0.85rem; color: #93c5fd; line-height: 1.5; border: 1px solid rgba(56, 189, 248, 0.2);">
                ⚙️ <strong>Breville Impress 萃取參數備忘</strong>：雙份粉碗約 18g~19g（笑臉綠燈）｜ 研磨刻度約 12~15 ｜ 萃取 36g~40g 濃縮（約 25~30 秒）｜ 蒸奶 1:4~1:5 注入！買豆請指名「<strong>豆（Mame / 不磨粉）</strong>」。
              </div>
            </div>
          </div>
        `,
        tags: [
          {text: "🥇 2018世界烘豆亞軍", type: "food"}, 
          {text: "☕ 推薦1: Moo-Moo 牛牛配方", type: "food"}, 
          {text: "☕ 推薦2: Gajumaru 榕樹配方", type: "food"}, 
          {text: "⚙️ 附 Breville 參數", type: "food"},
          {text: "☔ 雨天OK", type: "rain-ok"}
        ] 
      },
      { 
        time: "11:00 - 15:00", 
        title: "🛍️ 第二站：【AEON MALL 永旺夢樂城來客夢】午餐＋吹冷氣逛街＋超市採買和牛火鍋！", 
        desc: "自 Mame Pole Pole 出發車程僅約 10 分鐘！全沖繩最大室內購物中心！\n\n🍴【11:15 - 12:30 輕鬆午餐】：3F/4F 美食街或主題餐廳街，豐富日式拉麵、牛排、海鮮丼與兒童餐應有盡有！\n🛍️【12:30 - 14:15 吹冷氣逛街】：看一樓巨型大水族箱看熱帶魚、逛寶可夢中心、阿卡將本鋪母嬰、玩具反斗城、BicCamera 吹冷氣放鬆！\n🥩【14:15 - 15:00 超市火鍋大採購】：前往 2F 【AEON Style 超市】大採購今晚火鍋食材：\n• 沖繩產 A5 黑毛和牛 / 石垣牛火鍋肉片\n• 阿古豬（Agu）頂級火鍋肉片\n• 日式高湯包、烏龍麵、鮮甜白菜菇類、生魚片握壽司拼盤\n• 沖繩鮮切水果與特色飲品（超市提供免費碎冰，放入保冷袋）！", 
        tags: [
          {text: "🏬 沖繩最大室內Mall", type: "kid"}, 
          {text: "🍜 豐盛午餐", type: "food"}, 
          {text: "🛒 AEON超市大採購", type: "food"}, 
          {text: "🥩 A5黑毛和牛＆阿古豬", type: "food"}, 
          {text: "☔ 雨天OK", type: "rain-ok"}
        ] 
      },
      { 
        time: "15:00 - 15:45", 
        title: "🚗 車程：AEON 來客夢 ➔ 恩納村 BEB5 瀨良垣（車程約 40 分鐘）", 
        desc: "全家乘車北返恩納村。可先順路將買好的和牛食材冰入 BEB5 客房大冰箱，換上海灘拖鞋與毛巾（海灘距飯店僅 5 分鐘！），小朋友也可在車上小憩片刻。", 
        tags: [{text: "🚗 車程: 約40分", type: "drive"}, {text: "🧊 食材先冰回飯店冰箱", type: "food"}] 
      },
      { 
        time: "15:45 - 17:15", 
        title: "🏖️ 第三站：飯店旁海灘【恩納村海濱公園・納碧海灘 (Nabee Beach)】踩水玩沙！", 
        desc: "【距離 BEB5 僅 5 分鐘車程！】（Mapcode: 206 312 098*88｜電話: 098-966-8839）\n🌟【跟安良波、古宇利一樣適合小孩的親子神級海灘！】：\n• 🅿️ 免費停車、免費入場！\n• 🌊 凹型天然海灣＋防波堤保護，風浪平緩如湖面、水淺澈透，設有安全防護網，2位小朋友踩水踏浪超安心！\n• 🏖️ 純白細緻沙灘，堆沙堡、抓小寄居蟹極度舒適！\n• 🛖 紅瓦遮陽涼亭：大人與長輩可舒服坐在陰涼處看海吹風。\n• 🚿 免費洗腳水龍頭、投幣更衣淋浴間一應俱全，玩完沖洗乾淨 5 分鐘輕鬆開回飯店！", 
        tags: [
          {text: "🏖️ 納碧海灘(距BEB5僅5分)", type: "kid"}, 
          {text: "🅿️ 免費停車與入場", type: "drive"}, 
          {text: "🌊 浪平水淺/細白沙灘", type: "kid"}, 
          {text: "🛖 紅瓦涼亭舒適看海", type: "kid"}
        ] 
      },
      { 
        time: "17:30 - 21:00", 
        title: "🍲 第四站：星野 BEB5 客房廚房【DIY 頂級 A5 和牛＆阿古豬火鍋圍爐大餐】", 
        desc: "自海灘回飯店後，全家洗個舒服的熱水澡，換上最放鬆的居家服！\n100% 室內私密溫馨時光！充分利用套房內完整的大廚房、流理台、大冰箱與 IH 爐，熱騰騰煮好日式高湯，5大2小 圍著餐桌享用下午在 AEON 採購的 A5 黑毛和牛、阿古豬與生魚片壽司！\n隨心所欲、溫馨愜意，享受無拘無束的高品質家庭圍爐之夜！", 
        tags: [
          {text: "🍲 BEB5 溫馨和牛火鍋", type: "food"}, 
          {text: "🥩 頂級A5和牛＆阿古豬", type: "food"}, 
          {text: "👨‍👩‍👧‍👦 5大2小家庭圍爐", type: "kid"}, 
          {text: "☔ 雨天OK", type: "rain-ok"}
        ] 
      }
    ]
  },
  day5: {
    title: "Day 5 (9/7 週一)：壺屋陶器街 (yacchi&moon餐具/☕陶藝咖啡) ➔ 國際通 ➔ ☕ 瀨長島咖啡 ➔ 🛫 送機 ➔ NEST NAHA",
    theme: "☕ 上午：壺屋陶藝手沖 ＆ 🍶 yacchi&moon 質感餐具 ＆ ☕ 下午：瀨長島海景咖啡 ＆ 17:30 機場送機",
    timeline: [
      { time: "09:00 - 09:50", title: "BEB5 退房 & 行李載上 8人座 Alphard 往那霸市區出發", desc: "辦理 BEB5 退房，全家 7 人與所有行李載上 8人座 Alphard 駛往那霸壺屋。（車程約 50 分鐘）", tags: [{text: "🚗 車程: 約50分", type: "drive"}] },
      { time: "10:00 - 12:00", title: "☕ 上午咖啡＆選物：壺屋陶器街 ＆ yacchi&moon 質感餐具 ＆ 陶藝咖啡", desc: "漫步壺屋陶器街。造訪知名室內選物店【yacchi&moon】（選購可愛手作陶器餐具、盤子、小熊杯具）。於古民家室內陶藝咖啡館品嚐手沖咖啡！", tags: [{text: "🏺 yacchi&moon手作餐具", type: "food"}, {text: "☕ 壺屋陶藝咖啡", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "12:00 - 14:30", title: "🛍️ 那霸國際通商圈購物 ＆ 午餐 (豬肉蛋飯糰 / 暖暮拉麵)", desc: "國際通設有全遮雨【平和通】與【市場本通】商店街！雨天也能開心逛街採購伴手禮（紅芋塔、雪鹽、黑糖），午餐享用【Potama 豬肉蛋飯糰 牧志本店】或暖暮拉麵。", tags: [{text: "🛍️ 國際通商圈購物", type: "food"}, {text: "🍙 Potama豬肉蛋飯糰", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "14:45 - 16:45", title: "☕ 下午咖啡：瀨長島 (Umikaji Terrace) 幸福鬆餅海景咖啡（距離機場僅 10 分鐘）", desc: "前往位在機場附近的【瀨長島】，於室內/半戶外座位享用幸福鬆餅配上一杯冰拿鐵/美式咖啡，看飛機起降。", tags: [{text: "☕ 瀨長島海景咖啡", type: "food"}, {text: "🥞 幸福鬆餅", type: "food"}] },
      { time: "17:00 - 17:30", title: "🛫 17:30 抵達那霸機場國際線航廈 (送機 3 位大人)", desc: "駕駛 Alphard 直達國際線航廈出入口。全室內航廈大樓，目送 3 位大人辦理華航 CI 113 班機報到手續！", tags: [{text: "✈️ 華航 CI 113 (3大人返台)", type: "drive"}, {text: "👋 機場順利送機", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "17:45 - 18:45", title: "2大2小入住 THE NEST NAHA & 頂樓無邊際泳池", desc: "剩下的 2大2小 駕駛 Alphard 前往市區 2025 新開幕【THE NEST NAHA】飯店辦理 Check-in，體驗頂級新設施！", tags: [{text: "🏊 頂樓無邊際泳池", type: "kid"}, {text: "🏨 2025新開幕", type: "drive"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "19:00 - 21:00", title: "波上宮參拜 ＆ 晚餐：傑克牛排 (Jack's Steak House)", desc: "參拜懸崖神社【波上宮】，晚餐享用老字號室內美式【傑克牛排】多汁菲力牛排！", tags: [{text: "🥩 美式菲力牛排", type: "food"}, {text: "⛩️ 波上宮參拜", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] }
    ]
  },
  day6: {
    title: "Day 6 (9/8 週二)：飯店退房 ➔ 還車接駁 ➔ ☕ 那霸機場 35 COFFEE ➔ 搭乘華航 CI 121 返台 (2大2小)",
    theme: "☕ 晨間咖啡：那霸機場 35 COFFEE (珊瑚咖啡) ＆ ✈️ 11:50 華航 CI 121 返台",
    timeline: [
      { time: "07:30 - 08:15", title: "☕ 上午咖啡：THE NEST NAHA 頂樓池畔晨間咖啡 & 退房", desc: "享用飯店早餐或頂樓池畔晨間咖啡，整理行李準備退房。", tags: [{text: "☕ 池畔晨間咖啡", type: "food"}, {text: "🏨 退房出發", type: "drive"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "08:15 - 08:45", title: "加油站加滿油 & 歸還 8人座 Alphard", desc: "駕駛至那霸機場附近的租車營業所，將油箱加滿並辦理還車手續。", tags: [{text: "⛽ 加滿油還車", type: "drive"}] },
      { time: "08:45 - 09:15", title: "搭乘租車接駁車至那霸機場國際線航廈", desc: "抵達機場航廈，時間非常充裕，無縫銜接登機手續。", tags: [{text: "🚌 機場接駁", type: "drive"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "09:15 - 11:50", title: "☕ 離境咖啡＆買豆：那霸機場【35 COFFEE】(珊瑚烘焙咖啡)", desc: "2大2小辦理華航 CI 121 報到托運。品嚐現做【豬肉蛋飯糰】，於【35 COFFEE】喝珊瑚烘焙咖啡並採購特產咖啡豆！", tags: [{text: "☕ 35 COFFEE珊瑚咖啡", type: "food"}, {text: "🛍️ 買珊瑚咖啡豆", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "11:50 - 12:35", title: "搭乘華航 CI 121 班機返抵台灣 (OKA ➔ TPE)", desc: "11:50 那霸機場起飛，台灣時間 12:35 順利抵達桃園機場第一航廈，結束快樂充實的沖繩 6 天 5 夜之旅！", tags: [{text: "✈️ 華航 CI 121 返台", type: "drive"}] }
    ]
  }
};

const gourmetData = [
  { name: "OKINAWA CERRADO COFFEE BeansStore (PARCO CITY 1F 橘區)", category: "cafe", location: "SAN-A PARCO CITY 1F Orange Zone", desc: "☕ 老字號烘豆廠分店！位在 PARCO CITY 1 樓橘區，提供單品手沖、外帶義式咖啡、特製濾掛包與精品豆！【☔ 雨天OK】" },
  { name: "King Tacos 名護店 (Day 2 順路外帶首選)", category: "cafe", location: "名護市 (國道58號旁)", desc: "🍱 沖繩塔可飯創始元祖！大盒裝經典起司牛肉塔可飯，份量極大，外帶回 BEB5 客房享用超正宗！" },
  { name: "燒肉乃我那霸 名護店 (Day 2 外帶和牛/阿古豬便當)", category: "yakiniku", location: "名護市區", desc: "🥩 🍱 名護知名燒肉店特製「A5和牛燒肉便當」與「阿古豬排便當」，外帶回飯店配冷飲超滿足！" },
  { name: "Pizzeria da ENZO 恩納村店 (Day 2 外帶窯烤披薩)", category: "cafe", location: "恩納村 (BEB5車程10分)", desc: "🍕 外帶現烤木爐披薩 (阿古豬香腸披薩、四種起司披薩) 與義大利麵！回 BEB5 TAMARIBA 享用極舒適。" },
  { name: "AEON 名護店 超市熟食大採購 (Day 2 順路超市)", category: "yakiniku", location: "名護市國道旁", desc: "🛒 🍱 超大型超市！新鮮生魚片壽司拼盤、日式炸雞、燒鳥串燒、沖繩芒果與飲品大採購。" },
  { name: "Taco Rice Cafe Kijimuna (Depot Island 2F - 美國村親子首選)", category: "cafe", location: "美濱美國村 Depot Island 2F", desc: "🌮 沖繩經典「歐姆蛋塔可飯」(Omutaco)！滑嫩半熟歐姆蛋配上不辣起司與肉醬，小朋友超級愛吃！座位寬敞，位在 ZHYVAGO 樓上與煙火步道旁。【☔ 雨天OK】" },
  { name: "美濱迴轉壽司市場 (グルメ回転ずし市場 美浜店)", category: "cafe", location: "美濱美國村", desc: "🍣 超人氣迴轉壽司！大型寬敞沙發卡座極度適合 5大2小 7人用餐。新鮮大塊生魚片壽司、玉子燒、炸天婦羅與熱騰騰烏龍麵，大人小朋友都滿意。【☔ 雨天OK】" },
  { name: "Chatan Harbor Brewery & Restaurant", category: "cafe", location: "北谷港邊 (美國村周邊)", desc: "🍺 🍕 極致寬敞的港灣海景餐廳！大人享受特製黑潮精釀啤酒與熟成牛排，小朋友享用現烤木爐披薩與義大利麵，空間極大可輕鬆容納7大桌。【☔ 雨天OK】" },
  { name: "安良波海灘 (Araha Beach) - 海盜船公園 (Day 1 主要行程)", category: "cafe", location: "北谷町 (距琉球之牛5分)", desc: "🏴‍☠️ 擁有巨大「印度洋號木製海盜船遊樂設施」、白沙灘踩水與海濱步道！2 位小朋友極致放電首選。" },
  { name: "OKINAWA CERRADO COFFEE (港川總店 - Day 1 備案)", category: "cafe", location: "港川外人住宅街", desc: "☕ 創立於 1986 年老字號文青烘豆廠，白色小木屋風格，精緻單品手沖與特製濾掛包。【☔ 雨天/買豆備案】" },
  { name: "CAMEL SANDWICH & SMOOTHIE (Day 2 專屬早餐)", category: "cafe", location: "本部町 (距水族館10分)", desc: "🥪 沖繩超人氣現做熱壓三明治 (BLT/西西里羅勒雞肉)、現打黑糖香蕉/阿薩伊果昔與晨間香醇冰拿鐵！【☔ 雨天OK】" },
  { name: "Satchan Soba (幸ちゃんそば - Day 3 午餐)", category: "soba", location: "名護市", desc: "🍜 名護人氣極高的在地沖繩麵！家常燉煮軟骨排骨(Soki)與軟嫩三層肉，提供特製艾草麵條選項。【☔ 雨天OK】" },
  { name: "古宇利大橋南詰展望所 (Day 2 拍照勝地)", category: "cafe", location: "屋我地島 (本島側橋頭)", desc: "📸 拍攝古宇利大橋延伸入果凍海絕景的頂級拍照展望點！免費停車場，有沙灘步道。" },
  { name: "Kouri Shrimp 蝦蝦飯 ＆ Benny's Bowl 巴西莓碗 (Day 2)", category: "cafe", location: "古宇利島", desc: "🍤 🥣 同棟大樓！2 樓為蒜味奶油夏威夷蝦蝦飯，1 樓為 sister shop【Benny's】鮮果巴西莓碗 (Acai Bowl)，二樓海景陽台一同享用。" },
  { name: "古宇利海灘 (Kouri Beach - Day 2 超順路踩水)", category: "cafe", location: "古宇利大橋下", desc: "🏖️ 浪平水淺、細白沙灘、洗腳與沖洗設施齊全！位在蝦蝦飯樓下，2位小朋友踩水玩沙首選。" },
  { name: "恩納村海濱公園・納碧海灘 (Nabee Beach - Day 4 飯店旁海灘)", category: "cafe", location: "恩納村 (距BEB5僅5分)", desc: "🏖️ 距離 BEB5 僅 5 分鐘！免費停車、免費入場！天然內灣防波堤、浪平水淺、細白沙灘、免費洗腳水龍頭、紅瓦涼亭，帶幼童踩水玩沙極度安心首選。" },
  { name: "RYUKYU BEACH CLUB (琉球海灘俱樂部)", category: "cafe", location: "恩納村瀨良垣", desc: "☕ 瀨良垣海景第一排全開放式沙發座位，品嚐冰拿鐵、特調飲品與巴西莓碗，觀賞絕美夕陽風光。" },
  { name: "琉球之牛 (北谷店) - 已訂位 17:00", category: "yakiniku", location: "北谷町美濱", desc: "🥩 【預約號 #MR3Q6W】沖繩必吃 A5 沖繩縣產黑毛和牛燒肉與鎮店炙燒和牛壽司！【☔ 雨天OK】" },
  { name: "Mame Pole Pole (豆ポレポレ)", category: "cafe", location: "沖繩市", desc: "🥇 2018 世界咖啡烘焙大賽亞軍！【Breville Impress 拿鐵必買】：1. Moo-Moo 牛牛配方（專為牛奶調配）、2. Gajumaru 榕樹配方（招牌深焙Crema爆發）！記得指名買原豆勿磨粉。【☔ 雨天OK】" },
  { name: "ZHYVAGO COFFEE ROASTERS", category: "cafe", location: "美濱美國村", desc: "☕ 美國村海景第一排重工業風美式烘豆廠，質感手沖與超酷復古包裝咖啡豆。【☔ 雨天OK】" },
  { name: "Craft House yacchi&moon (壺屋陶器街)", category: "naha", location: "那霸/壺屋", desc: "超人氣手作陶器餐具專賣店！經典盤子、馬克杯、熊熊器皿與文青擺飾。【☔ 雨天OK】" },
  { name: "AEON Style 超市 沖繩A5黑毛和牛", category: "yakiniku", location: "AEON Rycom", desc: "販售頂級沖繩A5黑毛和牛、石垣牛與阿古豬火鍋肉片，搭配日式火鍋高湯包於 BEB5 自煮。【☔ 雨天OK】" },
  { name: "A&W 美式漢堡 (PARCO CITY / 牧港店)", category: "naha", location: "浦添/那霸", desc: "沖繩美式漢堡始祖！必吃莫札瑞拉起司堡、捲捲薯條 (Curly Fries) 與免費續杯 Root Beer。【☔ 雨天OK】" },
  { name: "Blue Seal 冰淇淋 (美國村店)", category: "cafe", location: "全沖繩", desc: "沖繩標誌性美式冰淇淋，必吃鹽金楚餅 (Salt Cookies)、紅芋 (Beni-imo) 與香檸 (Shikuwasa) 口味。【☔ 雨天OK】" },
  { name: "百年古家 大家 (Ufuya)", category: "soba", location: "名護市", desc: "百年琉球古民家，景觀庭園瀑布造景，阿古豬涮涮鍋與古家沖繩麵。【☔ 雨天OK】" },
  { name: "傑克牛排 (Jack's Steak)", category: "naha", location: "那霸市區", desc: "昭和風味美式牛排館，菲力牛排嫩口多汁，那霸在地人強烈推薦。【☔ 雨天OK】" },
  { name: "幸福鬆餅 (A Happy Pancake)", category: "cafe", location: "瀨長島", desc: "極致鬆軟的舒芙蕾鬆餅，配上夕陽海景與飛機起降。" }
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
          <div class="timeline-desc" style="white-space: pre-line;">${item.desc}</div>
          ${item.extraHtml ? item.extraHtml : ''}
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
