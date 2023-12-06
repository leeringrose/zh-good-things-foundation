<template>
  <div id="app">
    <img alt="Vue" src="./assets/logo.png">
    <NavItem title="click" />
  </div>
</template>

<script setup lang="ts">
import NavItem from './components/NavItem.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
