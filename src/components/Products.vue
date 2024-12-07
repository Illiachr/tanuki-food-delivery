<script setup>
  import MealCard from './MealCard.vue';
  import RestaurantCard from './RestaurantCard.vue';
  import { data } from './helpers/constants';
  import { formatMeals } from './helpers/helpers';
  const { id } = defineProps({ id: String });

  const currentRestaurant = id ? data.restaurants.find((restaurant) => restaurant.id === Number(id)) : null;

</script>

<template>
      <section class="section products">
      <div class="container">
        <div class="products__inner">
          <div class="products__header">
            <template v-if="!currentRestaurant">
              <h2 class="products__title">Restaurants</h2>
              <input type="text" class="products__search" placeholder="Find meals or places">
            </template>
            <template v-else>
              <h2 class="products__title">{{currentRestaurant.name}}</h2>
              <div class="product__description--text">
                <div class="product__info--rating">
                  <img src="../assets/star-icon.svg" alt="product rating">
                  <span>{{currentRestaurant.rating}}</span>
                </div>
                <div class="product__info--text">
                  <span>from {{currentRestaurant.minMealPrice}} &#8364;</span><span class="dot"></span>
                  <span>{{formatMeals(currentRestaurant.meals)}}</span>
                </div>
              </div>
            </template>
          </div>
          <template v-if="currentRestaurant">
            <div
              id="card-container"
              class="products__cards"
              data-content="restaurants"
            >
              <template
                v-for="meal in currentRestaurant.stock"
                :key="meal.id"
              >
                <MealCard :data="meal"/>
              </template>
            </div>
          </template>
          <template v-else>
            <div
              id="card-container"
              class="products__cards"
              data-content="restaurants"
            >
              <template
                v-for="restaurant in data.restaurants"
                :key="restaurant.id"
              >
                <RestaurantCard :data="restaurant"/>
              </template>
            </div>
          </template>
        </div>
      </div>
    </section>
</template>

<style></style>