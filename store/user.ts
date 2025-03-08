import { defineStore } from "pinia";

export const useUser = defineStore("user", {
    state: () => ({user: {}}),
    actions: {
        async fetch_user() {
            const { $api } = useNuxtApp()
            const r = await $api.get("/oauth/me/")
            this.user = r?.data
        }
    }
})