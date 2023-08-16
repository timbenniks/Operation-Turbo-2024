<script lang="ts" setup>
await useMetaData("home");
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
      <blocks-list slug="home" />
      <videos-list
        playlist-id="UULFbQu3ix36SHZjcD57BK7KUQ"
        :per-page="3"
        header-type="h2"
        title="Latest videos"
      />
      <two-column>
        <template v-slot:sidea>
          <talks-list :per-page="5" title="Latest Talks" />
        </template>
        <template v-slot:sideb>
          <articles-list
            username="timbenniks"
            :per-page="5"
            title="Latest Articles"
          />
        </template>
      </two-column>
    </main>
  </div>
</template>
