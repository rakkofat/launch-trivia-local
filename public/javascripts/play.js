$(document).ready(function(){

  // I need to set current to whichever team has current = True
  // right now if I refresh the page, current is placed on first team

  // UDPATE: posting to update team is currently broken

  var result;

  $("#showAnswerButton").hide();
  $("#correctButton").hide();
  $("#incorrectButton").hide();
  $("#nextButton").hide();
  setCurrent();

  function setCurrent () {
    var onDeck = $.trim($(".on-deck").text());
    $(".team:contains('" + onDeck + "')").addClass('current');
  };

  var nextTeam = function() {
    var currentTeam = $.trim($(".current .team-name").text());
    var $next = $('.current').removeClass('current').next('.team');
    if ($next.length) {
      $next.addClass('current');
    } else {
      $next = $(".team:first").addClass('current');
    }

    var nextTeamName = $.trim($(".current .team-name").text());

    bulkData = JSON.stringify([{name: currentTeam, current: 'FALSE'}, {name: nextTeamName, current: 'TRUE'}]);
    debugger

    var request = $.ajax({
      method: "POST",
      data: {changes: bulkData},
      url: "/update-team"
    });

    request.done(function(){
      console.log('current team changed');
    });
  };

  var addScore = function(n) {
    var currentTeam = $.trim($(".current .team-name").text());
    var currentScore = parseInt($.trim($(".current .score").text()));
    var newScore = currentScore + n;
    $(".current .score").text(newScore);

    data = JSON.stringify([{name: currentTeam, score: newScore}])

    var request = $.ajax({
      method: "POST",
      data: {changes: data},
      url: "/update-team"
    });
  };

  var fireGun = function(){
    return Math.floor(Math.random()*6+1) === Math.floor(Math.random()*6+1);
  };

  var getTrivia = function(){
    var result;
    $.get( "http://jservice.io/api/random" ).done(function( data ) {
      result = data[0];
    });
    return result
  };

  $( "#playButton" ).click(function() {
    if ( fireGun() ) {
      $("#play-fieldText").text("Drink!");
      $("#playButton").hide();
      $("#nextButton").toggle();
      addScore(2);
    } else {
      var response = $.ajax({
          method: "GET",
          dataType: "JSON",
          url: "http://jservice.io/api/random",
          success: function( json ) {
            result = json[0];
            $("#play-fieldText").text(result.question)
            $("#playButton").hide();
            $("#showAnswerButton").toggle();
          }
        });
    }
  });

  $( "#showAnswerButton" ).click(function() {
    $("#play-fieldText").text(result.answer);
    $("#showAnswerButton").toggle();
    $("#correctButton").toggle();
    $("#incorrectButton").toggle();
  });

  $( "#correctButton" ).click(function() {
    $("#play-fieldText").text("");
    $("#correctButton").toggle();
    $("#incorrectButton").toggle();
    $("#playButton").toggle();
    addScore(1);
    nextTeam();
  });

  $( "#incorrectButton" ).click(function() {
    $("#play-fieldText").text("");
    $("#correctButton").toggle();
    $("#incorrectButton").toggle();
    $("#playButton").toggle();
    nextTeam();
  });

  $( "#nextButton" ).click(function() {
    $("#play-fieldText").text("");
    $( "#nextButton").toggle();
    $("#playButton").toggle();
    nextTeam();
  });

});
