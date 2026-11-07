// ==========================================
// EXPANDED MENU: 61 more dishes so every mode has ~40+ cards.
// Kept separate from mockFood.ts so the original data stays untouched.
// Photos: Wikimedia Commons, see IMAGE_CREDITS.md.
// ==========================================
import type { MenuItem } from "./mockFood";

type Mode = MenuItem["modes"][number];

interface DishSpec {
  slug: string;
  nameTr: string;
  nameEn: string;
  restaurant: string;
  price: number;
  macros: [calories: number, protein: number, carbs: number, fat: number];
  modes: Mode[];
  vegan: boolean;
  healthy: boolean;
  category: string;
  tag: [tr: string, en: string];
  desc: [tr: string, en: string];
  region: [tr: string, en: string];
  // What makes it non-vegan (unused for vegan dishes)
  animal?: [tr: string, en: string];
}

const DISHES: DishSpec[] = [
  // ---- Vegan / zeytinyağlı ----
  { slug: "kabak-cicegi-dolmasi", nameTr: "Kabak Çiçeği Dolması", nameEn: "Stuffed Zucchini Flowers", restaurant: "Ege Meyhanesi", price: 190, macros: [260, 6, 38, 9], modes: ["vegan", "gourmet", "tourist", "fit"], vegan: true, healthy: true, category: "meze", tag: ["EGE'NİN İNCE İŞİ", "AEGEAN DELICACY"], desc: ["İnce pirinç, nane ve dereotuyla doldurulup zeytinyağında pişen narin çiçekler.", "Delicate flowers filled with rice, mint and dill, slow-cooked in olive oil."], region: ["Ege mutfağının yaz klasiği", "A summer classic of Aegean cuisine"] },
  { slug: "biber-dolmasi", nameTr: "Zeytinyağlı Biber Dolması", nameEn: "Stuffed Peppers in Olive Oil", restaurant: "Zeytinyağlı Evi", price: 150, macros: [310, 6, 48, 10], modes: ["vegan", "economic", "fit"], vegan: true, healthy: true, category: "meze", tag: ["ZEYTİNYAĞLI KLASİK", "OLIVE OIL CLASSIC"], desc: ["Kuş üzümü, çam fıstığı ve baharatlı pirinçle doldurulmuş biberler, soğuk servis.", "Peppers stuffed with spiced rice, currants and pine nuts, served cold."], region: ["Osmanlı mutfağının zeytinyağlı geleneği", "The olive-oil tradition of Ottoman cuisine"] },
  { slug: "lahana-sarmasi", nameTr: "Zeytinyağlı Lahana Sarması", nameEn: "Cabbage Rolls in Olive Oil", restaurant: "Karadeniz Sofrası", price: 160, macros: [290, 6, 46, 9], modes: ["vegan", "economic", "tourist"], vegan: true, healthy: true, category: "meze", tag: ["KARADENİZ USULÜ", "BLACK SEA STYLE"], desc: ["Haşlanmış lahana yapraklarına sarılmış baharatlı pirinç; ekşi ve hafif.", "Spiced rice wrapped in tender cabbage leaves; tangy and light."], region: ["Karadeniz mutfağının kış sofrası", "A winter staple of the Black Sea kitchen"] },
  { slug: "nohut-yemegi", nameTr: "Etsiz Nohut Yemeği", nameEn: "Chickpea Stew (Meatless)", restaurant: "Esnaf Lokantası", price: 110, macros: [380, 16, 55, 10], modes: ["vegan", "economic", "fit"], vegan: true, healthy: true, category: "general", tag: ["BİTKİSEL PROTEİN", "PLANT PROTEIN"], desc: ["Domates ve biber salçasıyla ağır ateşte pişmiş yumuşacık nohut.", "Chickpeas slow-cooked with tomato and pepper paste."], region: ["Esnaf lokantalarının vazgeçilmezi", "A must of Turkish tradesmen's diners"] },
  { slug: "pancar-salatasi", nameTr: "Pancar Salatası", nameEn: "Beetroot Salad", restaurant: "Meze Evi", price: 95, macros: [140, 3, 22, 5], modes: ["vegan", "fit"], vegan: true, healthy: true, category: "meze", tag: ["ANTİOKSİDAN DEPOSU", "ANTIOXIDANT BOOST"], desc: ["Haşlanmış pancar, sarımsak, zeytinyağı ve nar ekşisi.", "Boiled beetroot with garlic, olive oil and pomegranate molasses."], region: ["Meyhane sofralarının renkli mezesi", "A colorful meze of tavern tables"] },
  { slug: "coban-salata", nameTr: "Çoban Salata", nameEn: "Shepherd's Salad", restaurant: "Mahalle Lokantası", price: 85, macros: [120, 2, 12, 8], modes: ["vegan", "fit", "economic"], vegan: true, healthy: true, category: "meze", tag: ["TAZE VE ÇITIR", "FRESH & CRUNCHY"], desc: ["Domates, salatalık, biber ve soğanın limon ve zeytinyağıyla buluşması.", "Tomato, cucumber, pepper and onion with lemon and olive oil."], region: ["Her Türk sofrasının vazgeçilmezi", "Found on every Turkish table"] },
  { slug: "fava", nameTr: "Fava", nameEn: "Fava Bean Purée", restaurant: "Ege Meyhanesi", price: 120, macros: [220, 11, 30, 7], modes: ["vegan", "gourmet", "fit"], vegan: true, healthy: true, category: "meze", tag: ["EGE MEZESİ", "AEGEAN MEZE"], desc: ["Kuru baklanın zeytinyağı ve dereotuyla pürüzsüz bir kıvama gelmesi.", "Dried broad beans whipped smooth with olive oil and dill."], region: ["Ege meyhanelerinin klasik mezesi", "A classic meze of Aegean taverns"] },
  { slug: "asure", nameTr: "Aşure", nameEn: "Ashure (Noah's Pudding)", restaurant: "Tatlıcı", price: 90, macros: [330, 7, 66, 5], modes: ["vegan", "tourist", "gourmet"], vegan: true, healthy: false, category: "dessert", tag: ["BEREKET TATLISI", "DESSERT OF ABUNDANCE"], desc: ["Buğday, nohut, fasulye, kuru meyve ve cevizle yapılan sütsüz geleneksel tatlı.", "A dairy-free pudding of wheat, legumes, dried fruit and walnuts."], region: ["Komşulara dağıtılan bir Anadolu geleneği", "An Anatolian tradition shared with neighbors"] },
  { slug: "kabak-tatlisi", nameTr: "Kabak Tatlısı", nameEn: "Candied Pumpkin", restaurant: "Tatlıcı", price: 130, macros: [360, 4, 70, 8], modes: ["vegan", "cheat_day", "tourist"], vegan: true, healthy: false, category: "dessert", tag: ["MEVSİM TATLISI", "SEASONAL DESSERT"], desc: ["Şekerle kendi suyunda pişmiş balkabağı, tahin ve cevizle.", "Pumpkin cooked in its own syrup, topped with tahini and walnuts."], region: ["Sonbaharın geleneksel ev tatlısı", "Autumn's traditional home dessert"] },
  { slug: "bezelye", nameTr: "Zeytinyağlı Bezelye", nameEn: "Peas in Olive Oil", restaurant: "Ev Yemekleri", price: 115, macros: [230, 9, 32, 8], modes: ["vegan", "economic", "fit"], vegan: true, healthy: true, category: "general", tag: ["EV YEMEĞİ", "HOME COOKING"], desc: ["Havuç ve patatesle pişmiş taze bezelye, dereotuyla.", "Fresh peas cooked with carrots, potatoes and dill."], region: ["Anadolu ev yemeklerinin baharı", "Spring in Anatolian home cooking"] },
  { slug: "turlu", nameTr: "Türlü", nameEn: "Mixed Vegetable Stew", restaurant: "Ev Yemekleri", price: 140, macros: [260, 6, 34, 11], modes: ["vegan", "economic", "fit"], vegan: true, healthy: true, category: "general", tag: ["SEBZE ŞÖLENİ", "VEGETABLE FEAST"], desc: ["Patlıcan, kabak, biber, fasulye ve domatesin birlikte pişmesi.", "Eggplant, zucchini, peppers, beans and tomato cooked together."], region: ["Osmanlı'dan bugüne yaz sofrası", "A summer dish since Ottoman times"] },
  { slug: "patates-salatasi", nameTr: "Patates Salatası", nameEn: "Turkish Potato Salad", restaurant: "Mahalle Lokantası", price: 90, macros: [250, 4, 36, 10], modes: ["vegan", "economic"], vegan: true, healthy: false, category: "meze", tag: ["DOYURUCU SALATA", "HEARTY SALAD"], desc: ["Haşlanmış patates, yeşil soğan, maydanoz ve pul biber; mayonezsiz.", "Boiled potatoes, spring onion, parsley and chili flakes; no mayo."], region: ["Piknik sofralarının favorisi", "A picnic favorite"] },
  { slug: "gavurdagi-salatasi", nameTr: "Gavurdağı Salatası", nameEn: "Gavurdağı Salad", restaurant: "Antep Sofrası", price: 135, macros: [210, 4, 16, 15], modes: ["vegan", "fit", "tourist"], vegan: true, healthy: true, category: "meze", tag: ["ANTEP USULÜ", "GAZIANTEP STYLE"], desc: ["İnce doğranmış domates ve biber, ceviz ve nar ekşisiyle.", "Finely chopped tomato and pepper with walnuts and pomegranate molasses."], region: ["Gaziantep mutfağının ünlü salatası", "Gaziantep's famous salad"] },
  { slug: "domates-corbasi", nameTr: "Domates Çorbası", nameEn: "Tomato Soup", restaurant: "Çorba Evi", price: 80, macros: [170, 3, 24, 7], modes: ["vegan", "economic"], vegan: true, healthy: true, category: "soup", tag: ["SICACIK BAŞLANGIÇ", "WARM STARTER"], desc: ["Közlenmiş domatesle yapılan, hafif koyu klasik çorba.", "A classic soup of roasted tomatoes, lightly thickened."], region: ["Lokanta menülerinin klasiği", "A diner classic"] },
  { slug: "simit", nameTr: "Simit", nameEn: "Simit (Sesame Bread Ring)", restaurant: "Simitçi Fırını", price: 25, macros: [300, 9, 55, 6], modes: ["vegan", "economic", "tourist"], vegan: true, healthy: false, category: "flatbread", tag: ["SOKAĞIN SİMGESİ", "STREET ICON"], desc: ["Pekmeze batırılıp susama bulanmış, çıtır kabuklu halka.", "A crusty ring dipped in grape molasses and coated in sesame."], region: ["İstanbul sokaklarının simgesi", "The icon of Istanbul's streets"] },
  { slug: "sebzeli-guvec", nameTr: "Sebzeli Güveç", nameEn: "Vegetable Güveç", restaurant: "Güveç Evi", price: 165, macros: [280, 6, 30, 14], modes: ["vegan", "gourmet", "fit"], vegan: true, healthy: true, category: "general", tag: ["TOPRAK KAPTA", "CLAY POT BAKED"], desc: ["Toprak güveçte fırınlanmış patlıcan, biber ve domates.", "Eggplant, peppers and tomato baked in a clay pot."], region: ["Anadolu'nun toprak kap geleneği", "Anatolia's clay-pot tradition"] },
  { slug: "kestane-kebap", nameTr: "Kestane Kebap", nameEn: "Roasted Chestnuts", restaurant: "Sokak Tezgâhı", price: 70, macros: [250, 3, 53, 2], modes: ["vegan", "economic", "tourist"], vegan: true, healthy: false, category: "general", tag: ["SOKAK LEZZETİ", "STREET SNACK"], desc: ["Mangal üstünde közlenmiş, sıcacık ve tatlımsı kestane.", "Warm, sweet chestnuts roasted over coals."], region: ["İstanbul'un kış sokak lezzeti", "Istanbul's winter street snack"] },
  { slug: "misir", nameTr: "Közlenmiş Mısır", nameEn: "Grilled Corn on the Cob", restaurant: "Sokak Tezgâhı", price: 50, macros: [180, 5, 38, 3], modes: ["vegan", "economic", "tourist"], vegan: true, healthy: true, category: "general", tag: ["SAHİL KLASİĞİ", "SEASIDE CLASSIC"], desc: ["Kömürde közlenmiş ya da haşlanmış koçan mısır, tuzla.", "Corn on the cob, charcoal-grilled or boiled, with salt."], region: ["Sahil yürüyüşlerinin klasiği", "A classic of seaside walks"] },
  { slug: "lokma", nameTr: "Lokma", nameEn: "Lokma", restaurant: "Lokmacı", price: 90, macros: [420, 5, 64, 16], modes: ["vegan", "cheat_day", "economic", "tourist"], vegan: true, healthy: false, category: "dessert", tag: ["SICAK SICAK", "SERVED HOT"], desc: ["Sıcak yağda kızartılıp şerbete atılan küçük hamur topları.", "Small dough balls fried and dipped in syrup."], region: ["İzmir'de hayır için dağıtılan tatlı", "Izmir's dessert shared for good luck"] },
  { slug: "boyoz", nameTr: "Boyoz", nameEn: "Boyoz", restaurant: "Boyozcu", price: 45, macros: [330, 7, 34, 19], modes: ["vegan", "economic", "tourist"], vegan: true, healthy: false, category: "flatbread", tag: ["İZMİR SABAHI", "IZMIR MORNING"], desc: ["Tahinli hamurdan yapılan, kat kat çıtır çörek.", "A flaky pastry made with tahini dough."], region: ["İzmir'in Sefarad mirası kahvaltısı", "Izmir's Sephardic breakfast heritage"] },

  // ---- Fit / light protein ----
  { slug: "semizotu-salatasi", nameTr: "Yoğurtlu Semizotu", nameEn: "Purslane with Yogurt", restaurant: "Meze Evi", price: 95, macros: [130, 7, 9, 7], modes: ["fit", "economic"], vegan: false, healthy: true, category: "meze", tag: ["OMEGA-3 DESTEĞİ", "OMEGA-3 BOOST"], desc: ["Taze semizotu, sarımsaklı süzme yoğurtla.", "Fresh purslane folded into garlicky strained yogurt."], region: ["Yaz aylarının serinletici mezesi", "A cooling summer meze"], animal: ["Yoğurt (süt ürünü)", "Yogurt (dairy)"] },
  { slug: "izgara-levrek", nameTr: "Izgara Levrek", nameEn: "Grilled Sea Bass", restaurant: "Balıkçı", price: 340, macros: [380, 42, 4, 22], modes: ["fit", "gourmet"], vegan: false, healthy: true, category: "general", tag: ["TAZE DENİZ ÜRÜNÜ", "FRESH SEAFOOD"], desc: ["Bütün levrek, kömür ateşinde, roka ve limonla.", "Whole sea bass over charcoal, with arugula and lemon."], region: ["Marmara balıkçılarının klasiği", "A classic of Marmara fish houses"], animal: ["Balık", "Fish"] },
  { slug: "izgara-cipura", nameTr: "Izgara Çipura", nameEn: "Grilled Sea Bream", restaurant: "Balıkçı", price: 330, macros: [360, 40, 2, 21], modes: ["fit", "gourmet", "tourist"], vegan: false, healthy: true, category: "general", tag: ["OMEGA-3 ZENGİNİ", "RICH IN OMEGA-3"], desc: ["Bütün çipura, zeytinyağı ve kekikle ızgarada.", "Whole sea bream grilled with olive oil and thyme."], region: ["Ege kıyılarının balık sofrası", "The fish table of the Aegean coast"], animal: ["Balık", "Fish"] },
  { slug: "ton-balikli-salata", nameTr: "Ton Balıklı Salata", nameEn: "Tuna Salad", restaurant: "Salata Bar", price: 175, macros: [330, 28, 18, 16], modes: ["fit", "economic"], vegan: false, healthy: true, category: "meze", tag: ["PRATİK PROTEİN", "QUICK PROTEIN"], desc: ["Ton balığı, mısır, havuç ve yeşilliklerle hafif bir kase.", "Tuna, corn, carrot and greens in a light bowl."], region: ["Şehir hayatının pratik öğle yemeği", "A quick city lunch"], animal: ["Balık", "Fish"] },
  { slug: "hellim-salata", nameTr: "Hellimli Salata", nameEn: "Halloumi Salad", restaurant: "Salata Bar", price: 190, macros: [360, 20, 14, 25], modes: ["fit", "gourmet"], vegan: false, healthy: true, category: "meze", tag: ["IZGARA PEYNİR", "GRILLED CHEESE"], desc: ["Izgara hellim dilimleri, taze yeşillik ve nar ekşisi.", "Grilled halloumi with fresh greens and pomegranate dressing."], region: ["Kıbrıs ve Akdeniz mutfağından", "From Cypriot and Mediterranean cooking"], animal: ["Hellim peyniri (süt ürünü)", "Halloumi (dairy)"] },
  { slug: "tavuk-sis", nameTr: "Tavuk Şiş", nameEn: "Chicken Shish", restaurant: "Ocakbaşı", price: 210, macros: [420, 45, 18, 18], modes: ["fit", "economic"], vegan: false, healthy: true, category: "kebab", tag: ["YAĞSIZ PROTEİN", "LEAN PROTEIN"], desc: ["Yoğurt ve baharatla marine edilmiş tavuk, közde.", "Chicken marinated in yogurt and spices, grilled over coals."], region: ["Ocakbaşlarının en hafif kebabı", "The lightest kebab of the grill house"], animal: ["Tavuk eti", "Chicken"] },
  { slug: "cacik", nameTr: "Cacık", nameEn: "Cacık (Yogurt & Cucumber)", restaurant: "Mahalle Lokantası", price: 70, macros: [110, 6, 8, 6], modes: ["fit", "economic"], vegan: false, healthy: true, category: "soup", tag: ["SERİNLETİCİ", "COOLING"], desc: ["Süzme yoğurt, salatalık, sarımsak ve nane.", "Yogurt with cucumber, garlic and mint."], region: ["Kebap sofralarının serin eşlikçisi", "The cool companion of kebab tables"], animal: ["Yoğurt (süt ürünü)", "Yogurt (dairy)"] },
  { slug: "yumurtali-ispanak", nameTr: "Yumurtalı Ispanak", nameEn: "Spinach with Eggs", restaurant: "Kahvaltı Evi", price: 120, macros: [260, 16, 12, 16], modes: ["fit", "economic"], vegan: false, healthy: true, category: "general", tag: ["DEMİR DEPOSU", "IRON RICH"], desc: ["Soğanla kavrulmuş ıspanağın üstüne kırılan yumurtalar.", "Sautéed spinach with eggs cracked on top."], region: ["Ev kahvaltılarının hafif yıldızı", "A light star of home breakfasts"], animal: ["Yumurta", "Eggs"] },
  { slug: "lor-omlet", nameTr: "Lor Peynirli Omlet", nameEn: "Omelette with Curd Cheese", restaurant: "Kahvaltı Evi", price: 115, macros: [300, 24, 3, 21], modes: ["fit", "economic"], vegan: false, healthy: true, category: "general", tag: ["KAHVALTI PROTEİNİ", "BREAKFAST PROTEIN"], desc: ["Üç yumurta ve az tuzlu lor peyniriyle yumuşak omlet.", "A soft three-egg omelette with low-salt curd cheese."], region: ["Türk kahvaltısının vazgeçilmezi", "A Turkish breakfast staple"], animal: ["Yumurta ve peynir", "Eggs and cheese"] },
  { slug: "sebzeli-omlet", nameTr: "Otlu Omlet", nameEn: "Herb Omelette", restaurant: "Kahvaltı Evi", price: 110, macros: [260, 16, 6, 19], modes: ["fit", "economic"], vegan: false, healthy: true, category: "general", tag: ["YEŞİLLİKLİ", "WITH GREENS"], desc: ["Maydanoz, dereotu ve yeşil soğanla yumurta.", "Eggs with parsley, dill and spring onion."], region: ["Ev kahvaltılarının hafif seçeneği", "A light home breakfast"], animal: ["Yumurta", "Eggs"] },
  { slug: "firinda-tavuk", nameTr: "Fırında Sebzeli Tavuk", nameEn: "Roast Chicken with Vegetables", restaurant: "Ev Yemekleri", price: 230, macros: [480, 46, 22, 22], modes: ["fit", "economic"], vegan: false, healthy: true, category: "general", tag: ["FIRIN KLASİĞİ", "OVEN CLASSIC"], desc: ["Patates ve havuçla fırınlanan baharatlı tavuk.", "Spiced chicken roasted with potatoes and carrots."], region: ["Pazar sofralarının klasiği", "A Sunday table classic"], animal: ["Tavuk eti", "Chicken"] },
  { slug: "yayla-corbasi", nameTr: "Yayla Çorbası", nameEn: "Yogurt & Rice Soup", restaurant: "Çorba Evi", price: 80, macros: [190, 8, 24, 7], modes: ["fit", "economic"], vegan: false, healthy: true, category: "soup", tag: ["YOĞURTLU VE NANELİ", "YOGURT & MINT"], desc: ["Yoğurt, pirinç ve kuru naneyle hafif ekşi çorba.", "A tangy soup of yogurt, rice and dried mint."], region: ["Anadolu yaylalarından", "From the Anatolian highlands"], animal: ["Yoğurt (süt ürünü)", "Yogurt (dairy)"] },
  { slug: "kuzu-sis", nameTr: "Kuzu Şiş", nameEn: "Lamb Shish", restaurant: "Ocakbaşı", price: 380, macros: [560, 42, 14, 37], modes: ["fit", "gourmet", "cheat_day"], vegan: false, healthy: false, category: "kebab", tag: ["USTA İŞİ IZGARA", "MASTER GRILL"], desc: ["Kuzu but kuşbaşı, közlenmiş biber ve domatesle.", "Cubed leg of lamb with charred peppers and tomatoes."], region: ["Ocakbaşı kültürünün klasiği", "A classic of grill-house culture"], animal: ["Kuzu eti", "Lamb"] },

  // ---- Cheat day / street food / desserts ----
  { slug: "sucuklu-pide", nameTr: "Kaşarlı Sucuklu Pide", nameEn: "Pide with Sucuk & Cheese", restaurant: "Pideci", price: 210, macros: [820, 34, 80, 40], modes: ["cheat_day", "economic"], vegan: false, healthy: false, category: "flatbread", tag: ["TAŞ FIRINDAN", "STONE-OVEN CRISP"], desc: ["Taş fırında kaşar ve sucukla pişmiş, tereyağlı kayık pide.", "Boat-shaped pide with sucuk and kaşar, brushed with butter."], region: ["Karadeniz pidecilerinin favorisi", "A favorite of Black Sea pide bakers"], animal: ["Sucuk ve peynir", "Sucuk and cheese"] },
  { slug: "hamsi-tava", nameTr: "Hamsi Tava", nameEn: "Pan-Fried Anchovies", restaurant: "Balıkçı", price: 220, macros: [520, 32, 22, 33], modes: ["cheat_day", "tourist", "economic"], vegan: false, healthy: false, category: "general", tag: ["KARADENİZ KLASİĞİ", "BLACK SEA CLASSIC"], desc: ["Mısır ununa bulanıp tavada çıtırlatılan taze hamsi.", "Fresh anchovies dusted in cornmeal and pan-fried crisp."], region: ["Karadeniz'in kış simgesi", "The winter icon of the Black Sea"], animal: ["Balık", "Fish"] },
  { slug: "islama-kofte", nameTr: "Islama Köfte", nameEn: "Islama Köfte", restaurant: "Köfteci", price: 260, macros: [780, 36, 60, 44], modes: ["cheat_day", "tourist"], vegan: false, healthy: false, category: "kebab", tag: ["ADAPAZARI USULÜ", "ADAPAZARI STYLE"], desc: ["Et suyuna banılmış ekmek üzerinde ızgara köfte.", "Grilled meatballs on bread soaked in rich meat broth."], region: ["Sakarya'nın tescilli lezzeti", "Sakarya's registered specialty"], animal: ["Dana eti", "Beef"] },
  { slug: "ciger-sis", nameTr: "Ciğer Şiş", nameEn: "Liver Kebab", restaurant: "Ciğerci", price: 280, macros: [480, 38, 20, 27], modes: ["cheat_day", "gourmet", "tourist"], vegan: false, healthy: false, category: "kebab", tag: ["SABAH CİĞERİ", "BREAKFAST LIVER"], desc: ["Kuyruk yağıyla şişe dizilen kuzu ciğeri, közde.", "Lamb liver skewered with tail fat and grilled over coals."], region: ["Gaziantep ve Urfa'nın sabah geleneği", "A morning ritual in Gaziantep and Urfa"], animal: ["Kuzu ciğeri", "Lamb liver"] },
  { slug: "midye-dolma", nameTr: "Midye Dolma", nameEn: "Stuffed Mussels", restaurant: "Midyeci", price: 150, macros: [380, 18, 48, 13], modes: ["cheat_day", "tourist", "economic"], vegan: false, healthy: false, category: "general", tag: ["SOKAK LEZZETİ", "STREET FOOD"], desc: ["Baharatlı pirinçle doldurulmuş midyeler, limonla.", "Mussels filled with spiced rice, squeezed with lemon."], region: ["İzmir ve İstanbul sokaklarının gece klasiği", "A night classic of Izmir and Istanbul streets"], animal: ["Midye", "Mussels"] },
  { slug: "tulumba", nameTr: "Tulumba Tatlısı", nameEn: "Tulumba", restaurant: "Tatlıcı", price: 110, macros: [480, 5, 70, 20], modes: ["cheat_day", "economic"], vegan: false, healthy: false, category: "dessert", tag: ["ŞERBETLİ KLASİK", "SYRUPY CLASSIC"], desc: ["Kızartılıp şerbete batırılan çıtır hamur tatlısı.", "Fried ridged dough soaked in syrup."], region: ["Pastanelerin şerbetli klasiği", "A syrupy pastry-shop classic"], animal: ["Yumurta", "Eggs"] },
  { slug: "kazandibi", nameTr: "Kazandibi", nameEn: "Kazandibi", restaurant: "Muhallebici", price: 120, macros: [380, 9, 60, 11], modes: ["cheat_day", "gourmet", "tourist"], vegan: false, healthy: false, category: "dessert", tag: ["KARAMELİZE MUHALLEBİ", "CARAMELIZED PUDDING"], desc: ["Tabanı yakılarak karamelize edilmiş sütlü tatlı.", "Milk pudding with a deliberately caramelized bottom."], region: ["Osmanlı saray mutfağından", "From the Ottoman palace kitchen"], animal: ["Süt", "Milk"] },
  { slug: "sobiyet", nameTr: "Şöbiyet", nameEn: "Şöbiyet", restaurant: "Baklavacı", price: 210, macros: [560, 10, 58, 32], modes: ["cheat_day", "gourmet"], vegan: false, healthy: false, category: "dessert", tag: ["KAYMAKLI BAKLAVA", "CREAM BAKLAVA"], desc: ["İnce yufka içinde kaymak ve Antep fıstığı.", "Thin phyllo filled with clotted cream and pistachio."], region: ["Gaziantep baklavacılarının incisi", "A gem of Gaziantep's baklava makers"], animal: ["Kaymak ve tereyağı", "Clotted cream and butter"] },
  { slug: "ekmek-kadayifi", nameTr: "Kaymaklı Ekmek Kadayıfı", nameEn: "Bread Kadayıf with Kaymak", restaurant: "Tatlıcı", price: 160, macros: [520, 8, 72, 22], modes: ["cheat_day", "gourmet"], vegan: false, healthy: false, category: "dessert", tag: ["KAYMAKLA", "WITH KAYMAK"], desc: ["Şerbet çekmiş ekmek kadayıfı, kalın kaymak dilimiyle.", "Syrup-soaked bread dessert with a thick slab of kaymak."], region: ["Afyon ve Bursa'nın tatlı geleneği", "A dessert tradition of Afyon and Bursa"], animal: ["Kaymak (süt ürünü)", "Kaymak (dairy)"] },
  { slug: "cig-borek", nameTr: "Çiğ Börek", nameEn: "Çiğ Börek", restaurant: "Börekçi", price: 120, macros: [560, 20, 50, 31], modes: ["cheat_day", "tourist", "economic"], vegan: false, healthy: false, category: "flatbread", tag: ["ESKİŞEHİR USULÜ", "ESKISEHIR STYLE"], desc: ["İnce hamura kıymalı iç konup kızgın yağda kabaran börek.", "Thin dough filled with spiced minced meat, puffed in hot oil."], region: ["Eskişehir'in Tatar mutfağından", "From Eskişehir's Tatar kitchen"], animal: ["Dana kıyması", "Minced beef"] },
  { slug: "islak-hamburger", nameTr: "Islak Hamburger", nameEn: "Wet Burger", restaurant: "Büfe", price: 75, macros: [420, 16, 40, 22], modes: ["cheat_day", "economic", "tourist"], vegan: false, healthy: false, category: "burger", tag: ["GECE YARISI KLASİĞİ", "MIDNIGHT CLASSIC"], desc: ["Sarımsaklı domates sosuna batırılıp buharda bekletilen yumuşak burger.", "A soft burger soaked in garlicky tomato sauce and steamed."], region: ["Taksim gecelerinin efsanesi", "A legend of Taksim nights"], animal: ["Dana eti", "Beef"] },
  { slug: "maras-dondurmasi", nameTr: "Maraş Dondurması", nameEn: "Maraş Ice Cream", restaurant: "Dondurmacı", price: 140, macros: [330, 6, 44, 15], modes: ["cheat_day", "tourist"], vegan: false, healthy: false, category: "dessert", tag: ["SALEPLİ", "WITH SALEP"], desc: ["Salep ve keçi sütüyle yapılan, bıçakla kesilen uzayan dondurma.", "Stretchy ice cream made with salep and goat's milk."], region: ["Kahramanmaraş'ın dünyaca ünlü dondurması", "Kahramanmaraş's world-famous ice cream"], animal: ["Keçi sütü", "Goat's milk"] },
  { slug: "revani", nameTr: "Revani", nameEn: "Revani", restaurant: "Tatlıcı", price: 85, macros: [400, 6, 64, 13], modes: ["cheat_day", "economic"], vegan: false, healthy: false, category: "dessert", tag: ["İRMİKLİ ŞERBETLİ", "SEMOLINA SYRUP CAKE"], desc: ["İrmikli kekin şerbetle buluşup yumuşacık olması.", "A semolina sponge soaked in light syrup."], region: ["Ev tatlılarının klasiği", "A home-dessert classic"], animal: ["Yumurta", "Eggs"] },
  { slug: "pacanga-boregi", nameTr: "Paçanga Böreği", nameEn: "Paçanga Börek", restaurant: "Börekçi", price: 170, macros: [540, 24, 36, 33], modes: ["cheat_day", "gourmet"], vegan: false, healthy: false, category: "flatbread", tag: ["PASTIRMALI", "WITH PASTIRMA"], desc: ["Pastırma ve kaşarla sarılıp kızartılan çıtır börek.", "Crispy rolls of pastırma and kaşar cheese."], region: ["Kayseri ve Sefarad mutfağından", "From Kayseri and Sephardic cooking"], animal: ["Pastırma ve peynir", "Pastırma and cheese"] },
  { slug: "waffle", nameTr: "Meyveli Çikolatalı Waffle", nameEn: "Waffle with Fruit & Chocolate", restaurant: "Waffle Büfesi", price: 190, macros: [720, 11, 92, 34], modes: ["cheat_day"], vegan: false, healthy: false, category: "dessert", tag: ["ORTAKÖY USULÜ", "ORTAKÖY STYLE"], desc: ["Sıcak waffle, çikolata sosu ve taze meyvelerle.", "A warm waffle with chocolate sauce and fresh fruit."], region: ["Ortaköy sahilinin favorisi", "An Ortaköy seaside favorite"], animal: ["Süt ve yumurta", "Milk and eggs"] },
  { slug: "kuymak", nameTr: "Kuymak / Mıhlama", nameEn: "Kuymak", restaurant: "Karadeniz Sofrası", price: 180, macros: [620, 18, 40, 43], modes: ["cheat_day", "gourmet", "tourist"], vegan: false, healthy: false, category: "general", tag: ["UZAYAN PEYNİR", "STRETCHY CHEESE"], desc: ["Mısır unu, tereyağı ve Trabzon peynirinin uzayan buluşması.", "Cornmeal, butter and stretchy cheese cooked together."], region: ["Karadeniz yaylalarının kahvaltısı", "Breakfast of the Black Sea highlands"], animal: ["Tereyağı ve peynir", "Butter and cheese"] },
  { slug: "kuzu-tandir", nameTr: "Kuzu Tandır", nameEn: "Lamb Tandır", restaurant: "Tandırcı", price: 420, macros: [680, 50, 12, 48], modes: ["cheat_day", "gourmet", "tourist"], vegan: false, healthy: false, category: "kebab", tag: ["SAATLERCE PİŞEN", "SLOW ROASTED"], desc: ["Tandırda saatlerce pişip kemikten ayrılan kuzu, pilavla.", "Lamb slow-roasted for hours until it falls off the bone."], region: ["Anadolu'nun tandır geleneği", "Anatolia's tandır tradition"], animal: ["Kuzu eti", "Lamb"] },
  { slug: "fistikli-sarma", nameTr: "Fıstıklı Sarma", nameEn: "Pistachio Sarma", restaurant: "Baklavacı", price: 260, macros: [600, 12, 52, 39], modes: ["cheat_day", "gourmet"], vegan: false, healthy: false, category: "dessert", tag: ["ANTEP FISTIĞIYLA", "WITH ANTEP PISTACHIO"], desc: ["Bol Antep fıstıklı, tereyağlı yufka sarması.", "Butter-rich phyllo rolls packed with Antep pistachio."], region: ["Gaziantep baklavacılarından", "From Gaziantep's baklava makers"], animal: ["Tereyağı", "Butter"] },
  { slug: "kofte-piyaz", nameTr: "Köfte & Piyaz", nameEn: "Köfte with Bean Salad", restaurant: "Köfteci", price: 240, macros: [640, 38, 46, 32], modes: ["economic", "cheat_day"], vegan: false, healthy: false, category: "kebab", tag: ["ESNAF USULÜ", "DINER STYLE"], desc: ["Izgara köfte, yanında tahinli fasulye piyazı.", "Grilled köfte with a white bean and tahini salad."], region: ["Köftecilerin klasik ikilisi", "The classic duo of köfte houses"], animal: ["Dana eti", "Beef"] },

  // ---- Gourmet / regional ----
  { slug: "hamsili-pilav", nameTr: "Hamsili Pilav", nameEn: "Anchovy Rice", restaurant: "Karadeniz Sofrası", price: 240, macros: [540, 26, 62, 20], modes: ["gourmet", "tourist"], vegan: false, healthy: false, category: "general", tag: ["KARADENİZ FIRINI", "BLACK SEA BAKE"], desc: ["Hamsiyle sarılıp fırınlanan baharatlı iç pilav.", "Spiced rice wrapped in anchovies and baked."], region: ["Karadeniz'in fırın klasiği", "A Black Sea oven classic"], animal: ["Balık", "Fish"] },
  { slug: "etli-ekmek", nameTr: "Etli Ekmek", nameEn: "Etli Ekmek", restaurant: "Etli Ekmekçi", price: 200, macros: [620, 32, 70, 22], modes: ["gourmet", "tourist", "cheat_day"], vegan: false, healthy: false, category: "flatbread", tag: ["KONYA USULÜ", "KONYA STYLE"], desc: ["Metrelik ince hamur üzerinde kıyma, taş fırında.", "Long thin flatbread topped with minced meat, stone-baked."], region: ["Konya'nın tescilli lezzeti", "Konya's registered specialty"], animal: ["Dana kıyması", "Minced beef"] },
  { slug: "tepsi-kebabi", nameTr: "Tepsi Kebabı", nameEn: "Tray Kebab", restaurant: "Kebapçı", price: 290, macros: [640, 38, 20, 45], modes: ["gourmet", "tourist"], vegan: false, healthy: false, category: "kebab", tag: ["HATAY USULÜ", "HATAY STYLE"], desc: ["Tepsiye yayılan zırh kıyması, domates ve biberle fırında.", "Hand-minced meat spread in a tray, baked with tomato and pepper."], region: ["Hatay ve Urfa mutfağından", "From Hatay and Urfa cooking"], animal: ["Dana ve kuzu eti", "Beef and lamb"] },
  { slug: "keskek", nameTr: "Keşkek", nameEn: "Keşkek", restaurant: "Ev Yemekleri", price: 230, macros: [520, 34, 50, 20], modes: ["gourmet", "tourist"], vegan: false, healthy: false, category: "general", tag: ["UNESCO MİRASI", "UNESCO HERITAGE"], desc: ["Dövme buğday ve etin saatlerce dövülerek pişmesi.", "Pounded wheat and meat slow-cooked for hours."], region: ["UNESCO listesindeki düğün yemeği", "A wedding dish on UNESCO's list"], animal: ["Et", "Meat"] },
  { slug: "kuzu-kapama", nameTr: "Kuzu Kapama", nameEn: "Lamb Kapama", restaurant: "Ev Yemekleri", price: 380, macros: [620, 44, 22, 38], modes: ["gourmet"], vegan: false, healthy: false, category: "general", tag: ["AĞIR ATEŞTE", "SLOW COOKED"], desc: ["Kuzu incik, sebzelerle kapalı kapta kendi suyunda pişer.", "Lamb shank braised with vegetables in a sealed pot."], region: ["Bursa ve Edirne mutfağından", "From Bursa and Edirne cooking"], animal: ["Kuzu eti", "Lamb"] },
  { slug: "kaburga-dolmasi", nameTr: "Kaburga Dolması", nameEn: "Stuffed Lamb Ribs", restaurant: "Diyarbakır Sofrası", price: 460, macros: [760, 46, 48, 42], modes: ["gourmet", "cheat_day"], vegan: false, healthy: false, category: "general", tag: ["ŞÖLEN SOFRASI", "FEAST TABLE"], desc: ["İçi baharatlı pilavla doldurulup fırınlanan kuzu kaburgası.", "Lamb ribs stuffed with spiced rice and roasted."], region: ["Diyarbakır mutfağının şölen yemeği", "A feast dish of Diyarbakır"], animal: ["Kuzu eti", "Lamb"] },
  { slug: "kelle-paca", nameTr: "Kelle Paça Çorbası", nameEn: "Head & Trotter Soup", restaurant: "Çorba Evi", price: 170, macros: [380, 26, 18, 22], modes: ["gourmet", "tourist"], vegan: false, healthy: false, category: "soup", tag: ["ŞİFA KAYNAĞI", "HEALING SOUP"], desc: ["Kuzu paçasıyla saatlerce kaynayan, sarımsaklı sirkeli çorba.", "Slow-simmered lamb trotter soup with garlic and vinegar."], region: ["Kış sabahlarının geleneksel çorbası", "A traditional winter-morning soup"], animal: ["Kuzu eti", "Lamb"] },
  { slug: "muhallebi", nameTr: "Fıstıklı Muhallebi", nameEn: "Pistachio Muhallebi", restaurant: "Muhallebici", price: 95, macros: [290, 8, 44, 9], modes: ["gourmet", "economic"], vegan: false, healthy: false, category: "dessert", tag: ["HAFİF SÜTLÜ", "LIGHT MILK PUDDING"], desc: ["Pirinç unuyla koyulaşan, gül suyu ve fıstıklı muhallebi.", "Rice-flour milk pudding with rosewater and pistachio."], region: ["Muhallebicilerin klasiği", "A pudding-shop classic"], animal: ["Süt", "Milk"] },
  { slug: "tavuk-gogsu-tatlisi", nameTr: "Tavuk Göğsü Tatlısı", nameEn: "Tavuk Göğsü Pudding", restaurant: "Muhallebici", price: 130, macros: [320, 12, 46, 9], modes: ["gourmet", "tourist"], vegan: false, healthy: false, category: "dessert", tag: ["SARAY TATLISI", "PALACE DESSERT"], desc: ["İnce didilmiş tavuk göğsüyle yapılan tarçınlı sütlü tatlı.", "Milk pudding with finely shredded chicken breast, dusted with cinnamon."], region: ["Osmanlı saray mutfağının sıra dışı tatlısı", "An unusual dessert of the Ottoman palace"], animal: ["Tavuk ve süt", "Chicken and milk"] }
];

