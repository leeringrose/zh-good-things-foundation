<template>
  <div id="app">
    <AppHeader />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
  Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262626;
}
</style>
