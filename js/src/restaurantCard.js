import { fallbackCoverImgRest } from "./constants.js";
import { formatMeals } from "./helpers.js";

const fallbackCoverImg = fallbackCoverImgRest;

const restaurantCard = ({
  name,
  logoImg,
  rating,
  meals,
  averageOrderTime,
  minMealPrice
  }) => {
  return `<div class="product__card" data-name=${name.toLowerCase().replaceAll(' ', '-')}>
            <div class="card__cover" style="background-image: url(${logoImg || fallbackCoverImg});"></div>
            <div class="card__description">
              <div class="product__description--header">
                <h4 class="product__title">${name}</h4>
                <span class="product__title--info">${averageOrderTime}</span>
              </div>
              <div class="product__description--text">
                <div class="product__info--rating">
                  <img src="img/star-icon.svg" alt="product rating">
                  <span>${rating}</span>
                </div>
                <div class="product__info--text">
                  <span>from ${minMealPrice} &#8364;</span><span class="dot"></span>
                  <span>${formatMeals(meals)}</span>
                </div>
              </div>
            </div>
          </div>`;
};

export default restaurantCard;