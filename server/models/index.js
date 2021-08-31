var db = require('../db');



module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages;';
      db.query(queryString, function(err, result) {
        if (err) {
          callback(err, result);
        }
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (postMessage, callback) {
      var sql = `INSERT INTO messages(text_message, user, room) VALUES ("${postMessage.message}", '${postMessage.username}', '${postMessage.roomname}')`;
      db.query(sql, function(err, result) {
        if (err) {
          callback(err);
        }
        callback();
      });
    } // a function which can be used to insert a message into the database
    // get: function() {},
    // post: function() {}
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM user;';
      db.query(queryString, function(err, result) {
        console.log('&&&&&&&&&&&&&&', result);
        if (err) {
          callback(err, result);
        }
        callback(err, result);
      });
    },
    post: function (user, callback) {
      var sql = `INSERT INTO user(username) VALUES ('${user.username}')`;
      db.query(sql, function(err, result) {
        if (err) {
          callback(err);
        }
        callback();
      });
    } // a function which can be used to insert a user into the database
    //get: function() {},
    // post: function(user, callback) {
    //   db.User.create({username: user.username}).then (user => console.log(user));
    // }
  }
};

