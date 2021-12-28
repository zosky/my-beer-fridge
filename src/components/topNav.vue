<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import SvgIconsVue from '../assets/svgIcons.vue'
const hostName = ref('steve')

const store = useStore()
const beer = store.state.myBeer
const fridgeCount = computed(()=>
  Object.values(store.state.myBeer).reduce((acc,brewer)=> {
    const t = Object.values(brewer).reduce((a,c)=> a+c,0 )
    return acc + t
  },0 )
)
</script>

<template>
    <section>
        <div id="topNav">
            <SvgIconsVue :icon="4" id=logo 
                :class="['masthead',{hereNow: $route.name=='bar'}]"
            />
            <SvgIconsVue :icon="5" 
                :class="['masthead',{hereNow: $route.name=='fridge'}]"
                @click="$router.push({name:'fridge'})"
            />
            <div class="badge">
                <div v-text="fridgeCount" />
            </div>
            <SvgIconsVue :icon="6" 
                :class="['masthead',{hereNow: $route.name=='bar'}]"
                @click="$router.push({name:'bar'})"
            />
        </div>
        <div id=hostName v-text="hostName" :class="$route.name" />
    </section>
</template>

<style scoped>
    section { @apply w-full h-12 bg-blue-100 flex justify-between items-center px-2 sticky top-0 z-10 bg-opacity-90 shadow-md }
    #topNav { @apply flex flex-row justify-center py-2 h-full gap-2 }
    #logo { @apply pr-1 border-r-2 text-blue-800 border-blue-300  }
    .masthead { @apply h-full w-auto  }
    #hostName { @apply font-bold select-none }
    #hostName::after { content: "'s fridge"; @apply text-xs font-light;}
    #hostName.fridge::after { content: "'s fridge" }
    #hostName.bar::after { content: "'s bar" }
    .hereNow { @apply filter scale-110 text-indigo-700 }
    .badge div { @apply 
        font-bold 
        bg-blue-600 text-blue-200 
        px-1 -ml-2 -mt-1.5
        rounded-full justify-self-start text-xs }
</style>
