let favoritesRadioButtons = document.querySelectorAll(".favorites-form-input");
let favoritesCards = document.querySelectorAll(".favorites-cards-list");

favoritesRadioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    favoritesCards.forEach((element) => {
      setTimeout(() => {
        element.classList.remove("favorites-cards-list--is-active");
      }, 300);

      element.classList.remove("favorites-cards-list--is-visible");

      if (button.id === element.dataset.id) {
        setTimeout(() => {
          element.classList.add("favorites-cards-list--is-active");
        }, 300);

        setTimeout(() => {
          element.classList.add("favorites-cards-list--is-visible");
        }, 600);
      }
    });
  });
});
