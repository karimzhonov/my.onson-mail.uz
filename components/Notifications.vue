<script>
import { Bell } from "lucide-vue-next";

export default {
    name: 'Notifications',
    components: { Bell },
    data() {
        return {
            open: false,
            loaded: false,
        }
    },
    methods: {
        loadSw() {
            if (this.loaded) return
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
                    function (registration) {
                        // Registration was successful
                        console.log(
                            "ServiceWorker registration successful with scope: ",
                            registration.scope
                        );
                    },
                    function (err) {
                        // registration failed :(
                        console.log("ServiceWorker registration failed: ", err);
                    }
                );

                const {
                    public: { VAPID_PUBLIC_KEY },
                } = useRuntimeConfig();

                navigator.serviceWorker.ready.then(async (registration) => {
                    const pushServerPublicKey = VAPID_PUBLIC_KEY;
                    // subscribe and return the subscription
                    const subscription = await registration.pushManager
                        .subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: pushServerPublicKey,
                        })

                    const d = JSON.parse(JSON.stringify(subscription))

                    const data = {
                        "user_agent": window.navigator.userAgent,
                        "browser": navigator.userAgentData.brands[1]?.brand ?? window.navigator.userAgent,
                        "endpoint": d.endpoint,
                        "auth": d.keys.auth,
                        "p256dh": d.keys.p256dh
                    }
                    await this.$api.post('/notification/save_information/', { subscription: data }, {}, false)
                    this.loaded = true
                });
            }
        },
    }
}
</script>

<template>
    <Sheet>
        <SheetTrigger>
            <Button id="notifications" variant="ghost" @click="loadSw">
                <Bell />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>{{$t('Уведомление')}}</SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>