var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});


con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database connected!');
  }
});

module.exports = con;


//refactor using sequelize
// var Sequelize = require('sequelize');
// //Connecting to a database
// const db = new Sequelize('chat', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// var User = db.define('User', {
//   username: Sequelize.STRING
// });

// module.exports = User;

