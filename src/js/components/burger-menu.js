let root = document.querySelector(":root");
let burgerBtn = document.querySelector(".burger-menu-btn");
let navList = document.querySelector(".nav-wrapper");
let body = document.querySelector(".main-page");
let header = document.querySelector(".header");

document.addEventListener("DOMContentLoaded", () => {
  let headerHeight = document.querySelector(".header").offsetHeight;
  root.style.setProperty("--header-height", `${headerHeight}`);

  let navLinks = document.querySelectorAll(".nav-link");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-menu-btn--is-active");
    navList.classList.toggle("nav-wrapper--is-active");
    body.classList.toggle("main-page--overflow-hidden");

    navLinks.forEach((e) => {
      e.addEventListener("click", () => {
        burgerBtn.classList.remove("burger-menu-btn--is-active");
        navList.classList.remove("nav-wrapper--is-active");
        body.classList.remove("main-page--overflow-hidden");
      });
    });
  });
});

window.addEventListener("resize", () => {
  let headerHeight = document.querySelector(".header").offsetHeight;
  console.log(headerHeight);
  root.style.setProperty("--header-height", `${headerHeight}`);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-wrapper") && !e.target.closest(".burger-menu-btn")) {
    burgerBtn.classList.remove("burger-menu-btn--is-active");
    navList.classList.remove("nav-wrapper--is-active");
    body.classList.remove("main-page--overflow-hidden");
  }
});
