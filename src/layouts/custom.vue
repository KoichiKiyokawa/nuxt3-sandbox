<template>
  <header class="">
    <span>Nuxt 3 practice / custom</span>
  </header>

  <main><slot /></main>
</template>

<style scoped>
header {
  @apply bg-red-400 text-white;
  @apply p-4;
  @apply lg:(bg-green-400 text-2xl);
}
</style>
