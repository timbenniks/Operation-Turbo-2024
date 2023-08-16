<script lang="ts" setup>
useHead({
  meta: [
    { "http-equiv": "accept-ch", content: "dpr, viewport-width, width" },
    {
      "http-equiv": "delegate-ch",
      content:
        "sec-ch-width https://res.cloudinary.com; sec-ch-dpr https://res.cloudinary.com; sec-ch-viewport-width https://res.cloudinary.com;",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      src: "https://plausible.io/js/plausible.js",
      defer: true,
      async: true,
      "data-domain": "timbenniks.dev",
    },
  ],
});

useJsonld({
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://timbenniks.dev",
  name: "Tim Benniks: developer relations, video creator, speaker",
  alternateName: "Tim Benniks",
});
</script>

<template>
  <VitePwaManifest />
  <NuxtPage />
  <GlobalFooter />
</template>
