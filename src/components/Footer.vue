<script setup>
import { getUrl } from '../helpers/helpers.js';

</script>

<template>
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <router-link class="logo" to="/">
            <img class="logo__img" :src="getUrl('../assets/logo-icon.svg')" alt="logo button cover">
            <span class="logo__title">
              Delivery Food
            </span>
          </router-link>
          <nav class="footer__menu">
            <ul class="menu__list">
              <li class="menu__item">
                <router-link to="/" class="menu__item--link">Restaurants</router-link>
              </li>
              <li class="menu__item">
                <router-link to="/" class="menu__item--link">Couriers</router-link>
              </li>
              <li class="menu__item">
                <router-link to="/" class="menu__item--link">Press-center</router-link>
              </li>
              <li class="menu__item">
                <router-link to="/" class="menu__item--link">Contacts</router-link>
              </li>
            </ul>
          </nav>
          <div class="social">
            <a href="https://www.instagram.com/" class="menu__item--link">
              <img :src="getUrl('../assets/insta-icon.svg')" alt="follow instagram">
            </a>
            <a href="https://www.facebook.com" class="menu__item--link">
              <img :src="getUrl('../assets/fb-icon.svg')" alt="follow facebook">
            </a>
            <a href="https://vk.com" class="menu__item--link">
              <img :src="getUrl('../assets/wk-icon.svg')" alt="follow vkontakte">
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>

<style>

</style>