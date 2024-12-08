<script setup>
import { store } from './stores';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Popup from './components/Popup.vue';
</script>

<template>
  <Header @togglePopup="store.setPopupOpen(true)"/>
  <main class="main">
    <router-view></router-view>
  </main>
  <Popup :open="store.popupOpen" @togglePopup="store.setPopupOpen(false)" />
  <Footer />
</template>

<style scoped></style>
