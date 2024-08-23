import { LINKS_IMG } from "./constants.js";
import { dataCards } from "./arrCard.js";

const sliderItems = document.querySelector(".pets__slider-list");

function showCard(data) {
  data.forEach((item) => {
    const getLink = () => {
      const pageUrl = new URL(window.location.href);
      if (pageUrl.pathname.includes("pets")) {
        return LINKS_IMG.pets + item.img;
      } else {
        return LINKS_IMG.main + item.img;
      }
    };
    const cardItem = document.createElement("li");
    cardItem.classList.add("pets__slider-item");
    cardItem.innerHTML = `
      <img src=${getLink()} alt="${item.alt}" class="pets__item-img">
      <h4 class="pets__item-title h4">${item.name}</h4>
      <button class="pets__item-btn btn-secondary btn-text">Learn more</button>
    `;
    sliderItems.appendChild(cardItem);
  });
}

showCard(dataCards);
