<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { type LucideIcon } from 'lucide-vue-next'
import  {useSidebar} from './ui/sidebar'

defineProps<{
  header: string,
  items: {
    title: string
    url: string
    icon?: LucideIcon
    disabled: boolean
  }[]
}>()
const {setOpenMobile} = useSidebar()
const p = useLocalePath()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>{{ header }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title" @click="useRouter().push(p(item.url));setOpenMobile(false)">
        <SidebarMenuButton :tooltip="$t(item.title)" :disabled="item.disabled" >
          <component :is="item.icon" v-if="item.icon" />
          <a :id="item.url" class="flex flex-col justify-between">{{ $t(item.title) }}</a>
          <Badge v-if="item.disabled" variant="destructive" class="rounded-2xl">
              {{$t('Скоро')}}
            </Badge>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
