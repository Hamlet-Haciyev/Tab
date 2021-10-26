let tabItemLink = document.querySelectorAll(".tab-item-link");
let tabItemBody = document.querySelectorAll(".tab-item-body");
let method = () => {
  for (let i = 0; i < tabItemLink.length; i++) {
    tabItemLink[i].addEventListener("click", (e) => {
      e.preventDefault();
      for (let y = 0; y < tabItemLink.length; y++) {
        tabItemLink[y].classList.remove("active");
        tabItemBody[y].classList.remove("active");
      }
      tabItemLink[i].classList.add("active");
      tabItemBody[i].classList.add("active");
    });
  }
};
method();
