// var mysql = require('mysql');

// // create a connection to database
// var db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'CloudlessSky82',
//   database: 'chat'
// });

// db.connect(function(err) {
//   if (err) {
//     throw err;
//   }
// });

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'CloudlessSky82');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  // userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});


// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });

exports.db = db;
exports.user = User;
exports.message = Message;

