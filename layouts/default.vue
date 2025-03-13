<script setup>
import { useUser } from "@/store/user"
import sidebar_config from "@/components/sidebar-config"

const breadcrumb = computed(() => {
    for (const item of sidebar_config) {
        if (item.url === useRoute().fullPath) {
            return [item]
        } else if (item.items) {
            for (const row of item.items) {
                if (row.url === useRoute().fullPath) {
                    return [item, row]
                }
            }
        }
    }
    return []
})

onMounted(async () => {
    await useUser().fetch_user()
})
</script>

<template>
    <SidebarProvider class="max-w-[1216px] mx-auto max-h-screen overflow-y-auto">
        <SidebarInset>
            <header
                class="rounded-2xl sticky bg-sidebar z-11 top-0 flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div class="flex items-center gap-2 px-4">
                    <SidebarHeader class="md:w-[--sidebar-width]">
                        <SidebarMenuButton asChild>
                            <Logo />
                        </SidebarMenuButton>
                    </SidebarHeader>
                
                    
                    <SidebarTrigger class="-ml-1 sidebarTrigger md:block hidden" />
                    <Separator orientation="vertical" class="mr-2 h-4 md:block hidden" />
                    <Breadcrumb class="md:block hidden">
                        <BreadcrumbList>
                            <div v-for="bread in breadcrumb" :key="bread"
                                class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
                                <BreadcrumbItem class="hidden md:block">
                                    <BreadcrumbLink :href="bread.url">
                                        {{ bread.title ?? bread.name }}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator class="hidden md:block" />
                            </div>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div class="flex items-center gap-2 px-4">
                    <LangSwitcher />
                    <Install />
                    <Notifications />
                    <!-- <ThemeSwitcher /> -->
                    <NavUser class="hidden md:block" />
                </div>
            </header>
            <div class="flex flex-row justify-center md:h-full h-[85%]">
                <AppSidebar />
                <div class="p-3 w-full h-full">
                    <NuxtPage />
                </div>
            </div>
            
        </SidebarInset>
        <MobileNavBar />
    </SidebarProvider>
</template>
