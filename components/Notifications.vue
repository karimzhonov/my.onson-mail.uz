<script>
import { Bell } from "lucide-vue-next";
import { formatDistanceToNow } from 'date-fns'
import { ru, uz } from 'date-fns/locale'
import { CheckCheck } from 'lucide-vue-next'
export default {
    name: 'Notifications',
    components: { Bell, CheckCheck },
    data() {
        return {
            open: false,
            loaded: false,
            text: 'test',
            items: {},
        }
    },
    async mounted() {
        await this.fetch_data()
    },
    methods: {
        format(value) {
            return formatDistanceToNow(new Date(value), { addSuffix: true, locale: { ru, uz }[this.$i18n.locale] })
        },
        loadSw() {
            if (this.loaded) return
            this.text = window.navigator.standalone
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.register("/sw.js?v=4", { scope: "/" }).then(
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
                            try { subscribeToPush() } catch { }
                        } else {
                            console.warn('Уведомления отключены пользователем.');
                        }

                        const pushServerPublicKey = VAPID_PUBLIC_KEY;
                        this.text = VAPID_PUBLIC_KEY + 'key'
                        // subscribe and return the subscription
                        const subscription = await registration.pushManager
                            .subscribe({
                                userVisibleOnly: true,
                                applicationServerKey: pushServerPublicKey,
                            })
                        this.text = JSON.stringify(subscription) + 'subs'
                        const d = JSON.parse(JSON.stringify(subscription))

                        const data = {
                            "user_agent": window.navigator.userAgent,
                            "browser": 'Onson Mail',
                            "endpoint": d.endpoint,
                            "auth": d.keys.auth,
                            "p256dh": d.keys.p256dh
                        }
                        const r = await this.$api.post('/notification/save_information/', { subscription: data }, {}, false)
                        this.text = JSON.stringify(r.data) + 'r.data'
                        this.loaded = true
                    } catch (e) {
                        this.text = JSON.stringify(e) + 'error'
                    }
                });
            } else {
                this.text = 'not support'
            }
        },
        async fetch_data() {
            const { data } = await this.$api.get('/notification/', { params: { limit: 30 } })
            this.items = data
        },
        async select(item) {
            if (!item.read) {
                await this.$api.patch(`/notification/${item.id}/read/`, {}, {}, false)
                item.read = true
            }
            await this.$router.push(useLocalePath()(item.url))
        },
        async allCheck() {
            await this.$api.patch(`/notification/`)
            await this.fetch_data()
        }
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
        <SheetContent class="w-[350px]">
            <SheetHeader>
                <SheetTitle class="flex flex-row justify-between items-center mt-3">
                    {{ $t('Уведомление') }}
                    <CheckCheck class="cursor-pointer" @click="allCheck" />
                </SheetTitle>
            </SheetHeader>
            <ScrollArea class="h-screen flex">
                <div class="flex-1 flex flex-col gap-2 pt-0">
                    <TransitionGroup name="list" appear>
                        <button v-for="item of items.results" :key="item.id"
                            class="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
                            @click="select(item)">
                            <div class="flex w-full flex-col gap-1">
                                <div class="flex items-center">
                                    <Avatar class="h-8 w-8 rounded-lg">
                                        <AvatarImage :src="item.data.icon" :alt="item.id" />
                                        <AvatarFallback class="rounded-lg">
                                            OM
                                        </AvatarFallback>
                                    </Avatar>
                                    <div class="flex items-center gap-2 ml-2">
                                        <div class="font-semibold">
                                            {{ item.data.head }}
                                        </div>
                                        <span v-if="!item.read" class="flex h-2 w-2 rounded-full bg-blue-600" />
                                    </div>
                                    <div v-if="item.created" class="ml-auto text-xs text-muted-foreground">
                                        {{ format(item.created) }}
                                    </div>
                                </div>

                                <div class="text-xs font-medium">
                                    {{ item.data.body }}
                                </div>
                            </div>
                        </button>
                    </TransitionGroup>
                </div>
            </ScrollArea>
        </SheetContent>
    </Sheet>
</template>