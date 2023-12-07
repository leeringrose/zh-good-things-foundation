<template>
  <div class="card">
    <h2 class="card-title">
      {{ cardTitle }}
    </h2>
    <p class="standard card-body">
      {{ cardBody }}
    </p>
    <BlockButton
      title="Read more"
      border-color="black"
    />
    <section />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BlockButton from './core/BlockButton.vue';

defineProps({
  cardTitle: {
    type: String,
    default: 'Card title here'
  },
  cardBody: {
    type: String,
    default: 'Card body here'
  }
});
</script>

<style scoped>
.card {
  background-color: #ececec;
  padding: 3.5rem 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  color: black;
}
.card-title {
  width: fit-content;
  font-size: 1.8em;
  display: inline-block;
  font-weight: 800;
}
.card-body {
  font-size: 1em;
}
p {
  margin-top: 2.25rem;
  font-size: 3.25em;
}
select {
  width: 20rem!important;
  font-size: 1em;
  border: none;
  color: #497c8f;
  text-decoration: underline;
  cursor: pointer;
}
</style>