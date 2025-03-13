<template>
  <!-- <VTour backdrop highlight ref="mainTour" :steps="tour_steps" name="mainTour" :skip-button="tour_buttons.skipBtn"
    :next-button="tour_buttons.nextBtn" :prev-button="tour_buttons.prevButton" :finish-button="tour_buttons.finishButton" /> -->
  <Toaster />
  <div class="absolute top-[4rem] inset-x-0 flex items-start h-screen">
        <div
            class="h-64 w-2/3 bg-gradient-to-br from-[#8cd66a] opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
        </div>
        <div
            class="h-24 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
        </div>
        <div
            class="h-24 w-3/5 bg-gradient-to-r bottom-0 absolute left-0 from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
        </div>
        <div
            class="h-36 w-3/5 bg-gradient-to-br bottom-0 absolute right-0 from-[#8cd66a] opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
        </div>
    </div>
    
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
import { tour_steps, tour_buttons } from "@/components/utils"
import { token } from './composables'

useHead({
  title: 'Onson Mail',
  meta: [
    { name: 'description', content: '' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'Onson Mail' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    { rel: 'manifest', href: "/manifest.json" }
  ]
})

const mainTour = ref(null);

onMounted(() => {
  if (useRoute().query.access) token.value.access = useRoute().query.access
  if (useRoute().query.refresh) token.value.refresh = useRoute().query.refresh
  // mainTour.value?.startTour()
})
</script>

<style>
#nt-action-prev {
  display: none;
}
</style>