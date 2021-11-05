<script setup lang="ts">
type TCounter = {
  text: string
  count: number
}

const counters = reactive<TCounter[]>([])

const addCounter = () => counters.push({ text: "", count: 0 })
const deleteCounter = (index: number) => counters.splice(index, 1)

const currentUser = useCurrentUser()

const setUser = () => {
  currentUser.value = { id: 1, name: "hoge", email: "hoge@example.com" }
}
</script>

<template>
  <div>
    <MoleculesCounter
      v-for="(counter, i) in counters"
      :key="i"
      v-model:count="counter.count"
      v-model:text="counter.text"
      @delete="deleteCounter(i)"
    />

    <button @click="addCounter">add counter</button>

    <button @click="setUser" class="block bg-blue-400 p-2 text-white rounded">
      set current user ({{ currentUser?.name }})
    </button>
    <NuxtLink to="/users">users</NuxtLink>
  </div>
</template>
