<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import onList from '../assets/onBeerList.json'
import Beer from './beer.vue'
const store = useStore()
const search = computed(()=> store.state?.search)
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
    <section>
        <article v-for="(beer,ix) in list" :key="ix">
            <Beer
                :beer="[ beer[k[1]], beer[k[2]] ]" 
                :i="ix % 4 "
            />        
        </article>
    </section>
</template>

<style scoped>
    section { @apply w-full p-2 pr-3 gap-x-3 gap-y-1 justify-center 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 
    }
    article { @apply flex flex-row justify-between }
    .icon { @apply h-full w-auto }
</style>