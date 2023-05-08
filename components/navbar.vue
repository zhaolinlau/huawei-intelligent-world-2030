<script setup>
import { ref } from 'vue';
import VueScrollTo from 'vue-scrollto';

const showNav = ref(false);

const scrollToElement = (id, duration) => {
	VueScrollTo.scrollTo(id, {
		duration: 500,
	});
};
</script>

<template>
	<nav class="navbar is-dark is-tab is-transparent is-spaced" role="navigation" aria-label="main navigation">
		<div class="navbar-brand ">
			<a class="navbar-item" href="/">
				<p class="title has-text-primary has-text-weight-bold">Huawei <span class="has-text-white">Open Day</span></p>
			</a>

			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav"
				:class="{ 'is-active': showNav }">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div class="navbar-menu has-text-weight-bold" :class="{ 'is-active': showNav }">
			<div class="navbar-end">
				<a class="navbar-item is-tab" @click="scrollToElement('#home', 500)">
					Home
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#about', 500)">
					About
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#speakers', 500)">
					Speakers
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#schedule', 500)">
					Schedule
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#venue', 500)">
					Venue
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#booth', 500)">
					Booth
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#supporters', 500)">
					Partners
				</a>
				<a class="navbar-item is-tab" @click="scrollToElement('#contact', 500)">
					Contact
				</a>
				<div class="navbar-item">
					<a class="button is-primary is-rounded"
						href="https://docs.google.com/forms/d/e/1FAIpQLSfjhr9bv0SeIVUE2k9uNqkrbcj3UZ2W2SCC-_APKPmoerL8MQ/viewform?usp=sf_link"
						target="_blank">
						<strong>Join Now</strong>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

