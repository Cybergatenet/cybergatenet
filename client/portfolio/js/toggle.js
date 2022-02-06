window.addEventListener('scroll', () => {
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 50);
});

function toggleMenu(){
	let menu = document.querySelector('.toggle');
	let mainMenu = document.querySelector('.menu');
	menu.classList.toggle('active'); 
	mainMenu.classList.toggle('active'); 
}