const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener('click', e => {
    console.log(burger);
    menu.classList.toggle("invisible");
});




