<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Beer from './beer.vue'
const store = useStore()
const onList = store.state.onListRAW
const search = computed(()=>store.state?.search ?? '')
const k = Object.keys(onList[0])
const list = computed( ()=>{
  const s = search.value?.toLowerCase()
  let list = onList
  return (!s) ? list : list.filter( b=> {
    const BE = b[k[1]]?.toLowerCase() 
    const BR = b[k[2]]?.toLowerCase() 
    return BE.includes(s) || BR.includes(s)  ? true : false
  })
})
</script>

<template>
  <section>
      <article v-for="(beer,ix) in list?.slice(0,100)" :key="ix">
          <Beer
              :beer="[ beer[k[1]], beer[k[2]] ]" 
              :i="ix % 4 "
              :qty="beer.qty"
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