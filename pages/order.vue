<template>
    <Loading :loading="loading">
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h1 class="text-xl font-bold w-full">{{ $t('Мои последние заказы') }}</h1>
            <div class="flex flex-wrap justify-center md:justify-start">
                <OrderTable :completed="false" />
                <h1 class="text-xl font-bold w-full">{{ $t('Доставление заказы') }}</h1>
                <OrderTable :completed="true"/>
            </div>
        </div>
    </Loading>
    <IDialog v-if="order.id" :open="true">
        <template v-slot:header>
            {{ order.number }}
        </template>
        <OrderView :data="order" />
    </IDialog>
</template>
<script>
export default {
    name: 'Order',
    data() {
        return {
            loading: true,
            items: [],
            order: {}
        }
    },
    async mounted() {
        await this.fetch_data()
        if (this.$route.query.id) {
            const {data} = await this.$api.get(`/cargo/order/order/${this.$route.query.id}/`)
            this.order = data
            this.$router.replace('/order')
        }
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