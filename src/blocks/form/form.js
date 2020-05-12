import IMask from 'imask'


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

    return valid
}


var forms = document.querySelectorAll('.form');

forms.forEach(form => {
    masked(form.querySelector('.form__input[type="tel"]'))

    var submit = form.querySelector('.form__submit')

    submit.addEventListener('click', function(event) {
        event.preventDefault()

        if (validation(form)) {
            form.reset()

            alert('отправлено')
        }
    })
});
