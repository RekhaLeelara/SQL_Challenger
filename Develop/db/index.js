// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const connection = require("./connection");

class sqlQueries{

  constructor(connection){
    this.connection = connection;
  }
  
  findAllDepartments(){
    return this.connection.promise().query("Select * from department;")
  }

  viewAllRoles(){
    return this.connection.promise().query("Select * from roles;")
  }

  viewAllEmployees(){
    return this.connection.promise().query("Select * from employee;")
  }


}

module.exports = new sqlQueries(connection);