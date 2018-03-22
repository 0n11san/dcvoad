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
  if (userinputlength >= 6 && userinputlength <= 10) {
    userinput.attr('status', 'complete');
    userinput.css('background-color', '#4ae896');
  } else {
    $("#message").html("Usernames must be atleast 6 characters long and cannot be longer than 10 characters. Please try again");
    $('#myModal').modal("show");
    userinput.attr('status', 'incomplete');
    userinput.css('background-color', '#ed6250');
  }
};

function showPassword() {
  var showPasswordBox = $("#showPwd");
  var passwordType = $("#password");
  if (showPasswordBox.is(":checked")) {
    passwordType.attr('type', 'text');
  } else {
    passwordType.attr('type', 'password');
  }
};

function passwordAuthen() {
  var passwordType = $("#password");
  var passwordTypeLength = passwordType.val().length;
  if (passwordTypeLength >= 8 && passwordTypeLength <= 16) {
    passwordType.attr('status', 'complete');
    passwordType.css('background-color', '#4ae896');
  } else {
    $("#message").html("Passwords must be atleast 8 characters long and cannot be longer than 16 characters. Please try again");
    $('#myModal').modal("show");
    passwordType.attr('status', 'incomplete');
    passwordType.css('background-color', '#ed6250');
  }
};

function orgNameAuthen() {
  var orgInput = $("#orgName");
  var orgInputlength = $("#orgName").val().length;
  if (orgInputlength > 0 && orgInputlength <= 50) {
    orgInput.attr('status', 'complete');
    orgInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please fill out the Organization Name section in order to move forward.");
    $('#myModal').modal("show");
    orgInput.attr('status', 'incomplete');
    orgInput.css('background-color', '#ed6250');
  }
};

function orgWebsiteAuthen() {
  var orgWebsite = $("#orgWebsite");
  var orgWebsitelength = $("#orgWebsite").val().length;
  if (orgWebsitelength > 0 && orgWebsitelength <= 255) {
    orgWebsite.attr('status', 'complete');
    orgWebsite.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please provide a valid website.");
    $('#myModal').modal("show");
    orgWebsite.attr('status', 'incomplete');
    orgWebsite.css('background-color', '#ed6250');
  }
};

function orgEmailAuthen() {
  var orgEmail = $("#orgEmail");
  var orgEmailValue = $("#orgEmail").val();
  var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (orgEmailValue.match(format)) {
    orgEmail.attr('status', 'complete');
    orgEmail.css('background-color', '#4ae896');
  } else {
    $("#message").html("Phone Number did not match the format of XXX.XXX.XXXX. Please correct.");
    $('#myModal').modal("show");
    orgEmail.attr('status', 'Incomplete');
    orgEmail.css('background-color', '#ed6250');
  }
};

function orgNumberAuthen() {
  var orgNumber = $("#orgNumber");
  var orgNumberValue = $("#orgNumber").val();
  var phoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (orgNumberValue.match(phoneNumber)) {
    orgNumber.attr('status', 'complete');
    orgNumber.css('background-color', '#4ae896');
  } else {
    $("#message").html("Phone Number did not match the format of XXX-XXX-XXXX. Please correct.");
    $('#myModal').modal("show");
    orgNumber.attr('status', 'Incomplete');
    orgNumber.css('background-color', '#ed6250');
  }
};

function exten1Authen() {
  var extInput = $("#extension1");
  var extInputlength = $("#extension1").val().length;
  if (extInputlength > 0 && extInputlength <= 20) {
    extInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("The extension you have entered it too long. Max 20 characters.");
    $('#myModal').modal("show");
    extInput.css('background-color', '#ed6250');
  }
};

function blurbAuthen() {
  var blurbInput = $("#blurb");
  var blurbInputlength = $("#blurb").val().length;
  if (blurbInputlength <= 1000) {
    blurbInput.attr('status', 'complete');
    blurbInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("Your Blurb has too many character. Max length in 1000. Please edit and try again.");
    $('#myModal').modal("show");
    blurbInput.attr('status', 'error');
    blurbInput.css('background-color', '#ed6250');
  }
};


// Function to get the site consent answer
function getSiteConsent() {
  var answer1 = document.getElementById("choice1").selectedIndex;
  answer1Id = $("#choice1");
  if (answer1 === 1) {
    siteConsent = "Yes";
    answer1Id.attr('status', 'complete');
    answer1Id.css('background-color', '#4ae896');
  } else {
    siteConsent = "No"
    answer1Id.attr('status', 'incomplete');
    answer1Id.css('background-color', '#ed6250');
    $("#message").html("Please consent to allow us access to the information you've provided.");
    $('#myModal').modal("show");
  }
}

