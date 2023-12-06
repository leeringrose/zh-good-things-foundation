<!-- eslint-disable max-len -->
<template>
  <div class="dashboard-container">
    <slot />
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
section {
  margin-top: 0;
  background-image: url(
    "https://www.goodthingsfoundation.org/wp-content/uploads/2023/10/Website-banners-Canva-Banner-2.png"
    );
}
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>