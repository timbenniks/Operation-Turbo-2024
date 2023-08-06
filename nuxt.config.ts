export default defineNuxtConfig({
  experimental: {
    noVueServer: false
  },
  nitro: {
    prerender: {
      routes: ["/"]
    }
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-graphql-client', '@nuxtjs/cloudinary'],

  head: {
    htmlAttrs: {
      lang: "en",
    },
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
