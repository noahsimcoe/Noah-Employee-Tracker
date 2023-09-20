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
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Add Department",
            "Remove Department",
            "View Total Utilized Budget By Department",
        ],
    },
]).then((answers) => {
    switch (answers.start) {
        case "View All Employees":
            viewAllEmployees();
            break;
        // case "View All Employees by Department":
        //     viewAllEmployeesByDepartment();
        //     break;
        // case "View All Employees By Manager":
        //     viewAllEmployeesByManager();
        //     break;
        case "Add Employee":
            addEmployee();
            break;
        // case "Remove Employee":
        //     removeEmployee();
        //     break;
        // case "Update Employee Role":
        //     updateEmployeeRole();
        //     break;
        // case "Update Employee Manager":
        //     updateEmployeeManager();
        //     break;
        case "View All Roles":
            viewAllRoles();
            break;
        // case "Add Role":
        //     addRole();
        //     break;
        // case "Remove Role":
        //     removeRole();
        //     break;
        case "View All Departments":
            viewAllDepartments();
            break;
        // case "Add Department":
        //     addDepartment();
        //     break;
        // case "Remove Department":
        //     removeDepartment();
        //     break;
        // case "View Total Utilized Budget By Department":
        //     viewTotlaUtilizedBudgetByDepartment();
        //     break;
        default:
            console.log("Please choose a correct action.");
            questions();
        }
    });
};

const viewAllEmployees = async () => {
        db.query('SELECT CONCAT (first_name, " ", last_name) AS employee FROM employee ORDER BY first_name ASC', function (err, results) {
            console.table(results);
          });
};

// viewAllEmployeesByDepartment()
// viewAllEmployeesByManager()


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

// removeEmployee()
// updateEmployeeRole()
// updateEmployeeManager()

const viewAllRoles = async () => {
    db.query('SELECT title, salary FROM role ORDER BY salary DESC', function (err, results) {
        console.table(results);
    });
}

// addRole()
// removeRole()


const viewAllDepartments = async () => {
    db.query('SELECT department_name FROM department ORDER BY department_name ASC', function (err, results) {
        console.table(results);
    });
}


// addDepartment()
// removeDepartment()
// viewTotlaUtilizedBudgetByDepartment()

questions();