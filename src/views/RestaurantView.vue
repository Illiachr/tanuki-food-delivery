<script setup>
  import Products from '../components/Products.vue';
  defineProps({
    id: String
  })
</script>

<template>
  <Products :id="id" />
</template>

