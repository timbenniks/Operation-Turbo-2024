export default defineNuxtConfig({
  experimental: {
    noVueServer: true
    // componentIslands: true,
  },
  nitro: {
    prerender: {
      routes: ["/"]
    }
  },

  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-graphql-client', 'nuxt-jsonld'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dwfcofnrd/image/upload/'
    }
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
