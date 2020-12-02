// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Test](#test)
  -[User](#user)
  -[Email](#email)
  -[License](#license)

  ## Description
  ${data.description}




`;
}

module.exports = generateMarkdown;
