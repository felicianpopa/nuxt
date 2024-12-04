<template>
    <div class="card text-center">
        <img :src="product.image" alt="" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">
            {{ product.title }}
        </p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Product</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>