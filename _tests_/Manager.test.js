const Manager = require('../lib/manager');

test('should show the office number', () => {
    const manager = new Manager("Chris", 09, 'test@email.com', 5);
    expect(manager.office).toBe(5);
});