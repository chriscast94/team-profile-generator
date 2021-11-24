const Employee = require('../lib/employee');

test('should create a name', () => {
    const employee = new Employee("Chris", 09, 'test@email.com');
    expect(employee.name).toBe("Chris");
});