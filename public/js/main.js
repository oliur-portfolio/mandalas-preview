// New Slider
var swiper = new Swiper(".swiper--details", {
  slidesPerView: 3.5,
  slidesPerGroup: 3,
  spaceBetween: 34,
  navigation: {
    nextEl: ".custom__pagination-nav--next",
    prevEl: ".custom__pagination-nav--previous",
  },
  pagination: {
    el: ".custom__swiper-pagination",
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
      submenuCategory.classList.toggle("submenu__category--show");
    });

    document.addEventListener("click", function (event) {
      if (
        !headerArea.contains(event.target) &&
        submenuCategory.classList.contains("submenu__category--show")
      ) {
        submenuCategory.classList.remove("submenu__category--show");
      }
    });
  }
});
