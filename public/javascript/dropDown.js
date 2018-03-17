
    $(document).ready(function() {
      var arrow = $(".arrow-up");
      var loginForm = $(".login-form");
      var registerForm = $(".register-form");
      var status = false;
      $("#login").click(function(event) {
        event.preventDefault();
      // $("#register").click(function(event) {
      //   event.preventDefault();
        // alert(0);
        if (status == false) {
          arrow.fadeIn();
          loginForm.fadeIn();
          status = true;
        } else {
          arrow.fadeOut();
          loginForm.fadeOut();
          status = false;
        }
      })
      $("#register").click(function(event) {
        event.preventDefault();
      // $("#register").click(function(event) {
      //   event.preventDefault();
        // alert(0);
        if (status == false) {
          arrow.fadeIn();
          registerForm.fadeIn();
          status = true;
        } else {
          arrow.fadeOut();
          registerForm.fadeOut();
          status = false;
        }
      })
    });
