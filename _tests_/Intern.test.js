const Intern = require('../lib/intern');

test('should show school they attend', () => {
    const intern = new Intern("Chris", 09, 'test@email.com', 'UCR');
    expect(intern.school).toBe("UCR");
});