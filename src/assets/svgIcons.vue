<script setup>
import Mug2Vue from './svgVue/1mug2.vue'
import Mug3Vue from './svgVue/1mug3.vue'
import MugBVue from './svgVue/1mugB.vue'
import MugWVue from './svgVue/1mugW.vue'
import MugsVue from './svgVue/2mugs.vue'
import bottleVue from './svgVue/bottle.vue'
import BarVue from './svgVue/bar.vue'
import Fridge from './svgVue/fridge.vue'
import SixPack from './svgVue/6pack.vue'
defineProps({icon:{type:Number, default:0}})
</script>
<template>
    <Mug2Vue v-if="icon==0" />
    <Fridge v-else-if="icon==99" />
    <BarVue v-else-if="icon==98" />
    <Mug3Vue v-else-if="icon==1" />
    <MugBVue v-else-if="icon==2" />
    <MugWVue v-else-if="icon==3" />
    <MugsVue v-else-if="icon==4" />
    <SixPack v-else-if="icon==6" />
    <bottleVue v-else />
</template>