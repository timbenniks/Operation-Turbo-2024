<script lang="ts" setup>
defineProps(["id", "componentName", "space", "cloudinaryImage"]);
</script>

<template>
  <cloudinary-image
    :image="cloudinaryImage"
    loading="eager"
    :class="space ? 'mb-8' : 'mb-4'"
  />
</template>
