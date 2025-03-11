<template>
    <div class="cursor-pointer aspect-[3/2] rounded-xl bg-[url(/assets/passport.png)] bg-cover w-full p-[3%] pt-[15%] pb-[10%]">
        <div class="grid grid-cols-8 gap-3 h-full">
            <div class="col-span-3">
                <Avatar shape="square" class="w-full h-[80%]">
                    <AvatarImage :src="data.image" alt="@unovue" />
                    <AvatarFallback class="w-full h-full">
                        <img src="/assets/default_user.png" />
                    </AvatarFallback>
                </Avatar>
                <p class="text-[10px] text-center">Подпись / Imzo</p>
            </div>  
            <div class="col-span-5 flex flex-col justify-between text-black">
                <div class="text-xs">
                    <p>ФИО / FIO</p>
                    <p class="font-semibold">{{ data.fio }}</p>
                </div>
                <div class="text-xs">
                    ПИНФЛ / PINFL
                    <p class="font-semibold text-nowrap">{{ data.pnfl }}</p>
                </div>
                <div class="text-xs">
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