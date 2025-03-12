<template>
    <Form :initialValues="data" :validationSchema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="fio">
            <FormItem class="mb-3">
                <FormLabel>{{ $t('Паспорт') }}</FormLabel>
                <IPassport :data="data.client ?? {}" />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="weight">
            <FormItem class="mb-3">
                <FormLabel>{{$t('Вес')}}</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="0.00" v-bind="componentField" :disabled="disabled"/>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="delivery_price">
            <FormItem class="mb-3">
                <FormLabel>{{ $t('Стоимость доставки') }}</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="0.00" v-bind="componentField" :disabled="disabled"/>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="delivery_point">
            <FormItem class="mb-3">
                <FormLabel>{{ $t('Точка доставки') }}</FormLabel>
                <FormControl>
                    <div v-if="componentField.value" class="w-full h-[400px]">
                        <OrderDeliveryPoint  mode="r" :value="componentField.value"/>
                    </div>
                    <IDialog v-else :dismissible="false">
                        <template v-slot:trigger>
                            <Button class="w-full"> {{ $t('Указать точка доставки на карте') }} </Button>
                        </template>
                        <template v-slot:header>
                            {{ $t('Точка доставки') }}
                        </template>
                        <div class="md:w-[700px] md:h-[750px] w-full h-full">
                            <OrderDeliveryPoint @selected="select_delivery_point" mode="w"/>
                        </div>
                    </IDialog>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- <Button type="submit">
            Submit
        </Button> -->
    </Form>
</template>
<script>
// import * as z from 'zod'
// import { toTypedSchema } from '@vee-validate/zod'

export default {
    name: 'OrderForm',
    props: ['data'],
    data() {
        return {
            disabled: true,
            // formSchema: toTypedSchema(z.object({
            //     username: z.string().min(2).max(50),
            //     password: z.string().min(2).max(50),
            // }))
        }
    },
    methods: {
        select_delivery_point(value) {
            console.log(value);
        },
        onSubmit(values) {
            console.log(values);
        }
    }
}
</script>