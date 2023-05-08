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
		image: "https://i.postimg.cc/pp93Vbv5/Diana.jpg",
		name: "Sharifah Diana Shima Binti Syed Badrol",
		position: "Public Affairs and Communications Manager"
	},
	{
		image: "https://i.postimg.cc/V5k3T0HR/Carolyn.jpg",
		name: "Ms Carolyn Wai Kar Yin",
		position: "System Integration & Learning Consultant"
	},
	{
		image: "https://i.postimg.cc/fJ6pJ2W2/Lai-Teik-Nan.jpg",
		name: "Mr. Lai Teik Nan",
		position: "Data Center Solution Manager"
	},
	{
		image: "https://i.postimg.cc/RqpjzCkz/Yong-Sze-Miin.jpg",
		name: "Ms Yong Sze Miin",
		position: "Human Resource Manager of Asia Pacific Delivery & Service Dept"
	}
]

const supporters = [
	{
		image: "https://i.postimg.cc/TpmmM6Q3/UMP-Group.png",
		image: "https://i.postimg.cc/xCQGQcwD/UMPA.png",
		image: "https://i.postimg.cc/xqNNM2w3/UMPH.jpg",
		image: "https://i.postimg.cc/TKc6ptTX/CHEST-LOGO-12-NO-BACKGROUND.png",
		image: "https://i.postimg.cc/vBdTTKLC/EEES.jpg",
		image: "https://i.postimg.cc/p92PZgsT/Faculty-of-Computing.png",
		image: "https://i.postimg.cc/p9Xt8Kd5/IEM-PAHANG.png",
		image: "https://i.postimg.cc/BP13bsnh/impress.jpg",
		image: "https://i.postimg.cc/3WP76ytz/logo-fk.png",
		image: "https://i.postimg.cc/qNwPkgGJ/mathelites.png",
		image: "https://i.postimg.cc/34vfDw2D/MECHAPRO.png",
		image: "https://i.postimg.cc/N5qqD3Mc/pemaju.png",
		image: "https://i.postimg.cc/N57V4LS6/PETAKOM.png",
		image: "https://i.postimg.cc/JH4sysk1/scets.png",
		image: "https://i.postimg.cc/0MT3tS9f/scitexs.png",
		image: "https://i.postimg.cc/3JyhMB2G/smach.png",
		image: "https://i.postimg.cc/q62FW7Rd/UHCC.png",
		image: "https://i.postimg.cc/14Fb8vKY/UMPBOT.png",
	}
]

const d1lists = [
	{
		title: "9.00 am – 9.30 am",
		desc: "Arrival of students & guests"
	},
	{
		title: "9.30 am – 9.45 am",
		desc: "Arrival of Vice Chancellor Assistant, Huawei VIPs, Honourable guests"
	},
	{
		title: "9.45 am – 10.05 am",
		desc: 'Welcoming Speech by Event Emcees, National Anthem "Negaraku", UMP Anthem "UMP Maju Gemilang", Doa Recitation'
	},
	{
		title: "10.05 am – 10.30 am",
		desc: "Opening Ceremony of 1st Huawei Open Day: Intelligent World 2030, Welcoming Address by Professor Madya IR. Dr Nurul Hazlina Binti Noordin Universiti Malaysia Pahang, Welcoming Address by Huawei VIP, Opening Montage"
	},
	{
		title: "11.30 am – 12.30 pm",
		desc: "Elevate Your Potential with Huawei + Q&A"
	},
	{
		title: "12.30 pm - 12.40 PM",
		desc: "Souvenir Presentation + Photo Session"
	},
	{
		title: "12.40 Pm – 1.30 pm",
		desc: "Lunch Break"
	},
	{
		title: "1.30 Pm – 5.00 pm",
		desc: "Career Booth: Career Consultation, Resume Review & Interview"
	},
	{
		title: "5.00 pm ",
		desc: "The End"
	},
]

