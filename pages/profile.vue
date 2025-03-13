<template>
    <div class="flex flex-col justify-between h-full w-full">
        <div class="flex flex-col items-center mt-3">
            <Avatar class="h-32 w-32 rounded-[50%] border-2 border-gray-400">
                <AvatarImage :src="user.avatar" :alt="user.username" />
                <AvatarFallback class="text-4xl">
                    {{ user.first_name ? user.first_name[0] : '' }}{{ user.last_name ? user.last_name[0] : '' }}
                </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-xl leading-tight mt-3">
                <span class="truncate font-semibold">{{ user.first_name }} {{ user.last_name }}</span>
                <span class="truncate text-sm text-center">{{ user.phone }}</span>
            </div>
        </div>
        <Button class="mx-5" variant="destructive" @click="logout">
            <LogOut />
            {{ $t('Выход') }}
        </Button>
    </div>
</template>
<script>
import { useUser } from '~/store/user';
import { LogOut } from 'lucide-vue-next'
import { token } from '~/composables'

export default {
    name: 'Profile',
    data() {
        return {}
    },
    components: { LogOut },
    computed: {
        user: () => useUser().user
    },
    methods: {
        logout() {
            token.value.access = null
            token.value.refresh = null
            window.location.href = `https://auth.onson-mail.uz?next=${window.location.origin}`
        }
    }
}

</script>