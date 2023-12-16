// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache)'
  }
  if (license == 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license == 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD)'
  }
  if (license == 'None') {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license !== "None" ? "- [License](#license)" : ""}
  - [Contributions](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ${data.license !== "None" ? "### License" : ""}
  ${data.license !== "None" ? renderLicenseBadge(data.license) : ""}

  ### Contributing
  ${data.contributing}

  ### Tests
  ${data.tests}

  ### Questions
  If you have questions, please reach out to ${data.name} at ${data.email} or visit my GitHub page at [github.com/${data.github}](https://www.github.com/${data.github})


`;
}

module.exports = generateMarkdown;
