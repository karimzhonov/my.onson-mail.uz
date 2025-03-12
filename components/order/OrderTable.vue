<template>
    <Loading :loading="loading">
        <IDialog v-for="item in process" :key="item.id">
            <template v-slot:trigger>
                <Order :data="item" class="mb-3" />
            </template>
            <template v-slot:header>
                {{ item.number }}
            </template>
            <OrderView :data="item" />
        </IDialog>
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