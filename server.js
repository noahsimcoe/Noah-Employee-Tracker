// required imports
const inquirer = require("inquirer");
const db = require("./config/connection");

// first starter prompt of the application
const questions = () => { inquirer.prompt([
    {
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Add Department",
            "Remove Department",
            "View Total Budget By Department",
        ],
    },
]).then((answers) => {
    switch (answers.start) {
        case "View All Employees":
            viewAllEmployees();
            break;
        case "View All Employees by Department":
            viewAllEmployeesByDepartment();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Remove Employee":
            removeEmployee();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        case "View All Roles":
            viewAllRoles();
            break;
        case "Add Role":
            addRole();
            break;
        case "Remove Role":
            removeRole();
            break;
        case "View All Departments":
            viewAllDepartments();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Remove Department":
            removeDepartment();
            break;
        case "View Total Budget By Department":
            viewTotalBudgetByDepartment();
            break;
        default:
            console.log("Please choose a correct action.");
        }
    });
};

const viewAllEmployees = async () => {
        db.query('SELECT employee.id, CONCAT (employee.first_name, " ", employee.last_name) AS employee, role.title FROM employee INNER JOIN role ON employee.role_id = role.id ORDER BY id ASC', function (err, results) {
            console.table(results);
            questions();
          });
};

const removeEmployee = () => {
    inquirer.prompt([
        {
            name: "employee_id",
            type: "input",
            message: "Enter the employee ID of the employee you would like to remove:",
        },
]).then((answer) => {
    let newData = [answer.employee_id]
    db.query('DELETE FROM employee WHERE id = ?', newData, (err, results) => {
        viewAllEmployees();
    });
})};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "role",
            type: "input",
            message: "What is the Role ID of the employees's role?"
        },
        {
            name: "manager",
            type: "input",
            message: "What is the Manager ID of the employees's manager?"
        },
]).then((answer) => {
    let newData = [answer.first_name, answer.last_name, answer.role, answer.manager]
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', newData, (err, results) => {
        viewAllEmployees();
    });
})};

const removeRole = () => {
    inquirer.prompt([
        {
            name: "role_id",
            type: "input",
            message: "Enter the role ID of the role you would like to remove:",
        },
]).then((answer) => {
    let newData = [answer.role_id]
    db.query('DELETE FROM role WHERE id = ?', newData, (err, results) => {
        viewAllRoles();
    });
})};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: "employee_id",
            type: "input",
            message: "What is the employee's ID?",
        },
        {
            name: "role_id",
            type: "input",
            message: "What is the ID of the new role?",
        },
    ]).then((answer) => {
        let newData = [answer.role_id, answer.employee_id]
        db.query('UPDATE employee SET role_id = ? WHERE id = ?', newData, (err, results) => {
            viewAllEmployees();
        });
})};

const viewAllEmployeesByDepartment = () => {
    inquirer.prompt([
        {
            name: "department_id",
            type: "input",
            message: "What is the ID of the department?",
        },
]).then((answer) => {
    let newData = [answer.department_id]
    db.query('SELECT CONCAT (employee.first_name, " ", employee.last_name) AS employee_name FROM employee INNER JOIN role ON employee.role_id = role.id WHERE role.department_id = ?', newData, (err, results) => {
        console.table(results);
        questions();
    });
})};

const viewTotalBudgetByDepartment = () => {
    inquirer.prompt([
        {
            name: "department_id",
            type: "input",
            message: "What is the ID of the department you are looking for?",
        },
]).then((answer) => {
    let newData = [answer.department_id]
    db.query('SELECT SUM(salary) AS total_annual_salaries FROM role r INNER JOIN employee e ON r.id = e.role_id WHERE department_id = ?', newData, (err, results) => {
        console.table(results);
        questions();
    });
})};


const viewAllRoles = async () => {
    db.query('SELECT id, title, salary FROM role ORDER BY id DESC', function (err, results) {
        console.table(results);
        questions();
    });
}

const addRole = () => {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the new role?",
        },
        {
            name: "department_id",
            type: "input",
            message: "What is the department ID of the new role?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?"
        },
]).then((answer) => {
    let newData = [answer.title, answer.department_id, answer.salary]
    db.query('INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)', newData, (err, results) => {
        viewAllRoles();
    });
})};

const viewAllDepartments = async () => {
    db.query('SELECT id, department_name FROM department ORDER BY id ASC', function (err, results) {
        console.table(results);
        questions();
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            name: "department_name",
            type: "input",
            message: "What is the name of the new department?",
        },
]).then((answer) => {
    let newData = [answer.department_name]
    db.query('INSERT INTO department (department_name) VALUES (?)', newData, (err, results) => {
        viewAllDepartments();
    });
})};

const removeDepartment = () => {
    inquirer.prompt([
        {
            name: "department_id",
            type: "input",
            message: "Enter the department ID of the department you would like to remove:",
        },
]).then((answer) => {
    let newData = [answer.department_id]
    db.query('DELETE FROM department WHERE id = ?', newData, (err, results) => {
        viewAllDepartments();
    });
})};

questions();