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
  modes: ("fit" | "cheat_day" | "economic" | "gourmet" | "vegan")[];
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
  {
    "id": "fit_1",
    "nameTr": "Izgara Tavuk Göğsü",
    "nameEn": "Grilled Chicken Breast",
    "restaurant": "Diyet Park",
    "price": 155,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "940+",
    "calories": 320,
    "protein": 45,
    "carbs": 5,
    "fat": 8,
    "imageUrl": "/images/tavuk-gogsu.jpg",
    "matchTagTr": "YÜKSEK PROTEİNLİ SEÇİM",
    "matchTagEn": "HIGH PROTEIN CHOICE",
    "isHealthy": true,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Tam 45g yağsız protein içeren Dukan dostu harika bir diyet klasiği. Kas toparlanması için ideal.",
        "cheat_day": "Cheat day için çok fazla sağlıklı, ama tatlı kaçamağınız için bütçe yaratır!",
        "economic": "155.00 ₺ fiyatına göre mükemmel protein oranına sahip doyurucu bir alternatif.",
        "gourmet": "Hafif kekik ve sarımsak marinasyonuyla ızgara lezzetinin en sade ama usta işi hali.",
        "vegan": "Tavuk eti içerir, kesinlikle vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "A classic diet choice loaded with 45g of lean protein. Excellent for muscle recovery.",
        "cheat_day": "Way too healthy for a cheat day, but it leaves plenty of calorie room for desserts!",
        "economic": "Great protein value for ₺155.00, keeping you full for a long time.",
        "gourmet": "Infused with wild oregano and garlic marinade, grilled to lock in the juices.",
        "vegan": "Contains chicken breast. Not suitable for vegans."
      }
    }
  },
  {
    "id": "fit_2",
    "nameTr": "Fırında Mücver",
    "nameEn": "Baked Zucchini Fritters",
    "restaurant": "Mutfak 101",
    "price": 110,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "380+",
    "calories": 180,
    "protein": 8,
    "carbs": 22,
    "fat": 6,
    "imageUrl": "/images/mucver.jpg",
    "matchTagTr": "YAĞSIZ & HAFİF SEBZE",
    "matchTagEn": "OIL-FREE LIGHT VEGGIE",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kızartılmadan fırınlanan, un miktarı azaltılmış bol kabaklı hafif diyet lif deposu.",
        "cheat_day": "Cheat day için fazla masum, bunu meze olarak ana yemeğin yanına ekleyebilirsiniz.",
        "economic": "110.00 ₺ fiyatıyla cep yakmayan, sağlıklı bir sebze alternatifi.",
        "gourmet": "Taze dereotu ve beyaz peynir dengesiyle fırından yeni çıkmış sıcacık bir lezzet.",
        "vegan": "Yumurta ve peynir içerir. Vegan beslenme için uygun değildir."
      },
      "en": {
        "fit": "Baked instead of deep-fried, loaded with fresh zucchini and fiber. Very light.",
        "cheat_day": "Too light for a cheat day, but makes a great side dish for a large meal.",
        "economic": "A wallet-friendly vegetable dish costing only ₺110.00.",
        "gourmet": "Features a beautiful balance of fresh dill, spring onions, and white cheese.",
        "vegan": "Contains eggs and white cheese. Not vegan."
      }
    }
  },
  {
    "id": "fit_3",
    "nameTr": "Zeytinyağlı Enginar",
    "nameEn": "Artichoke in Olive Oil",
    "restaurant": "Ege Bahçesi",
    "price": 135,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "420+",
    "calories": 150,
    "protein": 4,
    "carbs": 18,
    "fat": 9,
    "imageUrl": "/images/enginar.jpg",
    "matchTagTr": "KARACİĞER DOSTU SEÇİM",
    "matchTagEn": "LIVER FRIENDLY MATCH",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Karaciğeri temizleyen enginar, garnitür eşliğinde ve sızma zeytinyağıyla sunuluyor.",
        "cheat_day": "Cheat day için son derece hafif. Sağlıklı yaşam günleri için saklayın.",
        "economic": "Taze enginar mevsiminde makul fiyata tüketebileceğiniz sağlıklı bir alternatif.",
        "gourmet": "Portakal suyuyla pişirilmiş, taze dereotu ve körpe bezelyelerle süslenmiş bir şaheser.",
        "vegan": "Sadece sebzeler ve kaliteli Ege zeytinyağı ile hazırlanmış %100 vegan meze."
      },
      "en": {
        "fit": "Artichoke cups loaded with root vegetables and olive oil. Detoxifies liver.",
        "cheat_day": "Very low calorie. Keep this for your detox or recovery days.",
        "economic": "Good seasonal price for fresh artichokes loaded with olive oil.",
        "gourmet": "Simmered slowly in fresh orange juice, olive oil, and topped with fresh dill.",
        "vegan": "100% plant-based and dairy-free Aegean classic."
      }
    }
  },
  {
    "id": "fit_4",
    "nameTr": "Izgara Somon",
    "nameEn": "Grilled Salmon",
    "restaurant": "Mavi Liman",
    "price": 260,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "850+",
    "calories": 480,
    "protein": 38,
    "carbs": 2,
    "fat": 22,
    "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "OMEGA-3 DEPOSU",
    "matchTagEn": "OMEGA-3 POWERHOUSE",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yağ yakımını ve hormon dengesini destekleyen en kaliteli sağlıklı Omega-3 kaynağı.",
        "cheat_day": "Somon çok lezzetlidir ancak cheat day için yanına çıtır patatesler ekleyebilirsiniz.",
        "economic": "260.00 ₺ balık için normaldir, temiz protein kaynağı için bütçe ayırmaya değer.",
        "gourmet": "Deri kısmı çıtır, içi sulu bırakılmış pembe somon lokumu, roka eşliğinde.",
        "vegan": "Balık eti içerir, vegan beslenme için uygun değildir."
      },
      "en": {
        "fit": "Packed with clean Omega-3 fatty acids that support metabolic and heart health.",
        "cheat_day": "Salmon is buttery and soft, but add some fries to make it a cheat feast.",
        "economic": "At ₺260.00 it is a premium item, but rich in vital minerals and proteins.",
        "gourmet": "Perfect crispy skin with a tender, moist center, served with fresh baby arugula.",
        "vegan": "Contains salmon. Definitely not vegan."
      }
    }
  },
  {
    "id": "fit_5",
    "nameTr": "Mercimek Köftesi",
    "nameEn": "Lentil Patties",
    "restaurant": "Evce Ev Yemekleri",
    "price": 110,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.2k+",
    "calories": 290,
    "protein": 12,
    "carbs": 45,
    "fat": 7,
    "imageUrl": "/images/mercimek-koftesi.jpg",
    "matchTagTr": "LİFLİ BİTKİSEL ENERJİ",
    "matchTagEn": "FIBER PLANT ENERGY",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Sıfır doymuş yağ içeren, bulgur ve kırmızı mercimeğin lifli, doyurucu uyumu.",
        "cheat_day": "Marulla dürüm yapıp yemek harikadır ancak porsiyon kontrolüne dikkat edin.",
        "economic": "110.00 ₺ fiyatıyla oldukça doyurucu ve tam bir fiyat/performans ürünü.",
        "gourmet": "İnce bulgur, acı biber salçası ve taze yeşilliklerle yoğrulmuş geleneksel lezzet.",
        "vegan": "Hiçbir hayvansal ürün içermeyen, Anadolu'nun geleneksel vegan atıştırmalığı."
      },
      "en": {
        "fit": "Zero saturated fat, rich in complex carbohydrates and plant protein.",
        "cheat_day": "Addictive when wrapped in crunchy lettuce, eat in moderation.",
        "economic": "Highly cost-effective protein source priced at only ₺110.00.",
        "gourmet": "Kneaded with red pepper paste, green onions, and extra virgin olive oil.",
        "vegan": "100% plant-based Anatolian classic snack."
      }
    }
  },
  {
    "id": "fit_6",
    "nameTr": "Fırınlanmış Hindi Füme Salata",
    "nameEn": "Baked Smoked Turkey Salad",
    "restaurant": "Greens & Co.",
    "price": 140,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "250+",
    "calories": 240,
    "protein": 28,
    "carbs": 10,
    "fat": 9,
    "imageUrl": "/images/hindi-salata.jpg",
    "matchTagTr": "PRATİK & DÜŞÜK YAĞLI",
    "matchTagEn": "PRACTICAL & LOW FAT",
    "isHealthy": true,
    "isVegan": false,
    "category": "vegan",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Hindi füme dilimleriyle hazırlanmış, düşük kalorili ve yüksek proteinli pratik öğün.",
        "cheat_day": "Cheat day için çok hafif kalır, belki diyet başlangıçlarında tercih edilir.",
        "economic": "Spor yapanlar için oldukça ekonomik ve hazırlaması kolay protein alternatifi.",
        "gourmet": "Kurutulmuş nar taneleri ve hafif balsamik sosla tatlandırılmış bebek ıspanak yatağı.",
        "vegan": "Hindi eti içerdiğinden dolayı vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Low calorie salad loaded with baked smoked turkey breast and microgreens.",
        "cheat_day": "Too light for an indulgence, save this for active dieting days.",
        "economic": "Good price-to-protein ratio for high protein diet tracking.",
        "gourmet": "Served on a bed of baby spinach, pomegranate seeds, and a light balsamic glaze.",
        "vegan": "Contains poultry. Not suitable for vegans."
      }
    }
  },
  {
    "id": "fit_7",
    "nameTr": "Kuru Fasulye Piyazı",
    "nameEn": "White Bean Salad",
    "restaurant": "Tarihi Piyazcı",
    "price": 120,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "740+",
    "calories": 270,
    "protein": 15,
    "carbs": 38,
    "fat": 6,
    "imageUrl": "/images/piyaz.jpg",
    "matchTagTr": "YUMURTALI LİF KAYNAĞI",
    "matchTagEn": "EGG & BEAN PROTEIN",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Haşlanmış yumurta ve kuru fasulye ile zenginleştirilmiş yüksek lifli salata klasiği.",
        "cheat_day": "Köftenin yanına harika gider ancak sosundaki yağ miktarını azaltabilirsiniz.",
        "economic": "Uygun fiyata bitkisel protein ve yumurta zenginliği sunan F/P yemeği.",
        "gourmet": "Bol sirke, kaliteli zeytinyağı ve Antalya usulü tahin sosunun muazzam birleşimi.",
        "vegan": "Yumurta çıkarıldığında tamamen vegan ve doyurucu bir alternatiftir."
      },
      "en": {
        "fit": "High fiber salad topped with boiled egg slices and fresh red onions.",
        "cheat_day": "Perfect side dish for meatballs, but watch the dressing.",
        "economic": "Budget-friendly option that delivers solid protein from beans and eggs.",
        "gourmet": "Antalya-style tahini dressing, vinegar, and organic olive oil.",
        "vegan": "Contains boiled egg. Can be made vegan if egg is excluded."
      }
    }
  },
  {
    "id": "fit_8",
    "nameTr": "Kinoa veya Karabuğdaylı Kısır",
    "nameEn": "Quinoa or Buckwheat Kısır",
    "restaurant": "Healthy Bowl",
    "price": 130,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "210+",
    "calories": 220,
    "protein": 7,
    "carbs": 35,
    "fat": 5,
    "imageUrl": "/images/kinoa-kisir.jpg",
    "matchTagTr": "GLÜTENSİZ FİT KISIR",
    "matchTagEn": "GLUTEN-FREE FIT KISIR",
    "isHealthy": true,
    "isVegan": true,
    "category": "vegan",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Geleneksel kısırın glütensiz, kinoa veya karabuğday kullanılarak yapılmış modern hali.",
        "cheat_day": "Cheat day için hafif kalsa da gün içi sağlıklı atıştırmalık olarak ideal.",
        "economic": "Kinoa malzemesi biraz pahalı olsa da porsiyon boyutu doyurucudur.",
        "gourmet": "Bol nar ekşisi, taze nane ve sızma zeytinyağı ile harmanlanmış enfes kinoa.",
        "vegan": "Glütensiz kinoa ve taze otlarla zenginleştirilmiş %100 vegan kısır."
      },
      "en": {
        "fit": "Gluten-free version of traditional Turkish kısır, made with organic quinoa.",
        "cheat_day": "Very clean eating, great for snack breaks during active diet weeks.",
        "economic": "Uses premium quinoa, yet reasonably priced for a nutrient-dense dish.",
        "gourmet": "Infused with rich pomegranate molasses, mint, and cold-pressed olive oil.",
        "vegan": "100% plant-based, gluten-free, and oil-light salad."
      }
    }
  },
  {
    "id": "fit_9",
    "nameTr": "Yoğurtlu Kuru Domates Salatası",
    "nameEn": "Dried Tomatoes with Yogurt",
    "restaurant": "Ege Meze",
    "price": 95,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "510+",
    "calories": 140,
    "protein": 6,
    "carbs": 12,
    "fat": 8,
    "imageUrl": "/images/yogurtlu-domates.jpg",
    "matchTagTr": "KALSİYUM & ANTİOKSİDAN",
    "matchTagEn": "CALCIUM & ANTIOXIDANT",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Süzme yoğurt ve kuru domatesin düşük kalorili, kalsiyum dolu mükemmel birleşimi.",
        "cheat_day": "Cheat day sofralarında hafif bir meze olarak yer bulabilir.",
        "economic": "95.00 ₺ fiyatıyla sofraları renklendirecek ekonomik ve hafif bir alternatif.",
        "gourmet": "Kurutulmuş domateslerin zeytinyağında sarımsak ve cevizle sotelenip yoğurtla buluşması.",
        "vegan": "Yoğurt (süt ürünü) içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High calcium yogurt dip mixed with antioxidant-rich sun-dried tomatoes.",
        "cheat_day": "Great as a light appetizer alongside heavy kebabs or flatbreads.",
        "economic": "A budget-friendly mezze option costing under ₺100.",
        "gourmet": "Garlic infused sun-dried tomatoes sautéed with walnuts over strained yogurt.",
        "vegan": "Contains dairy yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "fit_10",
    "nameTr": "Zeytinyağlı Taze Fasulye",
    "nameEn": "Green Beans in Olive Oil",
    "restaurant": "Yeşil Ev Yemekleri",
    "price": 110,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.1k+",
    "calories": 120,
    "protein": 3,
    "carbs": 14,
    "fat": 7,
    "imageUrl": "/images/taze-fasulye.jpg",
    "matchTagTr": "DÜŞÜK KALORİLİ YAZ SEBZESİ",
    "matchTagEn": "LOW CALORIE SUMMER VEGGIE",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Neredeyse sıfır kaloriye sahip, bol lifli ve vitamin deposu taze fasulye.",
        "cheat_day": "Diyet günlerinde kalori açığı oluşturmak için harika bir seçenek.",
        "economic": "Mevsiminde çok ucuz ve besleyici, tencere yemeklerinin F/P şampiyonu.",
        "gourmet": "Domates ve soğan suyuyla kendi buharında pişirilmiş, zeytinyağlı Ege klasiği.",
        "vegan": "Sadece taze fasulye, domates, soğan ve sızma zeytinyağı içeren saf vegan lezzet."
      },
      "en": {
        "fit": "Ultra-low calorie green beans rich in dietary fibers and vitamin C.",
        "cheat_day": "An ideal meal to keep your calories low during strict cutting phases.",
        "economic": "Very affordable home-style vegetable dish with great value.",
        "gourmet": "Simmered slowly in its own juices with sweet onions and fresh tomatoes.",
        "vegan": "Pure plant-based Turkish stew, 100% vegan certified."
      }
    }
  },
  {
    "id": "fit_11",
    "nameTr": "Tavada Yumurta",
    "nameEn": "Fried Eggs",
    "restaurant": "Kahvaltı Kulübü",
    "price": 120,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "830+",
    "calories": 250,
    "protein": 24,
    "carbs": 6,
    "fat": 14,
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "TAVADA PROTEİN",
    "matchTagEn": "PAN PROTEIN",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Tavada hafifçe pişirilmiş, kas dostu pratik protein bombası.",
        "cheat_day": "Hafif kahvaltı yapıp akşam kalorili kebaplara yer ayırmak isteyenler için ideal.",
        "economic": "Yumurta ve lor peynirinin bütçe dostu protein birleşimi.",
        "gourmet": "Taze biber, domates ve lor peynirinin ızgarada döküm tavada pişmiş enfes hali.",
        "vegan": "Yumurta ve süt ürünü lor peyniri içerir. Vegan değildir."
      },
      "en": {
        "fit": "Lightly pan-cooked eggs for a quick, muscle-friendly protein boost.",
        "cheat_day": "Great to save calorie room for your cheat day dinner.",
        "economic": "Highly affordable breakfast protein using simple farm eggs and curd.",
        "gourmet": "Cooked in a cast-iron skillet with sweet green peppers and vine tomatoes.",
        "vegan": "Contains chicken eggs and dairy whey cheese. Non-vegan."
      }
    }
  },
  {
    "id": "fit_12",
    "nameTr": "Tavuklu Nohut Salatası",
    "nameEn": "Chickpea Salad with Chicken",
    "restaurant": "Sporcu Mutfağı",
    "price": 145,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "410+",
    "calories": 380,
    "protein": 34,
    "carbs": 40,
    "fat": 9,
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "SPORCU DOSTU MAKROLAR",
    "matchTagEn": "ATHLETE MACRO BALANCE",
    "isHealthy": true,
    "isVegan": false,
    "category": "vegan",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Lifli nohut karbonhidratı ile yağsız tavuk proteininin sporcular için dengeli buluşması.",
        "cheat_day": "Cheat day için fazla temiz bir profil, kas geliştirmek için harika bir yakıt.",
        "economic": "Nohut ve tavuk göğsünün bir arada sunulduğu oldukça doyurucu ve hesaplı öğün.",
        "gourmet": "Limonlu tahin sosu, maydanoz ve kırmızı soğanla harmanlanmış ılık nohutlar.",
        "vegan": "Tavuk göğsü içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Perfect combination of complex chickpea carbs and lean chicken breast protein.",
        "cheat_day": "Too clean for an indulgence, but amazing fuel for building muscles.",
        "economic": "Highly satisfying meal with solid protein-carb balance at a fair price.",
        "gourmet": "Warm chickpeas tossed with parsley, red onion, and a light lemon tahini drizzle.",
        "vegan": "Contains chicken breast. Not vegan."
      }
    }
  },
  {
    "id": "fit_13",
    "nameTr": "Fırında Baharatlı Karnabahar",
    "nameEn": "Baked Spiced Cauliflower",
    "restaurant": "Veggie Life",
    "price": 110,
    "currency": "₺",
    "rating": 4.2,
    "reviewCount": "190+",
    "calories": 140,
    "protein": 5,
    "carbs": 16,
    "fat": 6,
    "imageUrl": "/images/karnabahar.jpg",
    "matchTagTr": "DÜŞÜK KALORİLİ CİPS ALTERNATİFİ",
    "matchTagEn": "LOW CALORIE CHIPS ALTERNATIVE",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Zerdeçal, kırmızı biber ve az zeytinyağı ile fırınlanmış çıtır karnabahar çiçekleri.",
        "cheat_day": "Cips yemek yerine televizyon karşısında tüketebileceğiniz suçluluksuz atıştırmalık.",
        "economic": "Karnabaharın lif gücünü ekonomik yoldan sunan diyet dostu sebze.",
        "gourmet": "Fırınlanmış baharatlı karnabaharın sarımsaklı vegan dip sos eşliğindeki sunumu.",
        "vegan": "%100 bitkisel içerikli, baharatlar ve zeytinyağı ile fırınlanmış vegan lezzet."
      },
      "en": {
        "fit": "Baked cauliflower florets dusted with turmeric, sweet paprika, and olive oil.",
        "cheat_day": "A great crunchy snack to replace chips when watching a movie.",
        "economic": "Low-cost high-fiber food that fills you up with minimum budget.",
        "gourmet": "Crispy oven-roasted spiced cauliflower served with garlicky vegan sauce.",
        "vegan": "100% plant-based, baked using pure vegetable oil and spices."
      }
    }
  },
  {
    "id": "fit_14",
    "nameTr": "Şehriyesiz Tavuk Suyu Çorbası",
    "nameEn": "Clear Chicken Broth Soup",
    "restaurant": "Çorbacı Dayı",
    "price": 90,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.4k+",
    "calories": 160,
    "protein": 18,
    "carbs": 4,
    "fat": 8,
    "imageUrl": "/images/tavuk-corbasi.jpg",
    "matchTagTr": "LİMONLU ŞİFA KAYNAĞI",
    "matchTagEn": "HEALTHY RECOVERY SOUP",
    "isHealthy": true,
    "isVegan": false,
    "category": "soup",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Karbonhidratsız (şehriyesiz), bol limon ve karabiberle bağışıklık güçlendiren çorba.",
        "cheat_day": "Hafif beslenmek istediğiniz detoks günleri için harika bir sıcak başlangıç.",
        "economic": "90.00 ₺ fiyatıyla hem çok şifalı, hem de son derece bütçe dostu.",
        "gourmet": "Saatlerce kaynatılmış organik tavuk kemik suyu ve tiftiklenmiş tavuk etleri.",
        "vegan": "Tavuk suyu içerir, veganlar için uygun değildir."
      },
      "en": {
        "fit": "Zero carbs (no noodles), packed with immunity-boosting lemon and black pepper.",
        "cheat_day": "Ideal hot soup for your detox or recovery days to ease digestion.",
        "economic": "Very wallet-friendly chicken soup priced at only ₺90.00.",
        "gourmet": "Made from organic chicken bone broth simmered for hours, topped with herbs.",
        "vegan": "Contains chicken broth. Not vegan."
      }
    }
  },
  {
    "id": "fit_15",
    "nameTr": "Zeytinyağlı Bamya",
    "nameEn": "Okra in Olive Oil",
    "restaurant": "Tencere Lokantası",
    "price": 115,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "340+",
    "calories": 130,
    "protein": 3,
    "carbs": 16,
    "fat": 6,
    "imageUrl": "/images/bamya.jpg",
    "matchTagTr": "MİDE DOSTU SEBZE",
    "matchTagEn": "STOMACH FRIENDLY OKRA",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Mide ve bağırsak dostu yapısıyla bilinen, limonlu zeytinyağında pişmiş bamya.",
        "cheat_day": "Ağır yemeklerden sonra sindirim sisteminizi dinlendirmek için mükemmel seçim.",
        "economic": "Esnaf lokantası tarzında sunulan, hesaplı ve lif zengini sebze öğünü.",
        "gourmet": "Taze domates ve limon asidiyle salyalanmadan usta ellerde pişmiş gurme bamya.",
        "vegan": "Hayvansal yağ içermeyen, zeytinyağlı geleneksel vegan sebze yemeği."
      },
      "en": {
        "fit": "Stomach-friendly okra simmered in lemon juice and extra virgin olive oil.",
        "cheat_day": "Great to reset your digestion after eating greasy comfort foods.",
        "economic": "High-fiber seasonal dish that is easy on the wallet.",
        "gourmet": "Cooked expertly without becoming slimy, using fresh tomatoes and lemon.",
        "vegan": "100% plant-based traditional Turkish olive oil recipe."
      }
    }
  },
  {
    "id": "fit_16",
    "nameTr": "Fırında Kabak Sandal",
    "nameEn": "Baked Zucchini Boats",
    "restaurant": "Fit Lezzetler",
    "price": 140,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "430+",
    "calories": 220,
    "protein": 16,
    "carbs": 12,
    "fat": 12,
    "imageUrl": "/images/kabak-sandal.jpg",
    "matchTagTr": "HAFİF DOLMA ALTERNATİFİ",
    "matchTagEn": "LIGHT STUFFED ZUCCHINI",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kabağın içi oyularak yağsız kıyma veya lor ile doldurulup fırınlanmış hali.",
        "cheat_day": "Üzerine erimiş kaşar peyniri ekleyerek cheat day tarzına uydurabilirsiniz.",
        "economic": "Protein ve sebzeyi dengeli sunan, porsiyonu doyurucu diyet alternatifi.",
        "gourmet": "Fesleğen aromalı kıymayla doldurulmuş, fırında nar gibi kızarmış kabaklar.",
        "vegan": "Kıyma veya süt ürünü peynir dolgusu içerir. Vegan değildir."
      },
      "en": {
        "fit": "Hollowed zucchini stuffed with lean minced beef or light curd, baked golden.",
        "cheat_day": "Add extra cheddar on top if you want a cheesy comfort version.",
        "economic": "Fills you up with good protein and greens without breaking the bank.",
        "gourmet": "Zucchini halves stuffed with basil-infused beef and roasted tomatoes.",
        "vegan": "Stuffed with minced meat and dairy. Not vegan."
      }
    }
  },
  {
    "id": "fit_17",
    "nameTr": "Köz Patlıcan Salatası",
    "nameEn": "Roasted Eggplant Salad",
    "restaurant": "Köz Evi",
    "price": 105,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "820+",
    "calories": 110,
    "protein": 2,
    "carbs": 10,
    "fat": 7,
    "imageUrl": "/images/patlican-salatasi.jpg",
    "matchTagTr": "YAĞSIZ KÖZ LEZZETİ",
    "matchTagEn": "OIL-FREE ROASTED SMOKE",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Közlenmiş patlıcanın sarımsak, sirke ve az zeytinyağı ile harmanlanmış hafif hali.",
        "cheat_day": "Kebapların yanında tüketilebilecek en lezzetli ve hafif eşlikçi meze.",
        "economic": "105.00 ₺ fiyatıyla patlıcanın o nefis isli tadını doyasıya yaşatan F/P.",
        "gourmet": "Meşe kömüründe közlenmiş, limon asidi ve sızma zeytinyağıyla marine edilmiş patlıcan.",
        "vegan": "Yoğurt eklenmediği takdirde tamamen patlıcan ve sebzelerden oluşan vegan meze."
      },
      "en": {
        "fit": "Roasted eggplant mash seasoned with fresh garlic, vinegar, and olive oil.",
        "cheat_day": "The ultimate smoky side dish to pair with your weekend kebabs.",
        "economic": "Affordable and smoky appetizer that brings high flavor value.",
        "gourmet": "Charcoal-roasted eggplants hand-peeled and drizzled with cold-pressed olive oil.",
        "vegan": "100% plant-based salad. Gluten-free and dairy-free."
      }
    }
  },
  {
    "id": "fit_18",
    "nameTr": "Chia Tohumlu Meyveli Yoğurt",
    "nameEn": "Chia Seed Yogurt with Fruits",
    "restaurant": "Smoothie Bar",
    "price": 110,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "280+",
    "calories": 190,
    "protein": 8,
    "carbs": 26,
    "fat": 5,
    "imageUrl": "/images/chia-yogurt.jpg",
    "matchTagTr": "SAĞLIKLI TATLI SEÇENEĞİ",
    "matchTagEn": "HEALTHY SWEET CHOICE",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Chia tohumunun jelleşen lifli yapısı ve taze orman meyveli hafif yoğurt.",
        "cheat_day": "Şeker krizlerini sıfır suçlulukla atlatmak isteyenler için harika kaçamak.",
        "economic": "Evde hazırlanabilen ama dışarıda da makul fiyata satılan fit kahvaltı/ara öğün.",
        "gourmet": "Süzme yoğurt, chia, yaban mersini ve taze nane yapraklarının şık sunumu.",
        "vegan": "İnek sütü yoğurdu içerir. Vegan yoğurt alternatifi için içeriği sorun."
      },
      "en": {
        "fit": "Greek yogurt mixed with fiber-packed chia seeds and topped with fresh berries.",
        "cheat_day": "Great sweet treat substitute to avoid refined sugar crashes.",
        "economic": "Budget-friendly light snack packed with superfoods.",
        "gourmet": "A beautiful cup of strained yogurt, organic chia seeds, blueberries, and mint.",
        "vegan": "Contains dairy. Ask for almond or coconut yogurt options."
      }
    }
  },
  {
    "id": "fit_19",
    "nameTr": "Izgara Köfte",
    "nameEn": "Grilled Meatballs",
    "restaurant": "Köfteci Salih",
    "price": 160,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.9k+",
    "calories": 420,
    "protein": 32,
    "carbs": 15,
    "fat": 20,
    "imageUrl": "/images/izgara-kofte.jpg",
    "matchTagTr": "KLASİK ET PROTEİNİ",
    "matchTagEn": "CLASSIC MEAT PROTEIN",
    "isHealthy": true,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pilav ve patates olmadan bol yeşillikle tüketildiğinde son derece temiz ızgara et proteini.",
        "cheat_day": "Ekmek arası yapıp patates kızartması ekleyerek tam bir cheat day şölenine çevirebilirsiniz.",
        "economic": "160.00 ₺ fiyatıyla esnaf usulü porsiyon doyuruculuğu sunan klasik köfte.",
        "gourmet": "Katkısız kıymadan yoğrulmuş, içi sulu bırakılmış usta ızgarasından çıkan köfteler.",
        "vegan": "Sığır/kuzu eti içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High protein grilled meatballs, served with greens instead of rice or fries.",
        "cheat_day": "Wrap it inside warm bread with extra onions and french fries.",
        "economic": "Good local price for real grilled beef protein that keeps you full.",
        "gourmet": "Lightly seasoned hand-shaped meatballs grilled to juicy perfection over coal.",
        "vegan": "Contains beef. Definitely non-vegan."
      }
    }
  },
  {
    "id": "fit_20",
    "nameTr": "Ispanak Borani",
    "nameEn": "Spinach Borani",
    "restaurant": "Yeşil Mutfak",
    "price": 100,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "310+",
    "calories": 160,
    "protein": 7,
    "carbs": 12,
    "fat": 8,
    "imageUrl": "/images/ispanak-borani.jpg",
    "matchTagTr": "SARIMSALAKLI YOĞURTLU ISPANAK",
    "matchTagEn": "GARLIC YOGURT SPINACH",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Demir deposu ıspanağın sarımsaklı süzme yoğurt ile hafif ve sağlıklı buluşması.",
        "cheat_day": "Doyurucu ve ferahlatıcı yapısıyla kebap yanına hafif bir meze alternatifi.",
        "economic": "100.00 ₺ fiyatıyla hem çok sağlıklı, hem de son derece bütçe dostu.",
        "gourmet": "Zeytinyağında sotelenmiş körpe ıspanak, süzme yoğurt ve pul biberli yağ sosu.",
        "vegan": "Süzme yoğurt (süt ürünü) içerir. Vegan versiyonu için yoğurtsuz isteyin."
      },
      "en": {
        "fit": "Iron-rich spinach sautéed and mixed with garlicky strained Greek yogurt.",
        "cheat_day": "Makes a refreshing side dish to cut down on heavy calorie entrees.",
        "economic": "Affordable vegetable meal that keeps costs low and nutrition high.",
        "gourmet": "Baby spinach sautéed in extra virgin olive oil, topped with spiced yogurt.",
        "vegan": "Contains dairy yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_21",
    "nameTr": "İskender Kebap",
    "nameEn": "Bursa İskender Kebab",
    "restaurant": "Tarihi Bursa Kebapçısı",
    "price": 260,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "4.1k+",
    "calories": 950,
    "protein": 48,
    "carbs": 70,
    "fat": 55,
    "imageUrl": "/images/iskender.jpg",
    "matchTagTr": "TEREYAĞLI LEZZET BOMBASI",
    "matchTagEn": "SIZZLING BUTTER BOMB",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Diyet günlerinde uzak durun! Bol tereyağı ve pide tabanı içerir. Kalorisi 950 kcal.",
        "cheat_day": "Eritilmiş kızgın tereyağının, döner eti ve pidelerle buluştuğu o efsanevi an! Bugün senin günün.",
        "economic": "Fiyatı yüksek fakat kullanılan kaliteli tereyağı ve kuzu eti için değer.",
        "gourmet": "Eritilmiş keçi tereyağı, manda yoğurdu ve közlenmiş patlıcan yatağında yaprak döner.",
        "vegan": "%100 dana/kuzu eti ve tereyağı içerir. Sola kaydırın!"
      },
      "en": {
        "fit": "High in fats and simple carbs due to pita and butter. Avoid on cutting phases.",
        "cheat_day": "Pouring hot, sizzling butter over thin slices of lamb doner and pita. Ultimate cheat day royalty!",
        "economic": "Premium pricing, but the quality of meat and butter justifies the expense.",
        "gourmet": "Aged shaved lamb over fire-toasted pide, finished with sizzling sheep butter.",
        "vegan": "Contains lamb and butter. Highly non-vegan."
      }
    }
  },
  {
    "id": "cheat_22",
    "nameTr": "Adana / Urfa Kebap Dürüm",
    "nameEn": "Adana Kebab Wrap",
    "restaurant": "Zırh Kebap",
    "price": 195,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "3.5k+",
    "calories": 780,
    "protein": 42,
    "carbs": 45,
    "fat": 46,
    "imageUrl": "/images/adana-kebap.jpg",
    "matchTagTr": "KUYRUK YAĞLI LEZZET DÜRÜMÜ",
    "matchTagEn": "JUICY TAIL FAT WRAP",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kuyruk yağı oranı yüksektir. Lavaşsız tabak olarak tüketilmesi daha uygundur.",
        "cheat_day": "Alevlerin öptüğü o zırh kıyması, lavaşın yağı emişi ve sumaklı soğan! Ziyafet başlasın.",
        "economic": "Çok doyurucu bir porsiyon, dürüm olarak fiyat/performansı yüksektir.",
        "gourmet": "Elde zırh ile kıyılmış kuzu eti, köz biber ve domatesle sarılmış çıtır lavaş.",
        "vegan": "%100 kuzu eti içerir, vegan beslenmeyle uzaktan yakından alakası yoktur."
      },
      "en": {
        "fit": "Contains high amount of tail fat. Order as a plate without flatbread if dieting.",
        "cheat_day": "Minced lamb kebab packed with tail fat and wrapped in warm flatbread. Delicious indulgence!",
        "economic": "A heavy, satisfying portion size that delivers solid bang for your buck.",
        "gourmet": "Hand-minced lamb leg fat-blended with local red peppers, grilled over oak.",
        "vegan": "Contains lamb meat. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_23",
    "nameTr": "Beyti Sarma",
    "nameEn": "Beyti Sarma Kebab",
    "restaurant": "Usta eller Kebap",
    "price": 240,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.1k+",
    "calories": 890,
    "protein": 44,
    "carbs": 60,
    "fat": 52,
    "imageUrl": "/images/beyti-sarma.jpg",
    "matchTagTr": "SOSLU & LAVAŞLI ZİYAFET",
    "matchTagEn": "SAUCY LAVAASH FEAST",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Lavaş sarması, domates sosu ve tereyağı üçlüsü kaloriyi zirveye taşır. Diyet düşmanıdır.",
        "cheat_day": "Lavaşa sarılı nefis kebap dilimleri, sarımsaklı yoğurt ve üzerindeki kızgın tereyağı köpüğü!",
        "economic": "Üst segment kebap seçeneği, cheat day kutlamaları için bütçeye değer.",
        "gourmet": "Özel yaprak lavaşla sarılmış közlenmiş kuzu kıyması, süzme yoğurt yatağında sunum.",
        "vegan": "Kıyma, yoğurt ve tereyağı içerir. Sola kaydırın."
      },
      "en": {
        "fit": "Heavy combination of flatbread, tomato sauce, and butter. Avoid on weight loss.",
        "cheat_day": "Grilled kebab rolled in thin flatbread, sliced, topped with tomato sauce and butter.",
        "economic": "A bit expensive, but highly satisfying for a weekend cheat meal reward.",
        "gourmet": "Garlic infused lamb wrap served with thick strained sheep yogurt.",
        "vegan": "Contains meat, yogurt, and butter. Definitely not vegan."
      }
    }
  },
  {
    "id": "cheat_24",
    "nameTr": "Mantı",
    "nameEn": "Turkish Dumplings",
    "restaurant": "Mantı Evi",
    "price": 150,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "3.2k+",
    "calories": 720,
    "protein": 26,
    "carbs": 90,
    "fat": 28,
    "imageUrl": "/images/manti.jpg",
    "matchTagTr": "SARIMSALAKLI YOĞURTLU MANTI",
    "matchTagEn": "GARLIC YOGURT DUMPLINGS",
    "isHealthy": false,
    "isVegan": false,
    "category": "pasta",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yoğun karbonhidrat ve un içerir. Diyet yaparken porsiyonu paylaşmanızı öneririz.",
        "cheat_day": "Bol sarımsaklı yoğurt, salçalı tereyağı sosu ve nane-sumak baharat şöleni! Harika bir kaçamak.",
        "economic": "Oldukça doyurucu bir tabak, makul fiyata hamur ve et dengesi sunar.",
        "gourmet": "Elde bükülmüş nohut büyüklüğünde orijinal Kayseri mantısı, kurutulmuş nane ile.",
        "vegan": "Kıyma ve yoğurt içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High in simple carbs and wheat flour. Eat in moderation if monitoring macros.",
        "cheat_day": "Garlic yogurt, melted butter, tomato paste, and sumac over tiny beef dumplings.",
        "economic": "Very filling meal that provides solid satiety for its price tag.",
        "gourmet": "Hand-folded micro-sized dumplings filled with minced beef, authentic Kayseri recipe.",
        "vegan": "Contains minced beef and dairy yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_25",
    "nameTr": "Kokoreç",
    "nameEn": "Kokoreç",
    "restaurant": "Şampiyon Kokoreç",
    "price": 160,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "2.8k+",
    "calories": 650,
    "protein": 34,
    "carbs": 42,
    "fat": 38,
    "imageUrl": "/images/kokorec.jpg",
    "matchTagTr": "BOL BAHARATLI SOKAK LEZZETİ",
    "matchTagEn": "SPICY STREET DELICACY",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yarım ekmek karbonhidratı ve bağırsak yağları diyet makrolarını bozar.",
        "cheat_day": "Kimyon, pul biber, kekik ve çıtır ekmek arası sıcak uykuluklu kokoreç lezzeti!",
        "economic": "Çeyrek veya yarım ekmek seçenekleriyle doyurucu ve makul fiyatlı sokak tadı.",
        "gourmet": "Uykuluk ilave edilmiş, kömür ateşinde ağır ağır pişmiş Balıkesir süt kuzusu kokoreç.",
        "vegan": "Sakatat (kuzu bağırsağı) içerir. Veganların hemen uzaklaşması gerekir."
      },
      "en": {
        "fit": "High in saturated fat and white bread carbs. Skip during strict diets.",
        "cheat_day": "Spicy chopped grilled lamb intestines seasoned with cumin and oregano in toasted bread.",
        "economic": "Street food favorite that fills you up fast without costing a fortune.",
        "gourmet": "Slow-roasted milk lamb intestines over oak charcoal, chopped with sweet peppers.",
        "vegan": "Contains offal (lamb intestines). Not vegan."
      }
    }
  },
  {
    "id": "cheat_26",
    "nameTr": "Kumpir",
    "nameEn": "Kumpir",
    "restaurant": "Ortaköy Kumpircisi",
    "price": 155,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.9k+",
    "calories": 820,
    "protein": 18,
    "carbs": 110,
    "fat": 35,
    "imageUrl": "/images/kumpir.jpg",
    "matchTagTr": "DEV PATATES MEZE ŞÖLENİ",
    "matchTagEn": "GIANT BAKED POTATO FEAST",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Devasa karbonhidrat (110g) ve mayonezli soslar diyetinizi bozabilir.",
        "cheat_day": "Tereyağı ve kaşarla ezilmiş dev patatesin içine kısır, rus salatası, mısır, sosis doldurun!",
        "economic": "155.00 ₺ fiyatına alabileceğiniz en büyük ve en doyurucu porsiyonlardan biri.",
        "gourmet": "Fırınlanmış patatesin içine trüflü mayonez, füme et dilimleri ve gurme zeytinler.",
        "vegan": "Tereyağı, kaşar, sosis ve rus salatası mayonezi içerir. Vegan versiyonu için malzemeleri seçin."
      },
      "en": {
        "fit": "A massive carb bomb (110g) with heavy mayonnaise salads. Avoid.",
        "cheat_day": "Giant baked potato mashed with butter and cheese, stuffed with all your favorite toppings.",
        "economic": "Extremely heavy and filling portion size that yields high value for ₺155.00.",
        "gourmet": "Baked potato mashed with truffle butter, artisan sausage, and gourmet olives.",
        "vegan": "Contains butter, cheese, and dairy. Ask for vegan style without these."
      }
    }
  },
  {
    "id": "cheat_27",
    "nameTr": "Gaziantep Katmeri / Baklava",
    "nameEn": "Gaziantep Katmer",
    "restaurant": "Baklavacı Memo",
    "price": 175,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "1.8k+",
    "calories": 680,
    "protein": 12,
    "carbs": 78,
    "fat": 36,
    "imageUrl": "/images/baklava.jpg",
    "matchTagTr": "FISTIKLI & KAYMAKLI ÇITIR",
    "matchTagEn": "PISTACHIO & CLOTTED CREAM",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Şerbet, kaymak, tereyağı ve hamur içerir. Yoğun kalori patlaması yaratır.",
        "cheat_day": "Çıtır çıtır incecik hamur arasında bol fıstık ve manda kaymağı! Bugün sınırları zorla.",
        "economic": "Pahalı Antep fıstığı içerdiğinden dolayı premium sınıf ama lezzeti eşsizdir.",
        "gourmet": "Taş fırında pişmiş zar inceliğinde el açması hamur, bol boz fıstık ve has kaymak.",
        "vegan": "Kaymak ve tereyağı içerir. Süt ürünleri yoğunlukludur, vegan değildir."
      },
      "en": {
        "fit": "Sugar syrup, pastry dough, and clotted cream. Very high calorie density.",
        "cheat_day": "Crispy thin phyllo pastry stuffed with emerald green pistachios and buffalo cream.",
        "economic": "High cost due to premium pistachios, but a legendary dessert experience.",
        "gourmet": "Wood-fired crispy dough sheets loaded with green Boz pistachios and raw cream.",
        "vegan": "Contains clotted cream and butter. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_28",
    "nameTr": "Hatay Künefesi",
    "nameEn": "Hatay Künefe",
    "restaurant": "Künefe Sarayı",
    "price": 160,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.4k+",
    "calories": 750,
    "protein": 14,
    "carbs": 85,
    "fat": 38,
    "imageUrl": "/images/kunefe.jpg",
    "matchTagTr": "SICACIK SÜNEN PEYNİRLİ TATLI",
    "matchTagEn": "MELTED CHEESE & SYRUP",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kızarmış kadayıf ve şerbet diyetinizi anında sabote edebilir. Uzak durun.",
        "cheat_day": "Tuzsuz künefe peynirinin çıtır kadayıf arasında uzadığı, sıcak şerbetli şölen!",
        "economic": "Paylaşımlı tüketildiğinde fiyatı oldukça makul olan klasik bir lezzet.",
        "gourmet": "Hatay'ın taze künefe peyniri ve tereyağı ile bakır tepside kömürde pişen künefe.",
        "vegan": "Erimiş peynir ve tereyağı içerir, hayvansal süt ürünü doludur."
      },
      "en": {
        "fit": "Fried shredded wheat soaked in hot sugar syrup. Highly caloric.",
        "cheat_day": "Sizzling hot sweet pastry stuffed with melted unsalted cheese, soaked in light syrup.",
        "economic": "Reasonable price if shared between two or three friends.",
        "gourmet": "Cooked on a copper plate over coal fire, utilizing traditional stringy cheese.",
        "vegan": "Contains cheese and butter. Not vegan."
      }
    }
  },
  {
    "id": "cheat_29",
    "nameTr": "Sufle / San Sebastian Cheesecake",
    "nameEn": "San Sebastian Cheesecake",
    "restaurant": "Fırın & Kahve",
    "price": 120,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "1.5k+",
    "calories": 590,
    "protein": 10,
    "carbs": 48,
    "fat": 42,
    "imageUrl": "/images/san-sebastian.jpg",
    "matchTagTr": "AKICI ÇİKOLATALI KAÇAMAK",
    "matchTagEn": "CREAMY CHOCOLATE DRIZZLE",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Rafine şeker ve krem peynir yoğunluğu kaloriyi fırlatır. Diyet dostu değildir.",
        "cheat_day": "Dışı yanık, içi ise krema gibi akışkan kıvamda. Üzerine eritilmiş çikolata dökülmesi!",
        "economic": "Çikolatalı ve büyük porsiyonlu bir tatlı kaçamağı için makul fiyat.",
        "gourmet": "Yüksek ısıda fırınlanarak dışı karamelize edilmiş, içi yarı akışkan bırakılmış orijinal tarif.",
        "vegan": "Krem peynir, yumurta ve krema doludur. Vegan olmaktan çok uzaktır."
      },
      "en": {
        "fit": "High in saturated fats and refined sugars. Avoid on calorie cutting.",
        "cheat_day": "Burnt on the outside, creamy and custardy inside, drenched in warm milk chocolate.",
        "economic": "Fair pricing for a dense slice that fills you up like a small meal.",
        "gourmet": "Baked at high heat to achieve caramelized dark top while retaining semi-liquid center.",
        "vegan": "Contains large amounts of cream cheese and eggs. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_30",
    "nameTr": "Tantuni",
    "nameEn": "Tantuni",
    "restaurant": "Mersin Tantuni",
    "price": 150,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "2.5k+",
    "calories": 680,
    "protein": 36,
    "carbs": 58,
    "fat": 32,
    "imageUrl": "/images/tantuni.jpg",
    "matchTagTr": "MERSİN USULÜ YAĞLI DÜRÜM",
    "matchTagEn": "MERSIN STYLE OIL WRAP",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pamuk yağında pişirilen et ve lavaşın yağı emmesi diyetinizi zorlar.",
        "cheat_day": "Tepside pamuk yağıyla çevrilen küçük et küpleri, bol pul biber ve lavaş sarması!",
        "economic": "150.00 ₺ Mersin tantuni klasiği için son derece doyurucu ve lezzetli bir fiyat.",
        "gourmet": "Mersin usulü incecik lavaşa sarılmış, sumaklı maydanozlu soğanla harmanlanmış etler.",
        "vegan": "%100 dana veya kuzu eti içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Cooked in cotton oil, lavaash bread absorbs most fats. Skip on diets.",
        "cheat_day": "Minced beef cooked in cotton oil, spices, and wrapped tightly in soft lavaash.",
        "economic": "Highly satisfying Mersin street food classic that won't empty your pocket.",
        "gourmet": "Prepared on a traditional copper tantuni pan, rolled with sumac onions.",
        "vegan": "Contains beef. Definitely not vegan."
      }
    }
  },
  {
    "id": "cheat_31",
    "nameTr": "Islak Kek / Ağlayan Pasta",
    "nameEn": "Weeping Chocolate Cake",
    "restaurant": "Ev Lezzetleri Pastanesi",
    "price": 110,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "640+",
    "calories": 520,
    "protein": 8,
    "carbs": 68,
    "fat": 24,
    "imageUrl": "/images/islak-kek.jpg",
    "matchTagTr": "BOL ÇİKOLATA SOSLU KEK",
    "matchTagEn": "CREAM & CHOCOLATE CAKE",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Islatılmış kek, krem şanti ve çikolata sosu diyet programınızı bozar.",
        "cheat_day": "Sütle ıslatılmış kakaolu kek, hafif krem şanti ve enfes yoğun çikolata sosu birleşimi!",
        "economic": "Ev yapımı tadında, porsiyonu oldukça doyurucu bütçe dostu tatlı.",
        "gourmet": "Organik vanilyalı krem şanti ve el yapımı bitter çikolata ganajı ile hazırlanan kek.",
        "vegan": "Süt, krema ve yumurta içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Soaked cake layers, cream topping, and syrup are full of sugar.",
        "cheat_day": "Spongy cocoa cake soaked in sweet milk, topped with whipped cream and chocolate.",
        "economic": "Home-style traditional chocolate dessert that offers solid sweet satisfaction.",
        "gourmet": "Topped with organic vanilla cream whipped from scratch and dark chocolate ganache.",
        "vegan": "Contains milk, whipping cream, and eggs. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_32",
    "nameTr": "Hamburger Menü",
    "nameEn": "Classic Cheeseburger Menu",
    "restaurant": "Burger House",
    "price": 185,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.4k+",
    "calories": 890,
    "protein": 38,
    "carbs": 80,
    "fat": 45,
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "SOSLU & CHEESEBURGER MENÜ",
    "matchTagEn": "CHEESY BURGER COMBODEAL",
    "isHealthy": false,
    "isVegan": false,
    "category": "burger",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kızarmış patates ve hamburger ekmeği basit karbonhidrat bombasıdır. Diyet için uygun değil.",
        "cheat_day": "Erimiş cheddar peyniri, sulu dana köftesi ve yanında çıtır çıtır patates kızartması!",
        "economic": "185.00 ₺ patates ve içecek dahil komple menü için gayet iyi bir F/P.",
        "gourmet": "Brioche ekmeğinde kuru dinlendirilmiş dana köfte, karamelize soğan ve trüflü mayonez.",
        "vegan": "Dana eti ve dana peyniri içerir. Veganlar sola kaydırsın."
      },
      "en": {
        "fit": "French fries and white burger buns create a high glycemic load. Avoid.",
        "cheat_day": "Melted cheddar, juicy beef patty, and a side of golden salted french fries.",
        "economic": "An all-inclusive combo deal under ₺200 that guarantees total fullness.",
        "gourmet": "Dry-aged beef blend on house-baked brioche with caramelized onion jam.",
        "vegan": "Contains beef patty and cheddar cheese. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_33",
    "nameTr": "İçli Köfte",
    "nameEn": "Fried Kibbeh",
    "restaurant": "Harbiye Sofrası",
    "price": 120,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "950+",
    "calories": 450,
    "protein": 18,
    "carbs": 48,
    "fat": 22,
    "imageUrl": "/images/icli-kofte.jpg",
    "matchTagTr": "ÇITIR KIZARTILMIŞ LEZZET",
    "matchTagEn": "CRISPY FRIED KIBBEH",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Derin yağda kızartıldığı için bulgur dış kabuğu çok fazla yağ çeker. Haşlama olanı seçin.",
        "cheat_day": "Çıtır dış kabuğu, içinde bol baharatlı kıyma, ceviz ve tereyağı! Tam bir cheat day başlangıcı.",
        "economic": "Tanesi 120.00 ₺ ama el emeği ve et kalitesi düşünüldüğünde özel bir lezzet.",
        "gourmet": "Bol cevizli, zırh kıymalı ve baharat dolgulu el açması çıtır içli köfte.",
        "vegan": "Dana kıyması içerir, vegan beslenme için uygun değildir."
      },
      "en": {
        "fit": "Deep fried outer bulgur shell absorbs high fat. Choose boiled style on diets.",
        "cheat_day": "Crispy outer crust stuffed with spiced ground beef, toasted walnuts, and butter.",
        "economic": "Hand-crafted Kibbeh is slightly pricey per piece but rich and satisfying.",
        "gourmet": "Thin bulgur dough hand-stuffed with spiced ribeye mince and walnuts.",
        "vegan": "Stuffed with minced beef. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_34",
    "nameTr": "Yağlama",
    "nameEn": "Kayseri Yağlaması",
    "restaurant": "Kayseri Mutfağı",
    "price": 210,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.2k+",
    "calories": 880,
    "protein": 38,
    "carbs": 75,
    "fat": 48,
    "imageUrl": "/images/yaglama.jpg",
    "matchTagTr": "KAT KAT KIYMALI ŞÖLEN",
    "matchTagEn": "LAYERED MINCED FEAST",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kat kat yağlı şebit ekmeği ve kıymalı sos diyetinizde yüksek yağ alımına sebep olur.",
        "cheat_day": "Üst üste dizilmiş incecik lavaşlar arasına dökülen sulu kıymalı sos ve sarımsaklı yoğurt!",
        "economic": "Oldukça büyük ve paylaşmaya uygun bir porsiyon, fiyatını sonuna kadar hak eder.",
        "gourmet": "Özel şebit ekmekleri, usta elinden çıkma tereyağlı ve domatesli kıyma sosu.",
        "vegan": "Kıyma ve yoğurt içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Layered oily flatbreads soaked in meat juices. High fat and carbs.",
        "cheat_day": "Stacks of thin flatbread layered with spiced minced beef sauce, topped with yogurt.",
        "economic": "A massive plate that can easily be shared between two, making it good value.",
        "gourmet": "Authentic şebit layers rolled with slow-simmered tomato beef reduction.",
        "vegan": "Contains minced beef and yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_35",
    "nameTr": "Kavurmalı Kaşarlı Pide",
    "nameEn": "Pide with Roasted Beef & Cheese",
    "restaurant": "Karadeniz Pidecisi",
    "price": 190,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "2.8k+",
    "calories": 910,
    "protein": 45,
    "carbs": 85,
    "fat": 42,
    "imageUrl": "/images/kavurmali-pide.jpg",
    "matchTagTr": "TEREYAĞLI KARADENİZ USULÜ",
    "matchTagEn": "BUTTERY BLACK SEA PIDE",
    "isHealthy": false,
    "isVegan": false,
    "category": "flatbread",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pide hamuru ve erimiş kaşarın yağ oranı diyetinize çok ağır gelir.",
        "cheat_day": "Çıtır hamur üzerinde uzayan kaşarlar, lokum gibi kavurma etleri ve kenarlarına sürülen tereyağı!",
        "economic": "Çok doyurucu, esnaf işi devasa pide bütçenizi zorlamadan ziyafet sunar.",
        "gourmet": "Karadeniz Rize kavurması ve Vakfıkebir tereyağı ile taş fırında pişen çıtır pide.",
        "vegan": "Kavurma eti ve inek sütü kaşarı içerir. Vegan değildir."
      },
      "en": {
        "fit": "Pita crust and melted cheese create a massive calorie load. Avoid on cuts.",
        "cheat_day": "Crispy flatbread loaded with stringy cheese, rich roasted beef, brushed with butter.",
        "economic": "Highly satisfying large portion that fills you up completely for ₺190.00.",
        "gourmet": "Wood-fired crispy dough loaded with authentic Rize beef and local butter.",
        "vegan": "Contains beef and cheese. Highly non-vegan."
      }
    }
  },
  {
    "id": "cheat_36",
    "nameTr": "Kumru / Ayvalık Tostu",
    "nameEn": "Kumru / Ayvalık Street Toast",
    "restaurant": "İzmir Büfe",
    "price": 135,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.6k+",
    "calories": 780,
    "protein": 28,
    "carbs": 65,
    "fat": 36,
    "imageUrl": "/images/ayvalik-tostu.jpg",
    "matchTagTr": "ŞARKÜTERİ SOKAK LEZZETİ",
    "matchTagEn": "STREET MEAT & TOAST",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Sosis, salam, sucuk ve mayonez! İşlenmiş şarküteri ürünleri diyete tamamen aykırıdır.",
        "cheat_day": "Nohut mayalı özel kumru ekmeğinde ızgara edilmiş sosis, salam, sucuk, kaşar ve turşu!",
        "economic": "135.00 ₺ fiyatıyla hızlıca doyuran, sokak lezzetlerinin F/P şampiyonu.",
        "gourmet": "İzmir'in orijinal nohut mayalı ekmeğiyle yapılan, el yapımı sucuklu kumru.",
        "vegan": "Yoğun miktarda şarküteri eti ve süt ürünü kaşar içerir. Vegan değildir."
      },
      "en": {
        "fit": "Sausages, salami, sucuk, and mayonnaise. Processed meats are not diet friendly.",
        "cheat_day": "Grilled Turkish sausages, salami, pepperoni, melted cheese, and pickles in artisanal bread.",
        "economic": "Great street food pricing that keeps you fully satisfied.",
        "gourmet": "Made with authentic chickpea-yeast bread and artisanal beef sucuk.",
        "vegan": "Contains processed meat and cheese. Highly non-vegan."
      }
    }
  },
  {
    "id": "cheat_37",
    "nameTr": "Tavuk Kanat",
    "nameEn": "Grilled Chicken Wings",
    "restaurant": "Kanatçı Ağa",
    "price": 180,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "2.8k+",
    "calories": 750,
    "protein": 45,
    "carbs": 12,
    "fat": 58,
    "imageUrl": "/images/tavuk-kanat-cheat.jpg",
    "matchTagTr": "ÇITIR ÇITIR MANGAL KEYFİ",
    "matchTagEn": "CRISPY GRILLED WINGS",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Tavuk derisi ve mangal sosu yağ oranını artırsa da, derisiz tüketildiğinde protein kaynağıdır.",
        "cheat_day": "Kömür ateşinde nar gibi kızarmış, baharatlı çıtır tavuk kanatları!",
        "economic": "Fiyat-performans oranı yüksek, doyurucu bir mangal klasiği.",
        "gourmet": "Özel sosla marine edilip mangalda ağır ağır pişirilmiş çıtır kısımlı kanatlar.",
        "vegan": "Tavuk kanadı içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High fat content from skin and marinade. Good source of protein if skins are removed.",
        "cheat_day": "Charcoal grilled chicken wings marinated in spicy oil, crispy on the outside.",
        "economic": "Decent portion size for a reasonable price, offering good value.",
        "gourmet": "Slow-grilled chicken wings seasoned with authentic sumac and spicy garlic oil.",
        "vegan": "Contains poultry. Highly non-vegan."
      }
    }
  },
  {
    "id": "cheat_38",
    "nameTr": "Profiterol",
    "nameEn": "Profiterole",
    "restaurant": "Tarihi Pastane",
    "price": 95,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.1k+",
    "calories": 510,
    "protein": 8,
    "carbs": 60,
    "fat": 22,
    "imageUrl": "/images/profiterol.jpg",
    "matchTagTr": "ÇİKOLATA ŞELALESİ",
    "matchTagEn": "CHOCOLATE WATERFALL",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kremalı şu hamuru ve yoğun çikolata sosu yüksek şeker ve kalori içerir.",
        "cheat_day": "İçi özel pastacı kreması dolu top hamurlar, üzerinde ılık ve akıcı çikolata sosu!",
        "economic": "95.00 ₺ fiyatıyla tatlı krizinizi en üst seviyede çözen popüler F/P.",
        "gourmet": "Gerçek kakao yağı ile hazırlanmış çikolata sosu ve vanilya çekirdekli krema dolgusu.",
        "vegan": "Süt, tereyağı ve çok miktarda yumurta içerir. Vegan değildir."
      },
      "en": {
        "fit": "Choux pastry filled with heavy cream and covered in chocolate syrup. High sugar.",
        "cheat_day": "Puffs filled with vanilla pastry cream and drenched in warm chocolate sauce.",
        "economic": "Under ₺100, this is a highly satisfying chocolate treat.",
        "gourmet": "Prepared with real cocoa butter chocolate coating and madagascar vanilla.",
        "vegan": "Contains dairy cream, butter, and eggs. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_39",
    "nameTr": "Cızbız Köfte ve Patates Kızartması",
    "nameEn": "Meatballs & French Fries",
    "restaurant": "Büfe Lezzeti",
    "price": 155,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.9k+",
    "calories": 790,
    "protein": 34,
    "carbs": 70,
    "fat": 38,
    "imageUrl": "/images/cizbiz-kofte.jpg",
    "matchTagTr": "SOKAK BÜFE KLASİĞİ",
    "matchTagEn": "STREET SIDE CLASSIC",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Patateslerin yağda kızartılması ve ekmek arası tüketim diyete uygun değildir.",
        "cheat_day": "Tava köftesi ve yanında nar gibi kızarmış, soslu patates kızartması ikilisi!",
        "economic": "155.00 ₺ fiyatıyla esnaf usulü son derece doyurucu ve klasik bir menü.",
        "gourmet": "Baharatlı el yapımı anne köftesi, yanında taze kesim baharatlı patateslerle.",
        "vegan": "%100 kıyma içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Deep-fried potatoes and bread rolls are highly caloric. Skip on diets.",
        "cheat_day": "Pan-fried meatballs paired with crispy, golden, salted french fries.",
        "economic": "Very affordable combo plate that delivers nostalgia and fullness.",
        "gourmet": "Home-style spiced beef meatballs served with hand-cut skin-on fries.",
        "vegan": "Contains meat. Not vegan."
      }
    }
  },
  {
    "id": "cheat_40",
    "nameTr": "Soslu Hatay Dürümü",
    "nameEn": "Hatay Chicken Doner Wrap",
    "restaurant": "Dönerci Asım",
    "price": 130,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "3.8k+",
    "calories": 820,
    "protein": 38,
    "carbs": 75,
    "fat": 36,
    "imageUrl": "/images/hatay-durum.jpg",
    "matchTagTr": "BOL MAYONEZLİ & SOSLU DÜRÜM",
    "matchTagEn": "SAUCY GARLIC DONER WRAP",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Mayonez ve lavaşı ıslatan salçalı yağ sosu kaloriyi aşırı artırır.",
        "cheat_day": "Özel soslu çift lavaş arasında döner eti, bol sarımsaklı mayonez ve patates!",
        "economic": "130.00 ₺ fiyatıyla öğrenci dostu, en doyurucu sokak lezzeti.",
        "gourmet": "Hatay usulü ev yapımı domates sosu ve taze baharatlı tavuk döner eti.",
        "vegan": "Tavuk eti ve yumurtalı mayonez içerir. Vegan değildir."
      },
      "en": {
        "fit": "Tomato oil sauce and mayonnaise overload. Too heavy for cutting phase.",
        "cheat_day": "Shaved chicken in double flatbread soaked in hot tomato sauce and garlic mayo.",
        "economic": "Extremely popular student budget wrap that offers maximum satiety.",
        "gourmet": "Slow-roasted chicken breast marinated with Hatay spices and house-made sauce.",
        "vegan": "Contains poultry and egg-based mayo. Non-vegan."
      }
    }
  },
  {
    "id": "cheat_41",
    "nameTr": "Midye Tava ve Sosu",
    "nameEn": "Fried Mussels with Tarator",
    "restaurant": "Liman Midyecisi",
    "price": 140,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "820+",
    "calories": 590,
    "protein": 18,
    "carbs": 48,
    "fat": 34,
    "imageUrl": "/images/midye-tava.jpg",
    "matchTagTr": "ÇITIR KIZARTILMIŞ MİDYE",
    "matchTagEn": "CRISPY DEEP FRIED MUSSELS",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "cheat_day"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kızartma yağı ve ekmek kırıntısı kaplaması diyet makrolarını bozar.",
        "cheat_day": "Çıtır çıtır kızarmış midye şişleri ve yanında süzme yoğurtlu cevizli tarator sosu!",
        "economic": "Deniz mahsulü lezzetini sokak fiyatıyla sunan güzel bir kaçamak.",
        "gourmet": "Altın sarısı çıtır kaplama, taze midyeler ve usta elinden çıkma cevizli sos.",
        "vegan": "Midye (deniz canlısı) ve sosunda yoğurt içerir. Vegan değildir."
      },
      "en": {
        "fit": "Deep-fried batter and heavy dipping sauce are bad for cutting phases.",
        "cheat_day": "Crispy golden fried mussels on skewers dipped in rich garlicky tarator sauce.",
        "economic": "Good local price to satisfy seafood cravings on a budget.",
        "gourmet": "Crispy batter-dipped mussels served with real walnut and garlic sauce.",
        "vegan": "Contains shellfish and dairy. Non-vegan."
      }
    }
  },
  {
    "id": "eco_41",
    "nameTr": "Tavuk Döner Dürüm",
    "nameEn": "Chicken Doner Wrap",
    "restaurant": "Öncü Döner",
    "price": 110,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "5.2k+",
    "calories": 620,
    "protein": 30,
    "carbs": 65,
    "fat": 22,
    "imageUrl": "/images/tavuk-doner-durum-eco.jpg",
    "matchTagTr": "ÖĞRENCİ DOSTU DEV DÜRÜM",
    "matchTagEn": "STUDENT FAVORITE VALUE WRAP",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Lavaş karbonhidratı yüksektir, protein oranı ise fiyatına göre oldukça iyidir.",
        "cheat_day": "Hızlı, ucuz ve soslu bir döner kaçamağı yapmak isteyenler için ideal.",
        "economic": "Sadece 110.00 ₺! Türkiye'nin en popüler ve doyurucu öğrenci dostu yemeği.",
        "gourmet": "Özel baharat soslu lavaşta, odun ateşinde pişmiş tavuk döner dilimleri.",
        "vegan": "Tavuk eti içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High in simple carbs. Decent protein ratio for a budget meal.",
        "cheat_day": "Great for a fast, cheap, and saucy chicken doner experience.",
        "economic": "Only ₺110.00! The ultimate budget-friendly student choice in Turkey.",
        "gourmet": "Wood-fired chicken doner wrapped in spiced flatbread.",
        "vegan": "Contains chicken. Non-vegan."
      }
    }
  },
  {
    "id": "eco_42",
    "nameTr": "Tavuklu Nohutlu Pilav",
    "nameEn": "Rice with Chicken & Chickpeas",
    "restaurant": "Sokak Pilavcısı",
    "price": 90,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "2.1k+",
    "calories": 580,
    "protein": 24,
    "carbs": 78,
    "fat": 16,
    "imageUrl": "/images/tavuklu-nohutlu-pilav-eco.jpg",
    "matchTagTr": "SOKAK KLASİĞİ DOYURUCU",
    "matchTagEn": "FILLING STREET CLASSIC",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pirinç pilavının glisemik indeksi yüksektir, spor sonrası karbonhidratı için tercih edilebilir.",
        "cheat_day": "Buz gibi ayran ve karabiberle harika bir sokak lezzeti ziyafeti.",
        "economic": "90.00 ₺ fiyatıyla sizi saatlerce tok tutacak, en doyurucu fiyat/performans seçeneği.",
        "gourmet": "Tavuk suyuyla demlenmiş nohutlu tereyağlı pilav ve tiftiklenmiş tavuk göğsü.",
        "vegan": "Tavuk eti içerir, vegan versiyonu için sadece nohutlu pilav isteyin."
      },
      "en": {
        "fit": "High glycemic rice index. Good for fast post-workout carbohydrate refill.",
        "cheat_day": "Enjoy this hot street food with cold ayran and lots of black pepper.",
        "economic": "Only ₺90.00! Delectable carb-heavy meal that will keep you full all day.",
        "gourmet": "Chicken broth infused rice with chickpeas, topped with tender chicken breast.",
        "vegan": "Contains chicken. Non-vegan."
      }
    }
  },
  {
    "id": "eco_43",
    "nameTr": "Ekmek Arası Köfte",
    "nameEn": "Meatball Sandwich",
    "restaurant": "Seyyar Köfteci",
    "price": 125,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.4k+",
    "calories": 610,
    "protein": 28,
    "carbs": 65,
    "fat": 24,
    "imageUrl": "/images/ekmek-arasi-kofte-eco.jpg",
    "matchTagTr": "SEYYAR USULÜ HESAPLI",
    "matchTagEn": "STREET VENDOR SANDWICH",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Beyaz ekmek karbonhidratı yüksektir, protein oranı diyet için yeterlidir.",
        "cheat_day": "Sokak usulü ızgara köfteleri ekmek arasında acı biberle yemek harikadır.",
        "economic": "125.00 ₺ fiyatıyla seyyar usulü doyurucu ve bütçe dostu köfte ziyafeti.",
        "gourmet": "Kömür ızgarasında pişmiş, piyazlık soğan ve domatesle süslenmiş ekmek arası.",
        "vegan": "Kıyma içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High white bread carbs. Meatballs deliver decent protein weight.",
        "cheat_day": "Classic street meatballs packed in warm toasted bread with spicy pepper.",
        "economic": "At ₺125.00, this is a highly affordable way to eat meat on the go.",
        "gourmet": "Grilled on charcoal, served in freshly baked bread with onions and tomatoes.",
        "vegan": "Contains meat. Not vegan."
      }
    }
  },
  {
    "id": "eco_44",
    "nameTr": "Mercimek Çorbası + Kıymalı Pide / Lahmacun",
    "nameEn": "Lentil Soup with Minced Meat Flatbread / Lahmacun",
    "restaurant": "Gaziantep Lahmacun",
    "price": 130,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "2.8k+",
    "calories": 540,
    "protein": 22,
    "carbs": 68,
    "fat": 16,
    "imageUrl": "/images/lahmacun-corba-eco.jpg",
    "matchTagTr": "KLASİK ESNAF MENÜSÜ",
    "matchTagEn": "CLASSIC VALUE COMBO",
    "isHealthy": false,
    "isVegan": false,
    "category": "flatbread",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Çorba ve ince lahmacun dengelidir. Bol yeşillik ve limon sıkarak tüketin.",
        "cheat_day": "Lahmacunu sumaklı soğanla sarıp çorbaya banarak yemek tam bir ziyafet!",
        "economic": "130.00 ₺ fiyatına hem çorba hem lahmacun! Şehirdeki en doyurucu ikili menü.",
        "gourmet": "Sarı süzme mercimek çorbası ve taş fırından çıtır çıtır çıkmış sarımsaklı lahmacun.",
        "vegan": "Lahmacun kıyma içerir. Veganlar için uygun değildir."
      },
      "en": {
        "fit": "Reasonable meal. Wrap lahmacun with lots of salad and lemon to balance carbs.",
        "cheat_day": "Dip the crispy meat flatbread into hot lentil soup. Pure comfort!",
        "economic": "A double-deal combo for ₺130.00! Excellent value for a complete lunch.",
        "gourmet": "Authentic spiced minced beef flatbread paired with smooth yellow lentil soup.",
        "vegan": "Lahmacun contains minced meat. Non-vegan."
      }
    }
  },
  {
    "id": "eco_45",
    "nameTr": "Yumurta Kapama / Ekmek Banmalık Menemen",
    "nameEn": "Boiled Eggs in Butter / Traditional Menemen",
    "restaurant": "Menemen Sepeti",
    "price": 95,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.9k+",
    "calories": 380,
    "protein": 16,
    "carbs": 22,
    "fat": 26,
    "imageUrl": "/images/menemen.jpg",
    "matchTagTr": "EN UCUZ DOYURUCULUK",
    "matchTagEn": "CHEAPEST COMFORT FOOD",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Ekmek banmadan, bol yumurtalı tüketildiğinde yüksek proteinli sağlıklı diyet seçeneği.",
        "cheat_day": "Tavaya ekmek banarak, üzerine kaşar ekleterek zevkini çıkarın.",
        "economic": "95.00 ₺ fiyatıyla evde veya dışarıda en ucuza en büyük doyuruculuk.",
        "gourmet": "Bol sulu köy domatesi, tatlı biberler ve tereyağlı köy yumurtasının uyumu.",
        "vegan": "Yumurta içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High protein egg dish. Eat without dipping bread if you are low-carbing.",
        "cheat_day": "Add extra cheddar on top and dip warm bread crusts into the pan.",
        "economic": "Only ₺95.00! The most affordable egg meal that fills you up completely.",
        "gourmet": "Made with juicy vine-ripened tomatoes, sweet peppers, and farm eggs.",
        "vegan": "Contains eggs. Not vegan."
      }
    }
  },
  {
    "id": "eco_46",
    "nameTr": "Sosisli Sandviç",
    "nameEn": "Spiced Hot Dog",
    "restaurant": "Büfe 34",
    "price": 85,
    "currency": "₺",
    "rating": 4.2,
    "reviewCount": "940+",
    "calories": 420,
    "protein": 14,
    "carbs": 45,
    "fat": 20,
    "imageUrl": "/images/sosisli-sandvic-eco.jpg",
    "matchTagTr": "SALÇALI SOSLU SOKAK TADI",
    "matchTagEn": "SPICED SAUCE HOT DOG",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "İşlenmiş et ve beyaz ekmek içerir. Sporcu beslenmesi için tavsiye edilmez.",
        "cheat_day": "Bol salçalı sos ve turşuyla hazırlanmış klasik büfe sandviçi kaçamağı.",
        "economic": "Sadece 85.00 ₺ fiyatıyla en hızlı ve en ucuz atıştırmalık sokak lezzeti.",
        "gourmet": "Salçalı baharatlı suda pişmiş sosisler, özel sandviç ekmeği ve hardal ile.",
        "vegan": "Sosis (et ürünü) içerir. Veganlar için uygun değildir."
      },
      "en": {
        "fit": "Processed meat and white bread. Not recommended for lean diets.",
        "cheat_day": "Soaked in spiced tomato sauce and topped with pickles, a nostalgic junk food.",
        "economic": "Only ₺85.00! The fastest and cheapest warm sandwich on the street.",
        "gourmet": "Simmered in a tomato paste broth with wild oregano, served with mustard.",
        "vegan": "Contains beef/chicken sausage. Not vegan."
      }
    }
  },
  {
    "id": "eco_47",
    "nameTr": "Patates Oturtma / Fırında Patates",
    "nameEn": "Potato & Meat Stew / Baked Potatoes",
    "restaurant": "Marmara Yemekevi",
    "price": 115,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "410+",
    "calories": 460,
    "protein": 18,
    "carbs": 52,
    "fat": 18,
    "imageUrl": "/images/patates-oturtma-eco.jpg",
    "matchTagTr": "DOYURUCU EV YEMEĞİ",
    "matchTagEn": "HOMESTYLE POTATO STEW",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Patatesin karbonhidrat oranı yüksektir, sınırlı tüketilmesi önerilir.",
        "cheat_day": "Ev yemeği özleyenler için doyurucu bir anne yemeği kaçamağı.",
        "economic": "115.00 ₺ fiyatına göre patates ve kıymanın en doyurucu esnaf lokantası birleşimi.",
        "gourmet": "Fırınlanmış patates dilimleri üzerinde karamelize kıyma ve domates sosu.",
        "vegan": "Kıyma (et) içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Potatoes have high glycemic index, consume in moderation.",
        "cheat_day": "A comforting home-cooked meal for those missing traditional kitchen tastes.",
        "economic": "Excellent cost-to-weight ratio, offering dense calories from potatoes and beef.",
        "gourmet": "Sautéed minced beef layered over baked potatoes in rich tomato glaze.",
        "vegan": "Contains minced meat. Non-vegan."
      }
    }
  },
  {
    "id": "eco_48",
    "nameTr": "Kuru Fasulye + Sade Pirinç Pilavı",
    "nameEn": "White Beans with White Rice",
    "restaurant": "Tarihi Fasulyeci",
    "price": 130,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "3.5k+",
    "calories": 610,
    "protein": 20,
    "carbs": 95,
    "fat": 14,
    "imageUrl": "/images/kuru-fasulye-pilav-eco.jpg",
    "matchTagTr": "ESNAF LOKANTASI KLASİĞİ",
    "matchTagEn": "TRADITIONAL TRIPLE COMBODEAL",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bitkisel protein deposudur, pilav miktarını az tutarak harika bir diyet öğünü yapabilirsiniz.",
        "cheat_day": "Yanına turşu ve soğan kırarak tam bir geleneksel ziyafete çevirin.",
        "economic": "130.00 ₺ esnaf lokantası klasiği! En ucuz yoldan en yüksek tokluk garantisi.",
        "gourmet": "Bakır tencerede güveçte pişmiş ispir kuru fasulyesi ve tereyağlı pilav.",
        "vegan": "Zeytinyağıyla pişirildiğinde %100 vegan ve son derece besleyici bitkisel menü."
      },
      "en": {
        "fit": "High in plant protein. Reduce the rice portion to keep carbs in check.",
        "cheat_day": "Perfect comfort food when paired with pickles and raw onions.",
        "economic": "₺130.00 for the ultimate Turkish comfort duo. Unbeatable value for money.",
        "gourmet": "Ispir dry beans slow-cooked in a clay pot, served with buttery rice.",
        "vegan": "100% vegan if prepared with vegetable oil instead of butter."
      }
    }
  },
  {
    "id": "eco_49",
    "nameTr": "Makarna Çeşitleri",
    "nameEn": "Variety of Pastas",
    "restaurant": "Makarna Dünyası",
    "price": 85,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "1.2k+",
    "calories": 450,
    "protein": 12,
    "carbs": 85,
    "fat": 6,
    "imageUrl": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "ÖĞRENCİ DOSTU MAKARNA",
    "matchTagEn": "BUDGET STUDENT PASTA",
    "isHealthy": false,
    "isVegan": false,
    "category": "pasta",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Basit karbonhidrat deposudur, spor öncesi yükleme için makul bir fiyata enerji verir.",
        "cheat_day": "Üzerine bol peynir ve yoğurt ekleyerek ev usulü kaçamak yapabilirsiniz.",
        "economic": "Sadece 85.00 ₺! Öğrenci bütçesinin ve hızlı beslenmenin kurtarıcı yemeği.",
        "gourmet": "Taze nane ve domates salçası sosuyla demlenmiş fiyonk makarna.",
        "vegan": "Peynir veya tereyağı içermeyen salçalı versiyonu tamamen vegandır."
      },
      "en": {
        "fit": "Loaded with simple carbs. Good for pre-workout glycogen loading.",
        "cheat_day": "Add extra melted cheese or garlic yogurt for a home-style comfort bowl.",
        "economic": "Only ₺85.00! The legendary student savior meal that is easy on the wallet.",
        "gourmet": "Bowtie pasta tossed in a simple, aromatic tomato paste and dried mint sauce.",
        "vegan": "Vegan if ordered with simple tomato sauce and no dairy toppings."
      }
    }
  },
  {
    "id": "eco_50",
    "nameTr": "Gözleme",
    "nameEn": "Gözleme",
    "restaurant": "Yörük Çadırı",
    "price": 95,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.6k+",
    "calories": 410,
    "protein": 10,
    "carbs": 65,
    "fat": 12,
    "imageUrl": "/images/gozleme-eco.jpg",
    "matchTagTr": "PATATESLİ VE PEYNİRLİ ÇITIR",
    "matchTagEn": "STUFFED YUFKA CRUST",
    "isHealthy": false,
    "isVegan": false,
    "category": "flatbread",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yufka hamuru karbonhidrat doludur. Diyet günlerinde sınırlı tüketilmelidir.",
        "cheat_day": "Sıcak gözlemenin yanında demli çay! Harika bir pazar sabahı kaçamağı.",
        "economic": "95.00 ₺ fiyatıyla doyurucu, hızlı ve lezzetli ayaküstü atıştırmalık.",
        "gourmet": "Saç üzerinde pişmiş incecik yufka, taze ıspanak ve lor peyniri dolgusu.",
        "vegan": "Patatesli veya ıspanaklı gözleme tereyağsız pişirildiğinde harika bir vegandır."
      },
      "en": {
        "fit": "Made of white flour dough, high in carbs. Skip on cutting cycles.",
        "cheat_day": "Pair this hot flatbread with fresh Turkish tea for a cozy breakfast.",
        "economic": "Only ₺95.00! Highly affordable, filling, and quick Turkish classic.",
        "gourmet": "Thin dough rolled over local spinach and fresh herbs, cooked on a griddle.",
        "vegan": "Potato or spinach filled versions are vegan if not brushed with butter."
      }
    }
  },
  {
    "id": "eco_51",
    "nameTr": "Sıkma",
    "nameEn": "Sıkma",
    "restaurant": "Toros Sıkma",
    "price": 80,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "820+",
    "calories": 390,
    "protein": 12,
    "carbs": 55,
    "fat": 14,
    "imageUrl": "/images/sikma-eco.jpg",
    "matchTagTr": "YÖRESEL UCUZ KAHVALTI",
    "matchTagEn": "REGIONAL BUDGET ROLL",
    "isHealthy": false,
    "isVegan": false,
    "category": "flatbread",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "El açması sıcak hamur ve peynir dolgusu karbonhidrat/yağ oranını yükseltir.",
        "cheat_day": "Sıcak lavaşın sıcağında eriyen çökelek peyniri ve tereyağı lezzeti!",
        "economic": "80.00 ₺ fiyatıyla özellikle güney bölgelerinde çok popüler, doyurucu ve ekonomik kahvaltılık.",
        "gourmet": "Sacdan yeni çıkmış sıcak bazlama içine çökelek, tereyağı ve ince kıyılmış soğan.",
        "vegan": "Çökelek peyniri ve tereyağı içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Hand-rolled dough and cheese filling is high in fat and simple carbs.",
        "cheat_day": "Hot flatbread wrapping melted cottage cheese and local butter.",
        "economic": "At only ₺80.00, this Southern classic is a highly satisfying cheap meal.",
        "gourmet": "Cooked on a dome griddle, rolled with fresh onions and local goat cheese.",
        "vegan": "Contains cheese and butter. Not vegan."
      }
    }
  },
  {
    "id": "eco_52",
    "nameTr": "Çiğ Köfte Dürüm",
    "nameEn": "Çiğ Köfte Wrap",
    "restaurant": "Komagene Çiğköfte",
    "price": 75,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "4.5k+",
    "calories": 480,
    "protein": 10,
    "carbs": 78,
    "fat": 12,
    "imageUrl": "/images/cig-kofte-durum.jpg",
    "matchTagTr": "EN HIZLI VE UCUZ VEGAN",
    "matchTagEn": "FASTEST CHEAPEST VEGAN WRAP",
    "isHealthy": true,
    "isVegan": true,
    "category": "flatbread",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bulgur karbonhidratı içerir ancak yağ oranı düşüktür. Nar ekşisini az isteyin.",
        "cheat_day": "Bol acı sos, cips kırıntıları ve nar ekşisiyle dürümü lezzetlendirin.",
        "economic": "Sadece 75.00 ₺! Şehirde karın doyurmanın en hızlı, ucuz ve popüler yolu.",
        "gourmet": "Bol cevizli el yapımı çiğ köfte, taze nane ve nar ekşisiyle sarılmış lavaş.",
        "vegan": "%100 bitkisel malzemelerle üretilen Türkiye'nin en sevilen vegan sokak dürümü."
      },
      "en": {
        "fit": "Bulgur contains complex carbs, fat ratio is low. Ask for light pomegranate sauce.",
        "cheat_day": "Load it with extra hot sauce, crispy chips, and sweet pomegranate syrup.",
        "economic": "Only ₺75.00! The cheapest, fastest, and most popular street wrap in Turkey.",
        "gourmet": "Hand-kneaded bulgur mixed with ground walnuts, fresh mint, and lemon.",
        "vegan": "100% plant-based, egg-free, and dairy-free legendary vegan wrap."
      }
    }
  },
  {
    "id": "eco_53",
    "nameTr": "Tarhana Çorbası + Ekmek",
    "nameEn": "Tarhana Soup with Bread",
    "restaurant": "Anadolu Lezzetleri",
    "price": 70,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "940+",
    "calories": 280,
    "protein": 10,
    "carbs": 48,
    "fat": 5,
    "imageUrl": "/images/tarhana-corbasi.jpg",
    "matchTagTr": "GELENEKSEL BESLEYİCİ ÇORBA",
    "matchTagEn": "NUTRITIOUS TRADITIONAL SOUP",
    "isHealthy": true,
    "isVegan": false,
    "category": "soup",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Doğal fermente yoğurt ve sebzelerden üretilen probiyotik zengini sağlıklı çorba.",
        "cheat_day": "Cheat day için hafif kalsa da kış günleri için mükemmel bir içinizi ısıtıcı.",
        "economic": "Sadece 70.00 ₺! Hem çok besleyici, hem de Anadolu'nun en ekonomik çorbası.",
        "gourmet": "Kuru nane ve tereyağlı sos eşliğinde sunulan, ev yapımı fermente tarhana.",
        "vegan": "Yapımında yoğurt ve süt kullanıldığı için geleneksel tarhana vegan değildir."
      },
      "en": {
        "fit": "Rich in probiotics from fermented yogurt and sun-dried vegetables.",
        "cheat_day": "A light warm appetizer, perfect to heat up your stomach before main course.",
        "economic": "Only ₺70.00! Highly nutritious and cheapest traditional soup in Turkey.",
        "gourmet": "Home-fermented tarhana served with dried mint and melted butter glaze.",
        "vegan": "Contains fermented dairy yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "eco_55",
    "nameTr": "Simit + Ayran + Üçgen Peynir",
    "nameEn": "Simit, Ayran & Cheese Combo",
    "restaurant": "Sokak Simitçisi",
    "price": 60,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "3.2k+",
    "calories": 450,
    "protein": 14,
    "carbs": 65,
    "fat": 16,
    "imageUrl": "/images/simit-peynir.jpg",
    "matchTagTr": "EN KLASİK GEÇİŞTİRME MENÜSÜ",
    "matchTagEn": "TRADITIONAL QUICK BITE",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Susam yağı ve beyaz un kaloriyi artırır. Diyet yaparken simit porsiyonunu sınırlayın.",
        "cheat_day": "Taptaze çıtır çıtır simiti eritme üçgen peynirle yemek çocukluk kaçamağıdır.",
        "economic": "Sadece 60.00 ₺! Türkiye'nin en ucuz, en lezzetli ve en popüler hızlı öğün kombosu.",
        "gourmet": "Taş fırından yeni çıkmış bol susamlı sokak simiti ve buz gibi köpüklü ayran.",
        "vegan": "Peynir ve ayran süt ürünüdür. Veganlar için simit tek başına tüketilebilir."
      },
      "en": {
        "fit": "Sesame seeds and flour add up to 450 kcal. Eat in moderation.",
        "cheat_day": "Smearing creamy processed cheese inside a hot sesame simit is pure nostalgia.",
        "economic": "Only ₺60.00! The cheapest, most iconic quick lunch combo in Turkey.",
        "gourmet": "Stone-baked crispy sesame simit paired with cold frothy yogurt drink.",
        "vegan": "Cheese and ayran are dairy products. Simit is vegan on its own."
      }
    }
  },
  {
    "id": "eco_56",
    "nameTr": "Kıymalı Makarna",
    "nameEn": "Pasta with Minced Beef",
    "restaurant": "Öğrenci Sofrası",
    "price": 115,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.8k+",
    "calories": 580,
    "protein": 20,
    "carbs": 80,
    "fat": 18,
    "imageUrl": "/images/kiymali-makarna.jpg",
    "matchTagTr": "KIYMALI SOSLU MAKARNA",
    "matchTagEn": "MINCED MEAT BOLOGNESE",
    "isHealthy": false,
    "isVegan": false,
    "category": "pasta",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Karbonhidratı yüksek, spordan önce enerji depolamak için bütçe dostu protein seçeneği.",
        "cheat_day": "Ev yapımı salçalı kıymalı makarnanın yanına yoğurt ekleyerek tadını çıkarın.",
        "economic": "115.00 ₺ fiyatıyla az miktarda kıyma ile koca bir tencereyi lezzetlendirmenin F/P yolu.",
        "gourmet": "Soğan ve domates salçasıyla kavrulmuş dana kıymalı geleneksel makarna.",
        "vegan": "Kıyma (et) içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High carb profile. Good cheap fuel for intense cardio sessions.",
        "cheat_day": "Top this hot minced beef pasta with garlic yogurt for a cozy cheat plate.",
        "economic": "₺115.00 for a dense protein-carb combo. Extremely popular budget dinner.",
        "gourmet": "Ground beef sautéed with onions and sweet red pepper paste over penne pasta.",
        "vegan": "Contains minced beef. Non-vegan."
      }
    }
  },
  {
    "id": "eco_57",
    "nameTr": "Yumurtalı Ekmek Kızartması",
    "nameEn": "Turkish French Toast",
    "restaurant": "Nostalji Kafe",
    "price": 85,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "530+",
    "calories": 420,
    "protein": 14,
    "carbs": 45,
    "fat": 22,
    "imageUrl": "/images/yumurtali-ekmek.jpg",
    "matchTagTr": "BAYAT EKMEK DEĞERLENDİRME",
    "matchTagEn": "EGG-DIPPED FRIED BREAD",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Tavada yağda kızartıldığı için diyet programları için uygun değildir.",
        "cheat_day": "Çocukluğumuzun pazar sabahı lezzeti! Çay ve peynirle harika gider.",
        "economic": "85.00 ₺ fiyatıyla bayat ekmekleri değerlendiren, en ekonomik kahvaltı klasiği.",
        "gourmet": "Yumurtaya batırılıp tereyağında kızartılmış, kuru kekikli ekmek dilimleri.",
        "vegan": "Yumurta içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Fried in oil, not suitable for strict fat-loss cycles.",
        "cheat_day": "Nostalgic Sunday breakfast toast fried with eggs, pairs great with feta cheese.",
        "economic": "At ₺85.00, a highly resource-saving and budget-friendly breakfast option.",
        "gourmet": "Egg-dipped bread pan-fried in butter, dusted with wild thyme and sea salt.",
        "vegan": "Contains eggs. Non-vegan."
      }
    }
  },
  {
    "id": "eco_59",
    "nameTr": "Salçalı Ekmek / Tost",
    "nameEn": "Tomato Paste Toast",
    "restaurant": "Kantin Klasikleri",
    "price": 70,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "1.1k+",
    "calories": 380,
    "protein": 12,
    "carbs": 48,
    "fat": 14,
    "imageUrl": "/images/salcali-tost.jpg",
    "matchTagTr": "KANTİN KLASİĞİ SALÇALI",
    "matchTagEn": "SALÇA BRUSHED TOAST",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Tost ekmeği ve margarin/peynir yağı diyetinizi olumsuz etkiler.",
        "cheat_day": "Bol salçalı ve margarinli kantin usulü çıtır tost nostaljisi kaçamağı.",
        "economic": "Sadece 70.00 ₺! Kantin fiyatıyla en ucuz ve en hızlı karın doyurma yöntemi.",
        "gourmet": "Salçalı baharat sosu ve kaşar peyniriyle tost makinesinde basılmış çıtır ekmek.",
        "vegan": "Kaşar peyniri (süt ürünü) içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "White bread and cheese oils. High in simple carbs and fat.",
        "cheat_day": "Nostalgic canteen toast brushed with spiced tomato paste and melted cheese.",
        "economic": "Only ₺70.00! The cheapest quick hot sandwich to grab on a budget.",
        "gourmet": "Flat pressed bread filled with tomato paste sauce and melted kashar cheese.",
        "vegan": "Contains cheese. Non-vegan."
      }
    }
  },
  {
    "id": "eco_60",
    "nameTr": "Soslu Makarna (Napoliten)",
    "nameEn": "Pasta Napolitana",
    "restaurant": "Makarnacı Şef",
    "price": 85,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "950+",
    "calories": 420,
    "protein": 10,
    "carbs": 85,
    "fat": 5,
    "imageUrl": "/images/soslu-makarna.jpg",
    "matchTagTr": "SALÇALI & DOMATESLİ UCUZ",
    "matchTagEn": "BASIC TOMATO SAUCE PASTA",
    "isHealthy": false,
    "isVegan": true,
    "category": "pasta",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Karbonhidrat deposudur, antrenman öncesi enerji yüklemesi için tüketilebilir.",
        "cheat_day": "Evde hızlıca hazırlanan ama dışarıda da çok ucuz olan konfor makarnası.",
        "economic": "Sadece 85.00 ₺! Domates sosu ve makarna ile devasa doyurucu bir F/P öğünü.",
        "gourmet": "Salçalı kekikli sarımsaklı domates sosu ile pişmiş İtalyan usulü sade makarna.",
        "vegan": "%100 vegan içerik. Peynirsiz, salçalı ve zeytinyağlı buğday makarnası."
      },
      "en": {
        "fit": "Pure carbohydrates. Ideal for pre-workout energy charging.",
        "cheat_day": "Simple tomato-garlic pasta, quick comfort food to satisfy cravings.",
        "economic": "Only ₺85.00! Great value for a heavy plate of wheat pasta with tomato sauce.",
        "gourmet": "Spiced tomato paste, oregano, garlic, and extra virgin olive oil over penne.",
        "vegan": "100% plant-based, cooked using olive oil and tomatoes. Vegan friendly."
      }
    }
  },
  {
    "id": "gourmet_61",
    "nameTr": "Büryan Kebabı",
    "nameEn": "Büryan Kebab",
    "restaurant": "Siirt Büryan Sofrası",
    "price": 280,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "1.6k+",
    "calories": 820,
    "protein": 48,
    "carbs": 15,
    "fat": 65,
    "imageUrl": "/images/buryan-kebabi.jpg",
    "matchTagTr": "KUYUDA PİŞEN EŞSİZ ET",
    "matchTagEn": "SLOW PIT-ROASTED MEAT",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Çok yüksek kuzu yağı ve kalori içerir. Ketojenik diyetler hariç tavsiye edilmez.",
        "cheat_day": "Kuyuda saatlerce pişen çıtır kuzu derisi ve tel tel ayrılan lokum gibi et lezzeti!",
        "economic": "Kuyu yapımı zorluğu ve et kalitesi nedeniyle fiyatı üst segmenttir.",
        "gourmet": "3 metre derinliğindeki kuyu içinde çam odunu ateşiyle buharda pişen Siirt kuzusu.",
        "vegan": "Sadece kuzu eti içerir. Vegan beslenmeye tamamen aykırıdır."
      },
      "en": {
        "fit": "Extremely high in fat. Not recommended unless you follow a strict keto diet.",
        "cheat_day": "Tender pit-cooked lamb that melts in your mouth, served over hot thin pide.",
        "economic": "High price point, but reflecting the labor-intensive pit-roasting method.",
        "gourmet": "Aged lamb cooked in a deep brick pit using wood smoke, Siirt style.",
        "vegan": "Contains lamb. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_62",
    "nameTr": "Cağ Kebabı",
    "nameEn": "Cağ Kebab",
    "restaurant": "Erzurum Cağ Evi",
    "price": 270,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "2.8k+",
    "calories": 780,
    "protein": 52,
    "carbs": 8,
    "fat": 58,
    "imageUrl": "/images/cag-kebabi.jpg",
    "matchTagTr": "ODUN ATEŞİNDE YATIK DÖNER",
    "matchTagEn": "WOOD-FIRED SLANTED DONER",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yüksek protein (52g) sunar ancak yağ oranı da ızgara ete göre oldukça fazladır.",
        "cheat_day": "Şiş şiş gelen, odun ateşinde karamelize olmuş o efsanevi kuzu eti ziyafeti!",
        "economic": "Şiş başı ücretlendirilir, gurme deneyim için bütçeye değer.",
        "gourmet": "Reyhan ve soğanla marine edilmiş, yatık olarak odun ateşinde dönen usta işi lezzet.",
        "vegan": "Kuzu eti ve kuzu yağı içerir. Veganlar sola kaydırsın."
      },
      "en": {
        "fit": "High in protein (52g) but also contains significant animal fat.",
        "cheat_day": "Horizontal spit-roasted lamb sliced onto small skewers directly at your table.",
        "economic": "Priced per skewer, this is a premium specialty meat dish.",
        "gourmet": "Marinated with sweet basil and onions, cooked horizontally over wood coal.",
        "vegan": "Contains lamb. Definitely not vegan."
      }
    }
  },
  {
    "id": "gourmet_63",
    "nameTr": "Kuzu Gerdan / İncik Haşlama",
    "nameEn": "Slow Cooked Lamb Neck / Shank",
    "restaurant": "Esnaf Sarayı",
    "price": 260,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "940+",
    "calories": 680,
    "protein": 48,
    "carbs": 10,
    "fat": 45,
    "imageUrl": "/images/kuzu-incik.jpg",
    "matchTagTr": "LOKUM KIVAMINDA İNCİK",
    "matchTagEn": "TENDER LAMB SHANK",
    "isHealthy": true,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Sebzelerle birlikte haşlanmış, kolajen ve protein deposu şifa yemeği.",
        "cheat_day": "Kemikten kendiliğinden dökülen etlerin ekmekle sıyırarak tadını çıkarın.",
        "economic": "Yüksek fiyatlı bir lokanta klasiğidir, et kalitesi ve kemik suyu için değer.",
        "gourmet": "Havuç, patates, karabiber ve usta terbiyesiyle saatlerce fırınlanmış kuzu incik.",
        "vegan": "Kuzu gerdan eti içerir, veganlığa tamamen aykırıdır."
      },
      "en": {
        "fit": "Boiled slowly with root vegetables, rich in collagen and amino acids.",
        "cheat_day": "Tender meat that literally drops off the bone, best enjoyed with toasted bread.",
        "economic": "A premium classic esnaf dish, but high in nutritional density.",
        "gourmet": "Lamb shank simmered for hours with carrots, potatoes, and lemon-egg wash.",
        "vegan": "Contains lamb shank. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_64",
    "nameTr": "Ali Nazik Kebabı",
    "nameEn": "Ali Nazik Kebab",
    "restaurant": "Antep Sofrası",
    "price": 245,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.1k+",
    "calories": 710,
    "protein": 38,
    "carbs": 25,
    "fat": 46,
    "imageUrl": "/images/ali-nazik-kebabi.jpg",
    "matchTagTr": "PATLICANLI YOĞURTLU ET YATAĞI",
    "matchTagEn": "EGGPLANT & YOGURT BEEF BED",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Patlıcan közü sağlıklıdır ancak tereyağlı et sosu ve süzme yoğurt kalorilidir.",
        "cheat_day": "Köz patlıcanlı sarımsaklı süzme yoğurt yatağı üzerinde tereyağlı bonfile dilimleri!",
        "economic": "Porsiyonu zengin, gurme sınıfında fiyatını hak eden özel bir kebap.",
        "gourmet": "Sarımsaklı köz patlıcan beğenisi üzerinde tereyağında çevrilmiş taze kuzu eti.",
        "vegan": "Et ve süzme yoğurt içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Eggplant base is healthy, but butter sauce and Greek yogurt add calories.",
        "cheat_day": "Warm garlic eggplant yogurt bed topped with hot buttered beef slices.",
        "economic": "A complex culinary plate that is worth the premium pricing.",
        "gourmet": "Charcoal-grilled eggplant puree mixed with garlic yogurt, topped with spiced lamb.",
        "vegan": "Contains lamb and dairy yogurt. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_65",
    "nameTr": "Beyran Çorbası",
    "nameEn": "Beyran Soup",
    "restaurant": "Gaziantep Beyrancısı",
    "price": 165,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "3.2k+",
    "calories": 490,
    "protein": 36,
    "carbs": 18,
    "fat": 32,
    "imageUrl": "/images/beyran.jpg",
    "matchTagTr": "ANTEP USULÜ ACILI SARIMSAKLI",
    "matchTagEn": "SPICY GARLICKY BEYRAN",
    "isHealthy": true,
    "isVegan": false,
    "category": "soup",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kemik suyu ve kuzu etiyle harika bir doğal kolajen, vitamin ve protein deposu.",
        "cheat_day": "Sabahın erken saatlerinde bol acılı ve sarımsaklı içilmesi gereken bir şifa.",
        "economic": "Çorbaya göre fiyatı yüksektir çünkü yoğun et ve kemik iliği içerir.",
        "gourmet": "Gaziantep usulü bakır sahanda, harlı ateşte pirinç, kuzu eti, sarımsak ve pul biber.",
        "vegan": "Yoğun kuzu eti ve kemik suyu içerir, veganların uzak durması gerekir."
      },
      "en": {
        "fit": "Incredible source of protein and natural collagen from bone marrow.",
        "cheat_day": "Best enjoyed early in the morning with extra garlic and spicy chili oil.",
        "economic": "Expensive for a soup, but it is actually a very dense meat entree.",
        "gourmet": "Boiled in a copper dish over high flame, mixing rice, lamb, garlic, and lard.",
        "vegan": "Contains lamb and heavy bone broth. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_66",
    "nameTr": "Hünkar Beğendi",
    "nameEn": "Hünkar Beğendi",
    "restaurant": "Saray Lezzetleri",
    "price": 250,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.9k+",
    "calories": 760,
    "protein": 42,
    "carbs": 22,
    "fat": 52,
    "imageUrl": "/images/hunkar-begendi.jpg",
    "matchTagTr": "SARAY MUTFAĞI BAŞYAPITI",
    "matchTagEn": "ROYAL EGGPLANT & BEEF",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Beğendi sosu tereyağı, un ve kaşar içerir. Kalorisi diyet için fazladır.",
        "cheat_day": "Osmanlı saray lezzetini evde değil usta lokantasında kaçamak olarak tadın.",
        "economic": "Malzeme kalitesi ve saray mutfağı prestijiyle üst fiyat sınıfı bir gurme yemek.",
        "gourmet": "Köz patlıcan, süt, un ve kaşarlı beğendi yatağında yavaşça pişmiş kuzu kuşbaşı.",
        "vegan": "Süt, peynir, un ve kuzu eti içerir, veganların kesinlikle kaçınması gerekir."
      },
      "en": {
        "fit": "The eggplant puree contains flour, milk, and cheese. High calorie.",
        "cheat_day": "An imperial palace recipe to indulge your taste buds on the weekend.",
        "economic": "Premium priced gourmet option reflecting historical recipe value.",
        "gourmet": "Slow-stewed tender lamb served over a creamy roasted eggplant bechamel.",
        "vegan": "Contains lamb, milk, and cheese. Highly non-vegan."
      }
    }
  },
  {
    "id": "gourmet_67",
    "nameTr": "Kuru Patlıcan Dolması",
    "nameEn": "Dried Eggplant Stuffed",
    "restaurant": "Gaziantep Konağı",
    "price": 140,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.1k+",
    "calories": 320,
    "protein": 6,
    "carbs": 55,
    "fat": 10,
    "imageUrl": "/images/kuru-patlican-dolmasi.jpg",
    "matchTagTr": "EKŞİLİ GURME DOLMA",
    "matchTagEn": "SOUR DRY DOLMA",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pirinç dolguludur. Porsiyon kontrolü ile lifli patlıcanın tadını çıkarabilirsiniz.",
        "cheat_day": "Bol sumak ekşili dolmaları zeytinyağlı meze sofrasında kaçamak yapın.",
        "economic": "Antep'ten gelen kurutulmuş sebzelerle yapılan, fiyatı makul gurme dolma.",
        "gourmet": "Güneşte kurutulmuş patlıcanların sumak ekşisi, baharatlı pirinç ve zeytinyağı dolgusu.",
        "vegan": "Etsiz ve tamamen bitkisel malzemelerle hazırlanan %100 vegan dolma."
      },
      "en": {
        "fit": "Contains rice filling. Watch your carb intake but enjoy the fiber.",
        "cheat_day": "Perfect tangy appetizer for a large family style sharing table.",
        "economic": "Reasonably priced considering the dried ingredients are sourced from Antep.",
        "gourmet": "Sun-dried eggplants stuffed with spiced rice and tangy sumac molasses.",
        "vegan": "100% plant-based and dairy-free traditional vegan recipe."
      }
    }
  },
  {
    "id": "gourmet_68",
    "nameTr": "Kekikli Kuyu Kebabı / Taş Fırın Güveç",
    "nameEn": "Thyme Pit Kebab / Stone Oven Stew",
    "restaurant": "Güveç Konağı",
    "price": 250,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "820+",
    "calories": 720,
    "protein": 44,
    "carbs": 18,
    "fat": 48,
    "imageUrl": "/images/tas-firin-guvec.jpg",
    "matchTagTr": "AĞIR PIŞEN GÜVEÇ ETİ",
    "matchTagEn": "SLOW COOKED CLAY MEAT",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kuzu eti ve sebzelerin yağlı harmanı diyet kalorilerini aşabilir.",
        "cheat_day": "Toprak kapta saatlerce fırında pişmiş, sebzeli sıcak kuzu eti kaçamağı.",
        "economic": "Taş fırın güveci yapım emeği ve et yoğunluğuyla premium fiyat sınıfında.",
        "gourmet": "Toprak güveçte arpacık soğan, sarımsak, taze kekik ve kuzu etiyle yavaş pişim.",
        "vegan": "Kuzu eti içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Rich lamb fats simmered with vegetables. Watch your caloric intake.",
        "cheat_day": "Clay pot stew loaded with garlic, shallots, and tender lamb chunks.",
        "economic": "High quality meat cooked in authentic clay ovens, worth the price.",
        "gourmet": "Simmered slowly in sealed clay pots with baby shallots and fresh rosemary.",
        "vegan": "Contains lamb. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_70",
    "nameTr": "Enginarlı Pilav",
    "nameEn": "Artichoke Rice",
    "restaurant": "Gurme Ev Yemekleri",
    "price": 155,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "510+",
    "calories": 340,
    "protein": 6,
    "carbs": 58,
    "fat": 10,
    "imageUrl": "/images/enginarli-pilav.jpg",
    "matchTagTr": "ENGİNARLI GURME PİLAV",
    "matchTagEn": "ARTICHOKE HERB RICE",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Enginardan gelen yüksek lif ile pilav karbonhidratının dengeli ve hafif sunumu.",
        "cheat_day": "Tereyağlı lezzetli bir pilav kaçamağı yapmak isteyen gurmeler için.",
        "economic": "Taze enginar ve pirinç birleşimi, makul fiyata gurme lokanta yemeği.",
        "gourmet": "Dereotu, taze soğan, çam fıstığı ve enginar kalbiyle demlenmiş pirinç pilavı.",
        "vegan": "Zeytinyağıyla demlendiği takdirde mükemmel bir vegan pirinç şölenidir."
      },
      "en": {
        "fit": "Provides dietary fiber from artichoke hearts mixed with carb fuel.",
        "cheat_day": "A delicious buttery rice dish that feels light but tastes decadent.",
        "economic": "Fair price for a premium rice dish using fresh artichokes.",
        "gourmet": "Basmati rice infused with dill, pine nuts, and tender artichoke hearts.",
        "vegan": "100% vegan when prepared traditionally using premium olive oil."
      }
    }
  },
  {
    "id": "gourmet_72",
    "nameTr": "Kars Gravyeri ve İsli Çerkez Peynirli Tabak",
    "nameEn": "Kars Gruyere & Smoked Circassian Cheese Platter",
    "restaurant": "Şarküteri Gurme",
    "price": 260,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "730+",
    "calories": 480,
    "protein": 34,
    "carbs": 5,
    "fat": 38,
    "imageUrl": "/images/kars-gravyeri-peynir-tabagi.jpg",
    "matchTagTr": "YILLANDIRILMIŞ ESKİ PEYNİRLER",
    "matchTagEn": "AGED ARTISAN CHEESE",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kalsiyum ve protein doludur ancak tuz ve doymuş yağ oranı diyet günlerinde sınırlanmalıdır.",
        "cheat_day": "Şarap veya kahvenin yanına yıllandırılmış Kars gravyeri kaçamağı!",
        "economic": "Yıllandırılmış yerli peynirler yüksek fiyatlıdır, gurme keşifler için değer.",
        "gourmet": "Uzun süre mahzenlerde bekletilmiş gözenekli Kars gravyeri ve isli Çerkez peyniri.",
        "vegan": "Hayvansal süt ürünleridir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "High in calcium and protein, but watch out for saturated fats and sodium.",
        "cheat_day": "Pair these complex aged cheeses with dried figs and single-origin coffee.",
        "economic": "Premium pricing reflecting the aging process in Kars stone cellars.",
        "gourmet": "Cave-aged local Gruyere and oak-smoked Circassian string cheese platter.",
        "vegan": "Contains dairy milk. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_73",
    "nameTr": "Zerde",
    "nameEn": "Zerde",
    "restaurant": "Saray Helvacısı",
    "price": 110,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.4k+",
    "calories": 410,
    "protein": 8,
    "carbs": 82,
    "fat": 6,
    "imageUrl": "/images/zerde-asure.jpg",
    "matchTagTr": "BOLLUK & BEREKET TATLISI",
    "matchTagEn": "HISTORICAL GRAIN PUDDING",
    "isHealthy": true,
    "isVegan": true,
    "category": "dessert",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bakliyat ve kuruyemiş içerir ancak şeker oranı yüksektir. Porsiyona dikkat edin.",
        "cheat_day": "Bolluk ve bereket simgesi olan, bol fındık ve narlı sıcak aşure ziyafeti.",
        "economic": "110.00 ₺ fiyatına göre içindeki malzeme çeşitliliği ve besleyiciliği çok yüksektir.",
        "gourmet": "Buğday, nohut, fasulye, incir, kayısı ve kuruyemişlerin gül suyuyla pişen uyumu.",
        "vegan": "Sıfır hayvansal süt veya yumurta içeren, geleneksel Türk vegan tatlısı."
      },
      "en": {
        "fit": "Loaded with grains and nuts. High in sugar, eat in moderation.",
        "cheat_day": "Comforting historical pudding topped with toasted hazelnuts and fresh pomegranate.",
        "economic": "Excellent value considering the variety of dried fruits, nuts, and grains.",
        "gourmet": "Sweet porridge made of wheat, beans, dried figs, apricots, flavored with rosewater.",
        "vegan": "100% plant-based, traditionally dairy-free and egg-free vegan dessert."
      }
    }
  },
  {
    "id": "gourmet_74",
    "nameTr": "Perde Pilavı",
    "nameEn": "Perde Pilavı",
    "restaurant": "Siirt Konağı",
    "price": 195,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.2k+",
    "calories": 790,
    "protein": 26,
    "carbs": 85,
    "fat": 38,
    "imageUrl": "/images/perde-pilavi.jpg",
    "matchTagTr": "HAMUR KAPLI BADEMLİ PİLAV",
    "matchTagEn": "PASTRY WRAPPED ALMOND RICE",
    "isHealthy": false,
    "isVegan": false,
    "category": "general",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Dışındaki hamur kabuğu ve içindeki yağlı pilav kaloriyi uçurur. Diyet dışıdır.",
        "cheat_day": "Fırında kızarmış bademli hamur kubbesini kesip içinden dumanı tüten tavuklu pilavı çıkarmak!",
        "economic": "Yapım aşamaları çok zahmetli olduğu için fiyatı gurme seviyesindedir.",
        "gourmet": "Kekik kokulu tavuk eti, kuş üzümü, çam fıstığı ve bademli pilavın incecik hamur içinde fırınlanması.",
        "vegan": "Tavuk eti, tereyağı ve yumurtalı hamur içerir. Vegan değildir."
      },
      "en": {
        "fit": "Heavy combination of pastry crust and buttery rice. Not diet-friendly.",
        "cheat_day": "Slicing open the baked pastry dome to reveal steaming chicken and almond rice.",
        "economic": "Very labor intensive dish, pricing reflects the master craft.",
        "gourmet": "Chicken breast, currants, pine nuts, and almonds baked inside a thin buttery crust.",
        "vegan": "Contains chicken, eggs, and butter. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_75",
    "nameTr": "Analı Kızlı Çorbası / Yemeği",
    "nameEn": "Analı Kızlı Soup / Stew",
    "restaurant": "Adana Yöresel",
    "price": 185,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "820+",
    "calories": 580,
    "protein": 32,
    "carbs": 45,
    "fat": 26,
    "imageUrl": "/images/anali-kizli.jpg",
    "matchTagTr": "USTALIK GEREKTİREN SULU ET",
    "matchTagEn": "COMPLEX ANATOLIAN STEW",
    "isHealthy": false,
    "isVegan": false,
    "category": "soup",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "İçli köfte hamuru ve yağlı et sosu diyet kalorilerinizi artırır.",
        "cheat_day": "Büyük içli köfteler (analar) ve küçük bulgur toplarının (kızlar) nohutlu etli sosu!",
        "economic": "Yapımı usta eller gerektiren, yöresel esnaf lokantasında yenmesi gereken F/P.",
        "gourmet": "Kıymalı içli köfteler ve nohutlu kuzu etinin ekşili salçalı sos içinde harmanı.",
        "vegan": "İçli köfte kıyması ve kuzu eti içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Contains wheat dough and fatty meat reduction. Watch your calories.",
        "cheat_day": "Large stuffed kibbeh (mothers) and small bulgur balls (daughters) in meat gravy.",
        "economic": "Demands hours of manual preparation, highly valued regional dish.",
        "gourmet": "Spiced minced beef balls simmered with chickpeas and tender lamb chunks.",
        "vegan": "Contains beef and lamb. Highly non-vegan."
      }
    }
  },
  {
    "id": "gourmet_76",
    "nameTr": "Mumbar / Şırdan Dolması",
    "nameEn": "Mumbar / Şırdan Dolması",
    "restaurant": "Adana Şırdancısı",
    "price": 170,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.9k+",
    "calories": 520,
    "protein": 22,
    "carbs": 48,
    "fat": 26,
    "imageUrl": "/images/sirdan-mumbar.jpg",
    "matchTagTr": "SAKATAT SEVEN GURMELERE",
    "matchTagEn": "OFFAL DISH SPECIALTY",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pirinç dolgusu ve sakatat yağı diyet makroları için ağırdır.",
        "cheat_day": "Gece yarısı Adana usulü bol kimyon ve pul biberli şırdan kaçamağı!",
        "economic": "Bulunması zor özel bir sakatat türü olduğundan porsiyon fiyatı özeldir.",
        "gourmet": "Kuzu şırdanının baharatlı pirinç harcı ile doldurulup kazanlarda pişen lezzeti.",
        "vegan": "Kuzu sakatatı içerir, veganların kesinlikle tercih etmeyeceği bir üründür."
      },
      "en": {
        "fit": "Rice filling and offal fat make this dish heavy on calorie cuts.",
        "cheat_day": "Late-night street food classic seasoned with cumin and chili flakes.",
        "economic": "Rare offal cut that requires careful sourcing, hence premium priced.",
        "gourmet": "Lamb abomasum stuffed with peppery rice, simmered in a spiced broth.",
        "vegan": "Contains lamb abomasum. Not vegan."
      }
    }
  },
  {
    "id": "gourmet_77",
    "nameTr": "Tire Köftesi",
    "nameEn": "Tire Kebab",
    "restaurant": "Ege Mutfağı",
    "price": 220,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.1k+",
    "calories": 650,
    "protein": 36,
    "carbs": 15,
    "fat": 46,
    "imageUrl": "/images/tire-koftesi.jpg",
    "matchTagTr": "TEREYAĞLI & DOMATES SOSLU",
    "matchTagEn": "BUTTERY TOMATO MEATBALLS",
    "isHealthy": false,
    "isVegan": false,
    "category": "kebab",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Köz domatesli olsa da etlerin tereyağında yüzdürülmesi diyete zarar verir.",
        "cheat_day": "Tırnak pide üzerinde tereyağlı ve domates soslu incecik Tire köfteleri!",
        "economic": "Kullanılan etin kalitesi ve usta tereyağı nedeniyle haklı bir gurme fiyatı.",
        "gourmet": "İnce şişlerde pişirilmiş, domates sosu ve kızgın tereyağıyla sahanda sunulan köfteler.",
        "vegan": "Dana eti ve bol tereyağı içerir. Vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Swimming in butter, not suitable for fat cutting phases.",
        "cheat_day": "Thin grilled meat sticks over pita bread, covered in hot tomato butter.",
        "economic": "A gourmet specialty meat dish that justifies its price tag.",
        "gourmet": "Minced beef cooked on thin skewers, finished in a pan with butter and tomatoes.",
        "vegan": "Contains beef and butter. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_78",
    "nameTr": "Cevizli Mantı",
    "nameEn": "Sinop Style Walnut Dumplings",
    "restaurant": "Sinop Mantı Evi",
    "price": 180,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "1.4k+",
    "calories": 780,
    "protein": 24,
    "carbs": 88,
    "fat": 36,
    "imageUrl": "/images/cevizli-manti.jpg",
    "matchTagTr": "YARISI YOĞURT YARISI CEVİZ",
    "matchTagEn": "WALNUT TOPPED DUMPLINGS",
    "isHealthy": false,
    "isVegan": false,
    "category": "pasta",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Hamur, tereyağı ve ceviz kaloriyi artırır. Diyet günlerinde uzak durun.",
        "cheat_day": "Yarısı sarımsaklı yoğurtlu, yarısı bol cevizli el açması enfes mantı kaçamağı!",
        "economic": "Büyük porsiyonu ve bol ceviz içi dolgusu ile doyurucu gurme seçeneği.",
        "gourmet": "Kulak şeklinde bükülmüş, üzerine eritilmiş tereyağı ve kıyılmış ceviz dökülen mantı.",
        "vegan": "Kıyma, yoğurt ve tereyağı içerir. Veganlar sola kaydırsın."
      },
      "en": {
        "fit": "Dough, butter, and walnuts yield very high calories. Avoid on cuts.",
        "cheat_day": "Half garlic yogurt, half crushed walnuts over hand-folded boiled dumplings.",
        "economic": "Dense calorie plate filled with walnuts and beef, yields high satisfaction.",
        "gourmet": "Ear-shaped thin dough boiled and glazed with melted butter and organic walnuts.",
        "vegan": "Contains beef, yogurt, and butter. Non-vegan."
      }
    }
  },
  {
    "id": "gourmet_79",
    "nameTr": "Kalamar Dolması",
    "nameEn": "Stuffed Squid",
    "restaurant": "Ege Kalamar",
    "price": 280,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "620+",
    "calories": 460,
    "protein": 34,
    "carbs": 22,
    "fat": 26,
    "imageUrl": "/images/kalamar-dolmasi.jpg",
    "matchTagTr": "DENİZ MAHSULLÜ GURME DOLGU",
    "matchTagEn": "STUFFED SEAFOOD CALAMARI",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Fırınlanmış protein deposu kalamar, içindeki peynir oranına dikkat ederek tüketilebilir.",
        "cheat_day": "Balık restoranında yenebilecek en güzel deniz mahsulü sıcak mezelerinden biri.",
        "economic": "Taze bütün kalamar ve özel dolgu malzemeleriyle lüks segment fiyatlandırma.",
        "gourmet": "Kalamarın içinin karides, mantar ve kaşar peyniriyle doldurulup fırınlanması.",
        "vegan": "Kalamar, karides ve peynir içerir. Hayvansal deniz mahsulüdür."
      },
      "en": {
        "fit": "High protein seafood, but watch the cheese filling inside.",
        "cheat_day": "The ultimate hot seafood appetizer to order at a premium beach restaurant.",
        "economic": "Luxury pricing due to high quality squid and shrimp filling.",
        "gourmet": "Whole calamari tube stuffed with shrimp, mushrooms, and melted cheese, baked.",
        "vegan": "Contains squid, shrimp, and cheese. Highly non-vegan."
      }
    }
  },
  {
    "id": "gourmet_80",
    "nameTr": "Fırında Sütlaç",
    "nameEn": "Baked Rice Pudding",
    "restaurant": "Karadeniz Fırını",
    "price": 110,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "3.2k+",
    "calories": 380,
    "protein": 8,
    "carbs": 65,
    "fat": 10,
    "imageUrl": "/images/firinda-sutlac.jpg",
    "matchTagTr": "BOL FINDIKLI TAŞ FIRIN",
    "matchTagEn": "BAKED RICE PUDDING WITH NUTS",
    "isHealthy": false,
    "isVegan": false,
    "category": "dessert",
    "modes": [
      "gourmet"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Şeker ve pirinç karbonhidratı içerir, diyet günlerinde porsiyon sınırlanmalıdır.",
        "cheat_day": "Taş fırında üstü kızarmış, üzerine bolca kavrulmuş Karadeniz fındığı serpilmiş sütlaç!",
        "economic": "Çok kaliteli süt ve fındık kullanılan, fiyatı makul bir fırın klasiği.",
        "gourmet": "Trabzon Hamsiköy usulü yağlı süt, pirinç ve şekerle pişirilip fırınlanmış lezzet.",
        "vegan": "Bol miktarda inek sütü içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Contains refined sugar and rice carbs. Skip on strict fat-loss cycles.",
        "cheat_day": "Oven-baked rice pudding loaded with crushed roasted Black Sea hazelnuts.",
        "economic": "Good local price for a highly comforting traditional dessert.",
        "gourmet": "Hamsiköy style recipe using fresh fatty farm milk, baked in clay dishes.",
        "vegan": "Contains dairy milk. Non-vegan."
      }
    }
  },
  {
    "id": "veg_81",
    "nameTr": "Zeytinyağlı Yaprak Sarması",
    "nameEn": "Stuffed Grape Leaves",
    "restaurant": "Ege Yemek Evi",
    "price": 115,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "2.4k+",
    "calories": 260,
    "protein": 4,
    "carbs": 42,
    "fat": 9,
    "imageUrl": "/images/yaprak-sarmasi.jpg",
    "matchTagTr": "KLASİK VEGAN APERİTİF",
    "matchTagEn": "CLASSIC VEGAN APPETIZER",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Asma yaprağının lifli yapısı pirinç dolgusuyla dengelenmiştir, porsiyon kontrolüyle fit kalır.",
        "cheat_day": "Zeytinyağlı soğuk meze tabağının vazgeçilmez çıtır sarma lezzeti.",
        "economic": "115.00 ₺ fiyatına 8 adet sarma, harika bir F/P meze alternatifi.",
        "gourmet": "Kuş üzümlü, çam fıstıklı ve naneli baharatlı pirinçle doldurulmuş Ege sarması.",
        "vegan": "Geleneksel soğuk zeytinyağlı meze. Yoğurtsuz servis edildiğinde %100 vegandır."
      },
      "en": {
        "fit": "Grape leaves deliver micronutrients, stuffed with carbs. Squeeze lemon.",
        "cheat_day": "Order a double plate to share as a delicious cold snack.",
        "economic": "Great price for 8 pieces of hand-rolled leaves, highly satisfying.",
        "gourmet": "Aegean style leaves filled with currants, pine nuts, and minty rice.",
        "vegan": "100% plant-based meze, cooked slowly in olive oil."
      }
    }
  },
  {
    "id": "veg_82",
    "nameTr": "Kısır",
    "nameEn": "Kısır",
    "restaurant": "Yeşil Bahçe",
    "price": 95,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.8k+",
    "calories": 240,
    "protein": 6,
    "carbs": 48,
    "fat": 4,
    "imageUrl": "/images/kisir.jpg",
    "matchTagTr": "BOL YEŞİLLİKLİ VEGAN",
    "matchTagEn": "HERB RICH VEGAN SALAD",
    "isHealthy": true,
    "isVegan": true,
    "category": "vegan",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bulgurun lif yapısı ve yeşilliklerin vitaminleri ile son derece temiz fit öğün.",
        "cheat_day": "Çay saatlerinin ve salata sofralarının en sevilen pratik kaçamağı.",
        "economic": "95.00 ₺ fiyatıyla bulgurun doyurucu gücünü gösteren bütçe dostu yiyecek.",
        "gourmet": "Bol nar ekşisi, taze nane ve sızma zeytinyağı ile harmanlanmış kıvamında kısır.",
        "vegan": "Bulgur, taze yeşillikler, salça ve nar ekşisiyle tamamen vegan ve temiz."
      },
      "en": {
        "fit": "High in fiber and vitamins from bulgur wheat and fresh garden herbs.",
        "cheat_day": "Classic home-style salad that is easy on the stomach during heavy weeks.",
        "economic": "At under ₺100, a very budget-friendly plate that fills you up.",
        "gourmet": "Perfect ratio of sour pomegranate syrup, olive oil, and finely chopped greens.",
        "vegan": "100% plant-based salad. Lactose-free and egg-free."
      }
    }
  },
  {
    "id": "veg_83",
    "nameTr": "Çiğ Köfte",
    "nameEn": "Çiğ Köfte",
    "restaurant": "Komagene Çiğköfte",
    "price": 80,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "3.2k+",
    "calories": 460,
    "protein": 10,
    "carbs": 72,
    "fat": 14,
    "imageUrl": "/images/cig-kofte-vegan.jpg",
    "matchTagTr": "POPÜLER BİTKİSEL DÜRÜM",
    "matchTagEn": "POPULAR PLANT WRAP",
    "isHealthy": true,
    "isVegan": true,
    "category": "flatbread",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bulgur karbonhidratı içerir, yağ oranı düşüktür. Spor sonrası enerji sağlar.",
        "cheat_day": "Çıtır lavaşa sarılmış bol acılı çiğ köfte dürüm kaçamağı!",
        "economic": "Sadece 80.00 ₺! Türkiye'nin en ucuz, en hızlı ve en yaygın vegan öğünü.",
        "gourmet": "Ceviz içi, isot ve taze limonla yoğrulmuş geleneksel Adıyaman usulü.",
        "vegan": "Etsiz versiyonuyla tamamen bitkisel, veganların vazgeçilmez sokak lezzeti."
      },
      "en": {
        "fit": "Complex carbs from bulgur wheat. Good clean energy for workouts.",
        "cheat_day": "Roll it inside double flatbread with spicy pepper paste and lemon juice.",
        "economic": "Only ₺80.00! The cheapest and fastest plant-based lunch combo.",
        "gourmet": "Kneaded with premium walnuts, isot chili flakes, and cold-pressed oil.",
        "vegan": "100% plant-based, dairy-free, and egg-free popular street wrap."
      }
    }
  },
  {
    "id": "veg_84",
    "nameTr": "Zeytinyağlı Barbunya Pilaki",
    "nameEn": "Borlotti Beans in Olive Oil",
    "restaurant": "Evce Ev Yemekleri",
    "price": 120,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.1k+",
    "calories": 340,
    "protein": 16,
    "carbs": 55,
    "fat": 8,
    "imageUrl": "/images/barbunya-pilaki.jpg",
    "matchTagTr": "LİFLİ BİTKİSEL PROTEİN",
    "matchTagEn": "FIBER PLANT PROTEIN",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yüksek lifli yapısıyla bağırsak dostudur ve sporcular için temiz karbonhidrat sunar.",
        "cheat_day": "Yoğun aromasıyla zeytinyağlı meze sofralarının doyurucu bir üyesi.",
        "economic": "120.00 ₺ fiyatına göre bitkisel protein oranı oldukça yüksek ve doyurucudur.",
        "gourmet": "Havuç, patates ve sarımsakla Ege zeytinyağında ağır ateşte pişmiş barbunya.",
        "vegan": "Sebzeler ve barbunyayla hazırlanan %100 vegan protein deposu."
      },
      "en": {
        "fit": "High in soluble fiber which regulates cholesterol and blood sugar levels.",
        "cheat_day": "Enjoy this cold bean stew with raw onions and a slice of bread.",
        "economic": "Very high protein density for a low price, excellent budget food.",
        "gourmet": "Borlotti beans simmered with carrots, potatoes, and garlic in Aegean olive oil.",
        "vegan": "100% plant-based meze, dairy-free and highly nutritious."
      }
    }
  },
  {
    "id": "veg_85",
    "nameTr": "Mercimek Çorbası",
    "nameEn": "Lentil Soup",
    "restaurant": "Çorba Evi",
    "price": 70,
    "currency": "₺",
    "rating": 4.8,
    "reviewCount": "4.2k+",
    "calories": 210,
    "protein": 12,
    "carbs": 32,
    "fat": 4,
    "imageUrl": "/images/mercimek-corbasi-vegan.jpg",
    "matchTagTr": "BİTKİSEL YAĞLI ŞİFA",
    "matchTagEn": "VEG-OIL LENTIL SOUP",
    "isHealthy": true,
    "isVegan": true,
    "category": "soup",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Çok düşük yağlı ve yüksek lifli yapısıyla diyetlerin en güvenilir sıcak başlangıcı.",
        "cheat_day": "Hafif beslenip kalori açığı yaratmak istediğiniz günlerin sıcak kurtarıcısı.",
        "economic": "Sadece 70.00 ₺! Şehirdeki en ucuz ve en besleyici sıcak vegan öğün.",
        "gourmet": "Kimyon ve zeytinyağı ile tatlandırılmış, pürüzsüz kıvamda sarı mercimek.",
        "vegan": "Tereyağı yerine tamamen bitkisel yağla hazırlanan arındırıcı vegan çorbası."
      },
      "en": {
        "fit": "Low in fat, rich in iron and dietary fiber. Squeeze fresh lemon juice.",
        "cheat_day": "A great starter to keep your calorie count low during cutting phases.",
        "economic": "Only ₺70.00! The cheapest warm plant-based starter in the city.",
        "gourmet": "Slowly simmered yellow lentils blended smooth with cumin and olive oil.",
        "vegan": "100% plant-based, dairy-free, cooked using pure vegetable oil."
      }
    }
  },
  {
    "id": "veg_86",
    "nameTr": "İmam Bayıldı",
    "nameEn": "İmam Bayıldı",
    "restaurant": "Konak Mutfak",
    "price": 130,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.9k+",
    "calories": 280,
    "protein": 4,
    "carbs": 20,
    "fat": 22,
    "imageUrl": "/images/imam-bayildi.jpg",
    "matchTagTr": "SARAYIN VEGAN BAŞYAPITI",
    "matchTagEn": "PALACE VEGAN CLASSIC",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Patlıcanın kalorisi düşüktür ancak sızma zeytinyağı miktarı nedeniyle yağı dengelidir.",
        "cheat_day": "İmamı lezzetten bayıltan o meşhur bol soğanlı sarımsaklı patlıcan şöleni!",
        "economic": "130.00 ₺ fiyatıyla saray mutfağı kalitesinde, besleyici ve hesaplı tencere yemeği.",
        "gourmet": "Zeytinyağında karamelize edilmiş soğan, domates ve sarımsak dolgulu köz patlıcan.",
        "vegan": "Hayvansal hiçbir yağ içermeyen, tamamen zeytinyağlı geleneksel vegan yemeği."
      },
      "en": {
        "fit": "Low calorie eggplant filled with tomato and garlic, cooked in olive oil.",
        "cheat_day": "A delicious sweet onion and garlic stuffed eggplant comfort dish.",
        "economic": "Highly satisfying classic dish that brings rich history for a fair price.",
        "gourmet": "Whole eggplant slit open and stuffed with tomatoes and olive-oil caramelized onions.",
        "vegan": "100% plant-based Ottoman classic, dairy-free and gluten-free."
      }
    }
  },
  {
    "id": "veg_87",
    "nameTr": "Falafel Dürüm",
    "nameEn": "Falafel Wrap",
    "restaurant": "Limon Falafel",
    "price": 120,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "2.1k+",
    "calories": 520,
    "protein": 18,
    "carbs": 68,
    "fat": 20,
    "imageUrl": "/images/falafel-durum.jpg",
    "matchTagTr": "NOHUTLU VEGAN PROTEİN",
    "matchTagEn": "CHICKPEA VEGAN PROTEIN",
    "isHealthy": true,
    "isVegan": true,
    "category": "vegan",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Nohut proteini ve tahin yağı içerir. Kızarmış falafel yerine fırınlanmış seçilebilir.",
        "cheat_day": "Tahine bulanmış çıtır falafel toplarının dürüm içindeki lezzet uyumu.",
        "economic": "120.00 ₺ fiyatıyla bitkisel protein ihtiyacınızı en lezzetli karşılayan F/P.",
        "gourmet": "Taze kişniş aromalı çıtır falafeller, tahinli humus yatağında lavaş dürümü.",
        "vegan": "Nohut köfteleri, yeşillik ve tahin soslu lavaş ile %100 vegan enerji."
      },
      "en": {
        "fit": "Excellent plant protein from chickpeas. Watch out for deep fried oils.",
        "cheat_day": "Crispy chickpea balls wrapped in flatbread with rich tahini sauce.",
        "economic": "Only ₺120.00! Highly filling plant protein wrap that is wallet-friendly.",
        "gourmet": "Crispy falafel seasoned with fresh coriander, wrapped with garlic tahini.",
        "vegan": "100% vegan certified street wrap, free of dairy or egg toppings."
      }
    }
  },
  {
    "id": "veg_88",
    "nameTr": "Zeytinyağlı Pırasa",
    "nameEn": "Leeks in Olive Oil",
    "restaurant": "Mutfak Evim",
    "price": 110,
    "currency": "₺",
    "rating": 4.2,
    "reviewCount": "250+",
    "calories": 140,
    "protein": 3,
    "carbs": 22,
    "fat": 6,
    "imageUrl": "/images/zeytinyagli-pirasa.jpg",
    "matchTagTr": "PİRİNÇLİ HAVUÇLU PIRASA",
    "matchTagEn": "CARROT & RICE LEEK STEW",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Pırasanın bağırsakları çalıştıran yüksek lif yapısı ve düşük kalorisi diyet dostudur.",
        "cheat_day": "Diyet haftalarında mideyi rahatlatmak için hafif bir tencere yemeği.",
        "economic": "Mevsiminde son derece ucuz ve vitamin deposu ekonomik ev yemeği.",
        "gourmet": "Havuç tatlılığı ve limon ekşisiyle ağır ateşte demlenerek pişmiş pırasa.",
        "vegan": "Tamamen sebzeler, pirinç ve sızma zeytinyağı ile hazırlanan vegan yemeği."
      },
      "en": {
        "fit": "High fiber winter vegetable stew that supports active digestion.",
        "cheat_day": "Ideal choice to reset your body after eating high fat street food.",
        "economic": "Very low-cost home cooking option loaded with vitamins.",
        "gourmet": "Simmered slowly with sweet carrots and finished with freshly squeezed lemon juice.",
        "vegan": "100% plant-based traditional Turkish green vegetable recipe."
      }
    }
  },
  {
    "id": "veg_89",
    "nameTr": "Humus",
    "nameEn": "Hummus",
    "restaurant": "Hatay Meze Evi",
    "price": 95,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.9k+",
    "calories": 390,
    "protein": 14,
    "carbs": 48,
    "fat": 18,
    "imageUrl": "/images/humus.jpg",
    "matchTagTr": "TAHİNLİ NOHUT EZMESİ",
    "matchTagEn": "CREAMY TAHINI DIP",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Nohut proteini ve sağlıklı tahin yağı bir arada, pide yerine sebzeyle banabilirsiniz.",
        "cheat_day": "Üzerine pul biberli sıcak zeytinyağı gezdirip pideyle sıyırmak enfestir.",
        "economic": "95.00 ₺ fiyatıyla hem çok besleyici hem de oldukça doyurucu bir meze tabağı.",
        "gourmet": "Pürüzsüz kıvamda ılık humus, sızma zeytinyağı, sumak ve kimyon ile süslenmiş.",
        "vegan": "Nohut, tahin, sarımsak, limon ve zeytinyağının muazzam %100 vegan buluşması."
      },
      "en": {
        "fit": "Packed with chickpea protein and healthy sesame fats. Squeeze fresh lemon.",
        "cheat_day": "Drizzle with sizzling chili olive oil and scoop up with warm flatbread.",
        "economic": "Highly affordable protein-dense dip that serves as a light lunch.",
        "gourmet": "Warm, velvety smooth chickpea puree seasoned with premium tahini and cumin.",
        "vegan": "100% plant-based and dairy-free legendary Middle Eastern dip."
      }
    }
  },
  {
    "id": "veg_90",
    "nameTr": "Ezogelin Çorbası",
    "nameEn": "Ezogelin Soup",
    "restaurant": "Marmara Çorbacısı",
    "price": 70,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "2.4k+",
    "calories": 220,
    "protein": 10,
    "carbs": 35,
    "fat": 4,
    "imageUrl": "/images/ezogelin-corbasi.jpg",
    "matchTagTr": "BOL BULGURLU & MERCİMEKLİ",
    "matchTagEn": "BULGUR & LENTIL SOUP",
    "isHealthy": true,
    "isVegan": true,
    "category": "soup",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kırmızı mercimek, bulgur ve nane içeren yüksek lifli ve düşük yağlı çorba.",
        "cheat_day": "Diyetinizi dengelemek ve bağırsaklarınızı ısıtmak için harika bir başlangıç.",
        "economic": "Sadece 70.00 ₺! Şehirde bulabileceğiniz en ucuz, besleyici ve lezzetli vegan çorba.",
        "gourmet": "Kurutulmuş nane, tatlı pul biber ve zeytinyağlı sos eşliğinde demlenmiş Ezogelin çorbası.",
        "vegan": "Tamamen bitkisel yağlar ve tahıllarla pişirilen geleneksel vegan çorba klasiği."
      },
      "en": {
        "fit": "High fiber soup combining red lentils, bulgur wheat, and dried mint.",
        "cheat_day": "An ideal light meal to keep your calories low during cutting cycles.",
        "economic": "Only ₺70.00! Exceptionally budget-friendly, warm, and highly filling soup.",
        "gourmet": "Traditional Anatolian soup seasoned with sweet paprika and dried mountain mint.",
        "vegan": "100% plant-based, dairy-free, prepared with vegetable oil."
      }
    }
  },
  {
    "id": "veg_91",
    "nameTr": "Zeytinyağlı Kereviz",
    "nameEn": "Celery in Olive Oil",
    "restaurant": "Yeşil Ev",
    "price": 120,
    "currency": "₺",
    "rating": 4.3,
    "reviewCount": "180+",
    "calories": 130,
    "protein": 2,
    "carbs": 18,
    "fat": 6,
    "imageUrl": "/images/zeytinyagli-kereviz.jpg",
    "matchTagTr": "PORTAKALLI GURME KEREVİZ",
    "matchTagEn": "ORANGE FLAVORED CELERY",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Kerevizin ödem attırıcı, lifli yapısı ve portakal suyunun C vitamini dengesi.",
        "cheat_day": "Diyet günlerinde vücudunuzu toksinlerden arındırmak için harika seçim.",
        "economic": "Kış mevsiminin en besleyici, sağlıklı ve ekonomik sebze yemeklerinden biri.",
        "gourmet": "Taze sıkılmış portakal suyu ve mandalina kabuklarıyla pişmiş ekşili gurme kereviz.",
        "vegan": "Tamamen bitkisel, portakallı ve zeytinyağlı %100 vegan kereviz dilimleri."
      },
      "en": {
        "fit": "High fiber celery cooked with root vegetables, supports kidney health.",
        "cheat_day": "A great light dinner choice during your strict cutting weeks.",
        "economic": "Affordable seasonal vegetable stew that is high in vitamin C.",
        "gourmet": "Poached in fresh orange and tangerine juices, topped with celery leaves.",
        "vegan": "100% plant-based, dairy-free and gluten-free traditional recipe."
      }
    }
  },
  {
    "id": "veg_92",
    "nameTr": "Şakşuka",
    "nameEn": "Şakşuka",
    "restaurant": "Meze Evi",
    "price": 95,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "1.4k+",
    "calories": 220,
    "protein": 4,
    "carbs": 18,
    "fat": 16,
    "imageUrl": "/images/saksuka.jpg",
    "matchTagTr": "DOMATES SOSLU KIZARTMA SEBZE",
    "matchTagEn": "SAUCY EGGPLANT & PEPPERS",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Sebzeler kızartıldığı için yağ oranı yüksektir. Diyet günlerinde kontrollü tüketilmelidir.",
        "cheat_day": "Sarımsaklı domates soslu patlıcan ve biberlerin soğuk meze sofrasındaki ziyafeti.",
        "economic": "95.00 ₺ fiyatıyla patlıcan ve domatesin en hesaplı ve lezzetli meze birleşimi.",
        "gourmet": "Fırınlanmış patlıcan, kabak ve kırmızı biberlerin sarımsaklı zeytinyağlı domates sosu ile harmanı.",
        "vegan": "Sadece sebzeler, sarımsak, domates ve bitkisel yağ içeren %100 vegan meze."
      },
      "en": {
        "fit": "Contains fried eggplants. High in vegetable fats, watch your portions.",
        "cheat_day": "Delicious cold eggplant cubes in garlicky vine-tomato reduction.",
        "economic": "Under ₺100, a highly cost-effective appetizer that delivers rich flavor.",
        "gourmet": "Baked eggplants, peppers, and zucchini seasoned with wild basil and garlic.",
        "vegan": "100% plant-based, dairy-free, and traditionally vegan appetizer."
      }
    }
  },
  {
    "id": "veg_93",
    "nameTr": "Yeşil Mercimekli Bulgur Pilavı",
    "nameEn": "Bulgur Pilaf with Green Lentils",
    "restaurant": "Anadolu Yemekleri",
    "price": 110,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "850+",
    "calories": 410,
    "protein": 15,
    "carbs": 68,
    "fat": 8,
    "imageUrl": "/images/yesil-mercimekli-bulgur-pilavi.jpg",
    "matchTagTr": "BİTKİSEL PROTEİN DENGESİ",
    "matchTagEn": "COMPLETE AMINO ACID BULGUR",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bulgur ve yeşil mercimeğin birleşimi, sporcular için mükemmel bir bitkisel amino asit dengesi sunar.",
        "cheat_day": "Yanına bol yeşillik ve salatalık turşusu ekleyerek ev usulü doyurucu bir öğün.",
        "economic": "110.00 ₺ fiyatıyla bakliyatın en doyurucu ve en ucuz protein birleşimlerinden biri.",
        "gourmet": "Karamelize soğanlı, sızma zeytinyağlı ve kimyonlu yeşil mercimekli bulgur pilavı.",
        "vegan": "Tereyağı yerine zeytinyağı ile pişirilen, protein zengini saf vegan tahıl öğünü."
      },
      "en": {
        "fit": "Bulgur and lentils combine to form a complete protein amino-acid profile.",
        "cheat_day": "A comforting rustic grain dish, great to enjoy with salad and pickles.",
        "economic": "Incredibly cost-effective way to get high protein and calories on a budget.",
        "gourmet": "Simmered with caramelized sweet onions, cumin, and cold-pressed olive oil.",
        "vegan": "100% plant-based grain pilaf. Pure vegan power fuel."
      }
    }
  },
  {
    "id": "veg_94",
    "nameTr": "Geniş Yapraklı Akdeniz Salatası",
    "nameEn": "Mediterranean Salad",
    "restaurant": "Akdeniz Yeşillikleri",
    "price": 115,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "1.2k+",
    "calories": 180,
    "protein": 4,
    "carbs": 12,
    "fat": 14,
    "imageUrl": "/images/akdeniz-salatasi.jpg",
    "matchTagTr": "ZEYTİNYAĞLI LİMONLU TAZE",
    "matchTagEn": "FRESH OLIVE OIL SALAD",
    "isHealthy": true,
    "isVegan": true,
    "category": "vegan",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Taze Akdeniz yeşillikleri ve zeytinyağından gelen sağlıklı tekli doymamış yağlar.",
        "cheat_day": "Ağır pizza veya burgerlerin yanına sipariş edilebilecek tazeleyici salata.",
        "economic": "115.00 ₺ fiyatıyla vitamin ve mineral deposu tazeleyici bir porsiyon.",
        "gourmet": "Frenk maydanozu, bebek roka, çeri domatesler, siyah zeytinler ve balzamik sos.",
        "vegan": "Peynirsiz, zeytinyağlı ve limonlu olarak hazırlanan taptaze %100 vegan salata."
      },
      "en": {
        "fit": "High in micronutrients and healthy monounsaturated fats from olive oil.",
        "cheat_day": "Perfect green side salad to pair with your heavy carbohydrate entrees.",
        "economic": "Affordable vitamin-dense plate that is easy on the budget.",
        "gourmet": "Baby arugula, cherry tomatoes, Kalamata olives, dressed with cold-pressed oil.",
        "vegan": "100% plant-based fresh salad, dairy-free and gluten-free."
      }
    }
  },
  {
    "id": "veg_95",
    "nameTr": "Fırında Baharatlı Patates Dilimleri",
    "nameEn": "Oven Roasted Spiced Potatoes",
    "restaurant": "Büfe Patatesi",
    "price": 90,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "1.4k+",
    "calories": 280,
    "protein": 4,
    "carbs": 58,
    "fat": 6,
    "imageUrl": "/images/firinda-baharatli-patates-dilimleri.jpg",
    "matchTagTr": "KIZARTMASIZ BAHARATLI PATATES",
    "matchTagEn": "CRISPY ROASTED POTATOES",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Yağda kızartılmadan, fırınlanarak hazırlanmış sağlıklı potasyum ve karbonhidrat kaynağı.",
        "cheat_day": "Ketçap ve hardal ile tatlandırılan çıtır patates dilimleri kaçamağı.",
        "economic": "90.00 ₺ fiyatıyla patatesin en çıtır, ucuz ve doyurucu bitkisel hallerinden biri.",
        "gourmet": "Taze biberiye, sarımsak tozu ve deniz tuzu ile fırınlanmış patates dilimleri.",
        "vegan": "%100 bitkisel içerikli, zeytinyağı ve baharatlarla fırınlanmış vegan atıştırmalık."
      },
      "en": {
        "fit": "Baked without deep-frying, providing clean potassium and carbohydrates.",
        "cheat_day": "Great crunchy potato wedges to dip in ketchup and mustard sauce.",
        "economic": "Only ₺90.00! Budget-friendly vegan carbs that fill you up instantly.",
        "gourmet": "Oven roasted potatoes tossed with fresh rosemary, garlic, and sea salt.",
        "vegan": "100% plant-based, baked using high quality vegetable oil."
      }
    }
  },
  {
    "id": "veg_96",
    "nameTr": "Zeytinyağlı Taze İç Bakla",
    "nameEn": "Fava Beans in Olive Oil",
    "restaurant": "Ege Yöresel",
    "price": 135,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "380+",
    "calories": 180,
    "protein": 8,
    "carbs": 26,
    "fat": 6,
    "imageUrl": "/images/zeytinyagli-taze-ic-bakla.jpg",
    "matchTagTr": "DEREOTLU EGE KLASİĞİ",
    "matchTagEn": "DILL INFUSED AEGEAN FAVA",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "İç bakladan gelen yüksek lif ve bitkisel protein, diyet günleri için mükemmel.",
        "cheat_day": "Ege meze sofralarının vazgeçilmez dereotlu zeytinyağlı lezzeti.",
        "economic": "Taze mevsimlik iç baklanın besleyici ve sağlıklı F/P sunumu.",
        "gourmet": "Dereotu ve sızma zeytinyağlı ılık iç bakla yemeği veya pürüzsüz fava ezmesi.",
        "vegan": "%100 bitkisel içerik, dereotu ve zeytinyağı ile pişen saf vegan Ege klasiği."
      },
      "en": {
        "fit": "Excellent source of fiber and plant protein from fresh fava beans.",
        "cheat_day": "A refreshing and healthy cold meze that fits well in a family dinner.",
        "economic": "Nutrient-dense seasonal dish that offers high quality at a fair price.",
        "gourmet": "Warm broad beans simmered with fresh spring onions and lots of dill.",
        "vegan": "100% plant-based traditional Aegean recipe, dairy-free and gluten-free."
      }
    }
  },
  {
    "id": "veg_97",
    "nameTr": "Muhammara / Acuka",
    "nameEn": "Muhammara",
    "restaurant": "Hatay Lezzetevi",
    "price": 100,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.4k+",
    "calories": 290,
    "protein": 6,
    "carbs": 22,
    "fat": 20,
    "imageUrl": "/images/muhammara-acuka.jpg",
    "matchTagTr": "CEVİZLİ SALÇALI MEZE",
    "matchTagEn": "WALNUT RED PEPPER DIP",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Cevizden gelen bitkisel Omega-3 yağ asitleri ve biber salçasının antioksidan gücü.",
        "cheat_day": "Sıcak ekmek üzerine sürülerek yenildiğinde bağımlılık yaratan Antep ezmesi.",
        "economic": "100.00 ₺ fiyatına göre içindeki yoğun ceviz ve baharat zenginliği çok yüksektir.",
        "gourmet": "Hatay biber salçası, dövülmüş organik ceviz içi, nar ekşisi ve sarımsak ezmesi.",
        "vegan": "Sıfır hayvansal içerik. Salça, ceviz, zeytinyağı ve baharatlardan oluşan vegan meze."
      },
      "en": {
        "fit": "Packed with heart-healthy fats from walnuts and rich pepper antioxidants.",
        "cheat_day": "An addictive spread to smear over warm toasted flatbread.",
        "economic": "Very high nutritional and ingredient density for a modest price.",
        "gourmet": "Made with authentic pepper paste, crushed walnuts, cumin, and pomegranate.",
        "vegan": "100% plant-based and dairy-free traditional walnut spread."
      }
    }
  },
  {
    "id": "veg_98",
    "nameTr": "Mantarlı Sote",
    "nameEn": "Mushroom Sauté",
    "restaurant": "Mantar Dünyası",
    "price": 120,
    "currency": "₺",
    "rating": 4.4,
    "reviewCount": "640+",
    "calories": 180,
    "protein": 10,
    "carbs": 12,
    "fat": 12,
    "imageUrl": "/images/mantarli-sote.jpg",
    "matchTagTr": "ETSİZ ET DOKUSUNDA",
    "matchTagEn": "BEEF-LIKE VEGGIE SAUTÉ",
    "isHealthy": true,
    "isVegan": true,
    "category": "general",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Mantarın düşük kalorili, yüksek sulu lifli yapısı diyet günleri için harika bir dolgudur.",
        "cheat_day": "Diyette et yerine geçebilecek doyurucu ve lezzetli bir tencere yemeği.",
        "economic": "120.00 ₺ fiyatıyla mantarın protein gücünü en hesaplı yoldan sunan esnaf yemeği.",
        "gourmet": "Kültür ve istiridye mantarlarının renkli biberler ve taze kekikle wokta sotelenmesi.",
        "vegan": "Etsiz, tereyağsız ve tamamen bitkisel yağlarla pişmiş %100 vegan mantar sote."
      },
      "en": {
        "fit": "Mushrooms are very low in calories, high in water content and amino acids.",
        "cheat_day": "A great comforting pan stew that feels rich like beef stir-fry.",
        "economic": "Highly affordable way to enjoy savory proteins without spending on meat.",
        "gourmet": "Oyster and button mushrooms sautéed with bell peppers and fresh wild thyme.",
        "vegan": "100% plant-based mushroom stir-fry cooked in extra virgin olive oil."
      }
    }
  },
  {
    "id": "veg_99",
    "nameTr": "Ezmeli Patlıcan Kebap",
    "nameEn": "Smoky Eggplant Veg-Kebab",
    "restaurant": "Anadolu Köz Sofrası",
    "price": 135,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "820+",
    "calories": 190,
    "protein": 4,
    "carbs": 18,
    "fat": 10,
    "imageUrl": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    "matchTagTr": "ETSİZ KÖZ SEBZE ŞÖLENİ",
    "matchTagEn": "SMOKY ROASTED VEG KEBAB",
    "isHealthy": true,
    "isVegan": true,
    "category": "kebab",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Köz sebzelerin düşük kalorili ve lifli yapısı diyet için mükemmel bir ızgara alternatifi.",
        "cheat_day": "Kebapçıya gidip etsiz ama son derece lezzetli köz lezzetleri yemek isteyenler için.",
        "economic": "135.00 ₺ fiyatıyla oldukça doyurucu, közlenmiş patlıcanlı F/P kebap alternatifi.",
        "gourmet": "Meşe odunu ızgarasında közlenmiş patlıcan, domates ve biberlerin sıcak zeytinyağlı ezmesi.",
        "vegan": "Sadece közlenmiş sebzeler, sarımsak ve zeytinyağı içeren sıfır etli geleneksel vegan lezzet."
      },
      "en": {
        "fit": "Charcoal-roasted vegetables are rich in fiber and extremely low in calories.",
        "cheat_day": "Enjoy the authentic kebab-house smoke flavors without any meat heavy fats.",
        "economic": "Highly satisfying roasted vegetable plate offering great value for money.",
        "gourmet": "Eggplants and red bell peppers slow-grilled over coals, mashed with garlic.",
        "vegan": "100% plant-based smoky vegetable kebab, prepared traditionally in olive oil."
      }
    }
  },
  {
    "id": "veg_100",
    "nameTr": "Kavrulmuş Çorbalık Erişte",
    "nameEn": "Roasted Vegan Noodles",
    "restaurant": "Erişte Evi",
    "price": 95,
    "currency": "₺",
    "rating": 4.5,
    "reviewCount": "410+",
    "calories": 380,
    "protein": 10,
    "carbs": 72,
    "fat": 6,
    "imageUrl": "/images/kavrulmus-corbalik-eriste.jpg",
    "matchTagTr": "YUMURTASIZ VEGGIE ERİŞTE",
    "matchTagEn": "EGG-FREE VEGGIE NOODLES",
    "isHealthy": false,
    "isVegan": true,
    "category": "pasta",
    "modes": [
      "vegan"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Karbonhidrat oranı yüksektir, spor öncesi enerji depolamak için bütçe dostu öğün.",
        "cheat_day": "Cevizli ve salçalı sos ekleterek ev usulü sıcak bir makarna kaçamağı.",
        "economic": "95.00 ₺ fiyatıyla öğrenci dostu, doyurucu ve geleneksel bir unlu mamul.",
        "gourmet": "Fırınlanarak kavrulmuş el yapımı yumurtasız erişte, zeytinyağlı nane sosu eşliğinde.",
        "vegan": "Hamurunda yumurta kullanılmayan, tamamen bitkisel un ve zeytinyağı ile hazırlanan vegan erişte."
      },
      "en": {
        "fit": "Wheat carbs are high. Good cheap source of fuel for active gym days.",
        "cheat_day": "Add crushed walnuts and hot pepper paste to make it a warm comfort bowl.",
        "economic": "Only ₺95.00! Nostalgic home-style pasta that fills your stomach quickly.",
        "gourmet": "Roasted egg-free wheat noodles tossed with extra virgin olive oil and walnuts.",
        "vegan": "100% vegan noodles made without egg yolks, tossed in vegetable oil."
      }
    }
  },
  {
    "id": "eco_61",
    "nameTr": "Hatay Usulü Biberli Ekmek",
    "nameEn": "Hatay Style Pepper Bread",
    "restaurant": "Hatay Fırını",
    "price": 85,
    "currency": "₺",
    "rating": 4.9,
    "reviewCount": "1.9k+",
    "calories": 280,
    "protein": 8,
    "carbs": 45,
    "fat": 8,
    "imageUrl": "/images/biberli-ekmek.jpg",
    "matchTagTr": "BAHARATLI ANADOLU LEZZETİ",
    "matchTagEn": "SPICY ANATOLIAN FLATBREAD",
    "isHealthy": true,
    "isVegan": true,
    "category": "flatbread",
    "modes": [],
    "aiInsights": {
      "tr": {
        "fit": "Zeytinyağı ve baharat dolgulu hamur işi. Karbonhidratı yüksek ama liflidir.",
        "cheat_day": "Hatay'ın o meşhur biber salçalı ve susamlı harcının fırından yeni çıkmış sıcaklığı!",
        "economic": "Sadece 85.00 ₺ fiyatıyla Hatay'ın zengin gastronomi kültürünü yaşatan harika bir F/P.",
        "gourmet": "Çökelek, biber salçası, susam, zahter ve zeytinyağı harcının taş fırında pişen efsane lezzeti.",
        "vegan": "Tamamen bitkisel harç ve zeytinyağıyla hazırlanan, Hatay'ın geleneksel vegan lezzeti."
      },
      "en": {
        "fit": "Yeast flatbread topped with olive oil and spices. High in carbs but rich in flavor.",
        "cheat_day": "Hatay's famous spicy pepper paste and sesame spread fresh out of the stone oven!",
        "economic": "At only ₺85.00, it brings Hatay's rich culinary culture to your plate very affordably.",
        "gourmet": "Flatbread topped with onion, pepper paste, sesame, zahter thyme, and cold-pressed olive oil.",
        "vegan": "100% plant-based spread prepared with olive oil, sesame, and spices on vegan dough."
      }
    }
  },
  {
    "id": "eco_54",
    "nameTr": "Bulgur Pilavı + Cacık",
    "nameEn": "Bulgur Rice with Cacık",
    "restaurant": "Esnaf Mutfağı",
    "price": 80,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.1k+",
    "calories": 420,
    "protein": 10,
    "carbs": 72,
    "fat": 8,
    "imageUrl": "/images/bulgur-pilavi-cacik.jpg",
    "matchTagTr": "BULGUR PİLAVI VE BUZ GİBİ CACIK",
    "matchTagEn": "BULGUR WHEAT RICE WITH TSATSIKI",
    "isHealthy": true,
    "isVegan": false,
    "category": "general",
    "modes": [
      "economic"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Bulgur lifli ve kompleks karbonhidrat kaynağıdır. Cacık ise protein sağlar.",
        "cheat_day": "Yaz aylarında buz gibi cacık eşliğinde kaşıklanan lezzetli bir bulgur pilavı.",
        "economic": "80.00 ₺ fiyatıyla yaz aylarının hem en ferahlatıcı hem de en ucuz menü alternatifi.",
        "gourmet": "Tereyağlı ve domatesli başbaşı bulgur pilavı, taze nane ve salatalıklı cacıkla.",
        "vegan": "Cacık yoğurt içerir. Vegan beslenme için cacığı menüden çıkarabilirsiniz."
      },
      "en": {
        "fit": "Bulgur is rich in fiber and complex carbs. Cacık yogurt drink provides protein.",
        "cheat_day": "Traditional cracked bulgur rice served with chilled cucumber yogurt sauce.",
        "economic": "Only ₺80.00! The coolest and cheapest lunch combo for hot summer days.",
        "gourmet": "Bulgur wheat pilaf cooked with tomatoes and butter, paired with fresh mint cucumber yogurt.",
        "vegan": "Cacık contains yogurt. Skip cacık for a 100% vegan bulgur dish."
      }
    }
  },
  {
    "id": "gourmet_69",
    "nameTr": "Deniz Börülcesi / Şevketi Bostan",
    "nameEn": "Sea Beans & Blessed Thistle",
    "restaurant": "Ege Gurme",
    "price": 160,
    "currency": "₺",
    "rating": 4.6,
    "reviewCount": "890+",
    "calories": 180,
    "protein": 4,
    "carbs": 14,
    "fat": 12,
    "imageUrl": "/images/deniz-borulcesi.jpg",
    "matchTagTr": "EGE MUTFAĞININ ÖZEL OTLARI",
    "matchTagEn": "AEGEAN WILD HERBS SPECIALTY",
    "isHealthy": true,
    "isVegan": true,
    "category": "meze",
    "modes": [
      "gourmet",
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Zeytinyağlı Ege otları, son derece düşük kalorili ve yüksek lifli bir ara öğündür.",
        "cheat_day": "Balık sofrasında zeytinyağlı ve sarımsaklı sosla lezzetlendirilmiş taze otlar.",
        "economic": "Mevsimlik toplanan nadide otlar olduğu için fiyatı diğer mezelerden biraz daha yüksek olabilir.",
        "gourmet": "Taze sıkılmış sızma zeytinyağı, limon ve sarımsaklı sosla harmanlanmış Ege börülcesi.",
        "vegan": "%100 bitkisel, tamamen vegan dostu şifa deposu."
      },
      "en": {
        "fit": "Aegean wild herbs cooked in olive oil are extremely low calorie and high in fiber.",
        "cheat_day": "Served cold with fresh garlic and olive oil dressing, perfect for seafood tables.",
        "economic": "Rare seasonal wild greens, reflecting an authentic high-quality delicacy.",
        "gourmet": "Fresh sea beans and wild blessed thistle boiled gently, dressed in extra virgin olive oil.",
        "vegan": "100% plant-based and vegan friendly healthy appetizer."
      }
    }
  },
  {
    "id": "gourmet_71",
    "nameTr": "Çerkez Tavuğu",
    "nameEn": "Circassian Chicken",
    "restaurant": "Kafkas Sofrası",
    "price": 170,
    "currency": "₺",
    "rating": 4.7,
    "reviewCount": "1.2k+",
    "calories": 420,
    "protein": 28,
    "carbs": 12,
    "fat": 26,
    "imageUrl": "/images/cerkez-tavugu.jpg",
    "matchTagTr": "CEVİZLİ VE SARIMSAKLI KAFKAS EZMESİ",
    "matchTagEn": "CIRCASSIAN WALNUT CHICKEN",
    "isHealthy": true,
    "isVegan": false,
    "category": "meze",
    "modes": [
      "gourmet",
      "fit"
    ],
    "aiInsights": {
      "tr": {
        "fit": "Cevizden gelen sağlıklı yağlar ve tavuk göğsünün yüksek proteiniyle mükemmel bir sporcu mezesi.",
        "cheat_day": "Eriyen tereyağlı pul biber sosu ve ceviz parçalarıyla nefis bir başlangıç ziyafeti.",
        "economic": "Ceviz oranı yüksek olduğu için maliyetli ama besleyiciliği ve tokluk hissi çok yüksektir.",
        "gourmet": "Kişniş ve sarımsakla tatlandırılmış, havanda dövülmüş bol ceviz soslu didilmiş tavuk.",
        "vegan": "Tavuk eti içerir, vegan beslenmeye uygun değildir."
      },
      "en": {
        "fit": "Excellent protein and healthy fat macro profile coming from walnuts and chicken.",
        "cheat_day": "Topped with warm red pepper infused butter and toasted walnut chunks.",
        "economic": "Contains premium walnut paste, offering very high nutritional values.",
        "gourmet": "Shredded chicken breast folded into spiced coriander, garlic, and walnut puree.",
        "vegan": "Contains chicken meat. Non-vegan."
      }
    }
  }
];
