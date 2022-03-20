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
var roleName ;
var salary ;

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

                inquirer.prompt(addRole).then((response) => {
                    console.log("first prompts");
                    roleName = response.roleName;
                    salary = response.salary;
                    console.log("name and salary"+roleName);
                    deptdata();

                })
                    addingRole();

                
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

function deptdata(){
                
sqlQuery.findAllDepartments().then(([data]) => {

    var arr = [];
    for (i=0;i<data.length;i++){
        arr[i]=data[i].names;
    }
    const choiceQuestion = [
        {
            type: 'list',
            message: "Which department would you like to add",
            choices: arr,
            name: 'Choice'
        },
    ]
    inquirer.prompt(choiceQuestion).then((response) => {
        input = response.Choice;
        console.log("user input: "+input);
    })
})
}

function addingRole(){
sqlQuery.addRole(roleName, salary, input).then(([data]) => {
    console.table(data);
})
}

init()

