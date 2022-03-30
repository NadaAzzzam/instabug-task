<template>
  <div id="app">
    <nav>
      <router-link to="/GetAll/SalesTeam">Home</router-link> |
      <router-link to="/about">Team performance chart page</router-link>
    </nav>
    <div class="container-fluid">
    <router-view/>

    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    color: #2c3e50;
    text-decoration: none;
    

    &.router-link-exact-active {
    color: #0099ff;
  }
  }
}
</style>
