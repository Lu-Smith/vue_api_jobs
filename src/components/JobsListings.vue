<template>
  <h2>Jobs Listings</h2>
</template>

<script setup lang="ts">
  import jobData from '../jobs.json';
  import { ref } from 'vue';

  const jobs = ref(jobData);
  console.log(jobs.value);
</script>