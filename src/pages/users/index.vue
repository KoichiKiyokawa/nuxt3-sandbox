<script setup lang="ts">
const currentUser = useCurrentUser()

const changeCurrentUser = () => {
  currentUser.value = { id: 1, email: "changed@example.com", name: "changed" }
}
</script>

<template>
  <div>
    <h1>user {{ JSON.stringify(currentUser, null, 2) }}</h1>

    <button
      @click="changeCurrentUser"
      class="bg-red-400 text-white p-3 rounded-sm"
    >
      change
    </button>

    <NuxtLink to="/users/show">show page</NuxtLink>
  </div>
</template>
