<script lang="ts" setup>
defineProps(["id", "componentName", "space", "cloudinaryImage"]);
</script>

<template>
  <CldImage
    :width="cloudinaryImage.width"
    :height="cloudinaryImage.height"
    :src="cloudinaryImage.public_id"
    sizes="100vw"
    :alt="cloudinaryImage?.context?.custom?.alt"
    class="fancy-image"
    :class="space ? 'mb-8' : 'mb-4'"
  />
</template>
