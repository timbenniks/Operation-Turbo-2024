<script lang="ts" setup>
import { isDateBeforeToday } from "../helpers";

const props = defineProps([
  "conference",
  "talk",
  "location",
  "date",
  "id",
  "link",
]);

const computedDate = computed(() => {
  return new Date(props.date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
});

const upcoming = ref(!isDateBeforeToday(new Date(props.date)));
</script>

<template>
  <li class="pb-6 mb-6 border-b border-b-slate-700">
    <p v-if="upcoming" class="text-pink-500 text-sm">Upcoming</p>
    <p>
      <a
        :href="link"
        rel="noopener"
        target="_blank"
        class="font-medium text-lg hover:text-pink-500"
      >
        {{ conference }}
      </a>
    </p>
    <p class="mb-2 text-sm">{{ talk }}</p>
    <p class="space-x-2">
      <span
        class="inline-block rounded-full bg-pink-400/10 px-3 py-1 text-xs font-medium leading-5 text-pink-300"
      >
        {{ computedDate }}
      </span>
      <span class="text-sm">
        {{ location }}
      </span>
    </p>
  </li>
</template>
