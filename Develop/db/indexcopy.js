// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const connection = require("./connection");
const util = require("util");
var mysql = require("mysql2");
// Connect to database
var connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    port: 3306,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the inventory_db database.`)
);


class sqlQueries{



  
  findAllDepartments(){
    return this.connection.promise().query("Select * from department;")
  }

  viewAllRoles(){
    return this.connection.promise().query("Select * from roles;")
  }

  viewAllEmployees(){
    return this.connection.promise().query("Select * from employee;")
  }

  addRole(){

    // var sql = "select id, name from department"
    // return this.connection.promise().query("select id, names from department;");
    connection.query("SELECT id, names FROM department", function (err, result, fields) {
      if (err) throw err;
      return result;
    });

  }


}

module.exports = new sqlQueries();