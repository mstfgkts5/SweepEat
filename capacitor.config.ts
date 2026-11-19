import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mustafagoktas.sweepeat',
  appName: 'Kaydırak',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // Only Google sign-in is used; the other providers are left out of the app.
    SocialLogin: {
      providers: {
        google: true,
        facebook: false,
        apple: false,
        twitter: false
      },
      logLevel: 1
    }
  }
};

export default config;