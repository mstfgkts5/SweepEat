import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020', // 👈 WebView'ın kodları hatasız okuması için hedefi netleştiriyoruz
    minify: 'terser', // Kod sıkıştırmada çıkabilecek sözdizimi hatalarını engeller
    cssCodeSplit: false // Tüm CSS'i tek dosyada toplayarak yükleme kilitlerini çözer
  }
})