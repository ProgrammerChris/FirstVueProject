<template>
  <div id="header-box">
    <div id="logo-div">
      <router-link to="/" id="logo-img"><img src="../assets/logo.svg" alt="Logo" height="50" width="50"></router-link>
      <h1 id="logo-text">Teige Nes Bygg AS</h1>
    </div>
    <nav id="nav">
      <ul>
        <li><router-link to="/">Hjem</router-link></li>
        <li><router-link to="/prosjekter">Prosjekter</router-link></li>
        <li><router-link to="/omoss">Om meg</router-link></li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
#header-box {
  display: grid;
  background-color: #250A00;
  grid-template-rows: 100px 30px;
  opacity: 0.8;
}
#logo-div {
  display: grid;
  grid-template-rows: 70px;
  grid-row: 1;
  height: 70px;
}
#logo-img {
  grid-column: 1;
  justify-self: end;
  align-self: end;
}
#logo-text {
  grid-column: 2;
  font-size: 1.5em;
  justify-self: start;
  align-self: end;
  margin: 0;
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
  padding-left: 35px;
  padding-right: 35px;
  margin: 0;
}
li {
  list-style: none;
  display: inline;
}
</style>
