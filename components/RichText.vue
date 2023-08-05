<script lang="ts" setup>
defineProps(["id", "componentName", "copy"]);
</script>

<template>
  <div class="mb-8">
    <p font="font-bold">Rich Text component</p>
    <p>{{ id }} - {{ componentName }}</p>
  </div>
</template>
