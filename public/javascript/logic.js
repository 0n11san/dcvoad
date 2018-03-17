// Global variables
var userStatus;
var siteConsent;
var contactConsent;

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
    console.log(siteConsent);
  }

  // function to get the contract consent answer
  function getcontactConsent() {
    var answer2 = document.getElementById("choice2").selectedIndex;
    if (answer2 === 1) {
      contactConsent = "Yes";
    } else {
      contactConsent = "No"
    }
    console.log(contactConsent);
  }

  $("#add-btn").on("click", function(event) {
    event.preventDefault();

    getSiteConsent();
    getcontactConsent();

    var newUser = {
      username: $("#username").val(),
      password: $("#password").val(),
      status: userStatus
    };

    var newSurvey = {
      orgName: $("#orgName").val(),
      orgWebsite: $("#orgWebsite").val(),
      orgNumber: $("#orgNumber").val(),
      extension1: $("#extension1").val(),
      orgEmail: $("#orgEmail").val(),
      blurb: $("#blurb").val(),
      siteConsent: siteConsent,
      mpp_con_name: $("#mpp_con_name").val(),
      mpp_email: $("#mpp_email").val(),
      address: $("#address").val(),
      city: $("#city").val(),
      state: $("#state").val(),
      post_code: $("#post_code").val(),
      emergency_contact: $("#emergency_contact").val(),
      emerg_con_tel_number1: $("#emerg_con_tel_number1").val(),
      emerg_extension1: $("#emerg_extension1").val(),
      emerg_con_tel_number2: $("#emerg_con_tel_number2").val(),
      emerg_extension2: $("#emerg_extension2").val(),
      emergency_contact_email: $("#emergency_contact_email").val(),
      contactConsent: contactConsent
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
    //   contactConsent: contactConsent
    // };

    console.log(newUser);
    console.log(newSurvey);


    $.post("/api/survey", newSurvey)
      .done(function(data) {
        console.log(data);
        alert("New Survey has been added...");
      });

    // $.post("/api/user", newUser)
    //   .done(function(data) {
    //     console.log(data);
    //     alert("New User has been added...");
    //   });

    //         // Empty out modal and username and link fields.
    // $("#orgName").empty(),
    //   $("#orgWebsite").empty(),
    //   $("#orgNumber").empty(),
    //   $("#extension1").empty(),
    //   $("#orgEmail").empty(),
    //   $("#blurb").empty(),
    //   // Add code to reset drop down
    //   // siteConsent: siteConsent,
    //   $("#mpp_con_name").empty(),
    //   $("#mpp_email").empty(),
    //   $("#address").empty(),
    //   $("#city").empty(),
    //   $("#state").empty(),
    //   $("#post_code").empty(),
    //   $("#emergency_contact").empty(),
    //   $("#emerg_con_tel_number1").empty(),
    //   $("#emerg_extension1").empty(),
    //   $("#emerg_con_tel_number2").empty(),
    //   $("#emerg_extension2").empty(),
    //   $("#emergency_contact_email").empty(),
      // Add code to reset drop down
      // contactConsent: contactConsent

      // $.post("/api/user", newUser)
      // .done(function(data) {
      //   console.log(data);
      //   alert("Adding character...");
      // });
  });
});
