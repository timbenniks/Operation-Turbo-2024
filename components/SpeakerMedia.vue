<script lang="ts" setup>
const image1 = computed(() => ({
  secure_url:
    "https://res.cloudinary.com/dwfcofnrd/image/upload/v1659515228/Presskit/IMG_0144.jpg",
  width: 4640,
  height: 6960,
  alt: "Portait of Tim Benniks in Berlin",
}));

const image2 = computed(() => ({
  secure_url:
    "https://res.cloudinary.com/dwfcofnrd/image/upload/v1659515192/Presskit/Tim-oct-2020.jpg",
  width: 5472,
  height: 3080,
  alt: "Tim Benniks in Paris",
}));

const image3 = computed(() => ({
  secure_url:
    "https://res.cloudinary.com/dwfcofnrd/image/upload/v1682493958/Tim/1_april_2023.png",
  width: 5120,
  height: 2880,
  alt: "Tim Benniks in his studio",
}));
</script>
<template>
  <h3 class="text-slate-200 font-medium text-3xl mb-4">Speaker media</h3>

  <figure class="media-grid mb-12">
    <div class="media-1">
      <a :href="image1.secure_url" target="_blank" rel="noopener">
        <cloudinary-image :image="image1" loading="lazy" :alt="image1.alt" />
      </a>
    </div>
    <div class="media-2">
      <a :href="image2.secure_url" target="_blank" rel="noopener">
        <cloudinary-image :image="image2" loading="lazy" :alt="image2.alt" />
      </a>
    </div>
    <div class="media-3">
      <a :href="image3.secure_url" target="_blank" rel="noopener">
        <cloudinary-image :image="image3" loading="lazy" :alt="image3.alt" />
      </a>
    </div>
  </figure>
</template>

<style lang="postcss">
.media-grid {
  @apply grid gap-8 grid-cols-1 md:grid-cols-[0.472fr_0.6fr] md:grid-rows-[1fr_1fr];
}

.media-1 {
  @media (min-width: 768px) {
    grid-area: 1/1/3/2;
  }
}

.media-2 {
  @media (min-width: 768px) {
    grid-area: 1/2/2/3;
  }
}

.media-3 {
  @media (min-width: 768px) {
    grid-area: 2/2/3/3;
  }
}
</style>
