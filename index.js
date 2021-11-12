//inititalize the programs
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//initialize all the team member profiles
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// //generates an html file
const generateHTML = require("./src/generateHTML.js");
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/generateHTML');

//create empty team array to push all team members too
const teamMembers = [];
const idArray = [];

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
            idArray.push(id);
            console.log(manager);
            addingEmployee();
        })
};

const addingEngineer = () => {
    inquirer.prompt(
        [
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

        ]
    )
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(engineer)
            idArray.push(answers.id)
            addingEmployee();
        })
};

const addingIntern = () => {
    inquirer.prompt(
        [
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
                message: 'What is the interns school?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Enter the interns school!")
                    }
                }
            },

        ]
    )
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
            idArray.push(answers.id)
            addingEmployee();
        })
}

function addingEmployee() {
    inquirer.prompt(
        [
            {
                type: 'checkbox',
                name: 'role',
                message: 'Choose your employees role or build your team',
                choices: ['Engineer', 'Intern', 'Build Team']
            },

        ])

        .then(choice => {
            console.log(choice);
            if (choice.role[0] === "Intern") {
                addingIntern();
            } else if (choice.role[0] === "Engineer") {
                addingEngineer();
            } else {
                writeFile();
            }
        })

};

// function to generate HTML page file using file system 
const writeFile = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8')
    // fs.writeFile('./dist/index.html', data, err => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     } else {
    //         console.log("Your team profile has been successfully created! Please check out the index.html")
    //     }
    // })
};


addingManager()
    // .then(addingEmployee())
    // .then(teamMembers => {
    //     return generateHTML(teamMembers);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .catch(err => {
    //     console.log(err);
    // });



