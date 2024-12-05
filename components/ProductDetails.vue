<template>
    <div class="w-full max-w-96 m-auto">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="">
        <p>Price: {{ product.price }}</p>
        <p>Product ID: {{ product.id }}</p>
        <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            Add to cart
        </button>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>