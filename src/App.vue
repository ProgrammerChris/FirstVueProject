<template>
  <Header/>
  <section class="content">
    <router-view/>
  </section>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "Avenir";
  src: local("Avenir"),
   url(./assets/font/AvenirLTStd-Book.otf) format("truetype");
}
html {
  overflow-y: scroll;
  background: #896D5C;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
body {
  margin: 0;
}
#app {
  display: grid;
  grid-template-columns: 10% auto 10%;
  gap: 1rem 1rem;
  height: 100%;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #C2BBB0;
}
.content {
  grid-row: 2;
  grid-column: 2;
	display: grid;
  gap: 1.5rem;
}
p {
	text-align: left;
	padding: .5rem .7rem;
	font-size: 1.125rem;
	line-height: 1.4rem;
	margin: 0;
}

/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
  #app {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 8em auto 6em;
  }
  p {
    text-align: left;
    padding: .5rem .7rem;
    font-size: 1.5rem;
    line-height: 1.7rem;
    margin: 0;
  }
  .content {
    gap: 0;
  }
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
}
</style>
