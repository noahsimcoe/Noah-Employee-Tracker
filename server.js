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
        //     break;
        // case "View All Employees by Department":
        //     viewAllEmployeesByDepartment();
        //     break;
        // case "View All Employees By Manager":
        //     viewAllEmployeesByManager();
        //     break;
        // case "Add Employee":
        //     addEmployee();
        //     break;
        // case "Remove Employee":
        //     removeEmployee();
        //     break;
        // case "Update Employee Role":
        //     updateEmployeeRole();
        //     break;
        // case "Update Employee Manager":
        //     updateEmployeeManager();
        //     break;
        // case "View All Roles":
        //     viewAllRoles();
        //     break;
        // case "Add Role":
        //     addRole();
        //     break;
        // case "Remove Role":
        //     removeRole();
        //     break;
        // case "View All Departments":
        //     viewAllDepartments();
        //     break;
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
        }
    });
};

const viewAllEmployees = async () => {
        // const sql = `SELECT first_name, last_name FROM employee ORDER BY first_name ASC`;
        // console.log(db.query(sql));
        db.query('SELECT first_name, last_name FROM employee ORDER BY first_name ASC', function (err, results) {
            console.table(results);
          });
};

// viewAllEmployeesByDepartment()
// viewAllEmployeesByManager()
// addEmployee()
// removeEmployee()
// updateEmployeeRole()
// updateEmployeeManager()
// viewAllRoles()
// addRole()
// removeRole()
// viewAllDepartments()
// addDepartment()
// removeDepartment()
// viewTotlaUtilizedBudgetByDepartment()

questions();