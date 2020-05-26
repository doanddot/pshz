import './vacancies.sass'

import { openPopup } from '../../blocks/popup/popup.js'

var expansions = document.querySelectorAll('.expansion')

expansions.forEach(expansion => {
    var header = expansion.querySelector('.expansion__header')

    header.addEventListener('click', function() {
        if (expansion.classList.contains('expansion_open')) {
            expansion.classList.remove('expansion_open')
            expansion.removeAttribute('style')
        } else {
            var accordion = expansion.parentElement.parentElement
            var openedExpansion = accordion.querySelector('.expansion_open')

            if (openedExpansion) {
                openedExpansion.classList.remove('expansion_open')
                openedExpansion.removeAttribute('style')
            }

            var body = expansion.querySelector('.expansion__body')
            var bodyHeight = body.offsetHeight - 26
            var expansionHeight = 79 + bodyHeight + 'px'

            expansion.classList.add('expansion_open')
            expansion.style.height = expansionHeight
        }
    })
})

var buttons = document.querySelectorAll('.expansion__button')

buttons.forEach(button => {
    button.addEventListener('click', function() {
        var expansionTitle = button.parentElement.parentElement.querySelector('.expansion__title')
        var title = expansionTitle.textContent || expansionTitle.innerText

        openPopup('Отправить резюме', true, title)
    })
});
