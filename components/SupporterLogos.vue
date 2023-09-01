<script setup>
const supporters = [
	{ src: "chest.png" },
	{ src: "eees.jpg" },
	{ src: "fk.png" },
	{ src: "impress.jpg" },
	{ src: "math_elites.jpg" },
	{ src: "mechapro.png" },
	{ src: "pemaju.png" },
	{ src: "petakom.png" },
	{ src: "scets.jpg" },
	{ src: "scitexs.jpg" },
	{ src: "smach.png" },
	{ src: "uhcc.jpg" },
	{ src: "umpbot.png" }
]
</script>

<template>
	<div class="column is-2" v-for="supporter in supporters">
		<figure class="image">
			<nuxt-img :src="`img/supporters/${supporter.src}`" />
		</figure>
	</div>
</template>