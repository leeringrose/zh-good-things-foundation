<!-- eslint-disable max-len -->
<template>
  <main class="dashboard-container">
    <DashboardSection
      :title="dashboardTitles[0]"
      :excerpt="dashboardExcerpts[0]"
      :background-path="dashboardBlockBackgrounds[0]"
    />
    <DashboardSection
      :title="dashboardTitles[1]"
      :excerpt="dashboardExcerpts[1]"
    />
  </main>
</template>

<script setup lang="ts">
import DashboardSection from '../components/DashboardSection.vue';
import { dashboardTitles, dashboardExcerpts, dashboardBlockBackgrounds } from '../service.ts';

</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
section.promotional-block:not(:first-child)  {
  margin: 1rem 0;
}
</style>