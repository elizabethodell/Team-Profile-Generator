const Employee = require('../lib/Employee.js');

//creates a employee object
test('creates an employee object', () => {
    const employee = new Employee('Elizabeth', 16, 'liz@gmail.com'); //(name, id, email)

    expect(employee.name).toEqual(expect.any(String)); 
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('Elizabeth', 16, 'liz@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//gets id from getId() 
test('gets an employee id', () => {
    const employee = new Employee('Elizabeth', 16, 'liz@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Elizabeth', 16, 'liz@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String)); //
});

//gets role from getRole()
test('gets employees role', () => {
    const employee = new Employee('Elizabeth', 16, 'liz@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 