<script setup>
import MealCard from "./MealCard.vue";
import RestaurantCard from "./RestaurantCard.vue";
import { store } from "../stores";
import { formatMeals, getUrl } from "../helpers/helpers.js";

const { id } = defineProps({ id: String });

const currentRestaurant = id ? store.findById(id) : null;
</script>

<template>
  <section class="section products">
    <div class="container">
      <div class="products__inner">
        <div class="products__header">
          <template v-if="!currentRestaurant">
            <h2 class="products__title">Restaurants</h2>
            <input
              type="text"
              class="products__search"
              placeholder="Find meals or places"
            />
          </template>
          <template v-else>
            <h2 class="products__title">{{ currentRestaurant.name }}</h2>
            <div class="product__description--text">
              <div class="product__info--rating">
                <img
                  :src="getUrl('../assets/star-icon.svg')"
                  alt="product rating"
                />
                <span>{{ currentRestaurant.rating }}</span>
              </div>
              <div class="product__info--text">
                <span>from {{ currentRestaurant.minMealPrice }} &#8364;</span
                ><span class="dot"></span>
                <span>{{ formatMeals(currentRestaurant.meals) }}</span>
              </div>
            </div>
          </template>
        </div>
        <div id="card-container" class="products__cards">
          <template v-if="currentRestaurant">
            <template v-for="meal in currentRestaurant.stock" :key="meal.id">
              <MealCard :data="meal" />
            </template>
          </template>
          <template v-else>
            <router-link
              v-for="restaurant in store.restaurantsData"
              :key="restaurant.id"
              :to="`/restaurants/${restaurant.id}`"
            >
              <RestaurantCard :data="restaurant" />
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
