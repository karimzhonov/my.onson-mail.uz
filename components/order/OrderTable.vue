<template>
    <Loading :loading="loading" class="lg:col-span-2 xl:col-span-4">
        <IDialog v-for="item in process" :key="item.id">
            <template v-slot:trigger>
                <Order :data="item" class="mb-3" />
            </template>
            <template v-slot:header>
                {{ item.number }}
            </template>
            <OrderView :data="item" />
        </IDialog>
        <p v-if="process.length === 0" class="text-center text-md w-full"><i>{{ $t('Доставка еще не осуществлена, пока нет данных.') }}</i></p>
    </Loading>
</template>
<script>
export default {
    name: 'OrderTable',
    props: ['completed'],
    data() {
        return {
            loading: true,
            process: []
        }
    },
    async mounted() {
        await this.fetch_data()
    },
    methods: {
        async fetch_data() {
            this.loading = true
            const params = {}
            params.status_sql = this.completed ? 'process_received_datetime' : [
                "create_time", "departure_datetime",
                "enter_uzb_datetime", "process_customs_datetime",
                "process_local_datetime"
            ].join(',')
            const { data } = await this.$api.get('/cargo/order/order/', {params})
            this.process = data
            this.loading = false
        }
    }
}
</script>