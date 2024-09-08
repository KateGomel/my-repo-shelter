import "../scripts/burger-menu.js";
import { dataCards } from "../scripts/arrCard.js";
import { LINKS_IMG } from "../scripts/constants.js";
import { showCardPagination } from "../scripts/showCardsPagination.js";

const arr = [[], [], [], [], [], []];
function initPaginationId() {
  arr.map((item) => {
    if (item === arr[0]) {
      for (let i = 0; arr[0].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (!arr[0].includes(randNum)) {
          arr[0].push(randNum);
        }
      }
    } else if (item === arr[1]) {
      for (let i = 0; arr[1].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (!arr[1].includes(randNum) && !arr[0].includes(randNum)) {
          arr[1].push(randNum);
        }
      }
    } else if (item === arr[2]) {
      for (let i = 0; arr[2].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (
          randNum !== arr[1][2] &&
          randNum !== arr[1][3] &&
          !arr[2].includes(randNum)
        ) {
          arr[2].push(randNum);
        }
      }
    } else if (item === arr[3]) {
      for (let i = 0; arr[3].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (!arr[2].includes(randNum) && !arr[3].includes(randNum)) {
          arr[3].push(randNum);
        }
      }
    } else if (item === arr[4]) {
      for (let i = 0; arr[4].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (!arr[3].includes(randNum) && !arr[4].includes(randNum)) {
          arr[4].push(randNum);
        }
      }
    } else {
      for (let i = 0; arr[5].length < 4; i++) {
        let randNum = Math.floor(Math.random() * 8);
        if (!arr[5].includes(randNum) && !arr[4].includes(randNum)) {
          arr[5].push(randNum);
        }
      }
    }
  });
}
initPaginationId();

const initIdArr = [].concat(arr, arr).flat();

function checkWight() {
  let cards = null;
  if (window.innerWidth <= 680) {
    cards = 3;
  } else if (window.innerWidth <= 1200) {
    cards = 6;
  } else if (window.innerWidth > 1200) {
    cards = 8;
  }
  return cards;
}

const countCards = checkWight();
let cardsOnPage = countCards;
let currentPage = 1;
const pagination = document.querySelector(".pets__pagination");

function initRenderCards(data, cards, page) {
  const start = cards * (page - 1);
  const end = start + cards;
  const displayListArr = initIdArr.slice(start, end);
  // render cards
  pagination.append(showCardPagination(displayListArr));
}
initRenderCards(initIdArr, cardsOnPage, currentPage);

window.addEventListener("resize", () => {
  const countCards = checkWight();
  if (countCards !== cardsOnPage) {
    cardsOnPage = countCards;
    currentPage = 1;
    btnCurPage.innerText = "";
    btnCurPage.innerText = +1;
    pagination.innerHTML = "";
    initRenderCards(initIdArr, cardsOnPage, currentPage);
    btnPrev.setAttribute("disabled", true);
    btnPrev.classList.add("disable");
    dblBtnPrev.setAttribute("disabled", true);
    dblBtnPrev.classList.add("disable");
    btnNext.classList.remove("disable");
    btnNext.removeAttribute("disabled");
    dblBtnNext.classList.remove("disable");
    dblBtnNext.removeAttribute("disabled");
  }
});

//* *//

// EventListeners //

const btnCurPage = document.querySelector(".pets__current-page");
const dblBtnPrev = document.querySelector(".btn-dbl-prev");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const dblBtnNext = document.querySelector(".btn-dbl-next");

dblBtnPrev.addEventListener("click", () => {
  let maxPages = Math.ceil(initIdArr.length / cardsOnPage);
  pagination.innerHTML = "";
  currentPage = 1;
  initRenderCards(initIdArr, cardsOnPage, currentPage);
  btnCurPage.innerText = +currentPage;
  if (btnCurPage.innerText < 2) {
    btnPrev.setAttribute("disabled", true);
    btnPrev.classList.add("disable");
    dblBtnPrev.setAttribute("disabled", true);
    dblBtnPrev.classList.add("disable");
  }
  if (btnCurPage.innerText < maxPages) {
    btnNext.classList.remove("disable");
    btnNext.removeAttribute("disabled");
    dblBtnNext.classList.remove("disable");
    dblBtnNext.removeAttribute("disabled");
  }
});
btnPrev.addEventListener("click", () => {
  let maxPages = Math.ceil(initIdArr.length / cardsOnPage);
  pagination.innerHTML = "";
  currentPage = currentPage - 1;
  initRenderCards(initIdArr, cardsOnPage, currentPage);
  btnCurPage.innerText = +currentPage;
  if (btnCurPage.innerText < 2) {
    btnPrev.setAttribute("disabled", true);
    btnPrev.classList.add("disable");
    dblBtnPrev.setAttribute("disabled", true);
    dblBtnPrev.classList.add("disable");
  }
  if (btnCurPage.innerText < maxPages) {
    btnNext.classList.remove("disable");
    btnNext.removeAttribute("disabled");
    dblBtnNext.classList.remove("disable");
    dblBtnNext.removeAttribute("disabled");
  }
});
btnNext.addEventListener("click", () => {
  let maxPages = Math.ceil(initIdArr.length / cardsOnPage);
  pagination.innerHTML = "";
  currentPage = currentPage + 1;
  initRenderCards(initIdArr, cardsOnPage, currentPage);
  btnCurPage.innerText = +currentPage;
  if (btnCurPage.innerText < maxPages - 1) {
    dblBtnPrev.classList.remove("disable");
    dblBtnPrev.removeAttribute("disabled");
    btnPrev.classList.remove("disable");
    btnPrev.removeAttribute("disabled");
  }
  if (btnCurPage.innerText > maxPages - 1) {
    dblBtnNext.setAttribute("disabled", true);
    dblBtnNext.classList.add("disable");
    btnNext.setAttribute("disabled", true);
    btnNext.classList.add("disable");
  }
});
dblBtnNext.addEventListener("click", () => {
  let maxPages = Math.ceil(initIdArr.length / cardsOnPage);
  pagination.innerHTML = "";
  currentPage = maxPages;
  initRenderCards(initIdArr, cardsOnPage, currentPage);
  btnCurPage.innerText = +maxPages;
  if (btnCurPage.innerText > 1) {
    dblBtnPrev.classList.remove("disable");
    dblBtnPrev.removeAttribute("disabled");
    btnPrev.classList.remove("disable");
    btnPrev.removeAttribute("disabled");
  }
  if (btnCurPage.innerText < maxPages + 1) {
    dblBtnNext.setAttribute("disabled", true);
    dblBtnNext.classList.add("disable");
    btnNext.setAttribute("disabled", true);
    btnNext.classList.add("disable");
  }
});

export { initRenderCards };
