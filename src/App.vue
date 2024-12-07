<script setup>
import { ref } from 'vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Popup from './components/Popup.vue';

const isOpen = ref(false);
</script>

<template>
  <Header @togglePopup="isOpen = true"/>
  <main class="main">
    <router-view></router-view>
  </main>
  <Popup :open="isOpen" @togglePopup="isOpen = false" />
  <Footer />
</template>

<style scoped></style>
