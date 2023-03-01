const dynu1 = window.matchMedia('(min-width: 1440px)')
if (dynu1.matches) {
  var swiper = new Swiper(".swiper_dynu", {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
  
// Slider DTStudio
var swiper = new Swiper(".swiper_dt", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// Slider Permate

var swiper = new Swiper(".swiper_pm", {
  speed: 1000,
  loop: true,
  effect: 'slide',
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: -10,
    },
  }
});