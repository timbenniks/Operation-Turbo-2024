<script lang="ts" setup>
const slug = "writing";
const title = "Writing";
const page = await useGQLQuery("page", { slug });
useOGTags(page);

//import type { ArticlesQueryVariables } from "#gql";

// const options: ArticlesQueryVariables = {
//   username: "timbenniks",
//   per_page: 10,
//   collection_id: 22300,
// };

// const res = await GqlArticles(options);
// const articles = res.articledatacollection?.articles;
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />

      <!-- <ul class="grid gap-12 grid-cols-2">
        <li
          v-for="article in articles"
          :key="(article?.published_timestamp as string)"
        >
          <h3
            v-if="article?.title"
            class="font-bold text-white mb-2 text-xl underline"
          >
            <a v-if="article?.url" :href="article?.url" target="_blank">{{
              article?.title
            }}</a>
          </h3>
          <p v-if="article?.description" class="line-clamp-2 mb-8">
            {{ article?.description }}
          </p>
          <img v-if="article?.image" :src="article?.image" loading="lazy" />
        </li>
      </ul> -->

      <articles-list
        username="timbenniks"
        :per-page="20"
        :collection-id="22300"
        title="Work articles"
        see-all-link="https://dev.to/timbenniks"
        :show-per-page="false"
        :columns="2"
      />
    </main>
  </div>
</template>
