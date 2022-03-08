const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officenumber) {
    super(name, id, email);
    this.officenumber = officenumber;
  }
//Getter method to invoke officenumber method
  getOfficeNumber() // Returns 'Employee'
  {
    return this.officenumber;
  }

//Getter method to invoke role method
  getRole() // Returns 'Employee'
  {
    return 'Manager';
  }

}

module.exports = Manager;
