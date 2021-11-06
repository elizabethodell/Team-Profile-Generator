//imports employee 
const Employee = require('./Employee');

//the employee constructor also extends to the manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
            super(name, id, email); //get this info from the super constructor which Employee

            this.officeNumber = officeNumber;
        }


        //we need the role to be Manager and override employee
        getRole() {
            return "Manager";
        }
    }

//exports Manager
module.exports = Manager;