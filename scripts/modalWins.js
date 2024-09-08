import { LINKS_IMG } from "./constants.js";
import { dataCards } from "./arrCard.js";
import { endAnimation } from "../index.js";

const overlay = document.querySelector(".modal"),
  bodyOverlay = document.querySelector("html");

function closeModalBtn() {
  overlay.classList.remove("modal-open");
  bodyOverlay.classList.remove("stop-scroll");
}

function closeModalOverlay(evt) {
  if (evt.target === overlay) {
    overlay.classList.remove("modal-open");
    bodyOverlay.classList.remove("stop-scroll");
  }
}

function showModal(name) {
  overlay.classList.add("modal-open");

  const currentItem = dataCards.find((item) => item.name === name);

  const getLink = () => {
    const pageUrl = new URL(window.location.href);
    if (pageUrl.pathname.includes("pets")) {
      return LINKS_IMG.pets;
    } else {
      return LINKS_IMG.main;
    }
  };

  overlay.innerHTML = `
  <div class="modal__wrapper">
    <div class="modal__card">
      <div class="modal__closeBtn btn-round">
        <img src="${getLink()}icons/closed.svg" alt="closedModal">
      </div>
      <img src="${getLink() + currentItem.imgMod}" alt="${
    currentItem.alt
  }" class="modal__card-img">
      <div class="modal__content">
        <h3 class="modal__title h3">${currentItem.name}</h3>
        <p class="modal__breed h4">${currentItem.type} - ${
    currentItem.breed
  }</p>
        <p class="modal__description h5">${currentItem.description}</p>
        <ul class="modal__options-list">
          <li class="modal__options-item">
            <span class="modal__options-bolt h5-bolt">Age:</span>
            <span class="modal__options-text h5">${currentItem.age}</span>
          </li>
          <li class="modal__options-item">
            <span class="modal__options-bolt h5-bolt">Inoculations:</span>
            <span class="modal__options-text h5">${currentItem.inoculations.join(
              ", "
            )}</span>
          </li>
          <li class="modal__options-item">
            <span class="modal__options-bolt h5-bolt">Diseases:</span>
            <span class="modal__options-text h5">${currentItem.diseases.join(
              ", "
            )}</span>
          </li>
          <li class="modal__options-item">
            <span class="modal__options-bolt h5-bolt">Parasites:</span>
            <span class="modal__options-text h5">${currentItem.parasites.join(
              ", "
            )}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;

  bodyOverlay.classList.add("stop-scroll");

  const modalCloseBtn = document.querySelector(".modal__closeBtn");
  modalCloseBtn.addEventListener("click", closeModalBtn);

  overlay.addEventListener("click", closeModalOverlay);
}

export { showModal };
