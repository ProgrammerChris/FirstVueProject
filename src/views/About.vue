<template>
		<div>
			<div class="title-box"><h3>Om oss</h3></div>
			<div class="text-box">
				<p>Vi er et lite tørmerer firma fra XYZ, som tar oppdrag i XYZ regionen. For oss er XYZ viktig og vi streber etter å tilby kvalitetsarbeid der du som kunde føler deg trygg og tenker på oss ved neste prosjekt.</p>
			</div>
		</div>
		<Employee 
			imgSrc="image.jpg" 
			name="Ola Nordmann"
			:age=31
			text="Flere års erfaring innen X Y Z, her kan det jo stå litt forskjellig."
		/>
	<Button id="contact-me"/>
</template>

<script>
import Button from '@/components/Button.vue';
import Employee from '@/components/Employee.vue';
export default {
	name: 'About',
	components: {
		Button,
		Employee
	},
	mounted () {
		window.scrollTo(0, 0);
	}
}
</script>

<style scoped>
.name {
	padding-bottom: 0;
}
.age {
	padding-top: 0;
	padding-bottom: 0;
}
.employee {
	margin-top: 30px;
}
.employee-info {
	width: inherit;
	height: fit-content;
}

</style>