document.addEventListener("DOMContentLoaded", () => {
  // Blur Scroll Card
  function initScrollBlurEffect(section) {
    const cardContainer = section.querySelector(".custom__scrollbar--slide");
    const blurGradient = section.querySelector(".blur__gradient--slide");

    if (!cardContainer || !blurGradient) return;

    let lastScrollLeft = 0;

    cardContainer.addEventListener("scroll", () => {
      const scrollLeft = cardContainer.scrollLeft;

      if (scrollLeft > lastScrollLeft) {
        blurGradient.classList.add("hide");
      } else {
        blurGradient.classList.remove("hide");
      }

      lastScrollLeft = scrollLeft;
    });
  }

  document.querySelectorAll(".slide__scroll-section").forEach((section) => {
    initScrollBlurEffect(section);
  });

  // Submenu Show
  const categoryLink = document.querySelector(".nav__link--category");
  const submenuCategory = document.querySelector(".submenu__category");
  const headerArea = document.querySelector(".header");

  if (categoryLink) {
    categoryLink.addEventListener("click", function (event) {
      event.preventDefault();
      headerArea.classList.toggle("submenu__category--show");
    });

    document.addEventListener("click", function (event) {
      if (
        !headerArea.contains(event.target) &&
        headerArea.classList.contains("submenu__category--show")
      ) {
        headerArea.classList.remove("submenu__category--show");
      }
    });
  }

  // Home Page Slider
  document
    .querySelectorAll(".swiper--default")
    .forEach(function (swiperContainer) {
      const nextEl = swiperContainer
        .closest(".swiper__default-slider")
        .querySelector(".custom__pagination-nav--next-default");

      const prevEl = swiperContainer
        .closest(".swiper__default-slider")
        .querySelector(".custom__pagination-nav--previous-default");

      var swiperDefault = new Swiper(swiperContainer, {
        slidesPerView: 3.5,
        slidesPerGroup: 3,
        spaceBetween: 25,
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl,
        },
        loop: false,
      });
    });

  // Thanks Page Slider
  var swiperThanks = new Swiper(".swiper--thanks", {
    slidesPerView: 3.5,
    slidesPerGroup: 3,
    spaceBetween: 34,
    navigation: {
      nextEl: ".custom__pagination-nav--next-thanks",
      prevEl: ".custom__pagination-nav--previous-thanks",
    },
    pagination: {
      el: ".custom__swiper-pagination--thanks",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<button class="custom__pagination-number ' +
          className +
          '">' +
          (index + 1) +
          "</button>"
        );
      },
    },
  });

  // Category Details Page Slider
  var swiperDetails = new Swiper(".swiper--details", {
    slidesPerView: 2.5,
    slidesPerGroup: 3,
    spaceBetween: 34,
    navigation: {
      nextEl: ".custom__pagination-nav--next-details",
      prevEl: ".custom__pagination-nav--previous-details",
    },
    pagination: {
      el: ".custom__swiper-pagination--details",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<button class="custom__pagination-number ' +
          className +
          '">' +
          (index + 1) +
          "</button>"
        );
      },
    },
  });

  // Category Accessories Page Slider
  var swiperAccessories = new Swiper(".swiper--accessories", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: ".custom__pagination-nav--next-accessories",
      prevEl: ".custom__pagination-nav--previous-accessories",
    },
    pagination: {
      el: ".custom__swiper-pagination--accessories",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<button class="custom__pagination-number ' +
          className +
          '">' +
          "<span></span>" +
          "</button>"
        );
      },
    },
  });
});
