// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please provide instructions for use.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Please select a license.',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    message: 'Please list any contributors.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please provide any tests for your application.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Please provide any questions you may have.',
    name: 'questions',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
