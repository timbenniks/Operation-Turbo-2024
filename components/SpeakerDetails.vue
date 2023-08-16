<script setup lang="ts">
const deets = [
  { label: "Name", val: "Tim Benniks" },
  {
    label: "Company",
    val: "Hygraph",
    link: "https://hygraph.com",
  },
  {
    label: "Title",
    val: "Developer Relations Lead for outreach and awareness",
  },
  { label: "Location", val: "Greater Toulouse Metropolitan Area, France" },
  { label: "E-mail", val: "timbenniks.dev@gmail.com" },
  {
    label: "Website",
    val: "https://timbenniks.dev",
    link: "https://timbenniks.dev",
  },
];
</script>

<template>
  <h3 class="text-slate-200 font-medium text-3xl mb-4">Speaker details</h3>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 bg-slate-950 p-8">
    <li v-for="dd in deets" :key="dd.label">
      <dl>
        <dt class="text-2xl font-medium text-pink-500 mb-2">
          {{ dd.label }}
        </dt>
        <dd class="text-xl" v-if="dd.link">
          <a :href="dd.link" target="_blank" rel="noopener">{{ dd.val }}</a>
        </dd>
        <dd class="text-xl" v-else>{{ dd.val }}</dd>
      </dl>
    </li>
  </ul>
</template>
