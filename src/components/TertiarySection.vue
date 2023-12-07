<template>
  <section class="container">
    <h2 class="promotional-block-title">
      {{ title }}
    </h2>
    <p class="standard promotional-block-excerpt">
      {{ excerpt }}
    </p>
    <div class="promotion-sector">
      <P>
        I am <select>
          <option
            v-for="(person, index) in personOptions"
            :key="index"
          >
            {{ person }}
          </option>
        </select>
        and I <select>
          <option
            v-for="(initiator, index) in digitalInitiatorOptions"
            :key="index"
          >
            {{ initiator }}
          </option>
        </select>
      </P>
      <BlockButton
        style="margin: 0 0 0 1rem;"
        title="Start now"
        text-color="white"
        background-color="#bb3246"
        border-color="#9a2b3d"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import BlockButton from './core/BlockButton.vue';
import { useDataStore } from '@/store/dataStore';
const { personOptions, digitalInitiatorOptions } = useDataStore();

defineProps({
  title: {
    type: String,
    default: 'Block title here'
  },
  excerpt: {
    type: String,
    default: 'Block excerpt here'
  }
});

</script>

<style scoped>
.container {
  background-color: #ececec;
  height: fit-content;
  padding: 3.375rem 7.59375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.promotional-block-title {
  width: fit-content;
  font-size: 3.25em;
  line-height: 1.2;
  display: inline-block;
}
.promotional-block-excerpt {
  font-size: 2.25em;
}
.promotion-sector {
  display: flex;
  text-align: center;
  background-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}
p {
  font-size: 3.25em;
  margin: 2rem;
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