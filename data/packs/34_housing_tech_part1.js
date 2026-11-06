// Tier 4 — Complete Life Mastery: Housing, Repairs & Negotiation (Part 1)
// 25 items (t4_hou_01 to t4_hou_25)

module.exports = [
  {
    id: "t4_hou_01",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Hỏi chủ nhà hoặc môi giới khi đi xem nhà (Wohnungsbesichtigung) xem chi phí phụ (Nebenkosten) đã bao gồm những khoản nào",
    de: "Könnten Sie mir bitte sagen, was genau in den monatlichen Nebenkosten enthalten ist, insbesondere ob Heizung und Warmwasser schon dabei sind?",
    de_phonetic: "Kơn-ten zi mia bít-tơ za-gần, vas gơ-nao in đen mô-nát-li-khần Nê-bần-kós-tần ent-hal-tần ist, ins-bơ-zôn-đơ-rơ óp Hai-tsung un Vam-vas-sơ shôn đa-bai zint?",
    de_register: {
      du: "Kannst du mir sagen, was genau in den monatlichen Nebenkosten enthalten ist, vor allem ob Heizung und Warmwasser schon dabei sind?",
      sie: "Könnten Sie mir bitte sagen, was genau in den monatlichen Nebenkosten enthalten ist, insbesondere ob Heizung und Warmwasser schon dabei sind?"
    },
    en: "Could you please tell me what exactly is included in the monthly utility costs, especially whether heating and hot water are already covered?",
    vi: "Anh chị có thể cho tôi biết chính xác những khoản nào đã bao gồm trong chi phí phụ hàng tháng không, đặc biệt là tiền sưởi và nước nóng đã tính trong đó chưa?",
    reply: {
      de: "Ja, Heizung, Warmwasser, Treppenhausreinigung und der Hausmeisterservice sind in der Vorauszahlung enthalten; nur Strom und Internet melden Sie selbst an.",
      en: "Yes, heating, hot water, stairwell cleaning, and the janitor service are included in the advance payment; you only register electricity and internet yourself.",
      vi: "Vâng, tiền sưởi, nước nóng, vệ sinh cầu thang và dịch vụ quản lý tòa nhà đều đã nằm trong khoản tạm ứng; bạn chỉ cần tự đăng ký điện và internet thôi."
    },
    tip: "Ở Đức, tiền thuê nhà gồm Kaltmiete (tiền nhà trần) + Nebenkosten (chi phí phụ) = Warmmiete. Hãy luôn hỏi rõ xem Heizkosten (sưởi) có nằm trong Nebenkosten chưa, vì nếu dùng sưởi gas riêng (Gasetagenheizung) bạn phải tự ký hợp đồng với công ty năng lượng."
  },
  {
    id: "t4_hou_02",
    level: "B1",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 5,
    context: "Hỏi xem tủ bếp (Einbauküche) thuộc về căn hộ sẵn hay phải mua lại (Ablöse) từ người thuê trước",
    de: "Gehört die Einbauküche fest zur Mietwohnung, oder müsste sie gegen eine Ablöse vom Vormieter übernommen werden?",
    de_phonetic: "Gơ-hơt đi Ain-bao-quy-khơ fést tsua Mít-vô-nung, ô-đơ mứs-tơ zi gê-gần ai-nơ Áp-lơ-zơ fom Foa-mi-tơ uy-bơ-nom-mần vea-đần?",
    de_register: {
      du: "Gehört die Einbauküche fest zur Wohnung, oder müsste ich sie gegen eine Ablöse vom Vormieter übernehmen?",
      sie: "Gehört die Einbauküche fest zur Mietwohnung, oder müsste sie gegen eine Ablöse vom Vormieter übernommen werden?"
    },
    en: "Does the fitted kitchen belong permanently to the rental apartment, or would it have to be taken over from the previous tenant for a buyout fee?",
    vi: "Dàn tủ bếp này thuộc sẵn về căn hộ cho thuê hay tôi phải trả tiền sang nhượng lại từ người thuê trước?",
    reply: {
      de: "Die Küche gehört dem Vermieter und wird ohne zusätzliche Kosten mitvermietet.",
      en: "The kitchen belongs to the landlord and is rented out with the apartment at no extra cost.",
      vi: "Bếp thuộc sở hữu của chủ nhà và được cho thuê kèm theo căn hộ mà không tốn thêm chi phí nào."
    },
    tip: "Khác với nhiều nước, căn hộ cho thuê ở Đức đôi khi không có sẵn bếp. Nếu bếp thuộc về chủ nhà (mitvermietet), chủ nhà phải chịu trách nhiệm sửa chữa khi bếp hỏng; nếu bạn mua lại (Ablöse) từ Vormieter, bếp thuộc về bạn."
  },
  {
    id: "t4_hou_03",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Hỏi về đường truyền internet cáp quang (Glasfaser) hoặc cáp đồng trục trong tòa nhà vì làm việc tại nhà",
    de: "Da ich regelmäßig im Homeoffice arbeite, wollte ich fragen, ob im Haus bereits ein Glasfaser- oder schneller Kabelanschluss liegt.",
    de_phonetic: "Đa íkh rê-gần-mê-xíkh im Hôm-óp-fít a-bai-tơ, vol-tơ íkh fra-gần, óp im Haos bơ-rais ain Glas-fa-zơ ô-đơ shnê-lơ Ka-bần-an-shlút líkt.",
    de_register: {
      du: "Da ich oft im Homeoffice arbeite, wollte ich fragen, ob im Haus schon ein Glasfaser- oder schneller Kabelanschluss liegt.",
      sie: "Da ich regelmäßig im Homeoffice arbeite, wollte ich fragen, ob im Haus bereits ein Glasfaser- oder schneller Kabelanschluss liegt."
    },
    en: "Since I regularly work from home, I wanted to ask whether the building already has a fiber-optic or fast cable connection.",
    vi: "Vì tôi thường xuyên làm việc tại nhà nên muốn hỏi xem trong tòa nhà đã có sẵn đường truyền cáp quang hoặc cáp tốc độ cao chưa.",
    reply: {
      de: "Ja, letztes Jahr wurde Glasfaser bis in die Wohnungen verlegt; Sie können Geschwindigkeiten bis zu einem Gigabit buchen.",
      en: "Yes, fiber-optic cable was laid right into the apartments last year; you can book speeds of up to one gigabit.",
      vi: "Rồi, năm ngoái cáp quang đã được kéo tận vào từng căn hộ; bạn có thể đăng ký tốc độ lên tới một gigabit."
    },
    tip: "Cụm từ 'Glasfaser bis in die Wohnung' (FTTH - Fiber to the Home) đảm bảo tốc độ ổn định nhất. Trước khi ký hợp đồng thuê nhà ở Đức, bạn cũng có thể nhập địa chỉ lên trang Verfügbarkeitsprüfung của các nhà mạng để kiểm tra tốc độ thực tế."
  },
  {
    id: "t4_hou_04",
    level: "B1",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 4,
    context: "Hỏi về độ yên tĩnh của căn hộ và bầu không khí chung của hàng xóm trong tòa nhà (Hausgemeinschaft)",
    de: "Wie ruhig ist es hier im Haus abends, und wie würden Sie die Hausgemeinschaft insgesamt beschreiben?",
    de_phonetic: "Vi ru-íkh ist és hia im Haos a-bần-ts, un vi vưa-đần Zi đi Haos-gơ-main-sháft ins-gơ-zamt bơ-shrai-bần?",
    de_register: {
      du: "Wie ruhig ist es hier im Haus abends, und wie würdest du die Hausgemeinschaft insgesamt beschreiben?",
      sie: "Wie ruhig ist es hier im Haus abends, und wie würden Sie die Hausgemeinschaft insgesamt beschreiben?"
    },
    en: "How quiet is it here in the building in the evenings, and how would you describe the house community overall?",
    vi: "Buổi tối ở trong tòa nhà này có yên tĩnh không, và anh chị đánh giá cộng đồng hàng xóm ở đây nhìn chung thế nào?",
    reply: {
      de: "Es ist sehr angenehm und ruhig; hier wohnen hauptsächlich Berufstätige und junge Familien, die gut miteinander auskommen.",
      en: "It is very pleasant and quiet; mostly working professionals and young families live here, and everyone gets along well.",
      vi: "Ở đây rất dễ chịu và yên tĩnh; đa số cư dân là người đi làm và các gia đình trẻ sống rất hòa thuận với nhau."
    },
    tip: "Câu hỏi về 'Hausgemeinschaft' vừa giúp bạn biết hàng xóm có ồn ào hay khó tính không, vừa tạo ấn tượng với chủ nhà rằng bạn là người lịch sự, coi trọng sự yên tĩnh và hòa đồng."
  },
  {
    id: "t4_hou_05",
    level: "B2",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 5,
    context: "Bày tỏ sự quan tâm mạnh mẽ ngay sau buổi xem nhà và hứa gửi đầy đủ hồ sơ thuê nhà (Bewerbungsmappe) trong ngày",
    de: "Die Wohnung gefällt uns ausgesprochen gut, und wir würden Ihnen noch heute Abend alle erforderlichen Bewerbungsunterlagen per E-Mail zusenden.",
    de_phonetic: "Đi Vô-nung gơ-félt uns aos-gơ-shpró-khần gút, un via vưa-đần I-nần nókh hoi-tơ A-bần al-lơ ea-foa-đơ-li-khần Bơ-vea-bungs-un-tơ-la-gần pea I-Mêu tsu-zen-đần.",
    de_register: {
      du: "Die Wohnung gefällt uns ausgesprochen gut, und wir schicken dir noch heute Abend alle Bewerbungsunterlagen per E-Mail zu.",
      sie: "Die Wohnung gefällt uns ausgesprochen gut, und wir würden Ihnen noch heute Abend alle erforderlichen Bewerbungsunterlagen per E-Mail zusenden."
    },
    en: "We like the apartment tremendously, and we would send you all the required application documents by email later this evening.",
    vi: "Chúng tôi cực kỳ ưng ý căn hộ này và ngay tối nay sẽ gửi đầy đủ mọi hồ sơ đăng ký thuê nhà cần thiết cho anh chị qua email.",
    reply: {
      de: "Das freut mich zu hören! Schicken Sie mir bitte die Selbstauskunft, die Schufa-Auskunft sowie die letzten drei Gehaltsabrechnungen.",
      en: "I'm glad to hear that! Please send me the tenant self-disclosure form, the Schufa credit report, and the last three payslips.",
      vi: "Rất vui khi nghe vậy! Bạn vui lòng gửi cho tôi bản tự khai thông tin người thuê, giấy xác nhận tín dụng Schufa cùng bảng lương ba tháng gần nhất nhé."
    },
    tip: "Tại các thành phố lớn ở Đức, tốc độ gửi bộ hồ sơ thuê nhà (Mieterselbstauskunft, Schufa-BonitätsCheck, 3 Gehaltsnachweise, Mietschuldenfreiheitsbescheinigung) ngay sau khi xem nhà quyết định rất lớn đến cơ hội được chọn."
  },
  {
    id: "t4_hou_06",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Làm rõ thời hạn báo trước khi chấm dứt hợp đồng (Kündigungsfrist) và thời gian thuê tối thiểu (Mindestmietdauer)",
    de: "Gilt im Mietvertrag die gesetzliche Kündigungsfrist von drei Monaten, oder ist am Anfang eine Mindestmietdauer vereinbart?",
    de_phonetic: "Gilt im Mít-fea-trác đi gơ-zét-tsli-khơ Quyn-đi-gungs-fríst fon đrai Mô-na-tần, ô-đơ ist am An-fang ai-nơ Min-đést-mít-đao-ơ fea-ain-bat?",
    de_register: {
      du: "Gilt im Mietvertrag die gesetzliche Kündigungsfrist von drei Monaten, oder ist am Anfang eine Mindestmietdauer vereinbart?",
      sie: "Gilt im Mietvertrag die gesetzliche Kündigungsfrist von drei Monaten, oder ist am Anfang eine Mindestmietdauer vereinbart?"
    },
    en: "Does the statutory notice period of three months apply in the lease agreement, or is a minimum rental period agreed upon at the beginning?",
    vi: "Trong hợp đồng thuê nhà có áp dụng thời hạn báo trước ba tháng theo luật định không, hay ban đầu có quy định thời gian thuê tối thiểu?",
    reply: {
      de: "Im Vertrag ist ein Kündigungsverzicht für die ersten zwölf Monate vorgesehen, danach gilt die reguläre Dreimonatsfrist.",
      en: "The contract provides for a waiver of termination for the first twelve months, after which the regular three-month notice period applies.",
      vi: "Trong hợp đồng có điều khoản cam kết không hủy ngang trong mười hai tháng đầu tiên, sau đó sẽ áp dụng thời hạn báo trước ba tháng như bình thường."
    },
    tip: "Theo luật thuê nhà Đức (BGB § 573c), thời hạn báo hủy hợp đồng tiêu chuẩn của người thuê là 3 tháng (phải gửi bằng văn bản có chữ ký tay trước ngày làm việc thứ 3 của tháng). Tuy nhiên, nhiều hợp đồng cài thêm 'Mindestmietdauer / Kündigungsausschluss' từ 1 đến 2 năm."
  },
  {
    id: "t4_hou_07",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Thương lượng khéo với người thuê trước (Vormieter) xem có thể chuyển nhờ vài thùng đồ vào sớm một ngày không",
    de: "Wäre es für Sie eventuell machbar, dass wir schon einen Tag vor Mietbeginn ein paar Umzugskartons in einem Zimmer abstellen?",
    de_phonetic: "Ve-rơ és fuya Zi ê-ven-tu-êl mákh-ba, đát via shôn ai-nần Tác foa Mít-bơ-gin ain pa Um-tsúks-ka-tôngs in ai-nầm Tsim-mơ áp-shtê-lần?",
    de_register: {
      du: "Wäre es für dich eventuell machbar, dass wir schon einen Tag vor Mietbeginn ein paar Umzugskartons in einem Zimmer abstellen?",
      sie: "Wäre es für Sie eventuell machbar, dass wir schon einen Tag vor Mietbeginn ein paar Umzugskartons in einem Zimmer abstellen?"
    },
    en: "Would it possibly be feasible for you if we stored a few moving boxes in one room a day before the lease starts?",
    vi: "Liệu anh chị có thể tạo điều kiện cho chúng tôi để nhờ vài thùng đồ chuyển nhà vào một phòng trước ngày bắt đầu hợp đồng một hôm được không?",
    reply: {
      de: "Ja klar, meine Möbel sind bis dahin schon raus; wir können uns gern am Vorabend kurz zur Schlüsselübergabe treffen.",
      en: "Sure thing, my furniture will already be out by then; we can gladly meet briefly the evening before to hand over the keys.",
      vi: "Được chứ, lúc đó đồ đạc của tôi đã chuyển đi hết rồi; tối hôm trước đó chúng ta có thể gặp nhau một lát để bàn giao chìa khóa luôn."
    },
    tip: "Dùng Konjunktiv II ('Wäre es ... eventuell machbar') khiến lời đề nghị nghe rất lịch sự, tôn trọng không gian của người thuê cũ và không tạo cảm giác ép buộc."
  },
  {
    id: "t4_hou_08",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Đề nghị ghi rõ các vết xước sàn gỗ hoặc hư hại sẵn có vào biên bản bàn giao nhà (Wohnungsübergabeprotokoll) kèm ảnh chụp",
    de: "Lassen Sie uns diese tiefen Kratzer im Parkett bitte direkt im Übergabeprotokoll vermerken und sicherheitshalber fotografieren.",
    de_phonetic: "Lát-sần Zi uns đi-zơ ti-fần Krát-tsơ im Pa-két bít-tơ đi-rékt im Uy-bơ-ga-bơ-prô-tô-kôl fea-mea-kần un zi-khơ-haits-hal-bơ fô-tô-gra-fi-rần.",
    de_register: {
      du: "Lass uns diese tiefen Kratzer im Parkett bitte direkt im Übergabeprotokoll vermerken und sicherheitshalber fotografieren.",
      sie: "Lassen Sie uns diese tiefen Kratzer im Parkett bitte direkt im Übergabeprotokoll vermerken und sicherheitshalber fotografieren."
    },
    en: "Let's please note these deep scratches in the parquet floor directly in the handover protocol and take photos of them just to be safe.",
    vi: "Chúng ta hãy ghi chú trực tiếp những vết xước sâu trên sàn gỗ này vào biên bản bàn giao nhà và chụp ảnh lại để đảm bảo an toàn nhé.",
    reply: {
      de: "Selbstverständlich, ich trage das hier unter Wohnzimmer ein, und Sie bekommen gleich eine unterschriebene Kopie.",
      en: "Of course, I will enter that right here under living room, and you will get a signed copy right away.",
      vi: "Tất nhiên rồi, tôi sẽ ghi mục đó vào phần phòng khách ở đây, và bạn sẽ nhận ngay một bản sao có chữ ký."
    },
    tip: "Biên bản bàn giao (Übergabeprotokoll) là bằng chứng pháp lý bảo vệ tiền đặt cọc (Mietkaution - thường bằng 3 tháng Kaltmiete) của bạn khi trả nhà sau này. Mọi vết xước sàn, mốc tường hay nứt kính có sẵn đều phải được ghi vào."
  },
  {
    id: "t4_hou_09",
    level: "B1",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 5,
    context: "Ghi chép và chụp ảnh chỉ số công tơ điện, gas và nước (Zählerstände) khi nhận bàn giao chìa khóa",
    de: "Wir sollten jetzt noch gemeinsam die Zählerstände für Strom, Gas und Wasser ablesen und im Protokoll festhalten.",
    de_phonetic: "Via zôl-tần yết-tst nókh gơ-main-zam đi Tsê-lơ-shtên-đơ fuya Shtrôm, Gas un Vas-sơ áp-lê-zần un im Prô-tô-kôl fést-hal-tần.",
    de_register: {
      du: "Wir sollten jetzt noch gemeinsam die Zählerstände für Strom, Gas und Wasser ablesen und im Protokoll festhalten.",
      sie: "Wir sollten jetzt noch gemeinsam die Zählerstände für Strom, Gas und Wasser ablesen und im Protokoll festhalten."
    },
    en: "We should now read the meter readings for electricity, gas, and water together and record them in the protocol.",
    vi: "Bây giờ chúng ta nên cùng nhau đọc chỉ số công tơ điện, gas và nước rồi ghi rõ vào biên bản bàn giao.",
    reply: {
      de: "Genau, der Stromzähler ist unten im Keller, und die Wasseruhren befinden sich direkt hier im Badezimmer.",
      en: "Exactly, the electricity meter is downstairs in the basement, and the water meters are located right here in the bathroom.",
      vi: "Đúng vậy, công tơ điện nằm ở dưới tầng hầm, còn đồng hồ nước thì ở ngay trong phòng tắm này."
    },
    tip: "Khi chụp ảnh Stromzähler (công tơ điện), hãy chụp rõ cả Zählernummer (mã số công tơ) lẫn Zählerstand (chỉ số kWh). Bạn sẽ cần hai con số này để đăng ký hợp đồng điện mới trong vòng vài tuần sau khi chuyển vào."
  },
  {
    id: "t4_hou_10",
    level: "A2",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 4,
    context: "Hỏi chính xác số lượng chìa khóa căn hộ, tầng hầm (Kellerabteil) và hòm thư được bàn giao",
    de: "Wie viele Schlüssel für die Haustür, die Wohnung, den Briefkasten und das Kellerabteil übergeben Sie mir heute insgesamt?",
    de_phonetic: "Vi fi-lơ Shluýt-sần fuya đi Haos-tuya, đi Vô-nung, đen Bríf-kas-tần un đát Kê-lơ-áp-tai uy-bơ-gê-bần Zi mia hoi-tơ ins-gơ-zamt?",
    de_register: {
      du: "Wie viele Schlüssel für die Haustür, die Wohnung, den Briefkasten und das Kellerabteil übergibst du mir heute insgesamt?",
      sie: "Wie viele Schlüssel für die Haustür, die Wohnung, den Briefkasten und das Kellerabteil übergeben Sie mir heute insgesamt?"
    },
    en: "How many keys in total for the front door, the apartment, the mailbox, and the cellar compartment are you handing over to me today?",
    vi: "Hôm nay anh chị bàn giao cho tôi tổng cộng bao nhiêu chìa khóa cửa chính tòa nhà, cửa căn hộ, hòm thư và kho tầng hầm?",
    reply: {
      de: "Sie erhalten drei Wohnungsschlüssel, die gleichzeitig für die Haustür passen, sowie jeweils zwei Briefkasten- und Kellerschlüssel.",
      en: "You will receive three apartment keys that also fit the front door, as well as two mailbox keys and two cellar keys.",
      vi: "Bạn sẽ nhận ba chìa khóa căn hộ dùng chung được cho cả cửa chính tòa nhà, cùng với hai chìa khóa hòm thư và hai chìa khóa tầng hầm."
    },
    tip: "Banyak tòa nhà ở Đức dùng hệ thống Schließanlage (một chìa mở được cả cửa chung cư lẫn cửa căn hộ). Nếu làm mất chìa khóa thuộc Schließanlage, chi phí thay ổ khóa có thể lên tới hàng nghìn Euro — vì vậy bảo hiểm trách nhiệm dân sự (Privathaftpflichtversicherung) có mục 'Schlüsselverlust' là cực kỳ quan trọng!"
  },
  {
    id: "t4_hou_11",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Xin cấp biển cấm đỗ xe tạm thời (Halteverbotszone) trước cửa nhà cho xe tải chuyển nhà (Umzugswagen)",
    de: "Ich möchte für unseren Umzug am kommenden Samstag eine temporäre Halteverbotszone vor dem Haus beantragen, damit der Umzugswagen direkt vor der Tür parken kann.",
    de_phonetic: "Íkh mớkh-tơ fuya un-zơ-rần Um-tsúc am kom-mần-đần Zam-stác ai-nơ tem-pô-re-rơ Hal-tơ-fea-bốt-tsô-nơ foa đem Haos bơ-an-tra-gần, đa-mít đea Um-tsúks-va-gần đi-rékt foa đea Tuya pa-kần kan.",
    de_register: {
      du: "Ich möchte für unseren Umzug am kommenden Samstag eine temporäre Halteverbotszone vor dem Haus beantragen, damit der Umzugswagen direkt vor der Tür parken kann.",
      sie: "Ich möchte für unseren Umzug am kommenden Samstag eine temporäre Halteverbotszone vor dem Haus beantragen, damit der Umzugswagen direkt vor der Tür parken kann."
    },
    en: "I would like to apply for a temporary no-parking zone in front of the building for our move this coming Saturday so the moving truck can park right outside the door.",
    vi: "Tôi muốn xin cấp khu vực cấm đỗ xe tạm thời trước tòa nhà cho buổi chuyển nhà vào thứ Bảy tới để xe tải chuyển nhà có thể đỗ ngay trước cửa.",
    reply: {
      de: "Den Antrag müssen Sie mindestens zwei Wochen im Voraus beim Straßenverkehrsamt stellen und die Schilder vier Tage vorher aufstellen.",
      en: "You must submit the application to the road traffic office at least two weeks in advance and put up the signs four days beforehand.",
      vi: "Bạn phải nộp đơn tại Sở Giao thông đường bộ ít nhất trước hai tuần và đặt biển báo trước đó bốn ngày."
    },
    tip: "Ở Đức, việc tự ý lấy ghế hay thùng carton ra giữ chỗ đỗ xe trên phố là bất hợp pháp và người khác có quyền dẹp đi để đỗ. Muốn giữ chỗ hợp pháp cho xe tải chuyển nhà, bạn phải xin 'Halteverbotszone' tại Ordnungsamt/Straßenverkehrsamt."
  },
  {
    id: "t4_hou_12",
    level: "B1",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 5,
    context: "Dán thông báo lịch sự ở sảnh cầu thang (Hausflur) xin lỗi hàng xóm trước về tiếng ồn khi chuyển nhà và khoan tường",
    de: "Liebe Nachbarn, wegen unseres Einzugs am Samstag kann es im Treppenhaus etwas lauter werden; wir bitten um Ihr Verständnis.",
    de_phonetic: "Li-bơ Nákh-ban, vê-gần un-zơ-rớt Ain-tsúks am Zam-stác kan és im Trép-pần-haos ét-vát lao-tơ vea-đần; via bít-tần um Ia Fea-shtênt-nít.",
    de_register: {
      du: "Liebe Nachbarn, wegen unseres Einzugs am Samstag kann es im Treppenhaus etwas lauter werden; wir bitten um euer Verständnis.",
      sie: "Liebe Nachbarn, wegen unseres Einzugs am Samstag kann es im Treppenhaus etwas lauter werden; wir bitten um Ihr Verständnis."
    },
    en: "Dear neighbors, due to our move-in on Saturday it may get a bit louder in the stairwell; we ask for your understanding.",
    vi: "Thân gửi các hàng xóm, do chúng tôi chuyển nhà vào thứ Bảy nên khu vực cầu thang có thể hơi ồn một chút; rất mong mọi người thông cảm.",
    reply: {
      de: "Herzlich willkommen im Haus, und danke, dass Sie vorher Bescheid gegeben haben!",
      en: "A warm welcome to the building, and thank you for letting us know beforehand!",
      vi: "Chào mừng gia đình chuyển đến tòa nhà nhé, và cảm ơn bạn đã thông báo trước!"
    },
    tip: "Một tờ giấy nhắn nhỏ (Aushang im Hausflur) khi chuyển nhà, sửa nhà hoặc tổ chức tiệc sinh nhật là nét văn hóa ứng xử cực kỳ được đánh giá cao ở Đức, giúp hóa giải hầu hết mọi phàn nàn về tiếng ồn."
  },
  {
    id: "t4_hou_13",
    level: "A2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Gọi điện báo cho quản lý tòa nhà (Hausmeister) vì khóa cửa tầng hầm hoặc đèn cầu thang bị hỏng",
    de: "Guten Tag, hier spricht Nguyen aus dem zweiten Stock: Im Treppenhaus ist das Licht ausgefallen, und das Schloss zur Kellertür klemmt.",
    de_phonetic: "Gu-tần Tác, hia shpríkht Nguyên aos đem tsvai-tần Shtóc: Im Trép-pần-haos ist đát Líkht aos-gơ-fa-lần, un đát Shlós tsua Kê-lơ-tuya klemt.",
    de_register: {
      du: "Hallo, hier ist Nguyen aus dem zweiten Stock: Im Treppenhaus ist das Licht ausgefallen, und das Schloss zur Kellertür klemmt.",
      sie: "Guten Tag, hier spricht Nguyen aus dem zweiten Stock: Im Treppenhaus ist das Licht ausgefallen, und das Schloss zur Kellertür klemmt."
    },
    en: "Hello, this is Nguyen from the second floor speaking: the light in the stairwell has gone out, and the lock on the cellar door is jammed.",
    vi: "Xin chào, tôi là Nguyễn ở tầng hai gọi đây ạ: đèn ở cầu thang bộ đang bị cháy, và ổ khóa cửa xuống tầng hầm bị kẹt.",
    reply: {
      de: "Danke für den Hinweis! Ich komme heute Nachmittag vorbei und tausche die Glühbirne sowie den Schließzylinder aus.",
      en: "Thanks for the heads-up! I'll stop by this afternoon and replace the light bulb as well as the lock cylinder.",
      vi: "Cảm ơn bạn đã báo nhé! Chiều nay tôi sẽ ghé qua thay bóng đèn cũng như lõi khóa mới."
    },
    tip: "Động từ 'klemmen' (bị kẹt, rít - dùng cho cửa, khóa, ngăn kéo, cửa cuốn) và 'ausfallen' (ngừng hoạt động, mất điện/đèn/sưởi) là hai từ vựng cốt lõi khi báo hỏng hóc với Hausmeister."
  },
  {
    id: "t4_hou_14",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Hẹn lịch với thợ sửa chữa (Handwerker) và nhờ họ gọi điện trước 30 phút khi sắp tới",
    de: "Passt es bei Ihnen am Donnerstagvormittag, und könnte der Techniker mich bitte eine halbe Stunde vor seiner Ankunft kurz anrufen?",
    de_phonetic: "Pást és bai I-nần am Đon-nơ-stác-foa-mít-tác, un kơn-tơ đea Tékh-ni-kơ míkh bít-tơ ai-nơ hal-bơ Shtun-đơ foa zai-nơ An-kunft kuats an-ru-fần?",
    de_register: {
      du: "Passt es bei dir am Donnerstagvormittag, und kannst du mich bitte eine halbe Stunde vor deiner Ankunft kurz anrufen?",
      sie: "Passt es bei Ihnen am Donnerstagvormittag, und könnte der Techniker mich bitte eine halbe Stunde vor seiner Ankunft kurz anrufen?"
    },
    en: "Does Thursday morning work for you, and could the technician please give me a quick call half an hour before arriving?",
    vi: "Sáng thứ Năm bên anh chị có tiện không, và kỹ thuật viên có thể vui lòng gọi cho tôi trước khi đến nửa tiếng được không ạ?",
    reply: {
      de: "Donnerstag zwischen acht und elf Uhr ist eingetragen, und unser Monteur meldet sich dreißig Minuten vorher telefonisch bei Ihnen.",
      en: "Thursday between eight and eleven o'clock is booked, and our technician will contact you by phone thirty minutes beforehand.",
      vi: "Lịch sáng thứ Năm từ tám đến mười một giờ đã được ghi nhận, và thợ lắp đặt của chúng tôi sẽ gọi điện cho bạn trước ba mươi phút."
    },
    tip: "Thợ sửa chữa ở Đức thường hẹn theo khung giờ rộng (Zeitfenster, ví dụ 8:00–12:00). Nhờ họ gọi trước 30 phút giúp bạn chủ động công việc và tránh bị tính phí 'Leerfahrt' (phí thợ đến mà không có ai ở nhà)."
  },
  {
    id: "t4_hou_15",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Yêu cầu thợ sửa chữa cung cấp bảng báo giá bằng văn bản (Kostenvoranschlag) trước khi tiến hành sửa chữa lớn",
    de: "Könnten Sie mir bitte vorab einen schriftlichen Kostenvoranschlag inklusive Anfahrtskosten und Mehrwertsteuer erstellen, bevor Sie mit der Reparatur beginnen?",
    de_phonetic: "Kơn-tần Zi mia bít-tơ foa-áp ai-nần shríft-li-khần Kós-tần-foa-an-shlác in-klu-zi-vơ An-fats-kós-tần un Mea-veat-shtoi-ơ ea-shtê-lần, bơ-foa Zi mít đea Rê-pa-ra-tua bơ-gin-nần?",
    de_register: {
      du: "Kannst du mir bitte vorab einen schriftlichen Kostenvoranschlag inklusive Anfahrt und Mehrwertsteuer machen, bevor du mit der Reparatur anfängst?",
      sie: "Könnten Sie mir bitte vorab einen schriftlichen Kostenvoranschlag inklusive Anfahrtskosten und Mehrwertsteuer erstellen, bevor Sie mit der Reparatur beginnen?"
    },
    en: "Could you please prepare a written cost estimate including travel costs and VAT beforehand, before you start the repair?",
    vi: "Anh chị vui lòng lập giúp tôi bảng báo giá bằng văn bản bao gồm cả phí đi lại và thuế giá trị gia tăng trước khi bắt đầu sửa chữa được không?",
    reply: {
      de: "Natürlich, ich schaue mir den Schaden heute kurz an und schicke Ihnen das Angebot bis morgen früh per E-Mail zu.",
      en: "Of course, I'll take a quick look at the damage today and send you the quote by email by tomorrow morning.",
      vi: "Tất nhiên rồi, hôm nay tôi sẽ xem qua chỗ hỏng một lát rồi gửi báo giá qua email cho bạn chậm nhất vào sáng mai."
    },
    tip: "Khi thuê Handwerker tại Đức, hãy luôn hỏi rõ 'Anfahrtspauschale' (phí đi lại) và yêu cầu 'Kostenvoranschlag' để tránh hóa đơn đội giá bất ngờ, hoặc để gửi cho chủ nhà / công ty bảo hiểm duyệt trước."
  },
  {
    id: "t4_hou_16",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Giải thích với thợ kỹ thuật rằng lò sưởi trong phòng vẫn lạnh ngắt dù đã xả khí (entlüften)",
    de: "Der Heizkörper im Schlafzimmer bleibt komplett kalt, obwohl ich ihn schon zweimal entlüftet habe und das Thermostat voll aufgedreht ist.",
    de_phonetic: "Đea Haits-kơ-pơ im Shláp-tsim-mơ blaipt kom-plét kalt, óp-vôl íkh in shôn tsvai-mal ent-luýf-tợt ha-bơ un đát Tea-môs-tát fôl aof-gơ-đrêt ist.",
    de_register: {
      du: "Der Heizkörper im Schlafzimmer bleibt komplett kalt, obwohl ich ihn schon zweimal entlüftet habe und das Thermostat voll aufgedreht ist.",
      sie: "Der Heizkörper im Schlafzimmer bleibt komplett kalt, obwohl ich ihn schon zweimal entlüftet habe und das Thermostat voll aufgedreht ist."
    },
    en: "The radiator in the bedroom stays completely cold, even though I have bled it twice already and the thermostat is turned all the way up.",
    vi: "Lò sưởi trong phòng ngủ vẫn lạnh ngắt hoàn toàn, mặc dù tôi đã xả e khí hai lần rồi và van nhiệt độ đã vặn lên mức tối đa.",
    reply: {
      de: "Dann klemmt sehr wahrscheinlich der kleine Stift im Thermostatventil; das habe ich in fünf Minuten wieder gängig gemacht.",
      en: "Then the little pin inside the thermostat valve is very likely stuck; I'll have that moving smoothly again in five minutes.",
      vi: "Vậy thì rất có thể chốt nhỏ bên trong van nhiệt đã bị kẹt rồi; tôi xử lý khoảng năm phút là van sẽ trơn tru lại ngay."
    },
    tip: "Vào đầu mùa đông ở Đức, lỗi phổ biến nhất khiến Heizkörper không nóng là có bọt khí bên trong (cần dùng chìa Entlüftungsschlüssel để xả khí) hoặc chốt kim loại dưới núm vặn Thermostat bị kẹt sau nhiều tháng mùa hè không dùng."
  },
  {
    id: "t4_hou_17",
    level: "B1",
    category: "housing_tech",
    patternType: "routine",
    frequencyScore: 4,
    context: "Báo rằng cửa cuốn ngoài cửa sổ (Rollladen) bị kẹt cứng hoặc đứt dây kéo không kéo lên được",
    de: "Im Wohnzimmer lässt sich der Rollladen nicht mehr hochziehen; vermutlich ist der Gurt gerissen oder im Kasten verklemmt.",
    de_phonetic: "Im Vôn-tsim-mơ lést zíkh đea Rôl-la-đần níkht mea hốkh-tsi-ần; fea-mút-líkh ist đea Guat gơ-rít-sần ô-đơ im Kás-tần fea-klemt.",
    de_register: {
      du: "Im Wohnzimmer lässt sich der Rollladen nicht mehr hochziehen; vermutlich ist der Gurt gerissen oder im Kasten verklemmt.",
      sie: "Im Wohnzimmer lässt sich der Rollladen nicht mehr hochziehen; vermutlich ist der Gurt gerissen oder im Kasten verklemmt."
    },
    en: "In the living room, the roller shutter can no longer be pulled up; presumably the strap is torn or jammed inside the box.",
    vi: "Ở phòng khách, cửa cuốn chống nắng không thể kéo lên được nữa; có lẽ dây đai kéo đã bị đứt hoặc bị kẹt trong hộp cuốn.",
    reply: {
      de: "Ich gebe unserem Rollladenbauer Bescheid, damit er sich den Gurtaufwickler diese Woche noch anschaut.",
      en: "I will let our shutter technician know so that he can take a look at the strap winder this week.",
      vi: "Tôi sẽ báo cho thợ sửa cửa cuốn của bên mình biết để trong tuần này anh ấy qua kiểm tra bộ cuộn dây."
    },
    tip: "Cấu trúc 'lässt sich nicht mehr + Infinitiv' (không thể ... được nữa) cực kỳ tự nhiên và thông dụng trong tiếng Đức khi mô tả thiết bị hỏng hóc: 'Die Tür lässt sich nicht öffnen', 'Das Fenster lässt sich nicht kippen'."
  },
  {
    id: "t4_hou_18",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Mô tả lỗi máy giặt báo mã lỗi trên màn hình và không bơm thoát nước ra ngoài được",
    de: "Unsere Waschmaschine zeigt plötzlich einen Fehlercode an, pumpt das Wasser nicht mehr ab und die Tür bleibt verriegelt.",
    de_phonetic: "Un-zơ-rơ Vásh-ma-shi-nơ tsaikt plớt-tslíkh ai-nần Fê-lơ-cốt an, pumpt đát Vas-sơ níkht mea áp un đi Tuya blaipt fea-ri-gầnt.",
    de_register: {
      du: "Unsere Waschmaschine zeigt plötzlich einen Fehlercode an, pumpt das Wasser nicht mehr ab und die Tür bleibt verriegelt.",
      sie: "Unsere Waschmaschine zeigt plötzlich einen Fehlercode an, pumpt das Wasser nicht mehr ab und die Tür bleibt verriegelt."
    },
    en: "Our washing machine suddenly displays an error code, no longer pumps out the water, and the door stays locked.",
    vi: "Máy giặt nhà chúng tôi đột nhiên hiện mã lỗi, không bơm thoát nước ra được nữa và cửa máy vẫn bị khóa chặt.",
    reply: {
      de: "Haben Sie unten rechts schon das Flusensieb geöffnet und geprüft, ob eine Münze oder ein Fremdkörper die Pumpe blockiert?",
      en: "Have you already opened the lint filter at the bottom right and checked whether a coin or foreign object is blocking the pump?",
      vi: "Bạn đã mở bộ lọc cặn ở góc dưới bên phải ra và kiểm tra xem có đồng xu hay dị vật nào làm kẹt máy bơm chưa?"
    },
    tip: "Từ 'das Flusensieb' (bộ lọc xơ vải/cặn ở góc dưới máy giặt) là từ khóa cứu cánh: 80% trường hợp máy giặt không xả nước ('pumpt nicht ab') là do kẹt tóc, kẹp tăm hoặc đồng xu ở Flusensieb."
  },
  {
    id: "t4_hou_19",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Phản ánh với thợ sửa chữa rằng lỗi vẫn chưa được khắc phục triệt để và yêu cầu sửa lại (Nachbesserung)",
    de: "Leider tropft der Siphon unter dem Waschbecken trotz Ihrer gestrigen Reparatur immer noch; könnten Sie bitte zeitnah zur Nachbesserung vorbeikommen?",
    de_phonetic: "Lai-đơ trópft đea Zi-fông un-tơ đem Vásh-bé-kần trót-ts Ia-rơ gés-tri-gần Rê-pa-ra-tua im-mơ nókh; kơn-tần Zi bít-tơ tsait-na tsua Nákh-bét-sơ-rung foa-bai-kom-mần?",
    de_register: {
      du: "Leider tropft der Siphon unter dem Waschbecken trotz deiner gestrigen Reparatur immer noch; kannst du bitte zeitnah zur Nachbesserung vorbeikommen?",
      sie: "Leider tropft der Siphon unter dem Waschbecken trotz Ihrer gestrigen Reparatur immer noch; könnten Sie bitte zeitnah zur Nachbesserung vorbeikommen?"
    },
    en: "Unfortunately, the trap under the sink is still dripping despite your repair yesterday; could you please come by soon to rectify the work?",
    vi: "Rất tiếc là ống xi-phông dưới bồn rửa mặt vẫn còn rỉ nước dù hôm qua anh đã sửa; anh có thể vui lòng ghé lại sớm để khắc phục triệt để được không?",
    reply: {
      de: "Oh, das tut mir leid! Ich fahre heute Nachmittag auf dem Rückweg direkt bei Ihnen vorbei und setze eine neue Dichtung ein.",
      en: "Oh, I am sorry about that! I will stop by your place directly on my way back this afternoon and put in a new seal.",
      vi: "Ồ, tôi rất xin lỗi về việc đó! Chiều nay trên đường về tôi sẽ ghé qua nhà bạn ngay và thay một gioăng cao su mới."
    },
    tip: "Theo luật hợp đồng dịch vụ kỹ thuật ở Đức (Werkvertragsrecht), nếu thợ sửa chưa hết lỗi, khách hàng có quyền yêu cầu 'kostenlose Nachbesserung' (khắc phục lại miễn phí)."
  },
  {
    id: "t4_hou_20",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Trao đổi với chủ nhà về việc ai chịu chi phí sửa chữa dựa trên điều khoản sửa chữa nhỏ (Kleinreparaturklausel)",
    de: "Da die Reparatur des Lichtschalters über hundertzwanzig Euro kostet, fällt sie meines Wissens nicht mehr unter die Kleinreparaturklausel und wäre vom Vermieter zu tragen.",
    de_phonetic: "Đa đi Rê-pa-ra-tua đét Líkht-shal-tơs uy-bơ hun-đợt-tsvan-tsíkh Oi-rô kós-tợt, félt zi mai-nớt Vít-sần-ts níkht mea un-tơ đi Klain-rê-pa-ra-tua-klao-zần un ve-rơ fom Fea-mi-tơ tsu tra-gần.",
    de_register: {
      du: "Da die Reparatur des Lichtschalters über hundertzwanzig Euro kostet, fällt sie meines Wissens nicht mehr unter die Kleinreparaturklausel und wäre von dir als Vermieter zu tragen.",
      sie: "Da die Reparatur des Lichtschalters über hundertzwanzig Euro kostet, fällt sie meines Wissens nicht mehr unter die Kleinreparaturklausel und wäre vom Vermieter zu tragen."
    },
    en: "Since the repair of the light switch costs over one hundred and twenty euros, to my knowledge it no longer falls under the minor repairs clause and would be borne by the landlord.",
    vi: "Vì chi phí sửa công tắc đèn vượt quá một trăm hai mươi Euro nên theo tôi được biết, khoản này không còn nằm trong điều khoản sửa chữa nhỏ nữa mà sẽ do chủ nhà chi trả.",
    reply: {
      de: "Da haben Sie recht — schicken Sie mir bitte einfach die Rechnung des Elektrikers, dann übernehme ich den vollen Betrag.",
      en: "You are right about that — please just send me the electrician's invoice, and I will cover the full amount.",
      vi: "Bạn nói đúng đấy — bạn cứ gửi hóa đơn của thợ điện cho tôi, tôi sẽ thanh toán toàn bộ số tiền."
    },
    tip: "Hiểu đúng về 'Kleinreparaturklausel': Điều khoản này chỉ áp dụng cho các bộ phận người thuê trực tiếp chạm tay vào hàng ngày (tay nắm cửa sổ, vòi nước, công tắc) với mức trần khoảng 100–120 Euro/lần. Nếu hóa đơn vượt quá mức trần đó dù chỉ 1 Euro, chủ nhà phải trả 100% (chứ không phải người thuê trả phần đầu!)."
  },
  {
    id: "t4_hou_21",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Xin phép chủ nhà bằng văn bản để lắp đặt tấm pin năng lượng mặt trời ban công (Balkonkraftwerk)",
    de: "Wir würden am Balkongeländer gern ein steckerfertiges Balkonkraftwerk anbringen und möchten Sie hiermit höflich um Ihre schriftliche Zustimmung bitten.",
    de_phonetic: "Via vưa-đần am Bal-kông-gơ-lên-đơ gean ain shté-kơ-fea-ti-gớt Bal-kông-kráft-veak an-brin-gần un mớkh-tần Zi hia-mít hớp-líkh um Ia-rơ shríft-li-khơ Tsu-shtim-mung bít-tần.",
    de_register: {
      du: "Wir würden am Balkongeländer gern ein steckerfertiges Balkonkraftwerk anbringen und möchten dich hiermit höflich um deine schriftliche Zustimmung bitten.",
      sie: "Wir würden am Balkongeländer gern ein steckerfertiges Balkonkraftwerk anbringen und möchten Sie hiermit höflich um Ihre schriftliche Zustimmung bitten."
    },
    en: "We would like to mount a plug-in solar panel system on the balcony railing and would hereby politely ask for your written consent.",
    vi: "Chúng tôi muốn lắp một bộ pin năng lượng mặt trời cắm điện trực tiếp trên lan can ban công và qua đây xin phép sự đồng ý bằng văn bản của anh chị.",
    reply: {
      de: "Grundsätzlich habe ich nichts dagegen, solange die Module sturmsicher befestigt werden und die Fassade nicht angebohrt wird.",
      en: "In principle I have no objection, as long as the panels are fastened storm-proof and no holes are drilled into the facade.",
      vi: "Về nguyên tắc tôi không phản đối, miễn là các tấm pin được cố định chống bão chắc chắn và không khoan đục vào mặt tiền tòa nhà."
    },
    tip: "Từ năm 2024 tại Đức, 'Balkonkraftwerk' (hệ thống điện mặt trời ban công) đã được luật pháp xếp vào nhóm 'privilegierte Maßnahmen' — chủ nhà về cơ bản không được từ chối vô lý nếu người thuê lắp đặt an toàn."
  },
  {
    id: "t4_hou_22",
    level: "C1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Thắc mắc về bảng quyết toán chi phí phụ hàng năm (Nebenkostenabrechnung) tăng cao bất thường và xin xem hóa đơn gốc",
    de: "Da die Nachzahlung in der diesjährigen Nebenkostenabrechnung ungewöhnlich hoch ausfällt, möchte ich Sie höflich um Einsicht in die zugrunde liegenden Originalbelege bitten.",
    de_phonetic: "Đa đi Nákh-tsa-lung in đea đís-ye-ri-gần Nê-bần-kós-tần-áp-rếkh-nung un-gơ-vơn-líkh hốkh aos-félt, mớkh-tơ íkh Zi hớp-líkh um Ain-zíkht in đi tsu-grun-đơ li-gần-đần Ô-ri-gi-nal-bơ-lê-gơ bít-tần.",
    de_register: {
      du: "Da die Nachzahlung in der diesjährigen Nebenkostenabrechnung ungewöhnlich hoch ausfällt, möchte ich dich höflich um Einsicht in die Originalbelege bitten.",
      sie: "Da die Nachzahlung in der diesjährigen Nebenkostenabrechnung ungewöhnlich hoch ausfällt, möchte ich Sie höflich um Einsicht in die zugrunde liegenden Originalbelege bitten."
    },
    en: "Since the additional payment in this year's utility bill is unusually high, I would like to politely ask to inspect the underlying original receipts.",
    vi: "Vì khoản phải đóng thêm trong bảng quyết toán chi phí phụ năm nay cao bất thường, tôi xin phép được xem các chứng từ và hóa đơn gốc làm căn cứ tính toán.",
    reply: {
      de: "Selbstverständlich, ich schicke Ihnen heute Nachmittag die Kopien der Heizkosten- und Wasserabrechnungen als PDF zu.",
      en: "Of course, I will send you copies of the heating and water bills as a PDF this afternoon.",
      vi: "Tất nhiên rồi, chiều nay tôi sẽ gửi cho bạn bản sao các hóa đơn sưởi và nước dưới dạng file PDF."
    },
    tip: "Quyền 'Belegeinsicht' (quyền kiểm tra hóa đơn gốc của Nebenkostenabrechnung) là quyền hợp pháp của mọi người thuê nhà ở Đức. Nhiều thống kê của Mieterverein cho thấy gần một nửa số bảng quyết toán Nebenkosten có sai sót."
  },
  {
    id: "t4_hou_23",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Đề xuất tìm người thuê kế tiếp phù hợp (Nachmieter) để được kết thúc hợp đồng thuê nhà sớm hơn hạn",
    de: "Da ich berufsbedingt schon zum ersten Mai in eine andere Stadt ziehe, wollte ich fragen, ob ich vorzeitig aus dem Vertrag entlassen werde, wenn ich Ihnen einen solventen Nachmieter vorschlage.",
    de_phonetic: "Đa íkh bơ-rúfs-bơ-đingt shôn tsum ea-stần Mai in ai-nơ an-đơ-rơ Shtát tsi-ơ, vol-tơ íkh fra-gần, óp íkh foa-tsai-tíkh aos đem Fea-trác ent-lát-sần vea-đơ, ven íkh I-nần ai-nần zôl-ven-tần Nákh-mi-tơ foa-shla-gơ.",
    de_register: {
      du: "Da ich berufsbedingt schon zum ersten Mai in eine andere Stadt ziehe, wollte ich fragen, ob ich vorzeitig aus dem Vertrag komme, wenn ich dir einen solventen Nachmieter vorschlage.",
      sie: "Da ich berufsbedingt schon zum ersten Mai in eine andere Stadt ziehe, wollte ich fragen, ob ich vorzeitig aus dem Vertrag entlassen werde, wenn ich Ihnen einen solventen Nachmieter vorschlage."
    },
    en: "Since I am moving to another city for work as early as May first, I wanted to ask whether I can be released from the lease early if I propose a financially reliable replacement tenant to you.",
    vi: "Vì lý do công việc tôi phải chuyển đến thành phố khác ngay từ mùng một tháng Năm, tôi muốn hỏi liệu mình có được thanh lý hợp đồng sớm nếu giới thiệu cho anh chị một người thuê kế tiếp có tài chính vững vàng không.",
    reply: {
      de: "Wenn Sie jemanden finden, der ein festes Einkommen nachweist und die Wohnung zu denselben Konditionen übernimmt, bin ich damit einverstanden.",
      en: "If you find someone who can prove a steady income and takes over the apartment on the same terms, I am fine with that.",
      vi: "Nếu bạn tìm được người chứng minh được thu nhập ổn định và nhận thuê lại căn hộ với cùng các điều kiện hiện tại thì tôi đồng ý."
    },
    tip: "Tính từ 'solvent' (có khả năng tài chính tốt) rất hay được dùng trong bất động sản Đức ('ein solventer Nachmieter'). Trái với lời đồn 'chỉ cần tìm 3 Nachmieter là được ra sớm', luật Đức chỉ cho phép ra sớm nếu hợp đồng có Nachmieterklausel hoặc chủ nhà tự nguyện đồng ý (Mietaufhebungsvertrag)."
  },
  {
    id: "t4_hou_24",
    level: "B2",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 5,
    context: "Làm rõ nghĩa vụ sơn sửa lại tường (Schönheitsreparaturen) trước khi dọn ra khỏi căn hộ",
    de: "Wir haben die Wohnung damals unrenoviert übernommen; müssen wir die Wände beim Auszug trotzdem weiß streichen, oder reicht es, wenn wir sie besenrein übergeben?",
    de_phonetic: "Via ha-bần đi Vô-nung đa-mals un-rê-nô-viat uy-bơ-nom-mần; muýt-sần via đi Ven-đơ baim Aos-tsúc trót-ts-đem vais shtrai-khần, ô-đơ raikht és, ven via zi bê-zần-rain uy-bơ-gê-bần?",
    de_register: {
      du: "Wir haben die Wohnung damals unrenoviert übernommen; müssen wir die Wände beim Auszug trotzdem weiß streichen, oder reicht es, wenn wir sie besenrein übergeben?",
      sie: "Wir haben die Wohnung damals unrenoviert übernommen; müssen wir die Wände beim Auszug trotzdem weiß streichen, oder reicht es, wenn wir sie besenrein übergeben?"
    },
    en: "We took over the apartment unrenovated back then; do we still have to paint the walls white when moving out, or is it enough if we hand it over swept clean?",
    vi: "Lúc trước chúng tôi nhận bàn giao căn hộ trong tình trạng chưa sơn sửa; vậy khi dọn đi chúng tôi có bắt buộc phải sơn trắng lại tường không, hay chỉ cần quét dọn sạch sẽ để bàn giao là đủ?",
    reply: {
      de: "Wenn Sie die Wohnung unrenoviert übernommen haben, müssen Sie nur die Dübellöcher fachgerecht verschließen und die Räume besenrein hinterlassen.",
      en: "If you took over the apartment unrenovated, you only need to properly fill the dowel holes and leave the rooms swept clean.",
      vi: "Nếu lúc vào bạn nhận căn hộ chưa sơn sửa thì khi trả nhà chỉ cần trám lại các lỗ khoan tường đúng kỹ thuật và quét dọn sạch sẽ các phòng là được."
    },
    tip: "Theo phán quyết nổi tiếng của Tòa án Liên bang Đức (BGH), nếu người thuê nhận căn hộ trong tình trạng 'unrenoviert' (chưa được sơn mới) mà không nhận được khoản đền bù hợp lý, thì điều khoản bắt người thuê phải sơn lại tường khi dọn đi (Schönheitsreparaturen) là vô hiệu — bạn chỉ cần trả nhà 'besenrein' (quét dọn sạch sẽ)."
  },
  {
    id: "t4_hou_25",
    level: "B1",
    category: "housing_tech",
    patternType: "frame",
    frequencyScore: 4,
    context: "Hỏi nhân viên siêu thị vật liệu xây dựng (Baumarkt) xem nên dùng loại tắc kê (Dübel) nào cho tường thạch cao (Rigips) và tường bê tông",
    de: "Entschuldigung, ich möchte ein schweres Bücherregal aufhängen: Welche Dübel nehme ich am besten für eine Rigipswand, und welche für massiven Beton?",
    de_phonetic: "Ent-shul-đi-gung, íkh mớkh-tơ ain shve-rớt Buy-khơ-rê-gal aof-hên-gần: Vêl-khơ Đuy-bần nê-mơ íkh am bés-tần fuya ai-nơ Ri-gíps-vant, un vêl-khơ fuya ma-xi-vần Bê-tông?",
    de_register: {
      du: "Entschuldige, ich möchte ein schweres Bücherregal aufhängen: Welche Dübel nehme ich am besten für eine Rigipswand, und welche für massiven Beton?",
      sie: "Entschuldigung, ich möchte ein schweres Bücherregal aufhängen: Welche Dübel nehme ich am besten für eine Rigipswand, und welche für massiven Beton?"
    },
    en: "Excuse me, I would like to hang up a heavy bookshelf: which wall plugs should I best use for a drywall, and which ones for solid concrete?",
    vi: "Xin lỗi cho tôi hỏi, tôi muốn treo một chiếc kệ sách nặng lên tường: tôi nên dùng loại tắc kê nào tốt nhất cho tường thạch cao, và loại nào cho tường bê tông đặc?",
    reply: {
      de: "Für die Rigipswand empfehle ich Ihnen diese Hohlraumdübel aus Metall, und für die Betonwand brauchen Sie einen Schlagbohrer sowie normale Spreizdübel.",
      en: "For the drywall I recommend these metal cavity wall anchors, and for the concrete wall you will need a hammer drill and standard expansion plugs.",
      vi: "Đối với tường thạch cao tôi khuyên bạn dùng loại tắc kê rỗng bằng kim loại này, còn với tường bê tông thì bạn cần máy khoan búa cùng tắc kê nở tiêu chuẩn."
    },
    tip: "Trong các căn hộ Đức, vách ngăn giữa các phòng thường là 'Rigipswand / Trockenbauwand' (tường thạch cao rỗng — gõ vào kêu bộp bộp, phải dùng Hohlraumdübel), trong khi tường chịu lực là 'Betonwand' (phải có máy khoan búa Bohrhammer mới khoan nổi)."
  }
];
