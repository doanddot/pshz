import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider'


var slider = tns({
    autoplay: true,
    autoplayButton: false,
    autoplayHoverPause: true,
    container: '.our-products__row',
    controlsContainer: '.our-products__controls-container',
    mouseDrag: true,
    nav: false,
    lazyload: true,
    responsive: {
        0: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
    },
})

slider.events.on('touchStart', function() { slider.pause() })
slider.events.on('touchMove', function() { slider.pause() })
slider.events.on('touchEnd', function() { slider.pause() })

slider.events.on('dragStart', function() { slider.pause() })
slider.events.on('dragMove', function() { slider.pause() })
slider.events.on('dragEnd', function() { slider.pause() })
