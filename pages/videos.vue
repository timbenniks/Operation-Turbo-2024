<script lang="ts" setup>
const slug = "videos";
const title = "Videos";

const page = await useGQLQuery("page", { slug });
useOGTags(page);
</script>

<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:ml-12 max-w-[1280px]">
    <main class="pr-4 md:pr-12 pt-6">
      <page-header :title="title" :slug="slug" />
      <blocks-list :slug="slug" />

      <videos-list
        playlist-id="UULFbQu3ix36SHZjcD57BK7KUQ"
        :per-page="9"
        title="YouTube videos"
        see-all-link="https://www.youtube.com/@timbenniks"
        :show-per-page="true"
      />

      <videos-list
        playlist-id="UULFtNZi1LgSHY1dzSUazplEPg"
        :per-page="5"
        title="Middleware Productions"
        see-all-link="https://www.youtube.com/@middlewareproductions"
        :show-per-page="false"
      />

      <videos-list
        playlist-id="PLcoeeDyxakhXjJQe4r2b9JRXKUmbW4XOU"
        :per-page="9"
        title="Uniform videos"
        see-all-link="https://www.youtube.com/@UniformDXCP"
        :show-per-page="true"
      />
    </main>
  </div>
</template>
