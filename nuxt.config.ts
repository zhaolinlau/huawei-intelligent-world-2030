// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxt/image"],
	css: [
		'assets/main.scss',
		'@mdi/font/css/materialdesignicons.min.css',
		'bulma-list/css/bulma-list.css',
		'animate.css/animate.css'
	],
	compatibilityDate: "2024-08-16",
});