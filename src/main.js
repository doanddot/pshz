import './main.sass'

var blankLinks = document.querySelectorAll('a[href="#"]')

blankLinks.forEach((blankLink, i) => {
    blankLink.addEventListener('click', function(event) {
        event.preventDefault()
    })
});


import './blocks/header/header.js'
import './blocks/nav/nav.js'
import './blocks/footer/footer.js'
import './blocks/scroll-top/scroll-top.js'
