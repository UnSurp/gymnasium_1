
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const floor1 = document.getElementById('f1');
const floor2 = document.getElementById('f2');
const floor3 = document.getElementById('f3');


button1.addEventListener('click', function() {
    button1.style.color = "#ffffff"
    button2.style.color = "#C9C9C9"
    button3.style.color = "#C9C9C9"

    button1.style.fontSize = "32px"
    button2.style.fontSize = "28px"
    button3.style.fontSize = "28px"

    button1.style.backgroundColor = "#2a3044"
    button2.style.backgroundColor = "#212634"
    button3.style.backgroundColor = "#212634"

    floor1.style.opacity = 1
    floor2.style.opacity = 0
    floor3.style.opacity = 0
});
button2.addEventListener('click', function() {
    button1.style.color = "#C9C9C9"
    button2.style.color = "#ffffff"
    button3.style.color = "#C9C9C9"

    button1.style.fontSize = "28px"
    button2.style.fontSize = "32px"
    button3.style.fontSize = "28px"

    button1.style.backgroundColor = "#212634"
    button2.style.backgroundColor = "#2a3044"
    button3.style.backgroundColor = "#212634"

    floor1.style.opacity = 0
    floor2.style.opacity = 1
    floor3.style.opacity = 0
});
button3.addEventListener('click', function() {
    button1.style.color = "#C9C9C9"
    button2.style.color = "#C9C9C9"
    button3.style.color = "#ffffff"

    button1.style.fontSize = "28px"
    button2.style.fontSize = "28px"
    button3.style.fontSize = "32px"

    button1.style.backgroundColor = "#212634"
    button2.style.backgroundColor = "#212634"
    button3.style.backgroundColor = "#2a3044"

    floor1.style.opacity = 0
    floor2.style.opacity = 0
    floor3.style.opacity = 1
});


// бургер меню

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__link");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  })
);

