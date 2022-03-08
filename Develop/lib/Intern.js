const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
//Getter method to invoke school method
  getSchool() {
    return this.school;
  }
  
//Getter method to invoke role method
  getRole() // Returns 'Employee'
  {
    return 'Intern';
  }

}

module.exports = Intern;
