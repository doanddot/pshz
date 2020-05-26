import './product.sass'

import { openPopup } from '../../blocks/popup/popup.js'

var button = document.querySelector('.product__button')

button.addEventListener('click', function() { openPopup('Заказать щебень') })

var tabs = document.querySelector('.product__tabs')

var tabsHeading = tabs.querySelectorAll('span')

tabsHeading.forEach(heading => {
    heading.addEventListener('click', function(event) {
        var activeHeading = tabs.querySelector('span.active')
        activeHeading.classList.remove('active')

        var activeContent = tabs.querySelector('div.active')
        activeContent.classList.remove('active')

        var targetTab = event.target
        targetTab.classList.add('active')

        var dataTab = targetTab.dataset.tab

        var targetContent = tabs.querySelector('div[data-tab=' + dataTab + ']')
        targetContent.classList.add('active')
    })
})
