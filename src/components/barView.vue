<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
const store = useStore()
const beer = store.state.myBeer
const beerCount = Object.values(store.state.myBeer).reduce((acc,brewer)=> {
  const t = Object.values(brewer).reduce((a,c)=> a+c,0 )
  return acc + t
},0 )
console.log(beerCount)
</script>
<template>
    @barView/todo [ttl={{beerCount}}]

    <pre>{{beer}}</pre>
</template>