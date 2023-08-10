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
  <NuxtPage />
</template>
