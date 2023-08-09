<script lang="ts" setup>
defineProps([
  "id",
  "componentName",
  "space",
  "title",
  "description",
  "sideA",
  "sideB",
]);
</script>

<template>
  <div :class="space ? 'mb-8' : 'mb-4'">
    <h3 v-if="title" class="text-slate-200 font-medium text-3xl mb-4">
      {{ title }}
    </h3>
    <div
      v-if="description && description.html"
      v-html="description.html"
      class="mb-8 prose prose-p:md-4 max-w-none prose-p:text-slate-400 prose-a:text-white prose-a:no-underline hover:prose-a:text-slate-400 hover:prose-a:underline"
    />
    <two-column class="mb-16">
      <template v-slot:sidea>
        <block-slot :blocks="sideA" />
      </template>

      <template v-slot:sideb>
        <block-slot :blocks="sideB" />
      </template>
    </two-column>
  </div>
</template>
