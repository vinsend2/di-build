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
  const button3 = document.querySelector("#Grid3");
  const button4 = document.querySelector("#Grid4");

  const grid2 = document.querySelector(".products-list");
  const img = document.querySelectorAll(".swiper-slide > img");
  const imgBlock = document.querySelectorAll(".swiper-slide");
  const cardBlock = document.querySelectorAll(".product-card");
  const heart = document.querySelectorAll(".product-card__favorite");
  const swiper = document.querySelectorAll('.mySwiper');
  const wrapper = document.querySelectorAll('.swiper-wrapper');
  const width = window.screen.availWidth;


  button2.onclick = function() {
    button1.querySelector("svg").style.fill = 'gray';
    grid2.style.gridTemplateColumns = 'repeat(1,100%)';
    img.forEach(el => {
      el.style.transform = 'scale(1)';
    });
  };
  if (width > 1440) {
  button3.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(2,38%)';
    grid2.style.justifyContent = 'center';
    cardBlock.forEach(el => {
      el.style.height = '935px';
    });
    imgBlock.forEach(el => {
      el.style.maxHeight = '836px';
    });

    heart.forEach(el => {
      el.style.transform = 'translateY(832px)';
    });

    swiper.forEach((el, i) => {

      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-730px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  };
  button4.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(4,24.5%)';
    grid2.style.justifyContent = 'normal';
    cardBlock.forEach(el => {
      el.style.height = '640px';
    });
    imgBlock.forEach(el => {
      el.style.maxHeight = '560px';
    });

    heart.forEach(el => {
      el.style.transform = 'translateY(558px)';
    });

    swiper.forEach((el, i) => {

      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-484px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  };
} else {
  button3.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(2,38%)';
    grid2.style.justifyContent = 'center';
    cardBlock.forEach(el => {
      el.style.height = '772px';
    });
    imgBlock.forEach(el => {
      el.style.maxHeight = '836px';
    });

    heart.forEach(el => {
      el.style.transform = 'translateY(678px)';
    });

    swiper.forEach((el, i) => {

      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-511px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  };
  button4.onclick = function() {
    grid2.style.gridTemplateColumns = 'repeat(4,24.5%)';
    grid2.style.justifyContent = 'normal';
    cardBlock.forEach(el => {
      el.style.height = '515px';
    });
    imgBlock.forEach(el => {
      el.style.maxHeight = '560px';
    });

    heart.forEach(el => {
      el.style.transform = 'none';
    });

    swiper.forEach((el, i) => {

      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-344px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  };
}
  button1.onclick = function() {
    button1.querySelector("svg").style.fill = 'black';
    grid2.style.gridTemplateColumns = 'repeat(2,50%)';
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

const searchOpen= () => {
  let form = document.querySelector('.search-form');
  let btn = document.querySelector('.right-block__btn--search');
  let close = document.querySelector('.search-form__reset');

    btn.onclick = function(e) {
      e.preventDefault();
      form.classList.toggle('open');
    };
    close.onclick = function(e) {
     e.preventDefault();
      form.classList.remove('open');
    };
};

const addressOpen = () => {
  const address = document.querySelectorAll('.second-list__link--address');
  console.log(address)

  address.forEach((el) => {
    el.addEventListener("click", (e) => {
      el.preventDefault();
      console.log(123);
    })
  });

}

const swiperPrew1 = () => {
  const swiper = document.querySelectorAll('.mySwiper');
  const wrapper = document.querySelectorAll('.swiper-wrapper');
  const width = window.screen.availWidth;

  if (width > 1440) {

    swiper.forEach((el, i) => {
      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-484px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  }
  else {
    swiper.forEach((el, i) => {
      el.addEventListener("mouseenter", (e) => {
        wrapper[i].style.transform = 'translate3d(-344px, 0px, 0px)'
      })
    });

    swiper.forEach((el, i) => {
      el.addEventListener("mouseleave", (e) => {
        wrapper[i].style.transform = 'translate3d(0px, 0px, 0px)'      })
    });
  }




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
    searchOpen();
    addressOpen();
  },
  false
);
