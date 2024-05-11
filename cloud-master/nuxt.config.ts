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
    dbName: 'NUXT_DB_NAME', // `dev_token` is the default value
    dbUser: 'NUXT_DB_USER', // `dev_token` is the default value
    dbPassword: 'NUXT_DB_PASSWORD', // `dev_token` is the default value
  },
})
