<script lang="ts" setup>
const slug = "writing";
const title = "Writing";

await useMetaData(slug);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />

      <articles-list
        username="timbenniks"
        :per-page="20"
        :collection-id="22300"
        title="Work articles"
        see-all-link="https://dev.to/timbenniks"
        :show-per-page="false"
        :columns="2"
      />

      <articles-list
        username="timbenniks"
        :per-page="20"
        :collection-id="22299"
        title="Personal articles"
        see-all-link="https://dev.to/timbenniks"
        :show-per-page="false"
        :columns="2"
      />
    </main>
  </div>
</template>
