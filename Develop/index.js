// Apparently Needs to have the const dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = ("./api");

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
        name: "installing",
        message: "What command do you want to use to install dependencies? ex: npm install"
    },
    // test run
    {
        type: "input",
        name: "testing",
        message: "What command should run the Project test? ex: npm test"
    },
     // Licenses
    {
        type: "list",
        name: "license",
        message: "What License will your Project use?",
        choices: ["Apache License 2.0", "Boost Software License 1.0", "BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1","GNU General Public License v3.0","Do What F*CK You Want To Public License","ISC","Microsoft Public License","Mozilla Public License",]
    },
    // Add in more later, just in case
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
function init() {
    // prompts the user to answer the questions
    inquirer.prompt(questions).then((response) => {
        //writes the answers and puts them down as responses.
        writeToFile(fileName, generateMarkdown(response));
    })

}

// function call to initialize program
init();
