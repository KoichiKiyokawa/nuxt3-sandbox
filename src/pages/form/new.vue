<script setup lang="ts">
import { useSessionStorage } from "@vueuse/core"
const route = useRoute()
const router = useRouter()

/**
 * 以下の3パターンが考えられる
 * modeクエリがない: indexから遷移してきた
 * mode=form: 確認画面から戻ってきた
 * mode=confirm: フォームから確認画面へ移動した
 */
type Query = { mode: "form" | "confirm" }

const mode = ref<Query["mode"]>("form")
watchEffect(() => {
  mode.value = (route.query.mode as Query["mode"]) || "form"
})

type Form = { name: string; email: string; address: string }
const getEmptyForm = (): Form => ({ name: "", email: "", address: "" })
const store = useSessionStorage<Form>("form-new", getEmptyForm())

const form = reactive<Form>(
  // indexから遷移してきたとき(?mode=クエリがない)はフォームに初期値をセットしない
  route.query.mode ? store.value : { email: "", address: "", name: "" }
)

if (mode.value === "confirm" && Object.keys(form).length === 0)
  router.push("/form/new")

const gotoConfirm = () => {
  store.value = form
  mode.value = "confirm"
  router.push("?mode=confirm")
}

const onSubmit = () => {
  console.log(form)
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
