<script setup>
import VGrid from '@revolist/vue3-datagrid'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
const autoSizeColumnConfig = { mode: 'autoSizeOnTextOverlap',allColumns:true }
const myBeer = computed( ()=> useStore().state.onListRAW.filter(b=>b.qty) )
const columnTemplate = (createElement, column) => {
  return createElement(
    'div', 
    { class: { 'bg-blue-2':true} },
    column.name)
}
const cols = [
  { sortable: true, prop: 'name', name: 'name', columnTemplate },
  { sortable: true, autoSize: true, prop: 'brand', name: 'brand',
    cellTemplate: (createElement,props) => {
      return createElement('div',{
        class: { 'max-w-min': true }
      }, props.model[props.prop] || '' )
    },
  },
  { sortable: true, autoSize: true, prop: 'type', name: 'type',},
  { sortable: true, autoSize: true, prop: 'qty', name: 'q', 
    cellTemplate: (createElement,props) => {
      return createElement('div',{
        class: { 'text-blue-500 text-right': true }
      }, props.model[props.prop] || '' )
    }  
  }
]
</script>
<template>
    <VGrid 
        class="rGrid"
        theme="compact" 
        :canFocus="true"
        :useClipboard="true"
        :frameSize="3"
        :source="myBeer" 
        :columns="cols"
        :resize="true"
        :autoSizeColumn="autoSizeColumnConfig"
    />
</template>

<style scoped>
    .rGrid { height: 93vh ; @apply bg-blue-50 w-full text-xs }
</style>
<style>
    .header-rgRow { @apply bg-blue-200 }
</style>