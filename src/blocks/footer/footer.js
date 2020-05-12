import icon from './placemark.png'

ymaps.ready(init)

function init() {
    var map = new ymaps.Map('map', {
        center: [58.013506, 56.239280],
        controls: [],
        zoom: 20
    })

    var office = new ymaps.Placemark([58.013506, 56.239280], {
        balloonContent: '<h3 class="footer__subheading">Офис</h3><p class="footer__address">614000, г. Пермь, ул. Петропавловская, д.41, офис 220.</p><a class="footer__phone" href="tel:+73422590052">+7 (342) 259-00-52</a>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: icon,
    })

    var plant = new ymaps.Placemark([58.525178, 59.072378], {
        balloonContent: '<h3 class="footer__subheading">Завод</h3><p class="footer__address">618870, Пермский край, Горнозаводский район, рабочий поcелок Теплая гора, ул. Советская, 5, помещение 18</p>'
    }, {
        iconLayout: 'default#image',
        iconImageHref: icon,
    })

    map.geoObjects
        .add(office)
        .add(plant)

    map.margin.addArea({
        left: 0,
        top: 0,
        height: 314,
        width: '100%'
    })

    map.setBounds(map.geoObjects.getBounds(), {
        useMapMargin: true,
        zoomMargin: 100,
    })
}
