// Met hulp van de oefening States oefening 2 208c van  Sanne, https://codepen.io/shooft/pen/rNworwK en https://www.w3schools.com/jsref/met_win_settimeout.asp
var deCheckbox = document.querySelector("#light-mode");
var menu = document.querySelector(".hamburgermenu");
var closemenu = document.querySelector(".closebtn");
var dingDark = new Audio('audio/ding.mp3');
var cart = document.querySelector("#cart");
var products = document.querySelectorAll(".product");

function darkMode() {
  // Zet de class light-mode aan en uit en speelt een geluid af
  document.documentElement.classList.toggle("light-mode");
  dingDark.play();
}

// Side menu met behulp van https: www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Als je erop klikt, voert hij de functie darkMode uit
deCheckbox.addEventListener("change", darkMode);

menu.addEventListener("click", openNav);
closemenu.addEventListener("click", closeNav);