<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Moon, Sun } from "lucide-vue-next";
const colorMode = useColorMode()

</script>

<template>
  <Button variant="ghost" @click="colorMode.preference == 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'">
    <Moon v-if="colorMode.preference == 'dark'"/>
    <Sun v-if="colorMode.preference == 'light'"/>
  </Button>
</template>