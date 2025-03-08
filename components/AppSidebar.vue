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
      user: {
        name: 'shadcn',
        email: 'm@example.com',
        avatar: '/avatars/shadcn.jpg',
      },
      navMain,
    }
  }
}

</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader >
      <div class="flex justify-center items-center">
        <img src="/logo.png" width="40"/>
        <h1 class="text-2xl font-bold ml-3">Onson Mail</h1>
      </div>
      
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
