import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig: {

  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
