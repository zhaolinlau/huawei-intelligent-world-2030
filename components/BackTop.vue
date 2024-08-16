<script setup>
const showButton = ref(false)

function handleScroll() {
	showButton.value = window.scrollY > 250
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<button class="button is-primary scrolltotop animate__animated animate__fadeIn" v-if="showButton"
		@click="scrollToTop">
		<span class="icon">
			<i class="mdi mdi-arrow-up"></i>
		</span>
	</button>
</template>

<style>
.scrolltotop {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 99;
}
</style>