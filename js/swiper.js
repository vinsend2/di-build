
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
      }
    });
  })



  if (window.screen.availWidth < 1365) {
    let slider = document.querySelector('.mySwiper2')
    let prevArrow = document.querySelector('.swiper-button-prev')
    let nextArrow = document.querySelector('.swiper-button-next')

    const swiper = new Swiper(slider, {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      }
    });
  }
}



window.addEventListener('load', slider);





