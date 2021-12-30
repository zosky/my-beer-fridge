<script setup>
import { GaugeLow, GaugeFull } from 'mdue'
import SvgIcons from '../assets/svgIcons.vue'
const SRM = [
  { min: 2, max: 4, color: 'Pale Straw',  styles: ['Pale/Lite Lager', 'Pilsner', 'Berliner Weisse', 'Witbier', 'New England IPA' ]},
  { min: 3, max: 6, color: 'Straw',  styles: ['Maibock (Helles)', 'Blonde Ale', 'California Common', 'Kolsch', 'Cream Ale' ]},
  { min: 4, max: 8, color: 'Pale Gold',  styles: ['Weissbier', 'Lambic', 'Belgian Tripel' ]},
  { min: 6, max: 12, color: 'Deep Gold',  styles: ['India Pale Ale (IPA)', 'Pale Ale' ]},
  { min: 8, max: 16, color: 'Pale Amber',  styles: ['Saison', 'English Pale Ale', 'Irish Red Ale' ]},
  { min: 10, max: 20, color: 'Medium Amber',  styles: ['English Bitter (ESB)', 'Belgian Dubbel' ]},
  { min: 13, max: 26, color: 'Deep Amber',  styles: ['Double IPA', 'Biere de Garde', 'Altbier', 'Barleywine. Scotch Ale' ]},
  { min: 17, max: 33, color: 'Amber Brown',  styles: ['Amber Ale', 'Vienna Lager', 'Dark Lager', 'Marzen' ]},
  { min: 20, max: 39, color: 'Brown',  styles: ['Bock', 'Dunkelweizen', 'Brown Ale', 'Brown Porter' ]},
  { min: 24, max: 47, color: 'Ruby Brown',  styles: ['Robust Porter', 'Dopplebock', 'Irish Dry Stout', 'Oatmeal Stout'] },
  { min: 29, max: 57, color: 'Deep Brown',  styles: ['American Stout'] },
  { min: 35, max: 79, color: 'Black',  styles: ['Russian Imperial Stout' ]}
]
</script>

<template>
    <div id=colorTag>
        <div id=top>SRMscale</div>
        <div id="SRMlist">
            <div v-for="(srm,ix) in SRM" :key="ix"
                :class="[
                    'srm',
                    `bg-beer-${Math.floor(srm.max*40/79)}`,
                    `text-beer-${40-Math.floor(srm.max*40/80)}`
                ]" 
            >
                <SvgIcons :icon="ix%4" class="icon" />
                <div class="meta">
                    <div class="colorName" v-text="srm.color" />
                    <section class="beers">
                        <GaugeLow class="py-0.5 -mr-1" /> 
                        <div class="srmMM min" v-text="srm.min" />
                        <GaugeFull class="py-0.5 -mr-1 -ml-1" />
                        <div class="srmMM max" v-text="srm.max" />
                        <div class="beer" 
                            v-for="beer in srm.styles" :key="beer"
                            :class="`bg-beer-${Math.floor(srm.max*40/79)+2 }`" 
                            v-text="beer" 
                        />
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #colorTag { @apply flex flex-col gap-0 px-1 w-full justify-center }
    #top { @apply w-full text-center font-bold pt-2 }
    #SRMlist { @apply flex flex-col flex-wrap justify-start w-full pb-4 }
    .srm { @apply pt-1 pl-2 flex flex-row items-center py-1 border-b }
    .srm:first-child { @apply rounded-t-xl }
    .srm:last-child { @apply rounded-b-xl border-b-0 }
    .icon { @apply -my-10 w-10 h-10 inline  }
    .colorName { @apply px-2 font-bold text-sm }
    .beers { @apply flex flex-row flex-wrap gap-x-1 gap-y-0.5 pb-2 pl-1 }
    .beer { @apply font-light text-xs rounded-xl px-2 }
    .srmMM { @apply text-xs opacity-50 }
    .beer.bg-beer-18 { @apply text-beer-10 }
    .text-beer-21 { @apply text-beer-10 }
    .text-beer-17 { @apply text-beer-15 }
    .bg-beer-42 { @apply bg-beer-38 }
</style>