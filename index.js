const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Create new folder and html file with all the team members information; Source: https://arpadt.com/articles/path-join-vs-path-resolve-nodejs
// const directory = path.resolve(__dirname, 'public');
// const outputPath = path.join(directory, 'team-members.html');

const employeesArray = [];

// Ask questions regarding team members
const newTeamMember = () => {
    console.log('Add new employee information.')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Intern', 'Engineer', 'Manager']
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter the the id number of the employee'
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your employee?'
        },

        // Asks this question when the Engineer class is chosen
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of your employee?',
            when: (input) => input.role === 'Engineer'
        },

        // Asks this question when the Intern class is chosen
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of your intern attends?',
            when: (input) => input.role === 'Intern'
        },

        // Asks this question when the Manager class is chosen
        {
            type: 'input',
            name: 'office',
            message: 'What is your office Number?',
            when: (input) => input.role === 'Manager'
        },

        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add a new employee?',
            default: false
        },
    ])
        .then(answers => {
            let { name, id, email, role, github, school, office, addEmployee } = answers;
            let employee;

            if (role === 'Manager') {
                employee = new Manager(name, id, email, office);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            }
            //push employee into the team array
            employeesArray.push(employee);

            if (addEmployee) {
                return newTeamMember(employeesArray);
            } else {
                return employeesArray;
            }

        });


}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("index.html", markdown(data));
        // then (() => console.log("Congratulations!\nSuccessfully created and wrote new README.md file."))
    })
};