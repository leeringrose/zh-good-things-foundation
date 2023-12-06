<template>
  <div id="app">
    <AppHeader />
    <HomeDashboard />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import HomeDashboard from './pages/HomeDashboard.vue';
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
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
  color: #262626;
}

.large {
  font-size: 3.375em;
  line-height: 1.1;
  font-weight: 400;
}

.standard {
  font-size: 1.5em;
  line-height: 1.3;
  font-weight: 400;
}

.navigation {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 1.5;
}
</style>
