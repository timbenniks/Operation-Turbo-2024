<script setup lang="ts">
const open = ref(false);
</script>
<template>
  <button
    class="relative h-12 w-12 bg-white lg:hidden mt-6"
    v-on:click="open = !open"
  >
    <span class="sr-only">Open main menu</span>
    <div
      class="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <span
        class="absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
        :class="open ? 'rotate-45' : '-translate-y-1.5'"
      ></span>
      <span
        class="absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
        :class="open ? 'opacity-0' : ''"
      ></span>
      <span
        class="absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
        :class="open ? '-rotate-45' : 'translate-y-1.5'"
      ></span>
    </div>
  </button>
  <ul
    :class="open ? 'block' : 'hidden'"
    class="mt-8 lg:mt-28 font-bold text-md space-y-2 navigation lg:block"
  >
    <li class="mb-4 hidden lg:block">
      <nuxt-link to="/" rel="noopener" title="Tim's Logo"><tim /></nuxt-link>
    </li>
    <li><nuxt-link to="/about" rel="noopener">About</nuxt-link></li>
    <li><nuxt-link to="/videos" rel="noopener">Videos</nuxt-link></li>
    <li>
      <nuxt-link to="/livestreams" rel="noopener">Live streams</nuxt-link>
    </li>
    <li><nuxt-link to="/writing" rel="noopener">Writing</nuxt-link></li>
    <li><nuxt-link to="/speaking" rel="noopener">Speaking</nuxt-link></li>
    <li>
      <nuxt-link to="/alive-and-kicking" rel="noopener"
        >Alive and Kicking</nuxt-link
      >
    </li>
    <li><nuxt-link to="/presskit" rel="noopener">Presskit</nuxt-link></li>
  </ul>
</template>
