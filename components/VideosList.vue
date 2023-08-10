<script setup lang="ts">
const props = defineProps({
  playlistId: {
    type: String,
    required: true,
  },
  perPage: {
    type: Number,
    default: 9,
  },
  showPerPage: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  seeAllCopy: {
    type: String,
    default: "See all →",
  },
  headerType: {
    type: String,
    default: "h3",
  },
  seeAllLink: {
    type: String,
  },
});

const videos = await useGQLQuery("videos", {
  playlist_id: props.playlistId,
  per_page: props.perPage,
});
</script>

<template>
  <div class="mb-16">
    <header class="mb-4">
      <component
        :is="headerType"
        class="text-slate-200 font-medium text-3xl"
        :class="seeAllLink ? 'inline' : ''"
      >
        {{ title }} <span v-if="showPerPage">({{ perPage }})</span>
      </component>
      <p class="ml-2 inline" v-if="seeAllLink">
        <a
          :href="seeAllLink"
          rel="noopener"
          target="_blank"
          class="underline"
          >{{ seeAllCopy }}</a
        >
      </p>
    </header>

    <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <video-card
        v-for="video in videos"
        :key="(video?.videoId as string)"
        v-bind="video"
      />
    </ul>
  </div>
</template>
