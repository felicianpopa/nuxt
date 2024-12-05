<template>
    <h1>About page</h1>
    <p>{{ data.message }}</p>
    <p>Data: {{ data.data }}</p>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=Mario', {
    method: 'post',
    body: {
        age: 30
    }
})
</script>

<style></style>