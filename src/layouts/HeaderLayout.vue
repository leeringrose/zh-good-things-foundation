<template>
  <div>
    <UtilityHeader />
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import UtilityHeader from '../components/UtilityHeader.vue';
import AppHeader from '../components/AppHeader.vue';
</script>

<style scoped>
</style>