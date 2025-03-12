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
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset class="pb-[70px]">
            <div class="z-0 absolute top-[4rem] inset-x-0 h-[90%] md:h-screen flex items-start pointer-events-none">
                <div
                    class="h-24 w-2/3 bg-gradient-to-br from-[#8cd66a] opacity-20 blur-2xl dark:from-[#570cac] dark:invisible dark:opacity-40">
                </div>
                <div
                    class="h-20 w-3/5 bg-gradient-to-r from-[#8cd66a] opacity-40 blur-2xl dark:from-[#670ccf] dark:opacity-40">
                </div>
            </div>

            <div
                class="z-0 absolute inset-y-0 w-[300px] left-0 top-[4rem] h-[90%] md:h-screen hidden dark:flex pointer-events-none">
                <div
                    class="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#570cac] dark:opacity-20">
                </div>
            </div>
            <header
                class="sticky border-b bg-background top-0 flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div class="flex items-center gap-2 px-4">
                    <Logo class="md:hidden" />
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
                    <ThemeSwitcher />
                </div>
            </header>
            <NuxtPage class="z-2" />
        </SidebarInset>
        <MobileNavBar />
    </SidebarProvider>
</template>
