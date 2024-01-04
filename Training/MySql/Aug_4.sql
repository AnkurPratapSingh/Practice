Create database shop;
use  shop;
CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);
 
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
 
INSERT INTO customers (first_name, last_name, email) 
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');
       
       
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016-02-10', 99.99, 1),
       ('2017-11-11', 35.50, 1),
       ('2014-12-12', 800.67, 2),
       ('2015-01-03', 12.50, 2),
       ('1999-04-11', 450.25, 5);  
       
	SELECT * FROM customers;
    
    SELECT * FROM orders 
WHERE customer_id = (SELECT id FROM customers WHERE last_name = 'George');
 
#Cross Join
SELECT * FROM customers, orders;

Select * from customers c join orders o on c.id = o.customer_id;


SELECT *
FROM orders LEFT JOIN customers ON orders.customer_id = customers.id;


SELECT first_name, last_name, order_date, amount
FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id;

Drop table orders;

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE,
    amount DECIMAL(8 , 2 ),
    customer_id INT,
    FOREIGN KEY (customer_id)
        REFERENCES customers (id)
        ON DELETE CASCADE
);



#Practice Exercise


create table students(
    id int primary key auto_increment,
    first_name varchar(50)
  );
  Drop table students;
  create table papers(
    paper_id int primary key auto_increment,
    title varchar(50),
    grade int ,
    student_id int ,
    foreign key(student_id) references students(id)
  );
  Drop table papers;
  
  
  
  
  Select * from students;
 Select * from orders;

  
  INSERT INTO students (first_name) VALUES 
('Caleb'), ('Samantha'), ('Raj'), ('Carlos'), ('Lisa');
 
INSERT INTO papers (student_id, title, grade ) VALUES
(1, 'My First Book Report', 60),
(1, 'My Second Book Report', 75),
(2, 'Russian Lit Through The Ages', 94),
(2, 'De Montaigne and The Art of The Essay', 98),
(4, 'Borges and Magical Realism', 89);



  Select  s.first_name , p.title,p.grade  from students s join papers p on s.id = p.student_id; 
 Select  s.first_name , p.title,p.grade  from students s left join papers p on s.id = p.student_id; 
  Select  s.first_name , ifnull(p.title,'missing'),ifnull(p.grade,0)  from students s left join papers p on s.id = p.student_id; 
   Select  s.first_name , ifnull(avg(p.grade),0) from students s left join papers p on s.id = p.student_id group by first_name; 
   
      Select  s.first_name , ifnull(avg(p.grade),0) as average ,
      case 
       when avg(p.grade) >=75 then 'passed'
       else 'failed' 
       end as status
      from students s left join papers p on s.id = p.student_id group by first_name; 
      
      
      #Tv challenge
      
      create database  Tv_show;
      use Tv_show;
      
      
      CREATE TABLE reviewers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);
 
CREATE TABLE series (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    released_year YEAR,
    genre VARCHAR(100)
);
 
CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating DECIMAL(2 , 1 ),
    series_id INT,
    reviewer_id INT,
    FOREIGN KEY (series_id)
        REFERENCES series (id),
    FOREIGN KEY (reviewer_id)
        REFERENCES reviewers (id)
);
 
INSERT INTO series (title, released_year, genre) VALUES
    ('Archer', 2009, 'Animation'),
    ('Arrested Development', 2003, 'Comedy'),
    ("Bob's Burgers", 2011, 'Animation'),
    ('Bojack Horseman', 2014, 'Animation'),
    ("Breaking Bad", 2008, 'Drama'),
    ('Curb Your Enthusiasm', 2000, 'Comedy'),
    ("Fargo", 2014, 'Drama'),
    ('Freaks and Geeks', 1999, 'Comedy'),
    ('General Hospital', 1963, 'Drama'),
    ('Halt and Catch Fire', 2014, 'Drama'),
    ('Malcolm In The Middle', 2000, 'Comedy'),
    ('Pushing Daisies', 2007, 'Comedy'),
    ('Seinfeld', 1989, 'Comedy'),
    ('Stranger Things', 2016, 'Drama');
 
 select * from reviewers;
INSERT INTO reviewers (first_name, last_name) VALUES
    ('Thomas', 'Stoneman'),
    ('Wyatt', 'Skaggs'),
    ('Kimbra', 'Masters'),
    ('Domingo', 'Cortes'),
    ('Colt', 'Steele'),
    ('Pinkie', 'Petit'),
    ('Marlon', 'Crafford');
    
 
INSERT INTO reviews(series_id, reviewer_id, rating) VALUES
    (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
    (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
    (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
    (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
    (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
    (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
    (7,2,9.1),(7,5,9.7),
    (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
    (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
    (10,5,9.9),
    (13,3,8.0),(13,4,7.2),
    (14,2,8.5),(14,3,8.9),(14,4,8.9);
        
        select * from reviews;
        
        select  s.title , r.rating from series s join reviews r on s.id= r.series_id; 
	   select  s.title , avg(r.rating) from series s join reviews r on s.id= r.series_id group by title; 
       	   select  s.genre , avg(r.rating) from series s join reviews r on s.id= r.series_id group by genre; 

SELECT 
    first_name,
    last_name,
    COUNT(rating) AS count,
    IFNULL(MIN(rating), 0) AS min,
    IFNULL(MAX(rating), 0) AS max,
    ROUND(IFNULL(AVG(rating), 0), 2) AS average,
    CASE
        WHEN COUNT(rating) >= 10 THEN 'POWERUSER'
        WHEN COUNT(rating) > 0 THEN 'ACTIVE'
        ELSE 'INACTIVE'
    END AS status
FROM
    reviewers
        LEFT JOIN
    reviews ON reviewers.id = reviews.reviewer_id
GROUP BY first_name , last_name;
 
 
 
 SELECT s.title , r.rating , concat(re.first_name,re.last_name) FROM reviews r join series  s on r.series_id = s.id 
  join reviewers re on r.reviewer_id = re.id ;
  
  
 select  s.title , r.rating from series s join reviews r on s.id= r.series_id; 

SELECT title, AVG(rating),COUNT(rating) AS review FROM full_reviews 
GROUP BY title HAVING COUNT(rating) > 1;
        




