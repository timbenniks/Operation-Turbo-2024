<template>
  <div class="mt-4 ml-4 lg:mt-12 lg:mx-12 wrapper">
    <section class="mb-8 lg:mb-0">
      <div class="static lg:sticky lg:top-12">
        <hero />
        <navigation />
      </div>
    </section>
    <main class="@container">
      <div
        class="max-w-[2550px] grid gap-4 grid-cols-1 @md:grid-cols-[960px_minmax(400px,_1fr)_1fr]"
      >
        <div class="bg-slate-400 h-96"></div>
        <div class="bg-slate-400 h-96"></div>
        <div class="bg-slate-400 h-96"></div>
      </div>
    </main>
  </div>
</template>
