<template>
  <li class="list-item">
    <a
      class="container"
      href="#"
    >
      <img
        v-if="searchIcon !== null"
        src="@/assets/icon/search.png"
        alt="search_icon"
        width="20px"
        height="20px"
      >
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  searchIcon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true,
    default: 'button'
  }
});
</script>

<style scoped>
img {
  margin-right: 0.6667em;
}
.container {
  display: flex;
  padding: 0.6667em 1.5em;
}
.list-item:hover {
  background: #ececec;
}
.list-item {
  height: 100%;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
</style>
