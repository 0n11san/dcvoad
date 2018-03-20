### Schema
DROP DATABASE IF EXISTS voad_db;
CREATE DATABASE voad_db;

USE voad_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	username varchar(255) NOT NULL,
	password varchar(50),
	status varchar(255),
	active BOOLEAN
);

CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	orgName varchar(255) NOT NULL,
	orgWebsite varchar(255),
	orgNumber varchar (20),
	extension1 varchar (20),
	orgEmail varchar(50),
	blurb varchar(1001),
	siteConsent varchar(5),
	mpp_con_name varchar(255) NOT NULL,
	mpp_email varchar(50),
	address varchar(255),
	city varchar(255),
	state varchar(255),
	post_code int(11),
	emergency_contact varchar(255) NOT NULL,
	emerg_con_tel_number1 varchar(20),
	emerg_extension1 varchar (20),
	emerg_con_tel_number2 varchar(20),
	emerg_extension2 varchar(20),
	emergency_contact_email varchar(50),
	contactConsent varchar(5),
	userid int,
	date TIMESTAMP,
	FOREIGN KEY (userid) REFERENCES user(id)
);
