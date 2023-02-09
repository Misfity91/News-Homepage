const navbarList = document.querySelector('.navbar__list')
const hamburgerBtn = document.querySelector('.navbar__hamburger')
const closeMenuBtn = document.querySelector('.navbar__close')
const bgShadow = document.querySelector('.navbar__bg-shadow')
const navItems = document.querySelectorAll('.navbar__list-item')

const showMenu = () => {
	navbarList.classList.toggle('navbar__list--active')
	if (navbarList.classList.contains('navbar__list--active')) {
		hamburgerBtn.style.display = 'none'
		closeMenuBtn.style.display = 'block'
		bgShadow.style.display = 'block'
	} else {
		hamburgerBtn.style.display = 'block'
		closeMenuBtn.style.display = 'none'
		bgShadow.style.display = 'none'
	}
}

hamburgerBtn.addEventListener('click', showMenu)
closeMenuBtn.addEventListener('click', showMenu)
navItems.forEach(item => {
	item.addEventListener('click', () => {
		hamburgerBtn.style.display = 'block'
		closeMenuBtn.style.display = 'none'
		bgShadow.style.display = 'none'
        navbarList.classList.remove('navbar__list--active')
	})
})
