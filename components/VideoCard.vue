<script lang="ts" setup>
const props = defineProps(["title", "videoId", "description", "image", "date"]);

const url = computed(() => {
  return `https://youtube.com/watch?v=${props.videoId}`;
});

const gotoUrl = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <li @click="gotoUrl(url)" class="cursor-pointer">
    <div class="w-full aspect-[16/9] mb-4">
      <img
        :src="`https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/c_limit,w_auto/${image}`"
        :alt="title"
        width="310"
        height="175"
        class="fancy-image w-full object-cover aspect-[16/9]"
        loading="lazy"
      />
    </div>

    <p>
      <a
        :href="url"
        rel="noopener"
        target="_blank"
        class="font-medium text-lg hover:text-pink-500 line-clamp-1"
      >
        {{ title }}
      </a>
    </p>
    <p class="mb-2 text-sm line-clamp-2">{{ description }}</p>
  </li>
</template>
