<script setup>
import SvgIcons from '../assets/svgIcons.vue'
defineProps({
  beer: { type: String, default: 'Dark'},
  qty: { type: Number, default: 1 }
})
</script>

<template>
    <article>
        <template v-for="x in qty" :key="x" >
            <SvgIcons 
                v-if="x%5!=0" 
                :icon="-1" 
                :class="['qty',{more:x>5 && x%5==1}]" 
            />
            <div v-else class="strike" />
        </template>
        <h3 v-text="beer" />
        <div>
        </div>
    </article>
</template>

<style scoped>
    article { @apply flex flex-row gap-x-1 items-center hover:text-blue-600 relative }
    h3 { @apply font-bold text-sm }
    .qty { @apply h-4 w-auto -mx-0.5 }
    .strike { @apply w-6 bg-blue-600 h-1 absolute -left-1 transform -rotate-6 rounded-full bg-opacity-75 }
    .qty.more { @apply pl-1 }
</style>