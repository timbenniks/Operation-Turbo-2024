export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-graphql-client', '@nuxtjs/cloudinary'],

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,

    families: {
      Inter: [400, 500, 700],
    }
  }

})
