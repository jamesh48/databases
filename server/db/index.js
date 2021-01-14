var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// create a connection to database
module.exports.db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CloudlessSky82',
  database: 'chat'
});

// export database to reference inside of models/index.js