user_iduser_idCREATE DATABASE ORG;
SHOW DATABASES;
USE ORG;


CREATE TABLE Worker (
	WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	FIRST_NAME CHAR(25),
	LAST_NAME CHAR(25),
	SALARY INT(15),
	JOINING_DATE DATETIME,
	DEPARTMENT CHAR(25)
);

INSERT INTO Worker 
	(WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
		(001, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR'),
		(002, 'Niharika', 'Verma', 80000, '14-06-11 09.00.00', 'Admin'),
		(003, 'Vishal', 'Singhal', 300000, '14-02-20 09.00.00', 'HR'),
		(004, 'Amitabh', 'Singh', 500000, '14-02-20 09.00.00', 'Admin'),
		(005, 'Vivek', 'Bhati', 500000, '14-06-11 09.00.00', 'Admin'),
		(006, 'Vipul', 'Diwan', 200000, '14-06-11 09.00.00', 'Account'),
		(007, 'Satish', 'Kumar', 75000, '14-01-20 09.00.00', 'Account'),
		(008, 'Geetika', 'Chauhan', 90000, '14-04-11 09.00.00', 'Admin');
        
        
        
Select * from Worker;


CREATE TABLE Bonus (
	WORKER_REF_ID INT,
	BONUS_AMOUNT INT(10),
	BONUS_DATE DATETIME,
	FOREIGN KEY (WORKER_REF_ID)
		REFERENCES Worker(WORKER_ID)
        ON DELETE CASCADE
);

INSERT INTO Bonus 
	(WORKER_REF_ID, BONUS_AMOUNT, BONUS_DATE) VALUES
		(001, 5000, '16-02-20'),
		(002, 3000, '16-06-11'),
		(003, 4000, '16-02-20'),
		(001, 4500, '16-02-20'),
		(002, 3500, '16-06-11');
Select * from Bonus;




#Questions

--  1.  Write an SQL query to fetch “FIRST_NAME” from the Worker table  in upper case using the alias name <WORKER_NAME>.  

        Select ucase(FIRST_NAME) as WORKER_NAME from Worker;
     
--  2.  Write an SQL query to print the first three characters of  FIRST_NAME from the Worker table.
   
        Select substr(FIRST_NAME,1,3) from Worker;
     
--  3.  Write an SQL query to print the FIRST_NAME from the Worker table after replacing ‘a’ with ‘A’.

        Select replace(FIRST_NAME,'a','A') from Worker;
     
--  4. Write an SQL query to print the FIRST_NAME and LAST_NAME from the Worker table into a single column COMPLETE_NAME. A space char should separate them.
        
        Select concat(FIRST_NAME, ' ',LAST_NAME) as COMPLETE_NAME from Worker;
        
--  5. Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from the Worker table.
       
       select * from Worker where FIRST_NAME NOT IN ("Vipul", "Satish");
	

--  6. Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.

      Select * from Worker where salary between 100000 and 500000;
      Select * from Worker where salary >= 100000 and salary<=500000;
      
--  7. Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.

	  Select concat(FIRST_NAME, ' ',LAST_NAME) as Full_Name , Salary from Worker where salary between 100000 and 500000;

--  8. Write an SQL query to fetch the no. of workers for each department in descending order.
      
      Select count(*) as no_of_worker from Worker group by DEPARTMENT order by no_of_worker desc; 

--  9. Write an SQL query to clone a new table from another table.
     
       Create table newTable select * from Worker;
	   Select * from newTable;

-- 10.  Write an SQL query to show the top n (say 10) records of a table.
      
      Select * from Worker order by salary desc limit 10;
      
-- 11.   Write an SQL query to fetch the first 50% of records from a table.

         Select  * from Worker where WORKER_ID <= (select  count(WORKER_ID)/2 from Worker);

-- 12   Write an SQL query to fetch the departments that have less than five people in them.

       Select department from Worker group by department having count(*)<5;
       
-- 13    Write an SQL query to print the name of employees having the highest salary in each department.


         Select concat(FIRST_NAME, ' ',LAST_NAME) from Worker   WHERE salary IN (SELECT max(salary) FROM Worker GROUP BY department) ;

--  14   Write an SQL query to fetch the names of workers who earn the highest salary
        
        Select  concat(FIRST_NAME, ' ',LAST_NAME) from Worker where salary = (Select max(salary) from Worker);

--  15   Write an SQL query to fetch departments along with the total salaries paid for each of them 
     
      Select department , sum(salary) from Worker group by department;

     
	
