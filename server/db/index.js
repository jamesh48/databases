var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.USERPASS);

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

exports.db = db;
exports.user = User;
exports.message = Message;

