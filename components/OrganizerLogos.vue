<script setup>
const organizers = [
	{ src: "ump.png" },
	{ src: "iem_ump.jpg" },
	{ src: "engineering_week.jpg" },
	{ src: "huawei.jpg" }
]
</script>

<template>
	<div class="column is-2" v-for="(organizer, i) in organizers" :key="i">
		<figure class="image is-rounded">
			<nuxt-img :src="`img/organizers/${organizer.src}`" />
		</figure>
	</div>
</template>