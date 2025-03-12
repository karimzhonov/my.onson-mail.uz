<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Moon, Sun, MonitorCog } from "lucide-vue-next";
const colorMode = useColorMode()
const onclick = () => {
  colorMode.preference == 'dark' ? colorMode.preference = 'light' : colorMode.preference == 'light' ? colorMode.preference = 'system' : colorMode.preference = 'dark'
}
</script>

<template>
  <Button id="themeSwitchera" variant="ghost" @click="onclick" class="m-2 p-0 w-6 h-6">
    <Moon v-if="colorMode.preference == 'dark'" />
    <Sun v-if="colorMode.preference == 'light'" />
    <MonitorCog v-if="colorMode.preference == 'system'" />
  </Button>
</template>