<template>
  <div>
    <h1>Products page:</h1>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
      </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
  layout: "products-layout",
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style></style>