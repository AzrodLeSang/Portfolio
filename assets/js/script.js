const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "25px",
  duration: 2500,
  reset: true,
});

sr.reveal(".accueil-text", { delay: 190, origin: "bottom" });

sr.reveal(".apropos,.services,.portfolio,.contact", {
  delay: 150,
  origin: "bottom",
});

let coeur1 = document.querySelector(".heart1");
let coeur2 = document.querySelector(".heart2");
let coeur3 = document.querySelector(".heart3");
let coeur4 = document.querySelector(".heart4");
let coeur5 = document.querySelector(".heart5");
let coeur6 = document.querySelector(".heart6");

coeur1.onclick = () => {
  coeur1.classList.toggle("coeur");
};
coeur2.onclick = () => {
  coeur2.classList.toggle("coeur");
};
coeur3.onclick = () => {
  coeur3.classList.toggle("coeur");
};
coeur4.onclick = () => {
  coeur4.classList.toggle("coeur");
};

coeur5.onclick = () => {
  coeur5.classList.toggle("coeur");
};
coeur6.onclick = () => {
  coeur6.classList.toggle("coeur");
};

const annee = document.querySelector(".annee");

const anneecourante = new Date();

annee.innerText = anneecourante.getFullYear();
