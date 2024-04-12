<script lang="ts" setup>
const slug = "about";
const title = "About Tim";

const page = await useGQLQuery("page", { slug });
useOGTags(page);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[900px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />
    </main>
  </div>
</template>
