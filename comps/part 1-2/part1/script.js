$(document).ready(function() {

  //ajax get request  - listings
  var request = "https://sv-reqres.now.sh/api/listings"; 

  $.ajax({
    url: request, //api url listings
    method: "GET" //GET method for data
  })
  .then(function(response) {
    console.log(response);
  });
  
  //////////////////////////////////////////
  // ajax get request  - events
  var request = "https://sv-reqres.now.sh/api/events"; 

  $.ajax({
    url: request, //api url events
    method: "GET" //GET method for data
  })
  .then(function(response) {
    console.log(response);
  });

  //////////////////////////////////////////
  //ajax get request  - offers
  var request = "https://sv-reqres.now.sh/api/offers"; 

  $.ajax({
    url: request, //api url offers
    method: "GET" //GET method for offers
  })
  .then(function(response) {
    console.log(response);
  });

});



//Pseudo Code Part 2 - Filtering
  //use the data from response object in part 1 to build out the application in part 2
    //API data needed
    //listings, events, and offers



