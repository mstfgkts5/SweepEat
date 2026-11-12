# Değişiklikler: Kişisel yemek önerileri ve ayrı tatlı butonu

Branch: `claude/yemek-oneri-ve-tatli-butonu`

## Kısa özet

- **Sana Özel Öneriler:** Uygulama artık kullanıcının son 5 yemek seçimini telefonda saklıyor ve bu seçimlere göre kişisel öneri listesi çıkarıyor. Liste **Beğenilenler** sekmesinin en üstünde, yatay kaydırılan kartlar olarak görünüyor; bir karta dokununca yemeğin detay penceresi (Yapay Zeka Analizi) açılıyor.
- **Tatlılar butonu:** Tatlılar ana yemeklerden ayrıldı. **Keşfet** destesinin üstünde ve **Beğenilenler** listesinin üstünde küçük bir “Ana Yemekler / Tatlılar” düğmesi var. Varsayılan olarak ana yemekler gösteriliyor; “Tatlılar”a basınca sadece tatlılar, “Ana Yemekler”e basınca tekrar ana yemekler geliyor.
- **Yemek türü alanı:** Her yemeğe bir tür eklendi (et, tavuk, balık, sebze, makarna, hamur işi, çorba, kahvaltılık, tatlı, fast food).
- **Testler:** Öneri algoritması için 12 birim testi eklendi (`npm test`), hepsi geçiyor.

## Öneri algoritması nasıl çalışıyor? (sade anlatım)

1. **“Seçim” ne sayılıyor?** Bir yemeği sağa kaydırmak (beğenmek) ve Lezzet Arenası’nda şampiyon seçilen yemek. Her seçim telefona (localStorage) kaydediliyor; uygulama kapatılıp açılsa da hatırlanıyor. Sadece **en son 5 seçim** tutuluyor, aynı yemek iki kez seçilirse listede bir kez (en yeni haliyle) yer alıyor.
2. **Türleri sayıyor.** Örneğin son 5 seçim: 3 et, 2 tavuk.
3. **Listenin yaklaşık %80’i sevdiğin türlerden.** Bu kısım seçim sayısıyla orantılı paylaştırılıyor: 10 öneride 8 yer → 3/5 et = 5 et yemeği, 2/5 tavuk = 3 tavuk yemeği. En çok seçilen tür listenin başında.
4. **Yaklaşık %20’si farklı türlerden.** Keşif için seçmediğin türlerden 2 yemek (mümkünse ikisi de farklı türden) araya karıştırılıyor.
5. **Az önce seçtiklerin en üste gelmiyor.** Son 5’teki yemekler öneriye konmuyor; yalnızca gösterilecek başka yemek kalmazsa listenin en sonuna ekleniyor.
6. **5’ten az seçim varsa da çalışıyor** (1 seçim bile yeterli). **Hiç seçim yoksa** o modun en popüler yemekleri gösteriliyor (alt başlık: “Henüz seçim yok, en popüler lezzetler”).
7. **Modu ve tatlı/ana yemek seçimini dikkate alıyor.** Öneriler aktif moddaki yemeklerden ve o an seçili olan “Ana Yemekler / Tatlılar” grubundan çıkıyor. Turist modunda şehrin yöresel yemekleri yine önde geliyor.
8. Her türün içinde yemekler modun popülerlik sırasıyla geliyor; yani aynı seçimler hep aynı sonucu veriyor (rastgelelik yok, test edilebilir).

Algoritma ayrı bir modül olarak yazıldı: `src/data/recommend.ts` (React’e ve localStorage’a bağımlı değil).

## Tatlı butonu nerede, nasıl çalışıyor?

