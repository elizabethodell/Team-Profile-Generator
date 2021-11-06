//imports employee 
const Employee = require('./Employee');

//the employee constructor also extends to the engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email); //get this info from the super constructor which Employee

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    //we need the role to be engineer and override employee
    getRole() {
        return "Engineer";
    }
}

//exports Engineer
module.exports = Engineer;