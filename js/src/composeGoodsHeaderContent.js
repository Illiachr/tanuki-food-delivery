import { formatMeals } from "./helpers.js";

const composeGoodsHeaderContent = ({
  name,
  rating,
  meals,
  minMealPrice
}) => {
  return `<h2 class="products__title">${name}</h2>
          <div class="product__description--text">
            <div class="product__info--rating">
              <img src="img/star-icon.svg" alt="product rating">
              <span>${rating}</span>
            </div>
            <div class="product__info--text">
              <span>from ${minMealPrice} &#8364;</span><span class="dot"></span>
              <span>${formatMeals(meals)}</span>
            </div>
          </div>`;
};

export default composeGoodsHeaderContent;