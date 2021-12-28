<script setup>
import SvgIcons from '../assets/svgIcons.vue'
const props = defineProps({
  beer: { type: String, default: 'Dark'},
  qty: { type: Number, default: 1 }
})
const qty6 = Math.floor(props.qty/6)
const remainder = props.qty % 6
</script>

<template>
    <article>
        <SvgIcons 
            v-for="s in qty6" :key="s"
            :icon="6" class="qty six" 
        />        
        <SvgIcons 
            v-for="r in remainder" :key="r" 
            :icon="-1" class="qty solo" 
        />
        <h3 v-text="beer" />
    </article>
</template>

<style scoped>
    article { @apply flex flex-row gap-x-1 items-center hover:text-blue-600 relative }
    h3 { @apply font-bold text-sm }
    .qty { @apply h-4 w-auto -mx-0.5 text-blue-900 }
    .six { @apply h-5 -my-1 }
    .solo { @apply -mt-0.5 }
</style>