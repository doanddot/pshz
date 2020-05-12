import scrollToElement from 'scroll-to-element'


var scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 64) {
        scrollTop.style.display = 'flex'
    } else {
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', function() {
    scrollToElement('body', {
        offset: 0,
        ease: 'in-out-expo',
        duration: 750
    })
})
