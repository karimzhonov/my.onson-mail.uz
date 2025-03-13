<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from 'reka-ui'

const props = defineProps<AvatarFallbackProps>()
</script>

<template>
  <AvatarFallback v-bind="props" class="bg-muted w-full h-full flex justify-center items-center">
    <slot />
  </AvatarFallback>
</template>
