<script setup lang="ts">
defineProps(["image", "alt", "loading", "basewidth"]);

function createSourceSet(image: any, w: number, h: number) {
  let srcset = "";

  [
    300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
    1700,
  ].forEach((width) => {
    const url = image.secure_url.replace(
      `v${image.version}`,
      `q_auto,f_auto/c_limit,w_${width},ar_${w.toFixed(0)}:${h.toFixed(0)}`
    );

    srcset += `${url} ${width}w, `;
  });

  return srcset.slice(0, -2);
}
</script>

<template>
  <div
    class="w-full"
    :style="`aspect-ratio: ${basewidth || 960} / ${
      (basewidth || 960) * (image.height / image.width)
    }`"
  >
    <img
      :src="
        image.secure_url.replace(
          `v${image.version}`,
          'q_auto:low,f_auto/c_limit,w_500'
        )
      "
      :alt="alt || image?.context?.custom?.alt || ''"
      :width="basewidth || 960"
      :height="(basewidth || 960) * (image.height / image.width)"
      class="fancy-image w-full block"
      :loading="loading || 'lazy'"
      :style="`aspect-ratio: ${basewidth || 960} / ${
        (basewidth || 960) * (image.height / image.width)
      }`"
      :srcset="
        createSourceSet(
          image,
          basewidth || 960,
          (basewidth || 960) * (image.height / image.width)
        )
      "
    />
  </div>
</template>
