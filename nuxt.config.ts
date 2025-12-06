// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",  // This loads the UI components—installs via npm
    "@pinia/nuxt"  // State management (keep if using Pinia for watchlist)
  ],
  css: ["~/assets/css/main.css"],  // Your custom styles

  // API CONFIG — FIXES "NO RESULTS" WITH YOUR BACKEND
  runtimeConfig: {
    public: {
      apiBase: "https://apiconsumet12369.vercel.app"  // Root URL; code appends /anime/gogoanime/home
    }
  },

  compatibilityDate: "2024-07-30"
})
