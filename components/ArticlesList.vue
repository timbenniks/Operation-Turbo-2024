<script setup lang="ts">
import type { ArticlesQueryVariables } from "#gql";

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  collectionId: {
    type: Number,
  },
  perPage: {
    type: Number,
    default: 9,
  },
  showPerPage: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  seeAllCopy: {
    type: String,
    default: "See all →",
  },
  headerType: {
    type: String,
    default: "h3",
  },
  seeAllLink: {
    type: String,
  },
});

const options: ArticlesQueryVariables = {
  username: props.username,
  per_page: props.perPage,
};

if (props.collectionId) {
  options.collection_id = props.collectionId;
}
const articles = await useGQLQuery("articles", options);
</script>

<template>
  <div class="mb-16">
    <header class="mb-4">
      <component
        :is="headerType"
        class="text-slate-200 font-medium text-3xl"
        :class="seeAllLink ? 'inline' : ''"
      >
        {{ title }} <span v-if="showPerPage">({{ perPage }})</span>
      </component>
      <p class="ml-2 inline" v-if="seeAllLink">
        <a
          :href="seeAllLink"
          rel="noopener"
          target="_blank"
          class="underline"
          >{{ seeAllCopy }}</a
        >
      </p>
    </header>

    <ul>
      <article-card
        v-for="article in articles"
        :key="(article?.published_timestamp as string)"
        v-bind="article"
      />
    </ul>
  </div>
</template>
