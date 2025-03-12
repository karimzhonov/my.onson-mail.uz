<template>
    <div class="mx-2 aspect-[3/2] cursor-pointer rounded-xl bg-[url(/assets/passport.png)] bg-cover w-[350px] p-[10px] pt-[50px]">
        <div class="flex flex-row">
            <div class="col-span-3 h-full w-[30%]">
                <Avatar shape="square" class="w-full h-[80%]">
                    <AvatarImage :src="data.image" alt="@unovue" />
                    <AvatarFallback class="w-full h-full">
                        <img src="/assets/default_user.png" />
                    </AvatarFallback>
                </Avatar>
            </div>  
            <div class="col-span-5 flex flex-col text-black h-full">
                <div class="text-xs mb-2">
                    <p>ФИО / FIO</p>
                    <p class="font-semibold">{{ data.fio }}</p>
                </div>
                <div class="text-xs mb-2">
                    ПИНФЛ / PINFL
                    <p class="font-semibold text-nowrap">{{ data.pnfl }}</p>
                </div>
                <div class="text-xs mb-2">
                    Пасспорт / Passport
                    <p class="font-semibold text-nowrap">{{ data.passport }}</p>
                </div>
                <div class="text-xs">
                    Адрес / Manzil
                    <p class="font-semibold">{{ data.address }}</p>
                </div>
            </div>            
        </div>
    </div>
</template>
<script>

export default {
    name: 'IPassport',
    props: ['data'],
}
</script>