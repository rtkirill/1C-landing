ymaps.ready(init);

var myMap;

function init() {
    myMap = new ymaps.Map('map', {
        center: [59.90906858801045, 30.3246718558197],
        zoom: 15,
        type: 'yandex#map',
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });
    myPlacemark = new ymaps.Placemark([59.9075005641861, 30.324725500000017], {
        iconColor: '#0095b6'
    });
    myMap.geoObjects.add(myPlacemark);
}