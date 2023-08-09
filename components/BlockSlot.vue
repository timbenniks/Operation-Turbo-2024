<script setup lang="ts">
import { getComponentForName } from "../components/componentMapper";

defineProps(["blocks"]);
</script>

<template>
  <component
    v-for="block in blocks"
    :is="getComponentForName(block?.componentName)"
    :key="(block?.id as string)"
    v-bind="block"
  />
</template>
