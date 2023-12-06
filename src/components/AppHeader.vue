<template>
  <div class="header-container">
    <span>{{ title }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: 'Welcome!'
  }
});

props.title;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  display: flex;
  padding: 10px;
  height: 30px;
}
</style>
