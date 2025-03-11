export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/db/index.ts']
  },
  compatibilityDate: '2025-02-24',  // Update to today's date
  devtools: { enabled: true },
  css: ['@/assets/css/global.css']
});
