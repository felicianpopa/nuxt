<template>
    <div class="w-full max-w-96 m-auto">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="">
        <p>Price: {{ product.price }}</p>
        <p>Product ID: {{ product.id }}</p>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>