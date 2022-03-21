// Import required functions
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

//Global variables/constants
const PORT = process.env.PORT || 3001;
const app = express();
const sqlQuery = require('./db/index')
var inquirer = require('inquirer');
const e = require('express');
var input;
var arr = [];
var rolearr = [];
var managerarr = [];
var fetchRoleId;
var Choice;

//Department questions to enter user input
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


//Add department questions to enter user input
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


//Add Role to enter user input
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

//Add Employee questions to enter user input
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

//update role table questions to enter user input
const updateRole = [
    {
        type: 'input',
        name: 'updateRoleId',
        message: 'What is the role id to be updated?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Role Id is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'updateemployeeId',
        message: 'Enter the right employee id to update the role?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("employee id is mandatory");
            }
            return true;
        }
    },
]

//Generic questions to loop through
const genericQuest = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
        name: 'Choice'
    },
]


// Handling all prompts and logics
function init() {
    try {
        inquirer.prompt(genericQuest).then((response) => {
            console.log(response);

            // Handling logic when user choose option 'View All Departments'
            if (response.Choice == 'View All Departments') {
                sqlQuery.findAllDepartments().then(([data]) => {
                    console.table(data);
                })
                init()
            }

            // Handling logic when user choose option 'View All Roles'
            else if (response.Choice == 'View All Roles') {
                sqlQuery.viewAllRoles().then(([data]) => {
                    console.table(data);
                })
                init()
            }

            // Handling logic when user choose option 'View All Employees'
            else if (response.Choice == 'View All Employees') {
                sqlQuery.viewAllEmployees().then(([data]) => {
                    console.table(data);
                })
                init()
            }

            // Handling logic when user choose option 'Add Role'
            else if (response.Choice == 'Add Role') {
                sqlQuery.findAllDepartments().then(([data]) => {
                    for (i = 0; i < data.length; i++) {
                        arr[i] = data[i].names;
                    }
                })
                console.log("array data" + arr);

                inquirer.prompt(addRole).then((response) => {
                    sqlQuery.getDepartmentid(response.Choice).then(([data]) => {
                        console.table(data)
                        sqlQuery.addRole(response.roleName, response.salary, data[0].id);
                        init()
                    })
                })
            }

            // Handling logic when user choose option 'Add Department'
            else if (response.Choice == 'Add Department') {

                inquirer.prompt(addDept).then((response) => {
                    sqlQuery.addDepartment(response.deptName).then(([data]) => {
                        init()
                    })
                })
            }

            // Handling logic when user choose option 'Update Employee Role'
            else if (response.Choice == 'Update Employee Role') {
                inquirer.prompt(updateRole).then((response) => {
                    sqlQuery.updateEmployeeRole(response.updateRoleId, response.updateemployeeId).then(([data]) => {
                        init()
                    })
                })

            }

            // Handling logic when user choose option 'Add Employee'
            else if (response.Choice == 'Add Employee') {
                sqlQuery.viewAllRoles().then(([data]) => {
                    for (i = 0; i < data.length; i++) {
                        rolearr[i] = data[i].title;
                    }
                })

                sqlQuery.viewAllManagers().then(([data]) => {
                    for (i = 0; i < data.length; i++) {
                        managerarr[i] = data[i].first_name + " " + data[i].last_name;
                    }
                })

                inquirer.prompt(addEmployee).then((response) => {
                    splitArr = response.managerName.split(" ");
                    var fName = splitArr[0];
                    var lName = splitArr[1];
                    sqlQuery.getroleid(response.roleName).then(([data]) => {
                        fetchRoleId = data[0].id;
                    })
                    sqlQuery.viewAllManagerids(fName, lName).then(([data]) => {
                        sqlQuery.addEmployee(response.firstName, response.lastName, fetchRoleId, data[0].id);
                        init()
                    })
                })

            }
            else {
                console.log("GOOD BYE!! Thanks for using the application")
            }

        }
        )
    } catch (err) {
        console.log("Unable to display the data due to a problem");
    }

}

//initiating method init
init()


