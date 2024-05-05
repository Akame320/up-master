// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["./public/assets/css/main.css", "./public/assets/css/fonts.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  dir: {
    pages: "public/pages",
    middleware: "server/middleware",
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
});
