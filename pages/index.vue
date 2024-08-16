<script setup>
import VueScrollTo from 'vue-scrollto';

const isVideoModalActive = ref(false)
const scrollToElement = (id) => {
	VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};
</script>

<template>
	<div class="hero is-fullheight" id="home">
		<div class="hero-head overlay-50">
			<AppBar />
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
						<button class="button is-primary is-large is-rounded" @click="isVideoModalActive = true">
							<span class="icon">
								<i class="mdi mdi-play mdi-48px"></i>
							</span>
						</button>

						<div :class="`modal ${isVideoModalActive ? 'is-active' : ''}`">
							<div class="modal-background"></div>
							<div class="modal-content">
								<figure class="image is-16by9">
									<iframe class="has-ratio"
										src="https://www.huawei.com/mediafiles/MediaFiles/2/1/2/{2121536E-2920-4260-AAEE-59DD37B7ECEB}intelligent-2030-en-720.mp4"
										frameborder="0" allowfullscreen></iframe>
								</figure>
							</div>
							<button class="modal-close is-large" aria-label="close" @click="isVideoModalActive = false"></button>
						</div>
					</div>

					<div class="column is-full">
						<button class="button is-primary is-outlined is-rounded has-text-weight-semibold has-text-white"
							@click="scrollToElement('#about', 500)">About The
							Event</button>
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
					<SpeakerCards />
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
						<ScheduleList />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="venue">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">EVENT VENUE</p>
						<p class="subtitle">Event venue location info</p>
					</div>
					<div class="column is-12 is-flex is-justify-content-center">
						<div class="columns is-multiline">
							<div class="column is-6-desktop is-12">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15928.777610872914!2d103.4315453!3d3.5425774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cf513f7d5a510b%3A0x8bea0c68edc5095a!2sPerpustakaan%20Universiti%20Malaysia%20Pahang%20(UMP)%20Kampus%20Pekan!5e0!3m2!1sen!2smy!4v1683564687312!5m2!1sen!2smy"
									width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
							<div class="column is-6-desktop is-12">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.837103253798!2d103.40877318715822!3d3.539119099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cf517f7f32213f%3A0x1dddb917b020eadd!2sPusat%20Aktiviti%20Pelajar%20(PAP)%2C%20UMP%20Pekan!5e0!3m2!1sen!2smy!4v1683564786738!5m2!1sen!2smy"
									width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
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
						<p class="title">Career Booth</p>
					</div>
					<div class="column is-12">
						<figure class="image">
							<nuxt-img src="https://i.postimg.cc/4NtCS4Qr/PAP-FLOORPLAN-5-1-pages-to-jpg-0001.jpg" />
						</figure>
						<BoothTable />
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="supporters">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">OUR SUPPORTERS</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline is-centered is-vcentered">
							<SupporterLogos />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="organizers">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">ORGANIZED BY</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline is-vcentered is-centered">
							<OrganizerLogos />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero" id="contact">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">CONTACT US</p>
					</div>
					<div class="column is-12">
						<SocialLinks />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
#home {
	background-image: url("/img/home.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
}

#about {
	background-image: url("/img/about.jpg");
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