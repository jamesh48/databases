var mysql = require('mysql');

// create a connection to database
module.exports.db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CloudlessSky82',
  database: 'chat'
});