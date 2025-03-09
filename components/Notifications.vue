<script>
import { Bell } from "lucide-vue-next";

export default {
    name: 'Notifications',
    components: { Bell },
    data() {
        return {
            open: false
        }
    },
    mounted() {
        this.loadSw()
    },
    methods: {
        loadSw() {
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
                    await this.$api.post('/notification/save_information/', {subscription: data})
                });
            }
        },
    }
}
</script>

<template>
    <Drawer>
        <DrawerTrigger as-child>
            <Button variant="ghost">
                <Bell />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div class="mx-auto w-full max-w-sm">
                <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
            </div>
        </DrawerContent>
    </Drawer>
</template>