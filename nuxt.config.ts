export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    'nuxt-jsonld',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    'nuxt-seo-experiments',
    '@vite-pwa/nuxt'
  ],

  experimental: {
    noScripts: true
  },

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

  site: {
    url: 'https://timbenniks.dev',
  },

  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    manifest: {
      name: 'Tim Benniks',
      short_name: "timbenniks",
      description: 'Tim Benniks: developer relations, video creator, speaker',
      theme_color: '#ec4899',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  }
})
