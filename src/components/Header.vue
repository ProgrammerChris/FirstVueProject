<template>
  <div id="header-box">
    <router-link to="/" >
      <div id="logo-div">
        <img id="logo-img" src="@/assets/logo.svg" alt="Logo">
        <h1 id="logo-text">Liksom Bygg AS</h1>  
      </div>
    </router-link>
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
a {
  text-decoration: none;
}
#header-box {
  grid-row: 1;
  display: grid;
  height: 6rem;
  z-index: 1;
  position: sticky;
  top: 0;
  grid-row: 1;
  grid-column: 1 / span 3;
  display: grid;
  background-color: #250A00;
  opacity: 0.85;
}
#logo-div {
  display: grid;
  grid-row: 1;
}
#logo-img {
  grid-column: 1;
  height: 3em;
  width: 3em;
  justify-self: end;
  align-self: center;
  display: inline;
}
#logo-text {
  color: #C2BBB0;
  grid-column: 2;
  font-size: 1.5rem;
  justify-self: start;
  align-self: center;
  margin: 0;
  padding-top: 1em;
  font-weight: normal;
  display: inline;
  text-decoration: none;
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
  ul {
    font-size: 1.5em;
  }
  #header-box {
    height: 8em;
    grid-template-columns: 35% auto 35%;
  }
  #logo-div {
    margin-left: 35%;
  }
  #logo-img {
    height: 7em;
    width: 7em;
  }
  #logo-text {
    font-size: 2.5rem;
    padding: 0;
    line-height: 2.5rem;
    margin: auto;
  }
  #nav {
  grid-row: 1;
  grid-column: 2;
  align-self: center;
  padding-top: 4em;
  }
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {

}
</style>
