<template>
  <section class="container">
    <h2 class="promotional-block-title">
      {{ title }}
    </h2>
    <p class="standard promotional-block-excerpt">
      {{ excerpt }}
    </p>
    <div class="card-container">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :card-title="service"
        card-body="Lorem ipsum dolor sit amet"
      />
    </div>
    <div class="button-container">
      <BlockButton
        title="More about what we do"
      />
    </div>
    <section />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BlockButton from './core/BlockButton.vue';
import ServiceCard from './ServiceCard.vue';
import { useDataStore } from '../store/dataStore';
const { services } = useDataStore();

defineProps({
  title: {
    type: String,
    default: 'Block title here'
  },
  excerpt: {
    type: String,
    default: 'Block excerpt here'
  }
});
</script>

<style scoped>
.container {
  background-color: #497c8f;
  height: fit-content;
  padding: 3.375rem 7.59375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: white;
}
.promotional-block-title {
  width: fit-content;
  font-size: 3.25em;
  line-height: 1.2;
  display: inline-block;
}
.promotional-block-excerpt {
  font-size: 1.25em;
  font-weight: 500;
}
p {
  margin: 2.25rem 0;
  font-size: 3.25em;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
}
.card-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>