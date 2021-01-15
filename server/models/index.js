var db = require('../db').db;
module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages', function(err, results, fields) {
        err ? cb(err) : cb(null, JSON.stringify(results));
      });
    },
    post: function (data, cb) {
      db.query(`INSERT INTO messages (text, roomname) VALUES (${JSON.stringify(data.message)}, ${JSON.stringify(data.roomname)})`, function(err, results, fields) {
        err ? cb(err) : cb(null, JSON.stringify(data.message));
      });
    }
  },

  users: {
    get: function (cb) {
      db.query('SELECT * FROM users', function(err, results, fields) {
        err ? cb(err) : cb(null, JSON.stringify(results));
      });
    },
    post: function (data, cb) {
      db.query(`INSERT INTO users (username) VALUES (${JSON.stringify(data.username)})`, function(err, results, fields) {
        err ? cb(err) : cb(null, JSON.stringify(data.username));
      });
    }
  }
};

