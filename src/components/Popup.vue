<script setup>
  import { TOGGLE_POPUP } from '../helpers/constants.js';
  const {open} = defineProps({open: Boolean})
  const emit = defineEmits([TOGGLE_POPUP]);
  const closePopup = () => {
    emit(TOGGLE_POPUP);
  }
</script>

<template>
  <div id="cart" class="cart__popup" :class="{active: open}">
    <div class="cart__popup--overlay" @click.self="closePopup()">
      <form id="cartForm" class="cart__form">
        <div class="cart__popup--header">
          <h3 class="cart__title">Cart</h3>
          <button type="button" class="cart__btn--close" @click="closePopup()"></button>
        </div>
        <div class="cart__popup--body">
          <div class="cart__item">
            <div class="cart__item--title">Eel roll standard</div>
            <div class="cart__item--details">
              <div class="cart__item--amount">9 &#8364;</div>
              <div class="cart__item--controls">
                <button type="button" class="btn btn__outline">-</button>
                <span class="cart__item--volume">1</span>
                <button type="button" class="btn btn__outline">+</button>
              </div>
            </div>
          </div>
          <div class="cart__item">
            <div class="cart__item--title">Eel roll standard</div>
            <div class="cart__item--details">
              <div class="cart__item--amount">9 &#8364;</div>
              <div class="cart__item--controls">
                <button type="button" class="btn btn__outline">-</button>
                <span class="cart__item--volume">1</span>
                <button type="button" class="btn btn__outline">+</button>
              </div>
            </div>
          </div>
          <div class="cart__item">
            <div class="cart__item--title">Eel roll standard</div>
            <div class="cart__item--details">
              <div class="cart__item--amount">9 &#8364;</div>
              <div class="cart__item--controls">
                <button type="button" class="btn btn__outline">-</button>
                <span class="cart__item--volume">1</span>
                <button type="button" class="btn btn__outline">+</button>
              </div>
            </div>
          </div>
          <div class="cart__item">
            <div class="cart__item--title">Eel roll standard</div>
            <div class="cart__item--details">
              <div class="cart__item--amount">9 &#8364;</div>
              <div class="cart__item--controls">
                <button type="button" class="btn btn__outline">-</button>
                <span class="cart__item--volume">1</span>
                <button type="button" class="btn btn__outline">+</button>
              </div>
            </div>
          </div>
          <div class="cart__item">
            <div class="cart__item--title">Eel roll standard</div>
            <div class="cart__item--details">
              <div class="cart__item--amount">9 &#8364;</div>
              <div class="cart__item--controls">
                <button type="button" class="btn btn__outline">-</button>
                <span class="cart__item--volume">1</span>
                <button type="button" class="btn btn__outline">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__popup--footer">
          <div class="cart__total">45 &#8364;</div>
          <div class="cart__controls">
            <button type="submit" class="btn btn__primary">Order</button>
            <button type="button" name="cancelBtn" class="btn btn__outline" @click="closePopup()">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>

</style>