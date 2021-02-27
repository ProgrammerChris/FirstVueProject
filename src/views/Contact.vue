<template>
	<form v-if="!sent" @submit.prevent="submit()">
		<label for="name"><strong>Navn</strong></label>
		<input v-model="fullname" id="fullname" class="contact-info" type="text">
		<label for="telefon"><strong>Tlf</strong></label>
		<input v-model="tel" class="contact-info" type="tel">
		<label for="e-post"><strong>E-post</strong></label>
		<input v-model="email" id="email" class="contact-info" type="email">
		<label for="beskjed"><strong>Hva kan vi hjelpe deg med?</strong></label>
		<textarea
			v-model="message"
			class="contact-info"
			id="message"
			name="message">
		</textarea>
		<button
			id="submit-button"
			type="submit"><strong>Send</strong></button>
  </form>
	<div v-else>
		<div id="sent"><h3>Takk for din henvendelse. Vi vil ta kontakt så fort vi kan.</h3></div>
	</div>
</template>

<script>
import { init } from 'emailjs-com';

export default {
	name: 'Contact',
	data() {
		return {
			fullname: '',
			tel: null,
			email: '',
			message: '',
			sent: false,
			service_id: 'service_m4952bd',
			template_id: 'template_irjs3vb',
			user_id: 'user_aQpxrQOtFl30nqkCijLwq'
		}
	},
	methods: {
		mounted() {
			init('user_aQpxrQOtFl30nqkCijLwq');
			document.getElementById("fullname").focus();
		},
		submit() {
			if (this.fullname != '' && this.email != '' && this.message != '') {

				document.getElementById("submit-button").innerText = 'Sending...'

				emailjs.send(this.service_id, this.template_id,{
					name: this.fullname,
					tel: this.tel,
					email: this.email,
					message: this.message,
					reply_to: this.email,
				}, this.user_id)
				.then(response => {
					if(response.status === 200) {
						this.fullname = ''
						this.tel = null
						this.email = '',
						this.message = ''
			
						this.sent = true
					} else {
						document.getElementById("submit-button").innerText = 'Send'
						alert("Noe gikk galt, prøv igjen.")
						console.log(response)
					}
				}, error => {
					alert("Error sending email, please try again!")
					console.log(error);
				})
			} else {
				document.getElementById("fullname").style.border = "2px solid #dd0000";
				document.getElementById("email").style.border = "2px solid #dd0000";
				document.getElementById("message").style.border = "2px solid #dd0000";
			}
		}
	}
}
</script>

<style scoped>
#sent {
	  border: none;
    background-color: #243F50;
    height: 5rem;
    opacity: .85;
    height: -webkit-fit-content;
		height: -moz-fit-content;
		height: fit-content;
    padding: 1rem .5rem;
}
.contact-info {
  border: 2px solid transparent;
  background-color: #243F50;
  font-size: 1.125em;
  margin-bottom: .5rem;
  width: 100%;
  outline: none;
  color: #C2BBB0;
  padding: .2rem .5rem;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
	border-radius: 2px;
}
textarea {
	resize: none;
	font-family: inherit;
	height: 8rem;
	border-radius: 2px;
}
form {
  display: grid;
	grid-auto-rows: max-content;
}
label {
	text-align: start;
	font-size: 1.125em;
}
#submit-button {
  background-position: center;
  transition: background 0.8s;
	content: 'Send'
}

#submit-button:hover {
  background: #375f79 radial-gradient(circle, transparent 1%, #375f79 1%) center/15000%;
}
#submit-button:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}

button {
	height: 3.5rem;
	width: 9rem;
	background-color: #243F50;
	color: #C2BBB0;
	border: none;
  border-radius: 2px;
  padding: 0;
  cursor: pointer;
  outline: none;
	justify-self: right;
	font-family: inherit;
	font-size: 1.3rem;
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
	.contact-info {
		font-size: 1.3em;
	}
	textarea {
		resize: vertical;
		min-height: 10rem;
		height: 20rem;
		max-height: 20rem;
	}
	label {
		font-size: 1.3em;
	}
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>
