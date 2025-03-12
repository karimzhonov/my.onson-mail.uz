<template>
    <Loading :loading="loading">
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div class="flex flex-wrap justify-center md:justify-start">
                <IPassport v-for="item in items" :key="item.id" :data="item" class="mb-2" />
                <div class="mx-2 cursor-pointer aspect-[3/2] w-[350px] rounded-xl bg-muted/50 flex justify-center items-center">
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