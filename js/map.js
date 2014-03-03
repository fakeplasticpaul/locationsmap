  function initialize() {


  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(51.3, 0.7)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);



var ctaLayer2 = new google.maps.KmlLayer({
    url: 'https://dl.dropboxusercontent.com/u/3798063/oldmap4.kml'
  });
  ctaLayer2.setMap(map);

  var ctaLayer = new google.maps.KmlLayer({
    url: 'https://dl.dropboxusercontent.com/u/3798063/2013map9.kml'
});
ctaLayer.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);