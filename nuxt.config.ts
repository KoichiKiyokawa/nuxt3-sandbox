import { resolve } from "pathe"
import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  alias: {
    "~": resolve(__dirname, "./src"),
  },
  buildModules: ["nuxt-windicss"],
  css: ["virtual:windi.css"],
  srcDir: "src",
  ssr: false,
})
