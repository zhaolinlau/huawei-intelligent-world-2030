<script setup>
const booths = [
	{
		no: "001",
		name: "Huawei Consultation Booth"
	},
	{
		no: "002",
		name: "Huawei Consultation Booth"
	},
	{
		no: "003",
		name: "Huawei Consultation Booth"
	},
	{
		no: "004",
		name: "Kiran Pandia - Sign language recognition using deep learning(MySLR)"
	},
	{
		no: "005",
		name: "Dr. Azraai Mohd Razman - IOT based Smart Farming System(agronetics.net)"
	},
	{
		no: "006",
		name: "IEM Pahang"
	},
]
</script>

<template>
	<table class="table is-hoverable is-fullwidth has-text-centered">
		<thead>
			<tr>
				<th class="has-text-centered">No</th>
				<th class="has-text-centered">Booth</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(booth, i) in booths" :key="i">
				<td>{{ booth.no }}</td>
				<td>{{ booth.name }}</td>
			</tr>
		</tbody>
	</table>
</template>