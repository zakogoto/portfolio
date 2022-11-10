const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close')
    menuItem = document.querySelectorAll('a, .menu__item');

hamburger.addEventListener('click', () => {
    menu.classList.add("active");
});

close.addEventListener('click', () => {
    menu.classList.remove("active");
});

menuItem.addEventListener('click', () => {
    menu.classList.remove("active");
});
