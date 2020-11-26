//require `inquirer and fs to index js
const inquirer = require ('inquirer');
const fs = require ('fs');

//ask user detail about readme

inquirer
    .prompt([
        {
            type:"input",
            message: "What is the title of your README file?",
            name: "title",
        },        {
            type:"input",
            message: "What is the task of this project?",
            name: "task",
        },        {
            type:"input",
            message: "What is the user story?",
            name: "userStory",
        },
        {
            type:"input",
            message: "What is the acceptance criteria",
            name: "acceptCriteria",
        },        
        {
            type:"input",
            message: "What was your process?",
            name: "process",
        },
        {
            type:"input",
            message: "Do you have Work example? please provide link",
            name: "workLink",
        },
        {
            type:"list",
            message: "What licence did you use?",
            choices:
            [
                  "Apache License 2.0", 
                  "BSD 3-Clause \"New\" or \"Revised\" license",
                  "GNU General Public License (GPL)",
                  "MIT license",
                  "Mozilla Public License 2.0",
                  "Common Development and Distribution License",
                  "Eclipse Public License version 2.0"
            ],
            name: "licence",
                 
        },
        {
            type:"input",
            message: "What your link to your repo?",
            name: "linkRepo",

        },

])
.then( (response) =>{
let readME = 
`## ${response.title}

- [Task](#Task)
- [User Expectation](#User-Expectation)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Process](#Process)
- [Work Examples](#Work-Examples)
- [Links](#Links)

## Task

${response.task}

## User-Story

\`\`\`
${response.userStory}
\`\`\`

## Acceptance-Criteria

\`\`\`
${response.acceptCriteria}
\`\`\`

## Process

${response.process}

## Work-Examples

![Work Example](${response.workLink})

## Licence

![Licence](https://opensource.org/licenses/${response.licence})

## Links

- Repo
${response.linkRepo}
`;

fs.appendFile('README.md', readME, (err) =>
  err ? console.error(err) : console.log('Success!'));
});