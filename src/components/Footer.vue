<template>
    <div id="footer-box">
        <div id="so-me">
            <a class="so-me-logo" target="_blank" href="https://www.instagram.com/teige_nes_bygg_as/">
                <img class="so-me-logo" alt="Instagram" src="../assets/instagram.svg">
            </a>
            <a class="so-me-logo" target="_blank" href="https://www.facebook.com/TeigeNesByggAs">
                <img class="so-me-logo" alt="Facebook" src="../assets/facebook.svg">
            </a>
        </div>
        <div id="contact-info">
            <p id="mail">E-post:&emsp;<a id="mail-link" href = "mailto: abc@example.com">post@teigenes.no</a></p>
            <p id="telephone">Tlf.: &emsp;&emsp;<a id="telephone-link" href = "tel: 999 99 999">999 99 999</a></p>
        </div>
    </div>
</template>

<style scoped>
#footer-box {
    grid-row: 3;
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: #C2BBB0;
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
    color: #250A00;
}
p {
    color: #250A00;
    padding: .3rem;
}
#contact-info {
    margin: auto 0;
}
#mail-link {
    text-decoration: underline;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>