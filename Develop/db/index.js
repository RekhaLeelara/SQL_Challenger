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

  getroleid(title){
    return this.connection.promise().query("Select id from roles where title = '"+title+"';")
  }

  getDepartmentid(department){
    return this.connection.promise().query("Select id from department where names = '"+department+"';")
  }

  addRole(title, salary, department){

  this.connection.promise().query("INSERT INTO roles (title, salary, department_id) VALUES ('"+title+"','"+salary+"','"+department+"');")

  }

  addEmployee(firstName, lastName, fetchRoleId, managerId){

    this.connection.promise().query("INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES ('"+firstName+"','"+lastName+"','"+fetchRoleId+"','"+managerId+"');")
  
    }

  viewAllManagers(fName, lName){
    return this.connection.promise().query("select first_name, last_name from employee join roles on employee.role_id = roles.id where roles.title = 'Manager';")
  }

  viewAllManagerids(fName, lName){
    return this.connection.promise().query("select first_name, last_name from employee where first_name = '"+fName+"' and last_name = '"+lName+"' ;")
  }

  addDepartment(departmentName){

    return this.connection.promise().query("INSERT INTO department (names) VALUES ('"+departmentName+"');")
  
    }


}

module.exports = new sqlQueries(connection);