// Tier 4 — Emergencies, Breakdowns & Safety (Khẩn cấp, Sự cố & An toàn) — Part 2 (Items 26–50)
module.exports = [
  {
    id: "t4_emg_26",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Bị sập cửa nhốt ở ngoài căn hộ khi quên chìa khóa bên trong (cửa chỉ sập chốt chứ chưa khóa vòng)",
    de: "Ich habe mich leider ausgesperrt! Ein Windstoß hat die Wohnungstür zugeschlagen, und mein Schlüssel steckt noch von innen.",
    de_phonetic: "ích ha-bờ míkh lai-đờ aus-gờ-shpeat! ain vint-shtôs hát đi vô-nungs-tuya tsu-gờ-shla-gần, un mai-nờ shlứt-sần shtếct nốkh fon in-nần.",
    de_register: {
      du: "Ich habe mich ausgesperrt! Die Wohnungstür ist ins Schloss gefallen, und mein Schlüssel steckt noch von innen.",
      sie: "Ich habe mich leider ausgesperrt! Ein Windstoß hat die Wohnungstür zugeschlagen, und mein Schlüssel steckt noch von innen."
    },
    en: "I have unfortunately locked myself out! A gust of wind slammed the apartment door shut, and my key is still in the lock on the inside.",
    vi: "Không may tôi bị nhốt ở ngoài nhà rồi! Một cơn gió lùa làm cửa căn hộ sập lại, mà chìa khóa của tôi vẫn còn cắm ở ổ khóa phía bên trong.",
    reply: {
      de: "Da die Tür nur ins Schloss gefallen und nicht abgeschlossen ist, lässt sie sich meistens schnell ohne Beschädigung öffnen.",
      en: "Since the door just latched shut and isn't deadbolted, it can usually be opened quickly without any damage.",
      vi: "Vì cửa chỉ mới sập chốt chứ chưa vặn khóa chết nên thường có thể mở nhanh mà không làm hỏng ổ khóa đâu."
    },
    tip: "Khi gọi thợ khóa ở Đức, hãy phân biệt rõ 'Die Tür ist nur ins Schloss gefallen' (cửa chỉ sập lại, chưa vặn chìa) và 'Die Tür ist abgeschlossen' (cửa đã khóa vòng). Trường hợp cửa chỉ sập chốt thì thợ mở rất nhanh và không được phép khoan phá ổ khóa (Aufbohren)."
  },
  {
    id: "t4_emg_27",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi thợ mở khóa (Schlüsseldienst) và yêu cầu báo giá trọn gói cố định bao gồm cả phụ phí đêm/cuối tuần trước khi họ xuất phát",
    de: "Können Sie mir bitte vorab am Telefon einen verbindlichen Festpreis inklusive Anfahrt und Nachtzuschlag nennen, bevor Sie losfahren?",
    de_phonetic: "kơ-nần zi mia bít-tờ foa-áp am tê-lê-fôn ai-nần fea-bint-li-khần fést-prais in-klu-zi-vờ an-fát un nákht-tsu-shlác ne-nần, bờ-foa zi lôs-fa-rần?",
    de_register: {
      du: "Kannst du mir vorab am Telefon einen verbindlichen Festpreis inklusive Anfahrt und Nachtzuschlag nennen, bevor du losfährst?",
      sie: "Können Sie mir bitte vorab am Telefon einen verbindlichen Festpreis inklusive Anfahrt und Nachtzuschlag nennen, bevor Sie losfahren?"
    },
    en: "Could you please give me a binding fixed price over the phone in advance, including travel costs and the night surcharge, before you head out?",
    vi: "Bạn có thể báo trước cho tôi qua điện thoại một mức giá trọn gói cố định, đã bao gồm cả phí đi lại và phụ phí ban đêm, trước khi bạn xuất phát được không?",
    reply: {
      de: "Selbstverständlich, die Türöffnung kostet heute Abend komplett inklusive Anfahrt und Mehrwertsteuer neunundneunzig Euro.",
      en: "Of course, opening the door tonight costs ninety-nine euros in total, including travel and VAT.",
      vi: "Tất nhiên rồi, chi phí mở cửa tối nay trọn gói đã bao gồm phí đi lại và thuế GTGT là 99 Euro."
    },
    tip: "Cảnh giác với các dịch vụ mở khóa chặt chém (Schlüsseldienst-Abzocke) ở đầu kết quả quảng cáo Google! Hãy luôn chọn thợ khóa địa phương, yêu cầu 'verbindlicher Festpreis inklusive aller Zuschläge' qua điện thoại, hoặc gọi dịch vụ mở khóa của ADAC nếu bạn là hội viên."
  },
  {
    id: "t4_emg_28",
    level: "A2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Nhờ hàng xóm cho gọi điện thoại hoặc ngồi nhờ trong lúc chờ thợ khóa vì chạy ra ngoài quên mang điện thoại",
    de: "Entschuldigung, meine Wohnungstür ist gerade zugefallen und mein Handy liegt noch drinnen. Dürfte ich kurz von Ihrem Telefon aus meinen Partner anrufen?",
    de_phonetic: "ent-shul-đi-gung, mai-nờ vô-nungs-tuya ist gờ-ra-đờ tsu-gờ-fa-lần un mai-nờ hen-đi líct nốkh đri-nần. đước-tờ ích kuats fon i-rầm tê-lê-fôn aus mai-nần pát-nờ an-ru-fần?",
    de_register: {
      du: "Meine Wohnungstür ist gerade zugefallen und mein Handy liegt noch drinnen. Darf ich kurz mit deinem Telefon meinen Partner anrufen?",
      sie: "Entschuldigung, meine Wohnungstür ist gerade zugefallen und mein Handy liegt noch drinnen. Dürfte ich kurz von Ihrem Telefon aus meinen Partner anrufen?"
    },
    en: "Excuse me, my apartment door just slammed shut and my phone is still inside. Could I quickly call my partner from your phone?",
    vi: "Xin lỗi, cửa căn hộ của tôi vừa bị sập lại mà điện thoại vẫn còn nằm ở bên trong. Tôi có thể mượn điện thoại của bạn gọi nhanh cho người nhà được không ạ?",
    reply: {
      de: "Ach je, kommen Sie doch erst mal rein ins Warme! Hier ist mein Handy, und ich mache Ihnen gern eine Tasse Tee.",
      en: "Oh dear, come on inside where it's warm first! Here is my phone, and I'd be happy to make you a cup of tea.",
      vi: "Ôi trời, trước hết bạn cứ vào trong nhà cho ấm đã! Điện thoại của tôi đây, để tôi pha cho bạn một tách trà nhé."
    },
    tip: "Mẹo phòng ngừa sập cửa rất phổ biến ở Đức: Gửi sẵn một chìa khóa dự phòng (Ersatzschlüssel) cho một người hàng xóm đáng tin cậy hoặc bạn bè sống gần nhà."
  },
  {
    id: "t4_emg_29",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Vỡ đường ống nước trong phòng tắm hoặc bếp và cần khóa ngay van nước tổng của căn hộ hoặc tòa nhà",
    de: "Unter der Spüle haben wir einen Wasserrohrbruch und die ganze Küche steht schon unter Wasser! Wo ist denn hier der Haupthahn zum Zudrehen?",
    de_phonetic: "un-tờ đea shpuy-lờ ha-bần via ai-nần va-sờ-roa-brúkh un đi gan-tsờ cứ-khờ shtêt shôn un-tờ va-sờ! vô ist đen hia đea haupt-han tsum tsu-đrê-ần?",
    de_register: {
      du: "Unter der Spüle ist ein Wasserrohrbruch und die Küche steht unter Wasser! Weißt du, wo hier der Haupthahn zum Zudrehen ist?",
      sie: "Unter der Spüle haben wir einen Wasserrohrbruch und die ganze Küche steht schon unter Wasser! Wo ist denn hier der Haupthahn zum Zudrehen?"
    },
    en: "We have a burst pipe under the sink and the whole kitchen is already flooded! Where is the main water valve here to shut it off?",
    vi: "Ống nước dưới bồn rửa nhà chúng tôi bị vỡ và cả căn bếp đã ngập nước rồi! Van khóa nước tổng ở đâu để tôi vặn khóa lại bây giờ?",
    reply: {
      de: "Das Absperrventil für Ihre Wohnung ist im Badezimmer neben der Wasseruhr, und der Haupthahn für das Haus ist unten im Keller!",
      en: "The shut-off valve for your apartment is in the bathroom next to the water meter, and the main valve for the building is down in the basement!",
      vi: "Van khóa nước cho căn hộ của bạn nằm trong phòng tắm cạnh đồng hồ nước, còn van tổng của cả tòa nhà thì ở dưới tầng hầm!"
    },
    tip: "Khi mới dọn vào căn hộ ở Đức, hãy luôn tìm hiểu trước vị trí của 2 thứ: van khóa nước tổng (Haupthahn / Wasser-Absperrventil) và bảng cầu chì điện (Sicherungskasten) để xử lý ngay khi có sự cố."
  },
  {
    id: "t4_emg_30",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Nước thấm nhỏ giọt từ trần nhà xuống và chạy lên báo khẩn cấp cho hàng xóm tầng trên",
    de: "Hallo, ich wohne direkt unter Ihnen und bei mir tropft plötzlich Wasser durch die Badezimmerdecke. Ist bei Ihnen vielleicht die Waschmaschine ausgelaufen?",
    de_phonetic: "ha-lô, ích vô-nờ đi-réct un-tờ i-nần un bai mia tróp-ft plớt-tslích va-sờ đuakh đi ba-đờ-tsim-mờ-đéc-kờ. ist bai i-nần fi-laikht đi vásh-ma-shi-nờ aus-gờ-lau-fần?",
    de_register: {
      du: "Hi, ich wohne direkt unter dir und bei mir tropft plötzlich Wasser durch die Decke. Ist bei dir vielleicht die Waschmaschine ausgelaufen?",
      sie: "Hallo, ich wohne direkt unter Ihnen und bei mir tropft plötzlich Wasser durch die Badezimmerdecke. Ist bei Ihnen vielleicht die Waschmaschine ausgelaufen?"
    },
    en: "Hello, I live right below you and water is suddenly dripping through my bathroom ceiling. Did your washing machine perhaps leak?",
    vi: "Xin chào, tôi sống ở tầng ngay dưới nhà bạn và tự nhiên thấy nước nhỏ giọt xuyên qua trần phòng tắm. Có phải máy giặt nhà bạn bị trào nước ra ngoài không?",
    reply: {
      de: "Oh Schreck, der Zulaufschlauch der Waschmaschine hat sich gelöst! Ich drehe sofort das Wasser ab und wische alles auf.",
      en: "Oh no, the washing machine's inlet hose came loose! I will turn off the water immediately and mop everything up.",
      vi: "Ối trời ơi, ống cấp nước của máy giặt bị tuột ra! Để tôi khóa vòi nước ngay lập tức và lau khô sàn nhà."
    },
    tip: "Khi sử dụng máy giặt hoặc máy rửa bát ở Đức, bạn nên lắp ống có van chống tràn tự động (Aquastop-Schlauch). Nhiều hợp đồng bảo hiểm trách nhiệm (Haftpflicht) hoặc bảo hiểm đồ đạc (Hausrat) yêu cầu có Aquastop để chi trả toàn bộ thiệt hại rò rỉ nước (Wasserschaden)."
  },
  {
    id: "t4_emg_31",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Hệ thống sưởi hỏng hoàn toàn giữa mùa đông lạnh giá và gọi đường dây khẩn cấp của ban quản lý tòa nhà",
    de: "Bei uns in der Wohnung ist mitten im Winter die komplette Heizung ausgefallen, die Heizkörper bleiben eiskalt und wir haben auch kein warmes Wasser mehr.",
    de_phonetic: "bai uns in đea vô-nung ist mít-tần im vin-tờ đi kôm-plét-tờ hai-tsung aus-gờ-fa-lần, đi haits-kơ-pờ blai-bần ais-kalt un via ha-bần aukh kai-nờ va-mờs va-sờ mea.",
    de_register: {
      du: "Bei uns in der Wohnung ist die komplette Heizung ausgefallen, die Heizkörper sind eiskalt und es gibt kein warmes Wasser mehr.",
      sie: "Bei uns in der Wohnung ist mitten im Winter die komplette Heizung ausgefallen, die Heizkörper bleiben eiskalt und wir haben auch kein warmes Wasser mehr."
    },
    en: "The entire heating system in our apartment has failed in the middle of winter; the radiators are ice-cold and we have no hot water left either.",
    vi: "Hệ thống sưởi trong căn hộ của chúng tôi bị hỏng hoàn toàn giữa mùa đông, các lò sưởi lạnh ngắt như băng và chúng tôi cũng mất luôn cả nước nóng.",
    reply: {
      de: "Ich verständige umgehend unseren Heizungsnotdienst, damit noch heute ein Techniker vorbeikommt und die Anlage prüft.",
      en: "I will notify our emergency heating service immediately so that a technician comes by today to inspect the system.",
      vi: "Tôi sẽ báo ngay cho dịch vụ sửa sưởi khẩn cấp để kỹ thuật viên qua kiểm tra hệ thống ngay trong hôm nay."
    },
    tip: "Theo luật thuê nhà ở Đức (Mietrecht), hỏng sưởi hoàn toàn vào mùa đông (Heizungsausfall im Winter) là sự cố khẩn cấp (Notfall). Chủ nhà/Hausverwaltung phải xử lý ngay và người thuê có quyền giảm tiền nhà (Mietminderung) nếu nhiệt độ phòng xuống quá thấp."
  },
  {
    id: "t4_emg_32",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Mất điện toàn bộ căn hộ và kiểm tra hộp cầu chì xem aptomat chống giật (FI-Schalter) có bị nhảy không",
    de: "In der ganzen Wohnung ist plötzlich der Strom weg, weil im Sicherungskasten offenbar der FI-Schalter herausgesprungen ist.",
    de_phonetic: "in đea gan-tsần vô-nung ist plớt-tslích đea shtrôm véc, vai im zí-khờ-rungs-kas-tần óp-fần-ba đea éf-i-shal-tờ he-raus-gờ-shprung-ần ist.",
    de_register: {
      du: "In der ganzen Wohnung ist plötzlich der Strom weg, weil im Sicherungskasten der FI-Schalter rausgesprungen ist.",
      sie: "In der ganzen Wohnung ist plötzlich der Strom weg, weil im Sicherungskasten offenbar der FI-Schalter herausgesprungen ist."
    },
    en: "The power suddenly went out in the whole apartment because the residual-current circuit breaker in the fuse box apparently tripped.",
    vi: "Toàn bộ căn hộ đột nhiên bị mất điện vì có vẻ cầu dao chống giật (FI-Schalter) trong hộp cầu chì đã bị nhảy.",
    reply: {
      de: "Ziehen Sie bitte zuerst den Wasserkocher und den Toaster aus der Steckdose, bevor Sie den Schalter wieder nach oben drücken.",
      en: "Please unplug the kettle and the toaster from the outlet first before you flip the switch back up.",
      vi: "Xin hãy rút phích cắm ấm siêu tốc và máy nướng bánh mì ra khỏi ổ điện trước khi gạt cần công tắc lên lại nhé."
    },
    tip: "Trong bảng điện căn hộ Đức (Sicherungskasten), 'der FI-Schalter' (Fehlerstrom-Schutzschalter) là cầu dao chống giật tổng, còn các công tắc nhỏ từng phòng gọi là 'die Sicherung'. Cụm từ tự nhiên nhất khi nhảy cầu chì là 'Die Sicherung ist rausgesprungen'."
  },
  {
    id: "t4_emg_33",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bếp điện hoặc lò nướng cứ bật lên là gây chập điện nổ cầu chì",
    de: "Jedes Mal, wenn ich den Backofen einschalte, gibt es einen Kurzschluss und die Hauptsicherung fliegt sofort wieder raus.",
    de_phonetic: "yê-đờs mal, ven ích đên bác-ô-fần ain-shal-tờ, gípt es ai-nần kuats-shlús un đi haupt-zí-khờ-rung flíct zô-foát vi-đờ raus.",
    de_register: {
      du: "Jedes Mal, wenn ich den Backofen einschalte, gibt es einen Kurzschluss und die Sicherung fliegt sofort wieder raus.",
      sie: "Jedes Mal, wenn ich den Backofen einschalte, gibt es einen Kurzschluss und die Hauptsicherung fliegt sofort wieder raus."
    },
    en: "Every time I turn on the oven, there is a short circuit and the main fuse blows again immediately.",
    vi: "Mỗi lần tôi bật lò nướng lên là lại bị chập điện và cầu chì tổng nhảy tắt ngay lập tức.",
    reply: {
      de: "Bitte lassen Sie die Sicherung für den Herd ausgeschaltet! Da muss dringend ein Elektriker den Starkstromanschluss überprüfen.",
      en: "Please leave the circuit breaker for the stove turned off! An electrician urgently needs to inspect the high-voltage connection.",
      vi: "Bạn hãy cứ để nguyên cầu chì của bếp ở trạng thái tắt nhé! Phải có thợ điện đến kiểm tra gấp đường điện 3 pha của bếp."
    },
    tip: "Bếp điện ở Đức thường nối vào nguồn điện 3 pha (Starkstrom / Herdanschlussdose). Tuyệt đối không tự tháo lắp dây bếp điện vì sai lệch có thể gây nguy hiểm tính mạng và làm mất hiệu lực bảo hiểm khi xảy ra cháy nổ."
  },
  {
    id: "t4_emg_34",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bồn cầu hoặc đường cống thoát nước bị tắc nghẽn hoàn toàn và nước đang trào ngược ra sàn",
    de: "Das Rohr im Badezimmer ist komplett verstopft, das Schmutzwasser läuft schon über und auch mit dem Pümpel geht gar nichts mehr.",
    de_phonetic: "đas roa im ba-đờ-tsim-mờ ist kôm-plét fea-shtóp-ft, đas shmúts-va-sờ lóift shôn uy-bờ un aukh mít đêm pứm-pần gêt ga níkhts mea.",
    de_register: {
      du: "Das Rohr im Bad ist komplett verstopft, das Wasser läuft schon über und mit dem Pümpel geht gar nichts mehr.",
      sie: "Das Rohr im Badezimmer ist komplett verstopft, das Schmutzwasser läuft schon über und auch mit dem Pümpel geht gar nichts mehr."
    },
    en: "The pipe in the bathroom is completely clogged, the wastewater is already overflowing, and even a plunger doesn't help at all anymore.",
    vi: "Đường ống trong phòng tắm bị tắc hoàn toàn rồi, nước bẩn đang tràn cả ra ngoài mà dùng cây thụt cao su cũng không ăn thua gì nữa.",
    reply: {
      de: "Benutzen Sie bitte auf keinen Fall mehr die Spülung! Wir schicken sofort eine Rohrreinigungsfirma mit einer Spirale vorbei.",
      en: "Please do not flush under any circumstances! We will send a drain-cleaning company with a plumber's snake right over.",
      vi: "Xin tuyệt đối đừng xả thêm nước nữa nhé! Chúng tôi sẽ cử đội thông tắc cống mang dây lò xo chuyên dụng qua ngay."
    },
    tip: "Từ 'der Pümpel' (hoặc Saugglocke) là cây thụt bồn cầu bằng cao su. Khi tắc nghẽn nặng trong ống chung của tòa nhà, hãy báo ngay cho Hausmeister hoặc Hausverwaltung thay vì tự gọi dịch vụ thông cống (Rohrreinigung) bên ngoài để tránh chi phí đắt đỏ."
  },
  {
    id: "t4_emg_35",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Thiệt hại do mưa bão lớn: tầng hầm bị ngập nước hoặc cành cây lớn gãy đổ đè lên xe ô tô",
    de: "Nach dem heftigen Unwetter ist unser gesamter Keller knöcheltief mit Wasser vollgelaufen, und vor dem Haus ist ein dicker Ast auf mein Auto gestürzt.",
    de_phonetic: "nákh đêm héf-ti-gần un-vét-tờ ist un-zờ gờ-zam-tờ ke-lờ knớ-khần-típ mít va-sờ fôl-gờ-lau-fần, un foa đêm haus ist ain đíc-kờ ást auf mai-nờ au-tô gờ-shtứat-st.",
    de_register: {
      du: "Nach dem Unwetter ist unser Keller knöcheltief mit Wasser vollgelaufen, und draußen ist ein dicker Ast auf mein Auto gestürzt.",
      sie: "Nach dem heftigen Unwetter ist unser gesamter Keller knöcheltief mit Wasser vollgelaufen, und vor dem Haus ist ein dicker Ast auf mein Auto gestürzt."
    },
    en: "After the severe storm, our entire basement flooded ankle-deep with water, and in front of the house a thick branch crashed onto my car.",
    vi: "Sau trận mưa bão dữ dội, toàn bộ tầng hầm nhà chúng tôi bị ngập nước đến mắt cá chân, và trước cửa nhà có một cành cây to gãy đổ đè lên xe ô tô của tôi.",
    reply: {
      de: "Betreten Sie den überfluteten Keller bitte nicht wegen Stromschlaggefahr! Dokumentieren Sie den Sturmschaden am Auto mit Fotos für Ihre Teilkasko.",
      en: "Please do not enter the flooded basement due to the risk of electric shock! Document the storm damage to your car with photos for your partial coverage insurance.",
      vi: "Xin đừng bước xuống tầng hầm đang ngập nước vì nguy cơ bị điện giật! Hãy chụp ảnh thiệt hại do bão trên xe ô tô để gửi cho bảo hiểm thân vỏ Teilkasko của bạn."
    },
    tip: "Cảnh báo an toàn quan trọng: Không bao giờ lội xuống tầng hầm ngập nước (überfluteter Keller) khi chưa ngắt điện tổng vì nguy cơ điện giật chết người. Thiệt hại cây đổ lên xe do bão từ cấp gió 8 trở lên (Sturm ab Windstärke 8) được bảo hiểm Teilkasko chi trả."
  },
  {
    id: "t4_emg_36",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Ngửi thấy mùi nhựa cháy khét từ ổ cắm điện và lập tức ngắt cầu chì",
    de: "Die Steckdose hinter dem Kühlschrank riecht plötzlich stark verschmort und knistert leise, deshalb habe ich sicherheitshalber sofort die Sicherung ausgeschaltet.",
    de_phonetic: "đi shtéc-đô-zờ hin-tờ đêm cuy-l-shranc ríkht plớt-tslích shtác fea-shmoát un knís-tợt lai-zờ, đés-háp ha-bờ ích zí-khờ-haits-hal-bờ zô-foát đi zí-khờ-rung aus-gờ-shal-tợt.",
    de_register: {
      du: "Die Steckdose hinter dem Kühlschrank riecht verschmort und knistert, deshalb habe ich sofort die Sicherung rausgemacht.",
      sie: "Die Steckdose hinter dem Kühlschrank riecht plötzlich stark verschmort und knistert leise, deshalb habe ich sicherheitshalber sofort die Sicherung ausgeschaltet."
    },
    en: "The power outlet behind the fridge suddenly smells strongly of burnt plastic and is crackling softly, so I immediately turned off the circuit breaker to be safe.",
    vi: "Ổ cắm điện phía sau tủ lạnh đột nhiên có mùi khét lẹt và phát ra tiếng lách tách nhỏ, nên để an toàn tôi đã lập tức ngắt cầu chì.",
    reply: {
      de: "Sehr gut reagiert! Lassen Sie die Sicherung unbedingt draußen, bis der Elektriker die verschmorte Dose ausgetauscht hat.",
      en: "Very good reaction! Definitely leave the breaker off until the electrician has replaced the scorched outlet.",
      vi: "Bạn xử lý rất chuẩn! Hãy cứ để nguyên cầu chì ở trạng thái ngắt cho đến khi thợ điện thay xong ổ cắm bị cháy sém đó nhé."
    },
    tip: "Từ 'verschmort riechen' (có mùi khét do chập cháy dây điện/nhựa) và 'knistern' (kêu lách tách tia lửa điện) là những từ khóa cực kỳ chính xác để mô tả nguy cơ chập cháy điện (Kabelbrand)."
  },
  {
    id: "t4_emg_37",
    level: "C1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Làm mất chìa khóa căn hộ thuộc hệ thống khóa tổng của chung cư (Schließanlage) và báo cho chủ nhà cùng bảo hiểm trách nhiệm",
    de: "Mir ist leider mein Wohnungsschlüssel verloren gegangen, der zur zentralen Schließanlage des Hauses gehört, weshalb ich den Verlust umgehend meiner Privathaftpflichtversicherung melde.",
    de_phonetic: "mia ist lai-đờ mai-nờ vô-nungs-shlứt-sần fea-loa-rần gờ-gang-ần, đea tsua tsen-tra-lần shlís-an-la-gờ đes hau-zờs gờ-hơát, vés-háp ích đên fea-lúst um-gê-ần mai-nờ pri-vát-háft-pflíkht-fea-zí-khờ-rung mel-đờ.",
    de_register: {
      du: "Mir ist leider mein Schlüssel verloren gegangen, der zur Schließanlage des Hauses gehört, deshalb melde ich das sofort meiner Haftpflichtversicherung.",
      sie: "Mir ist leider mein Wohnungsschlüssel verloren gegangen, der zur zentralen Schließanlage des Hauses gehört, weshalb ich den Verlust umgehend meiner Privathaftpflichtversicherung melde."
    },
    en: "I unfortunately lost my apartment key, which belongs to the building's master-key system, so I am reporting the loss to my personal liability insurance immediately.",
    vi: "Không may tôi đã làm mất chìa khóa căn hộ thuộc hệ thống khóa tổng của tòa nhà, vì vậy tôi xin báo ngay việc mất chìa này cho bên bảo hiểm trách nhiệm cá nhân.",
    reply: {
      de: "Gut, dass Ihre Haftpflicht Schlüsselverlust abdeckt, denn der Austausch einer kompletten Schließanlage kann mehrere tausend Euro kosten.",
      en: "It is a good thing your liability insurance covers lost keys, because replacing an entire master-key system can cost several thousand euros.",
      vi: "May mà bảo hiểm trách nhiệm của bạn có bao gồm hạng mục mất chìa khóa, vì việc thay toàn bộ hệ thống khóa tổng có thể tốn đến vài nghìn Euro."
    },
    tip: "Ở Đức, hầu hết các tòa chung cư dùng 'Schließanlage' (1 chìa mở được cả cửa tòa nhà, cửa hầm và cửa căn hộ). Làm mất chìa này có thể phải thay toàn bộ ổ khóa của cả tòa nhà. Khi mua Privathaftpflichtversicherung, hãy luôn chắc chắn hợp đồng có điều khoản 'Schlüsselverlust' (mất chìa khóa nhà thuê và chìa khóa công ty)."
  },
  {
    id: "t4_emg_38",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Vô tình làm rơi vỡ hoặc làm hỏng đồ đạc đắt tiền ở nhà bạn bè và đề nghị dùng bảo hiểm trách nhiệm cá nhân để đền bù",
    de: "Es tut mir unendlich leid, dass ich aus Versehen deinen Laptop vom Tisch gestoßen habe! Ich melde den Schaden noch heute meiner Haftpflichtversicherung.",
    de_phonetic: "es tút mia un-ent-lích lait, đas ích aus fea-zê-ần đai-nần lép-tóp fom tísh gờ-shtô-sần ha-bờ! ích mel-đờ đên sha-đần nốkh hoi-tờ mai-nờ háft-pflíkht-fea-zí-khờ-rung.",
    de_register: {
      du: "Es tut mir unendlich leid, dass ich aus Versehen deinen Laptop vom Tisch gestoßen habe! Ich melde den Schaden sofort meiner Haftpflichtversicherung.",
      sie: "Es tut mir unendlich leid, dass ich aus Versehen Ihren Laptop vom Tisch gestoßen habe! Ich melde den Schaden noch heute meiner Haftpflichtversicherung."
    },
    en: "I am terribly sorry that I accidentally knocked your laptop off the table! I will report the damage to my personal liability insurance today.",
    vi: "Mình thực sự vô cùng xin lỗi vì đã vô ý gạt làm rơi chiếc laptop của bạn khỏi bàn! Mình sẽ báo thiệt hại này cho bên bảo hiểm trách nhiệm cá nhân ngay hôm nay.",
    reply: {
      de: "Mach dir keinen Kopf, so ein Missgeschick kann jedem passieren! Ich suche dir morgen die Originalrechnung heraus.",
      en: "Don't worry about it, a mishap like that can happen to anyone! I will dig out the original receipt for you tomorrow.",
      vi: "Đừng áy náy quá, sự cố vô tình như vậy ai cũng có thể gặp phải mà! Để mai mình tìm lại hóa đơn mua máy gốc đưa cho bạn nhé."
    },
    tip: "Bảo hiểm trách nhiệm cá nhân (Privathaftpflichtversicherung, chỉ khoảng 40–60 €/năm) là loại bảo hiểm quan trọng bậc nhất ở Đức, giúp chi trả khi bạn vô tình gây thiệt hại về người hoặc tài sản cho người khác."
  },
  {
    id: "t4_emg_39",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Gọi cấp cứu thú y (Tierärztlicher Notdienst) vì chó cưng ăn nhầm sô-cô-la hoặc bả độc",
    de: "Unser Hund hat gerade beim Spaziergang etwas Verdächtiges gefressen, zittert jetzt am ganzen Körper und erbricht ständig. Können wir sofort in Ihre Tierklinik kommen?",
    de_phonetic: "un-zờ hunt hát gờ-ra-đờ baim shpa-tsia-gang ét-vas fea-đếch-ti-gờs gờ-frét-sần, tsít-tợt yét-st am gan-tsần kơ-pờ un ea-bríkht shten-đích. kơ-nần via zô-foát in i-rờ tia-kli-níc kô-mần?",
    de_register: {
      du: "Unser Hund hat gerade etwas Verdächtiges gefressen, zittert am ganzen Körper und erbricht ständig. Können wir sofort vorbeikommen?",
      sie: "Unser Hund hat gerade beim Spaziergang etwas Verdächtiges gefressen, zittert jetzt am ganzen Körper und erbricht ständig. Können wir sofort in Ihre Tierklinik kommen?"
    },
    en: "Our dog just ate something suspicious on our walk, is now trembling all over, and keeps vomiting. Can we come to your veterinary clinic immediately?",
    vi: "Chú chó của chúng tôi vừa ăn phải thứ gì đó đáng ngờ lúc đi dạo, giờ đang run rẩy toàn thân và nôn liên tục. Chúng tôi có thể đưa bé đến bệnh viện thú y ngay bây giờ được không ạ?",
    reply: {
      de: "Kommen Sie bitte unverzüglich vorbei! Falls Sie noch eine Probe von dem Gefressenen haben, bringen Sie diese unbedingt in einer Tüte mit.",
      en: "Please come over without delay! If you still have a sample of what was eaten, be sure to bring it along in a bag.",
      vi: "Xin hãy đưa bé đến ngay lập tức! Nếu bạn còn giữ mẫu thức ăn hoặc chất mà bé đã ăn phải thì nhớ bỏ vào túi mang theo nhé."
    },
    tip: "Khi nuôi thú cưng ở Đức, hãy luôn lưu sẵn số của bệnh viện thú y trực 24/7 (Tierklinik / Tierärztlicher Notdienst) gần nhà. Khám cấp cứu thú y ngoài giờ hành chính theo quy định GOT có mức phí cố định ban đầu (Notdienstgebühr 50 € chưa tính thuế) cộng hệ số phí cao hơn ngày thường."
  },
  {
    id: "t4_emg_40",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Máy tính làm việc bị sập nguồn ngay trước giờ thuyết trình quan trọng và hỏi bộ phận IT mượn máy dự phòng khẩn cấp",
    de: "Mein Arbeitslaptop lässt sich kurz vor der Kundenpräsentation plötzlich nicht mehr hochfahren. Habt ihr in der IT-Abteilung dringend ein Leihgerät für mich?",
    de_phonetic: "mai-nờ a-baits-lép-tóp lést zíkh kuats foa đea kun-đần-pre-zen-ta-tsi-ôn plớt-tslích níkht mea hôkh-fa-rần. hápt ia in đea i-tê-áp-tai-lung đring-ần ain lai-gờ-rết fuya míkh?",
    de_register: {
      du: "Mein Arbeitslaptop lässt sich kurz vor der Präsentation nicht mehr hochfahren. Hast du in der IT dringend ein Leihgerät für mich?",
      sie: "Mein Arbeitslaptop lässt sich kurz vor der Kundenpräsentation plötzlich nicht mehr hochfahren. Haben Sie in der IT-Abteilung dringend ein Leihgerät für mich?"
    },
    en: "My work laptop suddenly won't boot up right before the client presentation. Do you urgently have a loaner device for me in the IT department?",
    vi: "Chiếc laptop làm việc của tôi tự nhiên không khởi động lên được nữa ngay trước buổi thuyết trình với khách hàng. Bên bộ phận IT có máy cho mượn khẩn cấp nào cho tôi không?",
    reply: {
      de: "Ja, ich richte dir sofort ein Ersatzgerät ein. Deine Dateien liegen ja zum Glück alle in der Cloud.",
      en: "Yes, I will set up a replacement device for you right away. Luckily, all your files are stored in the cloud.",
      vi: "Có, để mình cài đặt ngay một máy thay thế cho bạn. May mà toàn bộ tài liệu của bạn đều đã lưu trên đám mây rồi."
    },
    tip: "Hai động từ cực kỳ thông dụng khi dùng máy tính: 'hochfahren' (khởi động máy) và 'herunterfahren' (tắt máy). 'Das Leihgerät / Ersatzgerät' là thiết bị cho mượn tạm thời trong lúc sửa chữa."
  },
  {
    id: "t4_emg_41",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Lỡ tay làm đổ cốc cà phê hoặc nước lên bàn phím laptop và lập tức rút sạc tắt nguồn để tránh chập mạch",
    de: "Mir ist gerade eine halbe Tasse Kaffee über die Tastatur gelaufen! Ich habe sofort das Ladekabel gezogen und das Gerät komplett ausgeschaltet.",
    de_phonetic: "mia ist gờ-ra-đờ ai-nờ hal-bờ tát-sờ ka-fê uy-bờ đi tas-ta-tua gờ-lau-fần! ích ha-bờ zô-foát đas la-đờ-ka-bần gờ-tsô-gần un đas gờ-rết kôm-plét aus-gờ-shal-tợt.",
    de_register: {
      du: "Mir ist gerade Kaffee über die Tastatur gelaufen! Ich habe sofort das Ladekabel gezogen und den Laptop ausgeschaltet.",
      sie: "Mir ist gerade eine halbe Tasse Kaffee über die Tastatur gelaufen! Ich habe sofort das Ladekabel gezogen und das Gerät komplett ausgeschaltet."
    },
    en: "Half a cup of coffee just spilled over my keyboard! I immediately unplugged the charger and turned the device completely off.",
    vi: "Tôi vừa lỡ làm đổ nửa cốc cà phê lên bàn phím! Tôi đã lập tức rút dây sạc và tắt nguồn hoàn toàn thiết bị rồi.",
    reply: {
      de: "Dreh den Laptop am besten aufgeklappt auf den Kopf, damit die Flüssigkeit herauslaufen kann, und schalte ihn auf keinen Fall wieder ein!",
      en: "Best thing is to turn the open laptop upside down so the liquid can drain out, and do not turn it back on under any circumstances!",
      vi: "Tốt nhất là bạn hãy mở máy rồi úp ngược xuống để chất lỏng chảy ra ngoài, và tuyệt đối đừng bật nguồn lên lại nhé!"
    },
    tip: "Nếu bạn làm đổ nước vào thiết bị do công ty cấp (Dienstlaptop / Arbeitsmittel), hãy báo ngay cho bộ phận IT. Theo luật lao động Đức (Arbeitnehmerhaftung), nhân viên không phải đền bù hoặc chỉ chịu phần rất nhỏ nếu đó là sơ suất nhẹ thông thường (leichte Fahrlässigkeit)."
  },
  {
    id: "t4_emg_42",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Tàu hỏa bị mắc kẹt giữa đường do hỏng đường dây điện trên cao sau bão và hỏi nhân viên tàu về phương án bố trí khách sạn hoặc taxi",
    de: "Da die Strecke wegen einer Oberleitungsstörung komplett gesperrt ist und heute kein Zug mehr fährt, wollte ich fragen, ob die Bahn ein Hotel oder ein Taxi organisiert.",
    de_phonetic: "đa đi shtréc-kờ vê-gần ai-nờ ô-bờ-lai-tungs-shtơ-rung kôm-plét gờ-shpeat ist un hoi-tờ kai-nờ tsúc mea feát, vôl-tờ ích fra-gần, óp đi ban ain hô-tel ô-đờ ain tác-si oa-ga-ni-ziat.",
    de_register: {
      du: "Da die Strecke wegen einer Oberleitungsstörung gesperrt ist und heute kein Zug mehr fährt, wollte ich fragen, ob die Bahn ein Hotel oder Taxi organisiert.",
      sie: "Da die Strecke wegen einer Oberleitungsstörung komplett gesperrt ist und heute kein Zug mehr fährt, wollte ich fragen, ob die Bahn ein Hotel oder ein Taxi organisiert."
    },
    en: "Since the line is completely closed due to overhead wire damage and no more trains are running today, I wanted to ask whether the railway will arrange a hotel or a taxi.",
    vi: "Vì tuyến đường sắt đã bị phong tỏa hoàn toàn do sự cố đứt dây điện trên cao và hôm nay không còn chuyến tàu nào chạy nữa, tôi muốn hỏi liệu nhà tàu có bố trí khách sạn hay taxi cho hành khách không ạ.",
    reply: {
      de: "Bitte wenden Sie sich an die Information am Bahnhof, dort erhalten Sie einen Hotelgutschein oder einen Taxigutschein bis zu hundertzwanzig Euro.",
      en: "Please go to the information desk at the station; there you will receive a hotel voucher or a taxi voucher for up to one hundred and twenty euros.",
      vi: "Xin mời bạn liên hệ quầy thông tin tại nhà ga, ở đó bạn sẽ được cấp phiếu nghỉ khách sạn hoặc phiếu đi taxi trị giá tối đa 120 Euro."
    },
    tip: "Theo Quyền hành khách đi tàu tại Đức (Fahrgastrechte), nếu chuyến tàu cuối cùng trong ngày bị hủy hoặc trễ khiến bạn không thể tới đích trước 24h đêm, Deutsche Bahn có nghĩa vụ cung cấp Taxigutschein (tối đa 120 €) hoặc bố trí khách sạn qua đêm miễn phí."
  },
  {
    id: "t4_emg_43",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Bị lỡ chuyến tàu nối chuyến cuối cùng trong đêm do tàu trước đến trễ và xin phiếu taxi hoặc khách sạn tại quầy DB Reisezentrum",
    de: "Wegen der Verspätung meines vorherigen ICEs habe ich den letzten Anschlusszug für heute Nacht verpasst und bräuchte bitte einen Taxigutschein oder eine Hotelübernachtung.",
    de_phonetic: "vê-gần đea fea-shpê-tung mai-nờs foa-he-ri-gần i-tsê-ês ha-bờ ích đên lét-stần an-shlús-tsúc fuya hoi-tờ nákht fea-pást un bróikh-tờ bít-tờ ai-nần tác-si-gút-shain ô-đờ ai-nờ hô-tel-uy-bờ-nákh-tung.",
    de_register: {
      du: "Wegen der Verspätung meines ICEs habe ich den letzten Anschlusszug verpasst und brauche einen Taxigutschein oder eine Hotelübernachtung.",
      sie: "Wegen der Verspätung meines vorherigen ICEs habe ich den letzten Anschlusszug für heute Nacht verpasst und bräuchte bitte einen Taxigutschein oder eine Hotelübernachtung."
    },
    en: "Because of the delay of my previous ICE train, I missed the last connecting train for tonight and would need a taxi voucher or an overnight hotel stay, please.",
    vi: "Do chuyến tàu ICE trước đó của tôi bị trễ nên tôi đã lỡ mất chuyến tàu nối chuyến cuối cùng trong đêm nay, tôi xin được cấp phiếu đi taxi hoặc phiếu nghỉ khách sạn qua đêm ạ.",
    reply: {
      de: "Zeigen Sie mir bitte kurz Ihr Ticket. Ich stelle Ihnen sofort die Bestätigung für unser Partnerhotel direkt gegenüber vom Bahnhof aus.",
      en: "Please show me your ticket briefly. I will issue you the confirmation for our partner hotel right across from the station immediately.",
      vi: "Xin bạn cho tôi xem qua vé tàu nhé. Tôi sẽ in ngay giấy xác nhận để bạn nghỉ tại khách sạn đối tác nằm ngay đối diện nhà ga."
    },
    tip: "Nếu quầy DB Reisezentrum hoặc DB Information đã đóng cửa vào ban đêm, bạn có thể tự đặt khách sạn hoặc đi taxi (giữ lại toàn bộ hóa đơn gốc - Originalbelege) và nộp yêu cầu hoàn tiền trực tiếp trong ứng dụng DB Navigator mục 'Fahrgastrechte'."
  },
  {
    id: "t4_emg_44",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Hành lý ký gửi bị thất lạc tại sân bay và làm thủ tục khai báo tại quầy tìm kiếm hành lý",
    de: "Mein aufgegebener Koffer ist leider nicht auf dem Gepäckband angekommen. Ich möchte bitte eine Verlustmeldung aufnehmen lassen.",
    de_phonetic: "mai-nờ auf-gờ-gê-bờ-nờ cóp-fờ ist lai-đờ níkht auf đêm gờ-péc-bant an-gờ-kô-mần. ích mớkh-tờ bít-tờ ai-nờ fea-lúst-mel-đung auf-nê-mần lát-sần.",
    de_register: {
      du: "Mein aufgegebener Koffer ist leider nicht auf dem Gepäckband angekommen. Ich muss eine Verlustmeldung machen.",
      sie: "Mein aufgegebener Koffer ist leider nicht auf dem Gepäckband angekommen. Ich möchte bitte eine Verlustmeldung aufnehmen lassen."
    },
    en: "My checked suitcase unfortunately did not arrive on the baggage carousel. I would like to file a lost baggage report, please.",
    vi: "Chiếc vali ký gửi của tôi không may đã không xuất hiện trên băng chuyền hành lý. Tôi muốn làm thủ tục khai báo thất lạc hành lý ạ.",
    reply: {
      de: "Geben Sie mir bitte Ihre Bordkarte und den Gepäckabschnitt. Wir erstellen sofort den PIR-Bericht und liefern den Koffer direkt an Ihr Hotel, sobald er da ist.",
      en: "Please hand me your boarding pass and the baggage claim tag. We will create the PIR report right away and deliver the suitcase straight to your hotel as soon as it arrives.",
      vi: "Xin bạn đưa giúp thẻ lên máy bay và cuống phiếu hành lý. Chúng tôi sẽ lập biên bản PIR ngay và giao vali thẳng đến khách sạn của bạn ngay khi tìm thấy."
    },
    tip: "Khi thất lạc hành lý ở sân bay (Gepäckverlust), tuyệt đối không rời khu vực nhận hành lý trước khi đến quầy 'Gepäckermittlung' (Lost & Found) để lấy mã hồ sơ PIR (Property Irregularity Report). Bạn cũng có quyền mua đồ vệ sinh cá nhân và quần áo thiết yếu và yêu cầu hãng bay hoàn tiền."
  },
  {
    id: "t4_emg_45",
    level: "C1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Chuyến bay bị hủy vào phút chót và yêu cầu hãng hàng không đổi chuyến sớm nhất kèm hỗ trợ ăn nghỉ theo Quyền hành khách EU",
    de: "Da unser Flug kurzfristig annulliert wurde, bitten wir gemäß der EU-Fluggastrechteverordnung um eine kostenlose Umbuchung auf die nächstmögliche Verbindung sowie um Verpflegungsgutscheine.",
    de_phonetic: "đa un-zờ flúc kuats-frís-tích a-nu-liat vua-đờ, bít-tần via gờ-mês đea ê-u-flúc-gast-rếch-tờ-fea-oát-nung um ai-nờ cós-tần-lô-zờ um-bu-khung auf đi nếchst-mớc-li-khờ fea-bin-đung zô-vi um fea-pflê-gungs-gút-shai-nờ.",
    de_register: {
      du: "Da unser Flug kurzfristig annulliert wurde, bitten wir nach EU-Fluggastrechten um eine kostenlose Umbuchung und Verpflegungsgutscheine.",
      sie: "Da unser Flug kurzfristig annulliert wurde, bitten wir gemäß der EU-Fluggastrechteverordnung um eine kostenlose Umbuchung auf die nächstmögliche Verbindung sowie um Verpflegungsgutscheine."
    },
    en: "Since our flight was cancelled at short notice, we request a free rebooking onto the next available connection as well as meal vouchers under the EU Air Passenger Rights Regulation.",
    vi: "Vì chuyến bay của chúng tôi bị hủy vào phút chót, theo Quy định về Quyền hành khách đi máy bay của EU, chúng tôi đề nghị được đổi miễn phí sang chuyến bay sớm nhất có thể cũng như được cấp phiếu ăn uống.",
    reply: {
      de: "Ich buche Sie auf den Flug morgen früh um sieben Uhr um und reserviere Ihnen ein Zimmer im Flughafenhotel inklusive Transfer.",
      en: "I will rebook you onto tomorrow morning's seven o'clock flight and reserve a room for you at the airport hotel, including the shuttle transfer.",
      vi: "Tôi sẽ đổi vé cho bạn sang chuyến bay lúc 7 giờ sáng mai và đặt phòng cho bạn tại khách sạn sân bay kèm xe đưa đón."
    },
    tip: "Theo quy định EU 261/2004 (EU-Fluggastrechteverordnung), khi chuyến bay bị hủy hoặc trễ trên 3 tiếng (không phải do thời tiết cực đoan bất khả kháng), ngoài ăn uống/khách sạn (Betreuungsleistungen), bạn còn được bồi thường từ 250 € đến 600 € tiền mặt."
  },
  {
    id: "t4_emg_46",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Cây rút tiền ATM nuốt mất thẻ ngân hàng và báo ngay cho nhân viên chi nhánh ngân hàng",
    de: "Der Geldautomat hier im Vorraum hat gerade ohne ersichtlichen Grund meine Bankkarte eingezogen und gibt sie nicht mehr heraus.",
    de_phonetic: "đea gelt-au-tô-mát hia im foa-raum hát gờ-ra-đờ ô-nờ ea-zíkht-li-khần grunt mai-nờ banc-cát-tờ ain-gờ-tsô-gần un gípt zi níkht mea he-raus.",
    de_register: {
      du: "Der Geldautomat hier hat gerade ohne Grund meine Bankkarte eingezogen und gibt sie nicht mehr raus.",
      sie: "Der Geldautomat hier im Vorraum hat gerade ohne ersichtlichen Grund meine Bankkarte eingezogen und gibt sie nicht mehr heraus."
    },
    en: "The ATM here in the lobby just swallowed my bank card for no apparent reason and won't give it back.",
    vi: "Cây rút tiền tự động ở sảnh ngoài này vừa tự dưng nuốt mất thẻ ngân hàng của tôi mà không rõ lý do và không nhả thẻ ra nữa.",
    reply: {
      de: "Bitte notieren Sie sich die Automatennummer. Wenn Sie Ihren Ausweis dabei haben, kann ein Mitarbeiter die Karte nach der Leerung an Sie aushändigen.",
      en: "Please write down the ATM number. If you have your ID card with you, a staff member can hand the card back to you after the machine is serviced.",
      vi: "Xin bạn ghi lại mã số của máy ATM nhé. Nếu bạn có mang theo căn cước, nhân viên ngân hàng có thể trả lại thẻ cho bạn sau khi mở máy kiểm quỹ."
    },
    tip: "Nếu máy ATM nuốt thẻ ('Der Automat hat die Karte eingezogen') ngoài giờ làm việc hoặc tại cây ATM lạ, hãy gọi 116 116 để khóa thẻ ngay nhằm phòng ngừa rủi ro gian lận."
  },
  {
    id: "t4_emg_47",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Nhận ra mình vừa lỡ bấm vào đường link giả mạo lừa đảo (Phishing) và gọi ngân hàng khóa ngay tài khoản trực tuyến",
    de: "Ich befürchte, dass ich gerade auf eine gefälschte Phishing-Nachricht hereingefallen bin, und möchte mein Online-Banking vorsorglich sofort sperren lassen.",
    de_phonetic: "ích bờ-fứa-kh-tờ, đas ích gờ-ra-đờ auf ai-nờ gờ-fel-shtờ fi-shing-nákh-ríkht he-rain-gờ-fa-lần bin, un mớkh-tờ mai-nờ on-lai-ban-king foa-zoác-lích zô-foát shpe-rần lát-sần.",
    de_register: {
      du: "Ich glaube, ich bin gerade auf eine Phishing-Nachricht reingefallen, und muss mein Online-Banking sofort sperren lassen.",
      sie: "Ich befürchte, dass ich gerade auf eine gefälschte Phishing-Nachricht hereingefallen bin, und möchte mein Online-Banking vorsorglich sofort sperren lassen."
    },
    en: "I am afraid I just fell for a fake phishing message and would like to have my online banking access blocked immediately as a precaution.",
    vi: "Tôi e là mình vừa mắc bẫy một tin nhắn giả mạo lừa đảo và muốn yêu cầu khóa ngay quyền truy cập ngân hàng trực tuyến để đề phòng.",
    reply: {
      de: "Ich habe Ihren Online-Zugang und das TAN-Verfahren soeben gesperrt. Wir prüfen jetzt gemeinsam die letzten Kontobewegungen.",
      en: "I have just blocked your online access and your TAN authentication method. Let's now review your recent account transactions together.",
      vi: "Tôi vừa khóa tài khoản trực tuyến và phương thức xác thực TAN của bạn rồi. Bây giờ chúng ta sẽ cùng kiểm tra lại các giao dịch gần nhất trên tài khoản nhé."
    },
    tip: "Các tin nhắn SMS giả danh ngân hàng hoặc DHL ('Ihr Paket konnte nicht zugestellt werden' / 'Ihre PhotoTAN läuft ab') rất phổ biến. Ngân hàng ở Đức KHÔNG BAO GIỜ yêu cầu bạn nhập mã TAN qua đường link SMS hoặc đọc mã TAN qua điện thoại."
  },
  {
    id: "t4_emg_48",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bị bọ ve cắn (Zeckenbiss) sau khi đi công viên và xuất hiện quầng đỏ lan rộng quanh vết cắn nên cần khám bác sĩ ngay",
    de: "Vor einer Woche hatte ich nach einem Waldausflug einen Zeckenbiss am Bein, und jetzt bildet sich ein kreisrunder roter Ring um die Einstichstelle.",
    de_phonetic: "foa ai-nờ vố-khờ hát-tờ ích nákh ai-nầm valt-aus-flúc ai-nần tséc-kần-bís am bain, un yét-st bil-đợt zíkh ain krais-run-đờ rô-tờ ring um đi ain-shtíkh-shte-lờ.",
    de_register: {
      du: "Vor einer Woche hatte ich einen Zeckenbiss am Bein, und jetzt bildet sich ein kreisrunder roter Ring um die Einstichstelle.",
      sie: "Vor einer Woche hatte ich nach einem Waldausflug einen Zeckenbiss am Bein, und jetzt bildet sich ein kreisrunder roter Ring um die Einstichstelle."
    },
    en: "A week ago I got a tick bite on my leg after a walk in the woods, and now a circular red ring is forming around the bite site.",
    vi: "Một tuần trước sau chuyến đi dạo trong rừng tôi bị một con bọ ve cắn ở chân, và bây giờ xuất hiện một vòng tròn đỏ lan rộng xung quanh vết cắn.",
    reply: {
      de: "Das sieht sehr nach einer Wanderröte aus. Kommen Sie bitte noch heute in die Praxis, damit wir sofort eine Antibiotika-Therapie gegen Borreliose starten können.",
      en: "That looks very much like erythema migrans. Please come into the clinic today so we can immediately start antibiotic therapy against Lyme disease.",
      vi: "Dấu hiệu này rất giống ban đỏ di chuyển (Wanderröte). Bạn hãy đến phòng khám ngay hôm nay để chúng tôi bắt đầu phác đồ kháng sinh điều trị bệnh Lyme (Borreliose) kịp thời."
    },
    tip: "Bọ ve (Zecken) rất phổ biến trong cỏ cao và rừng ở Đức từ mùa xuân đến mùa thu. Chúng có thể truyền 2 bệnh: FSME (viêm não - đã có vắc-xin tiêm miễn phí qua bảo hiểm y tế) và Borreliose (nhận biết qua quầng đỏ lan rộng 'Wanderröte' sau vài ngày đến vài tuần, cần uống kháng sinh sớm)."
  },
  {
    id: "t4_emg_49",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Bị ngộ độc thực phẩm hoặc rối loạn tiêu hóa cấp tính sau khi ăn ngoài và nhờ mua dung dịch bù điện giải tại hiệu thuốc",
    de: "Ich habe mir gestern Abend wohl eine Lebensmittelvergiftung zugezogen und brauche aus der Apotheke dringend eine Elektrolytlösung sowie etwas gegen Übelkeit.",
    de_phonetic: "ích ha-bờ mia gés-tần a-bần vôl ai-nờ lê-bần-s-mít-tần-fea-gíp-tung tsu-gờ-tsô-gần un brau-khờ aus đea a-pô-tê-kờ đring-ần ai-nờ ê-léc-trô-lýt-lơ-zung zô-vi ét-vas gê-gần uy-bần-kait.",
    de_register: {
      du: "Ich habe mir gestern wohl eine Lebensmittelvergiftung zugezogen und brauche aus der Apotheke dringend Elektrolyte und etwas gegen Übelkeit.",
      sie: "Ich habe mir gestern Abend wohl eine Lebensmittelvergiftung zugezogen und brauche aus der Apotheke dringend eine Elektrolytlösung sowie etwas gegen Übelkeit."
    },
    en: "I think I came down with food poisoning last night and urgently need an electrolyte solution and something for nausea from the pharmacy.",
    vi: "Có vẻ tối qua tôi bị ngộ độc thực phẩm rồi, giờ tôi cần mua gấp dung dịch bù điện giải và thuốc chống buồn nôn ở hiệu thuốc.",
    reply: {
      de: "Hier sind die Elektrolyt-Beutel zum Auflösen in stillem Wasser. Wenn Sie länger als einen Tag gar keine Flüssigkeit behalten können, müssen Sie zum Arzt.",
      en: "Here are the electrolyte sachets to dissolve in still water. If you cannot keep any fluids down for more than a day, you must see a doctor.",
      vi: "Đây là các gói bột điện giải để pha với nước lọc không ga. Nếu quá một ngày mà bạn hoàn toàn không giữ được nước trong cơ thể thì phải đi khám bác sĩ ngay nhé."
    },
    tip: "Khi bị tiêu chảy/nôn mửa cấp (Magen-Darm-Infekt / Lebensmittelvergiftung), người Đức thường bù nước bằng 'Elektrolytlösung' (như Elotrans hoặc Oralpädon), uống trà hoa cúc/thì là (Kamillen- oder Fencheltee) và ăn bánh quy mặn dạng que (Salzstangen)."
  },
  {
    id: "t4_emg_50",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Trấn an và động viên người đi cùng giữ bình tĩnh khi đang xử lý tình huống sự cố căng thẳng",
    de: "Atme erst mal tief durch und bewahre Ruhe — die Hauptsache ist, dass uns nichts passiert ist, und alles Weitere regeln wir jetzt Schritt für Schritt!",
    de_phonetic: "át-mờ eát-st mal típ đuakh un bờ-va-rờ ru-ờ — đi haupt-za-khờ ist, đas uns níkhts pa-ziat ist, un a-lờs vai-tờ-rờ rê-gần via yét-st shrít fuya shrít!",
    de_register: {
      du: "Atme erst mal tief durch und bewahre Ruhe — die Hauptsache ist, dass uns nichts passiert ist, und alles Weitere regeln wir jetzt Schritt für Schritt!",
      sie: "Atmen Sie erst mal tief durch und bewahren Sie Ruhe — die Hauptsache ist, dass niemandem etwas passiert ist, und alles Weitere regeln wir jetzt Schritt für Schritt!"
    },
    en: "Take a deep breath first and stay calm — the main thing is that we are unhurt, and we will sort out everything else step by step right now!",
    vi: "Trước tiên cứ hít thở sâu và giữ bình tĩnh đã nào — điều quan trọng nhất là chúng ta không ai bị làm sao cả, còn mọi việc khác bây giờ mình sẽ giải quyết từng bước một!",
    reply: {
      de: "Du hast völlig recht, danke dir. Lass uns als Erstes die Notfallnummer anrufen und den Schaden melden.",
      en: "You are completely right, thank you. First of all, let's call the emergency hotline and report the damage.",
      vi: "Bạn nói hoàn toàn đúng, cảm ơn bạn nhé. Trước hết chúng mình hãy gọi cho số đường dây khẩn cấp và báo cáo sự cố đã."
    },
    tip: "Cụm từ vàng giúp trấn an tinh thần trong mọi sự cố: 'Die Hauptsache ist, dass niemandem etwas passiert ist!' (Quan trọng nhất là không ai bị làm sao cả!) và 'Schritt für Schritt kriegen wir das geregelt' (Từng bước một chúng ta sẽ giải quyết ổn thỏa)."
  }
];
