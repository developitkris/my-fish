$(document).ready(function() {
  $("#lightButton").click(function() {
    $("body").removeClass("darkOnLight");
    $("body").addClass("lightOnDark");
  });
  $("#darkButton").click(function() {
    $("body").removeClass("lightOnDark");
    $("body").addClass("darkOnLight");
  });
  $("#resetButton").click(function(){
    $("body").removeClass("lightOnDark");
    $("body").removeClass("darkOnLight");
  });
});
