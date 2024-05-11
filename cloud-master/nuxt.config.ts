// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/css/main.css', './assets/css/fonts.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  dir: {
    middleware: 'server/middleware',
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],

  runtimeConfig: {
    dbName: 'NUXT_DB_NAME',
    dbUser: 'NUXT_DB_USER',
    dbPassword: 'NUXT_DB_PASSWORD',
  },
})
