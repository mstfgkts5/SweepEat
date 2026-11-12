# HASAT-13 poster kaynağı

- `poster.tpl.html`: poster şablonu (LOGOPATH ve /*FONTS*/ build sırasında doldurulur; logo `brand/kaydirak_mark_white.svg`).
- `build.sh` + `render.cjs`: HTML'yi 50×70 cm tek sayfa PDF'ye çevirir (Playwright). `POSTERDIR` yerine bu klasörün yolunu yazın.
- `scen.cjs`: telefon ekran görüntülerini (Gaziantep + Sıfır Atık senaryosu) uygulamadan çeker (`npx vite preview --port 4173` açıkken).
- `fonts.css`: gömülü Outfit yazı tipi (SIL OFL).
