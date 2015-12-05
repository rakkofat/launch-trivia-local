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
      $("#teamless").append("<li>" + newPlayerName + "</li>");
      $("#player-name").val('');
    });
    return false;
  });

  $("#sortButton").click("submit", function(event) {
    event.preventDefault();

    var unsorted = $("#teamless li");
    var shuffled = _.shuffle(unsorted);
    _.forEach(shuffled, function(player, index){
      var placement = "#" + _.min($("#teams-column ul"), function(team) { return $(team).children("li").length }).id;
      $(placement).append(player);
    });
    return false;
  });
});
