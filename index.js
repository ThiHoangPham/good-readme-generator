const inquirer = require("inquirer");
const fs = require("fs");
const fileName = 'README.md'
var generateMarkdown = require("./utils/generateMarkdown");
// function to initialize program
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
        message: "Enter Your Github Username Instructions:",
    },
    {
        type: "input",
        name: "credits",
        message: "Enter Your Collaborator Github Username:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Chose Your Projects Licensing Options:",
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
        message: "Chose Your Projects Badge:",
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
    // Create Markdown from data
    const markdown = generateMarkdown(data);
    // Write Markdown file
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize program
function init() {
    // inquirer module
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile(fileName, data)
        })
}

// function call to initialize program
init();