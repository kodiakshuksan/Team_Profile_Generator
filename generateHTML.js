//Import inquirer
const inquirer = require('inquirer');

//Import FS
const fs = require('fs');



//User Questions to gather info needed to complete HTML blank inputs
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'checkbox',
            message: 'What is your role at the company?',
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
        // {
        //     type: 'input',
        //     name: 'officeId',
        //     message: 'What is your office ID?',
        // },
        // {
        //     type: 'input',
        //     name: 'username',
        //     message: 'Enter your GitHub Username',
        // },
        // {
        //     type: 'input',
        //     name: 'school',
        //     message: 'What school do you go to?',
        // },
    ]);

const generateHTML = (data) =>
    `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
              <title>Document</title>
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <ul class="list-group">
                <li class="list-group-item">Role: ${data.employeeRole}</li>
                <li class="list-group-item">Name: ${data.employeeName}</li>
                <li class="list-group-item">Employee ID: ${data.employeeId}</li>
                <li class="list-group-item">Email: ${data.employeeEmail}</li>
                </ul>
              </div>
            </div>
            </body>
            </html>`;



module.exports = generateHTML;

