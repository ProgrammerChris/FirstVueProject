<template>
  <section class="content">
    <router-view/>
  </section>
  <Header/>
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
  background: #896D5C;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
body {
  margin: 0 0 120px 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #C2BBB0;
}
.content {
	display: grid;
  grid-template-rows: 120px auto;
  grid-template-columns: 100vw;
	justify-content: center;
}
p {
	text-align: left;
	padding: 15px 20px;
	font-size: 1.125em;
	line-height: 1.4em;
	margin: 0;
}
.content-wrapper {
	padding: 20px 0 10px 0;
	justify-self: center;
}
</style>
