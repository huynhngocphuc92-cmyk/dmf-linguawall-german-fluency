module.exports = [
  {
    id: "t3_adm_01",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi bạn cùng nhà (Mitbewohner) trong WG về mã số đóng phí truyền hình (Rundfunkbeitrag / GEZ) để đăng ký gộp chung không phải đóng 2 lần",
    de: "Wer von euch zahlt eigentlich aktuell den Rundfunkbeitrag, und kannst du mir die Beitragsnummer zum Mit-Anmelden schicken?",
    de_phonetic: "Ve phôn oi-ch tsan-t ai-gần-lích ác-tu-en đen Run-phung-bai-trác, un can-st đu mia đi Bai-trác-s-num-mờ tsum Mít-An-men-đần shí-cần?",
    de_register: {
      du: "Wer von euch zahlt eigentlich aktuell den Rundfunkbeitrag, und kannst du mir die Beitragsnummer zum Mit-Anmelden schicken?",
      sie: "Darf ich fragen, über wen der Rundfunkbeitrag für die Wohnung läuft, damit ich Ihre Beitragsnummer beim Beitragsservice angeben kann?"
    },
    en: "Who's currently paying the broadcasting fee here, and could you send me the account number so I can register under it?",
    vi: "Hiện tại trong nhà mình ai đang đứng tên đóng phí truyền hình thế, gửi cho mình xin mã số Beitragsnummer để mình khai báo gộp chung nhé?",
    reply: {
      de: "Das läuft über mein Konto! Ich schicke dir die neunstellige Nummer gleich per WhatsApp, dann teilen wir das einfach durch drei.",
      en: "That goes through my account! I'll text you the nine-digit number on WhatsApp right away, and then we just split it three ways.",
      vi: "Khoản đó trừ qua tài khoản của mình đấy! Để mình gửi mã 9 chữ số qua WhatsApp cho bạn ngay, rồi tụi mình chia ba ra là xong."
    },
    tip: "Ở Đức, phí truyền hình (Rundfunkbeitrag, hay quen gọi là GEZ - 18,36€/tháng) tính theo MỖI CĂN HỘ chứ không tính theo đầu người. Khi mới chuyển vào WG, bạn sẽ nhận thư đòi tiền riêng; chỉ cần lấy 'Beitragsnummer' của người đã đóng trong nhà điền lên web rundfunkbeitrag.de là được miễn đóng trùng!"
  },
  {
    id: "t3_adm_02",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Gửi hồ sơ xin thuê nhà (Wohnungsbewerbung) cho chủ nhà hoặc môi giới sau buổi xem nhà (Wohnungsbesichtigung)",
    de: "Die Wohnung hat mir bei der Besichtigung sehr gut gefallen, deshalb sende ich Ihnen im Anhang meine Mieterselbstauskunft, die letzten drei Gehaltsabrechnungen und meine aktuelle Schufa-Auskunft.",
    de_phonetic: "Đi Vo-nung hát mia bai đe Bơ-zích-ti-gung ze gút gơ-pha-lần, đét-háp zen-đơ ích I-nần im An-hang mai-nơ Mi-tờ-zen-st-aus-cun-ft, đi lét-s-tần đrai Gơ-han-ts-áp-rếch-nung-ần un mai-nơ ác-tu-en-lơ Shu-pha-Aus-cun-ft.",
    de_register: {
      du: "Die Wohnung hat mir super gefallen! Ich schicke dir hier meine Selbstauskunft, die Gehaltsnachweise und den Schufa-BonitätsCheck.",
      sie: "Die Wohnung hat mir bei der Besichtigung sehr gut gefallen, deshalb sende ich Ihnen im Anhang meine Mieterselbstauskunft, die letzten drei Gehaltsabrechnungen und meine aktuelle Schufa-Auskunft."
    },
    en: "I really liked the apartment during the viewing, so I'm attaching my tenant self-disclosure form, my last three payslips, and my current Schufa credit report.",
    vi: "Tôi rất ưng căn hộ trong buổi xem nhà vừa rồi, vì vậy tôi xin gửi kèm trong file đính kèm bản tự khai thông tin người thuê, bảng lương 3 tháng gần nhất và giấy xác nhận tín dụng Schufa hiện tại.",
    reply: {
      de: "Vielen Dank für die vollständigen Unterlagen! Wir sichten bis Freitag alle Bewerbungen und melden uns Anfang nächster Woche bei Ihnen.",
      en: "Thank you for the complete documents! We're reviewing all applications until Friday and will get back to you early next week.",
      vi: "Cảm ơn bạn đã gửi bộ hồ sơ đầy đủ! Chúng tôi sẽ duyệt toàn bộ hồ sơ đến thứ Sáu và sẽ liên hệ lại với bạn vào đầu tuần sau."
    },
    tip: "Bộ tứ quyền lực khi đi thuê nhà ở Đức (Bewerbermappe) gồm: 1. Mieterselbstauskunft (tờ khai người thuê), 2. Schufa-BonitätsCheck (chứng nhận điểm tín dụng không nợ xấu), 3. Drei Gehaltsabrechnungen (3 bảng lương), 4. Mietschuldenfreiheitsbescheinigung (xác nhận không nợ tiền nhà từ chủ cũ)."
  },
  {
    id: "t3_adm_03",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi chủ nhà về việc hoàn trả tiền đặt cọc thuê nhà (Mietkaution) sau khi đã bàn giao căn hộ không có hư hại gì",
    de: "Da wir bei der Wohnungsübergabe keine Mängel festgestellt haben, wollte ich höflich nachfragen, bis wann ich mit der Rückzahlung der Mietkaution rechnen kann.",
    de_phonetic: "Đa via bai đe Vo-nungs-uy-bờ-ga-bơ cai-nơ Meng-ần phét-st-gơ-sh-ten-t ha-bần, von-tơ ích hớp-lích nákh-phra-gần, bít van ích mít đe Rức-tsa-lung đe Mít-cau-tsi-ôn rếch-nần can.",
    de_register: {
      du: "Da bei der Übergabe ja alles super gepasst hat, wollte ich mal kurz fragen, wann du mir die Kaution zurücküberweist.",
      sie: "Da wir bei der Wohnungsübergabe keine Mängel festgestellt haben, wollte ich höflich nachfragen, bis wann ich mit der Rückzahlung der Mietkaution rechnen kann."
    },
    en: "Since we didn't find any defects during the apartment handover, I wanted to politely ask when I can expect the rental deposit to be refunded.",
    vi: "Vì khi bàn giao nhà chúng ta đã xác nhận không có hư hỏng nào, tôi muốn hỏi lịch sự xem khoảng bao giờ tôi sẽ nhận lại được tiền cọc nhà ạ.",
    reply: {
      de: "Ich überweise Ihnen heute schon mal siebzig Prozent der Kaution zurück, und den kleinen Restbetrag verrechnen wir nach der letzten Nebenkostenabrechnung.",
      en: "I'll transfer seventy percent of the deposit back to you today, and we'll settle the small remaining balance after the final utility bill.",
      vi: "Hôm nay tôi sẽ chuyển hoàn trước cho bạn 70% tiền cọc, còn một khoản nhỏ giữ lại sẽ được quyết toán nốt sau khi có hóa đơn phụ phí cuối cùng nhé."
    },
    tip: "Theo luật thuê nhà ở Đức, chủ nhà không bắt buộc phải trả 100% Kaution ngay ngày trả chìa khóa: họ có quyền trả phần lớn trước và giữ lại một phần nhỏ (Einbehalt) để chờ quyết toán Nebenkostenabrechnung của năm đó. Tuy nhiên, nếu biên bản bàn giao (Übergabeprotokoll) ghi 'keine Mängel', bạn hoàn toàn có quyền yêu cầu giải ngân phần lớn tiền cọc!"
  },
  {
    id: "t3_adm_04",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi hàng xóm hoặc bạn cùng nhà về quy tắc phân loại rác (Mülltrennung) và chỗ vứt chai lọ thủy tinh (Altglas)",
    de: "Ich bin gerade erst eingezogen — kommt das hier in den Gelben Sack oder in den Restmüll, und wo stehen bei uns die Altglascontainer?",
    de_phonetic: "Ích bin gơ-ra-đơ e-st ai-gơ-tso-gần — com-t đát hia in đen Gen-bần Zắc ô-đờ in đen Rét-st-muyn, un vo sh-tê-ần bai un-s đi An-t-glas-con-tai-nờ?",
    de_register: {
      du: "Ich bin gerade erst eingezogen — kommt das hier in den Gelben Sack oder in den Restmüll, und wo stehen bei uns die Altglascontainer?",
      sie: "Ich bin neu hier im Haus — gehört diese Verpackung in die Gelbe Tonne oder in den Restmüll, und wo finde ich hier die Altglascontainer?"
    },
    en: "I've just moved in — does this go into the yellow recycling bag or residual waste, and where are our glass recycling bins located?",
    vi: "Mình mới chuyển đến thôi — món này bỏ vào túi vàng tái chế hay thùng rác sinh hoạt còn lại thế, với lại thùng vứt chai lọ thủy tinh ở khu mình nằm ở đâu nhỉ?",
    reply: {
      de: "Alles mit Plastik und Aluminium kommt in den Gelben Sack. Die Glascontainer stehen vorne an der Straßenecke, aber wirf da bitte sonntags nichts ein!",
      en: "Everything made of plastic and aluminum goes in the yellow bag. The glass bins are up at the street corner, just please don't throw anything in on Sundays!",
      vi: "Mọi thứ bằng nhựa và nhôm bao bì đều bỏ vào túi vàng hết nhé. Thùng thủy tinh nằm ngay góc đường phía trước, nhưng nhớ tuyệt đối đừng vứt chai lọ vào Chủ nhật kẻo ồn nhé!"
    },
    tip: "Văn hóa 'Mülltrennung' ở Đức cực kỳ nghiêm ngặt: Papier (thùng xanh dương), Biomüll (rác hữu cơ - thùng nâu/xanh lá), Gelber Sack/Gelbe Tonne (bao bì nhựa, hộp sữa, lon thiếc), Restmüll (rác không tái chế được - thùng đen/xám). Đặc biệt, vứt chai thủy tinh vào Altglascontainer bị CẤM sau 20h tối và cả ngày Chủ nhật vì gây tiếng ồn!"
  },
  {
    id: "t3_adm_05",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Đăng ký dịch vụ chuyển tiếp thư từ (Nachsendeauftrag) tại bưu điện khi chuyển sang nhà mới để không bị thất lạc thư quan trọng",
    de: "Da ich nächste Woche umziehe, möchte ich bei der Post einen Nachsendeauftrag für ein halbes Jahr einrichten, damit meine Briefe automatisch an die neue Adresse weitergeleitet werden.",
    de_phonetic: "Đa ích nếch-stơ Vo-khơ um-tsi-ơ, mớch-tơ ích bai đe Pốt ai-nần Nákh-zen-đơ-aup-trác phuya ain han-bớt Gia ai-rích-tần, đa-mít mai-nơ Bri-phơ au-tô-ma-tish an đi noi-ơ A-đrét-sơ vai-tờ-gơ-lai-tết ve-đần.",
    de_register: {
      du: "Ich richte mir vor dem Umzug noch schnell online einen Nachsendeauftrag bei der Post ein, damit keine Briefe verloren gehen.",
      sie: "Da ich nächste Woche umziehe, möchte ich bei der Post einen Nachsendeauftrag für ein halbes Jahr einrichten, damit meine Briefe automatisch an die neue Adresse weitergeleitet werden."
    },
    en: "Since I'm moving next week, I'd like to set up mail forwarding with the post office for six months so my letters are automatically redirected to my new address.",
    vi: "Vì tuần sau tôi chuyển nhà nên tôi muốn đăng ký dịch vụ chuyển tiếp thư tại bưu điện trong vòng 6 tháng, để thư từ của tôi được tự động chuyển về địa chỉ mới.",
    reply: {
      de: "Das ist sehr sinnvoll! Am besten beantragen Sie das mindestens fünf Werktage vor dem Umzug, damit die Umstellung pünktlich greift.",
      en: "That makes a lot of sense! It's best to apply for it at least five business days before moving so the switch takes effect on time.",
      vi: "Làm vậy rất hợp lý ạ! Tốt nhất anh/chị nên đăng ký trước ngày chuyển nhà ít nhất 5 ngày làm việc để hệ thống kích hoạt kịp thời."
    },
    tip: "Ở Đức, mọi giấy tờ quan trọng (Sở ngoại kiều, sở thuế, ngân hàng, bảo hiểm) đều gửi bằng thư giấy truyền thống. Khi chuyển nhà, đăng ký 'Nachsendeauftrag' của Deutsche Post (khoảng 25-30€ cho 6 hoặc 12 tháng) giúp bạn không bao giờ bị lỡ thư phạt hay thư gia hạn visa gửi về địa chỉ cũ!"
  },
  {
    id: "t3_adm_06",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi bộ phận nhân sự hoặc Sở thuế (Finanzamt) về mã số thuế cá nhân (Steueridentifikationsnummer) để không bị áp bậc thuế số 6",
    de: "Ich reiche Ihnen meine elfstellige Steueridentifikationsnummer direkt nach, sobald mir der Brief vom Finanzamt vorliegt, damit ich nicht in Steuerklasse sechs rutsche.",
    de_phonetic: "Ích rai-khơ I-nần mai-nơ en-ph-sh-ten-li-gơ Sh-toi-ờ-i-đen-ti-phi-ca-tsi-ôns-num-mờ đi-rếch nákh, zô-ban-t mia đe Bríp phôm Phi-nan-ts-am-t phoa-líc-t, đa-mít ích ních in Sh-toi-ờ-clát-sơ zếch-s rút-shơ.",
    de_register: {
      du: "Ich schicke dir meine Steuer-ID sofort nach, sobald der Brief vom Finanzamt da ist, damit ich nicht in Steuerklasse sechs lande.",
      sie: "Ich reiche Ihnen meine elfstellige Steueridentifikationsnummer direkt nach, sobald mir der Brief vom Finanzamt vorliegt, damit ich nicht in Steuerklasse sechs rutsche."
    },
    en: "I will submit my eleven-digit tax identification number as soon as I receive the letter from the tax office, so I don't slip into tax class six.",
    vi: "Tôi sẽ nộp bổ sung mã số thuế cá nhân gồm 11 chữ số ngay khi nhận được thư từ Sở thuế, để tránh bị xếp vào bậc thuế số 6.",
    reply: {
      de: "Kein Problem! Wenn die Nummer bis zum zwanzigsten des Monats bei uns im System ist, läuft die erste Gehaltsabrechnung ganz regulär über Steuerklasse eins.",
      en: "No problem! As long as the number is in our system by the twentieth of the month, your first payslip will run normally under tax class one.",
      vi: "Không sao đâu! Chỉ cần mã số có trên hệ thống của chúng tôi trước ngày 20 trong tháng thì bảng lương đầu tiên của bạn vẫn được tính bình thường theo bậc thuế số 1."
    },
    tip: "'Steuer-ID' (11 chữ số, đi theo bạn suốt đời ở Đức) tự động được gửi qua đường bưu điện 2–4 tuần sau khi bạn Anmeldung lần đầu tiên. Nếu đi làm mà chưa nộp kịp Steuer-ID cho HR, hệ thống sẽ tạm trừ lương theo 'Steuerklasse 6' (bậc thuế cao nhất, mất gần 40-50% lương!)."
  },
  {
    id: "t3_adm_07",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Xin bác sĩ gia đình (Hausarzt) giấy chuyển viện (Überweisung) để đi khám bác sĩ chuyên khoa (Facharzt)",
    de: "Könnten Sie mir bitte einen Überweisungsschein für den Hautarzt ausstellen, weil die Facharztpraxis nur Patienten mit Überweisung annimmt?",
    de_phonetic: "Cơn-tần Zi mia bít-tơ ai-nần Uy-bờ-vai-zungs-shai phuya đen Hau-t-át-st aus-sh-ten-lần, vai đi Phákh-át-st-prác-xít nua Pa-tsi-en-tần mít Uy-bờ-vai-zung an-nim-t?",
    de_register: {
      du: "Kannst du mir noch eine Überweisung für den Facharzt mitgeben?",
      sie: "Könnten Sie mir bitte einen Überweisungsschein für den Hautarzt ausstellen, weil die Facharztpraxis nur Patienten mit Überweisung annimmt?"
    },
    en: "Could you please issue me a referral slip for the dermatologist, since the specialist clinic only accepts patients with a referral?",
    vi: "Bác sĩ có thể cấp giúp tôi giấy chuyển tuyến sang khoa da liễu được không ạ, vì phòng khám chuyên khoa đó chỉ nhận bệnh nhân có giấy giới thiệu thôi?",
    reply: {
      de: "Selbstverständlich, ich mache Ihnen die Überweisung direkt fertig. Bei akuten Beschwerden gebe ich Ihnen auch noch einen Vermittlungscode für einen schnelleren Termin mit.",
      en: "Of course, I'll get the referral ready for you right away. For acute symptoms, I'll also give you an urgency code so you can get an appointment faster.",
      vi: "Tất nhiên rồi, tôi sẽ làm giấy chuyển khám cho bạn ngay. Với triệu chứng cấp tính, tôi sẽ cấp thêm mã ưu tiên (Vermittlungscode) để bạn đặt được lịch khám nhanh hơn nhé."
    },
    tip: "Mẹo vàng y tế Đức: Đặt lịch bác sĩ chuyên khoa (Hautarzt - da liễu, Orthopäde - cơ xương khớp, Kardiologe - tim mạch) thường phải chờ hàng tháng trời. Nhưng nếu Hausarzt ghi lên giấy Überweisung một mã 12 ký tự gọi là 'Dringlichkeitscode / Vermittlungscode', bạn gọi tổng đài 116 117 sẽ được xếp lịch khám trong vòng 1–4 tuần!"
  },
  {
    id: "t3_adm_08",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Xin cấp lại đơn thuốc định kỳ (Folgerezept) tại quầy lễ tân phòng khám và hỏi xem đơn thuốc điện tử (E-Rezept) đã nạp vào thẻ bảo hiểm chưa",
    de: "Guten Tag, ich bräuchte bitte ein Folgerezept für mein Medikament. Wird das als E-Rezept direkt auf meine Gesundheitskarte geladen?",
    de_phonetic: "Gu-tần Tác, ích broi-ch-tơ bít-tơ ain Phôn-gơ-rê-tsép-t phuya mai Mê-đi-ca-men-t. Vía-t đát an-s Ê-Rê-tsép-t đi-rếch aup mai-nơ Gơ-zun-hai-ts-ca-tơ gơ-la-đần?",
    de_register: {
      du: "Ich brauche nur schnell ein Folgerezept — lädst du mir das direkt als E-Rezept auf die Karte?",
      sie: "Guten Tag, ich bräuchte bitte ein Folgerezept für mein Medikament. Wird das als E-Rezept direkt auf meine Gesundheitskarte geladen?"
    },
    en: "Good morning, I need a repeat prescription for my medication, please. Will that be loaded directly onto my health insurance card as an e-prescription?",
    vi: "Xin chào, tôi muốn xin cấp lại đơn thuốc định kỳ cho thuốc đang uống ạ. Đơn này sẽ được nạp thẳng dưới dạng đơn điện tử (E-Rezept) vào thẻ bảo hiểm y tế của tôi phải không ạ?",
    reply: {
      de: "Ja, genau! Stecken Sie Ihre Karte kurz hier ins Lesegerät. Der Arzt gibt das Rezept digital frei, und in zehn Minuten können Sie es in jeder Apotheke einlösen.",
      en: "Yes, exactly! Just insert your card into the reader here. The doctor will sign off on the prescription digitally, and in ten minutes you can redeem it at any pharmacy.",
      vi: "Vâng, đúng rồi ạ! Bạn cắm thẻ vào máy đọc ở đây một lát nhé. Bác sĩ sẽ duyệt đơn điện tử, và 10 phút nữa bạn chỉ cần mang thẻ ra bất kỳ hiệu thuốc nào là lấy được thuốc."
    },
    tip: "Từ năm 2024, Đức đã chuyển hoàn toàn đơn thuốc bảo hiểm công từ tờ giấy màu hồng sang 'E-Rezept' (đơn thuốc điện tử). Bạn không cần cầm giấy nữa, chỉ cần đưa thẻ bảo hiểm y tế (Gesundheitskarte) quẹt tại hiệu thuốc (Apotheke) là dược sĩ thấy ngay đơn thuốc!"
  },
  {
    id: "t3_adm_09",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Hỏi lễ tân phòng khám khi đặt lịch lấy máu xét nghiệm buổi sáng (Blutabnahme) xem có phải nhịn ăn sáng (nüchtern kommen) không",
    de: "Ich habe morgen früh um acht Uhr meinen Termin zur Blutabnahme — muss ich dafür komplett nüchtern kommen, oder darf ich vorher zumindest ein Glas Wasser trinken?",
    de_phonetic: "Ích ha-bơ mo-gần phruy um ákh-t Ua mai-nần Te-min tsua Blút-áp-na-mơ — mút ích đa-phuya com-plét nuých-tần com-mần, ô-đờ đáp ích phoa-he tsu-min-đớt ain Glas Vát-sờ trinh-cần?",
    de_register: {
      du: "Muss ich morgen früh zur Blutabnahme eigentlich komplett nüchtern kommen, oder ist Wassertrinken okay?",
      sie: "Ich habe morgen früh um acht Uhr meinen Termin zur Blutabnahme — muss ich dafür komplett nüchtern kommen, oder darf ich vorher zumindest ein Glas Wasser trinken?"
    },
    en: "I have my blood test appointment tomorrow morning at eight — do I need to come on a completely empty stomach, or am I allowed to drink at least a glass of water beforehand?",
    vi: "Sáng mai lúc 8 giờ tôi có lịch lấy máu xét nghiệm — tôi có phải nhịn ăn hoàn toàn không, hay trước đó vẫn được uống ít nhất một cốc nước lọc ạ?",
    reply: {
      de: "Stilles Wasser oder ungesüßter Tee sind überhaupt kein Problem, aber bitte ab zwölf Stunden vorher nichts mehr essen und keinen Kaffee mit Milch trinken!",
      en: "Still water or unsweetened tea is no problem at all, just please don't eat anything or drink coffee with milk for twelve hours beforehand!",
      vi: "Uống nước lọc hoặc trà không đường thì hoàn toàn không sao cả, nhưng vui lòng nhịn ăn và không uống cà phê sữa từ 12 tiếng trước khi lấy máu nhé!"
    },
    tip: "Cụm từ 'nüchtern' trong tiếng Đức có 2 nghĩa cực kỳ hay dùng: 1. Trong đời thường = tỉnh rượu (không say); 2. Trong y khoa ('nüchtern zur Blutabnahme erscheinen') = nhịn ăn sáng (để bụng đói đi xét nghiệm máu)."
  },
  {
    id: "t3_adm_10",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Đem xe ô tô đi đăng kiểm định kỳ 2 năm/lần (TÜV / Hauptuntersuchung) và dặn xưởng sửa xe báo giá trước khi thay phụ tùng đắt tiền",
    de: "Bei meinem Auto steht diesen Monat die Hauptuntersuchung für den TÜV an. Könnten Sie mich bitte kurz anrufen, falls größere Reparaturen nötig sind, bevor Sie Teile austauschen?",
    de_phonetic: "Bai mai-nầm Au-tô sh-tết đi-zần Mô-nát đi Haup-t-un-tờ-zu-khung phuya đen Tuýp an. Cơn-tần Zi mích bít-tơ cua-ts an-ru-phần, phan-s grớt-sơ-rơ Rê-pa-ra-tua-rần nơ-tích zin-t, bơ-phoa Zi Tai-lơ aus-tau-shần?",
    de_register: {
      du: "Mein Auto muss diesen Monat durch den TÜV — rufst du mich bitte kurz an, falls etwas Größeres gemacht werden muss?",
      sie: "Bei meinem Auto steht diesen Monat die Hauptuntersuchung für den TÜV an. Könnten Sie mich bitte kurz anrufen, falls größere Reparaturen nötig sind, bevor Sie Teile austauschen?"
    },
    en: "My car is due for its main TÜV inspection this month. Could you please give me a quick call if any major repairs are needed before replacing any parts?",
    vi: "Xe của tôi tháng này đến hạn đăng kiểm TÜV định kỳ. Nhờ bên mình gọi điện báo trước giúp tôi nếu phát sinh hạng mục sửa chữa lớn trước khi thay thế phụ tùng nhé?",
    reply: {
      de: "Machen wir! Wir schauen uns den Wagen erst mal auf der Hebebühne an und melden uns telefonisch mit einem Kostenvoranschlag, falls vor dem TÜV noch etwas repariert werden muss.",
      en: "Will do! We'll put the car up on the lift first and call you with a cost estimate if anything needs fixing before the inspection.",
      vi: "Nhất trí ạ! Chúng tôi sẽ đưa xe lên cầu nâng kiểm tra trước rồi gọi điện báo giá chi tiết (Kostenvoranschlag) cho bạn nếu cần phải sửa gì trước khi khám TÜV."
    },
    tip: "Ở Đức, mọi ô tô đều phải qua kỳ kiểm định kỹ thuật bắt buộc 2 năm/lần gọi là 'HU' (Hauptuntersuchung), thường được người dân gọi tắt là 'den TÜV machen'. Luôn nhớ từ khóa 'Kostenvoranschlag' (bảng báo giá dự kiến) khi giao xe hoặc đồ điện tử cho thợ để tránh bị 'chặt chém'!"
  },
  {
    id: "t3_adm_11",
    level: "B2",
    category: "admin",
    patternType: "frame",
    frequencyScore: 5,
    context: "Trấn an bạn bè hoặc chủ nhà khi vô tình làm hỏng đồ đạc của họ và đề nghị dùng bảo hiểm trách nhiệm dân sự cá nhân (Privathaftpflichtversicherung) để đền bù",
    de: "Es tut mir wahnsinnig leid, dass mir das aus Versehen heruntergefallen ist — ich melde den Schaden heute noch meiner Privathaftpflichtversicherung, damit die Kosten komplett übernommen werden.",
    de_phonetic: "Ét tút mia van-zi-ních lai-t, đát mia đát aus Phe-zê-ần hê-run-tờ-gơ-pha-lần ít — ích men-đơ đen Sha-đần hoi-tơ nốkh mai-nờ Pri-vát-háp-t-phlích-t-phe-zí-khơ-rung, đa-mít đi Cốt-stần com-plét uy-bờ-nôm-mần ve-đần.",
    de_register: {
      du: "Es tut mir total leid, dass mir das runtergefallen ist! Ich reiche das heute direkt bei meiner Haftpflichtversicherung ein, die übernehmen den Schaden.",
      sie: "Es tut mir wahnsinnig leid, dass mir das aus Versehen heruntergefallen ist — ich melde den Schaden heute noch meiner Privathaftpflichtversicherung, damit die Kosten komplett übernommen werden."
    },
    en: "I'm terribly sorry that I accidentally dropped that — I'll report the damage to my personal liability insurance today so the costs are fully covered.",
    vi: "Tôi thực sự rất xin lỗi vì đã vô tình làm rơi hỏng món đồ đó — ngay hôm nay tôi sẽ khai báo sự cố này với bảo hiểm trách nhiệm dân sự cá nhân của tôi để bên bảo hiểm chi trả toàn bộ chi phí.",
    reply: {
      de: "Ach, zum Glück ist niemandem etwas passiert! Ich suche dir nachher einfach die Originalrechnung heraus, dann kannst du sie direkt bei deiner Versicherung einreichen.",
      en: "Oh, thankfully no one got hurt! I'll just dig out the original receipt for you later so you can submit it straight to your insurance.",
      vi: "Ôi may mà không ai bị sao cả! Để lát nữa mình tìm lại hóa đơn mua hàng gốc gửi bạn để bạn nộp thẳng cho bên bảo hiểm nhé."
    },
    tip: "'Privathaftpflichtversicherung' (Bảo hiểm trách nhiệm dân sự cá nhân, chỉ khoảng 3–5€/tháng) là loại bảo hiểm quan trọng số 1 khi sống ở Đức. Nó đền bù khi bạn vô tình làm vỡ kính, hỏng sàn gỗ nhà thuê, làm rơi laptop của bạn bè hay làm mất chìa khóa chung cư (Schlüsselverlust)!"
  },
  {
    id: "t3_adm_12",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Làm thủ tục đổi địa chỉ cư trú trong cùng thành phố (Ummeldung) tại Bürgeramt và xin dán tem địa chỉ mới lên thẻ cư trú",
    de: "Ich bin innerhalb der Stadt umgezogen und möchte heute meine Adresse ummelden. Könnten Sie den neuen Adressaufkleber bitte direkt auf meinem Aufenthaltstitel anbringen?",
    de_phonetic: "Ích bin in-nờ-háp đe Sh-tát um-gơ-tso-gần un mớch-tơ hoi-tơ mai-nơ A-đrét-sơ um-men-đần. Cơn-tần Zi đen noi-ần A-đrét-s-aup-clê-bờ bít-tơ đi-rếch aup mai-nầm Aup-ần-han-ts-ti-tần an-brinh-ần?",
    de_register: {
      du: "Ich bin innerhalb der Stadt umgezogen und muss meine Adresse auf dem Aufenthaltstitel ummelden.",
      sie: "Ich bin innerhalb der Stadt umgezogen und möchte heute meine Adresse ummelden. Könnten Sie den neuen Adressaufkleber bitte direkt auf meinem Aufenthaltstitel anbringen?"
    },
    en: "I've moved within the city and would like to update my registered address today. Could you please put the new address sticker directly onto my residence permit?",
    vi: "Tôi mới chuyển nhà trong nội thành và hôm nay muốn làm thủ tục đổi địa chỉ đăng ký. Anh/chị có thể dán tem địa chỉ mới trực tiếp lên thẻ cư trú (Aufenthaltstitel) giúp tôi được không ạ?",
    reply: {
      de: "Gern! Geben Sie mir bitte Ihren Reisepass, den elektronischen Aufenthaltstitel und die Wohnungsgeberbestätigung vom neuen Vermieter.",
      en: "Gladly! Please hand me your passport, your electronic residence permit, and the landlord confirmation from your new landlord.",
      vi: "Vâng ạ! Bạn vui lòng đưa cho tôi hộ chiếu, thẻ cư trú điện tử và giấy xác nhận cho thuê nhà từ chủ nhà mới nhé."
    },
    tip: "Phân biệt chuẩn từ vựng hành chính Đức: 'Anmeldung' = đăng ký hộ khẩu khi mới đến Đức hoặc chuyển từ thành phố khác tới; 'Ummeldung' = đổi địa chỉ khi chuyển nhà trong cùng một thành phố (bắt buộc trong vòng 14 ngày); 'Abmeldung' = cắt hộ khẩu khi rời khỏi nước Đức hẳn!"
  },
  {
    id: "t3_adm_13",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Ghi lại chỉ số công tơ điện và nước (Zählerstand ablesen) trong ngày nhận hoặc trả nhà để chốt hóa đơn với công ty điện lực",
    de: "Lass uns im Keller noch kurz ein Foto vom Stromzähler machen, damit wir den genauen Zählerstand beim Stromanbieter melden können.",
    de_phonetic: "Lát un-s im Cen-lờ nốkh cua-ts ain Phô-tô phôm Sh-trôm-tsê-lờ ma-khần, đa-mít via đen gơ-nau-ần Tsê-lờ-sh-tan-t baim Sh-trôm-an-bi-tờ men-đần cơn-nần.",
    de_register: {
      du: "Lass uns im Keller noch kurz ein Foto vom Stromzähler machen, damit wir den genauen Zählerstand beim Stromanbieter melden können.",
      sie: "Lassen Sie uns im Keller bitte noch kurz den Stromzähler ablesen und fotografieren, damit wir den genauen Zählerstand dem Versorger mitteilen können."
    },
    en: "Let's quickly take a photo of the electricity meter in the basement so we can report the exact meter reading to the power company.",
    vi: "Chúng mình xuống tầng hầm chụp nhanh một tấm ảnh công tơ điện đi, để còn khai báo chính xác chỉ số công tơ cho bên công ty điện lực nhé.",
    reply: {
      de: "Gute Idee! Wir tragen die Zählernummer und den aktuellen Stand auch gleich hier ins Übergabeprotokoll ein.",
      en: "Good idea! We'll also write down the meter number and the current reading right here in the handover protocol.",
      vi: "Ý hay đấy! Chúng ta ghi luôn cả mã số công tơ và chỉ số hiện tại vào biên bản bàn giao nhà ở đây nhé."
    },
    tip: "Khi dọn vào hoặc dọn ra khỏi căn hộ ở Đức, LUÔN chụp ảnh 'Stromzähler' (công tơ điện), 'Gaszähler' (công tơ gas) và 'Wasserzähler' (đồng hồ nước) kèm mã số công tơ (Zählernummer), nếu không bạn có thể phải trả oan tiền điện của người thuê trước hoặc sau đó!"
  },
  {
    id: "t3_adm_14",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Cấp hoặc hủy ủy quyền trích nợ tự động (SEPA-Lastschriftmandat) cho phòng gym, nhà mạng hoặc công ty bảo hiểm",
    de: "Hiermit widerrufe ich mein erteiltes SEPA-Lastschriftmandat zum Ende des Monats und bitte Sie, ab dem ersten Mai keine weiteren Beträge mehr von meinem Konto abzubuchen.",
    de_phonetic: "Hia-mít vi-đờ-ru-phơ ích mai e-tai-tớt ZÊ-PA-Lát-st-shríp-t-man-đát tsum En-đơ đét Mô-nát-s un bít-tơ Zi, áp đem e-stần Mai cai-nơ vai-tơ-rần Bơ-trê-gơ mea phôn mai-nầm Con-tô áp-tsu-bu-khần.",
    de_register: {
      du: "Ich ziehe mein SEPA-Lastschriftmandat zum Monatsende zurück, sodass ab Mai nichts mehr von meinem Konto abgebucht wird.",
      sie: "Hiermit widerrufe ich mein erteiltes SEPA-Lastschriftmandat zum Ende des Monats und bitte Sie, ab dem ersten Mai keine weiteren Beträge mehr von meinem Konto abzubuchen."
    },
    en: "I hereby revoke my SEPA direct debit mandate as of the end of the month and ask that you do not debit any further amounts from my account starting May first.",
    vi: "Bằng thông báo này, tôi xin hủy ủy quyền trích nợ tự động SEPA kể từ cuối tháng này và đề nghị quý công ty không tự động trừ thêm bất kỳ khoản tiền nào từ tài khoản của tôi từ ngày 1 tháng 5.",
    reply: {
      de: "Wir haben den Widerruf Ihrer Einzugsermächtigung im System vermerkt. Die letzte reguläre Abbuchung erfolgt somit am fünfzehnten April.",
      en: "We have noted the revocation of your direct debit authorization in our system. The final regular debit will therefore take place on April fifteenth.",
      vi: "Chúng tôi đã ghi nhận yêu cầu hủy ủy quyền trích nợ tự động của bạn trên hệ thống. Lần trừ tiền định kỳ cuối cùng sẽ diễn ra vào ngày 15 tháng 4."
    },
    tip: "Khi hủy hợp đồng phòng gym, internet hay bảo hiểm ở Đức, luôn nhớ kèm câu 'Hiermit widerrufe ich das SEPA-Lastschriftmandat' (hoặc 'die Einzugsermächtigung'). Nếu họ vẫn cố tình trừ tiền sau khi hợp đồng kết thúc, bạn có quyền bấm 1 nút trên app ngân hàng ('Lastschrift zurückgeben') để đòi lại tiền ngay lập tức trong vòng 8 tuần!"
  },
  {
    id: "t3_adm_15",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Xin Sở ngoại kiều (Ausländerbehörde) cấp giấy chứng nhận cư trú tạm thời (Fiktionsbescheinigung) vì thẻ cư trú sắp hết hạn mà lịch hẹn lại quá xa",
    de: "Da mein Aufenthaltstitel nächste Woche abläuft und mein Termin erst im nächsten Monat stattfindet, bräuchte ich dringend eine Fiktionsbescheinigung für meinen Arbeitgeber.",
    de_phonetic: "Đa mai Aup-ần-han-ts-ti-tần nếch-stơ Vo-khơ áp-loip-t un mai Te-min e-st im nếch-stần Mô-nát sh-tát-phin-đớt, broi-ch-tơ ích đrinh-ần ai-nơ Phíc-tsi-ôns-bơ-shai-ni-gung phuya mai-nần A-bai-ts-gê-bờ.",
    de_register: {
      du: "Mein Visum läuft nächste Woche ab und mein Termin ist erst nächsten Monat — ich brauche dringend eine Fiktionsbescheinigung für meinen Chef.",
      sie: "Da mein Aufenthaltstitel nächste Woche abläuft und mein Termin erst im nächsten Monat stattfindet, bräuchte ich dringend eine Fiktionsbescheinigung für meinen Arbeitgeber."
    },
    en: "Since my residence permit expires next week and my appointment isn't until next month, I urgently need a provisional residence certificate for my employer.",
    vi: "Vì thẻ cư trú của tôi sẽ hết hạn vào tuần tới trong khi lịch hẹn của tôi tận tháng sau mới tới, tôi rất cần được cấp giấy chứng nhận gia hạn tạm thời (Fiktionsbescheinigung) để nộp cho công ty ạ.",
    reply: {
      de: "Da Sie Ihren Verlängerungsantrag rechtzeitig vor Ablauf gestellt haben, gilt Ihr Aufenthalt automatisch weiter. Ich stelle Ihnen die Bescheinigung sofort aus.",
      en: "Since you submitted your extension application on time before expiry, your residence status automatically remains valid. I'll issue the certificate for you right away.",
      vi: "Vì bạn đã nộp đơn xin gia hạn đúng hạn trước khi thẻ hết hiệu lực nên quyền cư trú của bạn tự động được kéo dài. Tôi sẽ in giấy xác nhận cho bạn ngay bây giờ."
    },
    tip: "Theo Điều 81 Luật Cư trú Đức (§ 81 AufenthG), chỉ cần bạn nộp đơn xin gia hạn TRƯỚC ngày hết hạn visa (nên lưu lại email/PDF xác nhận đã nộp), thẻ cư trú cũ cùng quyền đi làm của bạn tự động còn hiệu lực cho đến ngày Sở ngoại kiều ra quyết định. Tờ giấy xác nhận điều đó gọi là 'Fiktionsbescheinigung'!"
  },
  {
    id: "t3_adm_16",
    level: "B2",
    category: "admin",
    patternType: "frame",
    frequencyScore: 5,
    context: "Sử dụng quyền hủy hợp đồng trong vòng 14 ngày (Widerrufsrecht) đối với hợp đồng đăng ký online hoặc qua điện thoại",
    de: "Ich mache von meinem gesetzlichen Widerrufsrecht Gebrauch und widerrufe den online abgeschlossenen Vertrag fristgerecht innerhalb von vierzehn Tagen.",
    de_phonetic: "Ích ma-khơ phôn mai-nầm gơ-zét-s-li-khần Vi-đờ-rúp-s-rếch-t Gơ-brau-kh un vi-đờ-ru-phơ đen on-lai áp-gơ-sh-lót-sơ-nần Phe-trác phrít-st-gơ-rếch-t in-nờ-háp phôn phia-tsên Ta-gần.",
    de_register: {
      du: "Ich mache von meinem vierzehntägigen Widerrufsrecht Gebrauch und trete vom Online-Vertrag zurück.",
      sie: "Ich mache von meinem gesetzlichen Widerrufsrecht Gebrauch und widerrufe den online abgeschlossenen Vertrag fristgerecht innerhalb von vierzehn Tagen."
    },
    en: "I am exercising my statutory right of withdrawal and canceling the contract concluded online within the fourteen-day deadline.",
    vi: "Tôi xin thực hiện quyền hủy hợp đồng theo luật định và hủy hợp đồng đã ký trực tuyến này đúng hạn trong vòng 14 ngày.",
    reply: {
      de: "Hiermit bestätigen wir den fristgerechten Eingang Ihres Widerrufs. Bereits geleistete Zahlungen erstatten wir Ihnen innerhalb von einigen Werktagen zurück.",
      en: "We hereby confirm timely receipt of your withdrawal. Any payments already made will be refunded to you within a few business days.",
      vi: "Chúng tôi xác nhận đã nhận được yêu cầu hủy hợp đồng đúng hạn của bạn. Mọi khoản thanh toán đã thực hiện sẽ được hoàn trả lại cho bạn trong vài ngày làm việc."
    },
    tip: "Phân biệt cực kỳ quan trọng ở Đức: 'Widerruf' (rút lại/hủy bỏ hợp đồng trong vòng 14 ngày đầu tiên khi mua hàng/ký hợp đồng online hoặc qua điện thoại - không cần nêu lý do, hủy ngay lập tức) KHÁC VỚI 'Kündigung' (chấm dứt hợp đồng sau khi đã hết hạn cam kết 12-24 tháng)!"
  },
  {
    id: "t3_adm_17",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Thuốc trong đơn không có sẵn tại hiệu thuốc (Apotheke), hỏi dược sĩ xem có đặt hàng về kịp trong chiều nay để quay lại lấy không",
    de: "Haben Sie das Medikament aktuell vorrätig, oder können Sie es beim Großhandel bestellen, sodass ich es heute Nachmittag abholen kann?",
    de_phonetic: "Ha-bần Zi đát Mê-đi-ca-men-t ác-tu-en phoa-rê-tích, ô-đờ cơn-nần Zi ét baim Grốt-s-han-đần bơ-sh-ten-lần, zô-đát ích ét hoi-tơ Nákh-mít-tác áp-hô-lần can?",
    de_register: {
      du: "Habt ihr das Medikament da, oder könnt ihr es bis heute Nachmittag bestellen?",
      sie: "Haben Sie das Medikament aktuell vorrätig, oder können Sie es beim Großhandel bestellen, sodass ich es heute Nachmittag abholen kann?"
    },
    en: "Do you currently have this medication in stock, or can you order it from the wholesaler so I can pick it up this afternoon?",
    vi: "Hiệu thuốc mình hiện có sẵn thuốc này không ạ, hay anh/chị có thể đặt từ kho tổng về để chiều nay tôi ghé lấy được không?",
    reply: {
      de: "Vorrätig haben wir es leider gerade nicht, aber wenn ich es jetzt sofort bestelle, wird es um fünfzehn Uhr mit der Mittagslieferung geliefert. Hier ist Ihr Abholschein!",
      en: "Unfortunately we don't have it in stock right now, but if I order it immediately, it'll arrive with the afternoon delivery at three o'clock. Here is your pickup slip!",
      vi: "Tiếc là hiện tại chúng tôi đang hết sẵn tại quầy, nhưng nếu tôi đặt ngay bây giờ thì 3 giờ chiều hàng sẽ về theo chuyến giao buổi trưa. Đây là phiếu hẹn lấy thuốc của bạn nhé!"
    },
    tip: "Các hiệu thuốc (Apotheke) ở Đức có mạng lưới giao hàng dược phẩm cực nhanh: nếu thuốc không có sẵn ('nicht vorrätig'), bạn đặt buổi sáng thì đúng 15h–16h chiều cùng ngày quay lại với tờ 'Abholschein' là đã có thuốc!"
  },
  {
    id: "t3_adm_18",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Xin phép chủ nhà cho thuê lại phòng ngắn hạn (Untervermietung / Zwischenmiete) trong thời gian đi thực tập ở thành phố khác",
    de: "Da ich für ein halbes Jahr ein Praktikum in München mache, wollte ich Sie um Erlaubnis bitten, mein Zimmer in dieser Zeit zur Zwischenmiete unterzuvermieten.",
    de_phonetic: "Đa ích phuya ain han-bớt Gia ain Prác-ti-cum in Muyn-khần ma-khơ, von-tơ ích Zi um E-laup-nít bít-tần, mai Tsim-mờ in đi-zờ Tsai-t tsua Tsvi-shần-mi-tơ un-tờ-tsu-phe-mi-tần.",
    de_register: {
      du: "Ich bin für sechs Monate zum Praktikum in München — wäre es für dich okay, wenn ich mein Zimmer in der Zeit untervermiete?",
      sie: "Da ich für ein halbes Jahr ein Praktikum in München mache, wollte ich Sie um Erlaubnis bitten, mein Zimmer in dieser Zeit zur Zwischenmiete unterzuvermieten."
    },
    en: "Since I'm doing an internship in Munich for six months, I wanted to ask for your permission to sublet my room temporarily during that time.",
    vi: "Vì tôi sắp đi thực tập ở München trong vòng nửa năm, tôi muốn xin phép ông/bà cho tôi được cho thuê lại phòng ngắn hạn trong khoảng thời gian đó.",
    reply: {
      de: "Grundsätzlich habe ich nichts dagegen. Schicken Sie mir bitte vorab die Kontaktdaten und eine Ausweiskopie der Person, damit ich Ihnen die schriftliche Zustimmung geben kann.",
      en: "In principle, I have no objection. Please send me the person's contact details and a copy of their ID beforehand so I can give you written approval.",
      vi: "Về nguyên tắc tôi không phản đối. Bạn vui lòng gửi trước cho tôi thông tin liên hệ và bản sao giấy tờ tùy thân của người thuê lại để tôi cấp giấy đồng ý bằng văn bản nhé."
    },
    tip: "Theo luật Đức (§ 553 BGB), nếu bạn có lý do chính đáng (đi thực tập, trao đổi học tập, công tác xa), chủ nhà hầu như phải đồng ý cho bạn 'untervermieten' (cho thuê lại ngắn hạn - Zwischenmiete), NHƯNG bạn bắt buộc phải xin phép chủ nhà bằng văn bản trước khi giao chìa khóa!"
  },
  {
    id: "t3_adm_19",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Gọi hoặc đến Phòng đồ thất lạc (Fundbüro) của thành phố hoặc nhà ga để hỏi về chùm chìa khóa hay ba lô bỏ quên trên tàu",
    de: "Ich habe gestern Abend meinen schwarzen Rucksack in der S-Bahn liegen lassen — wurde bei Ihnen im Fundbüro zufällig schon etwas Derartiges abgegeben?",
    de_phonetic: "Ích ha-bơ gét-stần A-bần mai-nần sh-va-tsần Rúc-zắc in đe Ét-s-Ban li-gần lát-sần — vua-đơ bai I-nần im Phun-t-buy-rô tsu-phen-lích shôn ét-vát Đe-a-ti-gớt áp-gơ-gê-bần?",
    de_register: {
      du: "Ich habe gestern meinen schwarzen Rucksack in der S-Bahn vergessen — hat den zufällig jemand bei euch abgegeben?",
      sie: "Ich habe gestern Abend meinen schwarzen Rucksack in der S-Bahn liegen lassen — wurde bei Ihnen im Fundbüro zufällig schon etwas Derartiges abgegeben?"
    },
    en: "I left my black backpack on the S-Bahn yesterday evening — has anything like that happened to be handed in at your lost and found office yet?",
    vi: "Tối qua tôi có để quên chiếc ba lô màu đen trên tàu S-Bahn — không biết ở Phòng đồ thất lạc của mình đã có ai tình cờ mang nộp lại món đồ nào như vậy chưa ạ?",
    reply: {
      de: "Die Fundsachen aus den Zügen werden meistens erst am nächsten Werktag eingeliefert. Füllen Sie am besten online eine Verlustanzeige mit einer genauen Beschreibung aus.",
      en: "Lost property from the trains is usually only brought in on the next business day. It's best to fill out a lost item report online with an exact description.",
      vi: "Đồ thất lạc thu gom từ các chuyến tàu thường phải sang ngày làm việc hôm sau mới được chuyển về kho. Tốt nhất bạn hãy điền tờ khai báo mất đồ (Verlustanzeige) online kèm mô tả chi tiết nhé."
    },
    tip: "Người Đức rất có ý thức nộp đồ nhặt được vào 'Fundbüro' (của Rathaus thành phố hoặc của Deutsche Bahn / BVG). Cấu trúc 'etwas liegen lassen' (bỏ quên cái gì ở đâu) tự nhiên hơn nhiều so với 'vergessen' khi nói về hành lý, ô hay chìa khóa!"
  },
  {
    id: "t3_adm_20",
    level: "B2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 5,
    context: "Thảo luận về việc khai thuế thu nhập hàng năm (Steuererklärung) để khấu trừ thuế cho những ngày làm việc tại nhà (Homeoffice-Pauschale) và thiết bị làm việc",
    de: "Hast du deine Steuererklärung für letztes Jahr schon gemacht? Du kannst die Homeoffice-Pauschale und deinen neuen Laptop doch komplett als Werbungskosten von der Steuer absetzen!",
    de_phonetic: "Hát-st đu đai-nơ Sh-toi-ờ-e-clê-rung phuya lét-s-tớt Gia shôn gơ-mákh-t? Đu can-st đi Hôm-óp-phít-s-Pau-sha-lơ un đai-nần noi-ần Láp-tóp đốkh com-plét an-s Ve-bungs-cốt-stần phôn đe Sh-toi-ờ áp-zét-sần!",
    de_register: {
      du: "Hast du deine Steuererklärung für letztes Jahr schon gemacht? Du kannst die Homeoffice-Pauschale und deinen neuen Laptop doch komplett als Werbungskosten von der Steuer absetzen!",
      sie: "Haben Sie Ihre Steuererklärung für das vergangene Jahr bereits eingereicht? Sie können die Homeoffice-Pauschale sowie Ihren Laptop als Werbungskosten steuerlich geltend machen."
    },
    en: "Have you done your tax return for last year yet? You can deduct the home office allowance and your new laptop in full as work-related expenses!",
    vi: "Bạn đã làm quyết toán thuế cho năm ngoái chưa? Bạn hoàn toàn có thể kê khai khoản phụ cấp làm việc tại nhà (Homeoffice-Pauschale) và chiếc laptop mới làm chi phí nghề nghiệp để được khấu trừ thuế đấy!",
    reply: {
      de: "Stimmt, da setze ich mich am Wochenende endlich mal mit einer Steuer-App dran! Letztes Jahr habe ich fast achthundert Euro vom Finanzamt zurückbekommen.",
      en: "True, I'll finally sit down with a tax app this weekend! Last year I got almost eight hundred euros back from the tax office.",
      vi: "Đúng ha, cuối tuần này mình phải ngồi khai trên app tính thuế mới được! Năm ngoái mình được Sở thuế hoàn lại gần 800 Euro liền."
    },
    tip: "Cụm từ 'etwas von der Steuer absetzen' (khấu trừ cái gì vào thuế) là câu cửa miệng của người đi làm ở Đức. Kể cả khi không bắt buộc phải nộp Steuererklärung (Steuerklasse 1), người đi làm ở Đức trung bình được hoàn lại (Steuerrückerstattung) từ 800–1.100€/năm nhờ khai chi phí đi lại (Pendlerpauschale), Homeoffice-Pauschale và đồ dùng công việc (Werbungskosten)!"
  },
  {
    id: "t3_adm_21",
    level: "A2",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Mang xe đạp ra tiệm sửa xe (Fahrradwerkstatt) vì bị thủng lốp sau (Platten am Hinterrad) và phanh bị mòn",
    de: "Ich habe leider einen Platten am Hinterrad, und die Vorderbremse zieht auch nicht mehr richtig. Könnten Sie den Schlauch wechseln und die Bremsen neu einstellen?",
    de_phonetic: "Ích ha-bơ lai-đờ ai-nần Plát-tần am Hin-tờ-rát, un đi Phoa-đờ-brem-zơ tsít au-kh ních mea rích-tích. Cơn-tần Zi đen Sh-lau-kh vếch-sần un đi Brem-zần noi ai-sh-ten-lần?",
    de_register: {
      du: "Ich habe einen Platten am Hinterrad und die Bremse zieht kaum noch — könnt ihr den Schlauch tauschen und die Bremse nachziehen?",
      sie: "Ich habe leider einen Platten am Hinterrad, und die Vorderbremse zieht auch nicht mehr richtig. Könnten Sie den Schlauch wechseln und die Bremsen neu einstellen?"
    },
    en: "Unfortunately I have a flat rear tire, and the front brake isn't gripping properly anymore either. Could you replace the inner tube and readjust the brakes?",
    vi: "Tiếc quá xe tôi bị thủng lốp bánh sau, mà phanh trước cũng không còn ăn nữa. Anh/chị có thể thay săm xe và chỉnh lại phanh giúp tôi được không ạ?",
    reply: {
      de: "Klar, das kriegen wir schnell hin! Lassen Sie das Rad einfach hier, gegen siebzehn Uhr ist es abholbereit und kostet zusammen rund fünfunddreißig Euro.",
      en: "Sure, we can get that sorted quickly! Just leave the bike here, it'll be ready for pickup around five p.m. and will cost about thirty-five euros in total.",
      vi: "Được chứ, cái này bên tôi xử lý nhanh thôi! Bạn cứ để xe lại đây, tầm 5 giờ chiều là lấy được, tổng chi phí khoảng 35 Euro nhé."
    },
    tip: "Từ vựng đi xe đạp thiết yếu ở Đức: 'einen Platten haben' = bị xịt/thủng lốp; 'der Schlauch' = săm/ruột xe; 'der Mantel / Reifen' = lốp ngoài; 'die Kette ist abgesprungen' = bị tuột xích; 'die Bremse zieht nicht' = phanh không ăn."
  },
  {
    id: "t3_adm_22",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Xin hãng bảo hiểm y tế (Krankenkasse) cấp giấy chứng nhận thành viên (Mitgliedsbescheinigung) để nộp cho công ty mới hoặc trường đại học",
    de: "Für meinen neuen Arbeitgeber benötige ich eine aktuelle Mitgliedsbescheinigung der Krankenkasse — kann ich mir das Dokument direkt in der App herunterladen?",
    de_phonetic: "Phuya mai-nần noi-ần A-bai-ts-gê-bờ bơ-nơ-ti-gơ ích ai-nơ ác-tu-en-lơ Mít-glít-s-bơ-shai-ni-gung đe Cran-cần-cát-sơ — can ích mia đát Đô-cu-men-t đi-rếch in đe Áp hê-run-tờ-la-đần?",
    de_register: {
      du: "Ich brauche für meinen neuen Job eine Mitgliedsbescheinigung von der Krankenkasse — kann ich die einfach in der App runterladen?",
      sie: "Für meinen neuen Arbeitgeber benötige ich eine aktuelle Mitgliedsbescheinigung der Krankenkasse — kann ich mir das Dokument direkt in der App herunterladen?"
    },
    en: "I need a current membership certificate from my health insurance for my new employer — can I download that document directly in the app?",
    vi: "Tôi cần giấy xác nhận thành viên bảo hiểm y tế hiện tại để nộp cho công ty mới — tôi có thể tải tài liệu đó trực tiếp ngay trên ứng dụng điện thoại được không ạ?",
    reply: {
      de: "Ja, unter dem Menüpunkt Bescheinigungen können Sie sich das PDF sofort herunterladen. Zusätzlich melden wir Ihre Versicherung auch elektronisch an Ihren Arbeitgeber.",
      en: "Yes, under the certificates menu item you can download the PDF immediately. In addition, we also report your insurance electronically to your employer.",
      vi: "Vâng, trong mục Giấy chứng nhận (Bescheinigungen) trên app, bạn có thể tải file PDF về ngay lập tức. Ngoài ra chúng tôi cũng sẽ gửi xác nhận điện tử trực tiếp cho công ty của bạn."
    },
    tip: "Khi bắt đầu công việc mới hoặc nhập học đại học ở Đức, người ta KHÔNG nhận ảnh chụp mặt thẻ bảo hiểm y tế, mà luôn yêu cầu tờ 'Mitgliedsbescheinigung der Krankenkasse' (Giấy chứng nhận đang tham gia bảo hiểm y tế). Trên app của TK, AOK hay Barmer chỉ mất 10 giây để tải file PDF này!"
  },
  {
    id: "t3_adm_23",
    level: "C1",
    category: "admin",
    patternType: "frame",
    frequencyScore: 4,
    context: "Gửi thông báo chính thức cho chủ nhà hoặc ban quản lý (Hausverwaltung) về tình trạng ẩm mốc trong phòng tắm (Schimmelbildung) và yêu cầu xử lý trong thời hạn hợp lý",
    de: "Trotz regelmäßigen Stoßlüftens hat sich im Badezimmer an der Außenwand leider Schimmel gebildet, weshalb ich diesen Mangel hiermit anzeige und um fachgerechte Beseitigung bis zum Monatsende bitte.",
    de_phonetic: "Trót-s rê-gần-mê-si-gần Sh-tốt-s-luýp-tần-s hát zích im Ba-đơ-tsim-mờ an đe Au-sần-van-t lai-đờ Shim-mần gơ-bin-đớt, vét-s-háp ích đi-zần Mang-ần hia-mít an-tsai-gơ un um phákh-gơ-rếch-tơ Bơ-zai-ti-gung bít tsum Mô-nát-s-en-đơ bít-tơ.",
    de_register: {
      du: "Obwohl ich immer gut stoßlüfte, hat sich im Bad an der Außenwand leider Schimmel gebildet — könntest du dir das zeitnah anschauen und beheben lassen?",
      sie: "Trotz regelmäßigen Stoßlüftens hat sich im Badezimmer an der Außenwand leider Schimmel gebildet, weshalb ich diesen Mangel hiermit anzeige und um fachgerechte Beseitigung bis zum Monatsende bitte."
    },
    en: "Despite regular airing out, mold has unfortunately formed on the exterior wall in the bathroom, which is why I am hereby reporting this defect and requesting professional remediation by the end of the month.",
    vi: "Dù tôi vẫn mở toang cửa thông gió định kỳ nhưng trên bức tường giáp bên ngoài của phòng tắm không may đã xuất hiện nấm mốc, vì vậy tôi xin chính thức thông báo lỗi hư hại này và đề nghị ban quản lý cho xử lý đúng kỹ thuật trước cuối tháng.",
    reply: {
      de: "Vielen Dank für die rechtzeitige Meldung! Ich beauftrage sofort eine Fachfirma, die sich diese Woche bei Ihnen meldet, um die Feuchtigkeit in der Wand zu messen.",
      en: "Thank you for reporting this promptly! I will immediately commission a specialist company to contact you this week to measure the moisture level in the wall.",
      vi: "Cảm ơn bạn đã báo kịp thời! Tôi sẽ gọi ngay đơn vị chuyên môn liên hệ với bạn trong tuần này để qua đo độ ẩm trong tường và xử lý."
    },
    tip: "Khi báo mốc tường (Schimmel) cho chủ nhà Đức, họ gần như luôn đổ lỗi cho người thuê không thông gió đúng cách. Vì vậy, cụm 'Trotz regelmäßigen Stoßlüftens und Heizens' (Mặc dù đã mở toang cửa sổ thông gió và bật sưởi đều đặn) là câu thần chú pháp lý bảo vệ người thuê nhà!"
  },
  {
    id: "t3_adm_24",
    level: "B1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Liên hệ ngân hàng hoặc thao tác nâng hạn mức chuyển khoản trong ngày (Überweisungslimit) để chuyển khoản tiền cọc nhà lớn",
    de: "Ich muss heute die Mietkaution überweisen, aber die Summe liegt über meinem täglichen Überweisungslimit. Kann ich das Tageslimit für heute kurzfristig hochsetzen?",
    de_phonetic: "Ích mút hoi-tơ đi Mít-cau-tsi-ôn uy-bờ-vai-zần, a-bờ đi Zum-mơ líc-t uy-bờ mai-nầm tếc-li-khần Uy-bờ-vai-zungs-li-mít. Can ích đát Ta-gớt-s-li-mít phuya hoi-tơ cua-ts-phrít-stích hốkh-zét-sần?",
    de_register: {
      du: "Ich muss heute die Kaution überweisen, komme aber über mein Tageslimit — wo kann ich das Limit kurz hochsetzen?",
      sie: "Ich muss heute die Mietkaution überweisen, aber die Summe liegt über meinem täglichen Überweisungslimit. Kann ich das Tageslimit für heute kurzfristig hochsetzen?"
    },
    en: "I need to transfer my rental deposit today, but the amount exceeds my daily transfer limit. Can I temporarily raise my daily limit for today?",
    vi: "Hôm nay tôi phải chuyển khoản tiền đặt cọc thuê nhà, nhưng số tiền vượt quá hạn mức chuyển khoản trong ngày của tôi. Tôi có thể nâng tạm hạn mức ngày cho hôm nay được không ạ?",
    reply: {
      de: "Ja, das können Sie im Online-Banking unter dem Punkt Sicherheit und Limits direkt selbst anpassen und mit Ihrer TAN-App freigeben.",
      en: "Yes, you can adjust that yourself directly in online banking under Security and Limits and approve it with your TAN app.",
      vi: "Được ạ, bạn có thể tự chỉnh hạn mức này ngay trên Online-Banking trong mục Bảo mật & Hạn mức rồi xác nhận bằng ứng dụng mã TAN của mình nhé."
    },
    tip: "Hầu hết tài khoản ngân hàng ở Đức mặc định đặt 'Tageslimit / Überweisungslimit' khoảng 1.000€–2.500€/ngày để chống lừa đảo. Khi cần chuyển tiền cọc nhà (thường bằng 3 tháng Kaltmiete) hoặc học phí, hãy nhớ vào mục 'Überweisungslimit vorübergehend ändern' (thay đổi hạn mức tạm thời) trước khi chuyển!"
  },
  {
    id: "t3_adm_25",
    level: "C1",
    category: "admin",
    patternType: "routine",
    frequencyScore: 4,
    context: "Xin cấp phiếu lý lịch tư pháp (polizeiliches Führungszeugnis) tại Bürgeramt để bổ sung hồ sơ xin việc",
    de: "Für meine Einstellung benötige ich ein erweitertes polizeiliches Führungszeugnis. Wie lange dauert es ungefähr, bis mir das Dokument aus Bonn per Post zugeschickt wird?",
    de_phonetic: "Phuya mai-nơ Ai-sh-ten-lung bơ-nơ-ti-gơ ích ain e-vai-tờ-tớt pô-li-tsai-li-khớt Phuya-rungs-tsoig-nít. Vi lang-ơ đau-ờ-t ét un-gơ-phe, bít mia đát Đô-cu-men-t aus Bon pe Pốt tsu-gơ-shíc-t vía-t?",
    de_register: {
      du: "Ich brauche für den neuen Job ein polizeiliches Führungszeugnis — weißt du, wie lange es dauert, bis das per Post ankommt?",
      sie: "Für meine Einstellung benötige ich ein erweitertes polizeiliches Führungszeugnis. Wie lange dauert es ungefähr, bis mir das Dokument aus Bonn per Post zugeschickt wird?"
    },
    en: "For my hiring process, I need an extended police clearance certificate. Roughly how long does it take for the document to be sent to me by mail from Bonn?",
    vi: "Để hoàn tất thủ tục tuyển dụng, tôi cần xin một Phiếu lý lịch tư pháp mở rộng. Khoảng bao lâu thì tài liệu này sẽ được gửi từ Bonn về cho tôi qua đường bưu điện ạ?",
    reply: {
      de: "Die Gebühr beträgt dreizehn Euro, und erfahrungsgemäß haben Sie das Führungszeugnis nach etwa ein bis zwei Wochen bei sich im Briefkasten.",
      en: "The fee is thirteen euros, and in our experience you'll have the clearance certificate in your mailbox in about one to two weeks.",
      vi: "Lệ phí là 13 Euro, và theo thông lệ thì sau khoảng 1 đến 2 tuần bạn sẽ nhận được phiếu lý lịch tư pháp trong hòm thư nhà mình."
    },
    tip: "'Polizeiliches Führungszeugnis' (Phiếu lý lịch tư pháp xác nhận không có tiền án) ở Đức do Cơ quan Tư pháp Liên bang (Bundesamt für Justiz) tại Bonn in và gửi qua bưu điện, dù bạn đăng ký tại Bürgeramt địa phương hay đăng ký online bằng thẻ eID!"
  }
];
