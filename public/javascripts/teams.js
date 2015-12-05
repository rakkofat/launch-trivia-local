var unsortedPlayers = [];
var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];

$(document).ready(function(){

  $("#player-form").on("submit", function(event) {
    event.preventDefault();
    var newPlayerName = $('#player-name').val()

    var request = $.ajax({
      method: "POST",
      data: { name: newPlayerName },
      url: "/players.json"
    });

    request.success(function() {
      unsortedPlayers.push(newPlayerName);
      $("ul.players").append("<li>" + newPlayerName + "</li>");
      $("#player-name").val('');
    });
    return false;
  });






});

// $("#player-form").on("submit", function(event) {
//   event.preventDefault();
//   var newPlayerName = $('#player-name').val()
//
//   var request = $.ajax({
//     method: "POST",
//     data: { content: newPlayerName },
//     url: "/players/" + newPlayerName
//   });
//
//   request.success(function() {
//     unsortedPlayers.push(newPlayerName);
//     $("ul.players").append("<li>" + newPlayerName + "</li>");
//     $("#player-name").val('');
//   });
//   return false;
// });
