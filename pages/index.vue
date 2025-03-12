<template>
    <BannerCalendar />
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 class="text-xl font-bold">{{ $t('Мои последние заказы') }}</h1>
        <div class="grid auto-rows-min gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