const d2lists = [
	{
		title: "10.00 am – 5.00 Pm",
		desc: "Career Booth: Career Consultation, Resume Review & Interview"
	},
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
									<img :src="speaker.image">
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
									<div class="list-item box" v-for="(list, i) in d1lists" :key="i">
										<div class="list-item-content">
											<div class="list-item-title">{{ list.title }}</div>
											<div class="list-item-description">{{ list.desc }}</div>
										</div>
									</div>
								</div>
							</div>
							<div class="column is-6-desktop is-12">
								<p class="title is-5 has-text-centered">10th May 2023</p>
								<div class="list">
									<div class="list-item box" v-for="(list, i) in d2lists" :key="i">
										<div class="list-item-content">
											<div class="list-item-title">{{ list.title }}</div>
											<div class="list-item-description">{{ list.desc }}</div>
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
						<p class="title">CAREER BOOTH</p>
					</div>
					<div class="column is-12">
						<div class="tile is-ancestor">
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Lorem, ipsum.</p>
									<p class="subtitle">Lorem, ipsum dolor.</p>
								</article>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Lorem.</p>
									<p class="subtitle">Lorem.</p>
								</article>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Lorem, ipsum.</p>
									<p class="subtitle">Lorem, ipsum dolor.</p>
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
											<p class="title">Lorem, ipsum.</p>
											<p class="subtitle">Lorem, ipsum.</p>
										</article>
										<article class="tile is-child box">
											<p class="title">Lorem, ipsum.</p>
											<p class="subtitle">Lorem, ipsum.</p>
										</article>
									</div>
									<div class="tile is-parent">
										<article class="tile is-child box">
											<p class="title">Lorem, ipsum.</p>
											<p class="subtitle">Lorem, ipsum dolor.</p>
										</article>
									</div>
								</div>
								<div class="tile is-parent">
									<article class="tile is-child box">
										<p class="title">Lorem, ipsum.</p>
										<p class="subtitle">Lorem ipsum dolor sit amet.</p>
										<div class="content">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nulla voluptatum fugiat
												voluptatibus temporibus aut enim quaerat quisquam culpa, laboriosam libero modi magni tenetur,
												voluptate tempore ratione repudiandae voluptates esse.</p>
										</div>
									</article>
								</div>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child box">
									<div class="content">
										<p class="title">Lorem, ipsum.</p>
										<p class="subtitle">Lorem ipsum dolor sit.</p>
										<div class="content">
											<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quod provident optio, dicta
												dignissimos neque ratione repellendus nihil minima ea inventore ipsum ut velit dolore facilis
												distinctio eveniet et voluptas?</p>
											<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias recusandae harum ipsum quaerat
												laudantium ea. Neque quia sapiente libero cum magnam aut a eaque porro. Quis, suscipit! Itaque,
												magnam sapiente?</p>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus asperiores illo nisi
												maxime autem blanditiis dolore nihil repudiandae nesciunt dolores sed expedita, odit qui,
												perferendis libero fugit deleniti aliquid ipsa?</p>
										</div>
									</div>
								</article>
							</div>
						</div>

						<div class="tile is-ancestor">
							<div class="tile is-parent">
								<article class="tile is-child box">
									<p class="title">Lorem, ipsum.</p>
									<p class="subtitle">Lorem, ipsum.</p>
									<div class="content">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, assumenda obcaecati corrupti
											harum possimus consectetur fuga laboriosam, ex, sit reprehenderit quo rem dignissimos iure repellat
											autem! Repudiandae enim impedit magnam?</p>
									</div>
								</article>
							</div>
							<div class="tile is-parent is-8">
								<article class="tile is-child box">
									<p class="title">Lorem, ipsum.</p>
									<p class="subtitle">Lorem, ipsum dolor.</p>
									<div class="content">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, neque quam facere consequuntur
											nisi vero quaerat placeat quos. Vero illo quam quod dignissimos delectus amet id voluptatem
											molestiae, nihil ab.</p>
									</div>
								</article>
							</div>
						</div>
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
						<p class="title">SPONSORS & PARTNERS</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline">
							<div class="column is-2-desktop is-4-tablet is-6-mobile" v-for="(supporter, index) in supporters"
								:key="index">
								<figure class="image">
									<img :src="supporter.image">
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