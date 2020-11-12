if (process.env.NODE_ENV === 'production') {
  require('./server-build/start')
} else {
  require('ts-node').register({
    dir: __dirname,
    pretty: true,
    transpileOnly: true,
    ignore: ['/node_modules/, /__tests__/'],
    project: require.resolve('./tsconfig.json'),
  })
  require('./server/start')
}
