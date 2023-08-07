<script setup lang="ts">
defineProps(["image", "alt", "loading", "basewidth"]);
</script>

<template>
  <div class="w-full aspect-video">
    <img
      :src="
        image.secure_url.replace(
          `v${image.version}`,
          'q_auto,f_auto/c_limit,w_auto'
        )
      "
      :alt="alt || image?.context?.custom?.alt || ''"
      :width="basewidth || 960"
      :height="(basewidth || 960) * (image.height / image.width)"
      class="fancy-image w-full object-cover"
      :loading="loading || 'lazy'"
    />
  </div>
</template>
