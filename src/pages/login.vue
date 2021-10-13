<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core"
import { email, helpers, required } from "@vuelidate/validators"

const form = reactive({ email: "", password: "" })

const v$ = useVuelidate(
  {
    email: {
      required: helpers.withMessage("メールアドレスは入力必須です", required),
      email: helpers.withMessage("メールアドレスの形式が間違っています", email),
    },
    password: {
      required: helpers.withMessage("パスワードは入力必須です", required),
    },
  },
  form
)

const onSubmit = () => {
  console.log(form)
}

watchEffect(() => console.log(v$.value.email.required.$message))
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="border border-gray-300 rounded p-2 max-w-md mx-auto"
  >
    <h2 class="font-bold text-2xl">Login</h2>
    <label class="block mt-4">
      email
      <input type="email" v-model="form.email" />
      <div v-if="v$.email.$invalid">
        {{ v$.email.$silentErrors?.[0].$message }}
      </div>
    </label>
    <label class="block mt-2">
      passowrd
      <input type="password" v-model="form.password" class="mt-2" />
      <div v-if="v$.password.$invalid">
        {{ v$.password.$silentErrors?.[0].$message }}
      </div>
    </label>

    <button class="bg-blue-400 text-white p-2 rounded-lg mt-4">submit</button>
  </form>
</template>

<style scoped>
input {
  @apply border p-2 block;
}
</style>
