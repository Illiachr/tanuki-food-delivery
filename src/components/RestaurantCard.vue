<script setup>
  import { fallbackCoverImgRest } from "./helpers/constants.js";
  import { formatMeals } from "./helpers/helpers.js";

  const {data} = defineProps({ data: Object });
</script>

<template>
  <router-link
    :to="`/restaurants/${data.id}`"
  >
    <div
      class="product__card"
      :data-name="data.name.toLowerCase().replaceAll(' ', '-')"
    >
      <div
        class="card__cover"
        :style="{ backgroundImage: `url(${data.logoImg || fallbackCoverImgRest})` }"
      ></div>
      <div class="card__description">
        <div class="product__description--header">
          <h4 class="product__title">{{ data.name }}</h4>
          <span class="product__title--info">{{ data.averageOrderTime }}</span>
        </div>
        <div class="product__description--text">
          <div class="product__info--rating">
            <img src="../assets/star-icon.svg" alt="product rating" />
            <span>{{ data.rating }}</span>
          </div>
          <div class="product__info--text">
            <span>from {{ data.minMealPrice }} &#8364;</span><span class="dot"></span>
            <span>{{ formatMeals(data.meals) }}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
