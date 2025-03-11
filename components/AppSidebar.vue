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
    <SidebarHeader >
      <SidebarMenuButton asChild>
        <a href="/">
          <img src="/logo.png" width="30"/>
          <h1 class="text-2xl font-bold ml-3 text-nowrap">Onson Mail</h1>
        </a>
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
