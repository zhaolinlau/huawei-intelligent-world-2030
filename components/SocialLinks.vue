<script setup>
const socials = [
	{
		href: 'https://www.facebook.com/IEMUMPStudentSection/',
		color: 'link-dark',
		icon: 'facebook',
		id: '@IEMUMPStudentSection',
	},
	{
		href: 'https://www.instagram.com/iemumpss/',
		color: 'danger-dark',
		icon: 'instagram',
		id: '@iemumpss',
	},
	{
		href: 'https://t.me/iemumpss',
		color: 'info',
		icon: 'send-variant-outline',
		id: '@iemumpss',
	},
	{
		href: 'https://www.linkedin.com/company/iemumpss/',
		color: 'link',
		icon: 'linkedin',
		id: '@iemumpss',
	},
	{
		href: 'https://iemumpss.vercel.app',
		color: 'info-dark',
		icon: 'web',
		id: 'iemumpss.vercel.app',
	},
	{
		href: 'mailto:iem@ump.edu.my',
		color: 'dark',
		icon: 'email',
		id: 'iem@ump.edu.my',
	},
]
</script>

<template>
	<div class="columns is-multiline has-text-centered-desktop">
		<div class="column is-4" v-for="social in socials">
			<a :href="social.href" :class="`is-size-4 has-text-${social.color}`" target="_blank">
				<span class="icon-text">
					<span class="icon">
						<i :class="`mdi mdi-${social.icon}`"></i>
					</span>
					<span>{{ social.id }}</span>
				</span>
			</a>
		</div>
	</div>
</template>