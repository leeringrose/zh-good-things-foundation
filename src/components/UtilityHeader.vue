<template>
  <header class="utility-header">
    <div class="header-container">
      <ul class="list">
        <UtilityHeaderMenuItem
          search-icon="true"
          title="Search"
        />
        <UtilityHeaderMenuItem
          title="Learn"
          style="border-bottom: 3px solid #2f8375;"
        />
        <UtilityHeaderMenuItem
          title="Donate"
          style="background-color: #cf1b46; color: #fff"
        />
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import UtilityHeaderMenuItem from './core/UtilityHeaderMenuItem.vue';
</script>

<style scoped>
.header-container {
  display: flex;
  background: #fff;
  padding-left: 7.59375rem;
  padding-right: 7.59375rem;
}
.list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
</style>
