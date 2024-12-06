import { fallbackCoverImgMeal } from "./constants.js";

const fallbackCoverImg = fallbackCoverImgMeal;

const mealCard = ({
    article,
    photo,
    ingredients,
    price
  }) => {  
  return `<div class="product__card goods">
            <div class="card__cover" style="background-image: url(${photo || fallbackCoverImg});"></div>
            <div class="card__description">
              <div class="product__description--header">
                <h4 class="product__title">${article}</h4>
                <p class="product__subtitle">${ingredients}</p>
              </div>
              <div class="product__card--footer">
                <button type="button" class="btn btn__primary">
                  <span>Order</span>
                  <img class="btn__icon" src="img/shopping-cart-icon-white.svg" alt="cart button cover">
                </button>
                <span class="goods__price">${price} &#8364;</span>
              </div>
            </div>
          </div>`;
};

export default mealCard;