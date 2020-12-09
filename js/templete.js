const createReadMeFile = (response) =>{
const {title, description,installation,contributing,userStory,acceptCriteria,licence,img,test,credits,howToContact,email,username} = response;
return`## ${title}

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

${description}

## Installations

${installation}

## Contributing

${contributing}

## User-Story

\`\`\`
${userStory}
\`\`\`

## Acceptance-Criteria

\`\`\`
${acceptCriteria}
\`\`\`

## Licence

[![License](${badges(licence)})](https://opensource.org/licenses/${licence})

## Test

[![image](${img})](${test})

## Credits

${credits}

## Questions
${howToContact}
<br>
-Email: [${email}](mailto:${email})
<br>
-GitHub Username: [${username}](https://github.com/${username}) 
`;
}

badges = (url) =>{

    switch(url) {
        case "Apache-2.0":
            return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";

        case "BSD-3-Clause":
            return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";

        case "gpl-3.0":
            return "https://img.shields.io/badge/License-GPLv3-blue.svg"

        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg"

          case "MPL-2.0":
            return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"

        case "IPL-1.0":
            return "https://img.shields.io/badge/License-IPL%201.0-blue.svg"

        case "EPL-1.0":
            return "https://img.shields.io/badge/License-EPL%201.0-red.svg"
      }
    
} 


module.exports = createReadMeFile;

