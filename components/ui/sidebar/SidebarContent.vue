<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="content"
    :class="cn('flex h-fit flex-1 flex-col gap-2 my-3 group-data-[collapsible=icon]:overflow-hidden rounded-2xl bg-sidebar ', props.class)"
  >
    <slot />
  </div>
</template>
