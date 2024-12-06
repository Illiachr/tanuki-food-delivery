import preLoader from "./preLoader.js";
import restaurantCard from "./restaurantCard.js";
import mealCard from "./mealCard.js";

const populateFuncs = {
  'restaurants': restaurantCard,
  'meals': mealCard
}

const showCards = (containerElem, data) => {
  const { content } = containerElem.dataset;  
  containerElem.textContent = '';
  if (!data || data.length === 0) return containerElem.innerHTML = preLoader();
  for (const item of data) {
    const cardItem = populateFuncs[content](item);
    containerElem.insertAdjacentHTML('beforeend', cardItem);
  }
}

export default showCards;