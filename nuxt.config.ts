// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NUXT_APP_BACKEND_HOST: process.env.NUXT_APP_BACKEND_HOST,
      VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-telegram-auth',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  colorMode: {
    classSuffix: ''
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'ru', language: 'ru', name: 'Русский', file: 'ru.json', cache: false },
      { code: 'uz-cl', language: 'uz-cl', name: 'O\'zbek', file: 'uz-cl.json', cache: false }
    ],
    defaultLocale: 'ru'
  },
})