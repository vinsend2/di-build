"use strict";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const $ = (x, parent = document) => {
  return parent.querySelector(x);
}

const catalogToogle = () => {
  if (document.querySelector(".catalog-menu .menu__box") === null) {
    return false;
  }
  document.querySelector('.filter__item--catalog .main-list__link').parentNode.addEventListener("click", () => {
    $('.catalog-menu .menu__box').classList.toggle('menu__box--open')
  });
  $('.close-btn').addEventListener("click", () => {
    $('.catalog-menu .menu__box').classList.toggle('menu__box--open')
  });
  document.querySelector('#catalog-btn').addEventListener("click", () => {
    $('.catalog-menu .menu__box').classList.toggle('menu__box--open')
  });
}

const html = document.querySelector("html");

const popupInit = () => {
  const sliders = document.querySelectorAll(".details .mySwiper2 .swiper-slide img");
  function Resize () {
    if (window.screen.availWidth > 1365) {
      sliders.forEach(el => {
        el.setAttribute ('data-fancybox', 'gallery')
      });
    }
    else {
      sliders.forEach(el => {
        el.removeAttribute ('data-fancybox', 'gallery')
      });
    }
  }
  Resize();
  window.addEventListener(`resize`, e => {
    Resize();
  });
};



const initFixedHeader = () => {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const catalog = document.querySelector(".catalog-menu .menu__box");
  const headerHeight = header.offsetHeight;

  if (window.screen.availWidth > 1365) {
    if (window.pageYOffset > headerHeight) {
      header.classList.add("fixed");
      menu.classList.add("fixed");
      body.style.paddingTop = '200px';

    } else {
      header.classList.remove("fixed");
      menu.classList.remove("fixed");
      body.style.paddingTop = '0';
    }
  }
  else {
    if (window.pageYOffset > headerHeight) {
      header.classList.add("fixed");
      menu.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
      menu.classList.remove("fixed");
    }
  }
};

const initFixedMenu = () => {

  if (document.querySelector(".catalog-menu .menu__box") === null) {
    return false;
  }
  const header = document.querySelector(".header");
  const catalog = document.querySelector(".catalog-menu .menu__box");
  const body = document.querySelector("body");
  const headerHeight = header.offsetHeight;

  if (window.pageYOffset > headerHeight) {
    catalog.classList.add("fixed");
  }
  else {
    catalog.classList.remove("fixed");
  }
}

