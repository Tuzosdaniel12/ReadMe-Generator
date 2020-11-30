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
                  "lgpl-license",
                  "MIT",
                  "MPL-2.0",
                  "CDDL-1.0",
                  "EPL-2.0"
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

])
.then( (response) =>{
const readME = 
`## ${response.title}

- [Description](#Description)
- [Installations](#Installations)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Test](#Test)
- [Credits](#Credits)
- [Questions](#Questions)

## Description

${response.description}

## Installations

${response.installation}

## Contributing

${response.contributing}

## User-Story

\`\`\`
${response.userStory}
\`\`\`

## Acceptance-Criteria

\`\`\`
${response.acceptCriteria}
\`\`\`

## Licence

-[${response.licence}](https://opensource.org/licenses/${response.licence})

## Test

-[![image](${response.img})](${response.test})

## Credits

${response.credits}

## Questions
${response.howToContact}
<br>
-Email: [${response.email}](mailto:${response.email})
<br>
-GitHub Username: [${response.username}](https://github.com/${response.username}) 
`;

fs.writeFile('README.md', readME, (err) =>
  err ? console.error(err) : console.log('Success!'));
});