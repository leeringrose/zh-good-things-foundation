<template>
  <section
    :style="`background-image: url(${backgroundPath})`"
    class="promotional-block"
  >
    <div class="container">
      <h1 class="large promotional-block-title">
        {{ title }}
      </h1>
      <p class="standard promotional-block-excerpt">
        {{ excerpt }}
      </p>
      <BlockButton title="Read the blog now" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BlockButton from './core/BlockButton.vue';

defineProps({
  title: {
    type: String,
    default: 'Block title here'
  },
  excerpt: {
    type: String,
    default: 'Block excerpt here'
  },
  backgroundPath: {
    type: String,
    default: 'path',
    requird: true
  }
});
</script>

<style scoped>
.promotional-block {
  background-position: 50%;
  background-size: cover;
  position: relative;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 7.59375rem;
  padding-right: 7.59375rem;
  padding-top: 5.0625rem;
  padding-bottom: 5.0625rem;
}
.promotional-block-title {
  width: fit-content;
  color: white;
  background-color: #367d91;
  padding: 1.5rem 2.5rem;
  display: inline-block;
}
.promotional-block-excerpt {
  margin-top: 1.5em;
  background-color: white;
  color: #2f8375;
  padding: 1.5rem;
  max-width: 40rem;
}
</style>