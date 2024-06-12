window.addEventListener("load", () => {
  // dom selector
  const tabs = document.querySelectorAll(".tab");
  const tabMenus = document.querySelectorAll(".tabMenu");

  tabs.forEach((tabItem) => {
    tabItem.addEventListener("click", (e) => {
      tabMenus.forEach((tabMenu) => tabMenu.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
      const tab = e.target.dataset.name;
      const tabMenu = document.querySelector(`.${tab}`);
      tabMenu.classList.add("active");
    });
  });

  // init swiper fro slider
  const secondSlider = new Swiper(".secondSwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    // Navigation arrows
  });

  const mainSwiper = new Swiper(".mainSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: secondSlider,
    },
  });
});
