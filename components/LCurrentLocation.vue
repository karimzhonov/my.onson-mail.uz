<template>
    {{ coords }}
    <LMarker v-if="coords.latitude && coords.longitude" :lat-lng="[coords.latitude, coords.longitude]" />
</template>
<script>
export default {
    name: "CurrentLocation",
    data() {
        return {
            error: null,
            coords: {}
        }
    },
    mounted() {
        this.getLocation()
    },
    methods: {
        getLocation() {
            navigator.geolocation.watchPosition((position) => {
                console.log(position);
                this.coords = position.coords
                console.log(this.coords);
            }, (e) => {
                console.log(e);
            })
        }
    }
}
</script>
