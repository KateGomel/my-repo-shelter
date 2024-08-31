import "./scripts/burger-menu.js";
import { LINKS_IMG } from "./scripts/constants.js";
import { dataCards } from "./scripts/arrCard.js";
import { showCard } from "./scripts/showCards.js";
import { showModal } from "./scripts/modalWins.js";

// ShowInitCards //
const petsSlider = document.querySelector(".pets__slider");
const prevSlide = [];
const curSlide = [];
const nextSlide = [];
const initIndexArr = [prevSlide, curSlide, nextSlide];

function initIndex() {
  initIndexArr.map((item) => {
    if (item === prevSlide) {
      for (let i = 0; prevSlide.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 8);
        if (!prevSlide.includes(randomNum)) {
          prevSlide.push(randomNum);
        }
      }
    } else if (item === curSlide) {
      for (let i = 0; curSlide.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 8);
        if (!curSlide.includes(randomNum) && !prevSlide.includes(randomNum)) {
          curSlide.push(randomNum);
        }
      }
    } else {
      for (let i = 0; nextSlide.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 8);
        if (!nextSlide.includes(randomNum) && !curSlide.includes(randomNum)) {
          nextSlide.push(randomNum);
        }
      }
    }
  });
}
initIndex();

// render cards

initIndexArr.forEach((item) => {
  petsSlider.append(showCard(item));
});

// add class on slide & dataset on cards

const sliderList = document.querySelectorAll(".pets__slider-list");

for (let i = 0; i < sliderList.length; i++) {
  if (i === 0) {
    sliderList[i].classList.add("prev-slide");
  } else if (i === 1) {
    sliderList[i].classList.add("cur-slide");
  } else {
    sliderList[i].classList.add("next-slide");
  }
}

sliderList.forEach((item) => {
  let temp = item.querySelectorAll(".pets__slider-item");
  for (let j = 0; j < temp.length; j++) {
    temp[j].dataset.item = j;
  }
});

//* *//

// EventListeners //
const btnLeft = document.querySelector(".btn-prev"),
  btnRight = document.querySelector(".btn-next"),
  slider = document.querySelector(".pets__slider"),
  changedSlideR = document.querySelector(".next-slide"),
  changedSlideL = document.querySelector(".prev-slide"),
  currentSlide = document.querySelector(".cur-slide");

const moveToRight = () => {
  slider.classList.add("to-right");
  btnRight.removeEventListener("click", moveToRight);
  btnLeft.removeEventListener("click", moveToLeft);
  let reserveArr = curSlide.concat([]);
};

const moveToLeft = () => {
  slider.classList.add("to-left");
  btnRight.removeEventListener("click", moveToRight);
  btnLeft.removeEventListener("click", moveToLeft);
};

const searchIdCurSlides = () => {
  let id = [];
  currentSlide.querySelectorAll("li").forEach((item) => {
    id.push(+item.dataset.id);
  });
  return id;
};

const newListenerModal = (elem) => {
  elem.querySelectorAll(".pets__slider-item").forEach((item) => {
    item.addEventListener("click", () => {
      showModal(item.dataset.name);
    });
  });
};

///////////////////////////
const endAnimation = (AnimationEvent) => {
  if (AnimationEvent.animationName === "toRight") {
    slider.classList.remove("to-right");

    changedSlideL.innerHTML = "";
    changedSlideL.innerHTML = currentSlide.innerHTML;

    currentSlide.innerHTML = "";
    currentSlide.innerHTML = changedSlideR.innerHTML;
    newListenerModal(currentSlide);

    let curSlideIDR = searchIdCurSlides();

    const newSlideR = () => {
      let newIndex = [];
      for (let i = 0; newIndex.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 8);
        if (!newIndex.includes(randomNum) && !curSlideIDR.includes(randomNum)) {
          newIndex.push(randomNum);
        }
      }
      return newIndex;
    };

    let newNextSliderR = newSlideR();

    const reRenderCardR = (data) => {
      changedSlideR.innerHTML = "";
      data.forEach((el) => {
        const currentItem = dataCards.find((item) => item.id === el);
        const cardItem = document.createElement("li");
        cardItem.classList.add("pets__slider-item");
        cardItem.dataset.id = `${currentItem.id}`;
        cardItem.dataset.name = `${currentItem.name}`;
        cardItem.dataset.item = `${data.indexOf(el)}`;
        cardItem.innerHTML = `
      <img src=${LINKS_IMG.main + currentItem.img} alt=${
          currentItem.alt
        } class="pets__item-img">
      <h4 class="pets__item-title h4">${currentItem.name}</h4>
      <button class="pets__item-btn btn-secondary btn-text">Learn more</button>
    `;
        changedSlideR.appendChild(cardItem);
      });
    };
    reRenderCardR(newNextSliderR);
  } else {
    slider.classList.remove("to-left");
    changedSlideR.innerHTML = "";
    changedSlideR.innerHTML = currentSlide.innerHTML;

    currentSlide.innerHTML = "";
    currentSlide.innerHTML = changedSlideL.innerHTML;
    newListenerModal(currentSlide);

    let curSlideIDL = searchIdCurSlides();

    const newSlideL = () => {
      let newIndex = [];
      for (let i = 0; newIndex.length < 3; i++) {
        let randomNum = Math.floor(Math.random() * 8);
        if (!newIndex.includes(randomNum) && !curSlideIDL.includes(randomNum)) {
          newIndex.push(randomNum);
        }
      }
      return newIndex;
    };

    let newPrevSlider = newSlideL();
    changedSlideL.innerHTML = "";
    const reRenderCardL = (data) => {
      data.forEach((el) => {
        const currentItem = dataCards.find((item) => item.id === el);
        const cardItem = document.createElement("li");
        cardItem.classList.add("pets__slider-item");
        cardItem.dataset.id = `${currentItem.id}`;
        cardItem.dataset.name = `${currentItem.name}`;
        cardItem.dataset.item = `${data.indexOf(el)}`;
        cardItem.innerHTML = `
      <img src=${LINKS_IMG.main + currentItem.img} alt=${
          currentItem.alt
        } class="pets__item-img">
      <h4 class="pets__item-title h4">${currentItem.name}</h4>
      <button class="pets__item-btn btn-secondary btn-text">Learn more</button>
    `;
        changedSlideL.appendChild(cardItem);
      });
    };
    reRenderCardL(newPrevSlider);
  }
  btnRight.addEventListener("click", moveToRight);
  btnLeft.addEventListener("click", moveToLeft);
};

btnRight.addEventListener("click", moveToRight);

btnLeft.addEventListener("click", moveToLeft);

slider.addEventListener("animationend", endAnimation);

// ** //

export { initIndex, endAnimation };
