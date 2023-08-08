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
</script>

<template>
  <NuxtPage />
</template>
