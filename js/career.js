var swiper = new Swiper(".career", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    spaceBetween: 0,
    watchActiveIndex: true,
    onSlideChangeEnd: function () {
        $(".presSlidesActive").text(pressSwiper.activeIndex +1);
    }
});