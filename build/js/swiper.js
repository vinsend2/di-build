
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


