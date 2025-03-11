<template>
    <Loading :loading="loading">
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h1 class="text-xl font-bold">{{ $t('Мои последние заказы') }}</h1>
            <div class="grid auto-rows-min gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <OrderTable :completed="false" />
                <h1 class="text-xl font-bold lg:col-span-2 xl:col-span-3 2xl:col-span-4">{{ $t('Доставление заказы') }}</h1>
                <OrderTable :completed="true"/>
            </div>
        </div>
    </Loading>
</template>
<script>
export default {
    name: 'Order',
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
            const {data} = await this.$api.get('/cargo/order/order/')
            this.items = data    
            this.loading = false
        }
    }
}
</script>