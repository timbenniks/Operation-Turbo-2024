<script lang="ts" setup>
import { metaData } from "../helpers";
import type { PageQuery } from "#gql";
import type { MetaObject } from "nuxt/schema";

const page = await useGQLQuery("page", { slug: "about" });
useSeoMeta(metaData("about", page as PageQuery) as MetaObject);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1000px]">
    <main class="pr-4 md:pr-12 pt-6">
      <header class="mb-8">
        <p>
          <nuxt-link to="/" class="underline text-pink-500"
            >&larr; back home</nuxt-link
          >
        </p>
        <h1 class="text-slate-200 font-bold text-3xl md:text-4xl">About Tim</h1>
      </header>
      <section class="mb-12">
        <block-slot :blocks="page?.blocks" />
      </section>
    </main>
  </div>
</template>
