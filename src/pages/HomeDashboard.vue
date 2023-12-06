<!-- eslint-disable max-len -->
<template>
  <main class="dashboard-container">
    <DashboardSection
      :title="dashboardTitles[0]"
      :excerpt="dashboardExcerpts[0]"
    />
  </main>
</template>

<script setup lang="ts">

import DashboardSection from '../components/DashboardSection.vue';
import { dashboardTitles, dashboardExcerpts } from '../service.ts';

</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>