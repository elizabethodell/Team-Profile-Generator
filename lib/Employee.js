//intializes the employee constructor that will be used in intern, manager, and engineer

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    //gets name from user input
    getName() {
        return this.name;
    }

    //get employee id from user input
    getId() {
        return this.id;
    }

    //get employee email from user input
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

};
//can export employee constructor
  module.exports = Employee;