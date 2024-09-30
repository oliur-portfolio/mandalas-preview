document.addEventListener("DOMContentLoaded", () => {
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
});
