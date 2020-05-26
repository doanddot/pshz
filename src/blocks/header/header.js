import { openPopup } from '../popup/popup.js'

var price = document.querySelector('.header__price')

function changePriceText() {
    if (window.innerWidth >= 768) {
        price.innerHTML = 'Скачать прайс'
    } else {
        price.innerHTML = 'Прайс'
    }
}


window.onload = () => changePriceText()

var header = document.querySelector('.header')

var logo = header.querySelector('.header__logo')

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) { logo.style.display = 'block'
    } else { logo.style.display = 'none' }
})

window.addEventListener('resize', function() {
    changePriceText()
})

var action = header.querySelector('.header__action')

action.addEventListener('click', function() { openPopup('Оставить заявку') })
