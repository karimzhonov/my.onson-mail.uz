<template>
    <div class="w-full h-[90%]">
      <LMap
        class="bg-background relative"
        ref="map"
        :zoom="zoom"
        :center="Object.values(center)"
        :use-global-leaflet="false"
        :options="{zoomControl: mode === 'w'}"
        @update:center="set_delivery_point"
        @ready="ready"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
          layer-type="base"
          name="OpenStreetMap"
        />
        <LCurrentLocation />
        <div :class="point_class" class="rounded-xl bg-green-600 absolute transition-all left-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%] w-[40px] h-[40px] p-1">
          <MapPin class="w-full h-full" color="#fff"/>
          <div class="border-2 border-green-600 w-[1px] h-[20px] absolute bottom-[-21px] left-[50%] translate-x-[-50%]"></div>
          <div class="border-2 border-green-600 bg-green-600 w-[10px] h-[5px] rounded-[50%] absolute bottom-[-23px] left-[50%] translate-x-[-50%]"></div>
        </div>
      </LMap>
    </div>
    <div v-if="mode === 'w'" class="mt-auto flex flex-col gap-2 p-4 pt-2 w-full">
      <Button @click="$emit('selected', center)" variant="outline" class="mx-auto w-full">{{ $t('Сохранить') }}</Button>
    </div>
  </template>
  
  <script>
  import { MapPin } from "lucide-vue-next";
  export default {
    name: 'OrderDeliveryPoint',
    props: ['mode', 'value'],
    emits: ['selected'],
    components: {MapPin},
    data() {
        return {
            zoom: 11,
            point_class: 'bottom-[50%]',
            center: {lat: 41.3018622, lng: 69.2684895}
        }
    },
    methods: {
      ready(map) {
        map.on("movestart", () => {
          this.point_class = 'bottom-[52%]'
        });
        if (this.value) {
          map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
        }
      },  
      set_delivery_point(e) {
        this.point_class = 'bottom-[50%]'
        this.center = e
      }
    }
  }
  </script>

<style>
/* .dark .leaflet-tile-container img {
    filter: invert(1);
} */
.leaflet-bar a {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border: none;
}

.leaflet-bar a:hover {
    background-color: hsl(var(--secondary));
}
.leaflet-control-attribution {
    display: none;
}
</style>