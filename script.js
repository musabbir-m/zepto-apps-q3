let dropdownButton = document.querySelector("#user-menu-button");
let dropdownContainer = document.querySelector("#menu-container");

dropdownButton.addEventListener("click", () => {
  dropdownContainer.classList.toggle('hidden')
});

