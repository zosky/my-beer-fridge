<script setup>
import { ref, computed } from 'vue'
import onList from '../assets/onBeerList.json'
import Beer from './beer.vue'
const search = ref(null)
const k = Object.keys(onList[0])
const list = computed( ()=>{
    if (search.value){ 
        const s = search.value?.toLowerCase()
        return onList.filter(b=> {
            const v = Object.values(b)
            return v.some(V=> V.toLowerCase().includes(s))
        }) 
    } 
    else return onList
})
</script>

<template>
    <input type=search v-model="search" placeholder="find a brew" />
    <div>
        <article v-for="(beer,ix) in list" :key="ix">
            <Beer
                :beer="[ beer[k[1]], beer[k[2]] ]" 
                :i="ix % 4 "
            />        
        </article>
    </div>
</template>

<style scoped>
    input { @apply px-1 border-b border-blue-300 px-2 mx-2 }
    #hint { @apply text-xs }
    #hint span { @apply italic }
    div { @apply w-full flex flex-row flex-wrap gap-3 p-2 justify-center }
    article { @apply flex flex-row justify-between }
    .icon { @apply h-full w-auto }
</style>