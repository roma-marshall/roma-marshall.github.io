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


<!--        <div class="mb-5 mt-16 md:my-0">-->
<!--          <p>Experience</p>-->
<!--        </div>-->
<!--        <div class="md:w-3/4">-->
<!--          <p class="mb-2">-->
<!--            <a href="https://www.tonview.xyz" target="_blank" class="underline hover:opacity-60">TonView</a>,-->
<!--            2024 – Now-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            CEO at TonView: Tracking of wallets and blockchain analysis-->
<!--          </p>-->
<!--          <p class="mt-5 mb-2">-->
<!--            <a href="https://www.blackbit.com" target="_blank" class="underline hover:opacity-60">Blackbit-->
<!--              digital Commerce GmbH</a>,-->
<!--            2022 – Now-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Clients: BTC Business Technology Consulting AG, Bikeleasing-Service GmbH, CRB Analyse Service GmbH, EXPRESSO Deutschland GmbH-->
<!--          </p>-->
<!--          <p class="mt-5 mb-2">-->
<!--            <a href="https://www.upwork.com" target="_blank" class="underline hover:opacity-60">Upwork Inc.</a>,-->
<!--            2021 – 2024-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Remote-->
<!--            Frontend Developer (vue3, tailwindcss, react)-->
<!--            App Developer (swift, uikit)-->
<!--          </p>-->
<!--          <p class="mt-5 mb-2">-->
<!--            <a href="https://www.amefa-med.com" target="_blank" class="underline hover:opacity-60">AMEFA-->
<!--              GmbH</a>, 2021 – 2022-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Full-time Frontend Developer-->
<!--          </p>-->
<!--          <p class="mt-5 mb-2">-->
<!--            <a href="https://www.browserwerk.de" target="_blank" class="underline hover:opacity-60">Browserwerk-->
<!--              GmbH</a>, 2018 – 2021-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Clients: NASPA Immobilen GmbH, Deutsche Lufthansa AG, KEGON AG, Degussa Bank AG, VAN HEES GmbH-->
<!--          </p>-->
<!--        </div>-->

<!--        <div class="mb-5 mt-16 md:my-0">-->
<!--          <p>Education</p>-->
<!--        </div>-->
<!--        <div class="md:w-3/4">-->
<!--          <p class="mb-5">-->
<!--            <a href="https://pimcore.com/en/developers/academy" target="_blank" class="underline hover:opacity-60">-->
<!--              Pimcore Academy</a>, 2023-->
<!--          </p>-->
<!--          <p class="mb-5">-->
<!--            <a href="https://www.refactoringui.com" target="_blank" class="underline hover:opacity-60">-->
<!--              Refactoring UI by Adam Wathan</a>, 2022-->
<!--          </p>-->
<!--          <p class="mb-2">-->
<!--            <a href="https://fes-wiesbaden.de" target="_blank" class="underline hover:opacity-60">-->
<!--              Friedrich Ebert School</a>, 2018 – 2021-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Computer Science, App Development-->
<!--          </p>-->
<!--          <p class="mt-5 mb-2">-->
<!--            <a href="https://www.worms.de" target="_blank" class="underline hover:opacity-60">-->
<!--              Municipality of Worms</a>, 2016 – 2017-->
<!--          </p>-->
<!--          <p class="pl-7">-->
<!--            Internship: IT Department-->
<!--          </p>-->
<!--        </div>-->

<!--        <div class="mb-5 mt-16 md:my-0">-->
<!--          <p>Contact</p>-->
<!--        </div>-->
<!--        <div class="space-y-2 md:w-3/4">-->
<!--          <p class="flex" data-aria="contact">-->
<!--            Email&nbsp;-->
<!--            <input class="hidden" type="text" value="roman_lytin@gmx.de" id="email">-->
<!--            <button onclick="copyEmail()" class="flex group">-->
<!--                    <span class="underline hover:opacity-60">-->
<!--                        roman_lytin@gmx.de-->
<!--                    </span>-->
<!--            </button>-->
<!--          </p>-->
<!--          <p>Github-->
<!--            <a href="https://github.com/roma-marshall"-->
<!--               target="_blank"-->
<!--               class="underline hover:opacity-60">-->
<!--              roma-marshall.git-->
<!--            </a>-->
<!--          </p>-->
<!--          <p data-aria="contact">Xing-->
<!--            <a href="https://www.xing.com/profile/Roman_Lytin/"-->
<!--               target="_blank"-->
<!--               class="underline hover:opacity-60">-->
<!--              l.roma-->
<!--            </a>-->
<!--          </p>-->
<!--          <p>Lower Saxony, Germany <span id="date"></span></p>-->
<!--        </div>-->

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import data from './data.js'


console.log(data)
</script>