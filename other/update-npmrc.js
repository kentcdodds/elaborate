// if you think this file is stupid it's because it is
// I just couldn't figure out how to get a sed command that worked on both mac and linux
// something something GNU vs BSD 🤷‍♂️

const fs = require('fs')
const contents = fs.readFileSync('.npmrc').toString()

fs.writeFileSync(
  '.npmrc',
  // eslint-disable-next-line no-template-curly-in-string
  contents.replace('${REMIX_REGISTRY_TOKEN}', process.env.REMIX_REGISTRY_TOKEN),
)
