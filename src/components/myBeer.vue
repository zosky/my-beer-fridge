<script setup>
import SvgIcons from '../assets/svgIcons.vue'
defineProps({
  beer: { type: String, default: 'Dark'},
  qty: { type: Number, default: 1 }
})
</script>

<template>
    <article>
        <SvgIcons 
            v-for="x in qty" :key="x" 
            :icon="-1" class="qty" 
        />
        <h3 v-text="beer" />
        <div>
        </div>
    </article>
</template>

<style scoped>
    article { @apply flex flex-row gap-x-1 items-center }
    h3 { @apply font-bold text-sm }
    .qty { @apply h-4 w-auto -mx-0.5 }
</style>