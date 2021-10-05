// Met hulp van de oefening States oefening 2 208c van  Sanne, https://codepen.io/shooft/pen/rNworwK en https://www.w3schools.com/jsref/met_win_settimeout.asp
var deCheckbox = document.querySelector("#light-mode");

var deHTML = document.querySelector("html");

var dingDark = new Audio('audio/ding.mp3');

function darkMode() {
  // Zet de class light-mode aan en uit en speelt een geluid af
  document.documentElement.classList.toggle("light-mode");
  dingDark.play();
}

// Als je erop klikt, voert hij de functie darkMode uit
deCheckbox.addEventListener("change", darkMode);