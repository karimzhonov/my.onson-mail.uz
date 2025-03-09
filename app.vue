<template>
  <Toaster />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
import { token } from './composables'

useHead({
  title: 'Onson Mail',
  meta: [
    { name: 'description', content: '' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    { rel: 'manifest', href: "/manifest.json" }
  ]
})

onMounted(() => {
  const params = new URLSearchParams(window.location.search)

  if (params.get('access')) token.value.access = params.get('access')
  if (params.get('refresh')) token.value.refresh = params.get('refresh')
  window.history.replaceState({}, document.title, window.location.pathname);
})
</script>