import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'

// Dish photos present in public/images. The app hides a dish whose photo is missing,
// so adding a photo file (and rebuilding / restarting `npm run dev`) makes the dish appear.
const dishImages = (() => {
  try {
    return readdirSync(new URL('./public/images', import.meta.url))
  } catch {
    return [] as string[]
  }
})()

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  define: {
    __DISH_IMAGES__: JSON.stringify(dishImages)
  },
  build: {
    target: 'es2020', // 👈 WebView'ın kodları hatasız okuması için hedefi netleştiriyoruz
    minify: 'terser', // Kod sıkıştırmada çıkabilecek sözdizimi hatalarını engeller
    cssCodeSplit: false // Tüm CSS'i tek dosyada toplayarak yükleme kilitlerini çözer
  }
})