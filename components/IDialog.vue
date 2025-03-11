<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import { boolean } from 'zod'

const isDesktop = useMediaQuery('(min-width: 768px)')

const props = defineProps({dismissible: {type: boolean, default: true}, open: {type: boolean, default: false}})
const isOpen = ref(props.open)
</script>

<template>
  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
        <slot name="trigger" />
    </DialogTrigger>
    <DialogContent class="max-w-[85vw] max-h-[80vh] w-auto">
      <DialogHeader>
        <DialogTitle>
            <slot name="header" />
        </DialogTitle>
      </DialogHeader>
      <slot />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen" :dismissible="dismissible">
    <DrawerTrigger as-child>
        <slot name="trigger" />
    </DrawerTrigger>
    <DrawerContent class="h-[85vh] flex flex-col items-center">
      <DrawerHeader class="text-left">
        <DrawerTitle>
            <slot name="header" />
        </DrawerTitle>
      </DrawerHeader>
      <div class="w-full h-full overflow-y-scroll">
        <slot />
      </div>
      <DrawerFooter class="pt-2 w-full">
        <DrawerClose as-child>
          <Button>
            {{ $t('Назад') }}
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>