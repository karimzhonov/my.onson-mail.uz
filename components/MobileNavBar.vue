<template>
    <div class="p-2 w-full md:hidden h-[70px] bg-background absolute bottom-0 left-0 right-0 flex flex-row justify-between border-t shadow-md">
        <a class="flex flex-col items-center" href="/" :class="useRoute().path === '/' ? 'text-foreground' : 'text-muted-foreground'">
            <Search />
            <p>{{ $t('Отследить') }}</p>
        </a>
        <a class="flex flex-col items-center" href="/order" :class="useRoute().path === '/order' ? 'text-foreground' : 'text-muted-foreground'">
            <Package />
            <p>{{ $t('Заказы') }}</p>
        </a>
        <a class="flex flex-col items-center" href="/passport" :class="useRoute().path === '/passport' ? 'text-foreground' : 'text-muted-foreground'">
            <IdCard />
            <p>{{ $t('Пасспорт') }}</p>
        </a>
        <a class="flex flex-col items-center" href="/filial" :class="useRoute().path === '/filial' ? 'text-foreground' : 'text-muted-foreground'">
            <MapPin />
            <p>{{ $t('Филиали') }}</p>
        </a>
        <a class="flex flex-col items-center" href="/profile" :class="useRoute().path === '/profile' ? 'text-foreground' : 'text-muted-foreground'">
            <Menu />
            <p>{{ $t('Профиль') }}</p>
        </a>
        
    </div>
</template>
<script setup>
import { Search, IdCard, Package, MapPin, Menu } from 'lucide-vue-next'

</script>