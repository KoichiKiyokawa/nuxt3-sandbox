<script setup lang="ts">
const route = useRoute()
const router = useRouter()

type Query = { mode: "form" | "confirm" }

const mode = ref<Query["mode"]>("form")
watchEffect(() => {
  mode.value = (route.query.mode as Query["mode"]) || "form"
})

const sessionStorageKey = "form-new"
type Form = { name: string; email: string; address: string }

const form = reactive<Form>(
  route.query.mode
    ? JSON.parse(sessionStorage.getItem(sessionStorageKey) || "{}")
    : { email: "", address: "", name: "" }
)

if (mode.value === "confirm" && Object.keys(form).length === 0)
  router.push("/form/new")

const gotoConfirm = () => {
  sessionStorage.setItem(sessionStorageKey, JSON.stringify(form))
  mode.value = "confirm"
  router.push("?mode=confirm")
}

const onSubmit = () => {
  console.log("ok")
}
</script>

<template>
  <div>
    <form v-show="mode === 'form'" @submit.prevent="gotoConfirm">
      <label>name:<input v-model="form.name" /></label>
      <label>email:<input v-model="form.email" /></label>
      <label>address:<input v-model="form.address" /></label>
      <button>確認画面へ</button>
    </form>

    <div v-show="mode === 'confirm'">
      <NuxtLink to="?mode=form" @click="mode = 'form'">back</NuxtLink>
      <div>
        name:<span>{{ form.name }}</span>
      </div>
      <div>
        email:<span>{{ form.email }}</span>
      </div>
      <div>
        address:<span>{{ form.address }}</span>
      </div>
      <button @click="onSubmit">confirm</button>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply border;
}
label {
  @apply block;
}
</style>
