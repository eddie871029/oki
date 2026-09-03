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
    title: "Day 3 (9/5 週六)：鳳梨園 ➔ 🍜 Satchan Soba ➔ 萬座毛 ➔ ☕ RYUKYU BEACH CLUB ➔ 美國村 ☕ ZHYVAGO 🎆 20:00煙火！",
    theme: "☕ 上午：鳳梨冷萃 ➔ 🍜 名護 Satchan Soba ➔ ☕ 下午：RYUKYU BEACH CLUB沙發海景 ➔ ☕ 晚間：ZHYVAGO & 美國村7人親子晚餐 🎆 20:00煙火",
    timeline: [
      { time: "10:00 - 12:30", title: "☕ 上午咖啡：名護鳳梨園 (Pineapple Park) 特調冷萃咖啡", desc: "【雨天超完美景點】搭乘全遮雨防雨設施的自動駕駛「鳳梨遊覽車」穿梭熱帶植物園區，室內熱帶溫室與鳳梨試飲品嚐區，享用鳳梨冷萃咖啡！", tags: [{text: "🍍 自動駕駛鳳梨車", type: "kid"}, {text: "☕ 鳳梨冷萃咖啡", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "12:30 - 13:30", title: "🍜 午餐：名護人氣名店【Satchan Soba (幸ちゃんそば)】（或 宮里麵）", desc: "名護極具盛名的在地人氣沖繩麵！濃郁醇厚的家常高湯、Q彈手工麵條與燉煮至極致軟嫩的軟骨排骨(Soki)與三層肉！亦有特製艾草麵條可選，室內舒適冷氣席。（☔ 雨天 OK）", tags: [{text: "🍜 Satchan Soba (幸ちゃんそば)", type: "food"}, {text: "🥩 軟骨排骨沖繩麵", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "14:00 - 15:00", title: "萬座毛觀景台 (Manzamo)", desc: "欣賞天然雕琢的象鼻形狀琉球石灰岩斷崖，走訪全新建成的無障礙景觀步道。（戶外景點）", tags: [{text: "🚗 車程: 約30分", type: "drive"}, {text: "🐘 象鼻岩景致", type: "kid"}] },
      { time: "15:30 - 17:30", title: "☕ 下午咖啡：【RYUKYU BEACH CLUB (琉球海灘俱樂部)】海景第一排沙發咖啡廳", desc: "位於恩納村瀨良垣海濱！全開放式海景第一排戶外沙發席，品嚐冰拿鐵、特調飲品與巴西莓碗，看海聽浪。", tags: [{text: "☕ RYUKYU BEACH CLUB", type: "food"}, {text: "🏖️ 瀨良垣海景沙發", type: "kid"}] },
      { time: "18:00 - 19:45", title: "☕ 晚間咖啡＆買豆：【ZHYVAGO COFFEE ROASTERS】＆ 🌮 美國村 7 人親子晚餐", desc: "美濱美國村 Depot Island！造訪室內重工業美式海景烘豆廠喝極品手沖/冰拿鐵，買美式復古包裝咖啡豆！\n🍴【7人親子晚餐精選推薦】：\n1. 🌮 Taco Rice Cafe Kijimuna (Depot Island 2F)：溫和歐姆蛋塔可飯，不辣滑蛋小朋友超愛，吃完直接下樓看煙火！\n2. 🍣 美濱迴轉壽司市場 (グルメ回転ずし市場)：大卡座適合7人，小朋友拿玉子燒與新鮮壽司超開心！\n3. 🍕 Chatan Harbor Brewery / Red Lobster：超寬敞室內大桌，大人喝精釀啤酒吃牛排海鮮，小朋友吃現烤披薩與義大利麵！", tags: [{text: "☕ ZHYVAGO烘豆廠", type: "food"}, {text: "🌮 歐姆蛋塔可飯/美濱壽司", type: "food"}, {text: "👨‍👩‍👧‍👦 適合5大2小大桌席", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "19:50 - 20:10", title: "🎆【重點大推】美國村週六 20:00 海濱煙火秀 (Chatan Fireworks)", desc: "預先前往 Depot Island 沿海步道占位！20:00 準時施放約 3 分鐘璀璨浪漫的海上煙火。（如逢雨天風浪大可能彈性調整）", tags: [{text: "🎆 20:00 準時煙火", type: "kid"}, {text: "✨ Depot Island coastal boardwalk", type: "kid"}] }
    ]
  },
  day4: {
    title: "Day 4 (9/6 週日)：兒童王國 ➔ ☕ 豆ポレポレ (Mame Pole Pole世界亞軍咖啡) ➔ AEON ➔ 🍲 BEB5和牛火鍋",
    theme: "🥇 ☕ 重頭戲：造訪 Mame Pole Pole (世界烘豆亞軍) 買極品咖啡豆 ＆ 🍲 BEB5 自煮和牛火鍋",
    timeline: [
      { time: "09:30 - 10:15", title: "☕ 上午咖啡：BEB5 瀨良垣 晨間咖啡 ➔ 駛往沖繩市", desc: "享用 BEB5 晨間咖啡，行經國道出發前往位於沖繩市的兒童王國樂園。", tags: [{text: "☕ BEB5晨間咖啡", type: "food"}, {text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "10:15 - 13:00", title: "沖繩兒童王國 (Okinawa Zoo & Museum)", desc: "園內附設【Wonder Museum】為 3 層樓全室內冷氣雨天無敵互動兒童科學館！若下雨可全時間在 Wonder Museum 玩樂解鎖科技互動體驗。", tags: [{text: "🦁 動物園與兒童館", type: "kid"}, {text: "🏛️ Wonder Museum室內館", type: "kid"}, {text: "☔ 雨天OK (Wonder Museum)", type: "rain-ok"}] },
      { time: "13:30 - 14:45", title: "☕ 下午咖啡＆重頭戲：【Mame Pole Pole (豆ポレポレ)】世界烘豆亞軍咖啡！", desc: "【指定神級景點】造訪 2018 世界咖啡烘焙大賽亞軍、兩屆日本冠軍仲村良行先生的【Mame Pole Pole】室內極品咖啡店！現場品嚐神級單品，採購招牌 Gajumaru 豆與沖繩在地 Ada Farm 極品咖啡豆！", tags: [{text: "🥇 Mame Pole Pole世界亞軍", type: "food"}, {text: "🛍️ 採購世界級咖啡豆", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "15:00 - 17:30", title: "AEON MALL 永旺夢樂城來客夢 ＆ 超市和牛大採購", desc: "全沖繩最大型室內購物中心！逛阿卡將本鋪母嬰用品、玩具反斗城。前往 1F 【AEON Style 超市】採購今晚火鍋食材：沖繩 A5 黑毛和牛/石垣牛火鍋肉片、阿古豬、高湯包與水果！", tags: [{text: "🛒 AEON超市採購和牛", type: "food"}, {text: "🥩 沖繩A5黑毛和牛", type: "food"}, {text: "☔ 雨天OK", type: "rain-ok"}] },
      { time: "17:30 - 18:30", title: "載著滿滿食材駛回星野 BEB5 瀨良垣", desc: "將新鮮和牛、阿古豬與蔬菜裝入保冷袋載回飯店。（車程約 40 分鐘）", tags: [{text: "🚗 車程: 約40分", type: "drive"}] },
      { time: "18:30 - 21:00", title: "🍲 晚餐：BEB5 飯店套房廚房【DIY 頂級和牛＆阿古豬火鍋大餐】", desc: "100% 室內舒適空間！充分利用 BEB5 房間內完整的廚房設施與大冰箱，用 IH 電磁爐煮高湯，全家 5大2小 溫馨圍爐享用 A5 和牛與阿古豬火鍋，完全不怕屋外風雨！", tags: [{text: "🍲 BEB5 溫馨和牛火鍋", type: "food"}, {text: "🥂 溫馨家庭時光", type: "kid"}, {text: "☔ 雨天OK", type: "rain-ok"}] }
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
  { name: "RYUKYU BEACH CLUB (琉球海灘俱樂部)", category: "cafe", location: "恩納村瀨良垣", desc: "☕ 瀨良垣海景第一排全開放式沙發座位，品嚐冰拿鐵、特調飲品與巴西莓碗，觀賞絕美夕陽風光。" },
  { name: "琉球之牛 (北谷店) - 已訂位 17:00", category: "yakiniku", location: "北谷町美濱", desc: "🥩 【預約號 #MR3Q6W】沖繩必吃 A5 沖繩縣產黑毛和牛燒肉與鎮店炙燒和牛壽司！【☔ 雨天OK】" },
  { name: "Mame Pole Pole (豆ポレポレ)", category: "cafe", location: "沖繩市", desc: "🥇 2018 世界咖啡烘焙大賽亞軍、兩屆日本冠軍仲村良行先生的極品咖啡店！必買 Gajumaru 豆與安田農園沖繩豆。【☔ 雨天OK】" },
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
