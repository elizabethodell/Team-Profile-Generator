//inititalize the programs
const fs = require('fs');
const inquirer = require('inquirer');

//initialize all the team member profiles
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// //generates an html file
const generateHTML = require("./src/generateHTML.js");

//create empty team array to push all team members too
const teamMembers = [];

//start of adding a manager by user input
const addingManager = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Enter the managers name");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Enter the managers id");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?',
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log("Enter the managers email");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Enter the managers id");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("Enter the managers id");
                        return false;
                    }
                }
            },
        ])

        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            //push manager to team
            teamMembers.push(manager);
            console.log(manager);
        })
};

const addingEmployee = () => {
    inquirer.prompt(
        [
            {
                type: 'checkbox',
                name: 'role',
                message: 'Choose your employees role',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                name: 'name',
                message: 'What is the employees name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Enter an employees name");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'What is the employees id?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Enter an employees id");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'What is the employees email?',
                validate: function (email) {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log("Enter the employees email");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'school',
                message: 'Enter the interns school',
                when: (input) => input.role === "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!")
                    }
                }
            },

            {
                type: 'input',
                name: 'github',
                message: 'What is the employees github username?',
                when: (input) => input.role === 'Engineer',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Enter the employee's github username!")
                    }
                }
            },

            {
                type: 'confirm',
                name: 'confirmMoreEmployee',
                message: 'Do you want to add more employees?',
                default: false
            }
        ])
        .then(employeeData => {

            let { name, id, email, role, github, school, confirmMoreEmployee } = employeeData;
            let employee;

            if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            } else if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            }

            teamMembers.push(employee);

            if (confirmMoreEmployee) {
                return addingEmployee(teamMembers);
            } else {
                return teamMembers;
            }
        })

};

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
};


// addingManager()
    //.then
    (addingEmployee())
    // .then(teamMembers => {
    //     return generateHTML(teamMembers);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .catch(err => {
    //     console.log(err);
    // });



