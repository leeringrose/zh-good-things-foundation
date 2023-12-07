<template>
  <li class="nav-item">
    <a class="header-menu-link">
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
li {
  list-style-type: none;
  display: list-item;
}
.header-menu-link {
  color: black;
  display: block;
  padding: 2.16667rem 0.66667rem;
  font-size: 22px;
  font-weight: 700;
}
.header-menu-link:hover{
  color: #367d91;
  text-decoration: underline;
}
.header-menu-link:active{
  color: #2f8375;
}
.nav-item {
  padding: 12px;
  cursor: pointer;
  text-align: center;
}
</style>
