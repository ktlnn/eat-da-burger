var connection = require("../config/connection");

var connectionQuery = require('util').promisify(connection.query.bind(connection));

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  var orm = {
    read: function(tableInput) {
      var queryString = "SELECT * FROM ??;";
      return connectionQuery(queryString, [tableInput]);
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO ??";
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      return connectionQuery(queryString, [table, ...vals]);
    },

    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      return connectionQuery(queryString);
    },
    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      return connectionQuery(queryString);
    }
  };
  
  module.exports = orm;
  