var screenWidth = window.screen.width
const logo = document.getElementById('logo');
const menuOPen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const navigationHeader = document.getElementById('navigation-header')
const divTitle = document.getElementById('title')
var showSidebar = false


if(screenWidth < 800) {
    logo.setAttribute('src', './assets/logo-mobile.svg')
} else {
    logo.setAttribute('src', './assets/logo-desktop.svg')
}


function toggleSidebar() {
    showSidebar = !showSidebar

    if(showSidebar === true) {
        navigationHeader.style.animationName = 'openSidebar';
        menuOPen.style.display = 'none';
        menuClose.style.display = 'block';
        divTitle.style.animationName = 'Titleclose';

    } else {
        navigationHeader.style.animationName = 'closeSidebar';
        menuOPen.style.display = 'block';
        menuClose.style.display = 'none';
        title.style.animationName = 'Titleopen';
    }
}