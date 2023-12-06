<template>
  <div class="buttons-grouped">
    <a
      class="btn"
      href="https://www.goodthingsfoundation.org/digital-inclusion-time-for-action-not-words/"
    >
      {{ title }}
    </a>
  </div>
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
.buttons-grouped {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.6667em 1.5em;
  border-color: white;
  background-color: white;
  color: #cf1b46;
  border-radius: 3em;
  font-weight: 700;
  border: 0.15em solid;
  text-transform: none;
  text-align: center;
  transition: opacity .25s;
  font-size: 112.5%;
}
</style>
