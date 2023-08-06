<script lang="ts" setup>
import { mapping } from "../components/componentMapper";
import { metaData } from "../helpers";

const { page } = await GqlPage({ slug: "home" });
const { talks } = await GqlTalks({ first: 5 });

// @ts-ignore
useSeoMeta(metaData("home", page));
</script>

<template>
  <div class="mt-4 ml-4 md:mt-12 md:ml-12 max-w-[1440px] wrapper">
    <section>
      <hero />
      <navigation />
    </section>
    <main class="pr-12 pt-6">
      <component
        v-for="block in page?.blocks"
        :is="mapping[block?.componentName]"
        :key="(block?.id as string)"
        v-bind="block"
      />

      <div class="mt-12">
        <h2 class="text-slate-200 font-medium text-3xl mb-8">Latest talks</h2>
        <ul>
          <talk v-for="talk in talks" :key="talk.id" v-bind="talk" />
        </ul>
      </div>
    </main>
  </div>
</template>
