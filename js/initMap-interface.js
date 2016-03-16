  exports.initMap = function(position) {
   var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   var myOptions = {
      center: userLatLng,
      zoom: 8,
      mapTypeId : google.maps.MapTypeId.SATELLITE
      };
  var mapObject = new google.maps.Map(document.getElementById('showMap'), myOptions);

    new google.maps.Marker({
      map: mapObject,
      position: userLatLng
    });

    return $("#showMap").html(initMap);
  };
