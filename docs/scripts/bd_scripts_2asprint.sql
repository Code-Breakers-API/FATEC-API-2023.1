CREATE DATABASE agrojaia;

USE agrojaia;

CREATE TABLE products (
	id INT PRIMARY KEY,
	name VARCHAR(100),
	description VARCHAR(255)
);

CREATE TABLE rules (
	id INT PRIMARY KEY,
	rule VARCHAR(255) NOT NULL,
	product_id INT,
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE supplier (
	id INT PRIMARY KEY,
	name VARCHAR(100) NULL,
	cnpj VARCHAR(14) NULL,
	adress VARCHAR(255) NULL,
	phone VARCHAR(15) NULL,
	product_id INT,
	FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE carrier (
	id INT PRIMARY KEY,
	name VARCHAR(56) NULL,
	freight_type VARCHAR(56),
    supplier_id INT,
	FOREIGN KEY (supplier_id) REFERENCES supplier(id)
);

CREATE TABLE status_order (
	id INT PRIMARY KEY,
    order_status VARCHAR(10)
);

CREATE TABLE report_order (
	id INT PRIMARY KEY,
	order_number INT DEFAULT NULL,
	product_description VARCHAR(255),
	order_date DATETIME,
    product_quantity VARCHAR(56),
    volume_quantity VARCHAR(56),
    delivery_date TIMESTAMP,
    tracking_code INT,
    supplier_id INT,
    carrier_id INT,
    id_status INT,
	FOREIGN KEY (supplier_id) REFERENCES supplier(id),
	FOREIGN KEY (carrier_id) REFERENCES carrier(id),
    FOREIGN KEY (id_status) REFERENCES status_order(id)
);

CREATE TABLE profile_user (
	id INT PRIMARY KEY,
	function_user VARCHAR(24)
);

CREATE TABLE users (
	id INT PRIMARY KEY,
	name VARCHAR(100) NULL,
	cpf VARCHAR(10) NULL,
	register VARCHAR(255) NULL,
	password VARCHAR(15) NULL,
	profile_id INT,
	FOREIGN KEY (profile_id) REFERENCES profile_user(id)
);

CREATE TABLE technical_report (
	id INT PRIMARY KEY,
	date DATETIME,
	id_status INT,
    users_id INT,
    FOREIGN KEY (id_status) REFERENCES status_order(id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);

ALTER TABLE technical_report
ADD COLUMN report_receiving_analyze_id INT,
ADD CONSTRAINT fk_report_receiving_analyze_id
FOREIGN KEY (report_receiving_analyze_id) REFERENCES report_receiving_analyze(id);

CREATE TABLE report_receiving_analyze (
	id INT PRIMARY KEY,
    report_order_id INT,
    id_status INT,
    users_id INT,
    FOREIGN KEY (report_order_id) REFERENCES report_order(id),
    FOREIGN KEY (id_status) REFERENCES status_order(id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);



