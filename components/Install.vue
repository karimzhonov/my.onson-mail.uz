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
    methods: {
        install() {
            if (this.deferredPrompt) return this.deferredPrompt.prompt()
            this.$router.push(useLocalePath()('/install'))
        }
    }
}
</script>

<template>
    <Button class="m-2 p-0 w-6 h-6" id="install" variant="ghost" @click="install">
        <Download />
    </Button>
</template>