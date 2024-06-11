window.addEventListener("load", () => {
  const tabItems = document.querySelectorAll(".tab-item");

  tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", (e) => {
      tabItems.forEach((tab) => tab.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

});
