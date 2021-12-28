<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SvgIcons from '../assets/svgIcons.vue'
const props = defineProps({
  beer: {type: Array, default: null},
  i: {type: Number, default: 0}
})
const store = useStore()
const haveIt = computed(()=> {
  const b = props.beer[0].trim()
  const B = props.beer[1].trim()
  return store.state.myBeer?.[b]?.[B] ?? 0 
})
const changeStore = (f,b) => {store.commit(f,b)}
</script>
<template>
<article :class="{ haveSome: haveIt }">
    <div><SvgIcons :icon="i" class="icon" /></div>
    <div id="label">
        <div class="brewer" v-text="beer[0]" />
        <div class="brew" v-text="beer[1]" />
    </div>
    <div class="haveIt">
        <div>
            <SvgIcons v-show="haveIt" 
                :icon="3" class="icon"
                @click="changeStore('rmBeer',beer)"
            />
            <div id="qty" v-show="haveIt" v-text="haveIt" />
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
        flex flex-row border-blue-300 border rounded-xl p-2 shadow-md 
        hover:bg-blue-200 transition-all
        relative
    }
    article.haveSome { @apply bg-blue-100 border-blue-400 }
    article.haveSome svg { @apply text-blue-600 }
    #label { @apply flex flex-col text-right leading-none w-min px-2 }
    .brewer { @apply flex text-xs leading-none min-w-min }
    .brew { @apply flex font-bold min-w-min }
    .icon { @apply h-full w-auto }
    .haveIt { @apply absolute top-0 -right-2 select-none }
    .haveIt > div { @apply flex flex-row ring-1 px-1 rounded-xl -mt-3 -mr-1 bg-blue-200 }
    .haveIt .icon { @apply h-4 self-center }
    .haveIt #qty { @apply px-0.5 font-bold }
</style>