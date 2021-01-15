var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200);
          res.end(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(201);
          res.end(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200);
          res.end(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err, results) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(201);
          res.end(results);
        }
      });
    }
  }
};

