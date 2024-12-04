<template>
    <h1>Product details for {{ id }}</h1>
</template>

<script setup>
definePageMeta({
    layout: 'products-layout'
})
const { id } = useRoute().params
</script>

<style></style>