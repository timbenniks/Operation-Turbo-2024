<script lang="ts" setup>
defineProps(["id", "componentName", "space", "copy"]);
</script>

<template>
  <div :class="space ? 'mb-8' : 'mb-4'">
    <div v-html="copy.html" />
  </div>
</template>
