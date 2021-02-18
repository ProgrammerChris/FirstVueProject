<template>
	<div id="text-box">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
	</div>
	<ContactButton id="contact-me"/>
</template>

<script>
import ContactButton from '../components/ContactButton.vue';
export default {
	components: {
		ContactButton,
	}
}
</script>

<style>
#text-box {
	margin-top: 30px;
	grid-row: 2;
	width: 260px;
	height: fit-content;
	background-color: #243F50;
	opacity: .85;
}
#text-box p {
	text-align: left;
	padding: 5px 20px;
	font-size: 1.125em;
}
#contact-me {
	grid-row: 3;
	justify-self: right;
	margin-top: 30px;
	padding: 0;
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>