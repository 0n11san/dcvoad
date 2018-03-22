$(document).ready(function() {
username = "nalston";

$.post("/api/user", newUser)
  .done(function(data) {
    console.log("*********");
    console.log(data);
    $("#message").html("New User has been added...");
    $('#myModal').modal("show");
  });

  $(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
};
