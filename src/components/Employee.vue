<template>
	<div class="wrapper">
		<div class="title-box"><h3>{{ name }}, {{ age }}år</h3></div>
		<div class="employee-text-box">
			<img :src="require(`@/assets/img/${imgSrc}`)" alt="img">
			<p>{{ text }}</p>
			<div class="employee-contact-info">
				<p class="employee-mail">E-post:&emsp;
					<a href = "mailto: abc@example.com">ola@teigenes.no</a>
				</p>
	      <p class="employee-telephone">Tlf.: &emsp; &emsp;
					<a href = "tel: 999 99 999">888 88 888</a>
				</p>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'Employee',
	props: {
		imgSrc: String,
		name: String,
		age: Number,
		text: String
	}
}
</script>

<style scoped>
.employee-text-box {
	display: grid;
	background-color: #243F50;
	opacity: .85;
	font-size: 0.875em;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	padding-right: .2em;
}
.employee-text-box p{
	grid-column: 2;
	padding: 1.5rem 0;
}
.employee-contact-info {
	grid-column: 1/span 2;
}
.employee-contact-info p {
	padding: .3rem 1rem;
}
a {
	text-decoration: none;
	color: #C2BBB0;
}
img {
  grid-column: 1;
	grid-row: 1;
	width: 7.5rem;
	height: 7.5rem;
	align-self: end;
	position: relative;
	right: 1.2rem;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
	img {
		width: 10rem;
		height: 10rem;
		padding-top: 2em;
		padding-bottom: 2em;
	}
}
</style>

