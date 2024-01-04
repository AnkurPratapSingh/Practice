CREATE TABLE palindromes2 (
  word VARCHAR(100),
  CONSTRAINT word_is_palindrome CHECK(REVERSE(word) = word)
);


CREATE TABLE companies (
  purchase_price INT NOT NULL,
  sale_price INT NOT NULL
);
Drop table companies;

ALTER TABLE companies 
ADD COLUMN phone VARCHAR(15);
 
ALTER TABLE companies
ADD COLUMN employee_count INT NOT NULL DEFAULT 1;

ALTER TABLE suppliers RENAME TO companies;


ALTER TABLE companies
MODIFY company_name VARCHAR(100) DEFAULT 'unknown';


ALTER TABLE suppliers
CHANGE business biz_name VARCHAR(50);