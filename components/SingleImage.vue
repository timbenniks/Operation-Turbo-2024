<script lang="ts" setup>
defineProps(["id", "componentName", "cloudinaryImage"]);
</script>

<template>
  <div class="mb-8">
    <p font="font-bold">Single Image component</p>
    <p>{{ id }} - {{ componentName }}</p>
  </div>
</template>
