<script lang="ts" setup>
import RichText from "../components/RichText.vue";
import SingleImage from "../components/SingleImage.vue";

const route = useRoute();
const { slug } = route.params;
const computedSlug = slug ? slug : "home";
const { page } = await GqlPage({ slug: computedSlug as string });

useSeoMeta({
  title: page?.ogTitle,
  ogTitle: page?.ogTitle,
  description: page?.ogDescription,
  ogDescription: page?.ogDescription,
  ogImage: page?.ogImage.secure_url.replace(
    `v${page?.ogImage.version}`,
    "q_auto,f_auto,w_1280"
  ),
  ogSiteName: "Tim Benniks",
  ogType: "website",
  twitterCard: "summary_large_image",
  googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
});

const mapping = {
  RichText: RichText,
  SingleImage: SingleImage,
};
</script>

<template>
  <div class="mt-4 ml-4 md:mt-12 md:ml-12 max-w-7xl wrapper">
    <section class="sidebar">
      <hero />
      <navigation />
    </section>
    <main class="content">
      <component
        :is="mapping[block?.componentName]"
        v-for="block in page?.blocks"
        :key="(block?.id as string)"
        v-bind="block"
      />
    </main>
  </div>
</template>
