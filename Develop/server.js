const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
const sqlQuery = require('./db/index')
var inquirer = require('inquirer');
data = [];
let choiceVal = [];
const { prompt } = require("inquirer");
var input;


var arr = [];
var roleName;
var salary;

var rolearr = [];
var managerarr = [];
var fetchRoleId;
var managerName = "";

// TODO: Create an array of questions for user input
const department = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Department is mandatory");
            }
            return true;
        }

    }
];

const addDept = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the name of the department',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("department name is mandatory");
            }
            return true;
        }

    }
]


const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("role is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("salary is mandatory");
            }
            return true;
        }

    },
    {
        type: 'list',
        message: "Which department would you like to add",
        choices: arr,
        name: 'Choice'
    },
];

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the first name of the employee?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("first name is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the last name of the employee?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("last name is mandatory");
            }
            return true;
        }

    },
    {
        type: 'list',
        message: "Which role would you like to assign?",
        choices: rolearr,
        name: 'roleName'
    },
    {
        type: 'list',
        message: "Which manager would you like the employee to map to?",
        choices: managerarr,
        name: 'managerName'
    }
];

//Generic questions to loop through
const genericQuest = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        name: 'Choice'
    },
]


// TODO: Create a function to initialize app
function init() {
    try {
        inquirer.prompt(genericQuest).then((response) => {
            console.log(response);
            if (response.Choice == 'View All Departments') {
                sqlQuery.findAllDepartments().then(([data]) => {
                    console.table(data);
                })
                init()
            }
            else if (response.Choice == 'View All Roles') {
                sqlQuery.viewAllRoles().then(([data]) => {
                    console.table(data);
                })
                init()
            }
            else if (response.Choice == 'View All Employees') {
                sqlQuery.viewAllEmployees().then(([data]) => {
                    console.table(data);
                })
                init()
            }

            else if (response.Choice == 'Add Role') {
                sqlQuery.findAllDepartments().then(([data]) => {
                    for (i = 0; i < data.length; i++) {
                        arr[i] = data[i].names;
                    }
                })
                console.log("array data" + arr);

                inquirer.prompt(addRole).then((response) => {
                    sqlQuery.getDepartmentid(input).then(([data]) => {
                        sqlQuery.addRole(response.roleName, response.salary, data[1].id);
                    })
                })
            }
            else if (response.Choice == 'Add Department') {
                
                inquirer.prompt(addDept).then((response) => {
                    sqlQuery.addDepartment(response.deptName).then(([data]) => {
                        console.table(data);
                    })
                })
            }
            else if (response.Choice == 'Add Employee') {
                sqlQuery.viewAllRoles().then(([data]) => {
                    for (i = 0; i < data.length; i++) {
                        rolearr[i] = data[i].title;
                    }
                })

                sqlQuery.viewAllManagers().then(([data]) => {
                    console.table(data);
                    for (i = 0; i < data.length; i++) {
                        managerarr[i] = data[i].first_name+" "+data[i].last_name;
                    }
                })

                console.log("array data" + managerarr);

                inquirer.prompt(addEmployee).then((response) => {
                    console.log(response);
                    splitArr = managerName.split(" ");
                    var fName = splitArr[1];
                    var lName = splitArr[2];
                    console.log("fName"+fName);
                    console.log("lName"+lName);
                    sqlQuery.getroleid(roleName).then(([data]) => {
                        console.table(data);
                        fetchRoleId = data[1].id;
                    })
                    sqlQuery.viewAllManagerids(fName, lName).then(([data]) => {
                        sqlQuery.addRole(firstName, lastName, fetchRoleId, data[1].id);
                    })
                })
            }

        }
        )
    } catch (err) {
        console.log("Department query not run due to a problem");
    }

}

// // Query database
// let deletedRow = 2;

// db.query(`DELETE FROM books WHERE id = ?`, deletedRow,(err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// // Query database
// db.query('SELECT * FROM departments', function (err, results) {
//   console.log(results);
// });

function deptdata() {

    sqlQuery.findAllDepartments().then(([data]) => {

        var arr = [];
        for (i = 0; i < data.length; i++) {
            arr[i] = data[i].names;
        }

        inquirer.prompt(choiceQuestion).then((response) => {
            input = response.Choice;
            console.log("user input: " + input);
        })
    })
}

function addingRole() {
    sqlQuery.addRole(roleName, salary, input).then(([data]) => {
        console.table(data);
    })
}

init()


