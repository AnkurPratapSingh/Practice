-- SHOW DATABASES;  # To show databases in the system

-- CREATE DATABASE practiceDb; # To Create new  Database

-- DROP DATABASE practiceDb; # To delete the table

-- use  practiceDb; # To use a db
-- Select database(); # to check in which db

-- CREATE DATABASE pets;


-- Show tables;

-- # table Creation 

-- CREATE TABLE  cat( 
--    name varchar(20),
--    age int
--    );
--  # INSERTION 
-- insert into cat(name , age) values ('Catty',3),('ski',2);
-- select * from cat;

--    
--    




# Primary KEY


CREATE TABLE uniqueCat(
    cat_id int PRIMARY KEY,
    name  varchar(20) NOT NULL, 
    age int NOT NULL
    );
    
-- 2nd  way of declaring PK    
CREATE TABLE unique_cats2 (
	cat_id INT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (cat_id)
);


CREATE TABLE unique_cats3 (
    cat_id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY (cat_id)
);
insert into unique_cats3 (cat_id, name , age) values (6,'Catty',3);

insert into unique_cats3 ( name , age) values ('Catty',3);

SELECT * FROM unique_cats3;
drop table cat;




#CRUD Section 5

CREATE TABLE cats (
    cat_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
); 

INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
       
       
       -- Read 
select * from cats;
select name , breed , age from cats where age > 4;





