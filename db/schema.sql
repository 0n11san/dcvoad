### Schema

CREATE DATABASE survey_db
USE survey_db;

CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(50),
	address varchar(255),
	city varchar(255),
	country varchar(255),
	post_code int(11),
	emergency_contact varchar(255), NOT NULL,
	con_tel_number1 int(10),
	extension1 int(10),
	con_tel_number2 int(10),
	extension2 int(10),
	emergency_contact_email varchar(50),
	question varchar(5) NOT NULL,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