function mppConAuthen() {
  var mppConInput = $("#mpp_con_name");
  var mppConInputlength = $("#mpp_con_name").val().length;
  if (mppConInputlength > 0 && mppConInputlength <= 50) {
    mppConInput.attr('status', 'complete');
    mppConInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please fill out the Meeting Planning Point of Contact Name section in order to move forward.");
    $('#myModal').modal("show");
    mppConInput.attr('status', 'incomplete');
    mppConInput.css('background-color', '#ed6250');
  }
};

function EmergenConNameAuthen() {
  var emergConInput = $("#emergency_contact");
  var emergConInputlength = $("#emergency_contact").val().length;
  if (emergConInputlength > 0 && emergConInputlength <= 50) {
    emergConInput.attr('status', 'complete');
    emergConInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please fill out the Emergency Contact Name section in order to move forward.");
    $('#myModal').modal("show");
    emergConInput.attr('status', 'incomplete');
    emergConInput.css('background-color', '#ed6250');
  }
};

function mppEmailAuthen() {
  var mppEmail = $("#mpp_email");
  var mppEmailValue = $("#mpp_email").val();
  var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mppEmailValue.match(format)) {
    mppEmail.attr('status', 'complete');
    mppEmail.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please provide a valid email.");
    $('#myModal').modal("show");
    mppEmail.attr('status', 'Incomplete');
    mppEmail.css('background-color', '#ed6250');
  }
};

function addressAuthen() {
  var addressInput = $("#address");
  var addressInputlength = $("#address").val().length;
  if (addressInputlength > 0 && addressInputlength <= 255) {
    addressInput.attr('status', 'complete');
    addressInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("I am sorry the address you have provided is too long. Max is 255 characters.");
    $('#myModal').modal("show");
    addressInput.attr('status', 'incomplete');
    addressInput.css('background-color', '#ed6250');
  }
};

function cityAuthen() {
  var cityInput = $("#city");
  var cityInputlength = $("#city").val().length;
  if (cityInputlength > 0 && cityInputlength <= 25) {
    cityInput.attr('status', 'complete');
    cityInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("I am sorry the city you have provided is too long.");
    $('#myModal').modal("show");
    cityInput.attr('status', 'incomplete');
    cityInput.css('background-color', '#ed6250');
  }
};

function stateAuthen() {
  var stateInput = $("#state");
  var stateInputlength = $("#state").val().length;
  if (stateInputlength > 0 && stateInputlength <= 25) {
    stateInput.attr('status', 'complete');
    stateInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("I am sorry the state you have provided is too long.");
    $('#myModal').modal("show");
    stateInput.attr('status', 'incomplete');
    stateInput.css('background-color', '#ed6250');
  }
};

function postCodeAuthen() {
  var postCodeInput = $("#post_code");
  var postCodeInputValue = $("#post_code").val();
  var format = /^([0-9]){5}$/;
  if (postCodeInputValue.match(format)) {
    postCodeInput.attr('status', 'complete');
    postCodeInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("The Postal Code you have provided is not correct. Max 5 numbers. Please correct.");
    $('#myModal').modal("show");
    postCodeInput.attr('status', 'incomplete');
    postCodeInput.css('background-color', '#ed6250');
  }
};

function emerg1NumberAuthen() {
  var emerg1Number = $("#emerg_con_tel_number1");
  var emerg1NumberValue = $("#emerg_con_tel_number1").val();
  var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (emerg1NumberValue.match(phoneNumber)) {
    emerg1Number.attr('status', 'complete');
    emerg1Number.css('background-color', '#4ae896');
  } else {
    $("#message").html("Phone Number did not match the format of XXX-XXX-XXXX. Please correct.");
    $('#myModal').modal("show");
    emerg1Number.attr('status', 'incomplete');
    emerg1Number.css('background-color', '#ed6250');
  }
};

function emerg2NumberAuthen() {
  var emerg2Number = $("#emerg_con_tel_number2");
  var emerg2NumberValue = $("#emerg_con_tel_number2").val();
  var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (emerg2NumberValue.match(phoneNumber)) {
    emerg2Number.attr('status', 'complete');
    emerg2Number.css('background-color', '#4ae896');
  } else {
    $("#message").html("Phone Number did not match the format of XXX-XXX-XXXX. Please correct.");
    $('#myModal').modal("show");
    emerg2Number.attr('status', 'incomplete');
    emerg2Number.css('background-color', '#ed6250');
  }
};

function emergExt1Authen() {
  var emergExtInput = $("#emerg_extension1");
  var emergExtlength = $("#emerg_extension1").val().length;
  if (emergExtlength > 0 && emergExtlength <= 20) {
    emergExtInput.attr('status', 'complete');
    emergExtInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("The extension you have entered it too long. Max 20 characters.");
    $('#myModal').modal("show");
    emergExtInput.attr('status', 'complete');
    emergExtInput.css('background-color', '#ed6250');
  }
};

