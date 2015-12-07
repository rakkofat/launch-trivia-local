$(document).ready(function(){

  $("#player-form").on("submit", function(event) {
    event.preventDefault();
    var newPlayerName = $('#player-name').val()

    if ( $.trim(newPlayerName) !== '' ) {
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
    }
  });

  $("#sortButton").click(function(event) {
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

  $("#resetButton").click(function(event){
    event.preventDefault();

    var sortedPlayers = $("#teams-column li");
    var update = [];

    _.forEach(sortedPlayers, function(player, index){
      var playerName = _.trim($(player).text());
      update.push({name: playerName});
      $("#0").append(player);
    });

    var bulkData = JSON.stringify(update);

    var request = $.ajax({
      method: "POST",
      data: {everyone: bulkData},
      url: "/reset-players"
    });
    return false;
  });

  $("#resetTeamScoresButton").click(function(event){
    event.preventDefault();

    var update = [];

    $(".team-name-setup").each(function(index, value){
      if ( index == 0 ) {
        update.push({name: $(this).text(), score: '0', current: 'TRUE'});
      } else {
        update.push({name: $(this).text(), score: '0', current: 'FALSE'});
      }
    });

    var bulkData = JSON.stringify(update);

    var request = $.ajax({
      method: "POST",
      data: {changes: bulkData},
      url: "/update-team"
    });
    return false;
  });
  //
  // var a = $.map( $('li'), function (element) { return _.trim($(element).text()) });
});
