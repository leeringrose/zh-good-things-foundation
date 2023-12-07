<template>
  <header class="utility-header navigation">
    <div class="header-container">
      <ul
        class="list"
      >
        <UtilityHeaderMenuItem
          style="margin-right: auto;"
          search-icon
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
.utility-header {
  padding: 0 5%;
}
.header-container {
  display: flex;
  background: #fff;
}
.list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  border: 1px dashed #f39695;
}
</style>
