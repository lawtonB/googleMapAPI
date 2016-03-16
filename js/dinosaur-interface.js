
$(document).ready(function() {
  $('#forecast').click(function() {
    //promise; .then() method is called when promise me is in fullfilled state
    $.get('http://dinoipsum.herokuapp.com/api/?format=html').then(function(response){
      $('.dinoIpsum').append("<p>" + response +"</p>");
      console.log(response);
    }).fail(function(error) {
      $('.dinoIpsum').text(error.responseJSON.message); //error handling; .fail() method is called when promise enters rejected state
    });
  });
});
