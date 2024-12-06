import composeGoodsHeaderContent from "./src/composeGoodsHeaderContent.js";
import { ACTIVE_CLS, CART_FORM_ID, data } from "./src/constants.js";
import { findProviderData } from "./src/helpers.js";
import showCards from "./src/showCards.js";

// const ACTIVE_CLS = 'active';
// const CART_FORM_ID = '#cartForm';
// const CURRENCY_SYMBOL = '&#8364;';

// const data = {
//   restaurants: [
//     {
//       name: 'Pizza Plus',
//       logoImg: 'img/restaurants/pizzaplus.jpg',
//       rating: 4.5,
//       meals: ['pizza'],
//       averageOrderTime: '50 min',
//       minMealPrice: 9,
//       stock: [
//         {
//           article: 'Pizza Margherita',
//           photo: 'img/goods/image-007.jpg',
//           ingredients: 'Pizza dough, tomatoes, mozzarella',
//           price: 9,
//         }
//       ]
//     },
//     {
//       name: 'Tanuki',
//       logoImg: 'img/restaurants/tanuki.jpg',
//       rating: 4.8,
//       meals: ['pizza', 'sushi'],
//       averageOrderTime: '50 min',
//       minMealPrice: 9,
//       stock: [
//         {
//           article: 'Eel Roll Standard',
//           photo: 'img/goods/image-001.jpg',
//           ingredients: 'Rice, eel, unagi sauce, sesame, nori seaweed.',
//           price: 9,
//         }
//       ]
//     },
//   ]
// }

const cartBtn = document.getElementById('cartBtn');
const cartPopup = document.getElementById('cart');
const cartForm = cartPopup.querySelector(CART_FORM_ID);
const CARD_CONTAINER_ID = 'card-container';
const cardContainer = document.getElementById(CARD_CONTAINER_ID);

const openPopup = (popupElem) => {
  popupElem.classList.add(ACTIVE_CLS);
};

const closePopup = (popupElem) => {
  popupElem.classList.remove(ACTIVE_CLS);
};

const onCartOpen = () => {
  openPopup(cartPopup);
};

const onCartClose = () => {
  closePopup(cartPopup);
};

const onPopupClick = (e) => {
  e.stopPropagation();
  const { target } = e;

  if (target.classList.contains('cart__btn--close') ||
      target.classList.contains('cart__popup--overlay')) {
    onCartClose();
    return;
  }

  if (target === cartForm.cancelBtn) {
    onCartClose();
    return;
  }
};

const onRestaurantCardClick = (e) => {
  const cardElem = e.target.closest('.product__card');
  if (!cardElem) return;
  const { name } = cardElem.dataset;  
  window.location.href = `goods.html?provider=${name}`;
};

const init = () => {
  let cardsData = data?.restaurants;
  const url = new URL(window.location.href);
  if (url.searchParams.has('provider')) {
    const pageHeader = document.querySelector('.products__header');
    const provider = url.searchParams.get('provider');
    const providerData = findProviderData(data.restaurants, provider);

    const headerContent = composeGoodsHeaderContent(providerData);
    pageHeader.innerHTML = headerContent;
    cardsData = providerData.stock;
  }
  
  cartBtn.addEventListener('click', onCartOpen);
  cartPopup.addEventListener('click', onPopupClick);
  showCards(cardContainer, cardsData);
  if (cardContainer.dataset.content === 'restaurants') {
    cardContainer.addEventListener('click', onRestaurantCardClick);
  }

}

init();
