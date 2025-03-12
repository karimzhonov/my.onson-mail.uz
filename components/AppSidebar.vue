<script>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

import navMain from './sidebar-config'

export default {
  name: 'AppSidebar',
  components: { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail },
  data() {
    if (navMain.length > 0) navMain[0].isActive = true
    return {
      navMain,
    }
  }
}

</script>

<template>
  <Sidebar collapsible="icon">
    <div class="absolute top-[4rem] inset-x-0 h-full md:h-screen flex items-start">
        <div
            class="h-24 w-2/3 bg-gradient-to-br from-[#8cd66a] opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
        </div>
        <div
            class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
        </div>
    </div>
    <div class="absolute inset-y-0 w-[300px] left-0 top-[4rem] h-screen hidden dark:flex">
        <div
            class="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
        </div>
    </div>
    <SidebarHeader >
      <SidebarMenuButton asChild>
        <Logo />
      </SidebarMenuButton>
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
