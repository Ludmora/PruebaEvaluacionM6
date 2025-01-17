<template>
  <div id="app">
    <nav>
      <router-link to="/"><img src="@/assets/home.png" alt="home"></router-link> |
      <router-link to="/listaJuegos"><img src="@/assets/game.png" alt="juegos"></router-link>|
      <router-link to="/about">About</router-link>|
      

    
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}

nav {
  background-color: aliceblue;
  padding: 30px;
  /* background-image: url('assets/pacman.gif');  */
  text-align:start ;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
