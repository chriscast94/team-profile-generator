// Defines Manager class and exports it
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        //Super grabs the parent constructor link: https://css-tricks.com/what-is-super-in-javascript/
        super(name, id, email);
        this.office = office;
        this.role = "Manager"
    }
    getOffice() {
        return this.office;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;