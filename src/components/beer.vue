<script setup>
import SvgIcons from '../assets/svgIcons.vue';
defineProps({
    beer: {type: Array, default: null},
    i: {type: Number, default: 0}
})
</script>
<template>
<article>
    <div><SvgIcons :icon="i" class="icon" /></div>
    <div id="label">
        <div class="brewer" v-text="beer[0]" />
        <div class="brew" v-text="beer[1]" />
    </div>
</article>
</template>
<style scoped>
    article { @apply 
        flex flex-row border-blue-300 border rounded-xl p-2 shadow-md 
        hover:bg-blue-200 transition-all
    }
    #label { @apply flex flex-col text-right leading-none w-min px-2 }
    .brewer { @apply flex text-xs leading-none min-w-min }
    .brew { @apply flex font-bold min-w-min }
    .icon { @apply h-full w-auto }
</style>