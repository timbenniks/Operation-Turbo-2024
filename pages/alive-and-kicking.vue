<script lang="ts" setup>
const slug = "alive-and-kicking";
const title = "Alive and kicking";

await useMetaData(slug);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[900px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />
    </main>
  </div>
</template>
