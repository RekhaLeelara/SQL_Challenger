//Employee class to define common properties
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Getter method to invoke name
    getName() {
        return this.name;
    }
    //Getter method to invoke id
    getId() {
        return this.id;
    }

    //Getter method to invoke email
    getEmail() {
        return this.email;
    }

    //Getter method to invoke role
    getRole() // Returns 'Employee'
    {
        return 'Employee';
    }

}


module.exports = Employee;

