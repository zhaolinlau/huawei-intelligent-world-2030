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
	{ image: "https://i.postimg.cc/PrFZZ4BM/224839649-4571043749596940-3508388015328649113-n.jpg" },
	{ image: "https://i.postimg.cc/KYMF8G22/290915818-459587816173021-8791722411229248030-n.png" },
	{ image: "https://i.postimg.cc/vBdTTKLC/EEES.jpg" },
	{ image: "https://i.postimg.cc/sfP8mBc8/301788814-536838291574946-1680698317962699745-n.png" },
	{ image: "https://i.postimg.cc/PJS565sk/impress.jpg" },
	{ image: "https://i.postimg.cc/FRW12BPY/240666240-101090099035044-6958351829623848979-n.jpg" },
	{ image: "https://i.postimg.cc/mDdvJzDV/MECHAPRO.png" },
	{ image: "https://i.postimg.cc/ZRKCsSLk/302707486-447192010795590-2907579453933473140-n.png" },
	{ image: "https://i.postimg.cc/t4Q7QPzN/241042263-3114397288782316-3738434718613349861-n.png" },
	{ image: "https://i.postimg.cc/YS74ggGC/270247051-102871622274596-9039080927905901191-n.jpg" },
	{ image: "https://i.postimg.cc/q7GNGRyX/319928380-1289578088492140-4805146637763397241-n.jpg" },
	{ image: "https://i.postimg.cc/3JyhMB2G/smach.png" },
	{ image: "https://i.postimg.cc/QMZ7bwPs/132662373-602151230576848-9111131740841833489-n.jpg" },
	{ image: "https://i.postimg.cc/4xV7mw30/302804716-595231032306052-1473994289169221361-n.png" }
]

const organizers = [
	{ image: "https://i.postimg.cc/3wCJYrhc/244139631-4492807177446443-647111529422559624-n.png" },
	{ image: "https://i.postimg.cc/DfDWCZwr/305809210-538640921397860-8876311118138085153-n.jpg" },
	{ image: "https://i.postimg.cc/vZC9TwTs/340401796-760010555619055-2976762322369776021-n.jpg" },
	{ image: "https://i.postimg.cc/hv1dvXwz/335218020-589255826576673-3831463242205828873-n.jpg" }
]
const d1lists = [
	{
		title: "9.00 am – 9.30 am",
		desc: "Arrival of students & guests"
	},
	{
		title: "9.30 am – 9.50 am",
		desc: "Arrival of Vice Chancellor Assistant, Huawei VIPs, Honourable guests"
	},
	{
		title: "9.50 am – 10.00 am",
		desc: "Opening Ceremony of 1st Huawei Open Day: Intelligent World 2030, Welcoming Speech of Professor Madya IR. Dr Nurul Hazlina Binti Noordin Universiti Malaysia Pahang"
	},
	{
		title: "10.00 am – 10.05 am",
		desc: "Speech by Jehovah Yii Zui Hon, Opening Montage"
	},
	{
		title: "10.05 am – 10.20 am",
		desc: "Introduction of Huawei Malaysia by Ms. Sharifah Diana Shima Binti Syed Badrol + Q&A"
	},
	{
		title: "10.20 am – 10.50 pm",
		desc: "Intelligent World 2030 (Insight into ICT trends and their application) by Ms. Carolyn Wai Kar Yin + Q&A"
	},
	{
		title: "10.50 pm - 11.20 PM",
		desc: "Energy Digitalization: Green ICT Power by Mr. Lai Teik Nan + Q&A"
	},
	{
		title: "10.50 pm - 11.20 PM",
		desc: "Elevate your Potential with Huawei by Ms. Yong Sze Miin + Q&A"
	},
	{
		title: "11.20 Pm – 12.20 pm",
		desc: "Souvenir Presentation + Photo Session + Closing"
	},
	{
		title: "1.30 Pm – 5.00 pm",
		desc: "Career Booth: Career Consultation, Resume Review & Interview"
	},
]

const d2lists = [
	{
		title: "10.00 am – 5.00 Pm",
		desc: "Career Booth: Career Consultation, Resume Review & Interview"
	},
]

const data = [
	{
		no: "001",
		booth: "Huawei Consultation Booth"
	},
	{
		no: "002",
		booth: "Huawei Consultation Booth"
	},
	{
		no: "003",
		booth: "Huawei Consultation Booth"
	},
	{
		no: "004",
		booth: "Kiran Pandia - Sign language recognition using deep learning(MySLR)"
	},
	{
		no: "005",
		booth: "Dr. Azraai Mohd Razman - IOT based Smart Farming System(agronetics.net)"
	},
	{
		no: "006",
		booth: "IEM Pahang"
	},
]

const columns = [
	{
		field: "no",
		label: "No",
		position: "centered"
	},
	{
		field: "booth",
		label: "Booth",
		position: "centered"
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
						<p class="title">Career Booth</p>
					</div>
					<div class="column is-12">
						<figure class="image">
							<img src="https://i.postimg.cc/4NtCS4Qr/PAP-FLOORPLAN-5-1-pages-to-jpg-0001.jpg">
						</figure>
						<o-table :data="data" bordered hoverable narrowed>
							<o-table-column v-for="column in columns" v-bind="column" #default="{ row }">
								{{ row[column.field] }}
							</o-table-column>
						</o-table>
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
							<div class="column is-2" v-for="(supporter, i) in supporters" :key="i">
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

	<div class="hero" id="organizers">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">ORGANIZED BY</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline is-vcentered is-centered">
							<div class="column is-2" v-for="(organizer, i) in organizers" :key="i">
								<figure class="image is-rounded">
									<img :src="organizer.image">
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
				<div class="columns is-multiline">
					<div class="column is-12 has-text-centered">
						<p class="title">CONTACT US</p>
					</div>
					<div class="column is-12">
						<div class="columns is-multiline has-text-centered-desktop">
							<div class="column is-4">
								<a href="https://www.facebook.com/IEMUMPStudentSection/" class="has-text-link-dark is-size-4"
									target="_blank"><o-icon size="medium" icon="facebook"></o-icon>@IEMUMPStudentSection</a>
							</div>
							<div class="column is-4">
								<a href="https://www.instagram.com/iemumpss/" class="has-text-danger-dark is-size-4"
									target="_blank"><o-icon size="medium" icon="instagram"></o-icon>@iemumpss</a>
							</div>
							<div class="column is-4">
								<a href="https://t.me/iemumpss" class="has-text-info is-size-4" target="_blank"><o-icon size="medium"
										icon="send-variant-outline"></o-icon>@iemumpss</a>
							</div>
							<div class="column is-4">
								<a href="https://www.linkedin.com/company/iemumpss/" class="has-text-link is-size-4"
									target="_blank"><o-icon size="medium" icon="linkedin"></o-icon>@iemumpss</a>
							</div>
							<div class="column is-4">
								<a href="https://iemumpss.vercel.app" class="has-text-info-dark is-size-4" target="_blank"><o-icon
										size="medium" icon="web"></o-icon>http://iemumpss.tech</a>
							</div>
							<div class="column is-4">
								<a href="mailto:iem@ump.edu.my" class="has-text-dark is-size-4"><o-icon size="medium"
										icon="email"></o-icon>iem@ump.edu.my</a>
							</div>
						</div>
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