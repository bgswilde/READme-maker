// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const askQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project, as you would want it to read in your READme.md file. (Required)',
      validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'install',
      message: 'What steps are required to install your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: "What instructions would you like to give for the usage of this application?",
    },
    {
      type: 'input',
      name: 'deployed',
      message: 'What is your deployed application link? (If none, leave blank)',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: "If you have a screenshot, include the link here. (relative path works best)",
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who would you like credit in the development of this project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use for this project?',
      choices: [ 'MIT', 'Apache', 'Unlicense', 'GPL', 'MPL' ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What guidelines would you like to give for contributing?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What instructions would you like to give for tests?'
    },
    {
      type: 'input',
      name: 'contact',
      message: 'If anybody should have questions, please enter an email address or alternate contact method here:'
    },
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
