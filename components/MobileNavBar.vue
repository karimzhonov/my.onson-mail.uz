<template>
    <div class="p-2 rounded-t-2xl w-full md:hidden h-[70px] bg-sidebar fixed bottom-0 left-0 right-0 flex flex-row justify-between shadow-md">
        <a class="flex flex-col items-center" :href="p('/')" :class="useRoute().path === '/' ? 'text-foreground' : 'text-muted-foreground'">
            <Search />
            <p>{{ $t('Отследить') }}</p>
        </a>
        <a class="flex flex-col items-center" :href="p('/order')" :class="useRoute().path === '/order' ? 'text-foreground' : 'text-muted-foreground'">
            <Package />
            <p>{{ $t('Заказы') }}</p>
        </a>
        <a class="flex flex-col items-center" :href="p('/passport')" :class="useRoute().path === '/passport' ? 'text-foreground' : 'text-muted-foreground'">
            <IdCard />
            <p>{{ $t('Пасспорт') }}</p>
        </a>
        <a class="flex flex-col items-center" :href="p('/filial')" :class="useRoute().path === '/filial' ? 'text-foreground' : 'text-muted-foreground'">
            <MapPin />
            <p>{{ $t('Филиали') }}</p>
        </a>
        <a class="flex flex-col items-center" :href="p('/profile')" :class="useRoute().path === '/profile' ? 'text-foreground' : 'text-muted-foreground'">
            <Avatar class="h-6 w-6 rounded-[50%]">
              <AvatarImage :src="user.avatar" :alt="user.username" />
              <AvatarFallback class="rounded-lg">
                {{ user.first_name ? user.first_name[0] : '' }}{{ user.last_name ? user.last_name[0] : '' }}
              </AvatarFallback>
            </Avatar>
            <p>{{ $t('Профиль') }}</p>
        </a>
        
    </div>
</template>
<script setup>
import { Search, IdCard, Package, MapPin } from 'lucide-vue-next'
import { useUser } from "@/store/user"
const p = useLocalePath()
const user = computed(() => useUser().user)
</script>