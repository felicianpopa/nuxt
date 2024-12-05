<template>
    <h1>About page</h1>
    <p>Data: {{ data }}</p>
</template>

<script setup>
const { data } = await useFetch('/api/currency/EUR');
console.warn(data)
</script>

<style></style>