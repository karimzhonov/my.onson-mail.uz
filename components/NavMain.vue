<script setup lang="ts">
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { type LucideIcon } from 'lucide-vue-next'

defineProps<{
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}>()

const p = useLocalePath()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>{{ $t('Карго') }}</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton :tooltip="$t(item.title)">
          <component :is="item.icon" v-if="item.icon" />
          <a :id="item.url" :href="p(item.url)">{{ $t(item.title) }}</a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
