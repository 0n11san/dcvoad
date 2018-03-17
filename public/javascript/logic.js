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

  //     // POST data to /api/friends (C in CRUD)
  //     $.post('/api/friends', surveyData, function(data) {
  //
  //       // Use data callback to display result.
  //       if (data) {
  //
  //         // Empty out modal and username and link fields.
  //         $('#modalContent').empty();
  //         $('#userName').val('');
  //         $('#imageLink').val('');
  //
  //         // results in array form; Grabs name and URL for each object,
  //         data.forEach(function(profile) {
  //           var profileDiv = $('<div class="profile">');
  //           var name = profile.name;
  //           var photoURL = profile.photo;
  //           // Put the name in a header.
  //           var nameHeader = $('<h3>').text(name);
  //           // Add photo setting source ('src') to submitted photo URL (should be jpg/png/gif format etc)
  //           var photo = $('<img>').attr('src', photoURL);
  //           profileDiv.append(nameHeader, photo);
  //
  //           // Add items to modal
  //           $('#modalContent').append(profileDiv);
  //         });
  //
  //         // If there's more than is a tie for the best match(es)...
  //         if (data.length > 1) {
  //           // Makes header plural
  //           $('.modal-title').text('Your best matches!');
  //         } else {
  //           // Makes header singular
  //           $('.modal-title').text('Your best match!');
  //         }
  //
  //         // Display match(es)
  //         $('#resultModal').modal();
  //       }
  //     });
  //     // If there is an error create this Message
  //     // Create a modal for later
  //   } else {
  //     $('#draftErrorMessage').text("Error Message");
  //
  //     setTimeout(function() {
  //       $('#draftErrorMessage').text('hide');
  //     }, 2000);
  //   }
  //
  //   // $.post("/api/new", newCharacter)
  //   //   .done(function(data) {
  //   //     console.log(data);
  //   //     alert("Adding character...");
  //   //   });
  });
});
