DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    id INT AUTO_INCREMENT,
    text_message VARCHAR(120),
    user VARCHAR(20),
    room VARCHAR(20),
    PRIMARY KEY (id)
);

-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE rooms (
--   /* Describe your table here.*/


-- );

CREATE TABLE user (
  id INT AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* note from Blake - ALTER TABLE to fix FOREIGN KEY issue
