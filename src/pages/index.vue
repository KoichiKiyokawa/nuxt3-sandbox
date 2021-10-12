<script setup lang="ts">
type TCounter = {
  text: string
  count: number
}

const counters = reactive<TCounter[]>([])

const addCounter = () => counters.push({ text: "", count: 0 })
const deleteCounter = (index: number) => counters.splice(index, 1)
</script>

<template>
  <MoleculesCounter
    v-for="(counter, i) in counters"
    :key="i"
    v-model:count="counter.count"
    v-model:text="counter.text"
    @delete="deleteCounter(i)"
  />

  <button @click="addCounter">add counter</button>
</template>
