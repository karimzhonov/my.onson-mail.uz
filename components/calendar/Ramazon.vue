<template>
  <div class="px-3 bg-transparent border-b mb-3">
    <div class="relative">
    <div class="flex flex-row justify-between w-full">
      <div class="flex justify-center items-center md:flex-row flex-col">
        <h2 class="text-center md:text-2xl text-lg font-bold md:mr-5 mb-1 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-[#8cd66a]">{{$t('Время сухура')}}</h2>
        <span class="text-center flex flex-row items-center md:text-5xl text-2xl dark:text-white" style="font-weight: bolder">
          <img src="/assets/roza/sun-up.webp" alt="" width="45" class="mr-1">
          {{ item.time ?? '-' }}
        </span>
      </div>
      <div class="flex justify-center items-center md:flex-row flex-col">
        <h2 class="text-center md:text-2xl text-lg font-bold md:mr-5 mb-1 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-[#8cd66a]">{{$t('Время ифтара')}}</h2>
        <span class="text-center flex flex-row items-center md:text-5xl text-2xl dark:text-white" style="font-weight: bolder">
          <img src="/assets/roza/sun-down.webp" alt="" width="45" class="mr-1">
          {{ item.end_time ?? '-'  }}
        </span>
      </div>
      <div>
        <img width="75" src="/assets/roza/roza.svg" alt="test">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {Alert} from "@/components/ui/alert"
export default {
  name: 'Ramazon',
  props: ['item'],
  components: {Alert},
};
</script>
