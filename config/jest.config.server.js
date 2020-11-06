const path = require('path')
const config = require('./jest.config.common')

const fromRoot = d => path.join(__dirname, '..', d)

module.exports = {
  ...config,
  displayName: 'server',
  roots: [fromRoot('loaders')],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', fromRoot('loaders'), fromRoot('tests')],
}
