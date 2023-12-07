<template>
  <main class="dashboard-container">
    <PrimarySection
      :title="dashboardTitles[0]"
      :excerpt="dashboardExcerpts[0]"
      :background-path="dashboardBlockBackgrounds[0]"
    />
    <SecondarySection
      :title="dashboardTitles[1]"
      :excerpt="dashboardExcerpts[1]"
      :background-path="dashboardBlockBackgrounds[1]"
    />
    <TertiarySection
      :title="dashboardTitles[2]"
      :excerpt="dashboardExcerpts[2]"
    />
    <ServiceSection
      :title="dashboardTitles[3]"
      :excerpt="dashboardExcerpts[3]"
    />
  </main>
</template>

<script setup lang="ts">
import PrimarySection from '../components/PrimarySection.vue';
import SecondarySection from '../components/SecondarySection.vue';
import TertiarySection from '../components/TertiarySection.vue';
import ServiceSection from '../components/ServiceSection.vue';
import { dashboardTitles, dashboardExcerpts, dashboardBlockBackgrounds } from '../service';

</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>