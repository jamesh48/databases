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

