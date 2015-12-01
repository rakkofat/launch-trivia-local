$("form").on("submit", function(event) {
  event.preventDefault();
  var newPlayerName = $('#player-name').val()

  var request = $.ajax({
    method: "POST",
    data: { content: newPlayerName },
    url: "/players/" + newPlayerName
  });

  request.success(function() {
    $("ul.players").append("<li>" + newPlayerName + "</li>");
    $("#player-name").val('');
  });
});
