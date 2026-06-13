export interface MenuItem {
  id: string;
  nameTr: string;
  nameEn: string;
  restaurant: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  imageUrl: string;
  matchTagTr: string;
  matchTagEn: string;
  isHealthy: boolean;
  isVegan: boolean;
  category: string;
  isSponsored?: boolean;
  sponsorDiscount?: number;
  sponsorCoupon?: string;
  aiInsights: {
    tr: {
      fit: string;
      cheat_day: string;
      economic: string;
      gourmet: string;
      vegan: string;
    };
    en: {
      fit: string;
      cheat_day: string;
      economic: string;
      gourmet: string;
      vegan: string;
    };
  };
}

export const mockFoodItems: MenuItem[] = [
  // ==========================================
  // NON-VEGAN DISHES (15 items)
  // ==========================================
  {
    id: "1",
    nameTr: "Klasik Wagyu Burger",
    nameEn: "Classic Wagyu Burger",
    restaurant: "Burger & Co.",
    price: 185.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "2.4k+",
    calories: 650,
    protein: 42,
    carbs: 40,
    fat: 32,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SAĞLIKLI SEÇİM EŞLEŞMESİ",
    matchTagEn: "HEALTHY CHOICE MATCH",
    isHealthy: true,
    isVegan: false,
    category: "Burger",
    aiInsights: {
      tr: {
        fit: "42g kaliteli protein ile spor sonrası ihtiyaçlarınızı mükemmel karşılar. Mayonezsiz isteyerek 100 kalori tasarruf edebilirsiniz!",
        cheat_day: "Wagyu eti ağzınızda tereyağı gibi erir çünkü mermerimsi yağ dokusu yoğundur. Bugün suçluluk duymadan tadını çıkarın!",
        economic: "185.00 ₺ fiyatıyla biraz premium, ancak kalori/fiyat oranı oldukça yüksek ve wagyu eti çok doyurucu.",
        gourmet: "Dinlendirilmiş Wagyu eti, ev yapımı trüflü mayonez ve el yapımı brioche ekmeği. Sokak lezzetlerinin başyapıtı.",
        vegan: "Wagyu eti ve süt peyniri içerir. Kesinlikle vegan değil. Hemen sola kaydırın!"
      },
      en: {
        fit: "With 42g of high-quality protein, it fits your post-workout needs perfectly. Just consider asking for no mayo to shave off 100 calories of pure fat!",
        cheat_day: "Wagyu beef melts in your mouth like butter because it is loaded with marbled fat. Today is the day to enjoy every single bite without a shred of guilt!",
        economic: "At ₺185.00, this is on the premium side, but the calorie-to-dollar ratio is highly dense, and it is a massive portion of prime wagyu.",
        gourmet: "Aged Wagyu brisket patty, house-made truffle aioli, and artisanal brioche bun. It is a masterpiece of street-food engineering.",
        vegan: "Contains prime Wagyu beef and dairy cheese. Definitely NOT vegan. Swipe left immediately!"
      }
    }
  },
  {
    id: "2",
    nameTr: "Adana Kebap",
    nameEn: "Adana Kebap",
    restaurant: "Kebapçı Bilal",
    price: 195.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "3.5k+",
    calories: 720,
    protein: 48,
    carbs: 35,
    fat: 45,
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "YÜKSEK PROTEİN EŞLEŞMESİ",
    matchTagEn: "HIGH PROTEIN MATCH",
    isHealthy: false,
    isVegan: false,
    category: "Kebab",
    aiInsights: {
      tr: {
        fit: "Tam bir protein bombası (+48g!). Karbonhidratı düşük tutmak için lavaş ve bulguru atlayıp demir zengini kuzu etinin tadını çıkarın.",
        cheat_day: "Alevlerin öptüğü o nefis kuyruk yağı lezzetin sırrıdır. Yanına buz gibi şalgam söyleyip ziyafeti başlatın!",
        economic: "Zırh kıyması kebap, közlenmiş domates, biber ve bulgurla dolu devasa bir tabak. 195.00 ₺ için son derece doyurucu.",
        gourmet: "Kuyruk yağı ile harmanlanmış elde kıyılmış kuzu eti, meşe kömüründe pişmiş. Geleneksel mutfak sanatının zirvesi.",
        vegan: "%100 kuzu eti ve kuyruk yağı içerir. Bitkisel beslenmeden çok uzak. Sola kaydırın."
      },
      en: {
        fit: "An absolute protein bomb (+48g!). Skip the lavaash and bulgur if you want to keep it low-carb, and enjoy the pure iron-rich lamb.",
        cheat_day: "That juicy, flame-kissed tail fat is where the magic lives. Pair it with an ice-cold şalgam and let the flavor feast begin!",
        economic: "A massive plate filled with hand-minced kebab, grilled tomatoes, peppers, and bulgur. Extremely satisfying meal size for ₺195.00.",
        gourmet: "Hand-minced lamb leg fat-blended with local red peppers and grilled over real oak charcoal. This is traditional culinary art at its peak.",
        vegan: "Made with 100% lamb meat and tail fat. Extremely far from plant-based. Keep swiping left."
      }
    }
  },
  {
    id: "3",
    nameTr: "Tavuk Sote",
    nameEn: "Chicken Saute",
    restaurant: "Lezzet Lokantası",
    price: 140.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "1.2k+",
    calories: 480,
    protein: 38,
    carbs: 45,
    fat: 12,
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "FİT SEÇİM EŞLEŞMESİ",
    matchTagEn: "FIT CHOICE MATCH",
    isHealthy: true,
    isVegan: false,
    category: "Home Cooking",
    isSponsored: true,
    sponsorDiscount: 15,
    sponsorCoupon: "SWIPEEAT15",
    aiInsights: {
      tr: {
        fit: "Son derece temiz profil! Düşük yağ (12g) ve 38g yağsız tavuk göğsü proteini birleşimiyle kas geliştirme için ideal.",
        cheat_day: "Kaçamak günü için biraz fazla sağlıklı ve yağsız. Ama bunu seçerseniz tatlı için bolca kalori alanınız kalır!",
        economic: "Pilav, salata ve ekmekle geliyor. Sponsorlu olduğu için %15 ekstra indirimle sadece 119.00 ₺! Harika fırsat.",
        gourmet: "Biber, taze domates ve hafif otlarla yavaşça pişirilmiş bir esnaf klasiği. Tıpkı anne eli değmiş gibi.",
        vegan: "Tavuk göğsü ana malzemedir. Veganlar için uygun değil. Keşfe devam edin!"
      },
      en: {
        fit: "Extremely clean profile! Low fat (12g) combined with 38g of lean chicken breast protein makes it the ultimate muscle-building fuel.",
        cheat_day: "A bit too lean and healthy for a wild cheat day. But hey, if you get this, you'll have plenty of calorie room left for dessert!",
        economic: "It comes with rice, salad, and bread. And since it's SPONSORED, you get an extra 15% off, making it only ₺119.00! Incredible value.",
        gourmet: "A comforting Turkish classic, simmered slowly with green peppers, fresh tomatoes, and mild herbs. It tastes like a warm hug from grandmother.",
        vegan: "Chicken breast is the main ingredient here. Not suitable for vegans. Keep looking!"
      }
    }
  },
  {
    id: "4",
    nameTr: "Lahmacun (2 Adet)",
    nameEn: "Lahmacun (2 Pieces)",
    restaurant: "Gaziantep Sofrası",
    price: 90.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "4.1k+",
    calories: 520,
    protein: 24,
    carbs: 65,
    fat: 18,
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "EN İYİ FİYAT/PERFORMANS",
    matchTagEn: "BEST VALUE MATCH",
    isHealthy: false,
    isVegan: false,
    category: "Flatbread",
    aiInsights: {
      tr: {
        fit: "İnce hamuru karbonhidratı pizzalardan daha düşük tutar. Mikrobesinleri artırmak için bol maydanoz, soğan ve limonla dürüm yapın!",
        cheat_day: "Sumaklı soğanla dürüm yapıp yiyin. Çok ağır hissettirmeyen ama sarımsak ve baharat lezzetiyle doyuran harika bir kaçamak.",
        economic: "İki adet çıtır çıtır kıymalı lahmacun sadece 90.00 ₺! Bugün doymanın en ucuz ve lezzetli yolu.",
        gourmet: "Taş fırında pişmiş incecik hamur, kıyılmış sığır eti, kuyruk yağı, domates ve sarımsak karışımıyla bezeli. Kusursuz lezzet.",
        vegan: "Kıyma ve kuzu yağı içerir. Sola kaydırın, ileride vegan lahmacun alternatifleri var!"
      },
      en: {
        fit: "The thin crust keeps carbs lower than thick pizzas, but wrap it around plenty of fresh parsley, onion, and lemon to boost the micronutrients!",
        cheat_day: "Eat them rolled up with sumac onions. It's the ultimate fast-food that doesn't feel heavy but packs massive garlic and spice flavor.",
        economic: "Only ₺90.00 for two pieces of crispy, meat-topped flatbread! It is by far the cheapest way to get full and happy today.",
        gourmet: "Stone-baked stone-ground wheat dough, topped with an authentic spiced mix of minced beef, tail fat, tomatoes, and garlic. Pure perfection.",
        vegan: "Topped with minced beef and lamb fat. Skip this one, we have vegan flatbreads ahead!"
      }
    }
  },
  {
    id: "5",
    nameTr: "Izgara Somon Filo",
    nameEn: "Grilled Salmon Fillet",
    restaurant: "Ocean Grill",
    price: 245.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "950+",
    calories: 540,
    protein: 44,
    carbs: 8,
    fat: 28,
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "OMEGA-3 SÜPER GIDA",
    matchTagEn: "OMEGA-3 SUPERFOOD",
    isHealthy: true,
    isVegan: false,
    category: "Seafood",
    aiInsights: {
      tr: {
        fit: "Temiz protein ve sağlıklı yağ deposu. Omega-3 yağ asitleri kas iltihabını azaltır ve toparlanmayı hızlandırır.",
        cheat_day: "Somon çok lezzetli ve tereyağı gibidir. Yanına tatlı patates kızartması ve soğuk bir şarap ekleyerek kaçamağa dönüştürün.",
        economic: "245.00 ₺ ile premium bir yemek, ancak taze yakalanmış yüksek kaliteli somon sağlığınız için bu fiyatı hak ediyor.",
        gourmet: "Çıtır somon derisi, sulu pembe içi, dereotlu tereyağı sosu ve fırınlanmış kuşkonmaz. Tam bir şıklık.",
        vegan: "Balık bir hayvan proteinidir. Vegan değil, sola kaydırın."
      },
      en: {
        fit: "A powerhouse of clean protein and healthy fats. Omega-3 fatty acids will reduce your muscle inflammation and boost recovery.",
        cheat_day: "Salmon is buttery and delicious, but maybe pair it with some sweet potato fries and a cold chardonnay to make it a real cheat meal.",
        economic: "At ₺245.00, it is a premium dish, but high-quality wild-caught salmon justifies the price point for your health.",
        gourmet: "Perfect crispy skin, tender pink center, topped with a dill-infused butter sauce and roasted baby asparagus. Absolute class.",
        vegan: "Fish is animal protein. Non-vegan, swipe left."
      }
    }
  },
  {
    id: "6",
    nameTr: "Tereyağlı Naan ile Butter Chicken",
    nameEn: "Butter Chicken with Naan",
    restaurant: "Taj Palace",
    price: 165.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "1.8k+",
    calories: 890,
    protein: 36,
    carbs: 85,
    fat: 46,
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "ZENGİN VE KREMASI COMFORT",
    matchTagEn: "RICH COMFORT FOOD",
    isHealthy: false,
    isVegan: false,
    category: "Indian",
    aiInsights: {
      tr: {
        fit: "Dikkatli olun! Yoğun krema, tereyağı ve naan ekmeği 890 kaloriye ulaştırıyor. Porsiyonu küçük tutun veya yarın kardiyoyu iki katına çıkarın.",
        cheat_day: "Kadifemsi domates-tereyağı sosunu sıcak sarımsaklı naan ekmeğiyle sıyırın. Kremamsı, baharatlı ve tam bir kaçamak klasiği!",
        economic: "Karbonhidratı bol, doyurucu bir yemek. 165.00 ₺ fiyatıyla sizi 12 saat tok tutabilir.",
        gourmet: "Yoğurt ve baharatla marine edilmiş tavuk, zengin domates, tereyağı ve krema sosunda pişmiş. Küresel bir favori.",
        vegan: "Tavuk, krema, sade yağ ve tereyağı içerir. Süt ürünleri yoğunluklu. Uzak durun!"
      },
      en: {
        fit: "Watch out! The heavy cream, butter, and naan push this to 890 kcal. Have a smaller portion or double your cardio tomorrow.",
        cheat_day: "Soak up that velvety tomato-butter gravy with warm, garlic-brushed naan. Creamy, spicy, and satisfying bliss!",
        economic: "A very heavy, carb-dense meal that will keep you full for 12 hours. Great absolute value for ₺165.00.",
        gourmet: "Tender chicken marinated in yogurt and spices, simmered in a complex spiced tomato, butter, and cream sauce. A global favorite.",
        vegan: "Contains chicken, heavy cream, ghee, and butter. Extremely dairy-heavy. Avoid!"
      }
    }
  },
  {
    id: "7",
    nameTr: "İskender Kebap",
    nameEn: "İskender Kebap",
    restaurant: "Bursa Kebapçısı",
    price: 210.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "2.8k+",
    calories: 950,
    protein: 46,
    carbs: 70,
    fat: 58,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "EFSANEVİ ET EŞLEŞMESİ",
    matchTagEn: "LEGENDARY MEAT MATCH",
    isHealthy: false,
    isVegan: false,
    category: "Kebab",
    aiInsights: {
      tr: {
        fit: "Çok lezzetli ancak tereyağı ve pide tabanı içeriyor. Tereyağını az isteyerek en az 250 kalori tasarruf edebilirsiniz.",
        cheat_day: "Masada dökülen kızgın tereyağı, domates soslu yumuşacık pideler, nefis yaprak döner ve tava yoğurdu. Cennet!",
        economic: "Üst segment fiyat, ancak kullanılan et kalitesi ve porsiyon büyüklüğü bu fiyatı sonuna kadar hak ediyor.",
        gourmet: "Çıtır tırnak pide üzerine serilmiş yaprak döner, sıcak domates sosu, eritilmiş tereyağı ve koyun yoğurdu. Efsanevi lezzet.",
        vegan: "Kuzu eti döner ve bol eritilmiş tereyağı. Vegan beslenmeye tamamen aykırı."
      },
      en: {
        fit: "Highly delicious but packed with butter and pita bread. Ask for butter on the side to save at least 250 calories of pure fat.",
        cheat_day: "Double butter poured sizzling hot at the table, over pita bread soaked in tomato sauce, rich lamb doner, and thick sheep's yogurt. Heaven!",
        economic: "High-end price, but the quality of lamb and sheer size of the plate makes it a worthy weekend investment.",
        gourmet: "Shaved lamb doner over crispy pide pieces, hot tomato sauce, melted browned butter, and creamy Turkish yogurt. Legendary.",
        vegan: "Thinly sliced lamb and hot melted butter over bread. Not vegan-friendly at all."
      }
    }
  },
  {
    id: "8",
    nameTr: "Klasik Pepperoni Pizza",
    nameEn: "Classic Pepperoni Pizza",
    restaurant: "Luigi's Pizzeria",
    price: 150.00,
    currency: "₺",
    rating: 4.6,
    reviewCount: "1.4k+",
    calories: 820,
    protein: 32,
    carbs: 90,
    fat: 36,
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "TÜM ZAMANLARIN KLASİĞİ",
    matchTagEn: "ALL TIME CLASSIC",
    isHealthy: false,
    isVegan: false,
    category: "Pizza",
    aiInsights: {
      tr: {
        fit: "Basit karbonhidrat ve doymuş yağ oranı yüksek. Kas inşa ediyorsanız protein desteği sağlar ancak nadir kaçamaklar için saklayın.",
        cheat_day: "Erimiş mozzarella üzerinde çıtır çıtır pepperoni dilimleri. Her diliminde saf mutluluk barındıran konfor yemeği.",
        economic: "150.00 ₺ fiyatına koca bir pizza. Paylaşmak veya yarın sabah soğuk yemek için ideal bir bütçe dostu seçenek.",
        gourmet: "Ekşi mayalı İtalyan hamuru, San Marzano domates sosu, taze mozzarella ve baharatlı Calabria pepperoni.",
        vegan: "Pepperoni (et) ve inek sütü mozzarellası içerir. Veganlar için uygun değildir."
      },
      en: {
        fit: "Lots of simple carbs and saturated fat. If you're building muscle, the 32g protein helps, but keep this to a rare cheat treat.",
        cheat_day: "Crispy cups of pepperoni dripping spicy oil over strings of melted mozzarella cheese. Pure comfort in every bite.",
        economic: "A whole 12-inch pizza for ₺150.00. Perfect for sharing or saving half for tomorrow's cold breakfast.",
        gourmet: "Wood-fired sourdough base, San Marzano tomato sauce, fresh mozzarella, and spicy cured Calabrian salami.",
        vegan: "Features pepperoni (pork/beef) and cow milk mozzarella. Highly non-vegan."
      }
    }
  },
  {
    id: "9",
    nameTr: "Cızbız Köfte",
    nameEn: "Cızbız Köfte",
    restaurant: "Merkez Efendi Köftecisi",
    price: 130.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "3.2k+",
    calories: 510,
    protein: 34,
    carbs: 30,
    fat: 26,
    imageUrl: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "YEREL EFSANE EŞLEŞMESİ",
    matchTagEn: "LOCAL LEGEND MATCH",
    isHealthy: true,
    isVegan: false,
    category: "Kebab",
    aiInsights: {
      tr: {
        fit: "Yüksek proteinli (34g) ızgara köfte. Patates kızartmasını salata ile değiştirerek son derece temiz ve kas dostu bir öğün elde edin.",
        cheat_day: "Izgaradan yeni çıkmış sıcacık köfteleri acı biber salçası ve taze lavaşla dürüm yapın. Basit ama efsanevi.",
        economic: "6 adet ızgara köfte, bulgur pilavı, közlenmiş biber ve domates içeren tabak 130.00 ₺. Son derece hesaplı.",
        gourmet: "Hafifçe baharatlandırılmış dana-kuzu kıyması köftesi, içi sulu kalacak şekilde ızgarada pişirilmiş. Yanında piyazla harika gider.",
        vegan: "Klasik dana/kuzu kıymalı köfte. Bitkisel bir alternatif değildir, sola kaydırın."
      },
      en: {
        fit: "High protein (34g) grilled meatballs. Swap the french fries side for extra salad and enjoy a perfectly clean, muscle-friendly lunch.",
        cheat_day: "Eat them hot off the grill with spicy pepper paste and fresh warm flatbread. Simple, fast, and incredibly satisfying.",
        economic: "₺130.00 for a plate of 6 grilled meatballs, bulgur pilaf, roasted peppers, and tomatoes. Very reasonable price.",
        gourmet: "Lightly spiced minced beef and lamb, grilled over charcoal to lock in the juices. Served with traditional white bean salad (piyaz).",
        vegan: "Traditional beef/lamb meatballs. Definitely not a plant-based food. Swipe left."
      }
    }
  },
  {
    id: "10",
    nameTr: "Fırınlanmış Dana Kaburga",
    nameEn: "Slow-Cooked Beef Ribs",
    restaurant: "The Smokehouse",
    price: 280.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "820+",
    calories: 1100,
    protein: 58,
    carbs: 45,
    fat: 75,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "EŞSİZ DUMAN EŞLEŞMESİ",
    matchTagEn: "ULTIMATE SMOKE MATCH",
    isHealthy: false,
    isVegan: false,
    category: "BBQ",
    aiInsights: {
      tr: {
        fit: "Devasa protein (+58g!) ancak yoğun yağ dokusu ve BBQ sosu kaloriyi uçuruyor. Diyet günlerinde dikkatli tüketin.",
        cheat_day: "16 saat fırında tütsülenmiş, kemikten kendiliğinden ayrılan dana kaburga. Karamelize kabuk, sulu ve yumuşacık doku.",
        economic: "280.00 ₺ fiyatıyla bir lüks, ancak 16 saatlik emek ve porsiyon ağırlığı göz önüne alındığında parasını hak ediyor.",
        gourmet: "Özel meşe odununda tütsülenmiş seçkin dana kaburga. Yağ dokusunun ağızda eriyişi ve duman lezzeti rakipsiz.",
        vegan: "Devasa bir sığır eti kaburgası. Tamamen etçil. Veganlar uzak dursun!"
      },
      en: {
        fit: "A massive protein hit (+58g!), but the heavy marbling and sugary BBQ glaze drive fats and calories sky-high. Eat with caution.",
        cheat_day: "16-hour hickory smoked beef rib that literally falls off the bone. Rich, smoky bark, juicy pink smoke ring. Absolute cheat day royalty.",
        economic: "At ₺280.00 it's a splurge, but the intensive slow-smoking craftsmanship and massive weight make it a premium bargain.",
        gourmet: "Premium beef short ribs smoked over seasoned oak. The caramelised bark and melt-in-your-mouth fat profile are unmatched.",
        vegan: "Massive slab of beef ribs. Extremely carnivorous. Avoid!"
      }
    }
  },
  {
    id: "11",
    nameTr: "Kremalı Karidesli Fettuccine",
    nameEn: "Creamy Shrimp Fettuccine",
    restaurant: "Bella Italia",
    price: 190.00,
    currency: "₺",
    rating: 4.5,
    reviewCount: "620+",
    calories: 840,
    protein: 35,
    carbs: 88,
    fat: 38,
    imageUrl: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "DENİZ MAHSULLÜ ŞÖLEN",
    matchTagEn: "SEAFOOD INDULGENCE",
    isHealthy: false,
    isVegan: false,
    category: "Pasta",
    aiInsights: {
      tr: {
        fit: "Karideslerden iyi protein geliyor ancak kremalı alfredo sosu aşırı kalorili. Bir dahakine domates soslu deniz mahsullü makarna seçin.",
        cheat_day: "Taze fettuccine makarnasını kaplayan sarımsaklı ve kremalı nefis alfredo sosu, tereyağlı karideslerle buluşuyor. Harika bir kaçamak.",
        economic: "Klasik bir lezzet ancak makarna maliyeti düşüktür, bu yüzden ödediğiniz para karides ve mekan şıklığı içindir.",
        gourmet: "Tavada pişmiş dev karidesler, yoğun krema sosu, eskitilmiş parmesan peyniri ve el yapımı yumurtalı makarna.",
        vegan: "Karides, krema, parmesan peyniri ve yumurtalı makarna içerir. Vegan değil."
      },
      en: {
        fit: "Good protein from the shrimps, but the heavy parmesan-cream alfredo sauce is highly caloric. Choose a tomato-based seafood pasta next time.",
        cheat_day: "Creamy, garlicky alfredo coating thick ribbons of fresh fettuccine, topped with sautéed butter shrimp. Incredible comfort.",
        economic: "Decent Italian classic, but pasta is cheap to produce, so you're mostly paying for the shrimp and restaurant ambiance.",
        gourmet: "Pan-seared jumbo prawns, heavy cream reduction, aged Parmigiano-Reggiano, and house-made fresh egg pasta.",
        vegan: "Contains shrimp, heavy cream, parmesan cheese, and egg pasta. Highly non-vegan."
      }
    }
  },
  {
    id: "12",
    nameTr: "Kuzu Tandır",
    nameEn: "Kuzu Tandır",
    restaurant: "Osmanlı Saray Mutfağı",
    price: 260.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "1.1k+",
    calories: 810,
    protein: 52,
    carbs: 25,
    fat: 55,
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SARAY MUTFAĞI KLASİĞİ",
    matchTagEn: "ROYAL TURKISH CHOICE",
    isHealthy: false,
    isVegan: false,
    category: "Turkish Classic",
    aiInsights: {
      tr: {
        fit: "52g protein ve demir dolu, lokum gibi kuzu eti. Kaloriyi dengede tutmak için bulgur pilavı ve yeşil salatayla tüketin, pideden kaçının.",
        cheat_day: "Çatalla dokununca dağılan, tereyağlı pilav üzerinde servis edilen kuzu tandır. Geleneksel ve çok ağır bir ziyafet.",
        economic: "Yüksek fiyat ancak saatlerce ağır ateşte fırınlanmış saray usulü kuzu tandır. Verdiğiniz her kuruşa değer.",
        gourmet: "Taş fırında 6 saat yavaşça pişmiş kuzu but eti. Sadece tuz ve kekikle tatlandırılmış, çam fıstıklı pilav eşliğinde.",
        vegan: "Kuzu eti içerir. Tamamen hayvansaldır. Vegan seçeneği değildir."
      },
      en: {
        fit: "Ultra-tender lamb meat packed with 52g protein and iron. Eat it with the bulgur and green salad, avoiding the bread base to keep calories in check.",
        cheat_day: "Slowly roasted lamb meat that shreds with a fork, served over buttery rice pilaf. A heavy, rich, delicious feast.",
        economic: "Premium price, but this is slow-cooked saray cuisine lamb. The absolute food satisfaction and quality are worth every penny.",
        gourmet: "Traditional pit-roasted lamb leg, seasoned lightly with salt and thyme, slow-cooked for 6 hours. Served over rice pilaf with pine nuts.",
        vegan: "Roasted lamb leg. This is lamb meat, which is completely animal-based. No vegan utility."
      }
    }
  },
  {
    id: "13",
    nameTr: "Dana Etli Tacos Plakası",
    nameEn: "Beef Taco Platter (3 Pcs)",
    restaurant: "El Mariachi",
    price: 135.00,
    currency: "₺",
    rating: 4.6,
    reviewCount: "800+",
    calories: 590,
    protein: 28,
    carbs: 48,
    fat: 30,
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "NEFİS TACO EŞLEŞMESİ",
    matchTagEn: "TASTY TACO MATCH",
    isHealthy: true,
    isVegan: false,
    category: "Mexican",
    aiInsights: {
      tr: {
        fit: "Dengeli makro dağılımı! Glütensiz mısır tortillası, dana etinden gelen protein ve taze avokado sosundan gelen sağlıklı yağlar.",
        cheat_day: "Üzerine ekstra eritilmiş peynir ve ekşi krema ekleyin, acı habanero sosu döküp soğuk bir içecekle tadını çıkarın!",
        economic: "Üç adet içi dolu taco, limon ve salsa sosu ile 135.00 ₺. Doyurucu ve hesaplı bir sokak lezzeti seçeneği.",
        gourmet: "Izgarada çıtırdatılmış mısır tortillası içinde yavaş pişmiş dana kaburga, kişniş, soğan ve yanında daldırmak için et suyu (consome).",
        vegan: "Yavaş pişmiş dana eti ve peynir içerir. Hayvansal üründür, vegan değildir."
      },
      en: {
        fit: "Decent macronutrient split! Gluten-free corn tortillas, protein from shredded beef, and healthy fats from fresh avocado salsa.",
        cheat_day: "Top them with extra melted cheese and sour cream, splash some hot habanero sauce, and wash down with a cold margarita!",
        economic: "₺135.00 for three loaded tacos with lime and salsa. A highly reasonable and filling casual lunch option.",
        gourmet: "Slow-braised beef birria in corn tortillas, toasted on the grill, served with consome dipping broth, cilantro, and onions.",
        vegan: "Features slow-braised beef and cheese. Animal-derived, non-vegan."
      }
    }
  },
  {
    id: "14",
    nameTr: "Çıtır Tavuk Kanatları",
    nameEn: "Crispy Fried Chicken Wings",
    restaurant: "Wings & Beer",
    price: 145.00,
    currency: "₺",
    rating: 4.4,
    reviewCount: "1.2k+",
    calories: 920,
    protein: 40,
    carbs: 55,
    fat: 60,
    imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "KANAT & SOS BİRLİKTELİĞİ",
    matchTagEn: "BEER & WINGS SPECIAL",
    isHealthy: false,
    isVegan: false,
    category: "Fried Chicken",
    aiInsights: {
      tr: {
        fit: "Çıtır kaplama demek derin yağda kızarmış un ve yağ demektir. Kanat eti doğal olarak yağlıdır. Onun yerine ızgara göğüs etini tercih edin!",
        cheat_day: "Acı buffalo sosuna bulanmış 12 çıtır kanat, yanında rokfor sosu ve kereviz sapları. Maç gecesi için harika.",
        economic: "145.00 ₺ için porsiyon boyutu büyük ancak kızartma yağları tokluktan ziyade ağırlık hissi verebilir.",
        gourmet: "Buttermilk ile marine edilmiş, çift kat unlanmış çıtır çıtır kızarmış kanatlar, ev yapımı ballı-acılı sosla kaplı.",
        vegan: "Tavuk kanatları. Kümes hayvanı eti. Vegan seçeneği değildir."
      },
      en: {
        fit: "Crispy skin means deep-fried flour and grease. Wing meat is naturally high in fat. Opt for grilled chicken breast instead!",
        cheat_day: "12 crispy, golden wings tossed in spicy buffalo sauce, served with blue cheese dressing and celery. The ultimate game night snack.",
        economic: "Good portion size for ₺145.00, but deep-fried foods can leave you feeling heavy rather than sustained.",
        gourmet: "Buttermilk marinated wings, double-dredged in spiced flour, fried to maximum crunch, and glazed with house-made honey hot honey.",
        vegan: "Chicken wings. Pure poultry. Swipe left."
      }
    }
  },
  {
    id: "15",
    nameTr: "San Sebastian Cheesecake",
    nameEn: "San Sebastian Cheesecake",
    restaurant: "Fırın & Kahve",
    price: 80.00,
    currency: "₺",
    rating: 4.9,
    reviewCount: "1.5k+",
    calories: 590,
    protein: 10,
    carbs: 48,
    fat: 42,
    imageUrl: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "TATLI BİR KAÇAMAK",
    matchTagEn: "SWEET CHEAT MATCH",
    isHealthy: false,
    isVegan: false,
    category: "Dessert",
    aiInsights: {
      tr: {
        fit: "Uyarı: 42g yağ ve 35g rafine şeker içerir. Canınız çok çekerse arkadaşınızla paylaşın ve yarın 5km fazla koşun!",
        cheat_day: "Dışı yanık, içi ise krema gibi akışkan kıvamda. Üzerine eritilmiş çikolata dökülmesi kaçamak gününüzün zirvesidir.",
        economic: "Tek dilim 80.00 ₺ tatlı için biraz pahalı görünebilir, ancak o kadar yoğun ki neredeyse küçük bir öğünün yerini tutuyor.",
        gourmet: "Yüksek ısıda fırınlanarak dışı karamelize edilmiş, içi yarı akışkan bırakılmış orijinal tarif. Nitelikli filtre kahveyle harika gider.",
        vegan: "Bol miktarda krem peynir, krema ve yumurta içerir. Süt ürünleri barındırır, vegan değildir."
      },
      en: {
        fit: "Alert: 42g of fat and 35g of refined sugar. If you must, split it with a friend and run an extra 5k tomorrow!",
        cheat_day: "Burnt on the outside, creamy and custardy on the inside. Liquid milk chocolate poured on top makes this the holy grail of cheat desserts.",
        economic: "A single slice is ₺80.00, which is relatively expensive for dessert. But it's so rich and heavy that it could replace a small meal!",
        gourmet: "Baked at high heat to achieve the signature caramelized dark top while retaining a rich, semi-liquid center. Best served with single-origin filter coffee.",
        vegan: "Contains large amounts of cream cheese, heavy cream, and eggs. Highly dairy-heavy, not vegan."
      }
    }
  },

  // ==========================================
  // VEGAN DISHES (15 items)
  // ==========================================
  {
    id: "16",
    nameTr: "Kinoa Salatası Kasesi",
    nameEn: "Quinoa Salad Bowl",
    restaurant: "Fit & Fresh",
    price: 135.00,
    currency: "₺",
    rating: 4.5,
    reviewCount: "820+",
    calories: 380,
    protein: 14,
    carbs: 48,
    fat: 15,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SÜPER GIDA SEÇENEĞİ",
    matchTagEn: "SUPERFOOD DIET MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Salad",
    aiInsights: {
      tr: {
        fit: "Zeytinyağı ve avokadodan gelen yüksek lif ve sağlıklı yağlar. Kinoadaki kompleks karbonhidratlar şekerinizi dalgalandırmadan enerji verir.",
        cheat_day: "Bir kase ot gerçekten kaçamak günü hayaliniz mi? Çok geç olmadan geri dönün! (Üzerine kızarmış çıtır nohut eklemediğiniz sürece).",
        economic: "Fiyatı makul ancak 'temiz besin' primi ödüyorsunuz. Mikrobesinleri yüksek ama kalori yoğunluğu düşüktür.",
        gourmet: "Kırmızı kinoa, olgun avokado, bebek ıspanak ve ev yapımı tahin sosunun uyumu. Taze, çıtır ve lezzetli.",
        vegan: "%100 bitkisel! Kinoadan gelen bitkisel protein ve avokadonun sağlıklı yağları ile harika bir vegan ana öğün."
      },
      en: {
        fit: "High fiber (9g) and healthy fats from olive oil and avocado. The complex carbs in quinoa release energy slowly, preventing sugar crashes.",
        cheat_day: "Is a bowl of grass really your idea of a cheat day? Turn back before it's too late! (Unless you top it with double fried chicken).",
        economic: "Decent price, but you're paying a premium for 'clean' ingredients. You'll get plenty of micronutrients, but fewer absolute calories.",
        gourmet: "A colorful harmony of red quinoa, ripe avocados, baby spinach, and a homemade lemon-tahini dressing. Fresh, zesty, and crunchy.",
        vegan: "100% plant-based! High in plant-protein from quinoa and packed with avocado healthy fats. Excellent vegan choice!"
      }
    }
  },
  {
    id: "17",
    nameTr: "Humuslu Falafel Dürüm",
    nameEn: "Falafel Wrap with Hummus",
    restaurant: "Limon Meze",
    price: 115.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "1.6k+",
    calories: 449,
    protein: 18,
    carbs: 68,
    fat: 20,
    imageUrl: "https://images.unsplash.com/photo-1547058886-af77992d478c?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "VEGAN PROTEİN EŞLEŞMESİ",
    matchTagEn: "VEGAN PROTEIN MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Wrap",
    aiInsights: {
      tr: {
        fit: "Mükemmel bir bitkisel seçenek. Falafeldeki nohutlar yüksek lif ve protein oranı sunarak sindirim sisteminizi destekler.",
        cheat_day: "Kızarmış falafel topları ve tahin sosu, ağır hissettirmeden inanılmaz derecede lezzetli bir kaçamak sunar.",
        economic: "Sadece 115.00 ₺ fiyatıyla bu dürüm tam bir bütçe dostu. Nohut proteini ve humus sizi uzun süre tok tutacaktır.",
        gourmet: "Taze kişnişle yoğrulmuş çıtır falafeller, tahinli pürüzsüz humus, lavaş ve turşu eşliğinde dürüm yapılmış.",
        vegan: "Kusursuz vegan öğün! Nohut, tahin, sebzeler ve buğday lavaşı. %100 vegan onaylı."
      },
      en: {
        fit: "Excellent plant-based option. Chickpeas in falafel offer a strong fiber-to-protein ratio, keeping your digestion happy.",
        cheat_day: "Deep-fried chickpea balls and extra tahini sauce make this incredibly tasty and satisfying without feeling overly heavy.",
        economic: "At only ₺115.00, this wrap is a bargain. Highly filling chickpea protein and hummus will keep you satisfied for hours.",
        gourmet: "Crispy chickpea falafel seasoned with fresh coriander, wrapped in lavaş with creamy garlic tahini hummus and pickled turnip.",
        vegan: "Perfect vegan meal! Chickpeas, tahini, vegetables, and wheat flatbread. 100% vegan certified."
      }
    }
  },
  {
    id: "18",
    nameTr: "Mercimek Çorbası",
    nameEn: "Lentil Soup",
    restaurant: "Tarihi Esnaf Lokantası",
    price: 65.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "4k+",
    calories: 220,
    protein: 12,
    carbs: 34,
    fat: 4,
    imageUrl: "https://images.unsplash.com/photo-1547592165-e1d17f1a0655?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "BÜTÇE & SAĞLIK DOSTU",
    matchTagEn: "BUDGET HEALTH MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Soup",
    aiInsights: {
      tr: {
        fit: "Çok düşük yağ (sadece 4g!) ve iyi protein. Demir emilimini artırmak için bolca C vitamini kaynağı limon sıkın.",
        cheat_day: "Kaçamak günü için biraz fazla hafif. Ancak yanına taze fırın ekmeğini bandırarak zenginleştirebilirsiniz!",
        economic: "Sadece 65.00 ₺! Şehirdeki en ucuz ve en besleyici öğün. Cüzdanınız ve sağlığınız için mükemmel seçim.",
        gourmet: "Sarı mercimek, patates, havuç ve kimyonun yavaşça pişirilip pürüzsüz kıvama getirilmesi. Pul biberli yağla servis edilir.",
        vegan: "Geleneksel olarak sebze suyu, mercimek ve zeytinyağıyla hazırlanır. Saf vegan enerji."
      },
      en: {
        fit: "Very low fat (only 4g!) and decent protein. Add a squeeze of vitamin-C rich lemon to increase iron absorption from the lentils.",
        cheat_day: "A bit too light for a cheat day, unless you eat it with an entire loaf of crusty Turkish bread dipped in!",
        economic: "Only ₺65.00! This is by far the cheapest meal in town. Incredibly nutritious and wallet-friendly.",
        gourmet: "Slowly simmered yellow lentils, onions, carrots, and cumin, blended smooth. Served with lemon wedges and chili pepper flakes.",
        vegan: "Made traditionally with vegetable broth, lentils, and olive oil. Pure vegan goodness."
      }
    }
  },
  {
    id: "19",
    nameTr: "Vegan Beyond Burger",
    nameEn: "Vegan Beyond Burger",
    restaurant: "Green Bites",
    price: 160.00,
    currency: "₺",
    rating: 4.6,
    reviewCount: "740+",
    calories: 590,
    protein: 25,
    carbs: 45,
    fat: 28,
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "BİTKİSEL BURGER ŞÖLENİ",
    matchTagEn: "PLANT-BASED BURGER",
    isHealthy: true,
    isVegan: true,
    category: "Burger",
    aiInsights: {
      tr: {
        fit: "25g bitkisel protein. Patty içindeki hindistan cevizi yağından ötürü yağ oranı biraz yüksek olsa da harika bir burger alternatifi.",
        cheat_day: "Eritilmiş vegan cheddar peyniri, karamelize soğan ve vegan özel sosla kaplı. Isırdığınızda sığır etiyle aynı zevki verir!",
        economic: "Beyond köfte ithal olduğu için biraz pahalı, ancak temiz ve sürdürülebilir vegan fast-food için makul fiyat.",
        gourmet: "Kızarmış vegan brioche ekmeği üzerinde Beyond köfte, ev yapımı turşu, vegan trüf mayonezi ve marul.",
        vegan: "Tamamen vegan! Hayvansal hiçbir madde içermeyen köfte, bitkisel cheddar ve yumurtasız mayonez."
      },
      en: {
        fit: "25g of plant-protein. High fat content due to coconut oil in the patty, but still a solid option if you want a burger feel.",
        cheat_day: "Topped with melted vegan cheddar, caramelized onions, and vegan special sauce. It drips and tastes just like the real deal!",
        economic: "Slightly pricier than standard beef burgers due to the 'Beyond' patty premium, but fair for clean vegan junk food.",
        gourmet: "Beyond meat patty on a toasted vegan brioche bun, house-made dill pickles, vegan truffle mayo, and butter lettuce.",
        vegan: "Totally vegan! Cruelty-free burger patty, plant-based cheese, and egg-free mayonnaise."
      }
    }
  },
  {
    id: "20",
    nameTr: "Acai Berry Enerji Kasesi",
    nameEn: "Acai Berry Energy Bowl",
    restaurant: "Superfood Lab",
    price: 120.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "530+",
    calories: 320,
    protein: 6,
    carbs: 58,
    fat: 8,
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "ANTİOKSİDAN DEPOSU",
    matchTagEn: "ANTIOXIDANT BOOST",
    isHealthy: true,
    isVegan: true,
    category: "Breakfast",
    aiInsights: {
      tr: {
        fit: "Antioksidanlar ve anında enerji veren karbonhidratlar içerir. Harika bir antrenman öncesi kahvaltısı. Protein tozlu versiyonu deneyin.",
        cheat_day: "Tatlı, buz gibi ve çok şık. Üzerine çikolata parçacıkları ve badem ezmesi ekleyince kahvaltıda dondurma yemek gibi!",
        economic: "Orta fiyat segmenti ancak organik acai ve orman meyveleri ithal olduğu için bu bütçeyi hak ediyor.",
        gourmet: "Dondurulmuş muzlarla püre haline getirilmiş organik acai, üzerinde glütensiz granola, chia tohumu, yaban mersini ve Hindistan cevizi.",
        vegan: "Badem sütü ile hazırlanmış %100 vegan tarif. Tamamen meyvelerden gelen doğal tatlılık."
      },
      en: {
        fit: "High in antioxidants and immediate energy carbs. Excellent pre-workout breakfast. Add vegan pea protein powder if you need a boost.",
        cheat_day: "Sweet, icy, and beautiful, topped with chocolate chips and almond butter. Feels like eating ice cream for breakfast!",
        economic: "Medium price point, but berries and organic acai imports are expensive. Great healthy lifestyle investment.",
        gourmet: "Pure organic acai berry pulp blended with frozen bananas, topped with gluten-free granola, chia seeds, fresh blueberries, and coconut flakes.",
        vegan: "100% vegan, blended with almond milk. Naturally sweetened by fruits."
      }
    }
  },
  {
    id: "21",
    nameTr: "Çeri Domatesli Avokado Tost",
    nameEn: "Avocado Toast with Cherry Tomatoes",
    restaurant: "The Daily Grind",
    price: 105.00,
    currency: "₺",
    rating: 4.5,
    reviewCount: "1.1k+",
    calories: 350,
    protein: 8,
    carbs: 38,
    fat: 18,
    imageUrl: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SAĞLIKLI YAĞ EŞLEŞMESİ",
    matchTagEn: "HEALTHY FATS MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Breakfast",
    aiInsights: {
      tr: {
        fit: "Avokadodaki doymamış yağlar hormon üretimini destekler. Ekşi mayalı ekmek ise yavaş salınımlı karbonhidrat sağlar.",
        cheat_day: "Basit ama lezzetli. Tadı zenginleştirmek için pul biber ve balzamik sosu ekleyin.",
        economic: "105.00 ₺ fiyatıyla son derece bütçe dostu. Avokadonun lif oranı sayesinde uzun süre tok tutar.",
        gourmet: "Ezilmiş taze avokado, fırınlanmış çeri domatesler, mikro yeşillikler ve ekşi mayalı siyez ekmeği üzerine sızma zeytinyağı.",
        vegan: "Bitkisel kahvaltı klasiği. Sıfır hayvansal yağ ve yumurta."
      },
      en: {
        fit: "Healthy monounsaturated fats from avocado support hormone production. Pair with sourdough bread for slow-release carbs.",
        cheat_day: "Simple but satisfying. Ask for extra chili flakes and a drizzle of balsamic glaze to punch up the savory goodness.",
        economic: "Very cost-effective at ₺105.00. Extremely filling due to the high fiber content of the avocados.",
        gourmet: "Smashed Hass avocado, heirloom tomatoes, microgreens, and organic cold-pressed olive oil on artisanal sourdough.",
        vegan: "Pure plant-based breakfast favorite. Zero eggs or butter used."
      }
    }
  },
  {
    id: "22",
    nameTr: "Zeytinyağlı Yaprak Sarması",
    nameEn: "Zeytinyağlı Yaprak Sarması",
    restaurant: "Ege Mutfağı",
    price: 95.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "1.9k+",
    calories: 280,
    protein: 5,
    carbs: 45,
    fat: 10,
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "EGE RÜZGARI VEGAN",
    matchTagEn: "AEGEAN VEGAN MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Meze",
    aiInsights: {
      tr: {
        fit: "Hafif ve sağlıklı bir başlangıç. Asma yaprağının mikrobesinleri pirinçle buluşuyor. Limon sıkarak tüketin.",
        cheat_day: "Çift porsiyon söyleyin, üzerine ekstra zeytinyağı gezdirip soğuk olarak tüketin.",
        economic: "95.00 ₺ fiyatına 8 adet sarma. Harika bir meze veya hafif bütçe dostu öğle yemeği alternatifi.",
        gourmet: "Kuş üzümlü, çam fıstıklı ve naneli baharatlı pirinçle doldurulmuş, Ege sızma zeytinyağında ağır ateşte pişmiş yapraklar.",
        vegan: "Geleneksel zeytinyağlı meze. Yoğurtsuz servis edildiği için %100 bitkiseldir."
      },
      en: {
        fit: "Light and healthy appetizer. Rice carbs wrapped in nutrient-dense grape leaves. Eat with a squeeze of fresh lemon.",
        cheat_day: "Order a double portion, pair with extra olive oil, and enjoy them cold as a delicious snack.",
        economic: "At ₺95.00, this plate of 8 stuffed leaves is a wonderful appetizer or light lunch budget-saver.",
        gourmet: "Tender grape leaves stuffed with spiced rice, currants, pine nuts, and mint, simmered with premium Aegean olive oil.",
        vegan: "Traditional olive-oil dish (zeytinyağlı). 100% plant-based, no dairy yogurt served on the side."
      }
    }
  },
  {
    id: "23",
    nameTr: "Sebzeli Tofu Stir-Fry",
    nameEn: "Tofu Vegetable Stir-Fry",
    restaurant: "Wok N Roll",
    price: 130.00,
    currency: "₺",
    rating: 4.4,
    reviewCount: "420+",
    calories: 410,
    protein: 20,
    carbs: 38,
    fat: 16,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "TEMİZ VEGAN ASYA ESİNTİSİ",
    matchTagEn: "CLEAN VEGAN ASIAN",
    isHealthy: true,
    isVegan: true,
    category: "Asian",
    aiInsights: {
      tr: {
        fit: "Tofudan gelen 20g kaliteli bitkisel protein ve brokoli ile bezelyeden gelen zengin lifler.",
        cheat_day: "Tofuların çıtırlığını artırmak için fıstık sosu ve tatlı acı sos ekleterek lezzeti katlayın.",
        economic: "130.00 ₺, gün boyu enerjik kalmanızı sağlayacak besleyici bir öğün için son derece rekabetçi bir fiyattır.",
        gourmet: "Kızarmış organik tofu küpleri, brokoli, renkli biberler, havuçlar ve zencefilli-soya soslu wok pişirimi.",
        vegan: "Soya sosunda pişirilmiş tofu ve taze sebzeler. %100 bitkisel ve süt ürünü içermez."
      },
      en: {
        fit: "20g of complete soy protein from tofu, packed with amino acids, and loaded with fibers from broccoli and snow peas.",
        cheat_day: "Ask for extra sweet chili and peanut sauce to drench the crispy pan-fried tofu in savory deliciousness.",
        economic: "₺130.00 is a very competitive price for a nutritious, colorful plate that keeps you energetic.",
        gourmet: "Crispy organic tofu cubes, flash-fried broccoli, bell peppers, carrots, in a house-made ginger-soy glaze.",
        vegan: "Tofu and fresh vegetables cooked in soy sauce. 100% plant-based and dairy-free."
      }
    }
  },
  {
    id: "24",
    nameTr: "Zeytinyağlı İmam Bayıldı",
    nameEn: "Zeytinyağlı İmam Bayıldı",
    restaurant: "Saray Sofrası",
    price: 125.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "2.1k+",
    calories: 310,
    protein: 4,
    carbs: 22,
    fat: 24,
    imageUrl: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SARAYIN VEGAN MUTFAĞI",
    matchTagEn: "HISTORICAL OTTOMAN DISH",
    isHealthy: true,
    isVegan: true,
    category: "Turkish Classic",
    aiInsights: {
      tr: {
        fit: "Patlıcanın kalorisi düşüktür ancak sızma zeytinyağı bu yemeği yağ-yoğun kılar. Ketojenik bitkisel diyetler için harika.",
        cheat_day: "Patlıcanın zeytinyağında pişen domates, soğan ve bol sarımsak lezzetini emişi ağzınızda lokum hissi bırakacaktır.",
        economic: "Sadece 125.00 ₺ fiyatıyla saray mutfağı lezzeti. Son derece doyurucu ve cüzdan dostu bir ev yemeği seçeneği.",
        gourmet: "Bütün patlıcanın közlenip domates, sarımsak ve zeytinyağıyla fırınlanması. İmamın lezzetten bayıldığı o meşhur klasik.",
        vegan: "Geleneksel soğuk zeytinyağlı meze. Tamamen bitkisel malzemelerle hazırlanmıştır."
      },
      en: {
        fit: "Eggplant is very low calorie, but the olive oil used in this dish makes it fat-dense. Great for keto/low-carb plant diets.",
        cheat_day: "The eggplant absorbs the sweet tomato, onion, and garlic olive oil mixture. Melt-in-your-mouth deliciousness.",
        economic: "Only ₺125.00 for a historical delicacy served with tomatoes and peppers. A very comforting, budget-friendly meal.",
        gourmet: "Whole eggplant slit open and stuffed with onions, garlic, and tomatoes, cooked in olive oil. So good that 'the Imam fainted' of joy.",
        vegan: "Legendary Turkish cold meze. Fully plant-based, cooked slowly in olive oil."
      }
    }
  },
  {
    id: "25",
    nameTr: "Sıcak Pide ile Humus Tabağı",
    nameEn: "Hummus Platter with Warm Pita",
    restaurant: "Meze House",
    price: 85.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "1.9k+",
    calories: 450,
    protein: 14,
    carbs: 55,
    fat: 20,
    imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "KREMAMSI MEZE KLASİĞİ",
    matchTagEn: "CREAMY CLASSIC DIP",
    isHealthy: true,
    isVegan: true,
    category: "Meze",
    aiInsights: {
      tr: {
        fit: "Nohut proteini ve tahin yağı birleşimi. Uzun süreli enerji sağlar. Kaloriyi düşürmek için pide yerine salatalıkla tüketin.",
        cheat_day: "Üzerine pul biberli sıcak zeytinyağı dökün, sıcacık kabarık pideyle sıyırarak yiyin. Harika bir başlangıç.",
        economic: "85.00 ₺ fiyatıyla koca bir tabak humus ve pide. Paylaşmaya uygun, protein dolu ve son derece ucuz.",
        gourmet: "Pürüzsüz nohut püresi, tahin, sarımsak ve limonun uyumu. Üzerine sızma zeytinyağı ve sumak gezdirilmiş.",
        vegan: "%100 bitkisel içerik. Nohut, tahin, sarımsak ve zeytinyağı birleşimiyle tam bir vegan dostu."
      },
      en: {
        fit: "Chickpea protein and sesame tahini fat. Highly nutritious, providing sustained energy. Dip with cucumbers instead of pita to cut carbs.",
        cheat_day: "Drizzle with hot chili olive oil, scoop up massive chunks with warm, fluffy pita bread. The ultimate savory snack.",
        economic: "₺85.00 for a large plate of hummus and bread. Very affordable, sharing-friendly, and protein-packed.",
        gourmet: "Creamy house-made chickpea puree blended with premium tahini, lemon juice, topped with organic olive oil and sumac.",
        vegan: "100% plant-based. Pure chickpeas, tahini, garlic, and olive oil."
      }
    }
  },
  {
    id: "26",
    nameTr: "Vegan Acılı Miso Ramen",
    nameEn: "Vegan Spicy Ramen",
    restaurant: "Ramen Bar",
    price: 150.00,
    currency: "₺",
    rating: 4.6,
    reviewCount: "850+",
    calories: 620,
    protein: 16,
    carbs: 85,
    fat: 18,
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SICACIK ACILI VEGAN",
    matchTagEn: "WARM SPICY VEGAN",
    isHealthy: false,
    isVegan: true,
    category: "Asian",
    aiInsights: {
      tr: {
        fit: "Sodyum ve karbonhidrat oranı yüksek. Yoğun antrenman sonrası elektrolit yenilemek için iyidir ancak diyet günlerinde sınırlayın.",
        cheat_day: "Acılı zengin miso suyu ve buğday erişteleri, sarımsak yağı ve bambu filizleri. Kış günleri için nefis bir kaçamak.",
        economic: "150.00 ₺ fiyatına içinizi ısıtacak ve sizi tıka basa doyuracak devasa bir kase çorba.",
        gourmet: "Acı kırmızı miso ve susam suyu, buğday erişteleri, sote shiitake mantarları, bebek bok choy, marine tofu ve biber iplikleri.",
        vegan: "Çorba suyu deniz yosunu, shiitake mantarı ve misodan hazırlanmıştır. Yumurta ve süt ürünü içermez."
      },
      en: {
        fit: "High in sodium and carbs. Great for replenishing electrolytes after a sweaty leg day, but watch out for water retention.",
        cheat_day: "Slurp up spicy, rich miso broth and wheat noodles, topped with roasted garlic oil and bamboo shoots. Cozy comfort.",
        economic: "₺150.00 for a massive, steaming bowl of soup that will make you sweat and fill you up completely.",
        gourmet: "Spicy red miso and sesame broth, wheat noodles, grilled shiitake mushrooms, baby bok choy, marinated tofu, and chili threads.",
        vegan: "Broth is made from sea kelp, shiitake mushrooms, and miso. Completely egg-free and dairy-free."
      }
    }
  },
  {
    id: "27",
    nameTr: "Cevizli Pancar Salatası",
    nameEn: "Roasted Beet & Walnut Salad",
    restaurant: "Garden Fresh",
    price: 110.00,
    currency: "₺",
    rating: 4.5,
    reviewCount: "410+",
    calories: 290,
    protein: 8,
    carbs: 22,
    fat: 20,
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "VİTAMİN DEPOSU VEGAN",
    matchTagEn: "VITAMIN RICH MATCH",
    isHealthy: true,
    isVegan: true,
    category: "Salad",
    aiInsights: {
      tr: {
        fit: "Ceviz kalbe faydalı bitkisel omega-3 yağları sağlar, pancar ise spor performansını artıran doğal nitratlar içerir.",
        cheat_day: "Hafif ve çıtır bir salata. Kendinizi ödüllendirmek için yanına fırın patates dilimleri ekleyebilirsiniz.",
        economic: "110.00 ₺ fiyatıyla mikrobesin zengini bir tabak. Ceviz ve pancar sayesinde bir salataya göre çok doyurucudur.",
        gourmet: "Fırınlanmış tatlı pancar dilimleri, kıtır organik cevizler, bebek roka ve narenciyeli sos.",
        vegan: "%100 bitkisel içerik, keçi peyniri yerine ceviz bazlı vegan peynir küpleri kullanılmıştır."
      },
      en: {
        fit: "Walnuts provide heart-healthy plant omega-3 fats, while beets are packed with dietary nitrates that boost athletic endurance.",
        cheat_day: "A light, crunchy salad. Add some sweet caramelized walnuts to satisfy your sweet tooth while keeping it clean.",
        economic: "Only ₺110.00 for a nutrient-packed plate. Walnuts and beets make it highly satiating for a salad.",
        gourmet: "Slow-roasted sweet beets, toasted organic walnuts, baby arugula, dressed with a citrus-shallot vinaigrette.",
        vegan: "100% plant-based, features vegan walnut-based cheese instead of dairy goat cheese."
      }
    }
  },
  {
    id: "28",
    nameTr: "Nefis Mercimekli Köfte",
    nameEn: "Lentil Patties (Mercimekli Köfte)",
    restaurant: "Anadolu Sofrası",
    price: 100.00,
    currency: "₺",
    rating: 4.8,
    reviewCount: "1.4k+",
    calories: 360,
    protein: 16,
    carbs: 52,
    fat: 8,
    imageUrl: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "ANADOLU VEGAN KLASİĞİ",
    matchTagEn: "ANATOLIAN VEGAN LUNCH",
    isHealthy: true,
    isVegan: true,
    category: "Home Cooking",
    aiInsights: {
      tr: {
        fit: "Çok düşük yağ (sadece 8g), yüksek lif ve kompleks bulgur/mercimek karbonhidratları. Spor öncesi enerji için harika.",
        cheat_day: "Taze marul yapraklarına sarıp, üzerine bol limon sıkıp turşuyla tüketin. Aşırı lezzetli ve bağımlılık yapıcı.",
        economic: "100.00 ₺ fiyatına 8 adet mercimek köftesi. Nohut ve bulgur çok ucuz ama inanılmaz doyurucudur, harika bütçe dostu.",
        gourmet: "Kırmızı mercimek ve ince bulgurun taze maydanoz, yeşil soğan, biber salçası ve soğuk sıkım zeytinyağıyla yoğrulması.",
        vegan: "Türk mutfağının en popüler bitkisel lezzetlerinden biri. Doğal olarak yumurtasız ve vegandır."
      },
      en: {
        fit: "Very low fat (8g), high fiber, and slow-digesting bulgur/lentil carbs. Great pre-workout or clean bulking meal.",
        cheat_day: "Wrap them in fresh romaine lettuce leaves, squeeze lemon, and eat them with pickles. Highly addictive savory snack.",
        economic: "₺100.00 for a plate of 8 patties. Lentils and bulgur are cheap but incredibly filling, making this a budget-friendly powerhouse.",
        gourmet: "Red lentils and fine bulgur kneaded with parsley, green onions, tomato paste, and cold-pressed olive oil. Served on fresh lettuce.",
        vegan: "A staple plant-based dish in Turkish culture. Naturally vegan and egg-free."
      }
    }
  },
  {
    id: "29",
    nameTr: "Vegan Çikolatalı Avokado Mus",
    nameEn: "Vegan Chocolate Avocado Mousse",
    restaurant: "Sweet & Green",
    price: 75.00,
    currency: "₺",
    rating: 4.7,
    reviewCount: "320+",
    calories: 340,
    protein: 5,
    carbs: 32,
    fat: 22,
    imageUrl: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "SUÇLULUK DUYURMAYAN TATLI",
    matchTagEn: "GUILT-FREE DESSERT",
    isHealthy: true,
    isVegan: true,
    category: "Dessert",
    aiInsights: {
      tr: {
        fit: "Avokadodan gelen sağlıklı yağlar ve kakaodan gelen antioksidanlar. Akçaağaç şurubu ile tatlandırılmış, rafine şekersiz.",
        cheat_day: "Kadifemsi ve yoğun çikolata lezzeti. Yoğun krema yerine avokado kullanıldığını asla anlamayacaksınız!",
        economic: "75.00 ₺ kaliteli vegan tatlısı için oldukça iyi fiyat. Avokado ve organik kakao gibi kaliteli malzemeler içerir.",
        gourmet: "Pürüzsüz olgun avokado, ham kakao tozu, vanilya çekirdeği ve akçaağaç şurubunun uyumu. Üzerinde frambuaz sosuyla.",
        vegan: "Olgun avokado kullanılarak tamamen sütsüz ve yumurtasız hazırlanan ipeksi kıvamda vegan mus."
      },
      en: {
        fit: "Healthy fats from avocado and antioxidants from raw cocoa. Sweetened with maple syrup, keeping it free from refined sugars.",
        cheat_day: "Velvety, rich chocolate dessert that tastes like heavy cream chocolate pudding. You won't even taste the avocado!",
        economic: "₺75.00 is normal for a premium vegan dessert, but avocados and organic cocoa are quality ingredients worth paying for.",
        gourmet: "Blended ripe avocados, raw cocoa powder, pure maple syrup, and vanilla bean, topped with raspberry coulis and cocoa nibs.",
        vegan: "Silky mousse made completely dairy-free and egg-free using ripe avocados."
      }
    }
  },
  {
    id: "30",
    nameTr: "Zeytinyağlı Barbunya Pilaki",
    nameEn: "Borlotti Beans in Olive Oil",
    restaurant: "Ev Yemekleri",
    price: 110.00,
    currency: "₺",
    rating: 4.6,
    reviewCount: "920+",
    calories: 420,
    protein: 18,
    carbs: 60,
    fat: 12,
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    matchTagTr: "EGE EV YEMEĞİ VEGAN",
    matchTagEn: "AEGEAN HOME FOOD",
    isHealthy: true,
    isVegan: true,
    category: "Home Cooking",
    aiInsights: {
      tr: {
        fit: "Yüksek bitkisel protein (18g) ve zengin çözünür lif. Sindirim sisteminizi ve bağırsak sağlığınızı destekler.",
        cheat_day: "Yanına bir dilim mısır ekmeği ve çiğ soğan ekleyerek geleneksel, doyurucu bir ziyafet haline getirin.",
        economic: "110.00 ₺ fiyatına koca bir tabak barbunya. Barbunya son derece hesaplı bir protein kaynağıdır.",
        gourmet: "Havuç, patates, sarımsak ve taze domates ile Ege sızma zeytinyağında yavaşça pişirilmiş barbunya. Soğuk servis edilir.",
        vegan: "%100 bitkisel geleneksel zeytinyağlı yemek. Sebzeler ve barbunyayla pişirilmiş saf vegan."
      },
      en: {
        fit: "High plant protein (18g) and incredible amount of soluble fiber. Helps regulate cholesterol and supports gut health.",
        cheat_day: "Eat it cold with a slice of cornbread and raw onions. A comforting, rustic, traditional feast.",
        economic: "₺110.00 for a massive plate. Beans are a very economical protein source, making this highly cost-effective.",
        gourmet: "Aegean borlotti beans cooked slowly with olive oil, carrots, potatoes, garlic, and fresh tomatoes, served cold with fresh parsley.",
        vegan: "100% plant-based meze/home dish. Prepared traditionally with olive oil and vegetables."
      }
    }
  }
];
