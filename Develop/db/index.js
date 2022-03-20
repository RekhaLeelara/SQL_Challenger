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

  getDepartmentid(department){
    return this.connection.promise().query("Select id from department where names = '"+department+"';")
  }

  addRole(title, salary, department){

  this.connection.promise().query("INSERT INTO roles (title, salary, department_id) VALUES ('"+title+"','"+salary+"','"+department+"');")

  }

  addDepartment(departmentName){

    return this.connection.promise().query("INSERT INTO department (names) VALUES ('"+departmentName+"');")
  
    }


}

module.exports = new sqlQueries(connection);