/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/components/**/*.{js,vue,ts}",
    "./public/layouts/**/*.vue",
    "./public/pages/**/*.vue",
    "./public/plugins/**/*.{js,ts}",
    "./app.vue",
    "./public/error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}