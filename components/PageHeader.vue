<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

useJsonld({
  // @ts-ignore
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  // @ts-ignore
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://timbenniks.dev",
        name: "Tim Benniks",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": `https://timbenniks.dev/${props.slug}`,
        name: props.title,
      },
    },
  ],
});
</script>

<template>
  <header class="mb-8">
    <p>
      <nuxt-link to="/" class="underline text-pink-500"
        >&larr; back home</nuxt-link
      >
    </p>
    <h1 class="text-slate-200 font-bold text-3xl md:text-4xl">{{ title }}</h1>
  </header>
</template>
