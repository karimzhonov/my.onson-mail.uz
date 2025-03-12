<template>
    <section class="p-3">
        <h2 class="text-2xl font-bold">{{$t('Установка PWA на iOS')}}</h2>
        <p>{{$t('PWA можно установить на iOS только через браузер Safari. Сначала откройте сайт в Safari. Нажмите кнопку «Поделиться» и выберите «Добавить на экран "Домой"» в появившемся меню. Затем нажмите «Добавить» в правом верхнем углу, чтобы завершить установку PWA. После этого приложение появится на главном экране.')}}</p>
        <div class="flex flex-col md:flex-row items-center justify-center">
            <img class="w-[70%] md:w-[300px] mb-7 md:mr-5" src="/assets/install/1.jpg" />
            <img class="w-[70%] md:w-[300px] mb-7 md:mr-5" src="/assets/install/2.jpg" />
            <img class="w-[70%] md:w-[300px] mb-7" src="/assets/install/3.jpg" />
        </div>
        <p class="text-center"><i>{{$t('Скриншоты, показывающие процесс установки PWA на iOS.')}}</i></p>
    </section>

    <section class="p-3">
        <h2 class="text-2xl font-bold">{{$t('Установка PWA на Android')}}</h2>
        <p>{{$t('Браузер Chrome по умолчанию поддерживает установку PWA на устройствах Android. Откройте сайт в Chrome, затем нажмите значок с тремя точками в верхнем правом углу, чтобы открыть меню. Выберите «Добавить на главный экран». В появившемся окне нажмите кнопку «Добавить». После этого PWA будет установлено и появится на главном экране.')}}</p>
        <div class="flex flex-col md:flex-row items-center justify-center">
            <img class="w-[70%] md:w-[300px] mb-7 md:mr-5" src="/assets/install/1.jpg" />
            <img class="w-[70%] md:w-[300px] mb-7 md:mr-5" src="/assets/install/2.jpg" />
            <img class="w-[70%] md:w-[300px] mb-7" src="/assets/install/3.jpg" />
        </div>
        <p class="text-center"><i>{{$t('Скриншоты, показывающие процесс установки PWA на Android.')}}</i></p>
    </section>
</template>