const switcherButton = () => {

  if (document.querySelector("#Grid3") === null) {
    return false;
  }

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
    button1.querySelector("svg").style.fill = '#8593a2';
    button2.querySelector("label").style.background = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGlkPSJwcmVmaXhfX2ljb25fdmlld19yb3dzX2FjdGl2ZSIgZGF0YS1uYW1lPSJpY29uIHZpZXcgcm93cyBhY3RpdmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uMDI5IC0uMDI5KSI+CiAgICAgICAgPGcgaWQ9InByZWZpeF9fUmVjdGFuZ2xlXzE4NSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTg1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMDI5IC4wMjkpIiBzdHlsZT0ic3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjNweDtmaWxsOm5vbmUiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIxIiBzdHlsZT0ic3Ryb2tlOm5vbmUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjE3IiBoZWlnaHQ9IjE3IiB4PSIxLjUiIHk9IjEuNSIgcng9Ii41IiBzdHlsZT0iZmlsbDpub25lIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K) center center no-repeat';
    grid2.style.gridTemplateColumns = 'repeat(1,100%)';
    img.forEach(el => {
      el.style.transform = 'scale(1)';
    });
    cardBlock.forEach(el => {
      el.classList.add('full-grid')
    });
  };
  if (width > 1440) {
    button4.onclick = function() {
      button4.querySelector("svg").style.fill = 'black';
      button3.querySelector("svg").style.fill = '#8593a2';
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
    button3.onclick = function() {
      button3.querySelector("svg").style.fill = 'black';
      button4.querySelector("svg").style.fill = '#8593a2';
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

    button4.onclick = function() {
      button4.querySelector("svg").style.fill = 'black';
      button3.querySelector("svg").style.fill = '#8593a2;';
      grid2.style.gridTemplateColumns = 'repeat(2,38%)';
      grid2.style.justifyContent = 'center';
      cardBlock.forEach(el => {
        el.style.height = '772px';
      });
      imgBlock.forEach(el => {
        el.style.maxHeight = '836px';
      });

      heart.forEach(el => {
        el.style.transform = 'translateY(0)';
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
    button3.onclick = function() {
      button3.querySelector("svg").style.fill = 'black';
      button4.querySelector("svg").style.fill = '#8593a2';
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
    button2.querySelector("label").style.background = 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xLC5jbHMtM3tmaWxsOm5vbmV9LmNscy0xe3N0cm9rZTojNzg4MzkxO3N0cm9rZS13aWR0aDoycHh9LmNscy0ye3N0cm9rZTpub25lfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iaWNvbl92aWV3X3Jvd3MiIGRhdGEtbmFtZT0iaWNvbiB2aWV3IHJvd3MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uMDI5IC0uMDI5KSI+CiAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZV8xODUiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTg1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguMDI5IC4wMjkpIj4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBjbGFzcz0iY2xzLTIiIHJ4PSIxIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xIDFoMTh2MThIMXoiIGNsYXNzPSJjbHMtMyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==) center center no-repeat';

    grid2.style.gridTemplateColumns = 'repeat(2,50%)';
    img.forEach(el => {
      el.style.transform = 'scale(1.2)';
    });

  };
};

const burgerSubmenu = () => {
  let menuElem = document.querySelectorAll('.main-list_submenu');
  let titleElem = document.querySelectorAll('.main-list__item');


  titleElem[0].onclick = function() {
    titleElem[0].classList.toggle('item-open')
    menuElem[0].classList.toggle('open');
  };
  titleElem[1].onclick = function() {
    titleElem[1].classList.toggle('item-open')
    menuElem[1].classList.toggle('open');
  };
  titleElem[3].onclick = function() {
    titleElem[3].classList.toggle('item-open')
    menuElem[2].classList.toggle('open');
  };
  titleElem[4].onclick = function() {
    titleElem[4].classList.toggle('item-open')
    menuElem[3].classList.toggle('open');
  };

};

const  favoriteClick = () => {
  let heart = document.querySelectorAll('.product-card .product-card__favorite');
  console.log(heart);
  heart.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      el.classList.toggle('marked');
    })
  });
}

const  addToCart = () => {
  const addBtn = document.querySelectorAll('.product-card__btn--basket');

  addBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(123);
      addBtn[0].innerText = '?????????????? ???? ??????????????';
      addBtn[1].innerText = '?????????????? ???? ??????????????';
    })
  });


}

const addressClose = () => {
  const address = document.querySelectorAll('.second-list__link--address');
  const submenu = document.querySelectorAll('.second-menu__submenu')
  const svg = document.querySelector('.second-list__item--address svg')
  console.log(svg);
  address.forEach((el) => {
    el.addEventListener("click", (e) => {
      submenu[0].classList.toggle('open');
      submenu[1].classList.toggle('open');
      svg.classList.toggle('rotate');
    })  })
  submenu.forEach((el) => {
    el.addEventListener("mouseleave", (e) => {
      submenu[0].classList.toggle('open');
      submenu[1].classList.toggle('open');
      svg.classList.toggle('rotate');
    })  })

}

const searchOpen= () => {
  let form = document.querySelectorAll('.search-form');
  let btn = document.querySelector('.right-block__btn--search');
  let close = document.querySelectorAll('.search-form__reset');

  btn.onclick = function(e) {
    e.preventDefault();
    form[0].classList.toggle('open');
    form[1].classList.toggle('open');
  };

  close.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      form[0].classList.toggle('open');
      form[1].classList.toggle('open');
    })
  });
};



const swiperPrew1 = () => {
  const swiper = document.querySelectorAll('.mySwiper');
  const wrapper = document.querySelectorAll('.mySwiper .swiper-wrapper');
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
  initFixedMenu();
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    initFixedHeader();
    switcherButton();
    burgerSubmenu();
    swiperPrew1();
    searchOpen();
    catalogToogle();
    popupInit();
    initFixedMenu();
    favoriteClick();
    addToCart();
    addressClose();
  },
  false
);
