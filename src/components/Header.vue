<script setup>
  import { TOGGLE_POPUP } from "../helpers/constants.js";
import { getUrl } from "../helpers/helpers.js";
  const emit = defineEmits([TOGGLE_POPUP]);
  const togglePopup = () => {
    emit(TOGGLE_POPUP);
  }
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="logo" to="/">
          <img class="logo__img" :src="getUrl('../assets/logo-icon.svg')" alt="logo button cover" srcset="">
          <span class="logo__title">
            Delivery Food
          </span>
        </router-link>
        <div class="header__controls">
          <button type="button" class="btn btn__primary">
            <img src="../assets/user-icon.svg" alt="login button cover">
            <span>Login</span>
          </button>
          <button id="cartBtn" type="button" class="btn btn__outline" @click="togglePopup">
            <img src="../assets/shopping-cart-icon.svg" alt="cart button cover">
            <span>Your Cart</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>

</style>