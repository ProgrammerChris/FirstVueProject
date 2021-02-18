<template>
  <div id="header-box">
    <div id="logo-div">
      <router-link to="/" id="logo-img"><img src="../assets/logo.svg" alt="Logo"></router-link>
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
  grid-template-rows: inherit;
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
  #header-box {
    grid-template-rows: 150px;
    grid-template-columns: 40% 60%;
  }
  #logo-div {
    grid-column: 1;
  }
  #logo-img {
    height: 100px;
    width: 100px;
    align-self: center;
  }
  #logo-text {
    font-size: 2.3em;
    align-self: center;
    padding-top: 1em;
  }
  #nav {
    grid-row: 1;
    grid-column: 2;
    align-self: center;
    padding-top: 4em;
  }
  #nav a {
    color: #C2BBB0;
    font-size: 1.5em;
    text-decoration: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
}
/* Mobile landscape mode */
@media only screen and (max-width: 812px) and (max-height: 414px) {
#header-box {
    grid-template-rows: 50px;
    grid-template-columns: 40% 60%;
  }
  #logo-div {
    grid-column: 1;
  }
  #logo-img {
    height: 30px;
    width: 30px;
    align-self: center;
  }
  #logo-text {
    font-size: .875em;
    align-self: center;
    padding-top: 1em;
  }
  #nav {
    grid-row: 1;
    grid-column: 2;
    align-self: center;
    padding-top: .5em;
  }
  #nav a {
    color: #C2BBB0;
    font-size: 1em;
    text-decoration: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  #nav{
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
