
  var userStatus = user,

    $("#add-btn").on("click", function(event) {
      event.preventDefault();

      var newUser = {
        username: $("#userName").val().trim(),
        password: $("#password").val().trim(),
        status: userStatus
      };

      var newSurvey = {
        name: $("#orgName").val().trim(),
        site: $("#orgWebsite").val().trim(),
        number: $("#orgNumber").val().trim(),
        email: $("#orgEmail").val().trim(),
        website: $("#orgWebsite").val().trim(),
        blurb: $("#orgBlurb").val().trim(),
        siteConsent: $("#siteConsent").val().trim(),
        pocName: $("#pocName").val().trim(),
        pocEmail: $("#pocEmail").val().trim(),
        address: $("#orgAddress").val().trim(),
        city: $("#orgCity").val().trim(),
        country: $("#orgCountry").val().trim(),
        post_code: $("#orgPostCode").val().trim(),
        emergPocName: $("#emergPocName").val().trim(),

        emergPocNumber1: $("#emergPocNumber1").val().trim(),
        emergPocNumber1extenstion: $("#emergPocNumber1extension").val().trim(),
        emergPocNumber2: $("#emergPocNumber2").val().trim(),
        emergPocNumber2extenstion: $("#emergPocNumber2extension").val().trim(),

        contactConsent: $("#orgEmail").val().trim(),
      };




    $.post("/api/new", newCharacter)
      .done(function(data) {
        console.log(data);
        alert("Adding character...");
      });

    });
