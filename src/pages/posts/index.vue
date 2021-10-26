<script setup lang="ts">
const { data: posts, pending } = await useFetch("/api/posts")
</script>

<template>
  <p>{{ pending }}</p>
  <div v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>
