// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {baseURL: '/notes-app/'},
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image"],
  routeRules: {
    '/': { prerender: true }
  }
})