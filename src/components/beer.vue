<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SvgIcons from '../assets/svgIcons.vue'
const props = defineProps({
  beer: {type: Array, default: null},
  qty: {type: Number, default: 0},
  i: {type: Number, default: 0}
})
const store = useStore()
const changeStore = (f,b) => {store.commit(f,b)}
</script>
<template>
<article :class="{ haveSome: qty }">
    <div class="cardIwrap"><SvgIcons :icon="i" class=" cardIcon" /></div>
    <div id="label">
        <div class="brewer" v-text="beer[0]" />
        <div class="brew" v-text="beer[1]" />
    </div>
    <div class="haveIt">
        <div>
            <SvgIcons v-show="qty" 
                :icon="3" class="icon"
                @click="changeStore('rmBeer',beer)"
            />
            <div id="qty" v-show="qty" v-text="qty" />
            <SvgIcons 
                :icon="2" class="icon"
                @click="changeStore('addBeer',beer)"
            />
        </div>
    </div>
</article>
</template>
<style scoped>
    article { @apply 
        flex flex-row justify-items-end
        border-blue-300 border rounded-xl m-1 p-2 shadow-md 
        hover:bg-blue-200 transition-all
        relative w-full
    }
    article.haveSome { @apply bg-blue-100 border-blue-400 }
    article.haveSome { @apply text-blue-600 }
    #label { @apply flex flex-col items-end justify-center text-right leading-none w-fit px-2 }
    .brewer { @apply flex text-xs leading-none w-fit }
    .brew { @apply flex font-bold w-fit}
    .cardIwrap { @apply flex flex-col justify-center align-middle }
    .cardIcon { @apply h-10 sm:h-20 w-min  }
    .icon { @apply h-full w-auto }
    .haveIt { @apply absolute top-0 -right-2 select-none }
    .haveIt > div { @apply flex flex-row ring-1 px-1 rounded-xl -mt-3 -mr-1 bg-blue-200 }
    .haveIt .icon { @apply h-4 self-center }
    .haveIt #qty { @apply px-0.5 font-bold }
</style>