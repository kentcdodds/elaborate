const path = require('path')

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./server-build/start')
} else {
  require('ts-node').register({
    dir: path.resolve('server'),
    pretty: true,
    transpileOnly: true,
    ignore: ['/node_modules/, /__tests__/'],
    project: require.resolve('./server/tsconfig.json'),
  })
  module.exports = require('./server/start')
}
