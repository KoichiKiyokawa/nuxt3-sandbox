<script setup lang="ts">
const props = defineProps<{ count: number; text: string }>()
const emit = defineEmits<{
  (e: "update:count", count: number): void
  (e: "update:text", text: string): void
  (e: "delete"): void
}>()

const increment = () => emit("update:count", props.count + 1)
const decrement = () => {
  if (props.count) emit("update:count", props.count - 1)
}
const reset = () => emit("update:count", 0)

const onInput = (e: Event) => emit("update:text", (e.target as any).value)
</script>

<template>
  <div>
    <input :value="props.text" @input="onInput" />
    <span>{{ count }}</span>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="reset">reset</button>
    <button @click="emit('delete')">x</button>
  </div>
</template>
