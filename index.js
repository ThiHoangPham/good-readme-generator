
const inquirer = require("inquirer");
const fs = require("fs");
const fileName = 'README.md'
var generateMarkdown = require("./utils/generateMarkdown");
// function questions to get sections informations
const questions = [
    {
        type: "input",
        name: "projecttitle",
        message: "Enter Your Projects Name:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter Your Projects Description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Your Projects Installation Description:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Your Github Username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Your Email:",
    },
    {
        type: "input",
        name: "credits",
        message: "Enter Your Collaborator Github Username:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose Your Projects Licensing Options:",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "checkbox",
        name: "badges",
        message: "Choose Your Projects Badge:",
        choices: [
            "HTML",
            "CSS",
            "JavaScipt",
            "Node JS",
            "None"
        ]
    },
    {
        type: "input",
        name: "features",
        message: "List Your Projects Features:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter Your Project Contribution Guildelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter Your Tests Instructions:",
    }
]
// function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile(fileName, data)
        })
}
init();