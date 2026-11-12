// ==========================================
// CITY GUIDE: extra real restaurants per city, by kind of food.
//
// Added so every dish can get 5 restaurant suggestions in every city of the app.
// Each place, its address and what it is known for come from the published city guides
// listed in SOURCES (read November 2026). Like extraCities.ts, these were NOT checked
// against OpenStreetMap or Google, so no star rating is shown, and a place may have
// moved or closed since the guide was written. `known` says what the guide says the place
// is known for; it is a description, not a customer review.
//
// Kinds (PlaceKind) describe what a place serves; restaurantMatch.ts uses them to
// pick places for a dish when no place is known for that exact dish.
// ==========================================

export type PlaceKind =
  | "kebap"     // kebap, ocakbaşı, ciğer, et lokantası
  | "tavuk"     // tavuk ağırlıklı
  | "balik"     // balık / deniz ürünleri
  | "ev"        // esnaf lokantası, ev yemekleri, zeytinyağlılar
  | "italyan"   // pizza, makarna, İtalyan
  | "manti"     // mantı evi
  | "hamur"     // pide, lahmacun, börek, gözleme, fırın
  | "corba"     // çorbacı, paça, işkembe
  | "kahvalti"  // kahvaltı salonu
  | "tatli"     // baklava, künefe, pastane, dondurma, sütlü tatlı
  | "fastfood"  // burger, tost, büfe
  | "sokak"     // kokoreç, midye, tantuni, balık ekmek, çiğ köfte, kumpir
  | "saglikli"  // vegan, salata, sağlıklı kafe
  | "meze";     // meyhane, meze

export interface GuidePlace {
  name: string;
  address: string;
  district: string;
  kinds: PlaceKind[];
  known: string;
  source: string; // key of SOURCES
}

export const SOURCES: Record<string, string> = {
  "adana-kebap": "https://yemek.com/adananin-en-iyi-kebapcilari/",
  "adana-mekan": "https://yemek.com/adana-mekanlari/",
  "adana-kahvalti": "https://yemek.com/adanada-en-iyi-kahvalti-mekanlari/",
  "adana-baklava": "https://yemek.com/adanada-en-iyi-baklava-nerede-yenir/",
  "adana-oggusto": "https://www.oggusto.com/gastronomi/turkiye/adana-en-iyi-restoranlar",
  "adana-kokorec": "https://yemek.com/adanada-en-iyi-kokorec-nerede-yenir/",
  "adana-katmer": "https://yemek.com/adanada-en-iyi-katmer-nerede-yenir/",
  "mersin-mekan": "https://yemek.com/mersin-mekanlari/",
  "mersin-kahvalti": "https://yemek.com/mersinin-en-iyi-kahvalti-mekanlari/",
  "mersin-tantuni": "https://yemek.com/mersinde-tantuni-nerede-yenir/",
  "mersin-bizevdeyokuz": "https://www.bizevdeyokuz.com/mersin-kahvalti-mekanlari-mersin-de-ne-yenir-restaurant",
  "eskisehir-mekan": "https://yemek.com/eskisehir-mekanlari/",
  "eskisehir-makarna": "https://yemek.com/eskisehirde-en-iyi-makarna-nerede-yenir/",
  "eskisehir-kahvalti": "https://yemek.com/eskisehirin-en-iyi-kahvalti-mekanlari/",
  "eskisehir-borek": "https://yemek.com/eskisehirde-en-iyi-borek-nerede-yenir/",
  "eskisehir-kokorec": "https://yemek.com/eskisehirde-en-iyi-kokorec-nerede-yenir/",
  "gaziantep-nerede": "https://yemek.com/gaziantepte-nerede-ne-yenir/",
  "gaziantep-kahvalti": "https://yemek.com/gaziantep-kahvalti-mekanlari/",
  "izmir-ayakustu": "https://yemek.com/izmirin-ayakustu-lezzetleri/",
  "izmir-kahvalti": "https://yemek.com/izmirin-en-iyi-kahvalti-mekanlari/",
  "izmir-meze": "https://yemek.com/izmirin-en-iyi-mezecileri/",
  "izmir-islak": "https://yemek.com/izmirde-en-iyi-islak-hamburger-nerede-yenir/",
  "izmir-bizevdeyokuz": "https://www.bizevdeyokuz.com/?p=11982",
  "diyarbakir-kahvalti": "https://yemek.com/diyarbakir-kahvalti-yerleri/",
  "diyarbakir-kaburga": "https://yemek.com/diyarbakirin-en-iyi-kaburgacilari/",
  "diyarbakir-wanderlog": "https://wanderlog.com/list/geoCategory/312348",
  "kmaras-wikivoyage": "https://en.wikivoyage.org/wiki/Kahramanmaras",
  "ankara-pizza": "https://yemek.com/ankara-en-iyi-pizzacilar/",
  "ankara-balik": "https://yemek.com/ankaranin-en-iyi-balik-restoranlari/",
  "ankara-kahvalti": "https://yemek.com/ankaranin-en-iyi-kahvalti-mekanlari/",
  "ankara-ev": "https://yemek.com/ankara-ev-yemegi-mekanlari/",
  "ankara-kokorec": "https://yemek.com/ankarada-en-iyi-kokorec-nerede-yenir/",
  "ankara-kunefe": "https://yemek.com/ankarada-en-iyi-kunefe-nerede-yenir/",
  "istanbul-balik": "https://yemek.com/istanbulun-en-iyi-balikcilari/",
  "diyarbakir-balikkemal": "https://wanderlog.com/place/details/2871928/balk-kemal-diyarbakr-balk-restaurant",
  "gaziantep-tablejourney": "https://tablejourney.com/neighborhood/gaziantep/sehitkamil/"
};

type Row = [name: string, address: string, district: string, kinds: string, known: string, source: string];

