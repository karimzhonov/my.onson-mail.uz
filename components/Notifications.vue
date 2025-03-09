<script>
import { Bell } from "lucide-vue-next";
import { useMediaQuery } from '@vueuse/core'

export default {
    name: 'Notifications',
    components: { Bell },
    data() {
        return {
            open: false,
            isDesktop: useMediaQuery('(min-width: 768px)'),
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
                    await this.$api.post('/notification/save_information/', { subscription: data })
                    this.loaded = true
                });
            }
        },
    }
}
</script>

<template>
    <Button variant="ghost" @click="open = true; loadSw()">
        <Bell />
    </Button>

    <Dialog v-if="isDesktop" v-model:open="open">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            Test
        </DialogContent>
    </Dialog>

    <Drawer v-else v-model:open="open">
        <DrawerContent>
            <DrawerHeader class="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                    Make changes to your profile here. Click save when you're done.
                </DrawerDescription>
            </DrawerHeader>
            Test
            <DrawerFooter class="pt-2">
                <DrawerClose as-child>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>