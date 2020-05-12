import { openPopup } from '../popup/popup.js'


function changePriceText() {
    if (window.innerWidth >= 768) {
        price.innerHTML = 'Скачать прайс'
    } else {
        price.innerHTML = 'Прайс'
    }
}


window.onload = () => changePriceText()

window.addEventListener('resize', function() {
    changePriceText()
})


var header = document.querySelector('.header')

var price = header.querySelector('.header__price')

var action = header.querySelector('.header__action')

price.addEventListener('click', function() { openPopup('Скачать прайс') })
action.addEventListener('click', function() { openPopup('Оставить заявку') })
