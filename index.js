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
        },
        {
            type:"input",
            message: "What is the description of your project?",
            name: "description",

        },
        {
            type:"input",
            message: "What installations you need?",
            name: "installation",
        },        {
            type:"input",
            message: "how to make contributions?",
            name: "contributions",
        },
        {
            type:"input",
            message: "What was your process?",
            name: "userStory",
        },
        {
            type:"input",
            message: "What is the acceptance criteria",
            name: "acceptCriteria",
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
            name: "credits",

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

- [Description](#Description)
- [Installations](#Installations)
- [Contributions](#Contributions)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Licence](#Licence)
- [Work Examples](#Work-Examples)
- [Credits](#Credits)
- [Links](#Links)

## Description

${response.description}

## Installations

${response.installations}

## User-Story

\`\`\`
${response.userStory}
\`\`\`

## Acceptance-Criteria

\`\`\`
${response.acceptCriteria}
\`\`\`

## Licence

![Licence](https://opensource.org/licenses/${response.licence})

## Work-Examples

![Work Example](${response.workLink})

## Credits

${response.credits}

## Links

- Repo
${response.linkRepo}
`;

fs.appendFile('README.md', readME, (err) =>
  err ? console.error(err) : console.log('Success!'));
});