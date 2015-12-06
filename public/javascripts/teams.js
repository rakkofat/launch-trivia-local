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
      $("#0").append("<li>" + newPlayerName + "</li>");
      $("#player-name").val('');
    });
    return false;
  });

  $("#sortButton").click("submit", function(event) {
    event.preventDefault();

    var unsorted = $("#0 li");
    var shuffled = _.shuffle(unsorted);
    var update = [];

    _.forEach(shuffled, function(player, index){
      var playerName = _.trim($(player).text());
      var teamNum = _.min($("#teams-column ul"), function(team) { return $(team).children("li").length }).id
      var placement = "#" + teamNum;
      update.push({name: playerName, team_id: teamNum});
      $(placement).append(player);
    });

    var bulkData = JSON.stringify(update);

    var request = $.ajax({
      method: "POST",
      data: {everyone: bulkData},
      url: "/update-players.json"
    });

    return false;
  });

  // $("#saveTeams").click("submit", function(event) {
  //   event.preventDefault;
  //
  //   var updates = [];
  // });
  //
  // var a = $.map( $('li'), function (element) { return _.trim($(element).text()) });
});
