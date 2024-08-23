const burgerMenu = document.querySelector(".burger-menu"),
  burgerContent = document.querySelector(".burger-menu__content"),
  burgerBtn = document.querySelector(".header__mobile-btn"),
  wrapperContainer = document.querySelector(".wrapper");

const openMenu = () => {
  burgerMenu.classList.toggle("open-menu");
  burgerBtn.classList.toggle("open");
  wrapperContainer.classList.toggle("no-scroll");
};

const closeMenu = (evt) => {
  if (evt.target != burgerContent) {
    burgerMenu.classList.toggle("open-menu");
    burgerBtn.classList.toggle("open");
    wrapperContainer.classList.toggle("no-scroll");
  }
};

const closeResize = () => {
  if (window.innerWidth > 767) {
    burgerMenu.classList.remove("open-menu");
    burgerBtn.classList.remove("open");
    wrapperContainer.classList.remove("no-scroll");
  }
};

burgerBtn.addEventListener("click", openMenu);

burgerMenu.addEventListener("click", closeMenu);

window.addEventListener("resize", closeResize);
