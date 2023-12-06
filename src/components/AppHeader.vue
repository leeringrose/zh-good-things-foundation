<template>
  <header class="header-container">
    <a
      href="https://www.goodthingsfoundation.org"
      class="standard-header-logo"
    >
      <img
        src="@/assets/good-things-foundation-logo.png"
        alt="Company Logo"
        heigh="100%"
        width="auto"
      >
    </a>
    <ul class="hadear-nav-container">
      <NavItem
        v-for="(title, index) in navTitles"
        :key="index"
        :title="title"
      >
        {{ title }}
      </NavItem>
    </ul>
  </header>
</template>

<script setup lang="ts">

import NavItem from './core/NavItem.vue';
import { navTitles } from '@/service';

</script>

<style scoped>

img {
  border: none;
  display: block;
  height: 100%;
}
.standard-header-logo {
  height: 100%;
  width: auto;
  margin-right: 1rem;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 108px;
  padding: 10px 5%;
}
.hadear-nav-container {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
