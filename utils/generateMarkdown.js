const { MIT, Apache, GPL, MPL, Unlicense } = require('./utils/licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      badge = '[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Apache':
      badge = '[License: Appache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      break;
    case 'GPL':
      badge = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'MPL':
      badge = '[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
      break;
    case 'Unlicense':
      badge = '[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      licenseLink = '(https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MPL':
      licenseLink = '(https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Unlicense':
      licenseLink = '(http://unlicense.org/)';
      break;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT':
      licenseText = MIT;
      break;
    case 'Apache':
      licenseText = Apache;
      break;
    case 'GPL':
      licenseText = GPL;
      break;
    case 'MPL':
      licenseText = MPL;
      break;
    case 'Unlicense':
        licenseText = Unlicense;
        break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](##Usage)
  * [Credits](##Credits)
  * [License](##License)
  * [Contributing] (##Contributing)
  * [Tests] (##Tests)
  * [Questions](#Questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ### Deployed link and screenshot (if applicable)
  ${data.deployed}
  ${data.screenshot}
  ## Credits
  ${data.credits}
  ## License
  [!${renderLicenseBadge(data.license).badge}]${renderLicenseLink(data.license).licenseLink}
  ${renderLicenseSection(data.license).licenseText}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please contact me here:
  ${data.contact}
`
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection }
