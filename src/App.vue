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
        <div class="md:w-3/4 space-y-5">
          <div v-for="child in item.content">
            <p class="mb-2">
              <a :href="child.link" target="_blank" class="underline hover:opacity-60">{{ child.text }}</a>,
              <span>{{ child.date }}</span>
            </p>
            <p class="pl-7">
              {{ child.description }}
            </p>
          </div>
        </div>
      </div>

      <div v-for="item in data3" class="grid grid-cols-1 md:grid-cols-2">
        <div class="mb-5 mt-16 md:my-0">
          <p>{{ item.title }}</p>
        </div>
        <div class="md:w-3/4 space-y-2">
          <div v-for="child in item.content">
            <p class="mb-2 space-x-2" v-if="isEmail || child.text != 'Email'">
              <span>{{ child.text }}</span>
              <a :href="child.link" target="_blank" class="underline hover:opacity-60">{{ child.text2 }}</a>
            </p>
          </div>
          <p>Lower Saxony, Germany <span>{{ currentTime }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import moment from 'moment'
import data from './data/data.js'
import data2 from './data/data2.js'
import data3 from './data/data3.js'

const currentTime = ref()
const updateCurrentTime = () => {
  currentTime.value = moment().format('LTS');
}

const isEmail = ref(false)
const fetchData = async () => {
  const url = 'https://api.ipify.org?format=json'
  const response = await fetch(url)
  const data = await response.json()

  const url2 = `https://api.ipbase.com/v1/json/${data.ip}`
  const response2 = await fetch(url2)
  const data2 = await response2.json()

  isEmail.value = !(
      data.ip
      && (data2['country_code'] !== 'DE'
      && data2['country_code'] !== 'CH'
      && data2['country_code'] !== 'AT')
  )
}

onMounted(() => {
  updateCurrentTime()
  fetchData()
})

onUpdated(() => {
  currentTime.value = moment().format("LTS");
  setInterval(() => updateCurrentTime(), 1000);
})
</script>

<style scoped>
@media (prefers-color-scheme: light) {
  ::selection {
    color: white;
    background: black;
  }
}

@media (prefers-color-scheme: dark) {
  ::selection {
    color: beige;
    background: darkgoldenrod;
  }
}

body {
  font-family: 'Open Sans', sans-serif;
}
</style>