export interface RealRestaurant {
  name: string;
  rating: number;
  reviewCount: number;
  area: string;
  commentTr: string;
  commentEn: string;
}

export type RestaurantCategory = "burger" | "kebab" | "vegan" | "soup" | "pasta" | "dessert" | "general";

export const REAL_RESTAURANTS_DB: Record<string, Record<RestaurantCategory, RealRestaurant[]>> = {
  "İstanbul": {
    burger: [
      { name: "Zula", rating: 4.4, reviewCount: 2560, area: "Harbiye", commentTr: "Trüflü mayonezli burgeri tek kelimeyle efsane, ekmeği çok yumuşak.", commentEn: "The truffle mayo burger is legendary, the bun is incredibly soft." },
      { name: "B.O.B. Best of Burger", rating: 4.5, reviewCount: 1850, area: "Moda", commentTr: "Moda'nın en iyi burgercisi, köftesi çok sulu ve lezzetli.", commentEn: "Best burger place in Moda, the patty is very juicy and delicious." },
      { name: "Virginia Angus", rating: 4.3, reviewCount: 3120, area: "Nişantaşı", commentTr: "Angus eti çok başarılı, patatesleri baharatlı ve sıcak.", commentEn: "Angus meat is very successful, the fries are spiced and hot." }
    ],
    kebab: [
      { name: "Bayramoğlu Döner", rating: 4.8, reviewCount: 12400, area: "Kavacık", commentTr: "Odun ateşinde pişen incecik gerçek yaprak döner. Hizmet çok hızlı.", commentEn: "Thinly sliced real leaf doner cooked over wood fire. Service is fast." },
      { name: "Şehzade Cağ Kebabı", rating: 4.7, reviewCount: 6150, area: "Sirkeci", commentTr: "Kuzu eti lokum gibi, odun ateşinin kokusu etle harika bütünleşmiş.", commentEn: "The lamb is like Turkish delight, the smell of wood fire is perfect." },
      { name: "Zübeyir Ocakbaşı", rating: 4.5, reviewCount: 2800, area: "Taksim", commentTr: "Köz patlıcanlı kebap ve kuzu pirzola harika. Gerçek ocakbaşı keyfi.", commentEn: "Eggplant kebab and lamb chops are great. Real ocakbasi pleasure." }
    ],
    vegan: [
      { name: "Bi Nevi Deli", rating: 4.5, reviewCount: 840, area: "Etiler", commentTr: "Vegan hamburgerleri ve avokado kaseleri harika. Sunum çok estetik.", commentEn: "Vegan burgers and avocado bowls are great. Aesthetic presentation." },
      { name: "Vegan İstanbul", rating: 4.6, reviewCount: 920, area: "Cihangir", commentTr: "Ev yemeği tadında lezzetli ve uygun fiyatlı vegan seçenekler.", commentEn: "Delicious and affordable home-style vegan options." },
      { name: "Inkase", rating: 4.4, reviewCount: 1150, area: "Fenerbahçe", commentTr: "Sağlıklı ve renkli kaseler. Hem göze hem damağa hitap ediyor.", commentEn: "Healthy and colorful bowls. Appeals to both eyes and palate." }
    ],
    soup: [
      { name: "Karaköy Çorbacısı", rating: 4.3, reviewCount: 1950, area: "Karaköy", commentTr: "Çorba çeşidi çok fazla ve hepsi sıcak. Gece sonu için ideal.", commentEn: "Huge variety of soups and all are hot. Ideal for late night cravings." },
      { name: "Lale İşkembecisi", rating: 4.2, reviewCount: 1280, area: "Beyoğlu", commentTr: "Tarihi ve şık bir mekan. İşkembe çorbası çok temiz ve lezzetli.", commentEn: "Historic and classy venue. Clean and delicious tripe soup." }
    ],
    pasta: [
      { name: "Fauna", rating: 4.6, reviewCount: 820, area: "Ataşehir", commentTr: "El yapımı makarnaları ve sosları tek kelimeyle gurme işi.", commentEn: "Handmade pastas and sauces are pure gourmet craft." },
      { name: "Da Mario", rating: 4.4, reviewCount: 1530, area: "Etiler", commentTr: "İtalyan pizzaları ve fettuccine makarnaları çok lezzetli, şık ortam.", commentEn: "Italian pizzas and fettuccine pastas are delicious, classy ambiance." }
    ],
    dessert: [
      { name: "Karaköy Güllüoğlu", rating: 4.7, reviewCount: 22100, area: "Karaköy", commentTr: "Dünyanın en iyi baklavası burada yapılıyor. Çıtır çıtır ve bol fıstıklı.", commentEn: "The best baklava in the world. Crispy and full of pistachios." },
      { name: "Hafız Mustafa 1864", rating: 4.6, reviewCount: 18500, area: "Sirkeci", commentTr: "Şerbetli tatlıları ve sütlü nuriye tabağı harika, çay ikramı çok iyi.", commentEn: "Traditional syrup desserts and sutlu nuriye are amazing." }
    ],
    general: [
      { name: "Midpoint", rating: 4.1, reviewCount: 4850, area: "Bebek", commentTr: "Boğaz manzarası eşliğinde dünya mutfağından geniş seçenekler.", commentEn: "Wide selection of world cuisine with a beautiful Bosphorus view." },
      { name: "BigChefs", rating: 4.2, reviewCount: 3720, area: "Tarabya", commentTr: "Kahvaltısı ve ana yemekleri çok başarılı. Servis kaliteli.", commentEn: "Breakfast and main courses are highly successful. Quality service." }
    ]
  },
  "Ankara": {
    burger: [
      { name: "Franco Burger", rating: 4.5, reviewCount: 1240, area: "Tunalı", commentTr: "Smash burgerleri Ankara'da tek geçilir. Malzeme kalitesi çok yüksek.", commentEn: "Smash burgers are the best in Ankara. Ingredients quality is high." },
      { name: "Big Bang Burger", rating: 4.4, reviewCount: 1680, area: "Bahçelievler", commentTr: "Sosları ve çıtır patatesleri harika. Öğrenciler için çok popüler.", commentEn: "Their sauces and crispy fries are great. Very popular among students." },
      { name: "Burger No7", rating: 4.3, reviewCount: 2150, area: "Çankaya", commentTr: "Ev yapımı ekmeği ve sulu köftesiyle doyurucu bir alternatif.", commentEn: "Filling alternative with homemade bun and juicy patty." }
    ],
    kebab: [
      { name: "Cici Piknik", rating: 4.7, reviewCount: 4250, area: "Kızılay", commentTr: "Kömür ateşinde pişen efsanevi Ankara döneri. Önünde hep kuyruk var.", commentEn: "Legendary Ankara doner cooked over charcoal. Always a queue." },
      { name: "Tavacı Recep Usta", rating: 4.5, reviewCount: 5120, area: "Dikmen", commentTr: "Saç tava ve fırın kaburga mükemmel. Mezeleri ve ikramları çok bol.", commentEn: "Sizzling pan and roasted ribs are perfect. Generous appetizers." },
      { name: "Kebapçı Emin Usta", rating: 4.6, reviewCount: 3420, area: "Ulus", commentTr: "Tarihi Ulus'ta otantik esnaf kebapçısı. Yaprak döneri çok lezzetli.", commentEn: "Authentic local kebab house in historic Ulus. Tasty leaf doner." }
    ],
    vegan: [
      { name: "Veganka", rating: 4.5, reviewCount: 780, area: "Tunalı", commentTr: "Ankara'da vegan burger ve vegan mantı yiyebileceğiniz en tatlı mekan.", commentEn: "Sweetest place in Ankara for vegan burgers and vegan manti." },
      { name: "Terrarossa Vegan Cafe", rating: 4.4, reviewCount: 450, area: "Bahçelievler", commentTr: "Bitkisel sütlü kahveleri ve vegan tatlıları denemeye değer.", commentEn: "Plant-milk coffees and vegan desserts are well worth trying." }
    ],
    soup: [
      { name: "Meşhur Kırmızı Kütüphane Çorbacısı", rating: 4.5, reviewCount: 2950, area: "İskitler", commentTr: "Gece yarısı çorbası için Ankara'nın klasiği. Beyranı çok başarılı.", commentEn: "Ankara's classic for midnight soup. Their Beyran is very successful." },
      { name: "Devran Çorba", rating: 4.3, reviewCount: 1410, area: "Ostim", commentTr: "Esnaf usulü mercimek ve ayak paça çorbası çok lezzetli.", commentEn: "Trade-style lentil and trotter soup are very delicious." }
    ],
    pasta: [
      { name: "Double Zero Pizzeria", rating: 4.6, reviewCount: 1120, area: "GOP", commentTr: "Odun ateşinde pişen pizzaların hamuru incecik ve çıtır.", commentEn: "Pizzas cooked in wood-fired oven have thin and crispy crust." },
      { name: "Louise Cafe", rating: 4.4, reviewCount: 1350, area: "Filistin Caddesi", commentTr: "Makarnaları taze açım ve sosları çok zengin, şık bir mekan.", commentEn: "Pastas are fresh and sauces are rich, a very elegant place." }
    ],
    dessert: [
      { name: "Baklavacı Hacıbaba", rating: 4.5, reviewCount: 5850, area: "Balgat", commentTr: "Ankara'da baklava denince akla gelen ilk yer. Havuç dilimi nefis.", commentEn: "First place that comes to mind for baklava in Ankara. Carrot slice is delicious." },
      { name: "Zeynel Çilli", rating: 4.3, reviewCount: 1720, area: "Çankaya", commentTr: "Tavukgöğsü ve kazandibi gibi geleneksel sütlü tatlıları harika.", commentEn: "Traditional milk desserts like tavukgogsu and kazandibi are great." }
    ],
    general: [
      { name: "Quick China", rating: 4.4, reviewCount: 3950, area: "Tunalı", commentTr: "Suşileri ve Asya mutfağı yemekleri çok başarılı ve hızlı servis.", commentEn: "Sushi and Asian dishes are very successful, fast service." },
      { name: "Midpoint", rating: 4.1, reviewCount: 2200, area: "Çankaya", commentTr: "Geniş menüsüyle her zevke uygun yemek bulmak mümkün.", commentEn: "It is possible to find food for every taste with its wide menu." }
    ]
  },
  "İzmir": {
    burger: [
      { name: "Bready", rating: 4.5, reviewCount: 1420, area: "Bostanlı", commentTr: "Bostanlı'nın en lezzetli burgerleri. Sosları el yapımı ve taze.", commentEn: "Most delicious burgers in Bostanli. Sauces are handmade and fresh." },
      { name: "Burger House", rating: 4.3, reviewCount: 1150, area: "Alsancak", commentTr: " Alsancak sokaklarında lezzetli ve doyurucu bir burger kaçamağı.", commentEn: "Delicious and filling burger escape in Alsancak streets." },
      { name: "Ohannes Burger", rating: 4.2, reviewCount: 2650, area: "Bornova", commentTr: "Farklı sos seçenekleri ve büyük porsiyonlu menüleriyle harika.", commentEn: "Great with different sauce options and large portion menus." }
    ],
    kebab: [
      { name: "Adil Müftüoğlu", rating: 4.6, reviewCount: 2150, area: "Konak", commentTr: "1955'ten beri değişmeyen lezzet. Kuzu tandır ağızda eriyor.", commentEn: "Unchanged taste since 1955. Lamb tandoori melts in the mouth." },
      { name: "Cihan Et", rating: 4.4, reviewCount: 1520, area: "Bostanlı", commentTr: "Etleri çok kaliteli, beyti ve adana kebapları harika pişmiş.", commentEn: "Meat quality is high, beyti and adana kebabs are cooked perfectly." }
    ],
    vegan: [
      { name: "Yaşar Kemal Vegan Cafe", rating: 4.6, reviewCount: 380, area: "Alsancak", commentTr: "İzmir'in merkezinde çok samimi bir vegan vaha. Mantıları nefis.", commentEn: "Very cozy vegan oasis in the center of Izmir. Manti is delicious." },
      { name: "Roots Cafe & Botanique", rating: 4.5, reviewCount: 540, area: "Bostanlı", commentTr: "Bitkiler arasında huzurlu ortam ve leziz bitkisel kaseler.", commentEn: "Peaceful environment among plants and delicious plant-based bowls." }
    ],
    soup: [
      { name: "Çorbacı İsmet Usta", rating: 4.4, reviewCount: 1850, area: "Konak", commentTr: "Kelle paça ve beyin çorbası İzmir'de buranın üzerine tanımam.", commentEn: "I know no better place in Izmir for kelle paca and brain soup." },
      { name: "Kardeşler Çorbacısı", rating: 4.2, reviewCount: 980, area: "Bornova", commentTr: "Sıcak ve samimi ortamda lezzetli esnaf usulü çorbalar.", commentEn: "Tasty trade-style soups in a warm and friendly environment." }
    ],
    pasta: [
      { name: "Leone Patisserie", rating: 4.6, reviewCount: 1250, area: "Alsancak", commentTr: "Fransız tarzı kruvasan ve makarnaları harika, sunumlar şık.", commentEn: "French style croissants and pastas are great, presentations are elegant." },
      { name: "Murano's", rating: 4.5, reviewCount: 880, area: "Urla", commentTr: "Ege malzemeleriyle harmanlanmış gurme İtalyan yemekleri.", commentEn: "Gourmet Italian dishes blended with local Aegean ingredients." }
    ],
    dessert: [
      { name: "Meşhur Hisarönü Şambalicisi", rating: 4.8, reviewCount: 4350, area: "Kemeraltı", commentTr: "Tarihi Kemeraltı'nda sıcak ve kaymaklı şambali tatlısı efsanedir.", commentEn: "Warm and clotted cream sambali dessert in historic Kemeralti is legendary." },
      { name: "Reyhan Pastanesi", rating: 4.6, reviewCount: 6850, area: "Alsancak", commentTr: "Alsancak klasiği. Polka tatlısı ve vişneli pastası muazzam.", commentEn: "Alsancak classic. Polka dessert and cherry cake are magnificent." }
    ],
    general: [
      { name: "Sir Winston Tea House", rating: 4.3, reviewCount: 2250, area: "Bostanlı", commentTr: "Geniş çay menüsü ve dünya mutfağı lezzetleriyle harika bir buluşma noktası.", commentEn: "Great meeting point with its wide tea menu and world cuisine dishes." }
    ]
  },
  "Bursa": {
    burger: [
      { name: "Biber Burger", rating: 4.4, reviewCount: 920, area: "Nilüfer", commentTr: "Nilüfer'de lezzetli hamburgerlerin adresi. Sosları çok başarılı.", commentEn: "The address of delicious burgers in Nilufer. Sauces are successful." }
    ],
    kebab: [
      { name: "Kebapçı İskender", rating: 4.5, reviewCount: 8250, area: "Mavi Köşe", commentTr: "İskender kebabın doğduğu tarihi yer. Tereyağı kokusu muhteşem.", commentEn: "The historic birthplace of Iskender kebab. The smell of butter is magnificent." },
      { name: "Uludağ Kebapçısı Cemal & Cemil Usta", rating: 4.6, reviewCount: 6420, area: "Osmangazi", commentTr: "Yaprak etin kalitesi, domates sosu ve yoğurdun uyumu olağanüstü.", commentEn: "The quality of meat, tomato sauce and yogurt harmony is outstanding." }
    ],
    vegan: [
      { name: "Vegan Kantin", rating: 4.5, reviewCount: 220, area: "Nilüfer", commentTr: "Bursa'da tamamen bitkisel beslenenler için harika yemekler ve kekler.", commentEn: "Great food and cakes in Bursa for those who eat fully plant-based." }
    ],
    soup: [
      { name: "Hacı Şerif Çorba", rating: 4.3, reviewCount: 870, area: "Osmangazi", commentTr: "Tarihi çarşıda sıcak bir mola. Mercimek ve ezogelin çorbaları çok iyi.", commentEn: "A warm break in the historic bazaar. Lentil and ezogelin soups are very good." }
    ],
    pasta: [
      { name: "Ristorante Roma", rating: 4.4, reviewCount: 620, area: "Nilüfer", commentTr: "Bursa'da gerçek İtalyan pizzası ve el yapımı makarna yiyebileceğiniz nezih mekan.", commentEn: "Decent place in Bursa to eat authentic Italian pizza and handmade pasta." }
    ],
    dessert: [
      { name: "Kafkas Pastanesi", rating: 4.3, reviewCount: 3150, area: "Osmangazi", commentTr: "Kestane şekerinin mucidi. Kestaneli pasta ve tatlıları harika.", commentEn: "Inventor of candied chestnuts. Chestnut cakes and desserts are great." }
    ],
    general: [
      { name: "Özgen Çay Bahçesi", rating: 4.2, reviewCount: 4550, area: "FSM", commentTr: "Bursa klasiği çay bahçesi. Simit, çay ve kahvaltı keyfi için ideal.", commentEn: "Bursa classic tea garden. Ideal for simit, tea and breakfast enjoyment." }
    ]
  },
  "Antalya": {
    burger: [
      { name: "Route Burger House", rating: 4.4, reviewCount: 1250, area: "Kaleiçi", commentTr: "Kaleiçi sokaklarında lezzetli burgerler ve rock müzik eşliğinde harika ortam.", commentEn: "Delicious burgers in Kaleici streets and great atmosphere with rock music." }
    ],
    kebab: [
      { name: "7 Mehmet", rating: 4.7, reviewCount: 9250, area: "Muratpaşa", commentTr: "Dünya standartlarında bir gastronomi deneyimi. Oğlak tandır ve piyaz nefis.", commentEn: "World-class gastronomy experience. Roasted kid goat and piyaz are delicious." },
      { name: "Parlak Restaurant", rating: 4.4, reviewCount: 3520, area: "Kaleiçi", commentTr: "Közde pişen çevirme tavukları ve kebapları Antalya'nın efsanesidir.", commentEn: "Charcoal rotisserie chicken and kebabs are legends of Antalya." },
      { name: "Piyazcı Sami", rating: 4.5, reviewCount: 1950, area: "Merkez", commentTr: "Tahinli Antalya piyazının gerçek adresi. Yumurtalı ve bol soslu.", commentEn: "The real address of Antalya piyaz with tahini. Loaded with sauce." }
    ],
    vegan: [
      { name: "Rokka", rating: 4.6, reviewCount: 870, area: "Kaleiçi", commentTr: "Kaleiçi'nde vegan falafel ve taze humus yiyebileceğiniz en iyi yer.", commentEn: "Best place in Kaleici to eat vegan falafel and fresh hummus." }
    ],
    soup: [
      { name: "Paçacı Şaban", rating: 4.5, reviewCount: 1420, area: "Muratpaşa", commentTr: "Antalya usulü paça çorbası çok lezzetli, sarımsaklı sosu harika.", commentEn: "Antalya-style trotter soup is very tasty, garlic sauce is great." }
    ],
    pasta: [
      { name: "Il Vicino Pizzeria", rating: 4.4, reviewCount: 1120, area: "Kaleiçi", commentTr: "Kaleiçi'nde taş fırında pişen çıtır İtalyan pizzaları çok başarılı.", commentEn: "Stone-baked crispy Italian pizzas in Kaleici are highly successful." }
    ],
    dessert: [
      { name: "Akdeniz Dondurma", rating: 4.5, reviewCount: 5820, area: "Lara", commentTr: "Keçi sütlü yanık dondurması Antalya klasiğidir. Tadı çok özgün.", commentEn: "Burnt ice cream with goat milk is an Antalya classic. Very unique taste." }
    ],
    general: [
      { name: "Shakespeare Coffee & Bistro", rating: 4.2, reviewCount: 2820, area: "Lara", commentTr: "Lara sahilinde keyifli bir içecek veya akşam yemeği için çok uygun.", commentEn: "Very suitable for a pleasant drink or dinner on the Lara coast." }
    ]
  },
  "Adana": {
    burger: [
      { name: "Burger X Adana", rating: 4.3, reviewCount: 790, area: "Turgut Özal", commentTr: "Adana'da el yapımı burger ve çıtır patates için en çok tercih edilen yer.", commentEn: "Most preferred place in Adana for handmade burgers and crispy fries." }
    ],
    kebab: [
      { name: "Kebapçı Mesut", rating: 4.6, reviewCount: 3850, area: "Kuruköprü", commentTr: "1921'den beri değişmeyen lezzet. Zırh kıyması Adana kebabı lokum gibi.", commentEn: "Unchanged taste since 1921. Hand-minced Adana kebab is like delight." },
      { name: "Cihangir Kebap", rating: 4.6, reviewCount: 6250, area: "Seyhan", commentTr: "Kebapları çok sulu ve lezzetli, masaya gelen mezeler inanılmaz bol.", commentEn: "Kebabs are very juicy and tasty, table appetizers are incredibly abundant." },
      { name: "Onbaşılar Kebap", rating: 4.5, reviewCount: 4820, area: "Seyhan", commentTr: "Seyhan baraj gölü manzarası eşliğinde harika Adana kebabı keyfi.", commentEn: "Great Adana kebab enjoyment with Seyhan dam lake views." }
    ],
    vegan: [
      { name: "Green & More", rating: 4.4, reviewCount: 160, area: "Seyhan", commentTr: "Adana'da vegan ve glütensiz beslenenler için nadide ve kaliteli bir yer.", commentEn: "Rare and quality place in Adana for vegan and gluten-free diets." }
    ],
    soup: [
      { name: "Bolkepçe Çorbacısı", rating: 4.5, reviewCount: 2820, area: "Seyhan", commentTr: "Adana usulü acılı çorbalar ve kelle paça. İkramları çok lezzetli.", commentEn: "Adana-style spicy soups and kelle paca. Appetizers are very tasty." }
    ],
    pasta: [
      { name: "Pepper Pizza", rating: 4.3, reviewCount: 530, area: "Seyhan", commentTr: "İnce hamurlu ve bol malzemeli pizzaları Adana'da çok popüler.", commentEn: "Thin crust and loaded pizzas are very popular in Adana." }
    ],
    dessert: [
      { name: "Tatlıcı Köse", rating: 4.5, reviewCount: 3920, area: "Turgut Özal", commentTr: "Taş kadayıf ve karakuş tatlıları çıtır çıtır ve hafif, harika.", commentEn: "Tas kadayif and karakus desserts are crispy and light, wonderful." }
    ],
    general: [
      { name: "Midpoint M1", rating: 4.1, reviewCount: 1620, area: "Seyhan", commentTr: "Alışveriş merkezinde dünya mutfağının seçkin lezzetlerini sunan nezih mekan.", commentEn: "Decent place offering select tastes of world cuisine in the shopping center." }
    ]
  },
  "Gaziantep": {
    burger: [
      { name: "Burger Sound", rating: 4.2, reviewCount: 460, area: "Şehitkamil", commentTr: "Antep'te etin dışına çıkıp lezzetli bir burger yemek isteyenler için ideal.", commentEn: "Ideal for those in Antep who want to step outside meat and eat a tasty burger." }
    ],
    kebab: [
      { name: "İmam Çağdaş", rating: 4.6, reviewCount: 18550, area: "Şahinbey", commentTr: "Gaziantep gastronomi kültürünün zirvesi. Ali nazik kebap ve baklava enfis.", commentEn: "The peak of Gaziantep gastronomy. Ali nazik kebab and baklava are delicious." },
      { name: "Kebapçı Halil Usta", rating: 4.7, reviewCount: 12250, area: "Karşıyaka", commentTr: "Küşleme etinin dünyadaki en iyi adresi. Yumuşacık lokum kıvamında.", commentEn: "The best address in the world for kusleme meat. Soft delight texture." },
      { name: "Aşina Gaziantep Mutfağı", rating: 4.5, reviewCount: 4120, area: "Şehitkamil", commentTr: "Antep'in sulu yemekleri, yuvalama ve içli köftesi için en doğru adres.", commentEn: "The right address for Antep's traditional stews, yuvalama and kibbeh." }
    ],
    vegan: [
      { name: "Nohutçu Mustafa", rating: 4.6, reviewCount: 1820, area: "Şahinbey", commentTr: "Gaziantep'in meşhur nohut dürümü. Doğal olarak vegan, çok lezzetli ve doyurucu.", commentEn: "Gaziantep's famous chickpea wrap. Naturally vegan, very tasty and filling." }
    ],
    soup: [
      { name: "Metanet Beyran", rating: 4.7, reviewCount: 9850, area: "Şahinbey", commentTr: "Gaziantep'in tescilli beyran çorbası. Bol sarımsaklı, acılı ve çok sıcak.", commentEn: "Gaziantep's registered beyran soup. Lots of garlic, spicy and very hot." }
    ],
    pasta: [
      { name: "Bella İtalya Antep", rating: 4.3, reviewCount: 380, area: "Şehitkamil", commentTr: "Antep mutfağının ortasında lezzetli kremalı makarna ve pizza alternatifi.", commentEn: "Tasty creamy pasta and pizza alternative in the middle of Antep cuisine." }
    ],
    dessert: [
      { name: "Koçak Baklava", rating: 4.8, reviewCount: 14250, area: "Şehitkamil", commentTr: "Fıstık kalitesi ve çıtırlığıyla dünyanın en iyi baklavacılarından biri.", commentEn: "One of the best baklava houses in the world with pistachio quality and crunch." },
      { name: "Zekeriya Usta", rating: 4.6, reviewCount: 4820, area: "Şahinbey", commentTr: "Antep'in geleneksel katmer tatlısını taş fırında yapan efsane usta.", commentEn: "Legendary master making Antep's traditional katmer dessert in stone oven." }
    ],
    general: [
      { name: "Bayazhan", rating: 4.4, reviewCount: 3250, area: "Şahinbey", commentTr: "Tarihi handa şık bir avlu, canlı müzik ve zengin yerel mezeler.", commentEn: "Elegant courtyard in a historic inn, live music and rich local appetizers." }
    ]
  },
  "Konya": {
    burger: [
      { name: "Burger Station Konya", rating: 4.2, reviewCount: 560, area: "Selçuklu", commentTr: "Konya'da kaliteli hamburger köftesi ve lezzetli patates kızartması.", commentEn: "Quality burger patty and delicious french fries in Konya." }
    ],
    kebab: [
      { name: "Hacı Şükrü", rating: 4.5, reviewCount: 3820, area: "Merkez", commentTr: "1907'den beri fırın kebabının adresi. Kuzu eti saatlerce fırında pişmiş.", commentEn: "Address of oven kebab since 1907. Lamb meat is slow-cooked for hours." },
      { name: "Cemo", rating: 4.5, reviewCount: 4850, area: "Selçuklu", commentTr: "Konya'nın tescilli etliekmeği çıtır çıtır ve çok uzun, lezzeti harika.", commentEn: "Konya's registered etliekmek is crispy, very long and tastes great." },
      { name: "Somatçı Fihi Ma Fih", rating: 4.7, reviewCount: 1220, area: "Selçuklu", commentTr: "Mevlevi mutfağı ve Selçuklu saray yemekleri. Şerbetleri ve etleri çok özel.", commentEn: "Mevlevi kitchen and Seljuk palace dishes. Sherbets and meats are very special." }
    ],
    vegan: [
      { name: "Limon Cafe Konya", rating: 4.3, reviewCount: 180, area: "Selçuklu", commentTr: "Bitkisel salatalar ve hafif mezeler bulabileceğiniz huzurlu bir cafe.", commentEn: "Peaceful cafe where you can find plant-based salads and light appetizers." }
    ],
    soup: [
      { name: "Paçacı Şems", rating: 4.3, reviewCount: 1520, area: "Selçuklu", commentTr: "Konya'da bamya çorbası ve kelle paça içebileceğiniz en iyi çorbacı.", commentEn: "Best soup shop in Konya to drink okra soup and kelle paca." }
    ],
    pasta: [
      { name: "Venezia Pizzeria Konya", rating: 4.4, reviewCount: 320, area: "Selçuklu", commentTr: "Konya'da ince hamurlu İtalyan pizzası ve el yapımı makarnalar.", commentEn: "Thin-crust Italian pizza and handmade pastas in Konya." }
    ],
    dessert: [
      { name: "Konya Sarmacısı", rating: 4.4, reviewCount: 860, area: "Merkez", commentTr: "Geleneksel kaymaklı Konya sarması ve sac arası tatlısı nefis.", commentEn: "Traditional Konya sarma with clotted cream and sacarasi dessert are delicious." }
    ],
    general: [
      { name: "Tarihi Konak Restoran", rating: 4.3, reviewCount: 1100, area: "Selçuklu", commentTr: "Tarihi konak atmosferinde Konya'nın tüm yöresel lezzetleri bir arada.", commentEn: "All regional tastes of Konya together in a historical mansion atmosphere." }
    ]
  },
  "Trabzon": {
    burger: [
      { name: "Bülbül Burger", rating: 4.3, reviewCount: 460, area: "Ortahisar", commentTr: "Trabzon'da el yapımı sosları ve sulu köftesiyle öne çıkan kaliteli burgerci.", commentEn: "Quality burger shop in Trabzon standing out with handmade sauces and juicy patties." }
    ],
    kebab: [
      { name: "Akçaabat Köftecisi Nihat Usta", rating: 4.5, reviewCount: 8220, area: "Akçaabat", commentTr: "Akçaabat köftesinin tescilli ve en eski adresi. Yanında piyazla harika.", commentEn: "Registered and oldest address of Akcaabat meatballs. Great with piyaz." },
      { name: "Cemilusta", rating: 4.4, reviewCount: 6520, area: "Ortahisar", commentTr: "Trabzon merkezde lezzetli köfteler, kuymak ve Karadeniz pideleri.", commentEn: "Delicious meatballs, kuymak and Black Sea pides in Trabzon center." },
      { name: "Bordo Mavi Balık", rating: 4.6, reviewCount: 3220, area: "Ortahisar", commentTr: "Mevsimlik taze Karadeniz balıkları ve mezgiti harika pişiren şık restoran.", commentEn: "Classy restaurant cooking seasonal fresh Black Sea fish and whiting perfectly." }
    ],
    vegan: [
      { name: "Boztepe Bahçesi", rating: 4.2, reviewCount: 5420, area: "Boztepe", commentTr: "Harika Trabzon manzarası eşliğinde çay, fındık ve vegan patates cipsi.", commentEn: "Tea, hazelnuts and vegan potato chips accompanied by great Trabzon view." }
    ],
    soup: [
      { name: "Galanoğlu Çorba", rating: 4.3, reviewCount: 920, area: "Ortahisar", commentTr: "Yöresel karalahana çorbası ve mercimek çorbası içmek için ideal esnaf lokantası.", commentEn: "Ideal local diner to drink regional collard greens soup and lentil soup." }
    ],
    pasta: [
      { name: "Pizzeria Trabzon", rating: 4.2, reviewCount: 280, area: "Ortahisar", commentTr: "Trabzon'da taş fırın İtalyan pizzası alternatifi arayanlara tavsiye edilir.", commentEn: "Recommended for those looking for a stone-oven Italian pizza alternative in Trabzon." }
    ],
    dessert: [
      { name: "Beton Helva", rating: 4.4, reviewCount: 1820, area: "Ortahisar", commentTr: "Trabzon'un tarihi beton helvacısı. Yaz helvası ve irmik helvası çok lezzetli.", commentEn: "Trabzon's historic helva maker. Summer helva and semolina helva are very tasty." }
    ],
    general: [
      { name: "Karadeniz Sofrası", rating: 4.4, reviewCount: 1500, area: "Ortahisar", commentTr: "Karadeniz pidesi, karalahana sarması ve tereyağlı pilavın adresi.", commentEn: "The address of Black Sea pide, collard greens rolls and buttery rice." }
    ]
  },
  "Muğla": {
    burger: [
      { name: "No 10 Burger", rating: 4.4, reviewCount: 660, area: "Merkez", commentTr: "Muğla merkezde el yapımı sosları ve lezzetli köftesiyle en iyi burgerci.", commentEn: "Best burger place in Mugla center with handmade sauces and tasty patty." },
      { name: "Joy Burger", rating: 4.3, reviewCount: 730, area: "Bodrum", commentTr: "Bodrum'da deniz sonrası yiyebileceğiniz doyurucu ve lezzetli burgerler.", commentEn: "Filling and tasty burgers you can eat after sea in Bodrum." }
    ],
    kebab: [
      { name: "Orfoz", rating: 4.5, reviewCount: 1220, area: "Bodrum", commentTr: "Muazzam deniz mahsulleri ve fırınlanmış istiridyeler. Şık bir gurme deneyimi.", commentEn: "Amazing seafood and baked oysters. A classy gourmet experience." },
      { name: "Mimoza", rating: 4.4, reviewCount: 1820, area: "Gümüşlük", commentTr: "Denizin tam kenarında, fenerler altında balık ve meze keyfi. Manzara efsane.", commentEn: "Fish and appetizers right by the sea under lanterns. View is legendary." },
      { name: "Limon Bodrum", rating: 4.5, reviewCount: 2220, area: "Gümüşlük", commentTr: "Gün batımı manzarası eşliğinde yaratıcı mezeler ve kuzu incik çok lezzetli.", commentEn: "Creative appetizers and lamb shank are delicious, with sunset views." }
    ],
    vegan: [
      { name: "Vegan Bodrum", rating: 4.6, reviewCount: 260, area: "Bodrum", commentTr: "Bodrum sokaklarında harika vegan pizzalar ve bitkisel tatlılar sunan tatlı mekan.", commentEn: "Sweet place in Bodrum streets offering great vegan pizzas and plant desserts." }
    ],
    soup: [
      { name: "Konyalı Ahmet Usta Muğla", rating: 4.1, reviewCount: 950, area: "Merkez", commentTr: "Sıcak çorba ve hızlı etliekmek servisi için güvenilir bir esnaf lokantası.", commentEn: "Reliable local diner for hot soup and fast etliekmek service." }
    ],
    pasta: [
      { name: "Arka Ristorante", rating: 4.5, reviewCount: 1100, area: "Bodrum", commentTr: "Bodrum marinada harika makarna ve odun ateşinde pizza çeşitleri.", commentEn: "Great pasta and wood-fired pizza varieties in Bodrum marina." }
    ],
    dessert: [
      { name: "Bodrum Mandalin Pastanesi", rating: 4.4, reviewCount: 920, area: "Bodrum", commentTr: "Bodrum mandalinalı dondurma ve mandalinalı gazoz efsane lezzetli.", commentEn: "Bodrum mandarin ice cream and mandarin soda are legendary delicious." }
    ],
    general: [
      { name: "Sünger Pizza", rating: 4.4, reviewCount: 5200, area: "Bodrum", commentTr: "Bodrum klasiği. Çökertme kebabı ve Sünger pizzası çok popüler.", commentEn: "Bodrum classic. Cokertme kebab and Sunger pizza are very popular." }
    ]
  },
  "Eskişehir": {
    burger: [
      { name: "Pino", rating: 4.3, reviewCount: 5550, area: "Merkez", commentTr: "Eskişehir'in 1978'den beri yerel efsanesi. Soslu hamburger ve patatesi harika.", commentEn: "Eskişehir's local legend since 1978. Saucy burger and fries are great." },
      { name: "Burger No:7 Eskişehir", rating: 4.4, reviewCount: 1420, area: "Adalar", commentTr: "Porsuk çayı kenarında çıtır patatesli ve lezzetli gurme burgerler.", commentEn: "Delicious gourmet burgers with crispy fries next to Porsuk river." }
    ],
    kebab: [
      { name: "Papağan Çibörek Evi", rating: 4.5, reviewCount: 7250, area: "Merkez", commentTr: "Eskişehir'in tescilli çıtır çıtır kıymalı çiböreği. Yanında köpüklü ayranla efsane.", commentEn: "Eskişehir's registered crispy minced meat ciborek. Legendary with foamy ayran." },
      { name: "Abdüsselam Balaban Kebap", rating: 4.6, reviewCount: 4850, area: "Merkez", commentTr: "Balaban kebabının en iyi adresi. Tereyağı, sosu ve pidesi mükemmel uyumlu.", commentEn: "Best address for Balaban kebab. Butter, sauce and pide are perfectly in sync." }
    ],
    vegan: [
      { name: "Ayten Usta Gurme Restoran", rating: 4.4, reviewCount: 3820, area: "Tepebaşı", commentTr: "Doğal ve organik malzemelerle hazırlanan harika zeytinyağlılar ve salatalar.", commentEn: "Great olive oil dishes and salads prepared with natural and organic ingredients." }
    ],
    soup: [
      { name: "Çorbacı Ali Usta Eskişehir", rating: 4.4, reviewCount: 1120, area: "Merkez", commentTr: "Gece çorbası için Eskişehir'de en temiz ve lezzetli paça çorbası yapan yer.", commentEn: "Cleanest and tastiest trotter soup maker in Eskişehir for late night soup." }
    ],
    pasta: [
      { name: "La Pasteria Eskişehir", rating: 4.3, reviewCount: 650, area: "Tepebaşı", commentTr: "El yapımı İtalyan makarnaları ve kremalı soslar çok başarılı.", commentEn: "Handmade Italian pastas and creamy sauces are highly successful." }
    ],
    dessert: [
      { name: "Mazlumlar Muhallebicisi", rating: 4.5, reviewCount: 2120, area: "Haller", commentTr: "1927'den beri geleneksel sütlü tatlılar ve su muhallebisi çok başarılı.", commentEn: "Traditional milk desserts and water pudding since 1927 are highly successful." }
    ],
    general: [
      { name: "Karakedi Bozacısı", rating: 4.6, reviewCount: 3100, area: "Köprübaşı", commentTr: "Eskişehir'in tarihi bozacısı. Üzerine leblebi ekleyerek soğuk kış günlerinde nefis gider.", commentEn: "Historic boza maker of Eskişehir. Delicious on cold winter days with roasted chickpeas." }
    ]
  },
  "Hatay": {
    burger: [
      { name: "Burger Station Hatay", rating: 4.2, reviewCount: 380, area: "Merkez", commentTr: "Hatay mutfağının dışında hızlı ve lezzetli bir hamburger alternatifi.", commentEn: "A fast and delicious hamburger alternative outside Hatay cuisine." }
    ],
    kebab: [
      { name: "Aydın Kasabı & Kebap", rating: 4.6, reviewCount: 3120, area: "Antakya", commentTr: "Hatay'ın meşhur tepsi kebabı ve kağıt kebabı. Etin baharatı tam kıvamında.", commentEn: "Hatay's famous tray kebab and paper kebab. Spices are perfectly balanced." },
      { name: "Pipohan", rating: 4.5, reviewCount: 2220, area: "Antakya", commentTr: "Tarihi Hatay konağı bahçesinde harika mezeler, humus ve kebaplar.", commentEn: "Great appetizers, hummus and kebabs in historical Hatay mansion garden." },
      { name: "Harbiye Kule Restoran", rating: 4.5, reviewCount: 4220, area: "Harbiye", commentTr: "Harbiye şelaleleri manzarası eşliğinde acılı tavuk ve enfes Hatay mezeleri.", commentEn: "Spicy chicken and delicious Hatay appetizers with Harbiye waterfalls view." }
    ],
    vegan: [
      { name: "Humusçu İbrahim Usta", rating: 4.7, reviewCount: 1950, area: "Antakya", commentTr: "Sıcak zeytinyağlı taze Hatay humusu. Doğal olarak vegan ve inanılmaz lezzetli.", commentEn: "Fresh Hatay hummus with hot olive oil. Naturally vegan and incredibly tasty." }
    ],
    soup: [
      { name: "Tarihi Antakya Çorbacısı", rating: 4.3, reviewCount: 850, area: "Antakya", commentTr: "Yöresel ekşili çorbalar ve mercimek çorbası için samimi esnaf lokantası.", commentEn: "Cozy local diner for regional sour soups and lentil soup." }
    ],
    pasta: [
      { name: "Pizza Port Antakya", rating: 4.1, reviewCount: 290, area: "Merkez", commentTr: "Hatay'da çıtır hamurlu pizzalar sunan samimi bir İtalyan esintisi.", commentEn: "Cozy Italian touch offering crispy pizzas in Hatay." }
    ],
    dessert: [
      { name: "Çınaraltı Künefe Yusuf Usta", rating: 4.6, reviewCount: 8250, area: "Antakya", commentTr: "Közde ağır ağır pişen çıtır kadayıf, taze peynir ve şerbet. Gerçek künefe budur.", commentEn: "Crispy kadayif cooked slowly on coal, fresh cheese and syrup. Real kunefe." },
      { name: "Yusuf Habib Künefe", rating: 4.7, reviewCount: 5820, area: "Antakya", commentTr: "Hatay'ın en eski künefecilerinden. Peyniri çok sünuyor ve hafif şerbetli.", commentEn: "One of Hatay's oldest kunefe makers. Cheese stretches nicely, light syrup." }
    ],
    general: [
      { name: "Konak Restoran Antakya", rating: 4.4, reviewCount: 2400, area: "Antakya", commentTr: "Geniş Hatay mezeleri menüsü, içli köfte ve oruk çeşitleriyle şık akşam yemeği.", commentEn: "Elegant dinner with a wide Hatay appetizers menu, kibbeh and oruk types." }
    ]
  },
  "Şanlıurfa": {
    burger: [
      { name: "Şemsettin Burger Urfa", rating: 4.1, reviewCount: 320, area: "Haliliye", commentTr: "Urfa'da kebap dışında hızlı ve ekonomik bir hamburger seçeneği.", commentEn: "A fast and economical burger option in Urfa besides kebabs." }
    ],
    kebab: [
      { name: "Dedecan Ocakbaşı", rating: 4.5, reviewCount: 5250, area: "Haliliye", commentTr: "Şanlıurfa'nın en iyi kuzu ciğer şişi ve patlıcanlı kebabı burada. Mezeler taze.", commentEn: "Best lamb liver skewers and eggplant kebab in Urfa are here. Fresh appetizers." },
      { name: "Cevahir Han", rating: 4.6, reviewCount: 4120, area: "Eyyübiye", commentTr: "Tarihi handa Urfa sıra gecesi müzikleri eşliğinde bostana salatası ve içli köfte.", commentEn: "Bostana salad and kibbeh in a historic inn with traditional Urfa music." },
      { name: "Altın Şiş", rating: 4.4, reviewCount: 2850, area: "Eyyübiye", commentTr: "Urfa çarşısında acılı urfa kebap ve közlenmiş biberlerin harika adresi.", commentEn: "Great address for spicy Urfa kebab and roasted peppers in Urfa bazaar." }
    ],
    vegan: [
      { name: "Urfa Çiğköftecisi Ömer Usta", rating: 4.5, reviewCount: 920, area: "Haliliye", commentTr: "Etsiz gerçek Urfa çiğ köftesi. Bol isotlu, marul ve limonla efsane vegan dürümler.", commentEn: "Meatless real Urfa cig kofte. Loaded with isot, legendary vegan wraps." }
    ],
    soup: [
      { name: "Şanlıurfa Çorbacısı", rating: 4.3, reviewCount: 970, area: "Merkez", commentTr: "Gece içebileceğiniz sıcak kelle paça ve mercimek çorbası çok başarılı.", commentEn: "Warm kelle paca and lentil soup you can drink late at night are successful." }
    ],
    pasta: [
      { name: "Pasaport Pizza Urfa", rating: 4.0, reviewCount: 210, area: "Haliliye", commentTr: "Urfa'da pizzaseverler için hızlı servis sunan şube.", commentEn: "Branch offering fast service for pizza lovers in Urfa." }
    ],
    dessert: [
      { name: "Baklavacı Şemsettin", rating: 4.4, reviewCount: 3250, area: "Haliliye", commentTr: "Şanlıurfa'da fıstıklı baklava ve şıllık tatlısının en uygun ve lezzetli yeri.", commentEn: "Most affordable and tasty place for pistachio baklava and sillik dessert in Urfa." }
    ],
    general: [
      { name: "Çulcuoğlu Restoran", rating: 4.5, reviewCount: 4850, area: "Haliliye", commentTr: "Bol porsiyonlu mezeler, lahmacun ve kebap çeşitleriyle Urfa misafirperverliği.", commentEn: "Urfa hospitality with large portions of appetizers, lahmacun and kebabs." }
    ]
  },
  "Kayseri": {
    burger: [
      { name: "Burger No7 Kayseri", rating: 4.3, reviewCount: 620, area: "Melikgazi", commentTr: "Kayseri'de el yapımı hamburger köftesi ve leziz baharatlı patates.", commentEn: "Handmade burger patty and delicious spiced fries in Kayseri." }
    ],
    kebab: [
      { name: "Kaşık-La", rating: 4.5, reviewCount: 5450, area: "Melikgazi", commentTr: "Kayseri mantısının dünyaca ünlü adresi. Bir kaşığa 40 mantı sığıyor, nefis.", commentEn: "World famous address of Kayseri manti. 40 pieces fit on a spoon, delicious." },
      { name: "Elmacıoğlu İskender", rating: 4.4, reviewCount: 8550, area: "Kocasinan", commentTr: "Kayseri yağlaması ve iskender kebapları çok başarılı, porsiyonlar büyük.", commentEn: "Kayseri yaglamasi and iskender kebabs are highly successful, large portions." },
      { name: "Kemal Koçak Et Lokantası", rating: 4.6, reviewCount: 3820, area: "Melikgazi", commentTr: "Kayseri'de premium steakhouse deneyimi. Et kalitesi ve servis mükemmel.", commentEn: "Premium steakhouse experience in Kayseri. Meat quality and service are excellent." }
    ],
    vegan: [
      { name: "Kayseri Yaprak Sarma Evi", rating: 4.4, reviewCount: 220, area: "Melikgazi", commentTr: "Zeytinyağlı yaprak sarması ve glütensiz ev yapımı sebze yemekleri harika.", commentEn: "Olive oil stuffed grape leaves and gluten-free homemade vegetable dishes are great." }
    ],
    soup: [
      { name: "Altınsaray Pöç Tandır", rating: 4.5, reviewCount: 2920, area: "Melikgazi", commentTr: "Pöç çorbası ve tandır eti saatlerce fırında pişmiş, kemikten dağılıyor.", commentEn: "Poc soup and tandoori meat cooked for hours, falls off the bone." }
    ],
    pasta: [
      { name: "Pizza Mania Kayseri", rating: 4.2, reviewCount: 450, area: "Melikgazi", commentTr: "Kayseri'de çıtır İtalyan pizzası ve zengin peynirli makarna çeşitleri.", commentEn: "Crispy Italian pizza and rich cheese pasta varieties in Kayseri." }
    ],
    dessert: [
      { name: "Kayseri Kadayıfçısı", rating: 4.3, reviewCount: 580, area: "Melikgazi", commentTr: "Taze fıstıklı kadayıf ve burma tatlısı çıtır çıtır ve hafif şerbetli.", commentEn: "Fresh pistachio kadayif and burma dessert are crispy and lightly syruped." }
    ],
    general: [
      { name: "Gönül Kahvesi Kayseri", rating: 4.1, reviewCount: 980, area: "Melikgazi", commentTr: "Erciyes manzarası eşliğinde kahve ve dünya mutfağından hafif atıştırmalıklar.", commentEn: "Coffee and light snacks from world cuisine accompanied by Erciyes views." }
    ]
  },
  "Mersin": {
    burger: [
      { name: "Burger Station Mersin", rating: 4.3, reviewCount: 520, area: "Yenişehir", commentTr: "Mersin'de tantuni dışında hızlı ve doyurucu bir hamburger alternatifi.", commentEn: "Fast and filling burger alternative in Mersin besides tantuni." }
    ],
    kebab: [
      { name: "Eti Kebap", rating: 4.6, reviewCount: 2450, area: "Yenişehir", commentTr: "Zırh kıyması Adana kebabı ve fıstıklı kebabı harika, mezeleri çok taze.", commentEn: "Hand-minced Adana kebab and pistachio kebab are amazing, appetizers are very fresh." },
      { name: "Yeşilova Kebap", rating: 4.5, reviewCount: 3120, area: "Yenişehir", commentTr: "Mersin'in en eski ve lezzetli kebapçılarından biri. Servis hızlı, etler sulu.", commentEn: "One of Mersin's oldest and most delicious kebab houses. Fast service, juicy meat." },
      { name: "Kebapçı Rüştü", rating: 4.4, reviewCount: 1850, area: "Akdeniz", commentTr: "Gerçek ocakbaşı deneyimi. Kuzu şiş ve Adana kebabı lokum gibi.", commentEn: "Real ocakbasi experience. Lamb skewers and Adana kebab are extremely tender." }
    ],
    vegan: [
      { name: "Humusçu Göksel", rating: 4.5, reviewCount: 1420, area: "Yenişehir", commentTr: "Mersin usulü pastırmasız sıcak humus. Tahini bol, %100 vegan ve leziz.", commentEn: "Mersin-style warm hummus without pastrami. Heavy tahini, 100% vegan." }
    ],
    soup: [
      { name: "Hacı Baba Et Lokantası Mersin", rating: 4.3, reviewCount: 2150, area: "Akdeniz", commentTr: "Sıcak mercimek çorbası ve güveç yemekleri Mersin'de çok başarılı.", commentEn: "Warm lentil soup and stew dishes are highly successful in Mersin." }
    ],
    pasta: [
      { name: "Bella İtalyan Mersin", rating: 4.3, reviewCount: 410, area: "Yenişehir", commentTr: "Mersin marinada leziz makarnalar ve deniz manzaralı pizzalar.", commentEn: "Delicious pastas and sea view pizzas in Mersin marina." }
    ],
    dessert: [
      { name: "Kerebiççi Oğuz", rating: 4.5, reviewCount: 2650, area: "Yenişehir", commentTr: "Mersin'in tescilli kerebiç tatlısına bayılacaksınız.", commentEn: "You will love Mersin's registered kerebic dessert." },
      { name: "Dondurmacı Halil", rating: 4.4, reviewCount: 3120, area: "Akdeniz", commentTr: "Cezerye tatlısı ve fıstıklı dondurmanın Mersin'deki en eski adresi.", commentEn: "Oldest address of cezerye dessert and pistachio ice cream in Mersin." }
    ],
    general: [
      { name: "Göksel Tantuni", rating: 4.5, reviewCount: 7250, area: "Yenişehir", commentTr: "Mersin tantunisinin en popüler adresi. Lavaş incecik, etin baharatı harika.", commentEn: "Most popular address of Mersin tantuni. Thin wrap, great meat spices." },
      { name: "Memoş Tantuni", rating: 4.6, reviewCount: 5850, area: "Akdeniz", commentTr: "1964'ten beri geleneksel zırh tantunisi. Yoğurtlu tantunisini kesinlikle deneyin.", commentEn: "Traditional hand-cut tantuni since 1964. Definitely try the yogurt version." },
      { name: "Yaprak Tantuni", rating: 4.4, reviewCount: 4220, area: "Yenişehir", commentTr: "Mersin sahilinde temiz ve lezzetli tantuni keyfi. Servis oldukça hızlı.", commentEn: "Clean and tasty tantuni enjoyment on Mersin coast. Service is very fast." },
      { name: "Mersin Marina Marin", rating: 4.3, reviewCount: 1800, area: "Yenişehir", commentTr: "Deniz kenarında keyifli bir akşam yemeği için dünya mutfağından seçenekler.", commentEn: "World cuisine options for a pleasant dinner by the sea." }
    ]
  }
};

/**
 * Fallback generator to create highly realistic Turkish restaurant names, ratings,
 * review counts, and reviews for any city/province not listed in our database.
 */

export const FIT_ISTANBUL_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "FIT HOUSE", rating: 4.5, reviewCount: 820, area: "Şişli", commentTr: "Lezzetli ve yüksek proteinli sporcu dostu sağlıklı ızgara tavuk.", commentEn: "Delicious, high-protein athlete-friendly healthy grilled chicken." },
    { name: "Healin Foods", rating: 4.6, reviewCount: 1100, area: "Teşvikiye", commentTr: "Doğal malzemelerle hazırlanmış nefis ızgara tavuk tabağı.", commentEn: "Delicious grilled chicken plate prepared with natural ingredients." },
    { name: "Meal Box (Paket Servis)", rating: 4.3, reviewCount: 2900, area: "Kendi Şubesi", commentTr: "Hızlı servis edilen, porsiyonu dengeli sağlıklı öğün paketi.", commentEn: "Quickly served, portion-controlled healthy meal package." }
  ],
  "Fırında Mücver": [
    { name: "Plus Kitchen / Zorlu", rating: 4.4, reviewCount: 620, area: "Zincirlikuyu", commentTr: "Hafif ve sağlıklı fırınlanmış kabak mücveri seçeneği.", commentEn: "Light and healthy baked zucchini fritters option." },
    { name: "Gabfoods", rating: 4.6, reviewCount: 450, area: "Arnavutköy", commentTr: "Glütensiz unlarla pişirilmiş efsanevi ve sağlıklı mücver.", commentEn: "Legendary and healthy fritters baked with gluten-free flours." },
    { name: "Karaköy Lokantası", rating: 4.5, reviewCount: 4100, area: "Karaköy", commentTr: "Geleneksel lokanta usulü, hafif ve fırınlanmış mücver lezzeti.", commentEn: "Traditional local diner style, light and baked fritters taste." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Hünkar", rating: 4.6, reviewCount: 3100, area: "Nişantaşı", commentTr: "Geleneksel saray usulü, portakallı ve zeytinyağlı enfes enginar.", commentEn: "Traditional palace style, delicious orange-infused olive oil artichoke." },
    { name: "Hacı Abdullah Lokantası", rating: 4.5, reviewCount: 2800, area: "Beyoğlu", commentTr: "Tarihi esnaf lokantası usulü, tam kıvamında zeytinyağlı enginar.", commentEn: "Historical artisan restaurant style, perfectly cooked olive oil artichoke." },
    { name: "Yanyalı Fehmi Lokantası", rating: 4.4, reviewCount: 1950, area: "Kadıköy", commentTr: "Kadıköy'ün tarihi lokantasından harika bir zeytinyağlı enginar.", commentEn: "Great olive oil artichoke from Kadikoy's historical restaurant." }
  ],
  "Izgara Somon": [
    { name: "Balıkçı Sabahattin", rating: 4.7, reviewCount: 4500, area: "Cankurtaran", commentTr: "Tarihi konakta taze ve mükemmel pişmiş ızgara somon balığı.", commentEn: "Fresh and perfectly cooked grilled salmon in a historical mansion." },
    { name: "Kıyı Restaurant", rating: 4.6, reviewCount: 2100, area: "Tarabya", commentTr: "Boğaz kıyısında taze mevsimlik balıklar ve nefis ızgara somon.", commentEn: "Fresh seasonal fish and delicious grilled salmon by the Bosphorus." },
    { name: "Bebek Balıkçısı", rating: 4.5, reviewCount: 3200, area: "Bebek", commentTr: "Eşsiz boğaz manzarası eşliğinde leziz ızgara somon keyfi.", commentEn: "Delicious grilled salmon enjoyment with unique Bosphorus views." }
  ],
  "Izgara Somon / Levrek": [
    { name: "Balıkçı Sabahattin", rating: 4.7, reviewCount: 4500, area: "Cankurtaran", commentTr: "Tarihi konakta taze ve mükemmel pişmiş ızgara somon balığı.", commentEn: "Fresh and perfectly cooked grilled salmon in a historical mansion." },
    { name: "Kıyı Restaurant", rating: 4.6, reviewCount: 2100, area: "Tarabya", commentTr: "Boğaz kıyısında taze mevsimlik balıklar ve nefis ızgara somon.", commentEn: "Fresh seasonal fish and delicious grilled salmon by the Bosphorus." },
    { name: "Bebek Balıkçısı", rating: 4.5, reviewCount: 3200, area: "Bebek", commentTr: "Eşsiz boğaz manzarası eşliğinde leziz ızgara somon keyfi.", commentEn: "Delicious grilled salmon enjoyment with unique Bosphorus views." }
  ],
  "Mercimek Köftesi": [
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Geleneksel Güneydoğu usulü, taze yeşilliklerle mercimek köftesi.", commentEn: "Traditional southeastern style lentil patties with fresh greens." },
    { name: "Kantin Nişantaşı", rating: 4.5, reviewCount: 920, area: "Nişantaşı", commentTr: "Yeni nesil sağlıklı mutfaktan taze baharatlı mercimek köftesi.", commentEn: "Freshly spiced lentil patties from new generation healthy kitchen." },
    { name: "Aşşk Kahve", rating: 4.3, reviewCount: 1850, area: "Kuruçeşme", commentTr: "Boğaz kenarında hafif ve taze bir mercimek köftesi tabağı.", commentEn: "Light and fresh lentil patties platter by the Bosphorus." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads", rating: 4.2, reviewCount: 3500, area: "Şişli", commentTr: "Bol yeşillikli ve doyurucu fırınlanmış hindi füme salata tabağı.", commentEn: "Filling and rich smoked turkey salad bowl with plenty of greens." },
    { name: "Salad Station", rating: 4.3, reviewCount: 1200, area: "Maslak", commentTr: "Sağlıklı soslar ve taze yeşilliklerle hindi füme salata alternatifi.", commentEn: "Smoked turkey salad alternative with healthy sauces and fresh greens." },
    { name: "Kronotrop (Fit Menü)", rating: 4.4, reviewCount: 850, area: "Kendi Şubesi", commentTr: "Nitelikli kahve yanında tüketebileceğiniz proteinli fit hindi salatası.", commentEn: "Protein-rich fit turkey salad to enjoy alongside specialty coffee." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Tarihi Sultanahmet Köftecisi", rating: 4.6, reviewCount: 12500, area: "Sultanahmet", commentTr: "Köfte yanında tescilli, bol sirkeli ve yumurtalı kuru fasulye piyazı.", commentEn: "Registered white bean salad with plenty of vinegar and egg alongside meatballs." },
    { name: "Tarihi Kalkanoğlu Pilavcısı", rating: 4.5, reviewCount: 2200, area: "Beyoğlu", commentTr: "Geleneksel lezzetlerin yanında servis edilen nefis sirkeli piyaz.", commentEn: "Delicious vinegar bean salad served alongside traditional dishes." },
    { name: "Meşhur Filibe Köftecisi", rating: 4.4, reviewCount: 1800, area: "Sirkeci", commentTr: "Sirkeci'nin tarihi köftecisinden bol limonlu ve taze piyaz.", commentEn: "Fresh bean salad with plenty of lemon from Sirkeci's historic meatball maker." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Inkase", rating: 4.5, reviewCount: 1150, area: "Fenerbahçe", commentTr: "Sağlıklı kinoa tabanında hazırlanan modern ve besleyici fit kısır.", commentEn: "Modern and nutritious fit kisir prepared on a healthy quinoa base." },
    { name: "Bi Nevi Deli", rating: 4.6, reviewCount: 940, area: "Etiler", commentTr: "Karabuğdaylı ve kinoalı, glütensiz ve %100 vegan fit kısır tabağı.", commentEn: "Gluten-free and 100% vegan fit kisir bowl with buckwheat and quinoa." },
    { name: "Souper", rating: 4.3, reviewCount: 420, area: "Moda", commentTr: "Hafif çorbalar yanında servis edilen leziz kinoa kısırı seçeneği.", commentEn: "Tasty quinoa kisir option served alongside light soups." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Mürver Restaurant", rating: 4.6, reviewCount: 1800, area: "Karaköy", commentTr: "Odun ateşinde islenmiş kuru domatesler ve süzme yoğurt uyumu.", commentEn: "Harmony of wood-smoked sun-dried tomatoes and strained yogurt." },
    { name: "Aheste Pera", rating: 4.5, reviewCount: 950, area: "Beyoğlu", commentTr: "Modern meyhane yorumuyla sunulan sızma zeytinyağlı kuru domates mezesi.", commentEn: "Sun-dried tomato appetizer with olive oil served with a modern tavern twist." },
    { name: "Giritli Restoran", rating: 4.5, reviewCount: 2100, area: "Cankurtaran", commentTr: "Ege otları ve zeytinyağlı kuru domates salatasının harika uyumu.", commentEn: "Great harmony of Aegean herbs and sun-dried tomatoes in olive oil." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "Bankalar Lokantası", rating: 4.3, reviewCount: 1200, area: "Karaköy", commentTr: "Tarihi Karaköy'de esnaf usulü, hafif zeytinyağlı taze fasulye.", commentEn: "Artisan style, light olive oil green beans in historic Karakoy." },
    { name: "Nato Lokantası", rating: 4.4, reviewCount: 1500, area: "Karaköy", commentTr: "Geleneksel Türk mutfağının en taze zeytinyağlı fasulye adresi.", commentEn: "The address of the freshest olive oil green beans in traditional Turkish cuisine." },
    { name: "Lades Menemen & Ev Yemekleri", rating: 4.2, reviewCount: 1900, area: "Beyoğlu", commentTr: "Beyoğlu'nda ev yemeği sıcaklığında taze pişmiş zeytinyağlı fasulye.", commentEn: "Freshly cooked olive oil green beans in the warmth of home food in Beyoglu." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Tarihi Çakmak Kahvaltı Salonu", rating: 4.5, reviewCount: 3100, area: "Beşiktaş", commentTr: "Beşiktaş kahvaltıcılar sokağında taze lor peynirli fit omlet keyfi.", commentEn: "Fit omelet enjoyment with fresh curd cheese in Besiktas breakfast street." },
    { name: "Namlı Gurme", rating: 4.4, reviewCount: 8500, area: "Karaköy", commentTr: "Karaköy klasiği. İstediğiniz gibi hazırlanan lor peynirli menemen.", commentEn: "Karakoy classic. Curd cheese menemen prepared exactly how you want it." },
    { name: "Kruvasan İstanbul", rating: 4.5, reviewCount: 2200, area: "Nişantaşı", commentTr: "Nişantaşı'nda taze lor peynirli ve avokadolu fit kahvaltı omleti.", commentEn: "Fit breakfast omelet with fresh curd cheese and avocado in Nisantasi." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "Po Juicery", rating: 4.4, reviewCount: 350, area: "Yeniköy", commentTr: "Taze sıkım meyve suları ve proteinli nohut salatası alternatifleri.", commentEn: "Freshly pressed juices and protein-rich chickpea salad alternatives." },
    { name: "Rafine Espresso Bar (Fit Menü)", rating: 4.3, reviewCount: 480, area: "Moda", commentTr: "Nitelikli kahveler yanında sağlıklı tavuklu nohut salatası öğünü.", commentEn: "Healthy chicken chickpea salad meal alongside specialty coffees." },
    { name: "Federal Coffee (Sağlıklı Tabaklar)", rating: 4.2, reviewCount: 1100, area: "Galata", commentTr: "Galata şubesinde sporcu dostu sağlıklı nohut ve tavuk salatası.", commentEn: "Athlete-friendly healthy chickpea and chicken salad at Galata branch." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Zencefil Cafe", rating: 4.4, reviewCount: 1500, area: "Beyoğlu", commentTr: "Beyoğlu'nun vejetaryen klasiğinden fırınlanmış zerdeçallı karnabahar.", commentEn: "Baked turmeric cauliflower from Beyoglu's vegetarian classic." },
    { name: "Veganarsist", rating: 4.5, reviewCount: 650, area: "Nişantaşı", commentTr: "Bitkisel yoğurt soslu, fırınlanmış baharatlı çıtır karnabahar.", commentEn: "Baked spiced crispy cauliflower with plant-based yogurt sauce." },
    { name: "Mahatma Cafe", rating: 4.6, reviewCount: 780, area: "Kadıköy", commentTr: "Kadıköy'ün renkli vegan cafesinde fırınlanmış baharatlı karnabahar.", commentEn: "Baked spiced cauliflower at Kadikoy's colorful vegan cafe." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Tarihi Karaköy Çorbacısı", rating: 4.4, reviewCount: 1950, area: "Karaköy", commentTr: "Karaköy'de şehriyesiz, bol limonlu ve karabiberli şifa çorbası.", commentEn: "Gluten-free healing soup with plenty of lemon and black pepper in Karakoy." },
    { name: "Çorba Kapısı", rating: 4.3, reviewCount: 820, area: "Şişli", commentTr: "Kemik suyuyla hazırlanan, şehriyesiz ve unsuz fit tavuk çorbası.", commentEn: "Fit chicken soup prepared with bone broth, without noodles or flour." },
    { name: "Hünkar Çorba", rating: 4.4, reviewCount: 1250, area: "Fatih", commentTr: "Fatih'in esnaf lokantasından katkısız ve leziz tavuk suyu çorbası.", commentEn: "Unadulterated and delicious chicken broth soup from Fatih's local diner." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Kanaat Lokantası", rating: 4.4, reviewCount: 5200, area: "Üsküdar", commentTr: "Üsküdar'da geleneksel esnaf usulü, domatesli ve limonlu zeytinyağlı bamya.", commentEn: "Traditional artisan style green okra with tomato and lemon in Uskudar." },
    { name: "Mahalle Ev Yemekleri", rating: 4.1, reviewCount: 350, area: "Kadıköy", commentTr: "Kadıköy sokaklarında ev yapımı tadında zeytinyağlı bamya yemeği.", commentEn: "Home-style tasting olive oil okra dish in Kadikoy streets." },
    { name: "Hayvore", rating: 4.3, reviewCount: 1650, area: "Beyoğlu", commentTr: "Karadeniz mutfağının yanı sıra günlük taze pişen zeytinyağlı bamya.", commentEn: "Daily freshly cooked olive oil okra alongside Black Sea cuisine." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Boğaziçi Borsa Restoran", rating: 4.6, reviewCount: 2200, area: "Harbiye", commentTr: "Nezih ortamda fırınlanmış peynirli ve dereotlu kabak sandal.", commentEn: "Baked zucchini boat with cheese and dill in a decent environment." },
    { name: "Saray Muhallebicisi (Ev Yemekleri Reyonu)", rating: 4.3, reviewCount: 4500, area: "Merkez", commentTr: "Ev yemekleri reyonunda hafif ve doyurucu fırınlanmış kabak sandal.", commentEn: "Light and filling baked zucchini boat in the home-style food section." },
    { name: "Bizim Lokanta", rating: 4.4, reviewCount: 1800, area: "Sirkeci", commentTr: "Tarihi Sirkeci çarşısında hafif peynirli fırınlanmış kabak sandal.", commentEn: "Baked zucchini boat with light cheese in the historic Sirkeci bazaar." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Pandeli Restaurant", rating: 4.7, reviewCount: 3200, area: "Eminönü", commentTr: "Mısır Çarşısı'nın tarihi restoranından efsanevi odun ateşinde köz patlıcan.", commentEn: "Legendary wood-fire roasted eggplant salad from Spice Bazaar's historic venue." },
    { name: "Park Fora", rating: 4.5, reviewCount: 1600, area: "Ortaköy", commentTr: "Boğaz manzarası eşliğinde zeytinyağlı köz patlıcan salatası mezesi.", commentEn: "Roasted eggplant salad appetizer with olive oil by the Bosphorus." },
    { name: "Ali Ocakbaşı", rating: 4.5, reviewCount: 2400, area: "Karaköy", commentTr: "Karaköy'de kebap öncesi sızma zeytinyağlı leziz köz patlıcan salatası.", commentEn: "Delicious roasted eggplant salad with olive oil before kebabs in Karakoy." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Federal Coffee Co.", rating: 4.3, reviewCount: 1400, area: "Galata", commentTr: "Yoğurt, taze meyveler ve chia tohumu ile hazırlanan hafif fit kase.", commentEn: "Light fit bowl prepared with yogurt, fresh fruits and chia seeds." },
    { name: "MOC Coffee Roastery", rating: 4.4, reviewCount: 1950, area: "Nişantaşı", commentTr: "Nitelikli kahve yanında güne zinde başlamak için chia meyveli yoğurt.", commentEn: "Chia fruit yogurt to start the day fresh alongside specialty coffee." },
    { name: "Grandma Bakery Cafe", rating: 4.5, reviewCount: 1100, area: "Teşvikiye", commentTr: "Taze orman meyveleri ve chia tohumlu sağlıklı ev yapımı yoğurt.", commentEn: "Healthy homemade yogurt with fresh forest berries and chia seeds." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Namlı Köftecisi", rating: 4.4, reviewCount: 2200, area: "Sirkeci", commentTr: "Katkısız, sadece bol yeşillik ve köz biberle sunulan tarihi köfte.", commentEn: "Historic meatballs without additives, served only with plenty of greens." },
    { name: "Köfteci Arnavut", rating: 4.5, reviewCount: 1100, area: "Balat", commentTr: "Balat sokaklarında esnaf usulü, leziz ve katkısız ızgara köfte.", commentEn: "Artisan style, delicious and clean grilled meatballs in Balat streets." },
    { name: "Meşhur Tarihi Eminönü Köftecisi", rating: 4.3, reviewCount: 1500, area: "Eminönü", commentTr: "Eminönü'nde yeşillikler eşliğinde servis edilen leziz ızgara köfte.", commentEn: "Delicious grilled meatballs served alongside greens in Eminonu." }
  ],
  "Ispanak Borani": [
    { name: "Duble Meze Bar", rating: 4.5, reviewCount: 1300, area: "Pera", commentTr: "Teras manzarası eşliğinde sunulan sarımsaklı yoğurtlu ıspanak borani mezesi.", commentEn: "Garlicky yogurt spinach borani appetizer served with terrace views." },
    { name: "Eleos Restaurant", rating: 4.6, reviewCount: 2800, area: "Beyoğlu", commentTr: "Beyoğlu'nda zeytinyağlı taze otlar ve leziz yoğurtlu ıspanak borani.", commentEn: "Olive oil fresh herbs and delicious yogurt spinach borani in Beyoglu." },
    { name: "Jash Istanbul", rating: 4.5, reviewCount: 950, area: "Cihangir", commentTr: "Cihangir'de geleneksel Ermeni mezeleri ve yoğurtlu ıspanak borani.", commentEn: "Traditional Armenian appetizers and yogurt spinach borani in Cihangir." }
  ]
};

export const FIT_ANKARA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "Fit'n Healthy", rating: 4.5, reviewCount: 320, area: "Çankaya", commentTr: "Sağlıklı diyet menüleri ve yüksek proteinli ızgara tavuk alternatifleri.", commentEn: "Healthy diet menus and high-protein grilled chicken alternatives." },
    { name: "BigChefs", rating: 4.4, reviewCount: 4200, area: "Tunalı", commentTr: "Geniş menüsünde yer alan leziz ve dengeli fit ızgara tavuk tabağı.", commentEn: "Delicious and balanced fit grilled chicken plate in their wide menu." },
    { name: "Cookshop", rating: 4.3, reviewCount: 2800, area: "Arcadium", commentTr: "Taze ve sağlıklı fit tavuk tabağı seçeneği.", commentEn: "Fresh and healthy fit chicken plate option." }
  ],
  "Fırında Mücver": [
    { name: "Cafemiz", rating: 4.5, reviewCount: 950, area: "GOP", commentTr: "Nezih ve sıcak ortamda hafif ve lezzetli fırında mücver.", commentEn: "Light and delicious baked zucchini fritters in a decent, warm ambiance." },
    { name: "Kıtır (Ev Yemekleri Menüsü)", rating: 4.4, reviewCount: 3800, area: "Tunalı", commentTr: "Tunalı klasiği Kıtır'dan ev yemeği sıcaklığında fırınlanmış mücver.", commentEn: "Baked zucchini fritters in the warmth of home-style food from Tunali classic Kitir." },
    { name: "Kruvasante", rating: 4.6, reviewCount: 650, area: "Bahçelievler", commentTr: "Özgün lezzetler yanında servis edilen çıtır fırında mücver.", commentEn: "Crispy baked zucchini fritters served alongside original tastes." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Boğaziçi Lokantası", rating: 4.6, reviewCount: 2900, area: "Ulus", commentTr: "Tarihi esnaf lokantasından geleneksel lezzette zeytinyağlı enginar.", commentEn: "Traditional olive oil artichoke from historic artisan restaurant." },
    { name: "Konyalı Hacı Usta", rating: 4.4, reviewCount: 1800, area: "Balgat", commentTr: "Özenle hazırlanmış enfes zeytinyağlı enginar yemeği.", commentEn: "Exquisite olive oil artichoke dish prepared with care." },
    { name: "Göksu Lokantası", rating: 4.5, reviewCount: 2200, area: "Kızılay", commentTr: "Kızılay'ın köklü lokantasından tam kıvamında zeytinyağlı enginar.", commentEn: "Perfectly cooked olive oil artichoke from Kizilay's long-established restaurant." }
  ],
  "Izgara Somon / Levrek": [
    { name: "Trilye Restoran", rating: 4.8, reviewCount: 3500, area: "GOP", commentTr: "Ankara'nın ödüllü balıkçısından mükemmel pişmiş ızgara somon.", commentEn: "Perfectly cooked grilled salmon from Ankara's award-winning fish restaurant." },
    { name: "Yelken Balık Restoran", rating: 4.6, reviewCount: 1850, area: "Çankaya", commentTr: "Nezih ortamda taze mevsim balıkları ve leziz ızgara somon keyfi.", commentEn: "Fresh seasonal fish and delicious grilled salmon in a decent ambiance." },
    { name: "Kalbur Balık", rating: 4.7, reviewCount: 1100, area: "Oran", commentTr: "Taze deniz ürünleri ve enfes ızgara somon alternatifleri.", commentEn: "Fresh seafood and delicious grilled salmon alternatives." }
  ],
  "Mercimek Köftesi": [
    { name: "Leman Kültür", rating: 4.2, reviewCount: 3100, area: "Bahçelievler", commentTr: "Renkli menüde taze ve hafif mercimek köftesi tabağı.", commentEn: "Fresh and light lentil patties platter in their colorful menu." },
    { name: "Aylak Madam", rating: 4.4, reviewCount: 1200, area: "Kavaklıdere", commentTr: "Keyifli kafede taze yeşilliklerle yoğrulmuş leziz mercimek köftesi.", commentEn: "Delicious lentil patties kneaded with fresh greens in a pleasant cafe." },
    { name: "Veganka", rating: 4.6, reviewCount: 680, area: "Çankaya", commentTr: "Tamamen bitkisel malzemelerle hazırlanan vegan dostu mercimek köftesi.", commentEn: "Vegan-friendly lentil patties prepared entirely with plant-based ingredients." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads (Tunalı)", rating: 4.3, reviewCount: 1500, area: "Tunalı", commentTr: "Tunalı şubesinde bol yeşillikli ve besleyici hindi füme salatası.", commentEn: "Nutritious smoked turkey salad with plenty of greens at Tunali branch." },
    { name: "Amelie’s Garden Succulent & Cafe", rating: 4.5, reviewCount: 820, area: "Tunalı", commentTr: "Bitkilerle bezeli bahçede hafif ve sağlıklı hindi füme salata keyfi.", commentEn: "Light and healthy smoked turkey salad enjoyment in a plant-filled garden." },
    { name: "Quick China (Fit Salatalar)", rating: 4.5, reviewCount: 4200, area: "GOP", commentTr: "Asya lezzetleri yanında besleyici, fit hindi füme salata tabağı.", commentEn: "Nutritious, fit smoked turkey salad bowl alongside Asian tastes." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Meşhur İncek Köftecisi", rating: 4.4, reviewCount: 950, area: "İncek", commentTr: "Köfte yanında sunulan bol sirkeli ve taze fasulye piyazı.", commentEn: "Fresh bean salad with plenty of vinegar served alongside meatballs." },
    { name: "Köfteci Behçet", rating: 4.5, reviewCount: 1400, area: "Ulus", commentTr: "Tarihi köfteciden geleneksel usul yumurtalı piyaz lezzeti.", commentEn: "Traditional style egg bean salad taste from historic meatball maker." },
    { name: "Tarihi Mutfak Köftecisi", rating: 4.3, reviewCount: 780, area: "Ulus", commentTr: "Geleneksel mutfaktan taze ve bol limonlu piyaz seçeneği.", commentEn: "Fresh bean salad option with plenty of lemon from traditional kitchen." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Kakule Kahve", rating: 4.6, reviewCount: 1100, area: "Kızılay", commentTr: "Samimi ortamda nitelikli kahve ve sağlıklı kinoa kısırı kasesi.", commentEn: "Specialty coffee and healthy quinoa kisir bowl in a friendly environment." },
    { name: "Bi’ Kavanoz Cafe", rating: 4.5, reviewCount: 480, area: "Çankaya", commentTr: "Cam kavanozlarda sunulan sağlıklı ve glütensiz karabuğday kısırı.", commentEn: "Healthy and gluten-free buckwheat kisir served in glass jars." },
    { name: "Botanica Fit Cafe", rating: 4.4, reviewCount: 320, area: "Ümitköy", commentTr: "Sporcu ve diyet dostu kinoalı fit kısır alternatifi.", commentEn: "Athlete and diet-friendly quinoa fit kisir alternative." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Meze Çizgisi", rating: 4.5, reviewCount: 650, area: "Çankaya", commentTr: "Günlük hazırlanan, süzme yoğurtlu ve zeytinyağlu kuru domates mezesi.", commentEn: "Daily prepared, strained yogurt and olive oil sun-dried tomato appetizer." },
    { name: "Louise Brasserie & Lounge", rating: 4.6, reviewCount: 2200, area: "Filistin Caddesi", commentTr: "Şık brasserie mutfağından hafif ve gurme yoğurtlu kuru domates salatası.", commentEn: "Light and gourmet yogurt sun-dried tomato salad from chic brasserie kitchen." },
    { name: "No4 Restaurant", rating: 4.5, reviewCount: 1400, area: "Söğütözü", commentTr: "Modern sunumla harmanlanan enfes yoğurtlu kuru domates salatası.", commentEn: "Exquisite yogurt sun-dried tomato salad blended with modern presentation." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "Çiçek Lokantası", rating: 4.5, reviewCount: 3200, area: "Ulus", commentTr: "Ankara'nın köklü esnaf lokantasından nefis zeytinyağlı taze fasulye.", commentEn: "Delicious olive oil green beans from Ankara's long-established restaurant." },
    { name: "Hacı Arif Bey Lokantası", rating: 4.6, reviewCount: 4100, area: "GOP", commentTr: "Geleneksel Türk mutfağının en seçkin zeytinyağlı fasulye adresi.", commentEn: "The most distinguished olive oil green beans address of traditional Turkish kitchen." },
    { name: "Düveroğlu (Zeytinyağlı Büfesi)", rating: 4.6, reviewCount: 8500, area: "Balgat", commentTr: "Meşhur kebapçı bünyesindeki zeytinyağlı köşesinden taze fasulye.", commentEn: "Fresh green beans from the olive oil corner of the famous kebab venue." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Hamlakit", rating: 4.4, reviewCount: 2400, area: "GOP", commentTr: "Karadeniz kahvaltısının yanında hafif ve lezzetli lor peynirli fit omlet.", commentEn: "Light and delicious curd cheese fit omelet alongside Black Sea breakfast." },
    { name: "Seyir Cafe (Bahçelievler)", rating: 4.3, reviewCount: 1900, area: "Bahçelievler", commentTr: "Bahçelievler sokaklarında taze lorlu omlet ve menemen keyfi.", commentEn: "Enjoyment of fresh curd omelet and menemen in Bahcelievler streets." },
    { name: "Kuğu Pasta & Cafe", rating: 4.2, reviewCount: 1200, area: "Tunalı", commentTr: "Tunalı Pasajı yanında taze lor peynirli menemen kahvaltısı.", commentEn: "Fresh curd cheese menemen breakfast next to Tunali Passage." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "Coffee Lab (Sağlıklı Menü)", rating: 4.4, reviewCount: 1800, area: "Kızılay", commentTr: "Kahve yanında tüketebileceğiniz yüksek proteinli nohutlu tavuk salatası.", commentEn: "High-protein chickpea chicken salad to enjoy alongside coffee." },
    { name: "Prod Coffee & Roastery", rating: 4.5, reviewCount: 950, area: "Bahçelievler", commentTr: "Nitelikli kahveler ve diyet dostu tavuklu nohut salatası alternatifleri.", commentEn: "Specialty coffees and diet-friendly chicken chickpea salad alternatives." },
    { name: "Rispetto Coffee Co.", rating: 4.6, reviewCount: 820, area: "Çankaya", commentTr: "Üçüncü nesil kahve dükkanında fit tavuklu nohut salatası kasesi.", commentEn: "Fit chicken chickpea salad bowl in a third generation coffee shop." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Vegihi", rating: 4.6, reviewCount: 450, area: "Çankaya", commentTr: "Ankara'nın vejetaryen mutfağından fırınlanmış baharatlı kıtır karnabahar.", commentEn: "Baked spiced crispy cauliflower from Ankara's vegetarian kitchen." },
    { name: "Komşu Kafe", rating: 4.5, reviewCount: 740, area: "Ayrancı", commentTr: "Kolektif kafede ev yapımı tadında çıtır baharatlı karnabahar.", commentEn: "Home-style tasting crispy spiced cauliflower in a collective cafe." },
    { name: "Terrace Ev Yemekleri", rating: 4.1, reviewCount: 280, area: "Çankaya", commentTr: "Hafif ve sağlıklı fırınlanmış sebzeli karnabahar seçeneği.", commentEn: "Light and healthy baked vegetable cauliflower option." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Meşhur Çorbacı Adnan Usta", rating: 4.5, reviewCount: 2100, area: "Balgat", commentTr: "Balgat şubesinde şehriyesiz ve bol tavuklu şifa çorbası.", commentEn: "Healing soup with plenty of chicken and no noodles at Balgat branch." },
    { name: "Çorbacı Bey", rating: 4.4, reviewCount: 1300, area: "Çankaya", commentTr: "Unsuz ve şehriyesiz, katkısız tavuk suyu çorba adresi.", commentEn: "Additive-free chicken broth soup address without flour or noodles." },
    { name: "Devrez Çorba", rating: 4.3, reviewCount: 3900, area: "Tunalı", commentTr: "Tunalı klasiği Devrez'den sıcak ve şifa dolu tavuk suyu çorbası.", commentEn: "Warm and healing chicken broth soup from Tunali classic Devrez." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Bizim Çorba & Ev Yemekleri", rating: 4.3, reviewCount: 850, area: "Çankaya", commentTr: "Hafif ekşili ve zeytinyağlı taze bamya yemeği seçeneği.", commentEn: "Lightly sour and olive oil fresh okra dish option." },
    { name: "Tarihi Ulus Lezzet Lokantası", rating: 4.4, reviewCount: 1600, area: "Ulus", commentTr: "Geleneksel esnaf mutfağından tam kıvamında pişmiş zeytinyağlı bamya.", commentEn: "Perfectly cooked olive oil okra from traditional artisan kitchen." },
    { name: "Esnaf Lokantası Ayrancı", rating: 4.5, reviewCount: 920, area: "Ayrancı", commentTr: "Ayrancı'da ev yemeği tadında günlük taze pişen zeytinyağlı bamya.", commentEn: "Daily freshly cooked olive oil okra tasting like home food in Ayranci." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Tavukçuluk Restoranı (Ev Yemekleri Bölümü)", rating: 4.4, reviewCount: 2200, area: "Ulus", commentTr: "Ev yemekleri reyonunda hafif peynirli fırınlanmış kabak sandal.", commentEn: "Baked zucchini boat with light cheese in the home-style food section." },
    { name: "Kızılay Sofra Ev Yemekleri", rating: 4.2, reviewCount: 650, area: "Kızılay", commentTr: "Kızılay'da esnaf usulü, hafif ve doyurucu fırında kabak sandal.", commentEn: "Artisan style, light and filling baked zucchini boat in Kizilay." },
    { name: "Merkez Lokantası", rating: 4.3, reviewCount: 1100, area: "Çankaya", commentTr: "Çankaya'da günlük taze pişen, hafif dereotlu kabak sandal.", commentEn: "Light dill zucchini boat freshly cooked daily in Cankaya." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Uludağ Kebapçısı", rating: 4.6, reviewCount: 4200, area: "Ulus", commentTr: "Kebapların yanında sunulan köz kömür kokulu enfes patlıcan salatası.", commentEn: "Delicious charcoal-scented roasted eggplant salad served alongside kebabs." },
    { name: "Günaydın Kebap (Arjantin)", rating: 4.5, reviewCount: 2900, area: "GOP", commentTr: "Arjantin Caddesi'nde kebap öncesi sızma zeytinyağlı köz patlıcan salatası.", commentEn: "Roasted eggplant salad with olive oil before kebabs on Arjantin Street." },
    { name: "Masabaşı Kebapçısı", rating: 4.4, reviewCount: 3100, area: "Balgat", commentTr: "Balgat'ta köz ateşinde pişmiş leziz köz patlıcan salatası mezesi.", commentEn: "Delicious roasted eggplant salad appetizer cooked on charcoal in Balgat." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Crop Coffee Shop", rating: 4.6, reviewCount: 850, area: "Balgat", commentTr: "Yoğurt, taze orman meyveleri ve chia tohumu ile hazırlanan fit kase.", commentEn: "Fit bowl prepared with yogurt, fresh berries and chia seeds." },
    { name: "Federal Coffee Co. Ankara", rating: 4.4, reviewCount: 1200, area: "Çankaya", commentTr: "Çankaya şubesinde güne zinde başlamak için chia meyveli yoğurt kasesi.", commentEn: "Chia fruit yogurt bowl to start the day fresh at Cankaya branch." },
    { name: "Padam Coffee Shop", rating: 4.5, reviewCount: 750, area: "Kavaklıdere", commentTr: "Kavaklıdere'de nitelikli kahve yanında hafif chia meyveli yoğurt.", commentEn: "Light chia fruit yogurt alongside specialty coffee in Kavaklidere." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Köfteci Sadık", rating: 4.6, reviewCount: 1900, area: "Ulus", commentTr: "Katkısız kıymadan yoğrulmuş, yeşillik ve köz biberle tarihi Ankara köftesi.", commentEn: "Historic Ankara meatballs made of clean minced meat, served with greens." },
    { name: "Akman Boza ve Köfte Salonu", rating: 4.5, reviewCount: 2800, area: "Ulus", commentTr: "Tarihi Akman'da katkısız ve yeşillikler eşliğinde ızgara köfte keyfi.", commentEn: "Enjoyment of grilled meatballs without additives accompanied by greens at historic Akman." },
    { name: "Meşhur Ankara Köftecisi (Ulus)", rating: 4.4, reviewCount: 1600, area: "Ulus", commentTr: "Ulus'un meşhur köftecisinden bol yeşillikli ve közlenmiş biberli köfte.", commentEn: "Meatballs with plenty of greens and grilled peppers from Ulus's famous meatball maker." }
  ],
  "Ispanak Borani": [
    { name: "Afitap Meyhane", rating: 4.7, reviewCount: 3200, area: "Tunalı", commentTr: "Tunalı'nın popüler meyhanesinden sarımsaklı süzme yoğurtlu ıspanak borani.", commentEn: "Spinach borani with garlicky strained yogurt from Tunali's popular tavern." },
    { name: "Kalender Zebercet Meyhanesi", rating: 4.5, reviewCount: 1400, area: "Kavaklıdere", commentTr: "Geleneksel mezeler arasında öne çıkan zeytinyağlı ıspanak borani.", commentEn: "Olive oil spinach borani standing out among traditional appetizers." },
    { name: "Kıtır (Meze Reyonu)", rating: 4.4, reviewCount: 3800, area: "Tunalı", commentTr: "Kıtır meze reyonundan günlük taze hazırlanan yoğurtlu ıspanak borani.", commentEn: "Daily freshly prepared yogurt spinach borani from Kitir appetizer counter." }
  ]
};

export const FIT_IZMIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "Fit Kitchen İzmir", rating: 4.5, reviewCount: 280, area: "Karşıyaka", commentTr: "Sağlıklı diyet ve protein odaklı lezzetli ızgara tavuk göğsü.", commentEn: "Healthy diet and protein-focused delicious grilled chicken breast." },
    { name: "BigChefs (Mavişehir)", rating: 4.4, reviewCount: 2900, area: "Mavişehir", commentTr: "Mavişehir şubesinde fit menü kapsamında sunulan ızgara tavuk göğsü.", commentEn: "Grilled chicken breast served within the fit menu at Mavisehir branch." },
    { name: "Cookshop (Alsancak)", rating: 4.3, reviewCount: 3100, area: "Alsancak", commentTr: "Alsancak'ın canlı ortamında taze ve hafif ızgara tavuk tabağı.", commentEn: "Fresh and light grilled chicken plate in the lively atmosphere of Alsancak." }
  ],
  "Fırında Mücver": [
    { name: "Reyhan Pastanesi (Salata & Meze Bölümü)", rating: 4.7, reviewCount: 8500, area: "Alsancak", commentTr: "İzmir klasiği Reyhan'ın meze reyonundan hafif fırında mücver.", commentEn: "Light baked zucchini fritters from the appetizer section of Izmir classic Reyhan." },
    { name: "Leone Patisserie", rating: 4.6, reviewCount: 1400, area: "Alsancak", commentTr: "Fransız esintili Leone'den hafif ve çıtır fırında mücver alternatifleri.", commentEn: "Light and crispy baked zucchini fritters alternatives from French-inspired Leone." },
    { name: "Balmumu Dükkan Lokanta", rating: 4.5, reviewCount: 1200, area: "Alsancak", commentTr: "Geleneksel Ege mutfağından zeytinyağlı enfes fırında mücver.", commentEn: "Exquisite baked zucchini fritters with olive oil from traditional Aegean kitchen." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Adil Müftüoğlu - Uğur Lokantası", rating: 4.6, reviewCount: 2200, area: "Çankaya", commentTr: "Tarihi esnaf lokantasından tam kıvamında zeytinyağlı enginar.", commentEn: "Perfectly cooked olive oil artichoke from historic artisan restaurant." },
    { name: "Mahfel Esnaf Lokantası", rating: 4.4, reviewCount: 850, area: "Bornova", commentTr: "Bornova'da günlük pişen zeytinyağlı enginar yemeği.", commentEn: "Daily cooked olive oil artichoke dish in Bornova." },
    { name: "Bizim Lokanta (Kemeraltı)", rating: 4.5, reviewCount: 3100, area: "Kemeraltı", commentTr: "Tarihi çarşının en meşhur esnaf lokantasından zeytinyağlı enginar.", commentEn: "Olive oil artichoke from the historic bazaar's most famous artisan restaurant." }
  ],
  "Izgara Somon / Levrek": [
    { name: "Deniz Restoran", rating: 4.7, reviewCount: 4500, area: "Kordon", commentTr: "Kordon'da ödüllü deniz ürünleri ve enfes ızgara somon/levrek.", commentEn: "Award-winning seafood and delicious grilled salmon/seabass on Kordon." },
    { name: "Kordon Yengeç Restoran", rating: 4.6, reviewCount: 2200, area: "Alsancak", commentTr: "Deniz kenarında taze balık ve leziz ızgara somon keyfi.", commentEn: "Fresh fish and delicious grilled salmon by the seaside." },
    { name: "Sipari Balık Restoran", rating: 4.6, reviewCount: 1600, area: "İnciraltı", commentTr: "İnciraltı Marina'da seçkin ortam ve kusursuz ızgara levrek.", commentEn: "Chic environment and perfect grilled seabass at Inciralti Marina." }
  ],
  "Mercimek Köftesi": [
    { name: "Balmumu Lokanta (Ahmet Güzelyağdöken)", rating: 4.5, reviewCount: 1200, area: "Alsancak", commentTr: "Şef Ahmet Güzelyağdöken'den geleneksel usul mercimek köftesi.", commentEn: "Traditional style lentil patties from Chef Ahmet Guzelyagdoken." },
    { name: "Murano's (Akdeniz Salataları Bölümü)", rating: 4.5, reviewCount: 950, area: "Alsancak", commentTr: "Akdeniz salatası eşliğinde sunulan hafif ve leziz mercimek köftesi.", commentEn: "Light and delicious lentil patties served with Mediterranean salad." },
    { name: "%100 Restoran Cafe", rating: 4.3, reviewCount: 1800, area: "Mavişehir", commentTr: "Nezih ortamda taze yeşilliklerle servis edilen mercimek köftesi.", commentEn: "Lentil patties served with fresh greens in a decent environment." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads (Optimum)", rating: 4.2, reviewCount: 1100, area: "Gaziemir", commentTr: "Optimum şubesinde bol yeşillikli ve besleyici hindi füme salata.", commentEn: "Nutritious smoked turkey salad with plenty of greens at Optimum branch." },
    { name: "Less Ordinary", rating: 4.5, reviewCount: 780, area: "Alsancak", commentTr: "Alsancak ara sokaklarında taze ve gurme hindi füme salata alternatifi.", commentEn: "Fresh and gourmet smoked turkey salad alternative in Alsancak side streets." },
    { name: "Baristocrat 3rd Wave Cafe", rating: 4.6, reviewCount: 920, area: "Bostanlı", commentTr: "Bostanlı'da nitelikli kahve yanında hafif hindi füme salatası.", commentEn: "Light smoked turkey salad alongside specialty coffee in Bostanli." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Meşhur Hisarönü Şambalicisi Sokağı Köftecileri", rating: 4.4, reviewCount: 1500, area: "Kemeraltı", commentTr: "Tarihi Hisarönü sokaklarında köfte yanında sunulan bol piyaz.", commentEn: "Plenty of bean salad served alongside meatballs in historic Hisaronu streets." },
    { name: "Köfteci Remzi", rating: 4.5, reviewCount: 1800, area: "Bostanlı", commentTr: "Bostanlı'nın meşhur köftecisinden leziz kuru fasulye piyazı.", commentEn: "Delicious bean salad from Bostanli's famous meatball restaurant." },
    { name: "Tarihi Bergama Çorbacısı & Piyazcısı", rating: 4.3, reviewCount: 650, area: "Kemeraltı", commentTr: "Tarihi Bergama çorbacısından geleneksel lezzette piyaz.", commentEn: "Traditional tasting bean salad from historic Bergama soup restaurant." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Yaşam Vegan Cafe", rating: 4.7, reviewCount: 520, area: "Alsancak", commentTr: "Tamamen bitkisel ve sağlıklı glütensiz kinoalı kısır tabağı.", commentEn: "Entirely plant-based and healthy gluten-free quinoa kisir platter." },
    { name: "Awakening Healthy Cafe", rating: 4.6, reviewCount: 380, area: "Alsancak", commentTr: "Sağlıklı yaşam kafesinde taze karabuğday kısırı alternatifi.", commentEn: "Fresh buckwheat kisir alternative in the healthy lifestyle cafe." },
    { name: "Soulmate Coffee (Fit Menü)", rating: 4.3, reviewCount: 1100, area: "Bornova", commentTr: "Bornova şubesinde sporcu dostu kinoalı fit kısır seçeneği.", commentEn: "Athlete-friendly quinoa fit kisir option at Bornova branch." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Balmumu Dükkan Lokanta", rating: 4.5, reviewCount: 1200, area: "Alsancak", commentTr: "Ege zeytinyağı ve süzme yoğurtla yoğrulmuş kuru domates mezesi.", commentEn: "Sun-dried tomato appetizer kneaded with Aegean olive oil and strained yogurt." },
    { name: "Topçu Restoran (Meze Reyonu)", rating: 4.5, reviewCount: 4500, area: "Çankaya", commentTr: "Meşhur Topçu Restoran'ın zengin meze dolabından yoğurtlu kuru domates.", commentEn: "Yogurt sun-dried tomato from famous Topcu Restaurant's rich appetizer fridge." },
    { name: "Ferdi Baba Restoran", rating: 4.6, reviewCount: 3200, area: "Alaçatı", commentTr: "Alaçatı Marina'da şık ortamda leziz yoğurtlu kuru domates salatası.", commentEn: "Delicious yogurt sun-dried tomato salad in a chic environment at Alacati Marina." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "L'agora Lokantası", rating: 4.4, reviewCount: 620, area: "Kemeraltı", commentTr: "Tarihi han avlusunda geleneksel usul zeytinyağlı taze fasulye.", commentEn: "Traditional style olive oil green beans in the historic inn courtyard." },
    { name: "Kısmet Lokantası", rating: 4.5, reviewCount: 1300, area: "Çamdibi", commentTr: "Çamdibi'nin ünlü esnaf lokantasından nefis taze fasulye.", commentEn: "Delicious green beans from Camdibi's famous artisan restaurant." },
    { name: "Meşhur Esnaf Lokantası (İzmir Ticaret Odası Yanı)", rating: 4.3, reviewCount: 950, area: "Alsancak", commentTr: "Alsancak'ta Ticaret Odası yanında günlük taze pişen zeytinyağlı fasulye.", commentEn: "Daily freshly cooked olive oil green beans next to Chamber of Commerce in Alsancak." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Tuzu Biberi", rating: 4.3, reviewCount: 3800, area: "Bostanlı", commentTr: "Bostanlı sahilinde taze İzmir lor peynirli omlet ve menemen kahvaltısı.", commentEn: "Fresh Izmir curd cheese omelet and menemen breakfast on Bostanli coast." },
    { name: "Alsancak Dostlar Fırını (Kahvaltı Alanı)", rating: 4.5, reviewCount: 6500, area: "Alsancak", commentTr: "Alsancak şubesinde boyoz yanında taze lor peynirli menemen keyfi.", commentEn: "Enjoyment of fresh curd cheese menemen alongside boyoz at Alsancak branch." },
    { name: "Morisi Avlu", rating: 4.6, reviewCount: 920, area: "Alsancak", commentTr: "Girit esintili şirin avluda lor peynirli fit omlet ve menemen.", commentEn: "Curd cheese fit omelet and menemen in a Cretan-inspired cozy courtyard." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "No 44 Coffee & Food", rating: 4.5, reviewCount: 480, area: "Bornova", commentTr: "Bornova'da nitelikli kahveler ve tavuklu nohut salatası alternatifleri.", commentEn: "Specialty coffees and chicken chickpea salad alternatives in Bornova." },
    { name: "Poka Bowl & More", rating: 4.6, reviewCount: 750, area: "Alsancak", commentTr: "Alsancak'ta modern bowl konseptiyle tavuklu nohutlu fit salata.", commentEn: "Fit salad with chicken and chickpeas with modern bowl concept in Alsancak." },
    { name: "Coffeeco (Sağlıklı Tabaklar)", rating: 4.4, reviewCount: 1200, area: "Karşıyaka", commentTr: "Karşıyaka şubesinde kahve keyfine eşlik eden sağlıklı nohutlu tavuk salatası.", commentEn: "Healthy chickpea chicken salad accompanying coffee enjoyment at Karsiyaka branch." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Yaşam Vegan Cafe", rating: 4.7, reviewCount: 520, area: "Alsancak", commentTr: "Alsancak'ta çıtır fırınlanmış baharatlı vegan karnabahar.", commentEn: "Crispy baked spiced vegan cauliflower in Alsancak." },
    { name: "Roots Cafe & Botanique", rating: 4.5, reviewCount: 680, area: "Alsancak", commentTr: "Bitkiler arasında hafif baharatlı fırın karnabahar keyfi.", commentEn: "Enjoyment of lightly spiced baked cauliflower among plants." },
    { name: "Defne Yaprağı Ev Yemekleri", rating: 4.2, reviewCount: 310, area: "Bostanlı", commentTr: "Bostanlı'da ev yemeği sıcaklığında fırında baharatlı karnabahar.", commentEn: "Baked spiced cauliflower in the warmth of home-style food in Bostanli." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Çorbacı İsmet Usta", rating: 4.5, reviewCount: 3900, area: "Alsancak", commentTr: "Alsancak'ın 24 saat açık tarihi çorbacısından şifalı tavuk çorbası.", commentEn: "Healing chicken soup from Alsancak's 24-hour open historic soup restaurant." },
    { name: "Tarihi Kemeraltı Çorbacısı", rating: 4.4, reviewCount: 1100, area: "Kemeraltı", commentTr: "Kemeraltı çarşısında unsuz ve şehriyesiz katkısız tavuk çorbası.", commentEn: "Additive-free chicken soup without flour or noodles in Kemeralti bazaar." },
    { name: "Çorba Durağı", rating: 4.3, reviewCount: 820, area: "Bornova", commentTr: "Bornova'da günlük taze hazırlanan şehriyesiz tavuk suyu çorbası.", commentEn: "Daily freshly prepared chicken broth soup without noodles in Bornova." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Seçkin Lokantası", rating: 4.4, reviewCount: 1600, area: "Kemeraltı", commentTr: "Geleneksel esnaf lokantasından tam kıvamında zeytinyağlı bamya.", commentEn: "Perfect oil okra from traditional artisan restaurant." },
    { name: "Meşhur Lokantacı Kazım Usta", rating: 4.3, reviewCount: 920, area: "Kemeraltı", commentTr: "Kemeraltı'nın köklü esnaf lokantasından taze zeytinyağlı bamya.", commentEn: "Fresh olive oil okra from Kemeralti's long-established artisan restaurant." },
    { name: "Esnaf Lokantası Kemeraltı", rating: 4.3, reviewCount: 780, area: "Kemeraltı", commentTr: "Kemeraltı çarşısında günlük pişen hafif ekşili bamya yemeği.", commentEn: "Daily cooked lightly sour okra dish in Kemeralti bazaar." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Ömür Ev Yemekleri", rating: 4.2, reviewCount: 540, area: "Bornova", commentTr: "Bornova'da hafif peynirli ve dereotlu fırında kabak sandal.", commentEn: "Baked zucchini boat with light cheese and dill in Bornova." },
    { name: "Ege Sofrası", rating: 4.3, reviewCount: 980, area: "Karşıyaka", commentTr: "Karşıyaka'da ev yemeği lezzetinde fırınlanmış kabak sandal.", commentEn: "Baked zucchini boat with home-style food taste in Karsiyaka." },
    { name: "Tarihi Kemeraltı Esnaf Lokantası", rating: 4.4, reviewCount: 1500, area: "Kemeraltı", commentTr: "Tarihi çarşıda hafif ve doyurucu fırında kabak sandal yemeği.", commentEn: "Light and filling baked zucchini boat dish in the historic bazaar." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Tavacı Recep Usta (Alsancak)", rating: 4.6, reviewCount: 4800, area: "Alsancak", commentTr: "Alsancak Kordon'da kebap yanında harika köz patlıcan salatası mezesi.", commentEn: "Wonderful roasted eggplant salad appetizer alongside kebabs on Alsancak Kordon." },
    { name: "Boğaziçi Restoran (Bostanlı)", rating: 4.5, reviewCount: 3100, area: "Bostanlı", commentTr: "Deniz manzarası eşliğinde zeytinyağlı köz patlıcan salatası.", commentEn: "Roasted eggplant salad with olive oil accompanied by sea views." },
    { name: "Cumba Restoran", rating: 4.6, reviewCount: 2200, area: "Bornova", commentTr: "Bornova sırtlarında şık ortamda harika köz patlıcan salatası.", commentEn: "Wonderful roasted eggplant salad in a chic environment on Bornova hills." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Awake Coffee & Espresso", rating: 4.5, reviewCount: 880, area: "Alsancak", commentTr: "Alsancak'ta kahve yanında chia tohumlu taze meyveli yoğurt kasesi.", commentEn: "Chia seed fresh fruit yogurt bowl alongside coffee in Alsancak." },
    { name: "Bro's Coffee & Food", rating: 4.4, reviewCount: 650, area: "Bornova", commentTr: "Bornova'da güne zinde başlamak için chia meyveli yoğurt.", commentEn: "Chia fruit yogurt to start the day fresh in Bornova." },
    { name: "Kamuran Coffee Shop", rating: 4.5, reviewCount: 1100, area: "Bostanlı", commentTr: "Bostanlı'da keyifli ortamda sağlıklı chia meyveli yoğurt kasesi.", commentEn: "Healthy chia fruit yogurt bowl in a pleasant environment in Bostanli." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Köfteci Tizzy", rating: 4.4, reviewCount: 920, area: "Bostanlı", commentTr: "Bostanlı'da katkısız kıymadan bol yeşillikli fit ızgara köfte.", commentEn: "Fit grilled meatballs with plenty of greens from pure minced meat in Bostanli." },
    { name: "Meşhur Köfteci Küçük Sami", rating: 4.5, reviewCount: 1900, area: "Kemeraltı", commentTr: "Tarihi Kemeraltı köftecisinden yeşillikler eşliğinde ızgara köfte.", commentEn: "Grilled meatballs accompanied by greens from historic Kemeralti meatball maker." },
    { name: "Tarihi Altınkapı Kebap & Köfte", rating: 4.4, reviewCount: 1400, area: "Alsancak", commentTr: "Alsancak'ta yeşillikler ve köz biberle servis edilen geleneksel köfte.", commentEn: "Traditional meatballs served with greens and roasted pepper in Alsancak." }
  ],
  "Ispanak Borani": [
    { name: "Meyhane Sisim", rating: 4.5, reviewCount: 1600, area: "Kordon", commentTr: "Kordon sahilinde sarımsaklı süzme yoğurtlu ıspanak borani mezesi.", commentEn: "Spinach borani appetizer with garlicky strained yogurt on Kordon coast." },
    { name: "Sakız Alsancak Restoran", rating: 4.6, reviewCount: 2200, area: "Alsancak", commentTr: "Alsancak'ta Girit mezeleri arasında nefis yoğurtlu ıspanak borani.", commentEn: "Delicious yogurt spinach borani among Cretan appetizers in Alsancak." },
    { name: "Bohem Meyhane", rating: 4.4, reviewCount: 980, area: "Bostanlı", commentTr: "Bostanlı'da taze Ege otları ve yoğurtlu ıspanak borani keyfi.", commentEn: "Enjoyment of yogurt spinach borani and fresh Aegean herbs in Bostanli." }
  ]
};

export const FIT_MERSIN_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "Fit Mutfak Mersin", rating: 4.5, reviewCount: 190, area: "Yenişehir", commentTr: "Mersin'de fit beslenme ve protein odaklı ızgara tavuk alternatifleri.", commentEn: "Fit diet and high-protein grilled chicken breast alternatives in Mersin." },
    { name: "BigChefs (Marina)", rating: 4.4, reviewCount: 4200, area: "Marina", commentTr: "Marina şubesinde deniz manzarası eşliğinde sunulan ızgara tavuk tabağı.", commentEn: "Grilled chicken plate served with marina views at Marina branch." },
    { name: "Pozcu Han Garaj (Izgara Bölümü)", rating: 4.3, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da katkısız ve taze malzemelerle hazırlanan ızgara tavuk.", commentEn: "Grilled chicken prepared with fresh, additive-free ingredients in Pozcu." }
  ],
  "Fırında Mücver": [
    { name: "Sarnıç Cafe Bistro", rating: 4.4, reviewCount: 650, area: "Yenişehir", commentTr: "Nezih ve keyifli bir ortamda hafif fırınlanmış mücver seçeneği.", commentEn: "Light baked zucchini fritters option in a decent and pleasant environment." },
    { name: "Leman Kültür (Pozcu)", rating: 4.3, reviewCount: 2200, area: "Pozcu", commentTr: "Leman Kültür Pozcu şubesinde sunulan hafif fırında mücver.", commentEn: "Light baked zucchini fritters served at Leman Kultur Pozcu branch." },
    { name: "Nar Ev Yemekleri", rating: 4.5, reviewCount: 380, area: "Mezitli", commentTr: "Mezitli'de ev yemeği kalitesinde zeytinyağlı fırında mücver.", commentEn: "Olive oil baked zucchini fritters with home-style cooking quality in Mezitli." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Eshab-ı Kehf Esnaf Lokantası", rating: 4.4, reviewCount: 520, area: "Tarsus", commentTr: "Tarsus'ta zeytinyağlı taze enginarı en lezzetli sunan esnaf lokantalarından biri.", commentEn: "One of the artisan restaurants serving the most delicious fresh olive oil artichokes in Tarsus." },
    { name: "Hacıbaba Lokantası (Zeytinyağlı Büfesi)", rating: 4.5, reviewCount: 2900, area: "Yenişehir", commentTr: "Hacıbaba'nın geniş zeytinyağlı büfesinden günlük taze enginar.", commentEn: "Daily fresh artichoke from Hacibaba's extensive olive oil buffet." },
    { name: "Mersin Büyükşehir Belediyesi Akdeniz Mutfağı", rating: 4.3, reviewCount: 420, area: "Akdeniz", commentTr: "Belediye sosyal tesislerinde hafif ve uygun fiyatlı zeytinyağlı enginar.", commentEn: "Light and budget-friendly olive oil artichoke at Akdeniz social facilities." }
  ],
  "Izgara Somon / Levrek": [
    { name: "İskele Marin Balık Restoran", rating: 4.6, reviewCount: 2800, area: "Yenişehir", commentTr: "Mersin'in en seçkin balıkçılarından muhteşem ızgara somon ve levrek.", commentEn: "Excellent grilled salmon and seabass from Mersin's most exclusive fish restaurant." },
    { name: "Rina Balık Restoran", rating: 4.5, reviewCount: 1600, area: "Mezitli", commentTr: "Mezitli sahilinde taze deniz ürünleri ve leziz ızgara levrek.", commentEn: "Fresh seafood and delicious grilled seabass on Mezitli coast." },
    { name: "Sunam Balık", rating: 4.4, reviewCount: 950, area: "Marina", commentTr: "Marina yakınında samimi atmosferde taze ızgara somon keyfi.", commentEn: "Fresh grilled salmon enjoyment in a warm atmosphere near Marina." }
  ],
  "Mercimek Köftesi": [
    { name: "Gönül Kahvesi (Marina)", rating: 4.3, reviewCount: 1800, area: "Marina", commentTr: "Mersin Marina'da çay saatlerinin vazgeçilmezi taze mercimek köftesi.", commentEn: "Fresh lentil patties, an indispensable part of tea time in Mersin Marina." },
    { name: "Evce Ev Yemekleri", rating: 4.4, reviewCount: 480, area: "Yenişehir", commentTr: "Yenişehir'de anne eli değmiş lezzette taze mercimek köftesi.", commentEn: "Fresh lentil patties with a home-cooked taste in Yenisehir." },
    { name: "Hatun Mutfak", rating: 4.5, reviewCount: 310, area: "Mezitli", commentTr: "Mezitli'de taze yeşillikler ve bol limonla sunulan mercimek köftesi.", commentEn: "Lentil patties served with fresh greens and plenty of lemon in Mezitli." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads (Sayapark AVM)", rating: 4.1, reviewCount: 950, area: "Yenişehir", commentTr: "Sayapark şubesinde hafif ve besleyici hindi füme salata alternatifi.", commentEn: "Light and nutritious smoked turkey salad alternative at Sayapark branch." },
    { name: "David People Coffee & Food", rating: 4.3, reviewCount: 1100, area: "Yenişehir", commentTr: "David People'ın zengin menüsünden leziz hindi füme salatası.", commentEn: "Delicious smoked turkey salad from the rich menu of David People." },
    { name: "Kahve Dünyası (Fit Salatalar)", rating: 4.2, reviewCount: 1500, area: "Marina", commentTr: "Kahve Dünyası Marina şubesinde diyet dostu hindi füme salata.", commentEn: "Diet-friendly smoked turkey salad at Kahve Dunyasi Marina branch." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Meşhur Köfteci Ali", rating: 4.5, reviewCount: 2200, area: "Akdeniz", commentTr: "Tarihi Mersin köftecisinde köfte yanında sunulan nefis sirkeli piyaz.", commentEn: "Delicious vinegary bean salad served alongside meatballs in historic Mersin meatball house." },
    { name: "Cengiz Köfte Salonu", rating: 4.4, reviewCount: 890, area: "Yenişehir", commentTr: "Yenişehir'de köftenin en önemli eşlikçisi olan kuru fasulye piyazı.", commentEn: "Bean salad, the most important accompaniment to meatballs in Yenisehir." },
    { name: "Köfteci Yaşar", rating: 4.3, reviewCount: 620, area: "Mezitli", commentTr: "Mezitli'de günlük taze hazırlanan kuru fasulye piyazı.", commentEn: "Daily freshly prepared bean salad in Mezitli." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Organic Shop & Cafe Mersin", rating: 4.6, reviewCount: 280, area: "Yenişehir", commentTr: "Sağlıklı ve organik ürünler sunan kafede glütensiz kinoalı kısır.", commentEn: "Gluten-free quinoa kisir at the cafe offering healthy and organic products." },
    { name: "Soulmate Coffee (Sağlıklı Menü)", rating: 4.3, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da kahve yanında tüketebileceğiniz fit karabuğday kısırı.", commentEn: "Fit buckwheat kisir that you can enjoy alongside coffee in Pozcu." },
    { name: "Base Coffee Shop", rating: 4.5, reviewCount: 340, area: "Mezitli", commentTr: "Mezitli'de modern ortamda sunulan kinoa kısır tabağı.", commentEn: "Quinoa kisir plate served in a modern environment in Mezitli." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Göksel Tantuni & Meze Salonu (Meze Bölümü)", rating: 4.6, reviewCount: 8800, area: "Yenişehir", commentTr: "Göksel Tantuni'nin zengin meze ikramlarından yoğurtlu kuru domates.", commentEn: "Yogurt sun-dried tomato from the rich appetizer treats of Goksel Tantuni." },
    { name: "Bedis Ayvalık Balıkçısı (Meze Reyonu)", rating: 4.5, reviewCount: 1400, area: "Mezitli", commentTr: "Balık yanında servis edilen leziz süzme yoğurtlu kuru domates mezesi.", commentEn: "Delicious strained yogurt sun-dried tomato appetizer served with fish." },
    { name: "Sini Restoran", rating: 4.4, reviewCount: 1900, area: "Pozcu", commentTr: "Pozcu'da geleneksel Ege ve Akdeniz mezelerinden kuru domates salatası.", commentEn: "Sun-dried tomato salad from traditional Aegean and Mediterranean appetizers in Pozcu." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 850, area: "Akdeniz", commentTr: "Mersin merkezinde günlük taze zeytinyağlı taze fasulye.", commentEn: "Daily fresh olive oil green beans in Mersin center." },
    { name: "Güven Lokantası", rating: 4.5, reviewCount: 1300, area: "Yenişehir", commentTr: "Yenişehir esnafının uğrak yerinden tam kıvamında taze fasulye.", commentEn: "Perfectly cooked green beans from the popular artisan restaurant in Yenisehir." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Mezitli", commentTr: "Mezitli'de ev yemeği lezzetinde zeytinyağlı taze fasulye yemeği.", commentEn: "Olive oil green beans dish with home-style taste in Mezitli." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Çamlıyayla Kahvaltı Evi", rating: 4.6, reviewCount: 750, area: "Yenişehir", commentTr: "Yenişehir'de Çamlıyayla yayla esintili lorlu omlet kahvaltısı.", commentEn: "Camliyayla highland-inspired curd cheese omelet breakfast in Yenisehir." },
    { name: "Saçkan Kahvaltı Salonu", rating: 4.5, reviewCount: 920, area: "Mezitli", commentTr: "Mezitli'de meşhur kahvaltıcıdan lor peynirli taze menemen.", commentEn: "Fresh curd cheese menemen from the famous breakfast restaurant in Mezitli." },
    { name: "Antik Cafe & Kahvaltı", rating: 4.4, reviewCount: 650, area: "Pozcu", commentTr: "Pozcu'da sıcak ve samimi ortamda lorlu fit kahvaltı alternatifleri.", commentEn: "Curd cheese fit breakfast alternatives in a warm and cozy atmosphere in Pozcu." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "Coffee Lab (Pozcu)", rating: 4.4, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da kahve keyfine eşlik eden sağlıklı nohutlu tavuk salatası.", commentEn: "Healthy chickpea chicken salad accompanying coffee enjoyment in Pozcu." },
    { name: "Arabica Coffee House (Fit Atıştırmalıklar)", rating: 4.3, reviewCount: 1400, area: "Yenişehir", commentTr: "Yenişehir şubesinde pratik ve besleyici tavuklu nohut salata kabı.", commentEn: "Practical and nutritious chicken chickpea salad cup at Yenisehir branch." },
    { name: "Coffeewood", rating: 4.5, reviewCount: 780, area: "Mezitli", commentTr: "Mezitli'de kahvenizin yanında tüketebileceğiniz tavuklu nohut salatası.", commentEn: "Chicken chickpea salad to enjoy alongside your coffee in Mezitli." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Veggie Mersin", rating: 4.6, reviewCount: 310, area: "Yenişehir", commentTr: "Tamamen vejetaryen/vegan seçenekler sunan mekandan baharatlı fırın karnabahar.", commentEn: "Spiced baked cauliflower from the place offering completely vegetarian/vegan options." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 220, area: "Mezitli", commentTr: "Mezitli'de günlük hazırlanan hafif baharatlı fırın karnabahar.", commentEn: "Lightly spiced baked cauliflower prepared daily in Mezitli." },
    { name: "Bahçe Cafe & Bistro", rating: 4.4, reviewCount: 540, area: "Yenişehir", commentTr: "Yenişehir şubesinde hafif ve lezzetli fırında karnabahar alternatifi.", commentEn: "Light and delicious baked cauliflower alternative at Yenisehir branch." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 1300, area: "Yenişehir", commentTr: "Yenişehir'de sabahların vazgeçilmezi şifalı tavuk suyu çorba.", commentEn: "Healing chicken broth soup, indispensable for mornings in Yenisehir." },
    { name: "Paçacı Şemsi Mersin", rating: 4.4, reviewCount: 1900, area: "Pozcu", commentTr: "Pozcu'da ünlü çorbacıdan unsuz ve katkısız tavuk çorbası.", commentEn: "Flour-free and additive-free chicken soup from the famous soup restaurant in Pozcu." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.3, reviewCount: 820, area: "Akdeniz", commentTr: "Akdeniz ilçesinde geleneksel usulde pişen tavuk çorbası.", commentEn: "Traditional style cooked chicken soup in Akdeniz district." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 650, area: "Yenişehir", commentTr: "Ege usulü ekşili zeytinyağlı bamya yemeğini en iyi yapan yerlerden biri.", commentEn: "One of the best places making Aegean style sour olive oil okra dish." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 420, area: "Mezitli", commentTr: "Mezitli'de ev yemeği tadında günlük pişen taze bamya yemeği.", commentEn: "Daily cooked fresh okra dish with home-style cooking taste in Mezitli." },
    { name: "Lezzet Ambarı", rating: 4.2, reviewCount: 380, area: "Yenişehir", commentTr: "Yenişehir şubesinde hafif ve lezzetli zeytinyağlı bamya.", commentEn: "Light and delicious olive oil okra at Yenisehir branch." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Bizim Ev Yemekleri", rating: 4.3, reviewCount: 480, area: "Yenişehir", commentTr: "Yenişehir'de hafif dereotlu peynirli fırında kabak sandal.", commentEn: "Baked zucchini boat with light dill cheese in Yenisehir." },
    { name: "Anaeli Mutfak", rating: 4.4, reviewCount: 620, area: "Mezitli", commentTr: "Mezitli'de ev lezzetinde fırınlanmış diyet dostu kabak sandal.", commentEn: "Diet-friendly baked zucchini boat with home-style taste in Mezitli." },
    { name: "Keyifli Mutfak", rating: 4.2, reviewCount: 290, area: "Yenişehir", commentTr: "Yenişehir'de taze malzemelerle hazırlanan fırın kabak sandal.", commentEn: "Baked zucchini boat prepared with fresh ingredients in Yenisehir." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Hasan Kolcuoğlu (Marina)", rating: 4.5, reviewCount: 3200, area: "Marina", commentTr: "Marina'da kebap yanında servis edilen köz patlıcan salatası.", commentEn: "Roasted eggplant salad served alongside kebabs at Marina." },
    { name: "Wo-Wo Brasserie (Meze Seçenekleri)", rating: 4.4, reviewCount: 1600, area: "Yenişehir", commentTr: "Brasserie konseptinde zeytinyağlı taze köz patlıcan salatası.", commentEn: "Fresh olive oil roasted eggplant salad in brasserie concept." },
    { name: "Baaba Kebap & Meze", rating: 4.5, reviewCount: 1100, area: "Mezitli", commentTr: "Mezitli'de zengin meze seçenekleri arasında enfes köz patlıcan.", commentEn: "Delicious roasted eggplant among rich appetizer options in Mezitli." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Crop Coffee Co. Mersin", rating: 4.5, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da kahve yanında taze meyveli ve chia tohumlu sağlıklı yoğurt kasesi.", commentEn: "Healthy yogurt bowl with fresh fruit and chia seeds alongside coffee in Pozcu." },
    { name: "MOC Coffee (Sayapark)", rating: 4.4, reviewCount: 780, area: "Yenişehir", commentTr: "Sayapark AVM şubesinde fit beslenme için chia tohumlu yoğurt.", commentEn: "Chia seed yogurt for fit nutrition at Sayapark mall branch." },
    { name: "Robert's Coffee (Pozcu)", rating: 4.3, reviewCount: 1100, area: "Pozcu", commentTr: "Robert's Coffee'de spor öncesi hafif chia meyveli yoğurt kabı.", commentEn: "Light chia fruit yogurt cup before sports at Robert's Coffee." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Köfteci Ahmet", rating: 4.4, reviewCount: 1300, area: "Akdeniz", commentTr: "Mersin merkezinde katkısız kıymadan ızgara köfte ve bol yeşillik.", commentEn: "Grilled meatballs and plenty of greens from pure minced meat in Mersin center." },
    { name: "Tarihi Eminönü Köftecisi (Mersin Şubesi)", rating: 4.5, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir şubesinde yeşillikler ve köz biber eşliğinde sunulan ızgara köfte.", commentEn: "Grilled meatballs served with greens and roasted pepper at Yenisehir branch." },
    { name: "Çıtır Köfte Salonu", rating: 4.3, reviewCount: 680, area: "Mezitli", commentTr: "Mezitli'de taze salata ve bol yeşillikle servis edilen ızgara köfte.", commentEn: "Grilled meatballs served with fresh salad and plenty of greens in Mezitli." }
  ],
  "Ispanak Borani": [
    { name: "Merada Meyhane", rating: 4.6, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir'de süzme yoğurt ve Ege otlu ıspanak borani mezesi.", commentEn: "Spinach borani appetizer with strained yogurt and Aegean herbs in Yenisehir." },
    { name: "Sandal Meyhanesi", rating: 4.5, reviewCount: 1100, area: "Mezitli", commentTr: "Mezitli'de rakı meze sofrasında hafif zeytinyağlı ıspanak borani.", commentEn: "Light olive oil spinach borani on the raki appetizer table in Mezitli." },
    { name: "Şerefe Meyhane", rating: 4.4, reviewCount: 750, area: "Pozcu", commentTr: "Pozcu'da sıcak ortamda taze yoğurtlu ıspanak borani keyfi.", commentEn: "Yogurt spinach borani enjoyment in a warm atmosphere in Pozcu." }
  ]
};

export const FIT_ESKISEHIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "Fit Mutfak Eskişehir", rating: 4.5, reviewCount: 160, area: "Tepebaşı", commentTr: "Eskişehir'de fit beslenme ve yüksek proteinli ızgara tavuk alternatifleri.", commentEn: "Fit diet and high-protein grilled chicken breast alternatives in Eskisehir." },
    { name: "BigChefs (Cassaba Modern)", rating: 4.4, reviewCount: 2200, area: "Tepebaşı", commentTr: "Cassaba Modern şubesinde modern ortamda sunulan ızgara tavuk tabağı.", commentEn: "Grilled chicken plate served in a modern environment at Cassaba Modern branch." },
    { name: "Cookshop (Espark)", rating: 4.3, reviewCount: 2800, area: "Espark", commentTr: "Espark yakınında taze malzemelerle hazırlanan ızgara tavuk.", commentEn: "Grilled chicken prepared with fresh ingredients near Espark." }
  ],
  "Fırında Mücver": [
    { name: "Mazlum Süt Evi", rating: 4.6, reviewCount: 1400, area: "Odunpazarı", commentTr: "Köklü Mazlum Süt Evi'nde sunulan hafif fırınlanmış kabak mücveri.", commentEn: "Light baked zucchini fritters served at well-established Mazlum Sut Evi." },
    { name: "Hey Joe Coffee Co. (Fit Menü)", rating: 4.5, reviewCount: 920, area: "Tepebaşı", commentTr: "Üçüncü nesil kahveci Hey Joe'da sunulan hafif fırında mücver.", commentEn: "Light baked zucchini fritters served at third wave coffee shop Hey Joe." },
    { name: "Walker's Coffee House", rating: 4.4, reviewCount: 780, area: "Bağlar", commentTr: "Bağlar bölgesinde kahve yanında sunulan zeytinyağlı fırında mücver.", commentEn: "Olive oil baked zucchini fritters served alongside coffee in Baglar region." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Trakya Lokantası", rating: 4.5, reviewCount: 950, area: "Tepebaşı", commentTr: "Eskişehir'de geleneksel ev yemekleri ve tam kıvamında zeytinyağlı enginar.", commentEn: "Traditional home-cooked foods and perfectly cooked olive oil artichoke in Eskisehir." },
    { name: "Meşhur Eskişehir Esnaf Lokantası", rating: 4.4, reviewCount: 650, area: "Odunpazarı", commentTr: "Tarihi Odunpazarı bölgesinde günlük pişen taze zeytinyağlı enginar.", commentEn: "Daily cooked fresh olive oil artichoke in historic Odunpazari region." },
    { name: "Divan Pub Eskişehir (Zeytinyağlı Büfesi)", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Divan Pub kalitesiyle sunulan hafif ve taze zeytinyağlı enginar.", commentEn: "Light and fresh olive oil artichoke served with Divan Pub quality." }
  ],
  "Izgara Somon / Levrek": [
    { name: "Karadeniz Balık Evi", rating: 4.4, reviewCount: 1600, area: "Tepebaşı", commentTr: "Eskişehir'de taze balık ve leziz ızgara levrek alternatifleri.", commentEn: "Fresh fish and delicious grilled seabass alternatives in Eskisehir." },
    { name: "Mezgit Restoran", rating: 4.5, reviewCount: 1900, area: "Odunpazarı", commentTr: "Odunpazarı bölgesinde şık ortamda taze ızgara somon keyfi.", commentEn: "Fresh grilled salmon enjoyment in a chic environment in Odunpazari region." },
    { name: "Mercan Balık", rating: 4.3, reviewCount: 980, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde taze deniz ürünleri ve leziz ızgara levrek.", commentEn: "Fresh seafood and delicious grilled seabass at Tepebası branch." }
  ],
  "Mercimek Köftesi": [
    { name: "Acıktım Kafe", rating: 4.3, reviewCount: 2200, area: "Tepebaşı", commentTr: "Eskişehir'de üniversitelilerin uğrak yeri Acıktım Kafe'den taze mercimek köftesi.", commentEn: "Fresh lentil patties from Aciktim Cafe, a popular spot for students in Eskisehir." },
    { name: "Varuna Gezgin / Cafe Del Mundo", rating: 4.5, reviewCount: 4800, area: "Tepebaşı", commentTr: "Dünya konseptli mekanda çay yanında sunulan hafif mercimek köftesi.", commentEn: "Light lentil patties served alongside tea in the world-themed cafe." },
    { name: "Kahve 6 Eskişehir", rating: 4.4, reviewCount: 650, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde taze yeşilliklerle sunulan mercimek köftesi.", commentEn: "Lentil patties served with fresh greens at Odunpazari branch." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads (Espark AVM)", rating: 4.1, reviewCount: 850, area: "Espark", commentTr: "Espark şubesinde hafif ve besleyici hindi füme salata alternatifi.", commentEn: "Light and nutritious smoked turkey salad alternative at Espark branch." },
    { name: "Keçi Geçti Cafe", rating: 4.5, reviewCount: 720, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze malzemeler ve hindi füme ile hazırlanan fit salata.", commentEn: "Fit salad prepared with fresh ingredients and smoked turkey in Tepebası." },
    { name: "Kahve Dünyası (Fit Salatalar)", rating: 4.2, reviewCount: 1300, area: "Espark", commentTr: "Kahve Dünyası Espark şubesinde diyet dostu hindi füme salata.", commentEn: "Diet-friendly smoked turkey salad at Kahve Dunyasi Espark branch." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Köfteci Ahmet", rating: 4.5, reviewCount: 1800, area: "Tepebaşı", commentTr: "Tepebaşı'nın meşhur köftecisinden leziz kuru fasulye piyazı.", commentEn: "Delicious bean salad from Tepebası's famous meatball restaurant." },
    { name: "Tatlıdil Köftecisi", rating: 4.4, reviewCount: 950, area: "Odunpazarı", commentTr: "Tarihi esnaftan köfte yanında sunulan bol piyaz.", commentEn: "Plenty of bean salad served alongside meatballs from historic artisan." },
    { name: "Meşhur Rumeli Köftecisi", rating: 4.3, reviewCount: 620, area: "Tepebaşı", commentTr: "Geleneksel Rumeli köftesi eşliğinde sunulan sirkeli piyaz.", commentEn: "Vinegary bean salad served alongside traditional Rumeli meatballs." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Social No:7", rating: 4.6, reviewCount: 950, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde modern ve sağlıklı kinoalı fit kısır seçeneği.", commentEn: "Modern and healthy quinoa fit kisir option at Tepebası branch." },
    { name: "O'cup Coffee & Food", rating: 4.5, reviewCount: 310, area: "Tepebaşı", commentTr: "Sağlıklı beslenmeye uygun karabuğday kısırı alternatifi.", commentEn: "Buckwheat kisir alternative suitable for healthy nutrition." },
    { name: "Black Bird Cafe", rating: 4.4, reviewCount: 420, area: "Odunpazarı", commentTr: "Odunpazarı'nda modern ortamda sunulan kinoa kısır tabağı.", commentEn: "Quinoa kisir plate served in a modern environment in Odunpazari." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Gagarin Eskişehir (Meze Bölümü)", rating: 4.4, reviewCount: 1500, area: "Tepebaşı", commentTr: "Gagarin'in zengin meze seçeneklerinden yoğurtlu kuru domates.", commentEn: "Yogurt sun-dried tomato from Gagarin's rich appetizer options." },
    { name: "Cassaba Modern Meyhane", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Meyhane konseptinde taze süzme yoğurtlu kuru domates mezesi.", commentEn: "Fresh strained yogurt sun-dried tomato appetizer in tavern concept." },
    { name: "Neyzen Meyhanesi", rating: 4.4, reviewCount: 850, area: "Odunpazarı", commentTr: "Geleneksel meze tepsisinde yer alan leziz süzme yoğurtlu kuru domates.", commentEn: "Delicious strained yogurt sun-dried tomato in the traditional appetizer tray." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "Tarihi Odunpazarı Ev Yemekleri", rating: 4.5, reviewCount: 1300, area: "Odunpazarı", commentTr: "Tarihi han avlusunda geleneksel usul zeytinyağlı taze fasulye.", commentEn: "Traditional style olive oil green beans in the historic inn courtyard." },
    { name: "Şehir Lokantası", rating: 4.3, reviewCount: 650, area: "Tepebaşı", commentTr: "Günlük taze pişen zeytinyağlı taze fasulye yemeği.", commentEn: "Daily freshly cooked olive oil green beans dish." },
    { name: "Hüsnüniyet Lokantası", rating: 4.4, reviewCount: 480, area: "Odunpazarı", commentTr: "Odunpazarı'nın ünlü esnaf lokantasından nefis taze fasulye.", commentEn: "Delicious green beans from Odunpazari's famous artisan restaurant." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Ayten Usta Gurme Restoran", rating: 4.6, reviewCount: 5200, area: "Uluönder", commentTr: "Uluönder parkı içinde meşhur Ayten Usta'dan lor peynirli omlet ve menemen.", commentEn: "Curd cheese omelet and menemen from famous Ayten Usta in Uluonder park." },
    { name: "Kahvaltı Dünyası (Kanatlı Bölgesi)", rating: 4.3, reviewCount: 820, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde lor peynirli taze menemen seçeneği.", commentEn: "Fresh curd cheese menemen option at Tepebası branch." },
    { name: "Doyuran Kahvaltı Salonu", rating: 4.5, reviewCount: 2200, area: "Tepebaşı", commentTr: "Eskişehir'in meşhur nostaljik kahvaltıcısından taze lorlu omlet.", commentEn: "Fresh curd cheese omelet from Eskisehir's famous nostalgic breakfast salon." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "Coffee Lab (Eskişehir)", rating: 4.4, reviewCount: 950, area: "Tepebaşı", commentTr: "Tepebaşı'nda kahve keyfine eşlik eden sağlıklı nohutlu tavuk salatası.", commentEn: "Healthy chickpea chicken salad accompanying coffee enjoyment in Tepebası." },
    { name: "Arabica Coffee House (Fit Atıştırmalıklar)", rating: 4.3, reviewCount: 1100, area: "Espark", commentTr: "Espark şubesinde pratik ve besleyici tavuklu nohut salata kabı.", commentEn: "Practical and nutritious chicken chickpea salad cup at Espark branch." },
    { name: "Brew Mood Coffee Roasters", rating: 4.4, reviewCount: 650, area: "Bağlar", commentTr: "Bağlar bölgesinde kahve yanında tüketebileceğiniz tavuklu nohut salatası.", commentEn: "Chicken chickpea salad to enjoy alongside your coffee in Baglar region." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Veggie Eskişehir", rating: 4.6, reviewCount: 280, area: "Tepebaşı", commentTr: "Vejetaryen/vegan seçenekler sunan kafede baharatlı fırın karnabahar.", commentEn: "Spiced baked cauliflower in the cafe offering vegetarian/vegan options." },
    { name: "Göz Oda Cafe", rating: 4.4, reviewCount: 420, area: "Odunpazarı", commentTr: "Odunpazarı sokaklarında hafif baharatlı fırın karnabahar keyfi.", commentEn: "Enjoyment of lightly spiced baked cauliflower in Odunpazari streets." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 190, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği lezzetinde fırında baharatlı karnabahar.", commentEn: "Baked spiced cauliflower with home-style taste in Tepebası." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Çorbacı Necdet Usta", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Tepebaşı'nda sabahları taze hazırlanan şifalı tavuk çorbası.", commentEn: "Healing chicken soup prepared fresh in the mornings in Tepebası." },
    { name: "Paçacı Şemsi Eskişehir", rating: 4.4, reviewCount: 1500, area: "Tepebaşı", commentTr: "Çorba çeşitleriyle meşhur şubeden unsuz ve katkısız tavuk çorbası.", commentEn: "Unfloured and additive-free chicken soup from the famous soup branch." },
    { name: "Tarihi Merkez Çorbacısı", rating: 4.3, reviewCount: 650, area: "Odunpazarı", commentTr: "Odunpazarı ilçesinde geleneksel usulde pişen tavuk suyu çorba.", commentEn: "Traditional style cooked chicken broth soup in Odunpazari district." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.3, reviewCount: 380, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği tadında günlük pişen taze bamya yemeği.", commentEn: "Daily cooked fresh okra dish with home-style taste in Tepebası." },
    { name: "Sofra Restoran", rating: 4.4, reviewCount: 950, area: "Tepebaşı", commentTr: "Ege usulü hafif ekşili zeytinyağlı bamya yemeği.", commentEn: "Aegean style lightly sour olive oil okra dish." },
    { name: "Anadolu Ev Yemekleri", rating: 4.2, reviewCount: 220, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde hafif ve lezzetli zeytinyağlı bamya.", commentEn: "Light and delicious olive oil okra at Odunpazari branch." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.3, reviewCount: 520, area: "Tepebaşı", commentTr: "Tepebaşı'nda hafif peynirli ve dereotlu fırında kabak sandal.", commentEn: "Baked zucchini boat with light cheese and dill in Tepebası." },
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 890, area: "Odunpazarı", commentTr: "Odunpazarı'nda ev yemeği lezzetinde fırınlanmış kabak sandal.", commentEn: "Baked zucchini boat with home-style taste in Odunpazari." },
    { name: "Saray Muhallebicisi (Ev Yemekleri Reyonu)", rating: 4.2, reviewCount: 1400, area: "Tepebaşı", commentTr: "Saray kalitesiyle sunulan hafif fırın kabak sandal yemeği.", commentEn: "Light baked zucchini boat dish served with Saray quality." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Kebapçı Abdülkadir", rating: 4.5, reviewCount: 2800, area: "Tepebaşı", commentTr: "Tepebaşı'nda kebap yanında nefis köz patlıcan salatası mezesi.", commentEn: "Delicious roasted eggplant salad appetizer alongside kebabs in Tepebası." },
    { name: "Kasap Osman Restoran", rating: 4.4, reviewCount: 1900, area: "Odunpazarı", commentTr: "Odunpazarı'nda taze malzemeler ve zeytinyağı ile köz patlıcan.", commentEn: "Roasted eggplant with fresh ingredients and olive oil in Odunpazari." },
    { name: "Fahrettin Usta (Salata Bölümü)", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Tepebaşı'nda zengin meze seçenekleri arasında enfes köz patlıcan.", commentEn: "Delicious roasted eggplant among rich appetizer options in Tepebası." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Crop Coffee Co. Eskişehir", rating: 4.5, reviewCount: 780, area: "Tepebaşı", commentTr: "Tepebaşı'nda kahve yanında taze meyveli ve chia tohumlu healthy yoğurt kasesi.", commentEn: "Healthy yogurt bowl with fresh fruit and chia seeds alongside coffee in Tepebası." },
    { name: "MOC Coffee (Cassaba Modern)", rating: 4.4, reviewCount: 920, area: "Tepebaşı", commentTr: "Cassaba Modern şubesinde fit beslenme için chia tohumlu yoğurt.", commentEn: "Chia seed yogurt for fit nutrition at Cassaba Modern branch." },
    { name: "Soulmate Coffee", rating: 4.3, reviewCount: 1100, area: "Tepebaşı", commentTr: "Üniversite caddesi şubesinde spor antesi hafif chia meyveli yoğurt kabı.", commentEn: "Light chia fruit yogurt cup before sports at University street branch." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Köfteci Ali", rating: 4.4, reviewCount: 1200, area: "Tepebaşı", commentTr: "Tepebaşı merkezinde katkısız kıymadan ızgara köfte ve bol yeşillik.", commentEn: "Grilled meatballs and plenty of greens from pure minced meat in Tepebası center." },
    { name: "Tarihi Köfteci Muammer Usta", rating: 4.5, reviewCount: 1600, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde yeşillikler ve köz biber eşliğinde sunulan ızgara köfte.", commentEn: "Grilled meatballs served with greens and roasted pepper at Odunpazari branch." },
    { name: "Meşhur Balkan Köftecisi", rating: 4.3, reviewCount: 750, area: "Tepebaşı", commentTr: "Balkan usulü katkısız harçla hazırlanmış fit ızgara köfte.", commentEn: "Fit grilled meatballs prepared with Balkan style pure mixture." }
  ],
  "Ispanak Borani": [
    { name: "Social Pub & Meze", rating: 4.5, reviewCount: 1300, area: "Tepebaşı", commentTr: "Social Pub'da sarımsaklı süzme yoğurtlu ıspanak borani mezesi.", commentEn: "Spinach borani appetizer with garlicky strained yogurt at Social Pub." },
    { name: "Dublin Meyhane", rating: 4.4, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda rakı meze sofrasında hafif zeytinyağlı ıspanak borani.", commentEn: "Light olive oil spinach borani on the raki appetizer table in Tepebası." },
    { name: "Bahçe Tarihi Meyhane", rating: 4.5, reviewCount: 880, area: "Odunpazarı", commentTr: "Odunpazarı'nda sıcak ortamda taze yoğurtlu ıspanak borani keyfi.", commentEn: "Yogurt spinach borani enjoyment in a warm atmosphere in Odunpazari." }
  ]
};

export const FIT_ADANA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Izgara Tavuk Göğsü": [
    { name: "Fit Mutfak Adana", rating: 4.5, reviewCount: 180, area: "Çukurova", commentTr: "Adana'da sağlıklı beslenme ve yüksek protein odaklı ızgara tavuk tabağı.", commentEn: "Healthy diet and high-protein focused grilled chicken breast plate in Adana." },
    { name: "BigChefs (Ziyapaşa)", rating: 4.4, reviewCount: 3200, area: "Seyhan", commentTr: "Ziyapaşa şubesinde nezih ortamda sunulan fit ızgara tavuk göğsü.", commentEn: "Fit grilled chicken breast served in a decent environment at Ziyapasa branch." },
    { name: "Cookshop (M1 Adana)", rating: 4.3, reviewCount: 2900, area: "Seyhan", commentTr: "M1 AVM şubesinde taze ve lezzetli fit ızgara tavuk seçeneği.", commentEn: "Fresh and delicious fit grilled chicken option at M1 Mall branch." }
  ],
  "Fırında Mücver": [
    { name: "Pastabahçe (Ziyapaşa)", rating: 4.5, reviewCount: 950, area: "Seyhan", commentTr: "Ziyapaşa'nın sevilen kafesinden hafif fırınlanmış kabak mücveri.", commentEn: "Light baked zucchini fritters from Ziyapasa's popular cafe." },
    { name: "Göksel Cafe Bistro", rating: 4.3, reviewCount: 620, area: "Çukurova", commentTr: "Çukurova'da kahvaltı ve meze reyonundan hafif fırında mücver.", commentEn: "Light baked zucchini fritters from breakfast and appetizer section in Cukurova." },
    { name: "Leman Kültür (Turgut Özal)", rating: 4.3, reviewCount: 1800, area: "Çukurova", commentTr: "Turgut Özal şubesinde sunulan leziz fırında mücver alternatifi.", commentEn: "Delicious baked zucchini fritters alternative served at Turgut Ozal branch." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Boğaziçi Lokantası (Ziyapaşa)", rating: 4.5, reviewCount: 1400, area: "Seyhan", commentTr: "Ziyapaşa bölgesinde taze hazırlanan zeytinyağlı enginar yemeği.", commentEn: "Freshly prepared olive oil artichoke dish in Ziyapasa region." },
    { name: "Seci Seçkin Lokantası", rating: 4.4, reviewCount: 880, area: "Seyhan", commentTr: "Geleneksel esnaf lokantasından tam kıvamında pişmiş enginar.", commentEn: "Perfectly cooked artichoke from traditional artisan restaurant." },
    { name: "Seyhan Belediyesi Lezzet Durağı", rating: 4.3, reviewCount: 310, area: "Seyhan", commentTr: "Belediye sosyal tesislerinde hafif ve uygun fiyatlı zeytinyağlı enginar.", commentEn: "Light and budget-friendly olive oil artichoke at Municipality social facilities." }
  ],
  "Izgara Somon / Levrek": [
    { name: "Lagos Balık Restoran", rating: 4.6, reviewCount: 2200, area: "Seyhan", commentTr: "Seyhan baraj gölü kıyısında muhteşem ızgara somon ve levrek.", commentEn: "Excellent grilled salmon and seabass on the Seyhan dam lake coast." },
    { name: "Marina Balık Restoran", rating: 4.5, reviewCount: 1500, area: "Çukurova", commentTr: "Göl manzarası eşliğinde taze deniz ürünleri ve leziz ızgara levrek.", commentEn: "Fresh seafood and delicious grilled seabass accompanied by lake views." },
    { name: "Sercan Balık Evi", rating: 4.4, reviewCount: 850, area: "Seyhan", commentTr: "Samimi atmosferde taze balık ve leziz ızgara somon keyfi.", commentEn: "Fresh fish and delicious grilled salmon enjoyment in a warm atmosphere." }
  ],
  "Mercimek Köftesi": [
    { name: "Gönül Kahvesi (Turgut Özal)", rating: 4.2, reviewCount: 1100, area: "Çukurova", commentTr: "Turgut Özal bulvarında çay saatinde servis edilen taze mercimek köftesi.", commentEn: "Fresh lentil patties served during tea time on Turgut Ozal boulevard." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 420, area: "Seyhan", commentTr: "Seyhan'da ev yemeği kalitesinde leziz mercimek köftesi.", commentEn: "Delicious lentil patties with home-style cooking quality in Seyhan." },
    { name: "Tarihi Kazancılar Çarşısı Kafesi", rating: 4.3, reviewCount: 540, area: "Seyhan", commentTr: "Tarihi çarşı içerisinde çay eşliğinde sunulan taze mercimek köftesi.", commentEn: "Fresh lentil patties served alongside tea inside the historic bazaar." }
  ],
  "Fırınlanmış Hindi Füme Salata": [
    { name: "Green Salads (M1 AVM)", rating: 4.1, reviewCount: 780, area: "Seyhan", commentTr: "M1 AVM şubesinde hafif ve besleyici hindi füme salata alternatifi.", commentEn: "Light and nutritious smoked turkey salad alternative at M1 Mall branch." },
    { name: "David People Coffee & Food", rating: 4.3, reviewCount: 950, area: "Çukurova", commentTr: "Çukurova şubesinde lezzetli ve taze hindi füme salatası.", commentEn: "Delicious and fresh smoked turkey salad at Cukurova branch." },
    { name: "Kahve Dünyası (Fit Salatalar)", rating: 4.2, reviewCount: 1200, area: "Seyhan", commentTr: "Kahve Dünyası şubesinde pratik ve hafif diyet hindi füme salata.", commentEn: "Practical and light diet smoked turkey salad at Kahve Dunyasi branch." }
  ],
  "Kuru Fasulye Piyazı": [
    { name: "Meşhur Köfteci Ahmet", rating: 4.5, reviewCount: 1600, area: "Seyhan", commentTr: "Seyhan'ın meşhur köftecisinden leziz kuru fasulye piyazı.", commentEn: "Delicious bean salad from Seyhan's famous meatball restaurant." },
    { name: "Tarihi Adana Köftecisi", rating: 4.4, reviewCount: 890, area: "Seyhan", commentTr: "Tarihi çarşıda köfte yanında sunulan bol piyaz.", commentEn: "Plenty of bean salad served alongside meatballs in the historic bazaar." },
    { name: "Köfteci Mustafa", rating: 4.3, reviewCount: 520, area: "Çukurova", commentTr: "Çukurova'da günlük taze hazırlanan kuru fasulye piyazı.", commentEn: "Daily freshly prepared bean salad in Cukurova." }
  ],
  "Kinoa veya Karabuğdaylı Kısır": [
    { name: "Organic Shop & Cafe Adana", rating: 4.6, reviewCount: 220, area: "Çukurova", commentTr: "Sağlıklı ve organik kafede sunulan glütensiz kinoalı kısır.", commentEn: "Gluten-free quinoa kisir served at the healthy and organic cafe." },
    { name: "Soulmate Coffee (Sağlıklı Menü)", rating: 4.3, reviewCount: 850, area: "Seyhan", commentTr: "Seyhan şubesinde kahve yanında fit karabuğday kısırı tabağı.", commentEn: "Fit buckwheat kisir plate alongside coffee at Seyhan branch." },
    { name: "Grano Coffee Roastery", rating: 4.5, reviewCount: 290, area: "Çukurova", commentTr: "Çukurova'da nitelikli kahveler ve kinoa kısır kasesi.", commentEn: "Specialty coffees and quinoa kisir bowl in Cukurova." }
  ],
  "Yoğurtlu Kuru Domates Salatası": [
    { name: "Onbaşılar Kebap (Meze Bölümü)", rating: 4.6, reviewCount: 5200, area: "Seyhan", commentTr: "Onbaşılar Kebap'ın zengin meze büfesinden yoğurtlu kuru domates.", commentEn: "Yogurt sun-dried tomato from the rich appetizer buffet of Onbasilar Kebap." },
    { name: "Park Zirve Restoran", rating: 4.5, reviewCount: 2800, area: "Seyhan", commentTr: "Göl manzaralı nezih mekanda süzme yoğurtlu kuru domates mezesi.", commentEn: "Yogurt sun-dried tomato appetizer in a decent place with lake views." },
    { name: "Hasan Kolcuoğlu (Meze Reyonu)", rating: 4.4, reviewCount: 1900, area: "Çukurova", commentTr: "Çukurova baraj yolu şubesinde sunulan taze yoğurtlu kuru domates.", commentEn: "Fresh yogurt sun-dried tomato served at Cukurova dam road branch." }
  ],
  "Zeytinyağlı Taze Fasulye": [
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 650, area: "Seyhan", commentTr: "Adana merkezinde günlük taze pişen zeytinyağlı taze fasulye.", commentEn: "Daily freshly cooked olive oil green beans in Adana center." },
    { name: "Güven Lokantası", rating: 4.5, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan esnafının uğrak yerinden tam kıvamında taze fasulye.", commentEn: "Perfectly cooked green beans from the popular artisan restaurant in Seyhan." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.3, reviewCount: 380, area: "Çukurova", commentTr: "Çukurova'da ev yemeği lezzetinde zeytinyağlı taze fasulye.", commentEn: "Olive oil green beans dish with home-style taste in Cukurova." }
  ],
  "Lor Peynirli Omlet / Menemen": [
    { name: "Çukurova Kahvaltı Evi", rating: 4.5, reviewCount: 620, area: "Çukurova", commentTr: "Çukurova'da yöresel ürünlerle lor peynirli omlet kahvaltısı.", commentEn: "Curd cheese omelet breakfast with local products in Cukurova." },
    { name: "Saçkan Kahvaltı Salonu (Adana Şubesi)", rating: 4.4, reviewCount: 780, area: "Seyhan", commentTr: "Seyhan şubesinde lor peynirli taze menemen lezzeti.", commentEn: "Fresh curd cheese menemen taste at Seyhan branch." },
    { name: "Antik Cafe & Kahvaltı", rating: 4.4, reviewCount: 520, area: "Seyhan", commentTr: "Sıcak ortamda lor peynirli fit omlet ve menemen alternatifleri.", commentEn: "Curd cheese fit omelet and menemen alternatives in a warm atmosphere." }
  ],
  "Haşlanmış Tavuklu Nohut Salatası": [
    { name: "Coffee Lab (Adana)", rating: 4.4, reviewCount: 890, area: "Seyhan", commentTr: "Seyhan şubesinde kahve keyfine eşlik eden sağlıklı nohutlu tavuk salatası.", commentEn: "Healthy chickpea chicken salad accompanying coffee enjoyment at Seyhan branch." },
    { name: "Arabica Coffee House (Fit Atıştırmalıklar)", rating: 4.3, reviewCount: 950, area: "Çukurova", commentTr: "Çukurova şubesinde pratik ve besleyici tavuklu nohut salatası.", commentEn: "Practical and nutritious chicken chickpea salad at Cukurova branch." },
    { name: "Heybe Coffee", rating: 4.5, reviewCount: 620, area: "Seyhan", commentTr: "Seyhan'da kahve yanında tüketebileceğiniz tavuklu nohut salatası kabı.", commentEn: "Chicken chickpea salad cup to enjoy alongside your coffee in Seyhan." }
  ],
  "Fırında Baharatlı Karnabahar": [
    { name: "Veggie Adana", rating: 4.6, reviewCount: 280, area: "Çukurova", commentTr: "Vejetaryen ve vegan seçenekler sunan mekandan baharatlı fırın karnabahar.", commentEn: "Spiced baked cauliflower from the place offering vegetarian/vegan options." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 190, area: "Seyhan", commentTr: "Seyhan'da günlük hazırlanan hafif baharatlı fırın karnabahar.", commentEn: "Lightly spiced baked cauliflower prepared daily in Seyhan." },
    { name: "Teras Cafe & Bistro", rating: 4.4, reviewCount: 480, area: "Çukurova", commentTr: "Çukurova şubesinde hafif ve lezzetli fırında karnabahar.", commentEn: "Light and delicious baked cauliflower at Cukurova branch." }
  ],
  "Şehriyesiz Tavuk Suyu Çorbası": [
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan'da sabahları taze hazırlanan şifalı tavuk çorbası.", commentEn: "Healing chicken soup prepared fresh in the mornings in Seyhan." },
    { name: "Paçacı Şemsi Adana", rating: 4.4, reviewCount: 1600, area: "Çukurova", commentTr: "Çukurova şubesinde unsuz ve katkısız tavuk suyu çorbası.", commentEn: "Flour-free and additive-free chicken broth soup at Cukurova branch." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.3, reviewCount: 750, area: "Seyhan", commentTr: "Adana merkezinde geleneksel usulde pişen tavuk çorbası.", commentEn: "Traditional style cooked chicken soup in Adana center." }
  ],
  "Zeytinyağlı Bamya": [
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 520, area: "Seyhan", commentTr: "Seyhan'da zeytinyağlı hafif ekşili bamya yemeğini en iyi yapan yerlerden biri.", commentEn: "One of the best places making olive oil lightly sour okra in Seyhan." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 380, area: "Çukurova", commentTr: "Çukurova'da ev yemeği tadında günlük pişen taze bamya.", commentEn: "Daily cooked fresh okra with home-style cooking taste in Cukurova." },
    { name: "Lezzet Ambarı", rating: 4.2, reviewCount: 310, area: "Seyhan", commentTr: "Seyhan şubesinde hafif ve lezzetli zeytinyağlı bamya.", commentEn: "Light and delicious olive oil okra at Seyhan branch." }
  ],
  "Fırında Kabak Sandal": [
    { name: "Bizim Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Seyhan", commentTr: "Seyhan'da hafif dereotlu peynirli fırında kabak sandal.", commentEn: "Baked zucchini boat with light dill cheese in Seyhan." },
    { name: "Anaeli Mutfak", rating: 4.4, reviewCount: 520, area: "Çukurova", commentTr: "Çukurova'da ev lezzetinde fırınlanmış diyet dostu kabak sandal.", commentEn: "Diet-friendly baked zucchini boat with home-style taste in Cukurova." },
    { name: "Keyifli Mutfak", rating: 4.2, reviewCount: 220, area: "Seyhan", commentTr: "Seyhan'da taze malzemelerle hazırlanan fırın kabak sandal.", commentEn: "Baked zucchini boat prepared with fresh ingredients in Seyhan." }
  ],
  "Köz Patlıcan Salatası": [
    { name: "Kebapçı Mesut (Salata Bölümü)", rating: 4.5, reviewCount: 2200, area: "Seyhan", commentTr: "Tarihi kebapçıda kebap yanında sunulan nefis köz patlıcan salatası.", commentEn: "Delicious roasted eggplant salad served alongside kebabs at historic restaurant." },
    { name: "Eyvan Kebap (Meze Reyonu)", rating: 4.4, reviewCount: 1800, area: "Seyhan", commentTr: "Taze közlenmiş patlıcan ve zeytinyağı ile hazırlanan meze.", commentEn: "Appetizer prepared with fresh roasted eggplant and olive oil." },
    { name: "Cihangir Kebap & Kaburga", rating: 4.5, reviewCount: 3800, area: "Çukurova", commentTr: "Çukurova şubesinde zengin meze ikramları arasında köz patlıcan.", commentEn: "Roasted eggplant among rich appetizer treats at Cukurova branch." }
  ],
  "Chia Tohumlu Meyveli Yoğurt": [
    { name: "Crop Coffee Co. Adana", rating: 4.5, reviewCount: 820, area: "Seyhan", commentTr: "Seyhan'da kahve yanında taze meyveli ve chia tohumlu healthy yoğurt kasesi.", commentEn: "Healthy yogurt bowl with fresh fruit and chia seeds alongside coffee in Seyhan." },
    { name: "MOC Coffee (Ziyapaşa)", rating: 4.4, reviewCount: 950, area: "Seyhan", commentTr: "Ziyapaşa şubesinde fit beslenme için chia tohumlu yoğurt.", commentEn: "Chia seed yogurt for fit nutrition at Ziyapasa branch." },
    { name: "Robert's Coffee (Turgut Özal)", rating: 4.3, reviewCount: 1100, area: "Çukurova", commentTr: "Çukurova şubesinde spor öncesi hafif chia meyveli yoğurt kabı.", commentEn: "Light chia fruit yogurt cup before sports at Cukurova branch." }
  ],
  "Izgara Köfte (Bol Yeşillikle)": [
    { name: "Köfteci Ahmet Usta", rating: 4.4, reviewCount: 1200, area: "Seyhan", commentTr: "Seyhan merkezinde katkısız kıymadan ızgara köfte ve bol yeşillik.", commentEn: "Grilled meatballs and plenty of greens from pure minced meat in Seyhan center." },
    { name: "Tarihi Eminönü Köftecisi (Adana)", rating: 4.5, reviewCount: 890, area: "Çukurova", commentTr: "Çukurova şubesinde yeşillikler ve köz biber eşliğinde sunulan ızgara köfte.", commentEn: "Grilled meatballs served with greens and roasted pepper at Cukurova branch." },
    { name: "Meşhur Ankara Köftecisi", rating: 4.3, reviewCount: 650, area: "Seyhan", commentTr: "Geleneksel usulle hazırlanmış hafif ve fit ızgara köfte.", commentEn: "Light and fit grilled meatballs prepared in traditional style." }
  ],
  "Ispanak Borani": [
    { name: "Beyoğlu Meyhanesi", rating: 4.5, reviewCount: 1400, area: "Seyhan", commentTr: "Seyhan'da sarımsaklı süzme yoğurtlu ıspanak borani mezesi.", commentEn: "Spinach borani appetizer with garlicky strained yogurt in Seyhan." },
    { name: "Sandal Meyhanesi Adana", rating: 4.4, reviewCount: 950, area: "Çukurova", commentTr: "Çukurova'da rakı meze sofrasında hafif zeytinyağlı ıspanak borani.", commentEn: "Light olive oil spinach borani on the raki appetizer table in Cukurova." },
    { name: "Şerefe Meyhane", rating: 4.4, reviewCount: 780, area: "Seyhan", commentTr: "Seyhan şubesinde taze yoğurtlu ıspanak borani keyfi.", commentEn: "Yogurt spinach borani enjoyment at Seyhan branch." }
  ]
};

export const CHEAT_ISTANBUL_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa Garaj Kebap", rating: 4.6, reviewCount: 1800, area: "Levent", commentTr: "İstanbul'da Bursa usulü tereyağlı gerçek İskender kebap deneyimi.", commentEn: "Real Bursa style buttered Iskender kebab experience in Istanbul." },
    { name: "Niyazi Bey İskender", rating: 4.4, reviewCount: 2200, area: "Kadıköy", commentTr: "Kadıköy'ün köklü İskender kebapçısından bol etli ve lezzetli tabak.", commentEn: "Meat-rich and delicious plate from Kadikoy's long-established Iskender restaurant." },
    { name: "Uludağ Et Lokantası", rating: 4.5, reviewCount: 3100, area: "Florya", commentTr: "Florya sahilinde şık ortamda geleneksel dönerli İskender keyfi.", commentEn: "Traditional doner Iskender enjoyment in a classy ambiance on Florya coast." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Dürümcü Emmi", rating: 4.5, reviewCount: 8500, area: "Kadıköy", commentTr: "Kadıköy'ün ünlü dürümcüsünde köz biberli ve bol baharatlı kebap dürüm.", commentEn: "Spiced kebab wrap with roasted peppers at Kadikoy's famous wrap place." },
    { name: "Zübeyir Ocakbaşı", rating: 4.5, reviewCount: 2800, area: "Taksim", commentTr: "Taksim'de ocakbaşı ateşinde pişen taze Adana dürüm.", commentEn: "Fresh Adana wrap cooked over fire at Taksim ocakbasi." },
    { name: "Kurtuluş Adana Ocakbaşı", rating: 4.6, reviewCount: 1900, area: "Kurtuluş", commentTr: "Kurtuluş'ta el kıymasıyla hazırlanan efsanevi Adana kebap dürümü.", commentEn: "Legendary hand-minced Adana kebab wrap in Kurtulus." }
  ],
  "Beyti Sarma": [
    { name: "Beyti Restaurant", rating: 4.7, reviewCount: 5800, area: "Florya", commentTr: "Beyti kebabının mucidinden sarımsaklı yoğurtlu ve soslu orijinal Beyti sarma.", commentEn: "Original Beyti sarma with garlic yogurt and sauce from the inventor of Beyti kebab." },
    { name: "Develi Kebap", rating: 4.4, reviewCount: 4200, area: "Samatya", commentTr: "Tarihi Samatya şubesinde çıtır yufkaya sarılı nefis beyti sarma.", commentEn: "Delicious beyti sarma wrapped in crispy dough at historic Samatya branch." },
    { name: "Kaşıbeyaz Lezzet Grubu", rating: 4.5, reviewCount: 3600, area: "Florya", commentTr: "Florya'da şık sunumuyla tereyağlı ve soslu enfes beyti sarma.", commentEn: "Delicious buttered and sauced beyti sarma with elegant presentation in Florya." }
  ],
  "Mantı": [
    { name: "Sayla Mantı", rating: 4.6, reviewCount: 2200, area: "Kadıköy", commentTr: "Kadıköy'de çıtır ve haşlama mantıyı en iyi yapan köklü mekanlardan biri.", commentEn: "One of the established places making the best crispy and boiled manti in Kadikoy." },
    { name: "Casita Mantı", rating: 4.4, reviewCount: 1500, area: "Bebek", commentTr: "Bebek şubesinde yoğurtlu ve soslu çıtır mantı (Feraye) keyfi.", commentEn: "Crispy manti (Feraye) enjoyment with yogurt and sauce at Bebek branch." },
    { name: "Bodrum Mantı & Cafe", rating: 4.3, reviewCount: 3100, area: "Arnavutköy", commentTr: "Arnavutköy sahilinde 7/24 taze mantı ve sos çeşitleri.", commentEn: "24/7 fresh manti and sauce varieties on Arnavutkoy coast." }
  ],
  "Kokoreç": [
    { name: "Çengelköy Kokoreççisi", rating: 4.5, reviewCount: 4800, area: "Çengelköy", commentTr: "Çengelköy'de meşe kömüründe pişen çıtır ve bol baharatlı kokoreç.", commentEn: "Crispy and highly spiced kokorecc cooked over oak charcoal in Cengelkey." },
    { name: "Kokoreççi Asım Usta", rating: 4.7, reviewCount: 6500, area: "Kartal", commentTr: "Kartal'ın efsanevi Asım Usta'sından İzmir usulü iri kıyım kokoreç.", commentEn: "Izmir style coarse-cut kokorecc from Kartal's legendary Asim Usta." },
    { name: "Reks Kokoreç", rating: 4.4, reviewCount: 1950, area: "Kadıköy", commentTr: "Kadıköy barlar sokağı yakınında sıcak sacda leziz baharatlı kokoreç.", commentEn: "Delicious spiced kokorecc on hot plate near Kadikoy bar street." }
  ],
  "Kumpir": [
    { name: "Ortaköy Kumpircisi (Tarihi Ortaköy Kumpircisi)", rating: 4.3, reviewCount: 9200, area: "Ortaköy", commentTr: "Ortaköy meydanında bol malzemeli klasik kumpir keyfi.", commentEn: "Classic kumpir enjoyment with rich ingredients at Ortakoy square." },
    { name: "All Kumpir", rating: 4.2, reviewCount: 850, area: "Şişli", commentTr: "Şişli bölgesinde taze kumpir patatesi ve bol meze seçenekleri.", commentEn: "Fresh baked potato and rich appetizer options in Sisli region." },
    { name: "Patatos", rating: 4.1, reviewCount: 1200, area: "Taksim", commentTr: "İstiklal caddesinde çıtır sosisli ve bol soslu doyurucu kumpir.", commentEn: "Filling kumpir with crispy sausage and rich sauce on Istiklal street." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Karaköy Güllüoğlu", rating: 4.7, reviewCount: 22100, area: "Karaköy", commentTr: "Karaköy sahilinde çıtır çıtır bol antep fıstıklı gerçek baklava ve sıcak katmer.", commentEn: "Real baklava and warm katmer with crispy Antep pistachios on Karakoy coast." },
    { name: "Hafız Mustafa 1864", rating: 4.6, reviewCount: 18500, area: "Sirkeci", commentTr: "Tarihi Sirkeci şubesinde geleneksel fıstıklı baklava ve kadayıf lezzeti.", commentEn: "Traditional pistachio baklava and kadayif taste at historic Sirkeci branch." },
    { name: "Köşkeroğlu Baklava", rating: 4.5, reviewCount: 3800, area: "Karaköy", commentTr: "Gaziantep'ten gelen malzemelerle hazırlanan çıtır baklava ve bol kaymaklı katmer.", commentEn: "Crispy baklava and katmer with thick clotted cream prepared with ingredients from Gaziantep." }
  ],
  "Hatay Künefesi": [
    { name: "Künefeci Sadık Usta", rating: 4.6, reviewCount: 2100, area: "Aksaray", commentTr: "Köz ateşinde pişirilen bol peynirli ve çıtır Hatay usulü künefe.", commentEn: "Crispy Hatay style kunefe with plenty of cheese cooked over charcoal." },
    { name: "Hatay Evi Künefe", rating: 4.4, reviewCount: 1200, area: "Kadıköy", commentTr: "Kadıköy'de Hatay'dan gelen taze tuzsuz peynirle hazırlanan çıtır künefe.", commentEn: "Crispy kunefe prepared with fresh unsalted cheese from Hatay in Kadikoy." },
    { name: "Asi Künefe", rating: 4.3, reviewCount: 1500, area: "Bakırköy", commentTr: "Bakırköy şubesinde bol şerbetli ve antep fıstıklı nefis künefe.", commentEn: "Delicious kunefe with rich syrup and Antep pistachios at Bakirkoy branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "B. Blok Bakery (San Sebastian)", rating: 4.7, reviewCount: 4200, area: "Beşiktaş", commentTr: "İstanbul'un en ünlü akışkan San Sebastian cheesecake dilimi.", commentEn: "Most famous fluid San Sebastian cheesecake slice of Istanbul." },
    { name: "J'adore Chocolatier (Sufle/Çikolata)", rating: 4.5, reviewCount: 3100, area: "Beyoğlu", commentTr: "İstiklal caddesinde çikolatalı sıcak sufle ve enfes çikolata sosu.", commentEn: "Hot chocolate souffle and delicious chocolate sauce on Istiklal street." },
    { name: "Viyana Kahvesi", rating: 4.4, reviewCount: 2800, area: "Galata", commentTr: "Galata Kulesi manzarası eşliğinde çikolata soslu San Sebastian cheesecake.", commentEn: "San Sebastian cheesecake with chocolate sauce alongside Galata Tower views." }
  ],
  "Tantuni": [
    { name: "Suat Tantuni", rating: 4.5, reviewCount: 3600, area: "Kadıköy", commentTr: "Kadıköy'de incecik lavaşa sarılmış pamuk gibi dana tantuni dürüm.", commentEn: "Tender beef tantuni wrap in thin flatbread in Kadikoy." },
    { name: "Emine Ana Tantuni", rating: 4.3, reviewCount: 1500, area: "Taksim", commentTr: "Taksim'de yoğurtlu tantuni ve klasik biftek tantuniyi en iyi yapan yer.", commentEn: "The best place for yogurt tantuni and classic steak tantuni in Taksim." },
    { name: "Baazen Tantuni", rating: 4.4, reviewCount: 1900, area: "Ataşehir", commentTr: "Ataşehir'de modern ortamda sunulan bol baharatlı Mersin tantunisi.", commentEn: "Highly spiced Mersin tantuni served in a modern environment in Atasehir." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "Cookshop (Magnolia ve Islak Kek çeşitleri)", rating: 4.3, reviewCount: 4800, area: "Beşiktaş", commentTr: "Bol çikolata soslu akışkan ıslak kek ve magnolia çeşitleri.", commentEn: "Fluid wet cake with rich chocolate sauce and magnolia varieties." },
    { name: "Gezi İstanbul", rating: 4.4, reviewCount: 2900, area: "Taksim", commentTr: "Taksim'de nostaljik atmosferde leziz ağlayan pasta ve çikolatalı ıslak kek.", commentEn: "Delicious weeping cake and chocolate wet cake in Taksim's nostalgic atmosphere." },
    { name: "Divan Pastaneleri", rating: 4.6, reviewCount: 3800, area: "Bebek", commentTr: "Divan kalitesiyle hazırlanan premium çikolatalı ıslak kek.", commentEn: "Premium chocolate wet cake prepared with Divan quality." }
  ],
  "Hamburger Menü": [
    { name: "Zula İstanbul", rating: 4.5, reviewCount: 3200, area: "Harbiye", commentTr: "Harbiye'de brioche ekmeği ve özel sosuyla enfes hamburger menü.", commentEn: "Delicious hamburger menu with brioche bun and special sauce in Harbiye." },
    { name: "Basta! Street Food Bar", rating: 4.6, reviewCount: 2800, area: "Moda", commentTr: "Şef dokunuşlu gurme kuzu burger ve çıtır patates patates kızartması.", commentEn: "Chef-touch gourmet lamb burger and crispy french fries." },
    { name: "Virginia Angus", rating: 4.4, reviewCount: 4100, area: "Nişantaşı", commentTr: "Nişantaşı şubesinde angus köfteli doyurucu hamburger menü keyfi.", commentEn: "Enjoyment of filling hamburger menu with angus patty at Nisantasi branch." }
  ],
  "İçli Köfte": [
    { name: "Sabırtaşı Restoran", rating: 4.6, reviewCount: 1900, area: "Taksim", commentTr: "İstiklal caddesinde tezgahta satılan efsanevi çıtır haşlama/kızartma içli köfte.", commentEn: "Legendary crispy boiled/fried stuffed meatballs sold on the stand on Istiklal street." },
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de geleneksel Güneydoğu usulü cevizli ve kıymalı içli köfte.", commentEn: "Traditional southeastern style stuffed meatballs with walnuts and minced meat in Kadikoy." },
    { name: "Küçükbaba İçli Köfte", rating: 4.4, reviewCount: 480, area: "Fatih", commentTr: "Fatih'te incecik hamuruyla günlük hazırlanan kızarmış içli köfte.", commentEn: "Daily prepared fried stuffed meatballs with very thin crust in Fatih." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mutfağı", rating: 4.2, reviewCount: 1500, area: "Şişli", commentTr: "Cevahir AVM şubesinde kat kat lavaş ve kıymalı soslu orijinal Kayseri yağlaması.", commentEn: "Original Kayseri yaglama with layers of flatbread and minced meat sauce at Cevahir branch." },
    { name: "Gabori Mantı", rating: 4.5, reviewCount: 620, area: "Kadıköy", commentTr: "Moda yakınlarında sarmısaklı yoğurt eşliğinde sunulan leziz kayseri yağlaması.", commentEn: "Delicious kayseri yaglama served with garlic yogurt near Moda." },
    { name: "Tikveşli Mantı Ev Yemekleri", rating: 4.4, reviewCount: 380, area: "Teşvikiye", commentTr: "Teşvikiye'de ev yemeği kalitesinde bol soslu Kayseri yağlaması.", commentEn: "Kayseri yaglama with rich sauce and home-cooked quality in Tesvikiye." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Lider Pide", rating: 4.6, reviewCount: 3100, area: "Ümraniye", commentTr: "Karadeniz usulü bol tereyağlı ve kavurmalı kaşarlı kapalı pide.", commentEn: "Black Sea style closed flatbread with butter, roasted beef, and kashar cheese." },
    { name: "Karadeniz Pidecisi İbrahim Usta", rating: 4.5, reviewCount: 1950, area: "Fatih", commentTr: "Fatih'te çıtır hamurlu ve bol malzemeli kavurmalı kaşarlı pide.", commentEn: "Crispy crust and rich ingredient roasted beef kashar flatbread in Fatih." },
    { name: "Pide Ban", rating: 4.4, reviewCount: 2200, area: "Sarıyer", commentTr: "Sarıyer'de boğaz havasında tereyağlı kavurmalı kaşarlı Karadeniz pidesi.", commentEn: "Black Sea flatbread with butter, roasted beef, and kashar in Sariyer." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Çeşme Bazlama Kahvaltı (Kumru Seçenekleri)", rating: 4.5, reviewCount: 4200, area: "Nişantaşı", commentTr: "Nişantaşı şubesinde bol sucuklu, salamlı ve erimiş peynirli taze kumru ekmeği.", commentEn: "Fresh kumru bread with plenty of sausage, salami, and melted cheese in Nisantasi." },
    { name: "Tostçu Mehmet (Ayvalık Tostu)", rating: 4.2, reviewCount: 650, area: "Beşiktaş", commentTr: "Beşiktaş'ta bol malzemeli ve rus salatalı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad in Besiktas." },
    { name: "Kırıntı (Sokak Lezzetleri Menüsü)", rating: 4.3, reviewCount: 2800, area: "Moda", commentTr: "Moda'da sokak lezzetleri konseptinde sunulan dev kumru ve tost tabağı.", commentEn: "Giant kumru and toast platter served in street food concept in Moda." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Tarihi Ali Baba Balıkçısı", rating: 4.4, reviewCount: 1800, area: "Kireçburnu", commentTr: "Kireçburnu sahilinde çıtır şiş midye tava ve tarator sos keyfi.", commentEn: "Crispy skewered fried mussels and tarator sauce enjoyment on Kirecburnu coast." },
    { name: "Mercan Kokoreç & Midye", rating: 4.3, reviewCount: 4500, area: "Kadıköy", commentTr: "Kadıköy çarşıda sıcak ve çıtır midye tava ile sarımsaklı tarator sos.", commentEn: "Hot and crispy fried mussels with garlicky tarator sauce in Kadikoy bazaar." },
    { name: "Şampiyon Kokoreç", rating: 4.2, reviewCount: 5200, area: "Beyoğlu", commentTr: "Beyoğlu Balık Pazarı'nda yarım ekmek arası çıtır midye tava ve özel sosu.", commentEn: "Crispy fried mussels in half bread and special sauce at Beyoglu Fish Market." }
  ],
  "Profiterol": [
    { name: "İnci Pastanesi", rating: 4.6, reviewCount: 9800, area: "Beyoğlu", commentTr: "İstiklal Caddesi'nin efsanevi profiterolü. Çikolata sosu tek kelimeyle harika.", commentEn: "Legendary profiterole of Istiklal Street. The chocolate sauce is simply wonderful." },
    { name: "Nazar Pastanesi", rating: 4.5, reviewCount: 1600, area: "Kurtuluş", commentTr: "Kurtuluş'un meşhur pastanesinden taze kremalı çıtır profiterol topları.", commentEn: "Crispy profiterole balls with fresh cream from Kurtulus's famous patisserie." },
    { name: "Gezi Pastanesi", rating: 4.4, reviewCount: 2400, area: "Taksim", commentTr: "Taksim şubesinde modern sunumlu ve bol çikolatalı enfes profiterol.", commentEn: "Delicious profiterole with modern presentation and rich chocolate at Taksim branch." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Tarihi Sultanahmet Köftecisi", rating: 4.4, reviewCount: 12500, area: "Sultanahmet", commentTr: "Tarihi yarımadada çıtır patates kızartması eşliğinde sunulan klasik cızbız köfte.", commentEn: "Classic grilled meatballs served with crispy french fries in the historic peninsula." },
    { name: "Namlı Köftecisi", rating: 4.3, reviewCount: 1800, area: "Fatih", commentTr: "Eminönü şubesinde hızlı servis edilen sıcak köfte patates tabağı.", commentEn: "Hot meatball and potato plate served fast at Eminonu branch." },
    { name: "Köfteci Arnavut", rating: 4.5, reviewCount: 1100, area: "Balat", commentTr: "Balat'ta salaş ve samimi ortamda nostaljik köfte patates lezzeti.", commentEn: "Nostalgic meatball and potato taste in a casual and friendly ambiance in Balat." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Hot Döner", rating: 4.1, reviewCount: 1900, area: "Kadıköy", commentTr: "Özel soslu ve patates kızartmalı tavuk Hatay dürümü.", commentEn: "Chicken Hatay wrap with special sauce and french fries." },
    { name: "Öncü Döner", rating: 4.2, reviewCount: 2800, area: "Taksim", commentTr: "Taksim şubesinde bol mayonezli ve soslu doyurucu Hatay dürümü.", commentEn: "Filling Hatay wrap with plenty of mayo and sauce at Taksim branch." },
    { name: "Katık Döner", rating: 4.1, reviewCount: 2300, area: "Beşiktaş", commentTr: "Beşiktaş'ta lavaşa sarılı bol soslu çıtır Hatay usulü döner dürüm.", commentEn: "Crispy Hatay style doner wrap in flatbread with rich sauce in Besiktas." }
  ]
};

export const CHEAT_ANKARA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa İskender Kebapçısı (Kızılay)", rating: 4.5, reviewCount: 1500, area: "Kızılay", commentTr: "Kızılay'ın köklü lezzet durağından bol tereyağlı geleneksel İskender.", commentEn: "Traditional Iskender with plenty of butter from Kizilay's long-established taste stop." },
    { name: "Hacı Arif Bey Lokantası", rating: 4.5, reviewCount: 3800, area: "Çankaya", commentTr: "Çankaya'da nezih ortamda sunulan enfes yaprak dönerli İskender.", commentEn: "Delicious leaf doner Iskender served in a decent environment in Cankaya." },
    { name: "Kebapçı Emin Usta", rating: 4.6, reviewCount: 3420, area: "Ulus", commentTr: "Tarihi Ulus esnaf lokantasından odun ateşinde pişmiş nefis İskender.", commentEn: "Delicious Iskender cooked over wood fire from historical Ulus artisan restaurant." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Düveroğlu", rating: 4.6, reviewCount: 9200, area: "Balgat", commentTr: "Balgat'ın ünlü kebapçısında zırh kıymasıyla hazırlanan Adana dürüm.", commentEn: "Adana wrap prepared with hand-minced meat at Balgat's famous kebab restaurant." },
    { name: "Cigerci Bahattin", rating: 4.4, reviewCount: 2800, area: "Çankaya", commentTr: "Bol meze ikramları eşliğinde lezzetli Adana ve Urfa dürüm çeşitleri.", commentEn: "Delicious Adana and Urfa wrap varieties accompanied by generous appetizer treats." },
    { name: "Masabaşı Kebapçısı", rating: 4.5, reviewCount: 4100, area: "Kızılay", commentTr: "Kızılay'da közlenmiş biber ve domatesle sunulan nefis Adana dürümü.", commentEn: "Delicious Adana wrap served with roasted peppers and tomatoes in Kizilay." }
  ],
  "Beyti Sarma": [
    { name: "Uludağ Kebapçısı", rating: 4.5, reviewCount: 3100, area: "Ulus", commentTr: "Ulus şubesinde geleneksel tarife sadık kalınarak yapılan nefis beyti sarma.", commentEn: "Delicious beyti sarma made by staying true to the traditional recipe at Ulus branch." },
    { name: "Günaydın Kebap (Arjantin)", rating: 4.4, reviewCount: 2200, area: "GOP", commentTr: "Arjantin caddesinde elit ortamda tereyağlı ve yoğurtlu beyti sarma keyfi.", commentEn: "Buttered and yogurt beyti sarma enjoyment in an elite environment on Arjantin street." },
    { name: "Kolcuoğlu Ankara", rating: 4.3, reviewCount: 1500, area: "Çankaya", commentTr: "Çankaya şubesinde fırından taze çıkan çıtır yufkaya sarılı nefis beyti.", commentEn: "Delicious beyti wrapped in fresh crispy flatbread out of the oven at Cankaya branch." }
  ],
  "Mantı": [
    { name: "Kafes Fırın (Mantı Menüsü)", rating: 4.4, reviewCount: 2900, area: "Çankaya", commentTr: "Şık kafede sunulan ev mantısı lezzetinde nefis sarmısaklı yoğurtlu mantı.", commentEn: "Delicious manti with garlic yogurt in home-style manti flavor served at elegant cafe." },
    { name: "Kıtır", rating: 4.5, reviewCount: 5200, area: "Tunalı", commentTr: "Tunalı Hilmi Caddesi'nin klasiğinden çıtır mantı ve sos keyfi.", commentEn: "Crispy manti and sauce enjoyment from Tunali Hilmi Street's classic." },
    { name: "Pembe Kurbağa Mantı Evi", rating: 4.6, reviewCount: 950, area: "Ayrancı", commentTr: "Ayrancı'da el açması ince hamurlu leziz Kayseri mantısı.", commentEn: "Delicious hand-rolled thin dough Kayseri manti in Ayranci." }
  ],
  "Kokoreç": [
    { name: "Profesör Kokoreç", rating: 4.4, reviewCount: 4800, area: "Bahçelievler", commentTr: "Bahçelievler şubesinde kömürde ağır ağır pişen çıtır kokoreç.", commentEn: "Crispy kokorecc slowly cooked over charcoal at Bahcelievler branch." },
    { name: "Kokoreççi Hacı", rating: 4.6, reviewCount: 3100, area: "İskitler", commentTr: "İskitler'in meşhur kokoreççisinden bol baharatlı iri kıyım kokoreç.", commentEn: "Highly spiced coarse-cut kokorecc from Iskitler's famous kokorecc maker." },
    { name: "Pikolet Kokoreç", rating: 4.5, reviewCount: 2200, area: "Kızılay", commentTr: "Kızılay Sakarya Caddesi'nde gece geç saatlerin vazgeçilmez çıtır kokoreci.", commentEn: "Indispensable late night crispy kokorecc on Kizilay Sakarya Street." }
  ],
  "Kumpir": [
    { name: "Kıtır (Kumpir Reyonu)", rating: 4.5, reviewCount: 5200, area: "Tunalı", commentTr: "Kıtır'ın zengin kumpir barından dilediğiniz mezelerle hazırlanan dev patates.", commentEn: "Giant potato prepared with your choice of appetizers from Kitir's rich kumpir bar." },
    { name: "Kumpir Evi (Bahçelievler)", rating: 4.2, reviewCount: 880, area: "Bahçelievler", commentTr: "Bahçelievler'de taze fırınlanmış tereyağlı ve kaşarlı leziz kumpir.", commentEn: "Delicious baked potato with fresh butter and kashar cheese in Bahcelievler." },
    { name: "Patatos Ankara", rating: 4.3, reviewCount: 1600, area: "Kızılay", commentTr: "Kızılay şubesinde rus salatalı ve soslarla doldurulmuş doyurucu kumpir.", commentEn: "Filling kumpir filled with Russian salad and sauces at Kizilay branch." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Baklavacı Hacıbaba", rating: 4.5, reviewCount: 5850, area: "Balgat", commentTr: "Balgat'ta çıtır baklava dilimleri ve Antep usulü bol fıstıklı sıcak katmer.", commentEn: "Crispy baklava slices and warm Antep style katmer with plenty of pistachios in Balgat." },
    { name: "Zeugma Künefe & Katmer", rating: 4.4, reviewCount: 1900, area: "Oveçler", commentTr: "Oveçler'de taze kaymaklı ve bol antep fıstıklı çıtır çıtır katmer.", commentEn: "Crispy katmer with fresh clotted cream and plenty of Antep pistachios in Ovecler." },
    { name: "Düveroğlu (Tatlı Bölümü)", rating: 4.6, reviewCount: 9200, area: "Balgat", commentTr: "Balgat'ta kebap sonrası servis edilen efsanevi fıstıklı havuç dilimi.", commentEn: "Legendary pistachio carrot slice served after kebab in Balgat." }
  ],
  "Hatay Künefesi": [
    { name: "Antakya Künefe Evi (Emek)", rating: 4.5, reviewCount: 2200, area: "Emek", commentTr: "Emek şubesinde közde pişirilen bol peynirli sıcak Hatay künefesi.", commentEn: "Warm Hatay kunefe with plenty of cheese cooked over charcoal at Emek branch." },
    { name: "Meşhur Közde Künefe", rating: 4.3, reviewCount: 950, area: "Bahçelievler", commentTr: "Közde yavaşça pişirilerek hazırlanan çıtır peynirli künefe.", commentEn: "Crispy cheese kunefe prepared by slowly cooking over charcoal." },
    { name: "Asi Künefe Ankara", rating: 4.4, reviewCount: 1400, area: "Çankaya", commentTr: "Çankaya şubesinde Hatay'dan gelen malzemelerle hazırlanan leziz şerbetli künefe.", commentEn: "Delicious kunefe with syrup prepared with ingredients from Hatay at Cankaya branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "Louise Brasserie & Lounge", rating: 4.4, reviewCount: 1350, area: "Filistin Caddesi", commentTr: "Filistin Caddesi'nde şık ortamda sunulan akışkan sıcak çikolatalı sufle.", commentEn: "Fluid hot chocolate souffle served in a classy environment on Filistin Street." },
    { name: "Viyana Kahvesi Ankara", rating: 4.5, reviewCount: 890, area: "Tunalı", commentTr: "Tunalı şubesinde Galata tarzı bol çikolata soslu San Sebastian cheesecake.", commentEn: "Galata style San Sebastian cheesecake with rich chocolate sauce at Tunali branch." },
    { name: "Amelie's Garden Succulent & Cafe", rating: 4.5, reviewCount: 650, area: "Tunalı", commentTr: "Yeşillikler içinde tatlı bir kaçamak için taze yapılmış çikolatalı sufle.", commentEn: "Freshly made chocolate souffle for a sweet escape among greenery." }
  ],
  "Tantuni": [
    { name: "Mersinli Tantuni Nuri Usta", rating: 4.4, reviewCount: 2200, area: "Balgat", commentTr: "Mersin usulü incecik lavaşa sarılmış leziz biftek tantuniyi en iyi yapan yer.", commentEn: "The best place making delicious beef tantuni wrapped in Mersin style thin flatbread." },
    { name: "Göksel Tantuni (Ankara Şubesi)", rating: 4.3, reviewCount: 1100, area: "Çankaya", commentTr: "Çankaya şubesinde orijinal sacda pişmiş sıcak tantuni dürümü.", commentEn: "Hot tantuni wrap cooked on original iron plate at Cankaya branch." },
    { name: "Memo Tantuni", rating: 4.2, reviewCount: 950, area: "Kızılay", commentTr: "Kızılay'da hızlı servis edilen leziz yoğurtlu tantuni alternatifi.", commentEn: "Delicious yogurt tantuni alternative served quickly in Kizilay." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "Leman Kültür", rating: 4.3, reviewCount: 1800, area: "Bahçelievler", commentTr: "Bahçelievler şubesinde bol çikolatalı ve soslu sıcak ıslak kek keyfi.", commentEn: "Enjoyment of hot wet cake with rich chocolate and sauce at Bahcelievler branch." },
    { name: "Cafemiz", rating: 4.5, reviewCount: 1100, area: "Tunalı", commentTr: "Tunalı'nın köklü kafesinde nostaljik ağlayan pasta ve çikolatalı ıslak kek.", commentEn: "Nostalgic weeping cake and chocolate wet cake at Tunali's long-established cafe." },
    { name: "BigChefs", rating: 4.2, reviewCount: 3720, area: "Çankaya", commentTr: "Çankaya şubesinde premium çikolata soslu nefis ıslak kek.", commentEn: "Delicious wet cake with premium chocolate sauce at Cankaya branch." }
  ],
  "Hamburger Menü": [
    { name: "Etmanyak Burger & Sausage", rating: 4.6, reviewCount: 2800, area: "GOP", commentTr: "GOP şubesinde kendi yapımları sosis ve lokum kıvamında burger köftesi menüsü.", commentEn: "Homemade sausage and tender burger patty menu at GOP branch." },
    { name: "Franco Burger", rating: 4.5, reviewCount: 1240, area: "Tunalı", commentTr: "Smash burger köftesi ve çıtır patates kızartması ile doyurucu burger menüsü.", commentEn: "Filling burger menu with smash burger patty and crispy french fries." },
    { name: "Hamburgerci Aksu", rating: 4.3, reviewCount: 950, area: "Bahçelievler", commentTr: "Bahçelievler esnaf usulü soslu ve yumuşacık ekmekli hamburger menü keyfi.", commentEn: "Enjoyment of hamburger menu with local sauce and soft bun in Bahcelievler." }
  ],
  "İçli Köfte": [
    { name: "Göksu Lokantası", rating: 4.4, reviewCount: 1950, area: "Çankaya", commentTr: "Çankaya'nın meşhur esnaf lokantasından geleneksel haşlanmış içli köfte.", commentEn: "Traditional boiled stuffed meatballs from Cankaya's famous artisan restaurant." },
    { name: "Boğaziçi Lokantası", rating: 4.5, reviewCount: 1400, area: "Ulus", commentTr: "Ulus'un tarihi lokantasından çıtır çıtır kızarmış içli köfte.", commentEn: "Crispy fried stuffed meatballs from Ulus's historical restaurant." },
    { name: "Meşhur Kayseri Mantı Evi", rating: 4.3, reviewCount: 620, area: "Bahçelievler", commentTr: "Ev yapımı kıvamında bol kıymalı ve cevizli kızartılmış içli köfte.", commentEn: "Fried stuffed meatballs with plenty of minced meat and walnuts in home-style quality." }
  ],
  "Kayseri Yağlaması": [
    { name: "Erciyes Kayseri Mutfağı", rating: 4.4, reviewCount: 1200, area: "Balgat", commentTr: "Balgat'ta kat kat yufka arasına bol kıymalı sos ve sarımsaklı yoğurtlu yağlama.", commentEn: "Yaglama with minced meat sauce and garlic yogurt between layers of flatbread in Balgat." },
    { name: "Mantıcı Kayseri Evi", rating: 4.3, reviewCount: 540, area: "Çankaya", commentTr: "Çankaya'da günlük taze hazırlanan geleneksel Kayseri yağlaması.", commentEn: "Traditional Kayseri yaglama freshly prepared daily in Cankaya." },
    { name: "Gabori Mantı Ankara", rating: 4.5, reviewCount: 620, area: "GOP", commentTr: "GOP şubesinde modern sunumuyla nefis sarmısaklı yoğurtlu Kayseri yağlaması.", commentEn: "Delicious Kayseri yaglama with garlic yogurt and modern presentation at GOP branch." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Kıranardı Pide Salonu", rating: 4.5, reviewCount: 920, area: "Mamak", commentTr: "Mamak'ta taş fırında pişen çıtır kenarlı, bol kavurmalı kaşarlı pide.", commentEn: "Stone-baked flatbread with crispy edges, plenty of roasted beef, and kashar in Mamak." },
    { name: "Bafra Pide Salonu", rating: 4.4, reviewCount: 1100, area: "Çankaya", commentTr: "Çankaya şubesinde tereyağlı kapalı Bafra usulü kavurmalı pide.", commentEn: "Buttered closed Bafra style roasted beef flatbread at Cankaya branch." },
    { name: "Ye-An Pide", rating: 4.3, reviewCount: 650, area: "Kızılay", commentTr: "Kızılay'da hızlı ve sıcak servis edilen leziz kavurmalı kaşarlı pide.", commentEn: "Delicious roasted beef and kashar flatbread served hot and fast in Kizilay." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Çeşme Kumrusu (Tunalı)", rating: 4.4, reviewCount: 1800, area: "Tunalı", commentTr: "Tunalı'da bol malzemeli, sucuklu, salamlı ve erimiş peynirli taze kumru ekmeği.", commentEn: "Fresh kumru bread with plenty of sausage, salami, and melted cheese in Tunali." },
    { name: "Şiir Tost (Ayvalık Tostu Seçenekleri)", rating: 4.5, reviewCount: 890, area: "Bahçelievler", commentTr: "Bahçelievler'de rus salatalı ve bol malzemeli çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad in Bahcelievler." },
    { name: "Aylak Madam", rating: 4.3, reviewCount: 1200, area: "Karanfil Sokak", commentTr: "Karanfil Sokak şubesinde kafe ortamında sunulan dev Ayvalık tostu ve kumru.", commentEn: "Giant Ayvalik toast and kumru served in a cafe ambiance at Karanfil Street branch." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Trilye Restoran (Ara Sıcak Bölümü)", rating: 4.6, reviewCount: 3100, area: "GOP", commentTr: "GOP'ta şık ortamda premium tarator soslu çıtır midye tava.", commentEn: "Crispy fried mussels with premium tarator sauce in a classy environment in GOP." },
    { name: "Yelken Balık (Tava Çeşitleri)", rating: 4.5, reviewCount: 2200, area: "Çankaya", commentTr: "Çankaya şubesinde taze deniz ürünleri arasında çıtır şiş midye tava.", commentEn: "Crispy skewered fried mussels among fresh seafood at Cankaya branch." },
    { name: "Sakarya Caddesi Balıkçıları", rating: 4.3, reviewCount: 1500, area: "Kızılay", commentTr: "Sakarya Caddesi'nde tezgahta sıcak ve çıtır servis edilen midye tava.", commentEn: "Fried mussels served hot and crispy at stands on Sakarya Street." }
  ],
  "Profiterol": [
    { name: "Zeynel Muhallebicisi", rating: 4.4, reviewCount: 2800, area: "Çankaya", commentTr: "Çankaya şubesinde geleneksel yoğun çikolata soslu taze profiterol.", commentEn: "Fresh profiterole with traditional dense chocolate sauce at Cankaya branch." },
    { name: "Akman Boza ve Pasta Salonu", rating: 4.5, reviewCount: 1900, area: "Ulus", commentTr: "Ulus'un tarihi salonunda nostaljik kremalı leziz profiterol.", commentEn: "Delicious profiterole with nostalgic cream in Ulus's historical salon." },
    { name: "Kuğu Pastanesi", rating: 4.3, reviewCount: 1100, area: "Tunalı", commentTr: "Kuğu Parkı yakınında çay eşliğinde sunulan leziz profiterol topları.", commentEn: "Delicious profiterole balls served alongside tea near Kugu Park." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Sadık", rating: 4.6, reviewCount: 1600, area: "Ulus", commentTr: "Ulus'un meşhur seyyar köftecisinden çıtır patatesli cızbız köfte.", commentEn: "Grilled meatballs with crispy potatoes from Ulus's famous street vendor." },
    { name: "Akman Köfte Salonu", rating: 4.4, reviewCount: 880, area: "Kızılay", commentTr: "Kızılay şubesinde hızlı ve sıcak sunulan cızbız köfte menüsü.", commentEn: "Grilled meatball menu served hot and fast at Kizilay branch." },
    { name: "Meşhur Ankara Köftecisi (Ulus)", rating: 4.5, reviewCount: 1200, area: "Ulus", commentTr: "Ulus'un tarihi dükkanında yeşillikler eşliğinde nefis köfte patates.", commentEn: "Delicious meatballs and potatoes served with greens in historic Ulus shop." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Öncü Döner", rating: 4.2, reviewCount: 2800, area: "Kızılay", commentTr: "Kızılay şubesinde bol soslu ve patatesli doyurucu Hatay usulü tavuk dürüm.", commentEn: "Filling Hatay style chicken wrap with plenty of sauce and fries in Kizilay." },
    { name: "Katık Döner Ankara", rating: 4.1, reviewCount: 1900, area: "Bahçelievler", commentTr: "Bahçelievler şubesinde lavaşa sarılmış çıtır soslu Hatay dürümü.", commentEn: "Crispy sauced Hatay wrap wrapped in flatbread at Bahcelievler branch." },
    { name: "Reks Döner", rating: 4.1, reviewCount: 820, area: "Çankaya", commentTr: "Çankaya bölgesinde pratik ve lezzetli özel soslu Hatay dürümü.", commentEn: "Practical and delicious special sauced Hatay wrap in Cankaya region." }
  ]
};

export const CHEAT_IZMIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Meşhur Manisa Kebapçısı (Alsancak)", rating: 4.5, reviewCount: 1600, area: "Alsancak", commentTr: "Alsancak'ta tereyağlı ve soslu geleneksel Manisa/İskender kebabı.", commentEn: "Traditional Manisa/Iskender kebab with butter and sauce in Alsancak." },
    { name: "Topçu Restoran", rating: 4.4, reviewCount: 3100, area: "Kordon", commentTr: "Kordon'un meşhur mekanında leziz döner ve İskender kebabı.", commentEn: "Delicious doner and Iskender kebab at Kordon's famous restaurant." },
    { name: "Kebapçı İskender (Mavişehir)", rating: 4.4, reviewCount: 1800, area: "Mavişehir", commentTr: "Mavişehir şubesinde bol etli ve orijinal soslu nefis İskender.", commentEn: "Delicious Iskender with rich meat and original sauce at Mavisehir branch." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Adana Yüzevler Kebapçısı", rating: 4.4, reviewCount: 2200, area: "Alsancak", commentTr: "Alsancak şubesinde el kıymasıyla hazırlanan acılı Adana dürümü.", commentEn: "Spicy Adana wrap prepared with hand-minced meat at Alsancak branch." },
    { name: "Kebapçı Selim Usta", rating: 4.5, reviewCount: 1500, area: "Karşıyaka", commentTr: "Karşıyaka'da taze pişmiş bol yeşillikli kebap dürüm çeşitleri.", commentEn: "Kebab wrap varieties freshly cooked with plenty of greens in Karsiyaka." },
    { name: "Dürümcü Şükrü", rating: 4.3, reviewCount: 950, area: "Bornova", commentTr: "Bornova'da gece geç saatlere kadar sıcak servis edilen leziz dürüm.", commentEn: "Delicious wrap served hot until late night in Bornova." }
  ],
  "Beyti Sarma": [
    { name: "Tavacı Recep Usta (Alsancak)", rating: 4.6, reviewCount: 4200, area: "Alsancak", commentTr: "Tarihi konakta sarımsaklı yoğurt eşliğinde nefis beyti sarma.", commentEn: "Delicious beyti sarma accompanied by garlic yogurt in historic mansion." },
    { name: "Cumba Restoran", rating: 4.5, reviewCount: 2800, area: "Bornova", commentTr: "Bornova sırtlarında körfez manzarası eşliğinde sunulan fırınlanmış beyti.", commentEn: "Baked beyti served with gulf views on Bornova hills." },
    { name: "Kolcuoğlu İzmir", rating: 4.3, reviewCount: 1200, area: "Bostanlı", commentTr: "Bostanlı'da çıtır lavaşa sarılmış özel soslu metrelik beyti sarma.", commentEn: "Metre-long beyti sarma wrapped in crispy flatbread with special sauce in Bostanli." }
  ],
  "Mantı": [
    { name: "Mantı Dünyası", rating: 4.4, reviewCount: 980, area: "Bornova", commentTr: "Bornova şubesinde ev yapımı tadında bol kıymalı sıcak mantı.", commentEn: "Hot manti with plenty of minced meat in home-style taste at Bornova branch." },
    { name: "Kırçiçeği (Mantı Menüsü)", rating: 4.3, reviewCount: 3800, area: "Alsancak", commentTr: "Alsancak'ta 7/24 sıcak servis edilen tereyağlı leziz mantı.", commentEn: "Delicious buttered manti served hot 24/7 in Alsancak." },
    { name: "Bodrum Mantı (Bostanlı)", rating: 4.4, reviewCount: 1500, area: "Bostanlı", commentTr: "Bostanlı sahilinde çıtır mantı ve sos çeşitleri keyfi.", commentEn: "Crispy manti and sauce varieties enjoyment on Bostanli coast." }
  ],
  "Kokoreç": [
    { name: "Kokoreççi Asım Usta", rating: 4.7, reviewCount: 8200, area: "Çamdibi", commentTr: "İzmir'in efsanevi kokoreççisinden uykuluklu iri kıyım gerçek kokoreç.", commentEn: "Real coarse-cut kokorecc with sweetbread from Izmir's legendary vendor." },
    { name: "Akın Kokoreç", rating: 4.5, reviewCount: 1900, area: "Bostanlı", commentTr: "Bostanlı'da çıtır ekmek arası bol baharatlı enfes kokoreç.", commentEn: "Delicious kokorecc with plenty of spices in crispy bread in Bostanli." },
    { name: "Kokoreççi Baki Usta", rating: 4.6, reviewCount: 5400, area: "Şemikler", commentTr: "Şemikler'in meşhur ustasından odun ateşinde pişmiş çıtır kokoreç.", commentEn: "Crispy kokorecc cooked over wood fire from Semikler's famous master." }
  ],
  "Kumpir": [
    { name: "Kumpir Dünyası (Bornova)", rating: 4.2, reviewCount: 680, area: "Bornova", commentTr: "Bornova küçük park yakınında taze malzemeli doyurucu kumpir.", commentEn: "Filling kumpir with fresh ingredients near Bornova small park." },
    { name: "Patatos İzmir", rating: 4.3, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta bol meze ve sos seçenekli klasik fırın patatesi.", commentEn: "Classic baked potato with rich appetizer and sauce options in Alsancak." },
    { name: "Ortaköy Kumpircisi (Mavişehir)", rating: 4.3, reviewCount: 950, area: "Mavişehir", commentTr: "Mavişehir şubesinde tereyağlı ve kaşarlı nefis kumpir keyfi.", commentEn: "Delicious kumpir enjoyment with butter and kashar at Mavisehir branch." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Baklavacı Şemsettin", rating: 4.4, reviewCount: 1900, area: "Konak", commentTr: "Konak şubesinde çıtır çıtır antep fıstıklı sıcak katmer and baklava.", commentEn: "Warm pistachio katmer and baklava in Konak branch." },
    { name: "Hacıbaba Baklava", rating: 4.3, reviewCount: 1200, area: "Alsancak", commentTr: "Alsancak'ta taze fıstıklı baklava dilimleri ve kadayıf lezzeti.", commentEn: "Fresh pistachio baklava slices and kadayif taste in Alsancak." },
    { name: "Gaziantep Baklavacısı (Kemeraltı)", rating: 4.5, reviewCount: 2800, area: "Kemeraltı", commentTr: "Tarihi Kemeraltı çarşısında bol kaymaklı geleneksel fıstıklı katmer.", commentEn: "Traditional pistachio katmer with thick clotted cream in historic Kemeraltı bazaar." }
  ],
  "Hatay Künefesi": [
    { name: "Hataylı Hasan Usta", rating: 4.5, reviewCount: 3600, area: "Karşıyaka", commentTr: "Karşıyaka'da közde yavaşça pişen bol peynirli çıtır künefe.", commentEn: "Crispy kunefe with plenty of cheese slowly cooked over charcoal in Karsiyaka." },
    { name: "Antakya Künefe Evi (Bostanlı)", rating: 4.4, reviewCount: 1100, area: "Bostanlı", commentTr: "Bostanlı'da Hatay usulü çıtır sıcak künefe keyfi.", commentEn: "Hatay style crispy warm kunefe enjoyment in Bostanli." },
    { name: "Künefe Han", rating: 4.3, reviewCount: 820, area: "Bornova", commentTr: "Bornova şubesinde bol şerbetli ve antep fıstıklı nefis künefe.", commentEn: "Delicious kunefe with rich syrup and Antep pistachios at Bornova branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "Leone Patisserie", rating: 4.6, reviewCount: 1800, area: "Alsancak", commentTr: "Alsancak şubesinde premium çikolatalı akışkan sıcak sufle.", commentEn: "Premium chocolate fluid hot souffle at Alsancak branch." },
    { name: "Reyhan Pastanesi", rating: 4.6, reviewCount: 5200, area: "Bostanlı", commentTr: "Bostanlı'da çikolatalı San Sebastian ve kadife dokulu sufle.", commentEn: "San Sebastian with chocolate and velvet-textured souffle in Bostanli." },
    { name: "Viyana Kahvesi Alsancak", rating: 4.4, reviewCount: 920, area: "Alsancak", commentTr: "Alsancak'ta çikolata şelaleli sıcak San Sebastian cheesecake keyfi.", commentEn: "Hot San Sebastian cheesecake enjoyment with chocolate waterfall in Alsancak." }
  ],
  "Tantuni": [
    { name: "Mersinli Ciğerci Tantunici Apo", rating: 4.5, reviewCount: 1400, area: "Bornova", commentTr: "Bornova'da lavaşa sarılı bol baharatlı ve sıcak dana tantuni.", commentEn: "Warm beef tantuni wrapped in flatbread with plenty of spices in Bornova." },
    { name: "Göksel Tantuni (İzmir Şubesi)", rating: 4.3, reviewCount: 950, area: "Alsancak", commentTr: "Alsancak'ta hızlı servis edilen leziz Mersin usulü tantuni.", commentEn: "Delicious Mersin style tantuni served fast in Alsancak." },
    { name: "Suat Tantuni (Bornova)", rating: 4.4, reviewCount: 1200, area: "Bornova", commentTr: "Bornova şubesinde yoğurtlu tantuni ve klasik biftek tantuni tabağı.", commentEn: "Yogurt tantuni and classic steak tantuni plate at Bornova branch." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "Cookshop (Alsancak)", rating: 4.3, reviewCount: 2200, area: "Alsancak", commentTr: "Alsancak'ta yoğun çikolata soslu akışkan ıslak kek tabağı.", commentEn: "Fluid wet cake plate with dense chocolate sauce in Alsancak." },
    { name: "Arpège Patisserie", rating: 4.7, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak şubesinde gurme dokunuşlu premium ağlayan pasta lezzeti.", commentEn: "Gourmet touch premium weeping cake taste at Alsancak branch." },
    { name: "BigChefs (Mavişehir)", rating: 4.2, reviewCount: 2800, area: "Mavişehir", commentTr: "Mavişehir şubesinde dondurma eşliğinde sunulan leziz ıslak kek.", commentEn: "Delicious wet cake served with ice cream at Mavisehir branch." }
  ],
  "Hamburger Menü": [
    { name: "Burger No7", rating: 4.5, reviewCount: 3600, area: "Bostanlı", commentTr: "Bostanlı şubesinde özel yapım hamburger ekmeği ve sulu burger köftesi.", commentEn: "Special hamburger bun and juicy burger patty at Bostanli branch." },
    { name: "Ohannes Burger", rating: 4.4, reviewCount: 4800, area: "Bornova", commentTr: "Bornova'da çeşitli soslarla hazırlanan doyurucu hamburger menüleri.", commentEn: "Filling hamburger menus prepared with various sauces in Bornova." },
    { name: "Bready Burger", rating: 4.5, reviewCount: 1900, area: "Alsancak", commentTr: "Alsancak'ta brioche ekmeği ve çıtır patatesli gurme burger menüsü.", commentEn: "Gourmet burger menu with brioche bun and crispy fries in Alsancak." }
  ],
  "İçli Köfte": [
    { name: "Balmumu Lokanta", rating: 4.6, reviewCount: 1800, area: "Alsancak", commentTr: "Alsancak'ta geleneksel usulde hazırlanan çıtır kızarmış nefis içli köfte.", commentEn: "Delicious crispy fried stuffed meatballs prepared in traditional style in Alsancak." },
    { name: "Adil Müftüoğlu - Uğur Lokantası", rating: 4.5, reviewCount: 2900, area: "Kemeraltı", commentTr: "Tarihi Kemeraltı lokantasından haşlanmış bol kıymalı içli köfte.", commentEn: "Boiled stuffed meatballs with rich minced meat from historical Kemeralti restaurant." },
    { name: "Kısmet Lokantası", rating: 4.4, reviewCount: 950, area: "Konak", commentTr: "Konak esnaf lokantasından çıtır dış kabuklu leziz içli köfte.", commentEn: "Delicious stuffed meatballs with crispy outer crust from Konak artisan restaurant." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mantı Evi (Karşıyaka)", rating: 4.3, reviewCount: 820, area: "Karşıyaka", commentTr: "Karşıyaka'da kat kat yufka ve kıymalı soslu orijinal Kayseri yağlaması.", commentEn: "Original Kayseri yaglama with layers of flatbread and minced meat sauce in Karsiyaka." },
    { name: "Erciyes Mantı & Ev Yemekleri", rating: 4.4, reviewCount: 650, area: "Bornova", commentTr: "Bornova şubesinde ev yemeği sıcaklığında sunulan leziz yağlama.", commentEn: "Delicious yaglama served with home-cooked warmth at Bornova branch." },
    { name: "Mantı Keyfi", rating: 4.2, reviewCount: 1100, area: "Bostanlı", commentTr: "Bostanlı şubesinde sarmısaklı yoğurtlu ve kıymalı Kayseri yağlaması keyfi.", commentEn: "Kayseri yaglama enjoyment with garlic yogurt and minced meat at Bostanli branch." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Kırçiçeği", rating: 4.3, reviewCount: 3800, area: "Alsancak", commentTr: "Alsancak'ta çıtır hamurlu ve bol malzemeli kavurmalı kaşarlı pide.", commentEn: "Crispy crust and rich ingredient roasted beef kashar flatbread in Alsancak." },
    { name: "Ömür Pide Salonu", rating: 4.4, reviewCount: 950, area: "Bornova", commentTr: "Bornova'da taş fırından sıcak çıkan tereyağlı kavurmalı kaşarlı pide.", commentEn: "Buttered roasted beef kashar flatbread fresh out of stone oven in Bornova." },
    { name: "Meşhur Bafra Pidecisi (Alsancak)", rating: 4.5, reviewCount: 1200, area: "Alsancak", commentTr: "Alsancak'ta Karadeniz usulü kapalı kavurmalı kaşarlı pide keyfi.", commentEn: "Enjoyment of Black Sea style closed roasted beef kashar flatbread in Alsancak." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Kumrucu Şevki", rating: 4.5, reviewCount: 8900, area: "Bostanlı", commentTr: "Bostanlı'da bol malzemeli, peynirli ve sucuklu gerçek İzmir kumrusu.", commentEn: "Real Izmir kumru with rich ingredients, cheese, and sausage in Bostanli." },
    { name: "Kumrucu Hüseyin", rating: 4.6, reviewCount: 3200, area: "Alsancak", commentTr: "Alsancak'ın tarihi kumrucusundan kömürde pişmiş efsanevi kumru.", commentEn: "Legendary kumru cooked over charcoal from Alsancak's historic vendor." },
    { name: "Alsancak Tostçusu (Ayvalık Tostu)", rating: 4.4, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak şubesinde bol malzemeli ve rus salatalı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad at Alsancak branch." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Serkan Hamza Midye", rating: 4.5, reviewCount: 2200, area: "Bostanlı", commentTr: "Bostanlı'da çıtır şiş midye tava ve özel tarator sosu.", commentEn: "Crispy skewered fried mussels and special tarator sauce in Bostanli." },
    { name: "Midyeci Ahmet (Alsancak)", rating: 4.3, reviewCount: 3600, area: "Alsancak", commentTr: "Alsancak şubesinde çıtır midye tava ve sarımsaklı sos keyfi.", commentEn: "Crispy fried mussels and garlicky sauce enjoyment at Alsancak branch." },
    { name: "Kordon Yengeç Restoran (Tava Bölümü)", rating: 4.4, reviewCount: 2800, area: "Kordon", commentTr: "Kordon sahilinde deniz havası eşliğinde sunulan çıtır midye tava.", commentEn: "Crispy fried mussels served alongside sea breeze on Kordon coast." }
  ],
  "Profiterol": [
    { name: "Reyhan Pastanesi", rating: 4.6, reviewCount: 5200, area: "Bostanlı", commentTr: "Bostanlı şubesinde geleneksel çikolata soslu efsanevi profiterol.", commentEn: "Legendary profiterole with traditional chocolate sauce at Bostanli branch." },
    { name: "Bravo Pastanesi", rating: 4.5, reviewCount: 3100, area: "Bostanlı", commentTr: "Bostanlı'da taze kremalı çıtır profiterol topları.", commentEn: "Crispy profiterole balls with fresh cream in Bostanli." },
    { name: "Sevinç Pastanesi", rating: 4.4, reviewCount: 4200, area: "Alsancak", commentTr: "Alsancak meydanında nostaljik çay eşliğinde leziz profiterol.", commentEn: "Delicious profiterole alongside nostalgic tea at Alsancak square." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Tizzy", rating: 4.4, reviewCount: 1800, area: "Bostanlı", commentTr: "Bostanlı'da çıtır patates kızartması ile sunulan leziz cızbız köfte.", commentEn: "Delicious grilled meatballs served with crispy french fries in Bostanli." },
    { name: "Meşhur Köfteci Küçük Sami", rating: 4.6, reviewCount: 2100, area: "Kemeraltı", commentTr: "Kemeraltı'nın tarihi esnaf sokağında enfes köfte patates tabağı.", commentEn: "Delicious meatball and potato plate in Kemeralti's historical artisan street." },
    { name: "Tarihi Altınkapı Kebap & Köfte", rating: 4.5, reviewCount: 2900, area: "Alsancak", commentTr: "Alsancak'ta köklü mekandan klasik leziz cızbız köfte patates.", commentEn: "Classic delicious grilled meatballs and potatoes from long-established place in Alsancak." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Öncü Döner İzmir", rating: 4.1, reviewCount: 1900, area: "Bornova", commentTr: "Bornova şubesinde bol soslu ve patatesli tavuk Hatay dürümü.", commentEn: "Chicken Hatay wrap with special sauce and french fries." },
    { name: "Hot Döner", rating: 4.2, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak şubesinde lavaşa sarılı çıtır soslu Hatay dürümü keyfi.", commentEn: "Enjoyment of crispy sauced Hatay wrap wrapped in flatbread at Alsancak branch." },
    { name: "Katık Döner", rating: 4.1, reviewCount: 2200, area: "Bostanlı", commentTr: "Bostanlı şubesinde pratik ve lezzetli özel soslu tavuk Hatay dürümü.", commentEn: "Practical and delicious special sauced chicken Hatay wrap at Bostanli branch." }
  ]
};

export const CHEAT_MERSIN_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa İskender Kebapçısı (Pozcu)", rating: 4.4, reviewCount: 1500, area: "Pozcu", commentTr: "Pozcu'da tereyağlı dönerin ve soslu İskender kebabının adresi.", commentEn: "Address of buttered doner and sauced Iskender kebab in Pozcu." },
    { name: "Hacıbaba Lokantası", rating: 4.5, reviewCount: 3200, area: "Akdeniz", commentTr: "Mersin'in tarihi lokantasından yaprak dönerli nefis İskender.", commentEn: "Delicious Iskender with leaf doner from Mersin's historical restaurant." },
    { name: "Uludağ Restoran", rating: 4.3, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir'de nezih ortamda sunulan tereyağlı leziz İskender.", commentEn: "Delicious buttered Iskender served in a decent environment in Yenisehir." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Bedii Usta Kebap salonu", rating: 4.5, reviewCount: 1800, area: "Pozcu", commentTr: "Pozcu'da közde pişen bol yeşillikli acılı Adana kebabı dürümü.", commentEn: "Spicy Adana kebab wrap cooked over charcoal with plenty of greens in Pozcu." },
    { name: "Kebapçı Şefik", rating: 4.4, reviewCount: 1200, area: "Mezitli", commentTr: "Mezitli şubesinde taze lavaşla sunulan leziz kebap dürüm çeşitleri.", commentEn: "Delicious kebab wrap varieties served with fresh flatbread at Mezitli branch." },
    { name: "Emin Ocakbaşı", rating: 4.5, reviewCount: 2200, area: "Akdeniz", commentTr: "Akdeniz şubesinde zırh kıymasıyla hazırlanan sıcak kebap dürümü.", commentEn: "Hot kebab wrap prepared with hand-minced meat at Akdeniz branch." }
  ],
  "Beyti Sarma": [
    { name: "Hasan Kolcuoğlu (Marina)", rating: 4.4, reviewCount: 2800, area: "Marina", commentTr: "Marina şubesinde soslu ve sarımsaklı yoğurtlu premium beyti sarma.", commentEn: "Premium beyti sarma with sauce and garlic yogurt at Marina branch." },
    { name: "Sini Restoran", rating: 4.3, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir'de çıtır yufkaya sarılmış fırından taze beyti.", commentEn: "Fresh beyti out of the oven wrapped in crispy flatbread in Yenisehir." },
    { name: "Baaba Kebap", rating: 4.4, reviewCount: 890, area: "Pozcu", commentTr: "Pozcu'da kömür ateşinde pişirilen nefis beyti sarma porsiyonu.", commentEn: "Delicious portion of beyti sarma cooked over charcoal in Pozcu." }
  ],
  "Mantı": [
    { name: "Evce Ev Yemekleri", rating: 4.5, reviewCount: 820, area: "Pozcu", commentTr: "Pozcu'da ev yapımı kıvamında bol yoğurtlu ve naneli mantı.", commentEn: "Manti with plenty of yogurt and mint in home-style quality in Pozcu." },
    { name: "Hatun Mutfak", rating: 4.4, reviewCount: 650, area: "Yenişehir", commentTr: "Yenişehir'de el açması ince hamurlu leziz mantı çeşitleri.", commentEn: "Delicious manti varieties with hand-rolled thin dough in Yenisehir." },
    { name: "Sarnıç Cafe Bistro (Mantı Menüsü)", rating: 4.3, reviewCount: 1200, area: "Pozcu", commentTr: "Pozcu şubesinde sıcak ve soslu leziz mantı menüsü.", commentEn: "Delicious hot and sauced manti menu at Pozcu branch." }
  ],
  "Kokoreç": [
    { name: "Kokoreççi Apo", rating: 4.6, reviewCount: 2400, area: "Pozcu", commentTr: "Pozcu'da kömür ateşinde ağır ağır pişen çıtır ve bol baharatlı kokoreç.", commentEn: "Crispy and highly spiced kokorecc slowly cooked over charcoal in Pozcu." },
    { name: "Şampiyon Kokoreç (Mersin Şubesi)", rating: 4.2, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir şubesinde hızlı ve sıcak servis edilen çıtır kokoreç.", commentEn: "Crispy kokorecc served hot and fast at Yenisehir branch." },
    { name: "Merkez Kokoreç", rating: 4.4, reviewCount: 950, area: "Akdeniz", commentTr: "Akdeniz bölgesinde gece geç saatlerin vazgeçilmez uykuluklu kokoreci.", commentEn: "Indispensable kokorecc with sweetbread for late night in Akdeniz region." }
  ],
  "Kumpir": [
    { name: "Patatos Mersin", rating: 4.3, reviewCount: 880, area: "Pozcu", commentTr: "Pozcu şubesinde bol meze barı ile hazırlanan dev patates kumpiri.", commentEn: "Giant potato kumpir prepared with a rich appetizer bar at Pozcu branch." },
    { name: "Kumpir Evi (Pozcu)", rating: 4.1, reviewCount: 540, area: "Pozcu", commentTr: "Pozcu'da taze fırınlanmış tereyağlı ve kaşarlı nefis kumpir.", commentEn: "Delicious baked potato with fresh butter and kashar cheese in Pozcu." },
    { name: "Forum AVM Kumpir Stantları", rating: 4.2, reviewCount: 1300, area: "Yenişehir", commentTr: "AVM içinde pratik ve bol soslu doyurucu kumpir keyfi.", commentEn: "Practical and rich sauced filling kumpir enjoyment inside the mall." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Baklavacı Şemsettin Mersin", rating: 4.4, reviewCount: 1600, area: "Yenişehir", commentTr: "Yenişehir şubesinde çıtır çıtır bol fıstıklı sıcak katmer keyfi.", commentEn: "Warm katmer enjoyment with plenty of pistachios at Yenisehir branch." },
    { name: "Künefeci Emin Usta (Katmer Reyonu)", rating: 4.5, reviewCount: 2200, area: "Pozcu", commentTr: "Pozcu'da taze kaymaklı ve çıtır Antep usulü fıstıklı katmer.", commentEn: "Crispy Antep style pistachio katmer with fresh clotted cream in Pozcu." },
    { name: "Hacıbaba Tatlıları", rating: 4.3, reviewCount: 1100, area: "Akdeniz", commentTr: "Akdeniz şubesinde geleneksel çıtır baklava ve havuç dilimi lezzetleri.", commentEn: "Traditional crispy baklava and carrot slice tastes at Akdeniz branch." }
  ],
  "Hatay Künefesi": [
    { name: "Künefeci Emin Usta", rating: 4.6, reviewCount: 3800, area: "Pozcu", commentTr: "Pozcu şubesinde közde pişen bol peynirli ve şerbetli orijinal künefe.", commentEn: "Original kunefe with plenty of cheese and syrup cooked over charcoal in Pozcu." },
    { name: "Hatay Künefe Evi (Mezitli)", rating: 4.4, reviewCount: 1200, area: "Mezitli", commentTr: "Mezitli'de Hatay'dan gelen özel peynirle hazırlanan çıtır sıcak künefe.", commentEn: "Crispy hot kunefe prepared with special cheese from Hatay in Mezitli." },
    { name: "Asi Künefe Mersin", rating: 4.3, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir şubesinde bol antep fıstıklı sıcak Hatay künefesi.", commentEn: "Warm Hatay kunefe with plenty of Antep pistachios at Yenisehir branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "MOC Coffee (Sayapark)", rating: 4.4, reviewCount: 820, area: "Sayapark AVM", commentTr: "Sayapark şubesinde akışkan sıcak çikolatalı nefis sufle tabağı.", commentEn: "Delicious warm fluid chocolate souffle plate at Sayapark branch." },
    { name: "Crop Coffee Co. Mersin", rating: 4.5, reviewCount: 980, area: "Yenişehir", commentTr: "Yenişehir'de üçüncü nesil kahve eşliğinde sunulan San Sebastian.", commentEn: "San Sebastian served alongside third wave coffee in Yenisehir." },
    { name: "Robert's Coffee (Pozcu)", rating: 4.3, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu sahil şubesinde deniz havasıyla bol çikolatalı sufle keyfi.", commentEn: "Enjoyment of rich chocolate souffle with sea breeze at Pozcu coast branch." }
  ],
  "Tantuni": [
    { name: "Göksel Tantuni", rating: 4.6, reviewCount: 9500, area: "Pozcu", commentTr: "Mersin'in en meşhur tantunicisinde sacda pişen sıcacık lavaş tantuni.", commentEn: "Warm flatbread tantuni cooked on iron plate at Mersin's most famous tantuni place." },
    { name: "Memo Tantuni", rating: 4.5, reviewCount: 6800, area: "Akdeniz", commentTr: "Akdeniz bölgesinde geleneksel biftek tantuniyi en iyi yapan yerlerden.", commentEn: "One of the best places making traditional steak tantuni in Akdeniz region." },
    { name: "Suat Tantuni", rating: 4.5, reviewCount: 5200, area: "Yenişehir", commentTr: "Yenişehir şubesinde yoğurtlu tantuni ve çıtır lavaş dürümü seçeneği.", commentEn: "Yogurt tantuni and crispy flatbread wrap option at Yenisehir branch." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "BigChefs (Marina)", rating: 4.3, reviewCount: 2800, area: "Marina", commentTr: "Marina şubesinde premium çikolata soslu nefis ıslak kek keyfi.", commentEn: "Enjoyment of delicious wet cake with premium chocolate sauce at Marina branch." },
    { name: "Leman Kültür (Pozcu)", rating: 4.2, reviewCount: 1800, area: "Pozcu", commentTr: "Pozcu şubesinde bol çikolatalı soslu ve dondurmalı sıcak ıslak kek.", commentEn: "Warm wet cake with rich chocolate sauce and ice cream at Pozcu branch." },
    { name: "David People Coffee & Food", rating: 4.3, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir şubesinde kahveyle mükemmel uyum sağlayan çikolatalı ıslak kek.", commentEn: "Chocolate wet cake pairing perfectly with coffee at Yenisehir branch." }
  ],
  "Hamburger Menü": [
    { name: "Burger No7 Mersin", rating: 4.5, reviewCount: 2200, area: "Pozcu", commentTr: "Pozcu şubesinde el yapımı köftesi ve çıtır patatesiyle doyurucu burger menüsü.", commentEn: "Satisfying burger menu with handmade patty and crispy fries at Pozcu branch." },
    { name: "Zula Burger (Mersin)", rating: 4.4, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir'de gurme brioche ekmekli sulu burger menüsü keyfi.", commentEn: "Juicy burger menu enjoyment with gourmet brioche bun in Yenisehir." },
    { name: "Ohannes Burger (Pozcu)", rating: 4.3, reviewCount: 1500, area: "Pozcu", commentTr: "Pozcu şubesinde özel soslu ve çıtır patatesli doyurucu burger.", commentEn: "Satisfying burger with special sauce and crispy fries at Pozcu branch." }
  ],
  "İçli Köfte": [
    { name: "Anaeli Mutfak", rating: 4.6, reviewCount: 1400, area: "Pozcu", commentTr: "Pozcu'da ev hanımlarının elinden çıkan nefis kızarmış içli köfte.", commentEn: "Delicious fried stuffed meatballs made by local home cooks in Pozcu." },
    { name: "Kerebiççi Oğuz (İçli Köfte Reyonu)", rating: 4.5, reviewCount: 2900, area: "Yenişehir", commentTr: "Yenişehir şubesinde tatlı öncesi sunulan çıtır sıcak içli köfte.", commentEn: "Crispy hot stuffed meatballs served before dessert at Yenisehir branch." },
    { name: "Mersin Büyükşehir Belediyesi Akdeniz Mutfağı", rating: 4.4, reviewCount: 1100, area: "Akdeniz", commentTr: "Belediye güvencesiyle geleneksel haşlanmış içli köfte lezzeti.", commentEn: "Traditional boiled stuffed meatball taste with municipal assurance." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mantı Evi (Mezitli)", rating: 4.3, reviewCount: 880, area: "Mezitli", commentTr: "Mezitli'de kat kat ince yufka arasına kıymalı sos ve sarımsaklı yoğurt.", commentEn: "Garlic yogurt and minced meat sauce between thin layers of flatbread in Mezitli." },
    { name: "Sini Ev Yemekleri", rating: 4.4, reviewCount: 620, area: "Pozcu", commentTr: "Pozcu şubesinde günlük taze hazırlanan sıcak Kayseri yağlaması.", commentEn: "Hot Kayseri yaglama prepared fresh daily at Pozcu branch." },
    { name: "Nar Ev Yemekleri", rating: 4.3, reviewCount: 540, area: "Yenişehir", commentTr: "Yenişehir'de ev yemeği kalitesinde sunulan nefis yoğurtlu yağlama.", commentEn: "Delicious yaglama with yogurt served in home-cooked quality in Yenisehir." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Karadeniz Pide Salonu", rating: 4.5, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da taş fırında pişen çıtır tereyağlı kavurmalı kaşarlı pide.", commentEn: "Crispy buttered roasted beef kashar flatbread baked in stone oven in Pozcu." },
    { name: "Meşhur Bafra Pidecisi (Mersin)", rating: 4.4, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir şubesinde Karadeniz usulü kapalı kavurmalı kaşarlı pide.", commentEn: "Black Sea style closed roasted beef kashar flatbread at Yenisehir branch." },
    { name: "Akdeniz Pide", rating: 4.3, reviewCount: 680, area: "Akdeniz", commentTr: "Akdeniz şubesinde hızlı ve sıcak servis edilen çıtır pide kenarları.", commentEn: "Crispy flatbread edges served fast and hot at Akdeniz branch." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Kumrucu Şevki (Mersin Şubesi)", rating: 4.4, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir sahil şubesinde bol malzemeli taze İzmir kumrusu keyfi.", commentEn: "Enjoyment of fresh Izmir kumru with rich ingredients at Yenisehir coast branch." },
    { name: "Tostçu Mehmet (Mersin)", rating: 4.3, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da bol malzemeli ve rus salatalı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad in Pozcu." },
    { name: "Çeşme Kumrusu (Pozcu)", rating: 4.3, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da sucuk, salam ve kaşarın sıcak kumru ekmeğinde buluşması.", commentEn: "Sausage, salami, and kashar meeting in warm kumru bread in Pozcu." }
  ],
  "Midye Tava ve Sosu": [
    { name: "İskele Marin Balık Restoran (Tava Bölümü)", rating: 4.5, reviewCount: 2200, area: "Marina", commentTr: "Marina sahilinde tarator soslu çıtır çıtır midye tava keyfi.", commentEn: "Enjoyment of crispy fried mussels with tarator sauce on Marina coast." },
    { name: "Rina Balık Restoran", rating: 4.4, reviewCount: 1400, area: "Yenişehir", commentTr: "Yenişehir şubesinde taze deniz ürünleri eşliğinde sıcak midye tava.", commentEn: "Hot fried mussels accompanied by fresh seafood at Yenisehir branch." },
    { name: "Midyeci Ahmet (Mersin)", rating: 4.3, reviewCount: 1900, area: "Pozcu", commentTr: "Pozcu şubesinde taze şiş midye tava ve sarımsaklı tarator sosu.", commentEn: "Fresh skewered fried mussels and garlicky tarator sauce at Pozcu branch." }
  ],
  "Profiterol": [
    { name: "Dondurmacı Halil (Tatlı Reyonu)", rating: 4.7, reviewCount: 9200, area: "Pozcu", commentTr: "Pozcu şubesinde cezerye ve dondurma yanında leziz taze profiterol.", commentEn: "Delicious fresh profiterole alongside cezerye and ice cream at Pozcu branch." },
    { name: "Polat Pastanesi", rating: 4.4, reviewCount: 1200, area: "Yenişehir", commentTr: "Yenişehir şubesinde yoğun çikolata soslu geleneksel profiterol topları.", commentEn: "Traditional profiterole balls with dense chocolate sauce at Yenisehir branch." },
    { name: "Meram Pastanesi", rating: 4.3, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da çay saatlerinin vazgeçilmez nostaljik kremalı profiterolü.", commentEn: "Indispensable nostalgic cream profiterole of tea hours in Pozcu." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Ahmet", rating: 4.5, reviewCount: 1400, area: "Akdeniz", commentTr: "Akdeniz şubesinde hızlı servis edilen çıtır patatesli köfte menüsü.", commentEn: "Meatball menu with crispy potatoes served fast at Akdeniz branch." },
    { name: "Çıtır Köfte Salonu", rating: 4.3, reviewCount: 880, area: "Pozcu", commentTr: "Pozcu'da sacda pişmiş sıcak cızbız köfte patates keyfi.", commentEn: "Enjoyment of hot grilled meatballs and potatoes cooked on iron plate in Pozcu." },
    { name: "Tarihi Eminönü Köftecisi (Mersin)", rating: 4.4, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir şubesinde esnaf usulü sulu köfte patates tabağı.", commentEn: "Artisan style juicy meatball and potato plate at Yenisehir branch." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Öncü Döner", rating: 4.1, reviewCount: 2200, area: "Pozcu", commentTr: "Pozcu şubesinde bol özel soslu Hatay usulü tavuk dürümü.", commentEn: "Hatay style chicken wrap with rich special sauce at Pozcu branch." },
    { name: "Katık Döner Mersin", rating: 4.2, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir şubesinde lavaşa sarılmış çıtır patatesli Hatay dürümü.", commentEn: "Crispy patates Hatay wrap wrapped in flatbread at Yenisehir branch." },
    { name: "Hot Döner", rating: 4.1, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da pratik ve hızlı servis edilen leziz soslu Hatay dürümü.", commentEn: "Delicious sauced Hatay wrap served practically and fast in Pozcu." }
  ]
};

export const CHEAT_GAZIANTEP_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa İskender Kebapçısı (İbrahimli)", rating: 4.4, reviewCount: 1600, area: "İbrahimli", commentTr: "İbrahimli şubesinde tereyağlı dönerin ve sıcak soslu İskenderin keyfi.", commentEn: "Enjoyment of buttered doner and warm sauced Iskender at Ibrahimli branch." },
    { name: "Çulcuoğlu Et Lokantası (İskender Menüsü)", rating: 4.5, reviewCount: 2200, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde tereyağlı geleneksel nefis İskender tabağı.", commentEn: "Traditional delicious buttered Iskender plate in Sehitkamil region." },
    { name: "Ünal Et Lokantası", rating: 4.3, reviewCount: 1100, area: "Şahinbey", commentTr: "Şahinbey şubesinde hızlı ve sıcak servis edilen tereyağlı leziz İskender.", commentEn: "Delicious buttered Iskender served hot and fast at Sahinbey branch." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Kebapçı Halil Usta", rating: 4.7, reviewCount: 9200, area: "Şehitkamil", commentTr: "Karşıyaka'nın tarihi dükkanında taze lavaşla sunulan nefis kebap dürümü.", commentEn: "Delicious kebab wrap served with fresh flatbread at historic Karsiyaka shop." },
    { name: "Kebapçı Yalçın", rating: 4.5, reviewCount: 3800, area: "Şahinbey", commentTr: "Şahinbey bölgesinde el kıymasıyla hazırlanan acılı ve köz biberli dürüm.", commentEn: "Spicy wrap prepared with hand-minced meat and roasted pepper in Sahinbey region." },
    { name: "Ciğerci Mustafa", rating: 4.4, reviewCount: 2900, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde taze lavaşa sarılmış sıcacık kebap dürüm çeşitleri.", commentEn: "Warm kebab wrap varieties wrapped in fresh flatbread at Sehitkamil branch." }
  ],
  "Beyti Sarma": [
    { name: "İmam Çağdaş", rating: 4.6, reviewCount: 15000, area: "Şahinbey", commentTr: "Tarihi çarşıda sarımsaklı yoğurt ve özel sos eşliğinde fırınlanmış premium beyti.", commentEn: "Premium baked beyti accompanied by garlic yogurt and special sauce in the historic bazaar." },
    { name: "Şirvan Kebap Salonu", rating: 4.4, reviewCount: 4200, area: "Şehitkamil", commentTr: "Şehitkamil'de çıtır yufkaya sarılmış fırından taze çıtır beyti.", commentEn: "Fresh crispy beyti out of the oven wrapped in crispy flatbread in Sehitkamil." },
    { name: "Sahan Restoran", rating: 4.5, reviewCount: 3100, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde kömür ateşinde pişmiş nefis beyti sarma porsiyonu.", commentEn: "Delicious portion of beyti sarma cooked over charcoal at Sehitkamil branch." }
  ],
  "Mantı": [
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.4, reviewCount: 650, area: "İbrahimli", commentTr: "İbrahimli'de ev yapımı kıvamında bol yoğurtlu ve tereyağlı mantı.", commentEn: "Manti with plenty of yogurt and butter in home-style quality in Ibrahimli." },
    { name: "Aşina Gaziantep Mutfağı (Mantı Bölümü)", rating: 4.5, reviewCount: 2200, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde yöresel soslu taze hamurlu nefis mantı.", commentEn: "Delicious manti with fresh dough and local sauce at Sehitkamil branch." },
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.4, reviewCount: 1800, area: "Şahinbey", commentTr: "Şahinbey şubesinde sıcak ve bol kıymalı geleneksel mantı tabağı.", commentEn: "Traditional manti plate with hot and rich minced meat at Sahinbey branch." }
  ],
  "Kokoreç": [
    { name: "Kokoreççi Asım Usta (Gaziantep Şubesi)", rating: 4.5, reviewCount: 1800, area: "Şehitkamil", commentTr: "Şehitkamil'de kömür ateşinde pişen çıtır ve bol baharatlı kokoreç.", commentEn: "Crispy and highly spiced kokorecc cooked over charcoal in Sehitkamil." },
    { name: "Şampiyon Kokoreç (Sanko Park AVM)", rating: 4.1, reviewCount: 950, area: "Şahinbey", commentTr: "Sanko Park AVM içinde hızlı ve sıcak servis edilen çıtır kokoreç keyfi.", commentEn: "Crispy kokorecc enjoyment served hot and fast inside Sanko Park Mall." },
    { name: "Gaziantep Kokoreç Evi", rating: 4.2, reviewCount: 680, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde gece geç saatlerin vazgeçilmez uykuluklu kokoreci.", commentEn: "Indispensable kokorecc with sweetbread for late night in Sehitkamil region." }
  ],
  "Kumpir": [
    { name: "Patatos Gaziantep", rating: 4.3, reviewCount: 880, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde bol meze barı ile hazırlanan dev patates kumpiri.", commentEn: "Giant potato kumpir prepared with a rich appetizer bar at Sehitkamil branch." },
    { name: "Kumpir Dünyası (Prime Mall)", rating: 4.1, reviewCount: 540, area: "Şehitkamil", commentTr: "AVM içinde taze fırınlanmış tereyağlı ve kaşarlı nefis kumpir keyfi.", commentEn: "Delicious baked potato enjoyment with fresh butter and kashar cheese inside the mall." },
    { name: "Forum AVM Kumpir Stantları", rating: 4.2, reviewCount: 1100, area: "Şehitkamil", commentTr: "Forum AVM stantlarında pratik ve bol soslu doyurucu kumpir.", commentEn: "Practical and rich sauced filling kumpir at Forum AVM stands." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Koçak Baklava", rating: 4.8, reviewCount: 12000, area: "Şehitkamil", commentTr: "Gaziantep'in en iyi baklavacılarından çıtır ve bol fıstıklı tatlı şöleni.", commentEn: "A crispy and rich pistachio dessert feast from one of Gaziantep's best baklava bakeries." },
    { name: "Zeki İnal (Şöbiyet ve Baklava)", rating: 4.7, reviewCount: 5400, area: "Şahinbey", commentTr: "Şahinbey bölgesinde el yapımı kaymaklı şöbiyetiyle meşhur lezzet durağı.", commentEn: "Famous taste stop with its handmade clotted cream sobiyet in Sahinbey region." },
    { name: "Katmerci Zekeriya Usta", rating: 4.6, reviewCount: 8800, area: "Şahinbey", commentTr: "Tarihi dükkanda odun ateşinde incecik açılmış fıstıklı sıcak katmer.", commentEn: "Thinly rolled warm pistachio katmer cooked in wood fire at historic shop." }
  ],
  "Hatay Künefesi": [
    { name: "Özikizler Künefe", rating: 4.6, reviewCount: 6200, area: "Şehitkamil", commentTr: "Şehitkamil'de sacda pişen bol peynirli ve antep fıstıklı sıcak künefe.", commentEn: "Warm kunefe with plenty of cheese and Antep pistachios cooked on iron plate in Sehitkamil." },
    { name: "Cumba Künefe", rating: 4.5, reviewCount: 4800, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde kaymaklı ve şerbetli çıtır Hatay künefesi keyfi.", commentEn: "Crispy Hatay kunefe enjoyment with clotted cream and syrup at Sehitkamil branch." },
    { name: "Künefeci Bilal Usta", rating: 4.4, reviewCount: 1900, area: "Şahinbey", commentTr: "Şahinbey şubesinde taze peynirle sıcak ve çıtır hazırlanan leziz künefe.", commentEn: "Delicious kunefe prepared hot and crispy with fresh cheese at Sahinbey branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "MOC Coffee (İbrahimli)", rating: 4.4, reviewCount: 820, area: "İbrahimli", commentTr: "İbrahimli şubesinde akışkan sıcak çikolatalı nefis sufle tabağı.", commentEn: "Delicious warm fluid chocolate souffle plate at Ibrahimli branch." },
    { name: "Crop Coffee Co. Gaziantep", rating: 4.5, reviewCount: 950, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde taze demlenmiş kahve yanında nefis San Sebastian.", commentEn: "Delicious San Sebastian alongside freshly brewed coffee at Sehitkamil branch." },
    { name: "Grano Coffee Roastery", rating: 4.4, reviewCount: 1100, area: "Şehitkamil", commentTr: "Şehitkamil'de gurme kahvelerle sunulan ev yapımı yoğun çikolatalı sufle.", commentEn: "Homemade dense chocolate souffle served with gourmet coffees in Sehitkamil." }
  ],
  "Tantuni": [
    { name: "Göksel Tantuni (Gaziantep Şubesi)", rating: 4.4, reviewCount: 1800, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde sacda pişen sıcak lavaş tavuk ve biftek tantuni.", commentEn: "Warm flatbread chicken and steak tantuni cooked on iron plate at Sehitkamil branch." },
    { name: "Mersinli Tantunici Yaşar Usta", rating: 4.3, reviewCount: 950, area: "Şahinbey", commentTr: "Şahinbey bölgesinde hızlı ve bol malzemeli lavaş dürüm tantuni.", commentEn: "Fast flatbread wrap tantuni with rich ingredients in Sahinbey region." },
    { name: "Memo Tantuni Gaziantep", rating: 4.2, reviewCount: 880, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde pratik ve lezzetli yoğurtlu tantuni menüsü.", commentEn: "Practical and delicious yogurt tantuni menu at Sehitkamil branch." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "BigChefs (Gaziantep Prime Mall)", rating: 4.3, reviewCount: 2400, area: "Şehitkamil", commentTr: "AVM şubesinde premium çikolata soslu nefis ıslak kek keyfi.", commentEn: "Enjoyment of delicious wet cake with premium chocolate sauce at mall branch." },
    { name: "Orkide Pastanesi", rating: 4.6, reviewCount: 5200, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde taze kremalı nefis ağlayan pasta ve çikolatalı ıslak kek.", commentEn: "Delicious crying cake with fresh cream and chocolate wet cake at Sehitkamil branch." },
    { name: "Cookshop (İconova)", rating: 4.4, reviewCount: 1500, area: "Şehitkamil", commentTr: "İconova şubesinde bol çikolata soslu dondurmalı sıcak ıslak kek keyfi.", commentEn: "Warm wet cake enjoyment with rich chocolate sauce and ice cream at Iconova branch." }
  ],
  "Hamburger Menü": [
    { name: "Burger No7 Gaziantep", rating: 4.5, reviewCount: 1400, area: "Şehitkamil", commentTr: "Şehitkamil'de el yapımı köftesi ve çıtır patatesiyle doyurucu burger.", commentEn: "Satisfying burger with handmade patty and crispy fries in Sehitkamil." },
    { name: "Ohannes Burger (İbrahimli)", rating: 4.4, reviewCount: 920, area: "İbrahimli", commentTr: "İbrahimli şubesinde gurme brioche ekmekli sulu burger menüleri.", commentEn: "Juicy burger menus with gourmet brioche bun at Ibrahimli branch." },
    { name: "Bready Burger Gaziantep", rating: 4.3, reviewCount: 850, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde özel soslu ve çıtır patatesli doyurucu burger.", commentEn: "Satisfying burger with special sauce and crispy fries in Sehitkamil region." }
  ],
  "İçli Köfte": [
    { name: "İmam Çağdaş (Kızartma İçli Köfte)", rating: 4.7, reviewCount: 12000, area: "Şahinbey", commentTr: "Tarihi şubede çıtır fıstıklı ve kıymalı nefis kızarmış içli köfte.", commentEn: "Delicious fried stuffed meatballs with crispy pistachios and minced meat at historic branch." },
    { name: "Aşina Gaziantep Mutfağı", rating: 4.5, reviewCount: 2200, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde yöresel usulle haşlanmış bol kıymalı içli köfte.", commentEn: "Boiled stuffed meatballs with rich minced meat in local style at Sehitkamil branch." },
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.4, reviewCount: 1800, area: "Şahinbey", commentTr: "Şahinbey şubesinde çıtır ve sıcak servis edilen yöresel içli köfte tabağı.", commentEn: "Yore style stuffed meatball plate served crispy and hot at Sahinbey branch." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mantı Evi (Gaziantep)", rating: 4.3, reviewCount: 650, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde kat kat ince yufka arasına kıymalı sos ve sarımsaklı yoğurt.", commentEn: "Garlic yogurt and minced meat sauce between thin layers of flatbread in Sehitkamil region." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.2, reviewCount: 540, area: "Şahinbey", commentTr: "Şahinbey şubesinde günlük taze hazırlanan sıcak Kayseri yağlaması.", commentEn: "Hot Kayseri yaglama prepared fresh daily at Sahinbey branch." },
    { name: "Şefin Mutfağı Gaziantep", rating: 4.3, reviewCount: 480, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde ev yemeği lezzetinde sunulan nefis yoğurtlu yağlama.", commentEn: "Delicious yaglama with yogurt served in home-cooked taste at Sehitkamil branch." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Kadir Usta Lahmacun & Pide Salonu", rating: 4.5, reviewCount: 2900, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde taş fırından tereyağlı çıtır kavurmalı kaşarlı pide.", commentEn: "Crispy buttered roasted beef kashar flatbread from stone oven at Sehitkamil branch." },
    { name: "Çıtır Pide & Lahmacun", rating: 4.3, reviewCount: 950, area: "Şahinbey", commentTr: "Şahinbey bölgesinde çıtır hamurlu ve sıcak kavurmalı kaşarlı pide keyfi.", commentEn: "Crispy flatbread enjoyment with hot roasted beef and kashar in Sahinbey region." },
    { name: "Akşam Simit & Pide Salonu", rating: 4.4, reviewCount: 3800, area: "Şehitkamil", commentTr: "Gaziantep'in köklü salonunda odun ateşinde nefis kavurmalı pide.", commentEn: "Delicious roasted beef flatbread baked over wood fire at Gaziantep's long-established salon." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Tostçu Erol", rating: 4.3, reviewCount: 8200, area: "Şahinbey", commentTr: "Sosyal medyada meşhur tostçudan bol malzemeli efsanevi tost çeşitleri.", commentEn: "Legendary toast varieties with rich ingredients from the famous toast maker on social media." },
    { name: "Kumrucu Şevki (Gaziantep Şubesi)", rating: 4.4, reviewCount: 1500, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde taze İzmir kumrusu ve sıcak kaşar erimesi keyfi.", commentEn: "Enjoyment of fresh Izmir kumru and melted hot kashar at Sehitkamil branch." },
    { name: "Tostçu Mehmet (Gaziantep)", rating: 4.2, reviewCount: 880, area: "Şehitkamil", commentTr: "Şehitkamil'de pratik ve bol salamlı kaşarlı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with salami and kashar in Sehitkamil." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Saklı Bahçe Balık Restoran (Tava Bölümü)", rating: 4.4, reviewCount: 1200, area: "Şehitkamil", commentTr: "Şehitkamil'de bahçe ortamında sıcak tarator soslu çıtır midye tava.", commentEn: "Crispy fried mussels with warm tarator sauce in garden setting in Sehitkamil." },
    { name: "Okyanus Balık Evi", rating: 4.3, reviewCount: 950, area: "Şahinbey", commentTr: "Şahinbey bölgesinde taze deniz ürünleri eşliğinde sıcak midye tava.", commentEn: "Hot fried mussels accompanied by fresh seafood in Sahinbey region." },
    { name: "Midyeci Ahmet (Gaziantep)", rating: 4.2, reviewCount: 820, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde çıtır şiş midye tava ve sarımsaklı tarator sosu keyfi.", commentEn: "Crispy skewered fried mussels and garlicky tarator sauce enjoyment at Sehitkamil branch." }
  ],
  "Profiterol": [
    { name: "Orkide Pastanesi", rating: 4.6, reviewCount: 5200, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde yoğun çikolata soslu geleneksel taze profiterol topları.", commentEn: "Traditional fresh profiterole balls with dense chocolate sauce at Sehitkamil branch." },
    { name: "Akşam Pastaneleri", rating: 4.4, reviewCount: 3800, area: "Şahinbey", commentTr: "Şahinbey bölgesinde nostaljik ortamda sunulan leziz kremalı profiterol.", commentEn: "Delicious cream profiterole served in nostalgic environment in Sahinbey region." },
    { name: "Erçelebi Kömürde Kadayıf (Profiterol ve Tatlı Reyonu)", rating: 4.5, reviewCount: 4200, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde çıtır hamurlu çikolata soslu nefis profiterol.", commentEn: "Delicious profiterole with crispy dough and chocolate sauce at Sehitkamil branch." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Ahmet Usta", rating: 4.4, reviewCount: 1500, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde sacda pişen çıtır patatesli nefis cızbız köfte.", commentEn: "Delicious grilled meatballs with crispy potatoes cooked on iron plate at Sehitkamil branch." },
    { name: "Tarihi Eminönü Köftecisi (Gaziantep)", rating: 4.3, reviewCount: 920, area: "Şahinbey", commentTr: "Şahinbey bölgesinde hızlı servis edilen esnaf usulü köfte patates menüsü.", commentEn: "Artisan style meatball and potato menu served fast in Sahinbey region." },
    { name: "Meşhur Ankara Köftecisi", rating: 4.2, reviewCount: 880, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde taze yeşillikler eşliğinde sıcak köfte patates.", commentEn: "Hot meatballs and potatoes accompanied by fresh greens in Sehitkamil region." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Tatbak Döner", rating: 4.4, reviewCount: 6800, area: "Şahinbey", commentTr: "Şahinbey şubesinde bol soslu Hatay usulü çıtır tavuk döner dürümü.", commentEn: "Hatay style crispy chicken doner wrap with rich sauce at Sahinbey branch." },
    { name: "Efesos Döner Gaziantep", rating: 4.2, reviewCount: 1900, area: "Şehitkamil", commentTr: "Şehitkamil şubesinde lavaşa sarılmış patatesli soslu Hatay dürümü.", commentEn: "Sauced Hatay wrap with potatoes wrapped in flatbread at Sehitkamil branch." },
    { name: "Beğendik Döner", rating: 4.3, reviewCount: 2200, area: "Şehitkamil", commentTr: "Şehitkamil bölgesinde pratik ve hızlı servis edilen leziz soslu Hatay dürümü.", commentEn: "Delicious sauced Hatay wrap served practically and fast in Sehitkamil region." }
  ]
};

export const CHEAT_ESKISEHIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa İskender Kebapçısı (Kanatlı)", rating: 4.4, reviewCount: 1550, area: "Kanatlı", commentTr: "Kanatlı AVM yakınında bol tereyağlı ve leziz İskender.", commentEn: "Delicious Iskender with plenty of butter near Kanatli Mall." },
    { name: "Kebapçı Abdülkadir", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Tepebaşı'nda odun ateşinde dönerli harika İskender kebap.", commentEn: "Great Iskender kebab with wood-fired doner in Tepebasi." },
    { name: "Meşhur Eskişehir Kebapçısı", rating: 4.3, reviewCount: 980, area: "Odunpazarı", commentTr: "Odunpazarı'nda çıtır pideli ve lezzetli İskender porsiyonu.", commentEn: "Tasty Iskender portion with crispy pide bread in Odunpazari." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Kebapçı Hacı Hasan", rating: 4.5, reviewCount: 1400, area: "Tepebaşı", commentTr: "Tepebaşı'nda el kıymasıyla hazırlanan acılı kebap dürüm.", commentEn: "Spicy kebab wrap prepared with hand-minced meat in Tepebasi." },
    { name: "Dürümcü Ümit", rating: 4.4, reviewCount: 1650, area: "Merkez", commentTr: "Merkezde hızlı servis edilen bol malzemeli sıcak dürüm keyfi.", commentEn: "Satisfying warm wrap with rich ingredients served fast in the center." },
    { name: "Adana Kebap Evi (Eskişehir)", rating: 4.3, reviewCount: 850, area: "Odunpazarı", commentTr: "Odunpazarı'nda köz biber eşliğinde sunulan Adana dürüm.", commentEn: "Adana wrap served with roasted peppers in Odunpazari." }
  ],
  "Beyti Sarma": [
    { name: "Kasap Osman Restoran", rating: 4.5, reviewCount: 1900, area: "Tepebaşı", commentTr: "Sarımsaklı yoğurt ve tereyağlı enfes fırınlanmış beyti sarma.", commentEn: "Delicious baked beyti sarma with garlic yogurt and butter." },
    { name: "Fahrettin Usta", rating: 4.6, reviewCount: 1300, area: "Odunpazarı", commentTr: "Odunpazarı'nın ünlü ustasından çıtır yufkaya sarılı nefis beyti.", commentEn: "Delicious beyti wrapped in crispy flatbread from Odunpazari's famous master." },
    { name: "Çadır Restoran", rating: 4.3, reviewCount: 780, area: "Tepebaşı", commentTr: "Köz ateşinde pişirilen bol soslu beyti sarma porsiyonu.", commentEn: "Portion of beyti sarma with rich sauce cooked over charcoal." }
  ],
  "Mantı": [
    { name: "Acıktım Kafe (Soslu Mantı)", rating: 4.4, reviewCount: 3100, area: "Tepebaşı", commentTr: "Yoğurtlu ve özel salçalı soslu nefis ev mantısı lezzeti.", commentEn: "Delicious homemade manti flavor with yogurt and special tomato paste sauce." },
    { name: "Kırım Tatar Kültür Evi (Sorpa & Mantı)", rating: 4.6, reviewCount: 1550, area: "Odunpazarı", commentTr: "Tarihi konakta geleneksel Tatar mantısı ve leziz çorbalar.", commentEn: "Traditional Tatar manti and delicious soups in the historical mansion." },
    { name: "Papağan Çibörek Evi (Mantı Çeşitleri)", rating: 4.5, reviewCount: 7200, area: "Merkez", commentTr: "Çiböreğin yanında el açması mantı seçenekleri de çok lezzetli.", commentEn: "Hand-rolled manti options alongside ciborek are also very tasty." }
  ],
  "Kokoreç": [
    { name: "Kokoreççi Hacı", rating: 4.6, reviewCount: 2800, area: "Merkez", commentTr: "Eskişehir'in efsanevi kokoreççisinden çıtır ve bol baharatlı kokoreç.", commentEn: "Crispy and highly spiced kokorecc from Eskisehir's legendary vendor." },
    { name: "Şampiyon Kokoreç (Eskişehir)", rating: 4.2, reviewCount: 1450, area: "Tepebaşı", commentTr: "Hızlı ve sıcak servis edilen klasik ekmek arası çıtır kokoreç.", commentEn: "Classic crispy kokorecc in bread served hot and fast." },
    { name: "Kokoreççi Şaban Usta", rating: 4.5, reviewCount: 980, area: "Odunpazarı", commentTr: "Odunpazarı'nda gece geç saatlerin vazgeçilmez çıtır kokoreç adresi.", commentEn: "Indispensable late night crispy kokorecc address in Odunpazari." }
  ],
  "Kumpir": [
    { name: "Patatos Eskişehir", rating: 4.3, reviewCount: 5500, area: "Merkez", commentTr: "Merkezde bol meze barı ile hazırlanan dev kumpir patatesi.", commentEn: "Giant baked potato kumpir prepared with rich appetizer bar in the center." },
    { name: "Kumpir Dünyası (Espark AVM)", rating: 4.1, reviewCount: 920, area: "Espark", commentTr: "Espark AVM içinde tereyağlı ve kaşarlı doyurucu kumpir keyfi.", commentEn: "Filling kumpir enjoyment with butter and kashar inside Espark Mall." },
    { name: "Kıtır Kumpir (Eskişehir)", rating: 4.2, reviewCount: 880, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde taze fırınlanmış soslu ve mezeli kumpir.", commentEn: "Fresh baked kumpir with sauces and appetizers at Tepebasi branch." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Gaziantep Baklavacısı (İki Eylül)", rating: 4.5, reviewCount: 2400, area: "Merkez", commentTr: "İki Eylül caddesinde çıtır çıtır bol fıstıklı baklava dilimleri.", commentEn: "Crispy baklava slices with plenty of pistachios on Iki Eylul street." },
    { name: "Baklavacı Şemsettin Eskişehir", rating: 4.4, reviewCount: 1650, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze fıstıklı baklava ve kadayıfı en uygun fiyata sunan yer.", commentEn: "The place offering fresh pistachio baklava and kadayif at the most affordable price in Tepebasi." },
    { name: "Hacıbaba Baklava Eskişehir", rating: 4.3, reviewCount: 1100, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde geleneksel çıtır baklava ve sıcak fıstıklı katmer.", commentEn: "Traditional crispy baklava and warm pistachio katmer at Odunpazari branch." }
  ],
  "Hatay Künefesi": [
    { name: "Meşhur Künefeci Ömer Usta", rating: 4.6, reviewCount: 2150, area: "Tepebaşı", commentTr: "Közde yavaşça pişen bol tuzsuz peynirli ve çıtır sıcak künefe.", commentEn: "Crispy warm kunefe with plenty of unsalted cheese slowly cooked on coal." },
    { name: "Antakya Künefe Evi (Eskişehir)", rating: 4.4, reviewCount: 1300, area: "Merkez", commentTr: "Merkezde Hatay usulü antep fıstıklı çıtır künefe keyfi.", commentEn: "Hatay style crispy kunefe enjoyment with Antep pistachios in the center." },
    { name: "Künefe Han Eskişehir", rating: 4.3, reviewCount: 920, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde bol şerbetli ve taze peynirli nefis künefe.", commentEn: "Delicious kunefe with rich syrup and fresh cheese at Odunpazari branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "Walker's Coffee House", rating: 4.5, reviewCount: 1850, area: "Tepebaşı", commentTr: "Akışkan sıcak çikolatalı nefis sufle ve nitelikli kahve çeşitleri.", commentEn: "Delicious fluid hot chocolate souffle and specialty coffees." },
    { name: "Hey Joe Coffee Co.", rating: 4.6, reviewCount: 1420, area: "Tepebaşı", commentTr: "Tepebaşı'nda çikolata soslu efsanevi San Sebastian cheesecake dilimi.", commentEn: "Legendary San Sebastian cheesecake slice with chocolate sauce in Tepebasi." },
    { name: "Viyana Kahvesi Eskişehir", rating: 4.4, reviewCount: 980, area: "Odunpazarı", commentTr: "Tarihi Odunpazarı evleri yakınında çikolata şelaleli San Sebastian keyfi.", commentEn: "San Sebastian enjoyment with chocolate waterfall near historic Odunpazari houses." }
  ],
  "Tantuni": [
    { name: "Mersinli Tantunici Yaşar Usta (Eskişehir)", rating: 4.5, reviewCount: 2900, area: "Tepebaşı", commentTr: "İncecik lavaşa sarılmış bol baharatlı Mersin usulü biftek tantuni.", commentEn: "Aegean style highly spiced Mersin beef tantuni wrapped in thin flatbread." },
    { name: "Göksel Tantuni (Eskişehir Şubesi)", rating: 4.4, reviewCount: 1600, area: "Merkez", commentTr: "Merkezde sacda pişen sıcak lavaş tavuk ve et tantuni çeşitleri.", commentEn: "Warm chicken and beef tantuni varieties cooked on iron plate in the center." },
    { name: "Memo Tantuni Eskişehir", rating: 4.2, reviewCount: 950, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde hızlı servis edilen leziz yoğurtlu tantuni.", commentEn: "Delicious yogurt tantuni served fast at Odunpazari branch." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "Mazlum Süt Evi", rating: 4.6, reviewCount: 2120, area: "Haller", commentTr: "Haller gençlik merkezinde nostaljik ve leziz çikolatalı ıslak kek.", commentEn: "Nostalgic and delicious chocolate wet cake at Haller youth center." },
    { name: "Cookshop (Espark)", rating: 4.3, reviewCount: 2800, area: "Espark", commentTr: "Espark şubesinde yoğun çikolata soslu akışkan ıslak kek keyfi.", commentEn: "Fluid wet cake enjoyment with dense chocolate sauce at Espark branch." },
    { name: "BigChefs (Cassaba Modern)", rating: 4.4, reviewCount: 2200, area: "Tepebaşı", commentTr: "Cassaba Modern şubesinde dondurma eşliğinde sunulan leziz ıslak kek.", commentEn: "Delicious wet cake served with ice cream at Cassaba Modern branch." }
  ],
  "Hamburger Menü": [
    { name: "Burger No7 Eskişehir", rating: 4.5, reviewCount: 1420, area: "Tepebaşı", commentTr: "Tepebaşı'nda el yapımı hamburger ekmeği ve sulu burger köftesi menüsü.", commentEn: "Satisfying burger menu with handmade hamburger bun and juicy patty in Tepebasi." },
    { name: "Ohannes Burger (Eskişehir)", rating: 4.4, reviewCount: 2650, area: "Merkez", commentTr: "Merkezde çeşitli özel soslarla hazırlanan doyurucu hamburger menüleri.", commentEn: "Satisfying burger menus prepared with various special sauces in the center." },
    { name: "Bready Burger Eskişehir", rating: 4.3, reviewCount: 880, area: "Tepebaşı", commentTr: "Tepebaşı bölgesinde brioche ekmekli ve çıtır patatesli leziz burger menüsü.", commentEn: "Delicious burger menu with brioche bun and crispy fries in Tepebasi region." }
  ],
  "İçli Köfte": [
    { name: "Tarihi Odunpazarı Ev Yemekleri", rating: 4.5, reviewCount: 1300, area: "Odunpazarı", commentTr: "Tarihi mahallede ev yapımı tadında çıtır kızarmış leziz içli köfte.", commentEn: "Delicious fried stuffed meatballs tasting like home food in the historic district." },
    { name: "Trakya Lokantası", rating: 4.4, reviewCount: 950, area: "Tepebaşı", commentTr: "Tepebaşı esnaf lokantasından haşlanmış bol kıymalı geleneksel içli köfte.", commentEn: "Traditional boiled stuffed meatballs with rich minced meat from Tepebasi local diner." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.3, reviewCount: 520, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde çıtır dış kabuklu ve bol cevizli leziz içli köfte.", commentEn: "Delicious stuffed meatballs with crispy outer crust and walnuts at Tepebasi branch." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mantı Evi (Eskişehir)", rating: 4.3, reviewCount: 650, area: "Tepebaşı", commentTr: "Tepebaşı'nda kat kat ince lavaş arasına kıymalı sos ve sarımsaklı yoğurt.", commentEn: "Garlic yogurt and minced meat sauce between thin layers of flatbread in Tepebasi." },
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 890, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde günlük taze hazırlanan sıcak Kayseri yağlaması.", commentEn: "Hot Kayseri yaglama prepared fresh daily at Odunpazari branch." },
    { name: "Şehir Lokantası", rating: 4.2, reviewCount: 480, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği lezzetinde sunulan nefis yoğurtlu yağlama.", commentEn: "Delicious yaglama with yogurt served in home-cooked taste in Tepebasi." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Meşhur Karadeniz Pidecisi (Eskişehir)", rating: 4.5, reviewCount: 1950, area: "Tepebaşı", commentTr: "Karadeniz usulü bol tereyağlı ve bol kavurmalı kaşarlı açık pide.", commentEn: "Black Sea style open flatbread with butter, rich roasted beef, and kashar cheese." },
    { name: "Bafra Pide Salonu Eskişehir", rating: 4.4, reviewCount: 1100, area: "Merkez", commentTr: "Merkezde taş fırından çıtır çıkan tereyağlı kapalı Bafra usulü pide.", commentEn: "Buttered closed Bafra style roasted beef flatbread fresh out of stone oven in the center." },
    { name: "Karadeniz Pide Evi", rating: 4.3, reviewCount: 650, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde çıtır hamurlu ve sıcak kavurmalı kaşarlı pide keyfi.", commentEn: "Crispy flatbread enjoyment with hot roasted beef and kashar at Odunpazari branch." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Kumrucu Şevki (Eskişehir Şubesi)", rating: 4.4, reviewCount: 2100, area: "Tepebaşı", commentTr: "Tepebaşı'nda bol malzemeli, sucuklu, salamlı ve erimiş peynirli gerçek kumru.", commentEn: "Real kumru with rich ingredients, sausage, salami, and melted cheese in Tepebasi." },
    { name: "Tostçu Mehmet (Eskişehir)", rating: 4.3, reviewCount: 980, area: "Merkez", commentTr: "Merkezde bol malzemeli ve rus salatalı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad in the center." },
    { name: "Çeşme Kumrusu (Eskişehir)", rating: 4.2, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze kumru ekmeğinde sucuk ve kaşar erimesi keyfi.", commentEn: "Enjoyment of sausage and melted kashar in fresh kumru bread in Tepebasi." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Karadeniz Balık Evi (Tava Bölümü)", rating: 4.4, reviewCount: 1600, area: "Tepebaşı", commentTr: "Tepebaşı sahilinde tarator soslu çıtır şiş midye tava keyfi.", commentEn: "Enjoyment of crispy skewered fried mussels with tarator sauce in Tepebasi." },
    { name: "Mezgit Restoran", rating: 4.5, reviewCount: 1900, area: "Odunpazarı", commentTr: "Odunpazarı bölgesinde taze deniz ürünleri eşliğinde sıcak midye tava.", commentEn: "Hot fried mussels accompanied by fresh seafood in Odunpazari region." },
    { name: "Midyeci Ahmet Eskişehir", rating: 4.3, reviewCount: 1200, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde çıtır midye tava ve sarımsaklı tarator sosu.", commentEn: "Crispy fried mussels and garlicky tarator sauce at Tepebasi branch." }
  ],
  "Profiterol": [
    { name: "Mazlum Süt Evi", rating: 4.6, reviewCount: 2120, area: "Haller", commentTr: "Haller gençlik merkezinde yoğun çikolata soslu geleneksel profiterol.", commentEn: "Traditional profiterole with dense chocolate sauce at Haller youth center." },
    { name: "Gezi Pastanesi Eskişehir", rating: 4.4, reviewCount: 980, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde taze kremalı çıtır profiterol topları.", commentEn: "Crispy profiterole balls with fresh cream at Tepebasi branch." },
    { name: "Balkan Pastanesi", rating: 4.3, reviewCount: 750, area: "Odunpazarı", commentTr: "Odunpazarı'nda çay saatlerinin vazgeçilmez leziz kremalı profiterolü.", commentEn: "Indispensable delicious cream profiterole of tea hours in Odunpazari." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Ali", rating: 4.4, reviewCount: 1200, area: "Tepebaşı", commentTr: "Tepebaşı merkezinde katkısız kıymadan cızbız köfte ve çıtır patates.", commentEn: "Grilled meatballs and crispy potatoes from pure minced meat in Tepebasi center." },
    { name: "Tarihi Köfteci Muammer Usta", rating: 4.5, reviewCount: 1600, area: "Odunpazarı", commentTr: "Odunpazarı şubesinde sıcak ve çıtır servis edilen cızbız köfte tabağı.", commentEn: "Grilled meatball plate served hot and crispy at Odunpazari branch." },
    { name: "Meşhur Balkan Köftecisi", rating: 4.3, reviewCount: 750, area: "Tepebaşı", commentTr: "Tepebaşı'nda yeşillikler ve köz biberle sunulan Balkan usulü köfte.", commentEn: "Balkan style meatballs served with greens and roasted pepper in Tepebasi." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Öncü Döner", rating: 4.2, reviewCount: 2800, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde bol özel soslu Hatay usulü tavuk dürümü.", commentEn: "Hatay style chicken wrap with rich special sauce at Tepebasi branch." },
    { name: "Katık Döner Eskişehir", rating: 4.1, reviewCount: 2200, area: "Merkez", commentTr: "Merkezde lavaşa sarılmış çıtır patatesli Hatay dürümü.", commentEn: "Crispy patates Hatay wrap wrapped in flatbread in the center." },
    { name: "Hot Döner", rating: 4.1, reviewCount: 1420, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde pratik ve hızlı servis edilen leziz soslu Hatay dürümü.", commentEn: "Delicious sauced Hatay wrap served practically and fast at Tepebasi branch." }
  ]
};

export const CHEAT_ADANA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "İskender Kebap": [
    { name: "Bursa İskender Kebapçısı (Ziyapaşa)", rating: 4.4, reviewCount: 1450, area: "Ziyapaşa", commentTr: "Ziyapaşa şubesinde bol tereyağlı ve leziz Bursa İskender döneri.", commentEn: "Delicious Bursa Iskender doner with plenty of butter at Ziyapasa branch." },
    { name: "Kebapçı Emin Usta (Adana Şubesi)", rating: 4.3, reviewCount: 880, area: "Seyhan", commentTr: "Seyhan'da bakır tepside tereyağlı sıcak İskender kebap.", commentEn: "Hot Iskender kebab with butter served in a copper platter in Seyhan." },
    { name: "Hacı Arif Bey Lokantası", rating: 4.5, reviewCount: 1150, area: "Çukurova", commentTr: "Çukurova şubesinde nezih ortamda sunulan tereyağlı enfes İskender.", commentEn: "Delicious Iskender with butter served in a decent atmosphere at Cukurova branch." }
  ],
  "Adana / Urfa Kebap Dürüm": [
    { name: "Kebapçı Mesut", rating: 4.7, reviewCount: 3900, area: "Seyhan", commentTr: "Tarihi Seyhan bölgesinde el kıyması tescilli Adana kebap dürüm.", commentEn: "Registered hand-minced Adana kebab wrap in the historic Seyhan region." },
    { name: "Cihangir Kebap & Kaburga", rating: 4.6, reviewCount: 2800, area: "Çukurova", commentTr: "Çukurova'da taze yeşillikler ve közlenmiş biberli nefis dürüm.", commentEn: "Delicious wrap with fresh greens and roasted pepper in Cukurova." },
    { name: "Dürümcü Mahmut", rating: 4.4, reviewCount: 1850, area: "Seyhan", commentTr: "Hızlı servis edilen, bol baharatlı ve sıcak klasik Adana dürüm.", commentEn: "Classic Adana wrap served hot, fast, and highly spiced." }
  ],
  "Beyti Sarma": [
    { name: "Onbaşılar Kebap", rating: 4.6, reviewCount: 3100, area: "Seyhan", commentTr: "Seyhan baraj gölü manzaralı nezih ortamda tereyağlı beyti sarma.", commentEn: "Buttered beyti sarma in a decent atmosphere with Seyhan dam lake views." },
    { name: "Park Zirve Restoran", rating: 4.5, reviewCount: 2800, area: "Seyhan", commentTr: "Göl manzaralı fırınlanmış soslu ve sarımsaklı yoğurtlu beyti.", commentEn: "Baked beyti with sauce and garlic yogurt overlooking the lake view." },
    { name: "Eyvan Kebap", rating: 4.4, reviewCount: 1650, area: "Turgut Özal", commentTr: "Turgut Özal şubesinde çıtır yufkaya sarılmış bol tereyağlı beyti sarma.", commentEn: "Buttered beyti sarma wrapped in crispy flatbread at Turgut Ozal branch." }
  ],
  "Mantı": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 520, area: "Seyhan", commentTr: "Seyhan'da el açması ince hamurlu, bol yoğurtlu sıcak mantı keyfi.", commentEn: "Enjoyment of hot handmade thin dough manti with rich yogurt in Seyhan." },
    { name: "Seyhan Mantı Evi", rating: 4.5, reviewCount: 410, area: "Seyhan", commentTr: "Seyhan'da tereyağlı ve özel salçalı soslu nefis ev yapımı mantı.", commentEn: "Delicious homemade manti with butter and special tomato paste sauce in Seyhan." },
    { name: "Çukurova Mantı Dünyası", rating: 4.3, reviewCount: 320, area: "Çukurova", commentTr: "Çukurova'da çeşitli soslarla hazırlanan taze ve doyurucu mantı tabağı.", commentEn: "Fresh and satisfying manti plate prepared with various sauces in Cukurova." }
  ],
  "Kokoreç": [
    { name: "Kokoreççi Baki Usta (Adana)", rating: 4.6, reviewCount: 1950, area: "Seyhan", commentTr: "Seyhan'da Adana'nın en meşhur çıtır ve bol baharatlı uykuluklu kokoreçi.", commentEn: "The most famous crispy and spiced kokorecc with sweetbread in Seyhan." },
    { name: "Şampiyon Kokoreç (Turgut Özal)", rating: 4.2, reviewCount: 1200, area: "Turgut Özal", commentTr: "Turgut Özal şubesinde hızlı servis edilen sıcak ekmek arası kokoreç.", commentEn: "Hot kokorecc in bread served fast at Turgut Ozal branch." },
    { name: "Kokoreççi Erkan", rating: 4.5, reviewCount: 820, area: "Çukurova", commentTr: "Çukurova'da gece geç saatlerin vazgeçilmez çıtır kokoreç adresi.", commentEn: "Indispensable late night crispy kokorecc address in Cukurova." }
  ],
  "Kumpir": [
    { name: "Patatos Adana", rating: 4.3, reviewCount: 3900, area: "Seyhan", commentTr: "Seyhan'da bol meze seçenekleri ile hazırlanan devasa kumpir patatesi.", commentEn: "Giant baked potato kumpir prepared with rich appetizer options in Seyhan." },
    { name: "Kumpir Dünyası (M1 Adana)", rating: 4.1, reviewCount: 980, area: "M1 Adana", commentTr: "M1 AVM içinde tereyağlı ve bol malzemeli doyurucu kumpir keyfi.", commentEn: "Filling kumpir enjoyment with butter and rich ingredients inside M1 Mall." },
    { name: "Turgut Özal Kumpir Stantları", rating: 4.2, reviewCount: 850, area: "Turgut Özal", commentTr: "Turgut Özal bulvarında taze fırınlanmış soslu ve mezeli kumpir.", commentEn: "Fresh baked kumpir with sauces and appetizers on Turgut Ozal boulevard." }
  ],
  "Gaziantep Katmeri / Baklava": [
    { name: "Baklavacı Hacıbaba (Adana Şubesi)", rating: 4.5, reviewCount: 2100, area: "Seyhan", commentTr: "Seyhan şubesinde günlük taze gelen çıtır çıtır fıstıklı baklavalar.", commentEn: "Crispy pistachio baklavas coming fresh daily at Seyhan branch." },
    { name: "Güllüoğlu Adana", rating: 4.6, reviewCount: 1800, area: "Ziyapaşa", commentTr: "Ziyapaşa'da geleneksel çıtır baklava ve sıcak fıstıklı katmer dilimleri.", commentEn: "Traditional crispy baklava and warm pistachio katmer slices in Ziyapasa." },
    { name: "Zeugma Künefe & Katmer", rating: 4.4, reviewCount: 1200, area: "Çukurova", commentTr: "Çukurova şubesinde taş fırından sıcak çıkan çıtır katmer keyfi.", commentEn: "Enjoyment of crispy katmer fresh out of stone oven at Cukurova branch." }
  ],
  "Hatay Künefesi": [
    { name: "Meşhur Közde Künefe (Ziyapaşa)", rating: 4.6, reviewCount: 2150, area: "Ziyapaşa", commentTr: "Ziyapaşa'da köz ateşinde yavaşça pişen bol peynirli sıcak künefe.", commentEn: "Hot kunefe with plenty of cheese slowly cooked on coal in Ziyapasa." },
    { name: "Antakya Künefe Evi (Adana)", rating: 4.4, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan'da Hatay usulü antep fıstıklı çıtır künefe keyfi.", commentEn: "Hatay style crispy kunefe enjoyment with Antep pistachios in Seyhan." },
    { name: "Künefe Han Adana", rating: 4.3, reviewCount: 890, area: "Çukurova", commentTr: "Çukurova şubesinde bol şerbetli ve taze peynirli nefis künefe.", commentEn: "Delicious kunefe with rich syrup and fresh cheese at Cukurova branch." }
  ],
  "Sufle / San Sebastian Cheesecake": [
    { name: "MOC Coffee (Ziyapaşa)", rating: 4.5, reviewCount: 1650, area: "Ziyapaşa", commentTr: "Ziyapaşa şubesinde akışkan çikolatalı sufle ve nitelikli kahveler.", commentEn: "Fluid chocolate souffle and specialty coffees at Ziyapasa branch." },
    { name: "Crop Coffee Co. Adana", rating: 4.6, reviewCount: 1300, area: "Çukurova", commentTr: "Çukurova'da çikolata soslu efsanevi San Sebastian cheesecake dilimi.", commentEn: "Legendary San Sebastian cheesecake slice with chocolate sauce in Cukurova." },
    { name: "Viyana Kahvesi Adana", rating: 4.4, reviewCount: 920, area: "Seyhan", commentTr: "Seyhan şubesinde çikolata şelaleli orijinal San Sebastian keyfi.", commentEn: "Original San Sebastian enjoyment with chocolate waterfall at Seyhan branch." }
  ],
  "Tantuni": [
    { name: "Göksel Tantuni (Adana Şubesi)", rating: 4.5, reviewCount: 2800, area: "Seyhan", commentTr: "Seyhan'da sacda pişen Mersin usulü incecik lavaş biftek tantuni.", commentEn: "Mersin style thin flatbread beef tantuni cooked on iron plate in Seyhan." },
    { name: "Memo Tantuni Adana", rating: 4.3, reviewCount: 1100, area: "Çukurova", commentTr: "Çukurova'da hızlı servis edilen bol baharatlı lavaş et tantuni.", commentEn: "Highly spiced flatbread beef tantuni served fast in Cukurova." },
    { name: "Mersinli Tantunici Apo (Adana)", rating: 4.2, reviewCount: 780, area: "Seyhan", commentTr: "Seyhan şubesinde sacda sıcak pişen taze tavuk ve et tantuni çeşitleri.", commentEn: "Warm chicken and beef tantuni varieties cooked on iron plate at Seyhan branch." }
  ],
  "Islak Kek / Ağlayan Pasta": [
    { name: "Cookshop (M1 Adana)", rating: 4.3, reviewCount: 2400, area: "M1 Adana", commentTr: "M1 AVM şubesinde yoğun çikolata soslu akışkan ıslak kek keyfi.", commentEn: "Fluid wet cake enjoyment with dense chocolate sauce at M1 Mall branch." },
    { name: "Pastabahçe (Ziyapaşa)", rating: 4.5, reviewCount: 1150, area: "Ziyapaşa", commentTr: "Ziyapaşa'da taze kremalı ağlayan pasta ve çikolatalı ıslak kek.", commentEn: "Chocolate wet cake and crying cake with fresh cream in Ziyapasa." },
    { name: "BigChefs (Ziyapaşa)", rating: 4.4, reviewCount: 2100, area: "Ziyapaşa", commentTr: "Ziyapaşa şubesinde dondurma eşliğinde sunulan leziz ıslak kek.", commentEn: "Delicious wet cake served with ice cream at Ziyapasa branch." }
  ],
  "Hamburger Menü": [
    { name: "Burger No7 Adana", rating: 4.5, reviewCount: 1320, area: "Seyhan", commentTr: "Seyhan'da el yapımı hamburger ekmeği ve sulu burger köftesi menüsü.", commentEn: "Satisfying burger menu with handmade hamburger bun and juicy patty in Seyhan." },
    { name: "Ohannes Burger (Turgut Özal)", rating: 4.4, reviewCount: 2450, area: "Turgut Özal", commentTr: "Turgut Özal şubesinde çeşitli özel soslarla hazırlanan doyurucu hamburger menüleri.", commentEn: "Satisfying burger menus prepared with various special sauces at Turgut Ozal branch." },
    { name: "Bready Burger Adana", rating: 4.3, reviewCount: 780, area: "Çukurova", commentTr: "Çukurova bölgesinde brioche ekmekli ve çıtır patatesli leziz burger menüsü.", commentEn: "Delicious burger menu with brioche bun and crispy fries in Cukurova region." }
  ],
  "İçli Köfte": [
    { name: "Boğaziçi Lokantası (Ziyapaşa)", rating: 4.6, reviewCount: 1700, area: "Ziyapaşa", commentTr: "Ziyapaşa şubesinde çıtır kızarmış geleneksel leziz Adana usulü içli köfte.", commentEn: "Delicious fried traditional Adana style stuffed meatballs at Ziyapasa branch." },
    { name: "Seci Seçkin Lokantası", rating: 4.5, reviewCount: 1200, area: "Seyhan", commentTr: "Seyhan'da haşlama bol kıymalı ve cevizli geleneksel içli köfte.", commentEn: "Traditional boiled stuffed meatballs with rich minced meat and walnuts in Seyhan." },
    { name: "Seyhan Belediyesi Lezzet Durağı (İçli Köfte Reyonu)", rating: 4.4, reviewCount: 950, area: "Seyhan", commentTr: "Belediye güvencesiyle ev yapımı lezzetinde sunulan taze içli köfte.", commentEn: "Fresh stuffed meatballs in homemade taste served with municipality assurance." }
  ],
  "Kayseri Yağlaması": [
    { name: "Kayseri Mantı Evi (Adana)", rating: 4.3, reviewCount: 550, area: "Seyhan", commentTr: "Seyhan'da kat kat ince lavaş arasına kıymalı sos ve sarımsaklı yoğurt.", commentEn: "Garlic yogurt and minced meat sauce between thin layers of flatbread in Seyhan." },
    { name: "Sini Ev Yemekleri", rating: 4.4, reviewCount: 680, area: "Çukurova", commentTr: "Çukurova'da günlük taze hazırlanan sıcak Kayseri yağlaması.", commentEn: "Hot Kayseri yaglama prepared fresh daily in Cukurova." },
    { name: "Bizim Ev Yemekleri", rating: 4.2, reviewCount: 390, area: "Seyhan", commentTr: "Seyhan'da ev yemeği lezzetinde sunulan nefis yoğurtlu yağlama.", commentEn: "Delicious yaglama with yogurt served in home-cooked taste in Seyhan." }
  ],
  "Kavurmalı Kaşarlı Pide": [
    { name: "Karadeniz Pide Salonu (Adana)", rating: 4.4, reviewCount: 1150, area: "Seyhan", commentTr: "Seyhan şubesinde bol tereyağlı ve kavurmalı kaşarlı Karadeniz pidesi.", commentEn: "Black Sea style flatbread with butter, rich roasted beef, and kashar cheese in Seyhan." },
    { name: "Meşhur Bafra Pidecisi", rating: 4.5, reviewCount: 920, area: "Çukurova", commentTr: "Çukurova'da çıtır taş fırın pidesi, tereyağlı kapalı Bafra usulü.", commentEn: "Crispy stone oven flatbread, buttered closed Bafra style in Cukurova." },
    { name: "Akdeniz Pide Salonu", rating: 4.3, reviewCount: 580, area: "Seyhan", commentTr: "Seyhan şubesinde çıtır hamurlu ve sıcak kavurmalı kaşarlı pide keyfi.", commentEn: "Crispy flatbread enjoyment with hot roasted beef and kashar at Seyhan branch." }
  ],
  "Kumru / Ayvalık Tostu": [
    { name: "Kumrucu Şevki (Adana Şubesi)", rating: 4.4, reviewCount: 1850, area: "Seyhan", commentTr: "Seyhan'da bol malzemeli, sucuklu, salamlı ve erimiş peynirli gerçek İzmir kumrusu.", commentEn: "Real Izmir kumru with rich ingredients, sausage, salami, and melted cheese in Seyhan." },
    { name: "Çeşme Kumrusu (Turgut Özal)", rating: 4.3, reviewCount: 920, area: "Turgut Özal", commentTr: "Turgut Özal şubesinde taze kumru ekmeğinde sucuk ve kaşar erimesi keyfi.", commentEn: "Enjoyment of sausage and melted kashar in fresh kumru bread at Turgut Ozal branch." },
    { name: "Tostçu Mehmet (Adana)", rating: 4.2, reviewCount: 880, area: "Seyhan", commentTr: "Seyhan'da bol malzemeli ve rus salatalı çıtır Ayvalık tostu.", commentEn: "Crispy Ayvalik toast with rich ingredients and Russian salad in Seyhan." }
  ],
  "Midye Tava ve Sosu": [
    { name: "Lagos Balık Restoran (Tava Bölümü)", rating: 4.5, reviewCount: 1450, area: "Seyhan", commentTr: "Seyhan sahilinde tarator soslu çıtır şiş midye tava keyfi.", commentEn: "Enjoyment of crispy skewered fried mussels with tarator sauce in Seyhan." },
    { name: "Marina Balık Restoran", rating: 4.4, reviewCount: 1100, area: "Çukurova", commentTr: "Çukurova bölgesinde taze deniz ürünleri eşliğinde sıcak midye tava.", commentEn: "Hot fried mussels accompanied by fresh seafood in Cukurova region." },
    { name: "Midyeci Ahmet Adana", rating: 4.3, reviewCount: 980, area: "Seyhan", commentTr: "Seyhan şubesinde çıtır midye tava ve sarımsaklı tarator sosu.", commentEn: "Crispy fried mussels and garlicky tarator sauce at Seyhan branch." }
  ],
  "Profiterol": [
    { name: "Maden Pastanesi", rating: 4.5, reviewCount: 1150, area: "Ziyapaşa", commentTr: "Ziyapaşa'da yoğun çikolata soslu geleneksel profiterol tatlısı.", commentEn: "Traditional profiterole dessert with dense chocolate sauce in Ziyapasa." },
    { name: "Kuğu Pastanesi (Adana Şubesi)", rating: 4.4, reviewCount: 850, area: "Seyhan", commentTr: "Seyhan şubesinde taze kremalı ve çıtır profiterol topları.", commentEn: "Crispy profiterole balls with fresh cream at Seyhan branch." },
    { name: "Reyhan Pastanesi (Adana)", rating: 4.3, reviewCount: 680, area: "Çukurova", commentTr: "Çukurova'da çay saatlerinin vazgeçilmez leziz kremalı profiterolü.", commentEn: "Indispensable delicious cream profiterole of tea hours in Cukurova." }
  ],
  "Cızbız Köfte ve Patates Kızartması": [
    { name: "Köfteci Ahmet Usta", rating: 4.4, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan merkezinde katkısız kıymadan cızbız köfte ve çıtır patates.", commentEn: "Grilled meatballs and crispy potatoes from pure minced meat in Seyhan center." },
    { name: "Tarihi Eminönü Köftecisi (Adana)", rating: 4.3, reviewCount: 850, area: "Seyhan", commentTr: "Seyhan bölgesinde hızlı servis edilen esnaf usulü köfte patates menüsü.", commentEn: "Artisan style meatball and potato menu served fast in Seyhan region." },
    { name: "Meşhur Ankara Köftecisi", rating: 4.2, reviewCount: 720, area: "Çukurova", commentTr: "Çukurova bölgesinde taze yeşillikler eşliğinde sıcak köfte patates.", commentEn: "Hot meatballs and potatoes accompanied by fresh greens in Cukurova region." }
  ],
  "Soslu Hatay Dürümü": [
    { name: "Öncü Döner", rating: 4.2, reviewCount: 2600, area: "Seyhan", commentTr: "Seyhan şubesinde bol özel soslu Hatay usulü tavuk dürümü.", commentEn: "Hatay style chicken wrap with rich special sauce at Seyhan branch." },
    { name: "Katık Döner Adana", rating: 4.1, reviewCount: 1950, area: "Çukurova", commentTr: "Çukurova'da lavaşa sarılmış çıtır patatesli Hatay dürümü.", commentEn: "Crispy patates Hatay wrap wrapped in flatbread in Çukurova." },
    { name: "Hot Döner", rating: 4.1, reviewCount: 1200, area: "Seyhan", commentTr: "Seyhan şubesinde pratik ve hızlı servis edilen leziz soslu Hatay dürümü.", commentEn: "Delicious sauced Hatay wrap served practically and fast at Seyhan branch." }
  ]
};

export const ECONOMIC_ISTANBUL_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Frango Döner", rating: 4.3, reviewCount: 1420, area: "Beşiktaş", commentTr: "Beşiktaş'ta farklı sos alternatifleriyle ekonomik ve doyurucu tavuk dürüm.", commentEn: "Affordable and satisfying chicken wrap with different sauce options in Besiktas." },
    { name: "Dönerci Sadık Usta", rating: 4.5, reviewCount: 980, area: "Aksaray", commentTr: "Aksaray'da çıtır lavaş arasında bol soslu geleneksel tavuk dürüm.", commentEn: "Traditional chicken wrap with rich sauce between crispy flatbread in Aksaray." },
    { name: "Katık Döner", rating: 4.1, reviewCount: 2100, area: "Kadıköy", commentTr: "Kadıköy şubesinde patatesli ve bol soslu Hatay usulü doyurucu dürüm.", commentEn: "Satisfying Hatay style wrap with fries and rich sauce at Kadikoy branch." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Tarihi Unkapanı Pilavcısı", rating: 4.4, reviewCount: 2900, area: "Unkapanı", commentTr: "Unkapanı'nda geceleri de açık, tereyağlı ve bol tavuklu nohutlu pilav.", commentEn: "Buttered chickpea rice with rich chicken, open at nights in Unkapani." },
    { name: "Baruthane Pilavcısı", rating: 4.2, reviewCount: 3900, area: "Şişli", commentTr: "Şişli'de çeşitli turşularla sunulan bol porsiyonlu tavuklu pilav.", commentEn: "Generous portion chicken rice served with various pickles in Sisli." },
    { name: "Meşhur Tahtakale Pilavcısı", rating: 4.3, reviewCount: 1150, area: "Eminönü", commentTr: "Eminönü esnafının vazgeçilmez hızlı ve bütçe dostu pilav adresi.", commentEn: "Indispensable fast and budget friendly rice address for Eminonu tradesmen." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Mustafa (Seyyar Usulü)", rating: 4.5, reviewCount: 680, area: "Karaköy", commentTr: "Karaköy'de közde pişen baharatlı seyyar tarzı leziz köfte ekmek.", commentEn: "Delicious street style grilled spiced meatball sandwich in Karakoy." },
    { name: "Tarihi Eminönü Köftecisi", rating: 4.3, reviewCount: 1100, area: "Eminönü", commentTr: "Eminönü'nde hızlı servis edilen bütçe dostu klasik köfte patates.", commentEn: "Budget friendly classic meatball and potato sandwich served fast in Eminonu." },
    { name: "Köfteci Arnavut", rating: 4.6, reviewCount: 1850, area: "Fatih", commentTr: "Fatih'te çıtır yarım ekmek arasında geleneksel ve sulu köfteler.", commentEn: "Traditional and juicy meatballs in crispy half bread in Fatih." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Halil Lahmacun", rating: 4.7, reviewCount: 4800, area: "Kadıköy", commentTr: "Kadıköy'de çıtır çıtır lahmacun ve sıcak mercimek çorbası.", commentEn: "Crispy lahmacun and warm lentil soup in Kadikoy." },
    { name: "Borsam Taşfırın Lahmacun", rating: 4.6, reviewCount: 3500, area: "Kadıköy", commentTr: "Kadıköy şubesinde ince hamurlu bol malzemeli lahmacun menüsü.", commentEn: "Thin dough lahmacun menu with rich ingredients at Kadikoy branch." },
    { name: "Çıtır Lahmacun Salonu", rating: 4.2, reviewCount: 780, area: "Fatih", commentTr: "Fatih'te uygun fiyatlı, çıtır çıtır lahmacun ve sıcak çorba keyfi.", commentEn: "Affordable, crispy lahmacun and warm soup enjoyment in Fatih." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Lades Menemen", rating: 4.5, reviewCount: 3100, area: "Beyoğlu", commentTr: "Beyoğlu'nda bol tereyağlı, kaşarlı ve ekmek banmalık sıcak menemen.", commentEn: "Hot menemen with plenty of butter, kashar, perfect for dipping bread in Beyoglu." },
    { name: "Meşhur Menemenci Alaattin", rating: 4.4, reviewCount: 1800, area: "Kadıköy", commentTr: "Kadıköy tarihi çarşıda hızlı ve ekonomik kahvaltı menüsü.", commentEn: "Fast and satisfying economic breakfast menu in Kadikoy historic bazaar." },
    { name: "Çakmak Kahvaltı Salonu", rating: 4.3, reviewCount: 1450, area: "Beşiktaş", commentTr: "Beşiktaş kahvaltıcılar sokağında sıcak ve bütçe dostu menemen keyfi.", commentEn: "Warm and budget friendly menemen enjoyment in Besiktas breakfast street." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe", rating: 4.3, reviewCount: 1600, area: "Kadıköy", commentTr: "Kadıköy'de özel salçalı soslu ve patates püreli devasa sosisli sandviç.", commentEn: "Giant hot dog with special tomato paste sauce and mashed potatoes in Kadikoy." },
    { name: "Kızılkayalar Büfe", rating: 4.2, reviewCount: 3200, area: "Taksim", commentTr: "Taksim meydanında hızlıca atıştırabileceğiniz meşhur soslu sosisli.", commentEn: "Famous hot dog with sauce that you can grab quickly in Taksim Square." },
    { name: "Bambi Cafe", rating: 4.1, reviewCount: 2200, area: "Şişli", commentTr: "Şişli şubesinde taze sosis ve özel soslu çıtır sandviç menüsü.", commentEn: "Fresh sausage and special sauced crispy sandwich menu at Sisli branch." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Balkan Lokantası", rating: 4.4, reviewCount: 5200, area: "Beşiktaş", commentTr: "Beşiktaş'ta günlük taze pişen, bol kıymalı sıcak patates oturtma.", commentEn: "Daily fresh cooked hot potato moussaka with rich minced meat in Besiktas." },
    { name: "Nato Lokantası", rating: 4.5, reviewCount: 2800, area: "Karaköy", commentTr: "Karaköy'de esnaf usulü fırın patates ve bütçe dostu tencere yemekleri.", commentEn: "Artisan style baked potatoes and budget friendly hot table dishes in Karakoy." },
    { name: "Bankalar Lokantası", rating: 4.3, reviewCount: 950, area: "Karaköy", commentTr: "Karaköy'de sıcak servis edilen geleneksel kıymalı patates oturtma.", commentEn: "Traditional potato moussaka with minced meat served warm in Karakoy." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Tarihi Süleymaniye Kuru Fasulyecisi (Erzincanlı Ali Baba)", rating: 4.6, reviewCount: 4800, area: "Süleymaniye", commentTr: "Süleymaniye camii karşısında bakır tencerede helmelenmiş kuru fasulye.", commentEn: "Slow-cooked creamy white beans in copper pot opposite Suleymaniye Mosque." },
    { name: "Fasuli Lokantası", rating: 4.4, reviewCount: 2200, area: "Tophane", commentTr: "Tophane'de tereyağlı Karadeniz usulü kuru fasulye ve tane tane pilav.", commentEn: "Buttered Black Sea style white beans and fluffy rice in Tophane." },
    { name: "Kardeşler Lokantası", rating: 4.3, reviewCount: 1150, area: "Kemerburgaz", commentTr: "Kemerburgaz'da esnaf ortamında sunulan bütçe dostu kuru fasulye menüsü.", commentEn: "Budget friendly white bean menu served in artisan atmosphere in Kemerburgaz." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı (Beşiktaş)", rating: 4.3, reviewCount: 880, area: "Beşiktaş", commentTr: "Beşiktaş'ta öğrencilere özel bol porsiyonlu ve soslu sıcak makarnalar.", commentEn: "Warm pastas with rich sauces and large portions special for students in Besiktas." },
    { name: "Pasta Presto", rating: 4.4, reviewCount: 1100, area: "Kadıköy", commentTr: "Kadıköy'de taze makarnalar ve bütçe dostu lezzetli sos alternatifleri.", commentEn: "Fresh pastas and budget friendly delicious sauce alternatives in Kadikoy." },
    { name: "Öğrenci Dostu Makarna Evi", rating: 4.1, reviewCount: 520, area: "Fatih", commentTr: "Fatih bölgesinde hızlı, sıcak ve son derece ekonomik makarna tabağı.", commentEn: "Fast, hot, and highly economic pasta plate in Fatih region." }
  ],
  "Gözleme": [
    { name: "Tarihi Gözlemeci (Anadolu Kavağı)", rating: 4.5, reviewCount: 1300, area: "Anadolu Kavağı", commentTr: "Boğaz manzaralı taş fırın başında taze açılan peynirli patatesli gözleme.", commentEn: "Freshly rolled gözleme with cheese and potato by the stone oven with Bosphorus view." },
    { name: "Muhtarın Yeri Gözleme Salonu", rating: 4.4, reviewCount: 780, area: "Polonezköy", commentTr: "Doğa içinde sac ateşinde pişen bol malzemeli sıcak gözlemeler.", commentEn: "Hot gözleme with rich fillings cooked on iron plate in nature." },
    { name: "Saray Gözleme Evi", rating: 4.2, reviewCount: 550, area: "Üsküdar", commentTr: "Üsküdar'da hızlı ve ekonomik kahvaltıların adresi sıcak gözleme.", commentEn: "Warm gözleme, the address for fast and economic breakfasts in Uskudar." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu", rating: 4.4, reviewCount: 620, area: "Kadıköy", commentTr: "Kadıköy'de sıcak lavaş arasında tulum peynirli ve soğanlı nefis sıkma.", commentEn: "Delicious wrap squeeze with tulum cheese and onion inside warm flatbread in Kadikoy." },
    { name: "Mersin Sıkma & Gözleme Evi", rating: 4.3, reviewCount: 410, area: "Ümraniye", commentTr: "Ümraniye'de sac üstünde taze pişirilen patatesli ve peynirli sıkma.", commentEn: "Freshly cooked squeeze wrap with potato and cheese on iron plate in Umraniye." },
    { name: "Akdeniz Sıkma Evi", rating: 4.2, reviewCount: 350, area: "Şişli", commentTr: "Şişli'de çay saatlerinin vazgeçilmez bütçe dostu sıcak sıkma dürümü.", commentEn: "Indispensable budget friendly warm squeeze wrap of tea hours in Sisli." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 3900, area: "Merkez", commentTr: "Türkiye genelinde standart lezzet, bol yeşillikli ve nar ekşili dürüm.", commentEn: "Standard taste nationwide, wrap with rich greens and pomegranate molasses." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 4200, area: "Merkez", commentTr: "Doyurucu ve bol soslu çiğ köfte dürümü, hızlı servis ve ekonomik.", commentEn: "Satisfying çiğ köfte wrap with rich sauce, fast service and economic." },
    { name: "Çiğ Köfteci Ali Usta (Eminönü)", rating: 4.4, reviewCount: 4900, area: "Eminönü", commentTr: "Eminönü'nde meşhur şov eşliğinde sunulan bol acılı ve bol porsiyonlu dürüm.", commentEn: "Wrap with rich spice and large portions served with a famous show in Eminonu." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Tarihi Karaköy Çorbacısı", rating: 4.4, reviewCount: 1850, area: "Karaköy", commentTr: "Karaköy'de kış aylarının içinizi ısıtan geleneksel sıcak tarhana çorbası.", commentEn: "Traditional warm tarhana soup warming you up during winter in Karakoy." },
    { name: "Çorba Kapısı", rating: 4.3, reviewCount: 680, area: "Fatih", commentTr: "Fatih'te ev yapımı tadında, süzme yoğurtlu tarhana çorbası keyfi.", commentEn: "Enjoyment of tarhana soup with strained yogurt in homemade taste in Fatih." },
    { name: "Çorbacı Şemsi", rating: 4.2, reviewCount: 520, area: "Seyrantepe", commentTr: "Seyrantepe şubesinde taze ekmekle sunulan bütçe dostu tarhana.", commentEn: "Budget friendly tarhana served with fresh bread at Seyrantepe branch." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Hayvore (Karadeniz Mutfağı)", rating: 4.5, reviewCount: 2100, area: "Beyoğlu", commentTr: "Beyoğlu'nda Karadeniz usulü bol sebzeli bulgur pilavı ve taze cacık.", commentEn: "Black Sea style bulgur rice with rich vegetables and fresh cacik in Beyoglu." },
    { name: "Mahalle Ev Yemekleri", rating: 4.3, reviewCount: 450, area: "Şişli", commentTr: "Şişli'de sıcak bulgur pilavı ve serinletici nane aromalı ev yapımı cacık.", commentEn: "Warm bulgur rice and cooling mint flavored homemade cacik in Sisli." },
    { name: "Bizim Lokanta", rating: 4.4, reviewCount: 1300, area: "Eminönü", commentTr: "Eminönü çarşı içinde esnaf usulü ekonomik bulgur pilavı ve cacık.", commentEn: "Artisan style economic bulgur rice and cacik in Eminonu bazaar." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Tarihi Galata Simitçisi", rating: 4.6, reviewCount: 2400, area: "Karaköy", commentTr: "Karaköy'de odun ateşinden taze çıkan çıtır simit ve soğuk ayran keyfi.", commentEn: "Crispy simit fresh out of wood fire and cold ayran enjoyment in Karakoy." },
    { name: "Boğazkesen Simit Fırını", rating: 4.4, reviewCount: 920, area: "Tophane", commentTr: "Tophane'de sıcak taş fırından susam kokulu çıtır çıtır simitler.", commentEn: "Sesame-scented crispy simits from warm stone oven in Tophane." },
    { name: "Çengelköy Tarihi Çınaraltı (Dışarıdan simit getirmeye uygun)", rating: 4.5, reviewCount: 6800, area: "Çengelköy", commentTr: "Boğaz kenarında çayınızı yudumlarken fırından getirdiğiniz simiti yiyebileceğiniz mekan.", commentEn: "Place where you can eat simit brought from bakery while sipping tea by the Bosphorus." }
  ],
  "Kıymalı Makarna": [
    { name: "Plus Kitchen (Ev Yemekleri Bölümü)", rating: 4.3, reviewCount: 820, area: "Şişli", commentTr: "Şişli şubesinde tencerede pişen bol kıymalı ev usulü makarna.", commentEn: "Homemade style pasta cooked in pot with rich minced meat at Sisli branch." },
    { name: "Trakya Lokantası", rating: 4.4, reviewCount: 1150, area: "Fatih", commentTr: "Fatih'te geleneksel esnaf usulü sıcak kıymalı salçalı makarna tabağı.", commentEn: "Traditional artisan style hot pasta plate with minced meat and tomato paste in Fatih." },
    { name: "Kardeşler Ev Yemekleri", rating: 4.2, reviewCount: 490, area: "Beşiktaş", commentTr: "Beşiktaş'ta hızlı, sıcak ve bütçe dostu salçalı kıymalı makarna.", commentEn: "Fast, hot, and budget friendly pasta with minced meat and tomato paste in Besiktas." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Beşiktaş Kahvaltıcılar Sokağı (Reçel Türevleri)", rating: 4.4, reviewCount: 2900, area: "Beşiktaş", commentTr: "Beşiktaş kahvaltıcılar sokağında çıtır yumurtalı ekmekler ve çay.", commentEn: "Crispy egg-coated fried bread slices and tea in Besiktas breakfast street." },
    { name: "Doğacıyız Gurme", rating: 4.5, reviewCount: 1200, area: "Cihangir", commentTr: "Cihangir'de organik yumurtayla hazırlanan çıtır ekmek kızartmaları.", commentEn: "Crispy fried bread slices prepared with organic egg in Cihangir." },
    { name: "Van Kahvaltı Evi (Ekonomik Yan Ürün Menüsü)", rating: 4.4, reviewCount: 3100, area: "Cihangir", commentTr: "Cihangir şubesinde ekonomik yan tabaklarla sunulan sıcak yumurtalı ekmek.", commentEn: "Warm egg-coated bread served with economic side dishes at Cihangir branch." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Zencefil Cafe (Ekonomik Menü)", rating: 4.4, reviewCount: 1650, area: "Beyoğlu", commentTr: "Beyoğlu'nda taze havuçlu ve zeytinyağlı yeşil mercimek yemeği.", commentEn: "Green lentil stew with fresh carrots and olive oil in Beyoglu." },
    { name: "Veganarsist (Bütçe Dostu Tencere Yemekleri)", rating: 4.5, reviewCount: 980, area: "Nişantaşı", commentTr: "Nişantaşı'nda tamamen bitkisel ve bütçe dostu sıcak tencere yemekleri.", commentEn: "Completely plant-based and budget friendly warm pot dishes in Nisantasi." },
    { name: "Şehir Lokantası", rating: 4.2, reviewCount: 750, area: "Eminönü", commentTr: "Eminönü'nde öğle saatlerinde sıcak servis edilen mercimek yemeği.", commentEn: "Warm lentil dish served during lunch hours in Eminonu." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Barış Büfe", rating: 4.3, reviewCount: 1100, area: "Kadıköy", commentTr: "Kadıköy'de çıtır tost ekmeğinde bol salçalı ve kaşarlı ekonomik büfe tostu.", commentEn: "Economic buffet toast with rich tomato paste and kashar in crispy toast bread in Kadikoy." },
    { name: "Şampiyon Büfe", rating: 4.2, reviewCount: 950, area: "Beşiktaş", commentTr: "Beşiktaş'ta ayaküstü atıştırabileceğiniz sıcak ve salçalı tost büfesi.", commentEn: "Hot and sauced toast buffet that you can grab on the go in Besiktas." },
    { name: "Moda Büfe", rating: 4.4, reviewCount: 1250, area: "Moda", commentTr: "Moda sahil yolunda çıtır lavaş arasında kaşarlı ve salçalı tost keyfi.", commentEn: "Enjoyment of toast with kashar and tomato paste between crispy flatbread on Moda coastal road." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Tarihi Pano Şaraphanesi (Aperatif Menüsü)", rating: 4.4, reviewCount: 1600, area: "Beyoğlu", commentTr: "Beyoğlu'nda şık atmosferde sunulan domates soslu fesleğenli Napoliten makarna.", commentEn: "Napoliten pasta with tomato sauce and basil served in elegant atmosphere in Beyoglu." },
    { name: "Express Pasta", rating: 4.2, reviewCount: 880, area: "Şişli", commentTr: "Şişli'de sıcak kutuda pratik ve hızlı servis edilen Napoliten makarna.", commentEn: "Napoliten pasta served practically and fast in a warm box in Sisli." },
    { name: "Makarnam Beşiktaş", rating: 4.3, reviewCount: 1050, area: "Beşiktaş", commentTr: "Beşiktaş'ta öğrencilerin gözdesi fesleğenli ve domates soslu sıcak makarna.", commentEn: "Student favorite warm pasta with basil and tomato sauce in Besiktas." }
  ]
};

export const ECONOMIC_ANKARA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Yaprak Dönercisi", rating: 4.4, reviewCount: 1850, area: "Kızılay", commentTr: "Kızılay'da yaprak kesim soslu tavuk döneriyle ünlü, hızlı ve ekonomik dürümcü.", commentEn: "Famous for leaf-cut chicken doner with sauce in Kizilay, fast and economic." },
    { name: "Paşa Döner (Kızılay)", rating: 4.2, reviewCount: 1100, area: "Kızılay", commentTr: "Kızılay şubesinde sıcak lavaşta bol malzemeli doyurucu tavuk dürüm.", commentEn: "Satisfying chicken wrap with rich ingredients in warm flatbread at Kizilay branch." },
    { name: "Dönerci Hamdi Usta (Ekonomik Menü)", rating: 4.3, reviewCount: 950, area: "Ulus", commentTr: "Ulus'ta geleneksel terbiyeli tavuk döneri bütçe dostu menusüyle sunan mekan.", commentEn: "Place in Ulus offering traditional marinated chicken doner with budget-friendly menus." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı Ankara", rating: 4.3, reviewCount: 780, area: "Bahçelievler", commentTr: "Bahçelievler'de tereyağlı sıcak pilav üstü bol tavuk ve nohut tabağı.", commentEn: "Plate of buttered hot rice topped with rich chicken and chickpeas in Bahcelievler." },
    { name: "Pilavcı Ahmet Usta", rating: 4.4, reviewCount: 650, area: "Kızılay", commentTr: "Kızılay esnafının ve öğrencilerinin favori hızlı pilav tabağı adresi.", commentEn: "Favorite fast rice plate address of Kizilay tradesmen and students." },
    { name: "Sokak Pilavcısı (Tunalı)", rating: 4.2, reviewCount: 480, area: "Tunalı", commentTr: "Tunalı'da gece geç saatlere kadar sıcak ve bütçe dostu pilav keyfi.", commentEn: "Warm and budget friendly rice enjoyment until late at night in Tunali." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Sadık", rating: 4.6, reviewCount: 1420, area: "Ulus", commentTr: "Ulus'ta yılların eskitemediği geleneksel, sulu ve lezzetli esnaf köftesi.", commentEn: "Traditional, juicy, and delicious artisan meatballs in Ulus for years." },
    { name: "İtfaiye Meydanı Seyyar Köftecileri", rating: 4.5, reviewCount: 520, area: "Ulus", commentTr: "İtfaiye Meydanı'nda köz kokulu, samimi ve son derece ekonomik köfte ekmek.", commentEn: "Cozy and highly economic meatball sandwich with grill aroma in Itfaiye Square." },
    { name: "Köfteci Behçet", rating: 4.4, reviewCount: 890, area: "Kızılay", commentTr: "Kızılay'da hızlı servis edilen doyurucu ve lezzetli yarım ekmek köfte.", commentEn: "Satisfying and delicious half-bread meatballs served fast in Kizilay." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Düveroğlu (Antep Lahmacun)", rating: 4.7, reviewCount: 5900, area: "Maltepe", commentTr: "Maltepe'de çıtır çıtır Antep usulü lahmacun ve dumanı üstünde mercimek çorbası.", commentEn: "Crispy Antep style lahmacun and steaming lentil soup in Maltepe." },
    { name: "Kıranardı Pide & Lahmacun", rating: 4.4, reviewCount: 920, area: "Ayrancı", commentTr: "Ayrancı'da bütçe dostu fiyatlarla sunulan nefis kıymalı pide menüleri.", commentEn: "Delicious minced meat pide menus offered at budget-friendly prices in Ayranci." },
    { name: "Ye-An Pide Salonu", rating: 4.3, reviewCount: 680, area: "Kızılay", commentTr: "Kızılay'da fırından yeni çıkmış sıcak lahmacun ve leziz çorba ikilisi.", commentEn: "Warm lahmacun fresh out of the oven and delicious soup duo in Kizilay." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Hamlakit", rating: 4.5, reviewCount: 2100, area: "GOP", commentTr: "GOP'ta Karadeniz tereyağı ile hazırlanan, ekmek banmaya doyamayacağınız menemen.", commentEn: "Menemen prepared with Black Sea butter that you cannot get enough of dipping bread in GOP." },
    { name: "Seyir Cafe (Bahçelievler)", rating: 4.3, reviewCount: 1350, area: "Bahçelievler", commentTr: "Bahçelievler'de öğrenci bütçesine uygun bol peynirli sıcak menemen tavası.", commentEn: "Warm menemen pan with rich cheese, suitable for student budget in Bahcelievler." },
    { name: "Gece Menemencisi (Kızılay)", rating: 4.2, reviewCount: 880, area: "Kızılay", commentTr: "Kızılay'da sabaha kadar açık, sıcak ve ekonomik yumurtalı kapama menüleri.", commentEn: "Warm and economic egg kapama menus open until morning in Kizilay." }
  ],
  "Sosisli Sandviç": [
    { name: "Kıtır", rating: 4.6, reviewCount: 3800, area: "Tunalı", commentTr: "Tunalı Hilmi Caddesi'nde bir Ankara efsanesi olan özel soslu dev sosisli.", commentEn: "An Ankara legend on Tunali Hilmi Street, giant hot dog with special sauce." },
    { name: "Piknik Büfe (Kızılay)", rating: 4.3, reviewCount: 1650, area: "Kızılay", commentTr: "Kızılay'da ayaküstü hızlıca tüketebileceğiniz sıcak ve bol soslu sosisli sandviç.", commentEn: "Hot hot dog sandwich with rich sauce that you can eat quickly on the go in Kizilay." },
    { name: "Yeni Karamürsel Büfesi", rating: 4.1, reviewCount: 520, area: "Kızılay", commentTr: "Kızılay merkezinde nostaljik tadı ve uygun fiyatıyla sıcak büfe sosislisi.", commentEn: "Warm buffet hot dog with its nostalgic taste and affordable price in Kizilay center." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Boğaziçi Lokantası (Günün Menüsü)", rating: 4.5, reviewCount: 2900, area: "Ulus", commentTr: "Ulus'ta tarihi esnaf ortamında sunulan bol kıymalı patates oturtma yemeği.", commentEn: "Potato moussaka dish with rich minced meat served in historic artisan environment in Ulus." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 920, area: "Kızılay", commentTr: "Kızılay'da ev yemeği sıcaklığında pişirilmiş bütçe dostu fırında patates.", commentEn: "Budget-friendly baked potatoes cooked with home-style warmth in Kizilay." },
    { name: "Kızılay Merkez Lokantası", rating: 4.2, reviewCount: 780, area: "Kızılay", commentTr: "Kızılay'da günlük değişen esnaf menüsünde sıcak kıymalı patates oturtma.", commentEn: "Warm potato moussaka with minced meat in daily changing artisan menu in Kizilay." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Çiçek Lokantası", rating: 4.6, reviewCount: 2200, area: "Ulus", commentTr: "Ulus'ta bakır kaplarda tereyağı ile kıvam almış efsanevi kuru fasulye.", commentEn: "Legendary white beans thickened with butter in copper vessels in Ulus." },
    { name: "Meşhur Hüsrev Kuru Fasulyecisi", rating: 4.4, reviewCount: 1950, area: "Çankaya", commentTr: "Çankaya şubesinde Rize usulü tereyağlı kuru fasulye ve tane tane pirinç pilavı.", commentEn: "Rize style buttered white beans and fluffy rice at Cankaya branch." },
    { name: "Tarihi Ulus Lezzet Lokantası", rating: 4.3, reviewCount: 880, area: "Ulus", commentTr: "Ulus esnafının uğrak noktası olan ekonomik ve lezzetli kuru fasulye menüsü.", commentEn: "Economic and delicious white bean menu, a frequent destination for Ulus tradesmen." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı Ankara (Bahçelievler)", rating: 4.4, reviewCount: 950, area: "Bahçelievler", commentTr: "Bahçelievler'de öğrencilere özel dev porsiyonlu ve sıcak kremalı makarnalar.", commentEn: "Giant portion hot creamy pastas special for students in Bahcelievler." },
    { name: "Pasta Express", rating: 4.3, reviewCount: 820, area: "Kızılay", commentTr: "Kızılay'da hızlı kutuda pratik ve ekonomik olarak sunulan makarna alternatifleri.", commentEn: "Pasta alternatives served practically and economically in a fast box in Kizilay." },
    { name: "Bilkent Öğrenci Kafeteryaları (Dışa Açık Alanlar)", rating: 4.1, reviewCount: 450, area: "Bilkent", commentTr: "Bilkent yerleşkesinde bütçe dostu, doyurucu ve sıcak domates soslu makarnalar.", commentEn: "Budget-friendly, satisfying and hot tomato sauce pastas in Bilkent campus." }
  ],
  "Gözleme": [
    { name: "Yapracık Gözleme Evi", rating: 4.5, reviewCount: 680, area: "Yapracık", commentTr: "Yapracık'ta sac üzerinde taze pişirilen bol kaşarlı patatesli sıcak gözleme.", commentEn: "Warm flatbread eye-bread with rich kashar and potato cooked fresh on iron plate in Yapracik." },
    { name: "Yörük Çadırı Gözleme Salonu", rating: 4.3, reviewCount: 540, area: "Ümitköy", commentTr: "Ümitköy'de bahçe ortamında döküm sacda pişen sıcacık peynirli gözlemeler.", commentEn: "Warm cheese gözleme cooked on cast iron plate in a garden setting in Umitkoy." },
    { name: "Kuğu Park Gözlemecisi", rating: 4.4, reviewCount: 1100, area: "Tunalı", commentTr: "Tunalı Kuğu Park yakınında çay eşliğinde sunulan ekonomik ve sıcak gözleme.", commentEn: "Economic and warm gözleme served with tea near Tunali Kugu Park." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu Ankara", rating: 4.4, reviewCount: 480, area: "Bahçelievler", commentTr: "Bahçelievler'de sıcak yufka arasına sarılı tulum peynirli Akdeniz usulü sıkma.", commentEn: "Mediterranean style squeeze wrap with tulum cheese rolled inside warm flatbread in Bahcelievler." },
    { name: "Çukurova Sıkma & Gözleme", rating: 4.3, reviewCount: 390, area: "Kızılay", commentTr: "Kızılay'da sacda taze hazırlanan patatesli ve çökelekli doyurucu sıkma.", commentEn: "Satisfying squeeze wrap with potato and cottage cheese freshly prepared in Kizilay." },
    { name: "Mersin Sıkma Evi (Emek)", rating: 4.2, reviewCount: 320, area: "Emek", commentTr: "Emek mahallesinde Mersin usulü sıcak sac sıkmaları ve soğuk yayık ayranı.", commentEn: "Mersin style hot iron squeeze wraps and cold churned ayran in Emek neighborhood." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte (Kızılay)", rating: 4.1, reviewCount: 1450, area: "Kızılay", commentTr: "Kızılay'da hızlı servis, bol limonlu ve taze marullu bütçe dostu çiğ köfte.", commentEn: "Budget friendly raw meatballs with rich lemon and fresh lettuce in Kizilay." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 2200, area: "Kızılay", commentTr: "Hızlıca atıştırabileceğiniz bol soslu, ekonomik ve doyurucu dürüm menüsü.", commentEn: "Satisfying and economic wrap menu with rich sauce that you can grab quickly." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 1150, area: "Ulus", commentTr: "Ulus şubesinde son derece hesaplı, baharatlı ve bol porsiyonlu dürüm keyfi.", commentEn: "Highly affordable, spicy and generous portion wrap enjoyment at Ulus branch." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Meşhur Çorbacı Adnan Usta", rating: 4.5, reviewCount: 1100, area: "Ulus", commentTr: "Ulus'ta kış aylarında içinizi ısıtacak sıcacık ev yapımı tarhana çorbası.", commentEn: "Warm homemade tarhana soup that will warm you up in Ulus during winter." },
    { name: "Devrez Çorba", rating: 4.4, reviewCount: 3200, area: "Tunalı", commentTr: "Tunalı'da 24 saat açık mekanda sıcacık tarhana ve taze tırnak pide keyfi.", commentEn: "Warm tarhana and fresh flatbread enjoyment at 24-hour open place in Tunali." },
    { name: "Çorbacı Bey", rating: 4.3, reviewCount: 650, area: "Kızılay", commentTr: "Kızılay'da sabah saatlerinde hızlı ve bütçe dostu sıcak tarhana tabağı.", commentEn: "Fast and budget friendly hot tarhana plate in Kizilay during morning hours." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Göksu Lokantası (Ev Yemekleri Menüsü)", rating: 4.5, reviewCount: 2800, area: "Kızılay", commentTr: "Kızılay'da esnaf ortamında sunulan bol sebzeli bulgur pilavı ve taze cacık.", commentEn: "Bulgur rice with rich vegetables and fresh cacik served in artisan setting in Kizilay." },
    { name: "Esnaf Lokantası Ayrancı", rating: 4.4, reviewCount: 750, area: "Ayrancı", commentTr: "Ayrancı'da ev usulü tereyağlı sıcak bulgur pilavı ve nane aromalı cacık.", commentEn: "Home style buttered hot bulgur rice and mint flavored cacik in Ayranci." },
    { name: "Bizim Çorba & Ev Yemekleri", rating: 4.3, reviewCount: 490, area: "Bahçelievler", commentTr: "Bahçelievler'de öğle menülerinde sunulan son derece hesaplı bulgur ve cacık menüsü.", commentEn: "Highly affordable bulgur and cacik menu offered in lunch menus in Bahcelievler." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Ankara Simit Fırını (Ulus)", rating: 4.6, reviewCount: 1850, area: "Ulus", commentTr: "Ulus'ta taş fırından yeni çıkmış pekmez kokulu çıtır çıtır Ankara simidi.", commentEn: "Molasses-scented crispy Ankara simit fresh out of the stone oven in Ulus." },
    { name: "Simit Sarayı (Kızılay Şubeleri)", rating: 4.2, reviewCount: 2400, area: "Kızılay", commentTr: "Kızılay şubelerinde taze simit, peynir ve soğuk ayran üçlüsüyle hızlı kahvaltı.", commentEn: "Fast breakfast with fresh simit, cheese and cold ayran at Kizilay branches." },
    { name: "Kuğu Park (Banklar ve Simitçiler Alanı)", rating: 4.5, reviewCount: 4200, area: "Tunalı", commentTr: "Kuğu parkta bankta oturup simitçiden aldığınız simitle yapabileceğiniz en keyifli kahvaltı.", commentEn: "Most enjoyable breakfast sitting on a bench in Kugu Park with simit bought from vendor." }
  ],
  "Kıymalı Makarna": [
    { name: "Leman Kültür (Öğrenci Menüsü)", rating: 4.3, reviewCount: 3100, area: "Bahçelievler", commentTr: "Bahçelievler şubesinde öğrencilere özel porsiyonlu sıcak kıymalı makarna.", commentEn: "Warm pasta with minced meat with student-special portions at Bahcelievler branch." },
    { name: "Kıtır (Aperatif Menüsü)", rating: 4.4, reviewCount: 2800, area: "Tunalı", commentTr: "Tunalı'da bira yanında veya tek başına tüketebileceğiniz sıcak kıymalı makarna.", commentEn: "Warm minced meat pasta that you can eat alongside beer or alone in Tunali." },
    { name: "Aylak Madam (Bütçe Dostu Tabaklar)", rating: 4.3, reviewCount: 920, area: "Kızılay", commentTr: "Kızılay'da nostaljik ortamda sunulan ekonomik kıymalı salçalı ev usulü makarna.", commentEn: "Economic minced meat pasta with tomato paste served in nostalgic environment in Kizilay." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Kıtır (Kahvaltı Menüsü)", rating: 4.4, reviewCount: 1950, area: "Tunalı", commentTr: "Tunalı'da sabah saatlerinde sunulan çıtır çıtır yumurtalı ekmek tabağı ve çay.", commentEn: "Crispy egg-coated fried bread plate and tea served in Tunali during morning hours." },
    { name: "Kuğu Pasta & Cafe", rating: 4.3, reviewCount: 880, area: "Bahçelievler", commentTr: "Bahçelievler'de ev sıcaklığında sunulan leziz ve sıcak yumurtalı ekmek tabağı.", commentEn: "Delicious and warm egg-coated fried bread plate served with home-like warmth in Bahcelievler." },
    { name: "Evce Kahvaltı Evi", rating: 4.4, reviewCount: 650, area: "Ayrancı", commentTr: "Ayrancı'da serpme kahvaltı yanına sıcak eklenen bütçe dostu yumurtalı ekmek dilimleri.", commentEn: "Budget-friendly egg-coated bread slices served warm alongside breakfast in Ayranci." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Veganka", rating: 4.5, reviewCount: 920, area: "Kavaklıdere", commentTr: "Kavaklıdere'de tamamen vegan malzemelerle hazırlanan sıcak yeşil mercimek yemeği.", commentEn: "Warm green lentil stew prepared with entirely vegan ingredients in Kavaklidere." },
    { name: "Vegihi", rating: 4.4, reviewCount: 780, area: "Bahçelievler", commentTr: "Bahçelievler'de bütçe dostu ve sağlıklı tencere yemeklerinin adresi sıcak mercimek.", commentEn: "Warm lentils, the address of budget-friendly and healthy pot dishes in Bahcelievler." },
    { name: "Kızılay Sofra Ev Yemekleri", rating: 4.2, reviewCount: 540, area: "Kızılay", commentTr: "Kızılay'da esnaf tarzı öğle menüsünde sıcak sunulan zeytinyağlı yeşil mercimek.", commentEn: "Olive oil green lentils served warm in artisan-style lunch menu in Kizilay." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Büyük Piknik Büfe", rating: 4.4, reviewCount: 1850, area: "Kızılay", commentTr: "Kızılay'da döküm ızgarada basılan bol salçalı kaşarlı efsanevi Ankara tostu.", commentEn: "Legendary Ankara toast with rich tomato paste and kashar pressed on cast iron grill in Kizilay." },
    { name: "Dostlar Büfe (Tunalı)", rating: 4.3, reviewCount: 920, area: "Tunalı", commentTr: "Tunalı'da gece saatlerinin vazgeçilmez ekonomik salçalı tost büfesi.", commentEn: "Indispensable economic tomato paste toast buffet of night hours in Tunali." },
    { name: "Kampüs Büfe", rating: 4.1, reviewCount: 680, area: "Cebeci", commentTr: "Cebeci kampüs bölgesinde öğrencilerin gözdesi ucuz, sıcak salçalı tost.", commentEn: "Cheap, hot tomato paste toast, favorite of students in Cebeci campus area." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Cafe des Cafes (Aperatif Menüsü)", rating: 4.4, reviewCount: 2200, area: "Tunalı", commentTr: "Tunalı'da şık ortamda servis edilen fesleğenli ve parmesanlı sıcak Napoliten makarna.", commentEn: "Hot Napoliten pasta with basil and parmesan served in elegant setting in Tunali." },
    { name: "Quick China (Hafif ve Ekonomik Yan Menüler)", rating: 4.3, reviewCount: 3900, area: "GOP", commentTr: "GOP şubesinde hafif ve bütçe dostu domates soslu sıcak makarna tabağı.", commentEn: "Light and budget-friendly hot pasta plate with tomato sauce at GOP branch." },
    { name: "Kakule Kahve (Atıştırmalık Menüsü)", rating: 4.5, reviewCount: 1200, area: "Kızılay", commentTr: "Kızılay'da taze kahvenin yanında sunulan hafif domates soslu sıcak İtalyan makarnası.", commentEn: "Warm Italian pasta with light tomato sauce served alongside fresh coffee in Kizilay." }
  ]
};

export const ECONOMIC_IZMIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Frango Döner (Alsancak)", rating: 4.4, reviewCount: 1650, area: "Alsancak", commentTr: "Alsancak'ta çıtır lavaşta özel soslu ve patatesli leziz tavuk dürüm.", commentEn: "Delicious chicken wrap with special sauce and fries in crispy flatbread in Alsancak." },
    { name: "Dönerci Sadık Usta", rating: 4.3, reviewCount: 980, area: "Kemeraltı", commentTr: "Kemeraltı Çarşısı'nda hızlı ve son derece ekonomik ayaküstü tavuk döner.", commentEn: "Fast and highly economic stand-up chicken doner in Kemeralti Bazaar." },
    { name: "Katık Döner", rating: 4.2, reviewCount: 1200, area: "Bornova", commentTr: "Bornova'da özel Hatay soslu ve bol malzemeli doyurucu tavuk dürüm.", commentEn: "Satisfying chicken wrap with special Hatay sauce and rich ingredients in Bornova." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı İzmir", rating: 4.3, reviewCount: 780, area: "Konak", commentTr: "Konak'ta tereyağlı sıcak pilav üstü bol tavuk ve nohut ikilisi.", commentEn: "Buttered hot rice topped with rich chicken and chickpea duo in Konak." },
    { name: "Pilavcı Ahmet Usta (Bornova)", rating: 4.4, reviewCount: 650, area: "Bornova", commentTr: "Bornova'da öğrencilerin ve esnafın favorisi bütçe dostu sıcak pilav tabağı.", commentEn: "Budget-friendly hot rice plate, a favorite of students and tradesmen in Bornova." },
    { name: "Sokak Pilavcısı (Küçük Park)", rating: 4.2, reviewCount: 450, area: "Bornova", commentTr: "Bornova Küçük Park'ta gece geç saatlere kadar sıcak pilav keyfi.", commentEn: "Hot rice enjoyment until late at night in Bornova Kucuk Park." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Tizzy", rating: 4.5, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta hızlı ve doyurucu ekmek arası köfte ve patates menüleri.", commentEn: "Fast and satisfying meatball sandwich and fries menus in Alsancak." },
    { name: "Meşhur Köfteci Küçük Sami", rating: 4.6, reviewCount: 1350, area: "Kemeraltı", commentTr: "Kemeraltı'nda tarihi atmosferde sıcak servis edilen nefis esnaf köftesi.", commentEn: "Delicious artisan meatballs served warm in historic atmosphere in Kemeralti." },
    { name: "İkiçeşmelik Seyyar Köftecileri", rating: 4.4, reviewCount: 420, area: "İkiçeşmelik", commentTr: "İkiçeşmelik caddesinde köz kokulu, bütçe dostu seyyar köfte ekmek keyfi.", commentEn: "Grill-scented, budget-friendly street food meatball sandwich enjoyment on Ikicesmelik street." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Kırçiçeği (Ekonomik Menü)", rating: 4.4, reviewCount: 3800, area: "Alsancak", commentTr: "Alsancak'ta 24 saat sıcak çorba ve kıtır lahmacun sunan bütçe dostu menü.", commentEn: "Budget-friendly menu offering warm soup and crispy lahmacun 24 hours in Alsancak." },
    { name: "Çıtır Lahmacun Salonu Kemeraltı", rating: 4.3, reviewCount: 850, area: "Kemeraltı", commentTr: "Kemeraltı'nda odun ateşinde pişmiş çıtır lahmacun ve sıcak çorba.", commentEn: "Crispy lahmacun cooked over wood fire and warm soup in Kemeralti." },
    { name: "Ömür Pide & Lahmacun", rating: 4.2, reviewCount: 620, area: "Bornova", commentTr: "Bornova'da fırından yeni çıkmış sıcak lahmacun ve pide çeşitleri.", commentEn: "Warm lahmacun and pide varieties fresh out of the oven in Bornova." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Tuzu Biberi (Ekonomik Seçenekler)", rating: 4.5, reviewCount: 2200, area: "Mavişehir", commentTr: "Mavişehir'de bol malzemeli, sıcak ve ekmek banmalık tavada menemen.", commentEn: "Hot and rich menemen in pan, perfect for dipping bread, in Mavisehir." },
    { name: "Alsancak Menemencisi", rating: 4.4, reviewCount: 1450, area: "Alsancak", commentTr: "Alsancak'ta sadece menemen ve kahvaltı üzerine uzmanlaşmış sıcak esnaf mekanı.", commentEn: "Warm artisan place specializing in menemen and breakfast in Alsancak." },
    { name: "Dostlar Fırını Kahvaltı Alanı", rating: 4.6, reviewCount: 2900, area: "Alsancak", commentTr: "Alsancak'ta fırından sıcak çıkan boyozlar eşliğinde yumurta kapama keyfi.", commentEn: "Enjoyment of egg kapama accompanied by warm boyoz fresh from the oven in Alsancak." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe (Alsancak)", rating: 4.5, reviewCount: 1950, area: "Alsancak", commentTr: "Alsancak'ta meşhur sıcak salçalı sosisli ve ıslak burger adresi.", commentEn: "Famous hot hot dog with tomato paste and wet burger address in Alsancak." },
    { name: "Altın Büfe", rating: 4.3, reviewCount: 880, area: "Karşıyaka", commentTr: "Karşıyaka Çarşısı'nda hızlı servis edilen bol malzemeli sıcak sosisli sandviç.", commentEn: "Warm hot dog sandwich with rich ingredients served fast in Karsiyaka Bazaar." },
    { name: "Bornova Büfe", rating: 4.2, reviewCount: 750, area: "Bornova", commentTr: "Bornova Küçük Park'ta öğrencilere özel bütçe dostu sıcak sosisli.", commentEn: "Student-special budget-friendly hot hot dog in Bornova Kucuk Park." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Adil Müftüoğlu - Uğur Lokantası (Günün Menüsü)", rating: 4.6, reviewCount: 1650, area: "Konak", commentTr: "Konak'ta yarım asırlık esnaf lokantasında sıcak servis edilen nefis patates oturtma.", commentEn: "Delicious potato moussaka served warm in half-century old artisan restaurant in Konak." },
    { name: "Mahfel Esnaf Lokantası", rating: 4.3, reviewCount: 720, area: "Bornova", commentTr: "Bornova'da ev yemeği kalitesinde ve bütçe dostu sıcak fırında patates yemeği.", commentEn: "Budget-friendly hot baked potato dish in home-style quality in Bornova." },
    { name: "Bizim Lokanta (Kemeraltı)", rating: 4.5, reviewCount: 2400, area: "Kemeraltı", commentTr: "Kemeraltı'nda öğle saatlerinde kapış kapış giden sıcak kıymalı patates oturtma.", commentEn: "Warm potato moussaka with minced meat going fast during lunch hours in Kemeralti." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Kısmet Lokantası", rating: 4.6, reviewCount: 1950, area: "Kemeraltı", commentTr: "Kemeraltı'nda helmelenmiş sıcak kuru fasulye ve tereyağlı sade pirinç pilavı.", commentEn: "Soft cooked hot white beans and buttered plain rice in Kemeralti." },
    { name: "L'agora Lokantası", rating: 4.4, reviewCount: 850, area: "Kemeraltı", commentTr: "Tarihi han atmosferinde sunulan lezzetli ve bütçe dostu kuru fasulye menüsü.", commentEn: "Delicious and budget-friendly white bean menu served in historic inn atmosphere." },
    { name: "Meşhur Esnaf Lokantası (İzmir Ticaret Odası Yanı)", rating: 4.3, reviewCount: 680, area: "Alsancak", commentTr: "Alsancak'ta Ticaret Odası yakınında hızlı ve hesaplı kuru fasulye pilav öğünü.", commentEn: "Fast and affordable white bean and rice meal near Chamber of Commerce in Alsancak." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı İzmir (Küçük Park)", rating: 4.4, reviewCount: 1100, area: "Bornova", commentTr: "Bornova'da öğrencilerin buluşma noktası, sıcak ve bol soslu makarna tabakları.", commentEn: "Student meeting point in Bornova, hot and richly sauced pasta plates." },
    { name: "Pasta Express İzmir", rating: 4.2, reviewCount: 720, area: "Alsancak", commentTr: "Alsancak'ta kutuda hızlı, sıcak ve bütçe dostu İtalyan makarna çeşitleri.", commentEn: "Fast, warm, and budget-friendly Italian pasta varieties in a box in Alsancak." },
    { name: "Ege Üniversitesi Kampüs Kafeteryaları (Dışa Açık Alanlar)", rating: 4.0, reviewCount: 380, area: "Bornova", commentTr: "Kampüs içerisinde son derece ekonomik ve doyurucu sıcak domatesli makarnalar.", commentEn: "Highly economic and satisfying hot tomato pastas inside the campus." }
  ],
  "Gözleme": [
    { name: "Çiçekliköy Gözleme Salonları", rating: 4.6, reviewCount: 2200, area: "Bornova", commentTr: "Çiçekliköy'de doğa içinde sacda sıcak pişen otlu peynirli nefis gözlemeler.", commentEn: "Delicious gözleme with herbs and cheese cooked hot on iron plate in nature in Ciceklikoy." },
    { name: "Yörük Çadırı Gözleme (İnciraltı)", rating: 4.3, reviewCount: 1250, area: "İnciraltı", commentTr: "İnciraltı sahilinde çay eşliğinde sunulan sıcak patatesli ve peynirli gözleme.", commentEn: "Warm gözleme with potato and cheese served with tea on Inciralti coast." },
    { name: "Karşıyaka Gözleme Evi", rating: 4.4, reviewCount: 880, area: "Karşıyaka", commentTr: "Karşıyaka'da incecik açılmış sac gözlemelerini ekonomik fiyatlarla sunan mekan.", commentEn: "Place in Karsiyaka offering thinly rolled iron plate gözleme at economic prices." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu İzmir", rating: 4.4, reviewCount: 410, area: "Buca", commentTr: "Buca'da sıcak yufka içerisine sarılan peynirli çökelekli doyurucu sıkma.", commentEn: "Satisfying squeeze wrap with cheese and cottage cheese rolled in warm flatbread in Buca." },
    { name: "Çukurova Sıkma & Gözleme (Buca)", rating: 4.3, reviewCount: 350, area: "Buca", commentTr: "Buca şubesinde sacda taze hazırlanan Akdeniz usulü sıcak sıkma dürüm.", commentEn: "Mediterranean style warm squeeze wrap freshly prepared on iron plate at Buca branch." },
    { name: "Mersin Sıkma Evi (Bornova)", rating: 4.2, reviewCount: 290, area: "Bornova", commentTr: "Bornova'da sıcak bazlama lavaşına sarılı patatesli ve çökelekli Mersin sıkması.", commentEn: "Mersin style squeeze wrap with potato and cottage cheese rolled in warm flatbread in Bornova." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 1100, area: "Karşıyaka", commentTr: "Karşıyaka'da hızlı ve ekonomik servis edilen bol limonlu çiğ köfte dürüm.", commentEn: "Raw meatball wrap with rich lemon served fast and economically in Karsiyaka." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 1850, area: "Alsancak", commentTr: "Alsancak'ta bütçe dostu dürüm menüleriyle hızlıca atıştırabileceğiniz lezzet.", commentEn: "Quick bite with budget-friendly wrap menus in Alsancak." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 920, area: "Buca", commentTr: "Buca'da öğrenciler için son derece hesaplı ve doyurucu çiğ köfte menüsü.", commentEn: "Highly affordable and satisfying raw meatball menu for students in Buca." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Çorbacı İsmet Usta", rating: 4.5, reviewCount: 2200, area: "Alsancak", commentTr: "Alsancak'ta 24 saat boyunca sıcak ve şifalı tarhana çorbası sunan ünlü mekan.", commentEn: "Famous 24-hour place offering warm and healthy tarhana soup in Alsancak." },
    { name: "Tarihi Kemeraltı Çorbacısı", rating: 4.4, reviewCount: 980, area: "Kemeraltı", commentTr: "Kemeraltı'nda nostaljik esnaf ortamında sunulan sıcak ev yapımı tarhana.", commentEn: "Warm homemade tarhana served in nostalgic artisan environment in Kemeralti." },
    { name: "Çorba Durağı", rating: 4.3, reviewCount: 650, area: "Bornova", commentTr: "Bornova'da sabah saatlerinde hızlı ve bütçe dostu sıcak tarhana çorbası.", commentEn: "Fast and budget-friendly hot tarhana soup in Bornova in the morning." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Defne Yaprağı Ev Yemekleri", rating: 4.5, reviewCount: 880, area: "Konak", commentTr: "Konak'ta ev sıcaklığında sunulan sebzeli sıcak bulgur pilavı ve ferahlatıcı cacık.", commentEn: "Warm bulgur rice with vegetables and refreshing cacik served with home-like warmth in Konak." },
    { name: "Ege Sofrası", rating: 4.3, reviewCount: 620, area: "Karşıyaka", commentTr: "Karşıyaka'da bütçe dostu esnaf menüsünde sunulan nefis bulgur pilavı cacık ikilisi.", commentEn: "Delicious bulgur rice and cacik duo offered in budget-friendly artisan menu in Karsiyaka." },
    { name: "Tarihi Kemeraltı Esnaf Lokantası", rating: 4.4, reviewCount: 1100, area: "Kemeraltı", commentTr: "Kemeraltı'nda geleneksel usulle pişmiş sıcak bulgur pilavı ve nane aromalı cacık.", commentEn: "Warm bulgur rice cooked in traditional style and mint flavored cacik in Kemeralti." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Alsancak Gevrek Fırını", rating: 4.7, reviewCount: 4200, area: "Alsancak", commentTr: "Alsancak'ta odun ateşinde pişmiş, pekmez kaplı sıcak İzmir gevreği.", commentEn: "Molasses coated warm Izmir gevrek (simit) cooked over wood fire in Alsancak." },
    { name: "Kemeraltı Gevrekçisi", rating: 4.5, reviewCount: 1650, area: "Kemeraltı", commentTr: "Kemeraltı'nda nostaljik fırından sıcacık çıkan gevrek ve soğuk ayran keyfi.", commentEn: "Enjoyment of gevrek fresh out of the nostalgic oven and cold ayran in Kemeralti." },
    { name: "Kordon Boyu Çimler (Seyyar Gevrekçiler)", rating: 4.4, reviewCount: 3100, area: "Alsancak", commentTr: "Kordon çimlerinde oturup seyyar satıcıdan aldığınız gevrek ve peynirle ekonomik kahvaltı.", commentEn: "Economic breakfast on Kordon lawns with gevrek and cheese bought from mobile vendor." }
  ],
  "Kıymalı Makarna": [
    { name: "Reyhan Pastanesi (Hafif Ev Yemekleri Bölümü)", rating: 4.6, reviewCount: 3200, area: "Alsancak", commentTr: "Alsancak'ta şık ortamda sunulan ev yapımı tadında sıcak kıymalı makarna.", commentEn: "Warm minced meat pasta in homemade taste served in elegant environment in Alsancak." },
    { name: "Ömür Ev Yemekleri", rating: 4.3, reviewCount: 780, area: "Bornova", commentTr: "Bornova'da bütçe dostu fiyatıyla öğrencilerin gözdesi sıcak kıymalı makarna.", commentEn: "Warm minced meat pasta, a favorite of students with its budget-friendly price in Bornova." },
    { name: "Kardeşler Ev Yemekleri Buca", rating: 4.2, reviewCount: 540, area: "Buca", commentTr: "Buca'da esnaf tarzı menüde sunulan doyurucu kıymalı salçalı sıcak makarna.", commentEn: "Satisfying warm pasta with minced meat and tomato paste in artisan-style menu in Buca." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Morisi Avlu", rating: 4.5, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta eski Rum evinin avlusunda sunulan sıcacık yumurtalı ekmek tabağı.", commentEn: "Warm egg-coated fried bread plate served in the courtyard of an old Greek house in Alsancak." },
    { name: "Tuzu Biberi (Kahvaltı Menüsü)", rating: 4.4, reviewCount: 2200, area: "Karşıyaka", commentTr: "Karşıyaka sahilinde kahvaltı menuüsü yanında sıcak servis edilen yumurtalı ekmek.", commentEn: "Egg-coated fried bread served warm alongside breakfast menu on Karsiyaka coast." },
    { name: "Bornova Küçük Park Kahvaltı Salonları", rating: 4.2, reviewCount: 950, area: "Bornova", commentTr: "Bornova'da bütçe dostu öğrenci kahvaltılarının vazgeçilmezi sıcak yumurtalı ekmekler.", commentEn: "Indispensable hot egg-coated bread of budget-friendly student breakfast in Bornova." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Yaşam Vegan Cafe", rating: 4.7, reviewCount: 950, area: "Alsancak", commentTr: "Alsancak'ta tamamen bitkisel ve sağlıklı sıcak zeytinyağlı yeşil mercimek.", commentEn: "Healthy warm olive oil green lentils prepared completely plant-based in Alsancak." },
    { name: "Roots Cafe & Botanique (Ekonomik Menü)", rating: 4.5, reviewCount: 880, area: "Alsancak", commentTr: "Alsancak'ta botanik atmosferde sunulan hafif ve bütçe dostu mercimek yemeği.", commentEn: "Light and budget-friendly lentil dish served in botanical atmosphere in Alsancak." },
    { name: "Seçkin Lokantası", rating: 4.2, reviewCount: 490, area: "Kemeraltı", commentTr: "Kemeraltı'nda sıcak tencere yemeği olarak sunulan esnaf usulü yeşil mercimek.", commentEn: "Artisan style green lentils served as warm pot dish in Kemeralti." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Alsancak Tostçusu", rating: 4.5, reviewCount: 1650, area: "Alsancak", commentTr: "Alsancak'ta çıtır ekmek arasında bol salçalı kaşarlı meşhur İzmir büfe tostu.", commentEn: "Famous Izmir buffet toast with rich tomato paste and kashar in crispy bread in Alsancak." },
    { name: "Büfe Kardeşler", rating: 4.3, reviewCount: 890, area: "Karşıyaka", commentTr: "Karşıyaka sahil yolunda ayaküstü hızlıca alabileceğiniz sıcak salçalı tost.", commentEn: "Hot tomato paste toast that you can grab quickly on Karshiyaka coastal road." },
    { name: "Kampüs Büfe Ege", rating: 4.2, reviewCount: 720, area: "Bornova", commentTr: "Ege Üniversitesi kampüs çıkışında öğrencilerin favori ucuz salçalı tost adresi.", commentEn: "Favorite cheap tomato paste toast address of students at Ege University campus exit." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Less Ordinary (Aperatif Menüsü)", rating: 4.4, reviewCount: 980, area: "Alsancak", commentTr: "Alsancak'ta modern atmosferde sunulan taze domates soslu sıcak Napoliten makarna.", commentEn: "Hot Napoliten pasta with fresh tomato sauce served in modern atmosphere in Alsancak." },
    { name: "Awake Coffee & Food (Hafif Menü)", rating: 4.3, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta kahve yanına tercih edebileceğiniz hafif domates soslu sıcak makarna.", commentEn: "Hot pasta with light tomato sauce that you can choose alongside coffee in Alsancak." },
    { name: "Express Pasta Bornova", rating: 4.2, reviewCount: 780, area: "Bornova", commentTr: "Bornova'da kutuda pratik, hızlı ve ekonomik sunulan sıcak Napoliten makarna.", commentEn: "Warm Napoliten pasta served practically, fast, and economically in a box in Bornova." }
  ]
};

export const ECONOMIC_MERSIN_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Paşa Döner (Pozcu)", rating: 4.4, reviewCount: 1450, area: "Pozcu", commentTr: "Pozcu'da hızlı ve son derece bütçe dostu, lezzetli tavuk döner dürüm.", commentEn: "Fast and highly budget-friendly, delicious chicken doner wrap in Pozcu." },
    { name: "Katık Döner Mersin", rating: 4.3, reviewCount: 980, area: "Yenişehir", commentTr: "Özel Hatay soslu ve bol patatesli doyurucu, sıcak tavuk döner dürüm.", commentEn: "Satisfying, warm chicken doner wrap with special Hatay sauce and rich fries." },
    { name: "Öncü Döner", rating: 4.2, reviewCount: 1200, area: "Mezitli", commentTr: "Mezitli şubesinde öğrencilerin gözdesi dev boy, ekonomik sıcak tavuk dürüm.", commentEn: "Giant sized, economic warm chicken wrap, a favorite of students at Mezitli branch." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı Mersin", rating: 4.3, reviewCount: 650, area: "Akdeniz", commentTr: "Akdeniz'de tereyağlı pilav üstü didiklenmiş sıcak tavuk ve nohut.", commentEn: "Shredded hot chicken and chickpea over buttered rice in Akdeniz." },
    { name: "Pilavcı Ahmet Usta (Mezitli)", rating: 4.4, reviewCount: 520, area: "Mezitli", commentTr: "Mezitli'de esnaf usulü sıcak, taze ve bütçe dostu tavuklu pilav menüleri.", commentEn: "Artisan style hot, fresh and budget-friendly chicken rice menus in Mezitli." },
    { name: "Çarşı Sokak Pilavcıları", rating: 4.1, reviewCount: 380, area: "Akdeniz", commentTr: "Mersin çarşısında ayaküstü atıştırabileceğiniz sıcak, hesaplı sokak pilavı.", commentEn: "Hot, affordable street rice that you can grab on the go in Mersin bazaar." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Ahmet", rating: 4.5, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da köz kokulu, bol yeşillikli bütçe dostu ekmek arası köfte.", commentEn: "Grill-scented, budget-friendly meatball sandwich with rich greens in Pozcu." },
    { name: "Çıtır Köfte Salonu", rating: 4.3, reviewCount: 620, area: "Mezitli", commentTr: "Mezitli'de çıtır çıtır pişen, sıcak ve ekonomik köfte ekmek porsiyonları.", commentEn: "Crispy cooked, hot and economic meatball sandwich portions in Mezitli." },
    { name: "Çarşı Seyyar Köftecileri", rating: 4.4, reviewCount: 350, area: "Akdeniz", commentTr: "Mersin çarşı içinde gece saatlerinde dumanı üstünde tüten ucuz seyyar köfte.", commentEn: "Cheap mobile meatball sandwich steaming hot during night hours in Mersin bazaar." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Akdeniz Pide & Lahmacun", rating: 4.4, reviewCount: 820, area: "Akdeniz", commentTr: "Fırından yeni çıkmış sıcak lahmacun ve yanında nefis süzme mercimek çorbası.", commentEn: "Lahmacun fresh out of the oven accompanied by delicious strained lentil soup." },
    { name: "Sini Restoran (Ekonomik Menü)", rating: 4.3, reviewCount: 1650, area: "Pozcu", commentTr: "Pozcu'da çorba ve kıtır lahmacunu bir arada sunan son derece hesaplı menü.", commentEn: "Highly affordable menu combining soup and crispy lahmacun in Pozcu." },
    { name: "Güven Lokantası", rating: 4.2, reviewCount: 540, area: "Mezitli", commentTr: "Mezitli'de esnaf tarzı sıcak çorba ve pide çeşitlerini ucuza sunan mekan.", commentEn: "Place in Mezitli offering artisan style warm soup and pide varieties cheaply." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Çamlıyayla Kahvaltı Evi (Ekonomik Seçenekler)", rating: 4.5, reviewCount: 950, area: "Mezitli", commentTr: "Mezitli'de tereyağlı sıcak yumurta kapama ve ekmek banmalık taze menemen.", commentEn: "Buttered warm egg kapama and fresh menemen for dipping bread in Mezitli." },
    { name: "Saçkan Kahvaltı Salonu", rating: 4.4, reviewCount: 680, area: "Pozcu", commentTr: "Pozcu'da bol domatesli, sıcak ve sulu tavada esnaf menemeni.", commentEn: "Artisan menemen in pan, hot and juicy with rich tomatoes, in Pozcu." },
    { name: "Antik Cafe & Kahvaltı", rating: 4.3, reviewCount: 420, area: "Yenişehir", commentTr: "Yenişehir'de samimi ortamda sunulan sıcak yumurtalı atıştırmalıklar.", commentEn: "Warm egg snacks served in a friendly atmosphere in Yenisehir." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe Mersin", rating: 4.5, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da sıcak salçalı sosisli sandviç ve bütçe dostu atıştırmalıklar.", commentEn: "Hot dog sandwich with warm tomato paste and budget-friendly snacks in Pozcu." },
    { name: "Pozcu Han Garaj Büfeleri", rating: 4.3, reviewCount: 540, area: "Pozcu", commentTr: "Garaj bölgesinde hızlı hazırlanan bol malzemeli sıcak ve ucuz sosisli.", commentEn: "Quickly prepared, rich ingredient hot and cheap hot dog in Garaj area." },
    { name: "Bambi Cafe (Mersin Şubesi)", rating: 4.2, reviewCount: 780, area: "Yenişehir", commentTr: "Yenişehir şubesinde meşhur sıcak sosisli sandviç ve ıslak burger çeşitleri.", commentEn: "Famous hot hot dog sandwich and wet burger varieties at Yenisehir branch." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Evce Ev Yemekleri", rating: 4.5, reviewCount: 620, area: "Mezitli", commentTr: "Mezitli'de ev yemeği kalitesinde sunulan sıcak kıymalı patates oturtma.", commentEn: "Warm potato moussaka with minced meat served in home-style quality in Mezitli." },
    { name: "Hatun Mutfak", rating: 4.4, reviewCount: 450, area: "Pozcu", commentTr: "Pozcu'da bütçe dostu öğle menüsünde sıcak servis edilen fırında patates.", commentEn: "Baked potato served warm in budget-friendly lunch menu in Pozcu." },
    { name: "Nar Ev Yemekleri", rating: 4.3, reviewCount: 380, area: "Yenişehir", commentTr: "Yenişehir'de sağlıklı, lezzetli ve son derece hesaplı sıcak patates yemekleri.", commentEn: "Healthy, delicious and highly affordable warm potato dishes in Yenisehir." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Merkez Lokantası", rating: 4.5, reviewCount: 1200, area: "Akdeniz", commentTr: "Akdeniz'de geleneksel usulde helmelenmiş sıcak kuru fasulye ve sade pilav.", commentEn: "Traditional style soft cooked warm white beans and plain rice in Akdeniz." },
    { name: "Hacıbaba Lokantası (Esnaf Menüsü)", rating: 4.4, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da doyurucu ve bütçe dostu sıcak kuru fasulye pilav esnaf menüsü.", commentEn: "Satisfying and budget-friendly warm white beans and rice artisan menu in Pozcu." },
    { name: "Eshab-ı Kehf Esnaf Lokantası", rating: 4.3, reviewCount: 410, area: "Tarsus", commentTr: "Tarsus'ta tarihi havada sunulan çok lezzetli ve ucuz kuru fasulye pilav.", commentEn: "Very delicious and cheap white beans and rice served in historic vibe in Tarsus." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı Mersin (Mersin Üniversitesi Kampüs Civarı)", rating: 4.4, reviewCount: 920, area: "Yenişehir", commentTr: "Üniversite kapısında öğrencilere özel sıcak ve bol soslu makarna tabakları.", commentEn: "Hot and richly sauced pasta plates special for students at the university gate." },
    { name: "Pasta Express Mersin", rating: 4.2, reviewCount: 580, area: "Pozcu", commentTr: "Pozcu'da hızlı kutuda servis edilen sıcak, ekonomik İtalyan makarnaları.", commentEn: "Warm, economic Italian pastas served in quick boxes in Pozcu." },
    { name: "Leman Kültür (Öğrenci Menüsü)", rating: 4.1, reviewCount: 1650, area: "Yenişehir", commentTr: "Yenişehir'de bütçe dostu öğrenci menüsünde sunulan doyurucu sıcak makarnalar.", commentEn: "Satisfying hot pastas offered in budget-friendly student menu in Yenisehir." }
  ],
  "Gözleme": [
    { name: "Çamlıyayla Gözleme Evleri", rating: 4.6, reviewCount: 1350, area: "Yenişehir", commentTr: "Yenişehir'de el açması sacda pişen sıcacık peynirli ve patatesli gözlemeler.", commentEn: "Hand-rolled warm cheese and potato gözleme cooked on iron plate in Yenisehir." },
    { name: "Yörük Çadırı Gözleme (Mezitli Sahil)", rating: 4.3, reviewCount: 880, area: "Mezitli", commentTr: "Mezitli sahilinde deniz havası eşliğinde sunulan sıcak tereyağlı gözleme.", commentEn: "Warm buttered gözleme served with sea breeze on Mezitli coast." },
    { name: "Viranşehir Gözleme Salonu", rating: 4.4, reviewCount: 650, area: "Viranşehir", commentTr: "Viranşehir'de çıtır çıtır sacda pişmiş, ekonomik otlu peynirli gözleme.", commentEn: "Economic gözleme with herbs and cheese cooked on crispy iron plate in Viransehir." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu", rating: 4.5, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da sıcacık lavaşa sarılan Mersin usulü bol peynirli sıkma dürüm.", commentEn: "Mersin style squeeze wrap with rich cheese rolled in warm flatbread in Pozcu." },
    { name: "Mersin Sıkma & Gözleme Evi", rating: 4.4, reviewCount: 680, area: "Mezitli", commentTr: "Mezitli'de fırından yeni çıkmış sıcak bazlamayla yapılan patatesli sıkma.", commentEn: "Squeeze wrap with potato made with warm flatbread fresh from the oven in Mezitli." },
    { name: "Akdeniz Sıkma Evi", rating: 4.3, reviewCount: 450, area: "Akdeniz", commentTr: "Akdeniz çarşı bölgesinde ucuz ve doyurucu sıcak peynirli soğanlı sıkmalar.", commentEn: "Cheap and satisfying warm squeeze wraps with cheese and onion in Akdeniz bazaar." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da hızlıca dürüm yapılan bütçe dostu taze acılı çiğ köfte dürüm.", commentEn: "Budget-friendly fresh spicy raw meatball wrap prepared quickly in Pozcu." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 1450, area: "Mezitli", commentTr: "Mezitli'de öğrenci dostu dürüm menüleriyle hızlı ve lezzetli atıştırmalık.", commentEn: "Fast and delicious snack with student-friendly wrap menus in Mezitli." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 680, area: "Akdeniz", commentTr: "Akdeniz'de son derece hesaplı ve doyurucu çiğ köfte dürüm çeşitleri.", commentEn: "Highly affordable and satisfying raw meatball wrap varieties in Akdeniz." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 880, area: "Akdeniz", commentTr: "Akdeniz çarşısında sabah saatlerinde içebileceğiniz sıcak ev yapımı tarhana.", commentEn: "Warm homemade tarhana soup you can drink in morning hours in Akdeniz bazaar." },
    { name: "Paçacı Şemsi Mersin", rating: 4.3, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da 24 saat sıcak çorba ve taze ekmek sunan popüler çorbacı.", commentEn: "Popular soup place offering 24-hour warm soup and fresh bread in Pozcu." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 520, area: "Akdeniz", commentTr: "Nostaljik esnaf ortamında sıcacık sunulan hesaplı şifa kaynağı tarhana.", commentEn: "Affordable healing source tarhana served warm in nostalgic artisan environment." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.4, reviewCount: 650, area: "Mezitli", commentTr: "Mezitli'de ev yapımı tadında sebzeli bulgur pilavı ve taze cacık menüsü.", commentEn: "Vegetable bulgur rice and fresh cacik menu in homemade taste in Mezitli." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 420, area: "Pozcu", commentTr: "Pozcu'da öğle esnaf menüsünde sunulan doyurucu sıcak bulgur ve cacık.", commentEn: "Satisfying hot bulgur and cacik offered in lunch artisan menu in Pozcu." },
    { name: "Lezzet Ambarı", rating: 4.2, reviewCount: 310, area: "Yenişehir", commentTr: "Yenişehir'de son derece bütçe dostu, sıcak ve taze anne yemekleri.", commentEn: "Highly budget-friendly, warm and fresh home-style meals in Yenisehir." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Mersin Simit Fırını", rating: 4.6, reviewCount: 1850, area: "Akdeniz", commentTr: "Akdeniz'de odun ateşinde pişen bol susamlı çıtır sıcak Mersin simidi.", commentEn: "Crispy hot Mersin simit with rich sesame seeds cooked over wood fire in Akdeniz." },
    { name: "Pozcu Simit Sarayı", rating: 4.4, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da sabah saatlerinde taze çıkan simit, peynir ve soğuk ayran üçlüsü.", commentEn: "Fresh simit, cheese and cold ayran trio coming out in the morning in Pozcu." },
    { name: "Mersin Sahil Parkı (Seyyar Simitçiler Alanı)", rating: 4.5, reviewCount: 2200, area: "Yenişehir", commentTr: "Mersin sahil parkında seyyar satıcılardan alınan hesaplı çıtır simit keyfi.", commentEn: "Enjoyment of affordable crispy simit bought from mobile vendors in Mersin beach park." }
  ],
  "Kıymalı Makarna": [
    { name: "Bizim Ev Yemekleri", rating: 4.4, reviewCount: 520, area: "Pozcu", commentTr: "Pozcu'da esnaf usulü sıcak kıymalı salçalı makarna ve yoğurt ikilisi.", commentEn: "Artisan style warm minced meat pasta with tomato paste and yogurt duo in Pozcu." },
    { name: "Anaeli Mutfak", rating: 4.3, reviewCount: 410, area: "Mezitli", commentTr: "Mezitli'de anne eli değmiş gibi lezzetli ve bütçe dostu kıymalı makarna.", commentEn: "Delicious and budget-friendly minced meat pasta as if made by mother's hands in Mezitli." },
    { name: "Keyifli Mutfak", rating: 4.2, reviewCount: 280, area: "Yenişehir", commentTr: "Yenişehir'de öğrenciler için son derece doyurucu ve ucuz sıcak makarna porsiyonu.", commentEn: "Highly satisfying and cheap hot pasta portion for students in Yenisehir." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Sarnıç Cafe Bistro (Kahvaltı Menüsü)", rating: 4.5, reviewCount: 920, area: "Viranşehir", commentTr: "Viranşehir'de deniz manzaralı avluda sunulan çıtır sıcak yumurtalı ekmek.", commentEn: "Crispy warm egg-coated fried bread served in courtyard with sea view in Viransehir." },
    { name: "David People Coffee & Food (Ekonomik Atıştırmalıklar)", rating: 4.3, reviewCount: 1200, area: "Pozcu", commentTr: "Pozcu'da kahve yanına atıştırmalık olarak sunulan sıcak yumurtalı ekmek dilimleri.", commentEn: "Warm egg-coated fried bread slices served as snacks alongside coffee in Pozcu." },
    { name: "Mezitli Kahvaltı Salonları", rating: 4.2, reviewCount: 650, area: "Mezitli", commentTr: "Mezitli'de bütçe dostu serpme kahvaltılarda sunulan sıcak yumurtalı ekmekler.", commentEn: "Warm egg-coated bread served in budget-friendly breakfasts in Mezitli." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Veggie Mersin", rating: 4.6, reviewCount: 420, area: "Pozcu", commentTr: "Pozcu'da bitkisel beslenenler için sağlıklı, sıcak zeytinyağlı yeşil mercimek.", commentEn: "Healthy, warm olive oil green lentils for plant-based eaters in Pozcu." },
    { name: "Yeşil Ev Yemekleri", rating: 4.4, reviewCount: 510, area: "Mezitli", commentTr: "Mezitli'de esnaf usulü öğle menüsünde sıcak sunulan zeytinyağlı mercimek yemeği.", commentEn: "Olive oil lentil dish served warm in artisan-style lunch menu in Mezitli." },
    { name: "Ege Esnaf Lokantası", rating: 4.3, reviewCount: 380, area: "Akdeniz", commentTr: "Akdeniz'de tencerede pişen bütçe dostu, sıcak ve lezzetli esnaf mercimeği.", commentEn: "Budget-friendly, warm and delicious artisan lentils cooked in pot in Akdeniz." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Tostçu Mehmet (Mersin)", rating: 4.7, reviewCount: 3200, area: "Pozcu", commentTr: "Mersin'de ütüyle basılan bol salçalı kaşarlı efsanevi sıcak tost büfesi.", commentEn: "Legendary warm toast buffet with rich tomato paste and kashar pressed with iron in Mersin." },
    { name: "Barış Büfe", rating: 4.3, reviewCount: 780, area: "Akdeniz", commentTr: "Akdeniz çarşı bölgesinde hızlıca atıştırabileceğiniz ucuz salçalı tostlar.", commentEn: "Cheap tomato paste toasts that you can grab quickly in Akdeniz bazaar area." },
    { name: "Kampüs Büfe Mersin", rating: 4.2, reviewCount: 650, area: "Yenişehir", commentTr: "Yenişehir'de üniversite gençliğinin favori bütçe dostu salçalı tost büfesi.", commentEn: "Favorite budget-friendly tomato paste toast buffet of university youth in Yenisehir." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Crop Coffee Co. (Hafif ve Ekonomik Yan Menüler)", rating: 4.4, reviewCount: 880, area: "Pozcu", commentTr: "Pozcu'da şık ortamda taze domates sosuyla sunulan sıcak İtalyan makarnası.", commentEn: "Warm Italian pasta served with fresh tomato sauce in elegant environment in Pozcu." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.3, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir'de kahvenizin yanına eşlik eden domates soslu sıcak Napoliten.", commentEn: "Warm Napoliten with tomato sauce accompanying your coffee in Yenisehir." },
    { name: "Arabica Coffee House  mersin", rating: 4.2, reviewCount: 1100, area: "Mezitli", commentTr: "Mezitli şubesinde hafif ve son derece bütçe dostu sıcak Napoliten makarna tabağı.", commentEn: "Light and highly budget-friendly hot Napoliten pasta plate at Mezitli branch." }
  ]
};

export const ECONOMIC_ADANA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Paşa Döner (Ziyapaşa)", rating: 4.4, reviewCount: 1350, area: "Ziyapaşa", commentTr: "Ziyapaşa'da bütçe dostu, sıcak ve bol soslu lezzetli tavuk döner dürüm.", commentEn: "Budget-friendly, hot and richly sauced delicious chicken doner wrap in Ziyapasa." },
    { name: "Katık Döner Adana", rating: 4.3, reviewCount: 920, area: "Barajyolu", commentTr: "Barajyolu'nda meşhur Hatay usulü soslu ve patatesli sıcak tavuk dürüm.", commentEn: "Famous Hatay style hot chicken wrap with sauce and fries in Barajyolu." },
    { name: "Öncü Döner", rating: 4.2, reviewCount: 1150, area: "Çukurova", commentTr: "Çukurova'da öğrencilere özel doyurucu, ekonomik sıcak tavuk döner dürüm.", commentEn: "Satisfying, economic hot chicken doner wrap special for students in Cukurova." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı Adana", rating: 4.3, reviewCount: 580, area: "Seyhan", commentTr: "Seyhan'da tereyağlı pilav üstü taze didiklenmiş tavuk ve sıcak nohut.", commentEn: "Fresh shredded chicken and warm chickpea over buttered rice in Seyhan." },
    { name: "Pilavcı Ahmet Usta (Turgut Özal)", rating: 4.4, reviewCount: 480, area: "Turgut Özal", commentTr: "Turgut Özal bulvarında taze ve bütçe dostu, lezzetli tavuklu pilav menüsü.", commentEn: "Fresh and budget-friendly, delicious chicken rice menu on Turgut Ozal boulevard." },
    { name: "Barajyolu Sokak Pilavcıları", rating: 4.1, reviewCount: 320, area: "Barajyolu", commentTr: "Barajyolu'nda gece saatlerinde ayaküstü alabileceğiniz sıcak sokak pilavı.", commentEn: "Hot street rice that you can grab on the go during night hours in Barajyolu." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Ahmet Usta", rating: 4.5, reviewCount: 880, area: "Ziyapaşa", commentTr: "Ziyapaşa'da ızgarada pişen, bol yeşillikli bütçe dostu köfte ekmek.", commentEn: "Grilled, budget-friendly meatball sandwich with rich greens in Ziyapasa." },
    { name: "Tarihi Eminönü Köftecisi (Adana)", rating: 4.4, reviewCount: 650, area: "Seyhan", commentTr: "Seyhan'da nostaljik lezzetiyle sunulan sıcak, çıtır köfte ekmek porsiyonu.", commentEn: "Hot, crispy meatball sandwich portion served with nostalgic taste in Seyhan." },
    { name: "Barajyolu Seyyar Köftecileri", rating: 4.3, reviewCount: 420, area: "Barajyolu", commentTr: "Barajyolu'nda dumanı üstünde, hesaplı ve doyurucu sokak köftesi keyfi.", commentEn: "Affordable and satisfying street meatball enjoyment steaming hot in Barajyolu." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Akdeniz Pide & Lahmacun", rating: 4.4, reviewCount: 780, area: "Seyhan", commentTr: "Çıtır çıtır kıymalı lahmacun ve yanında sıcak süzme mercimek çorbası.", commentEn: "Crispy lahmacun with minced meat accompanied by hot strained lentil soup." },
    { name: "Seci Seçkin Lokantası (Ekonomik Menü)", rating: 4.3, reviewCount: 1450, area: "Ziyapaşa", commentTr: "Ziyapaşa'da lahmacun ve sıcak çorbayı ucuza bir arada sunan esnaf menüsü.", commentEn: "Artisan menu offering lahmacun and warm soup together cheaply in Ziyapasa." },
    { name: "Güven Lokantası", rating: 4.2, reviewCount: 490, area: "Barajyolu", commentTr: "Barajyolu'nda bütçe dostu sıcak çorba ve kıymalı pide çeşitleri.", commentEn: "Budget-friendly hot soup and minced meat pide varieties in Barajyolu." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Çukurova Kahvaltı Evi", rating: 4.5, reviewCount: 890, area: "Çukurova", commentTr: "Çukurova'da tereyağlı sıcak yumurta kapama ve bol malzemeli taze menemen.", commentEn: "Buttered hot egg kapama and fresh menemen with rich ingredients in Cukurova." },
    { name: "Saçkan Kahvaltı Salonu", rating: 4.4, reviewCount: 620, area: "Ziyapaşa", commentTr: "Ziyapaşa'da tavada dumanı üstünde taze domatesli sıcak menemen keyfi.", commentEn: "Fresh tomato hot menemen enjoyment steaming in pan in Ziyapasa." },
    { name: "Antik Cafe & Kahvaltı", rating: 4.3, reviewCount: 380, area: "Barajyolu", commentTr: "Barajyolu'nda samimi ortamda sunulan sıcak yumurtalı bütçe dostu kahvaltılıklar.", commentEn: "Warm egg budget-friendly breakfast items served in a friendly atmosphere in Barajyolu." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe Adana", rating: 4.5, reviewCount: 950, area: "Ziyapaşa", commentTr: "Ziyapaşa'da sıcak salçalı sosisli sandviç ve bütçe dostu soğuk içecekler.", commentEn: "Hot dog sandwich with warm tomato paste and budget-friendly cold drinks in Ziyapasa." },
    { name: "Barajyolu Han Garaj Büfeleri", rating: 4.3, reviewCount: 490, area: "Barajyolu", commentTr: "Barajyolu'nda hızlı hazırlanan, doyurucu and son derece hesaplı sıcak sosisli.", commentEn: "Quickly prepared, satisfying and highly affordable hot dog in Barajyolu." },
    { name: "Bambi Cafe (Adana Şubesi)", rating: 4.2, reviewCount: 720, area: "Çukurova", commentTr: "Çukurova'da meşhur ıslak burger ve sıcak sosisli sandviç çeşitleri.", commentEn: "Famous wet burger and hot hot dog sandwich varieties in Cukurova." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.5, reviewCount: 580, area: "Çukurova", commentTr: "Çukurova'da fırından yeni çıkmış sıcak kıymalı patates oturtma yemeği.", commentEn: "Freshly baked warm potato moussaka with minced meat in Cukurova." },
    { name: "Sini Ev Yemekleri", rating: 4.4, reviewCount: 410, area: "Ziyapaşa", commentTr: "Ziyapaşa'da esnaf usulü öğle menüsünde sıcak servis edilen fırında patates.", commentEn: "Baked potato served warm in artisan-style lunch menu in Ziyapasa." },
    { name: "Bizim Ev Yemekleri", rating: 4.2, reviewCount: 350, area: "Barajyolu", commentTr: "Barajyolu'nda ev yapımı lezzetinde, bütçe dostu sıcak tencere patatesi.", commentEn: "Budget-friendly hot pot potato in homemade taste in Barajyolu." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Merkez Lokantası", rating: 4.5, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan'da kıvamlı sıcak kuru fasulye ve tane tane sade pirinç pilavı.", commentEn: "Thick warm white beans and grain-by-grain plain rice in Seyhan." },
    { name: "Boğaziçi Lokantası (Esnaf Menüsü)", rating: 4.4, reviewCount: 880, area: "Ziyapaşa", commentTr: "Ziyapaşa'da geleneksel esnaf menüsünde sunulan sıcak kuru fasulye pilav.", commentEn: "Warm white beans and rice served in traditional artisan menu in Ziyapasa." },
    { name: "Seyhan Belediyesi Lezzet Durağı", rating: 4.3, reviewCount: 390, area: "Seyhan", commentTr: "Seyhan'da belediye güvencesiyle sunulan son derece ucuz kuru fasulye pilav.", commentEn: "Highly cheap white beans and rice served with municipality assurance in Seyhan." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı Adana (Çukurova Üniversitesi Kampüs Civarı)", rating: 4.4, reviewCount: 890, area: "Çukurova", commentTr: "Kampüs girişinde öğrencilerin gözdesi, sıcak ve doyurucu makarna tabakları.", commentEn: "Students' favorite hot and satisfying pasta plates at the campus entrance." },
    { name: "Pasta Express Adana", rating: 4.2, reviewCount: 520, area: "Barajyolu", commentTr: "Barajyolu'nda kutuda pratik sunulan sıcak ve bütçe dostu soslu makarnalar.", commentEn: "Warm and budget-friendly sauced pastas served practically in boxes in Barajyolu." },
    { name: "Leman Kültür (Öğrenci Menüsü)", rating: 4.1, reviewCount: 1550, area: "Ziyapaşa", commentTr: "Ziyapaşa'da bütçe dostu öğrenci menüsü kapsamında sunulan sıcak makarnalar.", commentEn: "Hot pastas served within budget-friendly student menu in Ziyapasa." }
  ],
  "Gözleme": [
    { name: "Çakıt Gözleme Evleri", rating: 4.6, reviewCount: 1250, area: "Çukurova", commentTr: "Çukurova'da incecik el açması hamurdan sıcacık peynirli otlu gözleme.", commentEn: "Warm cheese and herb gözleme made from thin hand-rolled dough in Cukurova." },
    { name: "Yörük Çadırı Gözleme (Menderes Sahil)", rating: 4.3, reviewCount: 820, area: "Seyhan", commentTr: "Menderes göl kenarında harika manzara eşliğinde sıcak sac gözlemesi.", commentEn: "Warm iron plate gözleme accompanied by wonderful view on Menderes lake side." },
    { name: "Beyazevler Gözleme Salonu", rating: 4.4, reviewCount: 580, area: "Beyazevler", commentTr: "Beyazevler'de bütçe dostu çıtır sacda pişmiş sıcak patatesli gözleme.", commentEn: "Warm potato gözleme cooked on budget-friendly crispy iron plate in Beyazevler." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu", rating: 4.5, reviewCount: 880, area: "Ziyapaşa", commentTr: "Ziyapaşa'da sıcacık el yapımı bazlamaya sarılan taze peynirli sıkma dürüm.", commentEn: "Fresh cheese squeeze wrap rolled in warm handmade flatbread in Ziyapasa." },
    { name: "Çukurova Sıkma & Gözleme", rating: 4.4, reviewCount: 650, area: "Çukurova", commentTr: "Çukurova'da fırından yeni çıkmış sıcak lavaşla sarılan patatesli sıkma.", commentEn: "Squeeze wrap with potato rolled in hot flatbread fresh from the oven in Cukurova." },
    { name: "Kozan Sıkma Evi", rating: 4.3, reviewCount: 390, area: "Seyhan", commentTr: "Seyhan'da hızlıca hazırlanan ucuz ve çok lezzetli sıcak peynirli sıkmalar.", commentEn: "Cheap and very delicious hot cheese squeeze wraps prepared quickly in Seyhan." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 890, area: "Barajyolu", commentTr: "Barajyolu'nda taze yeşilliklerle sarılan acılı ve ucuz çiğ köfte dürüm.", commentEn: "Spicy and cheap raw meatball wrap rolled with fresh greens in Barajyolu." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 1350, area: "Çukurova", commentTr: "Çukurova'da öğrenci dostu dürüm kampanyalarıyla hızlı ve lezzetli atıştırmalık.", commentEn: "Fast and delicious snack with student-friendly wrap campaigns in Cukurova." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 620, area: "Seyhan", commentTr: "Seyhan'da son derece hesaplı ve doyurucu porsiyonlu çiğ köfte dürümleri.", commentEn: "Highly affordable and satisfying portioned raw meatball wraps in Seyhan." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 820, area: "Seyhan", commentTr: "Seyhan çarşıda sabahın ilk ışıklarında içebileceğiniz sıcak ev tarhanası.", commentEn: "Warm home-style tarhana soup you can drink in early morning in Seyhan bazaar." },
    { name: "Paçacı Şemsi Adana", rating: 4.3, reviewCount: 980, area: "Ziyapaşa", commentTr: "Ziyapaşa'da 24 saat sıcak çorba servisi yapan, taze ekmekli popüler mekan.", commentEn: "Popular place offering 24-hour warm soup service with fresh bread in Ziyapasa." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 480, area: "Seyhan", commentTr: "Nostaljik esnaf ortamında dumanı üstünde tüten bütçe dostu sıcak tarhana.", commentEn: "Budget-friendly warm tarhana steaming hot in nostalgic artisan environment." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Yeşil Ev Yemekleri", rating: 4.4, reviewCount: 590, area: "Çukurova", commentTr: "Çukurova'da ev yapımı tadında sebzeli bulgur pilavı ve taze cacık ikilisi.", commentEn: "Vegetable bulgur rice and fresh cacik duo in homemade taste in Cukurova." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 380, area: "Ziyapaşa", commentTr: "Ziyapaşa'da öğle esnaf menüsünde sunulan doyurucu sıcak bulgur ve soğuk cacık.", commentEn: "Satisfying hot bulgur and cold cacik offered in lunch artisan menu in Ziyapasa." },
    { name: "Teras Cafe & Bistro (Ev Yemekleri Menüsü)", rating: 4.2, reviewCount: 290, area: "Barajyolu", commentTr: "Barajyolu'nda bütçe dostu öğrenci menüsünde sıcak bulgur ve ferahlatıcı cacık.", commentEn: "Warm bulgur and refreshing cacik in budget-friendly student menu in Barajyolu." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Adana Simit Fırını", rating: 4.6, reviewCount: 1650, area: "Seyhan", commentTr: "Seyhan'da taş fırında pişen bol susamlı, sıcak çıtır Adana simidi.", commentEn: "Steaming hot, crispy Adana simit with rich sesame seeds cooked in stone oven in Seyhan." },
    { name: "Ziyapaşa Simit Sarayı", rating: 4.4, reviewCount: 880, area: "Ziyapaşa", commentTr: "Ziyapaşa'da taze simit, krem peynir ve buz gibi soğuk ayran üçlüsü.", commentEn: "Fresh simit, cream cheese and ice-cold ayran trio in Ziyapasa." },
    { name: "Atatürk Parkı (Seyyar Simitçiler Alanı)", rating: 4.5, reviewCount: 1950, area: "Ziyapaşa", commentTr: "Atatürk Parkı gölgesinde seyyar satıcılardan alınan hesaplı çıtır simit keyfi.", commentEn: "Affordable crispy simit enjoyment bought from mobile vendors under Atatürk Park shadow." }
  ],
  "Kıymalı Makarna": [
    { name: "Anaeli Mutfak", rating: 4.4, reviewCount: 480, area: "Çukurova", commentTr: "Çukurova'da ev usulü bol kıymalı sıcak makarna ve yanında taze yoğurt.", commentEn: "Home-style warm pasta with rich minced meat accompanied by fresh yogurt in Cukurova." },
    { name: "Keyifli Mutfak", rating: 4.3, reviewCount: 380, area: "Barajyolu", commentTr: "Barajyolu'nda öğrenciler için çok doyurucu ve ucuz kıymalı makarna porsiyonu.", commentEn: "Very satisfying and cheap minced meat pasta portion for students in Barajyolu." },
    { name: "Çukurova Öğrenci Evi Yemekleri", rating: 4.2, reviewCount: 250, area: "Beyazevler", commentTr: "Beyazevler'de bütçe dostu, sıcak ve bol soslu ev yemeği tarzında kıymalı makarna.", commentEn: "Home-style minced meat pasta, budget-friendly and richly sauced, in Beyazevler." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Göksel Cafe Bistro (Kahvaltı Menüsü)", rating: 4.5, reviewCount: 880, area: "Ziyapaşa", commentTr: "Ziyapaşa'da şık avluda sunulan çıtır sıcak yumurtalı ekmek kızartmaları.", commentEn: "Crispy hot egg-coated fried bread served in elegant courtyard in Ziyapasa." },
    { name: "David People Coffee & Food (Ekonomik Atıştırmalıklar)", rating: 4.3, reviewCount: 1100, area: "Barajyolu", commentTr: "Barajyolu şubesinde kahve yanına ekonomik atıştırmalık sıcak yumurtalı ekmek.", commentEn: "Economic snack warm egg-coated bread served alongside coffee at Barajyolu branch." },
    { name: "Barajyolu Kahvaltı Salonları", rating: 4.2, reviewCount: 580, area: "Barajyolu", commentTr: "Barajyolu'nda bütçe dostu öğrenci kahvaltılarının sıcak vazgeçilmezi.", commentEn: "Warm indispensable item of budget-friendly student breakfasts in Barajyolu." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Veggie Adana", rating: 4.6, reviewCount: 390, area: "Ziyapaşa", commentTr: "Ziyapaşa'da sağlıklı beslenmek isteyenler için zeytinyağlı sıcak yeşil mercimek.", commentEn: "Olive oil warm green lentils for those who want to eat healthy in Ziyapasa." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 480, area: "Seyhan", commentTr: "Seyhan'da esnaf usulü öğle menüsünde sıcak sunulan kıvamlı yeşil mercimek.", commentEn: "Thick green lentils served warm in artisan-style lunch menu in Seyhan." },
    { name: "Lezzet Ambarı", rating: 4.3, reviewCount: 320, area: "Çukurova", commentTr: "Çukurova'da tencerede pişen bütçe dostu, sıcak ve lezzetli yeşil mercimek yemeği.", commentEn: "Budget-friendly, warm and delicious green lentil dish cooked in pot in Cukurova." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Tostçu Mehmet (Adana)", rating: 4.7, reviewCount: 3100, area: "Seyhan", commentTr: "Adana'da ütüyle basılan bol salçalı kaşarlı efsanevi sıcak tost büfesi.", commentEn: "Legendary warm toast buffet with rich tomato paste and kashar pressed with iron in Adana." },
    { name: "Barış Büfe", rating: 4.3, reviewCount: 720, area: "Barajyolu", commentTr: "Barajyolu'nda hızlıca atıştırabileceğiniz bütçe dostu sıcak salçalı tostlar.", commentEn: "Budget-friendly hot tomato paste toasts that you can grab quickly in Barajyolu." },
    { name: "Kampüs Büfe Adana", rating: 4.2, reviewCount: 580, area: "Çukurova", commentTr: "Çukurova Üniversitesi kampüsünde öğrencilerin favori hesaplı tost adresi.", commentEn: "Favorite affordable toast address of students in Cukurova University campus." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Crop Coffee Co. (Hafif ve Ekonomik Yan Menüler)", rating: 4.4, reviewCount: 820, area: "Ziyapaşa", commentTr: "Ziyapaşa'da şık ortamda taze domates sosuyla sunulan sıcak İtalyan makarnası.", commentEn: "Warm Italian pasta served with fresh tomato sauce in elegant environment in Ziyapasa." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.3, reviewCount: 890, area: "Barajyolu", commentTr: "Barajyolu'nda kahvenizin yanına eşlik eden domates soslu sıcak Napoliten.", commentEn: "Warm Napoliten with tomato sauce accompanying your coffee in Barajyolu." },
    { name: "Arabica Coffee House", rating: 4.2, reviewCount: 950, area: "Çukurova", commentTr: "Çukurova şubesinde hafif ve son derece bütçe dostu sıcak Napoliten makarna tabağı.", commentEn: "Light and highly budget-friendly hot Napoliten pasta plate at Cukurova branch." }
  ]
};

export const ECONOMIC_GAZIANTEP_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Tatbak Döner (Üniversite)", rating: 4.4, reviewCount: 1250, area: "Yeditepe", commentTr: "Üniversite civarında son derece bütçe dostu, lezzetli ve sıcak tavuk döner.", commentEn: "Highly budget-friendly, delicious and hot chicken doner around university." },
    { name: "Efesos Döner Gaziantep", rating: 4.3, reviewCount: 850, area: "Karataş", commentTr: "Karataş'ta meşhur soslu ve patatesli doyurucu sıcak tavuk döner dürüm.", commentEn: "Famous hot chicken doner wrap with sauce and fries in Karatas." },
    { name: "Beğendik Döner", rating: 4.2, reviewCount: 980, area: "Şahinbey", commentTr: "Şahinbey'de hızlı, ekonomik ve lezzetli sıcak döner dürüm menüleri.", commentEn: "Fast, economic and delicious hot doner wrap menus in Sahinbey." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı Gaziantep", rating: 4.3, reviewCount: 520, area: "Karataş", commentTr: "Karataş'ta tereyağlı pilav üstü didiklenmiş taze tavuk ve sıcak nohut.", commentEn: "Fresh shredded chicken and warm chickpea over buttered rice in Karatas." },
    { name: "Pilavcı Ahmet Usta (Yeditepe)", rating: 4.4, reviewCount: 410, area: "Yeditepe", commentTr: "Yeditepe'de öğrenciler için son derece hesaplı, taze ve lezzetli pilav.", commentEn: "Highly affordable, fresh and delicious chicken rice for students in Yeditepe." },
    { name: "Üniversite Bulvarı Sokak Pilavcıları", rating: 4.1, reviewCount: 290, area: "Şahinbey", commentTr: "Bulvarda hızlı ve sıcak atıştırabileceğiniz bütçe dostu sokak pilavı.", commentEn: "Budget-friendly street rice that you can grab quickly and hot on the boulevard." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Ahmet Usta", rating: 4.5, reviewCount: 820, area: "Şahinbey", commentTr: "Şahinbey'de köz kokulu, bol malzemeli ekonomik ekmek arası köfte.", commentEn: "Grill-scented, rich ingredient economic meatball sandwich in Sahinbey." },
    { name: "Tarihi Eminönü Köftecisi (Gaziantep)", rating: 4.4, reviewCount: 590, area: "Karataş", commentTr: "Karataş'ta çıtır ekmek arasında sunulan sıcak ve hesaplı köfte ekmek.", commentEn: "Hot and affordable meatball sandwich served in crispy bread in Karatas." },
    { name: "Karataş Seyyar Köftecileri", rating: 4.3, reviewCount: 380, area: "Karataş", commentTr: "Gece saatlerinde Karataş'ta dumanı üstünde ucuz seyyar köfte keyfi.", commentEn: "Steaming hot cheap mobile meatball enjoyment during night hours in Karatas." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Kadir Usta Lahmacun & Pide Salonu", rating: 4.4, reviewCount: 920, area: "Şahinbey", commentTr: "Fırından yeni çıkmış sıcacık lahmacun ve yanında nefis mercimek çorbası.", commentEn: "Warm lahmacun fresh out of the oven accompanied by delicious lentil soup." },
    { name: "Çıtır Pide & Lahmacun", rating: 4.3, reviewCount: 680, area: "Karataş", commentTr: "Karataş'ta gevrek lahmacun ve sıcak çorbayı ucuza sunan esnaf adresi.", commentEn: "Artisan address offering crispy lahmacun and warm soup cheaply in Karatas." },
    { name: "Gaziantep Esnaf Lokantası", rating: 4.2, reviewCount: 450, area: "Karagöz", commentTr: "Tarihi çarşıda bütçe dostu sıcak mercimek çorbası ve kıymalı pide.", commentEn: "Budget-friendly hot lentil soup and minced meat pide in historic bazaar." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Akşam Simit & Kahvaltı", rating: 4.5, reviewCount: 1650, area: "Şahinbey", commentTr: "Şahinbey'de sıcak tereyağlı yumurta kapama ve ekmek banmalık menemen.", commentEn: "Warm buttered egg kapama and menemen for dipping bread in Sahinbey." },
    { name: "Kahvaltı Dünyası İbrahimli", rating: 4.4, reviewCount: 950, area: "İbrahimli", commentTr: "İbrahimli'de taze ve bol malzemeli sıcak esnaf menemeni çeşitleri.", commentEn: "Fresh and rich ingredient warm artisan menemen varieties in Ibrahimli." },
    { name: "Yeditepe Menemen & Kahvaltı Salonu", rating: 4.3, reviewCount: 520, area: "Yeditepe", commentTr: "Yeditepe'de öğrenciler için son derece hesaplı sıcak yumurtalı menü.", commentEn: "Highly affordable hot egg menu for students in Yeditepe." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe Gaziantep", rating: 4.5, reviewCount: 880, area: "Şahinbey", commentTr: "Şahinbey'de sıcak salçalı sosisli sandviç ve bütçe dostu atıştırmalıklar.", commentEn: "Hot dog sandwich with warm tomato paste and budget-friendly snacks in Sahinbey." },
    { name: "Gaziantep Han Garaj Büfeleri", rating: 4.3, reviewCount: 420, area: "Karataş", commentTr: "Karataş garaj bölgesinde hızlı hazırlanan doyurucu ve hesaplı sosisli.", commentEn: "Quickly prepared satisfying and affordable hot dog in Karatas garage area." },
    { name: "David People (Atıştırmalık Bölümü)", rating: 4.2, reviewCount: 680, area: "Yeditepe", commentTr: "Yeditepe'de kahve yanında tercih edilen bütçe dostu sıcak sosisli.", commentEn: "Budget-friendly hot dog chosen alongside coffee in Yeditepe." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Adil Efendi Ev Yemekleri", rating: 4.5, reviewCount: 540, area: "Karagöz", commentTr: "Geleneksel lezzette sıcacık fırından çıkmış kıymalı patates oturtma.", commentEn: "Steaming hot potato moussaka with minced meat in traditional taste." },
    { name: "Türkan Ev Yemekleri", rating: 4.4, reviewCount: 390, area: "Karataş", commentTr: "Karataş'ta bütçe dostu öğle menüsünde sıcak servis edilen fırın patates.", commentEn: "Baked potato served warm in budget-friendly lunch menu in Karatas." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.2, reviewCount: 280, area: "Yeditepe", commentTr: "Yeditepe'de anne eli değmiş gibi sıcak, hesaplı ve doyurucu tencere yemeği.", commentEn: "Warm, affordable and satisfying pot dish as if made by mother's hands in Yeditepe." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Yesemek Gaziantep Mutfağı (Esnaf Menüsü)", rating: 4.6, reviewCount: 1850, area: "Şahinbey", commentTr: "Şahinbey'de geleneksel toprak kapta pişmiş kıvamlı kuru fasulye pilav.", commentEn: "Thick white beans and rice cooked in traditional clay pot in Sahinbey." },
    { name: "Aşina Gaziantep Mutfağı (Öğle Menüsü)", rating: 4.5, reviewCount: 1100, area: "Şahinbey", commentTr: "Şahinbey'de tencerede pişen bütçe dostu leziz kuru fasulye ve pilav.", commentEn: "Budget-friendly tasty white beans and rice cooked in pot in Sahinbey." },
    { name: "Sahan Restoran (Ekonomik Ev Yemekleri Bölümü)", rating: 4.4, reviewCount: 1450, area: "İbrahimli", commentTr: "İbrahimli'de bütçe dostu sıcak kuru fasulye esnaf menüsü alternatifi.", commentEn: "Budget-friendly warm white beans artisan menu alternative in Ibrahimli." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı Gaziantep (Gaziantep Üniversitesi Kampüs Civarı)", rating: 4.4, reviewCount: 820, area: "Yeditepe", commentTr: "Kampüs kapısında öğrencilerin gözdesi, sıcak ve bol soslu ucuz makarnalar.", commentEn: "Students' favorite hot and richly sauced cheap pastas at the campus gate." },
    { name: "Pasta Express Gaziantep", rating: 4.2, reviewCount: 490, area: "Karataş", commentTr: "Karataş'ta pratik kutularda servis edilen hızlı ve ekonomik sıcak makarnalar.", commentEn: "Fast and economic hot pastas served in practical boxes in Karatas." },
    { name: "Leman Kültür (Öğrenci Menüsü)", rating: 4.1, reviewCount: 1200, area: "Yeditepe", commentTr: "Yeditepe'de bütçe dostu öğrenci menüsünde sunulan doyurucu sıcak makarna.", commentEn: "Satisfying hot pasta served in budget-friendly student menu in Yeditepe." }
  ],
  "Gözleme": [
    { name: "Kır Kahvesi (Tarihi Gümrük Hanı)", rating: 4.6, reviewCount: 950, area: "Karagöz", commentTr: "Tarihi handa köz ateşinde pişen çıtır peynirli sıcak gözlemeler.", commentEn: "Crispy cheese warm gözleme cooked over embers in the historic inn." },
    { name: "Yörük Çadırı Gözleme (Erikçe Alanı)", rating: 4.4, reviewCount: 680, area: "Şahinbey", commentTr: "Erikçe mesire alanında doğa eşliğinde sunulan sıcacık tereyağlı gözleme.", commentEn: "Warm buttered gözleme served with nature in Erikce recreation area." },
    { name: "Karataş Gözleme Salonu", rating: 4.3, reviewCount: 520, area: "Karataş", commentTr: "Karataş'ta sacda taze pişen ucuz patatesli ve peynirli gözlemeler.", commentEn: "Cheap potato and cheese gözleme cooked fresh on iron plate in Karatas." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu Gaziantep", rating: 4.5, reviewCount: 650, area: "Karataş", commentTr: "Karataş'ta sıcacık lavaşla hazırlanan bol peynirli Mersin sıkması.", commentEn: "Mersin style squeeze wrap with rich cheese prepared in hot flatbread in Karatas." },
    { name: "Çukurova Sıkma & Gözleme (Yeditepe)", rating: 4.4, reviewCount: 510, area: "Yeditepe", commentTr: "Yeditepe'de öğrenciler için hızlı hazırlanan patatesli sıcak sıkma dürüm.", commentEn: "Warm squeeze wrap with potato prepared quickly for students in Yeditepe." },
    { name: "Mersin Sıkma Evi (Gaziantep)", rating: 4.3, reviewCount: 380, area: "Şahinbey", commentTr: "Şahinbey'de fırından taze çıkan bazlamayla yapılan sıcak peynirli sıkma.", commentEn: "Hot cheese squeeze wrap made with flatbread fresh from the oven in Sahinbey." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 780, area: "Karataş", commentTr: "Karataş'ta bütçe dostu, bol yeşillikli taze acılı çiğ köfte dürüm.", commentEn: "Budget-friendly, fresh spicy raw meatball wrap with rich greens in Karatas." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 1100, area: "Yeditepe", commentTr: "Yeditepe'de öğrenci dostu dürüm menüleriyle leziz ve hızlı atıştırmalık.", commentEn: "Delicious and fast snack with student-friendly wrap menus in Yeditepe." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 540, area: "Şahinbey", commentTr: "Şahinbey'de son derece hesaplı ve doyurucu çiğ köfte dürüm çeşitleri.", commentEn: "Highly affordable and satisfying raw meatball wrap varieties in Sahinbey." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Çorbacı Mahmut Usta", rating: 4.6, reviewCount: 880, area: "Karagöz", commentTr: "Tarihi çarşıda sabahları içebileceğiniz sıcak ve şifalı Antep tarhanası.", commentEn: "Warm and healing Antep tarhana soup you can drink in mornings in historic bazaar." },
    { name: "Paçacı Şemsi Gaziantep", rating: 4.3, reviewCount: 920, area: "Şahinbey", commentTr: "Şahinbey'de 24 saat sıcak çorba servisi sunan popüler çorba salonu.", commentEn: "Popular soup place offering 24-hour hot soup service in Sahinbey." },
    { name: "Metanet Lokantası (Çorba Bölümü)", rating: 4.5, reviewCount: 2200, area: "Karagöz", commentTr: "Tarihi handa sabahları dumanı üstünde sunulan şifalı sıcak çorba çeşitleri.", commentEn: "Healing hot soup varieties served steaming in mornings in the historic inn." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 480, area: "Karataş", commentTr: "Karataş'ta ev yapımı sebzeli bulgur pilavı ve taze naneli soğuk cacık.", commentEn: "Vegetable bulgur rice and cold cacik with fresh mint in homemade taste in Karatas." },
    { name: "Şefin Mutfağı Gaziantep", rating: 4.3, reviewCount: 350, area: "Yeditepe", commentTr: "Yeditepe'de esnaf usulü öğle menüsünde sunulan doyurucu bulgur ve cacık.", commentEn: "Satisfying bulgur and cacik served in artisan-style lunch menu in Yeditepe." },
    { name: "Teras Ev Yemekleri", rating: 4.2, reviewCount: 220, area: "Şahinbey", commentTr: "Şahinbey'de son derece bütçe dostu, sıcak ve taze anne yemekleri.", commentEn: "Highly budget-friendly, warm and fresh home-style meals in Sahinbey." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Antep Simit Fırını", rating: 4.6, reviewCount: 1450, area: "Karagöz", commentTr: "Tarihi taş fırında pişen meşhur Antep simidi, peynir ve soğuk ayran.", commentEn: "Famous Antep simit cooked in historical stone oven, cheese and cold ayran." },
    { name: "Akşam Simit Fırınları", rating: 4.5, reviewCount: 1850, area: "Şahinbey", commentTr: "Şahinbey Bulvarında sabahları taze çıkan simit ve bütçe dostu kahvaltılık.", commentEn: "Fresh simit and budget-friendly breakfast items in the morning on Sahinbey Boulevard." },
    { name: "Maanoğlu Parkı (Seyyar Simitçiler Alanı)", rating: 4.4, reviewCount: 650, area: "Şahinbey", commentTr: "Park gölgesinde seyyar simitçilerden alınan hesaplı çıtır Antep simidi.", commentEn: "Affordable crispy Antep simit bought from mobile vendors under park shadow." }
  ],
  "Kıymalı Makarna": [
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.4, reviewCount: 390, area: "Yeditepe", commentTr: "Yeditepe'de öğrenciler için sıcak kıymalı salçalı makarna ve yoğurt menüsü.", commentEn: "Warm minced meat pasta with tomato paste and yogurt menu for students in Yeditepe." },
    { name: "Papirüs Cafe (Ekonomik Menü)", rating: 4.3, reviewCount: 520, area: "Karagöz", commentTr: "Tarihi konakta sunulan bütçe dostu, doyurucu sıcak kıymalı makarna porsiyonu.", commentEn: "Budget-friendly, satisfying hot minced meat pasta portion served in historic mansion." },
    { name: "Keyifli Mutfak", rating: 4.2, reviewCount: 250, area: "Karataş", commentTr: "Karataş'ta ev yemeği tarzında sunulan hesaplı sıcak kıymalı makarna.", commentEn: "Affordable hot minced meat pasta served in home-style cooking in Karatas." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Orkide Pastanesi (Ekonomik Kahvaltı Kalemleri)", rating: 4.5, reviewCount: 2100, area: "Şahinbey", commentTr: "Şahinbey'de nezih ortamda sunulan çıtır sıcak yumurtalı ekmek dilimleri.", commentEn: "Crispy hot egg-coated fried bread slices served in decent environment in Sahinbey." },
    { name: "Grano Coffee Roastery (Kahvaltı Atıştırmalıklar)", rating: 4.4, reviewCount: 820, area: "Yeditepe", commentTr: "Yeditepe'de gençlerin gözdesi kahve yanına sıcak yumurtalı ekmek tabağı.", commentEn: "Hot egg-coated bread plate alongside coffee, a favorite of youth in Yeditepe." },
    { name: "Karataş Kahvaltı Salonları", rating: 4.2, reviewCount: 480, area: "Karataş", commentTr: "Karataş'ta bütçe dostu kahvaltılarda sunulan sıcacık yumurtalı ekmek.", commentEn: "Warm egg-coated bread served in budget-friendly breakfasts in Karatas." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Yeşil Mutfak Cafe", rating: 4.5, reviewCount: 320, area: "Şahinbey", commentTr: "Şahinbey'de sağlıklı beslenenler için sıcak zeytinyağlı yeşil mercimek.", commentEn: "Olive oil warm green lentils for healthy eaters in Sahinbey." },
    { name: "Veggie Gaziantep", rating: 4.4, reviewCount: 280, area: "Yeditepe", commentTr: "Yeditepe'de vegan dostu, lezzetli ve son derece hesaplı zeytinyağlı mercimek.", commentEn: "Vegan-friendly, delicious and highly affordable olive oil lentils in Yeditepe." },
    { name: "Sahan (Sebze Yemekleri Reyonu)", rating: 4.4, reviewCount: 950, area: "İbrahimli", commentTr: "İbrahimli'de sebze reyonunda sıcak sunulan hafif yeşil mercimek yemeği.", commentEn: "Light green lentil dish served warm in vegetable section in Ibrahimli." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Tostçu Erol", rating: 4.7, reviewCount: 3500, area: "Karagöz", commentTr: "Gaziantep'te ütüyle basılan bol salçalı tostlarıyla efsaneleşmiş sıcak tostçu.", commentEn: "Legendary warm toast maker famous for toast pressed with iron and rich paste." },
    { name: "Barış Büfe", rating: 4.3, reviewCount: 620, area: "Karataş", commentTr: "Karataş'ta hızlıca alabileceğiniz ucuz ve doyurucu salçalı tost çeşitleri.", commentEn: "Cheap and satisfying tomato paste toast varieties you can grab quickly in Karatas." },
    { name: "Kampüs Büfe Gaziantep", rating: 4.2, reviewCount: 510, area: "Yeditepe", commentTr: "Üniversite kampüsünde öğrencilerin bütçe dostu favori salçalı tost durağı.", commentEn: "Favorite budget-friendly tomato paste toast stop of students in university campus." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Crop Coffee Co. (Hafif ve Ekonomik Yan Menüler)", rating: 4.4, reviewCount: 780, area: "Yeditepe", commentTr: "Yeditepe'de taze domates soslu sıcak Napoliten makarna porsiyonu.", commentEn: "Hot Napoliten pasta portion with fresh tomato sauce in Yeditepe." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.3, reviewCount: 820, area: "Şahinbey", commentTr: "Şahinbey'de kahvenizin yanına eşlik eden domates soslu sıcak makarna.", commentEn: "Warm pasta with tomato sauce accompanying your coffee in Sahinbey." },
    { name: "Arabica Coffee House", rating: 4.2, reviewCount: 880, area: "Karataş", commentTr: "Karataş şubesinde hafif ve bütçe dostu sıcak Napoliten makarna tabağı.", commentEn: "Light and budget-friendly hot Napoliten pasta plate at Karatas branch." }
  ]
};

export const ECONOMIC_ESKISEHIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Tavuk Döner Dürüm": [
    { name: "Paşa Döner (Espark)", rating: 4.4, reviewCount: 1420, area: "Espark", commentTr: "Espark civarında hızlı, doyurucu ve bol soslu sıcak tavuk döner dürüm.", commentEn: "Fast, satisfying and richly sauced hot chicken doner wrap around Espark." },
    { name: "Katık Döner Eskişehir", rating: 4.3, reviewCount: 950, area: "Yenibağlar", commentTr: "Yenibağlar'da meşhur Hatay usulü baharatlı sıcak tavuk dürüm.", commentEn: "Famous Hatay style spicy hot chicken wrap in Yenibaglar." },
    { name: "Öncü Döner", rating: 4.2, reviewCount: 1100, area: "Bağlar", commentTr: "Bağlar bölgesinde öğrenciler için en ekonomik ve lezzetli sıcak dürüm adresi.", commentEn: "The most economic and delicious hot wrap address for students in Baglar area." }
  ],
  "Tavuklu Nohutlu Pilav": [
    { name: "Meşhur Unkapanı Pilavcısı Eskişehir", rating: 4.3, reviewCount: 560, area: "Yenibağlar", commentTr: "Tereyağlı sıcak pilav üstü taze tavuk göğsü ve haşlanmış nohut keyfi.", commentEn: "Buttered hot rice topped with fresh chicken breast and boiled chickpeas." },
    { name: "Pilavcı Ahmet Usta (Anadolu Üniversitesi Civarı)", rating: 4.4, reviewCount: 480, area: "Tepebaşı", commentTr: "Kampüs yakınında öğrenci bütçesine dost, bol porsiyonlu sıcak tavuklu pilav.", commentEn: "Budget-friendly, large portioned hot chicken rice close to the campus." },
    { name: "Bağlar Sokak Pilavcıları", rating: 4.1, reviewCount: 310, area: "Bağlar", commentTr: "Bağlar caddesinde gece geç saatlere kadar sıcak servis edilen sokak pilavı.", commentEn: "Street rice served hot until late night hours on Baglar street." }
  ],
  "Ekmek Arası Köfte": [
    { name: "Köfteci Ali", rating: 4.5, reviewCount: 780, area: "Adalar", commentTr: "Adalar kenarında ızgarada pişen taze malzemeli ve ekonomik köfte ekmek.", commentEn: "Grilled meatball sandwich with fresh ingredients and economic price near Adalar." },
    { name: "Tarihi Köfteci Muammer Usta", rating: 4.4, reviewCount: 620, area: "Odunpazarı", commentTr: "Tarihi Odunpazarı bölgesinde nostaljik ve bütçe dostu köfte menüsü.", commentEn: "Nostalgic and budget-friendly meatball menu in historic Odunpazari area." },
    { name: "Adalar Seyyar Köftecileri", rating: 4.3, reviewCount: 390, area: "Adalar", commentTr: "Porsuk çayı kenarında ayaküstü atıştırabileceğiniz sıcak sokak köftesi.", commentEn: "Hot street meatball that you can grab on the go near Porsuk river." }
  ],
  "Mercimek Çorbası + Kıymalı Pide / Lahmacun": [
    { name: "Meşhur Karadeniz Pidecisi", rating: 4.4, reviewCount: 880, area: "Odunpazarı", commentTr: "Odunpazarı'nda çıtır çıtır pide ve yanında sıcak süzme mercimek çorbası.", commentEn: "Crispy pide accompanied by hot strained lentil soup in Odunpazari." },
    { name: "Bafra Pide Salonu Eskişehir", rating: 4.3, reviewCount: 650, area: "Tepebaşı", commentTr: "Tepebaşı'nda kapalı kıymalı pide çeşitleri ve taze sıcak esnaf çorbası.", commentEn: "Closed minced meat pide varieties and fresh hot artisan soup in Tepebasi." },
    { name: "Eskişehir Esnaf Lokantası", rating: 4.2, reviewCount: 420, area: "Çarşı", commentTr: "Çarşıda ucuz, sıcak ve doyurucu mercimek çorbası ile pide menüleri.", commentEn: "Cheap, hot and satisfying lentil soup and pide menus in the bazaar." }
  ],
  "Yumurta Kapama / Ekmek Banmalık Menemen": [
    { name: "Doyuran Kahvaltı Salonu", rating: 4.6, reviewCount: 1550, area: "Adalar", commentTr: "Adalar'da meşhur bal-kaymaklı ve sıcak menemenli efsanevi esnaf kahvaltısı.", commentEn: "Legendary artisan breakfast with famous honey-cream and hot menemen in Adalar." },
    { name: "Ayten Usta Gurme Restoran (Ekonomik Seçenekler)", rating: 4.4, reviewCount: 2200, area: "Sazova", commentTr: "Sazova Parkı manzaralı, bütçeye uygun sıcak kahvaltı alternatifleri.", commentEn: "Budget-friendly hot breakfast alternatives with Sazova Park view." },
    { name: "Bağlar Menemen & Kahvaltı Salonu", rating: 4.3, reviewCount: 490, area: "Bağlar", commentTr: "Bağlar'da öğrenciler için ekonomik, bol tereyağlı taze menemen keyfi.", commentEn: "Economic, buttered fresh menemen enjoyment for students in Baglar." }
  ],
  "Sosisli Sandviç": [
    { name: "Kristal Büfe Eskişehir", rating: 4.5, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda leziz sıcak sosisli sandviçler ve bütçe dostu atıştırmalıklar.", commentEn: "Delicious hot dog sandwiches and budget-friendly snacks in Tepebasi." },
    { name: "Kanatlı Han Garaj Büfeleri", rating: 4.3, reviewCount: 450, area: "Çarşı", commentTr: "Kanatlı AVM yakınında hızlı ve hesaplı sıcak sosisli sandviç noktası.", commentEn: "Quick and affordable hot dog sandwich spot near Kanatli Mall." },
    { name: "Walker's Coffee (Atıştırmalık Bölümü)", rating: 4.2, reviewCount: 780, area: "Yenibağlar", commentTr: "Yenibağlar'da kahve eşliğinde tercih edilen ekonomik sıcak sosisli.", commentEn: "Economic hot dog preferred alongside coffee in Yenibaglar." }
  ],
  "Patates Oturtma / Fırında Patates": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.5, reviewCount: 520, area: "Tepebaşı", commentTr: "Ev yapımı tadında sıcak kıymalı patates oturtma ve taze yoğurt menüsü.", commentEn: "Warm potato moussaka with minced meat in homemade taste and fresh yogurt menu." },
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 380, area: "Odunpazarı", commentTr: "Odunpazarı'nda esnaf usulü fırında sıcak patates oturtma yemeği.", commentEn: "Artisan-style baked potato moussaka served warm in Odunpazari." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.2, reviewCount: 290, area: "Bağlar", commentTr: "Bağlar caddesinde son derece ucuz ve doyurucu sıcak tencere yemekleri.", commentEn: "Highly cheap and satisfying hot pot dishes on Baglar street." }
  ],
  "Kuru Fasulye + Sade Pirinç Pilavı": [
    { name: "Trakya Lokantası (Esnaf Menüsü)", rating: 4.6, reviewCount: 1100, area: "Çarşı", commentTr: "Tarihi çarşıda kıvamlı sıcak kuru fasulye ve tane tane pirinç pilavı.", commentEn: "Thick hot white beans and grain-by-grain rice in historic bazaar." },
    { name: "Şehir Lokantası", rating: 4.5, reviewCount: 780, area: "Odunpazarı", commentTr: "Odunpazarı'nda esnaf bütçesine uygun sıcak kuru fasulye pilav menüsü.", commentEn: "Warm white beans and rice menu suitable for artisan budgets in Odunpazari." },
    { name: "Divan Pub (Ekonomik Ev Yemekleri Bölümü)", rating: 4.4, reviewCount: 650, area: "Tepebaşı", commentTr: "Tepebaşı'nda nezih ortamda sunulan bütçe dostu sıcak ev yemekleri.", commentEn: "Budget-friendly warm home meals served in a decent environment in Tepebasi." }
  ],
  "Makarna Çeşitleri": [
    { name: "Makarnacı Eskişehir (Anadolu Üniversitesi Kampüs Civarı)", rating: 4.4, reviewCount: 850, area: "Tepebaşı", commentTr: "Öğrencilerin favori sıcak ve bol soslu doyurucu makarna porsiyonları.", commentEn: "Students' favorite hot and richly sauced satisfying pasta portions." },
    { name: "Pasta Express Eskişehir", rating: 4.2, reviewCount: 510, area: "Bağlar", commentTr: "Bağlar'da kutuda sunulan pratik, hızlı ve son derece hesaplı makarnalar.", commentEn: "Practical, fast and highly affordable pastas served in boxes in Baglar." },
    { name: "Varuna Gezgin (Öğrenci Dostu Tabaklar)", rating: 4.3, reviewCount: 1950, area: "Yenibağlar", commentTr: "Öğrenci dostu atmosferde hesaplı sıcak soslu İtalyan makarnaları.", commentEn: "Affordable hot sauced Italian pastas in student-friendly atmosphere." }
  ],
  "Gözleme": [
    { name: "Tarihi Odunpazarı Ev Yemekleri (Gözleme Bölümü)", rating: 4.6, reviewCount: 890, area: "Odunpazarı", commentTr: "Odunpazarı konaklarında sacda pişen otlu peynirli sıcak gözlemeler.", commentEn: "Herb and cheese warm gözleme cooked on iron plate in Odunpazari mansions." },
    { name: "Yörük Çadırı Gözleme (Sazova Alanı)", rating: 4.4, reviewCount: 620, area: "Sazova", commentTr: "Sazova parkı girişinde taze el açması çıtır sıcak patatesli gözleme.", commentEn: "Fresh hand-rolled crispy warm potato gözleme at Sazova park entrance." },
    { name: "Bağlar Gözleme Salonu", rating: 4.3, reviewCount: 480, area: "Bağlar", commentTr: "Bağlar caddesinde hızlıca atıştırabileceğiniz ucuz peynirli gözleme.", commentEn: "Cheap cheese gözleme that you can grab quickly on Baglar street." }
  ],
  "Sıkma": [
    { name: "Toros Sıkma Salonu Eskişehir", rating: 4.5, reviewCount: 680, area: "Tepebaşı", commentTr: "Tepebaşı'nda sıcacık bazlamaya sarılan nefis taze peynirli sıkma.", commentEn: "Delicious fresh cheese squeeze wrap rolled in warm flatbread in Tepebasi." },
    { name: "Çukurova Sıkma & Gözleme (Yenibağlar)", rating: 4.4, reviewCount: 490, area: "Yenibağlar", commentTr: "Yenibağlar'da öğrenciler için pratik sıcak patatesli sıkma dürüm.", commentEn: "Practical warm potato squeeze wrap for students in Yenibaglar." },
    { name: "Mersin Sıkma Evi (Eskişehir)", rating: 4.3, reviewCount: 320, area: "Bağlar", commentTr: "Bağlar'da sac üstünde taze hazırlanan bütçe dostu peynirli sıkmalar.", commentEn: "Budget-friendly cheese squeeze wraps freshly prepared on plate in Baglar." }
  ],
  "Çiğ Köfte Dürüm": [
    { name: "Oses Çiğ Köfte", rating: 4.1, reviewCount: 820, area: "Bağlar", commentTr: "Bağlar caddesinde hızlı servis edilen bol yeşillikli ucuz çiğ köfte dürüm.", commentEn: "Cheap raw meatball wrap with rich greens served fast on Baglar street." },
    { name: "Komagene Çiğ Köfte", rating: 4.1, reviewCount: 1250, area: "Yenibağlar", commentTr: "Yenibağlar'da öğrenci dostu dürüm campaignsyle doyurucu atıştırmalık.", commentEn: "Satisfying snack with student-friendly wrap campaigns in Yenibaglar." },
    { name: "Battalbey Çiğ Köfte", rating: 4.0, reviewCount: 490, area: "Çarşı", commentTr: "Çarşı bölgesinde son derece bütçe dostu çiğ köfte dürümleri.", commentEn: "Highly budget-friendly raw meatball wraps in bazaar area." }
  ],
  "Tarhana Çorbası + Ekmek": [
    { name: "Çorbacı Necdet Usta", rating: 4.6, reviewCount: 750, area: "Çarşı", commentTr: "Sabahın ilk saatlerinde çarşıda içinizi ısıtacak sıcak ev yapımı tarhana.", commentEn: "Warm homemade tarhana that will warm you up in the bazaar in early hours." },
    { name: "Paçacı Şemsi Eskişehir", rating: 4.3, reviewCount: 890, area: "Tepebaşı", commentTr: "Tepebaşı'nda 24 saat taze çorba ve sıcak ekmek sunan popüler mekan.", commentEn: "Popular place offering 24-hour fresh soup and warm bread in Tepebasi." },
    { name: "Tarihi Merkez Çorbacısı", rating: 4.4, reviewCount: 410, area: "Çarşı", commentTr: "Çarşıda nostaljik esnaf ortamında dumanı üstünde tüten ucuz sıcak tarhana.", commentEn: "Cheap warm tarhana steaming hot in nostalgic artisan environment in bazaar." }
  ],
  "Bulgur Pilavı + Cacık": [
    { name: "Yeşil Ev Yemekleri", rating: 4.4, reviewCount: 420, area: "Tepebaşı", commentTr: "Ev yapımı sebzeli sıcak bulgur pilavı ve yanında buz gibi taze cacık.", commentEn: "Homemade warm vegetable bulgur rice accompanied by ice-cold fresh cacik." },
    { name: "Sofra Restoran", rating: 4.3, reviewCount: 310, area: "Odunpazarı", commentTr: "Odunpazarı'nda öğle menüsünde sunulan hesaplı sıcak bulgur ve cacık.", commentEn: "Affordable hot bulgur and cacik offered in lunch menu in Odunpazari." },
    { name: "Anadolu Ev Yemekleri", rating: 4.2, reviewCount: 210, area: "Bağlar", commentTr: "Bağlar'da öğrenciler için bütçe dostu sıcak bulgur pilavı ve cacık tabağı.", commentEn: "Budget-friendly hot bulgur rice and cacik plate for students in Baglar." }
  ],
  "Simit + Ayran + Üçgen Peynir": [
    { name: "Tarihi Eskişehir Simit Fırını", rating: 4.7, reviewCount: 1850, area: "Odunpazarı", commentTr: "Odunpazarı'nda taş fırından yeni çıkmış sıcacık çıtır Eskişehir simidi.", commentEn: "Warm, crispy Eskisehir simit fresh out of the stone oven in Odunpazari." },
    { name: "Eskişehir Simit Sarayı Şubeleri", rating: 4.4, reviewCount: 950, area: "Tepebaşı", commentTr: "Tepebaşı şubesinde taze simit, krem peynir ve soğuk ayran keyfi.", commentEn: "Fresh simit, cream cheese and cold ayran enjoyment at Tepebasi branch." },
    { name: "Adalar Porsuk Kenarı (Seyyar Simitçiler Alanı)", rating: 4.5, reviewCount: 2100, area: "Adalar", commentTr: "Porsuk çayı kenarında seyyar satıcılardan alınan çıtır sıcak simitler.", commentEn: "Crispy warm simits bought from mobile vendors on the Porsuk river side." }
  ],
  "Kıymalı Makarna": [
    { name: "Acıktım Kafe", rating: 4.5, reviewCount: 1650, area: "Tepebaşı", commentTr: "Tepebaşı'nda doyurucu porsiyonda sıcak kıymalı makarna ve taze yoğurt.", commentEn: "Warm minced meat pasta in satisfying portion and fresh yogurt in Tepebasi." },
    { name: "Kahve 6 Eskişehir (Ekonomik Menü)", rating: 4.3, reviewCount: 480, area: "Adalar", commentTr: "Adalar bölgesinde bütçe dostu, sıcak kıymalı makarna tabağı alternatifi.", commentEn: "Budget-friendly warm minced meat pasta plate alternative in Adalar area." },
    { name: "Keyifli Mutfak", rating: 4.2, reviewCount: 290, area: "Bağlar", commentTr: "Bağlar caddesinde öğrenciler için ucuz, sıcak ve bol soslu kıymalı makarna.", commentEn: "Cheap, hot and richly sauced minced meat pasta for students on Baglar street." }
  ],
  "Yumurtalı Ekmek Kızartması": [
    { name: "Mazlum Süt Evi (Ekonomik Kahvaltı Kalemleri)", rating: 4.6, reviewCount: 1250, area: "Çarşı", commentTr: "Tarihi süt evinde sunulan çıtır sıcak yumurtalı ekmek kızartması.", commentEn: "Crispy warm egg-coated fried bread served in the historical milk house." },
    { name: "Hey Joe Coffee Co. (Kahvaltı Atıştırmalıkları)", rating: 4.4, reviewCount: 780, area: "Yenibağlar", commentTr: "Yenibağlar'da şık ortamda sunulan bütçe dostu sıcak yumurtalı ekmek.", commentEn: "Budget-friendly warm egg-coated bread served in elegant environment in Yenibaglar." },
    { name: "Üniversite Caddesi Kahvaltı Salonları", rating: 4.2, reviewCount: 520, area: "Tepebaşı", commentTr: "Üniversite caddesinde öğrenci kahvaltılarının vazgeçilmez sıcak parçası.", commentEn: "Indispensable warm part of student breakfasts on University avenue." }
  ],
  "Yeşil Mercimek Yemeği": [
    { name: "Veggie Eskişehir", rating: 4.5, reviewCount: 310, area: "Yenibağlar", commentTr: "Yenibağlar'da sağlıklı ve zeytinyağlı sıcak yeşil mercimek alternatifi.", commentEn: "Healthy and olive oil warm green lentil alternative in Yenibaglar." },
    { name: "Göz Oda Cafe", rating: 4.4, reviewCount: 250, area: "Odunpazarı", commentTr: "Odunpazarı'nda vejetaryenler için hazırlanan sıcak yeşil mercimek yemeği.", commentEn: "Warm green lentil dish prepared for vegetarians in Odunpazari." },
    { name: "Hüsnüniyet Lokantası", rating: 4.3, reviewCount: 380, area: "Çarşı", commentTr: "Çarşıda esnaf usulü öğle menüsünde sıcak sunulan leziz yeşil mercimek.", commentEn: "Tasty green lentils served warm in artisan-style lunch menu in the bazaar." }
  ],
  "Salçalı Ekmek / Tost": [
    { name: "Tostçu Mehmet (Eskişehir)", rating: 4.6, reviewCount: 1550, area: "Tepebaşı", commentTr: "Tepebaşı'nda bol salçalı kaşarlı sıcak sanayi tostları ve soğuk ayran.", commentEn: "Warm industrial toasts with rich tomato paste and kashar and cold ayran." },
    { name: "Barış Büfe", rating: 4.3, reviewCount: 580, area: "Adalar", commentTr: "Adalar civarında hızlıca atıştırabileceğiniz bütçe dostu salçalı tostlar.", commentEn: "Budget-friendly tomato paste toasts that you can grab quickly around Adalar." },
    { name: "Kampüs Büfe Eskişehir", rating: 4.2, reviewCount: 420, area: "Tepebaşı", commentTr: "Anadolu Üniversitesi kampüs girişinde öğrencilerin favori ucuz tost büfesi.", commentEn: "Students' favorite cheap toast buffet at Anadolu University campus entrance." }
  ],
  "Soslu Makarna (Napoliten)": [
    { name: "Crop Coffee Co. (Hafif ve Ekonomik Yan Menüler)", rating: 4.4, reviewCount: 720, area: "Yenibağlar", commentTr: "Yenibağlar şubesinde şık sunumlu taze domates sosuyla sunulan sıcak Napoliten.", commentEn: "Warm Napoliten with fresh tomato sauce in elegant presentation at Yenibaglar." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.3, reviewCount: 650, area: "Tepebaşı", commentTr: "Tepebaşı'nda kahvenizin yanına eşlik eden domates soslu sıcak makarna tabağı.", commentEn: "Warm pasta plate with tomato sauce accompanying your coffee in Tepebasi." },
    { name: "Arabica Coffee House", rating: 4.2, reviewCount: 820, area: "Bağlar", commentTr: "Bağlar'da hafif ve son derece bütçe dostu sıcak Napoliten makarna porsiyonu.", commentEn: "Light and highly budget-friendly hot Napoliten pasta portion in Baglar." }
  ]
};

export const getFallbackRestaurants = (
  category: RestaurantCategory,
  city: string,
  _language: "tr" | "en"
): RealRestaurant[] => {
  let templates: string[] = [];
  let commentsTr: string[] = [];
  let commentsEn: string[] = [];

  switch (category) {
    case "burger":
      templates = ["Burger King", "McDonald's", "Tavuk Dünyası", "Burger Station"];
      commentsTr = [
        "Hızlı ve lezzetli hamburger menüleri sunan kaliteli şube.",
        "Çıtır patatesleri ve doyurucu hamburger köftesi her zaman standart kalitede.",
        "Hızlı ve sıcak servis, hamburgerleri oldukça doyurucu."
      ];
      commentsEn = [
        "Quality branch offering fast and delicious burger menus.",
        "Crispy fries and satisfying burger patties are always in standard quality.",
        "Fast and hot service, burgers are quite satisfying."
      ];
      break;

    case "kebab":
      templates = ["Köfteci Yusuf", "Baydöner", "Bursa Kebap Evi", "HD İskender"];
      commentsTr = [
        "Yaprak döneri ve adana kebabı çok lezzetli, etler yumuşacık.",
        "Köz kömürde pişen kebapların lezzeti harika, ikramları bol.",
        "Etlerin kalitesi mükemmel, közlenmiş biber ve salatası çok taze."
      ];
      commentsEn = [
        "Leaf doner and adana kebab are very tasty, meats are extremely tender.",
        "Meats cooked on charcoal taste wonderful, generous appetizers.",
        "The quality of meat is excellent, grilled peppers and salad are fresh."
      ];
      break;

    case "vegan":
      templates = ["Komagene Etsiz Çiğköfte", "Oses Çiğköfte", "Tatlıses Çiğköfte"];
      commentsTr = [
        "Lezzetli etsiz çiğ köfte dürümü, marul ve limonla harika gidiyor.",
        "Taze malzemelerle hazırlanan, lif oranı yüksek vegan dostu dürümler.",
        "Hızlı servis ve standart lezzetli çiğ köfte seçenekleri."
      ];
      commentsEn = [
        "Tasty meatless raw meatball wrap, goes great with lettuce and lemon.",
        "Vegan-friendly wraps with high fiber prepared with fresh ingredients.",
        "Fast service and standard tasty raw meatball options."
      ];
      break;

    case "soup":
      templates = ["Köfteci Yusuf Çorba", "Saray Çorba Evi", "Tarihi Esnaf Lokantası"];
      commentsTr = [
        "Sıcak ve lezzetli mercimek çorbası, yanında çıtır ekmekle harika.",
        "Temiz ve lezzetli kelle paça ve mercimek çorbası seçenekleri.",
        "Geleneksel usulle hazırlanan, içi ısıtan şifa çorbaları."
      ];
      commentsEn = [
        "Warm and delicious lentil soup, goes great with crispy bread.",
        "Clean and tasty trotter and lentil soup options.",
        "Warming healing soups prepared in traditional style."
      ];
      break;

    case "pasta":
      templates = ["Domino's Pizza", "Pasaport Pizza", "Tavuk Dünyası"];
      commentsTr = [
        "Sıcak ve hızlı pizza servisinin güvenilir adresi.",
        "Bol malzemeli ince hamur İtalyan pizzaları ve kremalı makarnalar.",
        "Taş fırında pişen pizzalar ve el yapımı makarna lezzetleri."
      ];
      commentsEn = [
        "Reliable address of hot and fast pizza service.",
        "Loaded thin-crust Italian pizzas and creamy pastas.",
        "Stone-baked pizzas and handmade pasta tastes."
      ];
      break;

    case "dessert":
      templates = ["Mado", "Kahve Dünyası", "Osmanlı Kahvecisi"];
      commentsTr = [
        "Geleneksel Maraş dondurması ve şerbetli tatlıları çok taze.",
        "Nefis çikolata çeşitleri, tatlılar ve taze demlenmiş kahve keyfi.",
        "Harika tatlı menüsü ve güler yüzlü servis kalitesi."
      ];
      commentsEn = [
        "Traditional Maras ice cream and syrup desserts are very fresh.",
        "Delicious chocolate varieties, desserts and freshly brewed coffee enjoyment.",
        "Great dessert menu and friendly service quality."
      ];
      break;

    case "general":
    default:
      templates = ["Mado Cafe", "Kahve Dünyası", "Tavuk Dünyası", "Köfteci Yusuf"];
      commentsTr = [
        "Zengin menüsüyle her zevke uygun kaliteli yemek alternatifleri.",
        "Geniş içecek ve yemek menüsü, nezih ve samimi bir ortam.",
        "Standart lezzet, hızlı servis ve güler yüzlü çalışanlar."
      ];
      commentsEn = [
        "Quality meal alternatives suitable for every taste with its rich menu.",
        "Wide drink and food menu, decent and friendly environment.",
        "Standard taste, fast service and friendly staff."
      ];
      break;
  }

  const areas = ["Merkez", "Çarşı", "AVM", "Yeni Mahalle", "Cumhuriyet", "Atatürk Caddesi"];
  const baseRatings = [4.5, 4.4, 4.3, 4.2];

  return templates.map((name, index) => {
    const rating = baseRatings[index % baseRatings.length];
    const reviewCount = Math.floor(1200 - index * 100 + Math.random() * 50);
    const area = areas[index % areas.length];
    const commentTr = commentsTr[index % commentsTr.length];
    const commentEn = commentsEn[index % commentsEn.length];

    let fullName = name;
    if (!name.includes(city) && !name.includes("Mado") && !name.includes("Domino's") && !name.includes("King") && !name.includes("McDonald's") && !name.includes("Yusuf")) {
      fullName = `${name} ${city}`;
    }

    return {
      name: fullName,
      rating,
      reviewCount,
      area,
      commentTr,
      commentEn
    };
  });
};

export const GOURMET_ISTANBUL_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirt Şeref Büryan Kebap Salonu (Fatih)", rating: 4.8, reviewCount: 3100, area: "Fatih", commentTr: "Fatih'te usta ellerden çıkan tel tel dökülen çıtır derili hakiki büryan kebabı.", commentEn: "Authentic buryan kebab with crispy skin and tender meat from master hands in Fatih." },
    { name: "Sur Ocakbaşı", rating: 4.6, reviewCount: 2500, area: "Fatih", commentTr: "Kadınlar Pazarı'nda meşe kömürü ateşiyle pişen enfes Siirt büryan kebabı.", commentEn: "Delicious Siirt buryan kebab cooked over oak charcoal in Kadınlar Pazarı." },
    { name: "Aziziye Büryan Salonu", rating: 4.5, reviewCount: 1200, area: "Fatih", commentTr: "Geleneksel derin kuyularda buhar eşliğinde pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam in traditional deep brick pits." }
  ],
  "Cağ Kebabı": [
    { name: "Şehzade Cağ Kebabı (Sirkeci)", rating: 4.9, reviewCount: 9500, area: "Sirkeci", commentTr: "Sirkeci'de odun ateşinde dönen, lokum gibi sulu ve taze kesilen efsane cağ kebabı.", commentEn: "Legendary cağ kebab cooked over wood fire, cut fresh and juicy in Sirkeci." },
    { name: "Palandöken Cağ Kebabı", rating: 4.5, reviewCount: 1800, area: "Kartal", commentTr: "İstanbul Anadolu yakasında Erzurum usulü nefis ve karamelize cağ kebabı şişleri.", commentEn: "Delicious Erzurum-style caramelized cağ kebab skewers on the Anatolian side." },
    { name: "Erzurumlu Muammer Usta", rating: 4.6, reviewCount: 2400, area: "Ümraniye", commentTr: "Özel baharat marinasyonuyla köz ateşinde pişen nefis cağ kebabı deneyimi.", commentEn: "Tasty cağ kebab experience cooked over embers with special spice marinade." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Hünkar Lokantası", rating: 4.7, reviewCount: 3400, area: "Nişantaşı", commentTr: "Nişantaşı'nda terbiyeli, sebzeli lokum gibi kuzu incik ve gerdan haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank and neck boiled with vegetables in Nisantasi." },
    { name: "Hacı Abdullah Lokantası", rating: 4.6, reviewCount: 2800, area: "Beyoğlu", commentTr: "Tarihi esnaf lokantası usulü, kemik suyuyla saatlerce pişmiş kuzu haşlama.", commentEn: "Historical artisan restaurant style lamb boiled for hours in rich bone broth." },
    { name: "Tarihi Karaköy Lokantası", rating: 4.5, reviewCount: 4100, area: "Karaköy", commentTr: "Karaköy'de geleneksel terbiye ve taze sebzelerle fırınlanmış kuzu haşlama.", commentEn: "Karakoy style lamb boiled with traditional seasoning and fresh vegetables." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Develi Kebap", rating: 4.6, reviewCount: 5200, area: "Samatya", commentTr: "Samatya'nın köklü kebapçısında tereyağlı et ve sarımsaklı köz patlıcan beğenisi.", commentEn: "Buttery meat over garlic roasted eggplant puree in Samatya's deep-rooted restaurant." },
    { name: "Köşkeroğlu Restoran", rating: 4.5, reviewCount: 3800, area: "Karaköy", commentTr: "Karaköy'de Antep usulü süzme yoğurtlu ve zırh kıymalı enfes Ali Nazik.", commentEn: "Antep-style delicious Ali Nazik with strained yogurt and minced meat in Karakoy." },
    { name: "Kaşıbeyaz Lezzet Grubu", rating: 4.5, reviewCount: 4200, area: "Florya", commentTr: "Florya'da şık sunumuyla tereyağında kavrulmuş kuzu etli geleneksel Ali Nazik.", commentEn: "Traditional Ali Nazik with pan-fried lamb in butter, elegantly served in Florya." }
  ],
  "Beyran Çorbası": [
    { name: "Dürümcü Emmi (Kadıköy)", rating: 4.6, reviewCount: 14000, area: "Kadıköy", commentTr: "Kadıköy'de gece geç saatlere kadar servis edilen dumanı üstünde acılı beyran çorbası.", commentEn: "Steaming hot spicy beyran soup served until late hours in Kadikoy." },
    { name: "Muratoğlu Beyran & Kebap", rating: 4.5, reviewCount: 2100, area: "Ataşehir", commentTr: "Ataşehir'de bol sarımsak ve et suyuyla harlı ateşte pişen hakiki beyran.", commentEn: "Authentic beyran cooked over high heat with rich garlic and meat broth in Atasehir." },
    { name: "Dukka Beyran", rating: 4.4, reviewCount: 1100, area: "Bahçelievler", commentTr: "Bahçelievler'de Antep usulü bakır sahanda sunulan yoğun lezzetli beyran çorbası.", commentEn: "Antep-style intensely flavorful beyran soup served in copper dishes in Bahcelievler." }
  ],
  "Hünkar Beğendi": [
    { name: "Pandeli Restaurant (Mısır Çarşısı)", rating: 4.7, reviewCount: 4800, area: "Eminönü", commentTr: "Tarihi yarımadada çinili salonda sunulan efsanevi saray usulü hünkar beğendi.", commentEn: "Legendary palace style hunkar begendi served in the historic tiled dining room." },
    { name: "Boğaziçi Borsa Restoran", rating: 4.6, reviewCount: 1500, area: "Harbiye", commentTr: "Harbiye'de lüks esnaf mutfağı çizgisiyle servis edilen enfes hünkar beğendi.", commentEn: "Delicious hunkar begendi served with luxury artisan dining style in Harbiye." },
    { name: "Hünkar Nişantaşı", rating: 4.7, reviewCount: 3400, area: "Nişantaşı", commentTr: "Nişantaşı'nda tereyağlı kuzu kuşbaşı ve köz patlıcan beğenisinin muhteşem uyumu.", commentEn: "Stunning combination of buttered cubed lamb and roasted eggplant puree in Nisantasi." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de sumak ekşisi ve taze naneyle hazırlanan meşhur kuru patlıcan dolması.", commentEn: "Famous dried eggplant stuffed with sumac molasses and fresh mint in Kadikoy." },
    { name: "Nar Lokanta", rating: 4.5, reviewCount: 950, area: "Fatih", commentTr: "Fatih'te saray mutfağı kalitesinde sunulan hafif zeytinyağlı kuru dolma tabağı.", commentEn: "Light olive oil dried stuffed eggplant served with palace kitchen quality in Fatih." },
    { name: "Mabeyin Et ve Kebap Restoranı", rating: 4.5, reviewCount: 2300, area: "Altunizade", commentTr: "Altunizade'de kebap öncesi sunulan Antep usulü ekşili kuru patlıcan dolması.", commentEn: "Antep-style sour dried eggplant stuffed served before kebabs in Altunizade." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Tarihi Sarıyer Kuyu Kebabı", rating: 4.6, reviewCount: 3100, area: "Sarıyer", commentTr: "Sarıyer'de asırlık kuyulardan çıkan çam odunu kokulu kekikli kuyu kebabı.", commentEn: "Thyme pit kebab smelling of pine wood from century-old brick pits in Sariyer." },
    { name: "Konyalı Restaurant (Topkapı Sarayı)", rating: 4.5, reviewCount: 4100, area: "Sarayburnu", commentTr: "Tarihi yarımada manzarası eşliğinde toprak güveçte yavaş pişen usta işi et yemeği.", commentEn: "Slow-cooked master meat dish in clay pot with historical peninsula views." },
    { name: "Güvenç Konyalı", rating: 4.6, reviewCount: 3500, area: "Sirkeci", commentTr: "Sirkeci'de fırın kebabı ve taş fırın güveç lezzetlerinin efsane adresi.", commentEn: "Legendary address of oven kebab and stone oven clay pot stews in Sirkeci." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Giritli Restoran", rating: 4.6, reviewCount: 2800, area: "Sultanahmet", commentTr: "Sultanahmet'te zeytinyağlı Girit mezeleri ve taze deniz börülcesi salatası.", commentEn: "Olive oil Cretan appetizers and fresh sea beans salad in Sultanahmet." },
    { name: "Balıkçı Sabahattin", rating: 4.7, reviewCount: 4500, area: "Cankurtaran", commentTr: "Tarihi konakta balık yanına sunulan sızma zeytinyağlı şevketi bostan yemeği.", commentEn: "Wild blessed thistle with extra virgin olive oil served alongside fish in a historic mansion." },
    { name: "Eleos Restaurant", rating: 4.5, reviewCount: 3100, area: "Beyoğlu", commentTr: "İstiklal Caddesi'nde boğaz manzaralı, taze sarımsaklı soslu deniz börülcesi keyfi.", commentEn: "Fresh garlic sauce sea beans enjoyment with Bosphorus views on Istiklal Street." }
  ],
  "Enginarlı Pilav": [
    { name: "Kantin Nişantaşı", rating: 4.5, reviewCount: 920, area: "Nişantaşı", commentTr: "Nişantaşı'nda dereotu ve taze bezelyeyle demlenmiş gurme enginarlı pilav.", commentEn: "Gourmet artichoke rice infused with fresh dill and peas in Nisantasi." },
    { name: "Aşşk Kahve (Mevsimsel Menü)", rating: 4.3, reviewCount: 1850, area: "Kuruçeşme", commentTr: "Kuruçeşme'de boğaz havasında taze enginar göbeğiyle hazırlanan hafif pilav.", commentEn: "Light rice prepared with fresh artichoke hearts by the Bosphorus in Kurucesme." },
    { name: "Delicatessen", rating: 4.4, reviewCount: 1200, area: "Nişantaşı", commentTr: "Nişantaşı'nda zeytinyağlı gurme şarküteri reyonundan taze enginarlı pilav.", commentEn: "Fresh artichoke rice from gourmet olive oil delicatessen section in Nisantasi." }
  ],
  "Çerkez Tavuğu": [
    { name: "Jash Istanbul", rating: 4.6, reviewCount: 1100, area: "Cihangir", commentTr: "Cihangir'de nostaljik ortamda el yapımı bol cevizli geleneksel Çerkez tavuğu.", commentEn: "Homemade traditional Circassian chicken with plenty of walnuts in Cihangir." },
    { name: "Hayvore", rating: 4.5, reviewCount: 2300, area: "Beyoğlu", commentTr: "Beyoğlu'nda Karadeniz ve Kafkas mutfağının en leziz Çerkez tavuğu mezelerinden biri.", commentEn: "One of the most delicious Circassian chicken appetizers of Black Sea and Caucasian kitchen." },
    { name: "Agora Meyhanesi 1890", rating: 4.6, reviewCount: 3100, area: "Balat", commentTr: "Tarihi Balat meyhanesinde kişnişli ve sarımsaklı usta işi Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in the historic Balat tavern." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "Namlı Gurme (Karaköy)", rating: 4.6, reviewCount: 8500, area: "Karaköy", commentTr: "Karaköy'de gurme peynir reyonundan seçme Kars gravyeri ve isli peynir tabağı.", commentEn: "Kars gruyere and smoked cheese plate selected from gourmet cheese section in Karakoy." },
    { name: "Antre Gourmet", rating: 4.5, reviewCount: 650, area: "Cihangir", commentTr: "Cihangir'in ünlü gurme butiğinden yıllandırılmış Kars gravyeri çeşitleri.", commentEn: "Aged Kars gruyere varieties from Cihangir's famous gourmet boutique." },
    { name: "Eataly İstanbul", rating: 4.4, reviewCount: 4200, area: "Zorlu Center", commentTr: "Zorlu Center'da İtalyan ve yerel Anadolu gurme peynirlerinden özel tabak.", commentEn: "Special platter of Italian and local Anatolian gourmet cheeses in Zorlu Center." }
  ],
  "Zerde": [
    { name: "Hafız Mustafa 1864", rating: 4.7, reviewCount: 12000, area: "Sirkeci", commentTr: "Tarihi tatlıcıda safranlı ve pirinçli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron and rice pudding zerde at the historic dessert shop." },
    { name: "Ali Muhiddin Hacı Bekir", rating: 4.6, reviewCount: 5400, area: "Eminönü", commentTr: "Eminönü'nde yüzyıllık tarifle hazırlanan nar taneli nefis gül kokulu zerde tatlısı.", commentEn: "Delicious rosewater-scented zerde with pomegranate prepared with a century-old recipe." },
    { name: "Saray Muhallebicisi", rating: 4.4, reviewCount: 8200, area: "Beyoğlu", commentTr: "İstiklal Caddesi'nde manda sütü ve safran aromalı geleneksel fırın zerdesi.", commentEn: "Traditional baked zerde flavored with buffalo milk and saffron on Istiklal Street." }
  ],
  "Perde Pilavı": [
    { name: "Kadınlar Pazarı Siirt Şeref Büryan (Yan Ürün)", rating: 4.8, reviewCount: 3100, area: "Fatih", commentTr: "Fatih'te çıtır bademli hamur içinde tavuk ve kuş üzümlü enfes perde pilavı.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell." },
    { name: "Sabırtaşı Restoran", rating: 4.6, reviewCount: 1900, area: "Beyoğlu", commentTr: "İstiklal Caddesi'nde el açması hamuruyla fırınlanmış yöresel perde pilavı.", commentEn: "Regional perde rice baked with hand-rolled pastry on Istiklal Street." },
    { name: "Fatih Karadeniz Pidecisi (Yöresel Günler)", rating: 4.5, reviewCount: 2800, area: "Fatih", commentTr: "Fatih'te özel günlerde taş fırında pişen tereyağlı çıtır perde pilavı.", commentEn: "Crispy buttered perde rice baked in stone oven on special days in Fatih." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Baş köşebaşı Restoran", rating: 4.6, reviewCount: 1850, area: "Ataşehir", commentTr: "Ataşehir'de Güneydoğu mutfağından ekşili, nohutlu ve kıymalı analı kızlı.", commentEn: "Tangy analı kızlı stew with chickpeas and minced beef in Atasehir." },
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de usta ellerden çıkan orijinal Adana usulü sulu analı kızlı yemeği.", commentEn: "Original Adana style juicy analı kızlı stew from master hands in Kadikoy." },
    { name: "Adana İl Sınırı", rating: 4.5, reviewCount: 1500, area: "Şişli", commentTr: "Şişli'de kebap öncesi sunulan bol limonlu ve tereyağlı analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served in Sisli." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Şırdancı Mehmet", rating: 4.5, reviewCount: 6500, area: "Fatih", commentTr: "Fatih'te gece hayatının vazgeçilmezi, bol baharatlı mumbar ve şırdan dolması.", commentEn: "Spicy mumbar and stuffed sirdan, an indispensable part of nightlife in Fatih." },
    { name: "Kadıköy Şırdancısı", rating: 4.4, reviewCount: 2100, area: "Kadıköy", commentTr: "Kadıköy'de taze ve temiz sakatattan hazırlanan Adana usulü şırdan dolması.", commentEn: "Adana style stuffed sirdan prepared from fresh and clean offal in Kadikoy." },
    { name: "Paçacı Hikmet Usta", rating: 4.5, reviewCount: 1800, area: "Bahçelievler", commentTr: "Bahçelievler'de dumanı üstünde servis edilen bol kimyonlu sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of cumin in Bahcelievler." }
  ],
  "Tire Köftesi": [
    { name: "Tireli Ali Usta İstanbul", rating: 4.6, reviewCount: 880, area: "Kadıköy", commentTr: "Kadıköy'de orijinal Tire usulü ızgara köftelerin domates soslu tereyağlı sunumu.", commentEn: "Original Tire style grilled meatballs served in butter and tomato sauce." },
    { name: "Egece İzmir Mutfağı", rating: 4.4, reviewCount: 520, area: "Ataşehir", commentTr: "Ataşehir'de tırnak pide yatağında eritilmiş tereyağlı enfes Tire köftesi.", commentEn: "Delicious Tire kebab on flatbread bed with sizzling melted butter in Atasehir." },
    { name: "Plus Kitchen (Ege Haftası Menüsü)", rating: 4.4, reviewCount: 620, area: "Zincirlikuyu", commentTr: "Ege haftası menüsünde sunulan hafifletilmiş domates soslu Tire köftesi.", commentEn: "Lightened Tire kebab with tomato sauce served on Aegean week menu." }
  ],
  "Cevizli Mantı": [
    { name: "Sinop Mantı Evi (Beşiktaş)", rating: 4.7, reviewCount: 3200, area: "Beşiktaş", commentTr: "Beşiktaş'ta el açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough in Besiktas." },
    { name: "Aşkana Mantı", rating: 4.8, reviewCount: 5100, area: "Ulus", commentTr: "Ulus'ta mantı denince ilk akla gelen, tereyağlı ve cevizli özel tabak.", commentEn: "First place that comes to mind for dumplings in Ulus, special plate with butter and walnuts." },
    { name: "Bodrum Mantı & Cafe (Özel Sipariş)", rating: 4.4, reviewCount: 4800, area: "Arnavutköy", commentTr: "Arnavutköy şubesinde çıtır ceviz parçalarıyla fırınlanmış sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces in Arnavutkoy branch." }
  ],
  "Kalamar Dolması": [
    { name: "Kıyı Restaurant (Tarabya)", rating: 4.6, reviewCount: 2100, area: "Tarabya", commentTr: "Tarabya'da fırınlanmış, içi karides ve mantarla doldurulmuş enfes kalamar dolması.", commentEn: "Delicious baked calamari stuffed with shrimp and mushrooms in Tarabya." },
    { name: "Bebek Balıkçısı", rating: 4.5, reviewCount: 3200, area: "Bebek", commentTr: "Bebek'te boğaz kenarında kaşarlı ve deniz mahsullü gurme kalamar dolması.", commentEn: "Gourmet calamari stuffed with cheese and seafood by the Bosphorus in Bebek." },
    { name: "Park Fora", rating: 4.6, reviewCount: 2800, area: "Kuruçeşme", commentTr: "Ortaköy Parkı içinde taş fırında pişen tereyağlı gurme kalamar dolması.", commentEn: "Gourmet calamari stuffed and baked in stone oven with butter in Kurucesme." }
  ],
  "Fırında Sütlaç": [
    { name: "Tarihi Sarıyer Muhallebicisi", rating: 4.6, reviewCount: 4500, area: "Sarıyer", commentTr: "Sarıyer'de taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı sütlaç.", commentEn: "Baked rice pudding with hazelnuts fresh out of the stone oven in Sariyer." },
    { name: "Hamsiköy Sütlaççısı İstanbul", rating: 4.5, reviewCount: 1500, area: "Ümraniye", commentTr: "Ümraniye'de Trabzon'dan gelen tam yağlı sütle yapılan orijinal Hamsiköy sütlacı.", commentEn: "Original Hamsikoy rice pudding made with full-fat milk from Trabzon in Umraniye." },
    { name: "Nizam Pide & Sütlaç Salonu", rating: 4.5, reviewCount: 5200, area: "Beyoğlu", commentTr: "İstiklal Caddesi'nde fırınlanmış kıvamlı ve bol fındıklı efsanevi sütlaç.", commentEn: "Legendary thick baked rice pudding with plenty of hazelnuts on Istiklal Street." }
  ]
};

export const GOURMET_ANKARA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta", rating: 4.6, reviewCount: 1800, area: "Çankaya", commentTr: "Çankaya'da meşe odunu dumanıyla pişen çıtır derili Siirt usulü büryan kebabı.", commentEn: "Siirt style buryan kebab with crispy skin cooked with oak wood smoke in Cankaya." },
    { name: "Büryan Et Lokantası (GOP)", rating: 4.5, reviewCount: 1200, area: "Gaziosmanpaşa", commentTr: "GOP'ta şık ortamda servis edilen, tel tel dökülen kuyu büryan kebabı.", commentEn: "Pit-roasted buryan kebab served in a stylish environment in GOP." },
    { name: "Meşhur Siirt Büryan Sarayı", rating: 4.4, reviewCount: 950, area: "Ulus", commentTr: "Ulus'ta geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional pits in Ulus." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı Muammer Usta (Ankara)", rating: 4.7, reviewCount: 4100, area: "Ulus", commentTr: "Ulus'ta odun ateşinde dönen, Ankara'nın en iyi yatık kuzu döner cağ kebabı.", commentEn: "The best horizontal spit-roasted lamb cağ kebab cooked over wood fire in Ulus." },
    { name: "Tortum Cağ Kebabı", rating: 4.5, reviewCount: 2100, area: "Yenimahalle", commentTr: "Yenimahalle'de Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı şişleri.", commentEn: "Legendary cağ kebab skewers cut hot, Tortum style, in Yenimahalle." },
    { name: "Göksu Cağ Kebabı", rating: 4.4, reviewCount: 1500, area: "Çankaya", commentTr: "Çankaya'da köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Cankaya." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Boğaziçi Lokantası", rating: 4.8, reviewCount: 6500, area: "Ulus", commentTr: "Tarihi Ulus lokantasında terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables in historical Ulus diner." },
    { name: "Çiçek Lokantası", rating: 4.6, reviewCount: 3500, area: "Söğütözü", commentTr: "Söğütözü'nde geleneksel esnaf mutfağı kalitesiyle sunulan kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables in Sogutozu." },
    { name: "Göksu Lokantası", rating: 4.5, reviewCount: 2800, area: "Kızılay", commentTr: "Kızılay'da taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables in Kizilay." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Düveroğlu", rating: 4.7, reviewCount: 14000, area: "Bilkent", commentTr: "Bilkent'te sarımsaklı köz patlıcan beğenisi ve tereyağlı kuzu kuşbaşıyla efsane Ali Nazik.", commentEn: "Legendary Ali Nazik with garlic roasted eggplant puree and buttered cubed lamb in Bilkent." },
    { name: "Hacı Arif Bey Lokantası", rating: 4.6, reviewCount: 5200, area: "Çankaya", commentTr: "Çankaya'da geleneksel Antep usulü süzme yoğurtlu ve zırh kıymalı Ali Nazik.", commentEn: "Antep-style Ali Nazik with strained yogurt and minced lamb in Cankaya." },
    { name: "Günaydın Kebap (Arjantin)", rating: 4.5, reviewCount: 3100, area: "GOP", commentTr: "GOP'ta şık sunumuyla tereyağında kavrulmuş kuzu etli gurme Ali Nazik.", commentEn: "Gourmet Ali Nazik with pan-fried lamb in butter, elegantly served in GOP." }
  ],
  "Beyran Çorbası": [
    { name: "Meşhur Çorbacı Adnan Usta", rating: 4.6, reviewCount: 4200, area: "İskitler", commentTr: "İskitler'de gece boyu harlı ateşte pişen, bol etli ve sarımsaklı Antep usulü beyran.", commentEn: "Antep-style beyran cooked over high flame with rich garlic and meat in Iskitler." },
    { name: "Devrez Çorba", rating: 4.5, reviewCount: 8500, area: "Çankaya", commentTr: "Tunalı'da 24 saat servis edilen dumanı üstünde acılı beyran çorbası.", commentEn: "Steaming hot spicy beyran soup served 24 hours in Tunali." },
    { name: "Beyranı Antep Ankara", rating: 4.4, reviewCount: 1800, area: "Balgat", commentTr: "Balgat'ta bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran lezzeti.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes in Balgat." }
  ],
  "Hünkar Beğendi": [
    { name: "Cafemiz", rating: 4.5, reviewCount: 2100, area: "Gaziosmanpaşa", commentTr: "GOP'un nezih kafesinde fırınlanmış patlıcan beğenisi üzerinde servis edilen lokum kıvamında kuzu gerdan.", commentEn: "Tender lamb served over baked eggplant puree in a decent cafe environment in GOP." },
    { name: "Louise Brasserie & Lounge", rating: 4.6, reviewCount: 1800, area: "Çankaya", commentTr: "Çankaya'da modern ve şık sunumuyla gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served in Cankaya." },
    { name: "Divan Pub Ankara", rating: 4.5, reviewCount: 3200, area: "Çankaya", commentTr: "Divan kalitesiyle tereyağlı kuzu kuşbaşı ve köz patlıcan beğenisinin muhteşem uyumu.", commentEn: "Stunning combination of buttered cubed lamb and roasted eggplant puree with Divan quality." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Konyalı Hacı Usta", rating: 4.5, reviewCount: 4200, area: "Balgat", commentTr: "Balgat'ta sumak ekşisi ve baharatlı pirinç dolgulu nefis zeytinyağlı kuru dolma.", commentEn: "Delicious dried eggplant stuffed with sumac molasses and spiced rice in Balgat." },
    { name: "Tarihi Mutfak Lokantası", rating: 4.4, reviewCount: 950, area: "Ulus", commentTr: "Ulus'ta esnaf lokantası usulü hazırlanan zeytinyağlı Antep usulü kuru patlıcan dolması.", commentEn: "Antep style dried eggplant stuffed with olive oil, prepared artisan-style in Ulus." },
    { name: "Zenger Paşa Konağı", rating: 4.5, reviewCount: 1800, area: "Ankara Kalesi", commentTr: "Tarihi kalede nostaljik atmosferde sunulan ekşili ve naneli kuru patlıcan dolması.", commentEn: "Sour and minty dried eggplant stuffed, served in historical castle atmosphere." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Tarihi Ulus Lezzet Lokantası", rating: 4.5, reviewCount: 1600, area: "Ulus", commentTr: "Ulus'ta taş fırında yavaş pişen, taze kekik aromalı kuzu güveç.", commentEn: "Lamb stew with fresh thyme aroma cooked slowly in stone oven in Ulus." },
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 2800, area: "Yenimahalle", commentTr: "Toprak güveçte arpacık soğan ve sarımsakla saatlerce fırınlanmış kuzu eti.", commentEn: "Lamb meat baked for hours with shallots and garlic in clay pot in Yenimahalle." },
    { name: "Fırıncı Et Lokantası", rating: 4.5, reviewCount: 2100, area: "Çankaya", commentTr: "Çankaya'da meşe kömürü fırınında pişen lokum kıvamında güveç etleri.", commentEn: "Melt-in-mouth clay pot meat baked in oak wood oven in Cankaya." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Trilye Restoran", rating: 4.8, reviewCount: 6200, area: "Çankaya", commentTr: "Çankaya'da sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic in Cankaya." },
    { name: "Yelken Balık Restoran", rating: 4.7, reviewCount: 3100, area: "Gaziosmanpaşa", commentTr: "GOP'ta balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish in GOP." },
    { name: "Kalbur Balık", rating: 4.6, reviewCount: 1900, area: "Oran", commentTr: "Oran'da taze otlar ve gurme deniz mahsullü zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs and gourmet seafood in Oran." }
  ],
  "Enginarlı Pilav": [
    { name: "Kafes Fırın (Mevsimsel Gurme Menü)", rating: 4.5, reviewCount: 3800, area: "Çukurambar", commentTr: "Çukurambar'da dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas in Cukurambar." },
    { name: "Amelie’s Garden", rating: 4.4, reviewCount: 950, area: "Çankaya", commentTr: "Tunalı'da botanik atmosferde sunulan zeytinyağlı taze enginar göbekli pilav.", commentEn: "Rice with fresh olive oil artichoke hearts served in botanical atmosphere in Tunali." },
    { name: "Kruvasante (Gurme Tabaklar)", rating: 4.5, reviewCount: 1200, area: "Çankaya", commentTr: "Çankaya'da gurme sebze tabakları kapsamında sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under gourmet vegetable plates in Cankaya." }
  ],
  "Çerkez Tavuğu": [
    { name: "Kıtır (Meze Reyonu)", rating: 4.6, reviewCount: 9500, area: "Tunalı", commentTr: "Tunalı'da Kıtır'ın meze reyonundan bol cevizli ve sarımsaklı geleneksel Çerkez tavuğu.", commentEn: "Traditional Circassian chicken with plenty of walnuts and garlic from Kitir's meze section." },
    { name: "Aylak Madam", rating: 4.4, reviewCount: 1800, area: "Kavaklıdere", commentTr: "Kavaklıdere'de sıcak ekmekle servis edilen nefis ceviz ezmeli Çerkez tavuğu.", commentEn: "Delicious Circassian chicken with walnut paste served with warm bread in Kavaklidere." },
    { name: "Kalender Zebercet Meyhanesi", rating: 4.5, reviewCount: 1400, area: "Çankaya", commentTr: "Çankaya'da meyhane usulü kişnişli ve sızma zeytinyağlı usta işi Çerkez tavuğu.", commentEn: "Circassian chicken paste with coriander and olive oil served tavern-style in Cankaya." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "Misafir Gurme", rating: 4.6, reviewCount: 1100, area: "Çankaya", commentTr: "Çankaya'da şarküteri reyonundan seçme eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section in Cankaya." },
    { name: "Kuğu Pasta & Cafe (Şarküteri Reyonu)", rating: 4.5, reviewCount: 2100, area: "Çankaya", commentTr: "Çankaya'da taze Kars gravyeri ve isli Çerkez peynirinden oluşan şık tabak.", commentEn: "Elegant platter of fresh Kars gruyere and smoked Circassian cheese in Cankaya." },
    { name: "Kebapçı Emin Usta (Özel Peynir Sunumu)", rating: 4.4, reviewCount: 820, area: "Ulus", commentTr: "Ulus'ta yemek öncesi ikram edilen yöresel Kars gravyeri ve isli peynirler.", commentEn: "Regional Kars gruyere and smoked cheeses served before kebabs in Ulus." }
  ],
  "Zerde": [
    { name: "Zeynel Muhallebicisi", rating: 4.6, reviewCount: 5200, area: "Çankaya", commentTr: "Çankaya'da safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde in Cankaya." },
    { name: "Akman Boza ve Pasta Salonu", rating: 4.5, reviewCount: 3100, area: "Ulus", commentTr: "Ulus'ta nostaljik ortamda sunulan geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served in nostalgic atmosphere in Ulus." },
    { name: "Kuğu Pastanesi", rating: 4.5, reviewCount: 2400, area: "Çankaya", commentTr: "Çankaya'da manda sütü aromalı ve safranlı hafif geleneksel fırın zerdesi.", commentEn: "Light traditional baked zerde with buffalo milk aroma and saffron in Cankaya." }
  ],
  "Perde Pilavı": [
    { name: "Meşhur Siirtli Hacı Usta", rating: 4.6, reviewCount: 1800, area: "Çankaya", commentTr: "Çankaya'da çıtır bademli hamur kubbesi içinde dumanı üstünde tavuklu perde pilavı.", commentEn: "Steaming hot chicken perde rice inside a crispy almond pastry dome in Cankaya." },
    { name: "Has Siirt Mutfağı", rating: 4.5, reviewCount: 1100, area: "Balgat", commentTr: "Balgat'ta usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands in Balgat." },
    { name: "Divan sofrası Ankara", rating: 4.5, reviewCount: 1500, area: "Çankaya", commentTr: "Çankaya'da taş fırında pişen tereyağlı çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy buttered pastry baked in stone oven in Cankaya." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Masabaşı Kebapçısı", rating: 4.6, reviewCount: 8200, area: "Balgat", commentTr: "Balgat'ta Güneydoğu mutfağından ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh in Balgat." },
    { name: "Meşhur İncek Köftecisi (Yöresel Menü)", rating: 4.4, reviewCount: 1900, area: "İncek", commentTr: "İncek'te yöresel günler kapsamında hazırlanan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared under regional days in Incek." },
    { name: "Ankara Konağı Restoran", rating: 4.5, reviewCount: 1200, area: "Altındağ", commentTr: "Altındağ'da nostaljik konakta sunulan bol limonlu ve tereyağlı analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served in nostalgic mansion." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Şırdancı Bey Ankara", rating: 4.5, reviewCount: 2100, area: "Balgat", commentTr: "Balgat'ta gece hayatının vazgeçilmezi, Adana usulü bol kimyonlu şırdan dolması.", commentEn: "Adana style stuffed sirdan with plenty of cumin, a nightlife favorite in Balgat." },
    { name: "Ciğerci Bahattin (Sakatat Seçenekleri)", rating: 4.4, reviewCount: 5200, area: "Çankaya", commentTr: "Çankaya'da taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal in Cankaya." },
    { name: "Paçacı Bey", rating: 4.5, reviewCount: 1600, area: "Yenimahalle", commentTr: "Yenimahalle'de dumanı üstünde servis edilen bol baharatlı sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices in Yenimahalle." }
  ],
  "Tire Köftesi": [
    { name: "Ege Sofrası Ankara", rating: 4.5, reviewCount: 820, area: "Çankaya", commentTr: "Çankaya'da orijinal Tire usulü ızgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Original Tire style grilled meatballs served with butter and tomato sauce in Cankaya." },
    { name: "Kıtır (Gurme Köfte Seçenekleri)", rating: 4.6, reviewCount: 9500, area: "Tunalı", commentTr: "Tunalı'da tırnak pide yatağında eritilmiş tereyağlı incecik Tire köfteleri.", commentEn: "Thin Tire meatballs on flatbread bed with sizzling melted butter in Tunali." },
    { name: "Cepa BigChefs (Yöresel Gurme Menüsü)", rating: 4.4, reviewCount: 3100, area: "Çankaya", commentTr: "Cepa BigChefs'in yöresel menüsünde sunulan hafifletilmiş domates soslu Tire köftesi.", commentEn: "Lightened Tire kebab with tomato sauce served on regional menu at Cepa BigChefs." }
  ],
  "Cevizli Mantı": [
    { name: "Mantıcı Kayseri Evi (Sinop Usulü Seçeneği)", rating: 4.5, reviewCount: 1200, area: "Çankaya", commentTr: "Çankaya'da el açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough in Cankaya." },
    { name: "Pembe Kurbağa Mantı Evi", rating: 4.6, reviewCount: 2800, area: "Kavaklıdere", commentTr: "Kavaklıdere'de mantı denince akla gelen, tereyağlı ve cevizli özel tabak.", commentEn: "First place that comes to mind for dumplings in Kavaklidere, special plate with butter and walnuts." },
    { name: "Gabori Mantı Ankara", rating: 4.5, reviewCount: 950, area: "Çankaya", commentTr: "Çankaya'da fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces in Cankaya." }
  ],
  "Kalamar Dolması": [
    { name: "Trilye Restoran", rating: 4.8, reviewCount: 6200, area: "Çankaya", commentTr: "Çankaya'da fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with fresh shrimp and mushrooms in Cankaya." },
    { name: "Yelken Balık", rating: 4.7, reviewCount: 3100, area: "Gaziosmanpaşa", commentTr: "GOP'ta kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with cheese and seafood in GOP." },
    { name: "Kalbur Balık", rating: 4.6, reviewCount: 1900, area: "Oran", commentTr: "Oran'da taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked calamari stuffed and baked in stone oven with butter in Oran." }
  ],
  "Fırında Sütlaç": [
    { name: "Zeynel Muhallebicisi", rating: 4.6, reviewCount: 5200, area: "Çankaya", commentTr: "Çankaya'da taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven in Cankaya." },
    { name: "Akman Boza ve Pasta Salonu", rating: 4.5, reviewCount: 3100, area: "Ulus", commentTr: "Ulus'ta tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk in Ulus." },
    { name: "Devrez Süt Evi", rating: 4.4, reviewCount: 1200, area: "Çankaya", commentTr: "Tunalı şubesinde fırınlanmış kıvamlı ve bol fındıklı efsanevi sütlaç.", commentEn: "Legendary thick baked rice pudding with plenty of hazelnuts at Tunali branch." }
  ]
};

export const GOURMET_IZMIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta (Alsancak)", rating: 4.6, reviewCount: 1800, area: "Alsancak", commentTr: "Alsancak'ta çıtır derili ve tel tel dökülen nefis Siirt usulü kuyu büryan kebabı.", commentEn: "Siirt style pit-roasted buryan kebab with crispy skin in Alsancak." },
    { name: "Meşhur Siirt Büryan Salonu İzmir", rating: 4.5, reviewCount: 950, area: "Konak", commentTr: "Konak'ta geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional brick pits in Konak." },
    { name: "Aziziye Büryan Ege", rating: 4.4, reviewCount: 820, area: "Bornova", commentTr: "Bornova'da meşe odunu ateşiyle buharda pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam over oak wood fire in Bornova." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı Muammer Usta (İzmir)", rating: 4.7, reviewCount: 3100, area: "Bayraklı", commentTr: "Bayraklı'da odun ateşinde yatık kuzu döner döner şişleri.", commentEn: "Horizontal spit-roasted lamb cağ kebab cooked over wood fire in Bayrakli." },
    { name: "Tortum Cağ Kebabı Bornova", rating: 4.5, reviewCount: 1500, area: "Bornova", commentTr: "Bornova'da Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı.", commentEn: "Legendary cağ kebab cut hot, Tortum style, in Bornova." },
    { name: "Palandöken Cağ Kebabı Karşıyaka", rating: 4.5, reviewCount: 1900, area: "Karşıyaka", commentTr: "Karşıyaka'da köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Karsiyaka." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Adil Müftüoğlu - Uğur Lokantası", rating: 4.8, reviewCount: 4200, area: "Çankaya", commentTr: "Tarihi İzmir lokantasında terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables in historical Izmir diner." },
    { name: "Bizim Lokanta (Kemeraltı)", rating: 4.7, reviewCount: 3200, area: "Kemeraltı", commentTr: "Kemeraltı Çarşısı'nda geleneksel esnaf mutfağı kalitesiyle sunulan kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables in Kemeralti." },
    { name: "Mahfel Esnaf Lokantası", rating: 4.5, reviewCount: 1500, area: "Bornova", commentTr: "Bornova'da taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables in Bornova." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Tavacı Recep Usta (Alsancak)", rating: 4.7, reviewCount: 8500, area: "Alsancak", commentTr: "Alsancak'ta şık sunumuyla tereyağında kavrulmuş kuzu etli gurme Ali Nazik.", commentEn: "Gourmet Ali Nazik with pan-fried lamb in butter, elegantly served in Alsancak." },
    { name: "Topçu Restoran", rating: 4.6, reviewCount: 9500, area: "Alsancak", commentTr: "Alsancak'ta geleneksel zırh kıymalı ve köz patlıcanlı enfes Ali Nazik.", commentEn: "Delicious Ali Nazik with minced beef and roasted eggplant in Alsancak." },
    { name: "Adana Yüzevler Kebapçısı", rating: 4.5, reviewCount: 2800, area: "Bostanlı", commentTr: "Bostanlı'da süzme yoğurtlu ve köz patlıcan beğenili nefis Ali Nazik.", commentEn: "Tasty Ali Nazik with strained yogurt and eggplant puree in Bostanli." }
  ],
  "Beyran Çorbası": [
    { name: "Çorbacı İsmet Usta", rating: 4.7, reviewCount: 6500, area: "Alsancak", commentTr: "Alsancak'ta gece boyu harlı ateşte pişen, bol etli ve sarımsaklı beyran çorbası.", commentEn: "Steaming hot spicy beyran soup cooked over high flame with garlic in Alsancak." },
    { name: "Tarihi Kemeraltı Çorbacısı", rating: 4.5, reviewCount: 2100, area: "Kemeraltı", commentTr: "Kemeraltı'nda bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran lezzeti.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes in Kemeralti." },
    { name: "Çorba Durağı", rating: 4.4, reviewCount: 1100, area: "Karşıyaka", commentTr: "Karşıyaka'da dumanı üstünde servis edilen bol etli beyran çorbası.", commentEn: "Steaming hot beyran soup with plenty of meat in Karsiyaka." }
  ],
  "Hünkar Beğendi": [
    { name: "Balmumu Dükkan Lokanta", rating: 4.7, reviewCount: 2400, area: "Alsancak", commentTr: "Alsancak'ta Ahmet Güzelyağdöken'in yorumuyla nefis saray usulü hünkar beğendi.", commentEn: "Delicious palace style hunkar begendi in Alsancak with Ahmet Guzelyagdoken's touch." },
    { name: "Murano's", rating: 4.6, reviewCount: 1200, area: "Alsancak", commentTr: "Modern ve şık sunumuyla gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served in Alsancak." },
    { name: "Leone Patisserie (Gurme Ev Yemekleri Bölümü)", rating: 4.5, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak'ta Fransız esintili şık sunumlu kuzu etli hünkar beğendi.", commentEn: "Lamb hunkar begendi with French-inspired elegant presentation in Alsancak." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Balmumu Lokanta (Ahmet Güzelyağdöken)", rating: 4.7, reviewCount: 2400, area: "Alsancak", commentTr: "Alsancak'ta sumak ekşisi ve baharatlı pirinç dolgulu nefis zeytinyağlı kuru dolma.", commentEn: "Delicious dried eggplant stuffed with sumac molasses and spiced rice in Alsancak." },
    { name: "Kısmet Lokantası", rating: 4.5, reviewCount: 1100, area: "Kemeraltı", commentTr: "Kemeraltı'nda esnaf lokantası usulü hazırlanan zeytinyağlı kuru patlıcan dolması.", commentEn: "Olive oil dried eggplant stuffed, prepared artisan-style in Kemeralti." },
    { name: "L'agora Lokantası", rating: 4.5, reviewCount: 850, area: "Kemeraltı", commentTr: "Tarihi kervansaray avlusunda sunulan ekşili ve naneli kuru patlıcan dolması.", commentEn: "Sour and minty dried eggplant stuffed, served in historic caravanserai courtyard." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Seçkin Lokantası", rating: 4.6, reviewCount: 1800, area: "Kemeraltı", commentTr: "Kemeraltı'nda taş fırında yavaş pişen, taze kekik aromalı kuzu güveç.", commentEn: "Lamb stew with fresh thyme aroma cooked slowly in stone oven in Kemeralti." },
    { name: "Meşhur Lokantacı Kazım Usta", rating: 4.5, reviewCount: 2100, area: "Kemeraltı", commentTr: "Toprak güveçte arpacık soğan ve sarımsakla saatlerce fırınlanmış kuzu eti.", commentEn: "Lamb meat baked for hours with shallots and garlic in clay pot in Kemeralti." },
    { name: "Tarihi Kemeraltı Esnaf Lokantası", rating: 4.4, reviewCount: 1200, area: "Kemeraltı", commentTr: "Geleneksel lokanta usulü odun fırınında pişen güveç etleri.", commentEn: "Traditional local diner style wood oven baked clay pot stews in Kemeralti." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Deniz Restoran", rating: 4.8, reviewCount: 9500, area: "Kordon", commentTr: "Kordon'da sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic in Kordon." },
    { name: "Kordon Yengeç Restoran", rating: 4.6, reviewCount: 3200, area: "Kordon", commentTr: "Kordon'da balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish on Kordon." },
    { name: "Sipari Balık Restoran", rating: 4.7, reviewCount: 2800, area: "İnciraltı", commentTr: "Deniz kıyısında taze otlar ve gurme zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs by the sea." }
  ],
  "Enginarlı Pilav": [
    { name: "Balmumu Dükkan Lokanta", rating: 4.7, reviewCount: 2400, area: "Alsancak", commentTr: "Alsancak'ta dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas in Alsancak." },
    { name: "Reyhan Pastanesi (Mevsimsel Gurme Menü)", rating: 4.6, reviewCount: 8200, area: "Alsancak", commentTr: "Alsancak'ta taze enginar göbekli pilavın gurme ve hafif sunumu.", commentEn: "Gourmet and light rice prepared with fresh artichoke hearts in Alsancak." },
    { name: "Less Ordinary", rating: 4.5, reviewCount: 920, area: "Alsancak", commentTr: "Alsancak'ta gurme sebze tabakları kapsamında sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under gourmet vegetable plates in Alsancak." }
  ],
  "Çerkez Tavuğu": [
    { name: "Sakız Alsancak Restoran", rating: 4.6, reviewCount: 3100, area: "Alsancak", commentTr: "Alsancak'ta Ege meyhanesi usulü bol cevizli geleneksel Çerkez tavuğu.", commentEn: "Traditional Circassian chicken with plenty of walnuts served Aegean style in Alsancak." },
    { name: "Meyhane Sisim (Meze Reyonu)", rating: 4.5, reviewCount: 1800, area: "Karşıyaka", commentTr: "Karşıyaka'da taze malzemelerle hazırlanan usta işi Çerkez tavuğu.", commentEn: "Circassian chicken paste prepared with fresh ingredients in Karsiyaka." },
    { name: "Bohem Meyhane", rating: 4.4, reviewCount: 950, area: "Alsancak", commentTr: "Alsancak'ta nostaljik ortamda kişnişli ve sarımsaklı Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in a nostalgic atmosphere." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "Antre Gourmet İzmir", rating: 4.6, reviewCount: 650, area: "Alsancak", commentTr: "Alsancak'ta şarküteri reyonundan seçme eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section in Alsancak." },
    { name: "Leone Patisserie (Şarküteri Seçenekleri)", rating: 4.5, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak'ta gurme Kars gravyeri ve yerel isli peynir tabağı sunumu.", commentEn: "Platter of gourmet Kars gruyere and local smoked cheese in Alsancak." },
    { name: "Reyhan Pastanesi (Gurme Peynir Tabakları)", rating: 4.6, reviewCount: 8200, area: "Alsancak", commentTr: "Alsancak'ta gurme reyonundan seçilen Kars gravyeri ve isli peynirler.", commentEn: "Kars gruyere and smoked cheeses selected from gourmet section in Alsancak." }
  ],
  "Zerde": [
    { name: "Bravo Pastanesi", rating: 4.7, reviewCount: 5200, area: "Bostanlı", commentTr: "Bostanlı'da safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde in Bostanli." },
    { name: "Sevinç Pastanesi", rating: 4.6, reviewCount: 9500, area: "Alsancak", commentTr: "Alsancak'ın tarihi pastanesinde sunulan geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served in Alsancak's historic pastisserie." },
    { name: "Alsancak Dostlar Fırını (Geleneksel Tatlılar)", rating: 4.5, reviewCount: 4100, area: "Alsancak", commentTr: "Alsancak'ta boyoz yanında sunulan safran aromalı hafif zerde tatlısı.", commentEn: "Light traditional zerde flavored with saffron served in Alsancak." }
  ],
  "Perde Pilavı": [
    { name: "Has Siirt Mutfağı İzmir", rating: 4.5, reviewCount: 1100, area: "Karabağlar", commentTr: "Karabağlar'da usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands in Izmir." },
    { name: "Meşhur Siirtli Hacı Usta (Yan Ürün)", rating: 4.6, reviewCount: 1800, area: "Alsancak", commentTr: "Alsancak'ta çıtır bademli hamur içinde tavuk ve kuş üzümlü enfes perde pilavı.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell." },
    { name: "Ege Sofrası", rating: 4.4, reviewCount: 520, area: "Bornova", commentTr: "Bornova'da fırınlanmış çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy pastry baked in Bornova." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Cumba Restoran", rating: 4.7, reviewCount: 3100, area: "Bornova", commentTr: "Bornova'da Güneydoğu mutfağından ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh in Bornova." },
    { name: "Boğaziçi Restoran (Bostanlı)", rating: 4.6, reviewCount: 5200, area: "Bostanlı", commentTr: "Bostanlı'da şık ortamda sunulan tereyağlı ve bol limonlu analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served in Bostanli." },
    { name: "Tarihi Altınkapı Kebap & Köfte (Yöresel Günler)", rating: 4.5, reviewCount: 2400, area: "Alsancak", commentTr: "Alsancak'ta yöresel günler kapsamında sunulan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared under regional days in Alsancak." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Şırdancı Akın", rating: 4.6, reviewCount: 3800, area: "Bornova", commentTr: "Bornova'da gece hayatının vazgeçilmezi, Adana usulü bol kimyonlu şırdan dolması.", commentEn: "Adana style stuffed sirdan with plenty of cumin, a nightlife favorite in Bornova." },
    { name: "Şırdancı Mehmet İzmir", rating: 4.5, reviewCount: 2100, area: "Konak", commentTr: "Konak'ta taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal in Konak." },
    { name: "Akın Kokoreç (Sakatat Seçenekleri)", rating: 4.4, reviewCount: 1500, area: "Alsancak", commentTr: "Alsancak'ta dumanı üstünde servis edilen bol baharatlı sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices in Alsancak." }
  ],
  "Tire Köftesi": [
    { name: "Meşhur Tire Köftecisi Ali Usta", rating: 4.7, reviewCount: 2400, area: "Kemeraltı", commentTr: "Kemeraltı'nda orijinal Tire usulü ızgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Original Tire style grilled meatballs served with butter and tomato sauce." },
    { name: "Tireli Ahmet Usta", rating: 4.5, reviewCount: 1200, area: "Bornova", commentTr: "Bornova'da tırnak pide yatağında eritilmiş tereyağlı incecik Tire köfteleri.", commentEn: "Thin Tire meatballs on flatbread bed with sizzling melted butter in Bornova." },
    { name: "Egece İzmir Mutfağı", rating: 4.4, reviewCount: 520, area: "Ataşehir", commentTr: "Eritilmiş tereyağlı ve domates soslu enfes Tire köftesi.", commentEn: "Delicious Tire kebab with tomato sauce and sizzling melted butter." }
  ],
  "Cevizli Mantı": [
    { name: "Mantı Dünyası (Sinop Usulü Seçeneği)", rating: 4.5, reviewCount: 920, area: "Bornova", commentTr: "Bornova'da el açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough in Bornova." },
    { name: "Kırçiçeği (Gurme Mantı Menüsü)", rating: 4.4, reviewCount: 5200, area: "Alsancak", commentTr: "Alsancak'ta tereyağlı ve cevizli özel Sinop mantısı tabağı.", commentEn: "Special plate of Sinop style dumplings with butter and walnuts in Alsancak." },
    { name: "Bodrum Mantı (Bostanlı)", rating: 4.4, reviewCount: 4800, area: "Bostanlı", commentTr: "Bostanlı'da fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces in Bostanli." }
  ],
  "Kalamar Dolması": [
    { name: "Deniz Restoran", rating: 4.8, reviewCount: 9500, area: "Kordon", commentTr: "Kordon'da fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with fresh shrimp and mushrooms on Kordon." },
    { name: "Ferdi Baba Restoran", rating: 4.7, reviewCount: 6200, area: "Alaçatı", commentTr: "Alaçatı'da kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with cheese and seafood in Alacati." },
    { name: "Sipari Balık Restoran", rating: 4.7, reviewCount: 2800, area: "İnciraltı", commentTr: "İnciraltı'nda taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked calamari stuffed and baked in stone oven with butter in Inciralti." }
  ],
  "Fırında Sütlaç": [
    { name: "Bravo Pastanesi", rating: 4.7, reviewCount: 5200, area: "Bostanlı", commentTr: "Bostanlı'da taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven in Bostanli." },
    { name: "Reyhan Pastanesi", rating: 4.6, reviewCount: 8200, area: "Alsancak", commentTr: "Alsancak'ta tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk in Alsancak." },
    { name: "Çorbacı İsmet Usta (Tatlı Reyonu)", rating: 4.7, reviewCount: 6500, area: "Alsancak", commentTr: "Alsancak'ta fırınlanmış kıvamlı ve bol fındıklı sütlaç.", commentEn: "Thick baked rice pudding with plenty of hazelnuts in Alsancak." }
  ]
};

export const GOURMET_MERSIN_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta Mersin", rating: 4.6, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir'de çıtır derili ve tel tel dökülen nefis Siirt usulü kuyu büryan kebabı.", commentEn: "Siirt style pit-roasted buryan kebab with crispy skin in Yenisehir." },
    { name: "Meşhur Siirt Büryan Salonu (Yenişehir)", rating: 4.5, reviewCount: 950, area: "Yenişehir", commentTr: "Yenişehir'de geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional brick pits in Yenisehir." },
    { name: "Hacıbaba Lokantası (Et Özel Reyonu)", rating: 4.4, reviewCount: 820, area: "Akdeniz", commentTr: "Akdeniz'de meşe odunu ateşiyle buharda pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam over oak wood fire in Akdeniz." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı (Pozcu)", rating: 4.7, reviewCount: 3100, area: "Yenişehir", commentTr: "Pozcu'da odun ateşinde yatık kuzu döner döner şişleri.", commentEn: "Horizontal spit-roasted lamb cağ kebab cooked over wood fire in Pozcu." },
    { name: "Tortum Cağ Kebabı Mersin", rating: 4.5, reviewCount: 1500, area: "Mezitli", commentTr: "Mezitli'de Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı.", commentEn: "Legendary cağ kebab cut hot, Tortum style, in Mezitli." },
    { name: "Palandöken Cağ Kebabı Mezitli", rating: 4.5, reviewCount: 1900, area: "Mezitli", commentTr: "Mezitli'de köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Mezitli." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Hacıbaba Lokantası", rating: 4.8, reviewCount: 4200, area: "Akdeniz", commentTr: "Akdeniz'in tarihi lokantasında terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables in historical Akdeniz diner." },
    { name: "Merkez Lokantası", rating: 4.7, reviewCount: 3200, area: "Akdeniz", commentTr: "Akdeniz Çarşısı'nda geleneksel esnaf mutfağı kalitesiyle sunulan kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables in Akdeniz." },
    { name: "Güven Lokantası", rating: 4.5, reviewCount: 1500, area: "Yenişehir", commentTr: "Yenişehir'de taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables in Yenisehir." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Hasan Kolcuoğlu (Marina)", rating: 4.7, reviewCount: 8500, area: "Marina", commentTr: "Marina'da şık sunumuyla tereyağında kavrulmuş kuzu etli gurme Ali Nazik.", commentEn: "Gourmet Ali Nazik with pan-fried lamb in butter, elegantly served in Marina." },
    { name: "Sini Restoran", rating: 4.6, reviewCount: 9500, area: "Yenişehir", commentTr: "Yenişehir'de geleneksel zırh kıymalı ve köz patlıcanlı enfes Ali Nazik.", commentEn: "Delicious Ali Nazik with minced beef and roasted eggplant in Yenisehir." },
    { name: "Baaba Kebap & Meze", rating: 4.5, reviewCount: 2800, area: "Pozcu", commentTr: "Pozcu'da süzme yoğurtlu ve köz patlıcan beğenili nefis Ali Nazik.", commentEn: "Tasty Ali Nazik with strained yogurt and eggplant puree in Pozcu." }
  ],
  "Beyran Çorbası": [
    { name: "Paçacı Şemsi Mersin", rating: 4.7, reviewCount: 6500, area: "Yenişehir", commentTr: "Yenişehir'de gece boyu harlı ateşte pişen, bol etli ve sarımsaklı beyran çorbası.", commentEn: "Steaming hot spicy beyran soup cooked over high flame with garlic in Yenisehir." },
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 2100, area: "Akdeniz", commentTr: "Akdeniz'de bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran lezzeti.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes in Akdeniz." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 1100, area: "Tarsus", commentTr: "Tarsus'ta dumanı üstünde servis edilen bol etli beyran çorbası.", commentEn: "Steaming hot beyran soup with plenty of meat in Tarsus." }
  ],
  "Hünkar Beğendi": [
    { name: "Sarnıç Cafe Bistro", rating: 4.7, reviewCount: 2400, area: "Yenişehir", commentTr: "Yenişehir'de fırınlanmış patlıcan beğenisi üzerinde servis edilen lokum kıvamında kuzu gerdan.", commentEn: "Delicious palace style hunkar begendi in Yenisehir." },
    { name: "Wo-Wo Brasserie", rating: 4.6, reviewCount: 1200, area: "Marina", commentTr: "Marina'da modern ve şık sunumuyla gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served in Marina." },
    { name: "Merada Restoran", rating: 4.5, reviewCount: 1500, area: "Yenişehir", commentTr: "Yenişehir'de şık sunumlu kuzu etli hünkar beğendi.", commentEn: "Lamb hunkar begendi with elegant presentation in Yenisehir." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Anaeli Mutfak", rating: 4.7, reviewCount: 2400, area: "Yenişehir", commentTr: "Yenişehir'de sumak ekşisi ve baharatlı pirinç dolgulu nefis zeytinyağlı kuru dolma.", commentEn: "Delicious dried eggplant stuffed with sumac molasses and spiced rice in Yenisehir." },
    { name: "Evce Ev Yemekleri", rating: 4.5, reviewCount: 1100, area: "Mezitli", commentTr: "Mezitli'de esnaf lokantası usulü hazırlanan zeytinyağlı kuru patlıcan dolması.", commentEn: "Olive oil dried eggplant stuffed, prepared artisan-style in Mezitli." },
    { name: "Hatun Mutfak", rating: 4.5, reviewCount: 850, area: "Yenişehir", commentTr: "Yenişehir'de sunulan ekşili ve naneli kuru patlıcan dolması.", commentEn: "Sour and minty dried eggplant stuffed in Yenisehir." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Göksel Restoran (Fırın Bölümü)", rating: 4.6, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir'de taş fırında yavaş pişen, taze kekik aromalı kuzu güveç.", commentEn: "Lamb stew with fresh thyme aroma cooked slowly in stone oven in Yenisehir." },
    { name: "Sini Restoran (Güvenlik)", rating: 4.5, reviewCount: 2100, area: "Yenişehir", commentTr: "Toprak güveçte arpacık soğan ve sarımsakla saatlerce fırınlanmış kuzu eti.", commentEn: "Lamb meat baked for hours with shallots and garlic in clay pot in Yenisehir." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 1200, area: "Akdeniz", commentTr: "Geleneksel lokanta usulü odun fırınında pişen güveç etleri.", commentEn: "Traditional local diner style wood oven baked clay pot stews in Akdeniz." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "İskele Marin Balık Restoran", rating: 4.8, reviewCount: 9500, area: "Marina", commentTr: "Marina'da sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic in Marina." },
    { name: "Rina Balık Restoran", rating: 4.6, reviewCount: 3200, area: "Yenişehir", commentTr: "Yenişehir'de balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish in Yenisehir." },
    { name: "Bedis Ayvalık Balıkçısı", rating: 4.7, reviewCount: 2800, area: "Mezitli", commentTr: "Deniz kıyısında taze otlar ve gurme zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs by the sea." }
  ],
  "Enginarlı Pilav": [
    { name: "Nar Ev Yemekleri", rating: 4.7, reviewCount: 2400, area: "Yenişehir", commentTr: "Yenişehir'de dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas in Yenisehir." },
    { name: "Sarnıç Bistro (Mevsimsel Menü)", rating: 4.6, reviewCount: 8200, area: "Yenişehir", commentTr: "Yenişehir'de taze enginar göbekli pilavın gurme ve hafif sunumu.", commentEn: "Gourmet and light rice prepared with fresh artichoke hearts in Yenisehir." },
    { name: "Yeşil Ev Yemekleri", rating: 4.5, reviewCount: 920, area: "Mezitli", commentTr: "Mezitli'de gurme sebze tabakları kapsamında sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under gourmet vegetable plates in Mezitli." }
  ],
  "Çerkez Tavuğu": [
    { name: "Sandal Meyhanesi (Meze Reyonu)", rating: 4.6, reviewCount: 3100, area: "Yenişehir", commentTr: "Yenişehir'de Ege meyhanesi usulü bol cevizli geleneksel Çerkez tavuğu.", commentEn: "Traditional Circassian chicken with plenty of walnuts served Aegean style in Yenisehir." },
    { name: "Merada Meyhane", rating: 4.5, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir'de taze malzemelerle hazırlanan usta işi Çerkez tavuğu.", commentEn: "Circassian chicken paste prepared with fresh ingredients in Yenisehir." },
    { name: "Şerefe Meyhane", rating: 4.4, reviewCount: 950, area: "Marina", commentTr: "Marina'da nostaljik ortamda kişnişli ve sarımsaklı Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in a nostalgic atmosphere." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "BigChefs (Marina - Şarküteri Seçeneği)", rating: 4.6, reviewCount: 650, area: "Marina", commentTr: "Marina'da şarküteri reyonundan seçme eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section in Marina." },
    { name: "Polat Pastanesi (Gurme Tabaklar)", rating: 4.5, reviewCount: 1500, area: "Yenişehir", commentTr: "Yenişehir'de gurme Kars gravyeri ve yerel isli peynir tabağı sunumu.", commentEn: "Platter of gourmet Kars gruyere and local smoked cheese in Yenisehir." },
    { name: "Crop Coffee Co. Mersin", rating: 4.6, reviewCount: 820, area: "Yenişehir", commentTr: "Yenişehir'de gurme reyonundan seçilen Kars gravyeri ve isli peynirler.", commentEn: "Kars gruyere and smoked cheeses selected from gourmet section in Yenisehir." }
  ],
  "Zerde": [
    { name: "Dondurmacı Halil (Geleneksel Tatlılar)", rating: 4.7, reviewCount: 5200, area: "Akdeniz", commentTr: "Akdeniz'de safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde in Akdeniz." },
    { name: "Kerebiççi Oğuz", rating: 4.6, reviewCount: 9500, area: "Yenişehir", commentTr: "Yenişehir'de sunulan geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served in Yenisehir." },
    { name: "Meram Pastanesi", rating: 4.5, reviewCount: 4100, area: "Yenişehir", commentTr: "Yenişehir'de safran aromalı hafif zerde tatlısı.", commentEn: "Light traditional zerde flavored with saffron served in Yenisehir." }
  ],
  "Perde Pilavı": [
    { name: "Has Siirt Mutfağı Mersin", rating: 4.5, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir'de usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands in Yenisehir." },
    { name: "Sini Ev Yemekleri", rating: 4.6, reviewCount: 1800, area: "Yenişehir", commentTr: "Yenişehir'de çıtır bademli hamur içinde tavuk ve kuş üzümlü perde pilavı.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell in Yenisehir." },
    { name: "Bizim Ev Yemekleri", rating: 4.4, reviewCount: 520, area: "Mezitli", commentTr: "Mezitli'de fırınlanmış çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy pastry baked in Mezitli." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Anaeli Mutfak", rating: 4.7, reviewCount: 3100, area: "Yenişehir", commentTr: "Yenişehir'de Güneydoğu mutfağından ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh in Yenisehir." },
    { name: "Hatun Mutfak", rating: 4.6, reviewCount: 5200, area: "Yenişehir", commentTr: "Yenişehir'de şık ortamda sunulan tereyağlı ve bol limonlu analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served in Yenisehir." },
    { name: "Evce Ev Yemekleri", rating: 4.5, reviewCount: 2400, area: "Mezitli", commentTr: "Mezitli'de yöresel günler kapsamında sunulan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared under regional days in Mezitli." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Kokoreççi & Şırdancı Apo", rating: 4.6, reviewCount: 3800, area: "Yenişehir", commentTr: "Yenişehir'de gece hayatının vazgeçilmezi, Adana usulü bol kimyonlu şırdan dolması.", commentEn: "Adana style stuffed sirdan with plenty of cumin, a nightlife favorite in Yenisehir." },
    { name: "Emin Ocakbaşı (Sakatat Seçenekleri)", rating: 4.5, reviewCount: 2100, area: "Akdeniz", commentTr: "Akdeniz'de taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal in Akdeniz." },
    { name: "Merkez Kokoreç & Şırdan", rating: 4.4, reviewCount: 1500, area: "Yenişehir", commentTr: "Yenişehir'de dumanı üstünde servis edilen bol baharatlı sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices in Yenisehir." }
  ],
  "Tire Köftesi": [
    { name: "BigChefs Marina (Yöresel Ege Menüsü)", rating: 4.7, reviewCount: 2400, area: "Marina", commentTr: "Marina'da orijinal Tire usulü ızgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Original Tire style grilled meatballs served with butter and tomato sauce." },
    { name: "David People Coffee & Food (Gurme Köfte)", rating: 4.5, reviewCount: 1200, area: "Yenişehir", commentTr: "Yenişehir'de tırnak pide yatağında eritilmiş tereyağlı incecik Tire köfteleri.", commentEn: "Thin Tire meatballs on flatbread bed with sizzling melted butter in Yenisehir." },
    { name: "Çıtır Köfte Salonu", rating: 4.4, reviewCount: 520, area: "Akdeniz", commentTr: "Eritilmiş tereyağlı ve domates soslu enfes Tire köftesi.", commentEn: "Delicious Tire kebab with tomato sauce and sizzling melted butter." }
  ],
  "Cevizli Mantı": [
    { name: "Mantı Evi Mezitli (Sinop Usulü Seçeneği)", rating: 4.5, reviewCount: 920, area: "Mezitli", commentTr: "Mezitli'de el açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough in Mezitli." },
    { name: "Sarnıç Cafe Bistro (Mantı Çeşitleri)", rating: 4.4, reviewCount: 5200, area: "Yenişehir", commentTr: "Yenişehir'de tereyağlı ve cevizli özel Sinop mantısı tabağı.", commentEn: "Special plate of Sinop style dumplings with butter and walnuts in Yenisehir." },
    { name: "Evce Mutfak", rating: 4.4, reviewCount: 4800, area: "Mezitli", commentTr: "Mezitli'de fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces in Mezitli." }
  ],
  "Kalamar Dolması": [
    { name: "İskele Marin Balık Restoran", rating: 4.8, reviewCount: 9500, area: "Marina", commentTr: "Marina'da fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with fresh shrimp and mushrooms in Marina." },
    { name: "Rina Balık Restoran", rating: 4.7, reviewCount: 6200, area: "Yenişehir", commentTr: "Yenişehir'de kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with cheese and seafood in Yenisehir." },
    { name: "Sunam Balık", rating: 4.7, reviewCount: 2800, area: "Mezitli", commentTr: "Mezitli'de taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked calamari stuffed and baked in stone oven with butter in Mezitli." }
  ],
  "Fırında Sütlaç": [
    { name: "Polat Pastanesi", rating: 4.7, reviewCount: 5200, area: "Yenişehir", commentTr: "Yenişehir'de taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven in Yenisehir." },
    { name: "Meram Pastanesi", rating: 4.6, reviewCount: 8200, area: "Yenişehir", commentTr: "Yenişehir'de tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk in Yenisehir." },
    { name: "Çorbacı Şahin Usta (Tatlı Bölümü)", rating: 4.7, reviewCount: 6500, area: "Akdeniz", commentTr: "Akdeniz'de fırınlanmış kıvamlı ve bol fındıklı sütlaç.", commentEn: "Thick baked rice pudding with plenty of hazelnuts in Akdeniz." }
  ]
};

export const GOURMET_GAZIANTEP_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta Gaziantep", rating: 4.6, reviewCount: 1800, area: "Şahinbey", commentTr: "Şahinbey'de çıtır derili ve tel tel dökülen nefis Siirt usulü kuyu büryan kebabı.", commentEn: "Siirt style pit-roasted buryan kebab with crispy skin in Sahinbey." },
    { name: "Ünal Et Lokantası (Et Özel Reyonu)", rating: 4.5, reviewCount: 950, area: "Şehitkamil", commentTr: "Şehitkamil'de geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional brick pits in Sehitkamil." },
    { name: "Gaziantep Esnaf Lokantası", rating: 4.4, reviewCount: 820, area: "Şahinbey", commentTr: "Şahinbey'de meşe odunu ateşiyle buharda pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam over oak wood fire in Sahinbey." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı (İbrahimli)", rating: 4.7, reviewCount: 3100, area: "Şehitkamil", commentTr: "İbrahimli'de odun ateşinde yatık kuzu döner döner şişleri.", commentEn: "Horizontal spit-roasted lamb cağ kebab cooked over wood fire in Ibrahimli." },
    { name: "Tortum Cağ Kebabı Gaziantep", rating: 4.5, reviewCount: 1500, area: "Şehitkamil", commentTr: "Şehitkamil'de Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı.", commentEn: "Legendary cağ kebab cut hot, Tortum style, in Sehitkamil." },
    { name: "Palandöken Cağ Kebabı", rating: 4.5, reviewCount: 1900, area: "Şahinbey", commentTr: "Şahinbey'de köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Sahinbey." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Aşina Gaziantep Mutfağı", rating: 4.8, reviewCount: 4200, area: "Şehitkamil", commentTr: "Terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables." },
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.7, reviewCount: 3200, area: "Şahinbey", commentTr: "Geleneksel esnaf mutfağı kalitesiyle sunulan nefis kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables." },
    { name: "Adil Efendi Ev Yemekleri", rating: 4.5, reviewCount: 1500, area: "Şehitkamil", commentTr: "Taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables." }
  ],
  "Ali Nazik Kebabı": [
    { name: "İmam Çağdaş", rating: 4.9, reviewCount: 18500, area: "Şahinbey", commentTr: "Tarihi İmam Çağdaş'ta süzme yoğurtlu ve köz patlıcan beğenili enfes Ali Nazik.", commentEn: "Legendary Ali Nazik with strained yogurt and roasted eggplant puree at historic Imam Cagdas." },
    { name: "Kebapçı Halil Usta", rating: 4.8, reviewCount: 12000, area: "Şehitkamil", commentTr: "Halil Usta'nın meşhur kuzu etiyle köz patlıcan üzerinde tereyağlı Ali Nazik kebabı.", commentEn: "Halil Usta's famous lamb Ali Nazik served over roasted eggplant puree with butter." },
    { name: "Çulcuoğlu Et Lokantası", rating: 4.7, reviewCount: 9500, area: "Şahinbey", commentTr: "Geleneksel zırh kıymalı ve köz patlıcanlı enfes Ali Nazik lezzeti.", commentEn: "Delicious Ali Nazik with minced beef and roasted eggplant." }
  ],
  "Beyran Çorbası": [
    { name: "Metanet Lokantası", rating: 4.9, reviewCount: 15000, area: "Şahinbey", commentTr: "Sabahın erken saatlerinde harlı ateşte pişen bol etli ve sarımsaklı meşhur Metanet beyranı.", commentEn: "Gaziantep's legendary spicy beyran soup cooked over high flame, a morning classic at Metanet." },
    { name: "Çorbacı Mahmut Usta", rating: 4.7, reviewCount: 6500, area: "Şahinbey", commentTr: "Bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran çorbası.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes." },
    { name: "Paçacı Şemsi Gaziantep", rating: 4.5, reviewCount: 2100, area: "Şehitkamil", commentTr: "Dumanı üstünde servis edilen bol etli beyran çorbası.", commentEn: "Steaming hot beyran soup with plenty of meat." }
  ],
  "Hünkar Beğendi": [
    { name: "Bayazhan Restoran", rating: 4.7, reviewCount: 4200, area: "Şehitkamil", commentTr: "Tarihi Bayazhan avlusunda sunulan nefis saray usulü hünkar beğendi.", commentEn: "Delicious palace style hunkar begendi in historic Bayazhan courtyard." },
    { name: "Hışvahan", rating: 4.8, reviewCount: 2800, area: "Şahinbey", commentTr: "Nostaljik ve lüks ortamda sunulan kuzu etli gurme hünkar beğendi.", commentEn: "Gourmet hunkar begendi with lamb served in a luxurious and historic atmosphere." },
    { name: "Mutfak Sanatları Merkezi (MSM)", rating: 4.6, reviewCount: 1800, area: "Şehitkamil", commentTr: "Usta şeflerin elinden gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "İmam Çağdaş", rating: 4.8, reviewCount: 14200, area: "Şahinbey", commentTr: "Sumak ekşisi ve baharatlı pirinç dolgulu efsanevi kuru patlıcan dolması.", commentEn: "Legendary dried eggplant stuffed with sumac molasses and spiced rice at Imam Cagdas." },
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.7, reviewCount: 3200, area: "Şahinbey", commentTr: "Geleneksel yöntemlerle hazırlanan zeytinyağlı kuru patlıcan dolması.", commentEn: "Olive oil dried eggplant stuffed, prepared with traditional methods." },
    { name: "Aşina Gaziantep Mutfağı", rating: 4.6, reviewCount: 2800, area: "Şehitkamil", commentTr: "Ekşili ve baharatlı harika kuru patlıcan dolması lezzeti.", commentEn: "Wonderful tangy and spiced dried eggplant stuffed." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Sahan Restoran (Fırın Bölümü)", rating: 4.7, reviewCount: 5200, area: "Şehitkamil", commentTr: "Taş fırında yavaş pişen, taze kekik aromalı kuzu güveç.", commentEn: "Lamb stew with fresh thyme aroma cooked slowly in stone oven." },
    { name: "Şirvan Kebap Salonu", rating: 4.6, reviewCount: 3100, area: "Şahinbey", commentTr: "Toprak güveçte arpacık soğan ve sarımsakla saatlerce fırınlanmış kuzu eti.", commentEn: "Lamb meat baked for hours with shallots and garlic in clay pot." },
    { name: "Ünal Et Lokantası", rating: 4.5, reviewCount: 1500, area: "Şehitkamil", commentTr: "Geleneksel lokanta usulü fırında pişen güveç etleri.", commentEn: "Traditional local diner style wood oven baked clay pot stews." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Saklı Bahçe Balık Restoran", rating: 4.6, reviewCount: 1800, area: "Şehitkamil", commentTr: "Sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic." },
    { name: "Okyanus Balık Evi", rating: 4.5, reviewCount: 1200, area: "Şehitkamil", commentTr: "Balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish." },
    { name: "Yelken Balık Gaziantep", rating: 4.4, reviewCount: 950, area: "Şehitkamil", commentTr: "Taze otlar ve gurme zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs." }
  ],
  "Enginarlı Pilav": [
    { name: "Orkide Pastanesi (Mevsimsel Gurme Menü)", rating: 4.7, reviewCount: 8500, area: "Şehitkamil", commentTr: "Dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas." },
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.5, reviewCount: 1100, area: "Şehitkamil", commentTr: "Taze enginar göbekli pilavın gurme ve hafif sunumu.", commentEn: "Gourmet and light rice prepared with fresh artichoke hearts." },
    { name: "Yeşil Mutfak Cafe", rating: 4.4, reviewCount: 820, area: "Şehitkamil", commentTr: "Gurme sebze tabakları kapsamında sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under gourmet vegetable plates." }
  ],
  "Çerkez Tavuğu": [
    { name: "Bayazhan Restoran (Meze Reyonu)", rating: 4.7, reviewCount: 4200, area: "Şehitkamil", commentTr: "Ege meyhanesi usulü bol cevizli geleneksel Çerkez tavuğu.", commentEn: "Traditional Circassian chicken with plenty of walnuts served Aegean style." },
    { name: "Hışvahan Meyhane", rating: 4.8, reviewCount: 2800, area: "Şahinbey", commentTr: "Taze malzemelerle hazırlanan usta işi Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste prepared with fresh ingredients." },
    { name: "Şerefe Gaziantep", rating: 4.5, reviewCount: 1100, area: "Şehitkamil", commentTr: "Nostaljik ortamda kişnişli ve sarımsaklı Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in a nostalgic atmosphere." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "BigChefs (Gaziantep Prime Mall)", rating: 4.5, reviewCount: 3100, area: "Şehitkamil", commentTr: "Şarküteri reyonundan seçme eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section." },
    { name: "Orkide Pastanesi (Gurme Kahvaltı Seçenekleri)", rating: 4.7, reviewCount: 8500, area: "Şehitkamil", commentTr: "Gurme Kars gravyeri ve yerel isli peynir tabağı sunumu.", commentEn: "Platter of gourmet Kars gruyere and local smoked cheese." },
    { name: "Crop Coffee Co. Gaziantep", rating: 4.5, reviewCount: 950, area: "Şehitkamil", commentTr: "Gurme reyonundan seçilen Kars gravyeri ve isli peynirler.", commentEn: "Kars gruyere and smoked cheeses selected from gourmet section." }
  ],
  "Zerde": [
    { name: "Koçak Baklava (Geleneksel Tatlılar)", rating: 4.9, reviewCount: 19500, area: "Şehitkamil", commentTr: "Safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde." },
    { name: "Zeki İnal", rating: 4.8, reviewCount: 8200, area: "Şahinbey", commentTr: "Tarihi tatlıcıda sunulan geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served in historic shop." },
    { name: "Erçelebi Kömürde Kadayıf", rating: 4.7, reviewCount: 6500, area: "Şahinbey", commentTr: "Safran aromalı hafif geleneksel zerde tatlısı.", commentEn: "Light traditional zerde flavored with saffron." }
  ],
  "Perde Pilavı": [
    { name: "Has Siirt Mutfağı Gaziantep", rating: 4.6, reviewCount: 1500, area: "Şehitkamil", commentTr: "Usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.5, reviewCount: 920, area: "Şahinbey", commentTr: "Çıtır bademli hamur içinde tavuk ve kuş üzümlü perde pilavı.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell." },
    { name: "Şefin Mutfağı Gaziantep", rating: 4.4, reviewCount: 520, area: "Şehitkamil", commentTr: "Fırınlanmış çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy pastry baked." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Aşina Gaziantep Mutfağı", rating: 4.8, reviewCount: 4200, area: "Şehitkamil", commentTr: "Ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh." },
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.7, reviewCount: 3200, area: "Şahinbey", commentTr: "Geleneksel ev usulü tereyağlı ve bol limonlu analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served." },
    { name: "Mutfak Sanatları Merkezi (MSM)", rating: 4.6, reviewCount: 1800, area: "Şehitkamil", commentTr: "Özgün tarifiyle sunulan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared according to authentic recipe." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Kebapçı Yalçın (Sakatat Seçenekleri)", rating: 4.6, reviewCount: 2800, area: "Şahinbey", commentTr: "Adana usulü bol kimyonlu şırdan dolması ve sakatat çeşitleri.", commentEn: "Adana style stuffed sirdan with plenty of cumin and offal options." },
    { name: "Ciğerci Mustafa", rating: 4.5, reviewCount: 5200, area: "Şahinbey", commentTr: "Taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal." },
    { name: "Gaziantep Kokoreç & Şırdan Evi", rating: 4.4, reviewCount: 1100, area: "Şehitkamil", commentTr: "Bol baharatlı dumanı üstünde sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices." }
  ],
  "Tire Köftesi": [
    { name: "David People Coffee & Food (Gurme Köfte Seçeneği)", rating: 4.4, reviewCount: 1800, area: "Şehitkamil", commentTr: "Izgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Grilled meatballs served with butter and tomato sauce." },
    { name: "Cookshop (İconova)", rating: 4.5, reviewCount: 2100, area: "Şehitkamil", commentTr: "Tırnak pide yatağında eritilmiş tereyağlı incecik köfteler.", commentEn: "Thin meatballs on flatbread bed with sizzling melted butter." },
    { name: "Köfteci Ahmet Usta", rating: 4.3, reviewCount: 520, area: "Şahinbey", commentTr: "Eritilmiş tereyağlı ve domates soslu enfes köfte.", commentEn: "Delicious kebab with tomato sauce and sizzling melted butter." }
  ],
  "Cevizli Mantı": [
    { name: "Lazika Cafe (Mantı Çeşitleri)", rating: 4.5, reviewCount: 1100, area: "Şehitkamil", commentTr: "El açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough." },
    { name: "Papirüs Cafe", rating: 4.4, reviewCount: 1500, area: "Şahinbey", commentTr: "Tereyağlı ve cevizli özel Sinop mantısı tabağı.", commentEn: "Special plate of Sinop style dumplings with butter and walnuts." },
    { name: "Keyifli Mutfak", rating: 4.4, reviewCount: 680, area: "Şehitkamil", commentTr: "Fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces." }
  ],
  "Kalamar Dolması": [
    { name: "Saklı Bahçe Balık Restoran", rating: 4.6, reviewCount: 1800, area: "Şehitkamil", commentTr: "Fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with fresh shrimp and mushrooms." },
    { name: "Okyanus Balık Evi", rating: 4.5, reviewCount: 1200, area: "Şehitkamil", commentTr: "Kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked calamari stuffed with cheese and seafood." },
    { name: "Yelken Balık Gaziantep", rating: 4.4, reviewCount: 950, area: "Şehitkamil", commentTr: "Taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked calamari stuffed and baked in stone oven with butter." }
  ],
  "Fırında Sütlaç": [
    { name: "Orkide Pastanesi", rating: 4.7, reviewCount: 8500, area: "Şehitkamil", commentTr: "Taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven." },
    { name: "Akşam Pastaneleri", rating: 4.6, reviewCount: 5200, area: "Şahinbey", commentTr: "Tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk." },
    { name: "Çorbacı Mahmut Usta (Tatlı Reyonu)", rating: 4.7, reviewCount: 6500, area: "Şahinbey", commentTr: "Fırınlanmış kıvamlı ve bol fındıklı sütlaç.", commentEn: "Thick baked rice pudding with plenty of hazelnuts." }
  ]
};

export const GOURMET_ADANA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta Adana", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Seyhan'da çıtır derili ve tel tel dökülen nefis Siirt usulü kuyu büryan kebabı.", commentEn: "Siirt style pit-roasted buryan kebab with crispy skin in Seyhan." },
    { name: "Meşhur Siirt Büryan Salonu (Çukurova)", rating: 4.5, reviewCount: 850, area: "Çukurova", commentTr: "Çukurova'da geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional brick pits in Cukurova." },
    { name: "Boğaziçi Lokantası (Et Özel Reyonu)", rating: 4.4, reviewCount: 720, area: "Seyhan", commentTr: "Seyhan'da meşe odunu ateşiyle buharda pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam over oak wood fire in Seyhan." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı (Turgut Özal)", rating: 4.7, reviewCount: 2800, area: "Çukurova", commentTr: "Turgut Özal Bulvarı'nda odun ateşinde yatık kuzu döner şişleri.", commentEn: "Horizontal spit-roasted lamb cağ kebab cooked over wood fire on Turgut Ozal Blvd." },
    { name: "Tortum Cağ Kebabı Adana", rating: 4.5, reviewCount: 1200, area: "Çukurova", commentTr: "Çukurova'da Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı.", commentEn: "Legendary cağ kebab cut hot, Tortum style, in Cukurova." },
    { name: "Palandöken Cağ Kebabı", rating: 4.5, reviewCount: 1400, area: "Seyhan", commentTr: "Seyhan'da köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Seyhan." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Seci Seçkin Lokantası", rating: 4.8, reviewCount: 3500, area: "Seyhan", commentTr: "Seyhan'da terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables in Seyhan." },
    { name: "Merkez Lokantası", rating: 4.7, reviewCount: 2500, area: "Seyhan", commentTr: "Seyhan'da geleneksel esnaf mutfağı kalitesiyle sunulan nefis kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables in Seyhan." },
    { name: "Güven Lokantası", rating: 4.5, reviewCount: 1200, area: "Seyhan", commentTr: "Seyhan'da taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables in Seyhan." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Kebapçı Mesut", rating: 4.9, reviewCount: 9500, area: "Seyhan", commentTr: "Tarihi Kebapçı Mesut'ta süzme yoğurtlu ve köz patlıcan beğenili enfes Ali Nazik.", commentEn: "Legendary Ali Nazik with strained yogurt and roasted eggplant puree at historic Kebapci Mesut." },
    { name: "Onbaşılar Kebap", rating: 4.8, reviewCount: 11000, area: "Seyhan", commentTr: "Seyhan Baraj Gölü manzarası eşliğinde köz patlıcan üzerinde tereyağlı Ali Nazik kebabı.", commentEn: "Delicious Ali Nazik served over roasted eggplant puree with butter and a lake view." },
    { name: "Cihangir Kebap & Kaburga", rating: 4.7, reviewCount: 8500, area: "Çukurova", commentTr: "Çukurova'da geleneksel zırh kıymalı ve köz patlıcanlı enfes Ali Nazik lezzeti.", commentEn: "Delicious Ali Nazik with minced beef and roasted eggplant in Cukurova." }
  ],
  "Beyran Çorbası": [
    { name: "Paçacı Şemsi Adana", rating: 4.6, reviewCount: 1800, area: "Seyhan", commentTr: "Seyhan'da harlı ateşte pişen bol etli ve sarımsaklı beyran çorbası.", commentEn: "Spicy and garlic beyran soup cooked over high flame in Seyhan." },
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 2100, area: "Seyhan", commentTr: "Seyhan'da bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran çorbası.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes in Seyhan." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 1200, area: "Seyhan", commentTr: "Seyhan'da dumanı üstünde servis edilen bol etli beyran çorbası.", commentEn: "Steaming hot beyran soup with plenty of meat in Seyhan." }
  ],
  "Hünkar Beğendi": [
    { name: "Göksel Cafe Bistro", rating: 4.6, reviewCount: 2500, area: "Çukurova", commentTr: "Çukurova'da sunulan kuzu etli gurme hünkar beğendi.", commentEn: "Gourmet hunkar begendi with lamb served in Cukurova." },
    { name: "Park Zirve Restoran", rating: 4.7, reviewCount: 3100, area: "Seyhan", commentTr: "Harika Seyhan Gölü manzarası eşliğinde sunulan nefis saray usulü hünkar beğendi.", commentEn: "Delicious palace style hunkar begendi served with a stunning lake view." },
    { name: "Han Hanımeli Restoran", rating: 4.5, reviewCount: 950, area: "Çukurova", commentTr: "Usta şeflerin elinden gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served in Cukurova." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.6, reviewCount: 1200, area: "Seyhan", commentTr: "Sumak ekşisi ve baharatlı pirinç dolgulu efsanevi kuru patlıcan dolması.", commentEn: "Legendary dried eggplant stuffed with sumac molasses and spiced rice in Seyhan." },
    { name: "Sini Ev Yemekleri", rating: 4.5, reviewCount: 950, area: "Çukurova", commentTr: "Geleneksel yöntemlerle hazırlanan zeytinyağlı kuru patlıcan dolması.", commentEn: "Olive oil dried eggplant stuffed, prepared with traditional methods in Cukurova." },
    { name: "Bizim Ev Yemekleri", rating: 4.4, reviewCount: 720, area: "Seyhan", commentTr: "Ekşili ve baharatlı harika kuru patlıcan dolması lezzeti.", commentEn: "Wonderful tangy and spiced dried eggplant stuffed in Seyhan." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Eyvan Kebap (Fırın Bölümü)", rating: 4.7, reviewCount: 5200, area: "Seyhan", commentTr: "Taş fırında yavaş pişen, taze kuzu güveç.", commentEn: "Lamb stew cooked slowly in stone oven in Seyhan." },
    { name: "Hasan Kolcuoğlu Restoran", rating: 4.6, reviewCount: 6800, area: "Seyhan", commentTr: "Göl manzarası eşliğinde toprak güveçte arpacık soğan ve sarımsakla fırınlanmış kuzu eti.", commentEn: "Lamb meat baked with shallots and garlic in clay pot by the lake view." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 820, area: "Seyhan", commentTr: "Geleneksel lokanta usulü fırında pişen güveç etleri.", commentEn: "Traditional local diner style wood oven baked clay pot stews in Seyhan." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Lagos Balık Restoran", rating: 4.7, reviewCount: 3100, area: "Seyhan", commentTr: "Sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic in Seyhan." },
    { name: "Marina Balık Restoran", rating: 4.6, reviewCount: 1800, area: "Seyhan", commentTr: "Balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish in Seyhan." },
    { name: "Sercan Balık Evi", rating: 4.4, reviewCount: 950, area: "Çukurova", commentTr: "Taze otlar ve gurme zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs in Cukurova." }
  ],
  "Enginarlı Pilav": [
    { name: "Seyhan Belediyesi Lezzet Durağı (Mevsimsel Gurme Menü)", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas in Seyhan." },
    { name: "Pastabahçe (Ziyapaşa)", rating: 4.5, reviewCount: 1100, area: "Seyhan", commentTr: "Taze enginar göbekli pilavın gurme ve hafif sunumu.", commentEn: "Gourmet and light rice prepared with fresh artichoke hearts in Seyhan." },
    { name: "Yeşil Ev Yemekleri", rating: 4.4, reviewCount: 680, area: "Çukurova", commentTr: "Gurme sebze tabakları kapsamında sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under gourmet vegetable plates in Cukurova." }
  ],
  "Çerkez Tavuğu": [
    { name: "Beyoğlu Meyhanesi (Meze Reyonu)", rating: 4.5, reviewCount: 1200, area: "Seyhan", commentTr: "Bol cevizli geleneksel Çerkez tavuğu ezmesi.", commentEn: "Traditional Circassian chicken with plenty of walnuts served in Seyhan." },
    { name: "Sandal Meyhanesi Adana", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Taze malzemelerle hazırlanan usta işi Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste prepared with fresh ingredients in Seyhan." },
    { name: "Şerefe Meyhane", rating: 4.4, reviewCount: 820, area: "Seyhan", commentTr: "Nostaljik ortamda kişnişli ve sarımsaklı Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in a nostalgic atmosphere in Seyhan." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "BigChefs (Ziyapaşa - Şarküteri Seçeneği)", rating: 4.5, reviewCount: 3100, area: "Seyhan", commentTr: "Eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section in Seyhan." },
    { name: "Kuğu Pastanesi (Gurme Tabaklar)", rating: 4.6, reviewCount: 2200, area: "Seyhan", commentTr: "Gurme Kars gravyeri ve yerel isli peynir tabağı sunumu.", commentEn: "Platter of gourmet Kars gruyere and local smoked cheese in Seyhan." },
    { name: "Crop Coffee Co. Adana", rating: 4.5, reviewCount: 950, area: "Çukurova", commentTr: "Gurme reyonundan seçilen Kars gravyeri ve isli peynirler.", commentEn: "Kars gruyere and smoked cheeses selected from gourmet section in Cukurova." }
  ],
  "Zerde": [
    { name: "Maden Pastanesi (Geleneksel Tatlılar)", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde in Seyhan." },
    { name: "Güllüoğlu Adana", rating: 4.7, reviewCount: 3500, area: "Seyhan", commentTr: "Geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served in Seyhan." },
    { name: "Zeynel Muhallebicisi (Adana Şubesi)", rating: 4.5, reviewCount: 1200, area: "Seyhan", commentTr: "Safran aromalı hafif geleneksel zerde tatlısı.", commentEn: "Light traditional zerde flavored with saffron in Seyhan." }
  ],
  "Perde Pilavı": [
    { name: "Has Siirt Mutfağı Adana", rating: 4.6, reviewCount: 1100, area: "Seyhan", commentTr: "Usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands in Seyhan." },
    { name: "Çukurova Mantı & Ev Yemekleri", rating: 4.5, reviewCount: 920, area: "Çukurova", commentTr: "Çıtır bademli hamur içinde tavuk ve kuş üzümlü perde pilavı.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell in Cukurova." },
    { name: "Teras Cafe & Bistro", rating: 4.4, reviewCount: 520, area: "Çukurova", commentTr: "Fırınlanmış çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy pastry baked in Cukurova." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.6, reviewCount: 1200, area: "Seyhan", commentTr: "Ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh in Seyhan." },
    { name: "Seci Seçkin Lokantası", rating: 4.8, reviewCount: 3500, area: "Seyhan", commentTr: "Geleneksel ev usulü tereyağlı ve bol limonlu analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served in Seyhan." },
    { name: "Seyhan Belediyesi Lezzet Durağı", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Özgün tarifiyle sunulan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared according to authentic recipe in Seyhan." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Şırdancı Bedo", rating: 4.8, reviewCount: 15000, area: "Seyhan", commentTr: "Adana'nın en meşhur duraklarından Bedo'da bol baharatlı enfes şırdan ve mumbar.", commentEn: "Gaziantep/Adana's legendary stuffed sirdan and mumbar with spices at Sirdaici Bedo." },
    { name: "Şırdancı Emin", rating: 4.7, reviewCount: 9200, area: "Seyhan", commentTr: "Taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal in Seyhan." },
    { name: "Kokoreççi Baki Usta (Sakatat Seçenekleri)", rating: 4.5, reviewCount: 5200, area: "Seyhan", commentTr: "Bol baharatlı dumanı üstünde sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices." }
  ],
  "Tire Köftesi": [
    { name: "David People Coffee & Food (Gurme Köfte Seçeneği)", rating: 4.4, reviewCount: 1800, area: "Seyhan", commentTr: "Izgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Grilled meatballs served with butter and tomato sauce in Seyhan." },
    { name: "Cookshop (M1 Adana)", rating: 4.5, reviewCount: 2100, area: "Seyhan", commentTr: "Tırnak pide yatağında eritilmiş tereyağlı incecik köfteler.", commentEn: "Thin meatballs on flatbread bed with sizzling melted butter in Seyhan." },
    { name: "Köfteci Ahmet Usta", rating: 4.3, reviewCount: 520, area: "Seyhan", commentTr: "Eritilmiş tereyağlı ve domates soslu enfes köfte.", commentEn: "Delicious kebab with tomato sauce and sizzling melted butter in Seyhan." }
  ],
  "Cevizli Mantı": [
    { name: "Seyhan Mantı Evi (Sinop Usulü Seçeneği)", rating: 4.5, reviewCount: 1100, area: "Seyhan", commentTr: "El açması incecik hamurla hazırlanan bol cevizli Sinop mantısı.", commentEn: "Sinop style dumplings with plenty of walnuts prepared with thin dough in Seyhan." },
    { name: "Çukurova Mantı Dünyası", rating: 4.4, reviewCount: 1500, area: "Çukurova", commentTr: "Tereyağlı ve cevizli özel Sinop mantısı tabağı.", commentEn: "Special plate of Sinop style dumplings with butter and walnuts in Cukurova." },
    { name: "Sini Mutfak", rating: 4.4, reviewCount: 680, area: "Seyhan", commentTr: "Fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces." }
  ],
  "Kalamar Dolması": [
    { name: "Lagos Balık Restoran", rating: 4.7, reviewCount: 3100, area: "Seyhan", commentTr: "Fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked kalamari stuffed with fresh shrimp and mushrooms in Seyhan." },
    { name: "Marina Balık Restoran", rating: 4.6, reviewCount: 1800, area: "Seyhan", commentTr: "Kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked kalamari stuffed with cheese and seafood in Seyhan." },
    { name: "Sercan Balık Evi", rating: 4.4, reviewCount: 950, area: "Çukurova", commentTr: "Taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked kalamari stuffed and baked in stone oven with butter in Cukurova." }
  ],
  "Fırında Sütlaç": [
    { name: "Maden Pastanesi", rating: 4.6, reviewCount: 1500, area: "Seyhan", commentTr: "Taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven in Seyhan." },
    { name: "Kuğu Pastanesi", rating: 4.6, reviewCount: 2200, area: "Seyhan", commentTr: "Tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk in Seyhan." },
    { name: "Çorbacı Şahin Usta (Tatlı Bölümü)", rating: 4.5, reviewCount: 2100, area: "Seyhan", commentTr: "Fırınlanmış kıvamlı ve bol fındıklı sütlaç.", commentEn: "Thick baked rice pudding with plenty of hazelnuts in Seyhan." }
  ]
};

export const GOURMET_ESKISEHIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Büryan Kebabı": [
    { name: "Siirtli Hacı Usta Eskişehir", rating: 4.6, reviewCount: 1100, area: "Odunpazarı", commentTr: "Odunpazarı'nda çıtır derili ve tel tel dökülen nefis Siirt usulü kuyu büryan kebabı.", commentEn: "Siirt style pit-roasted buryan kebab with crispy skin in Odunpazari." },
    { name: "Kebapçı Abdülkadir (Et Özel Reyonu)", rating: 4.5, reviewCount: 820, area: "Tepebaşı", commentTr: "Tepebaşı'nda geleneksel kuyulardan taze çıkan sıcak büryan eti.", commentEn: "Fresh warm buryan meat from traditional brick pits in Tepebasi." },
    { name: "Eskişehir Esnaf Lokantası", rating: 4.4, reviewCount: 680, area: "Tepebaşı", commentTr: "Tepebaşı'nda meşe odunu ateşiyle buharda pişen yumuşacık büryan lezzeti.", commentEn: "Soft buryan cooked with steam over oak wood fire in Tepebasi." }
  ],
  "Cağ Kebabı": [
    { name: "Erzurum Cağ Kebabı (Bağlar)", rating: 4.7, reviewCount: 2200, area: "Tepebaşı", commentTr: "Bağlar'da odun ateşinde yatık kuzu döner döner şişleri.", commentEn: "Horizontal spit-roasted lamb cağ kebab cooked over wood fire in Baglar." },
    { name: "Tortum Cağ Kebabı Eskişehir", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Tepebaşı'nda Erzurum Tortum usulü sıcak kesilen efsanevi cağ kebabı.", commentEn: "Legendary cağ kebab cut hot, Tortum style, in Tepebasi." },
    { name: "Palandöken Cağ Kebabı", rating: 4.5, reviewCount: 1300, area: "Odunpazarı", commentTr: "Odunpazarı'nda köz ateşinde pişmiş, lavaş eşliğinde sunulan leziz cağ kebabı.", commentEn: "Tasty cağ kebab cooked over embers, served with flatbread in Odunpazari." }
  ],
  "Kuzu Gerdan / İncik Haşlama": [
    { name: "Trakya Lokantası", rating: 4.7, reviewCount: 2500, area: "Tepebaşı", commentTr: "Terbiyeli, sebzeli lokum kıvamında kuzu incik haşlama.", commentEn: "Seasoned, melt-in-mouth lamb shank boiled with vegetables." },
    { name: "Şehir Lokantası", rating: 4.6, reviewCount: 1800, area: "Tepebaşı", commentTr: "Geleneksel esnaf mutfağı kalitesiyle sunulan nefis kuzu haşlama.", commentEn: "Traditional artisan restaurant style lamb boiled with root vegetables." },
    { name: "Güven Lokantası", rating: 4.5, reviewCount: 950, area: "Odunpazarı", commentTr: "Taze sebzeler ve yoğun kemik suyuyla saatlerce pişmiş kuzu gerdan.", commentEn: "Lamb neck cooked for hours in rich bone broth and fresh vegetables." }
  ],
  "Ali Nazik Kebabı": [
    { name: "Kebapçı Hacı Hasan", rating: 4.8, reviewCount: 4500, area: "Odunpazarı", commentTr: "Süzme yoğurtlu ve köz patlıcan beğenili enfes Ali Nazik.", commentEn: "Delicious Ali Nazik with strained yogurt and roasted eggplant puree in Odunpazari." },
    { name: "Kasap Osman Restoran", rating: 4.6, reviewCount: 2800, area: "Tepebaşı", commentTr: "Köz patlıcan üzerinde tereyağlı kuzu etli Ali Nazik kebabı.", commentEn: "Delicious Ali Nazik served over roasted eggplant puree with butter in Tepebasi." },
    { name: "Fahrettin Usta", rating: 4.7, reviewCount: 3100, area: "Odunpazarı", commentTr: "Geleneksel zırh kıymalı ve köz patlıcanlı enfes Ali Nazik lezzeti.", commentEn: "Delicious Ali Nazik with minced beef and roasted eggplant." }
  ],
  "Beyran Çorbası": [
    { name: "Çorbacı Necdet Usta", rating: 4.7, reviewCount: 2500, area: "Tepebaşı", commentTr: "Tepebaşı'nda harlı ateşte pişen bol etli ve sarımsaklı beyran çorbası.", commentEn: "Spicy and garlic beyran soup cooked over high flame in Tepebasi." },
    { name: "Paçacı Şemsi Eskişehir", rating: 4.5, reviewCount: 1800, area: "Tepebaşı", commentTr: "Tepebaşı'nda bakır sahanda sunulan acılı ve sarımsaklı hakiki beyran çorbası.", commentEn: "Authentic spicy and garlic beyran soup served in copper dishes in Tepebasi." },
    { name: "Tarihi Merkez Çorbacısı", rating: 4.4, reviewCount: 950, area: "Odunpazarı", commentTr: "Odunpazarı'nda dumanı üstünde servis edilen bol etli beyran çorbası.", commentEn: "Steaming hot beyran soup with plenty of meat in Odunpazari." }
  ],
  "Hünkar Beğendi": [
    { name: "Ayten Usta Gurme Restoran", rating: 4.8, reviewCount: 8500, area: "Tepebaşı", commentTr: "Nefis geleneksel tarifiyle sunulan kuzu etli gurme hünkar beğendi.", commentEn: "Gourmet hunkar begendi with lamb served with a traditional recipe at Ayten Usta." },
    { name: "Divan Pub (Cassaba Modern)", rating: 4.7, reviewCount: 3200, area: "Tepebaşı", commentTr: "Modern ve nezih ortamda sunulan nefis saray usulü hünkar beğendi.", commentEn: "Delicious palace style hunkar begendi served in a modern and clean atmosphere." },
    { name: "Hey Joe Coffee Co. (Gurme Mutfak)", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Şeflerin elinden gurme kuzu etli geleneksel hünkar beğendi.", commentEn: "Traditional hunkar begendi with gourmet lamb, elegantly served." }
  ],
  "Kuru Patlıcan Dolması": [
    { name: "Tarihi Odunpazarı Ev Yemekleri", rating: 4.6, reviewCount: 1800, area: "Odunpazarı", commentTr: "Tarihi Odunpazarı evlerinde sumak ekşili ve baharatlı pirinç dolgulu kuru patlıcan dolması.", commentEn: "Legendary dried eggplant stuffed with sumac molasses and spiced rice in historic Odunpazari." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Geleneksel yöntemlerle hazırlanan zeytinyağlı kuru patlıcan dolması.", commentEn: "Olive oil dried eggplant stuffed, prepared with traditional methods in Tepebasi." },
    { name: "Anadolu Ev Yemekleri", rating: 4.4, reviewCount: 950, area: "Odunpazarı", commentTr: "Ekşili ve baharatlı harika kuru patlıcan dolması lezzeti.", commentEn: "Wonderful tangy and spiced dried eggplant stuffed." }
  ],
  "Kekikli Kuyu Kebabı / Taş Fırın Güveç": [
    { name: "Çadır Restoran (Fırın Bölümü)", rating: 4.6, reviewCount: 2100, area: "Tepebaşı", commentTr: "Taş fırında yavaş pişen, taze kuzu güveç.", commentEn: "Lamb stew cooked slowly in stone oven in Tepebasi." },
    { name: "Meşhur Eskişehir Kebapçısı", rating: 4.5, reviewCount: 1500, area: "Tepebaşı", commentTr: "Toprak güveçte arpacık soğan ve sarımsakla fırınlanmış kuzu eti.", commentEn: "Lamb meat baked with shallots and garlic in clay pot in Tepebasi." },
    { name: "Hüsnüniyet Lokantası", rating: 4.4, reviewCount: 820, area: "Odunpazarı", commentTr: "Geleneksel lokanta usulü fırında pişen güveç etleri.", commentEn: "Traditional local diner style wood oven baked clay pot stews." }
  ],
  "Deniz Börülcesi / Şevketi Bostan": [
    { name: "Mezgit Restoran", rating: 4.6, reviewCount: 1800, area: "Tepebaşı", commentTr: "Sızma zeytinyağlı ve taze sarımsaklı nefis deniz börülcesi salatası.", commentEn: "Delicious sea beans salad with extra virgin olive oil and fresh garlic." },
    { name: "Karadeniz Balık Evi", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Balık yanına sunulan hafif zeytinyağlı taze şevketi bostan yemeği.", commentEn: "Light olive oil fresh blessed thistle served alongside fish." },
    { name: "Karşıyaka Balıkçısı (Meze Reyonu)", rating: 4.4, reviewCount: 820, area: "Tepebaşı", commentTr: "Taze otlar ve gurme zeytinyağlı Ege mezeleri.", commentEn: "Olive oil Aegean appetizers with fresh wild herbs." }
  ],
  "Enginarlı Pilav": [
    { name: "Walker's Coffee House (Mevsimsel Gurme Menü)", rating: 4.6, reviewCount: 1500, area: "Tepebaşı", commentTr: "Dereotu ve taze bezelyeyle demlenmiş nefis enginarlı pilav.", commentEn: "Delicious artichoke rice infused with fresh dill and peas." },
    { name: "Göz Oda Cafe", rating: 4.5, reviewCount: 950, area: "Odunpazarı", commentTr: "Taze enginar göbekli pilavın gurme ve hafif sunumu.", commentEn: "Gourmet and light rice prepared with fresh artichoke hearts." },
    { name: "Mazlum Süt Evi (Yöresel Günler)", rating: 4.7, reviewCount: 5200, area: "Tepebaşı", commentTr: "Yöresel lezzet günlerinde sunulan hafif enginarlı pilav.", commentEn: "Light artichoke rice served under regional cuisine days." }
  ],
  "Çerkez Tavuğu": [
    { name: "Acıktım Kafe (Meze Reyonu)", rating: 4.4, reviewCount: 2800, area: "Tepebaşı", commentTr: "Bol cevizli geleneksel Çerkez tavuğu ezmesi.", commentEn: "Traditional Circassian chicken with plenty of walnuts served." },
    { name: "Varuna Gezgin (Dünya Mutfağı ve Mezeler)", rating: 4.6, reviewCount: 8200, area: "Tepebaşı", commentTr: "Taze malzemelerle hazırlanan usta işi Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste prepared with fresh ingredients." },
    { name: "Kalender Meyhane Eskişehir", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Nostaljik ortamda kişnişli ve sarımsaklı Çerkez tavuğu ezmesi.", commentEn: "Circassian chicken paste with coriander and garlic in a nostalgic atmosphere." }
  ],
  "Kars Gravyeri ve İsli Çerkez Peynirli Tabak": [
    { name: "BigChefs (Cassaba Modern - Şarküteri Seçeneği)", rating: 4.7, reviewCount: 3200, area: "Tepebaşı", commentTr: "Eskitilmiş Kars gravyeri ve peynir çeşitleri.", commentEn: "Aged Kars gruyere and cheese varieties selected from deli section." },
    { name: "Hey Joe Coffee Co. (Gurme Tabaklar)", rating: 4.5, reviewCount: 1100, area: "Tepebaşı", commentTr: "Gurme Kars gravyeri ve yerel isli peynir tabağı sunumu.", commentEn: "Platter of gourmet Kars gruyere and local smoked cheese." },
    { name: "Crop Coffee Co. Eskişehir", rating: 4.5, reviewCount: 950, area: "Tepebaşı", commentTr: "Gurme reyonundan seçilen Kars gravyeri ve isli peynirler.", commentEn: "Kars gruyere and smoked cheeses selected from gourmet section." }
  ],
  "Zerde": [
    { name: "Mazlum Süt Evi (Geleneksel Tatlılar)", rating: 4.7, reviewCount: 5200, area: "Tepebaşı", commentTr: "Safranlı, pirinçli ve nar taneli geleneksel saray lezzeti zerde.", commentEn: "Traditional palace style saffron, rice, and pomegranate zerde." },
    { name: "Balkan Pastanesi", rating: 4.5, reviewCount: 1500, area: "Tepebaşı", commentTr: "Geleneksel gül kokulu zerde tatlısı.", commentEn: "Traditional rosewater-scented zerde dessert served." },
    { name: "Gezi Pastanesi Eskişehir", rating: 4.4, reviewCount: 820, area: "Tepebaşı", commentTr: "Safran aromalı hafif geleneksel zerde tatlısı.", commentEn: "Light traditional zerde flavored with saffron." }
  ],
  "Perde Pilavı": [
    { name: "Has Siirt Mutfağı Eskişehir", rating: 4.5, reviewCount: 820, area: "Tepebaşı", commentTr: "Usta ellerden çıkan bol baharatlı ve bademli Siirt usulü perde pilavı.", commentEn: "Spiced and almond-loaded Siirt-style perde rice from master hands." },
    { name: "Kırım Tatar Kültür Evi (Yöresel Pilavlar)", rating: 4.6, reviewCount: 1200, area: "Odunpazarı", commentTr: "Çıtır bademli hamur içinde tavuk ve perde pilavı lezzeti.", commentEn: "Delicious perde rice with chicken and currants inside a crispy almond pastry shell." },
    { name: "Sini Ev Yemekleri", rating: 4.4, reviewCount: 520, area: "Tepebaşı", commentTr: "Fırınlanmış çıtır hamurlu geleneksel perde pilavı.", commentEn: "Traditional perde rice with crispy pastry baked." }
  ],
  "Analı Kızlı Çorbası / Yemeği": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Ekşili, nohutlu ve köfteli sıcak analı kızlı yemeği.", commentEn: "Tangy hot analı kızlı stew with chickpeas and kibbeh." },
    { name: "Tarihi Odunpazarı Ev Yemekleri", rating: 4.6, reviewCount: 1800, area: "Odunpazarı", commentTr: "Geleneksel ev usulü tereyağlı ve bol limonlu analı kızlı çorbası.", commentEn: "Tangy analı kızlı soup with plenty of lemon and butter served." },
    { name: "Sofra Restoran", rating: 4.4, reviewCount: 680, area: "Tepebaşı", commentTr: "Özgün tarifiyle sunulan orijinal analı kızlı yemeği.", commentEn: "Original analı kızlı stew prepared according to authentic recipe." }
  ],
  "Mumbar / Şırdan Dolması": [
    { name: "Kokoreççi Hacı (Sakatat Seçenekleri)", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Bol baharatlı enfes şırdan ve mumbar.", commentEn: "Gaziantep/Adana's legendary stuffed sirdan and mumbar with spices." },
    { name: "Kokoreççi Şaban Usta", rating: 4.4, reviewCount: 950, area: "Odunpazarı", commentTr: "Taze ve temiz sakatattan hazırlanan baharatlı mumbar dolması.", commentEn: "Spicy stuffed mumbar prepared from fresh and clean offal." },
    { name: "Adalar Şırdan & Mumbar Evi", rating: 4.3, reviewCount: 520, area: "Tepebaşı", commentTr: "Bol baharatlı dumanı üstünde sıcak mumbar dolması.", commentEn: "Hot stuffed mumbar served steaming with plenty of spices." }
  ],
  "Tire Köftesi": [
    { name: "Walker's Coffee (Gurme Köfte Seçeneği)", rating: 4.6, reviewCount: 1500, area: "Tepebaşı", commentTr: "Izgara köftelerin tereyağlı ve domates soslu sunumu.", commentEn: "Grilled meatballs served with butter and tomato sauce." },
    { name: "Cookshop (Espark)", rating: 4.5, reviewCount: 2800, area: "Tepebaşı", commentTr: "Tırnak pide yatağında eritilmiş tereyağlı incecik köfteler.", commentEn: "Thin meatballs on flatbread bed with sizzling melted butter." },
    { name: "Tarihi Köfteci Muammer Usta", rating: 4.3, reviewCount: 520, area: "Seyhan", commentTr: "Eritilmiş tereyağlı ve domates soslu enfes köfte.", commentEn: "Delicious kebab with tomato sauce and sizzling melted butter." }
  ],
  "Cevizli Mantı": [
    { name: "Kırım Tatar Kültür Evi (Cevizli Mantı ve Sorpa)", rating: 4.6, reviewCount: 1200, area: "Odunpazarı", commentTr: "El açması incecik hamurla hazırlanan bol cevizli tatar mantısı.", commentEn: "Tatar style dumplings with plenty of walnuts prepared with thin dough in Odunpazari." },
    { name: "Papağan Çibörek Evi (Yöresel Mantı Seçeneği)", rating: 4.8, reviewCount: 15000, area: "Tepebaşı", commentTr: "Yöresel hamur işleri arasında sunulan tereyağlı cevizli mantı.", commentEn: "Tatar style dumpling with butter and walnuts served alongside ciborek." },
    { name: "Kayseri Mantı Evi (Eskişehir)", rating: 4.4, reviewCount: 680, area: "Tepebaşı", commentTr: "Fırınlanmış çıtır ceviz parçalarıyla sıcak mantı keyfi.", commentEn: "Hot dumpling enjoyment baked with crispy walnut pieces." }
  ],
  "Kalamar Dolması": [
    { name: "Mezgit Restoran", rating: 4.6, reviewCount: 1800, area: "Tepebaşı", commentTr: "Fırınlanmış, içi taze karides ve mantarla doldurulmuş gurme kalamar dolması.", commentEn: "Gourmet baked kalamari stuffed with fresh shrimp and mushrooms." },
    { name: "Karadeniz Balık Evi", rating: 4.5, reviewCount: 1200, area: "Tepebaşı", commentTr: "Kaşarlı ve deniz mahsullü gurme fırınlanmış kalamar dolması.", commentEn: "Gourmet baked kalamari stuffed with cheese and seafood." },
    { name: "Şehir Lokantası (Deniz Mahsülleri Günleri)", rating: 4.6, reviewCount: 1800, area: "Tepebaşı", commentTr: "Taş fırında pişen tereyağlı ve mantarlı enfes kalamar dolması.", commentEn: "Delicious baked kalamari stuffed and baked in stone oven with butter." }
  ],
  "Fırında Sütlaç": [
    { name: "Mazlum Süt Evi", rating: 4.7, reviewCount: 5200, area: "Tepebaşı", commentTr: "Taş fırından yeni çıkmış, üstü nar gibi kızarmış fındıklı Hamsiköy sütlacı.", commentEn: "Hamsikoy rice pudding with hazelnuts fresh out of the stone oven." },
    { name: "Balkan Pastanesi", rating: 4.5, reviewCount: 1500, area: "Tepebaşı", commentTr: "Tam yağlı sütle yapılan geleneksel fırınlanmış sütlaç.", commentEn: "Traditional baked rice pudding made with full-fat milk." },
    { name: "Çorbacı Necdet Usta (Tatlı Bölümü)", rating: 4.7, reviewCount: 2500, area: "Tepebaşı", commentTr: "Fırınlanmış kıvamlı ve bol fındıklı sütlaç.", commentEn: "Thick baked rice pudding with plenty of hazelnuts." }
  ]
};

export const VEGAN_ANKARA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Boğaziçi Lokantası", rating: 4.6, reviewCount: 1850, area: "Ulus", commentTr: "Ulus'un tarihi lokantasında incecik sarılmış, bol zeytinyağlı ve ekşili yaprak sarması.", commentEn: "Thinly rolled grape leaves with plenty of olive oil and lemon at Ulus's historic diner." },
    { name: "Çiçek Lokantası", rating: 4.5, reviewCount: 1200, area: "Söğütözü", commentTr: "Söğütözü'nde geleneksel esnaf lokantası usulü pişirilmiş zeytinyağlı yaprak sarması.", commentEn: "Traditional local diner style olive oil stuffed grape leaves in Söğütözü." },
    { name: "Göksu Lokantası", rating: 4.4, reviewCount: 950, area: "Kızılay", commentTr: "Kızılay'da taze asma yaprağından yapılan, limon dilimleriyle süslenmiş zeytinyağlı meze.", commentEn: "Olive oil appetizer made from fresh grape leaves, garnished with lemon slices in Kızılay." }
  ],
  "Kısır": [
    { name: "Sofra Ev Yemekleri", rating: 4.4, reviewCount: 420, area: "Bahçelievler", commentTr: "Taze yeşillikler, nar ekşisi ve kaliteli zeytinyağı ile yoğrulmuş ev usulü kısır.", commentEn: "Home-style bulgur salad kneaded with fresh herbs, pomegranate molasses, and quality olive oil." },
    { name: "Kızılay Merkez Lokantası", rating: 4.3, reviewCount: 380, area: "Kızılay", commentTr: "Kızılay'da her gün taze hazırlanan, acısı ve ekşisi tam kıvamında esnaf kısırı.", commentEn: "Daily prepared artisan bulgur salad with perfectly balanced spices and sourness in Kızılay." },
    { name: "Kıtır (Meze Reyonu)", rating: 4.5, reviewCount: 2200, area: "Tunalı", commentTr: "Tunalı'da bira yanına veya meze olarak tercih edilen bol yeşillikli klasik kısır.", commentEn: "Classic bulgur salad with plenty of greens, preferred as an appetizer in Tunalı." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (Kızılay)", rating: 4.2, reviewCount: 650, area: "Kızılay", commentTr: "Kızılay'da hızlı, acılı ve vegan standartlara tamamen uygun yoğrulmuş çiğ köfte dürümleri.", commentEn: "Fast, spicy, and fully vegan compliant cig kofte wraps in Kızılay." },
    { name: "Komagene Çiğ Köfte (Bahçelievler)", rating: 4.3, reviewCount: 780, area: "Bahçelievler", commentTr: "Bahçelievler'de cevizli ve bol baharatlı özel vegan harçlı çiğ köfte dürümleri.", commentEn: "Cig kofte wraps with walnut and rich spiced special vegan paste in Bahçelievler." },
    { name: "Battalbey Çiğ Köfte (Tunalı)", rating: 4.1, reviewCount: 480, area: "Tunalı", commentTr: "Tunalı'da bütçe dostu, bol yeşillik ve nar ekşili pratik vegan çiğ köfte dürümü.", commentEn: "Budget-friendly, quick vegan cig kofte wrap with fresh greens and pomegranate molasses in Tunalı." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Tarihi Ulus Lezzet Lokantası", rating: 4.5, reviewCount: 880, area: "Ulus", commentTr: "Ulus'ta havuç, patates ve sızma zeytinyağı ile ağır ateşte pişmiş barbunya pilakisi.", commentEn: "Slow-cooked cranberry beans with carrots, potatoes, and olive oil in Ulus." },
    { name: "Esnaf Lokantası Ayrancı", rating: 4.4, reviewCount: 310, area: "Ayrancı", commentTr: "Ayrancı'da geleneksel zeytinyağlılar arasında en çok tercih edilen taze barbunya.", commentEn: "Fresh cranberry beans, the most preferred among traditional olive oil dishes in Ayrancı." },
    { name: "Bizim Çorba & Ev Yemekleri", rating: 4.3, reviewCount: 220, area: "Çankaya", commentTr: "Çankaya'da ev yemeği sıcaklığında sunulan bol sarımsaklı ve zeytinyağlı barbunya.", commentEn: "Garlicky olive oil cranberry beans served with home-cooked warmth in Çankaya." }
  ],
  "Mercimek Çorbası": [
    { name: "Veganka", rating: 4.7, reviewCount: 950, area: "Çankaya", commentTr: "Çankaya'da tamamen bitkisel yağlarla hazırlanan, pürüzsüz ve sıcak vegan mercimek çorbası.", commentEn: "Smooth, warm vegan lentil soup prepared entirely with vegetable oils in Çankaya." },
    { name: "Vegihi", rating: 4.6, reviewCount: 820, area: "Bahçelievler", commentTr: "Bahçelievler'de hayvansal ürün bulaşması olmadan pişirilen %100 vegan süzme mercimek.", commentEn: "100% vegan strained lentil soup cooked with no animal product cross-contamination in Bahçelievler." },
    { name: "Devrez Çorba", rating: 4.5, reviewCount: 3400, area: "Tunalı", commentTr: "Tunalı'da tereyağı eklenmeden, sadece bitkisel yağ ile servis edilen sade mercimek çorbası.", commentEn: "Plain lentil soup served with only vegetable oil without butter in Tunalı." }
  ],
  "İmam Bayıldı": [
    { name: "Boğaziçi Lokantası", rating: 4.6, reviewCount: 1850, area: "Ulus", commentTr: "Ulus'ta bol soğanlı, sarımsaklı ve domatesli zeytinyağlı patlıcan klasiği.", commentEn: "Classic olive oil eggplant dish stuffed with onions, garlic, and tomatoes in Ulus." },
    { name: "Konyalı Hacı Usta", rating: 4.4, reviewCount: 790, area: "Çankaya", commentTr: "Çankaya'da hafif zeytinyağı ile fırınlanmış, içi lezzet dolu geleneksel imam bayıldı.", commentEn: "Traditional baked eggplant stuffed with delicious onion filling in Çankaya." },
    { name: "Tarihi Mutfak Lokantası", rating: 4.3, reviewCount: 520, area: "Altındağ", commentTr: "Altındağ'da eski Ankara evleri atmosferinde sunulan nefis soğuk imam bayıldı.", commentEn: "Delicious cold stuffed eggplant served in Altındağ's historical Ankara house atmosphere." }
  ],
  "Falafel Dürüm": [
    { name: "Falafelizm (Kızılay)", rating: 4.6, reviewCount: 1100, area: "Kızılay", commentTr: "Kızılay'da taze kızarmış çıtır nohut köfteleri ve tahin soslu harika vegan dürüm.", commentEn: "Freshly fried crispy chickpea patties and tahini sauce in a great vegan wrap in Kızılay." },
    { name: "Veganka", rating: 4.7, reviewCount: 950, area: "Çankaya", commentTr: "Çankaya'da vegan lavaş ve yeşilliklerle sunulan el yapımı fırınlanmış/kızarmış falafel.", commentEn: "Handmade falafel served with vegan flatbread and fresh greens in Çankaya." },
    { name: "Kakule Kahve (Atıştırmalık Menüsü)", rating: 4.5, reviewCount: 880, area: "Kızılay", commentTr: "Kızılay'da samimi kafede humus ve yeşilliklerle zenginleştirilmiş falafel tabağı veya dürüm.", commentEn: "Falafel wrap or platter enriched with hummus and greens in a cozy cafe in Kızılay." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Sofra Ev Yemekleri", rating: 4.4, reviewCount: 420, area: "Bahçelievler", commentTr: "Bahçelievler'de havuçlu, pirinçli ve bol limonlu geleneksel zeytinyağlı pırasa.", commentEn: "Traditional olive oil leeks with carrots, rice, and plenty of lemon in Bahçelievler." },
    { name: "Kızılay Merkez Lokantası", rating: 4.3, reviewCount: 380, area: "Kızılay", commentTr: "Kızılay'da hafif zeytinyağlı yemek arayanlar için günlük taze pişen leziz pırasa.", commentEn: "Delicious leeks cooked fresh daily for those looking for light olive oil dishes in Kızılay." },
    { name: "Ankara Konağı Restoran", rating: 4.5, reviewCount: 620, area: "Yenimahalle", commentTr: "Yenimahalle'de davetlerde sunulan, portakal suyuyla tatlandırılmış özel pırasa.", commentEn: "Special leeks sweetened with fresh orange juice served in Yenimahalle." }
  ],
  "Humus": [
    { name: "Düveroğlu", rating: 4.6, reviewCount: 8500, area: "Çayyolu", commentTr: "Çayyolu'nda kaliteli tahin ve zeytinyağı ile harmanlanmış tereyağsız soğuk humus.", commentEn: "Cold butter-free hummus blended with quality tahini and olive oil in Çayyolu." },
    { name: "Hacı Arif Bey Lokantası", rating: 4.5, reviewCount: 3800, area: "Tunalı", commentTr: "Tunalı'da pürüzsüz kıvamı, limon ve sarımsak dengesiyle öne çıkan zeytinyağlı humus.", commentEn: "Garlicky olive oil hummus with smooth texture and balanced lemon flavor in Tunalı." },
    { name: "Meşhur Çorbacı Adnan Usta (Meze Bölümü)", rating: 4.4, reviewCount: 1400, area: "Bahçelievler", commentTr: "Bahçelievler'de meze reyonundan taze zeytinyağlı ve kimyonlu humus tabağı.", commentEn: "Fresh olive oil and cumin hummus plate from the appetizer counter in Bahçelievler." }
  ],
  "Ezogelin Çorbası": [
    { name: "Vegihi", rating: 4.6, reviewCount: 820, area: "Bahçelievler", commentTr: "Bahçelievler'de kırmızı mercimek, bulgur, pirinç ve nane ile bitkisel yağlı vegan ezogelin.", commentEn: "Vegan ezogelin soup with red lentils, bulgur, rice, mint, and vegetable oil in Bahçelievler." },
    { name: "Meşhur Çorbacı Adnan Usta", rating: 4.4, reviewCount: 2200, area: "Bahçelievler", commentTr: "Bahçelievler'de tereyağı kullanılmadan bitkisel yağla hazırlanan sıcacık ezogelin çorbası.", commentEn: "Warm ezogelin soup prepared with vegetable oil without butter in Bahçelievler." },
    { name: "Çorbacı Bey", rating: 4.3, reviewCount: 950, area: "Balgat", commentTr: "Balgat'ta gece geç saatlere kadar servis edilen, bol naneli vegan dostu ezogelin.", commentEn: "Minty vegan friendly ezogelin soup served until late night in Balgat." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Kafes Fırın (Mevsimsel Gurme Menü)", rating: 4.5, reviewCount: 1600, area: "Çayyolu", commentTr: "Çayyolu'nda portakal suyuyla pişirilmiş, ayva ve havuç dilimli hafif kereviz.", commentEn: "Light celery dish cooked with orange juice, quince, and carrot slices in Çayyolu." },
    { name: "Cafemiz (Hafif Menü)", rating: 4.4, reviewCount: 1100, area: "Tunalı", commentTr: "Tunalı'da taze dereotu ve sızma zeytinyağı ile tatlandırılmış diyet dostu kereviz.", commentEn: "Diet-friendly celery flavored with fresh dill and extra virgin olive oil in Tunalı." },
    { name: "Louise Brasserie & Lounge", rating: 4.6, reviewCount: 2100, area: "Filistin Caddesi", commentTr: "Filistin Caddesi'nde modern sunumuyla portakallı ve zeytinyağlı gurme kereviz.", commentEn: "Gourmet celery with orange juice and olive oil, presented beautifully in Filistin Street." }
  ],
  "Şakşuka": [
    { name: "Kıtır", rating: 4.5, reviewCount: 3200, area: "Tunalı", commentTr: "Tunalı'da kızarmış patlıcan, biber ve sarımsaklı domates soslu geleneksel şakşuka.", commentEn: "Traditional fried eggplant and peppers in garlicky tomato sauce at Tunalı's local pub." },
    { name: "Kalender Zebercet Meyhanesi", rating: 4.6, reviewCount: 980, area: "Kavaklıdere", commentTr: "Kavaklıdere'de zeytinyağı ile lezzetlendirilmiş taze domates soslu harika şakşuka.", commentEn: "Great eggplant appetizer with fresh tomato sauce flavored with olive oil in Kavaklıdere." },
    { name: "Aylak Madam", rating: 4.4, reviewCount: 880, area: "Bahçelievler", commentTr: "Bahçelievler'de samimi ortamda sunulan hafif zeytinyağlı meze tabağı şakşuka.", commentEn: "Light olive oil eggplant appetizer served in Bahçelievler's cozy cafe." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Konyalı Hacı Usta", rating: 4.4, reviewCount: 920, area: "Çankaya", commentTr: "Çankaya'da bitkisel yağla pişirilmiş, protein deposu yeşil mercimekli bulgur pilavı.", commentEn: "High-protein bulgur wheat pilaf cooked with green lentils and vegetable oil in Çankaya." },
    { name: "Zenger Paşa Konağı", rating: 4.5, reviewCount: 1100, area: "Ankara Kalesi", commentTr: "Tarihi kalede sunulan, karamelize soğanlı ve zeytinyağlı geleneksel bulgur pilavı.", commentEn: "Traditional bulgur pilaf with caramelized onions and olive oil served at the historic castle." },
    { name: "Has Siirt Mutfağı Ankara", rating: 4.3, reviewCount: 540, area: "Ulus", commentTr: "Ulus'ta etsiz yemek arayanlar için bitkisel yağlı mercimekli başbaşı bulgurlu pilav.", commentEn: "Coarse bulgur wheat pilaf with lentils cooked in vegetable oil in Ulus." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "Midpoint (Tunalı)", rating: 4.3, reviewCount: 2800, area: "Tunalı", commentTr: "Tunalı'da taze marul, roka, cherry domatesler ve zeytinyağlı limon soslu salata.", commentEn: "Fresh lettuce, arugula, cherry tomatoes, and olive oil lemon dressing in Tunalı." },
    { name: "BigChefs (Çayyolu)", rating: 4.4, reviewCount: 3500, area: "Çayyolu", commentTr: "Çayyolu'nda çıtır Akdeniz yeşillikleri, nar taneleri ve cevizle zenrichleştirilmiş salata.", commentEn: "Salad enriched with crispy Mediterranean greens, pomegranate seeds, and walnuts in Çayyolu." },
    { name: "Leman Kültür (Bahçelievler)", rating: 4.2, reviewCount: 1950, area: "Bahçelievler", commentTr: "Bahçelievler'de sızma zeytinyağı soslu, doyurucu ve taze Akdeniz salatası.", commentEn: "Filling and fresh Mediterranean salad dressed with extra virgin olive oil in Bahçelievler." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Veganka", rating: 4.7, reviewCount: 950, area: "Çankaya", commentTr: "Çankaya'da kekik ve tatlı toz biberle fırınlanmış, vegan mayonez eşliğinde patatesler.", commentEn: "Baked potatoes with thyme and sweet red pepper, served with vegan mayo in Çankaya." },
    { name: "Amelie’s Garden", rating: 4.6, reviewCount: 720, area: "Bahçelievler", commentTr: "Bahçelievler'de taze baharatlarla harmanlanıp kızartılmış/fırınlanmış patates cipsleri.", commentEn: "Spiced baked/fried potato wedges seasoned with fresh herbs in Bahçelievler." },
    { name: "Kruvasante", rating: 4.5, reviewCount: 540, area: "Tunalı", commentTr: "Tunalı'da vegan kruvasanların veya gurme tabakların yanına çıtır baharatlı patatesler.", commentEn: "Crispy spiced potatoes served alongside gourmet plates in Tunalı." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Göksu Lokantası", rating: 4.4, reviewCount: 950, area: "Kızılay", commentTr: "Kızılay'da taze dereotu ve sızma zeytinyağı ile servis edilen mevsimlik enginar üstü bakla.", commentEn: "Seasonal fresh broad beans served with fresh dill and extra virgin olive oil in Kızılay." },
    { name: "Çiçek Lokantası", rating: 4.5, reviewCount: 1200, area: "Söğütözü", commentTr: "Söğütözü'nde geleneksel usulde pişmiş, yoğurtsuz ve tamamen bitkisel iç bakla yemeği.", commentEn: "Traditionally cooked broad bean dish served without yogurt, entirely plant-based." },
    { name: "Divan Pub Ankara", rating: 4.6, reviewCount: 1400, area: "Çankaya", commentTr: "Çankaya'da şık sunumuyla taze sıkılmış limon ve zeytinyağlı gurme iç bakla mezesi.", commentEn: "Gourmet fresh broad beans appetizer with fresh lemon and olive oil in Çankaya." }
  ],
  "Muhammara / Acuka": [
    { name: "Misafir Gurme", rating: 4.5, reviewCount: 310, area: "Çankaya", commentTr: "Çankaya'da bol cevizli, acı biber salçalı ve zeytinyağlı el yapımı taze muhammara.", commentEn: "Handmade fresh muhammara with walnuts, hot pepper paste, and olive oil in Çankaya." },
    { name: "Kuğu Pasta & Cafe (Şarküteri Reyonu)", rating: 4.4, reviewCount: 1500, area: "Bahçelievler", commentTr: "Bahçelievler'de ev yapımı tadında, kimyonlu ve sarımsaklı leziz acuka ezmesi.", commentEn: "Delicious homemade-style acuka paste with cumin and garlic in Bahçelievler." },
    { name: "Kebapçı Emin Usta", rating: 4.3, reviewCount: 880, area: "Ulus", commentTr: "Ulus'ta kebap öncesi sunulan, nar ekşili ve cevizli fırınlanmış ekmek üzeri acuka.", commentEn: "Acuka spread served with walnuts and pomegranate molasses on bread in Ulus." }
  ],
  "Mantarlı Sote": [
    { name: "Vegihi", rating: 4.6, reviewCount: 820, area: "Bahçelievler", commentTr: "Bahçelievler'de kültür mantarı, renkli biberler ve zeytinyağı ile sotelenmiş vegan yemek.", commentEn: "Vegan button mushroom sauté with colorful bell peppers and olive oil in Bahçelievler." },
    { name: "Veganka", rating: 4.7, reviewCount: 950, area: "Çankaya", commentTr: "Çankaya'da kekikli, sarımsaklı ve soya soslu nefis karamelize mantar sote.", commentEn: "Delicious caramelized mushroom sauté with thyme, garlic, and soy sauce in Çankaya." },
    { name: "Seyir Cafe (Bahçelievler)", rating: 4.3, reviewCount: 1200, area: "Bahçelievler", commentTr: "Bahçelievler'de yeşillikler eşliğinde sunulan domatesli ve biberli mantar sote.", commentEn: "Mushroom sauté with tomatoes and bell peppers served in Bahçelievler." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Masabaşı Kebapçısı", rating: 4.6, reviewCount: 4200, area: "Balgat", commentTr: "Balgat'ta köz patlıcan, domates ve yeşil biberin zeytinyağlı sıcak ve nefis harmanı.", commentEn: "Warm delicious mash of fire-roasted eggplants, tomatoes, and bell peppers in Balgat." },
    { name: "Günaydın Kebap (Arjantin)", rating: 4.5, reviewCount: 3100, area: "Çankaya", commentTr: "Çankaya'da meşe odunu közünde pişmiş, sarımsak ve sızma zeytinyağı ile ezilmiş patlıcan.", commentEn: "Charcoal-roasted eggplants mashed with garlic and extra virgin olive oil in Çankaya." },
    { name: "Düveroğlu (İstek Üzerine Etsiz)", rating: 4.6, reviewCount: 8500, area: "Çayyolu", commentTr: "Çayyolu'nda kebap baharatları ve zeytinyağı ile fırınlanmış etsiz köz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash baked with kebab spices and olive oil in Çayyolu." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Aylak Madam", rating: 4.4, reviewCount: 880, area: "Bahçelievler", commentTr: "Bahçelievler'de ceviz parçaları ve zeytinyağlı sosla sunulan ev yapımı vegan erişte.", commentEn: "Homemade vegan noodles tossed with walnuts and olive oil sauce in Bahçelievler." },
    { name: "Gece Menemencisi (Kızılay - Özel İstek)", rating: 4.5, reviewCount: 1100, area: "Kızılay", commentTr: "Kızılay'da gece yarısı sıcak salçalı sos ve kekikle kavrulmuş pratik vegan makarna.", commentEn: "Late-night vegan noodles roasted with warm tomato sauce and thyme in Kızılay." },
    { name: "Hamlakit", rating: 4.3, reviewCount: 650, area: "Çankaya", commentTr: "Çankaya'da cevizli ve bitkisel yağla kavrulmuş Karadeniz usulü erişte.", commentEn: "Black Sea style roasted noodles with walnuts and vegetable oil in Çankaya." }
  ]
};

export const VEGAN_ISTANBUL_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Tarihi Karaköy Lokantası", rating: 4.6, reviewCount: 3200, area: "Karaköy", commentTr: "Karaköy'de asırlık lezzet geleneğiyle sunulan, ekşili ve bol zeytinyağlı sarmalar.", commentEn: "Traditional olive oil stuffed grape leaves served at Karakoy's historic dining spot." },
    { name: "Hacı Abdullah Lokantası", rating: 4.5, reviewCount: 2800, area: "Beyoğlu", commentTr: "Beyoğlu'nda Osmanlı saray mutfağı usulü, baharatı ve zeytinyağı dengeli yaprak sarması.", commentEn: "Ottoman palace style stuffed grape leaves with perfectly balanced spices and olive oil in Beyoğlu." },
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de asma yapraklarından hazırlanan, geleneksel aromatik iç harçlı sarma.", commentEn: "Grape leaves stuffed with a traditional aromatic rice filling in Kadıköy." }
  ],
  "Kısır": [
    { name: "Helvetia (Asmalımescit)", rating: 4.4, reviewCount: 950, area: "Beyoğlu", commentTr: "Beyoğlu'nda taze malzemeler ve kaliteli sızma zeytinyağı ile günlük hazırlanan nefis kısır.", commentEn: "Delicious daily bulgur salad made with fresh herbs and quality olive oil in Beyoğlu." },
    { name: "Zencefil Cafe", rating: 4.5, reviewCount: 1800, area: "Beyoğlu", commentTr: "Beyoğlu'nun köklü vejetaryen mekanında bol yeşillikli ve baharatlı leziz kısır.", commentEn: "Deliciously spiced bulgur salad with fresh herbs in Beyoğlu's classic vegetarian spot." },
    { name: "Mahalle Ev Yemekleri (Moda)", rating: 4.3, reviewCount: 310, area: "Moda", commentTr: "Moda'da ev yapımı tadında, taze yeşillik ve nar ekşisiyle süslenmiş kısır.", commentEn: "Homemade-style bulgur salad seasoned with fresh greens and pomegranate molasses in Moda." }
  ],
  "Çiğ Köfte": [
    { name: "Çiğ Köfteci Ali Usta (Eminönü)", rating: 4.5, reviewCount: 9200, area: "Eminönü", commentTr: "Eminönü'nde meşhur şovları eşliğinde hazırlanan, bol yeşillikli ve acılı vegan dürümler.", commentEn: "Famous spicy vegan cig kofte wraps served with showmanship in Eminönü." },
    { name: "Oses Çiğ Köfte (Beşiktaş)", rating: 4.2, reviewCount: 1100, area: "Beşiktaş", commentTr: "Beşiktaş'ta hızlı, lezzetli ve vegan standartlarına tamamen uygun çiğ köfte dürümü.", commentEn: "Quick, tasty, and fully vegan compliant cig kofte wrap in Beşiktaş." },
    { name: "Komagene (Kadıköy)", rating: 4.3, reviewCount: 1450, area: "Kadıköy", commentTr: "Kadıköy'de ceviz, badem ve fındık katkılı özel vegan harçlı çiğ köfte dürümleri.", commentEn: "Special vegan cig kofte wraps featuring rich nut-blended paste in Kadıköy." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Balkan Lokantası (Beşiktaş)", rating: 4.2, reviewCount: 3800, area: "Beşiktaş", commentTr: "Beşiktaş'ta günlük pişen, havuç ve patatesli klasik zeytinyağlı barbunya pilakisi.", commentEn: "Classic olive oil cranberry beans with carrots and potatoes, cooked daily in Beşiktaş." },
    { name: "Nato Lokantası (Karaköy)", rating: 4.4, reviewCount: 920, area: "Karaköy", commentTr: "Karaköy'de esnaf lokantası usulü, sızma zeytinyağı ile dinlendirilmiş soğuk pilaki.", commentEn: "Artisan diner style cranberry beans rested with extra virgin olive oil in Karaköy." },
    { name: "Hünkar Lokantası (Nişantaşı)", rating: 4.6, reviewCount: 2900, area: "Nişantaşı", commentTr: "Nişantaşı'nda geleneksel Türk mutfağının en seçkin barbunya pilakisi sunumu.", commentEn: "Nişantaşı's premier destination for traditional Turkish style cranberry beans." }
  ],
  "Mercimek Çorbası": [
    { name: "Tarihi Karaköy Çorbacısı", rating: 4.4, reviewCount: 1200, area: "Karaköy", commentTr: "Karaköy'de tereyağı kullanılmadan sadece bitkisel yağla hazırlanan süzme mercimek.", commentEn: "Smooth strained lentil soup prepared in Karaköy with only vegetable oil without butter." },
    { name: "Çorba Kapısı (Kadıköy)", rating: 4.3, reviewCount: 750, area: "Kadıköy", commentTr: "Kadıköy'de çorba çeşitleri arasında veganların favorisi olan sade mercimek çorbası.", commentEn: "Plain yellow lentil soup, a top choice for vegans in Kadıköy." },
    { name: "Bi Nevi Deli (Tamamen Vegan)", rating: 4.7, reviewCount: 1100, area: "Etiler", commentTr: "Etiler'de glütensiz ve %100 bitkisel organik malzemelerle pişen mercimek çorbası.", commentEn: "100% plant-based organic lentil soup cooked fresh in Etiler." }
  ],
  "İmam Bayıldı": [
    { name: "Pandeli Restaurant (Mısır Çarşısı)", rating: 4.6, reviewCount: 4100, area: "Eminönü", commentTr: "Tarihi Mısır Çarşısı'nda taş fırında közlenmiş patlıcanlı geleneksel imam bayıldı.", commentEn: "Traditional stuffed eggplant cooked in a stone oven inside the historic Spice Bazaar." },
    { name: "Bankalar Lokantası (Karaköy)", rating: 4.4, reviewCount: 880, area: "Karaköy", commentTr: "Karaköy'de bol soğanlı ve sarımsaklı zeytinyağlı patlıcan dolması.", commentEn: "Traditional cold stuffed eggplant with plenty of onions and garlic in Karaköy." },
    { name: "Kardeşler Lokantası (Kemerburgaz)", rating: 4.5, reviewCount: 1600, area: "Kemerburgaz", commentTr: "Kemerburgaz'da odun ateşinde ağır ağır pişen zeytinyağlı imam bayıldı lezzeti.", commentEn: "Wood-fired slow-cooked olive oil eggplant specialty in Kemerburgaz." }
  ],
  "Falafel Dürüm": [
    { name: "Falafel Tyros (Kadıköy)", rating: 4.5, reviewCount: 1400, area: "Kadıköy", commentTr: "Kadıköy'de Lübnan usulü çıtır falafel köfteleri ve vegan tahin soslu dürümler.", commentEn: "Lebanese style crispy falafel wraps with vegan tahini dressing in Kadıköy." },
    { name: "Tahin (Karaköy)", rating: 4.4, reviewCount: 980, area: "Karaköy", commentTr: "Karaköy'de taze falafel, humus ve turşularla hazırlanan doyurucu vegan dürüm.", commentEn: "Filling vegan wrap prepared in Karaköy with hot falafel, hummus, and pickles." },
    { name: "Habibi Falafel (Beşiktaş)", rating: 4.3, reviewCount: 650, area: "Beşiktaş", commentTr: "Beşiktaş'ta çıtır çıtır nohut köfteleri ve taze yeşilliklerle dolu vegan lezzet.", commentEn: "Vegan street food loaded with crispy chickpea balls and fresh greens in Beşiktaş." }
  ],
  "Zeytinyağlı Enginar": [
    { name: "Balmumu Lokanta (Ahmet Güzelyağdöken)", rating: 4.6, reviewCount: 850, area: "Şişli", commentTr: "Ege zeytinyağlıları uzmanı şeften portakallı ve dereotlu taze enginar göbekleri.", commentEn: "Fresh artichoke cups dressed in olive oil, orange juice, and fresh dill by an Aegean chef." },
    { name: "Kısmet Lokantası", rating: 4.5, reviewCount: 1950, area: "Şişli", commentTr: "Şişli'de mevsiminde taze ayıklanmış bezelye ve havuçlu zeytinyağlı enginar.", commentEn: "Olive oil artichoke topped with seasonal green peas and carrots in Şişli." },
    { name: "L'agora Lokantası", rating: 4.4, reviewCount: 620, area: "Beyoğlu", commentTr: "Beyoğlu'nda sızma zeytinyağı ile hafif ateşte pişmiş sağlıklı enginar yemeği.", commentEn: "Healthy artichoke dish simmered gently with extra virgin olive oil in Beyoğlu." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Helvetia (Asmalımescit)", rating: 4.4, reviewCount: 950, area: "Beyoğlu", commentTr: "Beyoğlu'nda havuç ve limon sosuyla pişirilmiş geleneksel zeytinyağlı pırasa.", commentEn: "Traditional olive oil leeks cooked with carrots and lemon sauce in Beyoğlu." },
    { name: "Hacı Abdullah Lokantası", rating: 4.5, reviewCount: 2800, area: "Beyoğlu", commentTr: "Beyoğlu'nda saray usulü pirinçli ve zeytinyağlı nefis pırasa.", commentEn: "Palace style leeks with rice and olive oil in Beyoğlu." },
    { name: "Balkan Lokantası", rating: 4.2, reviewCount: 3800, area: "Beşiktaş", commentTr: "Beşiktaş'ta bütçe dostu ve son derece hafif esnaf usulü pırasa yemeği.", commentEn: "Affordable and light local diner style leeks dish in Beşiktaş." }
  ],
  "Humus": [
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de kaliteli tahin, sarımsak ve zeytinyağı ile hazırlanan tereyağsız soğuk humus.", commentEn: "Cold butter-free hummus prepared with quality tahini, garlic, and olive oil in Kadıköy." },
    { name: "Meze By Lemon Tree", rating: 4.5, reviewCount: 1600, area: "Beyoğlu", commentTr: "Beyoğlu'nda pürüzsüz dokulu, kimyonlu ve sızma zeytinyağlı gurme humus tabağı.", commentEn: "Gourmet hummus plate with smooth texture, cumin, and virgin olive oil in Beyoğlu." },
    { name: "Duble Mezze Bar", rating: 4.6, reviewCount: 2200, area: "Pera", commentTr: "Pera manzarası eşliğinde sunulan limon ve tahini tam kıvamında soğuk humus.", commentEn: "Chilled hummus with perfectly balanced tahini and lemon flavors, served with Pera views." }
  ],
  "Ezogelin Çorbası": [
    { name: "Karaköy Lokantası", rating: 4.6, reviewCount: 4200, area: "Karaköy", commentTr: "Karaköy'de esnaf usulü, tereyağsız ve bol naneli sıcak ezogelin çorbası.", commentEn: "Warm ezogelin soup prepared in Karaköy without butter, heavy on dried mint." },
    { name: "Tarihi Karaköy Çorbacısı", rating: 4.4, reviewCount: 1200, area: "Karaköy", commentTr: "Karaköy'de günün her saati bulabileceğiniz sıcak ve lezzetli bitkisel yağlı çorba.", commentEn: "Warm and delicious vegetable oil soup available at all hours in Karaköy." },
    { name: "Balkan Lokantası", rating: 4.2, reviewCount: 3800, area: "Beşiktaş", commentTr: "Beşiktaş'ta hızlı servis edilen, doyurucu ve vegan dostu klasik ezogelin.", commentEn: "Quickly served, filling and vegan friendly classic ezogelin soup in Beşiktaş." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Hünkar", rating: 4.6, reviewCount: 3100, area: "Nişantaşı", commentTr: "Nişantaşı'nda portakal ve ayva dilimleriyle zenginleştirilmiş saray usulü kereviz.", commentEn: "Palace style celery dish enriched with orange and quince slices in Nişantaşı." },
    { name: "Hacı Abdullah Lokantası", rating: 4.5, reviewCount: 2800, area: "Beyoğlu", commentTr: "Beyoğlu'nda taze dereotu ve sızma zeytinyağlı, tam kıvamında kereviz.", commentEn: "Perfect celery with fresh dill and extra virgin olive oil in Beyoğlu." },
    { name: "Tarihi Karaköy Lokantası", rating: 4.6, reviewCount: 3200, area: "Karaköy", commentTr: "Karaköy'de hafif zeytinyağlı mezeler arasında öne çıkan havuçlu kereviz.", commentEn: "Celery with carrots, a top pick among light olive oil appetizers in Karaköy." }
  ],
  "Şakşuka": [
    { name: "Helvetia", rating: 4.4, reviewCount: 950, area: "Beyoğlu", commentTr: "Beyoğlu'nda köz/kızarmış patlıcan ve taze sarımsaklı domates soslu şakşuka.", commentEn: "Eggplant appetizer with fresh garlic tomato sauce in Beyoğlu." },
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de zeytinyağı ve taze biberlerle harmanlanmış enfes şakşuka lezzeti.", commentEn: "Delicious eggplant appetizer tossed with olive oil and bell peppers in Kadıköy." },
    { name: "Zencefil Cafe", rating: 4.5, reviewCount: 1800, area: "Beyoğlu", commentTr: "Beyoğlu'nda sağlıklı sebzeli mezeler arayanlar için fırınlanmış patlıcanlı şakşuka.", commentEn: "Baked eggplant appetizer with tomato sauce in Beyoğlu's cozy cafe." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Balkan Lokantası", rating: 4.2, reviewCount: 3800, area: "Beşiktaş", commentTr: "Beşiktaş'ta bitkisel yağla kavrulmuş, protein deposu mercimekli bulgur pilavı.", commentEn: "High-protein bulgur wheat pilaf cooked with lentils and vegetable oil in Beşiktaş." },
    { name: "Nato Lokantası", rating: 4.4, reviewCount: 920, area: "Karaköy", commentTr: "Karaköy'de esnaf usulü, karamelize soğanlı mercimekli başbaşı bulgurlu pilav.", commentEn: "Artisan diner style bulgur wheat pilaf with lentils and caramelized onions in Karaköy." },
    { name: "Kardeşler Lokantası", rating: 4.5, reviewCount: 1600, area: "Kemerburgaz", commentTr: "Kemerburgaz'da taş fırın yemeklerinin yanında sunulan zeytinyağlı leziz bulgur.", commentEn: "Delicious bulgur pilaf cooked with olive oil, served in Kemerburgaz." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "Bi Nevi Deli", rating: 4.7, reviewCount: 1100, area: "Etiler", commentTr: "Etiler'de organik Akdeniz yeşillikleri, avokado ve chia tohumlu özel vegan salata.", commentEn: "Special vegan salad in Etiler with organic Mediterranean greens, avocado, and chia seeds." },
    { name: "Healin Foods", rating: 4.6, reviewCount: 1100, area: "Teşvikiye", commentTr: "Teşvikiye'de sızma zeytinyağlı ve taze sıkılmış limon soslu çıtır yeşillikler.", commentEn: "Crispy greens with extra virgin olive oil and fresh lemon juice dressing in Teşvikiye." },
    { name: "Plus Kitchen", rating: 4.4, reviewCount: 620, area: "Zincirlikuyu", commentTr: "Zorlu Center'da taze nar taneleri ve ceviz içiyle süslenmiş Akdeniz salatası.", commentEn: "Mediterranean salad garnished with fresh pomegranate seeds and walnuts at Zorlu Center." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Bi Nevi Deli", rating: 4.7, reviewCount: 1100, area: "Etiler", commentTr: "Etiler'de yağsız fırınlanmış çıtır patatesler, ev yapımı vegan mayonez eşliğinde.", commentEn: "Oil-free baked crispy potatoes served with homemade vegan mayo in Etiler." },
    { name: "JBurger (Vegan Menü)", rating: 4.5, reviewCount: 2200, area: "Çiftehavuzlar", commentTr: "Çiftehavuzlar'da vegan hamburgerlerin yanına baharatlı elma dilim patatesler.", commentEn: "Spiced potato wedges served alongside vegan burgers in Çiftehavuzlar." },
    { name: "Kırıntı", rating: 4.3, reviewCount: 3100, area: "Moda", commentTr: "Moda'da taze kekik ve sarımsak tozuyla tatlandırılmış fırınlanmış patates sepeti.", commentEn: "Baked potato basket seasoned with fresh thyme and garlic powder in Moda." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Hünkar Nişantaşı", rating: 4.6, reviewCount: 3100, area: "Nişantaşı", commentTr: "Nişantaşı'nda taze dereotu ve sızma zeytinyağı ile dinlendirilmiş soğuk iç bakla mezesi.", commentEn: "Cold broad bean appetizer rested with fresh dill and virgin olive oil in Nişantaşı." },
    { name: "Hacı Abdullah Lokantası", rating: 4.5, reviewCount: 2800, area: "Beyoğlu", commentTr: "Beyoğlu'nda enginar yatağında sunulan geleneksel zeytinyağlı iç bakla.", commentEn: "Traditional olive oil broad beans served on top of artichoke cups in Beyoğlu." },
    { name: "Pandeli Restaurant", rating: 4.6, reviewCount: 4100, area: "Eminönü", commentTr: "Eminönü'nde tarihi atmosferde limon ve zeytinyağı sosuyla sunulan bakla yemeği.", commentEn: "Broad beans dish served with fresh lemon and olive oil dressing in Eminönü." }
  ],
  "Muhammara / Acuka": [
    { name: "Çiya Sofrası", rating: 4.6, reviewCount: 8200, area: "Kadıköy", commentTr: "Kadıköy'de ceviz parçaları, kimyon ve nar ekşisiyle yoğrulmuş Halep usulü muhammara.", commentEn: "Aleppo-style muhammara kneaded with walnut pieces, cumin, and pomegranate molasses." },
    { name: "Köşkeroğlu", rating: 4.4, reviewCount: 3200, area: "Karaköy", commentTr: "Karaköy'de sıcak tırnak pideyle servis edilen taze cevizli acuka ezmesi.", commentEn: "Fresh walnut acuka paste served with warm flatbread in Karaköy." },
    { name: "Mabeyin", rating: 4.5, reviewCount: 1800, area: "Kısıklı", commentTr: "Kısıklı'da Güneydoğu mutfağının en taze baharatlarıyla harmanlanmış acuka ikramı.", commentEn: "Acuka spread mixed with the freshest southeastern spices in Kısıklı." }
  ],
  "Mantarlı Sote": [
    { name: "Bi Nevi Deli", rating: 4.7, reviewCount: 1100, area: "Etiler", commentTr: "Etiler'de istiridye mantarı, taze kekik ve soya sosuyla sotelenmiş leziz vegan öğün.", commentEn: "Delicious vegan meal featuring oyster mushrooms sautéed with fresh thyme and soy sauce." },
    { name: "Zencefil Cafe", rating: 4.5, reviewCount: 1800, area: "Beyoğlu", commentTr: "Beyoğlu'nda renkli dolmalık biberler ve zeytinyağı ile pişirilmiş mantar sote.", commentEn: "Mushroom sauté cooked with colorful bell peppers and olive oil in Beyoğlu." },
    { name: "Helvetia", rating: 4.4, reviewCount: 950, area: "Beyoğlu", commentTr: "Beyoğlu'nda esnaf usulü, az yağlı ve bol kekikli ev tipi mantar sote yemeği.", commentEn: "Home-style mushroom sauté with light oil and plenty of oregano in Beyoğlu." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Develi Kebap", rating: 4.5, reviewCount: 5200, area: "Florya", commentTr: "Florya'da meşe odunu kömüründe pişmiş patlıcanların zeytinyağlı sıcak ezmesi.", commentEn: "Warm mash of charcoal-roasted eggplants seasoned with olive oil in Florya." },
    { name: "Sur Ocakbaşı", rating: 4.4, reviewCount: 1950, area: "Fatih", commentTr: "Fatih'te közlenmiş domates ve biberlerle zenginleştirilmiş etsiz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash enriched with grilled tomatoes and peppers in Fatih." },
    { name: "Ali Ocakbaşı", rating: 4.5, reviewCount: 2800, area: "Karaköy", commentTr: "Karaköy'de boğaz manzarası eşliğinde sunulan sarımsaklı köz patlıcan ezmesi.", commentEn: "Garlicky fire-roasted eggplant mash served with Bosphorus views in Karaköy." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Zencefil Cafe", rating: 4.5, reviewCount: 1800, area: "Beyoğlu", commentTr: "Beyoğlu'nda el yapımı yumurtasız erişte, zeytinyağı ve ceviz parçalarıyla kavrulmuş.", commentEn: "Handmade egg-free noodles tossed with olive oil and walnuts in Beyoğlu." },
    { name: "Karaköy Lokantası", rating: 4.6, reviewCount: 4200, area: "Karaköy", commentTr: "Karaköy'de tereyağsız sos ve taze nane yapraklarıyla sunulan leziz erişte.", commentEn: "Delicious noodles served with oil-based sauce and fresh mint leaves in Karaköy." },
    { name: "Helvetia", rating: 4.4, reviewCount: 950, area: "Beyoğlu", commentTr: "Beyoğlu'nda ev yapımı sıcak salçalı sosla kavrulmuş pratik vegan makarna.", commentEn: "Vegan noodles roasted with warm homemade tomato paste sauce in Beyoğlu." }
  ]
};

export const VEGAN_IZMIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Adil Müftüoğlu - Uğur Lokantası", rating: 4.6, reviewCount: 1950, area: "Konak", commentTr: "Konak'ta yarım asırlık esnaf lokantasında kuş üzümlü ve zeytinyağlı nefis yaprak sarması.", commentEn: "Delicious stuffed grape leaves with currants and olive oil at Konak's historic local diner." },
    { name: "Bizim Lokanta (Kemeraltı)", rating: 4.5, reviewCount: 2200, area: "Kemeraltı", commentTr: "Kemeraltı Çarşısı'nda geleneksel zeytinyağlıların en lezzetlisi, incecik sarılmış asma yaprakları.", commentEn: "Thinly wrapped grape leaves, the finest traditional olive oil dish in Kemeraltı Bazaar." },
    { name: "Mahfel Esnaf Lokantası", rating: 4.4, reviewCount: 880, area: "Bornova", commentTr: "Bornova'da ev yemeği kalitesinde sunulan ekşili ve zeytinyağlı yaprak sarması.", commentEn: "Sour and olive oil stuffed grape leaves served with home-cooked quality in Bornova." }
  ],
  "Kısır": [
    { name: "Defne Yaprağı Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Karşıyaka", commentTr: "Karşıyaka'da bol yeşillikli, nar ekşili ve zeytinyağlı nefis ege usulü kısır.", commentEn: "Delicious Aegean style bulgur salad with fresh greens and pomegranate molasses in Karşıyaka." },
    { name: "Ege Sofrası", rating: 4.3, reviewCount: 520, area: "Alsancak", commentTr: "Alsancak'ta günlük taze hazırlanan, zeytinyağı ve baharat dengesi mükemmel kısır.", commentEn: "Bulgur salad with perfect balance of olive oil and spices, prepared fresh daily in Alsancak." },
    { name: "Tarihi Kemeraltı Esnaf Lokantası", rating: 4.5, reviewCount: 1100, area: "Kemeraltı", commentTr: "Kemeraltı'nda geleneksel esnaf usulü hazırlanan ekşili ve leziz kısır tabağı.", commentEn: "Sour and tasty local bulgur salad plate prepared in Kemeraltı." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (Alsancak)", rating: 4.2, reviewCount: 680, area: "Alsancak", commentTr: "Alsancak'ta hızlı ve lezzetli vegan çiğ köfte dürümleri ve marul ikramları.", commentEn: "Quick and delicious vegan cig kofte wraps with lettuce sides in Alsancak." },
    { name: "Komagene Çiğ Köfte (Bornova)", rating: 4.3, reviewCount: 920, area: "Bornova", commentTr: "Bornova'da ceviz ve badem ezmeli bitkisel harçlı doyurucu vegan dürümler.", commentEn: "Filling vegan cig kofte wraps with walnut and almond nut paste in Bornova." },
    { name: "Battalbey Çiğ Köfte (Buca)", rating: 4.1, reviewCount: 540, area: "Buca", commentTr: "Buca'da bütçe dostu, bol yeşillikli ve nar ekşili pratik vegan çiğ köfte.", commentEn: "Budget-friendly, quick vegan cig kofte with fresh greens in Buca." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Kısmet Lokantası", rating: 4.6, reviewCount: 1800, area: "Konak", commentTr: "Konak'ta havuç, patates ve sızma zeytinyağı ile dinlendirilmiş soğuk barbunya pilakisi.", commentEn: "Cold cranberry beans rested with carrots, potatoes, and extra virgin olive oil in Konak." },
    { name: "L'agora Lokantası", rating: 4.4, reviewCount: 650, area: "Kemeraltı", commentTr: "Tarihi handa zeytinyağlı barbunya keyfi. Sosu bol ve lezzeti yerinde.", commentEn: "Enjoying olive oil cranberry beans in a historic inn. Rich sauce and great taste." },
    { name: "Seçkin Lokantası", rating: 4.5, reviewCount: 920, area: "Bornova", commentTr: "Bornova'da hafif ve lezzetli zeytinyağlılar arasında en çok tercih edilen barbunya pilaki.", commentEn: "Cranberry beans, the most popular choice among light olive oil dishes in Bornova." }
  ],
  "Mercimek Çorbası": [
    { name: "Yaşam Vegan Cafe (Tamamen Vegan)", rating: 4.7, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta hayvansal bulaşı riski sıfır olan, zeytinyağı ile pişen nefis vegan mercimek.", commentEn: "Delicious vegan lentil soup cooked with olive oil, with zero risk of animal product cross-contact." },
    { name: "Roots Cafe & Botanique", rating: 4.6, reviewCount: 780, area: "Urla", commentTr: "Urla'da taze sebzeler ve bitkisel yağlarla hazırlanan hafif süzme mercimek çorbası.", commentEn: "Light strained lentil soup prepared with fresh vegetables and plant oils in Urla." },
    { name: "Çorbacı İsmet Usta (İstek Üzerine Sade)", rating: 4.5, reviewCount: 3200, area: "Konak", commentTr: "Konak'ta tereyağı eklenmeden bitkisel yağ ve limonla servis edilen sıcak mercimek.", commentEn: "Warm lentil soup served with vegetable oil and lemon without butter in Konak." }
  ],
  "İmam Bayıldı": [
    { name: "Balmumu Dükkan Lokanta", rating: 4.6, reviewCount: 880, area: "Konak", commentTr: "Konak'ta zeytinyağı ile ağır ağır fırınlanmış soğanlı patlıcan dolması imam bayıldı.", commentEn: "Traditional baked eggplant stuffed with onions and simmered in olive oil in Konak." },
    { name: "Adil Müftüoğlu - Uğur Lokantası", rating: 4.6, reviewCount: 1950, area: "Konak", commentTr: "Yarım asırlık lezzet sırrıyla hazırlanan bol domatesli zeytinyağlı patlıcan yemeği.", commentEn: "Stuffed eggplant dish prepared with plenty of tomatoes and rich olive oil in Konak." },
    { name: "Meşhur Lokantacı Kazım Usta", rating: 4.5, reviewCount: 1400, area: "Kemeraltı", commentTr: "Kemeraltı'nda zeytinyağında dinlendirilmiş soğuk klasik imam bayıldı.", commentEn: "Classic cold stuffed eggplant rested in olive oil in Kemeraltı." }
  ],
  "Falafel Dürüm": [
    { name: "Yaşam Vegan Cafe (Alsancak)", rating: 4.7, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta çıtır nohut köfteleri, ev yapımı vegan tahin sosu ve yeşilliklerle sarılmış dürüm.", commentEn: "Crispy chickpea patties wrapped with homemade vegan tahini sauce and fresh greens in Alsancak." },
    { name: "Awake Coffee & Food", rating: 4.6, reviewCount: 650, area: "Alsancak", commentTr: "Alsancak'ta fırınlanmış hafif falafel ve taze humuslu vegan dürüm tabağı.", commentEn: "Vegan wrap platter featuring light baked falafel and fresh hummus in Alsancak." },
    { name: "Less Ordinary (Atıştırmalık Menüsü)", rating: 4.5, reviewCount: 880, area: "Alsancak", commentTr: "Alsancak'ta şık ortamda humus ve avokado sosla servis edilen falafel atıştırmalığı.", commentEn: "Falafel snack served with hummus and avocado dressing in a stylish venue in Alsancak." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Defne Yaprağı Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Karşıyaka", commentTr: "Karşıyaka'da bol havuçlu, pirinçli ve limon soslu hafif zeytinyağlı pırasa.", commentEn: "Light olive oil leeks cooked with carrots, rice, and lemon sauce in Karşıyaka." },
    { name: "Mahfel Esnaf Lokantası", rating: 4.4, reviewCount: 880, area: "Bornova", commentTr: "Bornova'da hafif ve sağlıklı sebze yemekleri arayanların favori pırasa yemeği.", commentEn: "Favorite leeks dish for those looking for light and healthy vegetable options in Bornova." },
    { name: "Ömür Ev Yemekleri", rating: 4.3, reviewCount: 220, area: "Buca", commentTr: "Buca'da günlük taze pişen, zeytinyağlı ve ekşili leziz pırasa yemeği.", commentEn: "Delicious and sour leeks dish cooked fresh daily in Buca." }
  ],
  "Humus": [
    { name: "Topçu Restoran", rating: 4.5, reviewCount: 5200, area: "Alsancak", commentTr: "Alsancak'ta tereyağsız, bol zeytinyağlı ve kimyonlu soğuk humus tabağı.", commentEn: "Cold hummus plate with plenty of olive oil and cumin, served butter-free in Alsancak." },
    { name: "Tavacı Recep Usta (Alsancak - Meze Reyonu)", rating: 4.4, reviewCount: 3100, area: "Alsancak", commentTr: "Alsancak'ta et öncesi ikram edilen, pürüzsüz tahin ve sarımsak dengeli humus ezmesi.", commentEn: "Smooth hummus spread with balanced tahini and garlic, served as a starter in Alsancak." },
    { name: "Sakız Alsancak Restoran", rating: 4.6, reviewCount: 2400, area: "Alsancak", commentTr: "Kordon'da deniz manzarası eşliğinde sunulan gurme zeytinyağlı humus.", commentEn: "Gourmet olive oil hummus served with sea views on the Kordon seafront." }
  ],
  "Ezogelin Çorbası": [
    { name: "Roots Cafe & Botanique (Tamamen Vegan)", rating: 4.6, reviewCount: 780, area: "Urla", commentTr: "Urla'da tamamen bitkisel yağlar ve bakliyatlarla pişen vegan ezogelin çorbası.", commentEn: "Vegan ezogelin soup cooked entirely with vegetable oils and legumes in Urla." },
    { name: "Tarihi Kemeraltı Çorbacısı", rating: 4.4, reviewCount: 950, area: "Kemeraltı", commentTr: "Kemeraltı'nda günün her saati sıcak ve lezzetli bitkisel yağlı ezogelin.", commentEn: "Hot and delicious vegetable oil ezogelin soup available at all hours in Kemeraltı." },
    { name: "Çorba Durağı", rating: 4.3, reviewCount: 680, area: "Bornova", commentTr: "Bornova'da bol naneli ve baharatlı leziz vegan ezogelin alternatifi.", commentEn: "Tasty vegan ezogelin option seasoned with plenty of dried mint and spices in Bornova." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Balmumu Dükkan Lokanta (Ahmet Güzelyağdöken)", rating: 4.6, reviewCount: 880, area: "Konak", commentTr: "Ege otları uzmanı şeften ayvalı, portakallı ve zeytinyağlı gurme kereviz.", commentEn: "Gourmet olive oil celery with quince and orange juice by a local expert chef." },
    { name: "Reyhan Pastanesi (Hafif ve Gurme Menü)", rating: 4.7, reviewCount: 4500, area: "Alsancak", commentTr: "Alsancak'ta diyet menüsünde sunulan, taze yeşillikler ve sızma zeytinyağlı kereviz.", commentEn: "Diet-menu celery dish tossed with fresh herbs and extra virgin olive oil in Alsancak." },
    { name: "Murano's (Ege Seçenekleri)", rating: 4.5, reviewCount: 980, area: "Alsancak", commentTr: "Alsancak'ta İtalyan restoranının Ege dokunuşlu, portakal soslu fırınlanmış kerevizi.", commentEn: "Baked celery with orange sauce, an Italian dish with an Aegean twist in Alsancak." }
  ],
  "Şakşuka": [
    { name: "Meyhane Sisim", rating: 4.5, reviewCount: 1200, area: "Alsancak", commentTr: "Alsancak'ta kızarmış patlıcan ve taze sarımsaklı domates soslu nefis şakşuka.", commentEn: "Delicious fried eggplant appetizer in fresh garlic tomato sauce in Alsancak." },
    { name: "Bohem Meyhane", rating: 4.4, reviewCount: 650, area: "Bostanlı", commentTr: "Bostanlı'da zeytinyağı ile lezzetlendirilmiş taze şakşuka mezesi.", commentEn: "Fresh eggplant appetizer flavored with olive oil, served in Bostanlı." },
    { name: "Kordon Yengeç Restoran (Meze Reyonu)", rating: 4.6, reviewCount: 2200, area: "Alsancak", commentTr: "Kordon'da taze deniz mezeleri arasında sunulan hafif zeytinyağlı şakşuka.", commentEn: "Light olive oil eggplant appetizer served alongside fresh starters on the seafront." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Ege Sofrası", rating: 4.3, reviewCount: 520, area: "Alsancak", commentTr: "Alsancak'ta bitkisel yağlı yeşil mercimekli ve karamelize soğanlı bulgur pilavı.", commentEn: "Bulgur wheat pilaf with green lentils and caramelized onions in Alsancak." },
    { name: "Kardeşler Ev Yemekleri Buca", rating: 4.2, reviewCount: 380, area: "Buca", commentTr: "Buca'da öğrencilerin favorisi, doyurucu ve proteinli mercimekli bulgur pilavı.", commentEn: "Filling bulgur wheat pilaf with high-protein green lentils, popular in Buca." },
    { name: "Has Siirt Mutfağı İzmir", rating: 4.3, reviewCount: 420, area: "Konak", commentTr: "Konak'ta etsiz ızgara veya sebze yemeklerinin yanına sunulan nefis bulgur pilavı.", commentEn: "Delicious bulgur wheat pilaf served alongside meatless meals in Konak." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "Midpoint (Alsancak)", rating: 4.3, reviewCount: 3100, area: "Alsancak", commentTr: "Alsancak'ta Akdeniz yeşillikleri, cherry domatesler ve limonlu zeytinyağı soslu salata.", commentEn: "Mediterranean greens, cherry tomatoes, and lemon olive oil dressing in Alsancak." },
    { name: "Kordon Boyu Kafeleri", rating: 4.2, reviewCount: 4200, area: "Alsancak", commentTr: "Kordon sahilinde deniz havası eşliğinde sunulan çıtır Akdeniz salatası.", commentEn: "Crispy Mediterranean salad served by the sea on the Kordon promenade." },
    { name: "Bornova Küçük Park Sosyal Alanları", rating: 4.1, reviewCount: 1600, area: "Bornova", commentTr: "Bornova'da hafif soslu ve taze sebzelerle hazırlanan pratik Akdeniz salatası.", commentEn: "Fresh Mediterranean salad with light dressing served in Bornova's student district." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Yaşam Vegan Cafe", rating: 4.7, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta kekikli ve tatlı toz biberli çıtır fırın patatesler, vegan dip soslu.", commentEn: "Crispy baked potatoes with thyme and sweet paprika, served with vegan dip in Alsancak." },
    { name: "Roots Cafe & Botanique", rating: 4.6, reviewCount: 780, area: "Urla", commentTr: "Urla'da taze baharatlarla harmanlanmış sağlıklı fırınlanmış patates dilimleri.", commentEn: "Healthy baked potato wedges seasoned with fresh garden herbs in Urla." },
    { name: "Awake Coffee & Food", rating: 4.6, reviewCount: 650, area: "Alsancak", commentTr: "Alsancak'ta kahve yanına veya ana yemek yanına çıtır baharatlı patates sepeti.", commentEn: "Crispy seasoned potato basket served alongside coffee or mains in Alsancak." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Balmumu Dükkan Lokanta", rating: 4.6, reviewCount: 880, area: "Konak", commentTr: "Konak'ta enginar göbeğinde sunulan zeytinyağlı taze iç bakla ve taze dereotu.", commentEn: "Fresh broad beans served in artichoke cups, dressed in olive oil and dill in Konak." },
    { name: "Adil Müftüoğlu - Uğur Lokantası (Mevsimsel)", rating: 4.6, reviewCount: 1950, area: "Konak", commentTr: "Konak'ta mevsiminde hazırlanan taze iç bakla yemeği, tamamen bitkisel yağlı.", commentEn: "Fresh broad beans dish prepared seasonally, cooked entirely in vegetable oil in Konak." },
    { name: "Bizim Lokanta (Kemeraltı)", rating: 4.5, reviewCount: 2200, area: "Kemeraltı", commentTr: "Kemeraltı'nda zeytinyağı ve taze soğanla pişmiş nefis soğuk iç bakla mezesi.", commentEn: "Delicious cold broad beans appetizer cooked with olive oil and green onions in Kemeraltı." }
  ],
  "Muhammara / Acuka": [
    { name: "Antre Gourmet İzmir", rating: 4.5, reviewCount: 420, area: "Alsancak", commentTr: "Alsancak'ta bol cevizli, sarımsaklı ve kimyonlu gurme muhammara ezmesi.", commentEn: "Gourmet muhammara spread with plenty of walnuts, garlic, and cumin in Alsancak." },
    { name: "Alsancak Dostlar Fırını (Kahvaltı Yanı)", rating: 4.6, reviewCount: 3800, area: "Alsancak", commentTr: "Meşhur Dostlar fırınında boyoz yanına çok yakışan baharatlı vegan acuka ezmesi.", commentEn: "Spicy vegan acuka spread that pairs perfectly with warm boyoz in Alsancak." },
    { name: "Sevinç Pastanesi (Şarküteri/Meze Reyonu)", rating: 4.5, reviewCount: 2900, area: "Alsancak", commentTr: "Alsancak'ın tarihi pastanesinde meze dolabından taze cevizli acuka ezmesi.", commentEn: "Freshly made walnut acuka paste from the delicatessen counter of Alsancak's historic pastry shop." }
  ],
  "Mantarlı Sote": [
    { name: "Yaşam Vegan Cafe", rating: 4.7, reviewCount: 1100, area: "Alsancak", commentTr: "Alsancak'ta kekik, soya sosu ve sarımsak ile sotelenmiş taze istiridye mantarları.", commentEn: "Fresh oyster mushrooms sautéed with thyme, soy sauce, and garlic in Alsancak." },
    { name: "Defne Yaprağı Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Karşıyaka", commentTr: "Karşıyaka'da domates ve biber sosuyla sotelenmiş leziz kültür mantarları.", commentEn: "Delicious button mushrooms sautéed with tomato and bell pepper sauce in Karşıyaka." },
    { name: "Morisi Avlu", rating: 4.5, reviewCount: 780, area: "Alaçatı", commentTr: "Alaçatı'da avluda sunulan, zeytinyağlı ve taze dağ kekikli mantar sote.", commentEn: "Mushroom sauté with olive oil and wild mountain thyme, served in an Alaçatı courtyard." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Topçu Restoran (İstek Üzerine Etsiz)", rating: 4.5, reviewCount: 5200, area: "Alsancak", commentTr: "Alsancak'ta közlenmiş patlıcan, domates ve biberin sızma zeytinyağlı sıcak ezmesi.", commentEn: "Warm mash of fire-roasted eggplants, tomatoes, and bell peppers in Alsancak." },
    { name: "Adana Yüzevler Kebapçısı (Köz Sebze Tabakları)", rating: 4.4, reviewCount: 2800, area: "Alsancak", commentTr: "Alsancak'ta odun ateşinde közlenmiş sarımsaklı ve zeytinyağlı etsiz patlıcan.", commentEn: "Meatless roasted eggplants seasoned with garlic and olive oil in Alsancak." },
    { name: "Tarihi Altınkapı Kebap & Köfte", rating: 4.5, reviewCount: 1950, area: "Alsancak", commentTr: "Alsancak'ta geleneksel kebapçı usulü sunulan, etsiz köz sebze ezmesi tabağı.", commentEn: "Meatless roasted vegetable mash platter served in traditional kebab house style in Alsancak." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Less Ordinary", rating: 4.5, reviewCount: 880, area: "Alsancak", commentTr: "Alsancak'ta ceviz içi ve sızma zeytinyağı ile kavrulmuş el yapımı vegan erişte.", commentEn: "Handmade vegan noodles tossed with walnuts and extra virgin olive oil in Alsancak." },
    { name: "Bornova Küçük Park Kahvaltı Evleri (Özel Sipariş)", rating: 4.2, reviewCount: 540, area: "Bornova", commentTr: "Bornova'da öğrenciler için pratik, sıcak salçalı sosla kavrulmuş vegan makarna.", commentEn: "Vegan noodles roasted with warm tomato paste sauce, popular in Bornova's student area." },
    { name: "Kırçiçeği (Vejetaryen/Vegan Makarna Menüsü)", rating: 4.3, reviewCount: 3100, area: "Alsancak", commentTr: "Alsancak'ta cevizli ve bitkisel yağla kavrulmuş Karadeniz usulü vegan erişte.", commentEn: "Vegan noodles roasted with walnuts and vegetable oil in Alsancak." }
  ]
};

export const VEGAN_MERSIN_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Hacıbaba Lokantası", rating: 4.5, reviewCount: 1850, area: "Akdeniz", commentTr: "Akdeniz'de geleneksel lezzetiyle sunulan bol zeytinyağlı ve ekşili yaprak sarması.", commentEn: "Stuffed grape leaves with plenty of olive oil and lemon served in Akdeniz." },
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 920, area: "Akdeniz", commentTr: "Akdeniz'de taze asma yapraklarından günlük hazırlanan ev usulü sarmalar.", commentEn: "Home-style stuffed grape leaves prepared daily from fresh leaves in Akdeniz." },
    { name: "Evce Ev Yemekleri", rating: 4.3, reviewCount: 340, area: "Yenişehir", commentTr: "Yenişehir'de anne eli değmiş gibi lezzetli ve hafif zeytinyağlı yaprak sarması.", commentEn: "Light olive oil stuffed grape leaves that taste homemade in Yenişehir." }
  ],
  "Kısır": [
    { name: "Nar Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Mezitli", commentTr: "Mezitli'de taze yeşillikler ve ekşi nar aroması ile zenginleştirilmiş nefis kısır.", commentEn: "Delicious bulgur salad enriched with fresh greens and pomegranate juice in Mezitli." },
    { name: "Hatun Mutfak", rating: 4.3, reviewCount: 190, area: "Yenişehir", commentTr: "Yenişehir'de ev yemeği kalitesinde, tam kıvamında baharatlı ege kısırı.", commentEn: "Perfectly spiced Aegean-style bulgur salad served in Yenişehir." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Akdeniz", commentTr: "Akdeniz'de bütçe dostu, bol yeşillikli ve taze hazırlanan geleneksel kısır.", commentEn: "Traditional bulgur salad with fresh greens, prepared daily in Akdeniz." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (Pozcu)", rating: 4.2, reviewCount: 620, area: "Yenişehir", commentTr: "Pozcu'da pratik, acılı ve vegan standartlara uygun taze çiğ köfte dürümleri.", commentEn: "Fresh and spicy vegan-compliant cig kofte wraps in Pozcu." },
    { name: "Komagene Çiğ Köfte (Mezitli)", rating: 4.3, reviewCount: 880, area: "Mezitli", commentTr: "Mezitli'de kuruyemiş katkılı zengin vegan harçlı çiğ köfte dürüm çeşitleri.", commentEn: "Rich vegan-friendly cig kofte wraps featuring nut-blended paste in Mezitli." },
    { name: "Battalbey Çiğ Köfte (Çarşı)", rating: 4.1, reviewCount: 420, area: "Akdeniz", commentTr: "Akdeniz'de hızlı, bütçe dostu ve bol yeşillikli vegan çiğ köfte dürümü.", commentEn: "Quick, budget-friendly vegan cig kofte wrap with fresh greens in Akdeniz." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 850, area: "Akdeniz", commentTr: "Akdeniz'de sızma zeytinyağı ile havuç ve patatesli pişmiş barbunya pilakisi.", commentEn: "Cranberry beans cooked with carrots, potatoes, and olive oil in Akdeniz." },
    { name: "Eshab-ı Kehf Esnaf Lokantası", rating: 4.3, reviewCount: 410, area: "Tarsus", commentTr: "Tarsus'ta tarihi atmosferde sunulan zeytinyağlı taze barbunya pilakisi.", commentEn: "Fresh olive oil cranberry beans served in a historical atmosphere in Tarsus." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 320, area: "Yenişehir", commentTr: "Yenişehir'de Ege esintili hafif ve zeytinyağlı leziz barbunya tabağı.", commentEn: "Aegean style light olive oil cranberry beans served in Yenişehir." }
  ],
  "Mercimek Çorbası": [
    { name: "Veggie Mersin (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Yenişehir", commentTr: "Yenişehir'de tamamen bitkisel yağlar ve sebzelerle pişen leziz mercimek çorbası.", commentEn: "Delicious vegan lentil soup cooked with plant oils and vegetables in Yenişehir." },
    { name: "Çorbacı Şahin Usta (İstek Üzerine Sade)", rating: 4.5, reviewCount: 2200, area: "Akdeniz", commentTr: "Akdeniz'de tereyağı eklenmeden sade ve bitkisel yağlı sunulan mercimek çorbası.", commentEn: "Plain lentil soup served with only vegetable oil and no butter in Akdeniz." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 980, area: "Akdeniz", commentTr: "Akdeniz'de günün her saati sıcak ve lezzetli bitkisel yağlı ezogelin ve mercimek.", commentEn: "Hot and tasty vegetable oil lentil soup available at all hours in Akdeniz." }
  ],
  "İmam Bayıldı": [
    { name: "Hacıbaba Lokantası", rating: 4.5, reviewCount: 1850, area: "Akdeniz", commentTr: "Akdeniz'de zeytinyağı ile fırınlanmış, bol soğan ve domates dolgulu patlıcan.", commentEn: "Baked eggplant stuffed with onions and tomatoes in rich olive oil in Akdeniz." },
    { name: "Hatun Mutfak", rating: 4.4, reviewCount: 290, area: "Yenişehir", commentTr: "Yenişehir'de ev yemeği titizliğiyle hazırlanan zeytinyağlı imam bayıldı.", commentEn: "Meticulously prepared olive oil stuffed eggplant served in Yenişehir." },
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 920, area: "Akdeniz", commentTr: "Akdeniz'de geleneksel usulde dinlendirilmiş soğuk klasik imam bayıldı.", commentEn: "Classic cold stuffed eggplant rested in traditional style in Akdeniz." }
  ],
  "Falafel Dürüm": [
    { name: "Veggie Mersin", rating: 4.7, reviewCount: 850, area: "Yenişehir", commentTr: "Yenişehir'de bitkisel lavaş ve vegan tahin sosla sunulan çıtır falafel dürümü.", commentEn: "Crispy falafel wrap served with vegan flatbread and tahini sauce in Yenişehir." },
    { name: "David People Coffee & Food (Atıştırmalık Menüsü)", rating: 4.4, reviewCount: 750, area: "Yenişehir", commentTr: "Yenişehir'de taze humus ve falafel köfteleriyle hazırlanan doyurucu tabak.", commentEn: "Satisfying plate featuring fresh hummus and falafel balls in Yenişehir." },
    { name: "Arabica Coffee House (Vegan Sandviç Seçenekleri)", rating: 4.3, reviewCount: 920, area: "Yenişehir", commentTr: "Yenişehir'de kahve yanına tercih edilebilecek falafelli ve sebzeli vegan sandviçler.", commentEn: "Vegan sandwiches with falafel and vegetables, perfect with coffee in Yenişehir." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Evce Ev Yemekleri", rating: 4.3, reviewCount: 340, area: "Yenişehir", commentTr: "Yenişehir'de havuçlu, pirinçli ve bol limonlu hafif pırasa yemeği.", commentEn: "Light leeks dish cooked with carrots, rice, and plenty of lemon in Yenişehir." },
    { name: "Nar Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Mezitli", commentTr: "Mezitli'de günlük taze pişen zeytinyağlı ve diyet dostu pırasa seçeneği.", commentEn: "Diet-friendly olive oil leeks option cooked fresh daily in Mezitli." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Yenişehir", commentTr: "Yenişehir'de hafif sebze yemeği arayanlar için zeytinyağlı taze pırasa.", commentEn: "Fresh olive oil leeks for those looking for a light veggie meal in Yenişehir." }
  ],
  "Humus": [
    { name: "Sini Restoran (Meze Reyonu)", rating: 4.5, reviewCount: 1400, area: "Yenişehir", commentTr: "Yenişehir'de tahini bol ve tereyağsız soğuk zeytinyağlı humus mezesi.", commentEn: "Cold olive oil hummus appetizer with rich tahini, served butter-free in Yenişehir." },
    { name: "Hasan Kolcuoğlu (Marina - İkram ve Meze Bölümü)", rating: 4.4, reviewCount: 2200, area: "Yenişehir", commentTr: "Marinada et öncesi sunulan pürüzsüz kıvamlı ve zeytinyağlı humus ezmesi.", commentEn: "Smooth olive oil hummus spread served as a starter at the Marina." },
    { name: "Baaba Kebap & Meze", rating: 4.5, reviewCount: 950, area: "Pozcu", commentTr: "Pozcu'da taze kimyon ve zeytinyağı ile harmanlanmış vegan humus tabağı.", commentEn: "Vegan hummus plate blended with fresh cumin and olive oil in Pozcu." }
  ],
  "Ezogelin Çorbası": [
    { name: "Veggie Mersin (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Yenişehir", commentTr: "Yenişehir'de bakliyatlar ve nane ile bitkisel yağda pişen vegan ezogelin çorbası.", commentEn: "Vegan ezogelin soup cooked with legumes and mint in vegetable oil in Yenişehir." },
    { name: "Paçacı Şemsi Mersin", rating: 4.4, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir'de tereyağı kullanılmadan bitkisel yağla hazırlanan sıcak ezogelin.", commentEn: "Warm ezogelin soup prepared with vegetable oil instead of butter in Yenişehir." },
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 2200, area: "Akdeniz", commentTr: "Akdeniz'de bol baharatlı ve sıcak esnaf usulü vegan dostu ezogelin çorbası.", commentEn: "Spicy and warm vegan-friendly ezogelin soup in local style in Akdeniz." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Sarnıç Cafe Bistro (Mevsimsel Gurme Menü)", rating: 4.5, reviewCount: 1600, area: "Yenişehir", commentTr: "Yenişehir'de portakal suyuyla pişirilmiş, ayva dilimli hafif kereviz.", commentEn: "Light celery dish cooked with orange juice and quince slices in Yenişehir." },
    { name: "Nar Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Mezitli", commentTr: "Mezitli'de taze dereotu ve sızma zeytinyağlı sağlıklı kereviz yemeği.", commentEn: "Healthy celery dish with fresh dill and extra virgin olive oil in Mezitli." },
    { name: "Wo-Wo Brasserie (Hafif ve Bitkisel Tabaklar)", rating: 4.6, reviewCount: 1400, area: "Yenişehir", commentTr: "Yenişehir'de gurme sunumuyla portakallı ve zeytinyağlı kereviz dilimleri.", commentEn: "Gourmet sliced celery cooked with orange juice and olive oil in Yenişehir." }
  ],
  "Şakşuka": [
    { name: "Sandal Meyhanesi (Meze Reyonu)", rating: 4.5, reviewCount: 920, area: "Pozcu", commentTr: "Pozcu'da kızarmış patlıcan ve taze sarımsaklı domates soslu nefis şakşuka mezesi.", commentEn: "Delicious fried eggplant appetizer in fresh garlic tomato sauce in Pozcu." },
    { name: "Merada Meyhane", rating: 4.4, reviewCount: 650, area: "Yenişehir", commentTr: "Yenişehir'de sızma zeytinyağı ile tatlandırılmış geleneksel şakşuka.", commentEn: "Traditional eggplant appetizer flavored with extra virgin olive oil in Yenişehir." },
    { name: "Şerefe Meyhane", rating: 4.3, reviewCount: 480, area: "Yenişehir", commentTr: "Yenişehir'de taze domates soslu ve bol sarımsaklı soğuk şakşuka mezesi.", commentEn: "Cold eggplant starter with fresh tomato sauce and plenty of garlic in Yenişehir." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Akdeniz", commentTr: "Akdeniz'de yeşil mercimekli ve bitkisel yağlı doyurucu bulgur pilavı.", commentEn: "Hearty bulgur wheat pilaf cooked with green lentils and vegetable oil in Akdeniz." },
    { name: "Sofra Ev Yemekleri", rating: 4.3, reviewCount: 220, area: "Akdeniz", commentTr: "Akdeniz'de esnaf usulü karamelize soğanlı ve mercimekli bulgur pilavı.", commentEn: "Artisan style bulgur pilaf with green lentils and caramelized onions in Akdeniz." },
    { name: "Lezzet Ambarı", rating: 4.4, reviewCount: 310, area: "Yenişehir", commentTr: "Yenişehir'de ev yemeği tadında sunulan lif ve protein deposu bulgur pilavı.", commentEn: "High-fiber and high-protein bulgur pilaf with home-cooked taste in Yenişehir." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "BigChefs (Marina)", rating: 4.4, reviewCount: 3200, area: "Yenişehir", commentTr: "Marina şubesinde çıtır Akdeniz yeşillikleri ve zeytinyağlı limon soslu taze salata.", commentEn: "Fresh Mediterranean greens with olive oil lemon dressing at the Marina branch." },
    { name: "Midpoint (Marina)", rating: 4.3, reviewCount: 2800, area: "Yenişehir", commentTr: "Marinada deniz esintisi eşliğinde sunulan doyurucu Akdeniz salatası.", commentEn: "Satisfying Mediterranean salad served with a sea breeze at the Marina." },
    { name: "Mersin Sahil Şeridi Sosyal Alan Cafeleri", rating: 4.2, reviewCount: 1500, area: "Yenişehir", commentTr: "Mersin sahilinde hafif zeytinyağlı soslu ve taze sebzeli pratik salata.", commentEn: "Fresh vegetable salad dressed with light olive oil sauce on the Mersin coast." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Crop Coffee Co. Mersin", rating: 4.6, reviewCount: 780, area: "Yenişehir", commentTr: "Yenişehir'de taze kekik ve toz biberle harmanlanmış çıtır fırın patatesler.", commentEn: "Crispy baked potatoes seasoned with fresh thyme and paprika in Yenişehir." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.4, reviewCount: 520, area: "Yenişehir", commentTr: "Yenişehir'de kahve yanına sunulan hafif fırınlanmış patates dilimleri.", commentEn: "Lightly baked potato wedges served alongside coffee in Yenişehir." },
    { name: "David People Coffee & Food", rating: 4.4, reviewCount: 750, area: "Yenişehir", commentTr: "Yenişehir'de baharatlarla zenginleştirilmiş çıtır fırınlanmış patates tabağı.", commentEn: "Crispy baked potato platter enriched with garden spices in Yenişehir." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Nar Ev Yemekleri (Mevsimsel)", rating: 4.4, reviewCount: 280, area: "Mezitli", commentTr: "Mezitli'de mevsiminde hazırlanan taze dereotu ve sızma zeytinyağlı iç bakla.", commentEn: "Fresh broad beans with dill and extra virgin olive oil prepared seasonally in Mezitli." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 320, area: "Yenişehir", commentTr: "Yenişehir'de zeytinyağlı sebzeler arasında popüler olan yoğurtsuz iç bakla.", commentEn: "Plant-based broad beans served without yogurt, popular in Yenişehir." },
    { name: "Anaeli Mutfak", rating: 4.5, reviewCount: 480, area: "Yenişehir", commentTr: "Yenişehir'de ev yemeği sıcaklığında sunulan zeytinyağlı taze iç bakla.", commentEn: "Fresh olive oil broad beans served with home-cooked warmth in Yenişehir." }
  ],
  "Muhammara / Acuka": [
    { name: "Polat Pastanesi (Kahvaltı/Şarküteri Reyonu)", rating: 4.4, reviewCount: 1100, area: "Yenişehir", commentTr: "Yenişehir'de cevizli ve kimyonlu leziz kahvaltılık acuka ezmesi.", commentEn: "Delicious breakfast acuka spread with walnuts and cumin in Yenişehir." },
    { name: "Kerebiççi Oğuz (Yöresel İkram ve Ezmeler)", rating: 4.5, reviewCount: 2650, area: "Yenişehir", commentTr: "Yenişehir'de kerebiç öncesi ikram edilen hafif acılı ve cevizli acuka ezmesi.", commentEn: "Mildly spicy and walnut-loaded acuka spread served as an appetizer in Yenişehir." },
    { name: "Meram Pastanesi", rating: 4.3, reviewCount: 780, area: "Akdeniz", commentTr: "Akdeniz'de şarküteri bölümünden taze ceviz parçalı muhammara ezmesi.", commentEn: "Fresh muhammara spread with walnut pieces from the delicatessen counter in Akdeniz." }
  ],
  "Mantarlı Sote": [
    { name: "Veggie Mersin", rating: 4.7, reviewCount: 850, area: "Yenişehir", commentTr: "Yenişehir'de soya sosu ve sarımsakla sotelenmiş taze istiridye mantarları.", commentEn: "Fresh oyster mushrooms sautéed with soy sauce and garlic in Yenişehir." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Yenişehir", commentTr: "Yenişehir'de az yağlı ve renkli biberli leziz kültür mantarı sotesi.", commentEn: "Delicious button mushroom sauté with light oil and bell peppers in Yenişehir." },
    { name: "Sarnıç Cafe Bistro", rating: 4.5, reviewCount: 1600, area: "Yenişehir", commentTr: "Yenişehir'de zengin baharatlar ve zeytinyağı ile pişen mantarlı sıcak sote.", commentEn: "Warm mushroom sauté cooked with olive oil and aromatic spices in Yenişehir." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Göksel Restoran (İstek Üzerine Etsiz Köz Sebze Tabağı)", rating: 4.5, reviewCount: 7250, area: "Yenişehir", commentTr: "Mersin sahilinde közlenmiş patlıcan ve biberlerin sıcak zeytinyağlı ezmesi.", commentEn: "Warm mash of fire-roasted eggplants and bell peppers in olive oil on the seafront." },
    { name: "Emin Ocakbaşı (Közlenmiş Sebze Şöleni)", rating: 4.4, reviewCount: 1100, area: "Pozcu", commentTr: "Pozcu'da odun ateşinde közlenmiş sarımsaklı ve zeytinyağlı etsiz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash seasoned with garlic and olive oil in Pozcu." },
    { name: "Sini Restoran", rating: 4.5, reviewCount: 1400, area: "Yenişehir", commentTr: "Yenişehir'de kebap baharatları ile taş fırında közlenmiş patlıcan ezmesi.", commentEn: "Fire-roasted eggplant mash seasoned with kebab spices in Yenişehir." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Anaeli Mutfak", rating: 4.5, reviewCount: 480, area: "Yenişehir", commentTr: "Yenişehir'de ceviz içi ve bitkisel yağ ile kavrulmuş ev yapımı vegan erişte.", commentEn: "Homemade vegan noodles tossed with walnuts and vegetable oil in Yenişehir." },
    { name: "Keyifli Mutfak", rating: 4.3, reviewCount: 210, area: "Mezitli", commentTr: "Mezitli'de taze domates sosuyla kavrulmuş pratik vegan erişte yemeği.", commentEn: "Vegan noodles roasted with fresh tomato sauce in Mezitli." },
    { name: "Crop Coffee Co. (Vegan/Vejetaryen Makarna İstekleri)", rating: 4.6, reviewCount: 780, area: "Yenişehir", commentTr: "Yenişehir'de sızma zeytinyağı ve taze nane yaprakları ile sunulan leziz erişte.", commentEn: "Delicious noodles served with extra virgin olive oil and fresh mint in Yenişehir." }
  ]
};

export const VEGAN_GAZIANTEP_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.6, reviewCount: 2200, area: "Şahinbey", commentTr: "Şahinbey'de Güneydoğu esintili zeytinyağlı ve ekşili nefis yaprak sarması.", commentEn: "Delicious stuffed grape leaves with olive oil and lemon in Şahinbey." },
    { name: "Aşina Gaziantep Mutfağı", rating: 4.5, reviewCount: 1800, area: "Şehitkamil", commentTr: "Şehitkamil'de taze asma yapraklarından günlük hazırlanan ev usulü sarmalar.", commentEn: "Home-style stuffed grape leaves prepared daily from fresh leaves in Şehitkamil." },
    { name: "Gaziantep Esnaf Lokantası", rating: 4.3, reviewCount: 380, area: "Şahinbey", commentTr: "Şahinbey'de bütçe dostu, tam kıvamında lezzetli zeytinyağlı yaprak sarması.", commentEn: "Budget-friendly, tasty olive oil stuffed grape leaves in Şahinbey." }
  ],
  "Kısır": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 210, area: "Şehitkamil", commentTr: "Şehitkamil'de taze yeşillikler ve nar ekşisiyle hazırlanan nefis kısır.", commentEn: "Delicious bulgur salad prepared with fresh greens and pomegranate molasses in Şehitkamil." },
    { name: "Şefin Mutfağı Gaziantep", rating: 4.3, reviewCount: 150, area: "Şahinbey", commentTr: "Şahinbey'de ev yemeği sıcaklığında sunulan baharatı tam kıvamında Antep kısırı.", commentEn: "Antep-style bulgur salad with perfectly balanced spices in Şahinbey." },
    { name: "Teras Ev Yemekleri", rating: 4.2, reviewCount: 90, area: "Şehitkamil", commentTr: "Şehitkamil'de hafif ekşili ve taze nane yapraklarıyla hazırlanan pratik kısır.", commentEn: "Fresh bulgur salad with fresh mint leaves and a light sour taste in Şehitkamil." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (İbrahimli)", rating: 4.2, reviewCount: 540, area: "Şehitkamil", commentTr: "İbrahimli'de hızlı, acılı ve tamamen vegan uyumlu taze çiğ köfte dürümleri.", commentEn: "Spicy and fully vegan-compliant fresh cig kofte wraps in İbrahimli." },
    { name: "Komagene Çiğ Köfte (Yeditepe)", rating: 4.3, reviewCount: 780, area: "Şahinbey", commentTr: "Yeditepe'de öğrenciler için doyurucu kuruyemiş katkılı vegan çiğ köfte dürümleri.", commentEn: "Satisfying vegan cig kofte wraps featuring nut-blended paste in Yeditepe." },
    { name: "Battalbey Çiğ Köfte (Üniversite)", rating: 4.1, reviewCount: 650, area: "Şahinbey", commentTr: "Üniversite yakınında hızlı, bütçe dostu ve bol yeşillikli vegan çiğ köfte.", commentEn: "Quick, budget-friendly vegan cig kofte wrap near the university." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Adil Efendi Ev Yemekleri", rating: 4.4, reviewCount: 820, area: "Şehitkamil", commentTr: "Şehitkamil'de sızma zeytinyağı ile havuç ve patatesli pişmiş barbunya pilakisi.", commentEn: "Cranberry beans cooked with carrots, potatoes, and olive oil in Şehitkamil." },
    { name: "Yörem Ev Yemekleri", rating: 4.3, reviewCount: 290, area: "Şahinbey", commentTr: "Şahinbey'de günlük taze hazırlanan geleneksel zeytinyağlı barbunya.", commentEn: "Traditional olive oil cranberry beans prepared fresh daily in Şahinbey." },
    { name: "Bizim Mutfak Ev Yemekleri", rating: 4.2, reviewCount: 140, area: "Şehitkamil", commentTr: "Şehitkamil'de ev yemeği samimiyetiyle sunulan leziz barbunya tabağı.", commentEn: "Delicious cranberry beans plate served with home-cooked warmth in Şehitkamil." }
  ],
  "Mercimek Çorbası": [
    { name: "Veggie Gaziantep (Tamamen Vegan)", rating: 4.7, reviewCount: 620, area: "Şehitkamil", commentTr: "Şehitkamil'de tamamen bitkisel yağlar ve organik mercimekle pişen vegan çorba.", commentEn: "Vegan lentil soup cooked entirely with plant oils and organic lentils in Şehitkamil." },
    { name: "Yeşil Mutfak Cafe", rating: 4.5, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de sebze suları ve zeytinyağı ile hazırlanan hafif mercimek çorbası.", commentEn: "Light lentil soup prepared with vegetable broths and olive oil in Şahinbey." },
    { name: "Çorbacı Mahmut Usta (İstek Üzerine Sade)", rating: 4.4, reviewCount: 1450, area: "Şahinbey", commentTr: "Şahinbey'de tereyağı kullanılmadan sade ve bitkisel yağlı sunulan mercimek.", commentEn: "Plain lentil soup served with only vegetable oil and no butter in Şahinbey." }
  ],
  "İmam Bayıldı": [
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.6, reviewCount: 2200, area: "Şahinbey", commentTr: "Şahinbey'de sızma zeytinyağı ile fırınlanmış geleneksel imam bayıldı.", commentEn: "Traditional stuffed eggplant cooked with extra virgin olive oil in Şahinbey." },
    { name: "Aşina Gaziantep Mutfağı", rating: 4.5, reviewCount: 1800, area: "Şehitkamil", commentTr: "Şehitkamil'de bol domatesli ve sarımsaklı leziz zeytinyağlı patlıcan dolması.", commentEn: "Delicious stuffed eggplant with tomatoes and garlic in Şehitkamil." },
    { name: "Mutfak Sanatları Merkezi (MSM - Zeytinyağlı Büfesi)", rating: 4.6, reviewCount: 1100, area: "Şehitkamil", commentTr: "Şehitkamil'de modern sunumuyla Ege esintili hafif gurme imam bayıldı.", commentEn: "Gourmet stuffed eggplant presented beautifully in Şehitkamil." }
  ],
  "Falafel Dürüm": [
    { name: "Veggie Gaziantep", rating: 4.7, reviewCount: 620, area: "Şehitkamil", commentTr: "Şehitkamil'de taze falafel, humus ve turşularla hazırlanan nefis vegan dürüm.", commentEn: "Delicious vegan wrap prepared with hot falafel, hummus, and pickles in Şehitkamil." },
    { name: "David People Coffee & Food (Atıştırmalık Menüsü)", rating: 4.3, reviewCount: 420, area: "Şehitkamil", commentTr: "Şehitkamil'de çıtır falafel köfteleri ve soslarla servis edilen doyurucu tabak.", commentEn: "Crispy falafel balls served with sauces on a satisfying plate in Şehitkamil." },
    { name: "Arabica Coffee House (Vegan Sandviç Seçenekleri)", rating: 4.2, reviewCount: 310, area: "Şehitkamil", commentTr: "Şehitkamil'de bitkisel lavaş ve sebzelerle sunulan pratik falafel sandviçi.", commentEn: "Quick falafel sandwich served with plant-based wrap and vegetables in Şehitkamil." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 210, area: "Şehitkamil", commentTr: "Şehitkamil'de havuçlu, pirinçli ve bol limonlu hafif pırasa yemeği.", commentEn: "Light leeks dish cooked with carrots, rice, and plenty of lemon in Şehitkamil." },
    { name: "Şefin Mutfağı Gaziantep", rating: 4.3, reviewCount: 150, area: "Şahinbey", commentTr: "Şahinbey'de günlük taze pişen zeytinyağlı ve diyet dostu pırasa.", commentEn: "Diet-friendly olive oil leeks cooked fresh daily in Şahinbey." },
    { name: "Yeşil Mutfak Cafe", rating: 4.5, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de hafif sebze yemeği arayanlar için zeytinyağlı taze pırasa.", commentEn: "Fresh olive oil leeks for those looking for a light veggie meal in Şahinbey." }
  ],
  "Humus": [
    { name: "İmam Çağdaş (Meze Bölümü)", rating: 4.7, reviewCount: 9500, area: "Şahinbey", commentTr: "Şahinbey'de tereyağsız, bol sızma zeytinyağlı ve kimyonlu soğuk humus tabağı.", commentEn: "Cold hummus plate with plenty of olive oil and cumin, served butter-free in Şahinbey." },
    { name: "Sahan Restoran (Meze Reyonu)", rating: 4.5, reviewCount: 3400, area: "Şehitkamil", commentTr: "Şehitkamil'de et öncesi ikram edilen pürüzsüz tahin ve sarımsak dengeli humus ezmesi.", commentEn: "Smooth hummus spread with balanced tahini and garlic in Şehitkamil." },
    { name: "Çulcuoğlu Et Lokantası", rating: 4.4, reviewCount: 1950, area: "Şahinbey", commentTr: "Şahinbey'de zeytinyağı ve taze kimyon ile harmanlanmış vegan humus tabağı.", commentEn: "Vegan hummus plate blended with olive oil and cumin in Şahinbey." }
  ],
  "Ezogelin Çorbası": [
    { name: "Veggie Gaziantep (Tamamen Vegan)", rating: 4.7, reviewCount: 620, area: "Şehitkamil", commentTr: "Şehitkamil'de nane ve baharatlarla bitkisel yağda pişen vegan ezogelin çorbası.", commentEn: "Vegan ezogelin soup cooked with mint and spices in vegetable oil in Şehitkamil." },
    { name: "Paçacı Şemsi Gaziantep", rating: 4.4, reviewCount: 880, area: "Şehitkamil", commentTr: "Şehitkamil'de tereyağı kullanılmadan hazırlanan sıcak ezogelin çorbası.", commentEn: "Warm ezogelin soup prepared with vegetable oil instead of butter in Şehitkamil." },
    { name: "Çorbacı Mahmut Usta", rating: 4.4, reviewCount: 1450, area: "Şahinbey", commentTr: "Şahinbey'de bol baharatlı ve sıcak esnaf usulü vegan dostu ezogelin çorbası.", commentEn: "Spicy and warm vegan-friendly ezogelin soup in local style in Şahinbey." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Orkide Pastanesi (Mevsimsel Gurme Menü)", rating: 4.6, reviewCount: 2800, area: "Şehitkamil", commentTr: "Şehitkamil'de portakal suyuyla pişirilmiş, ayva dilimli hafif kereviz.", commentEn: "Light celery dish cooked with orange juice and quince slices in Şehitkamil." },
    { name: "Bayazhan Restoran (Hafif ve Bitkisel Tabaklar)", rating: 4.5, reviewCount: 1600, area: "Şehitkamil", commentTr: "Şehitkamil'de taze dereotu ve sızma zeytinyağlı sağlıklı kereviz yemeği.", commentEn: "Healthy celery dish with fresh dill and extra virgin olive oil in Şehitkamil." },
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de gurme sunumuyla portakallı ve zeytinyağlı kereviz dilimleri.", commentEn: "Gourmet sliced celery cooked with orange juice and olive oil in Şahinbey." }
  ],
  "Şakşuka": [
    { name: "Bayazhan Restoran (Meze Reyonu)", rating: 4.5, reviewCount: 1600, area: "Şehitkamil", commentTr: "Şehitkamil'de kızarmış patlıcan ve sarımsaklı domates soslu şakşuka mezesi.", commentEn: "Delicious fried eggplant appetizer in fresh garlic tomato sauce in Şehitkamil." },
    { name: "Hışvahan Meyhane", rating: 4.6, reviewCount: 1200, area: "Şahinbey", commentTr: "Tarihi handa zeytinyağı ile lezzetlendirilmiş geleneksel şakşuka.", commentEn: "Traditional eggplant appetizer flavored with extra virgin olive oil in the historic inn." },
    { name: "Şerefe Gaziantep", rating: 4.3, reviewCount: 340, area: "Şehitkamil", commentTr: "Şehitkamil'de taze domates soslu ve bol sarımsaklı soğuk şakşuka mezesi.", commentEn: "Cold eggplant starter with fresh tomato sauce and plenty of garlic in Şehitkamil." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Yesemek Gaziantep Mutfağı", rating: 4.6, reviewCount: 2200, area: "Şahinbey", commentTr: "Şahinbey'de bitkisel yağlı yeşil mercimekli ve karamelize soğanlı bulgur pilavı.", commentEn: "Bulgur wheat pilaf with green lentils and caramelized onions in Şahinbey." },
    { name: "Aşina Gaziantep Mutfağı", rating: 4.5, reviewCount: 1800, area: "Şehitkamil", commentTr: "Şehitkamil'de esnaf usulü karamelize soğanlı ve mercimekli bulgur pilavı.", commentEn: "Artisan style bulgur pilaf with green lentils and caramelized onions in Şehitkamil." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 210, area: "Şehitkamil", commentTr: "Şehitkamil'de ev yemeği tadında sunulan lif ve protein deposu bulgur pilavı.", commentEn: "High-fiber and high-protein bulgur pilaf with home-cooked taste in Şehitkamil." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "BigChefs (Gaziantep Prime Mall)", rating: 4.4, reviewCount: 1950, area: "Şehitkamil", commentTr: "Alışveriş merkezinde çıtır Akdeniz yeşillikleri ve zeytinyağlı limon soslu taze salata.", commentEn: "Fresh Mediterranean greens with olive oil lemon dressing at the shopping mall branch." },
    { name: "Cookshop (İconova)", rating: 4.5, reviewCount: 950, area: "Şehitkamil", commentTr: "İconova'da şık ortamda sunulan doyurucu Akdeniz salatası.", commentEn: "Satisfying Mediterranean salad served in a stylish venue at İconova." },
    { name: "Gaziantep Masal Parkı Sosyal Alan Cafeleri", rating: 4.2, reviewCount: 880, area: "Şahinbey", commentTr: "Masal Parkı çevresinde taze sebzelerle hazırlanan pratik salata.", commentEn: "Fresh vegetable salad dressed with olive oil sauce around Masal Park." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Crop Coffee Co. Gaziantep", rating: 4.6, reviewCount: 520, area: "Şehitkamil", commentTr: "Şehitkamil'de taze kekik ve toz biberle harmanlanmış çıtır fırın patatesler.", commentEn: "Crispy baked potatoes seasoned with fresh thyme and paprika in Şehitkamil." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.4, reviewCount: 310, area: "Şehitkamil", commentTr: "Şehitkamil'de kahve yanına sunulan hafif fırınlanmış patates dilimleri.", commentEn: "Lightly baked potato wedges served alongside coffee in Şehitkamil." },
    { name: "Grano Coffee Roastery", rating: 4.5, reviewCount: 420, area: "Şehitkamil", commentTr: "Şehitkamil'de baharatlarla zenginleştirilmiş çıtır fırınlanmış patates tabağı.", commentEn: "Crispy baked potato platter enriched with garden spices in Şehitkamil." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Yeşil Mutfak Cafe (Mevsimsel)", rating: 4.5, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de mevsiminde hazırlanan taze dereotu ve sızma zeytinyağlı iç bakla.", commentEn: "Fresh broad beans with dill and extra virgin olive oil prepared seasonally in Şahinbey." },
    { name: "Adil Efendi Ev Yemekleri", rating: 4.4, reviewCount: 820, area: "Şehitkamil", commentTr: "Şehitkamil'de zeytinyağlı sebzeler arasında popüler olan yoğurtsuz iç bakla.", commentEn: "Plant-based broad beans served without yogurt, popular in Şehitkamil." },
    { name: "Yörem Ev Yemekleri", rating: 4.3, reviewCount: 290, area: "Şahinbey", commentTr: "Şahinbey'de ev yemeği sıcaklığında sunulan zeytinyağlı taze iç bakla.", commentEn: "Fresh olive oil broad beans served with home-cooked warmth in Şahinbey." }
  ],
  "Muhammara / Acuka": [
    { name: "Orkide Pastanesi (Kahvaltı/Şarküteri Reyonu)", rating: 4.6, reviewCount: 2800, area: "Şehitkamil", commentTr: "Şehitkamil'de cevizli ve kimyonlu leziz kahvaltılık acuka ezmesi.", commentEn: "Delicious breakfast acuka spread with walnuts and cumin in Şehitkamil." },
    { name: "Akşam Pastaneleri", rating: 4.5, reviewCount: 1200, area: "Şahinbey", commentTr: "Şahinbey'de pastane dolabından taze ceviz parçalı muhammara ezmesi.", commentEn: "Fresh muhammara spread with walnut pieces in Şahinbey." },
    { name: "Koçak Baklava (Yöresel İkram ve Ezmeler)", rating: 4.7, reviewCount: 5200, area: "Şehitkamil", commentTr: "Şehitkamil'de ikram edilen hafif acılı ve cevizli acuka ezmesi.", commentEn: "Mildly spicy and walnut-loaded acuka spread served as an appetizer in Şehitkamil." }
  ],
  "Mantarlı Sote": [
    { name: "Veggie Gaziantep", rating: 4.7, reviewCount: 620, area: "Şehitkamil", commentTr: "Şehitkamil'de soya sosu ve sarımsakla sotelenmiş taze istiridye mantarları.", commentEn: "Fresh oyster mushrooms sautéed with soy sauce and garlic in Şehitkamil." },
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de az yağlı ve renkli biberli leziz kültür mantarı sotesi.", commentEn: "Delicious button mushroom sauté with light oil and bell peppers in Şahinbey." },
    { name: "Papirüs Cafe", rating: 4.5, reviewCount: 850, area: "Şahinbey", commentTr: "Şahinbey'de tarihi konakta zengin baharatlar ve zeytinyağı ile pişen mantarlı sote.", commentEn: "Warm mushroom sauté cooked with olive oil and spices in the historic mansion." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Kebapçı Halil Usta (İstek Üzerine Etsiz Köz Sebze Tabağı)", rating: 4.7, reviewCount: 8200, area: "Şehitkamil", commentTr: "Közlenmiş patlıcan ve biberlerin sıcak zeytinyağlı ezmesi.", commentEn: "Warm mash of fire-roasted eggplants and bell peppers in olive oil." },
    { name: "Şirvan Kebap Salonu (Közlenmiş Sebze Şöleni)", rating: 4.5, reviewCount: 2200, area: "Şahinbey", commentTr: "Şahinbey'de odun ateşinde közlenmiş sarımsaklı ve zeytinyağlı etsiz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash seasoned with garlic and olive oil in Şahinbey." },
    { name: "Sahan Restoran", rating: 4.5, reviewCount: 3400, area: "Şehitkamil", commentTr: "Şehitkamil'de kebap baharatları ile taş fırında közlenmiş patlıcan ezmesi.", commentEn: "Fire-roasted eggplant mash seasoned with kebab spices in Şehitkamil." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Lazika Cafe & Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Şahinbey", commentTr: "Şahinbey'de ceviz içi ve bitkisel yağ ile kavrulmuş ev yapımı vegan erişte.", commentEn: "Homemade vegan noodles tossed with walnuts and vegetable oil in Şahinbey." },
    { name: "Keyifli Mutfak", rating: 4.3, reviewCount: 150, area: "Şehitkamil", commentTr: "Şehitkamil'de taze domates sosuyla kavrulmuş pratik vegan erişte yemeği.", commentEn: "Vegan noodles roasted with fresh tomato sauce in Şehitkamil." },
    { name: "Crop Coffee Co. (Vegan/Vejetaryen Makarna İstekleri)", rating: 4.6, reviewCount: 520, area: "Şehitkamil", commentTr: "Şehitkamil'de sızma zeytinyağı ve taze nane yaprakları ile sunulan leziz erişte.", commentEn: "Delicious noodles served with extra virgin olive oil and fresh mint in Şehitkamil." }
  ]
};

export const VEGAN_ADANA_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Seci Seçkin Lokantası", rating: 4.5, reviewCount: 1850, area: "Seyhan", commentTr: "Seyhan'da geleneksel lezzetiyle sunulan bol zeytinyağlı ve ekşili yaprak sarması.", commentEn: "Stuffed grape leaves with plenty of olive oil and lemon served in Seyhan." },
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 920, area: "Seyhan", commentTr: "Seyhan'da taze asma yapraklarından günlük hazırlanan ev usulü sarmalar.", commentEn: "Home-style stuffed grape leaves prepared daily from fresh leaves in Seyhan." },
    { name: "Güven Lokantası", rating: 4.3, reviewCount: 340, area: "Seyhan", commentTr: "Seyhan'da esnaf usulü lezzetli ve hafif zeytinyağlı yaprak sarması.", commentEn: "Light olive oil stuffed grape leaves in local diner style in Seyhan." }
  ],
  "Kısır": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Çukurova", commentTr: "Çukurova'da taze yeşillikler ve ekşi nar aroması ile zenginleştirilmiş nefis kısır.", commentEn: "Delicious bulgur salad enriched with fresh greens and pomegranate juice in Çukurova." },
    { name: "Sini Ev Yemekleri", rating: 4.3, reviewCount: 190, area: "Çukurova", commentTr: "Çukurova'da ev yemeği kalitesinde, tam kıvamında baharatlı kısır.", commentEn: "Perfectly spiced home-style bulgur salad served in Çukurova." },
    { name: "Bizim Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Seyhan", commentTr: "Seyhan'da bütçe dostu, bol yeşillikli ve taze hazırlanan geleneksel kısır.", commentEn: "Traditional bulgur salad with fresh greens, prepared daily in Seyhan." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (Kuzey Adana)", rating: 4.2, reviewCount: 620, area: "Çukurova", commentTr: "Kuzey Adana'da pratik, acılı ve vegan standartlara uygun taze çiğ köfte dürümleri.", commentEn: "Fresh and spicy vegan-compliant cig kofte wraps in Kuzey Adana." },
    { name: "Komagene Çiğ Köfte (Barajyolu)", rating: 4.3, reviewCount: 880, area: "Seyhan", commentTr: "Barajyolu'nda öğrenciler için doyurucu kuruyemiş katkılı vegan dürümler.", commentEn: "Satisfying vegan-friendly cig kofte wraps featuring nut-blended paste in Barajyolu." },
    { name: "Battalbey Çiğ Köfte (Turgut Özal)", rating: 4.1, reviewCount: 420, area: "Çukurova", commentTr: "Turgut Özal Bulvarı'nda hızlı, bütçe dostu ve bol yeşillikli vegan çiğ köfte.", commentEn: "Quick, budget-friendly vegan cig kofte wrap on Turgut Özal Boulevard." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Seyhan Belediyesi Lezzet Durağı", rating: 4.4, reviewCount: 850, area: "Seyhan", commentTr: "Seyhan'da sızma zeytinyağı ile havuç ve patatesli pişmiş barbunya pilakisi.", commentEn: "Cranberry beans cooked with carrots, potatoes, and olive oil in Seyhan." },
    { name: "Yeşil Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Seyhan", commentTr: "Seyhan'da günlük taze hazırlanan geleneksel zeytinyağlı barbunya.", commentEn: "Traditional olive oil cranberry beans prepared fresh daily in Seyhan." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 320, area: "Çukurova", commentTr: "Çukurova'da Ege esintili hafif ve zeytinyağlı leziz barbunya tabağı.", commentEn: "Aegean style light olive oil cranberry beans served in Çukurova." }
  ],
  "Mercimek Çorbası": [
    { name: "Veggie Adana (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Çukurova", commentTr: "Çukurova'da tamamen bitkisel yağlar ve sebzelerle pişen leziz mercimek çorbası.", commentEn: "Delicious vegan lentil soup cooked with plant oils and vegetables in Çukurova." },
    { name: "Çorbacı Şahin Usta (İstek Üzerine Sade)", rating: 4.5, reviewCount: 2200, area: "Seyhan", commentTr: "Seyhan'da tereyağı eklenmeden sade ve bitkisel yağlı sunulan mercimek çorbası.", commentEn: "Plain lentil soup served with only vegetable oil and no butter in Seyhan." },
    { name: "Tarihi Ulus Çorbacısı", rating: 4.4, reviewCount: 980, area: "Seyhan", commentTr: "Seyhan'da günün her saati sıcak ve lezzetli bitkisel yağlı mercimek çorbası.", commentEn: "Hot and tasty vegetable oil lentil soup available at all hours in Seyhan." }
  ],
  "İmam Bayıldı": [
    { name: "Seci Seçkin Lokantası", rating: 4.5, reviewCount: 1850, area: "Seyhan", commentTr: "Seyhan'da zeytinyağı ile fırınlanmış, bol soğan ve domates dolgulu patlıcan.", commentEn: "Baked eggplant stuffed with onions and tomatoes in rich olive oil in Seyhan." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 290, area: "Çukurova", commentTr: "Çukurova'da ev yemeği titizliğiyle hazırlanan zeytinyağlı imam bayıldı.", commentEn: "Meticulously prepared olive oil stuffed eggplant served in Çukurova." },
    { name: "Merkez Lokantası", rating: 4.4, reviewCount: 920, area: "Seyhan", commentTr: "Seyhan'da geleneksel usulde dinlendirilmiş soğuk klasik imam bayıldı.", commentEn: "Classic cold stuffed eggplant rested in traditional style in Seyhan." }
  ],
  "Falafel Dürüm": [
    { name: "Veggie Adana", rating: 4.7, reviewCount: 850, area: "Çukurova", commentTr: "Çukurova'da bitkisel lavaş ve vegan tahin sosla sunulan çıtır falafel dürümü.", commentEn: "Crispy falafel wrap served with vegan flatbread and tahini sauce in Çukurova." },
    { name: "Göksel Cafe Bistro (Atıştırmalık Menüsü)", rating: 4.4, reviewCount: 750, area: "Çukurova", commentTr: "Çukurova'da taze humus ve falafel köfteleriyle hazırlanan doyurucu tabak.", commentEn: "Satisfying plate featuring fresh hummus and falafel balls in Çukurova." },
    { name: "Arabica Coffee House (Vegan Sandviç Seçenekleri)", rating: 4.3, reviewCount: 920, area: "Çukurova", commentTr: "Çukurova'da kahve yanına tercih edilebilecek falafelli vegan sandviçler.", commentEn: "Vegan sandwiches with falafel and vegetables, perfect with coffee in Çukurova." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Sini Ev Yemekleri", rating: 4.3, reviewCount: 340, area: "Çukurova", commentTr: "Çukurova'da havuçlu, pirinçli ve bol limonlu hafif pırasa yemeği.", commentEn: "Light leeks dish cooked with carrots, rice, and plenty of lemon in Çukurova." },
    { name: "Bizim Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Seyhan", commentTr: "Seyhan'da günlük taze pişen zeytinyağlı ve diyet dostu pırasa seçeneği.", commentEn: "Diet-friendly olive oil leeks option cooked fresh daily in Seyhan." },
    { name: "Yeşil Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Seyhan", commentTr: "Seyhan'da hafif sebze yemeği arayanlar için zeytinyağlı taze pırasa.", commentEn: "Fresh olive oil leeks for those looking for a light veggie meal in Seyhan." }
  ],
  "Humus": [
    { name: "Kebapçı Mesut (Meze Bölümü)", rating: 4.6, reviewCount: 4200, area: "Seyhan", commentTr: "Seyhan'da tahini bol ve tereyağsız soğuk zeytinyağlı humus mezesi.", commentEn: "Cold olive oil hummus appetizer with rich tahini, served butter-free in Seyhan." },
    { name: "Onbaşılar Kebap (Meze Reyonu)", rating: 4.5, reviewCount: 3800, area: "Seyhan", commentTr: "Seyhan'da et öncesi sunulan pürüzsüz kıvamlı ve zeytinyağlı humus ezmesi.", commentEn: "Smooth olive oil hummus spread served as a starter in Seyhan." },
    { name: "Cihangir Kebap & Kaburga", rating: 4.6, reviewCount: 3100, area: "Çukurova", commentTr: "Çukurova'da taze kimyon ve zeytinyağı ile harmanlanmış vegan humus tabağı.", commentEn: "Vegan hummus plate blended with fresh cumin and olive oil in Çukurova." }
  ],
  "Ezogelin Çorbası": [
    { name: "Veggie Adana (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Çukurova", commentTr: "Çukurova'da bakliyatlar ve nane ile bitkisel yağda pişen vegan ezogelin çorbası.", commentEn: "Vegan ezogelin soup cooked with legumes and mint in vegetable oil in Çukurova." },
    { name: "Paçacı Şemsi Adana", rating: 4.4, reviewCount: 1100, area: "Çukurova", commentTr: "Çukurova'da tereyağı kullanılmadan bitkisel yağla hazırlanan sıcak ezogelin.", commentEn: "Warm ezogelin soup prepared with vegetable oil instead of butter in Çukurova." },
    { name: "Çorbacı Şahin Usta", rating: 4.5, reviewCount: 2200, area: "Seyhan", commentTr: "Seyhan'da bol baharatlı ve sıcak esnaf usulü vegan dostu ezogelin çorbası.", commentEn: "Spicy and warm vegan-friendly ezogelin soup in local style in Seyhan." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Pastabahçe (Mevsimsel Gurme Menü)", rating: 4.5, reviewCount: 1600, area: "Seyhan", commentTr: "Seyhan'da portakal suyuyla pişirilmiş, ayva dilimli hafif kereviz.", commentEn: "Light celery dish cooked with orange juice and quince slices in Seyhan." },
    { name: "Park Zirve Restoran (Hafif ve Bitkisel Tabaklar)", rating: 4.6, reviewCount: 1400, area: "Seyhan", commentTr: "Seyhan'da taze dereotu ve sızma zeytinyağlı sağlıklı kereviz yemeği.", commentEn: "Healthy celery dish with fresh dill and extra virgin olive oil in Seyhan." },
    { name: "Han Hanımeli Restoran", rating: 4.4, reviewCount: 280, area: "Çukurova", commentTr: "Çukurova'da gurme sunumuyla portakallı ve zeytinyağlı kereviz dilimleri.", commentEn: "Gourmet sliced celery cooked with orange juice and olive oil in Çukurova." }
  ],
  "Şakşuka": [
    { name: "Beyoğlu Meyhanesi (Meze Reyonu)", rating: 4.5, reviewCount: 920, area: "Seyhan", commentTr: "Seyhan'da kızarmış patlıcan ve taze sarımsaklı domates soslu şakşuka mezesi.", commentEn: "Delicious fried eggplant appetizer in fresh garlic tomato sauce in Seyhan." },
    { name: "Sandal Meyhanesi Adana", rating: 4.4, reviewCount: 650, area: "Seyhan", commentTr: "Seyhan'da sızma zeytinyağı ile tatlandırılmış geleneksel şakşuka.", commentEn: "Traditional eggplant appetizer flavored with extra virgin olive oil in Seyhan." },
    { name: "Şerefe Meyhane", rating: 4.3, reviewCount: 480, area: "Seyhan", commentTr: "Seyhan'da taze domates soslu ve bol sarımsaklı soğuk şakşuka mezesi.", commentEn: "Cold eggplant starter with fresh tomato sauce and plenty of garlic in Seyhan." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Çukurova", commentTr: "Çukurova'da yeşil mercimekli ve bitkisel yağlı bulgur pilavı.", commentEn: "Bulgur wheat pilaf cooked with green lentils and vegetable oil in Çukurova." },
    { name: "Sini Ev Yemekleri", rating: 4.3, reviewCount: 190, area: "Çukurova", commentTr: "Çukurova'da esnaf usulü karamelize soğanlı bulgur pilavı.", commentEn: "Artisan style bulgur pilaf with green lentils and caramelized onions in Çukurova." },
    { name: "Teras Cafe & Bistro", rating: 4.4, reviewCount: 310, area: "Seyhan", commentTr: "Seyhan'da ev yemeği tadında sunulan lif ve protein deposu bulgur pilavı.", commentEn: "High-fiber and high-protein bulgur pilaf with home-cooked taste in Seyhan." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "BigChefs (Ziyapaşa)", rating: 4.4, reviewCount: 3200, area: "Seyhan", commentTr: "Ziyapaşa şubesinde çıtır Akdeniz yeşillikleri ve zeytinyağlı limon soslu taze salata.", commentEn: "Fresh Mediterranean greens with olive oil lemon dressing at the Ziyapaşa branch." },
    { name: "Midpoint (M1 Adana)", rating: 4.3, reviewCount: 2800, area: "Seyhan", commentTr: "Seyhan'da göl manzarası veya sosyal alanlarda sunulan doyurucu Akdeniz salatası.", commentEn: "Satisfying Mediterranean salad served in Seyhan." },
    { name: "Seyhan Baraj Gölü Kenarı Sosyal Alan Cafeleri", rating: 4.2, reviewCount: 1500, area: "Seyhan", commentTr: "Seyhan Baraj Gölü kenarında hafif zeytinyağlı soslu ve taze sebzeli pratik salata.", commentEn: "Fresh vegetable salad dressed with light olive oil sauce by the Seyhan Dam Lake." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Crop Coffee Co. Adana", rating: 4.6, reviewCount: 780, area: "Çukurova", commentTr: "Çukurova'da taze kekik ve toz biberle harmanlanmış çıtır fırın patatesler.", commentEn: "Crispy baked potatoes seasoned with fresh thyme and paprika in Çukurova." },
    { name: "Coffee Lab (Aperatif Bölümü)", rating: 4.4, reviewCount: 520, area: "Seyhan", commentTr: "Seyhan'da kahve yanına sunulan hafif fırınlanmış patates dilimleri.", commentEn: "Lightly baked potato wedges served alongside coffee in Seyhan." },
    { name: "David People Coffee & Food", rating: 4.4, reviewCount: 750, area: "Seyhan", commentTr: "Seyhan'da baharatlarla zenginleştirilmiş çıtır fırınlanmış patates tabağı.", commentEn: "Crispy baked potato platter enriched with garden spices in Seyhan." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Seyhan Belediyesi Lezzet Durağı (Mevsimsel)", rating: 4.4, reviewCount: 850, area: "Seyhan", commentTr: "Seyhan'da mevsiminde hazırlanan taze dereotu ve sızma zeytinyağlı iç bakla.", commentEn: "Fresh broad beans with dill and extra virgin olive oil prepared seasonally in Seyhan." },
    { name: "Ege Esnaf Lokantası", rating: 4.4, reviewCount: 320, area: "Çukurova", commentTr: "Çukurova'da zeytinyağlı sebzeler arasında popüler olan yoğurtsuz iç bakla.", commentEn: "Plant-based broad beans served without yogurt, popular in Çukurova." },
    { name: "Yeşil Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Seyhan", commentTr: "Seyhan'da ev yemeği sıcaklığında sunulan zeytinyağlı taze iç bakla.", commentEn: "Fresh olive oil broad beans served with home-cooked warmth in Seyhan." }
  ],
  "Muhammara / Acuka": [
    { name: "Kuğu Pastanesi (Kahvaltı/Şarküteri Reyonu)", rating: 4.4, reviewCount: 1100, area: "Seyhan", commentTr: "Seyhan'da cevizli ve kimyonlu leziz kahvaltılık acuka ezmesi.", commentEn: "Delicious breakfast acuka spread with walnuts and cumin in Seyhan." },
    { name: "Güllüoğlu Adana", rating: 4.5, reviewCount: 2650, area: "Seyhan", commentTr: "Seyhan'da böreklerin yanına çok yakışan baharatlı ve cevizli acuka ezmesi.", commentEn: "Spicy and walnut-loaded acuka spread that pairs perfectly with pastries in Seyhan." },
    { name: "Zeynel Muhallebicisi (Yöresel İkram ve Ezmeler)", rating: 4.3, reviewCount: 780, area: "Çukurova", commentTr: "Çukurova'da ikram edilen taze ceviz parçalı muhammara ezmesi.", commentEn: "Fresh muhammara spread with walnut pieces in Çukurova." }
  ],
  "Mantarlı Sote": [
    { name: "Veggie Adana", rating: 4.7, reviewCount: 850, area: "Çukurova", commentTr: "Çukurova'da soya sosu ve sarımsakla sotelenmiş taze istiridye mantarları.", commentEn: "Fresh oyster mushrooms sautéed with soy sauce and garlic in Çukurova." },
    { name: "Yeşil Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Seyhan", commentTr: "Seyhan'da az yağlı ve renkli biberli leziz kültür mantarı sotesi.", commentEn: "Delicious button mushroom sauté with light oil and bell peppers in Seyhan." },
    { name: "Göksel Cafe Bistro", rating: 4.5, reviewCount: 1600, area: "Çukurova", commentTr: "Çukurova'da zengin baharatlar ve zeytinyağı ile pişen mantarlı sıcak sote.", commentEn: "Warm mushroom sauté cooked with olive oil and aromatic spices in Çukurova." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Cihangir Kebap & Kaburga (İstek Üzerine Etsiz Köz Sebze Tabağı)", rating: 4.6, reviewCount: 3100, area: "Çukurova", commentTr: "Çukurova'da közlenmiş patlıcan ve biberlerin sıcak zeytinyağlı ezmesi.", commentEn: "Warm mash of fire-roasted eggplants and bell peppers in olive oil in Çukurova." },
    { name: "Eyvan Kebap (Közlenmiş Sebze Şöleni)", rating: 4.5, reviewCount: 2200, area: "Seyhan", commentTr: "Seyhan'da odun ateşinde közlenmiş sarımsaklı ve zeytinyağlı etsiz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash seasoned with garlic and olive oil in Seyhan." },
    { name: "Onbaşılar Kebap", rating: 4.5, reviewCount: 3800, area: "Seyhan", commentTr: "Seyhan'da kebap baharatları ile fırınlanmış köz patlıcan ezmesi.", commentEn: "Fire-roasted eggplant mash seasoned with kebab spices in Seyhan." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Çukurova Mantı & Ev Yemekleri", rating: 4.5, reviewCount: 480, area: "Çukurova", commentTr: "Çukurova'da ceviz içi ve bitkisel yağ ile kavrulmuş ev yapımı vegan erişte.", commentEn: "Homemade vegan noodles tossed with walnuts and vegetable oil in Çukurova." },
    { name: "Sini Mutfak", rating: 4.3, reviewCount: 210, area: "Çukurova", commentTr: "Çukurova'da taze domates sosuyla kavrulmuş pratik vegan erişte yemeği.", commentEn: "Vegan noodles roasted with fresh tomato sauce in Çukurova." },
    { name: "Crop Coffee Co. (Vegan/Vejetaryen Makarna İstekleri)", rating: 4.6, reviewCount: 780, area: "Çukurova", commentTr: "Çukurova'da sızma zeytinyağı ve taze nane yaprakları ile sunulan leziz erişte.", commentEn: "Delicious noodles served with extra virgin olive oil and fresh mint in Çukurova." }
  ]
};

export const VEGAN_ESKISEHIR_RESTAURANTS: Record<string, RealRestaurant[]> = {
  "Zeytinyağlı Yaprak Sarması": [
    { name: "Trakya Lokantası", rating: 4.5, reviewCount: 1850, area: "Odunpazarı", commentTr: "Odunpazarı'nda geleneksel lezzetiyle sunulan bol zeytinyağlı ve ekşili yaprak sarması.", commentEn: "Stuffed grape leaves with plenty of olive oil and lemon served in Odunpazarı." },
    { name: "Şehir Lokantası", rating: 4.4, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze asma yapraklarından günlük hazırlanan ev usulü sarmalar.", commentEn: "Home-style stuffed grape leaves prepared daily from fresh leaves in Tepebaşı." },
    { name: "Eskişehir Esnaf Lokantası", rating: 4.3, reviewCount: 340, area: "Tepebaşı", commentTr: "Tepebaşı'nda esnaf usulü lezzetli ve hafif zeytinyağlı yaprak sarması.", commentEn: "Light olive oil stuffed grape leaves in local diner style in Tepebaşı." }
  ],
  "Kısır": [
    { name: "Tarihi Odunpazarı Ev Yemekleri", rating: 4.4, reviewCount: 280, area: "Odunpazarı", commentTr: "Odunpazarı'nda taze yeşillikler ve ekşi nar aroması ile zenginleştirilmiş nefis kısır.", commentEn: "Delicious bulgur salad enriched with fresh greens and pomegranate juice in Odunpazarı." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.3, reviewCount: 190, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği kalitesinde, tam kıvamında baharatlı kısır.", commentEn: "Perfectly spiced home-style bulgur salad served in Tepebaşı." },
    { name: "Anadolu Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Tepebaşı", commentTr: "Tepebaşı'nda bütçe dostu, bol yeşillikli ve taze hazırlanan geleneksel kısır.", commentEn: "Traditional bulgur salad with fresh greens, prepared daily in Tepebaşı." }
  ],
  "Çiğ Köfte": [
    { name: "Oses Çiğ Köfte (Anadolu Üniversitesi Civarı)", rating: 4.2, reviewCount: 620, area: "Tepebaşı", commentTr: "Üniversite civarında pratik, acılı ve vegan standartlara uygun taze dürümler.", commentEn: "Fresh and spicy vegan-compliant cig kofte wraps near the university." },
    { name: "Komagene Çiğ Köfte (Bağlar)", rating: 4.3, reviewCount: 880, area: "Tepebaşı", commentTr: "Bağlar'da öğrenciler için doyurucu kuruyemiş katkılı vegan dürümler.", commentEn: "Satisfying vegan-friendly cig kofte wraps featuring nut-blended paste in Baglar." },
    { name: "Battalbey Çiğ Köfte (Espark Şubesi)", rating: 4.1, reviewCount: 420, area: "Tepebaşı", commentTr: "Espark yakınında hızlı, bütçe dostu ve bol yeşillikli vegan çiğ köfte.", commentEn: "Quick, budget-friendly vegan cig kofte wrap near Espark." }
  ],
  "Zeytinyağlı Barbunya Pilaki": [
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda sızma zeytinyağı ile havuç ve patatesli pişmiş barbunya pilakisi.", commentEn: "Cranberry beans cooked with carrots, potatoes, and olive oil in Tepebaşı." },
    { name: "Şehir Lokantası", rating: 4.3, reviewCount: 410, area: "Tepebaşı", commentTr: "Tepebaşı'nda günlük taze hazırlanan geleneksel zeytinyağlı barbunya.", commentEn: "Traditional olive oil cranberry beans prepared fresh daily in Tepebaşı." },
    { name: "Hüsnüniyet Lokantası", rating: 4.4, reviewCount: 320, area: "Tepebaşı", commentTr: "Tepebaşı'nda hafif ve zeytinyağlı leziz barbunya tabağı.", commentEn: "Light olive oil cranberry beans served in Tepebaşı." }
  ],
  "Mercimek Çorbası": [
    { name: "Veggie Eskişehir (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda tamamen bitkisel yağlar ve sebzelerle pişen leziz mercimek çorbası.", commentEn: "Delicious vegan lentil soup cooked with plant oils and vegetables in Tepebaşı." },
    { name: "Çorbacı Necdet Usta (İstek Üzerine Sade)", rating: 4.5, reviewCount: 2200, area: "Tepebaşı", commentTr: "Tepebaşı'nda tereyağı eklenmeden sade ve bitkisel yağlı sunulan mercimek çorbası.", commentEn: "Plain lentil soup served with only vegetable oil and no butter in Tepebaşı." },
    { name: "Tarihi Merkez Çorbacısı", rating: 4.4, reviewCount: 980, area: "Odunpazarı", commentTr: "Odunpazarı'nda günün her saati sıcak ve lezzetli bitkisel yağlı mercimek çorbası.", commentEn: "Hot and tasty vegetable oil lentil soup available at all hours in Odunpazarı." }
  ],
  "İmam Bayıldı": [
    { name: "Trakya Lokantası", rating: 4.5, reviewCount: 1850, area: "Odunpazarı", commentTr: "Odunpazarı'nda zeytinyağı ile fırınlanmış, bol soğan ve domates dolgulu patlıcan.", commentEn: "Baked eggplant stuffed with onions and tomatoes in rich olive oil in Odunpazarı." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.4, reviewCount: 290, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği titizliğiyle hazırlanan zeytinyağlı imam bayıldı.", commentEn: "Meticulously prepared olive oil stuffed eggplant served in Tepebaşı." },
    { name: "Güven Lokantası", rating: 4.4, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda geleneksel usulde dinlendirilmiş soğuk klasik imam bayıldı.", commentEn: "Classic cold stuffed eggplant rested in traditional style in Tepebaşı." }
  ],
  "Falafel Dürüm": [
    { name: "Veggie Eskişehir", rating: 4.7, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda bitkisel lavaş ve vegan tahin sosla sunulan çıtır falafel dürümü.", commentEn: "Crispy falafel wrap served with vegan flatbread and tahini sauce in Tepebaşı." },
    { name: "Walker's Coffee House (Atıştırmalık Menüsü)", rating: 4.4, reviewCount: 750, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze humus ve falafel köfteleriyle hazırlanan doyurucu tabak.", commentEn: "Satisfying plate featuring fresh hummus and falafel balls in Tepebaşı." },
    { name: "Arabica Coffee House (Vegan Sandviç Seçenekleri)", rating: 4.3, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda kahve yanına tercih edilebilecek falafelli vegan sandviçler.", commentEn: "Vegan sandwiches with falafel and vegetables, perfect with coffee in Tepebaşı." }
  ],
  "Zeytinyağlı Pırasa": [
    { name: "Hanımeli Ev Yemekleri", rating: 4.3, reviewCount: 340, area: "Tepebaşı", commentTr: "Tepebaşı'nda havuçlu, pirinçli ve bol limonlu hafif pırasa yemeği.", commentEn: "Light leeks dish cooked with carrots, rice, and plenty of lemon in Tepebaşı." },
    { name: "Sini Ev Yemekleri", rating: 4.2, reviewCount: 150, area: "Tepebaşı", commentTr: "Tepebaşı'nda günlük taze pişen zeytinyağlı ve diyet dostu pırasa seçeneği.", commentEn: "Diet-friendly olive oil leeks option cooked fresh daily in Tepebaşı." },
    { name: "Anadolu Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Tepebaşı", commentTr: "Tepebaşı'nda hafif sebze yemeği arayanlar için zeytinyağlı taze pırasa.", commentEn: "Fresh olive oil leeks for those looking for a light veggie meal in Tepebaşı." }
  ],
  "Humus": [
    { name: "Kebapçı Hacı Hasan (Meze Bölümü)", rating: 4.6, reviewCount: 4200, area: "Tepebaşı", commentTr: "Tepebaşı'nda tahini bol ve tereyağsız soğuk zeytinyağlı humus mezesi.", commentEn: "Cold olive oil hummus appetizer with rich tahini, served butter-free in Tepebaşı." },
    { name: "Kasap Osman Restoran (Meze Reyonu)", rating: 4.5, reviewCount: 3800, area: "Tepebaşı", commentTr: "Tepebaşı'nda et öncesi sunulan pürüzsüz kıvamlı ve zeytinyağlı humus ezmesi.", commentEn: "Smooth olive oil hummus spread served as a starter in Tepebaşı." },
    { name: "Fahrettin Usta", rating: 4.6, reviewCount: 3100, area: "Odunpazarı", commentTr: "Odunpazarı'nda taze kimyon ve zeytinyağı ile harmanlanmış vegan humus tabağı.", commentEn: "Vegan hummus plate blended with fresh cumin and olive oil in Odunpazarı." }
  ],
  "Ezogelin Çorbası": [
    { name: "Veggie Eskişehir (Tamamen Vegan)", rating: 4.7, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda bakliyatlar ve nane ile bitkisel yağda pişen vegan ezogelin çorbası.", commentEn: "Vegan ezogelin soup cooked with legumes and mint in vegetable oil in Tepebaşı." },
    { name: "Paçacı Şemsi Eskişehir", rating: 4.4, reviewCount: 1100, area: "Tepebaşı", commentTr: "Tepebaşı'nda tereyağı kullanılmadan bitkisel yağla hazırlanan sıcak ezogelin.", commentEn: "Warm ezogelin soup prepared with vegetable oil instead of butter in Tepebaşı." },
    { name: "Çorbacı Necdet Usta", rating: 4.5, reviewCount: 2200, area: "Tepebaşı", commentTr: "Tepebaşı'nda bol baharatlı ve sıcak esnaf usulü vegan dostu ezogelin çorbası.", commentEn: "Spicy and warm vegan-friendly ezogelin soup in local style in Tepebaşı." }
  ],
  "Zeytinyağlı Kereviz": [
    { name: "Ayten Usta Gurme Restoran (Mevsimsel Gurme Menü)", rating: 4.5, reviewCount: 1600, area: "Tepebaşı", commentTr: "Tepebaşı'nda portakal suyuyla pişirilmiş, ayva dilimli hafif kereviz.", commentEn: "Light celery dish cooked with orange juice and quince slices in Tepebaşı." },
    { name: "Divan Pub (Hafif ve Bitkisel Tabaklar)", rating: 4.6, reviewCount: 1400, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze dereotu ve sızma zeytinyağlı sağlıklı kereviz yemeği.", commentEn: "Healthy celery dish with fresh dill and extra virgin olive oil in Tepebaşı." },
    { name: "Hey Joe Coffee Co.", rating: 4.4, reviewCount: 280, area: "Tepebaşı", commentTr: "Tepebaşı'nda gurme sunumuyla portakallı ve zeytinyağlı kereviz dilimleri.", commentEn: "Gourmet sliced celery cooked with orange juice and olive oil in Tepebaşı." }
  ],
  "Şakşuka": [
    { name: "Kalender Meyhane Eskişehir", rating: 4.5, reviewCount: 920, area: "Tepebaşı", commentTr: "Tepebaşı'nda kızarmış patlıcan ve taze sarımsaklı domates soslu şakşuka mezesi.", commentEn: "Delicious fried eggplant appetizer in fresh garlic tomato sauce in Tepebaşı." },
    { name: "Acıktım Kafe (Meze Reyonu)", rating: 4.4, reviewCount: 650, area: "Tepebaşı", commentTr: "Tepebaşı'nda sızma zeytinyağı ile tatlandırılmış geleneksel şakşuka.", commentEn: "Traditional eggplant appetizer flavored with extra virgin olive oil in Tepebaşı." },
    { name: "Varuna Gezgin", rating: 4.3, reviewCount: 480, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze domates soslu ve bol sarımsaklı soğuk şakşuka mezesi.", commentEn: "Cold eggplant starter with fresh tomato sauce and plenty of garlic in Tepebaşı." }
  ],
  "Yeşil Mercimekli Bulgur Pilavı": [
    { name: "Sofra Restoran", rating: 4.4, reviewCount: 280, area: "Tepebaşı", commentTr: "Tepebaşı'nıın meşhur yerinde yeşil mercimekli ve bitkisel yağlı bulgur pilavı.", commentEn: "Bulgur wheat pilaf cooked with green lentils and vegetable oil in Tepebaşı." },
    { name: "Anadolu Ev Yemekleri", rating: 4.3, reviewCount: 190, area: "Tepebaşı", commentTr: "Tepebaşı'nda esnaf usulü karamelize soğanlı bulgur pilavı.", commentEn: "Artisan style bulgur pilaf with green lentils and caramelized onions in Tepebaşı." },
    { name: "Sini Ev Yemekleri", rating: 4.4, reviewCount: 310, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği tadında sunulan lif ve protein deposu bulgur pilavı.", commentEn: "High-fiber and high-protein bulgur pilaf with home-cooked taste in Tepebaşı." }
  ],
  "Geniş Yapraklı Akdeniz Salatası": [
    { name: "BigChefs (Cassaba Modern)", rating: 4.4, reviewCount: 3200, area: "Tepebaşı", commentTr: "Cassaba Modern şubesinde çıtır Akdeniz yeşillikleri ve zeytinyağlı limon soslu taze salata.", commentEn: "Fresh Mediterranean greens with olive oil lemon dressing at Cassaba Modern branch." },
    { name: "Cookshop (Espark)", rating: 4.3, reviewCount: 2800, area: "Tepebaşı", commentTr: "Tepebaşı'nda sunulan doyurucu Akdeniz salatası.", commentEn: "Satisfying Mediterranean salad served in Tepebaşı." },
    { name: "Porsuk Çayı Kenarı Sosyal Alan Cafeleri", rating: 4.2, reviewCount: 1500, area: "Tepebaşı", commentTr: "Porsuk Çayı kenarında hafif zeytinyağlı soslu ve taze sebzeli pratik salata.", commentEn: "Fresh vegetable salad dressed with light olive oil sauce by Porsuk River." }
  ],
  "Fırında Baharatlı Patates Dilimleri": [
    { name: "Crop Coffee Co. Eskişehir", rating: 4.6, reviewCount: 780, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze kekik ve toz biberle harmanlanmış çıtır fırın patatesler.", commentEn: "Crispy baked potatoes seasoned with fresh thyme and paprika in Tepebaşı." },
    { name: "Hey Joe Coffee Co. (Aperatif Bölümü)", rating: 4.4, reviewCount: 520, area: "Tepebaşı", commentTr: "Tepebaşı'nda kahve yanına sunulan hafif fırınlanmış patates dilimleri.", commentEn: "Lightly baked potato wedges served alongside coffee in Tepebaşı." },
    { name: "Walker's Coffee House", rating: 4.4, reviewCount: 750, area: "Tepebaşı", commentTr: "Tepebaşı'nda baharatlarla zenginleştirilmiş çıtır fırınlanmış patates tabağı.", commentEn: "Crispy baked potato platter enriched with garden spices in Tepebaşı." }
  ],
  "Zeytinyağlı Taze İç Bakla": [
    { name: "Mazlum Süt Evi (Mevsimsel Yöresel Günler)", rating: 4.4, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda mevsiminde hazırlanan taze dereotu ve sızma zeytinyağlı iç bakla.", commentEn: "Fresh broad beans with dill and extra virgin olive oil prepared seasonally in Tepebaşı." },
    { name: "Hüsnüniyet Lokantası", rating: 4.4, reviewCount: 320, area: "Tepebaşı", commentTr: "Tepebaşı'nda zeytinyağlı sebzeler arasında popüler olan yoğurtsuz iç bakla.", commentEn: "Plant-based broad beans served without yogurt, popular in Tepebaşı." },
    { name: "Hanımeli Ev Yemekleri", rating: 4.3, reviewCount: 410, area: "Tepebaşı", commentTr: "Tepebaşı'nda ev yemeği sıcaklığında sunulan zeytinyağlı taze iç bakla.", commentEn: "Fresh olive oil broad beans served with home-cooked warmth in Tepebaşı." }
  ],
  "Muhammara / Acuka": [
    { name: "Mazlum Süt Evi (Kahvaltı Reyonu)", rating: 4.4, reviewCount: 1100, area: "Tepebaşı", commentTr: "Tepebaşı'nda cevizli ve kimyonlu leziz kahvaltılık acuka ezmesi.", commentEn: "Delicious breakfast acuka spread with walnuts and cumin in Tepebaşı." },
    { name: "Balkan Pastanesi", rating: 4.5, reviewCount: 2650, area: "Tepebaşı", commentTr: "Tepebaşı'nda böreklerin yanına çok yakışan baharatlı ve cevizli acuka ezmesi.", commentEn: "Spicy and walnut-loaded acuka spread that pairs perfectly with pastries in Tepebaşı." },
    { name: "Gezi Pastanesi Eskişehir", rating: 4.3, reviewCount: 780, area: "Tepebaşı", commentTr: "Tepebaşı'nda ikram edilen taze ceviz parçalı muhammara ezmesi.", commentEn: "Fresh muhammara spread with walnut pieces in Tepebaşı." }
  ],
  "Mantarlı Sote": [
    { name: "Veggie Eskişehir", rating: 4.7, reviewCount: 850, area: "Tepebaşı", commentTr: "Tepebaşı'nda soya sosu ve sarımsakla sotelenmiş taze istiridye mantarları.", commentEn: "Fresh oyster mushrooms sautéed with soy sauce and garlic in Tepebaşı." },
    { name: "Göz Oda Cafe", rating: 4.2, reviewCount: 150, area: "Tepebaşı", commentTr: "Tepebaşı'nda az yağlı ve renkli biberli leziz kültür mantarı sotesi.", commentEn: "Delicious button mushroom sauté with light oil and bell peppers in Tepebaşı." },
    { name: "Acıktım Kafe", rating: 4.5, reviewCount: 1600, area: "Tepebaşı", commentTr: "Tepebaşı'nda zengin baharatlar ve zeytinyağı ile pişen mantarlı sıcak sote.", commentEn: "Warm mushroom sauté cooked with olive oil and aromatic spices in Tepebaşı." }
  ],
  "Ezmeli Patlıcan Kebap": [
    { name: "Meşhur Eskişehir Kebapçısı (İstek Üzerine Etsiz Köz Sebze Tabağı)", rating: 4.6, reviewCount: 3100, area: "Tepebaşı", commentTr: "Tepebaşı'nda közlenmiş patlıcan ve biberlerin sıcak zeytinyağlı ezmesi.", commentEn: "Warm mash of fire-roasted eggplants and bell peppers in olive oil in Tepebaşı." },
    { name: "Çadir Restoran (Közlenmiş Sebze Şöleni)", rating: 4.5, reviewCount: 2200, area: "Tepebaşı", commentTr: "Tepebaşı'nda odun ateşinde közlenmiş sarımsaklı ve zeytinyağlı etsiz patlıcan ezmesi.", commentEn: "Meatless roasted eggplant mash seasoned with garlic and olive oil in Tepebaşı." },
    { name: "Fahrettin Usta", rating: 4.5, reviewCount: 3800, area: "Odunpazarı", commentTr: "Odunpazarı'nda kebap baharatları ile fırınlanmış köz patlıcan ezmesi.", commentEn: "Fire-roasted eggplant mash seasoned with kebab spices in Odunpazarı." }
  ],
  "Kavrulmuş Çorbalık Erişte": [
    { name: "Kırım Tatar Kültür Evi (Özel Bitkisel Yağlı İstek)", rating: 4.5, reviewCount: 480, area: "Odunpazarı", commentTr: "Odunpazarı'nda ceviz içi ve bitkisel yağ ile kavrulmuş ev yapımı vegan erişte.", commentEn: "Homemade vegan noodles tossed with walnuts and vegetable oil in Odunpazarı." },
    { name: "Sini Ev Yemekleri", rating: 4.3, reviewCount: 210, area: "Tepebaşı", commentTr: "Tepebaşı'nda taze domates sosuyla kavrulmuş pratik vegan erişte yemeği.", commentEn: "Vegan noodles roasted with fresh tomato sauce in Tepebaşı." },
    { name: "Crop Coffee Co. (Vegan/Vejetaryen Makarna Seçenekleri)", rating: 4.6, reviewCount: 780, area: "Tepebaşı", commentTr: "Tepebaşı'nda sızma zeytinyağı ve taze nane yaprakları ile sunulan leziz erişte.", commentEn: "Delicious noodles served with extra virgin olive oil and fresh mint in Tepebaşı." }
  ]
};
