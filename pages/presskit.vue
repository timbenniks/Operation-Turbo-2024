<script lang="ts" setup>
const slug = "presskit";
const title = "Press kit";

const page = await useGQLQuery("page", { slug });
useOGTags(page);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />
      <speaker-details />

      <speaker-media />

      <talks-list
        playlist-id="PLkmdKA3C-iOOvftzsLWsfTy6X7MoteT5e"
        :per-page="100"
        title="Talks"
        :show-per-page="false"
        :columns="3"
      />
    </main>
  </div>
</template>
