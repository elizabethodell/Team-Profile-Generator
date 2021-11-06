const { createTestScheduler } = require('@jest/core');
const Manager = require('../lib/Manager.js');

//creates a manager object
test('creates a manager object', () => {
    const manager = new Manager('Elizabeth', 16, 'liz@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));

});

//role from getRole()
test('gets role of employee', () => {
    const manager = new Manager ('Elizabeth', 16, 'liz@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
})