<script setup>
import { ref } from 'vue'
import navbar from '~/components/navbar.vue';
import ofooter from '~/components/footer.vue'
import VueScrollTo from 'vue-scrollto';

const isVideoModalActive = ref(false)
const scrollToElement = (id, duration) => {
	VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};
</script>

<template>
	<div class="hero is-fullheight" id="home">
		<div class="hero-head overlay-50">
			<navbar />
		</div>
		<div class="hero-body is-justify-content-center has-text-centered overlay-50">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-full">
						<p class="title is-1 has-text-weight-bold has-text-white">Huawei Open
							Day:
						</p>
						<p class="title is-1 has-text-weight-bold has-text-white">
							<span class="px-3 has-text-primary has-background-white"
								style="border-radius: 5px; padding-top: ;">Intelligent World</span> 2030
						</p>
						<p class="title has-text-weight-bold has-text-white">9th May 2023, 9 am to 5 pm, Auditorium Library & Pusat
							Akademik Pelajar,
							UMP
							Pekan</p>
					</div>

					<div class="column is-full">
						<o-button size="large" variant="primary" @click="isVideoModalActive = true" icon-left="play"
							rounded></o-button>
						<o-modal v-model:active="isVideoModalActive" closeIconSize="small">
							<figure class="image is-16by9">
								<iframe class="has-ratio"
									src="https://www.huawei.com/mediafiles/MediaFiles/2/1/2/{2121536E-2920-4260-AAEE-59DD37B7ECEB}intelligent-2030-en-720.mp4"
									frameborder="0" allowfullscreen></iframe>
							</figure>
						</o-modal>
					</div>

					<div class="column is-full">
						<o-button variant="primary" class="has-text-weight-semibold has-text-white" outlined rounded
							@click="scrollToElement('#about', 500)">About The
							Event</o-button>
					</div>
				</div>
				<div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero has-text-white" id="about">
		<div class="hero-body overlay-75">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-6">
						<p class="title has-text-white">About The Event</p>
						<p>Huawei's Intelligent World 2030 vision aims to improve quality of life through technology and
							sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic
							congestion and pollution.</p>
					</div>
					<div class="column is-3">
						<p class="title is-5 has-text-white">WHERE</p>
						<p>
							Auditorium Library & Pusat Akademik Pelajar, UMP Pekan
						</p>
					</div>
					<div class="column is-3">
						<p class="title is-5 has-text-white">WHEN</p>
						<p>
							9th May 2023, 9 am to 5 pm
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ofooter />
</template>

<style>
#home {
	background-image: url("@/assets/img/home.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
}

#about {
	background-image: url("@/assets/img/about.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
}

.overlay-50 {
	background-color: rgb(0, 0, 0, 0.5);
}

.overlay-75 {
	background-color: rgb(0, 0, 0, 0.75);
}
</style>