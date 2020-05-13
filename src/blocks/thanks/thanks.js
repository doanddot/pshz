import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider'

var thanks = document.querySelector('.thanks')

var slider = tns({
    container: '.thanks__slider',
    controlsContainer: '.thanks__controls-container',
    nav: false,
    lazyload: true,
    responsive: {
        0: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
    },
})

var items = thanks.querySelectorAll('.thanks__item')

items.forEach(item => {
    item.addEventListener('click', function() {
        var close = document.createElement('button')
        close.className = 'thanks__close'

        var src = item.querySelector('img').dataset.big

        var img = document.createElement('img')
        img.setAttribute('src', src)

        var wrap = document.createElement('div')
        wrap.className = 'thanks__wrap'

        wrap.append(close)
        wrap.append(img)

        var div = document.createElement('div')
        div.className = 'thanks__popup'

        div.append(wrap)

        thanks.before(div)

        close.addEventListener('click', function() { div.remove() })

        div.addEventListener('click', function(event) {
            if (event.target.classList.contains('thanks__popup')) { div.remove() }
        })
    })
});
