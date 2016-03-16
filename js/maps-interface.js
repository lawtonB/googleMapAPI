var apiKey = require('./../.env').apiKey;

function initMap() {
  alert("hey")

  console.log("other stuff!")

 var userLatLng = new google.maps.LatLng(-34.397, 150.644);

 var myOptions = {
    center: userLatLng,
    zoom: 8,
    };

  var map = new google.maps.Map(document.getElementById('showMap'), myOptions);

  };


$(document).ready(function() {
      initMap();
});
