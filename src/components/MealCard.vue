<script setup>
  import { fallbackCoverImgMeal } from "./helpers/constants.js";

  const {data} = defineProps({ data: Object });
</script>

<template>
  <div class="product__card goods">
    <div class="card__cover" :style="{ backgroundImage: `url(${data.logoImg || fallbackCoverImgMeal})` }"></div>
    <div class="card__description">
      <div class="product__description--header">
        <h4 class="product__title">{{data.article}}</h4>
        <p class="product__subtitle">{{data.ingredients}}</p>
      </div>
      <div class="product__card--footer">
        <button type="button" class="btn btn__primary">
          <span>Order</span>
          <img class="btn__icon" src="../assets/shopping-cart-icon-white.svg" alt="cart button cover">
        </button>
        <span class="goods__price">{{data.price}} &#8364;</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
