<script lang="ts" setup>
import type {
  ArticlesQueryVariables,
  PageQuery,
  PlaylistQueryVariables,
  PageQueryVariables,
  TalksQueryVariables,
} from "#gql";

import type { MetaObject } from "nuxt/schema";
import { metaData } from "../helpers";

const { page } = await GqlPage(<PageQueryVariables>{ slug: "home" });
const { talks } = await GqlTalks(<TalksQueryVariables>{ first: 5 });

const articleData = await GqlArticles(<ArticlesQueryVariables>{
  username: "timbenniks",
  per_page: 5,
  collection_id: 22300,
});

const videoData = await GqlPlaylist(<PlaylistQueryVariables>{
  playlist_id: "UULFbQu3ix36SHZjcD57BK7KUQ",
  per_page: 3,
});

const articles = computed(() => articleData.articledatacollection?.articles);
const videos = computed(() => videoData.videoDataCollection?.videos);

useSeoMeta(metaData("home", page as PageQuery) as MetaObject);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1440px] wrapper">
    <section class="mb-8 lg:mb-0">
      <div class="static lg:sticky lg:top-12">
        <hero />
        <navigation />
      </div>
    </section>
    <main class="pr-4 md:pr-12 pt-6">
      <section class="mb-12">
        <block-slot :blocks="page?.blocks" />
      </section>

      <div class="mb-16">
        <h2 class="text-slate-200 font-medium text-3xl mb-4">Latest Videos</h2>

        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <video-card
            v-for="video in videos"
            :key="video?.videoId as string"
            v-bind="video"
          />
        </ul>
      </div>

      <two-column class="mb-16">
        <template v-slot:sidea>
          <h2 class="text-slate-200 font-medium text-3xl mb-8">Latest talks</h2>
          <ul>
            <talk-card v-for="talk in talks" :key="talk.id" v-bind="talk" />
          </ul>
        </template>

        <template v-slot:sideb>
          <h2 class="text-slate-200 font-medium text-3xl mb-8">
            Latest Articles
          </h2>
          <ul>
            <article-card
              v-for="article in articles"
              :key="article?.published_timestamp as string"
              v-bind="article"
            />
          </ul>
        </template>
      </two-column>
    </main>
  </div>
</template>
