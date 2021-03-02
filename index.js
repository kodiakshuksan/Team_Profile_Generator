const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const employeeInfo = require('./employee.js');
//const manager = require('./manager');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'checkbox',
      message: 'What is your role?',
      name: 'employeeRole',
      choices: ['employee', 'manager', 'engineer', 'intern'],
    },
    {
      type: 'input',
      name: 'employeeName',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'What is your email?',
    },
    //   {
    //     type: 'input',
    //     name: 'officeNumber',
    //     message: 'What is your office ID?',
    //   },
    //   {
    //     type: 'input',
    //     name: 'username',
    //     message: 'Enter your GitHub Username',
    //   },
    //   {
    //     type: 'input',
    //     name: 'school',
    //     message: 'What school do you go to?',
    //   },
  ]);



const init = () => {
  promptUser().then((answers) => {
    try {
      const html = generateHTML(answers);
      fs.writeFileSync('index.html', html);
      console.log('Successfully wrote to index.html');
    } catch (error) {
      console.log(error);
    }
  });
};

init();