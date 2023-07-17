<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loadingIndicator = ref(true)

onMounted(() => {
	window.addEventListener('load', () => {
		loadingIndicator.value = false;
	});
});

useHead({
	title: 'Huawei Open Day: Intelligent World 2030',
	meta: [
		{ name: 'description', content: "Huawei's Intelligent World 2030 vision aims to improve quality of life through technology and sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic congestion and pollution." }
	]
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
	<o-loading :active="loadingIndicator">
		<o-icon pack="mdi" icon="loading" size="large"></o-icon>
	</o-loading>
	<div v-if="loadingIndicator == false">
		<RouterView />
	</div>
</template>