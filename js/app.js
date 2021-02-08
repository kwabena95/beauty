const toggleMenu = document.querySelector('#toggle-menu');
const menuBar = document.querySelector('#bars');

menuBar.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
})