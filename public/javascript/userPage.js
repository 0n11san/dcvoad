$(document).ready(function() {


      $("#save-btn").on("click", function(event) {
          event.preventDefault();

          function updatingInfo() {
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
              var updateUser = {
                username: $("#username").val(),
              };

              var updateSurvey = {
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

              $.put("/api/user", updateUser)
                .done(function(data) {
                  console.log("*********");
                  console.log(data);
                  $("#message").html("Your user infomation has been updated.");
                  $('#myModal').modal("show");
                });

              function updateSurvey(userid) {
                newSurvey.userid = userid;
                $.put("/api/survey", updateSurvey)
                  .done(function(data) {
                    console.log(data);
                    $("#message").html("Your survey information has been updated.");
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
