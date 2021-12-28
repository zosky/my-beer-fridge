<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import Brewer from './brewer.vue'
import MyBeer from './myBeer.vue'
const store = useStore()
const beer = store.state.myBeer
const beerCount = Object.values(store.state.myBeer).reduce((acc,brewer)=> {
  const t = Object.values(brewer).reduce((a,c)=> a+c,0 )
  return acc + t
},0 )
</script>
<template>
    <div v-for="(beers,brewer) in beer" :key="brewer" class="brewer">
        <Brewer :brewer="brewer" />
        <div class="beers">
            <MyBeer 
                v-for="(qty,b) in beers" :key="b" 
                :beer="b" :qty="qty" 
            />
        </div>
    </div>
</template>

<style scoped>
    .brewer { @apply p-2 border-b border-blue-100 }
    .beers{ @apply flex flex-row px-2 gap-x-1 flex-wrap }
</style>