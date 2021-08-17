// Packages and modules needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = [
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
      message: 'Please provide a description of your project. (Required)',
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
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Please enter an email address where further questions should be directed.'
    },
]

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    // if there's an error, console log it and return
    if (err) {
      console.log(err);
      return;
    // display a message confirming the creation of the file
    } else {
      console.log('Success! Your README has been created in the dist folder!')
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(data => {
      console.log(data);
      return writeToFile('./dist/README.md', generateMarkdown(data));
  });
}

// Function call to initialize app
init();
