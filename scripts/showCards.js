import { LINKS_IMG } from "./constants.js";
import { dataCards } from "./arrCard.js";
import { showModal } from "./modalWins.js";
import { initIndex, endAnimation } from "../index.js";

function showCard(data) {
  const sliderItems = document.createElement("ul");
  sliderItems.classList.add("pets__slider-list");

  data.forEach((el) => {
    const currentItem = dataCards.find((item) => item.id === el);
    const getLink = () => {
      const pageUrl = new URL(window.location.href);
      if (pageUrl.pathname.includes("pets")) {
        return LINKS_IMG.pets;
      } else {
        return LINKS_IMG.main;
      }
    };
    const cardItem = document.createElement("li");
    cardItem.classList.add("pets__slider-item");
    cardItem.dataset.id = `${currentItem.id}`;
    cardItem.dataset.name = `${currentItem.name}`;
    cardItem.innerHTML = `
      <img src=${getLink() + currentItem.img} alt=${
      currentItem.alt
    } class="pets__item-img">
      <h4 class="pets__item-title h4">${currentItem.name}</h4>
      <button class="pets__item-btn btn-secondary btn-text">Learn more</button>
    `;
    cardItem.addEventListener("click", () => {
      showModal(currentItem.name);
    });
    sliderItems.appendChild(cardItem);
  });
  return sliderItems;
}

export { showCard };

