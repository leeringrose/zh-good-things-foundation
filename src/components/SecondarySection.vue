<template>
  <section
    class="promotional-block"
  >
    <div class="foreground">
      <img
        :src="backgroundPath"
        alt="CM1009-scaled"
        width="100%"
        height="100%"
      >
    </div>
    <div class="container">
      <h2 class="promotional-block-title">
        {{ title }}
      </h2>
      <p class="standard promotional-block-excerpt">
        {{ excerpt }}
      </p>
      <BlockButton 
        text-color="white"
        title="Learn more about us"
        background-color="transparent"
      />
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
.foreground {
  flex: 1;
}
.promotional-block {
  display: flex;
  background-position: 50%;
  background-size: cover;
  position: relative;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  color: white;
  background-color: #498077;
  padding: 4.25rem 3rem;
}
.promotional-block-title {
  font-size: 3.25em;
  line-height: 1.2;
  display: inline-block;
}
.promotional-block-excerpt {
  font-size: 2.25em;
}
</style>