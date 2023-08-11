<script lang="ts" setup>
const props = defineProps({
  title: { type: String },
  collection_id: { type: Number },
  description: { type: String },
  image: { type: String },
  published_timestamp: { type: String },
  url: { type: String },
});

const computedDate = computed(() => {
  return new Date(props.published_timestamp as string).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
});

const gotoUrl = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <li class="mb-10 flex cursor-pointer" @click="gotoUrl(url as string)">
    <div class="aspect-[16/9] mr-2 w-2/5">
      <img
        :src="`https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/c_fill,ar_16:9,w_620/${image}`"
        :alt="title"
        width="310"
        height="175"
        class="fancy-image w-full object-contain aspect-[16/9]"
        loading="lazy"
      />
    </div>

    <div class="w-3/5">
      <p>
        <a
          :href="url"
          rel="noopener"
          target="_blank"
          class="font-medium text-lg hover:text-pink-500 line-clamp-1"
        >
          {{ title }}
        </a>
      </p>
      <p class="mb-2 text-sm line-clamp-2">{{ description }}</p>
      <p class="space-x-2">
        <span
          class="inline-block rounded-full bg-pink-400/10 px-3 py-1 text-xs font-medium leading-5 text-pink-300"
        >
          {{ computedDate }}
        </span>
      </p>
    </div>
  </li>
</template>
