-- Drops the burger if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "burger" database --
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burgerName, devoured) VALUES ("Slammy Hammy", true);
INSERT INTO burgers (burgerName, devoured) VALUES ("Green Machine", true);
INSERT INTO burgers (burgerName) VALUES ("Double Double");
INSERT INTO burgers (burgerName, devoured) VALUES ("Eggcellent", true);
INSERT INTO burgers (burgerName) VALUES ("Eggie Veggie");
INSERT INTO burgers (burgerName) VALUES ("Veggie");