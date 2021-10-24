const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");

//Develop team input using node and inquirer

const newEmployee = () => {
    console.log('Add new employee information.')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee role?',
            choices: ['Intern', 'Engineer']
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

        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of your employee?',
            when: (input) => input.role === 'Engineer'
        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the school of your intern attends?',
            when: (input) => input.role === 'Intern'
        },

        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add a new employee?',
            default: false
        },
    ])

}