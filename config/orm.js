// Import MySQL connection.
var connection = require("../config/connection.js");

// for each item of the array, create a question mark
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// loop through the keys and push the key/value as a string int arr
function objTosql(ob) {
  var arr = [];

for (var key in ob) {
  var value = ob[key];
  // check to skip hidden properties
  if (Object.hasOwnProperty.call(ob, key)) {
    // if string with spaces, add quotations (Red Cross => 'Red Cross')
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
    // e.g. {orgName: 'Red Cross'} => ["orgName='Red Cross'"]
    // e.g. {siteConsent: 'yes'} => ["siteConsent='yes'"]
    arr.push(key + "=" + value);
  }
}

// translate array of strings to a single comma-separated string
return arr.toString();
}

// Object for all our SQL statement functions.
// var orm = {
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // create function
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // update function
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // delete function
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the models (survey.js and users.js).
module.exports = orm;
