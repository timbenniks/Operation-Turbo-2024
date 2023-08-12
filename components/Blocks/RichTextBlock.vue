<script lang="ts" setup>
defineProps(["id", "componentName", "space", "copy"]);
</script>

<template>
  <div :class="space ? 'mb-8' : 'mb-4'">
    <div
      v-html="copy.html"
      class="prose prose-h2:text-slate-200 prose-h2:text-3xl prose-h2:font-medium prose-h3:text-slate-200 prose-h3:text-3xl prose-h3:mb-4 prose-p:md-4 max-w-4xl prose-p:text-slate-400 prose-a:text-white prose-a:no-underline hover:prose-a:text-slate-400 hover:prose-a:underline"
    />
  </div>
</template>
