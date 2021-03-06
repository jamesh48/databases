/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: process.env.USERNAME,
      password: process.env.USERPASS,
      database: process.env.DATABASE
    });
    dbConnection.connect();

    var tablename = 'messages';
    var tablename2 = 'users';

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    // dbConnection.query('truncate ' + tablename);
    dbConnection.query('truncate ' + tablename, function() {
      dbConnection.query('truncate ' + tablename2, done);
    });
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
    var queryString = "INSERT INTO messages (text, roomname) VALUES ('Men like you can never change!', 'main')";
    var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        // console.log('-_-_-_-_-_body is-> ', body);
        var messageLog = JSON.parse(body);
        expect(messageLog[0].text).to.equal('Men like you can never change!');
        expect(messageLog[0].roomname).to.equal('main');

        // added test here
        // expect(messageLog[0].id_users).to.not.equal(null);
        done();
      });
    });
  });

  it('should have timestamp "createdAt"', function(done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Marco' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Marco',
          message: 'All in a good days work',
          roomname: 'apartment'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results[0].createdAt).to.not.equal(null);
          expect(results[0].createdAt).to.not.equal(undefined);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).to.equal('All in a good days work');

          done();
        });
      });
    });
  });

  it('should get all the usernames from the database', function(done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Marco' }
    }, function() {
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/users',
        json: { username: 'Peet' }
      }, function() {
        var queryString = 'SELECT * FROM users';
        var queryArgs = [];
        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have two results:
          expect(results.length).to.equal(2);
          expect(results[0].username).to.equal('Marco');
          expect(results[1].username).to.equal('Peet');

          // // TODO: If you don't have a column named text, change this test.
          // expect(results[0].text).to.equal('All in a good days work');
          done();
        });
      });
    });
  });


});
