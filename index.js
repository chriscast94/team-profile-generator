const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//const generateMarkdown = require('./dist/generateMarkdown');

//Arrays of all employees
const employeesArray = [];

//Arrays of employees
const managers = [];
const interns = [];
const engineers = [];



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
            //--------------------------------------------------------------------------
            if (role === 'Manager') {
                employee = new Manager(name, id, email, office);
                //push into managers array
                managers.push(employee);
                console.log(managers);
                //--------------------------------------------------------------------------
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                // push into intern array
                interns.push(employee);
                console.log(interns);
                //--------------------------------------------------------------------------
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                //push into engineer array?
                engineers.push(employee);
                console.log(engineers);
            }
            //push employee into the team array
            //necessary if above changes made?
            employeesArray.push(employee);
            console.log('Pushed into employee array');

            if (addEmployee) {
                return newTeamMember(employeesArray);
            } else {
                return employeesArray;
            }

        });
};

// //Develop HTML
function generateHTML() {
    console.log("GenerateHTML Entry for:", employeesArray);
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
    //---------------------Manager Section--------------------------------
    console.log(managers);
    managers.forEach((managerElement) => {
        html += `
                <div class="container">
<div class="team-cards row">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${managerElement.getName()}</h4>
            <h5 class="card-subtitle mb-2 text-muted">${managerElement.getRole()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerElement.getId()}</li>
                <li class="list-group-item">Email: ${managerElement.getEmail()}</li>
                <li class="list-group-item">Office Number: ${managerElement.getOffice()}</li>
            </ul>
        </div>
    </div>
</div>
</div>`;
    })

    //----------------------Engineer Section --------------------------------
    console.log(engineers);
    engineers.forEach((engineerElement) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${engineerElement.getName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${engineerElement.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineerElement.getId()}</li>
                    <li class="list-group-item">Email: ${engineerElement.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineerElement.getGithub()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
    })

    //-------------------------Intern Section--------------------------------------
    console.log(interns);
    interns.forEach((internsElements) => {
        html += `
        <div class="container">
    <div class="team-cards row">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${internsElements.getName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${internsElements.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${internsElements.getId()}</li>
                    <li class="list-group-item">Email: ${internsElements.getEmail()}</li>
                    <li class="list-group-item">School: ${internsElements.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
   </html>`;
        fs.writeFileSync('./dist/index.html', html, (err) => {
            console.error(err);
        })

    })
}

const init = () => {
    console.log("on load");
    newTeamMember()
        .then(() => {
            generateHTML();
            console.log('Successfully wrote to index.html')
        })
    // .then(() => console.log("Created team members"))
    // generatehtml function after newTeamMember
};

init();


// Addition assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
