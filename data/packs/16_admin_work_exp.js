module.exports = [
  // =========================================================================
  // ADMIN EXPANSION (15 items -> Total 25 in 'admin')
  // =========================================================================
  {
    id: "adm_e01",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi nhân viên bưu điện (Deutsche Post / DHL) cách gửi thư bảo đảm (Einschreiben) cho cơ quan hành chính hoặc hủy hợp đồng",
    de: "Ich möchte diesen Brief bitte per Einschreiben verschicken, damit ich einen Nachweis habe.",
    de_phonetic: "Ích mớch-tơ đi-zần Bríp bít-tơ pe Ain-shrai-bần phe-shí-cần, đa-mít ích ai-nần Nákh-vai-s ha-bơ.",
    de_register: {
      du: "Ich würde den Brief gern per Einschreiben schicken.",
      sie: "Ich möchte diesen Brief bitte per Einschreiben verschicken, damit ich einen Nachweis habe."
    },
    en: "I'd like to send this letter by registered mail, please, so I have proof of delivery.",
    vi: "Tôi muốn gửi lá thư này theo dạng thư bảo đảm để có biên nhận đối chiếu ạ.",
    reply: {
      de: "Gern! Reicht Ihnen ein Einwurf-Einschreiben, oder brauchen Sie eine Unterschrift vom Empfänger?",
      en: "Sure! Is drop-off tracking enough, or do you need the recipient's signature?",
      vi: "Vâng ạ! Anh/chị chỉ cần xác nhận đã bỏ vào hòm thư hay cần chữ ký trực tiếp của người nhận ạ?"
    },
    tip: "Ở Đức, khi gửi đơn hủy hợp đồng (Kündigung) hoặc giấy tờ cho sở ngoại kiều, luôn gửi bằng 'Einwurf-Einschreiben' (thư bảo đảm ghi nhận lúc bưu tá bỏ vào hòm thư) để có mã tracking làm bằng chứng pháp lý!"
  },
  {
    id: "adm_e02",
    level: "B1",
    category: "admin",
    patternType: "frame",
    frequencyScore: 5,
    context: "Khung câu hỏi tình trạng xử lý hồ sơ (Bearbeitungsstand) tại Sở Ngoại kiều (Ausländerbehörde), Sở Thuế hoặc Ngân hàng",
    de: "Ich wollte mich einmal höflich nach dem aktuellen Bearbeitungsstand meines Antrags erkundigen.",
    de_phonetic: "Ích vôn-tơ mích ai-n-man hớp-lích nakh đem ác-tu-e-lần Bơ-a-bai-tung-s-stant mai-nớt An-trác-s e-cun-đi-gần.",
    de_register: {
      du: "Kannst du mir kurz sagen, wie der aktuelle Stand bei meinem Antrag ist?",
      sie: "Ich wollte mich einmal höflich nach dem aktuellen Bearbeitungsstand meines Antrags erkundigen."
    },
    en: "I wanted to politely inquire about the current processing status of my application.",
    vi: "Tôi muốn hỏi thăm một cách lịch sự về tiến độ xử lý hồ sơ hiện tại của tôi ạ.",
    reply: {
      de: "Geben Sie mir bitte kurz Ihr Aktenzeichen, dann schaue ich sofort im System nach.",
      en: "Please give me your reference number briefly, and I'll check the system right away.",
      vi: "Phiền anh/chị đọc giúp tôi mã hồ sơ để tôi tra cứu ngay trên hệ thống nhé."
    },
    tip: "Khung câu mở: Thay 'meines Antrags' bằng 'meiner Steuererklärung' (khai thuế) hoặc 'meiner Vertragsänderung' (thay đổi hợp đồng). Từ 'Das Aktenzeichen' = mã số hồ sơ."
  },
  {
    id: "adm_e03",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Khi đi xem nhà thuê (Wohnungsbesichtigung) và hỏi chủ nhà xem tiền thuê ấm (Warmmiete) đã bao gồm những chi phí gì",
    de: "Kurze Frage zur Warmmiete: Sind die Heizkosten da schon komplett drin, oder kommt Strom und Gas noch extra?",
    de_phonetic: "Cuất-sơ Phra-gơ tsua Vam-mi-tơ: Zin đi Hai-ts-cót-stần đa shôn com-plết đrin, ô-đờ com-t Strôm un Gát nókh éc-stra?",
    de_register: {
      du: "Sind in der Warmmiete die Heizkosten schon drin, oder kommt Strom noch extra?",
      sie: "Sind in der angegebenen Warmmiete die Heizkosten bereits enthalten, oder kommen Strom und Gas noch separat hinzu?"
    },
    en: "Quick question about the total rent: is heating fully included in that, or are electricity and gas extra?",
    vi: "Cho tôi hỏi nhanh về giá thuê trọn gói: Chi phí sưởi đã nằm trọn trong đó chưa, hay tiền điện và khí đốt tính riêng ạ?",
    reply: {
      de: "Heizung und Wasser sind in den Nebenkosten enthalten, nur Strom und Internet melden Sie selbst an.",
      en: "Heating and water are included in the utilities—you just register electricity and internet yourself.",
      vi: "Tiền sưởi và nước đã nằm trong phí dịch vụ rồi, chỉ có điện và mạng internet là bạn tự đăng ký riêng thôi."
    },
    tip: "Ở Đức: 'Kaltmiete' (tiền thuê nhà trần) + 'Nebenkosten' (phí dịch vụ/sưởi/nước/rác) = 'Warmmiete'. Tiền điện (Strom), Internet và phí truyền hình (Rundfunkbeitrag/GEZ) hầu như luôn phải tự đăng ký riêng!"
  },
  {
    id: "adm_e04",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Khi bàn giao căn hộ (Wohnungsübergabe) lúc dọn vào hoặc dọn ra, đề nghị ghi vết xước có sẵn vào biên bản để không mất tiền cọc (Kaution)",
    de: "Hier im Parkett ist schon ein kleiner Kratzer — können wir das bitte direkt so im Übergabeprotokoll festhalten?",
    de_phonetic: "Hia im Pa-kết ít shôn ain clai-nờ Crát-sờ — côn-nần via đát bít-tơ đi-rếch zô im Uy-bờ-ga-bơ-prô-tô-côn phết-han-tần?",
    de_register: {
      du: "Lass uns den Kratzer hier im Parkett bitte kurz im Übergabeprotokoll notieren.",
      sie: "Hier im Parkett ist bereits ein kleiner Kratzer — könnten wir das bitte direkt im Übergabeprotokoll festhalten?"
    },
    en: "There's already a small scratch in the parquet floor here—could we please note that down directly in the handover protocol?",
    vi: "Trên sàn gỗ chỗ này có sẵn một vết xước nhỏ rồi — mình ghi nhận luôn chi tiết này vào biên bản bàn giao nhà nhé ạ?",
    reply: {
      de: "Selbstverständlich, ich trage das hier unter ‚Vorhandene Gebrauchsspuren‘ ein und mache ein Foto.",
      en: "Of course, I'll write that down under 'existing wear and tear' and take a photo.",
      vi: "Tất nhiên rồi, tôi sẽ ghi vào mục 'Dấu vết sử dụng có sẵn' và chụp lại một tấm ảnh làm đối chiếu."
    },
    tip: "Bí quyết bảo vệ 100% tiền cọc thuê nhà (Kaution - thường bằng 3 tháng Kaltmiete): Luôn ghi mọi vết xước vào 'Übergabeprotokoll' ngay ngày nhận chìa khóa!"
  },
  {
    id: "adm_e05",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Tại phòng khám nha khoa (Zahnarzt) khi bị đau răng cấp tính hoặc bung miếng trám răng",
    de: "Mir ist gestern Abend eine Füllung herausgefallen, und jetzt tut der Zahn beim Trinken höllisch weh.",
    de_phonetic: "Mia ít ghét-stờn A-bần ai-nơ Phuy-lung he-raus-gơ-pha-lần, un yết tút đe Tsan baim Trinh-cần hơ-lích vê.",
    de_register: {
      du: "Mir ist eine Füllung rausgefallen und der Zahn tut echt höllisch weh.",
      sie: "Mir ist gestern Abend leider eine Füllung herausgefallen, und seitdem habe ich starke Zahnschmerzen."
    },
    en: "A filling fell out last night, and now my tooth hurts like crazy whenever I drink anything.",
    vi: "Tối qua tôi bị bung mất một miếng trám răng, giờ cứ uống nước vào là răng buốt nhức kinh khủng.",
    reply: {
      de: "Setzen Sie sich bitte kurz ins Wartezimmer, wir nehmen Sie gleich als Schmerzpatient zwischendurch dran.",
      en: "Please have a seat in the waiting room briefly—we'll squeeze you right in as an emergency pain patient.",
      vi: "Mời bạn ngồi đợi một lát ở phòng chờ nhé, bên mình sẽ ưu tiên xếp khám xen kẽ ngay cho bạn theo diện đau cấp."
    },
    tip: "Từ khóa vàng khi đi khám bác sĩ ở Đức mà không có lịch hẹn trước: 'Ich bin Schmerzpatient / Ich habe akute Schmerzen' (Bệnh nhân đau cấp tính) — theo luật, phòng khám không được phép từ chối!"
  },
  {
    id: "adm_e06",
    level: "B2",
    category: "admin",
    patternType: "frame",
    frequencyScore: 5,
    context: "Khung câu hủy hợp đồng đúng hạn (fristgerecht kündigen) với phòng Gym, nhà mạng Internet hoặc bảo hiểm",
    de: "Ich möchte meinen Vertrag bitte fristgerecht zum nächstmöglichen Zeitpunkt kündigen und bitte um eine kurze Bestätigung.",
    de_phonetic: "Ích mớch-tơ mai-nần Phe-trác bít-tơ phrít-s-gơ-rếch tsum nếch-st-mớc-lích-ần Tsait-pung-t cuyn-đi-gần un bít-tơ um ai-nơ cuất-sơ Bơ-stê-ti-gung.",
    de_register: {
      du: "Ich würde meinen Vertrag gern zum nächstmöglichen Zeitpunkt kündigen.",
      sie: "Ich möchte meinen Vertrag bitte fristgerecht zum nächstmöglichen Zeitpunkt kündigen und bitte um eine schriftliche Bestätigung."
    },
    en: "I would like to cancel my contract in due time at the earliest possible date and kindly ask for a brief confirmation.",
    vi: "Tôi muốn hủy hợp đồng đúng hạn vào thời điểm sớm nhất có thể và đề nghị gửi giúp tôi xác nhận hủy hợp đồng.",
    reply: {
      de: "Wir haben Ihre Kündigung im System vermerkt. Die Kündigungsbestätigung erhalten Sie heute noch per E-Mail.",
      en: "We've recorded your cancellation in the system. You'll receive the confirmation email later today.",
      vi: "Chúng tôi đã ghi nhận yêu cầu hủy hợp đồng trên hệ thống. Email xác nhận sẽ được gửi tới quý khách ngay trong hôm nay."
    },
    tip: "Cụm từ pháp lý bất hủ ở Đức: 'fristgerecht zum nächstmöglichen Zeitpunkt' (đúng thời hạn báo trước vào mốc sớm nhất có thể). Luôn kèm câu 'Ich bitte um eine Kündigungsbestätigung'!"
  },
  {
    id: "adm_e07",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi thẻ ngân hàng (Girocard / Debitkarte) bị máy ATM nuốt hoặc bị mất và cần khóa thẻ khẩn cấp",
    de: "Der Geldautomat hat gerade meine Karte eingezogen — können Sie die Karte bitte sicherheitshalber sofort sperren?",
    de_phonetic: "Đe Ghelt-au-tô-mát hát gơ-ra-đơ mai-nơ Ca-tơ ai-n-gơ-tsô-gần — côn-nần Zi đi Ca-tơ bít-tơ zí-khờ-hait-s-han-bờ zô-phoọt spe-rần?",
    de_register: {
      du: "Der Automat hat meine Karte geschluckt — kannst du mir sagen, wie ich sie sofort sperre?",
      sie: "Der Geldautomat hat soeben meine Karte eingezogen. Können Sie die Karte bitte sicherheitshalber sofort sperren?"
    },
    en: "The ATM just swallowed my card—could you please block the card immediately just to be safe?",
    vi: "Cây ATM vừa nuốt mất thẻ của tôi rồi — phiền anh/chị khóa thẻ ngay lập tức giúp tôi để đảm bảo an toàn nhé?",
    reply: {
      de: "Ich habe Ihre Karte soeben gesperrt und Ihnen direkt eine kostenlose Ersatzkarte per Post bestellt.",
      en: "I've just blocked your card and ordered a free replacement card for you by mail right away.",
      vi: "Tôi vừa khóa thẻ của quý khách xong và đã đặt phát hành lại thẻ mới miễn phí gửi qua bưu điện cho quý khách rồi ạ."
    },
    tip: "Số điện thoại khẩn cấp khóa mọi loại thẻ ngân hàng miễn phí 24/7 trên toàn nước Đức là: 116 116 (Sperr-Notruf). Động từ 'sperren' = khóa thẻ/tài khoản."
  },
  {
    id: "adm_e08",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Nói chuyện lịch sự với hàng xóm khi chuẩn bị tổ chức tiệc sinh nhật hoặc khoan tường lắp đồ cuối tuần",
    de: "Ich wollte nur kurz Vorwarnung geben: Wir feiern am Samstag meinen Geburtstag, falls es abends ein bisschen lauter wird!",
    de_phonetic: "Ích vôn-tơ nua cuất Pho-va-nung ghê-bần: Via phai-ờn am Zam-stác mai-nần Gơ-buốt-s-tác, phan-s ét a-bần-s ain bít-shần lau-tờ viết!",
    de_register: {
      du: "Kurze Vorwarnung: Wir feiern am Samstag ein bisschen — sag einfach Bescheid, falls es zu laut wird!",
      sie: "Ich wollte Ihnen nur kurz vorab Bescheid geben, dass wir am Samstag Geburtstag feiern, falls es etwas lauter werden sollte."
    },
    en: "Just wanted to give you a quick heads-up: we're celebrating my birthday this Saturday, in case it gets a bit noisy in the evening!",
    vi: "Mình chỉ muốn báo trước một tiếng: Thứ Bảy này tụi mình có tổ chức sinh nhật tại nhà, lỡ buổi tối có hơi ồn một chút thì mong hàng xóm thông cảm nhé!",
    reply: {
      de: "Ach, super, dass du Bescheid sagst! Feiert schön, das ist überhaupt kein Problem!",
      en: "Oh, awesome that you let me know! Have a great party, that's no problem at all!",
      vi: "Ồ, bạn báo trước thế là chu đáo quá! Cứ vui vẻ tiệc tùng nhé, hoàn toàn không sao đâu!"
    },
    tip: "Khung giờ yên tĩnh theo luật ở Đức ('Nachtruhe') là từ 22:00 đến 06:00 sáng và cả ngày Chủ nhật ('Sonntagsruhe'). Báo trước cho hàng xóm 1 câu ('Bescheid geben / Vorwarnung geben') giúp tránh 99% phàn nàn!"
  },
  {
    id: "adm_e09",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi nhận được bảng quyết toán phí dịch vụ hàng năm (Nebenkostenabrechnung) và thấy số tiền phải đóng thêm (Nachzahlung) cao bất thường",
    de: "In meiner Nebenkostenabrechnung ist die Nachzahlung dieses Jahr extrem hoch. Dürfte ich bitte einmal Einsicht in die Originalbelege nehmen?",
    de_phonetic: "In mai-nờ Nê-bần-cót-stần-áp-rếch-nung ít đi Nákh-tsa-lung đi-zớt Ya éc-strêm hôkh. Đuýp-tơ ích bít-tơ ai-n-man Ain-zích in đi O-ri-ghi-nan-bơ-lê-gơ nê-mần?",
    de_register: {
      du: "Die Nachzahlung bei den Nebenkosten ist echt hoch — kann ich mir dazu mal die Belege anschauen?",
      sie: "In meiner Nebenkostenabrechnung fällt die Nachzahlung ungewöhnlich hoch aus. Dürfte ich bitte Einsicht in die zugrundeliegenden Belege nehmen?"
    },
    en: "The additional payment on my utility statement is extremely high this year. Could I please take a look at the original receipts?",
    vi: "Trong bảng quyết toán phí dịch vụ năm nay của tôi, khoản phải đóng bù thêm cao bất thường. Cho phép tôi được xem qua các hóa đơn gốc đối chiếu nhé?",
    reply: {
      de: "Natürlich, ich schicke Ihnen die Aufstellung der Heiz- und Wasserkosten heute noch als PDF zu.",
      en: "Of course, I'll send you the breakdown of the heating and water costs as a PDF later today.",
      vi: "Tất nhiên rồi, tôi sẽ gửi bảng kê chi tiết chi phí sưởi và nước dưới dạng file PDF cho bạn ngay trong hôm nay."
    },
    tip: "'Die Nachzahlung' = tiền phải đóng bù thêm; 'Das Guthaben / die Rückerstattung' = tiền dư được hoàn lại. Người thuê nhà luôn có quyền pháp lý yêu cầu 'Belegeinsicht' (xem hóa đơn gốc)."
  },
  {
    id: "adm_e10",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Gọi cho công ty bảo hiểm y tế (Krankenkasse: TK, AOK, Barmer) hỏi xem dịch vụ vệ sinh răng miệng hoặc tiêm vắc-xin có được hoàn tiền không",
    de: "Übernimmt die Krankenkasse eigentlich die Kosten für eine professionelle Zahnreinigung, wenn ich die Rechnung einreiche?",
    de_phonetic: "Uy-bờ-nimt đi Cran-cần-cát-sơ ai-gần-lích đi Cót-stần phuya ai-nơ prô-phét-si-ô-ne-lơ Tsan-rai-ni-gung, ven ích đi Rếch-nung ai-n-rai-chơ?",
    de_register: {
      du: "Weißt du, ob die Krankenkasse die Kosten für die Zahnreinigung übernimmt?",
      sie: "Übernimmt Ihre Krankenkasse die Kosten für eine professionelle Zahnreinigung, wenn ich die Rechnung bei Ihnen einreiche?"
    },
    en: "Does the health insurance actually cover the cost of a professional dental cleaning if I submit the invoice?",
    vi: "Bên bảo hiểm y tế có chi trả chi phí lấy cao răng và làm sạch răng chuyên sâu khi tôi nộp hóa đơn lên không ạ?",
    reply: {
      de: "Ja, wir bezuschussen das einmal pro Jahr mit bis zu 40 Euro. Laden Sie die Rechnung einfach in unserer App hoch!",
      en: "Yes, we subsidize that once a year up to 40 euros. Just upload the invoice in our app!",
      vi: "Có ạ, bên tôi hỗ trợ khoản này mỗi năm một lần tối đa 40 Euro. Quý khách chỉ cần chụp hóa đơn tải lên ứng dụng là được!"
    },
    tip: "Ba động từ sống còn khi làm việc với bảo hiểm ở Đức: 'Kosten übernehmen' (chi trả toàn bộ), 'bezuschussen' (hỗ trợ một phần), và 'eine Rechnung einreichen' (nộp hóa đơn để nhận lại tiền)."
  },
  {
    id: "adm_e11",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Tại tiệm cắt tóc (Friseur) ở Đức — mô tả kiểu tóc mong muốn ngắn gọn, dễ hiểu",
    de: "An den Seiten und hinten bitte schön kurz mit Übergang, und oben nur die Spitzen ein bisschen schneiden.",
    de_phonetic: "An đen Zai-tần un hin-tần bít-tơ shơn cuất mít Uy-bờ-gang, un ô-bần nua đi Spít-sần ain bít-shần shnai-đần.",
    de_register: {
      du: "An den Seiten bitte kurz mit Übergang und oben nur ein bisschen die Spitzen.",
      sie: "An den Seiten und im Nacken bitte kurz mit Übergang, und oben nur die Spitzen etwas kürzen."
    },
    en: "Nice and short with a fade on the sides and back, please, and just trim the ends a little on top.",
    vi: "Hai bên mai và phía sau cắt ngắn gọn có độ chuyển mờ giúp mình nhé, còn phần trên đỉnh chỉ tỉa bớt ngọn một chút thôi.",
    reply: {
      de: "Alles klar! Sollen wir an den Seiten mit sechs oder neun Millimetern anfangen?",
      en: "Got it! Shall we start with six or nine millimeters on the sides?",
      vi: "Rõ rồi! Hai bên mình đi tông-đơ cỡ 6 ly hay 9 ly nhé?"
    },
    tip: "Từ vựng vàng khi đi cắt tóc ở Đức: 'mit Übergang' = cắt fade chuyển tầng mượt; 'nur die Spitzen schneiden' = chỉ tỉa phần ngọn tóc; 'der Scheitel' = ngôi rẽ tóc."
  },
  {
    id: "adm_e12",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi mang quần áo đi giặt khô / sửa đồ tại tiệm may (Änderungsschneiderei / Reinigung)",
    de: "Könnten Sie diese Hose bitte um etwa zwei Zentimeter kürzen? Bis wann wäre sie ungefähr fertig?",
    de_phonetic: "Côn-tần Zi đi-zơ Hô-zơ bít-tơ um ét-va tsvai Tsen-ti-mê-tờ cuất-sần? Bít van ve-rơ zi un-gơ-phe phe-tích?",
    de_register: {
      du: "Kannst du die Hose bitte zwei Zentimeter kürzen? Wann kann ich sie abholen?",
      sie: "Könnten Sie diese Hose bitte um etwa zwei Zentimeter kürzen? Bis wann wäre sie abholbereit?"
    },
    en: "Could you please hem these trousers by about two centimeters? Roughly when would they be ready?",
    vi: "Nhờ anh/chị lên gấu chiếc quần này ngắn bớt khoảng 2 cm giúp tôi được không? Khoảng khi nào thì tôi qua lấy được ạ?",
    reply: {
      de: "Stecken wir kurz mit einer Nadel ab! Sie können die Hose am Freitag ab 14 Uhr abholen.",
      en: "Let's pin it quickly! You can pick the trousers up on Friday after 2 PM.",
      vi: "Để tôi ghim kim đo thử chiều dài nhé! Thứ Sáu từ sau 2 giờ chiều là bạn qua lấy quần được rồi."
    },
    tip: "'Kürzen' = cắt ngắn / lên gấu quần; 'enger machen' = bóp cho ôm vào; 'abstecken' = ghim kim đánh dấu độ dài."
  },
  {
    id: "adm_e13",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi mạng Internet ở nhà (Vodafone / Telekom / O2) bị rớt mạng liên tục và gọi hotline báo sự cố (Störung melden)",
    de: "Bei uns bricht seit gestern ständig das WLAN ab, obwohl ich den Router schon zweimal neu gestartet habe. Liegt in unserer Straße eine Störung vor?",
    de_phonetic: "Bai uns brích zait ghét-stờn stên-đích đát Vê-Lan áp, óp-vôn ích đen Ru-tờ shôn tsvai-man noi gơ-sta-tớt ha-bơ. Líc-t in un-zơ-rờ Stra-sơ ai-nơ Stơ-rung pho?",
    de_register: {
      du: "Unser WLAN bricht ständig ab, obwohl ich den Router schon neu gestartet habe.",
      sie: "Unsere Internetverbindung bricht seit gestern ständig ab, obwohl ich den Router bereits neu gestartet habe. Liegt hier eine Netzstörung vor?"
    },
    en: "Our Wi-Fi has been dropping constantly since yesterday, even though I've already restarted the router twice. Is there an outage on our street?",
    vi: "Từ hôm qua tới giờ mạng Wi-Fi nhà tôi cứ bị ngắt liên tục, dù tôi đã khởi động lại cục router hai lần rồi. Có phải khu phố tôi đang có sự cố đường truyền không ạ?",
    reply: {
      de: "Ich messe Ihre Leitung gerade durch — tatsächlich gibt es am Verteilerkasten eine Störung, unsere Techniker sind schon dran.",
      en: "I'm running a line test right now—indeed there's a fault at the junction box, and our technicians are already on it.",
      vi: "Tôi đang đo kiểm tra đường truyền nhà mình đây — đúng là tủ cáp ngoài đường đang gặp sự cố, kỹ thuật viên bên tôi đang xử lý rồi ạ."
    },
    tip: "Nói trước câu 'obwohl ich den Router schon neu gestartet habe' (dù tôi đã khởi động lại router rồi) sẽ giúp bạn bỏ qua bước hướng dẫn máy móc của tổng đài viên và đi thẳng vào kiểm tra đường truyền!"
  },
  {
    id: "adm_e14",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi cần xin chứng thực bản sao giấy tờ (beglaubigte Kopie) tại Bürgeramt hoặc Rathaus ở Đức",
    de: "Ich bräuchte bitte eine amtlich beglaubigte Kopie von meinem Zeugnis. Das Original habe ich zum Abgleich hier dabei.",
    de_phonetic: "Ích broi-ch-tơ bít-tơ ai-nơ am-t-lích bơ-glau-bích-tơ Cô-pi phon mai-nầm Tsoi-c-nít. Đát O-ri-ghi-nan ha-bơ ích tsum Áp-glai-ch hia đa-bai.",
    de_register: {
      du: "Ich brauche eine beglaubigte Kopie von meinem Zeugnis — das Original hab ich dabei.",
      sie: "Ich benötige bitte eine amtlich beglaubigte Kopie meines Zeugnisses. Das Original liegt zum Abgleich vor."
    },
    en: "I need an officially certified copy of my certificate, please. I have the original right here with me for comparison.",
    vi: "Tôi muốn xin sao y chứng thực bằng cấp của tôi. Bản gốc tôi có mang theo sẵn đây để đối chiếu ạ.",
    reply: {
      de: "Sehr gern! Wie viele Exemplare brauchen Sie? Eine Beglaubigung kostet fünf Euro pro Dokument.",
      en: "Gladly! How many copies do you need? Certification costs five euros per document.",
      vi: "Vâng ạ! Bạn cần chứng thực mấy bản? Phí sao y là 5 Euro cho mỗi văn bản nhé."
    },
    tip: "'Die amtliche Beglaubigung / beglaubigte Kopie' = bản sao y chứng thực đóng dấu mộc của cơ quan nhà nước (Bürgeramt/Rathaus), rẻ hơn rất nhiều so với ra văn phòng công chứng tư (Notar)."
  },
  {
    id: "adm_e15",
    level: "C1",
    category: "admin",
    patternType: "frame",
    frequencyScore: 4,
    context: "Khung câu yêu cầu gia hạn thời hạn nộp giấy tờ (Fristverlängerung) với Sở Thuế (Finanzamt) hoặc cơ quan nhà nước",
    de: "Da mir noch ein wichtiges Dokument fehlt, möchte ich höflich um eine kurze Fristverlängerung bis Ende des Monats bitten.",
    de_phonetic: "Đa mia nókh ain vích-ti-gớt Đô-cu-ment phê-t, mớch-tơ ích hớp-lích um ai-nơ cuất-sơ Phrít-s-phe-lêng-ơ-rung bít En-đơ đét Mô-nát-s bít-tần.",
    de_register: {
      du: "Mir fehlt noch ein Dokument — könnten wir die Frist vielleicht bis Ende des Monats verlängern?",
      sie: "Da mir aktuell noch ein Nachweis fehlt, möchte ich höflich um eine Fristverlängerung bis zum Monatsende bitten."
    },
    en: "Since I'm still waiting on an important document, I would like to politely request a brief deadline extension until the end of the month.",
    vi: "Vì tôi vẫn còn thiếu một giấy tờ chứng nhận quan trọng nên tôi xin phép được gia hạn thời hạn nộp hồ sơ đến cuối tháng này ạ.",
    reply: {
      de: "Kein Problem, ich hinterlege die Fristverlängerung bis zum 30. im System. Reichen Sie den Beleg dann einfach nach.",
      en: "No problem, I'll log the extension until the 30th in the system. Just submit the document once you have it.",
      vi: "Không vấn đề gì, tôi sẽ cập nhật gia hạn tới ngày 30 trên hệ thống. Khi nào có giấy tờ đó bạn chỉ cần nộp bổ sung sau là được."
    },
    tip: "Hai từ khóa hành chính cực kỳ quan trọng ở Đức: 'die Fristverlängerung' (gia hạn thời hạn) và động từ tách 'nachreichen' (nộp bổ sung giấy tờ còn thiếu sau)."
  },

  // =========================================================================
  // WORK EXPANSION (15 items -> Total 25 in 'work')
  // =========================================================================
  {
    id: "wrk_e01",
    level: "B1",
    category: "work",
    patternType: "routine",
    frequencyScore: 5,
    context: "Cập nhật tiến độ ngắn gọn, súc tích trong buổi họp Daily Standup buổi sáng",
    de: "Kurzes Update von meiner Seite: Gestern habe ich das Modul abgeschlossen, und heute kümmere ich mich um die Tests.",
    de_phonetic: "Cuất-sớt Áp-đết phon mai-nờ Zai-tơ: Ghét-stờn ha-bơ ích đát Mô-đun áp-gơ-shlót-sần, un hoi-tơ cuym-mơ-rơ ích mích um đi Tét-s.",
    de_register: {
      du: "Kurzes Update von mir: Gestern hab ich das Modul fertig gemacht, heute stehen die Tests an.",
      sie: "Ein kurzes Update von meiner Seite: Gestern konnte ich das Modul abschließen, heute widme ich mich den Tests."
    },
    en: "Quick update from my side: yesterday I wrapped up the module, and today I'm tackling the tests.",
    vi: "Cập nhật nhanh từ phía mình nhé: Hôm qua mình đã hoàn thành xong module đó rồi, còn hôm nay mình sẽ bắt tay vào phần kiểm thử.",
    reply: {
      de: "Super Fortschritt! Sag einfach Bescheid, falls du beim Testing Unterstützung brauchst.",
      en: "Great progress! Just let us know if you need any backup with the testing.",
      vi: "Tiến độ tốt quá! Cứ báo nhé nếu khâu kiểm thử bạn cần hỗ trợ thêm."
    },
    tip: "Cụm mở đầu 'Kurzes Update von meiner Seite' (Cập nhật nhanh từ phía mình) là câu mở lời kinh điển nhất trong các cuộc họp nhóm tại công ty Đức."
  },
  {
    id: "wrk_e02",
    level: "B2",
    category: "work",
    patternType: "frame",
    frequencyScore: 5,
    context: "Khung câu xin phép nối lời / bổ sung một ý quan trọng ngay trong lúc họp ('kurz einhaken')",
    de: "Darf ich da ganz kurz einhaken und noch einen wichtigen Punkt ergänzen?",
    de_phonetic: "Đáp ích đa gan-s cuất ai-n-ha-cần un nókh ai-nần vích-ti-gần Pung-t e-ghên-sần?",
    de_register: {
      du: "Darf ich da kurz einhaken und was ergänzen?",
      sie: "Dürfte ich an dieser Stelle kurz einhaken und noch einen Punkt ergänzen?"
    },
    en: "May I quickly jump in right there and add one important point?",
    vi: "Cho mình xin phép nối lời ngay điểm này một chút để bổ sung thêm một ý quan trọng nhé?",
    reply: {
      de: "Ja, klar, schieß los! Was ist dir aufgefallen?",
      en: "Yeah, sure, go right ahead! What did you notice?",
      vi: "Ừ, bạn cứ nói luôn đi! Bạn phát hiện ra điểm gì thế?"
    },
    tip: "Động từ tách 'einhaken' (móc nối lời vào điểm ai đó vừa nói = jump in / chime in) lịch sự và tinh tế hơn rất nhiều so với việc ngắt lời ('unterbrechen')."
  },
  {
    id: "wrk_e03",
    level: "B1",
    category: "work",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi rõ thứ tự ưu tiên khi sếp giao thêm việc mới trong lúc bạn đang làm dở việc khác",
    de: "Wie dringend ist die Sache? Soll ich das direkt vorziehen, oder reicht es, wenn ich mich morgen früh darum kümmere?",
    de_phonetic: "Vi đring-ần ít đi Za-khơ? Zôn ích đát đi-rếch pho-tsi-ần, ô-đờ rai-cht ét, ven ích mích mo-gần phruy đa-rum cuym-mơ-rơ?",
    de_register: {
      du: "Wie dringend ist das? Soll ich das direkt vorziehen oder reicht morgen früh?",
      sie: "Welche Priorität hat diese Aufgabe? Soll ich sie direkt vorziehen, oder genügt es morgen Vormittag?"
    },
    en: "How urgent is this? Should I bump it to the top of the queue right now, or is tomorrow morning fine?",
    vi: "Việc này gấp tới mức nào ạ? Mình nên ưu tiên đẩy lên làm ngay bây giờ hay để sáng mai xử lý là kịp?",
    reply: {
      de: "Morgen früh reicht völlig aus — mach heute erst mal in Ruhe dein aktuelles Projekt fertig.",
      en: "Tomorrow morning is totally fine—just finish up your current project in peace today.",
      vi: "Sáng mai làm là hoàn toàn kịp nhé — hôm nay bạn cứ yên tâm hoàn thành nốt dự án hiện tại đi."
    },
    tip: "Động từ 'etwas vorziehen' = đẩy một đầu việc lên làm trước các việc khác. Câu hỏi này giúp bạn quản lý kỳ vọng của sếp cực kỳ hiệu quả."
  },
  {
    id: "wrk_e04",
    level: "B2",
    category: "work",
    patternType: "frame",
    frequencyScore: 5,
    context: "Nhắc khéo đồng nghiệp hoặc đối tác khi họ quên trả lời email/tin nhắn từ tuần trước mà không gây khó chịu",
    de: "Ich wollte das Thema nur noch mal kurz bei dir in Erinnerung rufen — konntest du dir meinen Vorschlag schon anschauen?",
    de_phonetic: "Ích vôn-tơ đát Thê-ma nua nókh man cuất bai đia in E-rin-nơ-rung ru-phần — con-tớt đu đia mai-nần Pho-shlác shôn an-shau-ần?",
    de_register: {
      du: "Ich wollte nur noch mal kurz nachhaken: Konntest du dir meinen Vorschlag schon anschauen?",
      sie: "Ich wollte das Thema nur noch einmal kurz in Erinnerung rufen — hatten Sie bereits Gelegenheit, meinen Vorschlag zu prüfen?"
    },
    en: "I just wanted to gently bump this back onto your radar—have you had a chance to look at my proposal yet?",
    vi: "Mình chỉ muốn nhắc nhẹ lại chủ đề này một chút — bạn đã có thời gian xem qua đề xuất của mình chưa?",
    reply: {
      de: "Gut, dass du mich erinnerst! Das ist in meinem Postfach total untergegangen — ich antworte dir bis Mittag!",
      en: "Good thing you reminded me! That got completely buried in my inbox—I'll get back to you by noon!",
      vi: "May quá bạn nhắc mình! Email đó bị trôi tuột trong hộp thư của mình mất — trước trưa nay mình sẽ phản hồi bạn ngay!"
    },
    tip: "Ba cụm từ vàng trong email/chat công sở Đức: 'etwas in Erinnerung rufen' (gợi nhắc lại), 'kurz nachhaken' (hỏi thăm tiến độ), và 'im Postfach untergehen' (bị trôi mất trong hộp thư)."
  },
  {
    id: "wrk_e05",
    level: "B1",
    category: "work",
    patternType: "routine",
    frequencyScore: 5,
    context: "Thông báo lịch làm việc tại nhà (Homeoffice) hoặc xin về sớm một chút vì có lịch hẹn cá nhân",
    de: "Kurze Info: Ich mache morgen Homeoffice, weil bei mir vormittags der Handwerker vorbeikommt. Ich bin aber ganz normal erreichbar.",
    de_phonetic: "Cuất-sơ In-phô: Ích ma-khơ mo-gần Hôm-óp-phít, vai bai mia pho-mít-tác-s đe Han-ve-cờ pho-bai-com-t. Ích bin a-bờ gan-s no-man e-rai-ch-ba.",
    de_register: {
      du: "Kurze Info: Ich arbeite morgen aus dem Homeoffice, bin aber ganz normal über Teams erreichbar.",
      sie: "Zur kurzen Information: Ich arbeite morgen im Homeoffice, bin jedoch wie gewohnt telefonisch und per E-Mail erreichbar."
    },
    en: "Quick heads-up: I'm working from home tomorrow because a technician is coming by in the morning. I'll be reachable as usual, though.",
    vi: "Thông báo nhanh với mọi người nhé: Ngày mai mình làm việc ở nhà vì buổi sáng có thợ qua sửa đồ, nhưng mình vẫn trực máy liên lạc bình thường nhé.",
    reply: {
      de: "Alles klar, danke fürs Bescheidgeben!",
      en: "All good, thanks for the heads-up!",
      vi: "Ok rõ rồi, cảm ơn bạn đã báo trước nhé!"
    },
    tip: "Luôn kèm câu chốt 'Ich bin aber ganz normal erreichbar' (Nhưng mình vẫn giữ liên lạc bình thường) khi báo làm Homeoffice tại các công ty Đức để tạo sự tin tưởng tuyệt đối."
  },
  {
    id: "wrk_e06",
    level: "B2",
    category: "work",
    patternType: "routine",
    frequencyScore: 4,
    context: "Bàn giao công việc (Übergabe) và người phụ trách thay thế (Vertretung) trước khi đi nghỉ phép (Urlaub)",
    de: "Ich bin nächste Woche im Urlaub. Falls etwas Dringendes anfällt, übernimmt Lisa in der Zeit netterweise meine Vertretung.",
    de_phonetic: "Ích bin nếch-stơ Vô-khơ im Ua-laup. Phan-s ét-vát Đring-ần-đớt an-phen-t, uy-bờ-nimt Li-za in đe Tsait nét-tờ-vai-zơ mai-nơ Phe-trê-tung.",
    de_register: {
      du: "Ich bin nächste Woche im Urlaub — Lisa macht in der Zeit meine Vertretung, falls was Dringendes ist.",
      sie: "Ich befinde mich nächste Woche im Urlaub. In dringenden Fällen übernimmt meine Kollegin Lisa gern die Vertretung."
    },
    en: "I'm on vacation next week. If anything urgent comes up, Lisa is kindly covering for me while I'm away.",
    vi: "Tuần sau mình nghỉ phép rồi. Nếu có việc gì gấp phát sinh thì trong thời gian đó Lisa sẽ tốt bụng phụ trách thay phần việc của mình nhé.",
    reply: {
      de: "Super organisiert! Dann wünsche ich dir schon mal einen wunderschönen und erholsamen Urlaub!",
      en: "Super well organized! Then I wish you a wonderful and relaxing vacation already!",
      vi: "Sắp xếp chu đáo quá! Vậy chúc bạn có một kỳ nghỉ thật tuyệt vời và thư giãn nhé!"
    },
    tip: "'Die Vertretung übernehmen' = đứng ra làm thay/phụ trách thay trong lúc đồng nghiệp vắng mặt ('cover for someone')."
  },
  {
    id: "wrk_e07",
    level: "B2",
    category: "work",
    patternType: "frame",
    frequencyScore: 5,
    context: "Khung câu kết nối đồng nghiệp với đúng người phụ trách chuyên môn ('ins Boot holen / vernetzen')",
    de: "Dazu holen wir am besten direkt Markus mit ins Boot — er steckt in dem Thema am tiefsten drin.",
    de_phonetic: "Đa-tsu hô-lần via am bét-stần đi-rếch Ma-cút mít in-s Bốt — e stếch-t in đem Thê-ma am típ-stần đrin.",
    de_register: {
      du: "Lass uns da am besten Markus mit ins Boot holen, er kennt sich damit am besten aus.",
      sie: "Hierzu sollten wir am besten Herrn Weber mit ins Boot holen, da er in dieser Thematik am tiefsten drinsteckt."
    },
    en: "We should loop Markus right in on this—he's the one most deeply involved in that topic.",
    vi: "Về vụ này tốt nhất mình kéo luôn Markus vào cùng xử lý — bạn ấy là người nắm sâu nhất mảng này đấy.",
    reply: {
      de: "Stimmt, gute Idee! Ich lade ihn direkt zu unserem Termin morgen ein.",
      en: "True, good call! I'll add him right to our meeting invite for tomorrow.",
      vi: "Đúng đấy, ý hay lắm! Để mình thêm bạn ấy vào lịch họp ngày mai của tụi mình luôn."
    },
    tip: "Hai thành ngữ công sở cực kỳ bản xứ: 'jemanden mit ins Boot holen' (kéo ai lên chung thuyền = loop someone in) và 'tief im Thema drinstecken' (nắm rất sâu một chủ đề)."
  },
  {
    id: "wrk_e08",
    level: "C1",
    category: "work",
    patternType: "frame",
    frequencyScore: 4,
    context: "Góp ý sửa lỗi (Constructive Feedback) cho đồng nghiệp một cách tinh tế, không làm mất lòng",
    de: "Der Ansatz gefällt mir schon richtig gut! Nur eine kleine Anmerkung: An dieser Stelle könnten wir es noch etwas klarer formulieren.",
    de_phonetic: "Đe An-zát gơ-phen-t mia shôn rích-tích gút! Nua ai-nơ clai-nơ An-me-cung: An đi-zờ Ste-lơ côn-tần via ét nókh ét-vát cla-rờ pho-mu-lia-rần.",
    de_register: {
      du: "Gefällt mir schon richtig gut! Nur eine Kleinigkeit: Hier könnten wir es noch etwas klarer formulieren.",
      sie: "Ihr Entwurf gefällt mir bereits sehr gut. Lediglich eine kleine Anmerkung: Diesen Abschnitt könnten wir noch etwas präziser formulieren."
    },
    en: "I really like this approach already! Just one small note: right here we could phrase it a bit more clearly.",
    vi: "Hướng tiếp cận này mình thấy rất ổn rồi đấy! Chỉ có một góp ý nhỏ xíu: Ở đoạn này mình có thể diễn đạt cho rõ ý hơn một chút nữa.",
    reply: {
      de: "Danke für das konstruktive Feedback! Ich passe den Absatz gleich noch mal an.",
      en: "Thanks for the constructive feedback! I'll tweak that paragraph right away.",
      vi: "Cảm ơn góp ý rất xây dựng của bạn nhé! Để mình chỉnh lại đoạn văn đó luôn."
    },
    tip: "Dùng ngôi 'wir' ('könnten wir es noch klarer formulieren' - chúng ta có thể viết rõ hơn) thay vì ngôi 'du' ('du hast das unklar geschrieben') là bí quyết góp ý lịch thiệp tại Đức."
  },
  {
    id: "wrk_e09",
    level: "B2",
    category: "work",
    patternType: "routine",
    frequencyScore: 5,
    context: "Khi phát hiện ra mình đang bị chặn tiến độ (Blocker) bởi một bộ phận khác và cần nhờ sếp/nhóm tháo gỡ",
    de: "Ich komme an der Stelle gerade leider nicht weiter, weil mir noch die Freigabe vom Marketing fehlt.",
    de_phonetic: "Ích com-mơ an đe Ste-lơ gơ-ra-đơ lai-đờ ních vai-tờ, vai mia nókh đi Phrai-ga-bơ phom Ma-kê-ting phê-t.",
    de_register: {
      du: "Ich hänge da gerade fest, weil mir noch die Freigabe vom Marketing fehlt.",
      sie: "An diesem Punkt komme ich aktuell leider nicht weiter, da mir noch die Freigabe der Marketingabteilung fehlt."
    },
    en: "Unfortunately I'm stuck at this point right now because I'm still waiting on sign-off from marketing.",
    vi: "Hiện tại tới khâu này mình đang bị chững lại chưa đi tiếp được, vì vẫn còn thiếu phê duyệt từ bên Marketing.",
    reply: {
      de: "Okay, danke für den Hinweis — ich hake da heute Vormittag direkt mal bei der Abteilungsleitung nach.",
      en: "Okay, thanks for flagging that—I'll follow up directly with the department head this morning.",
      vi: "Ok, cảm ơn bạn đã báo nhé — ngay sáng nay mình sẽ thúc trực tiếp bên trưởng bộ phận đó."
    },
    tip: "'Nicht weiterkommen / festhängen' = bị kẹt tiến độ; 'die Freigabe' = sự phê duyệt / sign-off để được phép triển khai."
  },
  {
    id: "wrk_e10",
    level: "B1",
    category: "work",
    patternType: "routine",
    frequencyScore: 4,
    context: "Khi cần rời cuộc họp đúng giờ vì có cuộc họp tiếp theo ngay sau đó (Hard Stop)",
    de: "Kurzer Hinweis vorab: Ich muss heute leider pünktlich um elf Uhr raus, weil ich direkt im Anschluss den nächsten Call habe.",
    de_phonetic: "Cuất-sờ Hin-vai-s pho-ráp: Ích mút hoi-tơ lai-đờ puynh-t-lích um en-ph Ua raus, vai ích đi-rếch im An-shlút đen nếch-stần Côn ha-bơ.",
    de_register: {
      du: "Nur kurz vorab: Ich hab um elf Uhr leider einen harten Anschlag und muss pünktlich in den nächsten Call.",
      sie: "Ein kurzer Hinweis vorab: Ich muss heute leider pünktlich um elf Uhr weiter, da ich direkt im Anschluss einen Folgetermin habe."
    },
    en: "Quick heads-up upfront: I have a hard stop at eleven today because I have another call right back-to-back.",
    vi: "Mình xin báo trước một chút nhé: Hôm nay đúng 11 giờ mình phải xin phép rời cuộc họp vì có một cuộc gọi khác nối tiếp ngay sau đó.",
    reply: {
      de: "Alles klar! Dann ziehen wir deine Themen am besten direkt an den Anfang vor.",
      en: "Got it! Then let's bump your topics right to the beginning of the agenda.",
      vi: "Ok rõ rồi! Vậy mình đẩy các phần việc của bạn lên bàn đầu tiên luôn nhé."
    },
    tip: "'Direkt im Anschluss' = nối tiếp ngay sau đó (back-to-back); 'einen Folgetermin haben' = có lịch hẹn tiếp theo."
  },
  {
    id: "wrk_e11",
    level: "C1",
    category: "work",
    patternType: "routine",
    frequencyScore: 4,
    context: "Thẳng thắn nhận lỗi khi có sai sót trong dự án và đưa ra ngay phương án khắc phục",
    de: "Das geht auf meine Kappe — da habe ich in der Tabelle eine Zeile übersehen. Ich korrigiere das sofort und schicke die neue Version rum.",
    de_phonetic: "Đát ghết auph mai-nơ Ca-pơ — đa ha-bơ ích in đe Ta-be-lơ ai-nơ Tsai-lơ uy-bờ-zê-ần. Ích co-ri-ghi-rơ đát zô-phoọt un shí-cơ đi noi-ơ Ve-zi-ôn rum.",
    de_register: {
      du: "Sorry, das geht auf meine Kappe! Ich korrigiere das sofort und schicke die neue Version rum.",
      sie: "Dieser Fehler liegt auf meiner Seite — ich habe dort eine Zeile übersehen und sende Ihnen umgehend die korrigierte Fassung zu."
    },
    en: "That one's on me—I overlooked a row in the spreadsheet. I'll fix it right away and send around the updated version.",
    vi: "Lỗi này thuộc về mình — mình đã nhìn sót một dòng trong bảng tính. Để mình sửa lại ngay lập tức rồi gửi bản cập nhật mới cho mọi người nhé.",
    reply: {
      de: "Alles gut, danke für die schnelle Korrektur! Ist ja noch rechtzeitig aufgefallen.",
      en: "All good, thanks for the quick fix! Good thing we caught it in time.",
      vi: "Không sao đâu, cảm ơn bạn đã xử lý nhanh nhé! May là phát hiện ra kịp lúc."
    },
    tip: "Văn hóa công sở Đức đánh giá cực kỳ cao câu nói thẳng thắn: 'Das geht auf meine Kappe' ('That's on me') đi kèm giải pháp sửa lỗi ngay lập tức."
  },
  {
    id: "wrk_e12",
    level: "B2",
    category: "work",
    patternType: "frame",
    frequencyScore: 4,
    context: "Đề xuất gom các câu hỏi lại để giải quyết trong một cuộc gọi nhanh 10 phút thay vì nhắn qua nhắn lại dài dòng",
    de: "Bevor wir jetzt ewig hin und her schreiben: Wollen wir dazu einfach kurz fünf Minuten telefonieren?",
    de_phonetic: "Bơ-pho via yết ê-vích hin un he shrai-bần: Vô-lần via đa-tsu ai-n-phákh cuất phuyn-ph Mi-nu-tần tê-lê-phô-nia-rần?",
    de_register: {
      du: "Wollen wir dazu einfach kurz fünf Minuten telefonieren, statt lange hin und her zu schreiben?",
      sie: "Bevor wir hierzu lange per E-Mail hin und her schreiben: Wollen wir das kurz in einem fünfminütigen Telefonat klären?"
    },
    en: "Instead of going back and forth endlessly over text, shall we just hop on a quick five-minute call?",
    vi: "Thay vì nhắn qua nhắn lại mãi mất thời gian, hay là mình gọi nhanh cho nhau 5 phút chốt luôn nhé?",
    reply: {
      de: "Ja, total gern! Ruf mich einfach direkt über Teams an, ich bin frei.",
      en: "Yes, definitely! Just give me a ring on Teams right now, I'm free.",
      vi: "Ừ, chuẩn luôn! Cứ gọi thẳng qua Teams cho mình đi, mình đang rảnh đây."
    },
    tip: "'Hin und her schreiben' = nhắn qua nhắn lại nhiều vòng ('go back and forth'). Câu này giúp tiết kiệm hàng giờ gõ email mỗi tuần."
  },
  {
    id: "wrk_e13",
    level: "C1",
    category: "work",
    patternType: "frame",
    frequencyScore: 4,
    context: "Khi muốn hỏi xem mọi người trong phòng họp có cùng hiểu chung một ý (auf demselben Stand sein) trước khi sang phần mới không",
    de: "Sind wir uns bis hierhin alle einig, damit wir denselben Wissensstand haben, bevor wir zum nächsten Punkt gehen?",
    de_phonetic: "Zin via uns bít hia-hin a-lơ ai-ních, đa-mít via đen-zen-bần Vít-sần-s-stant ha-bần, bơ-pho via tsum nếch-stần Pung-t ghê-ần?",
    de_register: {
      du: "Sind wir da alle auf demselben Stand, bevor wir zum nächsten Punkt springen?",
      sie: "Sind wir uns bis hierhin einig und alle auf demselben Stand, bevor wir zum nächsten Tagesordnungspunkt übergehen?"
    },
    en: "Are we all aligned and on the same page up to this point before we move on to the next item?",
    vi: "Tới điểm này mọi người đã thống nhất và nắm chung thông tin hết chưa, trước khi chúng ta chuyển sang mục tiếp theo?",
    reply: {
      de: "Ja, von meiner Seite aus ist alles glasklar. Wir können gern weitermachen.",
      en: "Yes, everything is crystal clear from my end. We're good to move on.",
      vi: "Vâng, về phía mình thì mọi thứ rõ ràng cả rồi. Mình cứ đi tiếp sang mục sau đi."
    },
    tip: "'Auf demselben Stand sein' = 'be on the same page' (có cùng mặt bằng thông tin như nhau)."
  },
  {
    id: "wrk_e14",
    level: "B2",
    category: "work",
    patternType: "routine",
    frequencyScore: 4,
    context: "Trong buổi phỏng vấn xin việc (Vorstellungsgespräch) hoặc đánh giá cuối năm (Jahresgespräch) khi nói về điểm mạnh cá nhân",
    de: "Mir liegt es besonders, komplexe Themen schnell zu strukturieren und auch in stressigen Phasen Ruhe zu bewahren.",
    de_phonetic: "Mia líc-t ét bơ-zon-đờ-s, com-plếch-sơ Thê-mần shnen tsu struyd-tu-ria-rần un au-kh in strét-si-gần Pha-zần Ru-ơ tsu bơ-va-rần.",
    de_register: {
      du: "Mir liegt es total, komplexe Themen zu strukturieren und auch unter Druck Ruhe zu bewahren.",
      sie: "Mir liegt es besonders, komplexe Sachverhalte schnell zu strukturieren und auch in hektischen Phasen Ruhe zu bewahren."
    },
    en: "My particular strength is structuring complex topics quickly and staying calm even during high-pressure phases.",
    vi: "Sở trường đặc biệt của tôi là hệ thống hóa nhanh các vấn đề phức tạp và giữ được sự bình tĩnh ngay cả trong những giai đoạn áp lực cao.",
    reply: {
      de: "Das passt hervorragend zu den Anforderungen in unserem Projektteam!",
      en: "That fits the requirements of our project team wonderfully!",
      vi: "Điểm mạnh đó cực kỳ phù hợp với yêu cầu trong nhóm dự án của chúng tôi đấy!"
    },
    tip: "Cấu trúc 'Mir liegt es besonders, ... zu + V' (Tôi đặc biệt có năng khiếu/sở trường trong việc...) nghe khiêm tốn nhưng thuyết phục hơn nhiều so với 'Ich bin sehr gut in...'."
  },
  {
    id: "wrk_e15",
    level: "C1",
    category: "work",
    patternType: "frame",
    frequencyScore: 4,
    context: "Khi đàm phán lương hoặc phạm vi dự án: Đưa ra kỳ vọng rõ ràng dựa trên giá trị đóng góp",
    de: "Angesichts der erweiterten Verantwortung stelle ich mir beim Gehalt einen Rahmen zwischen 65.000 und 70.000 Euro Jahresbrutto vor.",
    de_phonetic: "An-gơ-zích-t-s đe e-vai-tờ-tần Phe-ant-voọt-tung ste-lơ ích mia baim Gơ-hant ai-nần Ra-mần tsví-shần Phuyn-ph-un-zếch-tsích-tau-zần un Zíp-tsích-tau-zần Oi-rô Ya-rớt-brút-tô pho.",
    de_register: {
      du: "Mit Blick auf die neuen Aufgaben stelle ich mir einen Rahmen zwischen 65.000 und 70.000 Euro Jahresbrutto vor.",
      sie: "Angesichts des erweiterten Verantwortungsbereichs stelle ich mir einen Gehaltsrahmen zwischen 65.000 und 70.000 Euro Jahresbrutto vor."
    },
    en: "Given the expanded scope of responsibility, I'm looking at a gross annual salary range between 65,000 and 70,000 euros.",
    vi: "Xét trên phạm vi trách nhiệm được mở rộng thêm, mức thu nhập trước thuế hàng năm mà tôi kỳ vọng nằm trong khoảng từ 65.000 đến 70.000 Euro.",
    reply: {
      de: "Danke für die transparente Einschätzung. Das bewegt sich absolut im Rahmen unseres Budgets.",
      en: "Thank you for the transparent assessment. That is well within the range of our budget.",
      vi: "Cảm ơn sự chia sẻ thẳng thắn của bạn. Mức này hoàn toàn nằm trong khung ngân sách của bên tôi."
    },
    tip: "Ở Đức, lương luôn được đàm phán theo mức 'Jahresbruttogehalt' (tổng lương gộp trước thuế của cả năm). Mở đầu bằng 'Angesichts + Genitiv' (Xét trên...) tạo sức nặng lập luận rất lớn."
  }
];
