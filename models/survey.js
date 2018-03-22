// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var survey = {
  all: function(cb) {
    orm.all("survey", function(res) {
      cb(res);
    });
  },

  // create function
  create: function(cols, vals, cb) {
    orm.create("survey", cols, vals, function(res) {
      cb(res);
    });
  },

  // update function
  update: function(objColVals, condition, cb) {
    orm.update("survey", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // delete function
  delete: function(condition, cb) {
    orm.delete("survey", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = survey;
