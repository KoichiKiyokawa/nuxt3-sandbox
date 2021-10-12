<script lang="ts">
export default {
  layout: "custom",
}
</script>

<script setup lang="ts">
const title = ref("")
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>

  <input v-model="title" />
  {{ title }}
</template>
