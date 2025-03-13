<template>
  <component  v-for="day in calendar" :key="day.id" :is="type_to_component[day.type]" :item="day" />
</template>

<script>
import Ramazon from "@/components/calendar/Ramazon.vue";
export default {
  data() {
    return {
      calendar: [],
      type_to_component: {
        roza: 'Ramazon'
      }
    };
  },
  components: { Ramazon },
  async mounted() {
    const { data } = await this.$api.get(`/calendar/`)
    this.calendar = data
  }
};
</script>

