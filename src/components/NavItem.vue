<template>
  <div class="nav-item">
    <h6>{{ title }}</h6>
  </div>
</template>

<script setup lang="ts">
defineProps(['title']);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>
