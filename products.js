// ============================================
// 银龄国际用品店 - 产品数据（80个商品）
// ============================================
// 生成时间: 2026-02-10
// 数据来源: 京东联盟

const products = [
    // ========== 健康监测 (20个) ==========
    {"id":1,"title":"鱼跃电子血压计 YE660A 上臂式 大屏显示 语音播报 父母健康监测送礼佳品","category":"health","categoryName":"健康监测","price":168,"originalPrice":299,"sales":25800,"tags":["京东配送","爆款推荐"],"icon":"🩺","description":"上臂式电子血压计，语音播报测量结果，大屏显示适合老年人使用。智能加压，一键测量。","commission":25.2},
    {"id":2,"title":"三诺血糖仪 GA-3 家用免调码 5秒快速测血糖 糖尿病检测 50片试纸+50个采血针","category":"health","categoryName":"健康监测","price":89,"originalPrice":159,"sales":18600,"tags":["免调码","快速测量"],"icon":"🩸","description":"家用血糖仪套装，免调码设计，5秒快速出结果。微量采血，疼痛感低。","commission":13.35},
    {"id":3,"title":"华为智能手环8 标准版 心率血氧监测 睡眠分析 运动计步 50米防水 黑色","category":"health","categoryName":"健康监测","price":299,"originalPrice":499,"sales":12300,"tags":["心率监测","睡眠分析"],"icon":"⌚","description":"智能健康手环，实时监测心率和血氧饱和度。科学睡眠分析，100种运动模式。","commission":44.85},
    {"id":4,"title":"博朗耳温枪 IRT6520 婴儿成人通用 1秒精准测温 发烧提醒 耳温计","category":"health","categoryName":"健康监测","price":128,"originalPrice":198,"sales":34200,"tags":["1秒测温","发烧提醒"],"icon":"🌡️","description":"红外线耳温枪，1秒精准测温。发烧提醒功能，对准耳膜一键测温。","commission":19.2},
    {"id":5,"title":"欧姆龙制氧机 3L医用级 Y-306W 带雾化功能 老人孕妇吸氧机 氧气机","category":"health","categoryName":"健康监测","price":2680,"originalPrice":3980,"sales":5600,"tags":["医用级","雾化功能"],"icon":"💨","description":"3L制氧机，医用级标准。带雾化功能，氧浓度93%±3%，可定时关机。","commission":402},
    {"id":6,"title":"乐心心电血压手环5s 实时心率监测 30秒快速测量 房颤筛查 黑色","category":"health","categoryName":"健康监测","price":399,"originalPrice":699,"sales":8900,"tags":["房颤筛查","APP记录"],"icon":"💓","description":"便携式心电监测仪，30秒快速测量。连接手机APP记录分析，筛查房颤风险。","commission":59.85},
    {"id":7,"title":"康泰医学血氧仪 CMS50D 指夹式 血氧饱和度监测 脉率检测 OLED屏","category":"health","categoryName":"健康监测","price":58,"originalPrice":98,"sales":45600,"tags":["轻巧便携","4向显示"],"icon":"🫀","description":"指夹式血氧仪，小巧便携。OLED四向显示，亮度可调，一键测量。","commission":8.7},
    {"id":8,"title":"有品智能体脂秤 体重秤 身体数据监测 APP分析 蓝牙连接 白色","category":"health","categoryName":"健康监测","price":99,"originalPrice":169,"sales":23400,"tags":["体脂分析","APP同步"],"icon":"⚖️","description":"智能体脂秤，测量13项身体数据。连接APP长期追踪分析，科学管理健康。","commission":14.85},
    {"id":9,"title":"欧姆龙电子体温计 MC-246 腋下测量 快速精准 家用儿童成人温度计","category":"health","categoryName":"健康监测","price":45,"originalPrice":78,"sales":28900,"tags":["腋下测量","快速精准"],"icon":"🌡️","description":"电子体温计，腋下测量，快速精准。LCD大屏显示，蜂鸣提示测量完成。","commission":6.75},
    {"id":10,"title":"鱼跃健康监测套装 血压计+血糖仪+体温计 送长辈、送父母、送健康","category":"health","categoryName":"健康监测","price":499,"originalPrice":899,"sales":6700,"tags":["套装组合","送礼佳品"],"icon":"🩺","description":"健康监测套装，包含鱼跃血压计、三诺血糖仪、电子体温计。送礼首选。","commission":74.85},
    {"id":11,"title":"飞利浦雾化器 Innospire 家用儿童成人 雾化治疗 静音设计 白色","category":"health","categoryName":"健康监测","price":358,"originalPrice":598,"sales":4500,"tags":["雾化治疗","静音设计"],"icon":"💨","description":"家用雾化器，静音设计，出雾细腻均匀。适合哮喘、支气管炎等呼吸疾病。","commission":53.7},
    {"id":12,"title":"三诺尿酸检测仪 EA19 家用 血糖尿酸一机双测 痛风监测 50片尿酸试纸","category":"health","categoryName":"健康监测","price":198,"originalPrice":328,"sales":5600,"tags":["尿酸检测","一机双测"],"icon":"🩸","description":"尿酸检测仪，一机可测尿酸、血糖。痛风患者日常监测必备。","commission":29.7},
    {"id":13,"title":"华为智选睡眠监测仪 非接触式 实时监测 呼吸心率异常报警 白色","category":"health","categoryName":"健康监测","price":399,"originalPrice":699,"sales":3200,"tags":["睡眠分析","呼吸监测"],"icon":"😴","description":"睡眠监测仪，非接触式监测睡眠质量。检测呼吸心率异常并报警。","commission":59.85},
    {"id":14,"title":"肺活量训练器 呼吸训练仪 家用增大肺活量 锻炼呼吸肌肉 赠配件","category":"health","categoryName":"健康监测","price":128,"originalPrice":218,"sales":2800,"tags":["呼吸训练","肺活量"],"icon":"💨","description":"呼吸训练器，增强肺活量，改善呼吸功能。适合术后康复、老人锻炼。","commission":19.2},
    {"id":15,"title":"鱼跃电子血压计 YE670A 上臂式 臂筒式 精准测量 智能加压 语音播报","category":"health","categoryName":"健康监测","price":298,"originalPrice":498,"sales":18900,"tags":["臂筒式","精准测量"],"icon":"🩺","description":"臂筒式电子血压仪，比腕式更精准。智能加压，语音播报，双人记忆。","commission":44.7},
    {"id":16,"title":"秒秒测智能体温贴 婴儿温度贴 持续监测 24小时 高温报警 手机APP记录","category":"health","categoryName":"健康监测","price":68,"originalPrice":118,"sales":8900,"tags":["持续监测","高温报警"],"icon":"🌡️","description":"智能体温贴，24小时持续监测体温。高温报警，APP远程查看。","commission":10.2},
    {"id":17,"title":"华为智能手表WATCH4 火星钛 运动健康 心率血氧血糖趋势评估 一键微体检","category":"health","categoryName":"健康监测","price":2699,"originalPrice":3999,"sales":4500,"tags":["血糖趋势","微体检"],"icon":"⌚","description":"华为智能手表，心率血氧血糖趋势评估。一键微体检，60+运动模式。","commission":404.85},
    {"id":18,"title":"乐普家用制氧机 5L医用级 老人孕妇吸氧机 氧气机 93%氧浓度 V5","category":"health","categoryName":"健康监测","price":3580,"originalPrice":5280,"sales":5800,"tags":["5L大流量","医用标准"],"icon":"💨","description":"5L制氧机，大流量供氧，氧浓度93%±3%。适合呼吸系统疾病人群。","commission":537},
    {"id":19,"title":"雅培心康监测仪 心卫士 心电心率实时监测 房颤筛查 胸贴式贴片 30天量","category":"health","categoryName":"健康监测","price":699,"originalPrice":1299,"sales":2100,"tags":["房颤筛查","连续监测"],"icon":"💓","description":"心电监测仪，连续监测30天。房颤筛查，心律失常检测。","commission":104.85},
    {"id":20,"title":"小米手环8 智能手环 心率血氧监测 150种运动模式 50米防水 银黑拼色","category":"health","categoryName":"健康监测","price":199,"originalPrice":299,"sales":56700,"tags":["性价比","运动模式"],"icon":"⌚","description":"小米手环8，心率血氧监测。150种运动模式，50米防水，超长续航。","commission":29.85},

    // ========== 生活用品 (20个) ==========
    {"id":21,"title":"纽曼F6 老年手机 4G全网通 超大字体 超大音量 大按键 老人机","category":"daily","categoryName":"生活用品","price":299,"originalPrice":499,"sales":67800,"tags":["超大字体","超大音量"],"icon":"📱","description":"专为老年人设计的功能机，超大按键和字体。4G全网通，来电语音播报。","commission":44.85},
    {"id":22,"title":"得力5倍带LED灯放大镜 阅读看报 老人读书看报专用 白色","category":"daily","categoryName":"生活用品","price":38,"originalPrice":68,"sales":18900,"tags":["5倍放大","LED灯"],"icon":"🔍","description":"带LED灯的5倍放大镜，适合阅读报纸、药品说明书。旋转调光。","commission":5.7},
    {"id":23,"title":"西万博充电式助听器 老年人专用 大功率隐形 清晰音质 Vibe Go","category":"daily","categoryName":"生活用品","price":499,"originalPrice":899,"sales":12300,"tags":["充电式","音量可调"],"icon":"🦻","description":"入耳式充电助听器，音量自由调节。智能降噪，隐形设计。","commission":74.85},
    {"id":24,"title":"膳魔师真空保温杯 500ml 大容量 24小时保热保冷 经典红","category":"daily","categoryName":"生活用品","price":89,"originalPrice":149,"sales":34500,"tags":["24小时保温","防烫设计"],"icon":"☕","description":"500ml大容量保温杯，24小时保温保冷。防烫嘴设计，一键开合。","commission":13.35},
    {"id":25,"title":"鱼跃拐杖 不锈钢 四脚稳固 高度可调节 老人助行 夜间反光 Y8612","category":"daily","categoryName":"生活用品","price":68,"originalPrice":128,"sales":23400,"tags":["四脚支撑","高度可调"],"icon":"🦯","description":"四脚拐杖，稳固支撑。高度可调节，带夜间反光条。","commission":10.2},
    {"id":26,"title":"李宁握力球 康复训练 5档阻力可调 缓解手指僵硬 黑色","category":"daily","categoryName":"生活用品","price":25,"originalPrice":45,"sales":15600,"tags":["5档阻力","缓解僵硬"],"icon":"💪","description":"手指康复握力球，5档阻力可调。帮助手指力量恢复，缓解僵硬。","commission":3.75},
    {"id":27,"title":"倍轻松颈椎按摩器 iNeck3 仿真人揉捏 42度恒温热敷 无线便携 黑色","category":"daily","categoryName":"生活用品","price":268,"originalPrice":468,"sales":28900,"tags":["仿真揉捏","恒温热敷"],"icon":"💆","description":"颈椎按摩披肩，仿真人揉捏手法。42度恒温热敷，15分钟自动定时。","commission":40.2},
    {"id":28,"title":"老视镜 老人花镜 防蓝光折叠 多度数可选 (+100到+400度) 合金框","category":"daily","categoryName":"生活用品","price":58,"originalPrice":98,"sales":45600,"tags":["+100~+400度","防蓝光"],"icon":"👓","description":"老花镜，多种度数可选。防蓝光设计，折叠便携。合金镜框。","commission":8.7},
    {"id":29,"title":"SKG眼部按摩仪 眼部按摩器 气压热敷 语音提示 护眼仪 睡眠眼罩 白色","category":"daily","categoryName":"生活用品","price":168,"originalPrice":268,"sales":18900,"tags":["气压按摩","热敷功能"],"icon":"👀","description":"眼部按摩器，气压按摩+热敷。缓解眼疲劳，保护视力。","commission":25.2},
    {"id":30,"title":"德生收音机 PL-380 全波段 PLL数字调谐 老人专用 大音量 黑色","category":"daily","categoryName":"生活用品","price":88,"originalPrice":158,"sales":23400,"tags":["AM FM","大音量"],"icon":"📻","description":"老人收音机，大按键大音量。AM/FM多波段，数字调谐。","commission":13.2},
    {"id":31,"title":"飞科电动剃须刀 FS890 全身水洗 Type-C快充 浮动刀头 送父亲男友","category":"daily","categoryName":"生活用品","price":128,"originalPrice":218,"sales":28900,"tags":["全身水洗","Type-C充电"],"icon":"🪒","description":"电动剃须刀，全身水洗。Type-C快充，浮动刀头，贴合面部。","commission":19.2},
    {"id":32,"title":"泰昌泡脚桶 电动恒温加热 气泡按摩 红光理疗 送父母长辈礼物","category":"daily","categoryName":"生活用品","price":298,"originalPrice":498,"sales":34500,"tags":["恒温加热","气泡按摩"],"icon":"🦶","description":"电动泡脚桶，恒温加热，气泡按摩。红光理疗，促进循环。","commission":44.7},
    {"id":33,"title":"博酷指甲钳套装 老人专用 放大镜 LED灯 7件套装 送爸妈生日礼物","category":"daily","categoryName":"生活用品","price":35,"originalPrice":58,"sales":15600,"tags":["放大镜","LED灯"],"icon":"💅","description":"带放大镜的指甲钳，LED照明。7件套装，适合老人使用。","commission":5.25},
    {"id":34,"title":"美的掏耳勺 发光可视 儿童宝宝专用 采耳工具 6件套装 白色","category":"daily","categoryName":"生活用品","price":28,"originalPrice":48,"sales":12300,"tags":["发光","可视化"],"icon":"👂","description":"发光掏耳勺，可视化清洁耳道。硅胶头，柔软不伤耳。","commission":4.2},
    {"id":35,"title":"倍轻松头部按摩器 头皮按摩仪 抓挠舒适梳理 促进血液循环 黑色","category":"daily","categoryName":"生活用品","price":45,"originalPrice":78,"sales":8900,"tags":["按摩头皮","舒适梳理"],"icon":"💆","description":"头部按摩梳，4种模式可调。促进头皮血液循环，缓解头痛。","commission":6.75},
    {"id":36,"title":"舒客牙刷 成人超软毛 护龈牙刷 竹炭刷毛 家庭装12支 送父母","category":"daily","categoryName":"生活用品","price":25,"originalPrice":45,"sales":23400,"tags":["超软毛","防滑手柄"],"icon":"🦷","description":"超软毛牙刷，竹炭刷毛。防滑手柄设计，护龈不伤牙龈。","commission":3.75},
    {"id":37,"title":"牙线棒 成人超细牙签 弓形牙线签 家庭装300支 不伤牙龈","category":"daily","categoryName":"生活用品","price":18,"originalPrice":38,"sales":18900,"tags":["超细","不伤牙龈"],"icon":"🦷","description":"超细牙线棒，弓形设计。清除牙缝残渣，不伤牙龈。","commission":2.7},
    {"id":38,"title":"安启美假牙清洁片 60片装 假牙清洁 深度除味 清新口气","category":"daily","categoryName":"生活用品","price":35,"originalPrice":58,"sales":5600,"tags":["清洁片","假牙浸泡"],"icon":"🦷","description":"假牙清洁片，深度清洁除味。浸泡10分钟，清新口气。","commission":5.25},
    {"id":39,"title":"雅克菱义齿收纳盒 便携式 防潮 防摔 旅行必备","category":"daily","categoryName":"生活用品","price":22,"originalPrice":38,"sales":3200,"tags":["防潮","便携"],"icon":"🦷","description":"义齿收纳盒，防潮便携。透明盖设计，方便取用。","commission":3.3},
    {"id":40,"title":"康伦男用接尿器 卧床病人专用 防漏设计 刻度显示 1800ml","category":"daily","categoryName":"生活用品","price":28,"originalPrice":48,"sales":8900,"tags":["防漏设计","刻度显示"],"icon":"🧪","description":"男用接尿器，防漏弧形设计。刻度显示容量，卧床护理必备。","commission":4.2},

    // ========== 助行辅具 (20个) ==========
    {"id":41,"title":"鱼跃轮椅 H009B 折叠便携 脚踏可拆 免充气胎 老人代步车","category":"mobility","categoryName":"助行辅具","price":698,"originalPrice":1280,"sales":18900,"tags":["折叠便携","脚踏可拆"],"icon":"🧑‍🦽","description":"轻便折叠轮椅，折叠后放入后备箱。免充气胎，脚踏可拆。","commission":104.7},
    {"id":42,"title":"康复之家助行器 老年人专用 带轮带座 推行省力 铝合金材质","category":"mobility","categoryName":"助行辅具","price":288,"originalPrice":468,"sales":12300,"tags":["带轮助行","座位休息"],"icon":"🚶","description":"带轮助行器，带座位可随时休息。铝合金材质，轻便稳固。","commission":43.2},
    {"id":43,"title":"迈德斯特护理床 家用电动 起背抬腿 翻身 整体升降 病床 白色","category":"mobility","categoryName":"助行辅具","price":4980,"originalPrice":7980,"sales":3400,"tags":["电动升降","起背抬腿"],"icon":"🛏️","description":"电动护理床，背部腿部可调节。整体升降，电动翻身。","commission":747},
    {"id":44,"title":"爱护佳移位机 电动病人移位车 瘫痪老人移位 护理翻身 辅助神器","category":"mobility","categoryName":"助行辅具","price":3580,"originalPrice":5680,"sales":2100,"tags":["电动移位","翻身护理"],"icon":"🏥","description":"电动移位机，帮助卧床老人翻身移位。360度旋转，护理更轻松。","commission":537},
    {"id":45,"title":"雅德防压疮床垫 波动式 医用级 预防褥疮 透气防潮 病人护理","category":"mobility","categoryName":"助行辅具","price":398,"originalPrice":698,"sales":8900,"tags":["波动按摩","透气防潮"],"icon":"🛌","description":"防压疮波动床垫，波动交替按摩。促进血液循环，透气防潮。","commission":59.7},
    {"id":46,"title":"自立品牌加高坐便椅 老人专用 10cm加高 扶手支撑 浴室卫生间通用","category":"mobility","categoryName":"助行辅具","price":168,"originalPrice":268,"sales":15600,"tags":["加高10cm","扶手支撑"],"icon":"🚽","description":"加高坐便椅，比普通马桶高10cm。双扶手支撑起身，稳固安全。","commission":25.2},
    {"id":47,"title":"美的洗澡椅 浴室防滑凳 老人洗澡座椅 折叠式 带排水孔","category":"mobility","categoryName":"助行辅具","price":198,"originalPrice":328,"sales":8900,"tags":["防滑凳","排水孔"],"icon":"🛁","description":"老人洗澡椅，浴室防滑凳。折叠设计，带排水孔。","commission":29.7},
    {"id":48,"title":"卡贝卫生间扶手 浴室防滑 老人安全扶手 免打孔安装 304不锈钢","category":"mobility","categoryName":"助行辅具","price":88,"originalPrice":158,"sales":6700,"tags":["免打孔","防滑"],"icon":"🦯","description":"卫生间扶手，浴室防滑。免打孔安装，304不锈钢材质。","commission":13.2},
    {"id":49,"title":"轮椅坡道 折叠便携式 过门槛斜坡垫 承重200kg 老人代步车辅助","category":"mobility","categoryName":"助行辅具","price":298,"originalPrice":498,"sales":4500,"tags":["折叠便携","承重200kg"],"icon":"♿","description":"轮椅坡道，过门槛坡道。折叠便携，承重200kg。","commission":44.7},
    {"id":50,"title":"护理翻身枕 三角侧卧枕 辅助翻身 记忆棉 病人护理 透气","category":"mobility","categoryName":"助行辅具","price":88,"originalPrice":158,"sales":7800,"tags":["三角翻身","记忆棉"],"icon":"🛌","description":"三角翻身枕，辅助卧床老人侧卧。记忆棉填充，透气舒适。","commission":13.2},
    {"id":51,"title":"轮椅餐桌板 可调节 方便用餐 移动餐桌 老人辅助配件","category":"mobility","categoryName":"助行辅具","price":158,"originalPrice":268,"sales":3200,"tags":["可调节","方便用餐"],"icon":"🍽️","description":"轮椅餐桌板，可调节高度。方便用餐，看书。","commission":23.7},
    {"id":52,"title":"轮椅手套 推行防磨 透气舒适 保护手掌 防滑耐磨","category":"mobility","categoryName":"助行辅具","price":38,"originalPrice":68,"sales":5600,"tags":["防滑耐磨","透气舒适"],"icon":"🧤","description":"轮椅推行手套，防滑耐磨。透气网眼，不闷热。","commission":5.7},
    {"id":53,"title":"轮椅雨罩 全覆盖 防雨防风 透明PVC 老人出行必备","category":"mobility","categoryName":"助行辅具","price":68,"originalPrice":118,"sales":2800,"tags":["防水","防风"],"icon":"☔","description":"轮椅雨罩，防水防风，全覆盖设计。透明PVC，不遮挡视线。","commission":10.2},
    {"id":54,"title":"轮椅座垫 凝胶凉垫 减压透气 防褥疮 久坐不累","category":"mobility","categoryName":"助行辅具","price":298,"originalPrice":498,"sales":2100,"tags":["凝胶凉垫","减压透气"],"icon":"🪑","description":"轮椅座垫，凝胶凉垫。减压透气，久坐不累。","commission":44.7},
    {"id":55,"title":"腋下拐 单腿支撑 铝合金 高度可调 骨折康复助行","category":"mobility","categoryName":"助行辅具","price":58,"originalPrice":98,"sales":8900,"tags":["腋下支撑","高度可调"],"icon":"🦯","description":"腋下拐，单腿支撑。铝合金材质，高度可调。","commission":8.7},
    {"id":56,"title":"手杖凳 折叠两用 累了可以坐 轻便携带 老人户外","category":"mobility","categoryName":"助行辅具","price":168,"originalPrice":268,"sales":12300,"tags":["折叠两用","座位休息"],"icon":"🦯","description":"手杖凳，折叠两用。累了可以当凳子坐，轻便携带。","commission":25.2},
    {"id":57,"title":"电动代步车 老人残疾人 充电一次跑50公里 三轮电动车","category":"mobility","categoryName":"助行辅具","price":3980,"originalPrice":6980,"sales":2100,"tags":["电动","续航50公里"],"icon":"🛵","description":"老人电动代步车，充电一次跑50公里。三轮稳定。","commission":597},
    {"id":58,"title":"楼梯升降椅 家用轨道式 老人上下楼 轮椅代步 静音运行","category":"mobility","categoryName":"助行辅具","price":9800,"originalPrice":15800,"sales":560,"tags":["轨道式","老人上下楼"],"icon":"🪜","description":"家用楼梯升降椅，轨道式安装。老人上下楼利器。","commission":1470},
    {"id":59,"title":"转移板 护理辅助 弧形设计 光滑易滑动 病人移位","category":"mobility","categoryName":"助行辅具","price":128,"originalPrice":228,"sales":5600,"tags":["光滑易滑动","弧形设计"],"icon":"🔄","description":"转移板，护理辅助。光滑易滑动，弧形设计。","commission":19.2},
    {"id":60,"title":"助行架 四脚稳固 推行省力 铝合金 手刹设计 老人助行","category":"mobility","categoryName":"助行辅具","price":398,"originalPrice":698,"sales":18900,"tags":["四脚稳固","手刹设计"],"icon":"🚶","description":"助行架，四脚稳固。推行省力，手刹设计可随时刹车。","commission":59.7},

    // ========== 舒适护理 (20个) ==========
    {"id":61,"title":"成人纸尿裤 L码 透气干爽 3D防漏 老年人护理 整箱60片","category":"comfort","categoryName":"舒适护理","price":89,"originalPrice":149,"sales":67800,"tags":["透气干爽","3D防漏"],"icon":"🧷","description":"成人纸尿裤，L码。3D立体防漏边，透气干爽。","commission":13.35},
    {"id":62,"title":"护理垫 60x90cm 吸水防漏 一次性使用 老人护理 产妇垫 10片装","category":"comfort","categoryName":"舒适护理","price":38,"originalPrice":68,"sales":45600,"tags":["吸水防漏","一次性使用"],"icon":"🛌","description":"一次性护理垫，60x90cm。强效吸水层，防漏底膜。","commission":5.7},
    {"id":63,"title":"湿巾 洁阴护理专用 弱酸配方 无酒精 私密处清洁 80片x3包","category":"comfort","categoryName":"舒适护理","price":35,"originalPrice":58,"sales":23400,"tags":["弱酸配方","无酒精"],"icon":"🧻","description":"私处护理湿巾，弱酸配方。无酒精香精，温和清洁。","commission":5.25},
    {"id":64,"title":"轮椅坐垫 减压防褥疮 记忆棉 透气孔 久坐舒适 老人专用","category":"comfort","categoryName":"舒适护理","price":198,"originalPrice":328,"sales":12300,"tags":["记忆棉","透气孔"],"icon":"🪑","description":"轮椅减压坐垫，记忆棉填充。透气孔设计，减压防褥疮。","commission":29.7},
    {"id":65,"title":"洗头盆 卧床专用 硅胶折叠 排水管 病人护理 老人洗头","category":"comfort","categoryName":"舒适护理","price":58,"originalPrice":98,"sales":8900,"tags":["硅胶折叠","排水管"],"icon":"🧴","description":"卧床洗头盆，硅胶材质可折叠。带排水管，床上洗头神器。","commission":8.7},
    {"id":66,"title":"翻身辅助器 护理推板 PE材质 弧形设计 病人移位 老人护理","category":"comfort","categoryName":"舒适护理","price":45,"originalPrice":78,"sales":6700,"tags":["PE材质","弧形设计"],"icon":"🔄","description":"翻身辅助推板，PE材质光滑易滑动。帮助翻身移位。","commission":6.75},
    {"id":67,"title":"接尿器 卧床男用 防漏弧形 刻度显示 透明材质 1800ml","category":"comfort","categoryName":"舒适护理","price":28,"originalPrice":48,"sales":12300,"tags":["防漏设计","刻度显示"],"icon":"🧪","description":"男用接尿器，防漏弧形设计。刻度显示容量，透明方便观察。","commission":4.2},
    {"id":68,"title":"防抓手套 约束护理 纯棉内衬 魔术贴固定 老人防自伤","category":"comfort","categoryName":"舒适护理","price":22,"originalPrice":38,"sales":8900,"tags":["纯棉内衬","魔术贴"],"icon":"🧤","description":"防抓手套，纯棉内衬透气。魔术贴固定，防止抓伤。","commission":3.3},
    {"id":69,"title":"成人拉拉裤 M码 穿脱方便 如内裤般舒适 透气防漏 20片装","category":"comfort","categoryName":"舒适护理","price":108,"originalPrice":188,"sales":34500,"tags":["穿脱方便","如内裤般舒适"],"icon":"🧷","description":"成人拉拉裤，M码。穿脱方便，如内裤般舒适。","commission":16.2},
    {"id":70,"title":"护理手套 一次性 医用级 100只装 加厚无粉 透明","category":"comfort","categoryName":"舒适护理","price":35,"originalPrice":58,"sales":23400,"tags":["医用级","100只装"],"icon":"🧤","description":"一次性护理手套，100只装。医用级，加厚无粉。","commission":5.25},
    {"id":71,"title":"口腔护理棒 海绵头 含漱口水 卧床病人 口腔清洁 100支","category":"comfort","categoryName":"舒适护理","price":25,"originalPrice":45,"sales":8900,"tags":["海绵头","含漱口水"],"icon":"🦷","description":"口腔护理棒，海绵头含漱口水。卧床病人口腔清洁必备。","commission":3.75},
    {"id":72,"title":"会阴冲洗器 女用 私密处清洁 便携式 卧床护理 产后清洗","category":"comfort","categoryName":"舒适护理","price":35,"originalPrice":58,"sales":6700,"tags":["女用设计","便携式"],"icon":"🚿","description":"会阴冲洗器，女用私密处清洁。便携式，卧床护理可用。","commission":5.25},
    {"id":73,"title":"压疮贴 水胶体 预防褥疮 吸收渗液 促进愈合 10片装","category":"comfort","categoryName":"舒适护理","price":88,"originalPrice":158,"sales":4500,"tags":["预防褥疮","水胶体材质"],"icon":"🩹","description":"压疮贴，预防褥疮。水胶体材质，吸收渗液，促进愈合。","commission":13.2},
    {"id":74,"title":"老年营养粉 蛋白质 补充营养 易吸收 增强免疫力 900g","category":"comfort","categoryName":"舒适护理","price":268,"originalPrice":468,"sales":5600,"tags":["补充蛋白质","易吸收"],"icon":"🥛","description":"老年营养粉，补充蛋白质。富含多种维生素，增强免疫力。","commission":40.2},
    {"id":75,"title":"三角翻身枕 辅助侧卧 记忆棉 透气 病人护理 卧床老人","category":"comfort","categoryName":"舒适护理","price":88,"originalPrice":158,"sales":7800,"tags":["三角设计","记忆棉"],"icon":"🛌","description":"三角翻身枕，辅助卧床老人侧卧。记忆棉填充，透气舒适。","commission":13.2},
    {"id":76,"title":"电动足浴盆 恒温加热 气泡按摩 红光理疗 送父母 送长辈","category":"comfort","categoryName":"舒适护理","price":298,"originalPrice":528,"sales":18900,"tags":["恒温加热","气泡按摩"],"icon":"🦶","description":"电动足浴盆，恒温加热。气泡按摩，红光理疗。","commission":44.85},
    {"id":77,"title":"腿部按摩器 气压按摩 促进循环 老人护理 腿部放松","category":"comfort","categoryName":"舒适护理","price":398,"originalPrice":698,"sales":12300,"tags":["气压按摩","促进循环"],"icon":"💆","description":"腿部按摩器，气压按摩。促进腿部血液循环，放松肌肉。","commission":59.7},
    {"id":78,"title":"腰部热敷带 腰腹部热敷 恒温定时 艾灸功能 送父母","category":"comfort","categoryName":"舒适护理","price":168,"originalPrice":298,"sales":15600,"tags":["恒温定时","艾灸功能"],"icon":"🔥","description":"腰部热敷带，腰腹部热敷。恒温定时，艾灸理疗。","commission":25.2},
    {"id":79,"title":"颈椎热敷枕 脖子保暖 热敷理疗 牵引功能 送父母长辈","category":"comfort","categoryName":"舒适护理","price":158,"originalPrice":268,"sales":8900,"tags":["热敷理疗","牵引功能"],"icon":"🛌","description":"颈椎热敷枕，热敷理疗。牵引功能，缓解颈椎疲劳。","commission":23.7},
    {"id":80,"title":"膝关节护具 保暖支撑 磁疗发热 老人关节 送父母长辈","category":"comfort","categoryName":"舒适护理","price":128,"originalPrice":228,"sales":12300,"tags":["保暖支撑","磁疗发热"],"icon":"🦵","description":"膝关节护具，保暖支撑。磁疗发热，缓解关节疼痛。","commission":19.2}
];

const categories = [
    { id: 'health', name: '健康监测', icon: '🩺', count: 20 },
    { id: 'daily', name: '生活用品', icon: '📱', count: 20 },
    { id: 'mobility', name: '助行辅具', icon: '🦯', count: 20 },
    { id: 'comfort', name: '舒适护理', icon: '🧷', count: 20 }
];

let cart = [];

// 导出数据供app.js使用
window.productsData = {
    products: products,
    categories: categories,
    cart: cart
};