const RAW: Record<string, Row[]> = {
  "Adana": [
    ["Eyvan Kebap", "Turgut Özal Bulvarı, Polisevi Kavşağı, 81075. Sokak No:2", "Seyhan", "kebap", "Orta yağlı etten Adana kebap, zengin meze, künefe.", "adana-kebap"],
    ["Kebapçı Ufuk'un Yeri", "Akdeniz Mahallesi, Karataş Bulvarı No:01290", "Yüreğir", "kebap", "Zırh kıyması kebap, sulu kebap, sarımsaklı beyti, çöp şiş.", "adana-kebap"],
    ["Bol Kepçe", "Güzelevler Mahallesi, Şehit Jandarma Er Gökhan Yılmaz Caddesi, Keresteciler Sitesi", "Yüreğir", "kebap,hamur,tavuk", "Yedi çeşit meze, fındık lahmacun, Adana kebap ve tavuk kanat.", "adana-kebap"],
    ["Elem Restaurant", "Karataş Yolu üzeri 6. km, Havutlu girişi", "Yüreğir", "kebap", "1979'dan beri kebap; kuyruk altı, kaz başı, sucuklu kaşarlı humus.", "adana-kebap"],
    ["Birbiçer Kebap Salonu", "Meydan Mahallesi, Bakımyurdu Caddesi No:63/A", "Seyhan", "kebap,kahvalti", "Ciğer şiş, Adana kebap, çöp şiş, sabah ciğer kahvaltısı.", "adana-kebap"],
    ["Kazancılar", "Sarıyakup Mahallesi, 23002. Sokak No:53", "Seyhan", "kebap,meze", "Büyük Saat yanında köklü kebapçı; kebap ve mezeler.", "adana-kebap"],
    ["Yeşil Kapı", "Reşatbey Mahallesi, Ordu Caddesi", "Seyhan", "kebap,tavuk", "Kıyma ve tavuk külbastı, közlenmiş soğan.", "adana-kebap"],
    ["Cik Cik Ali", "İstiklal Mahallesi, Kurtuluş Caddesi No:97, Kuruköprü", "Seyhan", "kebap", "Satır kıymalı kebap, mantar salatası, soslu ekmek.", "adana-kebap"],
    ["Kebapçı Mesut", "Kocavezir Mahallesi, Karacaoğlan Caddesi No:49", "Seyhan", "kebap", "1921'den beri Adana kebap, beyti, külbastı.", "adana-oggusto"],
    ["İştah Kebap", "Yağ Camii, Halk Bankası yanı", "Seyhan", "kebap", "Çarşıda Adana kebap ve ev yapımı şalgam.", "adana-kebap"],
    ["Kling Usta", "Reşatbey Mahallesi, Gazipaşa Bulvarı, 63014. Sokak, Kapalı Spor Salonu karşısı", "Seyhan", "kebap", "Külbastı, ciğer ve kebap.", "adana-kebap"],
    ["Ceyhan Ocakbaşı", "Namık Kemal Mahallesi, Mücahitler Caddesi No:102/A", "Seyhan", "kebap", "Kapya biberli Adana kebap, böbrek, dalak.", "adana-oggusto"],
    ["Onur Kebap Şevket Usta", "Cemalpaşa Mahallesi, Cevat Yurdakul Caddesi, 6306. Sokak", "Seyhan", "kebap,hamur", "Adana kebap, lahmacun, külbastı, Ali Nazik, sac tava.", "adana-oggusto"],
    ["Ciğerci Mahmut", "Reşatbey Mahallesi, Ordu Caddesi No:36/A", "Seyhan", "kebap", "Taze kuzu ciğer, şalgam.", "adana-oggusto"],
    ["Ciğerci Ulaş", "Güzelyalı Mahallesi, Turgut Özal Bulvarı No:74/A", "Çukurova", "kebap,kahvalti", "Ciğer kahvaltısı; geniş salon.", "adana-kahvalti"],
    ["Kaburgacı Yaşar Usta", "Sinanpaşa Mahallesi, Karataş Bulvarı, 4038. Sokak", "Yüreğir", "kebap", "Kömürde kaburga, kaburga kıyması.", "adana-mekan"],
    ["Şırdancı Bedo", "Kocavezir Mahallesi, Karacaoğlan Caddesi No:8", "Seyhan", "corba,sokak", "Şırdan, işkembe, paça çorbası; gece açık.", "adana-oggusto"],
    ["Bankalar Lokantası", "Tepebağ Mahallesi, 27047. Sokak No:5/A, Kemeraltı Camii karşısı", "Seyhan", "ev,corba", "80 yıllık esnaf lokantası; kuzu tencere yemekleri, karışık kızartma, fırın sütlaç.", "adana-oggusto"],
    ["Mavi Balık", "Güzelyalı Mahallesi, Aşıklar Bulvarı No:4/A", "Çukurova", "balik", "Taze balık ve deniz ürünleri.", "adana-oggusto"],
    ["Bobo Franco", "Cemalpaşa Mahallesi, Bahar Caddesi, Topaloğlu Apartmanı No:17/1", "Seyhan", "kahvalti,italyan,saglikli", "Modern Akdeniz mutfağı; gündüz kahvaltı.", "adana-oggusto"],
    ["Gönül Kardeşler", "Tepebağ Mahallesi, Çakmak Caddesi No:13", "Seyhan", "tatli", "Taş kadayıf, karakuş, sarı burma, bici bici, künefe, baklava.", "adana-oggusto"],
    ["Kazım Büfe", "Cemalpaşa Mahallesi, Toros Caddesi, Bahadır Apartmanı No:34/B", "Seyhan", "fastfood", "Uzayan kaşarlı tost (yengen), muzlu süt, şalgam.", "adana-mekan"],
    ["Hamburgerci Mükerrem", "Cemalpaşa Mahallesi, Toros Caddesi, 63010. Sokak", "Seyhan", "fastfood", "Günlük dana etinden hamburger.", "adana-mekan"],
    ["Börekçi Rıza", "Alidede Mahallesi, Saydam Caddesi, 29006. Sokak", "Seyhan", "hamur,kahvalti", "Kıymalı ve kaşarlı börek.", "adana-mekan"],
    ["Ağaçaltı Tatlıcısı", "Haydaroğlu Mahallesi, 195. Sokak No:152/A", "Yüreğir", "tatli", "Sıcak tulumba (sarı burma) tatlısı.", "adana-mekan"],
    ["Helvanın Mucidi Hacı Ahmet Şahin", "Kurtuluş Mahallesi, 12. Sokak No:32", "Seyhan", "tatli", "Helva, cezerye, lokum, tahin.", "adana-mekan"],
    ["Büyük Saat Ciğercisi İbrahim Usta", "Sarıyakup Mahallesi, 23004. Sokak No:2, Büyüksaat", "Seyhan", "kebap,kahvalti", "Sabah ciğer kahvaltısı.", "adana-kahvalti"],
    ["Güneşer Bakery", "Güzelyalı Mahallesi, 81161. Sokak, Veli İşlek Apartmanı No:5/A", "Çukurova", "kahvalti,hamur", "Ev yapımı reçel, ekşi mayalı ekmek, börek, serpme kahvaltı.", "adana-kahvalti"],
    ["Emirgan Sütiş Park Zirve", "Karslılar Mahallesi, 82046. Sokak No:24/A", "Çukurova", "kahvalti,tatli", "Göl kenarında serpme kahvaltı.", "adana-kahvalti"],
    ["Şahinoğlu Baklava", "Kuruköprü Mahallesi, İnönü Caddesi No:107", "Seyhan", "tatli", "Fıstıklı baklava ve sarma.", "adana-baklava"],
    ["Tatlıcı Zeki", "Reşatbey Mahallesi, Adalet Caddesi No:46/B", "Seyhan", "tatli", "Fıstıklı ve cevizli baklava, şöbiyet, bülbül yuvası, kadayıf.", "adana-baklava"],
    ["Han Baklava Künefe", "Gürselpaşa Mahallesi, Ali Bozdoğanoğlu Bulvarı No:73/A", "Seyhan", "tatli", "Baklava ve künefe.", "adana-baklava"],
    ["Seç Baklava Güzelyalı", "Güzelyalı Mahallesi, Turgut Özal Bulvarı, Şükran Apartmanı No:152/A", "Çukurova", "tatli", "Fıstıklı baklava, şöbiyet, havuç dilimi, midye baklava, dolama.", "adana-baklava"],
    ["Yetişoğlu Baklava & Dondurma", "Levent Mahallesi, Levent Caddesi No:64/B", "Yüreğir", "tatli", "Baklava, soğuk baklava, kadayıf, fıstık sarma, dondurma.", "adana-baklava"],
    ["Kokoreççi Vural Usta", "Hanedan Mahallesi, Kocavezir Sokak No:39", "Seyhan", "sokak", "Gündüz kokoreç.", "adana-kokorec"],
    ["Bizim Kokoreç ve Midye", "Kuruköprü Mahallesi, İnönü Caddesi No:89", "Seyhan", "sokak", "Kokoreç ve midye dolma.", "adana-kokorec"],
    ["Paydos Kokoreç, Köfte Ekmek", "Reşatbey Mahallesi, Stadyum Caddesi, 62029. Sokak No:9/C", "Seyhan", "sokak,fastfood", "Kokoreç ve köfte ekmek.", "adana-kokorec"],
    ["Kurttepe Kuyu Kokoreç", "Kurttepe Mahallesi, Suna Kan Bulvarı No:8A", "Çukurova", "sokak", "Gece geç saate kadar kokoreç.", "adana-kokorec"],
    ["Katmerci Dayı Kocavezir", "Kocavezir Mahallesi, Karacaoğlan Caddesi No:3/A", "Seyhan", "tatli,kahvalti", "Burma, muska, simit ve çikolatalı katmer.", "adana-katmer"],
    ["Zeynep Usta Künefe & Katmer", "Sümer Mahallesi, 69049. Sokak No:3", "Seyhan", "tatli", "Klasik katmer ve künefe.", "adana-katmer"],
    ["Katmer Park", "Huzurevleri Mahallesi, 77211. Sokak No:8/A", "Çukurova", "tatli", "Kare katmer, burma, dondurmalı katmer.", "adana-katmer"],
    ["Bizim Börekçilik", "Çınarlı Mahallesi", "Sarıçam", "hamur,kahvalti,tatli", "Sabah fıstıklı kaymaklı katmer ve börek.", "adana-katmer"]
  ],
  "Mersin": [
    ["Kerebiççi Hayri Usta", "Kiremithane Mahallesi, İstiklal Caddesi No:91/B", "Akdeniz", "tatli", "Çöven kremalı kerebiç.", "mersin-mekan"],
    ["Borsa Tantuni", "Palmiye Mahallesi, 1202. Sokak No:4", "Yenişehir", "sokak,tavuk,tatli", "Et, tavuk, biftek ve sebzeli tantuni; künefe.", "mersin-tantuni"],
    ["Pirzolacı Fırat Usta", "Karaisalı Mahallesi, Karaisalı Caddesi No:107", "Toroslar", "kebap", "Pirzola ve kaburga şiş, Silifke yoğurdu.", "mersin-mekan"],
    ["Künefeci İsmail Usta", "Çankaya Mahallesi, Silifke Caddesi No:45", "Akdeniz", "tatli", "Hatay peynirli künefe.", "mersin-mekan"],
    ["Tarsuslu Murat Usta", "Kiremithane Mahallesi, 4406. Sokak No:16/B", "Akdeniz", "corba,ev", "Tahin soslu tarmer çorbası.", "mersin-mekan"],
    ["Ciğerci Saboş", "Kiremithane Mahallesi, Cemalettin Tanrıöver Sokak No:19", "Akdeniz", "kebap", "Açık ekmekte ciğer kebabı.", "mersin-mekan"],
    ["Yürü Börek & Künefe", "Cumhuriyet Mahallesi, Silifke Caddesi No:184", "Yenişehir", "hamur,tatli,kahvalti", "Şireli börek ve künefe.", "mersin-mekan"],
    ["Akın Humus Tarsus", "Caminur Mahallesi, 0801. Sokak No:27", "Tarsus", "meze,saglikli", "Tereyağlı sıcak humus.", "mersin-mekan"],
    ["Azim Baba Restaurant", "Şehitlerim Mahallesi, Adana Bulvarı No:22/B", "Tarsus", "hamur,kebap", "Odun ateşinde kuşgözü lahmacun.", "mersin-mekan"],
    ["Kiremithane", "Kültür Mahallesi, 4308. Sokak No:5A", "Akdeniz", "meze,ev,balik", "Mezeler, levrekli içli köfte, kıymalı baklava böreği.", "mersin-mekan"],
    ["Mark & Cleo", "Menteş Mahallesi, Hüseyin Okan Merzeci Bulvarı No:580/A", "Yenişehir", "tatli", "Paris brest, tiramisu.", "mersin-mekan"],
    ["Dondurmacı Halil Yenişehir", "Limonluk Mahallesi, 24214. Sokak No:2", "Yenişehir", "tatli", "Dondurma, cezerye, kremalı ekler.", "mersin-mekan"],
    ["Sahil Balık Restoran", "Viranşehir Mahallesi, 34301. Sokak", "Mezitli", "balik,meze", "Deniz mezeleri, Mersin patatesi, ızgara barbun.", "mersin-mekan"],
    ["Cemal'in Yeri", "Narlıkuyu Mahallesi, Akyar Küme Evler", "Silifke", "balik", "Bahçede balık ve deniz ürünleri.", "mersin-bizevdeyokuz"],
    ["Betül Çamlıbel", "Kültür Mahallesi, Atatürk Caddesi No:60/A", "Akdeniz", "kahvalti,hamur", "Peynirli sıkma, börek, menemen.", "mersin-kahvalti"],
    ["Yörem Van Kahvaltı Salonu", "Cami Şerif Mahallesi, İstiklal Caddesi No:17/A", "Akdeniz", "kahvalti", "Menemen, kavurma, sucuklu sıcaklar.", "mersin-kahvalti"],
    ["Rima Kahvaltı Bostanı", "Güvenevler Mahallesi, 18. Cadde, Peker Apartmanı No:31/A", "Yenişehir", "kahvalti", "Antakya usulü kahvaltı, biberli ekmek.", "mersin-kahvalti"],
    ["Geyik", "Dumlupınar Mahallesi, Adnan Menderes Bulvarı No:112", "Yenişehir", "kahvalti,saglikli", "Avokadolu yumurta, acuka, lor salatası, sigara böreği.", "mersin-kahvalti"],
    ["Yöreden Kafe", "Dumlupınar Mahallesi, Adnan Menderes Bulvarı No:31", "Yenişehir", "kahvalti,hamur", "Serpme kahvaltı ve sıkma.", "mersin-kahvalti"],
    ["Reyya Mersin", "Viranşehir Mahallesi, 34301. Sokak, Gültuğu Sitesi A Blok No:38/B", "Mezitli", "kahvalti,tatli", "Peynirler, ezmeler, hamur işleri, kruvasan.", "mersin-kahvalti"],
    ["Memoş Tantuni", "Turgutreis Mahallesi, Silifke Caddesi No:154/A", "Akdeniz", "sokak,tavuk", "1964'ten beri et, tavuk ve yoğurtlu tantuni.", "mersin-tantuni"],
    ["Şişko Tantuni", "İnönü Mahallesi, Kushimoto Sokak", "Yenişehir", "sokak,tavuk", "Et ve tavuk tantuni.", "mersin-tantuni"],
    ["Meşhur Ziver Usta Tantuni & Biftek Salonu", "Gazi Mustafa Kemal Bulvarı No:1099/D", "Mezitli", "sokak,kebap", "Büyük tantuni dürümleri, kuzu küşleme.", "mersin-tantuni"],
    ["Hızır Tantuni", "Viranşehir Mahallesi, 34301. Sokak No:16/A", "Mezitli", "sokak,tavuk", "Et, biftek ve tavuk tantuni.", "mersin-tantuni"],
    ["Beşyol Tantuni", "Nusratiye Mahallesi, Çakmak Caddesi No:81/A", "Akdeniz", "sokak,tavuk", "Klasik et ve tavuk tantuni, İskender soslu tantuni.", "mersin-tantuni"],
    ["Abidin Tantuni", "Cumhuriyet Mahallesi, İsmet İnönü Bulvarı No:240/B", "Yenişehir", "sokak", "Biftek tantuni.", "mersin-tantuni"],
    ["Mersinli Hasan Usta Tantuni", "Hürriyet Mahallesi, İsmet İnönü Bulvarı No:292/A", "Yenişehir", "sokak,tatli", "Sac tantuni, şalgam; künefe.", "mersin-tantuni"],
    ["Ciğerci Apo", "İnönü Mahallesi, 1406. Sokak No:2", "Yenişehir", "kebap", "Ciğer kebabı.", "mersin-bizevdeyokuz"],
    ["Haydar Usta", "Menderes Mahallesi, Barbaros Hayrettin Paşa Caddesi No:9F", "Mezitli", "tatli", "Kerebiç.", "mersin-bizevdeyokuz"]
  ],
  "Eskişehir": [
    ["Papağan Çiğbörek", "Arifiye Mahallesi, Köprübaşı Caddesi, Yalbı Sokak No:5", "Odunpazarı", "hamur", "Çiğ börek (çibörek).", "eskisehir-mekan"],
    ["Pino", "Vişnelik Mahallesi, Atatürk Bulvarı No:76/A", "Odunpazarı", "fastfood,italyan", "1978'den beri hamburger, sosis, köfte, pizza, sandviç.", "eskisehir-mekan"],
    ["Etevim", "İsmet İnönü 1 Caddesi No:130", "Tepebaşı", "kebap,fastfood,kahvalti", "Kömürde ızgara etler, burger, salata, kahvaltı.", "eskisehir-mekan"],
    ["Sağlık Pide", "Yenibağlar Mahallesi, Üniversite Caddesi No:132", "Tepebaşı", "hamur,kebap", "Uygun fiyatlı pide ve kebap.", "eskisehir-mekan"],
    ["Sempre Mediterranean Cuisine", "Kızılcıklı Mahmut Pehlivan Caddesi, Eti Plaza", "Tepebaşı", "italyan,saglikli,corba", "Akdeniz mutfağı; çorbalar, pizza, makarna, kahvaltı.", "eskisehir-mekan"],
    ["Mazlumlar Muhallebicisi", "Haller Gençlik Merkezi No:23", "Odunpazarı", "tatli", "1927'den beri su muhallebisi, fırın sütlaç, kazandibi.", "eskisehir-mekan"],
    ["GAGA Eskişehir", "Büyükdere Mahallesi, Özleyiş Sokak No:1", "Odunpazarı", "italyan,balik", "Pizza, makarna, deniz ürünleri; Porsuk adasında.", "eskisehir-makarna"],
    ["Aura Cafe & Patisserie", "İstiklal Mahallesi, Başarılı Sokak No:17/A", "Odunpazarı", "italyan,tatli", "Penne arrabbiata, bolonez, alfredo; tatlılar.", "eskisehir-makarna"],
    ["People Restoran (Tasigo Hotels)", "Dede Mahallesi, Haktanır Sokak No:6", "Odunpazarı", "italyan,balik", "Ev yapımı fettuccine, karidesli makarna.", "eskisehir-makarna"],
    ["Cafe No 55", "Eskibağlar Mahallesi, Yenilik Sokak No:55/A", "Tepebaşı", "italyan,tavuk", "Napoliten, alfredo, kremalı mantarlı tavuklu makarna.", "eskisehir-makarna"],
    ["Ankara Makarnacısı", "Yenibağlar Mahallesi, Prof. Dr. Yılmaz Büyükerşen Bulvarı No:51/A", "Tepebaşı", "italyan", "Uygun fiyatlı soslu makarna.", "eskisehir-makarna"],
    ["Begonvil Makarna", "Yenibağlar Mahallesi, Şimşek Sokak No:61/B", "Tepebaşı", "italyan", "Günlük hazırlanan makarna ve soslar.", "eskisehir-makarna"],
    ["MakarnaX", "Eskibağlar Mahallesi, Prof. Dr. Yılmaz Büyükerşen Bulvarı No:76/B", "Tepebaşı", "italyan", "El yapımı taze makarna.", "eskisehir-makarna"],
    ["Titanik Coffee", "İstiklal Mahallesi, Porsuk Bulvarı No:71", "Odunpazarı", "kahvalti", "Nehir kenarında serpme kahvaltı, menemen, omlet.", "eskisehir-kahvalti"],
    ["Ayten Usta Aynalı Kahve", "Paşa Mahallesi, Kemal Zeytinoğlu Caddesi No:13/A", "Odunpazarı", "kahvalti", "Zengin kahvaltı, hellim, mıhlama.", "eskisehir-kahvalti"],
    ["No.9 Kahvaltı Gizli Bahçe", "Paşa Mahallesi, Fırın Sokak No:9", "Odunpazarı", "kahvalti", "Bahçede serpme kahvaltı, börek, menemen.", "eskisehir-kahvalti"],
    ["Cafe Deva", "Kurtuluş Mahallesi, Yargı Sokak No:16", "Odunpazarı", "kahvalti,hamur", "Ev yapımı pişi, gözleme, bazlama.", "eskisehir-kahvalti"],
    ["Pişisel Gelişim Kahvaltı Cafe", "İstiklal Mahallesi, Yalaman Sokak No:20/A", "Odunpazarı", "kahvalti", "Pişi, patatesli yumurta, menemen.", "eskisehir-kahvalti"],
    ["Ayşegül Kahvaltı Evi", "İstiklal Mahallesi, Demirciler Sokak No:4/A", "Odunpazarı", "kahvalti", "Menemen, omlet, sucuklu kahvaltı.", "eskisehir-kahvalti"],
    ["Kırım Tatar Kültür Çi Börek Evi", "Paşa Mahallesi, Şeyh Şemsettin Sokak No:11", "Odunpazarı", "hamur,manti", "Çibörek, mantı, yöresel yemekler.", "eskisehir-borek"],
    ["Hanımeli Yöresel Lezzetler", "Paşa Mahallesi, Beyler Sokak No:1/A", "Odunpazarı", "hamur,manti,kebap,ev", "Çibörek, mantı, Balaban köfte.", "eskisehir-borek"],
    ["Bahr-ı Şems Çibörek Mantı Evi", "Akcami Mahallesi, Kurşunlu Cami Sokak No:17", "Odunpazarı", "hamur,manti", "Çibörek ve mantı.", "eskisehir-borek"],
    ["Arasta Kırım Tatar Çibörek Evi", "Orta Mahallesi, Çürükhoca Sokak No:18/1", "Odunpazarı", "hamur,manti,corba", "Çibörek, Kırım mantısı, sorpa çorbası.", "eskisehir-borek"],
    ["Saklı Bahçe Kırım Çibörek", "Paşa Mahallesi, Tiryaki Hasan Paşa Sokak No:6/1", "Odunpazarı", "hamur,manti", "Çibörek ve mantı.", "eskisehir-borek"],
    ["Bulvar Çibörek", "Arifiye Mahallesi, Porsuk Bulvarı, İletişim Sokak No:11", "Odunpazarı", "hamur", "1999'dan beri çibörek, kavurma böreği.", "eskisehir-borek"],
    ["Nova Boşnak Börekçisi", "Eskibağlar Mahallesi, Cidde Sokak No:5", "Tepebaşı", "hamur,manti,kahvalti", "Boşnak böreği ve Boşnak mantısı.", "eskisehir-borek"],
    ["İkizler Mantı & Börek", "Vişnelik Mahallesi, Çolpan Sokak No:7/D", "Odunpazarı", "hamur,manti,ev,tatli", "Börek, mantı, sarma, içli köfte, ev tatlıları.", "eskisehir-borek"],
    ["Eskişehir Çibörek Evi", "Akarbaşı Mahallesi, Atatürk Bulvarı No:97/A", "Odunpazarı", "hamur,corba", "Çibörek, sorpa, kavurma böreği.", "eskisehir-borek"],
    ["Yöre Börek", "Deliklitaş Mahallesi, Deliklitaş Caddesi No:83", "Odunpazarı", "hamur", "Mercimekli börek, bükme.", "eskisehir-borek"],
    ["Meydan Kokoreç", "Hoşnudiye Mahallesi, Cengiz Topel Caddesi No:47/A", "Tepebaşı", "sokak", "24 saat kokoreç.", "eskisehir-kokorec"],
    ["Salih Usta Kokoreç", "Eskibağlar Mahallesi, Yılmaz Büyükerşen Bulvarı No:8", "Tepebaşı", "sokak", "24 saat kokoreç.", "eskisehir-kokorec"],
    ["Mr. Kokoreç", "Kırmızıtoprak Mahallesi, Taşköprü Caddesi No:62/A", "Odunpazarı", "sokak", "Akşam kokoreç.", "eskisehir-kokorec"],
    ["Kuzu Kokoreç Evi", "Mustafa Kemal Paşa Mahallesi, Yunus Emre Caddesi No:113", "Tepebaşı", "sokak", "Kuzu kokoreç.", "eskisehir-kokorec"]
  ],
  "Gaziantep": [
    ["Şehr-i Küşleme Kebap", "Osmangazi Mahallesi", "Şehitkamil", "kebap,hamur", "Karışık kebap, çıtır lahmacun, simit kebabı.", "gaziantep-nerede"],
    ["Metanet Lokantası", "Kozluca Mahallesi, Kozluca Caddesi No:11", "Şahinbey", "corba,kahvalti,hamur", "Sabah erkenden beyran çorbası, lahmacun.", "gaziantep-nerede"],
    ["Çulcuoğlu Et Lokantası", "Suyabatmaz Mahallesi, Kalender Sokak No:6", "Şahinbey", "kebap,hamur,ev", "İçli köfte, patlıcan kebabı, fındık lahmacun.", "gaziantep-nerede"],
    ["Kebapçı Halil Usta", "Karşıyaka Mahallesi, Tekel Caddesi, Ocukoğlu Sokak No:6", "Şehitkamil", "kebap", "Küşleme, simit kebabı, içli köfte.", "gaziantep-nerede"],
    ["Ciğerci Mustafa", "Çukur Mahallesi, Bayramoğlu Sokak No:1/B", "Şahinbey", "kebap", "Ciğer.", "gaziantep-nerede"],
    ["30 Dürümcü Recep Usta", "Değirmiçem Mahallesi, Şehit Mehmet Sait Elçi Sokak No:4", "Şehitkamil", "sokak,kebap,saglikli", "Nohut dürümü, ciğer dürümü.", "gaziantep-nerede"],
    ["Elmacıpazarı Güllüoğlu", "Elmacı Pazarı No:4/A", "Şahinbey", "tatli", "Baklava, yaş baklava, yaprak şöbiyet.", "gaziantep-nerede"],
    ["Mahra Şire Evi & Cafe", "Bey Mahallesi, Hanifioğlu Sokak No:33/A", "Şahinbey", "kahvalti,hamur", "Yöresel kahvaltı, sıkma, gözleme.", "gaziantep-kahvalti"],
    ["Katmerci Murat", "Bey Mahallesi, Atatürk Bulvarı No:11", "Şahinbey", "tatli,kahvalti", "Fıstıklı kaymaklı katmer.", "gaziantep-kahvalti"],
    ["Katmerci Zekeriya Usta", "Bay Hilmi Geçidi No:16/C-D", "Şahinbey", "tatli,kahvalti", "Köklü katmerci.", "gaziantep-kahvalti"],
    ["Pendirhan Atmalı Kebap ve Kahvaltı Sarayı", "Kepenek Mahallesi, Şerif Kendircioğlu Caddesi No:2", "Şahinbey", "kahvalti,corba,kebap", "Serpme kahvaltı, beyran, menemen, katmer.", "gaziantep-kahvalti"],
    ["Koçak Patisserie", "Mücahitler Mahallesi, Şehit Murat Engin Özdinç Caddesi No:3/1", "Şehitkamil", "kahvalti,tatli", "Pastanede aile kahvaltısı ve baklava.", "gaziantep-kahvalti"],
    ["Ezogelin Konuk Evi", "Değirmiçem Mahallesi, İstasyon Caddesi, Millet Bahçesi No:55", "Şehitkamil", "kahvalti,ev", "Yöresel yemeklerle kahvaltı.", "gaziantep-kahvalti"],
    ["AVLU Cafe", "Osmangazi Mahallesi, Vehbi Dinçerler Caddesi No:6/A", "Şehitkamil", "kahvalti,hamur,corba", "Peynir çorbası, su böreği, menemen, pankek.", "gaziantep-kahvalti"],
    ["D'Green Organic", "15 Temmuz Mahallesi, Davut Gül Caddesi No:10/H", "Şehitkamil", "kahvalti,saglikli", "Antep peynirli sıkma, pişi, organik kahvaltı.", "gaziantep-kahvalti"],
    ["The Ayıntab Kahvaltı Konağı", "Cabi Mahallesi, İnci Çıkmazı No:2", "Şahinbey", "kahvalti", "Tarihi konakta serpme kahvaltı.", "gaziantep-kahvalti"],
    ["Gale Altı Kafe & Kahvaltı", "Seferpaşa Mahallesi, Derekenarı Caddesi No:29/A", "Şahinbey", "kahvalti", "Kale yanında gün boyu kahvaltı.", "gaziantep-kahvalti"],
    ["Katmerci Cengiz Kadayıf & Katmer & Lokma", "Alaybey Mahallesi, Karagöz Caddesi No:17/E", "Şahinbey", "tatli", "Katmer, kadayıf, lokma.", "gaziantep-kahvalti"],
    ["Üçler Kebap Lahmacun", "Sarıgüllük Mahallesi, Zübeyde Hanım Bulvarı No:16/C", "Şehitkamil", "kebap,hamur", "Kebap ve lahmacun.", "gaziantep-tablejourney"],
    ["Özcanlar Pide & Lahmacun Fırını", "Atatürk Mahallesi, 69. Sokak", "Şehitkamil", "hamur", "Pide ve lahmacun fırını.", "gaziantep-tablejourney"]
  ],
  "İzmir": [
    ["Alsancak Dostlar Fırını", "Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi No:120", "Konak", "hamur,kahvalti", "Boyoz çeşitleri, yanında yumurta; sübye.", "izmir-ayakustu"],
    ["Meşhur Hisarönü Şambalicisi", "901. Sokak No:13/A", "Konak", "tatli", "1940'lardan beri şambali.", "izmir-ayakustu"],
    ["Kumrucu Apo", "Yenigün Mahallesi, 1318. Sokak No:14", "Konak", "fastfood,sokak", "Kömürde Tire sucuklu kumru.", "izmir-ayakustu"],
    ["Kartal Kokoreç", "Kamil Tunca Bulvarı No:47, Çamdibi", "Bornova", "sokak", "Bıçakla doğranan İzmir usulü kuzu kokoreç.", "izmir-ayakustu"],
    ["Çelebi Unlu Mamülleri", "Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi No:185/A", "Konak", "tatli", "İzmir bombası.", "izmir-ayakustu"],
    ["Alsancak Midye Evi", "Alsancak Mahallesi, 1469. Sokak No:32", "Konak", "sokak,balik", "Sıcak midye dolma, ekmek arası sardalya.", "izmir-ayakustu"],
    ["Zeynel Ergin Gevrek Fırını", "Alsancak Mahallesi, 1466. Sokak No:2", "Konak", "hamur,kahvalti", "Susamlı gevrek, boyoz, peynirli kumru.", "izmir-kahvalti"],
    ["Léone Patisserie & Boulangerie", "Kültür Mahallesi, Vasıf Çınar Bulvarı No:29/A", "Konak", "kahvalti,tatli", "Tereyağlı kruvasan, sandviç, ekşi mayalı ekmek.", "izmir-kahvalti"],
    ["Moresi Kordon", "Alsancak Mahallesi, Atatürk Caddesi No:344/1", "Konak", "kahvalti", "Deniz manzaralı Girit kahvaltısı, pişi.", "izmir-kahvalti"],
    ["Reyhan Pastanesi", "Kültür Mahallesi, Dr. Mustafa Enver Bey Caddesi No:24", "Konak", "tatli,kahvalti", "1965'ten beri pastane; kahvaltı, su böreği.", "izmir-kahvalti"],
    ["Filozof Kahvaltı Bostanlı", "Bostanlı Mahallesi, 1735. Sokak No:179", "Karşıyaka", "kahvalti", "Serpme kahvaltı, acuka ve pişi.", "izmir-kahvalti"],
    ["Morisi Kahvaltı Bostanlı", "Bostanlı Mahallesi, Nebil Susup Sokak No:159/A", "Karşıyaka", "kahvalti,ev", "Girit mutfağı, zeytinyağlılar, kahvaltı.", "izmir-kahvalti"],
    ["80'ler Kahvaltı Bostanlı", "Bostanlı Mahallesi, 1735. Sokak No:155/A", "Karşıyaka", "kahvalti", "Pişi, etli yaprak sarma, menemen.", "izmir-kahvalti"],
    ["Ülver Teyze Narlıdere", "Yenikale Mahallesi, Sütçüler Caddesi No:2/B", "Narlıdere", "hamur,kahvalti", "El açması Rumeli böreği.", "izmir-kahvalti"],
    ["Mezze More", "Mimar Sinan Mahallesi, Ali Çetinkaya Bulvarı No:40/B", "Konak", "meze,ev", "Ev usulü mezeler: sarma, şakşuka, mercimek köftesi, içli köfte.", "izmir-meze"],
    ["Alliance Kordon", "Atatürk Caddesi No:174/A", "Konak", "balik,meze", "Deniz mezeleri, karides, lokum levrek.", "izmir-meze"],
    ["Sakız Alsancak", "Akdeniz Mahallesi, Atatürk Caddesi No:158/A", "Konak", "meze,balik", "Ege mezeleri, ahtapot, kalamar.", "izmir-meze"],
    ["Sardin Balık Restaurant", "Konak Mahallesi, Balıkçılar Meydanı, 874. Sokak No:1", "Konak", "balik,meze", "Lakerda, levrek marin, deniz ürünleri.", "izmir-meze"],
    ["Kalimera", "Konak Mahallesi, 871. Sokak No:10", "Konak", "meze,balik", "Meyhane: dolma, salata, karides.", "izmir-meze"],
    ["Mydanose Meze ve Zeytinyağlı", "Bostanlı Mahallesi, Girne Bulvarı No:69/C", "Karşıyaka", "meze,ev,saglikli", "Zeytinyağlı enginar, vişneli yaprak sarma.", "izmir-meze"],
    ["Karşıyaka Meze Evi", "Bostanlı Mahallesi, Cemal Gürsel Caddesi No:534/A", "Karşıyaka", "meze,balik", "Zeytinyağlı ve deniz mezeleri.", "izmir-meze"],
    ["Mezesel Meze Evi", "Aksoy Mahallesi, Fazıl Bey Caddesi No:87/A", "Karşıyaka", "meze", "Şakşuka, havuç tarator, yaprak sarma.", "izmir-meze"],
    ["Bostanlı Vitamin", "Bostanlı Mahallesi, Cemal Gürsel Caddesi No:488/B", "Karşıyaka", "fastfood", "Islak hamburger menüleri.", "izmir-islak"],
    ["Fitnat New Gen Fastfood", "Kazımdirik Mahallesi, 162. Sokak No:21", "Bornova", "fastfood", "Islak hamburger ve ıslak tandır burger.", "izmir-islak"],
    ["Berk Tantuni", "Kazımdirik Mahallesi, 170. Sokak No:2/B", "Bornova", "fastfood,sokak", "Islak hamburger, tantuni.", "izmir-islak"],
    ["Pinkman's Burger Lab", "Adatepe Mahallesi, 3. Sokak No:16/B", "Buca", "fastfood", "Klasik burgerler.", "izmir-islak"],
    ["Kumrucu Ömür", "Bostanlı Mahallesi, Cemal Gürsel Caddesi No:476", "Karşıyaka", "fastfood,sokak", "Sıcak kumru.", "izmir-bizevdeyokuz"],
    ["Serkan Hamza Midye ve Balık", "İnciraltı, Başak Sokak No:53", "Balçova", "sokak,balik", "Midye dolma.", "izmir-bizevdeyokuz"],
    ["Kokoreççi Asım Usta", "Rafet Paşa Mahallesi, Burak Reis Caddesi No:226A", "Bornova", "sokak", "Kokoreç.", "izmir-bizevdeyokuz"],
    ["Uğur Kokoreç & İnegöl Köfte", "Şemikler Mahallesi, Erdoğan Akkaya Sokak No:37", "Karşıyaka", "sokak,kebap", "Kokoreç ve İnegöl köfte.", "izmir-bizevdeyokuz"],
    ["Boğaziçi Restaurant", "Bahçelerarası Mahallesi, Aliye Bulvarı No:2/A, Üçkuyular İskelesi üstü", "Balçova", "balik,meze", "Balık mezeleri, levrek lokum.", "izmir-bizevdeyokuz"],
    ["Deniz Restoran", "Kültür Mahallesi, Atatürk Caddesi No:188/B, İzmir Palas Oteli", "Konak", "balik", "Izgara balık, sütlü balık, karides güveç.", "izmir-bizevdeyokuz"],
    ["Kemer 6 Balık Restoranı", "Konak Mahallesi, 861. Sokak No:16", "Konak", "balik", "Uygun fiyatlı balık yemekleri.", "izmir-bizevdeyokuz"],
    ["Cızz Bızz Balık Evi", "Güzelyurt Mahallesi, 871. Sokak No:92", "Konak", "balik", "Uygun fiyatlı balık kızartma.", "izmir-bizevdeyokuz"],
    ["Ferhat Büfe Balık Ekmek", "Yalı Mahallesi, Mithatpaşa Caddesi No:463", "Güzelbahçe", "sokak,balik", "Sardalya balık ekmek.", "izmir-bizevdeyokuz"],
    ["Esnaf Lokantası Mahmut Usta", "Kemeraltı Çarşısı, 876. Sokak No:45", "Konak", "ev", "Günlük ev yemekleri, vitrinden seçim.", "izmir-bizevdeyokuz"],
    ["Bizim Lokanta", "911. Sokak No:4", "Konak", "ev,corba", "Nohutlu işkembe, kelle paça çorbası.", "izmir-bizevdeyokuz"],
    ["Abbasın Yeri", "Hisarönü, 902. Sokak No:24", "Konak", "ev", "Günlük ev yemekleri.", "izmir-bizevdeyokuz"],
    ["Mutfak Girit", "Kültür Mahallesi, 1388. Sokak No:10A", "Konak", "ev,meze,saglikli", "Girit zeytinyağlıları, yoğurtlu kuzu kulağı.", "izmir-bizevdeyokuz"],
    ["Balmumu Dükkan Lokanta", "Kültür Mahallesi, 1388. Sokak No:5", "Konak", "ev,meze", "Mevsimlik Ege ve Girit yemekleri.", "izmir-bizevdeyokuz"],
    ["Sevinç Pastanesi", "Alsancak, Ali Çetinkaya Bulvarı No:27", "Konak", "tatli,kahvalti", "Pavlova, fıstıklı dondurma, kahvaltı.", "izmir-bizevdeyokuz"],
    ["Bravo Pastanesi", "Bostanlı Mahallesi, Cemal Gürsel Caddesi No:111/A", "Karşıyaka", "tatli", "Yoğurtlu dondurma, profiterol.", "izmir-bizevdeyokuz"],
    ["Bergama Köftecisi", "İnkılap Mahallesi, 448. Sokak No:12/A", "Buca", "kebap", "Bergama köfte, piyaz.", "izmir-bizevdeyokuz"],
    ["Topçu", "Akdeniz Mahallesi, Vali Kazım Dirik Caddesi No:3/B", "Konak", "kebap", "Ocakbaşı ızgara, pirzola, köfte.", "izmir-bizevdeyokuz"],
    ["Emektar Kebap", "Evka 3, 129/7. Sokak No:16-2", "Bornova", "kebap", "Kuzu incik, beyti sarma.", "izmir-bizevdeyokuz"],
    ["Meşhur Tavacı Recep Usta", "Alsancak Mahallesi, Atatürk Caddesi No:364", "Konak", "kebap,ev", "Tava yemekleri.", "izmir-bizevdeyokuz"],
    ["Zaim Usta", "Mersinli Mahallesi, Fatih Caddesi No:91", "Bornova", "ev,kebap", "Keşkek, güveç, et yemekleri.", "izmir-bizevdeyokuz"],
    ["Boho Lokal", "Kültür Mahallesi, Şevket Özçelik Sokak No:2", "Konak", "saglikli", "Sağlıklı günlük yemek, vegan dostu, glütensiz seçenekler.", "izmir-bizevdeyokuz"],
    ["Odelato Artisan Gelato", "Kültür Mahallesi, Meksika Sokak No:5A", "Konak", "tatli", "İtalyan usulü dondurma.", "izmir-bizevdeyokuz"],
    ["Ristorante Pizzeria Venedik", "Kültür Mahallesi, Gül Sokak No:10/A-B", "Konak", "italyan", "1979'dan beri pizza.", "izmir-bizevdeyokuz"],
    ["La Cigale", "Kültür Mahallesi, Cumhuriyet Bulvarı No:152, Alsancak FKM", "Konak", "italyan,saglikli", "Fransız mutfağı, bahçe.", "izmir-bizevdeyokuz"],
    ["Ayşa Boşnak Börekçisi ve Ev Yemekleri", "Alsancak Mahallesi, 1437. Sokak No:11/A", "Konak", "hamur,ev,manti", "Boşnak böreği ve ev yemekleri.", "izmir-bizevdeyokuz"],
    ["Yolo Art & Lounge", "Abacıoğlu Hanı, Anafartalar Caddesi", "Konak", "fastfood,saglikli", "Közlenmiş patlıcanlı burger.", "izmir-bizevdeyokuz"]
  ],
  "Diyarbakır": [
    ["Saray Kapı Kahvaltı & Cafe", "Cevat Paşa Mahallesi, Kozlu Sokak No:19", "Sur", "kahvalti,hamur", "Avluda kahvaltı, isotlu domates, börek.", "diyarbakir-kahvalti"],
    ["Taş Mahal Kahvaltı Salonu & Cafe", "Ziya Gökalp Mahallesi, Gökalp Sokak No:21", "Sur", "kahvalti", "Acı biber reçeli, menemen, omlet.", "diyarbakir-kahvalti"],
    ["Kastal Cafe Kahvaltı", "Cami Kebir Mahallesi, Telgrafhane Sokak No:12", "Sur", "kahvalti", "Serpme ve sini kahvaltı.", "diyarbakir-kahvalti"],
    ["Diyarbakırevi Kahvaltı & Cafe", "Savaş Mahallesi, Dicle Sokak No:20, Dört Ayaklı Minare yanı", "Sur", "kahvalti,manti,hamur", "Kahvaltı, hamur işleri, mantı.", "diyarbakir-kahvalti"],
    ["Han Kapısı Kahvaltı Sarayı", "Dabanoğlu Mahallesi, Gazi Caddesi, Hasan Paşa Hanı girişi", "Sur", "kahvalti", "Menemen, kavurmalı yumurta.", "diyarbakir-kahvalti"],
    ["Zinciriye Konağı Kahvaltı ve Cafe", "Cami Kebir Mahallesi, Yücel Sokak No:9", "Sur", "kahvalti", "Taş konakta serpme kahvaltı.", "diyarbakir-kahvalti"],
    ["Zerzevan Konağı Kahvaltı", "Süleyman Nazif Mahallesi, Bayrampaşa Sokak No:17/1", "Sur", "kahvalti,hamur", "Otlu peynir, kavurmalı yumurta, gözleme.", "diyarbakir-kahvalti"],
    ["Van Kahvaltı Sarayı", "Mezopotamya Mahallesi, 611/2. Sokak, Çeysa Platinum Sitesi No:6", "Kayapınar", "kahvalti,hamur", "Van otlu peyniri, menemen, gözleme.", "diyarbakir-kahvalti"],
    ["Pîya Mutfak Cafe", "Diclekent, 249. Sokak No:25", "Kayapınar", "kahvalti,saglikli", "Bahçede serpme kahvaltı.", "diyarbakir-kahvalti"],
    ["Luuma Kayapınar", "Mezopotamya Mahallesi, Mahabad Bulvarı No:47/CA", "Kayapınar", "kahvalti,tatli", "Serpme kahvaltı, kruvasan, tatlılar.", "diyarbakir-kahvalti"],
    ["Beroş Restaurant", "Hasırlı Mahallesi, Yenikapı Sokak No:88", "Sur", "kebap,ev", "Kaburga dolması, kuzu tandır, incik, güveç.", "diyarbakir-kaburga"],
    ["Kemikli Evi", "Dabanoğlu Mahallesi, Marangoz Sokak, Avni Bey Konağı", "Sur", "kebap", "Kemikli ve kaburga ocakbaşı.", "diyarbakir-kaburga"],
    ["Sultan Ocakbaşı Ali Usta", "Yenişehir Mahallesi, Ali Emiri 1. Sokak", "Yenişehir", "kebap", "Kemikli kaburga, sac tava, ciğer.", "diyarbakir-kaburga"],
    ["Hancı Et", "75. Yol, Dünya Kavşağı, 625. Sokak No:125/DD", "Kayapınar", "kebap,ev", "Kaburga tava, kaburga dolması, incik tava.", "diyarbakir-kaburga"],
    ["Loqum Et-Steakhouse", "Fırat Mahallesi, 75. Yol, Mega Arslan Cadde 75 Sitesi C Blok", "Kayapınar", "kebap,fastfood", "Steakhouse; antrikot, kuzu pirzola.", "diyarbakir-kaburga"],
    ["Fırın-ci", "Peyas Mahallesi, Tekel Caddesi No:42", "Kayapınar", "ev,hamur", "Restore hamamda Diyarbakır mutfağı, ev ekmeği.", "diyarbakir-wanderlog"],
    ["Nur Ocakbaşı Kayapınar", "Peyas Mahallesi, 506. Sokak No:2", "Kayapınar", "kebap", "Izgara etler, sakatat, kebap.", "diyarbakir-wanderlog"],
    ["Buket Lahmacun", "Peyas Mahallesi, 252. Sokak No:16", "Kayapınar", "hamur,kebap", "Lahmacun, pide, ızgara.", "diyarbakir-wanderlog"],
    ["Bezgin Bekir", "Mahabad Bulvarı No:56CA", "Kayapınar", "ev,kebap", "Yöresel mutfak.", "diyarbakir-wanderlog"],
    ["Gaziantep Künefeci Salih Usta", "Tekel Kavşağı, Mahabad Bulvarı", "Kayapınar", "tatli", "Künefe.", "diyarbakir-wanderlog"],
    ["Etiş Lahmacun", "Kayapınar Caddesi, Azel City B Blok altı No:14", "Kayapınar", "hamur,kebap", "Lahmacun, Adana kebap.", "diyarbakir-wanderlog"],
    ["Balta Burger 75. Cadde", "Mahabad Bulvarı, C Blok altı No:43", "Kayapınar", "fastfood", "Burger ve patates kızartması.", "diyarbakir-wanderlog"],
    ["Nasır Usta Adana Kebapçısı Diclekent", "Peyas Mahallesi, 250. Sokak No:1", "Kayapınar", "kebap,tavuk", "Adana kebap ve ızgaralar.", "diyarbakir-wanderlog"],
    ["Ciğerim Ocakbaşı", "Cami Nebi Mahallesi, Hz. Süleyman Caddesi No:3", "Sur", "kebap,hamur", "Kebap ve lahmacun.", "diyarbakir-wanderlog"],
    ["Attor Diyarbakır Lahmacun, Pide ve Pizza Salonu", "Mezopotamya Bulvarı, Tezgel Kompleksi altı", "Kayapınar", "hamur,italyan", "Lahmacun, pide, pizza.", "diyarbakir-wanderlog"],
    ["Kadayıfçı Hacı Levent", "Yenişehir, Elazığ Caddesi, Zorlu Apartmanı altı No:27/A", "Yenişehir", "tatli", "Kadayıf, baklava.", "diyarbakir-wanderlog"],
    ["Şafak Kahvaltı ve Yemek Salonu", "Cami Nebi Mahallesi, Kıbrıs Caddesi, Dağkapı", "Sur", "kahvalti,hamur,ev", "Kahvaltı, lahmacun, Türk mutfağı.", "diyarbakir-wanderlog"],
    ["Abbas Waffle Cadde 75", "Mezopotamya Mahallesi", "Kayapınar", "tatli,kahvalti", "Waffle ve kahvaltı.", "diyarbakir-wanderlog"],
    ["Balıkçı Kemal Diyarbakır Balık Restaurant", "Şehitlik, Eski Mardin Yolu 4. km, Ongözlü Köprü civarı", "Yenişehir", "balik,meze,kebap", "Balık ve et yemekleri, 40'tan fazla meze.", "diyarbakir-balikkemal"]
  ],
  "Kahramanmaraş": [
    ["Çınaraltı Kebap", "Azerbaycan Bulvarı", "Onikişubat", "kebap", "Kebapçı.", "kmaras-wikivoyage"]
  ],
  "Ankara": [
    ["Pizzacı Altan", "Kavaklıdere, John F. Kennedy Caddesi No:33/B", "Çankaya", "italyan", "İnce hamurlu taş fırın pizza.", "ankara-pizza"],
    ["8 Dil Pizza", "Bahçelievler Mahallesi, Azerbaycan Caddesi No:31/A", "Çankaya", "italyan,fastfood", "Büyük dilim pizza.", "ankara-pizza"],
    ["The Italian Cut - Pizza & Kitchen", "Yukarı Bahçelievler, Azerbaycan Caddesi No:135", "Çankaya", "italyan", "İnce hamurlu pizza, makarna.", "ankara-pizza"],
    ["Nico La Pizza", "Remzi Oğuz Arık Mahallesi, Büklüm Caddesi No:52/B", "Çankaya", "italyan", "İnce hamurlu pizza.", "ankara-pizza"],
    ["Unica Ekşimaya Pizza", "Remzi Oğuz Arık Mahallesi, Şimşek Sokak No:13/A", "Çankaya", "italyan", "Ekşi mayalı pizza.", "ankara-pizza"],
    ["Origano Pizza & Pasta", "Rabat Sokak No:13/A", "Çankaya", "italyan", "Odun fırınında pizza ve makarna.", "ankara-pizza"],
    ["Gusto Di Napoli Pizza & Panuozzo", "Kırkpınar Sokak No:7/C", "Çankaya", "italyan", "Napoli usulü pizza.", "ankara-pizza"],
    ["AYVAZ ege'den", "Remzi Oğuz Arık Mahallesi, Tunus Caddesi No:93/1", "Çankaya", "balik,meze", "Ege mezeleri ve mevsim balıkları.", "ankara-balik"],
    ["Sandal Meze Balık", "Yukarı Bahçelievler Mahallesi, 69. Sokak No:62/A", "Çankaya", "balik,meze", "Mezeler ve mevsim balıkları.", "ankara-balik"],
    ["Nihat Bey Et & Balık Restoran", "Kızılırmak Mahallesi, 1450. Sokak, ATM İş Merkezi B Blok No:1/F", "Çankaya", "balik,kebap,hamur", "Balık çorbası, levrek, çipura, somon; pide ve et.", "ankara-balik"],
    ["Kilogram Balık Pişirme Evi", "Eryaman 1-2 Mahallesi, 26. Cadde No:16", "Etimesgut", "balik", "Tezgahtan seçilen balık; çipura, levrek.", "ankara-balik"],
    ["Batıkent Dalyan Balık & Pişirme Evi", "Turgut Özal Mahallesi, 2206. Sokak, Batıkent Yolu No:1/G", "Yenimahalle", "balik", "Hamsi, mezgit, istavrit, levrek, çipura.", "ankara-balik"],
    ["Café des Cafés", "Kavaklıdere Mahallesi, Tunalı Hilmi Caddesi No:83/A", "Çankaya", "kahvalti,italyan", "Omlet, menemen, ev ekmeği; makarna.", "ankara-kahvalti"],
    ["Sobalı Köşk", "Kavaklıdere Mahallesi, John F. Kennedy Caddesi No:31/E", "Çankaya", "kahvalti", "Menemen, pişi, yumurtalı sıcaklar.", "ankara-kahvalti"],
    ["Kakule Fırın", "Kavaklıdere Mahallesi, Büklüm Caddesi No:30/C", "Çankaya", "kahvalti,hamur,tatli", "Kiş, poğaça, tarçınlı çörek.", "ankara-kahvalti"],
    ["Junk Vegan", "Remzi Oğuz Arık Mahallesi, Tunus Caddesi No:49", "Çankaya", "saglikli,kahvalti", "Vegan kahvaltı, soya kıymalı börek.", "ankara-kahvalti"],
    ["Köy Çayyolu", "Çayyolu Mahallesi, 2432. Cadde No:55/D", "Çankaya", "kahvalti,hamur", "Köy kahvaltısı, pişi, sac gözleme.", "ankara-kahvalti"],
    ["Bakalım N'olcak", "Dikmen Caddesi No:300", "Çankaya", "kahvalti", "Menemen ve omlet.", "ankara-kahvalti"],
    ["Kuş Sütü Meze Evi", "Büyükesat, Kahraman Kadın Sokağı No:19", "Çankaya", "meze,ev,saglikli", "Yaprak sarma, mercimek köftesi, fellah köfte, kısır.", "ankara-ev"],
    ["Adalı Meze Evi", "Barbaros Mahallesi, Güniz Sokak No:16/B", "Çankaya", "ev,corba,hamur,manti", "Tarhana ve süzme mercimek çorbası, börek, kadınbudu köfte, karnıyarık, mantı.", "ankara-ev"],
    ["Konakbay Zeytinyağlılar", "Balgat, Nasuh Akar Mahallesi, Osmanlı Caddesi No:30/A", "Çankaya", "ev,saglikli", "Zeytinyağlılar, biber dolması, imambayıldı.", "ankara-ev"],
    ["İclal Cafe & Ev Yemekleri", "Ayrancı, Güvenlik Caddesi No:65/D", "Çankaya", "ev", "Kuru fasulye pilav, et kavurma, zeytinyağlı enginar, taze fasulye.", "ankara-ev"],
    ["Taze Sıcak", "Balgat, Ziyabey Caddesi No:18/A", "Çankaya", "hamur,ev", "Sigara böreği, gözleme, içli köfte, yaprak sarma.", "ankara-ev"],
    ["Derin Mantı", "Ergazi, Nevadium Sitesi, Batı Bulvarı", "Yenimahalle", "manti,hamur", "Kayseri mantısı, gözleme, içli köfte.", "ankara-ev"],
    ["Hüsrev", "Balgat, Nasuhakar Mahallesi, Osmanlı Caddesi No:27/A", "Çankaya", "ev,kebap", "1928'den beri kuru fasulye, karalahana sarması, köfte.", "ankara-ev"],
    ["Gabo Vegan", "Yukarı Bahçelievler, Şehit H. Temel Kuğuoğlu Sokak No:17/A", "Çankaya", "saglikli,corba,manti", "Vegan mercimek çorbası, soya kıymalı mantı, fellah köfte.", "ankara-ev"],
    ["Kokoreççi Hacı Anıttepe", "Anıttepe Mahallesi, Gençlik Caddesi No:101/D", "Çankaya", "sokak", "İri kıyım fırın kokoreç.", "ankara-kokorec"],
    ["Pikolet Kokoreç", "Maltepe Mahallesi, Gençlik Caddesi No:101/C", "Çankaya", "sokak", "Gece kokoreç.", "ankara-kokorec"],
    ["Kokoreç Piro", "Emek Mahallesi, Bişkek Caddesi No:69/A", "Çankaya", "sokak", "Gece kokoreç.", "ankara-kokorec"],
    ["Onno Midye Kokoreç", "Çukurambar Mahallesi, 1470. Sokak No:9", "Çankaya", "sokak,balik", "Midye ve kokoreç.", "ankara-kokorec"],
    ["Kokoreççi Hacı İtfaiye Meydanı", "Zübeyde Hanım Mahallesi, Kazım Karabekir Caddesi, Kültür Çarşısı No:7/29", "Altındağ", "sokak", "İri kıyım kokoreç.", "ankara-kokorec"],
    ["Berlin Kokoreç & Sokak Lezzetleri", "Çayyolu Mahallesi, Doğan Taşdelen Bulvarı No:110/B", "Çankaya", "sokak,fastfood", "Kokoreç ve sokak lezzetleri.", "ankara-kokorec"],
    ["İşler Güçler Izgara & Kokoreç", "Bahçelievler Mahallesi, Taşkent Caddesi No:19/B", "Çankaya", "sokak,kebap", "24 saat kokoreç, ızgara et ve köfte.", "ankara-kokorec"],
    ["Bolulu Hasan Usta Kızılay", "Meşrutiyet Mahallesi, Atatürk Bulvarı No:95", "Çankaya", "tatli", "Künefe ve sütlü tatlılar.", "ankara-kunefe"],
    ["Bolulu Hasan Usta Tunalı Hilmi", "Kavaklıdere, Tunalı Hilmi Caddesi No:80/A", "Çankaya", "tatli", "Künefe, kazandibi, ekmek kadayıfı.", "ankara-kunefe"],
    ["Dayı Künefe ve Katmer", "Balgat, Ziyabey Caddesi No:45", "Çankaya", "tatli", "Künefe ve katmer.", "ankara-kunefe"],
    ["Efsane Künefe", "Oğuzlar Mahallesi, 1380. Sokak No:1A, Balgat", "Çankaya", "tatli", "Fıstıklı künefe, baklava, katmer, dondurma.", "ankara-kunefe"],
    ["Kaymaklava Bahçelievler", "Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi No:34/A", "Çankaya", "tatli", "Künefe ve baklava.", "ankara-kunefe"],
    ["Hacıbaba Çayyolu", "Prof. Dr. Ahmet Taner Kışlalı Mahallesi, Alacaatlı Caddesi No:16", "Çankaya", "kebap,tatli,hamur,kahvalti", "Antep mutfağı; baklava, künefe, su böreği, lahmacun, kebap.", "ankara-kunefe"],
    ["Meşhur Dürüm Aspava Çayyolu", "Koru Mahallesi, 2432. Cadde No:200/B", "Çankaya", "kebap,tavuk,tatli", "Kebap, döner, künefe.", "ankara-kunefe"]
  ],
  "İstanbul": [
    ["Sur Balık", "Bebek Arnavutköy Caddesi No:52", "Beşiktaş", "balik,meze", "Mevsim balıkları, mezeler, ara sıcaklar.", "istanbul-balik"],
    ["Yeniköy Balıkçısı", "Yeniköy, İskele Sokak No:3", "Sarıyer", "balik,meze", "Mezeler, ara sıcaklar, mevsim balıkları.", "istanbul-balik"],
    ["Aterina Balık", "Sinanpaşa Mahallesi, Köyiçi Meydan Sokak No:4/B", "Beşiktaş", "balik,sokak,meze", "Uskumru ekmek, ızgara levrek, hamsi tava, mevsim balıkları.", "istanbul-balik"],
    ["Montenegro Balık", "Suadiye Mahallesi, Bostancı Hatboyu Sokak No:6/C", "Kadıköy", "balik,meze", "Balık köftesi, balık kokoreç, kalamar.", "istanbul-balik"],
    ["Adem Baba", "Arnavutköy Mahallesi, Satış Meydanı Sokak No:2", "Beşiktaş", "balik", "1992'den beri balık çeşitleri.", "istanbul-balik"],
    ["Sunmare", "Koşuyolu, Muhittin Üstündağ Sokak No:69", "Kadıköy", "balik,meze", "Çıtır levrek, balık köftesi, ızgara ahtapot, kılıç.", "istanbul-balik"],
    ["Balıkçı Ersin", "Ferit Selimpaşa Caddesi, Düzgün Sokak No:12/A", "Bahçelievler", "balik,corba", "Somon şiş, sardalya, lüfer, çipura, balık çorbası.", "istanbul-balik"],
    ["Roka Balık Restaurant", "Koşuyolu Mahallesi, Muhittin Üstündağ Caddesi No:59", "Kadıköy", "balik,meze", "Izgara levrek, istavrit tava, Girit ezmesi.", "istanbul-balik"],
    ["Fasılhane", "Ekinoks AVM, Büyükşehir Mahallesi, Cumhuriyet Caddesi No:1", "Beylikdüzü", "balik,meze", "Çipura, levrek, somon; midye dolma ve tava, kalamar, lakerda.", "istanbul-balik"]
  ]
};

export const GUIDE_PLACES: Record<string, GuidePlace[]> = Object.fromEntries(
  Object.entries(RAW).map(([city, rows]) => [
    city,
    rows.map(([name, address, district, kinds, known, source]) => ({
      name,
      address,
      district,
      kinds: kinds.split(",") as PlaceKind[],
      known,
      source
    }))
  ])
);
