// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
          {
            type: 'input',
            message: 'What is the filename?',
            name: 'fileName',
          },
          {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'Project description?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'How to install?',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'How to use?',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'github',
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          },
          {
            type: 'list',
            message: 'Would you like to add a license?',
            name: 'license',
            choices: ['None', 'GPL V3','MIT', 'Apache']
          },

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
  console.log(fileName);
  let markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, err => {
      if (err) {
        return console.log(err);
      }
      console.log("README has been generated in" +fileName);
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
      .prompt(questions)
      .then(data=> writeToFile(data.fileName + ".md", data));

}

// Function call to initialize app
init();