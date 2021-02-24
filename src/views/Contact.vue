<template>
	<form v-if="!sent" @submit.prevent="submit()">
		<label for="name"><strong>Navn</strong></label>
		<input v-model="fullname" class="contact-info" type="text">
		<label for="telefon"><strong>Tlf</strong></label>
		<input v-model="tel" class="contact-info" type="tel">
		<label for="e-post"><strong>E-post</strong></label>
		<input v-model="email" class="contact-info" type="email">
		<label for="beskjed"><strong>Hva kan vi hjelpe deg med?</strong></label>
		<textarea
			v-model="message"
			class="contact-info"
			id="message"
			name="message"
			rows="8">
		</textarea>
		<button id="submit-button" type="submit" value="submit">Send</button>
  </form>
	<div v-else><h1>Sendt!</h1></div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			fullname: '',
			tel: null,
			email: '',
			message: '',
			sent: false,
		}
	},
	methods: {
		submit() {
			let fullMessage = {
				fullname: this.fullname,
				tel: this.tel,
				email: this.email,
				message: this.message
			}
			
		// SEND E-POST HER!

		this.fullname = ''
		this.tel = null
		this.email = '',
		this.message = ''

		this.sent = true
		}
	}
}
</script>

<style>
.contact-info {
  border: none;
  background-color: #243F50;
  font-size: 1.125em;
  margin-bottom: 10px;
  width: 100%;
  outline: none;
  color: #C2BBB0;
  padding: 5px 10px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}
textarea {
	resize: vertical;
}
form {
  display: grid;
}
label {
	text-align: start;
	font-size: 1.125em;
	padding: 2px;
}
#submit-button {
  width: 120px;
  height: 45px;
  background-color: #243F50;
  border-radius: 5px;
  border: none;
  color: #C2BBB0;
  text-align: center;
  font-size: 1.3em;
  transition: all 0.5s;
  cursor: pointer;
  outline: none;
  justify-self: end;
  box-shadow: 1px 2px #C2BBB0;
	margin: 10px;
}

#submit-button:active {
  box-shadow: 0px 0px #C2BBB0;
  transform: translateY(4px);
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>
