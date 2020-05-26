import './catalog.sass'

import '../../blocks/select/select.js'

var catalog = document.querySelector('.catalog')

var filter = catalog.querySelector('.catalog__filter')

filter.addEventListener('click', function() {
    if (aside.classList.contains('aside_open')) {
        aside.classList.remove('aside_open')
    } else {
        aside.classList.add('aside_open')
    }
})

var aside = catalog.querySelector('.aside')

var inputMin = aside.querySelector('.input-min')
var inputMax = aside.querySelector('.input-max')

var rangeMin = aside.querySelector('.range-min')
var rangeMax = aside.querySelector('.range-max')

inputMin.addEventListener('input', function() {
    if (inputMin.value >= inputMax.value) {
        inputMin.value = rangeMin.value
    }
    rangeMin.value = inputMin.value
    rangeMin.value=Math.min(rangeMin.value,rangeMin.parentNode.childNodes[5].value-1);
    var value=(100/(parseInt(rangeMin.max)-parseInt(rangeMin.min)))*parseInt(rangeMin.value)-(100/(parseInt(rangeMin.max)-parseInt(rangeMin.min)))*parseInt(rangeMin.min);
    var children = rangeMin.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=rangeMin.value;
})
inputMax.addEventListener('input', function() {
    if (inputMax.value <= inputMin.value) {
        inputMax.value = rangeMax.value
    }
    rangeMax.value = inputMax.value
    rangeMax.value=Math.max(rangeMax.value,rangeMax.parentNode.childNodes[3].value-(-1));
    var value=(100/(parseInt(rangeMax.max)-parseInt(rangeMax.min)))*parseInt(rangeMax.value)-(100/(parseInt(rangeMax.max)-parseInt(rangeMax.min)))*parseInt(rangeMax.min);
    var children = rangeMax.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';children[13].style.left=value+'%';
    children[13].childNodes[1].innerHTML=rangeMax.value;
})
rangeMin.addEventListener('input', function() { inputMin.value = rangeMin.value })
rangeMax.addEventListener('input', function() { inputMax.value = rangeMax.value })
