var select = document.querySelector('.select')

function openSelect() {
    select.classList.add('select_open')
}

function closeSelect() {
    select.classList.remove('select_open')
}

select.addEventListener('click', function() {
    if (select.classList.contains('select_open')) {
        closeSelect()
    } else {
        openSelect()
    }
})

var span = select.querySelector('span')
var options = select.querySelectorAll('.select__option')

options.forEach(option => {
    option.addEventListener('click', function() {
        select.dataset.value = option.dataset.value
        span.innerText = option.innerText

        var optionActive = select.querySelector('.select__option_active')

        if (optionActive) {
            optionActive.classList.remove('select__option_active')
        }

        option.classList.add('select__option_active')
    })
});
