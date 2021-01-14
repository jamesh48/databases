var db = require('../db').db;
// should this be var db = require('../db').db; ???
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      console.log('models index.js messages/get');
      db.query('SELECT * FROM messages', function(error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          console.log('_____model results-> ' + JSON.stringify(results));
          callback(null, results);
        }
      });
    },
    post: function (data, callback) {
      console.log('data-> ' + data);
      // a function which can be used to insert a message into the database
      console.log('models index.js messages/post');
      db.query('INSERT INTO messages (roomname, user, text) VALUES (null, null, data.message)', function(error, results, fields) {
        if (error) {
          callback(error, null);
        } else {
          console.log('models/index.js post results-> ' + results);
          callback(null, results);
        }
      });

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('models index.js users/get');
      db.query('SELECT * FROM users', function(error, results, fields) {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      });
    },
    post: function (data, callback) {
      console.log('models index.js users/post');
      db.query('INSERT INTO users (user) VALUES (data.username)', function(error, results, fields) {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      });
    }
  }
};

