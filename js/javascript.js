var deCheckbox = document.querySelector("#light-mode");

var deHTML = document.querySelector("html");

deCheckbox.addEventListener("change", changeColorMode);

function changeColorMode() {
  document.documentElement.classList.toggle("light-mode");
}