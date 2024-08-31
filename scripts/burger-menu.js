const burgerMenu = document.querySelector(".burger-menu"),
  burgerBtn = document.querySelector(".header__mobile-btn"),
  wrapperContainer = document.querySelector(".wrapper"),
  links = document.querySelectorAll(".burger-menu__list-link");

const openMenu = () => {
  burgerMenu.classList.toggle("open-menu");
  burgerBtn.classList.toggle("open");
  wrapperContainer.classList.toggle("no-scroll");
};

const closeMenu = (evt) => {
  console.log(evt.target);

  if (evt.target === burgerMenu) {
    burgerMenu.classList.toggle("open-menu");
    burgerBtn.classList.toggle("open");
    wrapperContainer.classList.toggle("no-scroll");
  } else {
    links.forEach((item) => {
      if (evt.target === item) {
        burgerMenu.classList.remove("open-menu");
        burgerBtn.classList.remove("open");
        wrapperContainer.classList.remove("no-scroll");
      }
    });
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
