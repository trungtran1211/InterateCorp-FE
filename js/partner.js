const dynu1 = window.matchMedia('(min-width: 1440px)')
if (dynu1.matches) {
  var swiper = new Swiper(".swiper_dynu", {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 290,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
    loop: true,
    breakpoints: {
      1440: {
        slidesPerView: 2
      }
    }
  });
}
const dynu2 = window.matchMedia('(max-width: 1025px)')
if (dynu2.matches) {
  var swiper = new Swiper(".swiper_dynu", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2,
      slideShadows: true
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2
      },
      768: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 1.8
      },
    }
  });
}

  