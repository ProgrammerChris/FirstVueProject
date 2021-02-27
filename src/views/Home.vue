<template>
	<div class="wrapper">
		<div class="title-box"><h3>Hva kan vi hjelpe deg med?</h3></div>
		<div class="text-box">
			<p>Bygge nytt, rehabilitere eller pusse opp? Ingen jobb for stor, ingen jobb for liten. Ta gjerne kontakt for en hyggelig samtale så finner vi ut hva vi kan gjøre for deg!</p>
		</div>
	</div>
	<Button id="contact-me"/>
</template>

<script>
import Button from '../components/Button.vue';
export default {
	name: 'Home',
	components: {
		Button,
	}
}
</script>

<style>
h3 {
	margin: 0;
}
.title-box {
	padding: .5rem 0;
	background-color: #C2BBB0;
	color: #250A00;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
}
.text-box {
	background-color: #243F50;
	opacity: .85;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
}
#contact-me {
	margin: .5rem -1rem;
	justify-self: right;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
	.wrapper {
		margin: 2rem;
	}
	.title-box {
		padding: .5rem;
		font-size: 1.7em;
	}
	.text-box {
		padding: 1rem;
	}
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>
