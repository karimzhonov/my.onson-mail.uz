<template>
    <a class="flex flex-row items-center justify-center md:h-24 p-3 opacity-70">
        <img class="mr-2 md:w-[50px] w-[30px]" src="/logo.png"/>
        <span class="text-2xl text-gray-700 dark:text-white h-full w-full flex md:flex-col flex-row">
            <p class="mb-0 md:text-sm ml-1 mr-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00d8a5] to-[#8cd66a] flex flex-row justify-between items-center">
                ONSON MAIL
                <Badge variant="destructive" class="rounded-2xl hidden md:block">
                {{$t('Скоро')}}
                </Badge>
                <div class="md:hidden ml-1">MARKET</div>
            </p>
            <p class="hidden md:block md:text-4xl mb-0 md:mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00d8a5] to-[#8cd66a]">MARKET</p>
        </span>
        <Badge variant="destructive" class="rounded-2xl md:hidden">
            {{$t('Скоро')}}
        </Badge>
    </a>
</template>