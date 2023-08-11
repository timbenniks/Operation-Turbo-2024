export default defineNuxtConfig({
  experimental: {
    //  noVueServer: true
    componentIslands: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      interval: 1000,
      concurrency: 1
    }
  },

  // routeRules: {
  //   '/': { isr: true },
  //   '/about': { isr: true },
  //   '/videos': { isr: true },
  //   '/writing': { isr: true },
  //   '/livestreams': { isr: true },
  //   '/speaking': { isr: true },
  //   '/presskit': { isr: true },
  //   '/alive-and-kicking': { isr: true },
  // },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-graphql-client',
    'nuxt-jsonld',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'nuxt-seo-experiments'
  ],

  site: {
    url: 'https://timbenniks.dev',
  },

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,

    families: {
      Inter: [400, 500, 700],
    }
  }
})
