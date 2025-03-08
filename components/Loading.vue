<template>
    <div v-if="loading" class="w-full h-full flex justify-center items-center">
        <LoaderCircle size="60" class="animate-spin" />    
    </div>
    <slot v-else/>
</template>
<script>
import { LoaderCircle } from "lucide-vue-next";
export default {
    name: 'Loading',
    components: {LoaderCircle},
    props: ['loading']
}
</script>
