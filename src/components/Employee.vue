<template>
	<div class="employee-wrapper">
		<div class="employee-title-box"><h3>{{ name }}, {{ age }}år</h3></div>
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
.employee-wrapper {
	padding: 10px 0;
  margin: auto;
  background-color: transparent;
}
.employee-title-box {
	grid-column: 1/span 2;
	width: 260px;
	height: 40px;
	background-color: #C2BBB0;
	color: #250A00;
	line-height: 40px;
	justify-self: center;
}
.employee-text-box {
	display: grid;
	grid-template-columns: 40% 60%;
	grid-column: 1/span 2;
	width: 260px;
	height: fit-content;
	background-color: #243F50;
	opacity: .85;
	justify-self: center;
	font-size: 0.875em;
}
.employee-text-box p{
	grid-column: 2;
	padding: 25px 0;
}
.employee-contact-info {
	grid-column: 1/span 2;
	padding: 20px 0;
}
.employee-contact-info p {
	padding: 5px 20px;
}
a {
	text-decoration: none;
	color: #C2BBB0;
}
img {
  position: relative;
  grid-column: 1;
	grid-row: 1;
	left: -25px;
	top: 25px;
}
img {
  width: 120px;
	height: 120px;
}
</style>