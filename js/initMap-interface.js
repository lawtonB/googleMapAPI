  exports.initMap = function() {
    alert("hey")
   var userLatLng = new google.maps.LatLng(-34.397, 150.644);
   var myOptions = {
      center: userLatLng,
      zoom: 8,
      };
  var map = new google.maps.Map(document.getElementById('showMap'), myOptions);
    return initMap; 
  };
