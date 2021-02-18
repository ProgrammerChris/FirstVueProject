<template>
	<div id="text-box" class="text-box">
		<p>Bygge nytt, rehabilitere eller pusse opp? Ingen jobb for stor, ingen jobb for liten. Ta gjerne kontakt for en hyggelig samtale så finner vi ut hva vi kan gjøre for deg!</p>
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
#text-box {
	margin-top: 150px;
	height: 140px;
}
.text-box {
	width: 260px;
	height: fit-content;
	background-color: #243F50;
	opacity: .85;
}
.text-box p {
	vertical-align: middle;
	text-align: left;
	padding: 10px 20px;
	font-size: 1.125em;
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {


}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>

<style scoped>
#contact-me {
	position: relative;
	left: 35vw;
	top: 17vh;
	margin-top: 30px;
	padding: 0;
}
</style>