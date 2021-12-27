<script setup>
import { ref } from 'vue'
import SvgIconsVue from '../assets/svgIcons.vue'
const hostName = ref('steve')
</script>

<template>
    <section>
        <SvgIconsVue :icon="4" id="masthead" />
        <div id=hostName v-text="hostName" />
    </section>
</template>

<style scoped>
    section { @apply w-full h-12 bg-blue-100 flex justify-between items-center px-2 }
    #masthead { @apply h-full w-auto py-2 }
    #hostName { @apply font-bold }
    #hostName::after { content: "'s fridge"; @apply text-xs font-light;}
</style>
