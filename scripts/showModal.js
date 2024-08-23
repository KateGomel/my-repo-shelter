import { LINKS_IMG } from "./constants.js";
import { dataCards } from "./arrCard.js";

const card = document.querySelector(".pets__slider-item");

card.addEventListener("click", function (e) {
  console.log(e.target);
});
