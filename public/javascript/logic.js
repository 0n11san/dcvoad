$(document).ready(function() {

  var userStatus = user,

  // choices
  var choices = [
      'Yes',
      'No'
  ];

  choices.forEach(function(choice) {
    i++;
      var option = $('<option>').text(choice);
      select.append(option);
  });

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
        siteConsent: $("#siteConsent").val().trim(),
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
        contactConsent: $("#contactConsent").val().trim(),
      };




    // $.post("/api/new", newCharacter)
    //   .done(function(data) {
    //     console.log(data);
    //     alert("Adding character...");
    //   });
    });
};