function emergExt2Authen() {
  var emergExtInput = $("#emerg_extension2");
  var emergExtlength = $("#emerg_extension2").val().length;
  if (emergExtlength > 0 && emergExtlength <= 20) {
    emergExtInput.attr('status', 'complete');
    emergExtInput.css('background-color', '#4ae896');
  } else {
    $("#message").html("The extension you have entered it too long. Max 20 characters.");
    $('#myModal').modal("show");
    emergExtInput.attr('status', 'complete');
    emergExtInput.css('background-color', '#ed6250');
  }
};

function emergConEmailAuthen() {
  var emergConEmail = $("#emergency_contact_email");
  var emergConEmailValue = $("#emergency_contact_email").val();
  console.log(emergConEmailValue);
  var format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emergConEmailValue.match(format)) {
    emergConEmail.attr('status', 'complete');
    emergConEmail.css('background-color', '#4ae896');
  } else {
    $("#message").html("Please provide a valid email address.");
    $('#myModal').modal("show");
    emergConEmail.attr('status', 'Incomplete');
    emergConEmail.css('background-color', '#ed6250');
  }
};


// function to get the contract consent answer
function getcontactConsent() {
  var answer2 = document.getElementById("choice2").selectedIndex;
  answer2Id = $("#choice2");
  if (answer2 === 1) {
    contactConsent = "Yes";
    answer2Id.attr('status', 'complete');
    answer2Id.css('background-color', '#4ae896');
  } else {
    contactConsent = "No"
    answer2Id.attr('status', 'incomplete');
    answer2Id.css('background-color', '#ed6250');
    $("#message").html("Please consent to allows us to contact you during disaster response exercises in our to move forward.");
    $('#myModal').modal("show");
  }
}


$(document).ready(function() {

      userStatus = "user";

      $("#add-btn").on("click", function(event) {
          event.preventDefault();

          function submittingNewInfo() {
            getSiteConsent();
            getcontactConsent();


            // Status variables
            var usernameStatus = $("#userName").attr('status');
            var passwordStatus = $("#password").attr('status');
            var orgInputStatus = $("#orgName").attr('status');
            var orgWebsiteStatus = $("#orgWebsite").attr('status');
            var publicContactNumStatus = $("#orgNumber").attr('status');
            var extension1Status = $("#extension1").attr('status');
            var emailStatus = $("#orgEmail").attr('status');
            var blurbStatus = $("#blurb").attr('status');
            var siteConsentStatus = $("#choice1").attr('status');
            var mppContactNameStatus = $("#mpp_con_name").attr('status');
            var mppEmailStatus = $("#mpp_email").attr('status');
            var addressStatus = $("#address").attr('status');
            var cityStatus = $("#city").attr('status');
            var stateStatus = $("#state").attr('status');
            var postCodeStatus = $("#post_code").attr('status');
            var emergencyContactNameStatus = $("#emergency_contact").attr('status');
            var emergencyNumberStatus = $("#emerg_con_tel_number1").attr('status');
            var emergencyNumberExtensionStatus = $("#emerg_extension1").attr('status');
            var emergencyNumber2Status = $("#emerg_con_tel_number2").attr('status');
            var emergencyNumber2ExtensionStatus = $("#emerg_extension2").attr('status');
            var emergConEmailStatus = $("#emergency_contact_email").attr('status');
            var contactConsentStatus = $("#choice2").attr('status');

            // Console Logs
            console.log(usernameStatus);
            console.log(passwordStatus);
            console.log(orgInputStatus);
            console.log(orgWebsiteStatus);
            console.log(publicContactNumStatus);
            console.log(extension1Status);
            console.log(emailStatus);
            console.log(blurbStatus);
            console.log(siteConsentStatus);
            console.log(mppContactNameStatus);
            console.log(mppEmailStatus);
            console.log(addressStatus);
            console.log(cityStatus);
            console.log(stateStatus);
            console.log(postCodeStatus);
            console.log(emergencyContactNameStatus);
            console.log(emergencyNumberStatus);
            console.log(emergencyNumberExtensionStatus);
            console.log(emergencyNumber2Status);
            console.log(emergencyNumber2ExtensionStatus);
            console.log(contactConsentStatus);

            // if all the status are complete and blurb is errorFree then submit will be enabled and submit to the database.
            if (usernameStatus && passwordStatus && orgInputStatus && orgWebsiteStatus && publicContactNumStatus && extension1Status &&
              emailStatus && blurbStatus && siteConsentStatus && mppContactNameStatus && mppEmailStatus && addressStatus && cityStatus &&
              stateStatus && postCodeStatus && emergencyContactNameStatus && emergencyNumberStatus && emergencyNumberExtensionStatus &&
              emergencyNumber2Status && emergencyNumber2ExtensionStatus && emergConEmailStatus && contactConsentStatus === 'complete') {
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
            } else {
              $("#message").html("It appears that all the required fields have not been filled out correctly. Please review the information you provided and resubmit.");
              $('#myModal').modal("show");
            }
          };
          });
      });