- “Yemeklerin listelendiği bir modal” uygulamada yoktu; yemekler **Keşfet** destesinde ve **Beğenilenler** listesinde listeleniyor. Buton bu iki yere eklendi.
- **Keşfet:** Kartların üstünde “Ana Yemekler (sayı) | Tatlılar (sayı)” düğmesi. Varsayılan: Ana Yemekler. Tatlılar seçiliyken deste sadece tatlılardan oluşuyor.
- **Beğenilenler:** Beğeni havuzunun üstünde aynı düğme; beğenilen tatlılar ayrı görüntüleniyor. Lezzet Arenası tüm beğenilenlerle (tatlı + ana yemek) çalışmaya devam ediyor.
- İki ekrandaki düğme aynı ayarı paylaşıyor; “Sana Özel Öneriler” de seçili gruba göre değişiyor (tatlılar seçiliyken tatlı önerileri).
- Stil mevcut renk paletiyle uyumlu: aktif “Ana Yemekler” lacivert (#1D2D44), aktif “Tatlılar” kırmızı (#E63946), simgeler mevcut lucide-react kütüphanesinden.

## Değişen / eklenen dosyalar

Yeni dosyalar:
- `src/data/dishTypes.ts` — yemek türleri, her yemeğin türü, Türkçe/İngilizce tür adları; tabloda olmayan yemek için kategoriden tür tahmini.
- `src/data/recommend.ts` — öneri algoritması (saf fonksiyonlar).
- `src/data/selectionHistory.ts` — son 5 seçimi localStorage’a kaydetme/okuma (hata olursa sessizce bellekte devam eder).
- `src/components/CourseToggle.tsx` — “Ana Yemekler / Tatlılar” düğmesi.
- `src/components/Recommendations.tsx` — “Sana Özel Öneriler” şeridi.
- `tests/recommend.test.ts` — algoritmanın birim testleri.
- `DEGISIKLIKLER.md` — bu dosya.

Değişen dosyalar:
- `src/App.tsx` — seçim geçmişi, tatlı/ana yemek durumu, öneri hesaplama, Keşfet’e düğme.
- `src/components/ExtraScreens.tsx` — Beğenilenler ekranına öneriler ve düğme.
- `src/data/allFood.ts` — her yemeğe `dishType` ekleniyor; `isDessert`, `filterByCourse` yardımcıları.
- `src/data/mockFood.ts` — `MenuItem` tipine `dishType` alanı.
- `src/data/translations.ts` — yeni metinler (TR/EN).
- `src/index.css` — düğme ve öneri şeridi stilleri.
- `package.json` — `npm test` komutu (ek paket yok, Node’un yerleşik test aracı).

## Test / build sonuçları

- `npm run build` (tsc + vite): **başarılı.** (Paket boyutu uyarısı önceden de vardı.)
- `npm test`: **12/12 test geçti.**
- `npm run lint`: yeni/değişen kodda **yeni hata yok.** Projede bu değişiklikten önce de var olan 9 lint uyarısı/hatası duruyor (`App.tsx` içindeki kullanılmayan `e`, `ExtraScreens.tsx` regex kaçışları ve `_en`, `SwipeDeck.tsx` effect içinde setState, `realRestaurants.ts` `_language`/`templates`). İlgisiz koda dokunmamak için bunlara karışılmadı.
- Tarayıcıda (telefon boyutu) elle kontrol: Keşfet’te düğme, tatlı destesi, sağa kaydırma → Beğenilenler’de öneriler, öneri kartına dokununca detay penceresi ve sayfa yenilendikten sonra seçimlerin hatırlanması çalışıyor; konsolda uygulama hatası yok.

## Açık kalan noktalar / karar gerektirenler

1. **“Seçim” tanımı:** Sağa kaydırma ve arena şampiyonu seçim sayıldı. Sadece arena şampiyonunun (gerçek karar) sayılması istenirse `App.tsx` içinde `rememberSelection` çağrısı sağa kaydırmadan kaldırılabilir.
2. **Önerilerin yeri:** Keşfet ekranında yer dar olduğu için öneriler Beğenilenler sekmesine kondu. İstenirse Keşfet destesi de önerilere göre sıralanabilir.
3. **Yemek türleri:** Bazı yemekler iki türe de uyabilir (ör. Beyran ve Kelle Paça “çorba”, Lahmacun “hamur işi”, Karnıyarık “et”, Çiğ Köfte “sebze” sayıldı). Gerekirse `src/data/dishTypes.ts` içinden tek satırla değiştirilebilir.
4. **“Sıfırla” davranışı:** “Filtreleri Sıfırla & Keşfet” beğeni havuzunu temizliyor ama son 5 seçimi silmiyor (öneriler kişisel kalsın diye).
5. **Testler için Node sürümü:** `npm test`, TypeScript dosyasını doğrudan çalıştırıyor; Node 22.18 veya üstü gerekir (bu ortamda 22.23 kullanıldı).
6. **package-lock.json:** `npm ci` bu repoda kilit dosyası uyumsuz olduğu için hata veriyor (“Missing: @emnapi/core … from lock file”). `npm install` ile çalışıldı ama ilgisiz değişiklik olmasın diye kilit dosyası commit’e eklenmedi; ayrıca `npm install` çalıştırıp güncel kilit dosyasını commit’lemeniz önerilir.
7. Android sürümü (versionCode 8 / 1.2.0) için yeni AAB bu değişiklikle oluşturulmadı; PR birleştirildikten sonra AAB yeniden alınmalı.
