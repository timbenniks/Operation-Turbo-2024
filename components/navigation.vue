<script setup lang="ts">
const { pages } = await GqlPages();
</script>
<template>
  <button
    class="nav-toggle relative h-12 w-12 bg-white lg:hidden mt-6"
    onclick="this.classList.toggle('open')"
  >
    <span class="sr-only">Open main menu</span>
    <div
      class="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <span
        class="line-1 -translate-y-1.5 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
      <span
        class="line-2 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
      <span
        class="line-3 translate-y-1.5 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
    </div>
  </button>
  <ul
    class="hidden mt-8 lg:mt-28 font-bold text-md space-y-2 navigation lg:block"
  >
    <li class="mb-4 hidden lg:block">
      <nuxt-link to="/" rel="noopener" title="Tim's Logo"><tim /></nuxt-link>
    </li>
    <li v-for="page in pages" :key="page.id">
      <nuxt-link :to="`${page.slug == 'home' ? '/' : `/${page.slug}`}`">{{
        page.navigationLabel
      }}</nuxt-link>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.nav-toggle.open + ul {
  @apply block;
}

.nav-toggle.open .line-1 {
  @apply rotate-45 translate-y-0;
}

.nav-toggle.open .line-2 {
  @apply opacity-0;
}

.nav-toggle.open .line-3 {
  @apply -rotate-45 translate-y-0;
}
</style>
