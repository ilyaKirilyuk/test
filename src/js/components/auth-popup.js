let loginBtns = document.querySelectorAll('[data-btn="login"]');
let loginPopup = document.querySelector('[data-popup="login"]');
let popupWrapper = document.querySelector(".popups");
let loginCloseBtn = document.querySelector('[data-close="login"]');
let registerBtns = document.querySelectorAll('[data-btn="register"]');
let registerPopup = document.querySelector('[data-popup="register"]');
let registerCloseBtn = document.querySelector('[data-close="register"]');


let profileBtn = document.querySelector('[data-btn="my-profile"]');
let profilePopup = document.querySelector('[data-popup="profile"]');
let profileCloseBtn = document.querySelector('[data-close="profile"]');

let buyBtns = document.querySelectorAll('[data-btn="buy"]');
let buyPopup = document.querySelector('[data-popup="buy"]');
let buyCloseBtn = document.querySelector('[data-close="buy"]');

function closeAllPopups() {
  popupWrapper.classList.remove("popups--is-active");
  loginPopup.classList.remove("popup-login--is-active");
  registerPopup.classList.remove("popup-login--is-active");
  profilePopup.classList.remove("popup-profile--is-active");
  buyPopup.classList.remove("popup-buy--is-active")
}

registerBtns.forEach((registerBtn) => {
  registerBtn.addEventListener("click", () => {
    closeAllPopups();
    popupWrapper.classList.add("popups--is-active");
    registerPopup.classList.add("popup-login--is-active");
  });
});

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", () => {
    closeAllPopups();
    popupWrapper.classList.add("popups--is-active");
    buyPopup.classList.add("popup-buy--is-active");
  });
});


loginBtns.forEach((loginBtn) => {
  loginBtn.addEventListener("click", () => {
    closeAllPopups();
    popupWrapper.classList.add("popups--is-active");
    loginPopup.classList.add("popup-login--is-active");
  });
});

profileBtn.addEventListener("click", () => {
  closeAllPopups();
  popupWrapper.classList.add("popups--is-active");
  profilePopup.classList.add("popup-profile--is-active");
});

popupWrapper.addEventListener("click", (e) => {
  if (!e.target.closest('[data-popup="login"]') &&
  !e.target.closest('[data-popup="register"]')) {
    closeAllPopups();
  }
});

loginCloseBtn.addEventListener("click", () => {
  closeAllPopups();
});

registerCloseBtn.addEventListener("click", () => {
  closeAllPopups();
});

profileCloseBtn.addEventListener("click", () => {
  closeAllPopups();
});

buyCloseBtn.addEventListener("click", () => {
  closeAllPopups();
});
