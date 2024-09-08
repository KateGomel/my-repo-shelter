import { LINKS_IMG } from "./constants.js";
import { dataCards } from "./arrCard.js";
import { showModalPagination } from "./showModalPagination.js";
import { initRenderCards } from "../pages/pets.js";

function showCardPagination(data) {
  const sliderItems = document.createElement("ul");
  sliderItems.classList.add("pets__slider-list");

  data.forEach((el) => {
    const currentItem = dataCards.find((item) => item.id === el);
    const cardItem = document.createElement("li");
    cardItem.classList.add("pets__slider-item");
    cardItem.dataset.id = `${currentItem.id}`;
    cardItem.dataset.name = `${currentItem.name}`;
    cardItem.innerHTML = `
      <img src=${LINKS_IMG.pets + currentItem.img} alt=${
      currentItem.alt
    } class="pets__item-img">
      <h4 class="pets__item-title h4">${currentItem.name}</h4>
      <button class="pets__item-btn btn-secondary btn-text">Learn more</button>
    `;
    cardItem.addEventListener("click", () => {
      showModalPagination(currentItem.name);
    });
    sliderItems.appendChild(cardItem);
  });
  return sliderItems;
}

export { showCardPagination };
