<template>
  <div class="absolute dark:bg-[#221f28] dark:text-[#d2cfc3] -z-[9999]">
    <div class="text-base md:text-lg tracking-wide m-5 md:m-20 md:space-y-12">
      <div v-for="item in data" class="grid grid-cols-1 md:grid-cols-2">
        <div class="mb-5 mt-5 md:my-0">
          <p>{{ item.title }}</p>
        </div>
        <div class="w-11/12 md:w-3/4">
          <p v-for="child in item.text">
            {{ child }}
          </p>
        </div>
      </div>

      <div v-for="item in data2" class="grid grid-cols-1 md:grid-cols-2">
        <div class="mb-5 mt-16 md:my-0">
          <p>{{ item.title }}</p>
        </div>
        <div class="md:w-3/4 space-y-7">
          <div class="" v-for="child in item.content">
            <p class="mb-2">
              <a :href="child.link" target="_blank" class="underline hover:opacity-60">{{ child.text }}</a>,
              {{ child.date }}
            </p>
            <p class="pl-7">
              {{ child.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import data from './data.js'
import data2 from './data2.js'


console.log(data2)
</script>