document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);
	// let mm = gsap.matchMedia();
	// mm.add("(min-width: 800px)", () => {

	// });

	let sections = gsap.utils.toArray('section');
	sections.forEach((section, i) => {
		console.log(section.offsetHeight, window.screen.availHeight)
		ScrollTrigger.create({
			ease: true,
			trigger: section,
			// markers: true,
			start: 'bottom bottom',
			// start: 'top top',
			pin: true,
			// end: '+=100px',
			scrub: true,
			snap: 1,
			pinSpacing: false
		})
	})
   });

const menuActions = () => {
	const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeBtn = document.querySelector('.menu__close'),
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

	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove("active");
			document.body.style.overflowY = 'scroll';
		});
	});
	

	hideMenu(closeBtn);
	hideMenu(overlay);
}

menuActions();

function parallax (w, l) {
	const wrapper = document.querySelector(w);
	const layers = document.querySelectorAll(l);
	
	function initParallax (e) {
		const clientX = e.clientX;
		const clientY = e.clientY;
		const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
		const parallaxTopOffset = wrapper.getBoundingClientRect().top;
		// const parallaxOverflow = parallaxTopOffset / wrapper.getBoundingClientRect().height;
		const coordX = clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
		const coordY = clientY - parallaxTopOffset - 0.5 * wrapper.offsetHeight;
		// console.log(wrapper.getBoundingClientRect().height + parallaxTopOffset);
		// wrapper.addEventListener('scroll', (e) => {
		// 	if(wrapper.getBoundingClientRect().height + parallaxTopOffset <= wrapper.getBoundingClientRect().height / 2) {
		// 	}
		// })
		
		// if()
		// wrapper.setAttribute('style', `opacity:${1 + (parallaxTopOffset / wrapper.getBoundingClientRect().height)};`)
		
		layers.forEach(layer => {
			const layerSpeed = layer.dataset.speed;
			const x = (coordX * layerSpeed).toFixed(2);
			const y = (coordY * layerSpeed).toFixed(2);
			// layer.setAttribute('style', `transform: translate(${x}px, ${y}px); opacity:${1 + parallaxOverflow};`);
			layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`);
		})
	}
	wrapper.addEventListener('mousemove', initParallax);
	// wrapper.addEventListener('mouseout', reset);
};

parallax('.promo', '.parallax_layer');

// function parallaxScroll(next) {
// 	const nextSec = document.querySelector(next);
// 	// const nextSecPosition = nextSec.getBoundingClientRect().top;
// 	// console.log(nextSecPosition)
// 	// if(nextSecPosition === 0) {
// 	// 	nextSec.setAttribute('style', `position: fixed; height: 100vh; width: 100vw;`)
// 	// }
// 	// window.addEventListener('scroll', () => {
// 	// })
// 	// const prevSecPosition = prevSec.getBoundingClientRect().top;
// 	// const parallaxLeftOfSet = wrapper.get
// 	// document.addEventListener('scroll', () => {
// 	// 	let lastKnownScrollPosition = window.scrollY
// 	// 	console.log(lastKnownScrollPosition)
// 	// })
// };
// const observer = new IntersectionObserver(entries => {
// 	console.log(window, 12)
// 	entries.forEach(entry => {
// 		// if(window.visualViewport. === entry.target.getBoundingClientRect.height) {
// 		if(entry.getBoundingClientRect.top === entry.target.getBoundingClientRect.height) {
// 			console.log(entry);
// 			entry.target.setAttribute('style', `position: fixed; height: 100vh; width: 100vw;`);
// 		}
// 	})
// })
// observer.observe(document.querySelector('.promo'));
// observer.observe(document.querySelector('.about'));

// parallaxScroll('.about');

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



