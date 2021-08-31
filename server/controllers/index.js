var models = require('../models');
var Promise = require('bluebird');



module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          res.send(err);
        }
        res.send(results);
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post(req.body, (err) => {
        if (err) {
          res.send('Post message failed!');
        }
        res.send('Post message success!');
      });
    }
    // get: function (req, res) {},
    // post: function (req, res) {}
  },

  users: {
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          res.send(err);
        }
        res.send(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (err) => {
        if (err) {
          res.send('Post user failed!');
        }
        res.send('Post user success!');
      });
    }
    // get: function (req, res) {

    // },

  }
};

