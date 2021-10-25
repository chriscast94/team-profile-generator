const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeesArray = [];

// Ask questions regarding team members
const newTeamMember = () => {
    console.log('Add new employee information.')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Manager', 'Engineer', 'Intern']
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
};

function generateHTML() {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="team-cards row">
            <div class="card">
                <div class="card-body">`

    employeesArray.manager.foreach((managersArrayElements) => {
        html += `
                    <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${managersArrayElements.grabName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${managersArrayElements.grabRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${managersArrayElements.grabId()}</li>
                    <li class="list-group-item">Email: ${managersArrayElements.grabEmail()}</li>
                    <li class="list-group-item">Office Number: ${managersArrayElements.grabOffice()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })
    employeesArray.engineer.foreach((engineersArrayElements) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${engineersArrayElements.grabName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${engineersArrayElements.grabRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineersArrayElements.grabId()}</li>
                    <li class="list-group-item">Email: ${engineersArrayElements.grabEmail()}</li>
                    <li class="list-group-item">Github: ${engineersArrayElements.grabGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })

    employeesArray.intern.foreach((internsArrayElements) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${internsArrayElements.grabName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${internsArrayElements.grabRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internsArrayElements.grabId()}</li>
                    <li class="list-group-item">Email: ${internsArrayElements.grabEmail()}</li>
                    <li class="list-group-item">School: ${internsArrayElements.grabSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
    })
}

const init = () => {
    newTeamMember()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();
