// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  // THIS IS THE ONLY THING YOU NEED — FIXES "NO RESULTS" FOREVER
  runtimeConfig: {
    public: {
      // Your working Consumet backend (ROOT URL only)
      apiBase: "https://apiconsumet12369.vercel.app"
      // Code will automatically add /anime/gogoanime/home, /search, etc.
    }
  },

  compatibilityDate: "2024-07-30"
})
