<template>
  <nav class="bg-customBlue-800 border-b border-customBlue-600">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto rounded-md" :src="logo" alt="Vue Jobs" />
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <a
                href="/"
                class="text-white bg-customBlue-600 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >Home</a
              >
              <a
                href="jobs.html"
                class="text-white hover:bg-customBlue-600 hover:text-white rounded-md px-3 py-2"
                >Jobs</a
              >
              <a
                href="add-job.html"
                class="text-white hover:bg-customBlue-600 hover:text-white rounded-md px-3 py-2"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import logo from '../assets/job-search.gif';
</script>