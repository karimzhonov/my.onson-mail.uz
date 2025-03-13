<template>
    <BannerCalendar />
    <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 class="text-xl font-bold">{{ $t('Мои последние заказы') }}</h1>
        <div class="flex flex-wrap justify-center md:justify-start">
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
