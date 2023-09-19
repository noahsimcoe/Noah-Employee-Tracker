DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    department_id INT,
    salary DECIMAL(5,2),
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE SET NULL
    FOREIGN KEY (manager_id)
        REFERENCES emploter(id)
        ON DELETE SET NULL
);
