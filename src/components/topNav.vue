<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { TableEdit, Fridge, FridgeOutline } from 'mdue'
import SvgIconsVue from '../assets/svgIcons.vue'
const hostName = ref('steve')

const store = useStore()
store.commit('initBeer')
const fridgeCount = computed(()=>
  Object.values(store.state.myBeer).reduce((acc,brewer)=> {
    const t = Object.values(brewer).reduce((a,c)=> a+c,0 )
    return acc + t
  },0 )
)
const search = computed({
  get:()=> store.state?.search,
  set:(v)=> { store.state.search = v }
})
const haveOnly = computed({
  get:()=> store.state?.haveOnly ?? false,
  set:(v)=> { store.state.haveOnly = v }
})
</script>

<template>
    <section>
        <div id="topNav">
            <SvgIconsVue :icon="4" id=logo               
                :class="['masthead',{hereNow: $route.name=='bar'}]"
            />
            <SvgIconsVue :icon="99" role="button"
                :class="['masthead',{hereNow: $route.name=='fridge'}]"
                @click="$router.push({name:'fridge'})"
            />
            <div class="badge">
                <div v-text="fridgeCount" />
            </div>
            <SvgIconsVue :icon="98" role="button"
                :class="['masthead',{hereNow: $route.name=='bar'}]"
                @click="$router.push({name:'bar'})"
            />
        </div>
        <div id="filler" />
        <TableEdit 
            v-if="$route.name=='fridge'" 
            class="tEdit" role="button"
            @click="$route.push({name:'bulkEdit'})"
        />
        <FridgeOutline v-if="!haveOnly" 
            class="tEdit" role=button 
            @click="haveOnly=true" 
        />
        <Fridge v-else-if="haveOnly" 
            class="tEdit" role=button
            @click="haveOnly=false" 
            />
        <input type="search" id="search"
            v-model="search"
            :placeholder="`${$route.name=='bar'?'find':'add'} a brew`"
        >
        <div id=hostName v-text="hostName" :class="$route.name" />
    </section>
</template>

<style scoped>
    section { @apply w-full h-12 bg-blue-100 flex justify-between items-center px-2 sticky top-0 z-10 bg-opacity-90 shadow-md }
    #topNav { @apply flex flex-row justify-center py-2 h-full gap-2 }
    #logo { @apply pr-1 border-r-2 text-blue-800 border-blue-300  }
    .masthead { @apply h-full w-auto  }
    #hostName { @apply font-bold select-none min-w-max }
    #hostName::before { content: "@"; @apply text-xs font-light;}
    #hostName::after { content: "'s fridge"; @apply text-xs font-light;}
    #hostName.fridge::after { content: "'s fridge" }
    #hostName.bar::after { content: "'s bar" }
    .hereNow { @apply filter scale-110 text-indigo-700 }
    .badge div { @apply 
        font-bold 
        bg-blue-600 text-blue-200 
        px-1 -ml-2 -mt-1.5
        rounded-full justify-self-start text-xs }
    .tEdit { @apply text-4xl -mb-1 text-blue-400 hover:text-indigo-700 }
    #search { @apply 
        px-2 m-1 
        justify-self-end max-w-sm rounded-xl text-right font-bold
        text-blue-600 bg-blue-100 ring-1 ring-blue-300 placeholder-blue-300
        focus:bg-blue-200 focus:ring-blue-500 focus:outline-none }
    #filler { @apply w-full }
</style>
