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

const speakers = [
	{
		image: "https://images.pexels.com/photos/8348463/pexels-photo-8348463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Sharifah Diana Shima Binti Syed Badrol",
		position: "Public Affairs and Communications Manager"
	},
	{
		image: "https://images.pexels.com/photos/8348463/pexels-photo-8348463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Ms Carolyn Wai Kar Yin",
		position: "System Integration & Learning Consultant"
	},
	{
		image: "https://images.pexels.com/photos/8348463/pexels-photo-8348463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Mr. Lai Teik Nan",
		position: "Data Center Solution Manager"
	},
	{
		image: "https://images.pexels.com/photos/8348463/pexels-photo-8348463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "Ms Yong Sze Miin",
		position: "Human Resource Manager of Asia Pacific Delivery & Service Dept"
	}
]
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
							<span class="px-3 has-text-primary has-background-white" style="border-radius: 5px;">Intelligent</span>
							World 2030
						</p>
						<p class="title is-5 has-text-weight-bold has-text-white">9th & 10th May 2023, Auditorium Library &
							Pusat
							Aktiviti Pelajar G Floor,
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
							Auditorium Library & Pusat Aktiviti Pelajar G Floor, UMP Pekan
						</p>
					</div>
					<div class="column is-3">
						<p class="title is-5 has-text-white">WHEN</p>
						<p>
							9th May 2023 (9 am to 5 pm) <br>
							10th May 2023 (10 am to 5 pm)
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="speakers">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">EVENT SPEAKERS</p>
						<p class="subtitle">Here are our speakers</p>
					</div>
					<div class="column is-3-desktop is-6-tablet is-12-mobile" v-for="(speaker, i) in speakers" :key="i">
						<div class="card">
							<div class="card-image">
								<figure class="image">
									<img :src="speaker.image" alt="{{ speaker.image }}">
								</figure>
							</div>
							<div class="card-content">
								<p class="title is-4">{{ speaker.name }}</p>
								<p class="subtitle is-6 has-text-primary is-italic">{{ speaker.position }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero has-background-primary-light" id="schedule">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">EVENT SCHEDULE</p>
						<p class="subtitle">Here is our event schedule</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline">
							<div class="column is-6-desktop is-12">
								<p class="title is-5 has-text-centered">9th May 2023</p>
								<div class="list">
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
								</div>
							</div>
							<div class="column is-6">
								<p class="title is-5 has-text-centered">10th May 2023</p>
								<div class="list">
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
									<div class="list-item box">
										<div class="list-item-content">
											<div class="list-item-title">List item</div>
											<div class="list-item-description">List item description</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="venue">
		<div class="hero-body">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered">
						<p class="title">EVENT VENUE</p>
						<p class="subtitle">Event venue location info</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="booth">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">CAREER BOOTH</p>
					</div>
					<div class="column is-12">
						<div class="tile is-ancestor">
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Hello World</p>
									<p class="subtitle">What is up?</p>
								</article>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Foo</p>
									<p class="subtitle">Bar</p>
								</article>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Third column</p>
									<p class="subtitle">With some content</p>
									<div class="content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
											tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
									</div>
								</article>
							</div>
						</div>

						<div class="tile is-ancestor">
							<div class="tile is-vertical is-8">
								<div class="tile">
									<div class="tile is-parent is-vertical">
										<article class="tile is-child box">
											<p class="title">Vertical tiles</p>
											<p class="subtitle">Top box</p>
										</article>
										<article class="tile is-child box">
											<p class="title">Vertical tiles</p>
											<p class="subtitle">Bottom box</p>
										</article>
									</div>
									<div class="tile is-parent">
										<article class="tile is-child box">
											<p class="title">Middle box</p>
											<p class="subtitle">With an image</p>
											<figure class="image is-4by3">
												<img src="https://bulma.io/images/placeholders/640x480.png">
											</figure>
										</article>
									</div>
								</div>
								<div class="tile is-parent">
									<article class="tile is-child box">
										<p class="title">Wide column</p>
										<p class="subtitle">Aligned with the right column</p>
										<div class="content">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
												tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
										</div>
									</article>
								</div>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<div class="content">
										<p class="title">Tall column</p>
										<p class="subtitle">With even more content</p>
										<div class="content">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at
												pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
												Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut
												quam.</p>
											<p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis.
												Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin
												felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
												amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat
												tortor.</p>
											<p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor
												consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper
												a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
										</div>
									</div>
								</article>
							</div>
						</div>

						<div class="tile is-ancestor">
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Side column</p>
									<p class="subtitle">With some content</p>
									<div class="content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
											tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
									</div>
								</article>
							</div>
							<div class="tile is-parent is-8">
								<article class="tile is-child box">
									<p class="title">Main column</p>
									<p class="subtitle">With some content</p>
									<div class="content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
											tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="partners">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">SPONSORS & PARTNERS</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline">
							<div class="column">
								<figure class="image">
									<img src="https://www.ump.edu.my/img/logo-ump-tvet-1.png" alt="">
								</figure>
							</div><div class="column">
									<figure class="image">
										<img src="https://www.ump.edu.my/img/logo-ump-tvet-1.png" alt="">
									</figure>
								</div><div class="column">
									<figure class="image">
										<img src="https://www.ump.edu.my/img/logo-ump-tvet-1.png" alt="">
									</figure>
								</div><div class="column">
									<figure class="image">
										<img src="https://www.ump.edu.my/img/logo-ump-tvet-1.png" alt="">
									</figure>
								</div><div class="column">
									<figure class="image">
										<img src="https://www.ump.edu.my/img/logo-ump-tvet-1.png" alt="">
									</figure>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="contact">
		<div class="hero-body">
			<div class="container">
				<div class="columns">
					<div class="column is-12 has-text-centered">
						<p class="title">CONTACT US</p>
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
}</style>