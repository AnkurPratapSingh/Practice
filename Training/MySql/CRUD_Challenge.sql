CREATE DATABASE shirts_db;
USE  shirts_db;
CREATE TABLE shirts(
shirt_id INT AUTO_INCREMENT PRIMARY KEY,
article VARCHAR(25),
color  VARCHAR(25),
shirt_size VARCHAR(25),
last_worn INT);

DESC shirts;
INSERT INTO shirts (article, color, shirt_size, last_worn)  
VALUES 
	('t-shirt', 'white', 'S', 10),
	('t-shirt', 'green', 'S', 200),
	('polo shirt', 'black', 'M', 10),
	('tank top', 'blue', 'S', 50),
	('t-shirt', 'pink', 'S', 0),
	('polo shirt', 'red', 'M', 5),
	('tank top', 'white', 'S', 200),
	('tank top', 'blue', 'M', 15);
 
SELECT * FROM  shirts; 

SELECT article , color FROM shirts;

update shirts set shirt_size = 'L' where article = 'polo shirt';

update shirts set last_worn =0 where last_worn >15;

update shirts set shirt_size = 'XS' , color = 'off white' where color='white';


DELETE from shirts where last_worn =200;

DELETE FROM shirts;
DROP TABLE shirts;

select char_length(article),article from shirts;


desc cats;

select * from cats;

Create database Datatypes;
use Datatypes;
