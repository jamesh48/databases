var mysql = require('mysql');

// create a connection to database
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CloudlessSky82',
  database: 'chat'
});

db.connect(function(err) {
  if (err) {
    throw err;
  }
});

module.exports.db = db;

/**
 * var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user    : 'root',
    password : '',
    database : 'chat'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
 */