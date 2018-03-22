var express = require("express");

var router = express.Router();

// Import the model (survey.js) to use its database functions.
var survey = require("../models/survey.js");
// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");


//get all DB database
// Get your survey data

router.get("/api/test", function(req, res) {
  var data = [
    {name: "Jon"},
    {name: "Patrick"},
    {name: "Nathan"},
    {name: "Jen"},
    {name: "Jamal"}
  ];
  res.json(data)
});

//new test Page
router.get("/test", function(req, res) {
    res.render("test");
});

// Create all our routes and set up logic within those routes where required.
// Get your survey data
router.get("/", function(req, res) {
  survey.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Get your user data
router.get("/", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Render Survey Page
router.get("/register", function(req, res) {
  survey.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("survey", hbsObject);
  });
});

// About page
router.get("/members", function(req, res) {
  survey.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("member-orgs", hbsObject);
  });
});

// Member page
router.get("/about", function(req, res) {
  survey.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("user", hbsObject);
  });
});

// User page
router.get("/user", function(req, res) {
  survey.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("user", hbsObject);
  });
});

router.get("/user", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("user", hbsObject);
  });
});


// Post for user
router.post("/api/user", function(req, res) {
  user.create([
    "username", "password", "status", "active"
  ], [
    req.body.username, req.body.password, req.body.status, req.body.active
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Post for survey
router.post("/api/survey", function(req, res) {
  survey.create([
    "orgName", "orgWebsite", "orgNumber", "extension1", "orgEmail", "blurb",
     "siteConsent", "mpp_con_name", "mpp_email", "address", "city", "state",
      "post_code", "emergency_contact", "emerg_con_tel_number1", "emerg_extension1",
      "emerg_con_tel_number2", "emerg_extension2", "emergency_contact_email", "contactConsent", "userid"

  ], [
    req.body.orgName, req.body.orgWebsite, req.body.orgNumber, req.body.extension1,
     req.body.orgEmail, req.body.blurb, req.body.siteConsent, req.body.mpp_con_name,
     req.body.mpp_email, req.body.address, req.body.city, req.body.state, req.body.post_code,
     req.body.emergency_contact, req.body.emerg_con_tel_number1, req.body.emerg_extension1,
     req.body.emerg_con_tel_number2, req.body.emerg_extension2, req.body.emergency_contact_email, req.body.contactConsent, req.body.userid
  ], function(result) {
    console.log(result.affectedRows);
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});



// Put for userid
router.put("/api/user/:user", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  user.update({
    username: req.body.username
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Put for username
router.put("/api/user/:username", function(req, res) {
  var condition = "username = " + req.params.username;

  console.log("condition", condition);

  user.update({
    username: req.body.username
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Put for survey
router.put("/api/survey/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  survey.update({
    orgName: req.body.orgName,
    orgWebsite: req.body.orgWebsite,
    orgNumber: req.body.orgNumber,
    extension1: req.body.extension1,
    orgEmail: req.body.orgEmail,
    blurb: req.body.blurb,
    siteConsent: req.body.siteConsent,
    mpp_con_name: req.body.mpp_con_name,
    mpp_email: req.body.mpp_email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    post_code: req.body.post_code,
    emergency_contact: req.body.emergency_contact,
    emerg_con_tel_number1: req.body.emerg_con_tel_number1,
    emerg_extension1: req.body.emerg_extension1,
    emerg_con_tel_number2: req.body.emerg_con_tel_number2,
    emerg_extension2: req.body.emerg_extension2,
    emergency_contact_email: req.body.emergency_contact_email,
    contactConsent: req.body.contactConsent,
    userid: req.body.userid
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// delete for survey
router.delete("/api/survey/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  survey.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// delete for user
router.delete("/api/user/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  user.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
