

DELIMITER //

CREATE PROCEDURE selectdataUser()
BEGIN
  SELECT * FROM user;
END //

DELIMITER ;
call selectdataUser();


