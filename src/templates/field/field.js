import './field.sass'

import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider'


var slider = tns({
    container: '.way-slider__container',
    controlsContainer: '.way-slider__controls-container',
    items: 2,
    responsive: {
        768: {
            edgePadding: 120,
        },
        992: {
            edgePadding: 180,
        },
        1200: {
            edgePadding: 240,
        },
        1440: {
            edgePadding: 300,
        },
        1600: {
            edgePadding: 360,
        }
    },
    nav: false,
})

var slider = tns({
    container: '.certs-docs__slider',
    controlsContainer: '.certs-docs__controls-container',
    nav: false,
    lazyload: true,
    responsive: {
        0: { items: 2 },
        768: { items: 3 },
    },
})
