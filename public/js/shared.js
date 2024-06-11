window.addEventListener("load", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const siteScrollElem = document.querySelector(".site-scroll");
  const navbar = document.querySelector(".navbar");
  const closeMenu = document.querySelector(".x-mark");
  const modalCloseElem = document.querySelector(".accident__body .bi-x");

  mobileMenuIcon?.addEventListener("click", () => showMenu());

  overlay?.addEventListener("click", () => hideMenu());

  siteScrollElem.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  modalCloseElem.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });

  function showMenu() {
    mobileMenu.classList.add("show");
    overlay.classList.add("show");
    navbar.classList.remove("active");
  }

  function hideMenu() {
    mobileMenu.classList.remove("show");
    overlay.classList.remove("show");
  }

  closeMenu.addEventListener("click", () => {
    hideMenu();
  });

  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
