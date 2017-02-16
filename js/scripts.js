
$(function() {
  $("#userInput").submit(function(){
    event.preventDefault();
    // debugger;
  var age = parseInt($("#age").val());
  console.log(age);

    if (age >= 18) {
      $(".ofAge").show();
      $(".underAge").hide();
    } else {
      $(".underAge").show();
      $(".ofAge").hide();
    }
  });
});
