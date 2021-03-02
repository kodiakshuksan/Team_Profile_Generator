//  function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');

const generateHTML = require('./generateHTML');
const info = require('./index');
const boss = require('./manager');
// const employee = {
//     name: 'Eric',
//     id: 28,
//     email: 'Full@a.com',
// };

// Array.prototype.forEach()
// const myArray = [2, 4, 6, 8];

// myArray.forEach((num) => console.log(num));

// // String.prototype.toLowerCase()
// const person = {
//   name: 'Eric',
//   age: 28,
//   occupation: 'Full-Stack Web Developer',
// };

// console.log(person.occupation.toLowerCase());

// Prototype methods on constructor function
function Worker(employeeName, employeeId, employeeEmail) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
};

const person = new Worker('Jenny', '1978', 'k@k');

Worker.prototype.getEmployeeName = function () {
    console.log(`${this.employeeName}`);
};

Worker.prototype.getEmployeeId = function () {
    console.log(`${this.employeeId}`);
};

Worker.prototype.getEmployeeEmail = function () {
    console.log(`${this.employeeEmail}`);
};

Worker.prototype.getEmployeeRole = function () {
    console.log(`${this.employeeRole}`);
};



// superman.logInfo();
// // TODO: Add a comment describing what kind of function this is
// function Character(name, type, age, strength, hitpoints) {
//     this.name = name;
//     this.type = type;
//     this.age = age;
//     this.strength = strength;
//     this.hitpoints = hitpoints;
// }

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// Character.prototype.printStats = function () {
//     console.log(
//         `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
//     );
//     console.log('\n-------------\n');
// };

// TODO: Add a comment describing the functionality of this method
// Character.prototype.isAlive = function () {
//     if (this.hitpoints > 0) {
//         console.log(`${this.name} is still alive!`);
//         console.log('\n-------------\n');
//         return true;
//     }
//     console.log(`${this.name} has died!`);
//     return false;
// };



// function Employee(employeeRole, employeeName, id, email) {
//     this.employeeRole = employeeRole;
//     this.employeeName = employeeName;
//     this.id = id;
//     this.email = email;
//     this.getRole = () => {
//         if (employeeRole === employee) {
//             console.log(this.getRole);
//         }
//     }



// function renderLicenseBadge(licenseUsed) {

//     if (licenseUsed == "MIT License") {
//         badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
//     } else if (licenseUsed == "Apache License") {
//         badge = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
//     } else if (licenseUsed == "ISC License") {
//         badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
//     }
//     else {
//         return "";
//     }
//     return badge;
// };



// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// const employee = new Employee(true, 'employee');
// const manager = new Employee(false, 'manager');
// const engineer = new Employee(false, 'engineer');
// const intern = new Employee(false, 'intern');

// Calling dogs and cats makeNoise methods
// employee.getRole();
// manager.getRole();
// engineer.getRole();
// intern.getRole();




// module.exports = {
//     getEmployeeName,
//     getEmployeeRole,
//     getEmployeeEmail,
//     getEmployeeId
// };



// // Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
// function Animal(raining, noise) {
//     this.raining = raining;
//     this.noise = noise;
//     this.makeNoise = () => {
//         if (this.raining === true) {
//             console.log(this.noise);
//         }
//     };
// }

// // Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// const dogs = new Animal(true, 'Woof!');
// const cats = new Animal(false, 'Meow!');

// // Calling dogs and cats makeNoise methods
// dogs.makeNoise();
// cats.makeNoise();


