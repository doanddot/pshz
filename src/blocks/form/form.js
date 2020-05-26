import IMask from 'imask'

import { closePopup, openPopup } from '../popup/popup'


function masked(input) {
    var mask = IMask(input, { mask: '+7 (000) 000-00-00' })

    input.onfocus = function() {
        if (input.value == '') {
            input.value = '+7 ('

            mask.updateValue()
        }
    }

    input.onblur = function() {
        if (input.value == '+7 (') {
            input.value = ''

            mask.updateValue()
        }
    }
}

function addError(input, message) {
    input.classList.add('form__input_error')
    input.insertAdjacentHTML('afterend', '<p class="form__error">' + message + '</p>')
}

function removeError(input) {
    input.classList.remove('form__input_error')

    if (input.nextElementSibling.classList.contains('form__error')) {
        input.nextElementSibling.remove()
    }
}

function validation(form) {
    var valid = true

    var requiredInputs = form.querySelectorAll('.form__input[required]')

    requiredInputs.forEach(input => {
        removeError(input)

        if (input.value == '') {
            addError(input, 'Обязательное поле')

            valid = false

            return false
        }

        if (input.type == 'tel') {
            if (input.value.length < 18) {
                addError(input, 'Телефон введен не корректно')

                valid = false

                return false
            }
        }
    })

    var checkbox = form.querySelector('#assign')

    if (checkbox) {
        if (!checkbox.checked) {
            valid = false

            form.querySelector('label[for="assign"]').style.color = 'red'

            return false
        } else {
            form.querySelector('label[for="assign"]').removeAttribute('style')
        }
    }

    return valid
}

function send(form) {
  var xhr = new XMLHttpRequest()

  xhr.open('POST', form.action, false)
  xhr.setRequestHeader('Content-Type', 'multipart/form-data');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  var formData = new FormData(form)

  formData.append('captcha', '2e2mFNtwEV49WW7f')

  xhr.send(formData)

  return true

  if (xhr.status != 200) {
    return false
  } else {
    return true
  }
}


var forms = document.querySelectorAll('.form');

forms.forEach(form => {

    var inputs = form.querySelectorAll('.form__input')

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (input.classList.contains('form__input_error')) {
                removeError(input)
            }
        })
    })


    masked(form.querySelector('.form__input[type="tel"]'))

    var inputFile = form.querySelector('.form__input[type="file"]')

    if (inputFile) {
        inputFile.addEventListener('change', function() {
            var name = inputFile.files[0].name

            form.querySelector('.form__upload-file').innerText = name
        })
    }

    var submit = form.querySelector('.form__submit')

    submit.addEventListener('click', function(event) {
        event.preventDefault()

        if (validation(form)) {
            submit.disabled = true

            var message = send(form)

            if (message == false) {
                submit.disabled = false
                alert('Возникла ошибка, но мы уже работаем над ее устранением.')
            } else {
                submit.disabled = false
                
                openPopup()

                document.querySelector('.popup__dialog').classList.add('popup__notification')

                setTimeout(() => closePopup(), 2000)
            }

            if (form.querySelector('.form__upload-file')) {
                form.querySelector('.form__upload-file').innerText = 'Файл не выбран';
            }

            form.reset()
        }
    })
});
