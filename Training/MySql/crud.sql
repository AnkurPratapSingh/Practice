--  Crud Exercise 

# READ 
select * from cats;
#  Get the cat_id from cats

select cat_id from cats;

#  Get the name and breed from cats

select name , breed from cats;

#  Get the name and age from cats having breed Tabby

select name ,age from cats where breed ='Tabby';

#  Get the cat_id and age from cats having both value same

select cat_id ,age from cats where cat_id = age;




-- UPDATE

update cats set age = 10 where name = 'Misty';

UPDATE cats SET age=122 WHERE name='egg';
select * from cats;

select database();

SELECT * FROM cats WHERE name='Jackson'; 
set SQL_SAFE_UPDATES = 0;
UPDATE cats SET name='Jack' WHERE name='Jackson'; 
select * from cats;

delete from cats where age>100;
select * from cats;


-- Delete all 4 year old cats:

DELETE FROM cats WHERE age=4;

-- Delete ALL data 

DELETE FROM cats;



