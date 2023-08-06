<script lang="ts" setup>
const props = defineProps(["title", "videoId", "description", "image", "date"]);
</script>

<template>
  <li>
    <CldImage
      width="310"
      height="175"
      crop="limit"
      :src="image"
      sizes="310px"
      :alt="title"
      class="fancy-image md:mr-2 mb-4"
      delivery-type="fetch"
    />

    <p>
      <a
        :href="videoId"
        rel="noopener"
        target="_blank"
        class="font-medium text-lg hover:text-pink-600 line-clamp-1"
      >
        {{ title }}
      </a>
    </p>
    <p class="mb-2 text-sm line-clamp-2">{{ description }}</p>
  </li>
</template>
