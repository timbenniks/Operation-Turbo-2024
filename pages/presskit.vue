<script lang="ts" setup>
const slug = "presskit";
const title = "Press kit";

await useMetaData(slug);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />
    </main>
  </div>
</template>
