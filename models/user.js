// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Create User model
var user = {
  all: function(cb) {
    orm.all("user", function(res) {
      cb(res);
    });
  },

  // create function
  create: function(cols, vals, cb) {
    orm.create("user", cols, vals, function(res) {
      cb(res);
    });
  },

  // update function
  update: function(objColVals, condition, cb) {
    orm.update("user", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // delete function
  delete: function(condition, cb) {
    orm.delete("user", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controllers
module.exports = user;
