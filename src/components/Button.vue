<template>
  <button @click="$router.push('kontakt')"><span>Få et pristilbud</span></button>
</template>

<style scoped>
#contact-me {
  height: 3.5rem;
  width: 9rem;
  background-color: #243f50;
  color: #c2bbb0;
  border: none;
  border-radius: 2px;
  font-size: 1.125rem;
  cursor: pointer;
  outline: none;
  padding: 0;
}
#contact-me span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
#contact-me span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -1.5rem;
  transition: 0.5s;
}
#contact-me:hover span {
  padding-right: 1rem;
}

#contact-me:hover span:after {
  opacity: 1;
  right: 0;
}
#contact-me:active {
  transform: translateY(1px) translateX(1px);
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
  #contact-me {
    height: 7rem;
    width: 15rem;
    font-size: 1.8rem;
  }
}
</style>
