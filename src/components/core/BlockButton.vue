<template>
  <div class="buttons-grouped">
    <a
      :style="color==='white' ? `color: ${color}!important; background-color: transparent!important;`
        :`color: #cf1b46`"
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
  },
  color: {
    type: String,
    default: '#cf1b46'
  }
});
</script>

<style scoped>
a {
  border-color: white!important;
}
.buttons-grouped {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.6667em 1.5em;
  background-color: white;
  border-radius: 3em;
  font-weight: 700;
  border: 0.15em solid;
  text-transform: none;
  text-align: center;
  transition: opacity .25s;
  font-size: 112.5%;
}
</style>
