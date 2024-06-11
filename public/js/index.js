window.addEventListener("load", () => {
  const tabItems = document.querySelectorAll(".tab-item");
  const productsContainer = document.querySelectorAll(".products-container");

  tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", (e) => {
      tabItems.forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
      productsContainer.forEach((product) =>
        product.classList.remove("active")
      );
      const tab = e.target.dataset.cat;
      const tabItemElem = document.querySelector(`.${tab}`);
      tabItemElem.classList.add("active");
    });
  });
});
