<script setup lang="ts">
const currentUser = useCurrentUser()
</script>

<template>
  <div>
    <h1>show page</h1>
    <h2>user {{ JSON.stringify(currentUser, null, 2) }}</h2>
  </div>
</template>
