// Defines Engineer class and exports it
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Super grabs the parent constructor link: https://css-tricks.com/what-is-super-in-javascript/
        super(name, id, email);
        this.github = github;
        this.role = "Engineer"
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;