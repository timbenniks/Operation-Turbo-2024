export default defineNuxtConfig({
  experimental: {
    //componentIslands: true
    noScripts: true
  },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     interval: 1000,
  //     concurrency: 1
  //   }
  // },

  routeRules: {
    '/': { isr: true },
    '/about': { isr: true },
    '/videos': { isr: true },
    '/writing': { isr: true },
    '/livestreams': { isr: true },
    '/speaking': { isr: true },
    '/presskit': { isr: true },
    '/alive-and-kicking': { isr: true },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    'nuxt-jsonld',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'nuxt-seo-experiments'
  ],

  buildModules: [
    '@nuxtjs/pwa'
  ],

  site: {
    url: 'https://timbenniks.dev',
  },

  pwa: {
    manifest: {
      name: 'Tim Benniks',
      short_name: "Tim Benniks",
      lang: 'en',
      useWebmanifestExtension: false
    }
  },
})
