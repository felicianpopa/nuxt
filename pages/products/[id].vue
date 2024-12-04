<template>
    <div class="w-full max-w-96 m-auto">
        <h2>{{ product.title }}</h2>
        <img :src="product.image" alt="">
        <p>Price: {{ product.price }}</p>
        <p>Product ID: {{ product.id }}</p>
    </div>

</template>

<script setup>
definePageMeta({
    layout: 'products-layout'
})
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri)
</script>

<style></style>