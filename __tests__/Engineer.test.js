const Engineer = require('../lib/Engineer.js');

//creates an engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Elizabeth', 16, 'liz@gmail.com', 'liz123');

    expect(engineer.github).toEqual(expect.any(String));

});

//github from getGithub()
test('gets engineer github name', () => {
    const engineer = new Engineer('Elizabeth', 16, 'liz@gmail.com', 'liz123');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//role from getRole() 
test('gets employee role', () => {
    const engineer = new Engineer('Elizabeth', 16, 'liz@gmail.com', 'liz123');

    expect(engineer.getRole()).toEqual("Engineer");
});