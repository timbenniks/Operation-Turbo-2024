export default defineNuxtConfig({
  experimental: {
    // noVueServer: true
    // componentIslands: true,
  },
  nitro: {
    prerender: {
      routes: ["/"]
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-graphql-client', 'nuxt-jsonld'],

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,

    families: {
      Inter: [400, 500, 700],
    }
  }
})
