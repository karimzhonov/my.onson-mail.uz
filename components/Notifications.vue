<script>
import { Bell } from "lucide-vue-next";

export default {
    name: 'Notifications',
    components: { Bell },
    data() {
        return {
            open: false,
            loaded: false,
            text: 'test'
        }
    },
    methods: {
        loadSw() {
            if (this.loaded) return
            this.text = window.navigator.standalone
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.register("/sw.js?v=2", { scope: "/" }).then(
                    function (registration) {
                        // Registration was successful
                        console.log(
                            "ServiceWorker registration successful with scope: ",
                            registration.scope
                        );
                    },
                    function (err) {
                        // registration failed :(
                        this.text = err
                    }
                );

                const {
                    public: { VAPID_PUBLIC_KEY },
                } = useRuntimeConfig();

                navigator.serviceWorker.ready.then(async (registration) => {
                    try {

                    
                    this.text = 'ready'
                    const permission = await Notification.requestPermission();
                    if (permission === 'granted') {
                        console.log('Разрешение на уведомления получено!');
                        subscribeToPush();
                    } else {
                        console.warn('Уведомления отключены пользователем.');
                    }

                    const pushServerPublicKey = VAPID_PUBLIC_KEY;
                    this.text = VAPID_PUBLIC_KEY
                    // subscribe and return the subscription
                    const subscription = await registration.pushManager
                        .subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: pushServerPublicKey,
                        })
                    this.text = JSON.stringify(subscription)
                    const d = JSON.parse(JSON.stringify(subscription))

                    const data = {
                        "user_agent": window.navigator.userAgent,
                        "browser": window.navigator.userAgent,
                        "endpoint": d.endpoint,
                        "auth": d.keys.auth,
                        "p256dh": d.keys.p256dh
                    }
                    const r = await this.$api.post('/notification/save_information/', { subscription: data }, {}, false)
                    this.text = JSON.stringify(r.data)
                    this.loaded = true
                } catch (e) {
                    this.text = JSON.stringify(e)
                }
                });
            } else {
                this.text = 'not support'
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
                {{ text }}
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>