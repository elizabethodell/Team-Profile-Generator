//imports employee 
const Employee = require('./Employee');

//the employee constructor also extends to the intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email); //get this info from the super constructor which Employee

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    //we need the role to be intern and override employee
    getRole() {
        return "Intern";
    }
}

//exports Intern
module.exports = Intern;