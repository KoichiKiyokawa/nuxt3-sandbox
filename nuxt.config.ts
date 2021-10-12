import { resolve } from "pathe"
import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  alias: {
    "~": resolve(__dirname, "./src"),
  },
  srcDir: "src",
  ssr: false,
})
