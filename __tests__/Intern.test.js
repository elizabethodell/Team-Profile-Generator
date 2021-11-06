const Intern = require('../lib/Intern.js');

//creates an intern object
test('creates an intern object', () => {
    const intern = new Intern('Elizabeth', 16, 'liz@gmail.com', 'VT');

    expect(intern.school).toEqual(expect.any(String));

});

//school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Elizabeth', 16, 'liz@gmail.com', 'VT');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});

//role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Elizabeth', 16, 'liz@gmail.com', 'VT');

    expect(intern.getRole()).toEqual("Intern");
}); 