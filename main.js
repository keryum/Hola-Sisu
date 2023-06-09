const quienesSomosBtn = document.querySelector(".quienes-somos-Btn")
const queHacemosBtn = document.querySelector(".que-hacemos-Btn")
const serviciosBtn = document.querySelector(".servicios-Btn")
const quienesSomosMenu = document.querySelector(".menu-quienes-somos")
const queHacemosMenu = document.querySelector(".menu-que-hacemos")
const serviciosSection = document.querySelector(".servicios")
const queEsHolaSisuBtn = document.querySelector(".que-es-hola-sisu-Btn")
const queEsHolaSisuSection = document.querySelector(".quienes-somos")
const queSignificaSisuBtn = document.querySelector(".que-significa-sisu-Btn")
const queSignificaSisuSection = document.querySelector(".section-3")
const queHacemos2Btn = document.querySelector(".que-hacemos-2-Btn")
const queHacemosSection = document.querySelector(".section-1")
const comoLoHacemosBtn = document.querySelector(".como-lo-hacemos-Btn")
const comoLoHacemosSection = document.querySelector(".como-lo-hacemos")
const mobileMenuBtn = document.querySelector(".mobile-menu-Btn")
const mobileMenu = document.querySelector(".mobile-menu")
const cerrarMobileMenuBtn = document.querySelector('.cerrar-mobile-menu-Btn')

quienesSomosBtn.addEventListener('click', toggleQuienesSomosMenu)
queHacemosBtn.addEventListener('click', toggleQueHacemosMenu)
serviciosBtn.addEventListener('click',scrollToServicios)
queEsHolaSisuBtn.addEventListener('click', scrollToQueEsHolaSisu)
queSignificaSisuBtn.addEventListener('click', scrollToQueSignificaSisu)
queHacemos2Btn.addEventListener('click', scrollToQueHacemos)
comoLoHacemosBtn.addEventListener('click', scrollToComoLoHacemos)
mobileMenuBtn.addEventListener('click', toggleMobileMenu)
cerrarMobileMenuBtn.addEventListener('click', closeMobileMenu)
window.addEventListener('resize', closeMobileMenu)

function toggleQuienesSomosMenu() {
    quienesSomosMenu.classList.toggle("inactive")
    queHacemosMenu.classList.add("inactive")
}

function toggleQueHacemosMenu() {
    queHacemosMenu.classList.toggle("inactive")
    quienesSomosMenu.classList.add("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function scrollToServicios() {
    mobileMenu.classList.add('inactive')
    serviciosSection.scrollIntoView()
    quienesSomosMenu.classList.add("inactive")
    queHacemosMenu.classList.add("inactive")
}

function scrollToQueEsHolaSisu() {
    mobileMenu.classList.add('inactive')
    queEsHolaSisuSection.scrollIntoView()
    quienesSomosMenu.classList.add("inactive")
}

function scrollToQueSignificaSisu() {
    mobileMenu.classList.add('inactive')
    queSignificaSisuSection.scrollIntoView()
    quienesSomosMenu.classList.add("inactive")
}

function scrollToQueHacemos() {
    mobileMenu.classList.add('inactive')
    queHacemosMenu.classList.add("inactive")
    queHacemosSection.scrollIntoView()
}

function scrollToComoLoHacemos() {
    mobileMenu.classList.add('inactive')
    queHacemosMenu.classList.add("inactive")
    comoLoHacemosSection.scrollIntoView()
}

if(window.innerWidth > 1100) {
    closeMobileMenu()
}
function closeMobileMenu (){
    mobileMenu.classList.add('inactive')
}
