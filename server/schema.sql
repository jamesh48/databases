DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

/*
*TABLES TO CREATE->
*rooms
  *id [PRIMARY KEY]
  *name
*messages
  *id [PRIMARY KEY]
  *user_id [FOREIGN KEY]
  *message
  *created_at
  *room_id [FOREIGN KEY]
*users
  *id [PRIMARY KEY]
  *username
*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` MEDIUMTEXT NOT NULL,
  `roomname` VARCHAR(100),
  `createdAt` VARCHAR(100),
  `updatedAt` VARCHAR(100),
  `id_users` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `createdAt` VARCHAR(100),
  `updatedAt` VARCHAR(100),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `messages` (`id`,`text`, `roomname`, `created_at`,`id_users`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');





-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );

-- /* Create other tables and define schemas for them here! */

-- CREATE TABLE rooms (

-- );

-- CREATE TABLE users (

-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

