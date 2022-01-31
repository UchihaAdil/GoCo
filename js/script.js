// (function(){
// 	const burgerItem = document.querySelector(".header__burger");
// 	const menu = document.querySelector(".header__menu");
// 	const menuClose = document.querySelector(".header__menu");
// 	const menuLinks = document.querySelectorAll('.menu__link');

// 	burgerItem.addEventListener("click",() => {
// 		menu.classList.add("_active");
// 	});
	
// 	menuClose.addEventListener("click",() => {
// 		menuClose.classList.remove("_active");
// 	});

// 	if(window.innerWidth < 768){
// 		for(let i = 0; i < menuLinks.length; i++){
// 			menuLinks[i].addEventListener("click",() =>{
// 				menuClose.classList.remove("header__menu-active");
// 			});
// 		}
// 	}
// }());


const iconMenu = document.querySelector('.menu__icon');

if(iconMenu){
	const menuList = document.querySelector('.menu__list');

	iconMenu.addEventListener('click', function(){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuList.classList.toggle('_active');
	})
}