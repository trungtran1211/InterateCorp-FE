var swiper = new Swiper(".swiper1", {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 200,
        depth: 400,
        modifier: 1,
        slideShadows: false,
      },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2
      },
      1440: {
        slidesPerView: 2
      }
    }
  });
  