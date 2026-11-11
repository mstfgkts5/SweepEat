# Kaydırak – kaldığımız yer (11 Kasım 2026)

Yeni bir sohbette bu dosyayı Claude'a gösterin; önceki konuşmaları hatırlamaz.

## Durum
- Play Console: Alpha (kapalı test) kanalında sürüm 7 (1.1.0) incelemede/yayında. Üretim taslağında eski sürüm 6 duruyor; onu GÖNDERMEYİN, üretime geçerken Alpha'daki sürümü "Sürümü yükselt → Üretim" ile taşıyın.
- Kodda hazır ama henüz AAB'si alınmamış: sürüm kodu 8, sürüm adı 1.2.0
  - Her modda 50 yemek (src/data/modeLists.ts), yeni popüler yemekler (src/data/popularFood.ts)
  - Turist modunda şehrin yöresel yemekleri ilk 20'de (src/data/localDishes.ts)
  - Diyarbakır ve Kahramanmaraş restoranları (src/data/extraCities.ts)
  - 33 yeni fotoğraf, lisansları IMAGE_CREDITS.md'de

## Sıradaki adımlar
1. Sürüm 7 incelemesi bitince: `npm run build` → `npx cap sync android` → Android Studio'da Generate Signed Bundle
   (keystore: C:\Users\mstfg\OneDrive\Desktop\sweepeat-key.jks, alias: key0; şifre Android Studio'da kayıtlı).
   Yüklemeden önce AAB'nin imzasını (SHA-1 C5:81:14:8B:...:E9:12) ve sürüm kodunu (8) kontrol ettirin.
2. Bazı yemek–restoran eşleşmelerindeki hataları düzeltmek (kazanan ekranındaki "En İyi 3 Restoran").
3. Mağaza girişi: ad, ikon (brand/playstore_icon_512.png), öne çıkan grafik (brand/feature_graphic_1024x500.png), açıklamalar, ekran görüntüleri.
4. Satıcı statüsü beyanı (Play Console'daki mavi band).
5. Değişiklikleri GitHub'a gönderin: `git add -A` → `git commit` → `git push`.

## Bilinmesi gerekenler
- Proje klasörü: C:\Users\mstfg\MobilProjeler\SweepEat1 (masaüstündeki OneDrive kopyası eski).
- C:\Users\mstfg\.gradle\init.d\toolchains.gradle bu projeyi Java 17'ye zorlamasın diye düzenlendi; geri almayın.
- photo-candidates klasörü silinebilir (git'e girmiyor).
