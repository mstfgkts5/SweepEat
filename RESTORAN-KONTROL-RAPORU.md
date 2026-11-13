# Gece güncellemesi raporu: restoranlar, otomatik konum, arena ve kaydırak animasyonu

Branch: `claude/restoran-onerileri-ve-konum`

## Kısa özet

1. **Her yemek için her ilde 5 restoran.** Uygulamadaki 9 il × 167 yemek = 1.503 kombinasyonun hepsi tek tek kontrol edildi. Önceden 1.146 kombinasyonda hiç restoran çıkmıyordu ve hiçbirinde 5 öneri yoktu (en fazla 3). Şimdi **1.503 kombinasyonun hepsinde 5 gerçek mekân** var.
2. **Otomatik konum.** Uygulama açılınca bulunduğun il algılanıyor; yemekler, turist modundaki yöresel liste ve restoranlar o ilden başlıyor.
3. **Arenada tek sayı hatası düzeldi.** Beğenilen yemek sayısı tek olunca artık **üçlü düello** yapılıyor; hiçbir yemek elenmeden arenaya giriyor.
4. **Kaydırak animasyonu.** Arenada seçilen yemek kaydıraktan kayıp gidiyor; finalde şampiyon logodaki kaydıraktan dönerek kayıp iniyor.

## 1) Restoran önerileri

### Önce / sonra (il başına, 167 yemek)

| İl | Önce: hiç restoran yok | Sonra: 5 öneri | "Yemekle bilinir" | "Benzer mutfak" | "Genel öneri" içeren yemek |
|---|---|---|---|---|---|
| İstanbul | 84 | 167 | 302 | 533 | 0 |
| Ankara | 115 | 167 | 287 | 548 | 0 |
| İzmir | 133 | 167 | 178 | 657 | 0 |
| Mersin | 144 | 167 | 85 | 733 | 11 |
| Gaziantep | 124 | 167 | 168 | 612 | 18 |
| Eskişehir | 148 | 167 | 134 | 693 | 8 |
| Adana | 147 | 167 | 139 | 682 | 11 |
| Diyarbakır | 123 | 167 | 96 | 681 | 18 |
| Kahramanmaraş | 128 | 167 | 19 | 650 | 67 |

