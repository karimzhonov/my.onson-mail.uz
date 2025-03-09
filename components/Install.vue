<script>
import { Download } from "lucide-vue-next";
export default {
    name: 'Install',
    components: { Download },
    data() {
        return {
            deferredPrompt: null,
        }
    },
    mounted() {
        window.addEventListener("beforeinstallprompt", e => {
            e.preventDefault();
            // Stash the event so it can be triggered later.
            console.log(e)
            this.deferredPrompt = e;
        });
        window.addEventListener("appinstalled", () => {
            console.log("Installed");
            
            this.deferredPrompt = null;
        });
    },
}
</script>

<template>
    <Button v-if="deferredPrompt" variant="ghost" @click="deferredPrompt.prompt">
        <Download />
    </Button>
</template>