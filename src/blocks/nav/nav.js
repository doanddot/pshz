var body = document.querySelector('body')

var nav = document.querySelector('.nav')

var list = nav.querySelector('.nav__list')
var button = nav.querySelector('.nav__button')

button.addEventListener('click', function() {
    if (list.classList.contains('nav__list_open') && button.classList.contains('nav__button_close')) {
        body.style.overflow = 'auto'
        list.classList.remove('nav__list_open')
        button.classList.remove('nav__button_close')
    } else {
        body.style.overflow = 'hidden'
        list.classList.add('nav__list_open')
        button.classList.add('nav__button_close')
    }
})

window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
        body.style.overflow = 'auto'
        list.classList.remove('nav__list_open')
        button.classList.remove('nav__button_close')
    }
})
