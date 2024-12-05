<template>
  <div>
    <h1>Products page:</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
  layout: "products-layout",
})

const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
  title: "Products page"
})
</script>

<style></style>