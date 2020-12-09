const questions = [
    {
        type:"input",
        message: "What is the title of your README file?",
        name: "title",
    },
    {
        type:"editor",
        message: "What is the description of your project? WHEN DONE SAVE AND CLOSE EDITOR",
        name: "description",

    },
    {
        type:"input",
        message: "What installations you need?",
        name: "installation",
    },        
    {
        type:"input",
        message: "how to make contributions?",
        name: "contributing",
    },
    {
        type:"editor",
        message: "What is the user Story? WHEN DONE SAVE AND CLOSE EDITOR",
        name: "userStory",
    },
    {
        type:"editor",
        message: "What is the acceptance criteria? WHEN DONE SAVE AND CLOSE EDITOR",
        name: "acceptCriteria",
    }, 
    {
        type:"input",
        message: "Do you have an image of as example fo your app? please provide link or path",
        name: "img",
    },       

    {
        type:"input",
        message: "Do you have the link of your app to be tested? please provide link as follow: https://mylink.com ",
        name: "test",
    },
    {
        type:"list",
        message: "What licence did you use?",
        choices:
            [
                  "Apache-2.0", 
                  "BSD-3-Clause",
                  "gpl-3.0",
                  "MIT",
                  "MPL-2.0",
                  "IPL-1.0",
                  "EPL-1.0"
            ],
            name: "licence",
    },
    {
        type:"input",
        message: "What are the credits for this project?",
        name: "credits",
    },
    {
        type:"input",
        message: "Instruction to contact you?",
        name: "howToContact",
    },
    {
        type:"input",
        message: "What is your Email?",
        name: "email",
    },
    {
        type:"input",
        message: "What is your Git Hub username?",
        name: "username",
    },
]

module.exports = questions;