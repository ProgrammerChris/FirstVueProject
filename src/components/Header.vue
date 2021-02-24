<template>
  <div id="header-box">
    <div id="logo-div">
      <router-link to="/" id="logo-img"><img src="@/assets/logo.svg" alt="Logo"></router-link>
      <h1 id="logo-text">Teige Nes Bygg AS</h1>
    </div>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Hjem</router-link></li>
        <li><router-link to="/omoss">Om oss</router-link></li>
        <li><router-link to="/galleri">Galleri</router-link></li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style>
#header-box {
  z-index: 1;
  position: sticky;
  top: 0;
  grid-row: 1;
  grid-column: 1 / span 3;
  display: grid;
  height: 100px;
  background-color: #250A00;
  opacity: 0.85;
}
#logo-div {
  display: grid;
  grid-row: 1;
}
#logo-img {
  grid-column: 1;
  height: 50px;
  width: 50px;
  justify-self: end;
  align-self: center;
}
#logo-text {
  grid-column: 2;
  font-size: 1.5em;
  justify-self: start;
  align-self: center;
  margin: 0;
  padding-top: 1em;
  font-weight: normal;
}
#nav {
  grid-row: 2;
}
#nav a {
  color: #C2BBB0;
  font-size: 1.125em;
  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
#nav a.router-link-exact-active {
  color: #896D5C;
  border-bottom: none;
}
ul {
  display: flex;
  justify-content: space-between;
  justify-self: center;
  padding-left: 10%;
  padding-right: 10%;
  margin: 0;
}
li {
  list-style: none;
  display: inline;
}
/* Desktop and large tablet screens */
@media only screen and (min-width: 950px) {
  
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {

}
</style>
