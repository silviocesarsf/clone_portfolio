
const btnMenu = document.querySelector('.menu-resp')
const menu = document.querySelector('.menu')
const btnClose = document.querySelector('.close-button')
const linkMenu = document.querySelector('.navbar-resp')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('display')
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('display')
})