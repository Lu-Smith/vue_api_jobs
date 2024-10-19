<template>
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/jobs"
          class="text-customBlue-600 hover:text-customBlue-500 flex items-center"
        >
          <i class="pi pi-arrow-circle-left mr-3"></i> Back to Job Listings
        </RouterLink>
      </div>
    </section>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>