### Schema

CREATE DATABASE survey_db
USE survey_db;

CREATE TABLE survey
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	website varchar(255),
	phone int(10),
	extension1 int(10),
	email varchar(50),
	blurb varchar(1001),
	question1 varchar(5) NOT NULL,
	mpp_con_name varchar(255) NOT NULL,
	mpp_email varchar(50),
	address varchar(255),
	city varchar(255),
	country varchar(255),
	post_code int(11),
	emergency_contact varchar(255), NOT NULL,
	emerg_con_tel_number1 int(10),
	emerg_extension1 int(10),
	emerg_con_tel_number2 int(10),
	emerg_extension2 int(10),
	emergency_contact_email varchar(50),
	question2 varchar(5) NOT NULL,
	date TIMESTAMP,
	Foreign Key (id) References user(id),
	PRIMARY KEY (id)
);

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	password varchar(50),
	status varchar(255),
	active BOOLEAN varchar (10),
	PRIMARY KEY (id)
);