(Ortadaki üç sütun, 167 yemeğin 5'er önerisi içinde o türden kaç tane olduğunu sayar.)

### Neden öneri çıkmıyordu?

- **Yeniden adlandırılan yemekler:** Menü güncellemesinde bazı yemeklerin adı değişti (ör. "Gaziantep Katmeri / Baklava" → "Fıstıklı Katmer"), restoran listeleri eski adla kalmıştı. Gaziantep'te Katmer seçilince restoran çıkmamasının sebebi buydu. Artık yemeğin eski ve yeni bütün adları deneniyor.
- **Liste sadece 3 mekânla sınırlıydı** ve yemeğe özel liste yoksa çoğu yemek için boş dönüyordu.
- **Doğrulanmış mekân sayısı azdı:** Bazı illerde sadece 7-12 adresi belli mekân vardı.

### Nasıl çalışıyor? (sade anlatım)

Bir yemek seçilince o ilin bütün gerçek mekânları üç gruba ayrılıyor ve sırayla 5 tane seçiliyor:

1. **Bu yemekle bilinir** (yeşil etiket): mekân o yemeğin listesinde ya da tanımında o yemek geçiyor (ör. Gaziantep'te katmer için katmerciler).
2. **Benzer mutfak** (sarı etiket): mekân bu tür yemek yapıyor (ör. levrek için balık restoranı, künefe için tatlıcı). Kart üzerinde "Bu tür yemekler sunuyor; menüyü kontrol edin." yazıyor.
3. **Genel öneri** (gri etiket): o ilde bu türden yeterli mekân yoksa ildeki diğer gerçek restoranlarla tamamlanıyor (ana yemek için lokanta/kebapçı, tatlı için pastane öncelikli). Kartta "bu yemeği menüsünde aramayı unutmayın" uyarısı var.

Her kartta mekânın adı, semti, adresi ve "Haritada Aç" butonu var. Yıldız puanı sadece daha önce elle kontrol edilmiş Google puanı olan mekânlarda gösteriliyor; yeni eklenen mekânlarda puan yok (uydurma puan yok).

Bilinen il dışında bir ildeysen (ör. Kilis, Batman) restoranlar en yakın veri olan ilden geliyor ve bu ekranda açıkça yazıyor ("Kilis için henüz restoran verimiz yok; en yakın şehir Gaziantep gösteriliyor.").

### Örnekler

- **Gaziantep – Fıstıklı Katmer:** Zekeriya Usta, Katmerci Murat, Pendirhan Atmalı Kebap ve Kahvaltı Sarayı, Katmerci Cengiz (yemekle bilinir), İmam Çağdaş (benzer mutfak)
- **Diyarbakır – Kaburga Dolması:** Selim Amca'nın Sofra Salonu, Beroş Restaurant, Kemikli Evi, Sultan Ocakbaşı Ali Usta, Hancı Et (hepsi yemekle bilinir)
- **Kahramanmaraş – Maraş Dondurması:** Yaşar Pastanesi, Gaymak Dondurma (yemekle bilinir), Kervan Pastaneleri (benzer mutfak), Küçük Ev Et Lokantası, Hacı Milcan Et Lokantası (genel öneri)
- **İstanbul – Balık Ekmek:** Aterina Balık (yemekle bilinir), Balıkçı Sabahattin, Sur Balık, Yeniköy Balıkçısı, Montenegro Balık (benzer mutfak)

### Eklenen restoranlar ve kaynakları

`src/data/cityGuide.ts` dosyasına **256 gerçek mekân** eklendi (Adana 42, İzmir 53, Ankara 40, Eskişehir 33, Mersin 29, Diyarbakır 29, Gaziantep 20, İstanbul 9, Kahramanmaraş 1). Her birinin adı, adresi ve neyle bilindiği yayımlanmış şehir rehberlerinden alındı; her kaydın hangi kaynaktan geldiği dosyada yazıyor. Kaynaklar (Kasım 2026'da okundu):

- yemek.com: Adana kebapçıları, Adana mekânları, Adana kahvaltı, Adana baklava, Adana kokoreç, Adana katmer; Mersin mekânları, Mersin kahvaltı, Mersin tantuni; Eskişehir mekânları, makarna, kahvaltı, börek, kokoreç; Gaziantep nerede ne yenir, Gaziantep kahvaltı; İzmir ayaküstü lezzetleri, kahvaltı, mezeciler, ıslak hamburger; Diyarbakır kahvaltı, kaburgacılar; Ankara pizzacılar, balık restoranları, kahvaltı, ev yemekleri, kokoreç, künefe; İstanbul'un en iyi balıkçıları
- oggusto.com (Adana'nın en iyi restoranları), bizevdeyokuz.com (Mersin ve İzmir rehberleri), wanderlog.com (Diyarbakır restoran listesi, Balıkçı Kemal), tablejourney.com (Gaziantep Şehitkamil), en.wikivoyage.org (Kahramanmaraş)

Bu mekânlar, `extraCities.ts`'teki Diyarbakır/Kahramanmaraş kayıtları gibi OpenStreetMap'te ayrıca kontrol **edilmedi** (bu ortamdan OpenStreetMap'e erişilemedi). Rehber yazıldıktan sonra yer değiştirmiş ya da kapanmış olabilirler; bu yüzden puan gösterilmiyor.

### "Genel öneri" ile tamamlanan il × yemek listesi

Bu yemeklerde 5 önerinin bir kısmı (parantez içindeki sayı kadarı) "Genel öneri":

- **Kahramanmaraş (67 yemek):** Balık yemeklerinin tamamı (Izgara Levrek/Çipura/Somon, Hamsi Tava, Hamsili Pilav, Kalamar Tava, Karides Güveç, Ton Balıklı Salata, Balık Ekmek, Midye Dolma/Tava: 5'er), Kokoreç (5), Falafel Dürüm (5), Kumpir (4), fast food (Hamburger, Islak Hamburger, Vegan Burger, Sosisli Sandviç, Tost'lar, Patates Kızartması: 3'er), Sıkma (3), tatlıların çoğu (2'şer: Künefe, Baklava, Şöbiyet, Fıstıklı Sarma, Kazandibi, Sütlaç, Trileçe, Tiramisu, Magnolia, Profiterol, Revani, Lokma, Tulumba, Aşure, Kabak Tatlısı, Tahin Helvası, Türk Lokumu, Tavuk Göğsü, Ekmek Kadayıfı, Waffle, Islak Kek, San Sebastian, Maraş Dondurması, Meyve Tabağı, Yoğurt Kasesi, Yulaf Lapası), Çerkez Tavuğu, Karışık Pizza (2), kahvaltılıklar ve birkaç hamur işi (1'er). Kahramanmaraş için adresli rehber kaynağı çok az bulundu; ildeki 12 mekânın çoğu et lokantası, paça salonu ve pastane.
- **Gaziantep (18) ve Diyarbakır (18):** Balık yemekleri (4'er), Midye Dolma/Tava, Balık Ekmek ve Kokoreç (3-4), hamburger/fast food (2'şer), Falafel Dürüm (1).
- **Mersin (11) ve Adana (11):** Makarnalar (Mersin 3'er, Adana 2'şer) ve bazı balık yemekleri (1'er).
- **Eskişehir (8):** Balık yemekleri (1'er).
- **İstanbul, Ankara, İzmir:** Genel öneri yok.

## 2) Otomatik konum

- Uygulama açılınca cihazdan konum isteniyor (ilk açılışta izin sorulur). Konum, uygulamanın içindeki 81 il merkezi listesiyle **cihazın üzerinde** ile çevriliyor; internet gerekmiyor, konum hiçbir sunucuya gönderilmiyor. (Eskiden şehir seçicideki "Konumumu Otomatik Bul" butonu konumu OpenStreetMap sunucusuna gönderiyordu; artık o da cihaz üzerinde çalışıyor.)
- Bulunan il kaydediliyor ve üstte kısa bir bildirim çıkıyor: "Konumun: Gaziantep. Yemekler buradan başlıyor."
- İzin verilmezse ya da konum alınamazsa en son kullanılan il (hiç yoksa İstanbul) kullanılıyor.
- Şehir seçicide arama artık 81 ilin hepsinde çalışıyor.
- Android'e yaklaşık konum izni (`ACCESS_COARSE_LOCATION`) eklendi; il bulmak için hassas konum gerekmiyor.
- İl, en yakın il merkezine göre bulunuyor. İl sınırına çok yakın yerlerde komşu il çıkabilir; bu durumda kullanıcı listeden değiştirebilir.

## 3) Arena tek sayı düzeltmesi

- Eskiden arena beğenilenlerin sadece ilk 4'ünü ya da ilk 8'ini alıyordu (5, 6 veya 7 beğenide 1-3 yemek; 9 ve üstünde fazlası hiç oynamıyordu).
- Artık **bütün beğenilen yemekler** arenaya giriyor. Turdaki yemek sayısı tek ise o turun son maçı **üçlü düello** oluyor: üç yemekten biri seçiliyor, diğer ikisi eleniyor. Örnekler: 5 yemek → (2+3) → final; 7 yemek → (2+2+3) → üçlü final.
- Üçlü düelloda kartlar daha sıkı diziliyor ve üstte "Üçlü düello! Üçünden birini seç, diğer ikisi elenir." yazıyor. Karbon etiketi açıksa en düşük karbonlu yemek "çevre dostu" işaretli.
- Tur adları maç sayısına göre: 1 maç **Final**, 2 maç **Yarı Final**, 3-4 maç **Çeyrek Final**, daha fazlası "1. Tur", "2. Tur"…
- Hesaplama ayrı bir modülde (`src/data/bracket.ts`). Testler 2-40 yemekte hiçbir yemeğin kaybolmadığını, 4-20 yemekte her yemeğin şampiyon olabildiğini ve son turun her zaman Final olduğunu doğruluyor.

## 4) Kaydırak animasyonu

- **Her düello seçiminde:** Seçilen kart yaklaşık 0,6 saniyede kaydırak eğrisiyle aşağı kayıp çıkıyor, diğer kart soluklaşıyor. Animasyon sürerken ikinci bir seçim yapılamıyor.
- **Final seçiminde:** Lacivert ekranda logodaki gibi bir kaydırak beliriyor (sarı merdiven, yeşil platform, kırmızı kaydırak). Şampiyonun yuvarlak fotoğrafı tepeden dönerek ve hızlanarak kayıyor, sonda zıplayıp iniyor, adı beliriyor. Yaklaşık 1,5 saniye sonra şampiyon ekranı açılıyor; konfeti o anda patlıyor ve şampiyon fotoğrafı "iner" gibi yerine oturuyor.
- Ekrana dokununca animasyon atlanıyor. Telefonda "hareketi azalt" açıksa animasyon gösterilmiyor.
- Yeni paket eklenmedi; sadece CSS ve React. Telefonda akıcı olsun diye sadece transform/opacity ve offset-path kullanıldı.
- Keşfet'teki sağa/sola kaydırma değişmedi.
- **Yorum:** "Seçim ekranı" Lezzet Arenası olarak alındı. Animasyon Keşfet'te sağa kaydırınca istenirse oraya da uyarlanabilir.

## Değişen / eklenen dosyalar

Yeni:
- `src/data/restaurantMatch.ts`: restoran önerisi (önceden ExtraScreens.tsx içindeydi)
- `src/data/cityGuide.ts`: 256 yeni gerçek mekân ve kaynakları
- `src/data/provinces.ts`: 81 il merkezi, en yakın il / en yakın veri olan şehir
- `src/data/location.ts`: açılışta konum algılama, ili kaydetme
- `src/data/bracket.ts`: arena eşleşme mantığı
- `src/data/motion.ts`: animasyon süreleri, "hareketi azalt" kontrolü
- `src/components/SlideCelebration.tsx`: şampiyon kaydırak animasyonu
- `tests/restaurants.test.ts`, `tests/bracket.test.ts`
- `RESTORAN-KONTROL-RAPORU.md` (bu dosya)

Değişen:
- `src/components/ExtraScreens.tsx`: arena (üçlü düello, animasyon), şampiyon ekranında 5 restoran ve etiketler
- `src/components/LocationModal.tsx`: cihaz üzerinde konum, 81 ilde arama
- `src/App.tsx`: açılışta konum, il kaydı, konum bildirimi
- `src/data/allFood.ts`: yemeğin bütün eski adları (`restaurantLookupNames`), `dishKeyOf`
- `src/data/translations.ts`: "En İyi 5 Restoran", üçlü düello ve konum metinleri
- `src/index.css`: etiketler, üçlü düello, animasyonlar, konum bildirimi
- `android/app/src/main/AndroidManifest.xml`: yaklaşık konum izni

## Test / build sonuçları

- `npm run build`: başarılı.
- `npm test`: **23/23 test geçti** (öneri algoritması 12, arena 5, restoranlar 6). Restoran testi 9 il × 167 yemeğin her biri için 5 farklı, adresli mekân olduğunu; yemekle bilinen mekânların önce geldiğini; Gaziantep-Katmer, Diyarbakır-Kaburga Dolması, Kahramanmaraş-Maraş Dondurması, İstanbul-Balık Ekmek, Mersin-Tantuni, Eskişehir-Kokoreç ve İzmir-Boyoz eşleşmelerini; balık yemeğine tatlıcı, tatlıya kebapçı önerilmediğini kontrol ediyor.
- `npm run lint`: yeni hata yok. Kalan 5 sorunun hepsi önceden vardı (`App.tsx` kullanılmayan `e`, `SwipeDeck.tsx` 2 sorun, `realRestaurants.ts` 2 sorun). `ExtraScreens.tsx` içindeki eski lint sorunları da restoran kodu yeniden yazılınca kalktı.
- Tarayıcıda telefon boyutunda kontrol edildi:
  - Gaziantep ve Diyarbakır konumu taklit edilince il doğru bulundu.
  - İzin verilmeyince İstanbul'da kaldı.
  - Kilis konumunda il Kilis oldu, restoranlar Gaziantep'ten geldi.
  - 5 beğeniyle arena: Yarı Final (2'li + 3'lü) → Final.
  - 7 beğeniyle arena: Çeyrek Final (2+2+3) → üçlü Final.
  - Animasyon kareleri alındı; konsolda hata yok.

## Karar gerektiren noktalar

1. **Rehber mekânları OpenStreetMap'te kontrol edilmedi.** Adresler yayımlanmış rehberlerden. İnternet erişimi olan bir ortamda (ör. kendi bilgisayarında) `verifiedRestaurants.ts`'i üreten betik bu mekânlar için de çalıştırılabilir.
2. **Kahramanmaraş verisi zayıf.** Adresli rehber kaynağı bulunamadığı için 67 yemekte "Genel öneri" var. Bilinen Maraş mekânları eklenirse (adresleriyle) liste hemen iyileşir; `cityGuide.ts`'e satır eklemek yeterli.
3. **Google Play veri güvenliği formu:** Uygulama artık yaklaşık konum izni istiyor. Konum cihazdan çıkmadığı için Google'ın tanımına göre "toplanan veri" sayılmaz, ama izin listede görüneceği için Play Console'daki veri güvenliği bölümünü bir kez gözden geçirmek iyi olur.
4. **İngilizce arayüzde mekân açıklamaları Türkçe.** Rehberlerden gelen açıklamalar sadece Türkçe.
5. **Arena yemek sayısı sınırsız.** 20-30 beğenide arena uzun sürebilir. İstenirse bir üst sınır (ör. 16) konabilir; şu an kullanıcının isteği doğrultusunda hiçbir yemek atılmıyor.
6. Android uygulama paketi (AAB) bu değişikliklerle oluşturulmadı; PR birleştirildikten sonra yeniden alınmalı (versionCode artırılarak).
