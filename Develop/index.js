// Apparently Needs to have the const dependencies
const fs = require("fs");
const inquirer = require("inquirer");
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md"

// array of questions for user
const questions = [
    // title of Project 
    {
        type: "input",
        name: "title",
        message: "What are you going to title your Project?"
    },
    // Description of Project
    {
        type: "input",
        name: "description",
        message: "What is your Project about?"
    },
    // Email Address
    {
        type: "input",
        name: "email",
        message: "Please Enter Your Email Address"
    },
    // Github Address
    {
        type: "input",
        name: "user",
        message: "Please Enter Your Github Username"
    },
    // Installing Dependecies 
    {
        type: "input",
        name: "installation",
        message: "What command do you want to use to install dependencies? ex: npm install"
    },
    // test run
    {
        type: "input",
        name: "testing",
        message: "What command should run the Project test? ex: npm test"
    },
     // Licenses
     // May have to change into Checkbox, as my dumb ass wanted to be special and added so many new Licenses.
    {
        type: "list",
        name: "license",
        message: "What License will your Project use?",
        choices: ["Apache License 2.0", "Boost Software License 1.0", "BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1","GNU General Public License v3.0","Do What F*CK You Want To Public License","ISC","Microsoft Public License","Mozilla Public License",]
    },
    // Add in more later, just in case
    // Also should change the order of these questions soon
];

// function to write README file
function writeToFile(fileName, data) {
    // name README File
    fileName = "custom-README.md"
    // write README process
    fs.writeFile(fileName, data, (err) => {
        // Just in case of an error
        //https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
        if (err) {
            console.log(err);
        }
        // Make sure if it works, ofc
        console.log("It Worked!");
    });
}

// function to initialize program
// either this way or async way
function init() {
    // prompts the user to answer the questions
    inquirer.prompt(questions).then((data) => {
        //writes the answers and puts them down as data.
        writeToFile(fileName, generateMarkdown(data));
    })
};

// function call to initialize program
init();

// need to add Video of my code
// record in VSCode