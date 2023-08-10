<script setup lang="ts">
import { getComponentForName } from "../components/componentMapper";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const page = await useGQLQuery("page", { slug: props.slug });
</script>

<template>
  <section class="mb-12" v-if="page?.blocks">
    <component
      v-for="block in page?.blocks"
      :is="getComponentForName(block?.componentName)"
      :key="(block?.id as string)"
      v-bind="block"
    />
  </section>
</template>
