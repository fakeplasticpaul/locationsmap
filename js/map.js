  function initialize() {


  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(51.3, 0.7)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);



  var ctaLayer = new google.maps.KmlLayer({
    url: 'http://fakeplasticpaul.github.io/locationsmap/kmlCompiled/map.kml'
});
ctaLayer.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
