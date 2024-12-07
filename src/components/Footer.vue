<template>
    <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <router-link class="logo" to="/">
          <img class="logo__img" src="../assets/logo-icon.svg" alt="logo button cover">
          <span class="logo__title">
            Delivery Food
          </span>
        </router-link>
        <nav class="footer__menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="goods.html?provider=tanuki" class="menu__item--link">Restaurants</a>
            </li>
            <li class="menu__item">
              <a href="#!" class="menu__item--link">Couriers</a>
            </li>
            <li class="menu__item">
              <a href="#!" class="menu__item--link">Press-center</a>
            </li>
            <li class="menu__item">
              <a href="#!" class="menu__item--link">Contacts</a>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="https://www.instagram.com/" class="menu__item--link">
            <img src="../assets/insta-icon.svg" alt="follow instagram">
          </a>
          <a href="https://www.facebook.com" class="menu__item--link">
            <img src="../assets/fb-icon.svg" alt="follow facebook">
          </a>
          <a href="https://vk.com" class="menu__item--link">
            <img src="../assets/wk-icon.svg" alt="follow vkontakte">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>