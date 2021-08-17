// Module that creates text blocks for the licenses
const { MIT, Apache, GPL, MPL, Unlicense } = require('./licenses');

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache':
      return '[License: Appache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL':
      return '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'MPL':
      return '[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    case 'Unlicense':
      return '[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    case '':
      return '';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MPL':
      return '(https://opensource.org/licenses/MPL-2.0)';
    case 'Unlicense':
      return '(http://unlicense.org/)';
    case '':
      return '';
  }
}
// Function that returns the license section of README
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      return MIT;
    case 'Apache':
      return Apache;
    case 'GPL':
      return GPL;
    case 'MPL':
      return MPL;
    case 'Unlicense':
      return Unlicense;
    case '':
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [!${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ### Deployed link and screenshot (if applicable)
  ${data.deployed}
  ![screenshot](${data.screenshot})

  ## Credits
  ${data.credits}

  ## License 
  [!${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  You can find my GitHub profile at https://github.com/${data.github}
  For any further questions, reach out to me via email at ${data.contact}.
`
}

module.exports = generateMarkdown;
