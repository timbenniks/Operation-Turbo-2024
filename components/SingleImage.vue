<script lang="ts" setup>
defineProps(["id", "componentName", "space", "cloudinaryImage"]);
</script>

<template>
  <cloudinary-image
    :image="cloudinaryImage"
    loading="lazy"
    :class="space ? 'mb-8' : 'mb-4'"
  />
</template>
