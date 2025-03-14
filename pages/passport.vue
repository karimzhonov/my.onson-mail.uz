<template>
    <Loading :loading="loading">
        <div class="flex flex-1 flex-col gap-4">
            <div class="grid md:grid-cols-2 gap-2 xl:grid-cols-3">
                <IPassport v-for="item in items" :key="item.id" :data="item" class="mb-2" />
                <div class="cursor-pointer aspect-[3/2] max-w-[94vw] rounded-xl bg-muted/50 flex justify-center items-center">
                    <CirclePlus size="70" color="#ccc"/>
                </div>
            </div>
        </div>
    </Loading>
</template>
<script>
import {CirclePlus} from "lucide-vue-next"

export default {
    name: 'Passport',
    components: {CirclePlus},
    data() {
        return {
            loading: true,
            items: []
        }
    },
    async mounted() {
        await this.fetch_data()
    },
    methods: {
        async fetch_data() {
            this.loading = true
            const { data } = await this.$api.get('/cargo/client/client/')
            this.items = data        
            this.loading = false
        }
    }
}
</script>