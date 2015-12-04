// $(document).foundation();
// $('#exampleModal1').foundation('open');






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
//     $("ul.players").append("<li>" + newPlayerName + "</li>");
//     $("#player-name").val('');
//   });
//   return false;
// });
//
// $("#challenges-form").on("submit", function(event) {
//   event.preventDefault();
//   var newChallenge = $('#challenge').val()
//
//   var request = $.ajax({
//     method: "POST",
//     data: { content: newChallenge },
//     url: "/challenges/" + newChallenge
//   });
//
//   request.success(function() {
//     $("ul.challenges").append("<li>" + newChallenge + "</li>");
//     $("#challenge").val('');
//   });
//   return false;
// });
