DROP DATABASE IF exists bamazon; 
CREATE database bamazon; 
use bamazon; 
create table products (
item_id INT,
product_name VARCHAR(50) NOT NULL, 
department_name VARCHAR(50) NOT NULL, 
price DECIMAL (10,2) NOT NULL, 
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)

);

INSERT INTO products ( item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Frosted Flakes", "Food", 2.99, 13);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Avengers: Infinity War", "Movies", 21.99, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Read Dead Redemption 2", "Game", 59.99, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Hot Cheetos", "Food", 1.99, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Jordan 12's", "Shoes", 209.99, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Clown Machete", "Halloween", 9.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Killer Clown Mask", "Halloween", 19.99, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Houston Texans Tickets", "Football", 59.99, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Houston Rockets Tickets", "Basketball", 99.99, 41);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Snickers", "Food", 1.49, 13);