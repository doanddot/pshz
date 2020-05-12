import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider'


var slider = tns({
    container: '.slider__container',
    controlsContainer: '.slider__controls-container',
    items: 1,
    lazyload: true,
    mouseDrag: true,
    navContainer: '.slider__nav-container',
    navPosition: 'bottom',
    slideBy: 'page',
})
