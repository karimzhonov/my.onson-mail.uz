<template>
    <Form :initialValues="data" :validationSchema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="fio">
            <FormItem class="mb-3">
                <FormLabel>{{ $t('ФИО') }}</FormLabel>
                <FormControl>
                    <Input type="text" :placeholder="$t('ФИО')" v-bind="componentField" :disabled="disabled"/>
                </FormControl>
                <FormMessage />
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
                    <OrderDeliveryPoint v-if="componentField.value" mode="r"/>
                    <IDialog v-else :dismissible="false">
                        <template v-slot:trigger>
                            <Button class="w-full"> {{ $t('Указать точка доставки на карте') }} </Button>
                        </template>
                        <template v-slot:header>
                            {{ $t('Точка доставки') }}
                        </template>
                        <OrderDeliveryPoint @selected="(value) => componentField.value = value" mode="w"/>
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
        onSubmit(values) {
            console.log(values);
        }
    }
}
</script>