// TODO: Include packages needed for this application
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generatePage.js');
var map = new Map();
var engCount = 0;
var internCount = 0;
let data = {};
engineerRes = [];
let man;
var emailValidator = require("email-validator");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'ManagerName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Manager name is mandatory");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'manEmployeeId',
        message: 'What is the manager employeeid',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Manager employeeid is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'manEmailAddress',
        message: 'What is the manager email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Manager email address is mandatory");
            }
            return true;
        },
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'manOfficeNumber',
        message: 'What is the manager office number?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Manager office number is mandatory");
            }
            return true;
        }
    },
];

//Generic questions to loop through
const genericQuest = [
    {
        type: 'list',
        message: "Which one of the following do you want to choose? ",
        choices: ['Engineer', 'Intern', 'Exit application'],
        name: 'role'
    }
]

//Questions for engineer role
const engineerQuest = [
    {
        type: 'input',
        message: 'What is the engineer name?',
        name: 'engineerName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Engineer name is mandatory");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'engEmployeeId',
        message: 'What is the engineer employeeid',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Engineer id is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'engEmailAddress',
        message: 'What is the engineer email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Engineer email is mandatory");
            }
            return true;
        },
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'engGitHubName',
        message: 'What is the engineer github name?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Engineer github is mandatory");
            }
            return true;
        }
    },
];


//Questions for Intern role
const internQuest = [
    {
        type: 'input',
        message: 'What is the intern name?',
        name: 'InternName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Intern name is mandatory");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'intEmployeeId',
        message: 'What is the intern employeeid',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Intern employee id is mandatory");
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'intEmailAddress',
        message: 'What is the intern email address?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Intern email address is mandatory");
            }
            return true;
        },
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'What is the intern school name?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Intern school is mandatory");
            }
            return true;
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
}



// TODO: Create a function to initialize app
function init() {
    try {
        inquirer.prompt(questions).then((response) => {

            console.log(response);
            man = new Manager(response.ManagerName, response.manEmployeeId, response.manEmailAddress, response.manOfficeNumber);
            chooseOption();
        }
        )
    } catch (err) {
        console.log("Readme file not created due to a problem");
    }

}

//choose option Engineer or Intern
function chooseOption() {
    inquirer.prompt(genericQuest).then((response) => {
        try {
            if (response.role == 'Engineer') {
                engineer();
            }
            else if (response.role == 'Intern') {
                intern();
            }
            else if (response.role == 'Exit application'){
                console.log("Logging data");
                let finahtmldata = generateMarkdown(man, "other");
                console.log("finalhtml: "+finahtmldata);
                writeToFile('../index.html', finahtmldata);
            }
            else{

            }
        }catch(error){

        }
})
}


//create html for engineer role
function engineer() {
    try {
        inquirer.prompt(engineerQuest).then((engineerRes) => {
            let eng = new Engineer(engineerRes.engineerName, engineerRes.engEmployeeId, engineerRes.engEmailAddress, engineerRes.engGitHubName);
            let savedData = generateMarkdown(eng, "engineer");
            chooseOption();
        })
    }
    catch (error) {

    }
}

//create html for intern role
function intern() {
    try {
        inquirer.prompt(internQuest).then((internRes) => {
            let eng = new Intern(internRes.InternName, internRes.intEmployeeId, internRes.intEmailAddress, internRes.intSchool);
            let savedData = generateMarkdown(eng, "intern");
            chooseOption();
        })
    }
    catch (error) {
    }
}

// Function call to initialize app
init();