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

quienesSomosBtn.addEventListener('click', toggleQuienesSomosMenu)
queHacemosBtn.addEventListener('click', toggleQueHacemosMenu)
serviciosBtn.addEventListener('click',scrollToServicios)
queEsHolaSisuBtn.addEventListener('click', scrollToQueEsHolaSisu)
queSignificaSisuBtn.addEventListener('click', scrollToQueSignificaSisu)
queHacemos2Btn.addEventListener('click', scrollToQueHacemos)
comoLoHacemosBtn.addEventListener('click', scrollToComoLoHacemos)
mobileMenuBtn.addEventListener('click', toggleMobileMenu)
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
}

function scrollToQueSignificaSisu() {
    mobileMenu.classList.add('inactive')
    queSignificaSisuSection.scrollIntoView()
}

function scrollToQueHacemos() {
    mobileMenu.classList.add('inactive')
    queHacemosSection.scrollIntoView()
}

function scrollToComoLoHacemos() {
    mobileMenu.classList.add('inactive')
    comoLoHacemosSection.scrollIntoView()
}

function closeMobileMenu (){
if(window.innerWidth > 1100) {
    mobileMenu.classList.add('inactive')
}
}