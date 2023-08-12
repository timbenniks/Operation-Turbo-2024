<script setup lang="ts">
const { pages } = await GqlPages();
</script>
<template>
  <footer class="p-12 bg-slate-950">
    <ul
      class="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 font-bold text-md items-center"
    >
      <li><tim /></li>
      <li v-for="page in pages" :key="page.id">
        <nuxt-link :to="`${page.slug == 'home' ? '/' : `/${page.slug}`}`">{{
          page.navigationLabel
        }}</nuxt-link>
      </li>
    </ul>
  </footer>
</template>
