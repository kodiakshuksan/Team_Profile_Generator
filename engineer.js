const inquirer = require('inquirer');

//Import FS
const fs = require('fs');

const generateHTML = require('./generateHTML');
const info = require('./index');
const workforce = require('./employee');

function Engineer(gitHub) {
    // employeeName: 'Eric',
    // employeeId: 28,
    // employeeEmail: 'Full@a.com',
    this.gitHub = gitHub;
};



module.exports = engineer;



// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

// const massHysteria = (dogs, cats) => {
//     if (dogs.raining === true && cats.raining === true) {
//       console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
//     }
//   };

//   massHysteria(dogs, cats);