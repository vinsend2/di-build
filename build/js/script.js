ScrollReveal().reveal(".hero__title ", { delay: 500 });
ScrollReveal().reveal(".text-content", { delay: 1500 });


ScrollReveal().reveal(".wwd-card", {
  delay: 500,
  origin: "left",
  distance: "120px",
  easing: "ease-in-out",
});

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
    button3.querySelector("svg").style.fill = 'gray';
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
    button4.querySelector("svg").style.fill = 'gray';
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
    button3.querySelector("svg").style.fill = 'gray';
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
  button3.onclick = function() {
    button3.querySelector("svg").style.fill = 'black';
    button4.querySelector("svg").style.fill = 'gray';
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

const postForm = async (url, data) => {
  const res = await fetch(url, {
      method: `POST`,

      headers: {


          'Content-type': 'application/json'


      },
      body: data

  });

  return await res.json();
};

const getRes = async (url) => {
  const res = await fetch(url);

  if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};


const slider = ()=>{
  let largeSliders = document.querySelectorAll('.mySwiper')
  let prevArrow = document.querySelectorAll('.swiper-button-prev')
  let nextArrow = document.querySelectorAll('.swiper-button-next')
  largeSliders.forEach((slider, index)=>{
    let sliderLength = slider.children[0].children.length
    let result = (sliderLength > 1) ? true : false
    const swiper = new Swiper(slider, {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: nextArrow[index],
        prevEl: prevArrow[index],
      },
    });
  })
}
window.addEventListener('load', slider)


