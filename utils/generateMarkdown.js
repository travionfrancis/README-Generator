// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Test](#testing)
  -[User](#user)
  -[Email](#email)
  -[License](#license)

  ## Description
  ${data.description}

  ## Installation Method
  ${data.installation}

  ## Testing The Generator
  ${data.testing}

  ## Github Username
  My Github Profile and Repos [@${data.user}]("https://www.github.com/${data.user})

  ## Email Address
  You can reach me at ${data.email}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
