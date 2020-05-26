var popup = document.querySelector('.popup')
var popupHeading = popup.querySelector('.popup__heading')

var classList = popup.classList

export function closePopup() {
    if (popup.querySelector('.popup__dialog').classList.contains('popup__notification')) {
        popup.querySelector('.popup__dialog').classList.remove('popup__notification')
    }

    classList.remove('popup_open')
    classList.add('popup_closed')
}

export function openPopup(heading, isVacancies, vacanciesTitle) {
    var dialog = popup.querySelector('.popup__dialog')

    if (isVacancies) {
        dialog.classList.add('popup__vacancies')
    } else {
        if (dialog.classList.contains('popup__vacancies')) {
            dialog.classList.remove('popup__vacancies')
        }
    }

    var fields = dialog.querySelectorAll('.form_vacancies')

    fields.forEach(field => {
        var input = field.querySelector('.form__input')

        if (isVacancies) {
            input.disabled = false
        } else {
            input.disabled = true
        }
    })

    popupHeading.innerHTML = heading

    if (vacanciesTitle) {
        var popupSubheading = popup.querySelector('.popup__subheading')

        popupSubheading.querySelector('span').innerText = vacanciesTitle
    }

    classList.remove('popup_closed')
    classList.add('popup_open')
}


popup.addEventListener('click', function(event) {
    var target = event.target

    if (target.classList.contains('popup') && target.classList.contains('popup_open')) {
        closePopup()
    }
})


var close = popup.querySelector('.popup__close')

close.addEventListener('click', function() {
    closePopup()
})
