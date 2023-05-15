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

quienesSomosBtn.addEventListener('click', toggleQuienesSomosMenu)
queHacemosBtn.addEventListener('click', toggleQueHacemosMenu)
serviciosBtn.addEventListener('click',scrollToServicios)
queEsHolaSisuBtn.addEventListener('click', scrollToQueEsHolaSisu)
queSignificaSisuBtn.addEventListener('click', scrollToQueSignificaSisu)
queHacemos2Btn.addEventListener('click', scrollToQueHacemos)
comoLoHacemosBtn.addEventListener('click', scrollToComoLoHacemos)

function toggleQuienesSomosMenu() {
    quienesSomosMenu.classList.toggle("inactive")
    queHacemosMenu.classList.add("inactive")
}

function toggleQueHacemosMenu() {
    queHacemosMenu.classList.toggle("inactive")
    quienesSomosMenu.classList.add("inactive")
}

function scrollToServicios() {
    serviciosSection.scrollIntoView()
    quienesSomosMenu.classList.add("inactive")
    queHacemosMenu.classList.add("inactive")
}

function scrollToQueEsHolaSisu() {
    queEsHolaSisuSection.scrollIntoView()
}

function scrollToQueSignificaSisu() {
    queSignificaSisuSection.scrollIntoView()
}

function scrollToQueHacemos() {
    queHacemosSection.scrollIntoView()
}

function scrollToComoLoHacemos() {
    comoLoHacemosSection.scrollIntoView()
}