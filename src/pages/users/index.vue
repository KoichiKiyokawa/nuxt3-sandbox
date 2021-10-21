<script setup lang="ts">
const currentUser = useCurrentUser()
const foo = useFoo()
</script>

<template>
  <h1>user {{ JSON.stringify(currentUser, null, 2) }}</h1>
  <h2>hello</h2>
  <h3>{{ foo }}</h3>
</template>
