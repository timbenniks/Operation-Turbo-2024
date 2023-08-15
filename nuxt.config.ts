export default defineNuxtConfig({
  experimental: {
    noScripts: true
  },

  routeRules: {
    '/**': { isr: true }
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
