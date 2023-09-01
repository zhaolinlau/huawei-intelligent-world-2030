<script setup>
const speakers = [
	{
		src: "Diana.jpg",
		name: "Sharifah Diana Shima Binti Syed Badrol",
		position: "Public Affairs and Communications Manager"
	},
	{
		src: "Carolyn.jpg",
		name: "Ms Carolyn Wai Kar Yin",
		position: "System Integration & Learning Consultant"
	},
	{
		src: "Lai-Teik-Nan.jpg",
		name: "Mr. Lai Teik Nan",
		position: "Data Center Solution Manager"
	},
	{
		src: "Yong-Sze-Miin.jpg",
		name: "Ms Yong Sze Miin",
		position: "Human Resource Manager of Asia Pacific Delivery & Service Dept"
	}
]
</script>

<template>
	<div class="column is-3-desktop is-6-tablet is-12-mobile" v-for="speaker in speakers">
		<div class="card">
			<div class="card-image">
				<figure class="image">
					<nuxt-img :src="`img/speakers/${speaker.src}`" />
				</figure>
			</div>
			<div class="card-content">
				<p class="title is-4">{{ speaker.name }}</p>
				<p class="subtitle is-6 has-text-primary is-italic">{{ speaker.position }}</p>
			</div>
		</div>
	</div>
</template>