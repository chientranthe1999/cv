/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        console.log("Chienss");
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scroller = document.getElementById('scrollup')
    this.scrollY > 350 ? scroller.classList.add('show-scroll')
        : scroller.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/

const changeTheme = (btn) => {
    const moonIcon = 'ri-moon-line'
    const sunIcon = 'ri-sun-fill'
    const body = document.body

    body.classList.toggle('dark-theme')

    btn.className = Boolean(body.className) ? sunIcon : moonIcon
}

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

