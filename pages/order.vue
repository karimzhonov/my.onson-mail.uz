<template>
    <Loading :loading="loading">
        <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h1 class="text-xl font-bold w-full">{{ $t('Доставление заказы') }}</h1>
            <div class="flex flex-wrap justify-center md:justify-start">
                <OrderTable :completed="true" />
            </div>
        </div>
    </Loading>
    <IDialog v-if="order_id" :open="true" @update:open="close">
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
            order: {},
        }
    },
    computed: {
        order_id() {
            return this.$route.query.id
        }
    },
    watch: {
        order_id(value) {
            console.log(value);
            if (value) this.fetch_order(value)
        }
    },
    async mounted() {
        await this.fetch_data()
        if (this.order_id) {
            await this.fetch_order(this.order_id)
        }
    },
    methods: {
        close(v) {
            console.log(v);
            return !v ? this.$router.replace('/order') : null
        },
        async fetch_order(id) {
            const {data} = await this.$api.get(`/cargo/order/order/${id}/`)
            this.order = data
            // this.$router.replace('/order')
        },
        async fetch_data() {
            this.loading = true
            const {data} = await this.$api.get('/cargo/order/order/')
            this.items = data    
            this.loading = false
        }
    }
}
</script>