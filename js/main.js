//index페이지에서 사용되는 js//index 페이지  사용 js

//메인 비주얼 슬라이더
var visualSwiper = new Swiper('.visual .swiper-container', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  }
});

//사업소개 슬라이더
var busSwiper = new Swiper('.bus .swiper-container', {
  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.bus .bus_prev',
    nextEl: '.bus .bus_next'
  },
  pagination: {
    el: '.bus .swiper-pagination',
    clickable: true
  }
});
