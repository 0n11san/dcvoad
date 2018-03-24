// dynamic dropdown to login into the navxxxxxxx
<html>
  <head>
  <script type="text/javascript">
    $(document).ready(function() {
      var arrow = $(".arrow-up");
      var loginForm = $(".login-form");
      var registerForm = $(".register-form");
      var status = false;
      $("#login").click(function(event) {
        event.preventDefault();
      // $("#register").click(function(event)xxxxxxx {
        // event.preventDefault();xxxxxxx
        // alert(0);xxxxxxxxxxxx
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
      // $("#register").click(function(event) {xxxxxxxxx
        // event.preventDefault();xxxxxxxxx
        // alert(0);xxxxxxxxxx
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
  </script>
</head>
</html>
