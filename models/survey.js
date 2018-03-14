// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var survey = {
  all: function(cb) {
    orm.all("survey", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("survey", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("survey", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
  orm.delete("survey", condition, function(res) {
    cb(res);
  });
}
};

// Export the database functions for the controllers
module.exports = burger;
