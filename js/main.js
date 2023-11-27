let burger = document.querySelector(".menu__burger");
let checkburger = document.querySelector(".mobileMenu")
let sob = document.querySelector(".sob");
burger.addEventListener('click', function(){
    checkburger.classList.toggle("checked");
    burger.classList.toggle("active");
});

sob.addEventListener('click', function(){
    checkburger.classList.toggle("checked");
    burger.classList.toggle("active");
});


