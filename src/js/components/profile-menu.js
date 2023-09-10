let profileBtn = document.querySelector(".profile-btn");
let profileMenu = document.querySelector(".profile-menu");
let profileBtns = document.querySelectorAll(".profile-menu-list__btn");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.add("profile-menu--is-active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".header-profile")) {
    profileMenu.classList.remove("profile-menu--is-active");
  }
});

profileBtns.forEach((e) => {
  e.addEventListener("click", () => {
    profileMenu.classList.remove("profile-menu--is-active");
  });
});
