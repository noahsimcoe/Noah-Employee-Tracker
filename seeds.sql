INSERT INTO department(department_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Finance"),
       ("Economics");

INSERT INTO role(title, department_id, salary)
VALUES ("Software Engineer Asc", 1, 75000),
       ("Software Engineer Adv", 1, 93000),
       ("Tech Manager", 1, 105000.00),
       ("Advertising Agent I", 2, 55000.00),
       ("Advertising Agent II", 2, 65000.00),
       ("Analyst Asc", 3, 60000.00),
       ("Analyst Adv", 3, 85000.00),
       ("Economist I", 4, 100000.00),
       ("Economist II", 4, 110000.00),
       ("Economist Lead", 4, 125000.00);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Eli", "Stenstrom", 9, null),
       ("Chase", "Hickman", 2, 1),
       ("Zackum", "Hohenstein", 3, 1),
       ("Toby", "Young", 5, 1),
       ("Joel", "Brutlag", 1, 1),
       ("Cody", "White", 4, 1),
       ("Adam", "Hollmann", 7, 1),
       ("Adam", "Mount", 8, 1),
       ("Jakeum", "Thompson", 10, 1);
