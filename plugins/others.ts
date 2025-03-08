import { createPinia } from 'pinia'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    
    nuxtApp.vueApp.use(pinia)
    nuxtApp.vueApp.directive('auto-animate', vAutoAnimate)
})