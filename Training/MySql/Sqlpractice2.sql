CREATE TABLE people (
	name VARCHAR(100),
    birthdate DATE,
    birthtime TIME,
    birthdt DATETIME
);
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Elton', '2000-15-255', '11:00:00', '2000-12-25 11:00:00');
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Lulu', '1985-04-11', '90:4:10', '1985-04-11 9:45:10');
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Juan', '2020-08-15', '23:59:00', '2020-08-15 23:59:00');

Select * from people;SELECT CURTIME();
 
SELECT CURDATE();
 
SELECT NOW();
 
INSERT INTO people (name, birthdate, birthtime, birthdt)
VALUES ('Hazel', CURDATE(), CURTIME(), NOW());

SELECT 
 DAY(curdate()),
    DAYOFWEEK(curdate()),
    DAYOFYEAR(now()) , Year(curdate());
    
    SELECT 
    birthtime,
    HOUR(birthtime),
    MINUTE(birthtime)
FROM people;

SELECT birthdt, DATE_FORMAT(birthdt, 'BORN ON: %e') FROM people;


Select curdate()- interval 1 year;


CREATE TABLE captions2 (
  text VARCHAR(150),
  created_at TIMESTAMP default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


select date_format(curdate(),'%c/%d/%Y');
SELECT DATE_FORMAT("2017-06-15", "%W %M %e %Y");

select date_format(now(),'%M %D at %l:%i');

Create table tweet( 
 username varchar(50),
 content varchar(200),
 createdat datetime default now()
 );
 insert into tweet(username,content) values ('Ank','good look');
 
 Select * from tweet;
 Desc tweet;
 Drop table tweet;


