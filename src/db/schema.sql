DROP DATABASE IF EXISTS socialmatch;

CREATE DATABASE socialmatch_db;

USE socialmatch_db;


CREATE TABLE dating(
    id INT NOT NULL AUTO_INCREMENT, 
    gender VARCHAR(10) NULL, 
    name VARCHAR(20) NULL, 
    age VARCHAR(2) NULL,
    occupation VARCHAR (100) NULL, 
    location VARCHAR(50) NULL
)

SELECT * FROM dating;