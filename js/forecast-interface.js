var apiKey = require('./../.env').apiKey;
var convertTemperature = require('./../js/temp-interface.js').convertTemperature;

$(document).ready(function() {
  $('#forecast').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    //promise; .then() method is called when promise me is in fullfilled state
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showForecast').append("<h2>5 day forcast for: " + city + "</br>");
      console.log(JSON.stringify(response));
      var temps;
      for (var i = 0; i < response.list.length; i+=8) {
        temps = convertTemperature(response.list[i].main.temp);
        $('.showForecast').append("<h3> Date: " + response.list[i].dt_txt + " Temperature: " + temps[0]+ "F" + " Weather condition: " + response.list[i].weather[0].description + "</h2>");
      }
    }).fail(function(error) {
      $('.showForecast').text(error.responseJSON.message); //error handling; .fail() method is called when promise enters rejected state
    });
  });
});
