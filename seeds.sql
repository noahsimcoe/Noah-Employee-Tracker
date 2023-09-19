INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Finance"),
       ("Economics");

INSERT INTO role (title, department_id, salary)
VALUES ("Software Engineer Asc", 1, 75000.00),
       ("Software Engineer Adv", 1, 93000.00),
       ("Tech Manager", 1, 105000.00),
       ("Advertising Agent I", 2, 55000.00),
       ("Advertising Agent II", 2, 65000.00),
       ("Analyst Asc", 3, 60000.00),
       ("Analyst Adv", 3, 85000.00),
       ("Economist I", , 100000.00),
       ("Economist II", 1, 110000.00),
       ("Economist Lead", 1, 125000.00);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eli", "Stenstrom", 9),
VALUES ("Chase", "Hickman", 2),
VALUES ("Zackum", "Hohenstein", 3, 1),
VALUES ("Toby", "Young", 5),
VALUES ("Joel", "Brutlag", 1),
VALUES ("Cody", "White", 4, 1),
VALUES ("Adam", "Hollmann", 7),
VALUES ("Adam", "Mount", 8),
VALUES ("Jakeum", "Thompson", 10);
