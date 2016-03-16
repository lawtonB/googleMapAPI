var apiKey = require('./../.env').apiKey;
var convertTemperature = require('./../js/temp-interface.js').convertTemperature;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    //promise; .then() method is called when promise me is in fullfilled state
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var temps = convertTemperature(response.main.temp);
        $('.showWeather').html("<h2>The temperature in " + city + " is " + temps[0] + "F / " + temps[1] + "C. " + "</br>" + "Current weather condition is " + response.weather[0].description + "</h2>");
    }).fail(function(error) {
      $('.showWeather').text(error.message); //error handling; .fail() method is called when promise enters rejected state
    });
  });
});
