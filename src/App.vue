<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  color: #000;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
p {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Rubik, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #262626;
}

.large {
  font-size: 3.775em;
  line-height: 1.1;
  font-weight: 600;
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

.section {
  border-top: 1px solid #ccc;
}

</style>
