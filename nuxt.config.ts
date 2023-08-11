export default defineNuxtConfig({
  experimental: {
    // noVueServer: true
    // componentIslands: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      concurrency: 1
    }
  },

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
