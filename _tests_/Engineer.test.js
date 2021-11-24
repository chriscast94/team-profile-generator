const Engineer = require('../lib/engineer');

test('should show github user name', () => {
    const engineer = new Engineer("Chris", 09, 'test@email.com', 'chriscast94');
    expect(engineer.github).toBe("chriscast94");
});