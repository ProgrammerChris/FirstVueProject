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
            <p id="mail">E-post:</p><a id="mail-link" href = "mailto: abc@example.com">post@teigenes.no</a>
            <p id="telephone">Tlf.:</p><a id="telephone-link" href = "tel: 999 99 999">999 99 999</a>
        </div>
    </div>
</template>

<style>
#footer-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: #C2BBB0;
    grid-template-rows: 90px;
    padding-left: 30px;
}
#so-me {
    grid-column: 1;
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: center;
}
.so-me-logo {
    height: 45px;
}
#contact-info {
    display: grid;
    grid-column: 2;
    grid-template-columns: 35% 65%;
    grid-template-rows: 50% 50%;
    font-size: 1em;
    color: #250A00;
}
a {
    text-decoration: none;
    color: #250A00;
}
#contact-info p {
    float: left;
    padding-left: 30px;
    margin: 0;
    text-align: start;
}
#mail {
    align-self: end;
    padding-bottom: 10px;
}
#telephone {
    padding-top: 5px;
}
#mail-link {
    grid-row: 1;
    grid-column: 2;
    text-align: start;
    align-self: end;
    padding-bottom: 10px;
    text-decoration: underline;
}
#telephone-link {
    grid-row: 2;
    grid-column: 2;
    text-align: start;
    align-self: start;
    padding-top: 5px;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
    #footer-box {
        grid-template-columns: 50% 50%;

    }
    #so-me {
        width: 25%;
        justify-self: center;
    }
    #contact-info {
        width: 50%;
        justify-self: center;
    }
}

/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
    #footer-box {
        grid-template-columns: 40% 60%;
        grid-template-rows: 45px;
    }
    #so-me {
        width: 50%;
        justify-self: center;
    }
    .so-me-logo {
        height: 30px;
    }
    #mail {
        padding: 0;
    }
    #mail-link {
        padding: 0;
    }
    #telephone {
        padding: 0;
    }
    #telephone-link {
        padding: 0;
    }

}
</style>