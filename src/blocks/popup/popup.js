var popup = document.querySelector('.popup')
var popupHeading = popup.querySelector('.popup__heading')

var classList = popup.classList

export function closePopup() {
    classList.remove('popup_open')
    classList.add('popup_closed')
}

export function openPopup(heading) {
    popupHeading.innerHTML = heading

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
