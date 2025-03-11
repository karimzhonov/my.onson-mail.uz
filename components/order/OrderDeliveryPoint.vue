<template>
    <div class="md:w-[700px] md:h-[750px] w-full h-[90%]">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[41.3018622, 69.2684895]"
        :use-global-leaflet="false"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
          layer-type="base"
          name="OpenStreetMap"
        />
        <LCurrentLocation />
      </LMap>
    </div>
    <div class="mt-auto flex flex-col gap-2 p-4 pt-2 w-full">
      <Button variant="outline" class="mx-auto w-full">{{ $t('Сохранить') }}</Button>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'OrderDeliveryPoint',
    props: ['mode'],
    data() {
        return {
            zoom: 11,
        }
    }
  }
  </script>

<style>
.dark .leaflet-tile-container img {
    filter: invert(1);
}
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