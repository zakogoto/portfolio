const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeMenu = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay'),
	menuItems = document.querySelectorAll('.menu__item');

hamburger.addEventListener('click', () => {
	hamburger.style.display = 'none';
	document.body.style.overflowY = 'hidden';
	menu.classList.add("active");
});


function hideMenu (component) {
	component.addEventListener('click', () => {
		menu.classList.remove("active");
		document.body.style.overflowY = 'scroll';
		hamburger.style.display = 'flex';
	})
}

hideMenu(closeMenu);
hideMenu(overlay);

menuItems.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove("active");
		document.body.style.overflowY = 'scroll';
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
