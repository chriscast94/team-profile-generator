// Defines Intern class and exports it
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Super grabs the parent constructor link: https://css-tricks.com/what-is-super-in-javascript/
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;