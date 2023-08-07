<script lang="ts" setup>
defineProps(["id", "componentName", "space", "cloudinaryImage"]);
</script>

<template>
  <!-- <CldImage
    :width="cloudinaryImage.width"
    :height="cloudinaryImage.height"
    :src="cloudinaryImage.public_id"
    sizes="50vw"
    layout="constrained"
    :alt="cloudinaryImage?.context?.custom?.alt || ''"
    class="fancy-image"
    :class="space ? 'mb-8' : 'mb-4'"
  /> -->

  <img
    :src="
      cloudinaryImage.secure_url.replace(
        `v${cloudinaryImage.version}`,
        'q_auto,f_auto/c_limit,w_auto'
      )
    "
    :alt="cloudinaryImage?.context?.custom?.alt || ''"
    :width="cloudinaryImage.width"
    :height="cloudinaryImage.height"
    class="fancy-image"
    :class="space ? 'mb-8' : 'mb-4'"
  />
</template>
