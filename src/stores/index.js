import { data } from "../helpers/constants";
import { reactive } from "vue";

const state = {
  popupOpen: false,
  restaurantsData: data.restaurants,
  setPopupOpen(val) {
    this.popupOpen = val;
  },
  findById(id) {
    return this.restaurantsData
      .find((restaurant) => restaurant.id === Number(id))
  }
};

export const store = reactive(state);
