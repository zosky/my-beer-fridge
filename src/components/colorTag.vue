<script setup>
import SvgIcons from '../assets/svgIcons.vue'
</script>

<template>
    <div id=colorTag>
        <div id=top>brew scale</div>
            <SvgIcons 
                v-for="b in 40" :key="b" 
                :icon="b%3"
                :class="[
                    'color ',
                    `${b<10?'bg':'text'}-beer-${b}`
                ]" 
            />
    </div>
</template>

<style scoped>
    #colorTag { @apply flex flex-row flex-wrap gap-1 px-1 w-full justify-center }
    #top { @apply w-full text-center font-bold pt-2 }
    .color { @apply h-8 w-8 p-0.5 rounded-xl bg-opacity-90 }
</style>