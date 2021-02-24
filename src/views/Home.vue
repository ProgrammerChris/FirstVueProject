<template>
	<div class="info-wrapper">
		<div class="title-box"><h3>Hva kan vi hjelpe deg med?</h3></div>
		<div class="text-box">
			<p>Bygge nytt, rehabilitere eller pusse opp? Ingen jobb for stor, ingen jobb for liten. Ta gjerne kontakt for en hyggelig samtale så finner vi ut hva vi kan gjøre for deg!</p>
		</div>
	</div>
	<ContactButton id="contact-me"/>
</template>

<script>
import ContactButton from '../components/ContactButton.vue';
export default {
	name: 'Home',
	components: {
		ContactButton,
	}
}
</script>

<style>
h3 {
	margin: 0;
}
.title-box {
	width: inherit;
	height: 40px;
	background-color: #C2BBB0;
	color: #250A00;
	line-height: 40px;
}
.text-box {
	width: inherit;
	height: max-content;
	background-color: #243F50;
	opacity: .85;
}
#contact-me {
	margin: 30px -20px 30px 30px;
	justify-self: right;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>