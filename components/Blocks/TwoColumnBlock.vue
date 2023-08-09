<script lang="ts" setup>
import { mapping } from "../../components/componentMapper";

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
        <component
          v-for="block in sideA"
          :is="mapping[block?.componentName]"
          :key="(block?.id as string)"
          v-bind="block"
        />
      </template>

      <template v-slot:sideb>
        <component
          v-for="block in sideB"
          :is="mapping[block?.componentName]"
          :key="(block?.id as string)"
          v-bind="block"
        />
      </template>
    </two-column>
  </div>
</template>
