<script lang="ts" setup>
import { mapping } from "../components/componentMapper";
import { metaData } from "../helpers";

const { page } = await GqlPage({ slug: "about" });

// @ts-ignore
useSeoMeta(metaData("about", page));

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
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1440px] wrapper">
    <section class="mb-8 lg:mb-0">
      <div class="static lg:sticky lg:top-12">
        <hero />
        <navigation />
      </div>
    </section>
    <main class="pr-4 md:pr-12 pt-6">
      <section class="mb-12">
        <component
          v-for="block in page?.blocks"
          :is="mapping[block?.componentName]"
          :key="(block?.id as string)"
          v-bind="block"
        />
      </section>
    </main>
  </div>
</template>
