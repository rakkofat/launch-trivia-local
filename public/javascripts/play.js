$(document).foundation();

var spinChamber = function(){
  return Math.floor(Math.random()*6+1)
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

var round = 1;
var result;
$("#showAnswerButton").hide();
$("#correctButton").hide();
$("#incorrectButton").hide();

$("#roundText").text("Round " + round);

$( "#playButton" ).click(function() {
  if ( fireGun() ) {
    $("#questionText").text("Drink!");
  } else {
    // var result;
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
});

$( "#incorrectButton" ).click(function() {
  $("#play-fieldText").text("");
  $("#correctButton").toggle();
  $("#incorrectButton").toggle();
  $("#playButton").toggle();
});
