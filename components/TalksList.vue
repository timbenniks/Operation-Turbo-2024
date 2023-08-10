<script setup lang="ts">
const props = defineProps({
  perPage: {
    type: Number,
    default: 5,
  },
  showPerPage: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  headerType: {
    type: String,
    default: "h3",
  },
  columns: {
    type: Number,
    defaut: 1,
  },
});

const talks = await useGQLQuery("talks", { first: props.perPage });
</script>

<template>
  <div class="mb-16">
    <header class="mb-4">
      <component :is="headerType" class="text-slate-200 font-medium text-3xl">
        {{ title }} <span v-if="showPerPage">({{ perPage }})</span>
      </component>
    </header>

    <ul
      class="grid gap-4 grid-cols-1"
      :class="columns === 3 ? 'md:grid-cols-3' : ''"
    >
      <talk-card v-for="talk in talks" :key="talk.id" v-bind="talk" />
    </ul>
  </div>
</template>
