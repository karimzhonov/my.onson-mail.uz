<template>
    <div class="mr-2 cursor-pointer aspect-[2/1] rounded-xl w-[350px] p-3 bg-muted/50 flex justify-center items-center">
        <div class="grid grid-cols-3 place-items-center">
            <div class="col-span-2">
                <p>{{ $t('Номер') }}: <strong>{{ data.number }}</strong></p>
                <p>{{ $t('ФИО') }}: <strong>{{ data.fio }}</strong></p>
                <p>{{ $t('Вес') }}: <strong>{{ data.weight }} {{ $t('кг') }}</strong></p>
                <p>{{ $t('Стоимость доставки') }}: <strong>{{ data.delivery_price }}$</strong></p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="inline-flex items-center justify-center rounded-full w-8 h-8 p-2 bg-primary text-primary-foreground">
                    <component :is="step.icon" />                    
                </div>
                <h4 class="text-md font-semibold whitespace-nowrap">{{ $t(step.title) }}</h4>
                <p class="text-xs text-muted-foreground text-center">{{ $t(step.description) }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { order_steps } from '../utils';
export default {
    name: 'Order',
    props: ['data'],
    data() {
        return {
            order_steps,
            step: order_steps.find(v => v.step === this.data.status)
        }
    }
}
</script>