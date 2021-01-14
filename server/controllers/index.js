var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          throw err;
        } else {
          // attach onto the response object the results
          res.writeHead(200);
          console.log('_____controller results-> ' + JSON.stringify(results));
          res.end(results.text);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request-> ' + req);
      // would we reference model/index.js
      models.messages.post(('hello', (err, results) => {
        console.log('posted-> ' + JSON.stringify(results));
      }));
      res.writeHead(201);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

