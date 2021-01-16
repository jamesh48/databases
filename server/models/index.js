var db = require('../db').db;
var user = require('../db').user;
var message = require('../db').message;


module.exports = {
  messages: {
    get: function (cb) {
      // db.query('SELECT * FROM messages', function(err, results, fields) {
      //   err ? cb(err) : cb(null, JSON.stringify(results));
      // });
      message.findAll()
        .then(
          function(results) {
            console.log(results[0].dataValues);
            cb(null, JSON.stringify(results));
          }
        )
        .catch();
    },
    post: function (data, cb) {
      // TIMESTAMP	'0000-00-00 00:00:00'
      const newDate = new Date();
      const dd = newDate.getDate();
      let mm = newDate.getMonth() + 1;
      if (mm < 10) {
        mm = '0' + mm;
      }
      const yyyy = newDate.getUTCFullYear();

      const hours = newDate.getHours();
      const min = newDate.getMinutes();
      const sec = newDate.getSeconds();

      // let insertStr = `${yyyy}-${mm}-${dd} ${hours}:${min}:${sec}`;
      // let insertStr = new Date();
      // data.username
      // db.query(`SELECT id FROM users WHERE username = ${data.username}`, function(err, results, fields) {
      //   console.log('results ' + results);
      // });
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

