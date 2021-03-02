const inquirer = require('inquirer');

//Import FS
const fs = require('fs');

const generateHTML = require('./generateHTML');
const info = require('./index');
const workforce = require('./employee');

function Manager(officeNumber) {
    // employeeName: 'Eric',
    // employeeId: 28,
    // employeeEmail: 'Full@a.com',
    this.officeNumber = officeNumber;
};



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


// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

// const massHysteria = (dogs, cats) => {
//     if (dogs.raining === true && cats.raining === true) {
//       console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//     }
//   };

//   massHysteria(dogs, cats);



//module.exports = manager;

 // If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

// const massHysteria = (dogs, cats) => {
//     if (dogs.raining === true && cats.raining === true) {
//       console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//     }
//   };

//   massHysteria(dogs, cats);
