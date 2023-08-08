<script lang="ts" setup>
import { mapping } from "../components/componentMapper";
import { metaData } from "../helpers";

const { page } = await GqlPage({ slug: "about" });

// @ts-ignore
useSeoMeta(metaData("about", page));
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <header class="mb-12">
        <p>
          <nuxt-link to="/" class="underline text-pink-500"
            >&larr; back home</nuxt-link
          >
        </p>
        <h1 class="text-slate-200 font-bold text-3xl md:text-4xl">About Tim</h1>
      </header>
      <section class="mb-12">
        <component
          v-for="block in page?.blocks"
          :is="mapping[block?.componentName]"
          :key="(block?.id as string)"
          v-bind="block"
        />
      </section>
    </main>
  </div>
</template>
