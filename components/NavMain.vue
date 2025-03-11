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
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}>()
const {toggleSidebar} = useSidebar()
const p = useLocalePath()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>{{ $t('Карго') }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title" @click="useRouter().push(p(item.url));toggleSidebar()">
        <SidebarMenuButton :tooltip="$t(item.title)">
          <component :is="item.icon" v-if="item.icon" />
          <a :id="item.url">{{ $t(item.title) }}</a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
