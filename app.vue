<script setup>
useHead({
	title: 'Huawei Open Day: Intelligent World 2030',
	meta: [
		{ name: 'description', content: "Huawei's Intelligent World 2030 vision aims to improve quality of life through technology and sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic congestion and pollution." }
	],
	htmlAttrs: {
		class: 'theme-light'
	}
})

useSeoMeta({
	title: 'Huawei Open Day: Intelligent World 2030',
	ogTitle: 'Huawei Open Day: Intelligent World 2030',
	description: "Huawei's Intelligent World 2030 vision aims to improve quality of life through technology and sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic congestion and pollution.",
	ogDescription: "Huawei's Intelligent World 2030 vision aims to improve quality of life through technology and sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic congestion and pollution.",
	ogImage: 'img/home.png',
	twitterCard: 'summary_large_image',
})
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
