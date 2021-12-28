<script setup>
import { ref } from 'vue'
import SvgIconsVue from '../assets/svgIcons.vue'
const hostName = ref('steve')
</script>

<template>
    <section>
        <div id="topNav">
            <SvgIconsVue :icon="4" id=logo class="masthead" />
            <SvgIconsVue :icon="5" class="masthead" />
            <SvgIconsVue :icon="6" class="masthead" />
        </div>
        <div id=hostName v-text="hostName" />
    </section>
</template>

<style scoped>
    section { @apply w-full h-12 bg-blue-100 flex justify-between items-center px-2 }
    #topNav { @apply flex flex-row justify-center py-2 h-full gap-3 }
    #logo { @apply pr-1.5 -mr-1 border-r-2 text-blue-800 border-blue-300  }
    .masthead { @apply h-full w-auto  }
    #hostName { @apply font-bold }
    #hostName::after { content: "'s fridge"; @apply text-xs font-light;}
</style>
