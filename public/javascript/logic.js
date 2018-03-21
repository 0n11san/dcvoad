// Global variables
var userStatus;
var siteConsent;
var contactConsent;

/////////////////////////////////////////////////////
//////// Onchange or Environmental Functions////////
///////////////////////////////////////////////////
function userAuthen() {
  var userinput = $("#userName");
  var userinputlength = $("#userName").val().length;
  if (userinputlength >= 6 && userinputlength <=10) {
    userinput.attr('status', 'complete');
    userinput.css('border', '2px dashed green');
  } else {
    $("#message").html("Usernames must be atleast 6 characters long and cannot be longer than 10 characters. Please try again");
    $('#myModal').modal("show");
    userinput.attr('status', 'incomplete');
    userinput.css('border', '2px dashed red');
  }
};

function showPassword() {
var showPasswordBox = $("#showPwd");
var passwordType = $("#password");
  if(showPasswordBox.is(":checked")) {
    passwordType.attr('type','text');
  } else {
    passwordType.attr('type','password');
  }
};

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

function submittingNewInfo() {
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

  $.post("/api/user", newUser)
    .done(function(data) {
      console.log("*********");
      console.log(data);
      $("#message").html("New User has been added...");
      $('#myModal').modal("show");
    });

  function createSurvey(userid) {
    newSurvey.userid = userid;
    $.post("/api/survey", newSurvey)
      .done(function(data) {
        console.log(data);
        $("#message").html("New Survey has been added...");
        $('#myModal').modal("show");
      });
  };
};

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

    $.post("/api/user", newUser)
      .done(function(data) {
        console.log("*********");
        console.log(data);
        $("#message").html("New User has been added...");
        $('#myModal').modal("show");
      });

    function createSurvey(userid) {
      newSurvey.userid = userid;
      $.post("/api/survey", newSurvey)
        .done(function(data) {
          console.log(data);
          $("#message").html("New Survey has been added...");
          $('#myModal').modal("show");
        });
    };
  });
});
