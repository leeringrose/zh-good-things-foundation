<template>
  <li class="nav-item">
    <span>{{ title }}</span>
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
}
.nav-item {
  padding: 12px;
  cursor: pointer;
  text-align: center;
}
.nav-item:hover {
  background-color: rgb(0, 0, 0, 0.1);
}
span {
  font-size: 16px;
  font-weight: 700;
}
</style>
