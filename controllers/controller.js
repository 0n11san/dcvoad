var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var survey = require("../models/survey.js");

// Create all our routes and set up logic within those routes where required.
// Get your user data
router.get("/", function(req, res) {
  survey.all(function(data) {
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

// // Get for all survey data
// router.get("/", function(req, res) {
//   survey.all(function(data) {
//     var hbsObject = {
//       survey: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// Post for user
router.post("/api/user", function(req, res) {
  survey.create([
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
    "orgName", "orgWebsite", "orgNumber", "extenstion1", "orgEmail", "blurb",
     "siteConsent", "mpp_con_name", "mpp_email", "address", "city", "country",
      "post_code", "emergency_contact", "emerg_con_tel_number1", "emerg_extension1",
      "emerg_con_tel_number2", "emerg_extension2", "emergency_contact_email", "contactConsent"

  ], [
    req.body.orgName, req.body.orgWebsite, req.body.orgNumber, req.body.extenstion1,
     req.body.orgEmail, req.body.blurb, req.body.mpp_con_name,
     req.body.mpp_email, req.body.address, req.body.city, req.body.country, req.body.post_code,
     req.body.emergency_contact, req.body.emerg_con_tel_number1, req.body.emerg_extension1,
     req.body.emerg_con_tel_number2, req.body.emerg_extension2, req.body.emergency_contact_email,
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Put for user
router.put("/api/user/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  survey.update({
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
    extension1: req.body.extenstion1,
    orgEmail: req.body.orgEmail,
    blurb: req.body.blurb,
    siteConsent: req.body.siteConsent,
    mpp_con_name: req.body.mpp_con_name,
    mpp_email: req.body.mpp_email,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    post_code: req.body.post_code,
    emergency_contact: req.body.emergency_contact,
    emerg_con_tel_number1: req.body.emerg_con_tel_number1,
    emerg_extension1: req.body.emerg_extension1,
    emerg_con_tel_number2: req.body.emerg_con_tel_number2,
    emerg_extension2: req.body.emerg_extension2,
    emergency_contact_email: req.body.emergency_contact_email,
    contactConsent: req.body.contactConsent
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

  cat.delete(condition, function(result) {
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

  cat.delete(condition, function(result) {
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
