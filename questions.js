const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => inquirer.prompt([
    {
        name: "oo",
        type: "input",
        message: "please _"
    },
    {
        name: "ii",
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["None", "mit", "apache", "gpl", "agpl"],
    },
]);

questions();