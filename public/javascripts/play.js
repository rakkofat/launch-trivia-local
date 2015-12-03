$( "#playButton" ).click(function(event) {

  $("#drinkers").empty();

  var response = $.ajax({
    method: "GET",
    dataType: "JSON",
    url: "/players.json",
    success: function( json ) {
      json.forEach(function(drinker){
        $("#drinkers").append("<li>" + drinker.name + "</li>");
      });
    }

  });

});
