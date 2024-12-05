<template>
    <ProductDetails :product="product" />
</template>

<script setup>
definePageMeta({
    layout: 'products-layout'
})
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri);

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: `Product ${id} not found`, fatal: true })
}
</script>

<style></style>