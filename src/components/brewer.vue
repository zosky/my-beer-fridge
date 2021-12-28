<script setup>
defineProps({brewer: { type: String, default: 'Great Lakes'}})
</script>

<template>
    <h1 v-text="brewer" />
</template>

<style scoped>
    h1 { @apply font-light text-xs pl-2 }
</style>