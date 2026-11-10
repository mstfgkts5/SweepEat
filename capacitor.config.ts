import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mustafagoktas.sweepeat',
  appName: 'Kaydırak',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;