<template>
    <div
        class="md:w-[70vw] w-full flex flex-col-reverse justify-end md:flex-row cursor-pointer rounded-xl p-3 bg-muted/50 2xl:col-span-4 xl:col-span-2">
        <OrderForm class="w-full md:w-[70%] mt-5 md:mt-0" :data="data" />
        <Stepper orientation="vertical" :modelValue="data.status" style="pointer-events: none;"
            class="mx-auto flex w-full max-w-md flex-col justify-start gap-10 p-3">
            <StepperItem v-for="item in steps" :key="item.step" v-slot="{ state }"
                class="relative flex w-full items-start gap-6" :step="item.step">
                <StepperSeparator v-if="item.step !== steps[steps.length - 1].step"
                    class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

                <StepperTrigger as-child>
                    <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="z-10 rounded-full shrink-0"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                    >
                        <component :is="item.icon" class="w-4 h-4" />
                    </Button>
                </StepperTrigger>

                <div class="flex flex-col gap-1">
                    <StepperTitle :class="[state === 'active' && 'text-primary']"
                        class="text-sm font-semibold transition lg:text-base">
                        {{ item.title }}
                    </StepperTitle>
                    <StepperDescription :class="[state === 'active' && 'text-primary']"
                        class="text-xs text-muted-foreground transition lg:text-sm">
                        <p v-if="data[item.step]" class="mb-2 flex flex-col">
                            <i class="text-nowrap">{{ data[item.step] }}</i>
                        </p>
                        {{ item.description }}
                    </StepperDescription>
                </div>
            </StepperItem>
        </Stepper>        
    </div>
</template>
<script>
import { order_steps } from "../utils"
import { useMediaQuery } from '@vueuse/core'

export default {
    name: 'OrderView',
    props: ['data'],
    data() {
        return {
            steps: order_steps,
            step: order_steps.find(v => v.step === this.data.status)
        }
    },
    computed: {
        orientation: () => useMediaQuery('(min-width: 768px)').value ? 'horizontal' : 'vertical'
    }
}
</script>