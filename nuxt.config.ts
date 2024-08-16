// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/image"],
	plugins: ["plugins/oruga.js"],
	compatibilityDate: "2024-08-16",
});