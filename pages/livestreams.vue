<script lang="ts" setup>
const slug = "livestreams";
const title = "Live Streams";
const page = await useGQLQuery("page", { slug });
useOGTags(page);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />

      <videos-list
        playlist-id="PLkmdKA3C-iOOvftzsLWsfTy6X7MoteT5e"
        :per-page="9"
        title="Unpack the stack"
        see-all-link="https://www.youtube.com/playlist?list=PLkmdKA3C-iOOvftzsLWsfTy6X7MoteT5e"
        :show-per-page="false"
      />

      <videos-list
        playlist-id="PLkmdKA3C-iOM5taAQBkkVAT5gNYncvM8d"
        :per-page="9"
        title="Composable without compromise"
        see-all-link="https://www.youtube.com/playlist?list=PLkmdKA3C-iOM5taAQBkkVAT5gNYncvM8d"
        :show-per-page="false"
      />

      <videos-list
        playlist-id="PLcoeeDyxakhUjCjDvx_KD1acuDgVLg71h"
        :per-page="9"
        title="Composable CMS Evaluation"
        see-all-link="https://www.youtube.com/playlist?list=PLcoeeDyxakhUjCjDvx_KD1acuDgVLg71h"
        :show-per-page="false"
      />

      <videos-list
        playlist-id="PLcoeeDyxakhVM-xWfqWZ6TFpqC1Aw5__N"
        :per-page="9"
        title="Other streams"
        see-all-link="https://www.youtube.com/playlist?list=PLcoeeDyxakhVM-xWfqWZ6TFpqC1Aw5__N"
        :show-per-page="false"
      />
    </main>
  </div>
</template>
