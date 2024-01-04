create table people ( firstName varchar(20), lastName varchar(20) , age int);

insert into people(firstName , lastName ,age) values ('Ank','Singh',23),('sk','kes',22);

select * from people;

create table Employee ( 
   id int primary key auto_increment,
   first_name varchar(20) not null,
   middle_name varchar(20),
   ladt_name varchar(20) not null,
   age int not null,
   current_status varchar(25) not null default 'employed'
   );
   
   INSERT INTO Employee(first_name, ladt_name, age) VALUES
('Dora', 'Smith', 58);

select * from Employee;
   desc  Employee;