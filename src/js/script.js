const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeMenu = document.querySelector('.menu__close'),
	menuItems = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
	menu.classList.add("active");
});

closeMenu.addEventListener('click', () => {
	menu.classList.remove("active");
});

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove("active");
	});
});

const percent = document.querySelectorAll('.skills__progress-percent'),
	lines = document.querySelectorAll('.skills__progress-scale span');

percent.forEach((item, i) => {
	lines[i].style.width=item.innerHTML;
});

const form = document.querySelector('.contacts__form'),
	  ValidBtn = form.querySelector('.btn'),
	  nameInput = form.querySelector('#name'),
	  emailInput = form.querySelector('#email'),
	  checkBox = form.querySelector("#checkbox");

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
});
