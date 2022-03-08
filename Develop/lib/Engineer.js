const Employee = require('./Employee');

//Engineer class 
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
//Getter method to invoke github method
  getGithub() {
    return this.github;
  }
//Getter method to invoke role
  getRole() // Returns 'Employee'
  {
    return 'Engineer';
  }

}

module.exports = Engineer;

