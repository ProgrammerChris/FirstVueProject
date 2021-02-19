<template>
	<div id="main-content">
		<div class="title-box"><h3>Hva kan vi hjelpe deg med?</h3></div>
		<div class="text-box">
			<p>Vi er et lite tørmerer firma fra XYZ, som tar oppdrag i XYZ regionen. For oss er XYZ viktig og vi streber etter å tilby kvalitetsarbeid der du som kunde føler deg trygg og tenker på oss ved neste prosjekt.</p>
		</div>
		<div class="employee">
			<div class="title-box"><h3>Ansatte</h3></div>
			<div class="employee-info">
				<img src="../assets/image.jpg" alt="Ola Nordmann" height="260" width="260">
				<div class="text-box">
					<p style="padding-bottom: 0;">Ola Nordmann</p>
					<p style="padding-top: 0; padding-bottom: 0;">31år</p>
					<p>Dette er en test for å se hva som skjer dersom denne boxen blir så stor at den presser knappen under ned så det kanskje må scrolles ned for å klikke på denne slik som planen er.</p>
				</div>
			</div>
		</div>
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

<style scoped>
.employee {
	margin-top: 30px;
}
.employee-info {
	width: 260px;
	height: fit-content;
}
</style>