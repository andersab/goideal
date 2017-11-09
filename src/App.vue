<template>
    <!-- <img src="./assets/logo.png"> -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Home</span>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Home</span>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
          <router-link class="mdl-navigation__link" to="/mindmap" @click.native="hideMenu">Mindmap</router-link>
          <router-link class="mdl-navigation__link" to="/idea" @click.native="hideMenu">Idea</router-link>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-view/>
        </div>
      </main>
    </div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
