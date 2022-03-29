// Include packages needed for this application
const inquirer = require('inquirer');
const connection = require("./connection");


class sqlQueries{

  constructor(connection){
    this.connection = connection;
  }

    //Query to retrieve all department names
    deleteDepartment(tableName, id){
      return this.connection.promise().query("DELETE FROM "+tableName+" WHERE id = '"+id+"';")
    }

    deleteRole(tableName, id){
      return this.connection.promise().query("DELETE FROM "+tableName+" WHERE id = '"+id+"';")
    }

    deleteEmployee(tableName, id){
      return this.connection.promise().query("DELETE FROM "+tableName+" WHERE id = '"+id+"';")
    }
  
  //Query to retrieve all department names
  findAllDepartments(){
    return this.connection.promise().query("Select * from department;")
  }

  //Query to retrieve all role details
  viewAllRoles(){
    return this.connection.promise().query("Select * from roles;")
  }

  //Query to retrieve all employee details
  viewAllEmployees(){
    return this.connection.promise().query("Select * from employee;")
  }

  //Query to retrieve the role id based on the title
  getroleid(title){
    return this.connection.promise().query("Select id from roles where title = '"+title+"';")
  }

  //Query to retrieve the department id based on the department name
  getDepartmentid(department){
    return this.connection.promise().query("Select id from department where names = '"+department+"';")
  }

  //Query to add new role
  addRole(title, salary, department){
  this.connection.promise().query("INSERT INTO roles (title, salary, department_id) VALUES ('"+title+"','"+salary+"','"+department+"');")
  }

  //Query to add new employee
  addEmployee(firstName, lastName, fetchRoleId, managerId){
    this.connection.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('"+firstName+"','"+lastName+"','"+fetchRoleId+"','"+managerId+"');")
    }

  //Query to retrieve all manager details
  viewAllManagers(fName, lName){
    return this.connection.promise().query("select first_name, last_name from employee join roles on employee.role_id = roles.id where roles.title = 'Manager';")
  }

  //Query to retrieve manager id based on the first name and last name
  viewAllManagerids(fName, lName){
    return this.connection.promise().query("select id from employee where first_name = '"+fName+"' and last_name = '"+lName+"' ;")
  }

  //Query to add new department
  addDepartment(departmentName){
    return this.connection.promise().query("INSERT INTO department (names) VALUES ('"+departmentName+"');")
    }

//Query to update employee role id based on the employee id
    updateEmployeeRole(roleid, employeeid){
      return this.connection.promise().query("UPDATE employee SET role_id = '"+roleid+"' where id='"+employeeid+"' ;") 
    }
}

module.exports = new sqlQueries(connection);