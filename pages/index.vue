<template>
    <BannerCalendar />
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 class="text-xl font-bold">{{ $t('Мои последние заказы') }}</h1>
        <div class="grid md:grid-cols-2 gap-2 lg:grid-cols-3">
            <OrderTable :completed="false" />
        </div>
    </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      loading: false
    }
  }
}
</script>
