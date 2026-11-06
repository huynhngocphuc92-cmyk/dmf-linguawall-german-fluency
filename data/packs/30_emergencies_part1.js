// Tier 4 — Emergencies, Breakdowns & Safety (Khẩn cấp, Sự cố & An toàn) — Part 1 (Items 01–25)
module.exports = [
  {
    id: "t4_emg_01",
    level: "A2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi 112 (Cấp cứu/Cứu hỏa) để báo ca cấp cứu y tế kèm địa chỉ và tầng chính xác",
    de: "Wir brauchen dringend einen Krankenwagen in der Hauptstraße zwölf, im dritten Stock links bei Familie Nguyen!",
    de_phonetic: "via brau-khần đring-ần ai-nần kran-kần-va-gần in đea haupt-shtra-sờ tsvơlf, im đrít-tần shtốc links bai fa-mi-li-ờ nguyễn!",
    de_register: {
      du: "Ruf bitte sofort einen Krankenwagen in die Hauptstraße zwölf, dritter Stock links!",
      sie: "Wir brauchen dringend einen Krankenwagen in der Hauptstraße zwölf, im dritten Stock links bei Familie Nguyen!"
    },
    en: "We urgently need an ambulance at 12 Hauptstrasse, on the third floor on the left, at the Nguyen residence!",
    vi: "Chúng tôi cần gấp một xe cấp cứu đến số 12 đường Hauptstraße, tầng 3 bên trái, nhà gia đình Nguyễn!",
    reply: {
      de: "Der Rettungswagen ist bereits alarmiert. Bitte bleiben Sie am Telefon und öffnen Sie schon mal die Haustür.",
      en: "The ambulance has already been dispatched. Please stay on the line and go ahead and unlock the front door.",
      vi: "Xe cấp cứu đã được điều động rồi. Xin vui lòng giữ máy và mở sẵn cửa chính tòa nhà nhé."
    },
    tip: "Ở Đức và toàn châu Âu, số 112 (Notruf) là số khẩn cấp miễn phí cho Cấp cứu y tế và Cứu hỏa. Khi gọi 112, hãy nhớ quy tắc 5W: Wo (Ở đâu - kèm tầng và tên trên chuông cửa), Was (Chuyện gì), Wie viele (Bao nhiêu người bị nạn), Welche Art (Tình trạng thương tích), và Warten (Đợi câu hỏi từ tổng đài, không tự cúp máy)."
  },
  {
    id: "t4_emg_02",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Mô tả triệu chứng đau tức ngực dữ dội và khó thở cho nhân viên trực tổng đài cấp cứu",
    de: "Mein Vater hat plötzlich starke Schmerzen in der Brust, bekommt kaum noch Luft und schwitzt extrem stark.",
    de_phonetic: "mai-nờ fa-tờ hát plớt-tslích shtác-kờ shmea-tsần in đea brúst, bờ-kômt kaum nốkh lúft un shvítst éc-shtrêm shtác.",
    de_register: {
      du: "Er hat plötzlich starke Schmerzen in der Brust, bekommt kaum noch Luft und schwitzt extrem.",
      sie: "Mein Vater hat plötzlich starke Schmerzen in der Brust, bekommt kaum noch Luft und schwitzt extrem stark."
    },
    en: "My father suddenly has severe chest pain, can barely breathe, and is sweating heavily.",
    vi: "Bố tôi đột nhiên bị đau tức ngực dữ dội, gần như không thở nổi và đổ mồ hôi rất nhiều.",
    reply: {
      de: "Das klingt nach einem Herzinfarkt. Ich schicke sofort den Notarzt. Lagern Sie seinen Oberkörper bitte leicht erhöht.",
      en: "That sounds like a heart attack. I am sending an emergency doctor right away. Please prop up his upper body slightly.",
      vi: "Nghe giống dấu hiệu nhồi máu cơ tim. Tôi cử bác sĩ cấp cứu đến ngay. Xin hãy kê cao phần thân trên của bác ấy lên một chút."
    },
    tip: "Khi có dấu hiệu nguy hiểm tính mạng như đau thắt ngực (Brustschmerzen), khó thở (Atemnot), hoặc đột quỵ (Schlaganfall), tổng đài 112 sẽ điều cả xe cấp cứu (Rettungswagen - RTW) lẫn bác sĩ cấp cứu (Notarzt) đi cùng."
  },
  {
    id: "t4_emg_03",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Báo cáo vụ tai nạn xe đạp ngoài đường có người bị thương cần xe cứu thương",
    de: "Hier an der Kreuzung gab es gerade einen schweren Fahrradunfall, eine Person liegt am Boden und blutet am Kopf.",
    de_phonetic: "hia an đea kroi-tsung gáp es gờ-ra-đờ ai-nần shvea-rần fa-rát-un-fal, ai-nờ pea-zôn líct am bô-đần un blu-tợt am cốp.",
    de_register: {
      du: "Hier an der Kreuzung gab es gerade einen Fahrradunfall, jemand liegt am Boden und blutet am Kopf.",
      sie: "Hier an der Kreuzung gab es gerade einen schweren Fahrradunfall, eine Person liegt am Boden und blutet am Kopf."
    },
    en: "There has just been a serious bicycle accident here at the intersection; a person is lying on the ground and bleeding from the head.",
    vi: "Ngay tại ngã tư này vừa xảy ra một vụ tai nạn xe đạp nghiêm trọng, có một người đang nằm trên mặt đất và chảy máu đầu.",
    reply: {
      de: "Ist die Person bei Bewusstsein und atmet sie normal? Sprechen Sie sie bitte vorsichtig an.",
      en: "Is the person conscious and breathing normally? Please speak to them carefully.",
      vi: "Người đó có còn tỉnh táo và thở bình thường không? Xin hãy nhẹ nhàng gọi hỏi họ xem."
    },
    tip: "Theo luật Đức (§ 323c StGB - Unterlassene Hilfeleistung), mọi công dân đều có nghĩa vụ hỗ trợ sơ cứu hoặc gọi 112 khi gặp tai nạn. Không giúp đỡ khi có khả năng được coi là hành vi phạm pháp."
  },
  {
    id: "t4_emg_04",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Hỏi người xung quanh xin hộp sơ cứu hoặc hỗ trợ người bị choáng ngất",
    de: "Die Dame hier hatte wohl einen Kreislaufkollaps. Hat jemand einen Verbandskasten oder eine Flasche Wasser dabei?",
    de_phonetic: "đi đa-mờ hia hát-tờ vôl ai-nần krai-slauf-ko-láp-s. hát yê-man ai-nần fea-ban-s-kas-tần ô-đờ ai-nờ fla-shờ va-sờ đa-bai?",
    de_register: {
      du: "Sie hatte wohl einen Kreislaufkollaps. Hast du einen Verbandskasten oder etwas Wasser dabei?",
      sie: "Die Dame hier hatte wohl einen Kreislaufkollaps. Hat jemand einen Verbandskasten oder eine Flasche Wasser dabei?"
    },
    en: "This lady seems to have fainted from low circulation. Does anyone have a first-aid kit or a bottle of water with them?",
    vi: "Bác gái này có vẻ bị tụt huyết áp choáng ngất. Có ai mang theo hộp sơ cứu hoặc một chai nước không ạ?",
    reply: {
      de: "Ja, ich hole sofort den Verbandskasten aus meinem Kofferraum. Legen wir erst mal ihre Beine hoch!",
      en: "Yes, I will grab the first-aid kit from my trunk right away. Let's elevate her legs first!",
      vi: "Có, để tôi lấy ngay hộp sơ cứu trong cốp xe. Trước tiên chúng ta nâng cao chân của bác ấy lên đã!"
    },
    tip: "Mỗi ô tô ở Đức bắt buộc phải có một hộp sơ cứu (Verbandskasten) đạt chuẩn DIN 13164 trong cốp xe. Khi cần bông băng hoặc chăn giữ nhiệt (Rettungsdecke) ngoài đường, bạn luôn có thể vẫy xe ô tô gần đó để mượn."
  },
  {
    id: "t4_emg_05",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi đường dây bác sĩ trực ngoài giờ (116 117) vào ban đêm hoặc cuối tuần khi ốm nặng nhưng chưa nguy kịch",
    de: "Guten Abend, mein Kind hat seit Stunden fast vierzig Grad Fieber, und unser Kinderarzt hat am Wochenende geschlossen.",
    de_phonetic: "gu-tần a-bần, mai-nờ kint hát zait shtun-đần fást fia-tsích grát fi-bờ, un un-zờ kin-đờ-át-st hát am vố-khần-en-đờ gờ-shlốt-sần.",
    de_register: {
      du: "Mein Kind hat seit Stunden fast vierzig Grad Fieber, und unser Kinderarzt hat heute am Wochenende zu.",
      sie: "Guten Abend, mein Kind hat seit Stunden fast vierzig Grad Fieber, und unser Kinderarzt hat am Wochenende geschlossen."
    },
    en: "Good evening, my child has had a fever of almost forty degrees for hours, and our pediatrician is closed on the weekend.",
    vi: "Chào buổi tối, con tôi bị sốt gần 40 độ mấy tiếng đồng hồ rồi, mà phòng khám bác sĩ nhi của gia đình lại đóng cửa dịp cuối tuần.",
    reply: {
      de: "Ich nenne Ihnen gleich die Adresse der nächsten Kinder-Bereitschaftspraxis, die heute bis zweiundzwanzig Uhr geöffnet hat.",
      en: "I will give you the address of the nearest pediatric on-call clinic right away; it is open until ten p.m. today.",
      vi: "Tôi sẽ đọc ngay địa chỉ phòng khám nhi trực ngoài giờ gần nhất cho bạn, nơi đó mở cửa đến 22 giờ tối nay."
    },
    tip: "Số 116 117 (Ärztlicher Bereitschaftsdienst) là đường dây y tế miễn phí trên toàn nước Đức dành cho các bệnh cấp tính vào ban đêm, cuối tuần hoặc ngày lễ nhưng KHÔNG đe dọa tính mạng (không cần đến 112)."
  },
  {
    id: "t4_emg_06",
    level: "A2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Tìm hiệu thuốc trực đêm khẩn cấp gần nhất để mua thuốc theo đơn cấp cứu",
    de: "Entschuldigung, wissen Sie, welche Apotheke hier in der Nähe heute Nacht Notdienst hat?",
    de_phonetic: "ent-shul-đi-gung, vít-sần zi, vel-khờ a-pô-tê-kờ hia in đea nê-ờ hoi-tờ nákht nốt-đinst hát?",
    de_register: {
      du: "Weißt du zufällig, welche Apotheke hier in der Nähe heute Nacht Notdienst hat?",
      sie: "Entschuldigung, wissen Sie, welche Apotheke hier in der Nähe heute Nacht Notdienst hat?"
    },
    en: "Excuse me, do you know which pharmacy around here is on emergency night duty tonight?",
    vi: "Xin lỗi, bạn có biết hiệu thuốc nào gần đây trực đêm khẩn cấp tối nay không?",
    reply: {
      de: "Schauen Sie mal auf den Aushang hier am Schaufenster, da steht die genaue Adresse der heutigen Notdienst-Apotheke.",
      en: "Take a look at the notice in the shop window here; it lists the exact address of tonight's emergency pharmacy.",
      vi: "Bạn nhìn bảng thông báo dán ngay cửa kính hiệu thuốc này xem, trên đó có ghi địa chỉ chính xác của hiệu thuốc trực đêm nay đấy."
    },
    tip: "Tại Đức, các hiệu thuốc luân phiên trực 24/24 (Apotheken-Notdienst). Ngay cả khi hiệu thuốc đóng cửa, trước cửa kính luôn dán bảng chỉ dẫn hiệu thuốc trực gần nhất. Mua thuốc ban đêm hoặc Chủ nhật sẽ có phụ phí nhỏ (Notdienstgebühr khoảng 2,50 €)."
  },
  {
    id: "t4_emg_07",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Gọi dịch vụ nha khoa khẩn cấp cuối tuần vì đau răng sưng má dữ dội",
    de: "Ich habe seit heute Morgen unerträgliche Zahnschmerzen und meine linke Wange ist schon komplett dick angeschwollen.",
    de_phonetic: "ích ha-bờ zait hoi-tờ moa-gần un-ea-trêc-li-khờ tsan-shmea-tsần un mai-nờ lin-kờ vang-ờ ist shôn kôm-plét đíc an-gờ-shvô-lần.",
    de_register: {
      du: "Ich habe seit heute Morgen unerträgliche Zahnschmerzen und meine Wange ist schon total dick angeschwollen.",
      sie: "Ich habe seit heute Morgen unerträgliche Zahnschmerzen und meine linke Wange ist schon komplett dick angeschwollen."
    },
    en: "I have had unbearable toothache since this morning, and my left cheek is already completely swollen.",
    vi: "Từ sáng nay tôi bị đau răng không chịu nổi và má bên trái đã sưng vù lên rồi.",
    reply: {
      de: "Kommen Sie bitte direkt in unsere Notfallsprechstunde. Vergessen Sie Ihre Versichertenkarte nicht!",
      en: "Please come straight to our emergency consultation hours. Do not forget your health insurance card!",
      vi: "Xin mời bạn đến thẳng giờ khám cấp cứu của chúng tôi. Đừng quên mang theo thẻ bảo hiểm y tế nhé!"
    },
    tip: "Mỗi bang ở Đức đều có dịch vụ nha khoa trực cấp cứu cuối tuần và ngày lễ (Zahnärztlicher Notdienst). Bạn có thể tra cứu phòng khám trực theo mã bưu điện (PLZ) trên mạng và đến thẳng trong khung giờ quy định mà không cần hẹn trước."
  },
  {
    id: "t4_emg_08",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Báo tình trạng sốc phản vệ dị ứng thực phẩm nghiêm trọng và cần bút tiêm adrenaline hoặc bác sĩ ngay",
    de: "Meine Freundin reagiert extrem allergisch auf Erdnüsse, ihr schwillt gerade der Hals zu und sie braucht sofort einen Notarzt!",
    de_phonetic: "mai-nờ froin-đin rê-a-giat éc-shtrêm a-lea-gísh auf eát-nứt-sờ, ia shvílt gờ-ra-đờ đea hals tsu un zi braukht zô-foát ai-nần nốt-át-st!",
    de_register: {
      du: "Sie reagiert extrem allergisch auf Erdnüsse, ihr schwillt der Hals zu und sie braucht sofort einen Notarzt!",
      sie: "Meine Freundin reagiert extrem allergisch auf Erdnüsse, ihr schwillt gerade der Hals zu und sie braucht sofort einen Notarzt!"
    },
    en: "My friend has a severe peanut allergy; her throat is swelling shut right now and she needs an emergency doctor immediately!",
    vi: "Bạn tôi bị dị ứng nặng với đậu phộng, cổ họng cô ấy đang sưng nghẹt lại và cần bác sĩ cấp cứu ngay lập tức!",
    reply: {
      de: "Hat sie einen Adrenalin-Pen in ihrer Tasche? Wenn ja, setzen Sie ihn sofort außen am Oberschenkel ein!",
      en: "Does she have an adrenaline auto-injector in her bag? If so, administer it immediately into her outer thigh!",
      vi: "Cô ấy có mang theo bút tiêm Adrenalin trong túi không? Nếu có, hãy tiêm ngay vào mặt ngoài đùi của cô ấy!"
    },
    tip: "Sốc phản vệ (anaphylaktischer Schock / allergischer Schock) là tình trạng nguy kịch cần gọi 112 ngay lập tức. Cụm từ 'der Hals schwillt zu' (cổ họng sưng nghẹt lại) là tín hiệu khẩn cấp tối đa với nhân viên y tế."
  },
  {
    id: "t4_emg_09",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Va chạm xe nhẹ: hỏi thăm xem có ai bị thương không và đề nghị trao đổi thông tin bảo hiểm",
    de: "Gott sei Dank ist niemand verletzt und es ist nur ein Blechschaden. Lassen Sie uns kurz unsere Versicherungsdaten austauschen.",
    de_phonetic: "gốt zai đanc ist ni-man fea-lét-st un es ist nua ain blếch-sha-đần. lát-sần zi uns kuats un-zờ-rờ fea-zí-khờ-rungs-đa-tần aus-tau-shần.",
    de_register: {
      du: "Zum Glück ist niemand verletzt und es ist nur ein Blechschaden. Lass uns kurz unsere Versicherungsdaten austauschen.",
      sie: "Gott sei Dank ist niemand verletzt und es ist nur ein Blechschaden. Lassen Sie uns kurz unsere Versicherungsdaten austauschen."
    },
    en: "Thank goodness nobody is hurt and it is just minor body damage. Let's quickly exchange our insurance details.",
    vi: "Ơn trời là không ai bị thương và chỉ bị trầy xước vỏ xe nhẹ. Chúng ta hãy trao đổi nhanh thông tin bảo hiểm nhé.",
    reply: {
      de: "Ja, ich bin auch erleichtert. Fahren wir kurz rechts ran, damit wir den Verkehr hier nicht blockieren.",
      en: "Yes, I am relieved too. Let's pull over to the right for a moment so we don't block traffic here.",
      vi: "Vâng, tôi cũng thở phào nhẹ nhõm. Chúng ta tấp gọn vào lề phải một chút để không làm tắc đường nhé."
    },
    tip: "Với va chạm nhẹ chỉ hỏng vỏ xe (Blechschaden) và không có tranh chấp hay xe thuê (Mietwagen/Leasing), bạn không bắt buộc phải gọi cảnh sát mà chỉ cần chụp ảnh hiện trường và trao đổi thông tin bảo hiểm (Kfz-Haftpflichtversicherung)."
  },
  {
    id: "t4_emg_10",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Đề nghị chụp ảnh hiện trường và cùng điền vào biên bản tai nạn châu Âu",
    de: "Ich mache kurz ein paar Fotos von den Schäden und dem Kennzeichen, und danach füllen wir gemeinsam den Europäischen Unfallbericht aus.",
    de_phonetic: "ích ma-khờ kuats ain pa fô-tôs fon đên shê-đần un đêm ken-tsai-khần, un đa-nákh fứ-lần via gờ-main-zam đên oi-rô-pê-i-shần un-fal-bờ-ríkht aus.",
    de_register: {
      du: "Ich mache kurz Fotos von den Schäden und dem Kennzeichen, und danach füllen wir zusammen den Unfallbericht aus.",
      sie: "Ich mache kurz ein paar Fotos von den Schäden und dem Kennzeichen, und danach füllen wir gemeinsam den Europäischen Unfallbericht aus."
    },
    en: "I will quickly take a few photos of the damage and the license plate, and then we can fill out the European Accident Statement together.",
    vi: "Tôi sẽ chụp nhanh vài tấm ảnh vết hỏng và biển số xe, sau đó chúng ta cùng điền vào Biên bản tai nạn châu Âu nhé.",
    reply: {
      de: "Gute Idee, ich habe sogar ein Blanko-Formular im Handschuhfach liegen.",
      en: "Good idea, I actually have a blank form in my glove compartment.",
      vi: "Ý hay đấy, tôi có để sẵn một mẫu biên bản trống ngay trong ngăn để đồ phía trước xe."
    },
    tip: "Mẫu 'Europäischer Unfallbericht' nên luôn được để sẵn trong ngăn chứa đồ (Handschuhfach). Lưu ý: Chỉ ký xác nhận diễn biến thực tế (Unfallhergang), tuyệt đối không tự ý ký văn bản nhận toàn bộ lỗi (Schuldanerkenntnis) tại hiện trường vì có thể ảnh hưởng đến bảo hiểm."
  },
  {
    id: "t4_emg_11",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Nhắc mọi người mặc áo phản quang, đặt biển tam giác cảnh báo và đứng sau rào chắn trên đường cao tốc",
    de: "Zieht sofort eure Warnwesten an und stellt euch hinter die Leitplanke, während ich das Warndreieck aufstelle!",
    de_phonetic: "tsít zô-foát oi-rờ van-vés-tần an un shtélt oikh hin-tờ đi lait-plan-kờ, ve-rần ích đas van-đrai-éc auf-shté-lờ!",
    de_register: {
      du: "Zieh sofort deine Warnweste an und stell dich hinter die Leitplanke, während ich das Warndreieck aufstelle!",
      sie: "Ziehen Sie sofort Ihre Warnwesten an und stellen Sie sich hinter die Leitplanke, während ich das Warndreieck aufstelle!"
    },
    en: "Put on your high-visibility vests immediately and stand behind the guardrail while I set up the warning triangle!",
    vi: "Mọi người mặc ngay áo phản quang vào và đứng ra sau rào hộ lan đi, trong lúc tôi đi đặt biển tam giác cảnh báo!",
    reply: {
      de: "Alles klar, pass bitte extrem auf den fließenden Verkehr auf, wenn du zurückläufst!",
      en: "All right, please be extremely careful of the moving traffic when you walk back!",
      vi: "Rõ rồi, lúc đi bộ ngược lại bạn nhớ hết sức cẩn thận dòng xe đang chạy nhé!"
    },
    tip: "Khi hỏng xe trên cao tốc (Autobahn): Bật đèn cảnh báo nguy hiểm (Warnblinkanlage), mặc áo phản quang (Warnweste), đặt biển tam giác (Warndreieck) cách xe ít nhất 150–200m trên cao tốc (100m đường ngoài đô thị, 50m trong phố), và mọi người phải đứng sau rào chắn (hinter der Leitplanke)."
  },
  {
    id: "t4_emg_12",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi cứu hộ giao thông (ADAC Pannenhilfe) khi xe bị chết máy giữa đường",
    de: "Hallo, mein Auto springt nicht mehr an und ich stehe mit einer Panne auf der Bundesstraße kurz vor der Ausfahrt Süd.",
    de_phonetic: "ha-lô, mai-nờ au-tô shpringt níkht mea an un ích shtê-ờ mít ai-nờ pa-nờ auf đea bun-đờs-shtra-sờ kuats foa đea aus-fát zứt.",
    de_register: {
      du: "Mein Auto springt nicht mehr an und ich stehe mit einer Panne kurz vor der Ausfahrt Süd.",
      sie: "Hallo, mein Auto springt nicht mehr an und ich stehe mit einer Panne auf der Bundesstraße kurz vor der Ausfahrt Süd."
    },
    en: "Hello, my car won't start anymore and I am broken down on the federal highway just before the South exit.",
    vi: "Xin chào, xe ô tô của tôi không đề nổ được nữa và tôi đang bị hỏng xe trên quốc lộ ngay trước lối ra phía Nam.",
    reply: {
      de: "Ein gelber Engel ist schon auf dem Weg zu Ihnen und wird in etwa dreißig Minuten eintreffen.",
      en: "A roadside assistance patrol is already on the way to you and will arrive in about thirty minutes.",
      vi: "Nhân viên cứu hộ đang trên đường đến chỗ bạn rồi và sẽ tới nơi trong khoảng 30 phút nữa."
    },
    tip: "Ở Đức, nhân viên cứu hộ của câu lạc bộ ô tô ADAC thường được gọi trìu mến là 'Gelbe Engel' (Thiên thần áo vàng) vì xe cứu hộ sơn màu vàng đặc trưng. Động từ 'anspringen' dùng cho máy móc/động cơ khởi động."
  },
  {
    id: "t4_emg_13",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Nhờ tài xế khác câu bình ắc quy giúp vì xe hết điện không nổ máy được",
    de: "Entschuldigung, meine Autobatterie ist leider komplett leer. Hätten Sie kurz Zeit, mir mit einem Überbrückungskabel Starthilfe zu geben?",
    de_phonetic: "ent-shul-đi-gung, mai-nờ au-tô-ba-tờ-ri ist lai-đờ kôm-plét lea. hét-tần zi kuats tsait, mia mít ai-nầm uy-bờ-brức-kungs-ka-bần shtát-hil-fờ tsu gê-bần?",
    de_register: {
      du: "Meine Autobatterie ist leider komplett leer. Hättest du kurz Zeit, mir mit einem Überbrückungskabel Starthilfe zu geben?",
      sie: "Entschuldigung, meine Autobatterie ist leider komplett leer. Hätten Sie kurz Zeit, mir mit einem Überbrückungskabel Starthilfe zu geben?"
    },
    en: "Excuse me, my car battery is completely flat. Would you have a moment to give me a jump-start with jumper cables?",
    vi: "Xin lỗi, ắc quy xe tôi không may bị cạn sạch điện rồi. Bạn có thể bớt chút thời gian dùng dây câu bình kích nổ giúp tôi được không?",
    reply: {
      de: "Klar, kein Problem! Ich fahre meinen Wagen direkt vor Ihre Motorhaube, Kabel habe ich hinten drin.",
      en: "Sure, no problem! I will pull my car right up in front of your hood; I have cables in the back.",
      vi: "Được chứ, không vấn đề gì! Để tôi đánh xe đỗ sát ngay trước nắp ca-pô của bạn, tôi có sẵn dây câu ở cốp sau."
    },
    tip: "Từ vựng cực kỳ hữu ích khi xe hết bình: 'die Autobatterie ist leer' (hết bình), 'Starthilfe geben' (câu bình kích nổ), và 'das Überbrückungskabel / Starthilfekabel' (dây câu bình)."
  },
  {
    id: "t4_emg_14",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Xe đang đỗ bị người khác quệt vào rồi bỏ chạy (Fahrerflucht), xin số liên lạc của nhân chứng",
    de: "Jemand hat mein geparktes Auto angefahren und einfach Fahrerflucht begangen. Haben Sie den Vorfall gesehen und dürften wir Ihre Kontaktdaten als Zeuge notieren?",
    de_phonetic: "yê-man hát mai-nờ gờ-pác-tờs au-tô an-gờ-fa-rần un ai-fákh fa-rờ-flúkht bờ-gang-ần. ha-bần zi đên foa-fal gờ-zê-ần un đước-tần via i-rờ kôn-tác-đa-tần als tsoi-gờ nô-ti-rần?",
    de_register: {
      du: "Jemand hat mein geparktes Auto angefahren und Fahrerflucht begangen. Hast du das gesehen und gibst du mir deine Nummer als Zeuge?",
      sie: "Jemand hat mein geparktes Auto angefahren und einfach Fahrerflucht begangen. Haben Sie den Vorfall gesehen und dürften wir Ihre Kontaktdaten als Zeuge notieren?"
    },
    en: "Someone hit my parked car and just drove off. Did you see the incident, and could we write down your contact details as a witness?",
    vi: "Có ai đó đã đâm vào xe đang đỗ của tôi rồi bỏ chạy luôn. Bạn có nhìn thấy sự việc không và cho phép chúng tôi xin thông tin liên lạc của bạn làm nhân chứng nhé?",
    reply: {
      de: "Ja, es war ein weißer Lieferwagen. Ich habe mir sogar das Kennzeichen auf dem Handy aufgeschrieben.",
      en: "Yes, it was a white delivery van. I even wrote down the license plate on my phone.",
      vi: "Có, đó là một chiếc xe tải nhỏ màu trắng. Tôi thậm chí còn ghi lại cả biển số xe vào điện thoại đây."
    },
    tip: "Ở Đức, 'Fahrerflucht' (tên luật là Unerlaubtes Entfernen vom Unfallort - § 142 StGB) là tội hình sự nghiêm trọng. Kể cả khi chỉ quệt xước gương xe đang đỗ, việc để lại mảnh giấy kẹp gạt mưa rồi bỏ đi vẫn bị coi là Fahrerflucht nếu không đợi chủ xe hoặc báo cảnh sát (110)."
  },
  {
    id: "t4_emg_15",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Gọi 110 (Cảnh sát) để trình báo nhà bị cạy cửa đột nhập",
    de: "Ich komme gerade nach Hause und unsere Wohnungstür steht aufgebrochen offen. Ich glaube, bei uns wurde eingebrochen!",
    de_phonetic: "ích kô-mờ gờ-ra-đờ nákh hau-zờ un un-zờ-rờ vô-nungs-tuya shtêt auf-gờ-brố-khần óp-fần. ích glau-bờ, bai uns vua-đờ ain-gờ-brố-khần!",
    de_register: {
      du: "Unsere Wohnungstür steht aufgebrochen offen. Ich glaube, bei uns wurde eingebrochen!",
      sie: "Ich komme gerade nach Hause und unsere Wohnungstür steht aufgebrochen offen. Ich glaube, bei uns wurde eingebrochen!"
    },
    en: "I just got home and our apartment door has been forced open. I think our place has been broken into!",
    vi: "Tôi vừa về đến nhà thì thấy cửa căn hộ bị cạy tung mở toang. Tôi nghĩ nhà chúng tôi đã bị trộm đột nhập!",
    reply: {
      de: "Gehen Sie auf keinen Fall allein in die Wohnung! Warten Sie draußen auf der Straße, ein Streifenwagen ist sofort bei Ihnen.",
      en: "Do not go into the apartment alone under any circumstances! Wait outside on the street; a patrol car will be with you right away.",
      vi: "Tuyệt đối không được tự ý bước vào căn hộ một mình! Hãy đợi bên ngoài đường, xe tuần tra cảnh sát sẽ đến chỗ bạn ngay lập tức."
    },
    tip: "Số 110 là số khẩn cấp của Cảnh sát Đức (Polizei). Khi phát hiện nhà bị đột nhập (Einbruch), tuyệt đối không bước vào nhà hay chạm vào đồ đạc để đảm bảo an toàn và giữ nguyên dấu vết hiện trường (Spurensicherung)."
  },
  {
    id: "t4_emg_16",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Đến đồn cảnh sát trình báo mất trộm xe đạp kèm số khung xe để làm thủ tục bảo hiểm",
    de: "Ich möchte bitte eine Diebstahlsanzeige erstatten, weil mein angeschlossenes Fahrrad heute Nacht vor dem Bahnhof gestohlen wurde.",
    de_phonetic: "ích mớkh-tờ bít-tờ ai-nờ đíp-shtals-an-tsai-gờ ea-shtát-tần, vai mai-nờ an-gờ-shlốt-sờ-nờs fa-rát hoi-tờ nákht foa đêm ban-hốp gờ-shtô-lần vua-đờ.",
    de_register: {
      du: "Ich muss eine Diebstahlsanzeige erstatten, weil mein angeschlossenes Fahrrad heute Nacht am Bahnhof gestohlen wurde.",
      sie: "Ich möchte bitte eine Diebstahlsanzeige erstatten, weil mein angeschlossenes Fahrrad heute Nacht vor dem Bahnhof gestohlen wurde."
    },
    en: "I would like to file a theft report, please, because my locked bicycle was stolen in front of the train station last night.",
    vi: "Tôi muốn trình báo mất cắp tài sản, vì chiếc xe đạp đã khóa của tôi bị lấy trộm trước cửa nhà ga vào đêm qua.",
    reply: {
      de: "Haben Sie den Kaufbeleg und die Rahmennummer des Fahrrads dabei? Das brauchen Sie auch für Ihre Versicherung.",
      en: "Do you have the purchase receipt and the frame number of the bicycle with you? You will need that for your insurance too.",
      vi: "Bạn có mang theo hóa đơn mua xe và số khung xe đạp không? Bạn cũng sẽ cần thông tin đó để nộp cho bên bảo hiểm đấy."
    },
    tip: "Ở hầu hết các bang tại Đức, bạn cũng có thể trình báo mất cắp xe đạp trực tuyến qua cổng 'Onlinewache' của cảnh sát bang để lấy biên bản xác nhận (Aktenzeichen / Anzeigenbestätigung) gửi cho bảo hiểm Hausratversicherung."
  },
  {
    id: "t4_emg_17",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Trình báo bị móc túi mất ví tiền và giấy tờ tùy thân trên tàu điện",
    de: "Mir wurde vorhin in der vollen U-Bahn das Portemonnaie samt Personalausweis und Bankkarten aus der Jackentasche gestohlen.",
    de_phonetic: "mia vua-đờ foa-hin in đea fô-lần u-ban đas poát-mô-nê zamt pea-zô-nal-aus-vais un banc-các-tần aus đea yác-kần-ta-shờ gờ-shtô-lần.",
    de_register: {
      du: "Mir wurde vorhin in der U-Bahn das Portemonnaie samt Ausweis und Bankkarten aus der Tasche gestohlen.",
      sie: "Mir wurde vorhin in der vollen U-Bahn das Portemonnaie samt Personalausweis und Bankkarten aus der Jackentasche gestohlen."
    },
    en: "My wallet, along with my ID card and bank cards, was stolen from my jacket pocket on the crowded subway earlier.",
    vi: "Lúc nãy trên tàu điện ngầm đông người, tôi đã bị móc mất chiếc ví cùng căn cước và các thẻ ngân hàng trong túi áo khoác.",
    reply: {
      de: "Haben Sie Ihre Bankkarten schon sperren lassen? Wir nehmen jetzt sofort die Anzeige wegen Taschendiebstahls auf.",
      en: "Have you already had your bank cards blocked? We will file the pickpocketing report right away.",
      vi: "Bạn đã gọi khóa các thẻ ngân hàng chưa? Bây giờ chúng tôi sẽ lập biên bản trình báo vụ móc túi ngay."
    },
    tip: "Khi bị mất cắp giấy tờ tùy thân (Ausweis / Aufenthaltstitel), việc lập biên bản tại đồn cảnh sát (Diebstahlsanzeige) là bắt buộc để tránh bị kẻ gian lợi dụng danh tính (Identitätsdiebstahl) và để xin cấp lại thẻ mới tại Bürgeramt/Ausländerbehörde."
  },
  {
    id: "t4_emg_18",
    level: "B2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Báo mất hộ chiếu hoặc thẻ cư trú và xin giấy xác nhận báo mất để làm lại giấy tờ",
    de: "Ich habe leider meinen Reisepass und meinen elektronischen Aufenthaltstitel verloren und benötige eine polizeiliche Verlustanzeige für die Botschaft.",
    de_phonetic: "ích ha-bờ lai-đờ mai-nần rai-zờ-pas un mai-nần ê-léc-trô-ni-shần auf-ent-halts-ti-tần fea-loa-rần un bờ-nơ-ti-gờ ai-nờ pô-li-tsai-li-khờ fea-lúst-an-tsai-gờ fuya đi bốt-sháft.",
    de_register: {
      du: "Ich habe meinen Reisepass und meinen Aufenthaltstitel verloren und brauche eine Verlustanzeige für die Botschaft.",
      sie: "Ich habe leider meinen Reisepass und meinen elektronischen Aufenthaltstitel verloren und benötige eine polizeiliche Verlustanzeige für die Botschaft."
    },
    en: "I unfortunately lost my passport and my electronic residence permit and need a police loss report for the embassy.",
    vi: "Không may tôi đã làm mất hộ chiếu và thẻ cư trú điện tử, nên cần một giấy xác nhận báo mất của cảnh sát để nộp cho Đại sứ quán.",
    reply: {
      de: "Kein Problem, ich stelle Ihnen die Bescheinigung direkt aus. Denken Sie daran, auch die Online-Ausweisfunktion sperren zu lassen.",
      en: "No problem, I will issue the certificate for you right away. Remember to also have the online ID function deactivated.",
      vi: "Không vấn đề gì, tôi sẽ cấp giấy xác nhận cho bạn ngay. Bạn nhớ yêu cầu khóa cả chức năng định danh trực tuyến của thẻ cư trú nhé."
    },
    tip: "Thẻ cư trú điện tử (eAT) và căn cước Đức đều có chức năng định danh online (eID). Khi mất thẻ, bạn cũng có thể gọi số 116 116 và đọc mã Sperrkennwort (trong thư PIN-Brief lúc nhận thẻ) để khóa ngay chức năng eID."
  },
  {
    id: "t4_emg_19",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi tổng đài khóa thẻ khẩn cấp (116 116) để khóa ngay thẻ ngân hàng và thẻ tín dụng bị mất",
    de: "Guten Tag, ich möchte bitte sofort meine Girocard und meine Kreditkarte sperren lassen, da ich meine Geldbörse verloren habe.",
    de_phonetic: "gu-tần tác, ích mớkh-tờ bít-tờ zô-foát mai-nờ gi-rô-cát un mai-nờ krê-đít-cát-tờ shpe-rần lát-sần, đa ích mai-nờ gelt-bơ-zờ fea-loa-rần ha-bờ.",
    de_register: {
      du: "Ich muss sofort meine Girocard und meine Kreditkarte sperren lassen, weil ich meine Geldbörse verloren habe.",
      sie: "Guten Tag, ich möchte bitte sofort meine Girocard und meine Kreditkarte sperren lassen, da ich meine Geldbörse verloren habe."
    },
    en: "Good day, I would like to have my debit card and credit card blocked immediately, as I have lost my wallet.",
    vi: "Xin chào, tôi muốn yêu cầu khóa ngay lập tức thẻ thanh toán nội địa và thẻ tín dụng của mình vì tôi vừa làm mất ví.",
    reply: {
      de: "Geben Sie mir bitte Ihre IBAN oder Ihre Kontonummer durch, dann sperre ich beide Karten augenblicklich.",
      en: "Please give me your IBAN or your account number, and I will block both cards immediately.",
      vi: "Xin bạn đọc giúp mã IBAN hoặc số tài khoản, tôi sẽ khóa cả hai thẻ ngay tức khắc."
    },
    tip: "Số 116 116 (Sperr-Notruf) hoạt động 24/7 và miễn phí khi gọi từ trong nước Đức (từ nước ngoài gọi +49 116 116 hoặc +49 30 4050 4050). Bạn nên lưu sẵn mã IBAN ở nơi an toàn để đọc ngay khi cần khóa thẻ."
  },
  {
    id: "t4_emg_20",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Phát hiện giao dịch trừ tiền lạ bất thường trong tài khoản và yêu cầu ngân hàng hoàn tiền",
    de: "Auf meinem Kontoauszug ist eine unberechtigte Abbuchung über dreihundert Euro, die ich definitiv nicht autorisiert habe.",
    de_phonetic: "auf mai-nầm kôn-tô-aus-tsúc ist ai-nờ un-bờ-rếch-tích-tờ áp-bu-khung uy-bờ đrai-hun-đợt oi-rô, đi ích đê-fi-ni-típ níkht au-tô-ri-ziat ha-bờ.",
    de_register: {
      du: "Auf meinem Konto ist eine unberechtigte Abbuchung über dreihundert Euro, die ich definitiv nicht freigegeben habe.",
      sie: "Auf meinem Kontoauszug ist eine unberechtigte Abbuchung über dreihundert Euro, die ich definitiv nicht autorisiert habe."
    },
    en: "There is an unauthorized debit of three hundred euros on my bank statement that I definitely did not approve.",
    vi: "Trên sao kê tài khoản của tôi có một khoản trừ tiền trái phép trị giá 300 Euro mà tôi chắc chắn chưa từng xác nhận.",
    reply: {
      de: "Wenn es sich um eine Lastschrift handelt, können Sie den Betrag innerhalb von acht Wochen direkt im Online-Banking zurückbuchen.",
      en: "If it is a direct debit, you can reverse the charge directly in online banking within eight weeks.",
      vi: "Nếu đó là giao dịch trích nợ tự động (Lastschrift), bạn có thể yêu cầu hoàn tiền trực tiếp trên ngân hàng trực tuyến trong vòng 8 tuần."
    },
    tip: "Với giao dịch SEPA-Lastschrift (trích nợ tự động), luật ngân hàng châu Âu cho phép bạn bấm 'Lastschrift zurückgeben' (hoàn tiền) trong vòng 8 tuần không cần lý do, hoặc tới 13 tháng nếu giao dịch không có sự ủy quyền hợp lệ (unberechtigte Abbuchung)."
  },
  {
    id: "t4_emg_21",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bỏ quên điện thoại trên xe taxi vừa xuống và gọi ngay cho tổng đài hãng xe",
    de: "Ich bin vor zehn Minuten am Hauptbahnhof aus einem Ihrer Taxis ausgestiegen und habe leider mein Handy auf dem Rücksitz liegen lassen.",
    de_phonetic: "ích bin foa tsên mi-nu-tần am haupt-ban-hốp aus ai-nầm i-rờ tác-sis aus-gờ-shti-gần un ha-bờ lai-đờ mai-nờ hen-đi auf đêm rức-zít-s li-gần lát-sần.",
    de_register: {
      du: "Ich bin vor zehn Minuten am Hauptbahnhof aus dem Taxi gestiegen und habe mein Handy auf dem Rücksitz liegen lassen.",
      sie: "Ich bin vor zehn Minuten am Hauptbahnhof aus einem Ihrer Taxis ausgestiegen und habe leider mein Handy auf dem Rücksitz liegen lassen."
    },
    en: "I got out of one of your taxis at the main train station ten minutes ago and unfortunately left my phone on the back seat.",
    vi: "Mười phút trước tôi vừa xuống một chiếc taxi của hãng mình tại ga chính và không may để quên điện thoại ở ghế sau.",
    reply: {
      de: "Haben Sie die Quittung mit der Ordnungsnummer des Taxis? Dann funke ich den Fahrer sofort direkt an.",
      en: "Do you have the receipt with the taxi's fleet number? Then I will radio the driver directly right away.",
      vi: "Bạn có giữ biên lai có ghi mã số xe taxi không? Để tôi gọi bộ đàm trực tiếp cho tài xế ngay lập tức."
    },
    tip: "Khi đi taxi ở Đức, hãy luôn xin biên lai (Quittung). Trên biên lai bắt buộc có 'Ordnungsnummer' (số hiệu taxi gắn ở kính sau xe), giúp tổng đài (Taxizentrale) xác định chính xác tài xế chỉ trong vài giây."
  },
  {
    id: "t4_emg_22",
    level: "B1",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 4,
    context: "Bị lạc con nhỏ trong siêu thị hoặc nhà ga đông đúc và nhờ nhân viên an ninh phát loa tìm giúp",
    de: "Bitte helfen Sie mir, mein fünfjähriger Sohn ist mir gerade im Gedränge weggelaufen! Er trägt eine rote Winterjacke und eine blaue Mütze.",
    de_phonetic: "bít-tờ hel-fần zi mia, mai-nờ fứnf-ye-ri-gờ zôn ist mia gờ-ra-đờ im gờ-đreng-ờ véc-gờ-lau-fần! ea trếct ai-nờ rô-tờ vin-tờ-yác-kờ un ai-nờ blau-ờ mứt-tsờ.",
    de_register: {
      du: "Bitte hilf mir, mein fünfjähriger Sohn ist mir gerade im Gedränge weggelaufen! Er trägt eine rote Jacke und eine blaue Mütze.",
      sie: "Bitte helfen Sie mir, mein fünfjähriger Sohn ist mir gerade im Gedränge weggelaufen! Er trägt eine rote Winterjacke und eine blaue Mütze."
    },
    en: "Please help me, my five-year-old son just wandered off in the crowd! He is wearing a red winter jacket and a blue beanie.",
    vi: "Xin hãy giúp tôi với, cậu con trai 5 tuổi của tôi vừa bị lạc mất giữa đám đông! Cháu mặc áo khoác mùa đông màu đỏ và đội mũ len màu xanh dương.",
    reply: {
      de: "Keine Panik, wir machen sofort eine Durchsage über die Lautsprecher und informieren das Sicherheitspersonal an allen Ausgängen.",
      en: "Don't panic, we will make an announcement over the loudspeakers right away and inform security staff at all exits.",
      vi: "Bạn bình tĩnh nhé, chúng tôi sẽ phát thông báo qua loa ngay lập tức và báo cho nhân viên an ninh ở tất cả các cổng ra vào."
    },
    tip: "Tại các nhà ga lớn ở Đức, lực lượng Cảnh sát Liên bang (Bundespolizei) và nhân viên DB Sicherheit luôn túc trực. Bạn cũng có thể dặn trẻ nhỏ tìm đến quầy 'DB Information' hoặc 'Bahnhofsmission' nếu bị lạc."
  },
  {
    id: "t4_emg_23",
    level: "B2",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 5,
    context: "Báo cáo ngửi thấy mùi khói khét hoặc mùi khí gas nồng nặc ở cầu thang chung cư",
    de: "Im gesamten Treppenhaus riecht es stark nach Gas, und der Rauchmelder in der Nachbarwohnung piept ununterbrochen!",
    de_phonetic: "im gờ-zam-tần trép-pần-haus ríkht es shtác nákh gas, un đea raukh-mel-đờ in đea nákh-ba-vô-nung pípt un-un-tờ-brố-khần!",
    de_register: {
      du: "Im ganzen Treppenhaus riecht es stark nach Gas, und der Rauchmelder nebenan piept ununterbrochen!",
      sie: "Im gesamten Treppenhaus riecht es stark nach Gas, und der Rauchmelder in der Nachbarwohnung piept ununterbrochen!"
    },
    en: "There is a strong smell of gas throughout the entire stairwell, and the smoke detector in the neighbor's apartment is beeping nonstop!",
    vi: "Khắp hành lang cầu thang có mùi khí gas nồng nặc, và chuông báo khói ở căn hộ hàng xóm đang kêu liên hồi không dứt!",
    reply: {
      de: "Betätigen Sie bitte keine Lichtschalter und keine Türklingeln! Verlassen Sie sofort das Gebäude und rufen Sie draußen die Feuerwehr unter 112.",
      en: "Please do not touch any light switches or doorbells! Leave the building immediately and call the fire department at 112 from outside.",
      vi: "Xin tuyệt đối không bật công tắc đèn và không bấm chuông cửa! Hãy rời khỏi tòa nhà ngay lập tức và gọi cứu hỏa số 112 khi đã ra ngoài."
    },
    tip: "Khi ngửi thấy mùi gas (Gasgeruch), tuyệt đối KHÔNG bật/tắt công tắc điện, không bấm chuông cửa và không dùng thang máy vì tia lửa điện nhỏ nhất cũng có thể gây nổ. Hãy mở cửa sổ, gõ cửa báo hàng xóm, chạy ra ngoài rồi mới gọi 112."
  },
  {
    id: "t4_emg_24",
    level: "B1",
    category: "emergencies",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bị kẹt trong thang máy và bấm nút liên lạc khẩn cấp để nói chuyện với trung tâm kỹ thuật",
    de: "Hallo, hören Sie mich? Der Aufzug ist gerade zwischen dem zweiten und dritten Stock steckengeblieben und die Tür geht nicht mehr auf.",
    de_phonetic: "ha-lô, hơ-rần zi míkh? đea auf-tsúc ist gờ-ra-đờ tsví-shần đêm tsvai-tần un đrít-tần shtốc shtéc-kần-gờ-bli-bần un đi tuya gêt níkht mea auf.",
    de_register: {
      du: "Hörst du mich? Der Aufzug ist zwischen dem zweiten und dritten Stock steckengeblieben und die Tür geht nicht auf.",
      sie: "Hallo, hören Sie mich? Der Aufzug ist gerade zwischen dem zweiten und dritten Stock steckengeblieben und die Tür geht nicht mehr auf."
    },
    en: "Hello, can you hear me? The elevator just got stuck between the second and third floors and the door won't open anymore.",
    vi: "Xin chào, bên đó có nghe thấy tôi nói không? Thang máy vừa bị kẹt giữa tầng 2 và tầng 3 và cửa không mở ra được nữa.",
    reply: {
      de: "Ich höre Sie gut. Bitte bleiben Sie ganz ruhig, die Kabine ist sicher belüftet. Ein Techniker ist bereits unterwegs zu Ihnen.",
      en: "I hear you clearly. Please stay completely calm; the cabin is safely ventilated. A technician is already on the way to you.",
      vi: "Tôi nghe rõ bạn rồi. Xin hãy cứ bình tĩnh, buồng thang vẫn được thông gió an toàn. Kỹ thuật viên đang trên đường đến chỗ bạn rồi."
    },
    tip: "Mọi thang máy ở Đức đều bắt buộc có nút chuông vàng (Notrufknopf) kết nối 24/7 với trung tâm cứu hộ (Notrufzentrale). Hãy giữ nút này khoảng 3–5 giây để kích hoạt cuộc gọi đàm thoại hai chiều."
  },
  {
    id: "t4_emg_25",
    level: "A2",
    category: "emergencies",
    patternType: "frame",
    frequencyScore: 5,
    context: "Cảnh báo khẩn cấp cho người đi đường khi sắp bước vào làn xe đạp hoặc vấp bậc thềm",
    de: "Vorsicht, bleiben Sie kurz stehen! Da kommt ein E-Scooter mit hohem Tempo auf dem Radweg!",
    de_phonetic: "foa-zíkht, blai-bần zi kuats shtê-ần! đa kômt ain i-sku-tờ mít hô-ầm tem-pô auf đêm rát-vếc!",
    de_register: {
      du: "Vorsicht, bleib kurz stehen! Da kommt ein E-Scooter mit hohem Tempo auf dem Radweg!",
      sie: "Vorsicht, bleiben Sie kurz stehen! Da kommt ein E-Scooter mit hohem Tempo auf dem Radweg!"
    },
    en: "Watch out, stop for a second! There is an e-scooter coming at high speed on the bike lane!",
    vi: "Cẩn thận, dừng lại một chút đã! Có chiếc xe trượt điện đang lao tới rất nhanh trên làn xe đạp kìa!",
    reply: {
      de: "Oh, tausend Dank! Den habe ich überhaupt nicht gehört, das war wirklich knapp.",
      en: "Oh, thank you so much! I didn't hear it at all; that was really close.",
      vi: "Ôi, cảm ơn bạn nhiều lắm! Tôi hoàn toàn không nghe thấy tiếng xe tới, suýt nữa thì nguy hiểm thật."
    },
    tip: "Ở Đức, làn đường dành cho xe đạp (Radweg) thường nằm ngay sát vỉa hè (thường lát gạch đỏ hoặc có vạch sơn trắng). Bước nhầm sang Radweg mà không ngoái nhìn qua vai (Schulterblick) rất dễ gây va chạm."
  }
];
