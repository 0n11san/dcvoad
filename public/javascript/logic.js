// Global variables
var userStatus;
var siteConsent;
var contractConsent;

$(document).ready(function() {

  userStatus = "user";

  // Function to get the site consent answer
  function getSiteConsent() {
    var answer1 = document.getElementById("choice1").selectedIndex;
    if (answer1 === 1) {
      siteConsent = "Yes";
    } else {
      siteConsent = "No"
    }
    // console.log(siteConsent);
  }

  // function to get the contract consent answer
  function getContractConsent() {
    var answer2 = document.getElementById("choice2").selectedIndex;
    if (answer2 === 1) {
      contractConsent = "Yes";
    } else {
      contractConsent = "No"
    }
    // console.log(contractConsent);
  }

  $("#add-btn").on("click", function(event) {
    event.preventDefault();

    var newUser = {
      username: $("#username").val().trim(),
      password: $("#password").val().trim(),
      status: userStatus
    };

    var newSurvey = {
      orgName: $("#orgName").val().trim(),
      orgWebsite: $("#orgWebsite").val().trim(),
      orgNumber: $("#orgNumber").val().trim(),
      extension1: $("#extension1").val().trim(),
      orgEmail: $("#orgEmail").val().trim(),
      blurb: $("#blurb").val().trim(),
      siteConsent: siteConsent,
      mpp_con_name: $("#mpp_con_name").val().trim(),
      mpp_email: $("#mpp_email").val().trim(),
      address: $("#address").val().trim(),
      city: $("#city").val().trim(),
      state: $("#state").val().trim(),
      post_code: $("#post_code").val().trim(),
      emergency_contact: $("#emergency_contact").val().trim(),
      emerg_con_tel_number1: $("#emerg_con_tel_number1").val().trim(),
      emerg_extension1: $("#emerg_extension1").val().trim(),
      emerg_con_tel_number2: $("#emerg_con_tel_number2").val().trim(),
      emerg_extension2: $("#emerg_extension2").val().trim(),
      emergency_contact_email: $("#emergency_contact_email").val().trim(),
      contactConsent: contractConsent
    };


    // var newUser = {
    //   username: $("#username").val(),
    //   password: $("#password").val(),
    //   status: userStatus
    // };
    //
    // var newSurvey = {
    //   orgName: $("#orgName").val(),
    //   orgWebsite: $("#orgWebsite").val(),
    //   orgNumber: $("#orgNumber").val(),
    //   extension1: $("#extension1").val(),
    //   orgEmail: $("#orgEmail").val(),
    //   blurb: $("#blurb").val(),
    //   siteConsent: siteConsent,
    //   mpp_con_name: $("#mpp_con_name").val(),
    //   mpp_email: $("#mpp_email").val(),
    //   address: $("#address").val(),
    //   city: $("#city").val(),
    //   state: $("#state").val(),
    //   post_code: $("#post_code").val(),
    //   emergency_contact: $("#emergency_contact").val(),
    //   emerg_con_tel_number1: $("#emerg_con_tel_number1").val(),
    //   emerg_extension1: $("#emerg_extension1").val(),
    //   emerg_con_tel_number2: $("#emerg_con_tel_number2").val(),
    //   emerg_extension2: $("#emerg_extension2").val(),
    //   emergency_contact_email: $("#emergency_contact_email").val(),
    //   contactConsent: contractConsent
    // };

    console.log(newSurvey);


    $.post("/api/user", newSurvey)
      .done(function(data) {
        console.log(data);
        alert("New Survey has been added...");
      });

    $.post("/api/user", newUser)
      .done(function(data) {
        console.log(data);
        alert("New User has been added...");
      });

    //         // Empty out modal and username and link fields.
    $("#orgName").empty(),
      $("#orgWebsite").empty(),
      $("#orgNumber").empty(),
      $("#extension1").empty(),
      $("#orgEmail").empty(),
      $("#blurb").empty(),
      // Add code to reset drop down
      // siteConsent: siteConsent,
      $("#mpp_con_name").empty(),
      $("#mpp_email").empty(),
      $("#address").empty(),
      $("#city").empty(),
      $("#state").empty(),
      $("#post_code").empty(),
      $("#emergency_contact").empty(),
      $("#emerg_con_tel_number1").empty(),
      $("#emerg_extension1").empty(),
      $("#emerg_con_tel_number2").empty(),
      $("#emerg_extension2").empty(),
      $("#emergency_contact_email").empty(),
      // Add code to reset drop down
      // contactConsent: contractConsent

      $.post("/api/user", newUser)
      .done(function(data) {
        console.log(data);
        alert("Adding character...");
      });
  });
});
