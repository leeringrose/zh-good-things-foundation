<template>
  <div id="app">
    <AppHeader />
    <HomeDashboard />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}

:root {
  --header-text-weight: 700;
  --button-text-weight: 500;
  --body-text-weight: 400;
}

body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Rubik, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #262626;
}
</style>
