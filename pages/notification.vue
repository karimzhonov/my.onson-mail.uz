<script>
export default {
    name: 'Notification',
    async mounted() {
        if (!this.$route.query.id) return this.$router.push(useLocalePath()('/'))
        try{
            const { data } = await this.$api.patch(`/notification/${this.$route.query.id}/read/`)
            this.$router.push(useLocalePath()(data.url))
        } catch {
            return this.$router.push(useLocalePath()('/'))
        }
    }
}
</script>
<template>
    <Loading :loading="true"/>
</template>