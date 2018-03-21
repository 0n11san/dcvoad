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

function passwordAuthen() {
  var passwordType = $("#password");
  var passwordTypeLength = passwordType.val().length;
if (passwordTypeLength >= 8 && passwordTypeLength <=16) {
  passwordType.attr('status', 'complete');
  passwordType.css('border', '2px dashed green');
} else {
  $("#message").html("Passwords must be atleast 8 characters long and cannot be longer than 16 characters. Please try again");
  $('#myModal').modal("show");
  passwordType.attr('status', 'incomplete');
  passwordType.css('border', '2px dashed red');
}
};

function orgNameAuthen() {
  var orgInput = $("#orgName");
  var orgInputlength = $("#orgName").val().length;
  if (orgInputlength > 0 && orgInputlength <=50) {
    orgInput.attr('status', 'complete');
    orgInput.css('border', '2px dashed green');
  } else {
    $("#message").html("Please fill out the Organization Name section in order to move forward.");
    $('#myModal').modal("show");
    orgInput.attr('status', 'incomplete');
    orgInput.css('border', '2px dashed red');
  }
};

function blurbAuthen() {
  var blurbInput = $("#blurb");
  var blurbInputlength = $("#blurb").val().length;
  if (blurbInputlength <=1000) {
    blurbInput.attr('status', 'errorFree');
    blurbInput.css('border', '2px dashed green');
  } else {
    $("#message").html("Your Blurb has too many character. Max length in 1000. Please edit and try again.");
    $('#myModal').modal("show");
    blurbInput.attr('status', 'error');
    blurbInput.css('border', '2px dashed red');
  }
};


// Function to get the site consent answer
function getSiteConsent() {
  var answer1 = document.getElementById("choice1").selectedIndex;
  answer1Id = $("#choice1");
  if (answer1 === 1) {
    siteConsent = "Yes";
    answer1Id.attr('status', 'complete');
    answer1Id.css('border', '2px dashed green');
  } else {
    siteConsent = "No"
    answer1Id.attr('status', 'incomplete');
    answer1Id.css('border', '2px dashed red');
    $("#message").html("Please consent to allow us access to the information you've provided.");
    $('#myModal').modal("show");
  }
 }

 function mppConAuthen() {
   var mppConInput = $("#mpp_con_name");
   var mppConInputlength = $("#mpp_con_name").val().length;
   if (mppConInputlength > 0 && mppConInputlength <=50) {
     mppConInput.attr('status', 'complete');
     mppConInput.css('border', '2px dashed green');
   } else {
     $("#message").html("Please fill out the Meeting Planning Point of Contact Name section in order to move forward.");
     $('#myModal').modal("show");
     mppConInput.attr('status', 'incomplete');
     mppConInput.css('border', '2px dashed red');
   }
 };

 function EmergenConNameAuthen() {
   var emergConInput = $("#emergency_contact");
   var emergConInputlength = $("#emergency_contact").val().length;
   if (emergConInputlength > 0 && emergConInputlength <=50) {
     emergConInput.attr('status', 'complete');
     emergConInput.css('border', '2px dashed green');
   } else {
     $("#message").html("Please fill out the Emergency Contact Name section in order to move forward.");
     $('#myModal').modal("show");
     emergConInput.attr('status', 'incomplete');
     emergConInput.css('border', '2px dashed red');
   }
 };

 // function to get the contract consent answer
 function getcontactConsent() {
   var answer2 = document.getElementById("choice2").selectedIndex;
   answer2Id = $("#choice2");
   if (answer2 === 1) {
     contactConsent = "Yes";
     answer2Id.attr('status', 'complete');
     answer2Id.css('border', '2px dashed green');
   } else {
     contactConsent = "No"
     answer2Id.attr('status', 'incomplete');
     answer2Id.css('border', '2px dashed red');
   }
 }


$(document).ready(function() {

  userStatus = "user";

// Draft Survey and Userinput. Please ignore.
function submittingNewInfo() {
  getSiteConsent();
  getcontactConsent();


// Status variables
var usernameStatus = $("#userName").attr('status');
var passwordStatus = $("#password").attr('status');
var orgInputStatus = $("#orgName").attr('status');
var blurbStatus = $("#blurb").attr('status');
var siteConsentStatus = $("#choice1").attr('status');
var mppContactNameStatus = $("#mpp_con_name").attr('status');
var emergencyContactNameStatus = $("#emergency_contact").attr('status');
var contactConsentStatus = $("#choice2").attr('status');

// if all the status are complete and blurb is errorFree then submit will be enabled and submit to the database.
if (usernameStatus && passwordStatus && orgInputStatus && siteConsentStatus
   && mppContactNameStatus && emergencyContactNameStatus && contactConsentStatus === 'complete' && blurbStatus === 'errorFree') {

}

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
  //
  // $.post("/api/user", newUser)
  //   .done(function(data) {
  //     console.log("*********");
  //     console.log(data);
  //     $("#message").html("New User has been added...");
  //     $('#myModal').modal("show");
  //   });
  //
  // function createSurvey(userid) {
  //   newSurvey.userid = userid;
  //   $.post("/api/survey", newSurvey)
  //     .done(function(data) {
  //       console.log(data);
  //       $("#message").html("New Survey has been added...");
  //       $('#myModal').modal("show");
  //     });
  // };
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
