<script>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

import {cargo, turism, consulting, customs} from './sidebar-config'

export default {
  name: 'AppSidebar',
  components: { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail },
  data() {
    if (cargo.length > 0) cargo[0].isActive = true
    return {
      cargo, turism, consulting, customs
    }
  }
}

</script>

<template>
  <div class="flex flex-col">

    <Sidebar collapsible="icon">
      <SidebarContent>
        <MarketLink />
      </SidebarContent>

      <SidebarContent>
        <NavMain :items="cargo" :header="$t('Карго')" />
      </SidebarContent>

      <SidebarContent>
        <NavMain :items="turism" :header="$t('Туризм')"/>
      </SidebarContent>

      <SidebarContent>
        <NavMain :items="consulting" :header="$t('Консалтинг')"/>
      </SidebarContent>

      <SidebarContent>
        <NavMain :items="customs" :header="$t('Таможенное оформление')"/>
      </SidebarContent>
    </Sidebar>
  </div>
  
</template>
