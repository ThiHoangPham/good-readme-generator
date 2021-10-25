function generateMarkdown(data) {
    return `
## Project Name: ${data.projecttitle}

## Description:
${data.description}

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Contact Information](#contact-information)

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Credits:
${data.credits}

## Licence:
<a href="https://img.shields.io/badge/License-${data.license}-brightgreen"><img src="https://img.shields.io/badge/License-${data.license}-brightgreen"></a>

## Badges:
<a href="https://img.shields.io/badge/Badges-${data.badges}-orange"><img src="https://img.shields.io/badge/Badges-${data.badges}-orange"></a>

## Test-Instructions:
${data.tests}

## Contact-Information:

[Github Profile](https://github.com/${data.username})

Email: ${data.email}

<p align ="right"><a href="#">↥ back to top</a></p>
    `;
}
module.exports = generateMarkdown;