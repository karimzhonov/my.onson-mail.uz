<!-- <template>
    {{ coords }}
    <LMarker v-if="coords.latitude && coords.longitude" :lat-lng="[coords.latitude, coords.longitude]" />
</template> -->
<script>
import {findRealParent} from "./utils"
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
                const map = findRealParent(this)
                map.leafletObject.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
                this.coords = position.coords
            }, (e) => {
                console.log(e);
            })
        }
    }
}
</script>
