// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let badgeURL;
  let licenseURL;
  switch(data.license) {

    case 'None':
    badgeURL = "https://img.shields.io/badge/license-Unlicense-blue.svg";
    licenseURL = "http://unlicense.org/";
    break;

    case 'GPL v3':
    badgeURL = "https://img.shields.io/badge/License-GPLv3-blue.svg";
    licenseURL = "https://www.gnu.org/licenses/gpl-3.0";
    break;

    case 'MIT':
    badgeURL = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    licenseURL = "https://opensource.org/licenses/MIT";
    break;

    case 'Apache':
    badgeURL = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    licenseURL = "https://opensource.org/licenses/Apache-2.0";
    break;

  }

  return `# ${data.title}

  [![license](${badgeURL})](${licenseURL})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Licensed under the ${data.license} license.

  ## Contact 
  Contact me via GitHub [${data.username}](https://github.com/${data.username}) or [email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;





