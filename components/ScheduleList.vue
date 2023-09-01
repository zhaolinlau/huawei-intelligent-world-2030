<script setup>
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
</script>

<template>
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
</template>