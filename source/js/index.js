"use strict";

const html = document.querySelector("html");

const initFixedHeader = () => {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const headerHeight = header.offsetHeight;

  if (window.pageYOffset > headerHeight) {
    header.classList.add("fixed");
    menu.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    menu.classList.remove("fixed");
  }
};

const switcherButton = () => {
  const button1 = document.querySelector("#Grid1");
  const button2 = document.querySelector("#Grid2");
  const grid2 = document.querySelector(".products-list");
  const img = document.querySelectorAll(".swiper-slide > img");
  console.log(img)
  button1.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(1,100%)';
    img.forEach(el => {
      el.style.transform = 'scale(1)';
    });
  };
  button2.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(2,45%)';
    img.forEach(el => {
      el.style.transform = 'scale(1.2)';
    });
  };
};

const burgerSubmenu = () => {
  let menuElem = document.querySelectorAll('.main-list_submenu');
  let titleElem = document.querySelectorAll('.main-list__link');

    titleElem[0].onclick = function() {
      menuElem[0].classList.toggle('open');
    };
    titleElem[1].onclick = function() {
      menuElem[1].classList.toggle('open');
    };

};

const swiperPrew1 = () => {
  const swiper = document.querySelectorAll('.mySwiper');
  const wrapper = document.querySelectorAll('.swiper-wrapper');

  console.log(swiper[1])
  console.log(swiper[4], wrapper[4])

 swiper.forEach((el, i) => {
    el.addEventListener("mouseenter", (e) => {
      wrapper[i].style.transform = 'translate3d(-484px, 0px, 0px)'
    })
  });

  swiper.forEach((el, i) => {
    el.addEventListener("mouseleave", (e) => {
      wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'
    })
  });
};




const initFeedbackModal = () => {
  const workBtn = document.querySelector(".work__btn");
  const feedbackModal = document.querySelector("#feedback-modal");

  workBtn.addEventListener("click", () => {
    html.classList.add("lock");
    feedbackModal.classList.add("open");
  });
};

const initCloseModal = () => {
  const modalCloseButtons = document.querySelectorAll(".modal__close");

  modalCloseButtons.forEach(function (button) {
    button.addEventListener("click", () => {
      html.classList.remove("lock");
      button.closest(".modal").classList.remove("open");
    });
  });
};

const overlayClose = () => {
  const e = document.querySelector(".modal__overlay");
  e.addEventListener("click", function (event) {
    if (e == event.target) {
      html.classList.remove("lock");
      document.querySelector(".modal").classList.remove("open");
    }
  });
};



window.addEventListener("scroll", () => {
  initFixedHeader();
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    initFixedHeader();
    switcherButton();
    burgerSubmenu();
    swiperPrew1();
  },
  false
);