// Small deterministic variation so cards do not all look alike.
const seed = (s: string) => [...s].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);

const buildInsights = (d: DishSpec): MenuItem["aiInsights"] => {
  const [cal, protein, , fat] = d.macros;
  const light = cal <= 400 && fat <= 18;
  const animalTr = d.animal?.[0] ?? "Hayvansal ürün";
  const animalEn = d.animal?.[1] ?? "Animal products";
  return {
    tr: {
      fit: light
        ? `${protein} g protein ve ${cal} kcal. Diyet gününe rahatça sığan hafif bir tabak.`
        : protein >= 30
          ? `${protein} g protein ama ${fat} g yağ var. Porsiyonu küçük tutarsan dengeli kalır.`
          : `${cal} kcal ile diyet için ağır kaçar; yarım porsiyon daha mantıklı.`,
      cheat_day: cal >= 500
        ? `${cal} kcal ile tam bir kaçamak günü ödülü. ${d.desc[0]}`
        : "Cheat day için hafif kalır; yanına bir tatlı ekleyebilirsin.",
      economic: d.price <= 120
        ? `${d.price} ₺ fiyatıyla cebi yormayan, doyurucu bir seçenek.`
        : d.price <= 230
          ? `${d.price} ₺ ile makul fiyatlı ve doyurucu bir öğün.`
          : `${d.price} ₺ biraz pahalı ama özel bir gün için değer.`,
      gourmet: d.desc[0],
      vegan: d.vegan
        ? "Hiçbir hayvansal ürün içermez; %100 bitkisel."
        : `${animalTr} içerir, vegan beslenmeye uygun değildir.`,
      tourist: `${d.region[0]}. Yerel lezzet arayan gezginler için güzel bir seçim.`
    },
    en: {
      fit: light
        ? `${protein} g protein and ${cal} kcal. A light plate that fits a diet day.`
        : protein >= 30
          ? `${protein} g protein but ${fat} g fat. Keep the portion small to stay balanced.`
          : `At ${cal} kcal it is heavy for a diet; a half portion makes more sense.`,
      cheat_day: cal >= 500
        ? `${cal} kcal: a proper cheat-day reward. ${d.desc[1]}`
        : "Light for a cheat day; add a dessert on the side.",
      economic: d.price <= 120
        ? `At ₺${d.price}, an affordable and filling choice.`
        : d.price <= 230
          ? `At ₺${d.price}, a fairly priced, filling meal.`
          : `At ₺${d.price} it is pricey, but worth it for a special day.`,
      gourmet: d.desc[1],
      vegan: d.vegan
        ? "Contains no animal products; 100% plant-based."
        : `Contains ${animalEn.toLowerCase()}. Not suitable for vegans.`,
      tourist: `${d.region[1]}. A good pick for travelers looking for local food.`
    }
  };
};

export const extraFoodItems: MenuItem[] = DISHES.map((d) => {
  const h = seed(d.slug);
  const [calories, protein, carbs, fat] = d.macros;
  return {
    id: `more_${d.slug.replace(/-/g, "_")}`,
    nameTr: d.nameTr,
    nameEn: d.nameEn,
    restaurant: d.restaurant,
    price: d.price,
    currency: "₺",
    rating: Math.round((4.3 + (h % 6) * 0.1) * 10) / 10,
    reviewCount: `${(2 + (h % 14)) * 100}+`,
    calories,
    protein,
    carbs,
    fat,
    imageUrl: `/images/${d.slug}.jpg`,
    matchTagTr: d.tag[0],
    matchTagEn: d.tag[1],
    isHealthy: d.healthy,
    isVegan: d.vegan,
    category: d.category,
    modes: d.modes,
    aiInsights: buildInsights(d)
  };
});
