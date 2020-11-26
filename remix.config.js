module.exports = {
  appDirectory: './app',
  dataDirectory:
    process.env.NODE_ENV === 'production'
      ? './server-build/data'
      : './server/data',
  serverBuildDirectory: './server-build/remix',
  browserBuildDirectory: './public/build',
  publicPath: '/build/',
  devServerPort: 8002,
}
