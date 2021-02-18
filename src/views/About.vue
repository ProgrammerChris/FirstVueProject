<template>
	<div id="text-box" class="text-box">
		<p>Vi er et lite tørmerer firma fra XYZ, som tar oppdrag i XYZ regionen. For oss er XYZ viktig og vi streber etter å tilby kvalitetsarbeid der du som kunde føler deg trygg og tenker på oss ved neste prosjekt.</p>
	</div>
	<div id="employee-1">
		<div id="employee-info" class="text-box">test</div>
	</div>
	<ContactButton id="contact-me"/>
</template>

<script>
import ContactButton from '../components/ContactButton.vue';
export default {
	name: 'About',
	components: {
		ContactButton,
	}
}
</script>

// ###### Most styles in Home.vue ######
<style>
#employee-1 {
	grid-row: 4;
}
#employee-info {
	width: 260px;
	height: 200px;
}
</style>
<style scoped>
#contact-me {
	grid-row: 5;
	justify-self: right;
	margin-top: 30px;
	padding: 0;
}
</style>