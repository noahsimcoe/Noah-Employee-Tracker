DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(5,2),
    FOREIGN KEY INT (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    FOREIGN KEY INT (role_id)
        REFERENCES role(id)
        ON DELETE SET NULL
    FOREIGN KEY INT (manager_id)
        REFERENCES emploter(id)
        ON DELETE SET NULL
);
