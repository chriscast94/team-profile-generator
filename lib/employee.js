// Defines employee class and exports it
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    grabName() {
        return this.name;
    }

    grabId() {
        return this.id;
    }

    grabEmail() {
        return this.email;
    }

    grabRole() {
        return this.role;
    }
}

module.exports = Employee;