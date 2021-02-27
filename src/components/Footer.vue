<template>
  <div id="footer-box">
    <div id="so-me">
      <a class="so-me-logo" target="_blank" href="https://www.instagram.com/teige_nes_bygg_as/">
        <img class="so-me-logo" alt="Instagram" src="../assets/instagram.svg" />
      </a>
      <a class="so-me-logo" target="_blank" href="https://www.facebook.com/TeigeNesByggAs">
        <img class="so-me-logo" alt="Facebook" src="../assets/facebook.svg" />
      </a>
    </div>
    <div id="contact-info">
      <p id="mail">
        E-post:&emsp;<a id="mail-link" href="mailto: abc@example.com">abc@example.com</a>
      </p>
      <p id="telephone">
        Tlf.: &emsp;&emsp;<a id="telephone-link" href="tel: 999 99 999">999 99 999</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
#footer-box {
  grid-row: 3;
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: #c2bbb0;
  padding: 1rem 0 1rem 1.5rem;
  align-self: end;
}
#so-me {
  grid-column: 1;
  display: grid;
  grid-template-columns: 40% 60%;
  align-content: center;
}
.so-me-logo {
  height: 2.5rem;
}
a {
  text-decoration: none;
  color: #250a00;
}
p {
  color: #250a00;
  padding: 0.3rem;
}
#contact-info {
  margin: auto 0;
}
#mail-link {
  text-decoration: underline;
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
  #footer-box {
    grid-template-columns: 25% 3fr 4fr 25%;
    padding: 1rem 0 1rem 0;
  }
	#so-me {
		grid-column: 2;
		margin: auto;
	}
	.so-me-logo {
		width: fit-content;
	}
	a {
		display: inline-block;
	}
	#contact-info {
		justify-self: center;
	}
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>
