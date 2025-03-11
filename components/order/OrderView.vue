<template>
    <div class="md:w-[70vw] w-full flex flex-col-reverse justify-end md:flex-row cursor-pointer h-full rounded-xl p-3 bg-muted/50 2xl:col-span-4 xl:col-span-2">
        <OrderForm class="w-full md:w-[70%] mt-5 md:mt-0" :data="data" />
        
        <Stepper :orientation="orientation" 
            class="w-full md:w-[30%] justify-between items-center gap-10 flex-row md:flex-col mx-auto" 
            :modelValue="data.status" style="pointer-events: none;">
            <StepperItem v-for="item in steps" :key="item.step" :step="item.step">
                
                <StepperTrigger>
                    <StepperIndicator>
                        <component :is="item.icon" class="w-4 h-4" />
                    </StepperIndicator>
                    <div class="flex flex-col">
                        <StepperTitle class="md:block" :class="{'hidden': step.step !== item.step}">
                            {{ item.title }}
                        </StepperTitle>
                        <StepperDescription>
                            <p v-if="data[item.step]" class="mb-2 flex flex-col">
                                <i class="text-nowrap">{{ data[item.step].split(' ')[0] }}</i>
                                <i class="text-nowrap">{{ data[item.step].split(' ')[1] }}</i>
                            </p>
                            <p class="md:block" :class="{'hidden': step.step !== item.step}">{{ item.description }}</p>
                        </StepperDescription>
                    </div>
                </StepperTrigger>
                <StepperSeparator v-if="item.step !== steps[steps.length - 1].step" class="w-full h-px md:hidden" />
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